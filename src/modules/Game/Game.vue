<template>
  <board>
    <template slot="deck">
      <playing-card
        v-for="card in deck.getCards()"
        :key="`${card}`"
        :card="card"
        :stacked="!hasDealt"
      />
    </template>

    <player-hand
      v-for="(player, i) in players"
      :key="player.getName()"
      :slot="`player-${i + 1}`"
      :player="player"
      :vertical="i % 2 === 1"
    />

    <app-button slot="actions" :disabled="hasDealt" @click="deal">
      Deal
    </app-button>
    <app-button slot="actions" @click="resetGame">
      Reset
    </app-button>
  </board>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { wait } from '@/lib/wait';

import { CardSet } from '@/modules/Card/CardSet';
import { Card } from '@/modules/Card/Card';
import { Suit, suits } from '@/modules/Card/Suit';
import { Face, faces } from '@/modules/Card/Face';
import PlayingCard from '@/modules/Card/components/PlayingCard.vue';

import { Player } from '@/modules/Player/Player';
import PlayerHand from '@/modules/Player/components/PlayerHand.vue';

import AppButton from '@/components/AppButton.vue';
import Board from './components/Board.vue';

@Component({
  name: 'Game',
  components: {
    Board,
    AppButton,
    PlayingCard,
    PlayerHand,
  },
})

export default class Game extends Vue {
  deck: CardSet = new CardSet();

  players: Player[] = [];

  hasDealt = false;

  dealDelay = 50;

  /* Lifecycle */
  beforeMount(): void {
    this.createDeck();
    this.createPlayers();
  }

  /* Methods */
  createDeck(): void {
    const deck: CardSet = new CardSet();

    suits.forEach((s: string) => {
      const suit: Suit = s as Suit;

      faces.forEach((f: string) => {
        const face: Face = f as Face;

        deck.addCard(new Card(face, suit));
      });
    });

    this.deck = deck;
  }

  createPlayers(): void {
    this.players = ['North', 'East', 'South', 'West'].map((name: string) => new Player(name));
  }

  resetGame(): void {
    this.players.forEach((player: Player) => {
      this.deck.addCards(player.takeCards());
    });

    this.hasDealt = false;
  }

  shuffleDeck(): void {
    const shuffled = [...this.deck.getCards()];

    for (let i = 0; i < shuffled.length - 1; i += 1) {
      // Select random position after current index
      const j = i + Math.floor(Math.random() * (shuffled.length - i));

      // Swap current position with randomly chosen one
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    this.deck.setCards(shuffled);
  }

  async deal(): Promise<void> {
    this.shuffleDeck();

    let i = 0;

    // Loop through deck, take card, and give to next player
    while (this.deck.getSize() > 0) {
      const player = this.players[i % this.players.length];
      const card = this.deck.popCard();

      if (card) {
        player.giveCard(card);
      }

      i += 1;

      if (this.dealDelay) {
        await wait(this.dealDelay); // eslint-disable-line no-await-in-loop
      }
    }

    this.hasDealt = true;
  }
}
</script>
