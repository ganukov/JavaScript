function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/';
    const locationBtn = document.getElementById('submit');
    const currentCondition = document.getElementById('current');
    const forecast = document.getElementById('forecast');
    const upcoming = document.getElementById('upcoming');
    locationBtn.addEventListener('click', handleClick);

    function handleClick(e) {
        const location = document.getElementById('location').value;

        fetch(`${BASE_URL}locations`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                let locationCode = null;
                for (const each of data) {
                    if (each.name === location) {
                        locationCode = each.code
                        console.log(locationCode)
                    }
                }
                fetch(`${BASE_URL}today/${String(locationCode)}`)
                    .then((res) => res.json())
                    .then((data) => {
                        let image = null;
                        if (data.forecast.condition === 'Sunny') {
                            image = '&#x2600;';
                        } else if (data.forecast.condition === 'Partly sunny') {
                            image = '&#x26C5;';
                        } else if (data.forecast.condition === 'Overcast') {
                            image = '&#x2601;';
                        } else if (data.forecast.condition === 'Rain') {
                            image = '&#x2614;';
                        }
                        forecast.style.display = 'block';
                        const newDiv = document.createElement('div');
                        newDiv.classList.add('forecasts');
                        currentCondition.appendChild(newDiv)
                        const conditionSymbol = document.createElement('span');
                        conditionSymbol.classList.add('condition', 'symbol')
                        conditionSymbol.innerHTML = image;
                        // const img = document.createElement('img');
                        // img.src = image;
                        // conditionSymbol.appendChild(img)
                        newDiv.appendChild(conditionSymbol);
                        const conditions = document.createElement('span');
                        conditions.classList.add('condition');
                        const conditionOne = document.createElement('span');
                        conditionOne.classList.add('forecast-data')
                        conditionOne.textContent = data.name;
                        const conditionTwo = document.createElement('span');
                        conditionTwo.classList.add('forecast-data')
                        conditionTwo.innerHTML = `${data.forecast.low}${'&#176;'}/${data.forecast.high}${'&#176;'}`;
                        const conditionThree = document.createElement('span');
                        conditionThree.classList.add('forecast-data')
                        conditionThree.textContent = data.forecast.condition;
                        conditions.appendChild(conditionOne);
                        conditions.appendChild(conditionTwo);
                        conditions.appendChild(conditionThree);
                        newDiv.appendChild(conditions);


                    })
                fetch(`${BASE_URL}upcoming/${String(locationCode)}`)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        const divForecastInfo = document.createElement('div');
                        divForecastInfo.classList.add('forecast-info');
                        upcoming.appendChild(divForecastInfo);
                        let image = null;
                        for (const each of data.forecast) {
                            console.log(each.condition)

                            if (each.condition === 'Sunny') {
                                image = '&#x2600;';
                            } else if (each.condition === 'Partly sunny') {
                                image = '&#x26C5;';
                            } else if (each.condition === 'Overcast') {
                                image = '&#x2601;';
                            } else if (each.condition === 'Rain') {
                                image = '&#x2614;';
                            }


                            const spanOne = document.createElement('span');
                            spanOne.classList.add('upcoming');
                            upcoming.appendChild(spanOne);
                            const spanOneFirst = document.createElement('span');
                            spanOneFirst.classList.add('symbol');
                            spanOneFirst.innerHTML = image;
                            spanOne.appendChild(spanOneFirst);
                            const spanOneSecond = document.createElement('span');
                            spanOneSecond.classList.add('forecast-data');
                            spanOneSecond.innerHTML = `${each.low}${'&#176;'}/${each.high}${'&#176;'}`;
                            spanOne.appendChild(spanOneSecond);
                            const spanOneThird = document.createElement('span');
                            spanOneThird.classList.add('forecast-data');
                            spanOneThird.innerHTML = `${each.condition}`;
                            spanOne.appendChild(spanOneThird);
                            divForecastInfo.appendChild(spanOne);


                        }
                    })
                    .catch((err) => {
                        forecast.style.display = 'block'
                        forecast.textContent = 'Error'
                    })
            })
            .catch((err) => {
                forecast.style.display = 'block'
                forecast.textContent = 'Error'
            })
    }
}

attachEvents();