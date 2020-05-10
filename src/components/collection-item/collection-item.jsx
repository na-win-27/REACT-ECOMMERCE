import React from 'react'
import './colloection-item.scss'
import CustomButton from '../custom-button/custom-button'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart-action'
const colloectionItem = ({item,addItem})=>{
    const {imageUrl,name,price}=item;
    console.log(item);
    
    return(
    <div className="collection-item">
    <div 
    className="image" 
    style={{
        backgroundImage: `url(${imageUrl})`
    }}
    />
    <div className="collection-footer">
    <span className="name">
    {name}
    </span>
    <span className="price">
    {price}
    </span>
    
    
    </div>
    <CustomButton onClick={()=>addItem(item)} className="custom-button" inverted  >
    Add to Cart
    </CustomButton>

    
    
    </div>
    )
}


const  mapDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(colloectionItem)

