import green from '@material-ui/core/colors/green';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { WithStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import * as React from 'react';
import '../App.css';
import Livros from './Livros';


import Botao from './Botao';

import { observer } from 'mobx-react';

import { Ilivro } from '../Stores/Pedido';

import CarrinhoStore from '../Stores/CarrinhoStore';

const styles1 = () => ({
    success: {
        backgroundColor: green[600],
    }
});

interface IProps extends WithStyles<typeof styles1> {
    classes: any;
    store: CarrinhoStore;
}

interface IState {
    open: boolean;
}


@observer
class GuttersGrid extends React.Component<IProps, IState, {}> {
    public state: IState = {
        open: false,
    };

    public handleClick = () => {
        this.setState({ open: true });
    };

    public handleClose = (): void => {
        this.setState({ open: false });
    };

    public click(livro: Ilivro) {
        this.props.store.click(livro);
    }; 

    public render(): JSX.Element {
        return (
            <Grid container={true} className="root">
                <Grid item={true}  xs={true}>
                    <Grid className="top">
                        {Livros.map(value => (
                            <Grid key={value.codigo}  >
                                <Paper className="paper">
                                    <div className="imgT">
                                        <Botao livro={value} title={value.nome} width='100%' url={require('../img/' + value.img)} />
                                    </div>
                                </Paper>
                                <a onClick={this.handleClick}>
                                    <IconButton onClick={() => this.click(value)} value="" color="primary" className="button" aria-label="Adicionar ao Carrinho de Compras">
                                        <Tooltip leaveDelay={100} title="Adicionar no Carrinho">
                                            <AddShoppingCartIcon />
                                        </Tooltip>
                                    </IconButton>
                                </a>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default (GuttersGrid);