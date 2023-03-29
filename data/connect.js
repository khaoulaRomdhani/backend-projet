const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connect =
    mongoose.connect('mongodb+srv://khaoularomdhani:ismaik11@cluster0.iebevfx.mongodb.net/test',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch(error => console.log(`Connexion à MongoDB échouée ! Erreur : ${error}`));



module.exports = connect