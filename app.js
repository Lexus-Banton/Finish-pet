/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getPets } from './fetch-utils.js';
import { renderPet } from './render-utils.js';

/* Get DOM Elements */
const petList = document.getElementById('pet-list');
const errorDisplay = document.getElementById('error-display');

/* State */
let error = null;
let pets = [];

/* Events */
window.addEventListener('load', async () => {
    const response = await getPets();
    error = response.error;
    pets = response.data;

    if (error) {
        displayError();
    }

    if (pets) {
        displayPets();
    }
});

/* Display Functions */

function displayError() {
    if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}

function displayPets() {
    petList.innerHTML = '';

    for (const pet of pets) {
        const petEl = renderPet(pet);
        petList.append(petEl);
    }
}
