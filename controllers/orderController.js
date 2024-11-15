import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';

// place order for user
const placeOrder = async (req,res) => {
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.items,
            address: req.body.address,
        })
        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})
        res.json({success: true, message: 'Order done'})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: 'Error'})
    }
}

const placeOrderAd = async (req,res) => {
    
}




export {placeOrder}