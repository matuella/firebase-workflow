# Firebase Environment Keys

### Storing a Key
`firebase functions:config:set container.key='123456'`

Obs.: container can't be named like camelCase.
I.e.: `containerCamelCase.key` would crash.

### Fetching the Key
`const containerKey = functions.config().container.key`

# Running the Project

To run the project (deploy and serve locally), you MUST have access to the `admin-sdk-config.json` which is used to call the `admin.initializeApp()` function.

### Repository

All objects created/updated at the repository are formatted before being sent to Firestore using `JSON.parse` with `JSON.stringify`. This happens because Firestore doesn't support objects created using the `new` operator of Typescript/Javascript. Fore more details, [check this link](https://stackoverflow.com/questions/52221578/firestore-doesnt-support-javascript-objects-with-custom-prototypes).