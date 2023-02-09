const data = [
  ["Food", "Jídlo"],
  ["Sea", "Moře"],
];

const app = document.getElementById("app");

const list = document.createElement("ul");

data.forEach((item) => {
  const question = item[0];
  const answer = item[1];

  const listItem = document.createElement("li");
  listItem.textContent = `${question}: ${answer}`;
  list.appendChild(listItem);
});

app.appendChild(list);
