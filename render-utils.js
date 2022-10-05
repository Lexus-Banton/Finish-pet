export function renderPet(pet) {
    const li = document.createElement('li');

    // Part A: add an anchor link tag
    //      - set the link to be like `/pet/?id=34`, but use the actual pet id
    //      - adjust the content to be in the anchor link,
    //        and the anchor link is appended to the li

    const img = document.createElement('img');
    img.src = pet.image_url;

    const h2 = document.createElement('h2');
    h2.textContent = pet.name;

    const p = document.createElement('p');
    p.textContent = pet.bio;

    li.append(img, h2, p);

    return li;
}

export function renderComment(comment) {
    const li = document.createElement('li');

    li.textContent = comment.text;

    return li;
}
