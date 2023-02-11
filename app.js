const data = [
  ["Food", "Jídlo"],
  ["Sea", "Moře"],
  ["Computer", "Počítač"],
];

const title = document.querySelector("h1");
title.textContent += `(${data.length})`;

const app = document.getElementById("app");

const listEl = document.createElement("div");
listEl.classList.add("cards");

let currentCardIndex = 0;

const nextButtonEl = document.createElement("button");
nextButtonEl.textContent = "Next card →";
nextButtonEl.addEventListener("click", () => {
  currentCardIndex = (currentCardIndex + 1) % data.length;

  const cardEls = document.querySelectorAll(".card");

  cardEls.forEach((el) => el.classList.remove("visible"));
  cardEls[currentCardIndex].classList.add("visible");
});

data.forEach((item, number) => {
  const q = item[0];
  const a = item[1];

  const itemEl = document.createElement("div");
  itemEl.classList.add("card", "hidden");

  const cardNumberEl = document.createElement("div");
  cardNumberEl.classList.add("number");
  cardNumberEl.textContent = `#${number + 1}`;

  const questionEl = document.createElement("div");
  questionEl.classList.add("question");
  const answerEl = document.createElement("div");
  answerEl.classList.add("answer", "hidden");

  const buttonEl = document.createElement("button");
  buttonEl.textContent = "Show";
  buttonEl.addEventListener("click", () => {
    answerEl.classList.toggle("visible");
    buttonEl.textContent = answerEl.classList.contains("visible")
      ? "Hide"
      : "Show";
  });

  questionEl.textContent = q;
  answerEl.textContent = "= " + a;

  itemEl.append(questionEl, answerEl, buttonEl, cardNumberEl);
  listEl.append(itemEl);
});

app.append(listEl, nextButtonEl);

const firstCardEl = document.querySelector(".card");
firstCardEl.classList.add("visible");
