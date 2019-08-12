const axios = require('axios');
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { username } = req.body;

    const response = await axios.get(`https://api.github.com/users/${username}`);

    const { name, bio, avatar_url: avatar } = response.data;

    const user = await User.create({
      name,
      user: username,
      bio,
      avatar: avatar
    });

    return res.json(user);
  }
};
