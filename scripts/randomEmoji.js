const emojiAmount = 11;
const emojiFiles = Array.from({ length: emojiAmount }, (_, i) => `emoji${i + 1}.jpg`);

var emojiElement = document.getElementById("emoji");

var randomEmoji = emojiFiles[Math.floor(Math.random() * emojiFiles.length)];

emojiElement.src = `media/emoji/${randomEmoji}`;