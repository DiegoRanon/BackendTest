const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const schemaStage = new Schema({
    nom:{type: String, required: true},
    courriel: {type: String, required: true},
    numeroTel: {type: String, required: true},
    nomEntreprise: {type: String, required: true},
    adresseEntreprise:{type: String, required: true},
    typeStage:{type: String, required: true},
    descriptionStage:{type: String, required: true},
    remuneration:{type: String, required: true},
    createur:{type: mongoose.Types.ObjectId, required: true, ref:"Employeur"},
    etudiants:[{type: mongoose.Types.ObjectId, required: true, ref:"Etudiant"}],
    dateEtudiants:[{type: String, required: true}],
    statut:[{type: String, required: true}]

});

module.exports = mongoose.model("Stage", schemaStage);