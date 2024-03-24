# 使用官方Node.js的Docker鏡像作為基礎層
FROM node:14

# 設定工作目錄為/app
WORKDIR /app

# 複製package.json和package-lock.json文件
COPY package*.json ./

# 安裝所有依賴，包括開發依賴
RUN npm install --only=development

# 複製專案文件到工作目錄
COPY . .

# 暴露3000端口（或您應用的實際端口）
EXPOSE 3000

# 使用nodemon啟動應用
CMD ["npx", "nodemon", "server.js"]
