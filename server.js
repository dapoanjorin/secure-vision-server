require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the 'admin_panel' directory
app.use(express.static('./src/admin_panel'));


// Routes
app.use('/api/alerts', require('./src/routes/alert.routes'));

app.get('/', (req, res) => {
    res.send('Secure Vision Server is Running...');
});

const multer = require("multer");
const path = require("path");

// Configure storage for uploaded videos
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// Serve static files from 'uploads' folder
app.use("/uploads", express.static("uploads"));

// Video Upload API
app.post("/api/upload-video", upload.single("video"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No video uploaded." });
    }

    // Here, you would send the file to the AI system for scanning
    console.log(`Video uploaded: ${req.file.filename}`);
    res.status(200).json({ message: "Video uploaded successfully.", filename: req.file.filename });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
