import React, { Component } from 'react';
import '../css/Board.css';
import Note from './Note';

class Board extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="div-board">
                    <div className="row">
                        <Note title="Pet" body="My Dog is good" />
                        <Note title="Hobby" body="Playing Videogame" />
                        <Note title="Sport" body="Basketball" />
                    </div>
                </div>
                <div>
                    <button className="btn btn-success add-button">Add</button>
                </div>
            </div>
        );
    }

}

export default Board;