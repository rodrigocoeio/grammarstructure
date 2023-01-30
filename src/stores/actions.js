export default {
  startGame() {
    if (
      !this.currentCategory ||
      !this.currentCategory.cards ||
      this.currentCategory.cards.length === 0
    ) {
      alert("Choose a Category or Subcategory");
      $("#categoryField").trigger("focus");
      return false;
    }

    this.game.started = true;
    this.game.opened = false;
    this.game.cardIndex = 0;
    this.game.itemsPlayed = [];
    this.game.cardPlayed = false;
  },

  quitGame() {
    this.game.started = false;
    this.game.category = false;
  },

  selectCategory(category) {
    if (category && category.cards) {
      switch (this.game.cardSorting) {
        case "alpha":
          category.cards = sortByKey(category.cards, "name", "asc");
          break;

        case "shuffle":
          category.cards = shuffleArray(category.cards);
          break;
      }

      this.game.category = category;
    }
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

    if(!this.card.items.includes(item))
      return false;

    const store = this;
    const audioFile = "/cards/" + this.currentCategory.name + "/" + item.audio;

    const audio = playAudio(audioFile);
    audio.onended = function () {
      store.game.itemsPlayed.push(item.audio);

      if(store.isAllItemsPlayed){
        playAudio('/audios/right.mp3');
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
  }
};
