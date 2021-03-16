# Backend Coding Exercise

## Task ⌨️
For this exercise, you will be implementing a few API endpoints to support adding, approving, and fetching self storage facility reviews.

#### Requirements
A `Review`:
- Is associated with a facility.
- Has a rating from 1-5
- Is either "approved" or "denied"

Additionally, a `Review` may have:
- The name of the reviewer
- The email of the reviewer
- A description of the reviewer's experience

For this API, we want to be able to:
- Save a new facility review to our database
- Approve or deny a facility review
- Fetch all reviews by facility

Treat the [reviews route](./src/api/routes/review.js) as your starting point. We've included [`mongoose`](https://mongoosejs.com/) and a `Review` [mongoose model](./src/data/models/review.js) for your convenience. However, you're welcome to replace `mongoose` with any ORM you're most comfortable with (or get rid of the ORM altogether). As you're working through this, be sure to apply the same standards as you would on a real app. Additionally, free to use the NOTES.md file to document any resources you used, assumptions or tradeoffs you made in your implementation, and anything else you'd like the reviewers to read.

## Dependencies 🔧
- [Docker](https://docs.docker.com/desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node](https://nodejs.org/en/) (at least `12.*`)
- [Yarn](https://classic.yarnpkg.com/lang/en/)

## Getting Started 🏃‍♀️
First, install the dependencies:
```
yarn install
```

Spin up your mongo instance:
```
docker-compose up -d
```

and start the dev server:
```
yarn dev:api
```

Have fun! 💖
