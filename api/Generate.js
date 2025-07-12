// file: api/generate.js
const axios = require('axios')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' })
  }

  const { prompt, style } = req.body

  try {
    const response = await axios.post(
      'https://ghibliimagegenerator.net/api/hasilkan-gambar',
      { prompt, style },
      {
        headers: {
          'Content-Type': 'application/json',
          'origin': 'https://ghibliimagegenerator.net',
          'referer': 'https://ghibliimagegenerator.net/generator',
          'user-agent': 'Mozilla/5.0'
        }
      }
    )

    res.status(200).json(response.data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
