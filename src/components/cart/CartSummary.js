import React, {Component} from 'react';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";
import {connect} from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import {bindActionCreators} from "redux";
import { Link } from "react-router-dom";

class CartSummary extends Component {

    renderEmpty() {
        return (
            <NavItem>
                <NavLink>Sepetiniz boş</NavLink>
            </NavItem>
        )
    }

    renderSummary() {
        return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Sepetiniz
            </DropdownToggle>
            <DropdownMenu right>
                {
                    this.props.cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.id}>
                            <Badge color="danger" onClick={() => this.props.actions.removeFromCart(cartItem.product)}>x</Badge>
                             {cartItem.product.productName} <Badge color="success">{cartItem.quantity}</Badge>
                        </DropdownItem>
                    ))
                }
                <DropdownItem divider />
                <DropdownItem><Link to={"/cart"}>Sepete Git</Link></DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        )
    }

    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);