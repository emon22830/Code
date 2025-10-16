const fs = require("fs");



// fs.writeFileSync("./test.txt", "Hello World");
// fs.appendFileSync("./test.txt", "I am MD EMON");

fs.writeFile("./test.txt", "From Asyn, Hello World", (err)=>{
    console.log("File Created");
});


const result = fs.readFileSync("./contacts.txt", "utf-8")
console.log(result);