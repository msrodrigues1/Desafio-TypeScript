import ButtonBase from '@material-ui/core/ButtonBase';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

// import Dialog from '@material-ui/core/Dialog';
 import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

import { Redirect } from 'react-router-dom'


const styles = (theme: Theme) => createStyles({
    focusVisible: {},
    image: {
        '&:hover, &$focusVisible': {
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '2px solid currentColor',
            },
            zIndex: 1,
        },
        height: 200,
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            height: 200,
            width: '100% !important', // Overrides inline-style
        },
    },
    imageBackdrop: {
        backgroundColor: theme.palette.common.black,
        bottom: 0,
        left: 0,
        opacity: 0.4,
        position: 'absolute',
        right: 0,
        top: 0,
        transition: theme.transitions.create('opacity'),
    },
    imageButton: {
        alignItems: 'center',
        bottom: 0,
        color: theme.palette.common.white,
        display: 'flex',
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    imageMarked: {
        backgroundColor: theme.palette.common.white,
        bottom: -2,
        height: 3,
        left: 'calc(50% - 9px)',
        position: 'absolute',
        transition: theme.transitions.create('opacity'),
        width: 18,
    },
    imageSrc: {
        backgroundPosition: 'center 40%',
        backgroundSize: 'cover',
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    imageTitle: {
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
        position: 'relative',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        height: '350px',
        padding: theme.spacing.unit * 12,
        position: 'absolute',
        width: theme.spacing.unit * 60,
        [theme.breakpoints.down('xs')]: {
            height: 300,
            width: '200px !important', // Overrides inline-style
        },
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minHeight: 200,
        minWidth: 150,
        width: '100%',
    },
    tamanho: {
        paddingBottom: '10px',
    },
    valor: {
        color: '#3f51b5',
        display: 'flex',
        fontSize: '14px',
        fontWeight: 'bold',
        justifyContent: 'center',
        marginTop: '5px',
        padding: '0',
    },
});

interface IProps extends WithStyles<typeof styles> {
    title: string;
    width: string;
    url: string;
    livro: any;
}

interface IState {
    open: boolean;
}


class ButtonBases extends React.Component<IProps, IState> {

    public state = {
        open: false,
    };

    public handleClick = () => {
        this.setState({ open: true });
    };

    public handleClose = () => {
        this.setState({ open: false });
    };

 

    public render(): JSX.Element {

        if (this.state.open === true) {
            return <Redirect to='/Produto' />
          }

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <ButtonBase
                    onClick={this.handleClick}
                    key={this.props.title} className={classes.image}
                    focusVisibleClassName={classes.focusVisible} style={{ width: this.props.width, }}>
                    <span className={classes.imageSrc} style={{ backgroundImage: `url(${this.props.url})`, }} />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography component="span" variant="subheading" color="inherit" className={classes.imageTitle}>
                            {this.props.title}
                            <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>
                <DialogContent className={classes.valor}>
                    Valor: {this.props.livro.preco}
                </DialogContent>
            </div>
        );
    }
}


const SimpleModalWrapped = withStyles(styles)(ButtonBases);


export default SimpleModalWrapped;


/*

                <Dialog open={this.state.open} onClose={this.handleClose}
                    aria-labelledby="scroll-dialog-title">
                    <DialogTitle id="scroll-dialog-title">{this.props.livro.nome}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.props.livro.desc}
                        </DialogContentText>
                    </DialogContent>

                </Dialog>
                <DialogContent className={classes.valor}>
                    Valor: {this.props.livro.preco}
                </DialogContent>

*/