const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ message: 'Hello from some parts of the universe' });
});

app.get('/jupiter', (req, res) => {
    res.send({
        message: 'Largest planet in the solar system, weighing 1.898 × 10^27 kg',
        population: 0
    });
});

app.get('/earth', (req, res) => {
    res.send({
        message: 'The only planet in our solar system not named after a Greek or Roman god',
        population: 7900000000
    });
});

app.get('/saturn', (req, res) => {
    res.send({
        message: 'The only planet in our solar system with an average density lower than water',
        population: 0
    });
});

app.get('/pluto', (req, res) => {
    res.send({
        message: 'Coldest planet in the solar system',
        population: 0
    });
    
});

app.get('/uranus', (req, res) => {
    res.send({
        message: 'Another planet in the solar system', 
        population: 0
    })
})
app.listen(3005, () => {
    console.log('Server is running on port 3005');
});
