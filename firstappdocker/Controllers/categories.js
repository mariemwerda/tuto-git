import express from "express";
import mongoose from "mongoose";
import Categorie from "../Models/categorie.js";
export const getCategories = async (req, res) => {
    try {
        const cat = await Categorie.find();
        res.status(200).json(cat);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}






