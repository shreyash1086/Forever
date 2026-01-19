import express from 'express'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus } from '../controllers/orderController.js'

const orderRouter = express.Router()

//admin features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

//payment feature
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)


//user feature

orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter;



