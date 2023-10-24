import './index.scss';
// import cn from 'classnames';
import { PropTypes } from 'prop-types';
import React from 'react';

const YearFilter = ({ listOfYears }) => (
  <select>
    {listOfYears.length &&
      listOfYears.map((year) => <option>{year}</option>)}
  </select>
);

YearFilter.propTypes = {
  listOfYears: PropTypes.array,
};

export default YearFilter;
