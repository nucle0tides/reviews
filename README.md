# Frontend Coding Exercise

## Task ⌨️
For this exercise, you will be implementing the ability for a website visitor to submit a review for a self storage facility.

#### Requirements
- A button prompting a website visitor to leave a review
- When that button is clicked, a modal containing a form pops up. This form will include:
  - An input to set a rating from 1-5, this field is **required**
  - A dropdown to pick a facility, this field is **required**
  - An input to write a review body
  - An input for a name
  - An input for an email
- On form submit, the modal should be dismissed, and the review will be rendered under the button
- The DOM node containing the reviews will scroll if and only if there are more than 3 reviews

Treat the the `Reviews.js` file as your starting point. In that file, you are given a few props to help you get started: `facilities`, `reviews`, `onSubmit`, and `loading`. You do not have to worry about submitting the form to a real endpoint; the `onSubmit` function mocks a network call to submit the form for you. As you're working through this, be sure to apply the same standards as you would on a real app. Additionally, free to use the `NOTES.md` file to document any resources you used, assumptions or tradeoffs you made in your implementation, and anything else you'd like the reviewers to read.

#### Styling
How and what you use to style your submission is up to you! `bootstrap` is imported in `index.js` for your convenience. You can use the following images as inspiration:

![](./reviews.jpg)
![](./modal.jpg)


## Dependencies 🔧
- [Node](https://nodejs.org/en/) (at least `12.*`)
- [Yarn](https://classic.yarnpkg.com/lang/en/)

## Getting Started 🏃‍♀️
First, install the dependencies:
```
yarn install
```

then start the development server: 
```
yarn dev:start
```

Have fun! 💖

