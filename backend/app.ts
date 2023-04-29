import express from 'express';

const app = express();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('hey');
});

app.get('/hello', (req, res) => {
    res.send('Hello World!!');
});

app.listen(port, () =>
    console.log(`[${new Date().toISOString()}] start server[${port}]`)
);