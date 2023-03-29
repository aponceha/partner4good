const db = require('../config/connection');
const {createCategories, removeAllCategories} = require('./categories');

// Should erase everything in the database before seeding
 
const runSeeds = async () => {
    // delete seeded causes
    // delete seeded users
    // seed users
    console.log("=========== Removing Categories ===========");
    await removeAllCategories();
    console.log("=========== Seeding Categories ===========");
    await createCategories();
    // seed causes
    // seed causes
}


db.once('open', async () => {
    console.log("=========== Start Seeding ===========");
    await runSeeds();
    console.log("=========== End Seeding ===========");
    process.exit(0);
});