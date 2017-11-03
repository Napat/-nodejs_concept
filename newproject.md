พื้นฐานที่จำเป็นต้องรู้สำหรับการสร้าง project ขึ้นมาใหม่มีดังนี้  

# init project  
ในแต่ละ project จำเป็นจะต้องมีไฟล์ `package.json` อยู่เพื่อเก็บค่า config ต่างๆเอาไว้ ซึ่งเราสามารถสร้างได้ด้วยสองวิธีคือ
1. เขียนไฟล์ `package.json` ขึ้นมาเอง รูปแบบพื้นฐานดังนี้  
```
{
  "name": "myfirstnode",
  "version": "1.0.0"
}
```

2. ใช้คำสั่ง `npm init` เพื่อช่วยสร้างไฟล์ `package.json` ขึ้นมาใหม่ จะมี prompt ขึ้นมาให้ตั้งค่าตามที่ต้องการ ในที่นี้จะตั้งค่าดังนี้  
```
{
  "name": "myfirstnode",
  "version": "1.0.0",
  "description": "My node project ",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

์Note: จริงๆแล้วฟีลที่จำเป็นจะต้องมีใน `package.json` มีแค่สองฟีลคือ `name` และ `version` ส่วนอื่นๆเป็น optional จะมีหรือไม่มีก็ได้  


# ฺBasic application   
การรัน application ต่างๆสามารถทำได้ดังนี้  
  
### สร้างไฟล์ app_writefile.js และทดสอบดังนี้
```
$ cat app_writefile.js
var fs = require('fs');

const filename = 'log.txt';
const msg = 'Hello World';

fs.writeFile(filename, msg, {encoding: 'utf8'}, function(err) {
  if (err) throw err;

  console.log(filename + ' is saved!!');
});
$
$ node app_writefile.js
log.txt is saved!!
$
$ cat log.txt
Hello World
```

### สร้างไฟล์ app_readfile.js และทดสอบดังนี้
```
$ cat app_readfile.js
var fs = require('fs');

const filename = 'log.txt';

fs.readFile(filename, {encoding: 'utf8'}, function(err, data) {
  if (err) throw err;

  console.log(filename + ' data: ' + data);
});
$
$ node .\app_readfile.js
log.txt data: Hello World
```

### ทดสอบติดตั้ง package: lodash  
```
$ npm install lodash
$ ls .\node_modules\
lodash/
$
$ cat newproject/package.json
{
  "name": "myfirstnode",
  ...
  "dependencies": {
    "lodash": "^4.17.4"
  }
}
```




