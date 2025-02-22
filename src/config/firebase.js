const admin = require("firebase-admin");
const serviceAccount = require("../vision-43281-firebase-adminsdk-fbsvc-a7fd89e210.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
