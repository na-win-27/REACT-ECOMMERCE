import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton=({price})=>{
    const priceStripe=price*1000;
    const publishableKey='pk_test_Nd8tJ0G3ZEj8nCdUEwWP76B400Rpm2IQ4l';


  const  onToken=(token)=>{
        console.log(token);
        alert('PAYMENT SUCESS')
        
    }


    return(
        <StripeCheckout
        label="pay Now"
        name="CRWN CLOTHING"
        billingAddress
        shippingAddress
        description={`your Total is $${price}`}
        amount={priceStripe}
        panelLabel='Pay Now'
        token={onToken}  
        stripeKey={publishableKey}      
        />
    )

}


export default StripeCheckoutButton