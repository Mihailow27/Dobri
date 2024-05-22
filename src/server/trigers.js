const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

exports.logOperations = functions.firestore
  .document("{collectionId}/{docId}")
  .onWrite(async (change, context) => {
    const collection = context.params.collectionId;
    const type = change.before.exists
      ? change.after.exists
        ? "UPDATE"
        : "DELETE"
      : "INSERT";
    const timestamp = admin.firestore.FieldValue.serverTimestamp();
    const logEntry = {
      collection,
      type,
      timestamp,
    };

    await db.collection("OperationsLog").add(logEntry);
  });
