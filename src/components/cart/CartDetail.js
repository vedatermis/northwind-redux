import React, {Component} from 'react';
import * as cartActions from "../../redux/actions/cartActions";
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import {Button, Table} from "reactstrap";

class CartDetail extends Component {
    render() {
        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <td>{cartItem.product.id}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button color="danger" onClick={() => this.props.actions.removeFromCart(cartItem.product)}>-</Button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    };
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);