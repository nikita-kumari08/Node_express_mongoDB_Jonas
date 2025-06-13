const fs = required('fs');
const crypto = required("crypto");


const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;


setTimerout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediaten1 finished"))



fs.readFile("text-file.txt", () => {
    console.log("I/O finished");
     console.log("---------------------------------------------------------------");
     
     setTimerout(() => console.log("Timer 2 finished"), 0);
     setTimerout(() => console.log("Timer 3 finished"), 3000);
     setImmediate(() => console.log("Immediate 2 finished"))
     
     Process.nextTick(() => console.log("Process.nextTick"));
     
     
     console.log("Hello from the top level code");crypto.pbkdf2Sync('password', 'salt', 100000, 1024, "sha512");
     console.log(Date.now()  - start, "Password encrypted");
     
     
     console.log("Hello from the top level code");crypto.pbkdf2Sync('password', 'salt', 100000, 1024, "sha512");
     console.log(Date.now()  - start, "Password encrypted");
     
     
     console.log("Hello from the top level code");crypto.pbkdf2Sync('password', 'salt', 100000, 1024, "sha512");
     console.log(Date.now()  - start, "Password encrypted");
     
     
     console.log("Hello from the top level code");crypto.pbkdf2Sync('password', 'salt', 100000, 1024, "sha512");
     console.log(Date.now()  - start, "Password encrypted");

});


console.log("Hello from the top-level code");










