const { CategoryModel } = require('../models');


const createCategories = async () => { 
    const categories = [
        { name: 'Environment'},
        { name: 'Diversity, Equity, Inclusion'},
        { name: 'LGBTQ'},
        { name: 'Homelessness'},
        { name: 'Food Security'},
    ];
    await CategoryModel.insertMany(categories);
}

const removeAllCategories = async () => {
    await CategoryModel.remove({});
}

module.exports = { createCategories, removeAllCategories };