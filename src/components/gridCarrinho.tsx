import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import * as React from 'react';


import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';

import { Typography } from '@material-ui/core';

import '../App.css';
import Formatador from '../util/Formatador';

import { observer } from 'mobx-react';
import CarrinhoStore from '../Stores/CarrinhoStore';

import Contador from './Contador';

const styles =  (theme: Theme) => createStyles({
    btnFinalizar:{
        [theme.breakpoints.down(350)]: {
            margin: '13px 0px 2px 10%!important',
        },
        [theme.breakpoints.up(360)]: {
            margin: '13px 0px 2px 17%!important',
        },
        [theme.breakpoints.up(400)]: {
            margin: '13px 0px 2px 20%!important',
        },
        [theme.breakpoints.up(700)]: {
            margin: '13px 0px 2px 14%!important',
        },
        [theme.breakpoints.up(1024)]: {
            margin: '13px 0px 2px 24%!important',
        },
        [theme.breakpoints.up(1280)]: {
            margin: '13px 0px 2px 30%!important',
        },
    },
    paper1: {
        [theme.breakpoints.down('xs')]: {
            float: 'left',
            marginTop: '0px',
            maxHeight: '53vmin',
            maxWidth: '76vmin',
            overflowX: 'auto',
            overflowY: 'auto',
        },
        [theme.breakpoints.up(600)]: {
            float: 'left',
            maxHeight: '53vmin',
            maxWidth: '76vmin',
            overflowX: 'auto',
            overflowY: 'auto',
          },
          [theme.breakpoints.up(1280)]: {
            float: 'left',
            maxHeight: '53vmin',
            maxWidth: '110vmin',
            overflowY: 'auto',
          },
    },
    paper2: {
        float: 'right',
        marginLeft: '10px',
        marginTop: '10px',
        padding: '8px',
        width: '35% !important',
        [theme.breakpoints.down(450)]: {
            float: 'left',
            marginLeft: '0px',
            marginTop: '10px',
            maxHeight: '53vmin',
            overflowX: 'auto',
            overflowY: 'auto',
            width: '91.5% !important',
          },
          [theme.breakpoints.down(350)]: {
            float: 'left',
            marginLeft: '0px',
            marginTop: '10px',
            maxHeight: '53vmin',
            overflowX: 'auto',
            overflowY: 'auto',
            width: '87% !important',
          },
        [theme.breakpoints.up(600)]: {
            float: 'left',
            marginLeft: '0px',
            marginTop: '10px',
            maxHeight: '53vmin',
            maxWidth: '76vmin',
            overflowX: 'auto',
            overflowY: 'auto',
          },
          [theme.breakpoints.down(1050)]: {
              float: 'left',
              marginLeft: '0px',
              marginTop: '10px',
              maxHeight: '53vmin',
              maxWidth: '76vmin',
              overflowX: 'auto',
              overflowY: 'auto',
          },
          [theme.breakpoints.up(1051)]: {
              float: 'left',
              marginLeft: '10px',
              marginTop: '0px',
              maxHeight: '53vmin',
              maxWidth: '76vmin',
              overflowX: 'auto',
              overflowY: 'auto',
          },
          [theme.breakpoints.up(1250)]: {
              float: 'left',
              marginLeft: '10px',
              marginTop: '0px',
              maxHeight: '63vmin',
              maxWidth: '110vmin',
              overflowY: 'auto',
          },
          [theme.breakpoints.up(1300)]: {
              float: 'right',
              marginLeft: '10px',
              marginTop: '0px',
              maxHeight: '63vmin',
              maxWidth: '110vmin',
              overflowY: 'auto',
          },
          [theme.breakpoints.up(1920)]: {
              float: 'right',
              marginTop: '0px',
              maxHeight: '73vmin',
              maxWidth: '125vmin',
              overflowY: 'auto',
          },
    },
})

interface IProps extends WithStyles<typeof styles> {
    store: CarrinhoStore;
}


@observer
class TabelaSimples extends React.Component<IProps> {

    public render(): JSX.Element {
        const { classes } = this.props;
        return (
            <div className="cPaper">
                <Paper className={classes.paper1}>
                    <div className="divTabela">
                        <Table className="tabela">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Quantidade</TableCell>
                                    <TableCell >Nome</TableCell>
                                    <TableCell numeric={true}>Valor Unitário</TableCell>
                                    <TableCell numeric={true}>Valor Total</TableCell>
                                    <TableCell/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.store.carrinho.map(value => {
                                    return (
                                        <TableRow className="tabelaLinha" key={value.codigo}>
                                            <TableCell>
                                                <Contador onClickDecremento={() => value.decrementar()} onClickIncremento={() => value.incrementar()} qtd={value.qtd} />
                                            </TableCell>
                                            <TableCell >{value.livro.nome}</TableCell>
                                            <TableCell numeric={true}>{Formatador.formataPreco(value.livro.preco)}</TableCell>
                                            <TableCell className="colunaPrecoTotal" numeric={true}>{Formatador.formataPreco(value.getTotalPedido())}</TableCell>
                                            <TableCell>
                                                <IconButton aria-label="Delete" onClick={() => this.props.store.delete(value.livro)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>

                        </Table>
                    </div>
                </Paper>
                <Paper className={classes.paper2}>
                    <Typography>SubTotal</Typography>
                    <Typography className="typoTeste">{Formatador.formataPreco(this.props.store.subTotal())}</Typography>

                    <Typography>Desconto</Typography>
                    <Typography className="typoTeste">{Formatador.formataPreco(this.props.store.desconto())}</Typography>

                    <Typography>Total</Typography>
                    <Typography className="typoTeste">{Formatador.formataPreco(this.props.store.calcularTotal())}</Typography>

                    <Button className={classes.btnFinalizar} variant="contained" color="primary" >Finalizar Compra</Button>
                </Paper>
            </div>
        );
    }
}


export default withStyles(styles)(TabelaSimples)