import conformsTo from 'lodash/conformsTo';
import isFunction from 'lodash/isFunction';
// import isObject from 'lodash/isObject';
import invariant from 'invariant';

/**
 * Validate the shape of redux store
 * @param {any} store store
 * @returns {void}
 */
export default function checkStore(store) {
  console.log(store);
  const shape = {
    dispatch: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    subscribe: isFunction,
    Symbol: isFunction,
  };
  invariant(
    conformsTo(store, shape),
    '(app/utils...) injectors: Expected a valid redux store',
  );
}
