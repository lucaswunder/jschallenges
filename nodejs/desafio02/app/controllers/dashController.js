const { Project } = require('../models');

module.exports = {
  async index(req, res, next) {
    try {
      const projects = await Project.findAll({
        // include: [Snippet],
        where: {
          UserId: req.session.user.id,
        },
      });

      return res.render('dashboard/index', { projects, username: req.session.user.name });
    } catch (err) {
      return next(err);
    }
  },
};
