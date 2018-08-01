import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import { createStyles,Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CheckIcon from '@material-ui/icons/Check';
import classNames from 'classnames';
import * as React from 'react';


const styles = (theme: Theme) => createStyles({

    buttonProgress: {
        color: green[500],
        left: '50%',
        marginLeft: -12,
        marginTop: -12,
        position: 'absolute',
        top: '50%',
    },
    buttonSuccess: {
        '&:hover': {
            backgroundColor: green[700],
        },
        backgroundColor: green[500],
    },
    fabProgress: {
        color: green[500],
        left: -6,
        position: 'absolute',
        top: -6,
        zIndex: 1,
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
    },
});


interface IProps extends WithStyles<typeof styles> {
}

interface IState {
    loading:boolean;
    success:boolean;
}

class CircularIntegration extends React.Component<IProps, IState>{
   public  timer:any ;

    public state = {
        loading: false,
        success: false,
    };

    public componentWillUnmount() {
        clearTimeout(this.timer);
    }

    public handleButtonClick = () => {
        if (!this.state.loading) {
            this.setState(
                {
                    loading: true,
                    success: false,
                },
                () => {
                    this.timer = setTimeout(() => {
                        this.setState({
                            loading: false,
                            success: true,
                        });
                    }, 1500);
                },
            );
        }
    };

    public render(): JSX.Element {
        const { loading, success } = this.state;
        const { classes } = this.props;
        const buttonClassname = classNames({
            [classes.buttonSuccess]: success,
        });

        return (
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <Button
                        variant="fab"
                        color="primary"
                        className={buttonClassname}
                        onClick={this.handleButtonClick}>
                        {success ? <CheckIcon /> : <AddShoppingCartIcon />}
                    </Button>
                    {loading && <CircularProgress size={68} className={classes.fabProgress} />}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(CircularIntegration);
