/**
 * Create an object from a given array
 */
export function objectFromArray(arr, key = 'id') {
  if (arr && arr.length) {
    return arr.reduce((v, i) => {
      v[i[key]] = i;
      return v;
    }, {});
  }
  return {};
}

/**
 * Create an array from a given object
 */
export function arrayFromObject(obj, key = 'id') {
  return Object.keys(obj).map(key => (obj[key]));
}

export function copyToClipboard(str) {
  // Create new element
  var el = document.createElement('textarea');
  // Set value (string to be copied)
  el.value = str;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '');
  el.style = {position: 'absolute', left: '-9999px'};
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(el);
}