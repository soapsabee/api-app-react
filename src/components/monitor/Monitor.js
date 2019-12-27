import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productsFetch } from '../../actions'
class Monitor extends Component {


    constructor(props){
        super(props)
    }

  
    componentDidMount() {
       
    }


    showProducts() {
        return this.props.products && this.props.products.map(product => (
            console.log("product: "+ product.id ,  {...product})
            
            // <div> {product.title} </div>
        ))
    }

    render(){
        const { products } = this.props;
        console.log(products);
        
        return(
            <div>
               {this.showProducts}
            </div>
        )
    }

}


export default Monitor