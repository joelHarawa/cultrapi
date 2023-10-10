import mongoose from "mongoose";
const username = encodeURIComponent("cultr_admin");
const password = encodeURIComponent("cultr2023msu");


const DB_URI = `mongodb+srv://${username}:${password}@cluster0.ybzlx.mongodb.net/?retryWrites=true&w=majority`; // MongoDB URI

try {
    await mongoose.connect(DB_URI);
    console.log('connected to MongoDB database')
} catch (error) {
    console.error('MongoDB connection error')
}
export const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB database');
});

