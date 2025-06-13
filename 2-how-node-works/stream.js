const fs = required('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    
    // solution - 1

  //  fs.readFile("text-file.txt", (err, data) => {
    //    if(err) console.log(err);
     //   res.end(data);
   // });


   // solution - 2 streams 

/*
   const readable = fs.createReadStream('test-file.txt')
   readable.on('data', chunk => {
    res.write(chunk);
   });
   readable.on("end", () => {
    res.end();
   });
   readable.on("error", err  => {
    console.log(err);
    res.status = 500;
    res.end("File not found!");
});



 */

    // solution - 3 

    const readable = fs.createReadStream("test-file.txt");
    readable.pipe(res);
    // readableSource.pipe(writeableDest)
});



server.listen(8000, "127.0.0.1", () => {
    console.log("Listening...");
});