import mongoose, { trusted } from "mongoose";

const orderSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    street: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip_code: {type: String, required: true},
    country: {type: String, required: true},
    subtotal: {type: String, required: true},
    total: {type: String, required: true},
    userId: {type: String, required: true},
    status: {type: String, required: true},
    createdAt: {type: Date, required: true},
    updatedAt: {type: Date, required: false},
    reason: {type: String, required: false}
})

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);

export default orderModel;