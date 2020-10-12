import React, {Component} from 'react';
import Die from './Die';


export default class RollDice extends Component{

    static defaultProps = {

        side : ['one','two','three','four','five','six']
    }

    state = {
        face1 : "one",
        face2 : "one",
        isroll : false

    }

    roll = () =>{

    let dice1 = Math.floor(Math.random() * this.props.side.length); 
    let dice2 = Math.floor(Math.random() * this.props.side.length);

 

    this.setState({
        // face1 : this.props.side[dice1],
        // face2 : this.props.side[dice2],
        isroll : true
    })

    setTimeout( () =>{

        this.setState({
            face1 : this.props.side[dice1],
            face2 : this.props.side[dice2],
            isroll: false,
        })
    },500);


    }

    render(){
        return(
            <div>
            <div className="flex-container">
                <Die face={this.state.face1}/>
                <Die face={this.state.face2}/>

                <button className="roll-dice-btn" onClick={this.roll}>{!this.state.isroll && "Roll Dice"}
                {this.state.isroll && "Rolling...."}</button>

                

            </div>
            </div>
        );
    }
}
