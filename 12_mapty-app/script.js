'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class App {
  #map;
  #mapEvent;

  constructor() {
    this._getPostion();

    form.addEventListener('submit', this._newworkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPostion() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          // this method take two callback funciton, one for executing when the app gets the location and other when it don't
          alert('Could not get your position');
        }
      );
    }
  }

  _loadMap(position) {
    //   console.log(position);

    const { latitude } = position.coords;
    const { longitude } = position.coords;

    // console.log(latitude, longitude);
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      attribution: '&copy; <a href="https://maps.google.com/">Google Maps</a>',
    }).addTo(this.#map);
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newworkout(e) {
    e.preventDefault();

    // clear input fields
    inputDistance.value = inputDuration.value = inputElevation.value = '';

    // Disply the marker
    const { lat, lng } = this.#mapEvent.latlng;
    const markedPosition = [lat, lng];

    // adding marker to marked position
    L.marker(markedPosition)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Workout')
      .openPopup();
  }
}


// creating object
const app = new App();

