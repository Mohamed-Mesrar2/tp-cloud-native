import express from "express";
import Produit from "../models/produit.js";

const router = express.Router();
//red
router.get("/", async (req, res) => {
    try {
        const produits = await Produit.find({});
        res.json(produits);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
//Ajouter
router.post("/", async (req, res) => {
    // console.log("Incoming request body:", req.body);  
    const { nom, fabriquant, prix, options } = req.body;
    if (!nom || !fabriquant || !prix || !options) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const produit = await Produit.create({ nom, fabriquant, prix, options });
        res.status(201).json(produit);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

//DELET
router.patch("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const produit = await Produit.findByIdAndDelete(id);
        if (!produit) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});












export default router;
