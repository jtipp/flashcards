const data = [
  ["Food", "Jídlo"],
  ["Sea", "Moře"],
  ["Computer", "Počítač"],
];

const title = document.getElementsByTagName("h1")[0];
title.textContent += `(${data.length})`;

const app = document.getElementById("app");

const listEl = document.createElement("div");
listEl.setAttribute("class", "cards");

var currentCardIndex = 0;

const nextButtonEl = document.createElement("button");
nextButtonEl.textContent = "Next card →";
nextButtonEl.addEventListener("click", () => {
  currentCardIndex++;
  if (currentCardIndex > data.length - 1) {
    currentCardIndex = 0;
  }

  const cardEls = document.querySelectorAll(".card");

  cardEls.forEach((el) => el.setAttribute("class", "card hidden"));

  cardEls[currentCardIndex].setAttribute("class", "card visible");
});

data.forEach((item) => {
  const q = item[0];
  const a = item[1];

  const itemEl = document.createElement("div");
  itemEl.setAttribute("class", "card hidden");
  const questionEl = document.createElement("div");
  questionEl.setAttribute("class", "question");
  const answerEl = document.createElement("div");
  answerEl.setAttribute("class", "answer hidden");

  const buttonEl = document.createElement("button");
  buttonEl.textContent = "Show";
  buttonEl.isHidden = true;
  buttonEl.addEventListener("click", () => {
    if (buttonEl.isHidden) {
      buttonEl.textContent = "Hide";
      answerEl.setAttribute("class", "answer visible");
    } else {
      buttonEl.textContent = "Show";
      answerEl.setAttribute("class", "answer hidden");
    }
    buttonEl.isHidden = !buttonEl.isHidden;
  });

  questionEl.textContent = q;
  answerEl.textContent = "= " + a;

  itemEl.appendChild(buttonEl);
  itemEl.appendChild(questionEl);
  itemEl.appendChild(answerEl);

  listEl.appendChild(itemEl);
});

app.appendChild(listEl);
app.appendChild(nextButtonEl);

const firstCardEl = document.querySelector(".card");
firstCardEl.setAttribute("class", "card visible");
