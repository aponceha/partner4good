// from activity 21.28
const { createUser, login } = require('../controllers/users');
const { createCause, getAllCauses  } = require('../controllers/causes');
const { createCategory } = require('../controllers/categories');

const resolvers = {
  Query: {
    // <name>: <controller>
    user:  async (parent, args, context) => {
      // const user = await User.create(args);
      // const token = signToken(user);
      // return { token, user };
    },
    causes: getAllCauses,
    categories:  async (parent, args, context) => {},
  },
  Mutation: {
    createUser: createUser,
    login: login,

    createCause: createCause, 
    editCause: async (parent, {
      name, description,
      address,
      contactName, 
      categoryId,
      websiteLink }, context) => {},
    deleteCause: async (parent, { causeId }, context) => {},
    
    createCategory: async (parent, { name }, context) => {},
    editCategory: async (parent, { categoryId, name }, context) => {},
    deleteCategory: async (parent, { categoryId }, context) => {},
  },
};

module.exports = resolvers;
