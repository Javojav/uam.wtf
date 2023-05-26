const backgroundAmount = 10;
const backgroundPath = "media/background";
const backgroundImages = Array.from({ length: backgroundAmount }, (_, i) => `uam${i + 1}.jpg`);

var backgroundElement = document.getElementById("buddy");

var randomBackground = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

backgroundElement.style.backgroundImage = `url('${backgroundPath}/${randomBackground}')`;
