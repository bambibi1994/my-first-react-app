import React, { Component } from "react";
import '../css/Movie.css'
import PropTypes from 'prop-types'; 

class Movie extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="col-sm-6">
                <div className="card movie-border">
                    <div className="card-body">
                        <h5 className="card-title"> {this.props.title} </h5>
                        <p> {this.props.description} </p>
                        <p> {this.props.year} </p>
                        <p> {this.props.genre} </p>
                        <button className="btn btn-info">Edit</button>
                    </div>
                </div>
            </div>
        );
    }
}
	
Movie.defaultProps = {
    title: "A cool title",
    description: "A cool body",
    year: "2022",
    genre: "movie"
  };
   
  Movie.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string
  };

export default Movie;

