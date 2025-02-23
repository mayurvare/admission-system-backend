const { Router } = require("express");
const { User } = require("../config/db");
const Razorpay = require("razorpay");

const router = Router();
const razorpay = new Razorpay({
    key_id: 'rzp_test_HunzwROOPkKw4u',
    key_secret: 'Xl9FbtCKMsh6inrq4bnrmUW7',
});

router.post('/api/create-order', async (req, res) => {
    try {

        const { amount, receiptId } = req.body;

        const options = {
            amount: amount, // amount in paise (₹100)
            currency: "INR",
            receipt: receiptId,
        };

        const order = await razorpay.orders.create(options);
        res.status(200).json({ order: order });
    } catch (error) {
        res.status(500).send(error);
    }

});

module.exports = router