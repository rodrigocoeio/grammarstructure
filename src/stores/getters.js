export default {
  currentCategory() {
    return this.game.category;
  },

  categoryName() {
    return this.currentCategory ? this.currentCategory.name : "";
  },

  cards() {
    return this.currentCategory ? this.currentCategory.cards : [];
  },

  card() {
    const card_index = this.game.cardIndex;

    return this.currentCategory && this.currentCategory.cards[card_index]
      ? this.currentCategory.cards[card_index]
      : false;
  },

  cardItems() {
    return this.card.items;
  },

  image() {
    return this.card.image;
  },

  cardsNumber() {
    return this.currentCategory ? this.currentCategory.cards.length : 0;
  },

  isAllItemsPlayed() {
    const store = this;
    let allPlayed = true;

    this.cardItems.forEach((item) => {
      if(!store.game.itemsPlayed.includes(item.audio))
      allPlayed = false;
    });

    return allPlayed;
  },
};
