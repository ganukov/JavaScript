function loadRepos() {
	const username = document.getElementById('username').value;
	const repos = document.getElementById('repos');
	const BASE_URL = "https://api.github.com/users/"

	fetch(`${BASE_URL}${username}/repos`)
		.then((res) => res.json())
		.then((data) => {
			data
			.forEach((repo) =>{
				const a = document.createElement('a');
				a.href = `${repo.html_url}`;
				a.textContent = `${repo.full_name}`;
				const li = document.createElement('li');
				li.appendChild(a);
				repos.appendChild(li);
			})
		})
}