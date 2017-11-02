# Node.js   
- node คือ Web Server ซึ่งเขียนด้วยภาษา JavaScript คุณสมบัติทั่วไปคือ เป็น Open Source และเป็น Cross Platform Runtime Environment สำหรับฝั่ง Server  
[Download & Install](http://nodejs.org/download)  
-  npm(Node Package Manager) คือตัวช่วยจัดการ package ของ node ตัวอย่างเช่น เราสร้าง application ชื่อ app01 และต้องการใช้ package (package คือโปรแกรมหรือโมดูลต่างๆที่เขียนเอาไว้ให้สามารถนำไปใช้งานต่อได้ ) ชื่อว่า lodash ก็สามารถติดตั้งลงใน application ได้ด้วยคำสั่่ง `npm install lodash` ก็จะเกิดโฟลเดอร์ app01/node_modules\lodash เกิดขึ้น เป็นต้น

ตรวจสอบ version ของ node และ npm ที่ติดตั้งอยู่ได้ดังนี้  
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


---------------------------------------------

- [new application & install package](/newproject.md)  



