function jadenTalk(text) {
  const cleanedText = text.replace(/[,.!?]/g, "");

  // Split the cleaned text into words, capitalize each word, and join them back
  const capitalizedText = cleanedText
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return capitalizedText;
}

// Examples
console.log(jadenTalk("How can mirrors be real, if our eyes aren't real?"));
console.log(
  jadenTalk(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nulla!"
  )
);

module.exports = jadenTalk;
