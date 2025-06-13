const fs = required('fs');


setTimerout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediaten1 finished"))



fs.readFile("text-file.txt", () => {
    console.log("I/O finished");
});

console.log("Hello from the top level code");