function solve() {
    function depart() {
        const departBtn = document.getElementById('depart');
        const arriveBtn = document.getElementById('arrive');
        const infoBox = document.getElementsByClassName('info')[0];
        let currentStop = 'depot'
        const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
        fetch(`${BASE_URL}${currentStop}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                infoBox.textContent = `Next stop ${data.name}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
                currentStop = data.next
            })
            .catch((err) => {
                infoBox.textContent = 'Error';
                arriveBtn.disabled = true;
                departBtn.disabled = true;
            })
    }

    async function arrive() {
        const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
        const departBtn = document.getElementById('depart');
        const arriveBtn = document.getElementById('arrive');
        const infoBox = document.getElementsByClassName('info')[0];
        try {
            const firstStop = await fetch(`${BASE_URL}depot`);
            const data = await firstStop.json();
            infoBox.textContent = `Arriving at ${data.name}`;
            departBtn.disabled = false;
            arriveBtn.disabled = true;
        }
        catch (err) {
            infoBox.textContent = err.message;
            arriveBtn.disabled = true;
            departBtn.disabled = true;
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();