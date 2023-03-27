# Testing in React lecture

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is built on a demo repo used for the react intro 2 lecture, a simple blog style posts page built using useState and basic event handlers.

Here we will using Jest, React testing library and React test renderer to add tests that:
- create snapshots
- fetch elements using queries
- validate elements on screen using matchers
- mock functions with Jest
- validate functions are being called when triggering an event listener

## Setup
*This repo is intended as a guide for a tutor when giving the lecture*

The `main` branch contains the basic application, this can be forked and used as the base for a fresh repo created over the course of a lecture for the students to use when following along with the video recording.

## Starting point of app
![Screenshot](./public/screenshot-react-intro-2.png)

## Task list
### App component:
- Create a snapshot
- Assert title text is correct

### Post component:
- Create a snapshot
- Assert the post author is present
- Assert there is a single button and that it has the correct text
- Assert the tags list has the correct number of items
- Assert clicking the button calls the handler function, and it has been called with the expected argument

### PostList component:
- Create a snapshot
- Assert the 'last upvoted' field is updated when clicking on a post

## Available Scripts

Run the app with:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Run the tests with:
### `npm test`

