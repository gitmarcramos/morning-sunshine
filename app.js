const input = document.querySelector("input");
const guessButton = document.querySelector("button");
const nextBtn = document.querySelector(".next-btn");
const modalSuccess = document.querySelector(".modal-success");
const modalBoo = document.querySelector(".booo")
const retry = document.querySelector(".retry");

nextBtn.style.display = "none";

retry.addEventListener("click", () => {
  modalBoo.classList.add('inactive')
})

function success() {
  modalSuccess.classList.remove("inactive");
  // alert("Hell yeah, good guess!!");
  nextBtn.style.display = "block";
}

const covers = [
  { id: 0, band: "i am", name: "l'école du micro d'argent" },
  { id: 1, band: "led zeppelin", name: "led zeppelin" },
  { id: 2, band: "metallica", name: "master of puppets" },
  { id: 3, band: "queen", name: "a night at the opera" },
  { id: 4, band: "lauryn hill", name: "the miseducation of lauryn hill" },
  { id: 5, band: "the rolling stones", name: "exile on main street" },
  { id: 6, band: "imogen heap", name: "speak for yourself" },
  { id: 7, band: "justice", name: "justice" },
  { id: 8, band: "kanye west", name: "the graduation" },
  { id: 9, band: "the beatles", name: "abbey road" },
  { id: 10, band: "acdc", name: "back in black" },
  { id: 11, band: "muse", name: "origin of sym metry" },
  { id: 12, band: "guns and roses", name: "appetite for destruction" },
  { id: 13, band: "blink 182", name: "enema of the state" },
  { id: 14, band: "michael jackson", name: "dangerous" },
  { id: 15, band: "dr dre", name: "2001" },
  { id: 16, band: "alanis morissette", name: "jagged little pill" },
  { id: 17, band: "pink floyd", name: "wish you were here" },
];

const cover = document.querySelector("#cover");
const index = Number(cover.dataset.page);

guessButton.addEventListener("click", () => {
  console.log(cover.dataset.page);

  if (cover.value.toLowerCase() === covers[index].name) {
    success();
  } else if (cover.value.toLowerCase() === covers[index].band) {
    success();
  } else {
    modalBoo.classList.remove('inactive')
  }
});
