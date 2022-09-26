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
  // UserBook.associate = (models) => {
  //   models.Book.belongsToMany(models.User, {
  //     as: 'users',
  //     through: UserBook,
  //     foreignKey: 'bookId', // se refere ao id de Book na tabela de `users_books`
  //     otherKey: 'userId', // se refere a outra chave de `users_books` 
  //   });
  //   models.User.belongsToMany(models.Book, {
  //     as: 'books',
  //     through: UserBook,
  //     foreignKey: 'userId',  // se refere ao id de User na tabela de `users_books`
  //     otherKey: 'bookId',
  //   });
  // };

  return PostCategory;
};

module.exports = PostCategory;