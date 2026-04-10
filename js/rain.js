var makeItRain = function () {
  //clear rain
  $(".rain").empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //random number between 98 and 1
    var randomHun = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    //random number between 5 and 2
    var randomFive = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    //increment
    increment += randomFive;
    //add in a new raindrop
    drops +=
      '<div class="drop" style="left: ' +
      increment +
      "%; bottom: " +
      (randomFive + randomFive - 1 + 100) +
      "%; animation-delay: 0." +
      randomHun +
      "s; animation-duration: 0.5" +
      randomHun +
      's;"><div class="stem" style="animation-delay: 0.' +
      randomHun +
      "s; animation-duration: 0.5" +
      randomHun +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randomHun +
      "s; animation-duration: 0.5" +
      randomHun +
      's;"></div></div>';
    backDrops +=
      '<div class="drop" style="right: ' +
      increment +
      "%; bottom: " +
      (randomFive + randomFive - 1 + 100) +
      "%; animation-delay: 0." +
      randomHun +
      "s; animation-duration: 0.5" +
      randomHun +
      's;"><div class="stem" style="animation-delay: 0.' +
      randomHun +
      "s; animation-duration: 0.5" +
      randomHun +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randomHun +
      "s; animation-duration: 0.5" +
      randomHun +
      's;"></div></div>';
  }

  $(".rain.frontRow").append(drops);
  $(".rain.backRow").append(backDrops);
};

makeItRain();
