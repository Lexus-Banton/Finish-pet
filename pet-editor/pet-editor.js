/* Imports */
// this will check if we have a user and set signout link if it exists
import '../auth/user.js';
import { createPet, uploadImage } from '../fetch-utils.js';

/* Get DOM Elements */
const petForm = document.getElementById('pet-form');
const errorDisplay = document.getElementById('error-display');
const imageInput = document.getElementById('image-input');
const preview = document.getElementById('preview');

/* State */
let error = null;

/* Events */
imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
    } else {
        preview.src = '../assets/pet-photo-placeholder.png';
    }
});

petForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(petForm);

    const imageFile = formData.get('image');
    const randomFolder = Math.floor(Date.now() * Math.random());
    const imagePath = `pets/${randomFolder}/${imageFile.name}`;
    const url = await uploadImage('images', imagePath, imageFile);

    const pet = {
        name: formData.get('name'),
        bio: formData.get('bio'),
        image_url: url,
    };

    const response = await createPet(pet);
    error = response.error;

    if (error) {
        displayError();
    } else {
        location.assign('/');
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
