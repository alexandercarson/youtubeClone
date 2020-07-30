import React from 'react';
import PropTypes from 'prop-types';
import TuneSharpIcon from '@material-ui/icons/TuneSharp';
import '../css/SearchPage.css';

const SearchPage = (props) => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneSharpIcon />
        <h2>Filter</h2>
      </div>
      <hr />
    </div>
  );
};

SearchPage.propTypes = {};

export default SearchPage;
