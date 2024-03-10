const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Fix the typo here
});

app.get('/api/employee',(req,res) => {
    const employees = require('./employee.json');
      
res.json(employees)
    
})

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
