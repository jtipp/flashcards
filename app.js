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

    const cardEl = document.createElement("div");
    cardEl.classList.add("card", "hidden");

    const cardNumberEl = document.createElement("div");
    cardNumberEl.classList.add("number");
    cardNumberEl.textContent = `#${number + 1}`;

    const questionEl = document.createElement("div");
    questionEl.classList.add("question");
    const answerEl = document.createElement("div");
    answerEl.classList.add("answer", "hidden");

    cardEl.addEventListener("click", () =>
      this.toggleCard(cardEl, questionEl, answerEl)
    );

    questionEl.textContent = q;
    answerEl.textContent = a;

    cardEl.appendChild(questionEl);
    cardEl.appendChild(answerEl);
    cardEl.appendChild(cardNumberEl);

    this.listEl.appendChild(cardEl);
  }

  toggleCard(cardEl, questionEl, answerEl) {
    cardEl.querySelector("div.number").classList.toggle("hidden");

    if (answerEl.classList.contains("hidden")) {
      console.log("click to show front");
      cardEl.classList.remove("animate-front");
      cardEl.classList.add("animate-back");
      cardEl.querySelector("div.question").classList.add("hidden");
      cardEl.querySelector("div.answer").classList.remove("hidden");
    } else {
      console.log("click to show back");
      cardEl.classList.remove("animate-back");
      cardEl.classList.add("animate-front");
      cardEl.querySelector("div.question").classList.remove("hidden");
      cardEl.querySelector("div.answer").classList.add("hidden");
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
