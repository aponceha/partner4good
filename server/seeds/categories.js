const { Category } = require('../models');


const createCategories = async () => { 
    const categories = [
        { name: 'Environment'},
        { name: 'Diversity, Equity, Inclusion'},
        { name: 'LGBTQ'},
        { name: 'Homelessness'},
        { name: 'Food Security'},
    ];
    await Category.insertMany(categories);
}

const removeAllCategories = async () => {
    await Category.deleteMany({});
}

module.exports = { createCategories, removeAllCategories };