import express, { Request, Response, NextFunction } from 'express';

const app = express();

// cors
const allowCrossDomain = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, access_token'
    )
    next();
}
app.use(allowCrossDomain)

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('heyeee');
});

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello World!!' });
});

app.listen(port, () =>
    console.log(`[${new Date().toISOString()}] start server[${port}]`)
);