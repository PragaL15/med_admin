"use client";
import {
  ComponentBase,
  useHandleStyle,
  useMergeProps
} from "./chunk-NVVTRTSK.js";
import {
  PrimeReactContext
} from "./chunk-O2YLKOX3.js";
import {
  classNames
} from "./chunk-IWXOSFRG.js";
import {
  require_react
} from "./chunk-WNPTCGAH.js";
import {
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/primereact/progressbar/progressbar.esm.js
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
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value2) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value2,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value2;
  }
  return obj;
}
var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return props.mode === "indeterminate" ? classNames("p-progressbar p-component p-progressbar-indeterminate") : classNames("p-progressbar p-component p-progressbar-determinate");
  },
  value: "p-progressbar-value p-progressbar-value-animate",
  label: "p-progressbar-label",
  container: "p-progressbar-indeterminate-container"
};
var styles = "\n@layer primereact {\n  .p-progressbar {\n      position: relative;\n      overflow: hidden;\n  }\n  \n  .p-progressbar-determinate .p-progressbar-value {\n      height: 100%;\n      width: 0%;\n      position: absolute;\n      display: none;\n      border: 0 none;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      overflow: hidden;\n  }\n  \n  .p-progressbar-determinate .p-progressbar-label {\n      display: inline-flex;\n  }\n  \n  .p-progressbar-determinate .p-progressbar-value-animate {\n      transition: width 1s ease-in-out;\n  }\n  \n  .p-progressbar-indeterminate .p-progressbar-value::before {\n        content: '';\n        position: absolute;\n        background-color: inherit;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        will-change: left, right;\n        -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n                animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n  }\n  \n  .p-progressbar-indeterminate .p-progressbar-value::after {\n      content: '';\n      position: absolute;\n      background-color: inherit;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      will-change: left, right;\n      -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n              animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n      -webkit-animation-delay: 1.15s;\n              animation-delay: 1.15s;\n  }\n}\n\n@-webkit-keyframes p-progressbar-indeterminate-anim {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; }\n}\n@keyframes p-progressbar-indeterminate-anim {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; }\n}\n\n@-webkit-keyframes p-progressbar-indeterminate-anim-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; }\n}\n@keyframes p-progressbar-indeterminate-anim-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; }\n}\n";
var inlineStyles = {
  value: function value(_ref2) {
    var props = _ref2.props;
    var valueWidth = Math.max(props.value, 2);
    var valueColor = props.value ? props.color : "transparent";
    return props.mode === "indeterminate" ? {
      backgroundColor: props.color
    } : {
      width: valueWidth + "%",
      display: "flex",
      backgroundColor: valueColor
    };
  }
};
var ProgressBarBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "ProgressBar",
    __parentMetadata: null,
    id: null,
    value: null,
    showValue: true,
    unit: "%",
    style: null,
    className: null,
    mode: "determinate",
    displayValueTemplate: null,
    color: null,
    children: void 0
  },
  css: {
    classes,
    styles,
    inlineStyles
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
var ProgressBar = React.memo(React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = ProgressBarBase.getProps(inProps, context);
  var _ProgressBarBase$setM = ProgressBarBase.setMetaData(_objectSpread({
    props
  }, props.__parentMetadata)), ptm = _ProgressBarBase$setM.ptm, cx = _ProgressBarBase$setM.cx, isUnstyled = _ProgressBarBase$setM.isUnstyled;
  useHandleStyle(ProgressBarBase.css.styles, isUnstyled, {
    name: "progressbar"
  });
  var elementRef = React.useRef(null);
  var createLabel = function createLabel2() {
    if (props.showValue && props.value != null) {
      var label = props.displayValueTemplate ? props.displayValueTemplate(props.value) : props.value + props.unit;
      return label;
    }
    return null;
  };
  var createDeterminate = function createDeterminate2() {
    var label = createLabel();
    var rootProps = mergeProps({
      className: classNames(props.className, cx("root")),
      style: props.style,
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuenow": props.value,
      "aria-valuemax": "100"
    }, ProgressBarBase.getOtherProps(props), ptm("root"));
    var valueProps = mergeProps({
      className: cx("value"),
      style: {
        width: props.value + "%",
        display: "flex",
        backgroundColor: props.color
      }
    }, ptm("value"));
    var labelProps = mergeProps({
      className: cx("label")
    }, ptm("label"));
    return React.createElement("div", _extends({
      id: props.id,
      ref: elementRef
    }, rootProps), React.createElement("div", valueProps, label != null && React.createElement("div", labelProps, label)));
  };
  var createIndeterminate = function createIndeterminate2() {
    var rootProps = mergeProps({
      className: classNames(props.className, cx("root")),
      style: props.style,
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuenow": props.value,
      "aria-valuemax": "100"
    }, ProgressBarBase.getOtherProps(props), ptm("root"));
    var containerProps = mergeProps({
      className: cx("container")
    }, ptm("container"));
    var valueProps = mergeProps({
      className: cx("value"),
      style: {
        backgroundColor: props.color
      }
    }, ptm("value"));
    return React.createElement("div", _extends({
      id: props.id,
      ref: elementRef
    }, rootProps), React.createElement("div", containerProps, React.createElement("div", valueProps)));
  };
  React.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  if (props.mode === "determinate") {
    return createDeterminate();
  } else if (props.mode === "indeterminate") {
    return createIndeterminate();
  }
  throw new Error(props.mode + " is not a valid mode for the ProgressBar. Valid values are 'determinate' and 'indeterminate'");
}));
ProgressBar.displayName = "ProgressBar";
export {
  ProgressBar
};
//# sourceMappingURL=primereact_progressbar.js.map
