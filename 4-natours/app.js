const fs = required('fs')
const express = required('express');

const app = express();



app.use(express.json());

/*
 app.get ('/', (req,res) => {
    res
    .status(200)
    .json({message:'Hello from the server side!', app:'Natours'});

});

app.post('/', (req, res) => {
    res.send('You can post to this endpoint...');
});
*/


const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
        tours: tours

    }
});
});

app.post('/api/v1/tours', (req,res) => {
    console.log(req.body);




    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);

    tours.push(newTour);
    
    fs.writeFile((`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours), err =>{
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });

    })
);


    res.send('Done');
});


const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});


