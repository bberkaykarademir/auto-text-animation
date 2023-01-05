const textEl = document.querySelector("#text");
const speedEl = document.querySelector("#speed");
let i = 1;
let speed = 300 / speedEl.value;
const text = "Berkay Karademir";

const write = () => {
  textEl.innerText = text.slice(0, i);
  i++;
  if (i > text.length) {
    i = 1;
  }
  setTimeout(write, speed);
};

write();

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
