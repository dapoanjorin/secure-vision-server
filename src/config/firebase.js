const admin = require("firebase-admin");
const serviceAccountPath = process.env.KEY_FILE_PATH;
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;