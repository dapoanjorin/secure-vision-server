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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
