import mongoose from "mongoose";

const produitSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    fabriquant: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    options: {
        type: String,
        required: true
    }
});

const produits = mongoose.model('Produit', produitSchema); 
export default produits;
