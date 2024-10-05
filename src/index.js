import express from "express";

const app = express()
const port = 3030;

app.use(express.json())


// Home route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
  
// Sample API endpoint
app.get('/api/data', async (req, res) => {
res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});
  