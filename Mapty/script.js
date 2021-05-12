"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class WorkOut {
  date = new Date();
  id = (Date.now() + "").slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance; //in km
    this.duration = duration; //in minutes
  }
}

class Running extends WorkOut {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends WorkOut {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
  }
  calcSpeed() {
    // km/hours
    this.speed = this.distance / (this.calcSpeed / 60);
    return this.speed;
  }
}

// const run1 = new Running([1, -2], 5.2, 24, 178);
// const cycle1 = new Cycling([1, -2], 27, 95, 523);
// console.log(run1);
// console.log(cycle1);

class App {
  #map;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPosition();
    form.addEventListener("submit", this._newWorkOut.bind(this));
    inputType.addEventListener("change", this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("Couldn't get your Position...");
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    //("map") is id of div element wherw we wnat to show map
    this.#map = L.map("map").setView(coords, 15);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker(coords)
      .addTo(this.#map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();

    this.#map.on("click", this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkOut(e) {
    const validInputs = (...inputs) => {
      return inputs.every((inp) => {
        console.log(Number.isFinite(inp), inp);
        return Number.isFinite(inp);
      });
    };

    const isPositiveNumbers = (...inputs) => {
      return inputs.every((inp) => {
        console.log(inp > 0, inp);
        return inp > 0;
      });
    };
    e.preventDefault();
    const { lat, lng } = this.#mapEvent.latlng;

    //GEt Data from Form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;

    //If WorkOut is Running,Create Running Object
    if (type === "running") {
      const cadence = +inputCadence.value;
      console.log(distance, duration, cadence);

      //Check Data is Valid or not
      if (
        !validInputs([distance, duration, cadence]) ||
        !isPositiveNumbers([distance, duration, cadence])
      ) {
        return alert("Input Should be Positive Numbers.");
      }

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    //If WorkOut is Cycling,Create Cycling Object
    if (type === "cycling") {
      const elevationGain = +inputElevation.value;

      //Check Data is Valid or not
      if (
        !validInputs([distance, duration, elevationGain]) ||
        !isPositiveNumbers([distance, duration])
      ) {
        return alert("Input Should be Positive Numbers.");
      }

      workout = Cycling([lat, lng], distance, duration, elevationGain);
    }

    //Add new Object to WorkOut array
    this.#workouts.push(workout);
    console.log(workout);

    //Render WorkOut on Map as Marker

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: "running-popup",
        })
      )
      .setPopupContent("WorkOut")
      .openPopup();

    //Hide form + clear input Fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        "";
  }
}

const app = new App();
