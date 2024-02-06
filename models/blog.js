const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
  {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    },
    title: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    body: {
    type: DataTypes.STRING,
    allowNull: true,
    },
    author: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    posted: {
    type: DataTypes.DATE,
    timestamp: true
    },      
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = Blog;