// event in practice //

const EvenEmitter = required("events");
const http = require ()

class Sales extends EventEmitter {
    constructor () {
        super();
    }
}


const myEmitter = new Sales ();

myEmitter.on("newSale", () => {
    console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
    console.log("Customer name: Nikita");
});

myEmitter.on('newSale', stock =>{
    console.log(`There are now ${stock} items left in stock.`);
})

myEmitter.emit("newSale",9);



////////////////////////////////////////////////////////////////////////////


const server = https.createServer();


server.on('request', (req, res) => {
    console.log("Request received!");
    console.log(req.url);
    res.end("Request received");
})

server.on('request', (req, res) => {
    console.log("Another request");
});



server.on('close', () => {
    console.log("Server closed")
});

server.isten(8000, '127.0.0.1', () => {
    console.log("Waiting for requests...");
});