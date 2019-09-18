import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

// Admin initialization must be made before all other imports, since some of them may use from it
// const serviceAccount = require(`../firebase-config.json`)
admin.initializeApp()

export const myFunction = functions.https.onRequest((_, response) => {
  response.status(200).send({ version: "v1" })
})
