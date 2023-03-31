const { CauseModel } = require('../models');

const createCause = async (parent, args, context) => {
    if (context.user){ // only logged in users
        const newCause = await CauseModel.create({
            name: args.causeInput.name,
            description: args.causeInput.description,
            headquarters: args.causeInput.headquarters,
            contactName: args.causeInput.contactName,
            contactEmail: args.causeInput.contactEmail,
            websiteLink: args.causeInput.websiteLink,
            category: args.causeInput.categoryId,
            user: context.user._id,
        });
        return newCause;
    } else {
        throw console.error('You are not authenticated');
    }
}

const getAllCauses = async () => {
    const causes = await CauseModel.find({}).populate("category").populate("user").exec();
    return causes;
};

const findCauseById = async () => {

};

const editCause = async () => {

};

const deleteCause = async () => {

};


const getCausesByCategory = async () => {

};


module.exports = { createCause, getAllCauses };
