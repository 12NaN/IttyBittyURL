const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');

// Connect to database
connectDB();

app.use(express.json());

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../client/build'));
    app.get('*', (req, res) => {  
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
    console.log('Serving React');
};

//const PORT = 5000;
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));