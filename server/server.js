const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
const api_key = process.env.VITE_APP_NOTION_API_KEY;

app.post('/api/create-page', async (req, res) => {
  try {
    const response = await axios.post('https://api.notion.com/v1/pages', req.body, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${api_key}`,
        'Notion-Version': '2022-06-28'
      }
    });

    res.json(response.data);
  } catch (error) {
    res.json(error);
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
