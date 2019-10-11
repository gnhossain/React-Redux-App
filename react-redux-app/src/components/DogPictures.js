import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPictures } from '../actions';

const DogPictures = props => {
    console.log(props);

    useEffect (() => {
        props.fetchPictures();
    }, []);


    if ( props.isFetching) {
        return <h2>Loading...</h2>;

    }

    return(
        <div className='Dog'>
           <img src={props.dogPictures}/>
           <button onClick={props.fetchPictures}> Next Dog! </button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        dogPictures: state.dogPictures,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {fetchPictures}
)(DogPictures);