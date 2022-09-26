const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'BlogPost',
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Category',
        key: 'id'
      }
    }
  }, {   
    underscored: true,
    timestamps: false,
    tableName: 'posts_categories'
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { 
      otherKey: 'categoryId',
      foreignKey: 'postId',
      as: 'category',
      through: PostCategory,
    });
    models.Category.belongsToMany(models.BlogPost, { 
      otherKey: 'postId',
      foreignKey: 'categoryId',
      as: 'post',
      through: PostCategory,
    });
  };

  return PostCategory;
};

module.exports = PostCategory;