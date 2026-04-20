const express = require('express');
const path = require('node:path');
const cors = require('cors');
require('dotenv').config();

/* IMPORT FOR SET UP DB */
// const populateDb = require('./db/populateDb');

/* IMPORT ROUTES */
const mainRouter = require('./routes/mainRouter');

/* App setup */
const app = express();
const BE_PORT = process.env.BE_PORT || 6600;

/* Set up to communicate with FE */
const allowedOrigins = ['http://localhost:3300', 'http://127.0.0.1:3300', `${process.env.FE_URL}`].filter(Boolean);
const corsOptions = {
    origin: (origin, callback) => {
        // allow non-browser requests (Postman, server-to-server)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error(`CORS blocked: ${origin}`));
    },
};
app.use(cors(corsOptions));

/* Populate DB */
// const setupDB = async () => {
//     if (process.env.POPULATE_DB === 'true') {
//         try {
//             console.log('STARTING SETUP DB');
//             await populateDb();
//             console.log('SETUP DB DONE');
//         } catch (err) {
//             console.log('SETUP DB FAILED', err);
//         }
//     } else {
//         console.log('POPULATE_DB not enabled - skipping DB population.');
//     }
// };

// (async () => {
//     await setupDB();
// })();

/* Set up static directory */
// const publicPath = path.join(__dirname, 'public');
// app.use(express.static(publicPath));

/* Set up views directory */
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

/* Use middleware to get post req, take all data from url and convert to an encoded object to use in req */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Routes logic handle */
app.use('/', mainRouter);

/* Handle Errors */
app.use((err, req, res, next) => {
    const errStatusCode = err.status || err.statusCode || 500;
    const errMsg = err.message;
    console.error({ errMsg });
    if (errStatusCode !== 404) console.log({ errStatusCode });

    res.status(errStatusCode).json({ errStatusCode, message: errMsg });
});

app.use((req, res) => {
    res.status(404).render('404', { pageTitle: 'Error' });
});

app.listen(BE_PORT, (err) => {
    if (err) console.log(err);
    console.log(`Listen on PORT: ${process.env.BE_PORT}`);
});
