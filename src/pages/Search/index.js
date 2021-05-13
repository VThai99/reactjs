import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import Main from '../../components/organisms/Main';
Search.propTypes = {
    
};

function Search(props) {
    let {keyword, id} = useParams();
    return (
       <Main>kkkkkkkkkkk</Main>
    );
}

export default Search;