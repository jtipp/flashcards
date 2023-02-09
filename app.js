const data = [
  ["Food", "Jídlo"],
  ["Sea", "Moře"],
];

const app = document.getElementById("app");

const listEl = document.createElement("div");
listEl.setAttribute("class", "cards");

data.forEach((item) => {
  const q = item[0];
  const a = item[1];

  const itemEl = document.createElement("div");
  itemEl.setAttribute("class", "card");
  const questionEl = document.createElement("div");
  questionEl.setAttribute("class", "question");
  const answerEl = document.createElement("div");
  answerEl.setAttribute("class", "answer");

  const buttonEl = document.createElement("button");
  buttonEl.textContent = "Show";
  buttonEl.isHidden = true;
  buttonEl.addEventListener("click", () => {
    console.log(buttonEl.isHidden);
    if (buttonEl.isHidden) {
      buttonEl.textContent = "Hide";
      answerEl.textContent = "= " + a;
    } else {
      buttonEl.textContent = "Show";
      answerEl.textContent = "";
    }
    buttonEl.isHidden = !buttonEl.isHidden;
  });

  questionEl.textContent = q;

  itemEl.appendChild(buttonEl);
  itemEl.appendChild(questionEl);
  itemEl.appendChild(answerEl);

  listEl.appendChild(itemEl);
});

app.appendChild(listEl);
