import express from "express";
import postRoutes from "./routes/posts.js"
const app = express();
app.use(express.json());

app.use("/api/post", postRoutes);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(4000, () => {
    console.log("Connected!");
})