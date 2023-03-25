function solve() {
  const words = Array.from(document.getElementById('text').value.toLowerCase().split(' '))
  const currentCase = document.getElementById('naming-convention').value;
  const result = document.getElementById('result')
  let newWords = []
  if (currentCase === 'Camel Case') {
    newWords.push(words[0]);
    for (let i = 1; i < words.length; i++) {
      const element = words[i];
      newWords.push(element[0].toUpperCase() + element.substring(1))
    }

  } else if (currentCase === 'Pascal Case') {
    for (let i = 0; i < words.length; i++) {
      const element = words[i];
      newWords.push(element[0].toUpperCase() + element.substring(1))
    }
  }
  if (newWords.length !== 0) {
    for (const each of newWords) {
      result.textContent += each
    }
  } else {
    result.textContent = `Error!`
  }

}