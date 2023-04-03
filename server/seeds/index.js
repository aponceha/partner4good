const db = require('../config/connection');
const { createCategories, removeAllCategories } = require('./categories');
const { createCauses, removeAllCauses } = require('./causes');
const { createUsers, removeAllUsers } = require('./users');

// Should erase everything in the database before seeding
 
const runSeeds = async () => {
    // delete seeded causes
    console.log("=========== Removing Causes ===========");
    await removeAllCauses();
    // delete seeded users
    console.log("=========== Removing Users ===========");
    await removeAllUsers();
    // delete seeded categories
    console.log("=========== Removing Categories ===========");
    await removeAllCategories();
    // seed users
    console.log("=========== Seeding Users ===========");
    await createUsers();
    // seed categories
    console.log("=========== Seeding Categories ===========");
    await createCategories();
    // seed causes
    console.log("=========== Seeding Causes ===========");
    await createCauses();
    
}

db.once('open', async () => {
    console.log("=========== Start Seeding ===========");
    await runSeeds();
    console.log("=========== End Seeding ===========");
    process.exit(0);
});