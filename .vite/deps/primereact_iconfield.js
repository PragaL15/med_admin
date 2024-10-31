"use client";
import {
  ComponentBase,
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

// node_modules/primereact/iconfield/iconfield.esm.js
var import_react = __toESM(require_react());
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
var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return classNames("p-icon-field", {
      "p-icon-field-right": props.iconPosition === "right",
      "p-icon-field-left": props.iconPosition === "left"
    });
  }
};
var IconFieldBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "IconField",
    __parentMetadata: null,
    children: void 0,
    className: null,
    iconPosition: "right"
  },
  css: {
    classes
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
var IconField = import_react.default.memo(import_react.default.forwardRef(function(inProps, ref) {
  var elementRef = (0, import_react.useRef)(ref);
  var mergeProps = useMergeProps();
  var context = (0, import_react.useContext)(PrimeReactContext);
  var props = IconFieldBase.getProps(inProps, context);
  var _IconFieldBase$setMet = IconFieldBase.setMetaData(_objectSpread(_objectSpread({
    props
  }, props.__parentMetadata), {}, {
    context: {
      iconPosition: props.iconPosition
    }
  })), ptm = _IconFieldBase$setMet.ptm, cx = _IconFieldBase$setMet.cx;
  var rootProps = mergeProps({
    className: classNames(props.className, cx("root", {
      iconPosition: props.iconPosition
    }))
  }, IconFieldBase.getOtherProps(props), ptm("root"));
  return import_react.default.createElement("div", _extends({}, rootProps, {
    ref: elementRef
  }), import_react.Children.map(props.children, function(child, index) {
    return (0, import_react.cloneElement)(child, {
      iconPosition: props.iconPosition
    });
  }));
}));
IconField.displayName = "IconField";
export {
  IconField
};
//# sourceMappingURL=primereact_iconfield.js.map
