'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountryDataAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();

  // every public api CORS(cross origin resource sharing) must be set to yes/unknown in order to work

  request.open('GET', `https://restcountries.com/v3.1/alpha/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);   // this keywork is the request inside the callback funciton

    const [data] = JSON.parse(this.responseText);
    // console.log(data.languages);
    const [currency] = Object.keys(data.currencies); // parsing currency

    const language = Object.keys(data.languages);
    console.log(data.languages[language[0]]);

    // Render country
    renderCountry(data, language, currency);



    // Get negighbour country 2
    const [neighbour] = data.borders;

    if (!neighbour) {
      return;
    }

    // AJAZ call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      const [data] = JSON.parse(this.responseText);
      // console.log(data.languages);
      const [currency] = Object.keys(data.currencies); // parsing currency

      const language = Object.keys(data.languages);
      renderCountry(data, language, currency, 'neighbour');
    });
  });
};

const renderCountry = function (data, language, currency, className='') {
  const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>  
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[language[0]]
            }</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// calling the function;
getCountryDataAndNeighbour('ita');
