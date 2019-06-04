function styledValues(predicate, defaultValue) {
  return props => {
    const valuesMap = predicate(props);
    if (!valuesMap || typeof valuesMap !== 'object') {
      throw new TypeError('Expected an object with CSS prop-values mapped to booleans');
    }
    for (const key in valuesMap) {
      if (valuesMap[key]) {
        return key;
      }
    }
    return defaultValue;
  };
}

module.exports = styledValues.default = styledValues
