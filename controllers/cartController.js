
import foodModel from "../models/foodModel.js";
import userModel from "../models/userModel.js";


// add cart item 
const addToCart = async (req,res) => {
    try {
        let userData = await userModel.findById({_id: req.body.userId})
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }else{
            cartData[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success: true, message: 'Added to cart'})
    } catch (error) {
        console.log(error);
        res.json({succes:false, message: 'Error'})
        
    }
}

//remove cart item
const removeFromCart = async (req,res) => {
    try {
        let userData = await userModel.findById({_id: req.body.userId})
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true, message: 'Removed from cart'})
    } catch (error) {
        console.log(error);
        res.json({success: false, message:'Error'})
    }
}
const deleteFromCart = async (req,res) => {
    try {
        let userData = await userModel.findById({_id: req.body.userId})
        let cartData = await userData.cartData;
       
        cartData[req.body.itemId] = 0
        
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true, message: 'Delete from cart'})
    } catch (error) {
        console.log(error);
        res.json({success: false, message:'Error'})
    }
}

//get cart user
const getCart = async (req,res) => {
    try {
        let userData = await userModel.findById({_id: req.body.userId})
        let cartData = await userData.cartData
        return res.json({success:true, cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:'Error'})
        
    }
}





export { addToCart, removeFromCart, getCart, deleteFromCart };