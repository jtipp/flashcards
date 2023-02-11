class App {
  constructor(data) {
    this.data = data;
    this.title = document.querySelector("h1");
    this.app = document.getElementById("app");
    this.listEl = document.createElement("div");
    this.listEl.classList.add("cards");
    this.currentCardIndex = 0;
    this.nextButtonEl = document.createElement("button");
    this.nextButtonEl.textContent = "Next card →";
  }

  run() {
    this.title.textContent += `(${this.data.length})`;

    this.nextButtonEl.addEventListener("click", () => this.showNextCard());

    this.data.forEach((item, number) => {
      this.createCard(item, number);
    });

    this.app.appendChild(this.listEl);
    this.app.appendChild(this.nextButtonEl);

    this.app.querySelector(".card").classList.remove("hidden");
  }

  createCard(item, number) {
    const [q, a] = item;

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
    buttonEl.addEventListener("click", () =>
      this.toggleCard(answerEl, buttonEl)
    );

    questionEl.textContent = q;
    answerEl.textContent = `= ${a}`;

    itemEl.appendChild(questionEl);
    itemEl.appendChild(answerEl);
    itemEl.appendChild(buttonEl);
    itemEl.appendChild(cardNumberEl);

    this.listEl.appendChild(itemEl);
  }

  toggleCard(answerEl, buttonEl) {
    if (answerEl.classList.contains("hidden")) {
      buttonEl.textContent = "Hide";
      answerEl.classList.remove("hidden");
    } else {
      buttonEl.textContent = "Show";
      answerEl.classList.add("hidden");
    }
  }

  showNextCard() {
    this.currentCardIndex = (this.currentCardIndex + 1) % data.length;

    const cardEls = this.app.querySelectorAll(".card");
    cardEls.forEach((el) => el.classList.add("hidden"));
    cardEls[this.currentCardIndex].classList.remove("hidden");
  }
}

const data = [
  ["Food", "Jídlo"],
  ["Sea", "Moře"],
  ["Computer", "Počítač"],
];

const app = new App(data);
app.run();
