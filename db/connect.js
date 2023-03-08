const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Successfully Connected to MongoDB`);
}).catch((error) => {
        console.log('Not Connected to MyMongoDB', error);
});





