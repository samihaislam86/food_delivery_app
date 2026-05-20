import mongoose from "mongoose";

const foodsModel = new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    imgURL:String,
    resto_id:mongoose.Schema.Types.ObjectId
});

export const foodSchema=mongoose.models.foods ||mongoose.model("foods",foodsModel);

