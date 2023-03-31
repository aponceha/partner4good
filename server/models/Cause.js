const mongoose = require("mongoose");

const causeSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Cause name is required"]
    },
    description: {
        type: String,
        required: [false, "Description is required"]
    },
    // picture: TBD,
    contactName: {
        type: String,
        required: [false, "Contact name is required"]
    },
    contactEmail: {
        type: String,
        required: [false, "Contact email is required"]
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: [false, "Category is required"]
    },
    headquarters: {
        type:String,
        required: [false, "Address is required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    websiteLink: {
        type: String,
        required: false
    
    }
    
});

const CauseModel = mongoose.model("cause", causeSchema);

module.exports = CauseModel;
