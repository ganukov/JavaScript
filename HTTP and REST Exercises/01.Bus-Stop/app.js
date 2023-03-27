function getInfo() {
    const busStop = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');
    const BASE_URL = "http://localhost:3030/jsonstore/bus/businfo/";

    fetch(`${BASE_URL}${busStop}`)
        .then((res) => res.json())
        .then((data) => {
            stopName.textContent = data.name;
            for (const bus in data.buses) {
                const li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
                buses.appendChild(li)
            }
        })
        .catch((err) =>{
            stopName.textContent = 'Error';
        })
}