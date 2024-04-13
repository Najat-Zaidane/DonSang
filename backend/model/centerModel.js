//in this folder model, we're gonna define any ressource that we have
//in this file we're gonna define the schema wich gonna be the fields for this particular ressource ( goal) 

module.exports = (sequelize,DataTypes) => {
    const Center = sequelize.define("center",{
        nom : {
            type: DataTypes.String
        },
        adresse : {
            type : DataTypes.String
        },
        email : {
            type : DataTypes.String
        }
    })

    return Center
}