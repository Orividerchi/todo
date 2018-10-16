import React from 'react';
import FilterButton from '../containers/FilterButton';
import { VisibilityFilters } from '../actions/visibilityFilters';

const Header = () => (
  <div className="Footer">
    <div className="container">
      <div className="row">
        <div className="btn-group" role="group">
          {Object.keys(VisibilityFilters)
            .map(key => <FilterButton filter={key} key={key} />)
          }
        </div>
      </div>
    </div>
  </div>
);

export default Header;
