const { UserModel, CategoryModel, CauseModel } = require('../models');
const { signToken } = require('../utils/auth');

const createUser = async (parent, args) => {
    const user = await UserModel.create(args);
    const token = signToken(user);
    return { token, user };
}

const login = async (parent, { email, password }) => {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new AuthenticationError('No user found');
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const token = signToken(user);

    return { token, user };
}


module.exports = { createUser, login };
