
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


// add order
const addOrder = async (req,res) => {
    const order = new orderModel({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        country: req.body.country,
        subtotal: req.body.subtotal,
        total: req.body.total,
        userId: req.body.userId,
        status: 1,
        createdAt: new Date().getUTCDate(),
    })
    try {
        let userData = await userModel.findById({_id: req.body.userId})
        if (!userData) {
            res.json({success:false, message: 'User undefine'})
        }
        await order.save()
        res.json({success: true, message: 'Order Success'})
    } catch (error) {
        console.log(error);
        res.json({succes:false, message: 'Error'})
        
    }
}

//remove order
const removeOrder = async (req,res) => {
    try {
        let orderData = await orderModel.findById({_id: req.body.orderId})
        if(!orderData){
            return res.json({success: false, message: 'Order not found'})
        }
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:'2', updatedAt: new Date().getUTCDate(), reason: req.body.reason})
        res.json({success:true, message: 'Removed from cart'})
    } catch (error) {
        console.log(error);
        res.json({success: false, message:'Error'})
    }
}

//get order of user
const getOrder = async (req,res) => {
    try {
        let orderData = await orderModel.find({userId: req.body.userId})
        return res.json({success:true, orderData})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:'Error'})
        
    }
}

//get all order
const getAllOrder = async (req, res) => {
    try {
        let orderData = await orderModel.find({})
        res.json({success: true, orderData})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: 'Error'})
    }
}





export { addOrder, removeOrder, getOrder, getAllOrder };