// from activity 21.28
const { createUser, login } = require('../controllers/users');

const resolvers = {
  Query: {
    // <name>: <controller>
    user:  async (parent, args, context) => {
      // const user = await User.create(args);
      // const token = signToken(user);
      // return { token, user };
    },
    causes:  async (parent, args, context) => {},
    categories:  async (parent, args, context) => {},
  },
  Mutation: {
    createUser: createUser,
    login: login,

    createCause: async (parent, {
      name, description,
      address,
      contactName, 
      categoryId,
      websiteLink }, context) => {},
    editCause: async (parent, {
      name, description,
      address,
      contactName, 
      categoryId,
      websiteLink }, context) => {},
    deleteCause: async (parent, { causeId }, context) => {},
  },
};

module.exports = resolvers;
