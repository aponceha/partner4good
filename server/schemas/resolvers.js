const { AuthenticationError } = require("apollo-server-express");
const { User, Cause, Category } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { email }) => {
      return User.findOne({ _id: userId });
    },
    causes: async () => {
      const causes = await Cause.find({})
        .populate("category")
        .populate("user")
        .exec();
      return causes;
    },
    cause: async (parent, { causeId }) => {
      return Cause.findOne({ _id: causeId }).populate("category").exec();
    },
    // this is for the drop down menu (filter) in view all partners to view by category - likely not working rn
    causesCat: async (parent, { categoryId }) => {
      return Cause.find({ category: categoryId }).populate("category").exec();
    },
    myCause: async (parent, args, context) => {
      // by adding context to our query, we can retrieve the logged in user without specifically searching for them - use to edit and delete their own cause page
      if (context.user) {
        // should i be looking for user._id or cause._id?
        return Cause.findOne({ user: context.user._id })
          .populate("category")
          .exec();
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    categories: async () => {
      return Category.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    createCause: async (parent, args, context) => {
      if (context.user) {
        // only logged in users
        const newCause = await Cause.create({
          name: args.causeInput.name,
          description: args.causeInput.description,
          headquarters: args.causeInput.headquarters,
          contactName: args.causeInput.contactName,
          // contact email linked is the one who creates the cause
          contactEmail: context.user.email,
          // contactEmail: args.causeInput.contactEmail,
          websiteLink: args.causeInput.websiteLink,
          category: args.causeInput.categoryId,
          // user linked is the one who creates the cause
          user: context.user._id,
        });
        // DO WE NEED TO UPDATE USER?
        // await User.findOneAndUpdate(
        //     { _id: context.user._id },
        //     { $addToSet: { causes: cause._id } },
        //   )
        return newCause;
      } else {
        throw new AuthenticationError("You are not authenticated");
      }
    },
    editCause: async (parent, { causeInput }, context) => {
      if (context.user) {
        console.log(causeInput);
        return await Cause.findByIdAndUpdate(
          causeInput.causeId, // when updating this field should be present
          {
            name: causeInput.name,
            description: causeInput.description,
            contactName: causeInput.contactName,
            contactEmail: causeInput.contactEmail,
            category: causeInput.categoryId,
            headquarters: causeInput.headquarters,
            websiteLink: causeInput.websiteLink,
          },
          { new: true, runValidators: true }
        ).populate("category").exec();
      } else {
        throw new AuthenticationError("You are not authenticated");
      }
    },
    deleteCause: async (parent, { causeId }, context) => {
      if (context.user) {
        return await Cause.findByIdAndDelete(causeId).populate("category").exec();
      } else {
        throw new AuthenticationError("You are not authenticated");
      }
    },
  },
};

module.exports = resolvers;
