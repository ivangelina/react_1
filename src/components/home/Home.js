import React, { Component } from 'react';
import SearchBox from '../common/SearchBox';
import { connect } from "react-redux";


class Home extends Component {
    render(){
       return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            {this.props.selectedMovies.map((movie, i)=> 
                                <div key={i}>{movie.title}</div>)
                            }
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <SearchBox/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       )
    }
}

const mapStateToProps = state => {
    return {
        inputText: state.inputText,
        selectedMovies: state.selectedMovies
    }
};

export default connect(mapStateToProps)(Home);