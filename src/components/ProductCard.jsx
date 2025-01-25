import React from "react";

function ProductCard(props){
    return(
        <div className="products">
        Name : {props.productName}
        Price : {props.productPrice}
        Image :
        <img src={props.productImage} alt="photo"/>
        Des : {props.productDescription}
    </div>
    );
}   


export default ProductCard;




