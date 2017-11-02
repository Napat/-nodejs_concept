# Node.js   
คือ Web Server ซึ่งเขียนด้วยภาษา JavaScript คุณสมบัติทั่วไปคือ เป็น Open Source และเป็น Cross Platform Runtime Environment สำหรับฝั่ง Server  
[Download & Install](http://nodejs.org/download)  
 
ตรวจสอบ version ได้ดังนี้  
```
$ node -v
v8.9.0
$ npm -v
5.5.1
```

# Node console(Javascript Terminal)  
```
$ node
> 1 + 1
2
> console.log('Hello World');
> printer = function printHello() { return "Hello";}
[Function: printHello]
> printer()
'Hello'
> process.exit(0)
$
```

# Run js file
```
$ cat helloWorld.js
console.log('Hello World');
function printHello() {
  return 'Hello';
}

console.log(printHello());

$
$ node helloWorld.js
Hello World
Hello
$ 
```

# Hello world server  
```
$ cat helloWorld.js
console.log('Hello World');
function printHello() {
  return 'Hello';
}

console.log(printHello());
$ node helloWorld.js
Hello World
Hello
$
$ cat serverhello.js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
$
$
$ node serverhello.js
Server running at http://127.0.0.1:3000/
```

ทดลองเปิด browser ด้วย url: http://127.0.0.1:3000/ ก็จะพบกับคำว่า "Hello World" ปรากฏอยู่


