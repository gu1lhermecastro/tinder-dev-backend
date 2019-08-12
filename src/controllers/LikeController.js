const User = require('../models/User')

module.exports = {
  async store(req, res) {

    const {
      userId
    } = req.params;
    const {
      user
    } = req.headers;

    const loggedUser = await User.findById(user);
    const targetUser = await User.findById(userId);

    if (!targetUser) return res.status(400).json({
      error: 'User not exists'
    });

    if (!targetUser.likes.includes(loggedUser._id)) return console.log('DEU MATCH');

    loggedUser.likes.push(targetUser._id);

    await loggedUser.save();

    return res.json(loggedUser);
  }
};