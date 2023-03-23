function create(words) {
   const divElement = document.getElementById('content');
   for (const word of words) {
      console.log(word)
      let newElement = divElement.appendChild(document.createElement('div'))
      let paragraph = newElement.appendChild(document.createElement('p'));
      paragraph.textContent = String(word);
      paragraph.style.display = 'none'
      newElement.addEventListener('click',showName);

      function showName(){
         paragraph.style.display = 'block';
      }
   }
}