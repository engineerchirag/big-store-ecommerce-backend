const mongoose = require("mongoose");

const schema = mongoose.Schema({
	firstName: {
        type: String,
        required: true,
      },
	lastName: {
        type: String
    },
});


module.exports = mongoose.model("User", schema)