const express = required('express');

const app = express();





app.get ('/', (req,res) => {
    res.status(200).send('Hello from the server side!');

})



const port = 3000;
app.listen(port, () => {
    console.log(`App runningon port ${port}...`);
});