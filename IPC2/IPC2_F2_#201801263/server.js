const express= require('express');

const app= express();

app.get('/api/customers', (req, res) =>{
    const customers=[
        {id:1, firstName: 'John', lastName:  'Ochoa'},
        {id:2, firstName: 'Rodrigo', lastName:  'Ochoa'},
        {id:3, firstName: 'Johanna', lastName:  'Ochoa'}
    ];
    res.json(customers);
});

const port= 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));