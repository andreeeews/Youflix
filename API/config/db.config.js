const mongoose = require('mongoose');
require('dotenv').config()

const MONGODB_URI =
    process.env.MONGODB_URI

mongoose
    .connect(MONGODB_URI)
    .then(() => 
        console.info('Successfully connected to the database ✅')
    )
    .catch((error) => 
        console.error(
            'An error ocurred trying to connect to the database',
            error
        )
    );