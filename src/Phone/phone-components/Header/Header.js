import React from 'react';
import './Header.css'

import {Button, Menu, MenuItem} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

// logo
import Logo from './img/logo.png'

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className="phone-header">
            <div className="phone-header__logo">
                <img src={Logo} />
            </div>
            <nav className="phone-header__navigation">
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <MenuIcon fontSize={'large'} />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>IOS</MenuItem>
                    <MenuItem onClick={handleClose}>Android</MenuItem>
                    <MenuItem onClick={handleClose}>Log-in</MenuItem>
                </Menu>
            </nav>
        </header>
    );
};

export default Header;