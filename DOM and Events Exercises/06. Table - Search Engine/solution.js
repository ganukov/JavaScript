function solve() {
   const searchInput = document.getElementById('searchField');
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const allRows = Array.from(document.querySelectorAll('tbody tr'));
      const searchedWord = searchInput.value;

      for (const row of allRows) {
         let trimmedText = row.textContent.trim();
         if (row.classList.contains('select')){
            row.classList.remove('select');
         }

         if (trimmedText.includes(searchedWord)){
            row.classList.add('select')
         }
      }
      searchInput.value = ''

   }
}