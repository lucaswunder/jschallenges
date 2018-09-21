const { Project, Section } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const project = await Project.create({
        ...req.body,
        UserId: req.session.user.id,
      });
      req.flash('sucesss', 'Projeto criado');

      return res.redirect(`/app/project/${project.id}`);
    } catch (err) {
      return next(err);
    }
  },

  async show(req, res, next) {
    try {
      const { id } = req.params;
      const project = await Project.find({
        where: { id },
        include: [{ model: Section, as: 'Sections' }],
      });

      return res.render('project/show', {
        project,
        activeProjectId: id,
        username: req.session.user.name,
      });
    } catch (err) {
      return next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const { id } = req.params;
      await Project.destroy({ where: { id } });
      req.flash('success', 'Excluido com sucesso');
      return res.redirect('/app/dashboard');
    } catch (err) {
      return next(err);
    }
  },
};
