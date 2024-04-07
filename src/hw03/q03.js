const keybr = document.querySelector('a');
keybr.textContent = "Google";

const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
  ];

const app = document.getElementById("root");
const ul = document.createElement("ul");
buyList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
});
app.appendChild(ul);

