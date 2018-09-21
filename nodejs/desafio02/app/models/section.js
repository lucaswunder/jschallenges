module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  Section.associate = (models) => {
    Section.belongsTo(models.Project);
  };

  return Section;
};
