import * as React from 'react';

import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import Carrinho from '@material-ui/icons/ShoppingCart';

import { Link } from 'react-router-dom';

import '../App.css';

import Badge from '@material-ui/core/Badge';

export const MenuListItems = (qtde: number)  => {
    return(
    <div>
        <ListItem button={true}>
            <Link className="botaoLink1" to="/">
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText className="listDrawers" primary="Home" />
            </Link>
        </ListItem>
        <ListItem button={true}>
            <Link className="botaoLink2" to="/Carrinho">
                <Badge badgeContent={qtde} color="secondary">
                    <ListItemIcon>
                        <Carrinho />
                    </ListItemIcon>
                </Badge>
                <ListItemText primary="Carrinho" />
            </Link>
        </ListItem>
    </div>
)}
