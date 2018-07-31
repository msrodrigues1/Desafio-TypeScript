import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import * as React from 'react';

import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';

import  {MenuListItems}  from './tileData';

import CarrinhoStore from '../Stores/CarrinhoStore';

import { observer } from 'mobx-react';

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
    appBar: {
        transition: theme.transitions.create(['width', 'margin'], {
            duration: theme.transitions.duration.leavingScreen,
            easing: theme.transitions.easing.sharp,
        }),
        zIndex: theme.zIndex.drawer + 1,
    },
    appBarShift: {
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['width', 'margin'], {
            duration: theme.transitions.duration.enteringScreen,
            easing: theme.transitions.easing.sharp,
        }),
        width: `calc(100% - ${drawerWidth}px)`,
    },
    content: {
        backgroundColor: theme.palette.background.default,
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        transition: theme.transitions.create('width', {
            duration: theme.transitions.duration.enteringScreen,
            easing: theme.transitions.easing.sharp,
        }),
        whiteSpace: 'nowrap',
        width: drawerWidth,
    },
    drawerPaperClose: {
        duration: theme.transitions.duration.leavingScreen,
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    hide: {
        display: 'none',
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    root: {
        display: 'flex',
        flexGrow: 1,
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
    },
    toolbar: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
});

interface IProps extends WithStyles<typeof styles> {
    content:any;
    store: CarrinhoStore;
}

interface IState {
    open: boolean;
}


@observer
class MiniDrawer extends React.Component<IProps, IState> {
    public state: IState = {
        open: false,
    };

    public handleDrawerOpen = (): void => {
        this.setState({ open: true });
    };

    public handleDrawerClose = (): void => {
        this.setState({ open: false });
    };

    public render(): JSX.Element {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="absolute"
                 className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                    <Toolbar className="Cor" disableGutters={!this.state.open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, this.state.open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" >
                            Livraria Autbank
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent"
                    classes={{ paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose), }}
                    open={this.state.open} >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{MenuListItems(this.props.store.qtdPedidos())}</List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {this.props.content}
                </main>
            </div>
        );
    }
}


export default withStyles(styles)(MiniDrawer);
