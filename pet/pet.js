/* Imports */
// this will check if we have a user and set signout link if it exists
import '../auth/user.js';
// > Part B: import pet fetch
import { getPet, createComment } from '../fetch-utils.js';
// > Part C: import create comment
import { renderComment } from '../render-utils.js';

/* Get DOM Elements */
const errorDisplay = document.getElementById('error-display');
const petName = document.getElementById('pet-name');
const petImage = document.getElementById('pet-image');
const petBio = document.getElementById('pet-bio');
const commentList = document.getElementById('comment-list');
const addCommentForm = document.getElementById('add-comment-form');

/* State */
let error = null;
let pet = {};
let comments = [];

/* Events */
window.addEventListener('load', async () => {
    // > Part B:
    //   - get the id from the search params
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    //   - if no id, redirect to list (home) page
    if (!id) {
        location.replace('/');
        return;
    }

    //  - otherwise, get the pet by id and store the error and pet data
    const response = await getPet(id);
    error = response.error;
    pet = response.data;
    comments = pet.comments;
    //  - if error, display it
    if (error) {
        displayError();
    }
    //  - of no pet, redirect to list (home) page
    if (!pet) {
        location.replace('/');
        //  - otherwise, display pet
    } else {
        displayPet();
    }

    // > Part C: also call display comments in addition to display pet
    displayComments();
});

addCommentForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // > Part C:
    //    - create an comment insert object from formdata and the id of the pet
    const formData = new FormData(addCommentForm);
    const insertComment = {
        text: formData.get('text'),
        pet_id: pet.id,
    };
    //    - create the comment
    const response = await createComment(insertComment);
    error = response.error;
    //    - store and check for an error and display it, otherwise
    if (error) {
        displayError();
    } else {
        //    - add the new comment (data) to the front of the pet comments using unshift
        const comment = response.data;
        comments.unshift(comment);
        displayComments();
        //    - reset the form
        addCommentForm.reset();
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

function displayPet() {
    // > Part B: display the pet info
    petName.textContent = pet.name;
    petBio.textContent = pet.bio;
    petImage.src = pet.image_url;
    petImage.alt = `${pet.name} image`;
}

function displayComments() {
    commentList.innerHTML = '';

    for (const comment of comments) {
        // > Part C: render the comments
        const commentEl = renderComment(comment);
        commentList.append(commentEl);
    }
}
