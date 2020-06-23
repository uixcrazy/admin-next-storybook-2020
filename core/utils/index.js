
/**
 *  new Intl.NumberFormat('en-GB', { minimumIntegerDigits: 2,maximumSignificantDigits: 2 }).format(monthFinal.month);
 */



function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const pad = (num, size) => {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}

export const pickerLang = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  from: 'From', to: 'To',
};

export const makeText = m => {
  if (m && m.year && m.month) return (pickerLang.months[m.month - 1] + ` ` + m.year)
  return '?'
};

export const generateTooltipKey = () => Math.random().toString().slice(2);
export const label2Id = str => str.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, "-");

export const isNil = (value) => typeof value === 'undefined' || value === null;
export const isArrayEmpty = (array) => !Array.isArray(array) || !array.length;
export const isArrayAvailable = (array) => Array.isArray(array) && array.length>0;
export const isObjectEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

// export const isNormalInteger = (str) => /^\+?([1-9]\d*)$/.test(str);

export function isNormalInteger(str) {
  return /^\+?(0|[1-9]\d*)$/.test(str);
}

/**
 * export const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
 *
 * https://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript
 */
export function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  let widthNoScroll = 0;
  let widthWithScroll = 0;
  if (document.body) {
    document.body.appendChild(outer);
    widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = 'scroll';
    // add innerdiv
    const inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);
    widthWithScroll = inner.offsetWidth;
    // remove divs
    outer.parentNode.removeChild(outer);
  }
  return widthNoScroll - widthWithScroll;
}

/**
 * copies ::: https://silvantroxler.ch/2017/avoid-cannot-read-property-of-undefined/
 * use it like this
      getSafeValue(() => obj.a.lot.of.properties);

 * or add an optional default value
      getSafeValue(() => obj.a.lot.of.properties, 'nothing');
 */
export function getSafeValue(fn, defaultValue) {
  try {
    return fn();
  } catch (e) {
    return defaultValue;
  }
}

Number.prototype.format = function (n, x, s, c) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
    num = this.toFixed(Math.max(0, ~~n));

  return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

export function formatCurrency(value, code = 'USD') {
  switch (code) {
    case 'USD':
      return `$${value.format(2, 3, ',', '.')}`;
    case 'VND':
      return `${value.format(2, 3, '.', ',')}₫`;
    default:
      return value;
  }
}
