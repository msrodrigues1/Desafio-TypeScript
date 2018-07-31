import Button from '@material-ui/core/Button';
import * as React from 'react';
import '../App.css';


interface IProps {
    qtd:number;
    onClickDecremento:any;
    onClickIncremento:any;
}


export default class Contador extends React.Component<IProps>  {
    public render(): JSX.Element {
        let btn1;
        let btn2;

        if (this.props.qtd > 1) {
            btn1 = <Button onClick={this.props.onClickDecremento}>-</Button>
        } else {
            btn1 = <Button disabled={true} onClick={this.props.onClickDecremento}>-</Button>
        }


        if ( this.props.qtd < 10) {
            btn2 = <Button onClick={this.props.onClickIncremento}>+</Button>
        } else {
            btn2 = <Button disabled={true} onClick={this.props.onClickIncremento}>+</Button>
        }

        return (
            <div>
                <div>
                    {btn1}
                    <h1 className="contador">{this.props.qtd}</h1>
                    {btn2}
                </div>
            </div>
        );
    }
}