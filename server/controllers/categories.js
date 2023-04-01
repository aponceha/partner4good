const { Category } = require("../models");

const createCategory = async (parent, args, context) => {
//   if (context.user) {
    const newCategory = await Category.create({
      name: args.name,
    });
    return newCategory;
//   } else {
//     throw console.error("You are not authenticated");
//   }
};

const getAllCategories = async () => {
    const categories = await Category.find({}).exec();
    return categories;
    };

const findCategoryById = async () => {};

module.exports = { createCategory, getAllCategories };
