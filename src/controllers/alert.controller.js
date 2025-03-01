const pool = require('../config/db');
const admin = require('../config/firebase');

exports.createAlert = async (req, res) => {
    try {
        const { type, description, severity, location } = req.body;

        const result = await pool.query(
            "INSERT INTO alerts (type, description, severity, location) VALUES ($1, $2, $3, $4) RETURNING *",
            [type, description, severity, location]
        );

        const alert = result.rows[0];

        // Send FCM notification
        const message = {
            notification: {
                title: `Security Alert: ${type}`,
                body: description,
            },
            token: "dJqMkWeHTjmvl0FLfCUQn_:APA91bGwNYbHVIf5g7qnBVlxReo1AfL2-NBPHXk98eQePo1q7eOh9RxnE2_ijJhDwxvXmbeCSnVrJWEXYYZV9O7pshqSyGATKyYP14USv8Qv7JOeeNI60FA"  // All personnel subscribed to this topic will receive notifications
        };

        await admin.messaging().send(message);
        console.log("Notification sent");

        res.status(201).json(alert);
    } catch (error) {
        console.error("Error creating alert:", error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.getAlerts = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM alerts ORDER BY timestamp DESC");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching alerts:", error);
        res.status(500).json({ message: "Server error" });
    }
};
