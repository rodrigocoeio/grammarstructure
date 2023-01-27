window.shuffleArray = function (array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

window.sortByKey = (array, key, order = "asc") => {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];

    switch (order) {
      case "desc":
        return x > y ? -1 : x < y ? 1 : 0;
      case "asc":
        return x < y ? -1 : x > y ? 1 : 0;
    }

    return x < y ? -1 : x > y ? 1 : 0;
  });
};

window.playAudio = (audio_name) => {
  var audio = new Audio(audio_name);
  audio.play();
  return audio;
};
