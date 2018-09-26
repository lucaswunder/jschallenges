const md = require('markdown-it')();

module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define(
    'Section',
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      getterMethods: {
        formattedContent() {
          return md.render(this.description);
        },
      },
    },
  );

  Section.associate = (models) => {
    Section.belongsTo(models.Project);
  };

  return Section;
};
