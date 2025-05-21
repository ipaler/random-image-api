# Random Image API

一个简单的 API，用于从 GitHub 仓库中随机获取并显示图片。

## 技术架构

- Node.js
- Express.js
- Axios
- GitHub API

## 运行说明

1. 克隆项目 `git clone https://github.com/ipaler/random-image-api.git`
2. 安装依赖：`npm install`
3. 设置环境变量：
   - GITHUB_REPO_OWNER
   - GITHUB_REPO_NAME
   - GITHUB_PATH_TO_IMAGES
4. 启动服务器：`npm start`

## 接口说明

### `/random` 接口

- **功能**：从 GitHub 仓库中随机获取一张图片，并使用 `img` 标签直接在浏览器中显示。
- **请求方式**：GET
- **请求示例**：`http://localhost:3000/random`
- **响应**：返回一个 HTML 页面，包含随机图片的 `img` 标签。

### `/random-image` 接口

- **功能**：从 GitHub 仓库中随机获取一张图片的 URL，并以 JSON 格式返回。
- **请求方式**：GET
- **请求示例**：`http://localhost:3000/random-image`
- **响应格式**：
  ```json
  {
    "url": "https://raw.githubusercontent.com/your-username/your-repo/main/path/to/image.jpg"
  }
  ```

## 部署方式

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fipaler%2Frandom-image-api)

### 其他平台

- 确保Node.js版本 >= 12
- 配置环境变量
- 使用`npm start`启动服务