export default {
  startGame() {
    if (
      !this.currentCategory ||
      !this.currentCategory.cards ||
      this.currentCategory.cards.length === 0
    ) {
      this.game.pleaseSelectCategory = true;
      return false;
    }

    this.game.started = true;
    this.game.opened = false;
    this.game.cardIndex = 0;
    this.game.itemsPlayed = [];
    this.game.cardPlayed = false;
    this.game.category.cards = this.shuffleCards(this.game.category.cards);
  },

  quitGame() {
    this.game.started = false;
  },

  async loadCategories() {
    try {
      const categoriesJson = await fetch("/categories.json");
      this.categories = await categoriesJson.json();
    } catch (e) {
      //console.error('Failed loading categories.json!');
    }
  },

  selectCategory(category) {
    if (category && category.cards) {
      category.cards = this.shuffleCards(category.cards);
      this.game.pleaseSelectCategory = false;
      this.game.category = category;
    }
  },

  shuffleCards(cards) {
    switch (this.game.cardSorting) {
      case "alpha":
        cards = sortByKey(cards, "name", "asc");
        break;

      case "shuffle":
        cards = shuffleArray(cards);
        break;
    }

    return cards;
  },

  nextCard() {
    if (this.game.cardIndex + 1 < this.cardsNumber) {
      console.log("Next Card");

      this.game.cardIndex++;
      this.game.itemsPlayed = [];
      this.game.cardPlayed = false;
    }
  },

  previousCard() {
    if (this.game.cardIndex > 0) {
      console.log("Previous Card");

      this.game.cardIndex--;
      this.game.itemsPlayed = [];
      this.game.cardPlayed = false;
    }
  },

  playItem(item) {
    if (this.game.audio) {
      this.game.audio.pause();
      this.game.audio = false;
    }

    if (!this.card.items.includes(item)) return false;

    const store = this;
    const audioFile = "/cards/" + this.currentCategory.name + "/" + item.audio;

    const audio = playAudio(audioFile);
    audio.onended = function () {
      store.game.itemsPlayed.push(item.audio);

      if (store.isAllItemsPlayed) {
        playAudio("/audios/right.mp3");
      }
    };
  },

  playCard() {
    if (this.game.audio) {
      this.game.audio.pause();
      this.game.audio = false;
    }

    if (!this.card.audio) return false;

    const store = this;
    const audioFile =
      "/cards/" + this.currentCategory.name + "/" + this.card.audio;

    this.game.cardPlayed = true;
    this.game.audio = playAudio(audioFile);
    this.game.audio.onended = function () {
      store.game.audio = false;
    };
  },

  stopCard() {
    if (this.game.audio) {
      this.game.audio.pause();
      this.game.audio = false;
    }
  },
};
