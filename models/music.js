'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Music extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Music.init({
    title: DataTypes.STRING,
    duration: DataTypes.STRING,
    genre: DataTypes.STRING,
    artist: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Music',
    tableName: 'music'
  });
  return Music;
};