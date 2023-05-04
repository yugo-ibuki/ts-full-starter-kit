import express from 'express';
import { createYoga } from 'graphql-yoga'

const port = process.env.PORT || 8001;
const app = express();

const cors = {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true,
        allowedHeaders: ['X-Custom-Header'],
        methods: ['POST']
    }
}

const yoga = createYoga({})

// Bind GraphQL Yoga to `/graphql` endpoint
app.use('/graphql', yoga)

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.listen(port, () =>
    console.log(`[${new Date().toISOString()}] start server[${port}]`)
);