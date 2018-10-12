import React from 'react';
import firebase from 'firebase';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions/visibilityFilters';

const Footer = () => (
  <div className="Footer">
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
    <br />
    <button
      type="button"
      onClick={() => firebase.auth().signOut()}
    >
      Sign Out
    </button>
  </div>
);

export default Footer;
