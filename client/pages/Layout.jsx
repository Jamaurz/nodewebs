import React from 'react';
import { connect } from "react-redux"

import { addArray } from "../actions/commonAction"
import './Layout.sass';

var socket = io.connect('http://localhost:8080/');

console.log('app url', process.env.APP_URL);
@connect((store) => {
    console.log(store);
    return {
        array: store.common.array,
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(addArray('sina'));

        socket.emit('init');

        socket.on('start', function() {
            console.log('emit socket layout')
        })
    }
    addRandomItem() {
        let value = Math.ceil(Math.random() * 10);
        console.log(value);
        this.props.dispatch(addArray(value))
    }
    render() {
        return (
           <div>
               <h1 onClick={this.addRandomItem.bind(this)}>Add random item to list</h1>
               <ul>
                   {this.props.array.map((el, index) => {
                       return <li key={index}>{el}</li>
                   })}
               </ul>
           </div>
        )
    }
}