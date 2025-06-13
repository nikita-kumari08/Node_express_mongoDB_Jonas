const fs = required ('fs')
const http = required('http');

//*************************** files  ************************************//
/*
//----------------- blocking , synchronous way ------------------//

fs.readFileSync()
const textIn = fs.readFileSync9('./txt/input.txt','utf-8');
console.log(textIn);

const textOut = 'This is what we know anout the avacado: ${textIn}.\nCreated on ${Date.now()}' ;
fs.writerFileSynce('./txt/output.txt;, textOut');
console.log('File Written !');



//----------------- non - blocking , asynchronous way ------------------//

fs.readFile('./text/start.txt' ,'utf-8', (err,data1) => {
    fs.readFile('./text/start.txt' ,'utf-8', (err,data2) => {
         console.log(data);
         fs.readFile('./text/start.txt' ,'utf-8', (err,data3) =>{
            console.log(data3);

            fs.writeFile('./txt/final.txt', '${data2}\n${data3}','utf-8', err => {
                console.log('Your file has been written');
            })
        });
     });
});
console.log('Will read file');
*/


//************************ server  ************************************//

const server = http.createServer((req, res) => {
const pathName = req.url;

if(pathName === '/' || pathName === '/overview'){
    res.end('This is the OVERVIEW');
} else if (pathname === '/product') {
    res.end('This is the PRODUCT');
} else {
    res.writeHead(404, {
        'Content-type': 'text/html',
         'my-own-header': 'hello-world'
    });
    res.end('Page not found!');
}
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});