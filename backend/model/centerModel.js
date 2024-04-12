//in this folder model, we're gonna define any ressource that we have
//in this file we're gonna define the schema wich gonna be the fields for this particular ressource ( goal) 

const  mongoose = require('mongoose')


const centerSchema = mongoose.Schema({
    nom: {
        type : String,
        required : [true , 'le nom est obligatoire']
    },
    adresse : {
        type : String,
        required : [true,'l\'adresse est obligatoire']
    },
    heuresOuvertures : {
        type : String,
        default : "09h-12h à 14h-17h",
        required : [true,'les horaires sont obligatoires']
    },
})

module.exports = mongoose.model('center', centerSchema)