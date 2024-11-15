import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {type:String, required: true},
    items: {type: Array, required: true},
    amount: {type: Number, required: true},
    address: {type: String, required: true},
    status: {type: String, required: "Food Processing"},
    date: {type: Date, required: Date.now()},
    payment: {type: Boolean, required: false}
})

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;
