# Title

Details Page!

## Value Proposition

As a `User` <br>
I want to `be able to look at the details of each movie by selecting it` <br>
so that `I can inspect the full title, image, release date and description of each movie and make informed viewing choices` <br>

## Description

![wireframe](./assets/scribble-movie-detail-page.png)

## Acceptance Criteria

- [] Clicking a movie opens a details page including:
  - [] Title
  - [] Release Date
  - [] Image
  - [] Descrition
- [] Display a loading state while movie details are being fetched
- [] Display an error message if movie details fail to load
- [] A button, in the top section, that leads back to the overview

## Tasks

- [] Add new file [id].js for dynamic routing of detailed movie pages
  - [] Implement dynamic routing logic
  - [] Handle fetching movie detias based on the movie ID
- [] Add new file MovieDetails.js for displaying all details
  - [] Create MovieDetails component structure
  - [] Style the MovieDetials component according to description
- [] Implement navigation from movie list to details page
  - [] Add click event to movie list items
- [] Implement error handling
- [] Implement "Back to Overview" button
