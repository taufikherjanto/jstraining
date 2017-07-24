// @flow

// isEmpty(variable: mixed) => boolean
function isEmpty(variable: mixed): boolean {
  if (variable == null || variable == undefined) {
    return true;
  }
  else if (typeof variable == 'object') {
      return Object.keys(variable).length === 0 && variable.constructor === Object
  }
  if (variable.prop && variable.prop.constructor === Array) {
      return variable.length == 0;
  }
  else if (typeof variable == 'string') {
      return variable.length == 0;
  }
  else if (typeof variable == 'number') {
      return variable == 0;
  } else if (!variable) {
      return true;
  }
return false;
}

export default isEmpty;
