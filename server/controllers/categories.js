const { CategoryModel } = require("../models");

const createCategory = async (parent, args, context) => {
//   if (context.user) {
    const newCategory = await CategoryModel.create({
      name: args.name,
    });
    return newCategory;
//   } else {
//     throw console.error("You are not authenticated");
//   }
};

const getAllCategories = async () => {
    const categories = await CategoryModel.find({}).exec();
    return categories;
    };

const findCategoryById = async () => {};

module.exports = { createCategory, getAllCategories };
