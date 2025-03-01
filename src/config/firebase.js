const admin = require("firebase-admin");
const serviceAccount = require("../vision-43281-firebase-adminsdk-fbsvc-7bb1f3e51f.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
