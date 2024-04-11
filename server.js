require('dotenv').config();
console.log(process.env.NODE_ENV); // 將顯示"development"

const express = require('express');
const path = require('path');

const app = express();
const port = 3001;


// 靜態文件資料夾
app.use(express.static('src'));

// 管理特定路由，例如：首頁
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// 其他自定義路由可以在這裡添加

// 未匹配路由處理，顯示404頁面
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'src', '404.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

//node server.js