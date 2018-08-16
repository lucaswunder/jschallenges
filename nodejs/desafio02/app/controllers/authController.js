const bcrypt = require('bcryptjs');
const { User } = require('../models');

module.exports = {
  signin(req, res) {
    res.render('auth/signin');
  },
  signup(req, res) {
    res.render('auth/signup');
  },
  async register(req, res, next) {
    try {
      const { email } = req.body;
      if (await User.findOne({ where: { email } })) {
        req.flash('error', 'E-mail já cadastrado');
        return res.redirect('back');
      }

      const password = await bcrypt.hash(req.body.password, 5);

      await User.create({ ...req.body, password });
      req.flash('success', 'Usuário cadastrado com sucesso');
      return res.redirect('/');
    } catch (err) {
      return next(err);
    }
  },
};
