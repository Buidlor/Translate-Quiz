const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = express();
wordsRoutes = require('./routes/wordsRoutes');
usersRoutes = require('./routes/usersRoutes');

app.use(cors());
app.use(express.json());
app.use('/words',wordsRoutes);
app.use('/users',usersRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});










