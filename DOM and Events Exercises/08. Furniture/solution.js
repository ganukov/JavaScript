function solve() {
  const [generateTextArea, buyTextArea] = Array.from(document.getElementsByTagName('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName('button'));
  const tbody = document.querySelector('.table > tbody')
  console.log(tbody)
  generateBtn.addEventListener('click', generateHandler);
  buyBtn.addEventListener('click', buyHandler);

  function generateHandler() {
    const data = JSON.parse(generateTextArea.value);
    console.log(data)
    for (const { img, name, price, decFactor } of data) {
      const tablewRow = createElement('tr', '', tbody);
      const firstColumnTd = createElement('td', '', tablewRow);
      createElement('img', '', firstColumnTd, '', '', { src: img });
      const secondComlumnTd = createElement('td', '', tablewRow);
      createElement('p', name, secondComlumnTd);
      const thirdComlumnTd = createElement('td', '', tablewRow);
      createElement('p', price, thirdComlumnTd);
      const fourthComlumnTd = createElement('td', '', tablewRow);
      createElement('p', decFactor, fourthComlumnTd);
      const fifthColumnTd = createElement('td', '', tablewRow);
      createElement('input', '', fifthColumnTd, '', '', { type: 'checkbox' });
    }
  }
  function buyHandler() {
    const allCheckedInputs = Array.from(document.querySelectorAll('tbody tr input:checked'));
    let boughtItems = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (const input of allCheckedInputs) {
      const tablewRow = input.parentElement.parentElement;
      const [_firstColumn, secondColumn, thirdColumn, fourthColumn] = Array.from(tablewRow.children);
      let item = secondColumn.children[0].textContent;
      boughtItems.push(item);
      let currentPrice = Number(thirdColumn.children[0].textContent);
      totalPrice += currentPrice;
      let currentDecFactor = Number(fourthColumn.children[0].textContent);
      totalDecFactor += currentDecFactor;
    }

    buyTextArea.value += `Bought furniture: ${boughtItems.join(', ')}\n`;
    buyTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    buyTextArea.value += `Average decoration factor: ${totalDecFactor / allCheckedInputs.length}`;
  }
  // type = string
  // content = string
  // id = string
  // classes = array of strings
  // attributes = object

  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type !== 'input') {
      htmlElement.textContent = content;
    }
    if (content && type === 'input') {
      htmlElement.value = content;
    }

    if (id) {
      htmlElement.id = id;
    }

    if (classes) {
      htmlElement.classList.add(...classes);
    }
    // {src: 'link to image', href: 'link to site'}
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }
    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement
  }

}

