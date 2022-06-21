document.querySelector("#filter-coding").addEventListener("click", showCoding);
document
  .querySelector("#filter-marketing")
  .addEventListener("click", showMarketing);
document.querySelector("#filter-design").addEventListener("click", showDesign);

function showCoding() {
  hideAll();

  if (!btnIsSelected("#filter-coding")) {
    document.querySelector("#filter-coding").classList.add("selected");
    document.querySelector("#filter-marketing").classList.remove("selected");
    document.querySelector("#filter-design").classList.remove("selected");

    var codingCards = document.querySelectorAll(".cards-dev");
    for (var i = 0; i < codingCards.length; i++) {
      codingCards[i].style.display = "inline-block";
    }
  } else {
    document.querySelector("#filter-coding").classList.remove("selected");
    showAll();
  }
}

function showMarketing() {
  hideAll();

  if (!btnIsSelected("#filter-marketing")) {
    document.querySelector("#filter-marketing").classList.add("selected");
    document.querySelector("#filter-coding").classList.remove("selected");
    document.querySelector("#filter-design").classList.remove("selected");

    var marketingCards = document.querySelectorAll(".cards-marketing");
    for (var i = 0; i < marketingCards.length; i++) {
      marketingCards[i].style.display = "inline-block";
    }
  } else {
    document.querySelector("#filter-marketing").classList.remove("selected");
    showAll();
  }
}

function showDesign() {
  hideAll();

  if (!btnIsSelected("#filter-design")) {
    document.querySelector("#filter-design").classList.add("selected");
    document.querySelector("#filter-coding").classList.remove("selected");
    document.querySelector("#filter-marketing").classList.remove("selected");
    var designCards = document.querySelectorAll(".cards-design");
    for (var i = 0; i < designCards.length; i++) {
      designCards[i].style.display = "inline-block";
    }
  } else {
    document.querySelector("#filter-design").classList.remove("selected");
    showAll();
  }
}

function btnIsSelected(btn) {
  return document.querySelector(btn).classList.contains("selected");
}

function hideAll() {
  var cards = document.querySelectorAll(".all-cards");
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
}

function showAll() {
  var cards = document.querySelectorAll(".all-cards");
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "inline-block";
  }
}