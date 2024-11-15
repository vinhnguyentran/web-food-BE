import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    orderId: {type: String, required: true},
    orderInfo: {type: Object, required: true},
    foodList: {type: Array, required: true},
    amount:{type: String, required: true},
    payMethod: {type: String, required: true},
    status: {type: String, required: true},
    date: {type: String, required: true},
    partnerCode: {type: String, required:true},
},{minimize:false})

const paymentModel = mongoose.models.payment || mongoose.model('payments',paymentSchema)
export default paymentModel;