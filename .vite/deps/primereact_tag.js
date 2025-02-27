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
  IconUtils,
  classNames
} from "./chunk-IWXOSFRG.js";
import {
  require_react
} from "./chunk-WNPTCGAH.js";
import {
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/primereact/tag/tag.esm.js
var React = __toESM(require_react());
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
  value: "p-tag-value",
  icon: "p-tag-icon",
  root: function root(_ref) {
    var props = _ref.props;
    return classNames("p-tag p-component", _defineProperty(_defineProperty({}, "p-tag-".concat(props.severity), props.severity !== null), "p-tag-rounded", props.rounded));
  }
};
var styles = "\n@layer primereact {\n    .p-tag {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n    }\n    \n    .p-tag-icon,\n    .p-tag-value,\n    .p-tag-icon.pi {\n        line-height: 1.5;\n    }\n    \n    .p-tag.p-tag-rounded {\n        border-radius: 10rem;\n    }\n}\n";
var TagBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Tag",
    value: null,
    severity: null,
    rounded: false,
    icon: null,
    style: null,
    className: null,
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
var Tag = React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = TagBase.getProps(inProps, context);
  var _TagBase$setMetaData = TagBase.setMetaData({
    props
  }), ptm = _TagBase$setMetaData.ptm, cx = _TagBase$setMetaData.cx, isUnstyled = _TagBase$setMetaData.isUnstyled;
  useHandleStyle(TagBase.css.styles, isUnstyled, {
    name: "tag"
  });
  var elementRef = React.useRef(null);
  var iconProps = mergeProps({
    className: cx("icon")
  }, ptm("icon"));
  var icon = IconUtils.getJSXIcon(props.icon, _objectSpread({}, iconProps), {
    props
  });
  React.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var rootProps = mergeProps({
    ref: elementRef,
    className: classNames(props.className, cx("root")),
    style: props.style
  }, TagBase.getOtherProps(props), ptm("root"));
  var valueProps = mergeProps({
    className: cx("value")
  }, ptm("value"));
  return React.createElement("span", rootProps, icon, React.createElement("span", valueProps, props.value), React.createElement("span", null, props.children));
});
Tag.displayName = "Tag";
export {
  Tag
};
//# sourceMappingURL=primereact_tag.js.map
