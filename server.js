require('dotenv').config();
console.log("build ENV:", process.env.NODE_ENV); // 将显示"development"
console.log("build PORT:", process.env.CUSTOMER_ID); // 将显示"3000"

const env = process.env.NODE_ENV || 'development';
const express = require('express');
const path = require('path');
const fs = require('fs');  // 引入文件系统模块

const app = express();
const port = process.env.PORT || 3001;  // 优化端口配置

// 静态文件目录
const envDir = env === 'production' ? 'dist' : 'src';
app.use(express.static(envDir));

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} request to ${req.url}`);
    next();
});

// 动态路由处理
app.get('/:pageName', (req, res, next) => {
    const pageName = req.params.pageName;
    const filePath = path.join(__dirname, 'dist', `${pageName}.html`);

    // 检查文件是否存在
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(`File not found: ${pageName}.html`);
            next(); // 传递给下一个中间件/路由处理器
        } else {
            res.sendFile(filePath);
        }
    });
});

// 特定路由优化，例如：首页
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 未匹配路由处理，显示404页面
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'dist', '404.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
