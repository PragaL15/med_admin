import {
  Ripple
} from "./chunk-3B33TPJN.js";
import {
  IconBase
} from "./chunk-OFNDZ4QC.js";
import {
  InputText
} from "./chunk-CUFKBUXH.js";
import {
  Tooltip
} from "./chunk-V2MG7ABT.js";
import {
  ComponentBase,
  useHandleStyle,
  useMergeProps,
  useMountEffect,
  useUpdateEffect
} from "./chunk-NVVTRTSK.js";
import {
  PrimeReact,
  PrimeReactContext
} from "./chunk-O2YLKOX3.js";
import {
  DomHandler,
  IconUtils,
  ObjectUtils,
  classNames
} from "./chunk-IWXOSFRG.js";
import {
  require_react
} from "./chunk-WNPTCGAH.js";
import {
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/primereact/inputnumber/inputnumber.esm.js
var React3 = __toESM(require_react());

// node_modules/primereact/icons/angledown/index.esm.js
var React = __toESM(require_react());
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var AngleDownIcon = React.memo(React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React.createElement("svg", _extends({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React.createElement("path", {
    d: "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",
    fill: "currentColor"
  }));
}));
AngleDownIcon.displayName = "AngleDownIcon";

// node_modules/primereact/icons/angleup/index.esm.js
var React2 = __toESM(require_react());
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var AngleUpIcon = React2.memo(React2.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React2.createElement("svg", _extends2({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React2.createElement("path", {
    d: "M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z",
    fill: "currentColor"
  }));
}));
AngleUpIcon.displayName = "AngleUpIcon";

// node_modules/primereact/inputnumber/inputnumber.esm.js
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _toPrimitive(input2, hint) {
  if (_typeof(input2) !== "object" || input2 === null) return input2;
  var prim = input2[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input2, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input2);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var classes = {
  root: function root(_ref) {
    var props = _ref.props, focusedState = _ref.focusedState, stacked = _ref.stacked, horizontal = _ref.horizontal, vertical = _ref.vertical;
    return classNames("p-inputnumber p-component p-inputwrapper", {
      "p-inputwrapper-filled": props.value != null && props.value.toString().length > 0,
      "p-inputwrapper-focus": focusedState,
      "p-inputnumber-buttons-stacked": stacked,
      "p-inputnumber-buttons-horizontal": horizontal,
      "p-inputnumber-buttons-vertical": vertical,
      "p-invalid": props.invalid
    });
  },
  input: function input(_ref2) {
    var props = _ref2.props, context = _ref2.context;
    return classNames("p-inputnumber-input", {
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled"
    });
  },
  buttonGroup: "p-inputnumber-button-group",
  incrementButton: function incrementButton(_ref3) {
    var props = _ref3.props;
    return classNames("p-inputnumber-button p-inputnumber-button-up p-button p-button-icon-only p-component", {
      "p-disabled": props.disabled
    });
  },
  incrementIcon: "p-button-icon",
  decrementButton: function decrementButton(_ref4) {
    var props = _ref4.props;
    return classNames("p-inputnumber-button p-inputnumber-button-down p-button p-button-icon-only p-component", {
      "p-disabled": props.disabled
    });
  },
  decrementIcon: "p-button-icon"
};
var styles = "\n@layer primereact {\n    .p-inputnumber {\n        display: inline-flex;\n    }\n    \n    .p-inputnumber-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 auto;\n    }\n    \n    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,\n    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {\n        display: none;\n    }\n    \n    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n        padding: 0;\n    }\n    \n    .p-inputnumber-buttons-stacked .p-inputnumber-input {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n    \n    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n        border-bottom-left-radius: 0;\n        padding: 0;\n    }\n    \n    .p-inputnumber-buttons-stacked .p-inputnumber-button-group {\n        display: flex;\n        flex-direction: column;\n    }\n    \n    .p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {\n        flex: 1 1 auto;\n    }\n    \n    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {\n        order: 3;\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n    }\n    \n    .p-inputnumber-buttons-horizontal .p-inputnumber-input {\n        order: 2;\n        border-radius: 0;\n    }\n    \n    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {\n        order: 1;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n    \n    .p-inputnumber-buttons-vertical {\n        flex-direction: column;\n    }\n    \n    .p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {\n        order: 1;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n        width: 100%;\n    }\n    \n    .p-inputnumber-buttons-vertical .p-inputnumber-input {\n        order: 2;\n        border-radius: 0;\n        text-align: center;\n    }\n    \n    .p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {\n        order: 3;\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n        width: 100%;\n    }\n    \n    .p-inputnumber-input {\n        flex: 1 1 auto;\n    }\n    \n    .p-fluid .p-inputnumber {\n        width: 100%;\n    }\n    \n    .p-fluid .p-inputnumber .p-inputnumber-input {\n        width: 1%;\n    }\n    \n    .p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {\n        width: 100%;\n    }\n}\n";
var InputNumberBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "InputNumber",
    __parentMetadata: null,
    allowEmpty: true,
    ariaLabelledBy: null,
    autoFocus: false,
    buttonLayout: "stacked",
    className: null,
    currency: void 0,
    currencyDisplay: void 0,
    decrementButtonClassName: null,
    decrementButtonIcon: null,
    disabled: false,
    format: true,
    id: null,
    incrementButtonClassName: null,
    incrementButtonIcon: null,
    inputClassName: null,
    inputId: null,
    inputMode: null,
    inputRef: null,
    inputStyle: null,
    invalid: false,
    variant: null,
    locale: void 0,
    localeMatcher: void 0,
    max: null,
    maxFractionDigits: void 0,
    maxLength: null,
    min: null,
    minFractionDigits: void 0,
    mode: "decimal",
    name: null,
    onBlur: null,
    onChange: null,
    onFocus: null,
    onKeyDown: null,
    onKeyUp: null,
    onValueChange: null,
    pattern: null,
    placeholder: null,
    prefix: null,
    readOnly: false,
    required: false,
    roundingMode: void 0,
    showButtons: false,
    size: null,
    step: 1,
    style: null,
    suffix: null,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    type: "text",
    useGrouping: true,
    value: null,
    children: void 0
  },
  css: {
    classes,
    styles
  }
});
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var InputNumber = React3.memo(React3.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React3.useContext(PrimeReactContext);
  var props = InputNumberBase.getProps(inProps, context);
  var _React$useState = React3.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), focusedState = _React$useState2[0], setFocusedState = _React$useState2[1];
  var metaData = _objectSpread(_objectSpread({
    props
  }, props.__parentMetadata), {}, {
    state: {
      focused: focusedState
    }
  });
  var _InputNumberBase$setM = InputNumberBase.setMetaData(metaData), ptm = _InputNumberBase$setM.ptm, cx = _InputNumberBase$setM.cx, isUnstyled = _InputNumberBase$setM.isUnstyled;
  useHandleStyle(InputNumberBase.css.styles, isUnstyled, {
    name: "inputnumber"
  });
  var elementRef = React3.useRef(null);
  var inputRef = React3.useRef(null);
  var timer = React3.useRef(null);
  var lastValue = React3.useRef(null);
  var numberFormat = React3.useRef(null);
  var groupChar = React3.useRef(null);
  var prefixChar = React3.useRef(null);
  var suffixChar = React3.useRef(null);
  var isSpecialChar = React3.useRef(null);
  var _numeral = React3.useRef(null);
  var _group = React3.useRef(null);
  var _minusSign = React3.useRef(null);
  var _currency = React3.useRef(null);
  var _decimal = React3.useRef(null);
  var _decimalSeparator = React3.useRef(null);
  var _suffix = React3.useRef(null);
  var _prefix = React3.useRef(null);
  var _index = React3.useRef(null);
  var isFocusedByClick = React3.useRef(false);
  var _locale = props.locale || context && context.locale || PrimeReact.locale;
  var stacked = props.showButtons && props.buttonLayout === "stacked";
  var horizontal = props.showButtons && props.buttonLayout === "horizontal";
  var vertical = props.showButtons && props.buttonLayout === "vertical";
  var inputMode = props.inputMode || (props.mode === "decimal" && !props.minFractionDigits ? "numeric" : "decimal");
  var getOptions = function getOptions2() {
    var _props$minFractionDig, _props$maxFractionDig;
    return {
      localeMatcher: props.localeMatcher,
      style: props.mode,
      currency: props.currency,
      currencyDisplay: props.currencyDisplay,
      useGrouping: props.useGrouping,
      minimumFractionDigits: (_props$minFractionDig = props.minFractionDigits) !== null && _props$minFractionDig !== void 0 ? _props$minFractionDig : void 0,
      maximumFractionDigits: (_props$maxFractionDig = props.maxFractionDigits) !== null && _props$maxFractionDig !== void 0 ? _props$maxFractionDig : void 0,
      roundingMode: props.roundingMode
    };
  };
  var constructParser = function constructParser2() {
    numberFormat.current = new Intl.NumberFormat(_locale, getOptions());
    var numerals = _toConsumableArray(new Intl.NumberFormat(_locale, {
      useGrouping: false
    }).format(9876543210)).reverse();
    var index = new Map(numerals.map(function(d, i) {
      return [d, i];
    }));
    _numeral.current = new RegExp("[".concat(numerals.join(""), "]"), "g");
    _group.current = getGroupingExpression();
    _minusSign.current = getMinusSignExpression();
    _currency.current = getCurrencyExpression();
    _decimal.current = getDecimalExpression();
    _decimalSeparator.current = getDecimalSeparator();
    _suffix.current = getSuffixExpression();
    _prefix.current = getPrefixExpression();
    _index.current = function(d) {
      return index.get(d);
    };
  };
  var escapeRegExp = function escapeRegExp2(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };
  var getDecimalSeparator = function getDecimalSeparator2() {
    return new Intl.NumberFormat(_locale, {
      useGrouping: false
    }).format(1.1).trim().replace(_numeral.current, "");
  };
  var getDecimalExpression = function getDecimalExpression2() {
    var formatter = new Intl.NumberFormat(_locale, _objectSpread(_objectSpread({}, getOptions()), {}, {
      useGrouping: false
    }));
    return new RegExp("[".concat(formatter.format(1.1).replace(_currency.current, "").trim().replace(_numeral.current, ""), "]"), "g");
  };
  var getGroupingExpression = function getGroupingExpression2() {
    var formatter = new Intl.NumberFormat(_locale, {
      useGrouping: true
    });
    groupChar.current = formatter.format(1e6).trim().replace(_numeral.current, "").charAt(0);
    return new RegExp("[".concat(groupChar.current, "]"), "g");
  };
  var getMinusSignExpression = function getMinusSignExpression2() {
    var formatter = new Intl.NumberFormat(_locale, {
      useGrouping: false
    });
    return new RegExp("[".concat(formatter.format(-1).trim().replace(_numeral.current, ""), "]"), "g");
  };
  var getCurrencyExpression = function getCurrencyExpression2() {
    if (props.currency) {
      var formatter = new Intl.NumberFormat(_locale, {
        style: "currency",
        currency: props.currency,
        currencyDisplay: props.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        roundingMode: props.roundingMode
      });
      return new RegExp("[".concat(formatter.format(1).replace(/\s/g, "").replace(_numeral.current, "").replace(_group.current, ""), "]"), "g");
    }
    return new RegExp("[]", "g");
  };
  var getPrefixExpression = function getPrefixExpression2() {
    if (props.prefix) {
      prefixChar.current = props.prefix;
    } else {
      var formatter = new Intl.NumberFormat(_locale, {
        style: props.mode,
        currency: props.currency,
        currencyDisplay: props.currencyDisplay
      });
      prefixChar.current = formatter.format(1).split("1")[0];
    }
    return new RegExp("".concat(escapeRegExp(prefixChar.current || "")), "g");
  };
  var getSuffixExpression = function getSuffixExpression2() {
    if (props.suffix) {
      suffixChar.current = props.suffix;
    } else {
      var formatter = new Intl.NumberFormat(_locale, {
        style: props.mode,
        currency: props.currency,
        currencyDisplay: props.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        roundingMode: props.roundingMode
      });
      suffixChar.current = formatter.format(1).split("1")[1];
    }
    return new RegExp("".concat(escapeRegExp(suffixChar.current || "")), "g");
  };
  var formatValue = function formatValue2(value) {
    if (value != null) {
      if (value === "-") {
        return value;
      }
      if (props.format) {
        var formatter = new Intl.NumberFormat(_locale, getOptions());
        var _formattedValue = formatter.format(value);
        if (props.prefix) {
          _formattedValue = props.prefix + _formattedValue;
        }
        if (props.suffix) {
          _formattedValue = _formattedValue + props.suffix;
        }
        return _formattedValue;
      }
      return value.toString();
    }
    return "";
  };
  var parseValue = function parseValue2(text) {
    var filteredText = text.replace(_suffix.current, "").replace(_prefix.current, "").trim().replace(/\s/g, "").replace(_currency.current, "").replace(_group.current, "").replace(_minusSign.current, "-").replace(_decimal.current, ".").replace(_numeral.current, _index.current);
    if (filteredText) {
      if (filteredText === "-") {
        return filteredText;
      }
      var parsedValue = +filteredText;
      return isNaN(parsedValue) ? null : parsedValue;
    }
    return null;
  };
  var _repeat = function repeat(event, interval, dir) {
    var i = interval || 500;
    clearTimer();
    timer.current = setTimeout(function() {
      _repeat(event, 40, dir);
    }, i);
    spin(event, dir);
  };
  var spin = function spin2(event, dir) {
    if (inputRef.current) {
      var step = props.step * dir;
      var currentValue = parseValue(inputRef.current.value) || 0;
      var newValue = validateValue(currentValue + step);
      if (props.maxLength && props.maxLength < formatValue(newValue).length) {
        return;
      }
      handleOnChange(event, currentValue, newValue);
      !DomHandler.isTouchDevice() && updateInput(newValue, null, "spin");
      updateModel(event, newValue);
    }
  };
  var onUpButtonMouseDown = function onUpButtonMouseDown2(event) {
    if (!props.disabled && !props.readOnly) {
      if (!DomHandler.isTouchDevice()) {
        DomHandler.focus(inputRef.current, props.autoFocus);
      }
      _repeat(event, null, 1);
      event.preventDefault();
    }
  };
  var onUpButtonMouseUp = function onUpButtonMouseUp2() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };
  var onUpButtonMouseLeave = function onUpButtonMouseLeave2() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };
  var onUpButtonKeyUp = function onUpButtonKeyUp2() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };
  var onUpButtonKeyDown = function onUpButtonKeyDown2(event) {
    if (!props.disabled && !props.readOnly && (event.keyCode === 32 || event.keyCode === 13)) {
      _repeat(event, null, 1);
    }
  };
  var onDownButtonMouseDown = function onDownButtonMouseDown2(event) {
    if (!props.disabled && !props.readOnly) {
      if (!DomHandler.isTouchDevice()) {
        DomHandler.focus(inputRef.current, props.autoFocus);
      }
      _repeat(event, null, -1);
      event.preventDefault();
    }
  };
  var onDownButtonMouseUp = function onDownButtonMouseUp2() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };
  var onDownButtonMouseLeave = function onDownButtonMouseLeave2() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };
  var onDownButtonKeyUp = function onDownButtonKeyUp2() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };
  var onDownButtonKeyDown = function onDownButtonKeyDown2(event) {
    if (!props.disabled && !props.readOnly && (event.keyCode === 32 || event.keyCode === 13)) {
      _repeat(event, null, -1);
    }
  };
  var onInput = function onInput2(event) {
    if (props.disabled || props.readOnly) {
      return;
    }
    if (isSpecialChar.current) {
      event.target.value = lastValue.current;
      isSpecialChar.current = false;
    }
    if (DomHandler.isAndroid()) {
      return;
    }
    var inputType = event.nativeEvent.inputType;
    var data = event.nativeEvent.data;
    if (inputType === "insertText" && /\D/.test(data)) {
      event.target.value = lastValue.current;
    }
  };
  var onInputAndroidKey = function onInputAndroidKey2(event) {
    if (!DomHandler.isAndroid() || props.disabled || props.readOnly) {
      return;
    }
    if (props.onKeyUp) {
      props.onKeyUp(event);
      if (event.defaultPrevented) {
        return;
      }
    }
    var code = event.which || event.keyCode;
    if (code !== 13) {
      event.preventDefault();
    }
    var _char = String.fromCharCode(code);
    var _isDecimalSign = isDecimalSign(_char);
    var _isMinusSign = isMinusSign(_char);
    if (48 <= code && code <= 57 || _isMinusSign || _isDecimalSign) {
      insert(event, _char, {
        isDecimalSign: _isDecimalSign,
        isMinusSign: _isMinusSign
      });
    } else {
      updateValue(event, event.target.value, null, "delete-single");
    }
  };
  var onInputKeyDown = function onInputKeyDown2(event) {
    if (props.disabled || props.readOnly) {
      return;
    }
    if (event.altKey || event.ctrlKey || event.metaKey) {
      if (event.key.toLowerCase() === "x" && (event.ctrlKey || event.metaKey)) {
        isSpecialChar.current = false;
      } else {
        isSpecialChar.current = true;
      }
      return;
    }
    if (props.onKeyDown) {
      props.onKeyDown(event);
      if (event.defaultPrevented) {
        return;
      }
    }
    lastValue.current = event.target.value;
    if (DomHandler.isAndroid()) {
      return;
    }
    var selectionStart = event.target.selectionStart;
    var selectionEnd = event.target.selectionEnd;
    var inputValue = event.target.value;
    var newValueStr = null;
    switch (event.code) {
      case "ArrowUp":
        spin(event, 1);
        event.preventDefault();
        break;
      case "ArrowDown":
        spin(event, -1);
        event.preventDefault();
        break;
      case "ArrowLeft":
        if (!isNumeralChar(inputValue.charAt(selectionStart - 1))) {
          event.preventDefault();
        }
        break;
      case "ArrowRight":
        if (!isNumeralChar(inputValue.charAt(selectionStart))) {
          event.preventDefault();
        }
        break;
      case "Tab":
      case "Enter":
      case "NumpadEnter":
        newValueStr = validateValue(parseValue(inputValue));
        inputRef.current.value = formatValue(newValueStr);
        inputRef.current.setAttribute("aria-valuenow", newValueStr);
        updateModel(event, newValueStr);
        break;
      case "Backspace":
        event.preventDefault();
        if (selectionStart === selectionEnd) {
          var deleteChar = inputValue.charAt(selectionStart - 1);
          if (isNumeralChar(deleteChar)) {
            var _getDecimalCharIndexe = getDecimalCharIndexes(inputValue), decimalCharIndex = _getDecimalCharIndexe.decimalCharIndex, decimalCharIndexWithoutPrefix = _getDecimalCharIndexe.decimalCharIndexWithoutPrefix;
            var decimalLength = getDecimalLength(inputValue);
            if (_group.current.test(deleteChar)) {
              _group.current.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
            } else if (_decimal.current.test(deleteChar)) {
              _decimal.current.lastIndex = 0;
              if (decimalLength) {
                inputRef.current.setSelectionRange(selectionStart - 1, selectionStart - 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
              }
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              var insertedText = isDecimalMode() && (props.minFractionDigits || 0) < decimalLength ? "" : "0";
              newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart - 1) + "0" + inputValue.slice(selectionStart);
              newValueStr = parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
            }
          } else if (_currency.current.test(deleteChar)) {
            var _getCharIndexes = getCharIndexes(inputValue), minusCharIndex = _getCharIndexes.minusCharIndex, currencyCharIndex = _getCharIndexes.currencyCharIndex;
            if (minusCharIndex === currencyCharIndex - 1) {
              newValueStr = inputValue.slice(0, minusCharIndex) + inputValue.slice(selectionStart);
            }
          }
          updateValue(event, newValueStr, null, "delete-single");
        } else {
          newValueStr = deleteRange(inputValue, selectionStart, selectionEnd);
          updateValue(event, newValueStr, null, "delete-range");
        }
        break;
      case "Delete":
        event.preventDefault();
        if (selectionStart === selectionEnd) {
          var _deleteChar = inputValue.charAt(selectionStart);
          var _getDecimalCharIndexe2 = getDecimalCharIndexes(inputValue), _decimalCharIndex = _getDecimalCharIndexe2.decimalCharIndex, _decimalCharIndexWithoutPrefix = _getDecimalCharIndexe2.decimalCharIndexWithoutPrefix;
          if (isNumeralChar(_deleteChar)) {
            var _decimalLength = getDecimalLength(inputValue);
            if (_group.current.test(_deleteChar)) {
              _group.current.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
            } else if (_decimal.current.test(_deleteChar)) {
              _decimal.current.lastIndex = 0;
              if (_decimalLength) {
                inputRef.current.setSelectionRange(selectionStart + 1, selectionStart + 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            } else if (_decimalCharIndex > 0 && selectionStart > _decimalCharIndex) {
              var _insertedText = isDecimalMode() && (props.minFractionDigits || 0) < _decimalLength ? "" : "0";
              newValueStr = inputValue.slice(0, selectionStart) + _insertedText + inputValue.slice(selectionStart + 1);
            } else if (_decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart) + "0" + inputValue.slice(selectionStart + 1);
              newValueStr = parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
            }
          }
          updateValue(event, newValueStr, null, "delete-back-single");
        } else {
          newValueStr = deleteRange(inputValue, selectionStart, selectionEnd);
          updateValue(event, newValueStr, null, "delete-range");
        }
        break;
      case "End":
        event.preventDefault();
        if (!ObjectUtils.isEmpty(props.max)) {
          updateModel(event, props.max);
        }
        break;
      case "Home":
        event.preventDefault();
        if (!ObjectUtils.isEmpty(props.min)) {
          updateModel(event, props.min);
        }
        break;
      default:
        event.preventDefault();
        var _char2 = event.key;
        if (_char2) {
          var _isDecimalSign = isDecimalSign(_char2);
          var _isMinusSign = isMinusSign(_char2);
          if (Number(_char2) >= 0 && Number(_char2) <= 9 || _isMinusSign || _isDecimalSign) {
            insert(event, _char2, {
              isDecimalSign: _isDecimalSign,
              isMinusSign: _isMinusSign
            });
          }
        }
        break;
    }
  };
  var onPaste = function onPaste2(event) {
    event.preventDefault();
    if (props.disabled || props.readOnly) {
      return;
    }
    var data = (event.clipboardData || window.clipboardData).getData("Text");
    if (data) {
      var filteredData = parseValue(data);
      if (filteredData != null) {
        insert(event, filteredData.toString());
      }
    }
  };
  var allowMinusSign = function allowMinusSign2() {
    return ObjectUtils.isEmpty(props.min) || props.min < 0;
  };
  var isMinusSign = function isMinusSign2(_char3) {
    if (_minusSign.current.test(_char3) || _char3 === "-") {
      _minusSign.current.lastIndex = 0;
      return true;
    }
    return false;
  };
  var replaceDecimalSeparator = function replaceDecimalSeparator2(val) {
    if (isFloat(val)) {
      return val.toString().replace(/\.(?=[^.]*$)/, _decimalSeparator.current);
    }
    return val;
  };
  var isDecimalSign = function isDecimalSign2(_char4) {
    if (_decimal.current.test(_char4) || isFloat(_char4)) {
      _decimal.current.lastIndex = 0;
      return true;
    }
    return false;
  };
  var isDecimalMode = function isDecimalMode2() {
    return props.mode === "decimal";
  };
  var isFloat = function isFloat2(val) {
    var formatter = new Intl.NumberFormat(_locale, getOptions());
    var parseVal = parseValue(formatter.format(val));
    if (parseVal === null) {
      return false;
    }
    return parseVal % 1 !== 0;
  };
  var getDecimalCharIndexes = function getDecimalCharIndexes2(val) {
    var decimalCharIndex = val.search(_decimal.current);
    _decimal.current.lastIndex = 0;
    var filteredVal = val.replace(_prefix.current, "").trim().replace(/\s/g, "").replace(_currency.current, "");
    var decimalCharIndexWithoutPrefix = filteredVal.search(_decimal.current);
    _decimal.current.lastIndex = 0;
    return {
      decimalCharIndex,
      decimalCharIndexWithoutPrefix
    };
  };
  var getCharIndexes = function getCharIndexes2(val) {
    var decimalCharIndex = val.search(_decimal.current);
    _decimal.current.lastIndex = 0;
    var minusCharIndex = val.search(_minusSign.current);
    _minusSign.current.lastIndex = 0;
    var suffixCharIndex = val.search(_suffix.current);
    _suffix.current.lastIndex = 0;
    var currencyCharIndex = val.search(_currency.current);
    if (currencyCharIndex === 0 && prefixChar.current && prefixChar.current.length > 1) {
      currencyCharIndex = prefixChar.current.trim().length;
    }
    _currency.current.lastIndex = 0;
    return {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex
    };
  };
  var insert = function insert2(event, text) {
    var sign = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      isDecimalSign: false,
      isMinusSign: false
    };
    var minusCharIndexOnText = text.search(_minusSign.current);
    _minusSign.current.lastIndex = 0;
    if (!allowMinusSign() && minusCharIndexOnText !== -1) {
      return;
    }
    var selectionStart = inputRef.current.selectionStart;
    var selectionEnd = inputRef.current.selectionEnd;
    var inputValue = inputRef.current.value.trim();
    var _getCharIndexes2 = getCharIndexes(inputValue), decimalCharIndex = _getCharIndexes2.decimalCharIndex, minusCharIndex = _getCharIndexes2.minusCharIndex, suffixCharIndex = _getCharIndexes2.suffixCharIndex, currencyCharIndex = _getCharIndexes2.currencyCharIndex;
    var maxFractionDigits = numberFormat.current.resolvedOptions().maximumFractionDigits;
    var newValueStr;
    if (sign.isMinusSign) {
      var isNewMinusSign = minusCharIndex === -1;
      if (selectionStart === 0 || selectionStart === currencyCharIndex + 1) {
        newValueStr = inputValue;
        if (isNewMinusSign || selectionEnd !== 0) {
          newValueStr = insertText(inputValue, text, 0, selectionEnd);
        }
        updateValue(event, newValueStr, text, "insert");
      }
    } else if (sign.isDecimalSign) {
      if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
        updateValue(event, inputValue, text, "insert");
      } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
        newValueStr = insertText(inputValue, text, selectionStart, selectionEnd);
        updateValue(event, newValueStr, text, "insert");
      } else if (decimalCharIndex === -1 && (maxFractionDigits || props.maxFractionDigits)) {
        newValueStr = insertText(inputValue, text, selectionStart, selectionEnd);
        updateValue(event, newValueStr, text, "insert");
      }
    } else {
      var operation = selectionStart !== selectionEnd ? "range-insert" : "insert";
      if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
        if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
          var charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
          newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
          updateValue(event, newValueStr, text, operation);
        }
      } else {
        newValueStr = insertText(inputValue, text, selectionStart, selectionEnd);
        updateValue(event, newValueStr, text, operation);
      }
    }
  };
  var replaceSuffix = function replaceSuffix2(value) {
    return value ? value.replace(_suffix.current, "").trim().replace(/\s/g, "").replace(_currency.current, "") : value;
  };
  var insertText = function insertText2(value, text, start, end) {
    var textSplit = isDecimalSign(text) ? text : text.split(_decimal.current);
    if (textSplit.length === 2) {
      var decimalCharIndex = value.slice(start, end).search(_decimal.current);
      _decimal.current.lastIndex = 0;
      return decimalCharIndex > 0 ? value.slice(0, start) + formatValue(text) + replaceSuffix(value).slice(end) : value || formatValue(text);
    } else if (isDecimalSign(text) && value.length === 0) {
      return formatValue("0.");
    } else if (end - start === value.length) {
      return formatValue(text);
    } else if (start === 0) {
      var suffix = ObjectUtils.isLetter(value[end]) ? end - 1 : end;
      return text + value.slice(suffix);
    } else if (end === value.length) {
      return value.slice(0, start) + text;
    }
    var selectionValue = value.slice(start, end);
    var space = /\s$/.test(selectionValue) ? " " : "";
    return value.slice(0, start) + text + space + value.slice(end);
  };
  var deleteRange = function deleteRange2(value, start, end) {
    var newValueStr;
    if (end - start === value.length) {
      newValueStr = "";
    } else if (start === 0) {
      newValueStr = value.slice(end);
    } else if (end === value.length) {
      newValueStr = value.slice(0, start);
    } else {
      newValueStr = value.slice(0, start) + value.slice(end);
    }
    return newValueStr;
  };
  var initCursor = function initCursor2() {
    var selectionStart = inputRef.current.selectionStart;
    var inputValue = inputRef.current.value;
    var valueLength = inputValue.length;
    var index = null;
    var prefixLength = (prefixChar.current || "").length;
    inputValue = inputValue.replace(_prefix.current, "");
    selectionStart = selectionStart - prefixLength;
    var _char5 = inputValue.charAt(selectionStart);
    if (isNumeralChar(_char5)) {
      return selectionStart + prefixLength;
    }
    var i = selectionStart - 1;
    while (i >= 0) {
      _char5 = inputValue.charAt(i);
      if (isNumeralChar(_char5)) {
        index = i + prefixLength;
        break;
      } else {
        i--;
      }
    }
    if (index !== null) {
      inputRef.current.setSelectionRange(index + 1, index + 1);
    } else {
      i = selectionStart;
      while (i < valueLength) {
        _char5 = inputValue.charAt(i);
        if (isNumeralChar(_char5)) {
          index = i + prefixLength;
          break;
        } else {
          i++;
        }
      }
      if (index !== null) {
        inputRef.current.setSelectionRange(index, index);
      }
    }
    return index || 0;
  };
  var onInputPointerDown = function onInputPointerDown2() {
    isFocusedByClick.current = true;
  };
  var onInputClick = function onInputClick2() {
    initCursor();
  };
  var isNumeralChar = function isNumeralChar2(_char6) {
    if (_char6.length === 1 && (_numeral.current.test(_char6) || _decimal.current.test(_char6) || _group.current.test(_char6) || _minusSign.current.test(_char6))) {
      resetRegex();
      return true;
    }
    return false;
  };
  var resetRegex = function resetRegex2() {
    _numeral.current.lastIndex = 0;
    _decimal.current.lastIndex = 0;
    _group.current.lastIndex = 0;
    _minusSign.current.lastIndex = 0;
  };
  var updateValue = function updateValue2(event, valueStr, insertedValueStr, operation) {
    var currentValue = inputRef.current.value;
    var newValue = null;
    if (valueStr != null) {
      newValue = evaluateEmpty(parseValue(valueStr));
      updateInput(newValue, insertedValueStr, operation, valueStr);
      handleOnChange(event, currentValue, newValue);
    }
  };
  var evaluateEmpty = function evaluateEmpty2(newValue) {
    return !newValue && !props.allowEmpty ? props.min || 0 : newValue;
  };
  var handleOnChange = function handleOnChange2(event, currentValue, newValue) {
    if (props.onChange && isValueChanged(currentValue, newValue)) {
      props.onChange({
        originalEvent: event,
        value: newValue
      });
    }
  };
  var isValueChanged = function isValueChanged2(currentValue, newValue) {
    if (newValue === null && currentValue !== null) {
      return true;
    }
    if (newValue != null) {
      var parsedCurrentValue = typeof currentValue === "string" ? parseValue(currentValue) : currentValue;
      return newValue !== parsedCurrentValue;
    }
    return false;
  };
  var validateValue = function validateValue2(value) {
    if (value === "-") {
      return null;
    }
    return validateValueByLimit(value);
  };
  var validateValueByLimit = function validateValueByLimit2(value) {
    if (ObjectUtils.isEmpty(value)) {
      return null;
    }
    if (props.min !== null && value < props.min) {
      return props.min;
    }
    if (props.max !== null && value > props.max) {
      return props.max;
    }
    return value;
  };
  var updateInput = function updateInput2(value, insertedValueStr, operation, valueStr) {
    insertedValueStr = insertedValueStr || "";
    var inputEl = inputRef.current;
    var inputValue = inputEl.value;
    var newValue = formatValue(value);
    var currentLength = inputValue.length;
    if (newValue !== valueStr) {
      newValue = concatValues(newValue, valueStr);
    }
    if (currentLength === 0) {
      inputEl.value = newValue;
      inputEl.setSelectionRange(0, 0);
      var index = initCursor();
      var selectionEnd = index + insertedValueStr.length + (isDecimalSign(insertedValueStr) ? 1 : 0);
      inputEl.setSelectionRange(selectionEnd, selectionEnd);
    } else {
      var selectionStart = inputEl.selectionStart;
      var _selectionEnd = inputEl.selectionEnd;
      if (props.maxLength && props.maxLength < newValue.length) {
        return;
      }
      inputEl.value = newValue;
      var newLength = newValue.length;
      if (operation === "range-insert") {
        var startValue = parseValue((inputValue || "").slice(0, selectionStart));
        var startValueStr = startValue !== null ? startValue.toString() : "";
        var startExpr = startValueStr.split("").join("(".concat(groupChar.current, ")?"));
        var sRegex = new RegExp(startExpr, "g");
        sRegex.test(newValue);
        var tExpr = insertedValueStr.split("").join("(".concat(groupChar.current, ")?"));
        var tRegex = new RegExp(tExpr, "g");
        tRegex.test(newValue.slice(sRegex.lastIndex));
        _selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
        inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
      } else if (newLength === currentLength) {
        if (operation === "insert" || operation === "delete-back-single") {
          var newSelectionEnd = _selectionEnd;
          if (insertedValueStr === "0") {
            newSelectionEnd = _selectionEnd + 1;
          } else {
            newSelectionEnd = newSelectionEnd + Number(isDecimalSign(value) || isDecimalSign(insertedValueStr));
          }
          inputEl.setSelectionRange(newSelectionEnd, newSelectionEnd);
        } else if (operation === "delete-single") {
          inputEl.setSelectionRange(_selectionEnd - 1, _selectionEnd - 1);
        } else if (operation === "delete-range" || operation === "spin") {
          inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
        }
      } else if (operation === "delete-back-single") {
        var prevChar = inputValue.charAt(_selectionEnd - 1);
        var nextChar = inputValue.charAt(_selectionEnd);
        var diff = currentLength - newLength;
        var isGroupChar = _group.current.test(nextChar);
        if (isGroupChar && diff === 1) {
          _selectionEnd = _selectionEnd + 1;
        } else if (!isGroupChar && isNumeralChar(prevChar)) {
          _selectionEnd = _selectionEnd + (-1 * diff + 1);
        }
        _group.current.lastIndex = 0;
        inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
      } else if (inputValue === "-" && operation === "insert") {
        inputEl.setSelectionRange(0, 0);
        var _index2 = initCursor();
        var _selectionEnd2 = _index2 + insertedValueStr.length + 1;
        inputEl.setSelectionRange(_selectionEnd2, _selectionEnd2);
      } else {
        _selectionEnd = _selectionEnd + (newLength - currentLength);
        inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
      }
    }
    inputEl.setAttribute("aria-valuenow", value);
  };
  var updateInputValue = function updateInputValue2(newValue) {
    newValue = evaluateEmpty(newValue);
    var inputEl = inputRef.current;
    var value = inputEl.value;
    var _formattedValue = formattedValue(newValue);
    if (value !== _formattedValue) {
      inputEl.value = _formattedValue;
      inputEl.setAttribute("aria-valuenow", newValue);
    }
  };
  var formattedValue = function formattedValue2(val) {
    return formatValue(evaluateEmpty(val));
  };
  var concatValues = function concatValues2(val1, val2) {
    if (val1 && val2) {
      var decimalCharIndex = val2.search(_decimal.current);
      _decimal.current.lastIndex = 0;
      var newVal1 = replaceDecimalSeparator(val1).split(_decimal.current)[0].replace(_suffix.current, "").trim();
      return decimalCharIndex !== -1 ? newVal1 + val2.slice(decimalCharIndex) : val1;
    }
    return val1;
  };
  var getDecimalLength = function getDecimalLength2(value) {
    if (value) {
      var valueSplit = value.split(_decimal.current);
      if (valueSplit.length === 2) {
        return replaceSuffix(valueSplit[1]).length;
      }
    }
    return 0;
  };
  var updateModel = function updateModel2(event, value) {
    if (props.onValueChange) {
      props.onValueChange({
        originalEvent: event,
        value,
        stopPropagation: function stopPropagation() {
          event === null || event === void 0 || event.stopPropagation();
        },
        preventDefault: function preventDefault() {
          event === null || event === void 0 || event.preventDefault();
        },
        target: {
          name: props.name,
          id: props.id,
          value
        }
      });
    }
  };
  var onInputFocus = function onInputFocus2(event) {
    setFocusedState(true);
    props.onFocus && props.onFocus(event);
    if ((props.suffix || props.currency || props.prefix) && inputRef.current && !isFocusedByClick.current) {
      var inputValue = inputRef.current.value;
      var prefixLength = (prefixChar.current || "").length;
      var suffixLength = (suffixChar.current || "").length;
      var end = inputValue.length === 0 ? 0 : inputValue.length - suffixLength;
      inputRef.current.setSelectionRange(prefixLength, end);
    }
  };
  var onInputBlur = function onInputBlur2(event) {
    setFocusedState(false);
    isFocusedByClick.current = false;
    if (inputRef.current) {
      var currentValue = inputRef.current.value;
      if (isValueChanged(currentValue, props.value)) {
        var newValue = validateValue(parseValue(currentValue));
        updateInputValue(newValue);
        updateModel(event, newValue);
      }
    }
    props.onBlur && props.onBlur(event);
  };
  var clearTimer = function clearTimer2() {
    if (timer.current) {
      clearInterval(timer.current);
    }
  };
  var changeValue = function changeValue2() {
    var val = validateValueByLimit(props.value);
    updateInputValue(props.format ? val : replaceDecimalSeparator(val));
    var newValue = validateValue(props.value);
    if (props.value !== null && props.value !== newValue) {
      updateModel(null, newValue);
    }
  };
  var getFormatter = function getFormatter2() {
    return numberFormat.current;
  };
  React3.useImperativeHandle(ref, function() {
    return {
      props,
      focus: function focus() {
        return DomHandler.focus(inputRef.current);
      },
      getFormatter,
      getElement: function getElement() {
        return elementRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      }
    };
  });
  React3.useEffect(function() {
    ObjectUtils.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  useMountEffect(function() {
    constructParser();
    var newValue = validateValue(props.value);
    if (props.value !== null && props.value !== newValue) {
      updateModel(null, newValue);
    }
  });
  useUpdateEffect(function() {
    constructParser();
    changeValue();
  }, [_locale, props.locale, props.localeMatcher, props.mode, props.currency, props.currencyDisplay, props.useGrouping, props.minFractionDigits, props.maxFractionDigits, props.suffix, props.prefix]);
  useUpdateEffect(function() {
    changeValue();
  }, [props.value]);
  useUpdateEffect(function() {
    if (props.disabled) {
      clearTimer();
    }
  }, [props.disabled]);
  var createInputElement = function createInputElement2() {
    var className = classNames(props.inputClassName, cx("input", {
      context
    }));
    var valueToRender = formattedValue(props.value);
    return React3.createElement(InputText, _extends3({
      ref: inputRef,
      id: props.inputId,
      style: props.inputStyle,
      role: "spinbutton",
      className,
      defaultValue: valueToRender,
      type: props.type,
      size: props.size,
      tabIndex: props.tabIndex,
      inputMode,
      maxLength: props.maxLength,
      disabled: props.disabled,
      required: props.required,
      pattern: props.pattern,
      placeholder: props.placeholder,
      readOnly: props.readOnly,
      name: props.name,
      autoFocus: props.autoFocus,
      onKeyDown: onInputKeyDown,
      onKeyPress: onInputAndroidKey,
      onInput,
      onClick: onInputClick,
      onPointerDown: onInputPointerDown,
      onBlur: onInputBlur,
      onFocus: onInputFocus,
      onPaste,
      min: props.min,
      max: props.max,
      "aria-valuemin": props.min,
      "aria-valuemax": props.max,
      "aria-valuenow": props.value
    }, ariaProps, dataProps, {
      pt: ptm("input"),
      unstyled: props.unstyled,
      __parentMetadata: {
        parent: metaData
      }
    }));
  };
  var createUpButton = function createUpButton2() {
    var incrementIconProps = mergeProps({
      className: cx("incrementIcon")
    }, ptm("incrementIcon"));
    var icon = props.incrementButtonIcon || React3.createElement(AngleUpIcon, incrementIconProps);
    var upButton = IconUtils.getJSXIcon(icon, _objectSpread({}, incrementIconProps), {
      props
    });
    var incrementButtonProps = mergeProps({
      type: "button",
      className: classNames(props.incrementButtonClassName, cx("incrementButton")),
      onPointerLeave: onUpButtonMouseLeave,
      onPointerDown: function onPointerDown(e) {
        return onUpButtonMouseDown(e);
      },
      onPointerUp: onUpButtonMouseUp,
      onKeyDown: function onKeyDown(e) {
        return onUpButtonKeyDown(e);
      },
      onKeyUp: onUpButtonKeyUp,
      disabled: props.disabled,
      tabIndex: -1,
      "aria-hidden": true
    }, ptm("incrementButton"));
    return React3.createElement("button", incrementButtonProps, upButton, React3.createElement(Ripple, null));
  };
  var createDownButton = function createDownButton2() {
    var decrementIconProps = mergeProps({
      className: cx("decrementIcon")
    }, ptm("decrementIcon"));
    var icon = props.decrementButtonIcon || React3.createElement(AngleDownIcon, decrementIconProps);
    var downButton = IconUtils.getJSXIcon(icon, _objectSpread({}, decrementIconProps), {
      props
    });
    var decrementButtonProps = mergeProps({
      type: "button",
      className: classNames(props.decrementButtonClassName, cx("decrementButton")),
      onPointerLeave: onDownButtonMouseLeave,
      onPointerDown: function onPointerDown(e) {
        return onDownButtonMouseDown(e);
      },
      onPointerUp: onDownButtonMouseUp,
      onKeyDown: function onKeyDown(e) {
        return onDownButtonKeyDown(e);
      },
      onKeyUp: onDownButtonKeyUp,
      disabled: props.disabled,
      tabIndex: -1,
      "aria-hidden": true
    }, ptm("decrementButton"));
    return React3.createElement("button", decrementButtonProps, downButton, React3.createElement(Ripple, null));
  };
  var createButtonGroup = function createButtonGroup2() {
    var upButton = props.showButtons && createUpButton();
    var downButton = props.showButtons && createDownButton();
    var buttonGroupProps = mergeProps({
      className: cx("buttonGroup")
    }, ptm("buttonGroup"));
    if (stacked) {
      return React3.createElement("span", buttonGroupProps, upButton, downButton);
    }
    return React3.createElement(React3.Fragment, null, upButton, downButton);
  };
  var hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
  var otherProps = InputNumberBase.getOtherProps(props);
  var dataProps = ObjectUtils.reduceKeys(otherProps, DomHandler.DATA_PROPS);
  var ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
  var inputElement = createInputElement();
  var buttonGroup = createButtonGroup();
  var rootProps = mergeProps({
    id: props.id,
    className: classNames(props.className, cx("root", {
      focusedState,
      stacked,
      horizontal,
      vertical
    })),
    style: props.style
  }, otherProps, ptm("root"));
  return React3.createElement(React3.Fragment, null, React3.createElement("span", _extends3({
    ref: elementRef
  }, rootProps), inputElement, buttonGroup), hasTooltip && React3.createElement(Tooltip, _extends3({
    target: elementRef,
    content: props.tooltip,
    pt: ptm("tooltip")
  }, props.tooltipOptions)));
}));
InputNumber.displayName = "InputNumber";

export {
  InputNumber
};
//# sourceMappingURL=chunk-VBZO5YOA.js.map
