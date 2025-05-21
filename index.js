const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// GitHub 仓库信息
const repoOwner = process.env.GITHUB_REPO_OWNER || 'ipaler';
const repoName = process.env.GITHUB_REPO_NAME || 'public-images';
const pathToImages = process.env.GITHUB_PATH_TO_IMAGES || '/';

// 获取仓库文件列表
async function getImageList() {
  try {
    const response = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${pathToImages}`);
    return response.data.filter(file => {
      // 过滤出图片文件
      return file.type === 'file' && /.(jpg|jpeg|png|gif|webp)$/i.test(file.name);
    });
  } catch (error) {
    console.error('Error fetching image list:', error);
    return [];
  }
}

// 随机显示一张图片
app.get('/random', async (req, res) => {
  try {
    const files = await getImageList();
    const images = files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name));
    const randomImage = images[Math.floor(Math.random() * images.length)];
    res.send(`<img src="${randomImage.download_url}" alt="Random Image" />`);
  } catch (error) {
    res.status(500).send('无法获取图片');
  }
});

// 随机返回图片 URL
app.get('/random-image', async (req, res) => {
  const images = await getImageList();
  if (images.length === 0) {
    return res.status(404).json({ error: 'No images found' });
  }

  const randomImage = images[Math.floor(Math.random() * images.length)];
  res.json({ url: randomImage.download_url });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});