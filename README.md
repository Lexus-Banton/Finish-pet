# Pet Comments Supabase: Detail Page with Related Data

## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

Work incrementally, being fully done, one small step at a time!

## Demo

Use [this template](https://github.com/alchemycodelab/web-finish-pet-comments) for this deliverable.

## Live Example:

[Demo](https://alchemy-web-pet-lover.netlify.app/)

## Setup Supabase

You have three options for which supabase project to use:

1. Use the shared supabase project by sticking with the `URL` and `KEY` already in `fetch-utils.js`
1. If you already have your own supabase pet-lover project instance, you can [Run the `db.sql` setup scripts](https://github.com/alchemycodelab/student-resources/blob/main/resources/supabase/run-setup-scripts.md) to add the new comments table
1. [Create a new supabase project](https://github.com/alchemycodelab/student-resources/blob/main/resources/supabase/new-project.md):
    1. [Run the `db-part-1.sql` setup scripts](https://github.com/alchemycodelab/student-resources/blob/main/resources/supabase/run-setup-scripts.md)
    1. [Run the `db.sql` setup scripts](https://github.com/alchemycodelab/student-resources/blob/main/resources/supabase/run-setup-scripts.md)

Having your own project will enable you to inspect the result of uploading images and inserting data rows. With option #2 or #3, **make sure to [update your `URL` and `KEY`](https://github.com/alchemycodelab/student-resources/blob/main/resources/supabase/client-url-api-key.md)**

## Requirements

For this deliverable, use the provided application code. Auth is already provided.

Your job is to add:

-   A. Add links from the pet list page to the detail for each pet
-   B. Create a pet detail page that dynamically loads a pet based on the `id` search param
-   C. Add the ability for users to leave comments on a pet detail

### Part A: Add links to the pet items on list page

-   `render-utils.js` - add link that goes to pet detail page

When complete, your pet items in the list should link to the pet detail page
with the `?id=34` search param

### Part B: Load Pet Detail

-   `fetch-utils.js` - export a function to get a pet by id
-   `pet.js` - import fetch-util function, get detail on load, displayPet info

When complete, the pet detail page should show the selected pet name, image, and bio

### Part C: Pet Comments

-   `fetch-utils.js`
    -   add a create comment function
    -   change getPet to also returned the joined comment rows
-   `pet.js`
    -   import create comment, add load logic, display comments, add new comment

Your UI should be showing visual results.

## Schema

### Storage bucket

The name of the storage bucket is `images`

### Data Model

Here is the schema for the `pets` table in supabase:

![Data Model](./data-model.png)

## Rubric

The following is required for your assignment to be graded:

-   PR open from `dev` to `main`
-   PR Passes CI (lint + tests)
-   PR preview on netlify

| Commit with Working Feature...    | Points |
| --------------------------------- | -----: |
| Pet items link to pet detail page |      2 |
| View pet detail                   |      2 |
| Redirect on no/bad id             |      1 |
| Add and view pet comments         |      5 |
