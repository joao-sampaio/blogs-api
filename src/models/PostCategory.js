const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'BlogPost',
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id'
      }
    }
  }, {   
    underscored: true,
    timestamps: true,
    tableName: 'posts_categories'
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { 
      otherKey: 'category_id',
      foreignKey: 'post_id',
      as: 'category',
      through: PostCategory,
    });
    models.Category.belongsToMany(models.BlogPost, { 
      otherKey: 'post_id',
      foreignKey: 'category_id',
      as: 'post',
      through: PostCategory,
    });
  };

  return PostCategory;
};

module.exports = PostCategory;