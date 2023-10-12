'use strict';

const apiKey = '957856336285725796934x40417';

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKey}`)
    .then((response) => response.json())
    .then(data => {
      console.log(`You are in ${data.state}, ${data.country}`);
    })
    .catch(err => {
      console.log(err);
    });
};

whereAmI(-33.933, 18.474);
