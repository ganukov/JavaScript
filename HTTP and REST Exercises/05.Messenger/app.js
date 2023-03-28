function attachEvents() {
    const author = document.querySelector("input[name='author']");
    const content = document.querySelector("input[name='content']")
    const textArea = document.getElementById('messages');
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';

    submitBtn.addEventListener('click', submit);
    refreshBtn.addEventListener('click', refresh)


    function submit() {
        let message = { author: author.value, content: content.value }

        fetch(`${BASE_URL}`, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        });
        textArea.value += `${author.value}: ${content.value}\n`;
        author.value = "";
        content.value = "";
    }

    function refresh() {
        fetch(`${BASE_URL}`)
            .then((res) => res.json())
            .then((data) => {
                for (const each in data) {
                    let wholeMessage = data[each];
                    if (wholeMessage.author !== 'George') {
                        textArea.textContent += `${wholeMessage.author}: ${wholeMessage.content}\n`;
                    } else {
                        textArea.textContent += `${wholeMessage.author}: ${wholeMessage.content}`;
                    }
                }
            })
    }

}
attachEvents();