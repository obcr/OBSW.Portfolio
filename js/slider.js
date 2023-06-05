const card = document.querySelector('.card');
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 15;

const fetchData = async () => {
  const response = await fetch("./images.json");
  const data = await response.json();
  console.log("les images sont", data); // Vérification de la récupération des images dans la console

  const imageElement = document.querySelector('.card img');
  const imageCount = data.length;
  let currentIndex = 0;

  setInterval(() => {
    const nextIndex = (currentIndex + 1) % imageCount;
    const image = data[nextIndex];

    imageElement.src = image.src;
    imageElement.alt = image.alt;

    currentIndex = nextIndex;
  }, 2000);
};

fetchData();

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;

  // Si l'événement tactile fournit les informations relatives à l'élément actuel, utilisez-les
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  // Sinon, vous pouvez utiliser les dimensions de l'élément "card" pour les calculs
  // const clientWidth = card.clientWidth;
  // const clientHeight = card.clientHeight;
  // const offsetLeft = card.offsetLeft;
  // const offsetTop = card.offsetTop;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;

  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

function handleTouchStart(e) {
  const touch = e.touches[0];
  handleHover(touch);
}

function handleTouchMove(e) {
  const touch = e.touches[0];
  handleHover(touch);
}

function handleTouchEnd(e) {
  resetStyles(e);
}

if (!motionMatchMedia.matches) {
  card.addEventListener("mousemove", handleHover);
  card.addEventListener("mouseleave", resetStyles);
  card.addEventListener("touchstart", handleTouchStart);
  card.addEventListener("touchmove", handleTouchMove);
  card.addEventListener("touchend", handleTouchEnd);
}