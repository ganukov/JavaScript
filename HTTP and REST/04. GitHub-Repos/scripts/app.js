function loadRepos() {
   // Create a constant:
   const BASE_URL = 'https://api.github.com/users/testnakov/repos';
   const resultContainer = document.getElementById('res');
   // we have to give the 2nd argument , headers, in this case is GET , by default its GET 
   // for POST, PUT, PATCH, DELETE we have to specify it!
   fetch(BASE_URL,{method:'GET'})
   .then((res) => res.json())
   .then((data)=> {
      resultContainer.textContent = data;
   })
   .catch((err) => {
      console.error(err)
   })
}