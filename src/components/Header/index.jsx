import React from 'react';
import iconUser from 'assets/images/icon-user.svg';
import iconCart from 'assets/images/icon-cart.svg';
import iconSearch from 'assets/images/icon-search.svg';

import './Header.scss'
import {
    Container, Nav, Navbar, InputGroup, FormControl, Button
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <Navbar>
                <Container>
                    <Nav>
                        <NavLink exact to="/" className="header__link-home">
                            <Navbar.Brand>SHOP LAPTOP</Navbar.Brand>
                        </NavLink>
                    </Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <InputGroup className="header__search">
                        <FormControl
                            placeholder="Nhập tên sản phẩm cần tìm...."
                        />
                        <Button variant="success" id="button-addon2">
                            <img src={iconSearch} className="header__icon" alt="" />
                        </Button>
                    </InputGroup>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <NavLink
                                to="/sign-in"
                                className="header__link"

                            >
                                <img src={iconUser} className="header__icon" alt="login" />
                                Đăng nhập
                            </NavLink>
                            <NavLink
                                to="/cart"
                                className="header__link"

                            >
                                <img src={iconCart} className="header__icon" alt="cart" />
                                Giỏ hàng
                            </NavLink>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;