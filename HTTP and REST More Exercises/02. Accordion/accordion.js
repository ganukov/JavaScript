window.onload = solution()

function solution() {
    const main = document.getElementById('main');
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/articles/list';

    fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => {
            for (const { _id, title } of data) {

                const accordion = document.createElement('div');
                accordion.classList.add('accordion');
                const head = document.createElement('div');
                head.classList.add('head');
                const span = document.createElement('span');
                span.textContent = title;
                const btn = document.createElement('button');
                btn.classList.add('button');
                btn.id = _id;
                btn.textContent = 'More';
                btn.addEventListener('click', accordionHandler)
                head.appendChild(span);
                head.appendChild(btn);
                accordion.appendChild(head);
                main.appendChild(accordion);
                fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${_id}`)
                    .then((res) => res.json())
                    .then((data) => {
                        const { _id, title, content } = data;
                        const extra = document.createElement('div');
                        extra.classList.add('extra');
                        const p = document.createElement('p');
                        p.id = _id;
                        p.textContent = content;
                        extra.appendChild(p);
                        accordion.appendChild(extra);

                    })
                    .catch((err) => {
                        console.error(err)
                    })
                function accordionHandler() {
                    const id = this.id;
                    console.log(id)
                    const allExtras = document.querySelectorAll('div > p')
                    for (const each of allExtras) {
                        if (each.id === id) {
                            if (this.textContent === 'MORE') {
                                const show = each.parentElement;
                                show.style.display = 'block';
                                this.textContent = 'LESS';
                            } else {
                                const show = each.parentElement;
                                show.style.display = 'none';
                                this.textContent = 'MORE';
                            }
                        }
                    }
                }
            }
        })
}