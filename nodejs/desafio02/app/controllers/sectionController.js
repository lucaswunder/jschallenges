const { Project, Section } = require('../models');

module.exports = {
  async show(req, res, next) {
    try {
      const { projectId, sectionId } = req.params;
      const sections = await Section.findAll({
        include: [Project],
        where: {
          ProjectId: projectId,
        },
      });

      const project = await Project.find({
        where: { id: projectId },
        include: [{ model: Section, as: 'Sections' }],
      });
      const section = await Section.findById(sectionId);

      return res.render('section/show', {
        section,
        sections,
        project,
        activeSectionId: sectionId,
        activeProjectId: projectId,
        username: req.session.user.name,
      });
    } catch (err) {
      return next(err);
    }
  },

  async store(req, res, next) {
    try {
      const section = await Section.create({
        ...req.body,
        ProjectId: req.params.projectId,
      });

      req.flash('sucess', 'Seção criada com sucesso');

      return res.redirect(`/app/project/${req.params.projectId}/section/${section.id}`);
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const { projectId, id } = req.params;
      const section = await Section.findById(id);

      await section.update(req.body);

      req.flash('sucess', 'Seção criada com sucesso');

      return res.redirect(`/app/project/${projectId}/section/${section.id}`);
    } catch (err) {
      return next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const { projectId, id } = req.params;
      await Section.destroy({ where: { id } });
      req.flash('success', 'Excluido com sucesso');
      return res.redirect(`/app/project/${projectId}`);
    } catch (err) {
      return next(err);
    }
  },
};
