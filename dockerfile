# FROM 為指定基底鏡像
FROM node:18-alpine

# 在 container 建立名為 app 的根目錄 
WORKDIR /app

# 將本地端所有檔案複製到 container 的 app 目錄下
COPY . .

# 安裝專案所需的套件
RUN npm install

# 容器對外開放的埠號
EXPOSE 3000

# 容器啟動後要執行的指令
CMD ["npm", "start"]

# CMD [ "tail", "-f", "/dev/null" ]

# tag 指令
# docker tag <image name>:latest <image name>:v1.0.0

