# TypeScript React Test Fixture Demo

This repository exists to demonstrate how to use [cooky-cutter](https://skovy.github.io/cooky-cutter/#/) with [faker.js](https://github.com/marak/Faker.js/) to generate realistic test data in your TypeScript unit tests. The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisite

- [Node >=14](https://nodejs.org/en/)

## Running the tests

To run the test suite (in watch mode) you can run to following from the root of the project:

```bash
npm run test
```

## Understanding the tests

There are two test suites, one for the `<Home/>` component and one for the `<UserItem />` component. Both of these component rely on a `User` model that has various properties.

If you have a look at the file [src/fixtures/User.ts](src/fixtures/User.ts) you will see where we are setting up that fixture. We are using a combination of a library called `cooky-cutter` for defining the feature, and the using the library `faker.js` to generate realistic data.

Now in the actual tests we can use that fixture to generate data. For example if we want to create a single user we can do the following:

```typescript
var user = userFixture();
```

You can also override certain properties:

```typescript
var user = userFixture({ accountStatus: AccountStatus.Inactive });
```

You can see examples of these in the file [src/components/UserItem.test.tsx](src/components/UserItem.test.tsx).

You can also create arrays of users such as in the test [src/pages/App.test.tsx](src/pages/App.test.tsx):

```typescript
var getUsersResponse = array(userFixture, 5)();
```

I have also configured cooky-cutter in [src/setupTests.ts](src/setupTests.ts) to break the build if it finds a hard coded value in one of the fixture setups.
