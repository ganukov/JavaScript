function search() {
   const lookedFor = document.getElementById('searchText').value;
   const info = document.getElementById('towns');
   const result = document.getElementById('result');
   let total = 0;
   for (const each of Array.from(info.children)) {
      if (each.textContent.includes(lookedFor)) {
         total ++;
         each.innerHTML = `<u><b> ${each.textContent} </b></u>`
      }
   }
   result.textContent = `${total} matches found`;
}
