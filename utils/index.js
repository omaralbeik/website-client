export function objectFromArray(arr, key='id') {
  if (arr && arr.length) {
    return arr.reduce((v, i) => {
      v[i[key]] = i;
      return v;
    }, {});
  }
  return {};
}

export function arrayFromObject(obj) {
  return Object.keys(obj).map(key => (obj[key]));
}

export function copyToClipboard(str) {
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style = {position: 'absolute', left: '-9999px'};
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

export function isEmpty(obj) {
  if (!obj) {
    return true;
  }
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  return Object.getOwnPropertyNames(object).length === 0;
  }

export function findByIdOrSlug(items, id) {
  if (parseInt(id, 0)) { // get item by id
    return items[id]
  } else { // get item by slug
    const itemsArray = arrayFromObject(items);
    return itemsArray.filter(item => (item.slug === id))[0];
  }
}

export const isServer = typeof window === 'undefined';
