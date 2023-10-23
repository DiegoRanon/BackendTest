const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const etudiantSchema = new Schema({

    nom:{type: String,required: true},
    email:{type: String, required: true},
    motdepasse:{type: String, required: true},
    numTel:{type: String,required: true},
    userType:{type: String,required: true},
    addressEtu:{type: String,required: true}

});

module.exports = mongoose.model("Etudiant", etudiantSchema);