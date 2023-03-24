function solve() {
  const inputText = Array.from(document.getElementById('input').value.split('. '));
  const outputText = document.getElementById('output');
  console.log(inputText.length)
  console.log(inputText)
  if (inputText.length > 1 && inputText.length <= 3) {
    const newParagraph = outputText.appendChild(document.createElement('p'));
    newParagraph.textContent = `${inputText.join('. ')}.`;
  } else {
    let numberOfParagraph = Math.floor(inputText.length / 3);
    for (let i = 0; i < numberOfParagraph; i++) {
      console.log(numberOfParagraph);
      let eachParagraph = [];
      while (eachParagraph.length < 3) {
        let sentence = inputText.shift();
        eachParagraph.push(sentence);
      }
      const newParagraph = outputText.appendChild(document.createElement('p'));
      newParagraph.textContent = `${eachParagraph.join('.')}.`;
    }
    if (inputText.length > 0) {
      let lastText = inputText;
      const newParagraph = outputText.appendChild(document.createElement('p'));
      newParagraph.textContent = lastText.join('.');
    }
  }
}


