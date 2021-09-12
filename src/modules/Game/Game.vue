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

    <button slot="actions">
      Reset
    </button>
    <button slot="actions" :disabled="hasDealt" @click="deal">
      Deal
    </button>
  </board>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { CardSet } from '@/modules/Card/CardSet';
import { Card } from '@/modules/Card/Card';
import { Suit } from '@/modules/Card/Suit';
import { Face } from '@/modules/Card/Face';
import PlayingCard from '@/modules/Card/components/PlayingCard.vue';
import Board from './components/Board.vue';

@Component({
  name: 'Game',
  components: {
    Board,
    PlayingCard,
  },
})

export default class Game extends Vue {
  deck: CardSet = new CardSet();

  hasDealt = false;

  /* Lifecycle */
  beforeMount(): void {
    this.createDeck();
  }

  /* Methods */
  createDeck(): void {
    const deck: CardSet = new CardSet();

    Object.values(Suit).forEach((s: string) => {
      const suit: Suit = s as Suit;

      Object.values(Face).forEach((f: string) => {
        const face: Face = f as Face;

        deck.addCard(new Card(face, suit));
      });
    });

    this.deck = deck;
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

  deal(): void {
    this.shuffleDeck();

    this.hasDealt = true;
  }
}
</script>
