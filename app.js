class App {
  constructor(data) {
    this.data = data;
    this.appEl = document.getElementById("app");
    this.titleEl = document.querySelector("h1");
    this.listEl = document.createElement("div");
    this.listEl.classList.add("cards");
    this.currentCardIndex = 0;
    this.nextButtonContainer = document.createElement("div");
    this.nextButtonContainer.classList.add("next");
    this.nextButtonEl = document.createElement("a");
    this.nextButtonEl.textContent = "Next card →";
    this.nextButtonContainer.appendChild(this.nextButtonEl);
  }

  run() {
    let numCardsEl = document.createElement("small");
    numCardsEl.textContent = ` / ${this.data.cards.length} cards`;
    this.titleEl.textContent = this.data.title;
    this.titleEl.appendChild(numCardsEl);

    this.nextButtonEl.addEventListener("click", () => this.showNextCard());

    this.data.cards.forEach((item, number) => {
      this.createCard(item, number);
    });

    this.appEl.appendChild(this.listEl);
    this.appEl.appendChild(this.nextButtonContainer);

    this.appEl.querySelector(".card").classList.remove("hidden");
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

  toggleCard(cardEl) {
    const answerEl = cardEl.querySelector("div.answer");
    cardEl.querySelector("div.number").classList.toggle("hidden");

    if (answerEl.classList.contains("hidden")) {
      cardEl.classList.remove("animate-front");
      cardEl.classList.add("animate-back");
      cardEl.querySelector("div.question").classList.add("hidden");
      cardEl.querySelector("div.answer").classList.remove("hidden");
    } else {
      cardEl.classList.remove("animate-back");
      cardEl.classList.add("animate-front");
      cardEl.querySelector("div.question").classList.remove("hidden");
      cardEl.querySelector("div.answer").classList.add("hidden");
    }
  }

  showNextCard() {
    this.currentCardIndex =
      (this.currentCardIndex + 1) % this.data.cards.length;

    const cardEls = this.appEl.querySelectorAll(".card");
    cardEls.forEach((el) => el.classList.add("hidden"));

    cardEls[this.currentCardIndex].classList.remove("hidden");
  }
}

(async () => {
  const response = await fetch(".netlify/functions/data");
  const data = await response.json();
  console.debug(data.cards);
  const app = new App(data.cards[0]);
  app.run();
})();
