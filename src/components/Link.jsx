import React from 'react';
import PropTypes from 'prop-types';


const Link = ({ active, filter, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={active}
    className="btn btn-info"
  >
    {filter.replace(/_/, ' ')}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
