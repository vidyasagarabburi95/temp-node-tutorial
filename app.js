/*const amount=9
if (amount<10){
    console.log('hey number less than 10')
}else{
    console.log('hey number ')
}
console.log(__dirname)*/

//info about current user
/*const os=require('os')
const path=require('path')
console.log(path.sep)
const user=os.userInfo()
console.log(user)
//method returns system uptime
console.log(`The System Uptime is ${os.uptime()} seconds`)*/

/*const currentOS={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}
console.log(currentOS)*/
/*const path=require('path')
console.log(path.sep)//for specific separator
const filePath=path.join('/content/','subfolder','test.txt')
console.log(filePath)
const base=path.basename(filePath)
console.log(base)*/
//const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
//console.log(absolute)

/*const {readFileSync,writeFileSync}=require('fs')
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')
console.log(first,second)
writeFileSync('./content/result-sync.txt',`here is the result ${first},${second}`,{flag:'a'})*/
// it is to append the the two files

/*const { readFile, writeFile } = require("fs");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `here is the result :${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});*/

/*const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  //res.write('welcome to our home page')
  //res.end()
  else if (req.url === "/about") {
    res.end("here is our short history");
  } else {
    res.end(`<h1>Opps!</h1>
        <p>we cant see the page you are looking for</p>
        <a href='/'>back home</a>`);
  }
});
server.listen(5000);*/
const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const newItems=_.flatMapDeep(items)
console.log(newItems)

