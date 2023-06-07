const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/', function(req, res, next, err) {
  try {
    let results = req.body.developers.map(async (d) => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.json(out);
  } catch {
    next(err);
  }
});

app.listen(5555);
