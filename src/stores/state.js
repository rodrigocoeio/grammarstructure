import categories from "$/categories.js";

export default {
  game: {
    started: false,
    category: false,
    cardIndex: 0,
    cardSorting: "alpha",
    itemsPlayed: [],
    audio: false,
    cardPlayed: false
  },

  configs: {
    sound: true
  },

  categories
};
