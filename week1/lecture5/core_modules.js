const os = require('os');
const path = require("path")
const fs = require("fs")
const crypte = require("crypto")
const dns = require('dns');
const process = require('process');
// const { log } = require('console');
// console.log(os.homedir());

// // const filepath = path.resolve("lecture5","core_modules.js")
// // const filepath = path.join(__dirname,"core_modules.js")
// // console.log(filepath);

// const filepath = "C:/Users/katar/OneDrive/Documents/Web dev sem 3/week1/lecture5/core_modules.js"

// console.log(path.basename(filepath));
// console.log(path.dirname(filepath));
// console.log(path.extname(filepath));


//we need utf-8 when we read the file otherwise there is no need of it

// const data = fs.readFileSync("./sample.txt", "utf-8") //synchronous
// fs.readFile("./sample.txt", "utf-8", (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
        
//     }
// }) //asynchronous
// console.log(data);


// 2.write file 
// fs.writeFileSync("./sample.txt","hello world")

// fs.writeFile("./sample.txt","hello wrold again",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file created");
        
//     }
// })


// 3. Append file 

// fs.appendFile("./sample.txt","hello world\n",(err)=>{
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log("file created");
        
//     }
// })

// 4. delete file 

// fs.unlink("./sample1.txt",(err)=>{
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log("file deleted");
        
//     }
// })


// **Crypto

// const password = "Alex@1234"
// //same hash code generate
// const hash = crypte.createHash("sha256").update(password).digest("hex");
// console.log(hash)

// const salt = crypte.randomBytes(16).toString("hex")
// console.log(salt)

// const salthash = crypte.createHmac("sha256",salt).update(password).digest("hex");
// console.log(salthash);

// const uid = crypte.randomUUID()
// console.log(uid);


// **dns 

// dns.lookup('ww.google.com',(err,address,family)=>{
//     if (err) {
//         console.log(err);
        
//     }
//     else{
//         console.log(address);
//         console.log(family);
        
//     }
// })

// dns.reverse('8.8.8.8',(err,hostname)=>{
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log(hostname);
        
//     }
// })


// **process 

const data = process.argv
console.log(data);
console.log(data[2],data[3]);
console.log(process.version);
console.log(process.platform);
console.log(process.pid);
console.log(process.cwd);