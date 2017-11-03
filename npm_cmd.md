
npm(Node Package Manager) คือตัวช่วยจัดการ package(node modules / class / library) สำหรับ javascript และ nodejs 
ืnpm จะถูกติดตั้งมาพร้อมๆกับ nodejs ไม่จำเป็นจะต้องลงเพิ่ม   

# หน้าที่ของ npm  
- create/edit project configuration ต่างๆเช่น package.json  
- download and install modules / library
- update modules / library  
- uninstall modules  
- module sharing: [npmjs.com](https://www.npmjs.com/)  


# คำสั่งพื้นฐานที่ใช้งานบ่อยๆ  
`npm version`, `npm -v`: ตรวจสอบ version ของ npm    
`npm init`: สร้างไฟล์ package.json ใหม่ในขั้นตอนสร้างโปรเจค  
`npm install`: ติดตั้ง module จาก dependencies list ของ project(ในไฟล์ package.json)  
`npm install react -save`: ติดตั้ง module ชื่อ react  
`npm update`: ตรวจสอบ version ของ modules ใน dependencies list ของ project และทำการอัปเกรดหากมี version ใหม่  
`npm uninstall react -save`: ลบ module react ออกจากโปรเจค(รวมถึง dependencies list ด้วย)  
`npm list`: เรียกดูรายชื่อของ modules ที่ถูกติดตั้งอยู่  
  
ในการใช้งานจริงเวลาจะสั่งรันโปรแกรม เราจะไปเขียน scripts ของการ start/stop โปรแกรมเอาไว้ใน package.json เพื่อความสะดวกเวลาเรียกใช้ ตัวอย่างเช่น  

```
$ cat package.json
{
  "name": "myfirstnode",
  "version": "1.0.0",
  "description": "My node project ",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node appecho.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "lodash": "^4.17.4"
  }
}
$ 
$ npm start
> myfirstnode@1.0.0 start newproject
> node appecho.js

Hello World
```


Ref:  
- https://docs.npmjs.com/cli/  
- www.npmjs.com  




