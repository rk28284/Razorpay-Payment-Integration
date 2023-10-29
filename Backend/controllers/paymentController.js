const Razorpay = require('razorpay'); 
const { key_id,key_secret } = process.env;

const razorpayInstance = new Razorpay({
    key_id: key_id,
    key_secret:key_secret
});

const renderProductPage = async(req,res)=>{

    try {
        
        res.render('product');

    } catch (error) {
        console.log(error.message);
    }

}

const createOrder = async(req,res)=>{
    try {
        const amount = req.body.amount*100
        const options = {
            amount: amount,
            currency: 'INR',
            receipt: 'razorUser@gmail.com'
        }

        razorpayInstance.orders.create(options, 
            (err, order)=>{
                if(!err){
                    res.status(200).send({
                        success:true,
                        msg:'Order Created',
                        order_id:order.id,
                        amount:amount,
                        key_id:key_id,
                        product_name:req.body.name,
                        description:req.body.description,
                        contact:"8607275597",
                        name: "rakesh kumar",
                        email: "rk28284@gmail.com"
                    });
                }
                else{
                    res.status(400).send({success:false,msg:'Something Went Wrong!..Please Try Again'});
                }
            }
        );

    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    renderProductPage,
    createOrder
}