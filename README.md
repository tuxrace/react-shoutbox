# Shoutbox

## Working Demo
[https://tuxrace.github.io/react-shoutbox/](https://tuxrace.github.io/react-shoutbox/)

## To Run

    1. yarn install or npm install
    2. yarn start or npm start
    3. Go to localhost:8080/react-shoutbox

## To Test

    yarn test
    
## Users
    
    jon@mail.com - test
    rob@mail.com - test
    ben@mail.com - test
    tommy@mail.com - test
    gina@mail.com - test
    logan@mail.com - test
    alicia@mail.com - test
    peter@mail.com - test
    eli@mail.com - test
    jackie@mail.com - test

## Follows

    jon - follows - ben and rob
    ben - follows - jon
    rob - follows - jon and alicia and peter
    tommy@mail.com - jon
    gina@mail.com - jon
    logan@mail.com - jon
    alicia@mail.com - jon
    peter@mail.com - jon
    eli@mail.com - jon
    jackie@mail.com - jon

## App design diagram

![diagram](https://github.com/tuxrace/react-shoutbox/raw/master/images/app-design-diagram.png)

## User story

    Application Title: ShoutBux
    Description: A twitter like application that lets you post a “shout”(with a max character limit) to your timeline.
    Specs:
    1. Must be written in NodeJS frameworks (expressJS, meteorJS etc).
    2. Must have its own Repository(GitHub, BitBucket etc).
    3. Must have testing.
    4. Must use Database storage(MySQL, sqLite or MongoDB etc).
    5. A README file that contains the information about the application and the steps on how to run it.
    6. Must have a high level app design structure diagram. (Important!)

    Requirements:
    1. The application should have a simple login feature.
        - Must implement correct form handling/validation.
        - Seed the app with atleast 10 users.
    2. Authorized users can post, edit, delete a “shout” to their own timeline.
        - A “shout” should contain 32 chars max.
        - Should contain date posted ( momentjs library can be used)
        - “Shouts” should be sorted by date posted - latest first.
        - Only the owner of the “shout” can alter it.
    3. Only users that follow the other can see each others timeline.
      - Include this on the seeder where in a user follows other user.
    4. Timelines should update realtime. 
        -Whenever User X is looking at User Y’s timeline, every update of Y’s timeline should directly reflect to User X’s view of User Y’s timeline.
    5. Use your imagination for the look and feel of the app.
    6. Candidate should demonstrate test suite implementations.

    Note: Requirements 1,2 and 6 are TOP priorities.