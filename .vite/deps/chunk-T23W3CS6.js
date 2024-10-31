import {
  CSSTransition,
  ChevronDownIcon,
  ChevronUpIcon,
  OverlayService
} from "./chunk-HTSKNMO4.js";
import {
  CheckIcon,
  TimesIcon
} from "./chunk-HBZXHEM5.js";
import {
  SpinnerIcon
} from "./chunk-LZJISS6Y.js";
import {
  Ripple
} from "./chunk-3B33TPJN.js";
import {
  IconBase
} from "./chunk-OFNDZ4QC.js";
import {
  Portal,
  Tooltip
} from "./chunk-V2MG7ABT.js";
import {
  ComponentBase,
  useEventListener,
  useHandleStyle,
  useMergeProps,
  useMountEffect,
  useOverlayListener,
  usePrevious,
  useResizeListener,
  useStyle,
  useUnmountEffect,
  useUpdateEffect
} from "./chunk-NVVTRTSK.js";
import {
  FilterService,
  PrimeReact,
  PrimeReactContext,
  localeOption
} from "./chunk-O2YLKOX3.js";
import {
  DomHandler,
  IconUtils,
  ObjectUtils,
  ZIndexUtils,
  classNames
} from "./chunk-IWXOSFRG.js";
import {
  require_react
} from "./chunk-WNPTCGAH.js";
import {
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/primereact/dropdown/dropdown.esm.js
var React3 = __toESM(require_react());

// node_modules/primereact/icons/search/index.esm.js
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
var SearchIcon = React.memo(React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React.createElement("svg", _extends({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",
    fill: "currentColor"
  }));
}));
SearchIcon.displayName = "SearchIcon";

// node_modules/primereact/virtualscroller/virtualscroller.esm.js
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
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var styles = "\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    /*contain: content;*/\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n\n.p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-virtualscroller-loader.p-component-overlay {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-virtualscroller-loading-icon {\n    font-size: 2rem;\n}\n\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n/* Inline */\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n";
var VirtualScrollerBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "VirtualScroller",
    __parentMetadata: null,
    id: null,
    style: null,
    className: null,
    tabIndex: 0,
    items: null,
    itemSize: 0,
    scrollHeight: null,
    scrollWidth: null,
    orientation: "vertical",
    step: 0,
    numToleratedItems: null,
    delay: 0,
    resizeDelay: 10,
    appendOnly: false,
    inline: false,
    lazy: false,
    disabled: false,
    loaderDisabled: false,
    loadingIcon: null,
    columns: null,
    loading: void 0,
    autoSize: false,
    showSpacer: true,
    showLoader: false,
    loadingTemplate: null,
    loaderIconTemplate: null,
    itemTemplate: null,
    contentTemplate: null,
    onScroll: null,
    onScrollIndexChange: null,
    onLazyLoad: null,
    children: void 0
  },
  css: {
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
var VirtualScroller = React2.memo(React2.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React2.useContext(PrimeReactContext);
  var props = VirtualScrollerBase.getProps(inProps, context);
  var prevProps = usePrevious(inProps) || {};
  var vertical = props.orientation === "vertical";
  var horizontal = props.orientation === "horizontal";
  var both = props.orientation === "both";
  var _React$useState = React2.useState(both ? {
    rows: 0,
    cols: 0
  } : 0), _React$useState2 = _slicedToArray(_React$useState, 2), firstState = _React$useState2[0], setFirstState = _React$useState2[1];
  var _React$useState3 = React2.useState(both ? {
    rows: 0,
    cols: 0
  } : 0), _React$useState4 = _slicedToArray(_React$useState3, 2), lastState = _React$useState4[0], setLastState = _React$useState4[1];
  var _React$useState5 = React2.useState(0), _React$useState6 = _slicedToArray(_React$useState5, 2), pageState = _React$useState6[0], setPageState = _React$useState6[1];
  var _React$useState7 = React2.useState(both ? {
    rows: 0,
    cols: 0
  } : 0), _React$useState8 = _slicedToArray(_React$useState7, 2), numItemsInViewportState = _React$useState8[0], setNumItemsInViewportState = _React$useState8[1];
  var _React$useState9 = React2.useState(props.numToleratedItems), _React$useState10 = _slicedToArray(_React$useState9, 2), numToleratedItemsState = _React$useState10[0], setNumToleratedItemsState = _React$useState10[1];
  var _React$useState11 = React2.useState(props.loading || false), _React$useState12 = _slicedToArray(_React$useState11, 2), loadingState = _React$useState12[0], setLoadingState = _React$useState12[1];
  var _React$useState13 = React2.useState([]), _React$useState14 = _slicedToArray(_React$useState13, 2), loaderArrState = _React$useState14[0], setLoaderArrState = _React$useState14[1];
  var _VirtualScrollerBase$ = VirtualScrollerBase.setMetaData({
    props,
    state: {
      first: firstState,
      last: lastState,
      page: pageState,
      numItemsInViewport: numItemsInViewportState,
      numToleratedItems: numToleratedItemsState,
      loading: loadingState,
      loaderArr: loaderArrState
    }
  }), ptm = _VirtualScrollerBase$.ptm;
  useStyle(VirtualScrollerBase.css.styles, {
    name: "virtualscroller"
  });
  var elementRef = React2.useRef(null);
  var _contentRef = React2.useRef(null);
  var _spacerRef = React2.useRef(null);
  var _stickyRef = React2.useRef(null);
  var lastScrollPos = React2.useRef(both ? {
    top: 0,
    left: 0
  } : 0);
  var scrollTimeout = React2.useRef(null);
  var resizeTimeout = React2.useRef(null);
  var contentStyle = React2.useRef({});
  var spacerStyle = React2.useRef({});
  var defaultWidth = React2.useRef(null);
  var defaultHeight = React2.useRef(null);
  var defaultContentWidth = React2.useRef(null);
  var defaultContentHeight = React2.useRef(null);
  var isItemRangeChanged = React2.useRef(false);
  var lazyLoadState = React2.useRef(null);
  var _useResizeListener = useResizeListener({
    listener: function listener(event) {
      return onResize();
    },
    when: !props.disabled
  }), _useResizeListener2 = _slicedToArray(_useResizeListener, 1), bindWindowResizeListener = _useResizeListener2[0];
  var _useEventListener = useEventListener({
    target: "window",
    type: "orientationchange",
    listener: function listener(event) {
      return onResize();
    },
    when: !props.disabled
  }), _useEventListener2 = _slicedToArray(_useEventListener, 1), bindOrientationChangeListener = _useEventListener2[0];
  var getElementRef = function getElementRef2() {
    return elementRef;
  };
  var getPageByFirst = function getPageByFirst2(first) {
    return Math.floor((first + numToleratedItemsState * 4) / (props.step || 1));
  };
  var setContentElement = function setContentElement2(element) {
    _contentRef.current = element || _contentRef.current || DomHandler.findSingle(elementRef.current, ".p-virtualscroller-content");
  };
  var isPageChanged = function isPageChanged2(first) {
    return props.step ? pageState !== getPageByFirst(first) : true;
  };
  var scrollTo = function scrollTo2(options) {
    lastScrollPos.current = both ? {
      top: 0,
      left: 0
    } : 0;
    elementRef.current && elementRef.current.scrollTo(options);
  };
  var scrollToIndex = function scrollToIndex2(index) {
    var behavior = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto";
    var _calculateNumItems = calculateNumItems(), numToleratedItems = _calculateNumItems.numToleratedItems;
    var contentPos = getContentPosition();
    var calculateFirst = function calculateFirst2() {
      var _index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var _numT = arguments.length > 1 ? arguments[1] : void 0;
      return _index <= _numT ? 0 : _index;
    };
    var calculateCoord = function calculateCoord2(_first, _size, _cpos) {
      return _first * _size + _cpos;
    };
    var scrollToItem = function scrollToItem2() {
      var left = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return scrollTo({
        left,
        top,
        behavior
      });
    };
    var newFirst = both ? {
      rows: 0,
      cols: 0
    } : 0;
    var isRangeChanged = false;
    if (both) {
      newFirst = {
        rows: calculateFirst(index[0], numToleratedItems[0]),
        cols: calculateFirst(index[1], numToleratedItems[1])
      };
      scrollToItem(calculateCoord(newFirst.cols, props.itemSize[1], contentPos.left), calculateCoord(newFirst.rows, props.itemSize[0], contentPos.top));
      isRangeChanged = firstState.rows !== newFirst.rows || firstState.cols !== newFirst.cols;
    } else {
      newFirst = calculateFirst(index, numToleratedItems);
      horizontal ? scrollToItem(calculateCoord(newFirst, props.itemSize, contentPos.left), 0) : scrollToItem(0, calculateCoord(newFirst, props.itemSize, contentPos.top));
      isRangeChanged = firstState !== newFirst;
    }
    isItemRangeChanged.current = isRangeChanged;
    setFirstState(newFirst);
  };
  var scrollInView = function scrollInView2(index, to) {
    var behavior = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
    if (to) {
      var _getRenderedRange = getRenderedRange(), first = _getRenderedRange.first, viewport = _getRenderedRange.viewport;
      var scrollToItem = function scrollToItem2() {
        var left = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return scrollTo({
          left,
          top,
          behavior
        });
      };
      var isToStart = to === "to-start";
      var isToEnd = to === "to-end";
      if (isToStart) {
        if (both) {
          if (viewport.first.rows - first.rows > index[0]) {
            scrollToItem(viewport.first.cols * props.itemSize[1], (viewport.first.rows - 1) * props.itemSize[0]);
          } else if (viewport.first.cols - first.cols > index[1]) {
            scrollToItem((viewport.first.cols - 1) * props.itemSize[1], viewport.first.rows * props.itemSize[0]);
          }
        } else if (viewport.first - first > index) {
          var pos = (viewport.first - 1) * props.itemSize;
          horizontal ? scrollToItem(pos, 0) : scrollToItem(0, pos);
        }
      } else if (isToEnd) {
        if (both) {
          if (viewport.last.rows - first.rows <= index[0] + 1) {
            scrollToItem(viewport.first.cols * props.itemSize[1], (viewport.first.rows + 1) * props.itemSize[0]);
          } else if (viewport.last.cols - first.cols <= index[1] + 1) {
            scrollToItem((viewport.first.cols + 1) * props.itemSize[1], viewport.first.rows * props.itemSize[0]);
          }
        } else if (viewport.last - first <= index + 1) {
          var _pos2 = (viewport.first + 1) * props.itemSize;
          horizontal ? scrollToItem(_pos2, 0) : scrollToItem(0, _pos2);
        }
      }
    } else {
      scrollToIndex(index, behavior);
    }
  };
  var getRows = function getRows2() {
    return loadingState ? props.loaderDisabled ? loaderArrState : [] : loadedItems();
  };
  var getColumns = function getColumns2() {
    if (props.columns && both || horizontal) {
      return loadingState && props.loaderDisabled ? both ? loaderArrState[0] : loaderArrState : props.columns.slice(both ? firstState.cols : firstState, both ? lastState.cols : lastState);
    }
    return props.columns;
  };
  var getRenderedRange = function getRenderedRange2() {
    var calculateFirstInViewport = function calculateFirstInViewport2(_pos, _size) {
      return Math.floor(_pos / (_size || _pos));
    };
    var firstInViewport = firstState;
    var lastInViewport = 0;
    if (elementRef.current) {
      var _elementRef$current = elementRef.current, scrollTop = _elementRef$current.scrollTop, scrollLeft = _elementRef$current.scrollLeft;
      if (both) {
        firstInViewport = {
          rows: calculateFirstInViewport(scrollTop, props.itemSize[0]),
          cols: calculateFirstInViewport(scrollLeft, props.itemSize[1])
        };
        lastInViewport = {
          rows: firstInViewport.rows + numItemsInViewportState.rows,
          cols: firstInViewport.cols + numItemsInViewportState.cols
        };
      } else {
        var scrollPos = horizontal ? scrollLeft : scrollTop;
        firstInViewport = calculateFirstInViewport(scrollPos, props.itemSize);
        lastInViewport = firstInViewport + numItemsInViewportState;
      }
    }
    return {
      first: firstState,
      last: lastState,
      viewport: {
        first: firstInViewport,
        last: lastInViewport
      }
    };
  };
  var calculateNumItems = function calculateNumItems2() {
    var contentPos = getContentPosition();
    var contentWidth = elementRef.current ? elementRef.current.offsetWidth - contentPos.left : 0;
    var contentHeight = elementRef.current ? elementRef.current.offsetHeight - contentPos.top : 0;
    var calculateNumItemsInViewport = function calculateNumItemsInViewport2(_contentSize, _itemSize) {
      return Math.ceil(_contentSize / (_itemSize || _contentSize));
    };
    var calculateNumToleratedItems = function calculateNumToleratedItems2(_numItems) {
      return Math.ceil(_numItems / 2);
    };
    var numItemsInViewport = both ? {
      rows: calculateNumItemsInViewport(contentHeight, props.itemSize[0]),
      cols: calculateNumItemsInViewport(contentWidth, props.itemSize[1])
    } : calculateNumItemsInViewport(horizontal ? contentWidth : contentHeight, props.itemSize);
    var numToleratedItems = numToleratedItemsState || (both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
    return {
      numItemsInViewport,
      numToleratedItems
    };
  };
  var calculateOptions = function calculateOptions2() {
    var _calculateNumItems2 = calculateNumItems(), numItemsInViewport = _calculateNumItems2.numItemsInViewport, numToleratedItems = _calculateNumItems2.numToleratedItems;
    var calculateLast = function calculateLast2(_first, _num, _numT) {
      var _isCols = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
      return getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
    };
    var last = both ? {
      rows: calculateLast(firstState.rows, numItemsInViewport.rows, numToleratedItems[0]),
      cols: calculateLast(firstState.cols, numItemsInViewport.cols, numToleratedItems[1], true)
    } : calculateLast(firstState, numItemsInViewport, numToleratedItems);
    setNumItemsInViewportState(numItemsInViewport);
    setNumToleratedItemsState(numToleratedItems);
    setLastState(last);
    if (props.showLoader) {
      setLoaderArrState(both ? Array.from({
        length: numItemsInViewport.rows
      }).map(function() {
        return Array.from({
          length: numItemsInViewport.cols
        });
      }) : Array.from({
        length: numItemsInViewport
      }));
    }
    if (props.lazy) {
      Promise.resolve().then(function() {
        lazyLoadState.current = {
          first: props.step ? both ? {
            rows: 0,
            cols: firstState.cols
          } : 0 : firstState,
          last: Math.min(props.step ? props.step : last, (props.items || []).length)
        };
        props.onLazyLoad && props.onLazyLoad(lazyLoadState.current);
      });
    }
  };
  var calculateAutoSize = function calculateAutoSize2(loading) {
    if (props.autoSize && !loading) {
      Promise.resolve().then(function() {
        if (_contentRef.current) {
          _contentRef.current.style.minHeight = _contentRef.current.style.minWidth = "auto";
          _contentRef.current.style.position = "relative";
          elementRef.current.style.contain = "none";
          var _ref = [DomHandler.getWidth(elementRef.current), DomHandler.getHeight(elementRef.current)], width = _ref[0], height = _ref[1];
          (both || horizontal) && (elementRef.current.style.width = (width < defaultWidth.current ? width : props.scrollWidth || defaultWidth.current) + "px");
          (both || vertical) && (elementRef.current.style.height = (height < defaultHeight.current ? height : props.scrollHeight || defaultHeight.current) + "px");
          _contentRef.current.style.minHeight = _contentRef.current.style.minWidth = "";
          _contentRef.current.style.position = "";
          elementRef.current.style.contain = "";
        }
      });
    }
  };
  var getLast = function getLast2() {
    var _ref2;
    var last = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    var isCols = arguments.length > 1 ? arguments[1] : void 0;
    return props.items ? Math.min(isCols ? ((_ref2 = props.columns || props.items[0]) === null || _ref2 === void 0 ? void 0 : _ref2.length) || 0 : (props.items || []).length, last) : 0;
  };
  var getContentPosition = function getContentPosition2() {
    if (_contentRef.current) {
      var style = getComputedStyle(_contentRef.current);
      var left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
      var right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
      var top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
      var bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);
      return {
        left,
        right,
        top,
        bottom,
        x: left + right,
        y: top + bottom
      };
    }
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
  };
  var setSize = function setSize2() {
    if (elementRef.current) {
      var parentElement = elementRef.current.parentElement;
      var width = props.scrollWidth || "".concat(elementRef.current.offsetWidth || parentElement.offsetWidth, "px");
      var height = props.scrollHeight || "".concat(elementRef.current.offsetHeight || parentElement.offsetHeight, "px");
      var setProp = function setProp2(_name, _value) {
        return elementRef.current.style[_name] = _value;
      };
      if (both || horizontal) {
        setProp("height", height);
        setProp("width", width);
      } else {
        setProp("height", height);
      }
    }
  };
  var setSpacerSize = function setSpacerSize2() {
    var items = props.items;
    if (items) {
      var contentPos = getContentPosition();
      var setProp = function setProp2(_name, _value, _size) {
        var _cpos = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        return spacerStyle.current = _objectSpread(_objectSpread({}, spacerStyle.current), _defineProperty({}, "".concat(_name), (_value || []).length * _size + _cpos + "px"));
      };
      if (both) {
        setProp("height", items, props.itemSize[0], contentPos.y);
        setProp("width", props.columns || items[1], props.itemSize[1], contentPos.x);
      } else {
        horizontal ? setProp("width", props.columns || items, props.itemSize, contentPos.x) : setProp("height", items, props.itemSize, contentPos.y);
      }
    }
  };
  var setContentPosition = function setContentPosition2(pos) {
    if (_contentRef.current && !props.appendOnly) {
      var first = pos ? pos.first : firstState;
      var calculateTranslateVal = function calculateTranslateVal2(_first, _size) {
        return _first * _size;
      };
      var setTransform = function setTransform2() {
        var _x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var _y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        _stickyRef.current && (_stickyRef.current.style.top = "-".concat(_y, "px"));
        contentStyle.current = _objectSpread(_objectSpread({}, contentStyle.current), {
          transform: "translate3d(".concat(_x, "px, ").concat(_y, "px, 0)")
        });
      };
      if (both) {
        setTransform(calculateTranslateVal(first.cols, props.itemSize[1]), calculateTranslateVal(first.rows, props.itemSize[0]));
      } else {
        var translateVal = calculateTranslateVal(first, props.itemSize);
        horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
      }
    }
  };
  var onScrollPositionChange = function onScrollPositionChange2(event) {
    var target = event.target;
    var contentPos = getContentPosition();
    var calculateScrollPos = function calculateScrollPos2(_pos, _cpos) {
      return _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
    };
    var calculateCurrentIndex = function calculateCurrentIndex2(_pos, _size) {
      return Math.floor(_pos / (_size || _pos));
    };
    var calculateTriggerIndex = function calculateTriggerIndex2(_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
      return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
    };
    var calculateFirst = function calculateFirst2(_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
      if (_currentIndex <= _numT) {
        return 0;
      }
      return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
    };
    var calculateLast = function calculateLast2(_currentIndex, _first, _last, _num, _numT, _isCols) {
      var lastValue = _first + _num + 2 * _numT;
      if (_currentIndex >= _numT) {
        lastValue = lastValue + (_numT + 1);
      }
      return getLast(lastValue, _isCols);
    };
    var scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
    var scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
    var newFirst = both ? {
      rows: 0,
      cols: 0
    } : 0;
    var newLast = lastState;
    var isRangeChanged = false;
    var newScrollPos = lastScrollPos.current;
    if (both) {
      var isScrollDown = lastScrollPos.current.top <= scrollTop;
      var isScrollRight = lastScrollPos.current.left <= scrollLeft;
      if (!props.appendOnly || props.appendOnly && (isScrollDown || isScrollRight)) {
        var currentIndex = {
          rows: calculateCurrentIndex(scrollTop, props.itemSize[0]),
          cols: calculateCurrentIndex(scrollLeft, props.itemSize[1])
        };
        var triggerIndex = {
          rows: calculateTriggerIndex(currentIndex.rows, firstState.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0], isScrollDown),
          cols: calculateTriggerIndex(currentIndex.cols, firstState.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], isScrollRight)
        };
        newFirst = {
          rows: calculateFirst(currentIndex.rows, triggerIndex.rows, firstState.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0], isScrollDown),
          cols: calculateFirst(currentIndex.cols, triggerIndex.cols, firstState.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], isScrollRight)
        };
        newLast = {
          rows: calculateLast(currentIndex.rows, newFirst.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0]),
          cols: calculateLast(currentIndex.cols, newFirst.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], true)
        };
        isRangeChanged = newFirst.rows !== firstState.rows || newLast.rows !== lastState.rows || newFirst.cols !== firstState.cols || newLast.cols !== lastState.cols || isItemRangeChanged.current;
        newScrollPos = {
          top: scrollTop,
          left: scrollLeft
        };
      }
    } else {
      var scrollPos = horizontal ? scrollLeft : scrollTop;
      var isScrollDownOrRight = lastScrollPos.current <= scrollPos;
      if (!props.appendOnly || props.appendOnly && isScrollDownOrRight) {
        var _currentIndex2 = calculateCurrentIndex(scrollPos, props.itemSize);
        var _triggerIndex2 = calculateTriggerIndex(_currentIndex2, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);
        newFirst = calculateFirst(_currentIndex2, _triggerIndex2, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);
        newLast = calculateLast(_currentIndex2, newFirst, lastState, numItemsInViewportState, numToleratedItemsState);
        isRangeChanged = newFirst !== firstState || newLast !== lastState || isItemRangeChanged.current;
        newScrollPos = scrollPos;
      }
    }
    return {
      first: newFirst,
      last: newLast,
      isRangeChanged,
      scrollPos: newScrollPos
    };
  };
  var onScrollChange = function onScrollChange2(event) {
    var _onScrollPositionChan = onScrollPositionChange(event), first = _onScrollPositionChan.first, last = _onScrollPositionChan.last, isRangeChanged = _onScrollPositionChan.isRangeChanged, scrollPos = _onScrollPositionChan.scrollPos;
    if (isRangeChanged) {
      var newState = {
        first,
        last
      };
      setContentPosition(newState);
      setFirstState(first);
      setLastState(last);
      lastScrollPos.current = scrollPos;
      props.onScrollIndexChange && props.onScrollIndexChange(newState);
      if (props.lazy && isPageChanged(first)) {
        var newLazyLoadState = {
          first: props.step ? Math.min(getPageByFirst(first) * props.step, (props.items || []).length - props.step) : first,
          last: Math.min(props.step ? (getPageByFirst(first) + 1) * props.step : last, (props.items || []).length)
        };
        var isLazyStateChanged = !lazyLoadState.current || lazyLoadState.current.first !== newLazyLoadState.first || lazyLoadState.current.last !== newLazyLoadState.last;
        isLazyStateChanged && props.onLazyLoad && props.onLazyLoad(newLazyLoadState);
        lazyLoadState.current = newLazyLoadState;
      }
    }
  };
  var _onScroll = function onScroll(event) {
    props.onScroll && props.onScroll(event);
    if (props.delay) {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (isPageChanged(firstState)) {
        if (!loadingState && props.showLoader) {
          var _onScrollPositionChan2 = onScrollPositionChange(event), isRangeChanged = _onScrollPositionChan2.isRangeChanged;
          var changed = isRangeChanged || (props.step ? isPageChanged(firstState) : false);
          changed && setLoadingState(true);
        }
        scrollTimeout.current = setTimeout(function() {
          onScrollChange(event);
          if (loadingState && props.showLoader && (!props.lazy || props.loading === void 0)) {
            setLoadingState(false);
            setPageState(getPageByFirst(firstState));
          }
        }, props.delay);
      }
    } else {
      onScrollChange(event);
    }
  };
  var onResize = function onResize2() {
    if (resizeTimeout.current) {
      clearTimeout(resizeTimeout.current);
    }
    resizeTimeout.current = setTimeout(function() {
      if (elementRef.current) {
        var _ref3 = [DomHandler.getWidth(elementRef.current), DomHandler.getHeight(elementRef.current)], width = _ref3[0], height = _ref3[1];
        var isDiffWidth = width !== defaultWidth.current, isDiffHeight = height !== defaultHeight.current;
        var reinit = both ? isDiffWidth || isDiffHeight : horizontal ? isDiffWidth : vertical ? isDiffHeight : false;
        if (reinit) {
          setNumToleratedItemsState(props.numToleratedItems);
          defaultWidth.current = width;
          defaultHeight.current = height;
          defaultContentWidth.current = DomHandler.getWidth(_contentRef.current);
          defaultContentHeight.current = DomHandler.getHeight(_contentRef.current);
        }
      }
    }, props.resizeDelay);
  };
  var getOptions = function getOptions2(renderedIndex) {
    var count = (props.items || []).length;
    var index = both ? firstState.rows + renderedIndex : firstState + renderedIndex;
    return {
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
      props
    };
  };
  var loaderOptions = function loaderOptions2(index, extOptions) {
    var count = loaderArrState.length || 0;
    return _objectSpread({
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
      props
    }, extOptions);
  };
  var loadedItems = function loadedItems2() {
    var items = props.items;
    if (items && !loadingState) {
      if (both) {
        return items.slice(props.appendOnly ? 0 : firstState.rows, lastState.rows).map(function(item2) {
          return props.columns ? item2 : item2.slice(props.appendOnly ? 0 : firstState.cols, lastState.cols);
        });
      } else if (horizontal && props.columns) {
        return items;
      }
      return items.slice(props.appendOnly ? 0 : firstState, lastState);
    }
    return [];
  };
  var viewInit = function viewInit2() {
    if (elementRef.current && DomHandler.isVisible(elementRef.current)) {
      setContentElement(_contentRef.current);
      init();
      bindWindowResizeListener();
      bindOrientationChangeListener();
      defaultWidth.current = DomHandler.getWidth(elementRef.current);
      defaultHeight.current = DomHandler.getHeight(elementRef.current);
      defaultContentWidth.current = DomHandler.getWidth(_contentRef.current);
      defaultContentHeight.current = DomHandler.getHeight(_contentRef.current);
    }
  };
  var init = function init2() {
    if (!props.disabled) {
      setSize();
      calculateOptions();
      setSpacerSize();
    }
  };
  useMountEffect(function() {
    viewInit();
  });
  useUpdateEffect(function() {
    init();
  }, [props.itemSize, props.scrollHeight, props.scrollWidth]);
  useUpdateEffect(function() {
    if (props.numToleratedItems !== numToleratedItemsState) {
      setNumToleratedItemsState(props.numToleratedItems);
    }
  }, [props.numToleratedItems]);
  useUpdateEffect(function() {
    if (props.numToleratedItems === numToleratedItemsState) {
      init();
    }
  }, [numToleratedItemsState]);
  useUpdateEffect(function() {
    var prevRowsExist = prevProps.items !== void 0 && prevProps.items !== null;
    var currentRowsExist = props.items !== void 0 && props.items !== null;
    var prevRowsLength = prevRowsExist ? prevProps.items.length : 0;
    var currentRowsLength = currentRowsExist ? props.items.length : 0;
    var valuesChanged = prevRowsLength !== currentRowsLength;
    if (both && !valuesChanged) {
      var prevColumnsLength = prevRowsExist && prevProps.items.length > 0 ? prevProps.items[0].length : 0;
      var currentColumnsLength = currentRowsExist && props.items.length > 0 ? props.items[0].length : 0;
      valuesChanged = prevColumnsLength !== currentColumnsLength;
    }
    if (!prevRowsExist || valuesChanged) {
      init();
    }
    var loading = loadingState;
    if (props.lazy && prevProps.loading !== props.loading && props.loading !== loadingState) {
      setLoadingState(props.loading);
      loading = props.loading;
    }
    calculateAutoSize(loading);
  });
  useUpdateEffect(function() {
    lastScrollPos.current = both ? {
      top: 0,
      left: 0
    } : 0;
  }, [props.orientation]);
  React2.useImperativeHandle(ref, function() {
    return {
      props,
      getElementRef,
      scrollTo,
      scrollToIndex,
      scrollInView,
      getRenderedRange
    };
  });
  var createLoaderItem = function createLoaderItem2(index) {
    var extOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var options = loaderOptions(index, extOptions);
    var content2 = ObjectUtils.getJSXElement(props.loadingTemplate, options);
    return React2.createElement(React2.Fragment, {
      key: index
    }, content2);
  };
  var createLoader = function createLoader2() {
    var iconClassName = "p-virtualscroller-loading-icon";
    var loadingIconProps = mergeProps({
      className: iconClassName
    }, ptm("loadingIcon"));
    var icon = props.loadingIcon || React2.createElement(SpinnerIcon, _extends2({}, loadingIconProps, {
      spin: true
    }));
    var loadingIcon = IconUtils.getJSXIcon(icon, _objectSpread({}, loadingIconProps), {
      props
    });
    if (!props.loaderDisabled && props.showLoader && loadingState) {
      var _className = classNames("p-virtualscroller-loader", {
        "p-component-overlay": !props.loadingTemplate
      });
      var _content = loadingIcon;
      if (props.loadingTemplate) {
        _content = loaderArrState.map(function(_, index) {
          return createLoaderItem(index, both && {
            numCols: numItemsInViewportState.cols
          });
        });
      } else if (props.loaderIconTemplate) {
        var defaultContentOptions = {
          iconClassName,
          element: _content,
          props
        };
        _content = ObjectUtils.getJSXElement(props.loaderIconTemplate, defaultContentOptions);
      }
      var loaderProps = mergeProps({
        className: _className
      }, ptm("loader"));
      return React2.createElement("div", loaderProps, _content);
    }
    return null;
  };
  var createSpacer = function createSpacer2() {
    if (props.showSpacer) {
      var spacerProps = mergeProps({
        ref: _spacerRef,
        style: spacerStyle.current,
        className: "p-virtualscroller-spacer"
      }, ptm("spacer"));
      return React2.createElement("div", spacerProps);
    }
    return null;
  };
  var createItem = function createItem2(item2, index) {
    var options = getOptions(index);
    var content2 = ObjectUtils.getJSXElement(props.itemTemplate, item2, options);
    return React2.createElement(React2.Fragment, {
      key: options.index
    }, content2);
  };
  var createItems = function createItems2() {
    var items = loadedItems();
    return items.map(createItem);
  };
  var createContent = function createContent2() {
    var items = createItems();
    var className2 = classNames("p-virtualscroller-content", {
      "p-virtualscroller-loading": loadingState
    });
    var contentProps = mergeProps({
      ref: _contentRef,
      style: contentStyle.current,
      className: className2
    }, ptm("content"));
    var content2 = React2.createElement("div", contentProps, items);
    if (props.contentTemplate) {
      var defaultOptions = {
        style: contentStyle.current,
        className: className2,
        spacerStyle: spacerStyle.current,
        contentRef: function contentRef(el) {
          return _contentRef.current = ObjectUtils.getRefElement(el);
        },
        spacerRef: function spacerRef(el) {
          return _spacerRef.current = ObjectUtils.getRefElement(el);
        },
        stickyRef: function stickyRef(el) {
          return _stickyRef.current = ObjectUtils.getRefElement(el);
        },
        items: loadedItems(),
        getItemOptions: function getItemOptions(index) {
          return getOptions(index);
        },
        children: items,
        element: content2,
        props,
        loading: loadingState,
        getLoaderOptions: function getLoaderOptions(index, ext) {
          return loaderOptions(index, ext);
        },
        loadingTemplate: props.loadingTemplate,
        itemSize: props.itemSize,
        rows: getRows(),
        columns: getColumns(),
        vertical,
        horizontal,
        both
      };
      return ObjectUtils.getJSXElement(props.contentTemplate, defaultOptions);
    }
    return content2;
  };
  if (props.disabled) {
    var _content2 = ObjectUtils.getJSXElement(props.contentTemplate, {
      items: props.items,
      rows: props.items,
      columns: props.columns
    });
    return React2.createElement(React2.Fragment, null, props.children, _content2);
  }
  var className = classNames("p-virtualscroller", {
    "p-virtualscroller-inline": props.inline,
    "p-virtualscroller-both p-both-scroll": both,
    "p-virtualscroller-horizontal p-horizontal-scroll": horizontal
  }, props.className);
  var loader = createLoader();
  var content = createContent();
  var spacer = createSpacer();
  var rootProps = mergeProps({
    ref: elementRef,
    className,
    tabIndex: props.tabIndex,
    style: props.style,
    onScroll: function onScroll(e) {
      return _onScroll(e);
    }
  }, VirtualScrollerBase.getOtherProps(props), ptm("root"));
  return React2.createElement("div", rootProps, content, spacer, loader);
}));
VirtualScroller.displayName = "VirtualScroller";

// node_modules/primereact/dropdown/dropdown.esm.js
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
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
}
function _toPrimitive2(input2, hint) {
  if (_typeof2(input2) !== "object" || input2 === null) return input2;
  var prim = input2[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input2, hint || "default");
    if (_typeof2(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input2);
}
function _toPropertyKey2(arg) {
  var key = _toPrimitive2(arg, "string");
  return _typeof2(key) === "symbol" ? key : String(key);
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
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
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit2(r, l) {
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
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest2();
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var classes = {
  root: function root(_ref) {
    var props = _ref.props, focusedState = _ref.focusedState, overlayVisibleState = _ref.overlayVisibleState, context = _ref.context;
    return classNames("p-dropdown p-component p-inputwrapper", {
      "p-disabled": props.disabled,
      "p-invalid": props.invalid,
      "p-focus": focusedState,
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled",
      "p-dropdown-clearable": props.showClear && !props.disabled,
      "p-inputwrapper-filled": ObjectUtils.isNotEmpty(props.value),
      "p-inputwrapper-focus": focusedState || overlayVisibleState
    });
  },
  input: function input(_ref2) {
    var props = _ref2.props, label = _ref2.label;
    return props.editable ? "p-dropdown-label p-inputtext" : classNames("p-dropdown-label p-inputtext", {
      "p-placeholder": label === null && props.placeholder,
      "p-dropdown-label-empty": label === null && !props.placeholder
    });
  },
  trigger: "p-dropdown-trigger",
  emptyMessage: "p-dropdown-empty-message",
  itemGroup: function itemGroup(_ref3) {
    var optionGroupLabel = _ref3.optionGroupLabel;
    return classNames("p-dropdown-item-group", {
      "p-dropdown-item-empty": !optionGroupLabel || optionGroupLabel.length === 0
    });
  },
  itemGroupLabel: "p-dropdown-item-group-label",
  dropdownIcon: "p-dropdown-trigger-icon p-clickable",
  loadingIcon: "p-dropdown-trigger-icon p-clickable",
  clearIcon: "p-dropdown-clear-icon p-clickable",
  filterIcon: "p-dropdown-filter-icon",
  filterClearIcon: "p-dropdown-filter-clear-icon",
  filterContainer: function filterContainer(_ref4) {
    var clearIcon = _ref4.clearIcon;
    return classNames("p-dropdown-filter-container", {
      "p-dropdown-clearable-filter": !!clearIcon
    });
  },
  filterInput: function filterInput(_ref5) {
    var props = _ref5.props, context = _ref5.context;
    return classNames("p-dropdown-filter p-inputtext p-component", {
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled"
    });
  },
  list: function list(_ref6) {
    var virtualScrollerOptions = _ref6.virtualScrollerOptions;
    return virtualScrollerOptions ? "p-dropdown-items" : "p-dropdown-items";
  },
  panel: function panel(_ref7) {
    var context = _ref7.context;
    return classNames("p-dropdown-panel p-component", {
      "p-input-filled": context && context.inputStyle === "filled" || PrimeReact.inputStyle === "filled",
      "p-ripple-disabled": context && context.ripple === false || PrimeReact.ripple === false
    });
  },
  item: function item(_ref8) {
    var selected = _ref8.selected, disabled = _ref8.disabled, label = _ref8.label, index = _ref8.index, focusedOptionIndex = _ref8.focusedOptionIndex, highlightOnSelect = _ref8.highlightOnSelect;
    return classNames("p-dropdown-item", {
      "p-highlight": selected && highlightOnSelect,
      "p-disabled": disabled,
      "p-focus": index === focusedOptionIndex,
      "p-dropdown-item-empty": !label || label.length === 0
    });
  },
  itemLabel: "p-dropdown-item-label",
  checkIcon: "p-dropdown-check-icon",
  blankIcon: "p-dropdown-blank-icon",
  wrapper: "p-dropdown-items-wrapper",
  header: "p-dropdown-header",
  footer: "p-dropdown-footer",
  transition: "p-connected-overlay"
};
var styles2 = "\n@layer primereact {\n    .p-dropdown {\n        display: inline-flex;\n        cursor: pointer;\n        position: relative;\n        user-select: none;\n    }\n    \n    .p-dropdown-trigger {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n    }\n    \n    .p-dropdown-label {\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        flex: 1 1 auto;\n        width: 1%;\n        text-overflow: ellipsis;\n        cursor: pointer;\n    }\n    \n    .p-dropdown-label-empty {\n        overflow: hidden;\n        visibility: hidden;\n    }\n    \n    input.p-dropdown-label  {\n        cursor: default;\n    }\n    \n    .p-dropdown .p-dropdown-panel {\n        min-width: 100%;\n    }\n    \n    .p-dropdown-panel {\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n    \n    .p-dropdown-items-wrapper {\n        overflow: auto;\n    }\n    \n    .p-dropdown-item {\n        cursor: pointer;\n        font-weight: normal;\n        white-space: nowrap;\n        position: relative;\n        overflow: hidden;\n    }\n    \n    .p-dropdown-items {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n    }\n    \n    .p-dropdown-filter {\n        width: 100%;\n    }\n    \n    .p-dropdown-filter-container {\n        position: relative;\n    }\n    \n    .p-dropdown-clear-icon,\n    .p-dropdown-filter-icon,\n    .p-dropdown-filter-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -.5rem;\n        right: 2rem;\n    }\n    \n    .p-fluid .p-dropdown {\n        display: flex;\n    }\n    \n    .p-fluid .p-dropdown .p-dropdown-label {\n        width: 1%;\n    }\n}\n";
var inlineStyles = {
  wrapper: function wrapper(_ref9) {
    var props = _ref9.props;
    return {
      maxHeight: props.scrollHeight || "auto"
    };
  },
  panel: function panel2(_ref10) {
    var props = _ref10.props;
    return _objectSpread$2({}, props.panelStyle);
  }
};
var DropdownBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Dropdown",
    __parentMetadata: null,
    appendTo: null,
    ariaLabel: null,
    ariaLabelledBy: null,
    autoFocus: false,
    children: void 0,
    className: null,
    clearIcon: null,
    dataKey: null,
    disabled: false,
    dropdownIcon: null,
    collapseIcon: null,
    editable: false,
    emptyFilterMessage: null,
    highlightOnSelect: true,
    checkmark: false,
    emptyMessage: null,
    filter: false,
    filterBy: null,
    filterClearIcon: null,
    filterIcon: null,
    filterInputAutoFocus: false,
    filterLocale: void 0,
    filterMatchMode: "contains",
    filterPlaceholder: null,
    filterTemplate: null,
    focusInputRef: null,
    id: null,
    inputId: null,
    inputRef: null,
    invalid: false,
    variant: null,
    itemTemplate: null,
    loading: false,
    loadingIcon: null,
    maxLength: null,
    name: null,
    onBlur: null,
    onChange: null,
    onContextMenu: null,
    onFilter: null,
    onFocus: null,
    onHide: null,
    onMouseDown: null,
    onShow: null,
    optionDisabled: null,
    optionGroupChildren: "items",
    selectOnFocus: false,
    focusOnHover: true,
    autoOptionFocus: false,
    optionGroupLabel: null,
    optionGroupTemplate: null,
    optionLabel: null,
    optionValue: null,
    options: null,
    panelClassName: null,
    panelFooterTemplate: null,
    panelStyle: null,
    placeholder: null,
    required: false,
    resetFilterOnHide: false,
    scrollHeight: "200px",
    showClear: false,
    showFilterClear: false,
    showOnFocus: false,
    style: null,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    transitionOptions: null,
    value: null,
    valueTemplate: null,
    virtualScrollerOptions: null
  },
  css: {
    classes,
    styles: styles2,
    inlineStyles
  }
});
var BlankIcon = React3.memo(React3.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React3.createElement("svg", _extends3({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React3.createElement("rect", {
    width: "1",
    height: "1",
    fill: "currentColor",
    fillOpacity: "0"
  }));
}));
BlankIcon.displayName = "BlankIcon";
var DropdownItem = React3.memo(function(props) {
  var mergeProps = useMergeProps();
  var ptm = props.ptm, cx = props.cx, selected = props.selected, disabled = props.disabled, option = props.option, label = props.label, index = props.index, focusedOptionIndex = props.focusedOptionIndex, ariaSetSize = props.ariaSetSize, checkmark = props.checkmark, highlightOnSelect = props.highlightOnSelect, onInputKeyDown = props.onInputKeyDown;
  var getPTOptions = function getPTOptions2(key) {
    return ptm(key, {
      context: {
        selected,
        disabled,
        focused: index === focusedOptionIndex
      }
    });
  };
  var _onClick = function onClick(event, i) {
    if (props.onClick) {
      props.onClick({
        originalEvent: event,
        option
      });
    }
  };
  var content = props.template ? ObjectUtils.getJSXElement(props.template, props.option) : props.label;
  var itemProps = mergeProps({
    id: "dropdownItem_".concat(index),
    role: "option",
    key: props.label,
    className: classNames(option.className, cx("item", {
      selected,
      disabled,
      label,
      index,
      focusedOptionIndex,
      highlightOnSelect
    })),
    style: props.style,
    tabIndex: 0,
    onClick: function onClick(e) {
      return _onClick(e);
    },
    onKeyDown: function onKeyDown(e) {
      return onInputKeyDown(e);
    },
    onMouseMove: function onMouseMove(e) {
      return props === null || props === void 0 ? void 0 : props.onMouseMove(e, index);
    },
    "aria-setsize": ariaSetSize,
    "aria-posinset": index + 1,
    "aria-label": label,
    "aria-selected": selected,
    "data-p-highlight": selected,
    "data-p-focused": focusedOptionIndex === index,
    "data-p-disabled": disabled
  }, getPTOptions("item"));
  var itemGroupLabelProps = mergeProps({
    className: cx("itemLabel")
  }, getPTOptions("itemLabel"));
  var iconRenderer = function iconRenderer2() {
    if (selected) {
      var checkIconProps = mergeProps({
        className: cx("checkIcon")
      }, getPTOptions("checkIcon"));
      return React3.createElement(CheckIcon, checkIconProps);
    }
    var blankIconProps = mergeProps({
      className: cx("blankIcon")
    }, getPTOptions("blankIcon"));
    return React3.createElement(BlankIcon, blankIconProps);
  };
  return React3.createElement("li", itemProps, checkmark && iconRenderer(), React3.createElement("span", itemGroupLabelProps, content), React3.createElement(Ripple, null));
});
DropdownItem.displayName = "DropdownItem";
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var DropdownPanel = React3.memo(React3.forwardRef(function(props, ref) {
  var mergeProps = useMergeProps();
  var ptm = props.ptm, cx = props.cx, sx = props.sx;
  var context = React3.useContext(PrimeReactContext);
  var filterInputRef = React3.useRef(null);
  var isEmptyFilter = !(props.visibleOptions && props.visibleOptions.length) && props.hasFilter;
  var ariaSetSize = props.visibleOptions ? props.visibleOptions.length : 0;
  var filterOptions = {
    filter: function filter(e) {
      return onFilterInputChange(e);
    },
    reset: function reset() {
      return props.resetFilter();
    }
  };
  var getPTOptions = function getPTOptions2(key, options) {
    return ptm(key, _objectSpread$1({
      hostName: props.hostName
    }, options));
  };
  var onEnter = function onEnter2() {
    props.onEnter(function() {
      if (props.virtualScrollerRef.current) {
        var selectedIndex = props.getSelectedOptionIndex();
        if (selectedIndex !== -1) {
          setTimeout(function() {
            return props.virtualScrollerRef.current.scrollToIndex(selectedIndex);
          }, 0);
        }
      }
    });
  };
  var onEntered = function onEntered2() {
    props.onEntered(function() {
      if (props.filter && props.filterInputAutoFocus) {
        DomHandler.focus(filterInputRef.current, false);
      }
    });
  };
  var onFilterInputChange = function onFilterInputChange2(event) {
    props.onFilterInputChange && props.onFilterInputChange(event);
  };
  var createFooter = function createFooter2() {
    if (props.panelFooterTemplate) {
      var content = ObjectUtils.getJSXElement(props.panelFooterTemplate, props, props.onOverlayHide);
      var footerProps = mergeProps({
        className: cx("footer")
      }, getPTOptions("footer"));
      return React3.createElement("div", footerProps, content);
    }
    return null;
  };
  var changeFocusedItemOnHover = function changeFocusedItemOnHover2(event, index) {
    if (props.focusOnHover) {
      var _props$changeFocusedO;
      props === null || props === void 0 || (_props$changeFocusedO = props.changeFocusedOptionIndex) === null || _props$changeFocusedO === void 0 || _props$changeFocusedO.call(props, event, index);
    }
  };
  var createEmptyMessage = function createEmptyMessage2(emptyMessage, isFilter) {
    var message = ObjectUtils.getJSXElement(emptyMessage, props) || localeOption(isFilter ? "emptyFilterMessage" : "emptyMessage");
    var emptyMessageProps = mergeProps({
      className: cx("emptyMessage")
    }, getPTOptions("emptyMessage"));
    return React3.createElement("li", emptyMessageProps, message);
  };
  var createItem = function createItem2(option, index) {
    var scrollerOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var style = {
      height: scrollerOptions.props ? scrollerOptions.props.itemSize : void 0
    };
    style = _objectSpread$1(_objectSpread$1({}, style), option.style);
    if (option.group && props.optionGroupLabel) {
      var optionGroupLabel = props.optionGroupLabel;
      var groupContent = props.optionGroupTemplate ? ObjectUtils.getJSXElement(props.optionGroupTemplate, option, index) : props.getOptionGroupLabel(option);
      var key = index + "_" + props.getOptionGroupRenderKey(option);
      var itemGroupProps = mergeProps({
        className: cx("itemGroup", {
          optionGroupLabel
        }),
        style,
        "data-p-highlight": props.selected
      }, getPTOptions("itemGroup"));
      var itemGroupLabelProps = mergeProps({
        className: cx("itemGroupLabel")
      }, getPTOptions("itemGroupLabel"));
      return React3.createElement("li", _extends3({
        key
      }, itemGroupProps), React3.createElement("span", itemGroupLabelProps, groupContent));
    }
    var optionKey = props.getOptionRenderKey(option) + "_" + index;
    var optionLabel = props.getOptionLabel(option);
    var disabled = props.isOptionDisabled(option);
    return React3.createElement(DropdownItem, {
      key: optionKey,
      label: optionLabel,
      index,
      focusedOptionIndex: props.focusedOptionIndex,
      option,
      ariaSetSize,
      onInputKeyDown: props.onInputKeyDown,
      style,
      template: props.itemTemplate,
      selected: props.isSelected(option),
      highlightOnSelect: props.highlightOnSelect,
      disabled,
      onClick: props.onOptionClick,
      onMouseMove: changeFocusedItemOnHover,
      ptm,
      cx,
      checkmark: props.checkmark
    });
  };
  var createItems = function createItems2() {
    if (ObjectUtils.isNotEmpty(props.visibleOptions)) {
      return props.visibleOptions.map(createItem);
    } else if (props.hasFilter) {
      return createEmptyMessage(props.emptyFilterMessage, true);
    }
    return createEmptyMessage(props.emptyMessage);
  };
  var createFilterClearIcon = function createFilterClearIcon2() {
    if (props.showFilterClear && props.filterValue) {
      var ariaLabel = localeOption("clear");
      var clearIconProps = mergeProps({
        className: cx("filterClearIcon"),
        "aria-label": ariaLabel,
        onClick: function onClick() {
          return props.onFilterClearIconClick(function() {
            return DomHandler.focus(filterInputRef.current);
          });
        }
      }, getPTOptions("filterClearIcon"));
      var icon = props.filterClearIcon || React3.createElement(TimesIcon, clearIconProps);
      var filterClearIcon = IconUtils.getJSXIcon(icon, _objectSpread$1({}, clearIconProps), {
        props
      });
      return filterClearIcon;
    }
    return null;
  };
  var createFilter = function createFilter2() {
    if (props.filter) {
      var clearIcon = createFilterClearIcon();
      var filterIconProps = mergeProps({
        className: cx("filterIcon")
      }, getPTOptions("filterIcon"));
      var icon = props.filterIcon || React3.createElement(SearchIcon, filterIconProps);
      var filterIcon = IconUtils.getJSXIcon(icon, _objectSpread$1({}, filterIconProps), {
        props
      });
      var filterContainerProps = mergeProps({
        className: cx("filterContainer", {
          clearIcon
        })
      }, getPTOptions("filterContainer"));
      var filterInputProps = mergeProps({
        ref: filterInputRef,
        type: "text",
        autoComplete: "off",
        className: cx("filterInput", {
          context
        }),
        placeholder: props.filterPlaceholder,
        onKeyDown: props.onFilterInputKeyDown,
        onChange: function onChange(e) {
          return onFilterInputChange(e);
        },
        value: props.filterValue
      }, getPTOptions("filterInput"));
      var content = React3.createElement("div", filterContainerProps, React3.createElement("input", filterInputProps), clearIcon, filterIcon);
      if (props.filterTemplate) {
        var defaultContentOptions = {
          className: classNames("p-dropdown-filter-container", {
            "p-dropdown-clearable-filter": !!clearIcon
          }),
          element: content,
          filterOptions,
          filterInputKeyDown: props.onFilterInputKeyDown,
          filterInputChange: onFilterInputChange,
          filterIconClassName: "p-dropdown-filter-icon",
          clearIcon,
          props
        };
        content = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
      }
      var headerProps = mergeProps({
        className: cx("header")
      }, getPTOptions("header"));
      return React3.createElement("div", headerProps, content);
    }
    return null;
  };
  var createContent = function createContent2() {
    if (props.virtualScrollerOptions) {
      var virtualScrollerProps = _objectSpread$1(_objectSpread$1({}, props.virtualScrollerOptions), {
        style: _objectSpread$1(_objectSpread$1({}, props.virtualScrollerOptions.style), {
          height: props.scrollHeight
        }),
        className: classNames("p-dropdown-items-wrapper", props.virtualScrollerOptions.className),
        items: props.visibleOptions,
        autoSize: true,
        onLazyLoad: function onLazyLoad(event) {
          return props.virtualScrollerOptions.onLazyLoad(_objectSpread$1(_objectSpread$1({}, event), {
            filter: props.filterValue
          }));
        },
        itemTemplate: function itemTemplate(item2, options) {
          return item2 && createItem(item2, options.index, options);
        },
        contentTemplate: function contentTemplate(options) {
          var emptyMessage = props.hasFilter ? props.emptyFilterMessage : props.emptyMessage;
          var content = isEmptyFilter ? createEmptyMessage(emptyMessage) : options.children;
          var listProps2 = mergeProps({
            ref: options.contentRef,
            style: options.style,
            className: classNames(options.className, cx("list", {
              virtualScrollerProps: props.virtualScrollerOptions
            })),
            role: "listbox"
          }, getPTOptions("list"));
          return React3.createElement("ul", listProps2, content);
        }
      });
      return React3.createElement(VirtualScroller, _extends3({
        ref: props.virtualScrollerRef
      }, virtualScrollerProps, {
        pt: ptm("virtualScroller")
      }));
    }
    var items = createItems();
    var wrapperProps = mergeProps({
      className: cx("wrapper"),
      style: sx("wrapper")
    }, getPTOptions("wrapper"));
    var listProps = mergeProps({
      className: cx("list"),
      role: "listbox"
    }, getPTOptions("list"));
    return React3.createElement("div", wrapperProps, React3.createElement("ul", listProps, items));
  };
  var createElement4 = function createElement5() {
    var filter = createFilter();
    var content = createContent();
    var footer = createFooter();
    var panelProps = mergeProps({
      className: classNames(props.panelClassName, cx("panel", {
        context
      })),
      style: sx("panel"),
      onClick: props.onClick
    }, getPTOptions("panel"));
    var transitionProps = mergeProps({
      classNames: cx("transition"),
      "in": props["in"],
      timeout: {
        enter: 120,
        exit: 100
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter,
      onEntered,
      onExit: props.onExit,
      onExited: props.onExited
    }, getPTOptions("transition"));
    return React3.createElement(CSSTransition, _extends3({
      nodeRef: ref
    }, transitionProps), React3.createElement("div", _extends3({
      ref
    }, panelProps), props.firstFocusableElement, filter, content, footer, props.lastFocusableElement));
  };
  var element = createElement4();
  return React3.createElement(Portal, {
    element,
    appendTo: props.appendTo
  });
}));
DropdownPanel.displayName = "DropdownPanel";
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it["return"] != null) it["return"]();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
      _defineProperty2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Dropdown = React3.memo(React3.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React3.useContext(PrimeReactContext);
  var props = DropdownBase.getProps(inProps, context);
  var _React$useState = React3.useState(""), _React$useState2 = _slicedToArray2(_React$useState, 2), filterState = _React$useState2[0], setFilterState = _React$useState2[1];
  var _React$useState3 = React3.useState(false), _React$useState4 = _slicedToArray2(_React$useState3, 2), focusedState = _React$useState4[0], setFocusedState = _React$useState4[1];
  var _React$useState5 = React3.useState(-1), _React$useState6 = _slicedToArray2(_React$useState5, 2), focusedOptionIndex = _React$useState6[0], setFocusedOptionIndex = _React$useState6[1];
  var _React$useState7 = React3.useState(false), _React$useState8 = _slicedToArray2(_React$useState7, 2), overlayVisibleState = _React$useState8[0], setOverlayVisibleState = _React$useState8[1];
  var clickedRef = React3.useRef(false);
  var elementRef = React3.useRef(null);
  var overlayRef = React3.useRef(null);
  var firstHiddenFocusableElementOnOverlay = React3.useRef(null);
  var lastHiddenFocusableElementOnOverlay = React3.useRef(null);
  var inputRef = React3.useRef(props.inputRef);
  var focusInputRef = React3.useRef(props.focusInputRef);
  var virtualScrollerRef = React3.useRef(null);
  var searchTimeout = React3.useRef(null);
  var searchValue = React3.useRef(null);
  var isLazy = props.virtualScrollerOptions && props.virtualScrollerOptions.lazy;
  var hasFilter = ObjectUtils.isNotEmpty(filterState);
  var appendTo = props.appendTo || context && context.appendTo || PrimeReact.appendTo;
  var _DropdownBase$setMeta = DropdownBase.setMetaData(_objectSpread2(_objectSpread2({
    props
  }, props.__parentMetadata), {}, {
    state: {
      filter: filterState,
      focused: focusedState,
      overlayVisible: overlayVisibleState
    }
  })), ptm = _DropdownBase$setMeta.ptm, cx = _DropdownBase$setMeta.cx, sx = _DropdownBase$setMeta.sx, isUnstyled = _DropdownBase$setMeta.isUnstyled;
  useHandleStyle(DropdownBase.css.styles, isUnstyled, {
    name: "dropdown"
  });
  var _useOverlayListener = useOverlayListener({
    target: elementRef,
    overlay: overlayRef,
    listener: function listener(event, _ref) {
      var type = _ref.type, valid = _ref.valid;
      if (valid) {
        type === "outside" ? !isClearClicked(event) && hide() : hide();
      }
    },
    when: overlayVisibleState
  }), _useOverlayListener2 = _slicedToArray2(_useOverlayListener, 2), bindOverlayListener = _useOverlayListener2[0], unbindOverlayListener = _useOverlayListener2[1];
  var flatOptions = function flatOptions2(options) {
    return (options || []).reduce(function(result, option, index) {
      result.push(_objectSpread2(_objectSpread2({}, option), {}, {
        group: true,
        index
      }));
      var optionGroupChildren = getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach(function(o) {
        return result.push(o);
      });
      return result;
    }, []);
  };
  var getVisibleOptions = function getVisibleOptions2() {
    var options = props.optionGroupLabel ? flatOptions(props.options) : props.options;
    if (hasFilter && !isLazy) {
      var filterValue = filterState.trim().toLocaleLowerCase(props.filterLocale);
      var searchFields = props.filterBy ? props.filterBy.split(",") : [props.optionLabel || "label"];
      if (props.optionGroupLabel) {
        var filteredGroups = [];
        var _iterator = _createForOfIteratorHelper(props.options), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var optgroup = _step.value;
            var filteredSubOptions = FilterService.filter(getOptionGroupChildren(optgroup), searchFields, filterValue, props.filterMatchMode, props.filterLocale);
            if (filteredSubOptions && filteredSubOptions.length) {
              filteredGroups.push(_objectSpread2(_objectSpread2({}, optgroup), _defineProperty2({}, "".concat(props.optionGroupChildren), filteredSubOptions)));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return flatOptions(filteredGroups);
      }
      return FilterService.filter(options, searchFields, filterValue, props.filterMatchMode, props.filterLocale);
    }
    return options;
  };
  var onFirstHiddenFocus = function onFirstHiddenFocus2(event) {
    var focusableEl = event.relatedTarget === focusInputRef.current ? DomHandler.getFirstFocusableElement(overlayRef.current, ':not([data-p-hidden-focusable="true"])') : focusInputRef.current;
    DomHandler.focus(focusableEl);
  };
  var onLastHiddenFocus = function onLastHiddenFocus2(event) {
    var focusableEl = event.relatedTarget === focusInputRef.current ? DomHandler.getLastFocusableElement(overlayRef.current, ':not([data-p-hidden-focusable="true"])') : focusInputRef.current;
    DomHandler.focus(focusableEl);
  };
  var isClearClicked = function isClearClicked2(event) {
    return DomHandler.isAttributeEquals(event.target, "data-pc-section", "clearicon") || DomHandler.isAttributeEquals(event.target.parentElement || event.target, "data-pc-section", "filterclearicon");
  };
  var _onClick = function onClick(event) {
    if (props.disabled || props.loading) {
      return;
    }
    event.stopPropagation();
    props.onClick && props.onClick(event);
    if (event.defaultPrevented) {
      return;
    }
    if (isClearClicked(event) || event.target.tagName === "INPUT") {
      return;
    } else if (!overlayRef.current || !(overlayRef.current && overlayRef.current.contains(event.target))) {
      DomHandler.focus(focusInputRef.current);
      overlayVisibleState ? hide() : show();
    }
    clickedRef.current = true;
  };
  var onInputFocus = function onInputFocus2(event) {
    if (props.showOnFocus && !overlayVisibleState) {
      show();
    }
    setFocusedState(true);
    props.onFocus && props.onFocus(event);
  };
  var onInputBlur = function onInputBlur2(event) {
    setFocusedState(false);
    if (props.onBlur) {
      setTimeout(function() {
        var currentValue = inputRef.current ? inputRef.current.value : void 0;
        props.onBlur({
          originalEvent: event.originalEvent,
          value: currentValue,
          stopPropagation: function stopPropagation() {
            event.originalEvent.stopPropagation();
          },
          preventDefault: function preventDefault() {
            event.originalEvent.preventDefault();
          },
          target: {
            name: props.name,
            id: props.id,
            value: currentValue
          }
        });
      }, 200);
    }
  };
  var onOptionSelect = function onOptionSelect2(event, option) {
    var isHide = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    var value = getOptionValue(option);
    selectItem({
      originalEvent: event,
      option: value
    });
    isHide && hide();
  };
  var onPanelClick = function onPanelClick2(event) {
    OverlayService.emit("overlay-click", {
      originalEvent: event,
      target: elementRef.current
    });
  };
  var onInputKeyDown = function onInputKeyDown2(event) {
    if (props.disabled) {
      event.preventDefault();
      return;
    }
    var metaKey = event.metaKey || event.ctrlKey;
    var code = DomHandler.isAndroid() ? event.key : event.code;
    switch (code) {
      case "ArrowDown":
        onArrowDownKey(event);
        break;
      case "ArrowUp":
        onArrowUpKey(event);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        onArrowLeftKey(event, props.editable);
        break;
      case "Home":
        onHomeKey(event);
        break;
      case "End":
        onEndKey(event);
        break;
      case "PageDown":
        onPageDownKey(event);
        break;
      case "PageUp":
        onPageUpKey(event);
        break;
      case "Space":
        onSpaceKey(event, props.editable);
        break;
      case "NumpadEnter":
      case "Enter":
        onEnterKey(event);
        break;
      case "Escape":
        onEscapeKey(event);
        break;
      case "Tab":
        onTabKey(event);
        break;
      case "Backspace":
        onBackspaceKey(event, props.editable);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          !overlayVisibleState && !props.editable && show();
          !props.editable && searchOptions(event, event.key);
        }
        break;
    }
    clickedRef.current = false;
  };
  var onFilterInputKeyDown = function onFilterInputKeyDown2(event) {
    switch (event.code) {
      case "ArrowDown":
        onArrowDownKey(event);
        break;
      case "ArrowUp":
        onArrowUpKey(event);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        onArrowLeftKey(event, true);
        break;
      case "Escape":
      case "Enter":
      case "NumpadEnter":
        onEnterKey(event);
        event.preventDefault();
        break;
    }
  };
  var hasFocusableElements = function hasFocusableElements2() {
    return DomHandler.getFocusableElements(overlayRef.current, ':not([data-p-hidden-focusable="true"])').length > 0;
  };
  var isOptionMatched = function isOptionMatched2(option) {
    var _getOptionLabel;
    return isValidOption(option) && ((_getOptionLabel = getOptionLabel(option)) === null || _getOptionLabel === void 0 ? void 0 : _getOptionLabel.toLocaleLowerCase(props.filterLocale).startsWith(searchValue.current.toLocaleLowerCase(props.filterLocale)));
  };
  var isValidOption = function isValidOption2(option) {
    return ObjectUtils.isNotEmpty(option) && !(isOptionDisabled(option) || isOptionGroup(option));
  };
  var hasSelectedOption = function hasSelectedOption2() {
    return ObjectUtils.isNotEmpty(props.value);
  };
  var isValidSelectedOption = function isValidSelectedOption2(option) {
    return isValidOption(option) && isSelected(option);
  };
  var findSelectedOptionIndex = function findSelectedOptionIndex2() {
    return hasSelectedOption ? visibleOptions.findIndex(function(option) {
      return isValidSelectedOption(option);
    }) : -1;
  };
  var findFirstFocusedOptionIndex = function findFirstFocusedOptionIndex2() {
    var selectedIndex = findSelectedOptionIndex();
    return selectedIndex < 0 ? findFirstOptionIndex() : selectedIndex;
  };
  var searchOptions = function searchOptions2(event, _char) {
    searchValue.current = (searchValue.current || "") + _char;
    var optionIndex = -1;
    var matched = false;
    if (ObjectUtils.isNotEmpty(searchValue.current)) {
      if (focusedOptionIndex !== -1) {
        optionIndex = visibleOptions.slice(focusedOptionIndex).findIndex(function(option) {
          return isOptionMatched(option);
        });
        optionIndex = optionIndex === -1 ? visibleOptions.slice(0, focusedOptionIndex).findIndex(function(option) {
          return isOptionMatched(option);
        }) : optionIndex + focusedOptionIndex;
      } else {
        optionIndex = visibleOptions.findIndex(function(option) {
          return isOptionMatched(option);
        });
      }
      if (optionIndex !== -1) {
        matched = true;
      }
      if (optionIndex === -1 && focusedOptionIndex === -1) {
        optionIndex = findFirstFocusedOptionIndex();
      }
      if (optionIndex !== -1) {
        changeFocusedOptionIndex(event, optionIndex);
      }
    }
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    searchTimeout.current = setTimeout(function() {
      searchValue.current = "";
      searchTimeout.current = null;
    }, 500);
    return matched;
  };
  var findLastFocusedOptionIndex = function findLastFocusedOptionIndex2() {
    var selectedIndex = findSelectedOptionIndex();
    return selectedIndex < 0 ? findLastOptionIndex() : selectedIndex;
  };
  var findFirstOptionIndex = function findFirstOptionIndex2() {
    return visibleOptions.findIndex(function(option) {
      return isValidOption(option);
    });
  };
  var findLastOptionIndex = function findLastOptionIndex2() {
    return ObjectUtils.findLastIndex(visibleOptions, function(option) {
      return isValidOption(option);
    });
  };
  var findNextOptionIndex = function findNextOptionIndex2(index) {
    var matchedOptionIndex = index < visibleOptions.length - 1 ? visibleOptions.slice(index + 1).findIndex(function(option) {
      return isValidOption(option);
    }) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  };
  var findPrevOptionIndex = function findPrevOptionIndex2(index) {
    var matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(visibleOptions.slice(0, index), function(option) {
      return isValidOption(option);
    }) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  };
  var changeFocusedOptionIndex = function changeFocusedOptionIndex2(event, index) {
    if (focusedOptionIndex !== index) {
      setFocusedOptionIndex(index);
      focusOnItem(index);
      if (props.selectOnFocus) {
        onOptionSelect(event, visibleOptions[index], false);
      }
    }
  };
  var focusOnItem = function focusOnItem2(index) {
    var focusedItem = DomHandler.findSingle(overlayRef.current, 'li[id="dropdownItem_'.concat(index, '"]'));
    focusedItem && focusedItem.focus();
  };
  var onArrowDownKey = function onArrowDownKey2(event) {
    if (!overlayVisibleState) {
      show();
      props.editable && changeFocusedOptionIndex(event, findSelectedOptionIndex());
    } else {
      var optionIndex = focusedOptionIndex !== -1 ? findNextOptionIndex(focusedOptionIndex) : clickedRef.current ? findFirstOptionIndex() : findFirstFocusedOptionIndex();
      changeFocusedOptionIndex(event, optionIndex);
    }
    event.preventDefault();
  };
  var onArrowUpKey = function onArrowUpKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (event.altKey && !pressedInInputText) {
      if (focusedOptionIndex !== -1) {
        onOptionSelect(event, visibleOptions[focusedOptionIndex]);
      }
      state.overlayVisible && hide();
      event.preventDefault();
    } else {
      var optionIndex = focusedOptionIndex !== -1 ? findPrevOptionIndex(focusedOptionIndex) : clickedRef.current ? findLastOptionIndex() : findLastFocusedOptionIndex();
      changeFocusedOptionIndex(event, optionIndex);
      !overlayVisibleState && show();
      event.preventDefault();
    }
  };
  var onArrowLeftKey = function onArrowLeftKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    pressedInInputText && setFocusedOptionIndex(-1);
  };
  var onHomeKey = function onHomeKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (pressedInInputText) {
      event.currentTarget.setSelectionRange(0, 0);
      setFocusedOptionIndex(-1);
    } else {
      changeFocusedOptionIndex(event, findFirstOptionIndex());
      !overlayVisibleState && show();
    }
    event.preventDefault();
  };
  var onEndKey = function onEndKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (pressedInInputText) {
      var target = event.currentTarget;
      var len = target.value.length;
      target.setSelectionRange(len, len);
      setFocusedOptionIndex(-1);
    } else {
      changeFocusedOptionIndex(event, findLastOptionIndex());
      !overlayVisibleState && show();
    }
    event.preventDefault();
  };
  var onPageUpKey = function onPageUpKey2(event) {
    event.preventDefault();
  };
  var onPageDownKey = function onPageDownKey2(event) {
    event.preventDefault();
  };
  var onSpaceKey = function onSpaceKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    !pressedInInputText && onEnterKey(event);
  };
  var onEnterKey = function onEnterKey2(event) {
    if (!overlayVisibleState) {
      setFocusedOptionIndex(-1);
      onArrowDownKey(event);
    } else {
      if (focusedOptionIndex !== -1) {
        onOptionSelect(event, visibleOptions[focusedOptionIndex]);
      }
      hide();
    }
    event.preventDefault();
  };
  var onEscapeKey = function onEscapeKey2(event) {
    overlayVisibleState && hide();
    event.preventDefault();
  };
  var onTabKey = function onTabKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!pressedInInputText) {
      if (overlayVisibleState && !hasFocusableElements()) {
        DomHandler.focus(firstHiddenFocusableElementOnOverlay.current);
        event.preventDefault();
      } else {
        if (focusedOptionIndex !== -1) {
          onOptionSelect(event, visibleOptions[focusedOptionIndex]);
        }
        overlayVisibleState && hide();
      }
    }
  };
  var onBackspaceKey = function onBackspaceKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (event && pressedInInputText) {
      !overlayVisibleState && show();
    }
  };
  var onEditableInputChange = function onEditableInputChange2(event) {
    !overlayVisibleState && show();
    var searchIndex = null;
    if (event.target.value && visibleOptions) {
      searchIndex = visibleOptions.findIndex(function(item2) {
        return getOptionLabel(item2).toLocaleLowerCase().startsWith(event.target.value.toLocaleLowerCase());
      });
    }
    setFocusedOptionIndex(searchIndex);
    if (props.onChange) {
      props.onChange({
        originalEvent: event.originalEvent,
        value: event.target.value,
        stopPropagation: function stopPropagation() {
          event.originalEvent.stopPropagation();
        },
        preventDefault: function preventDefault() {
          event.originalEvent.preventDefault();
        },
        target: {
          name: props.name,
          id: props.id,
          value: event.target.value
        }
      });
    }
  };
  var onEditableInputFocus = function onEditableInputFocus2(event) {
    setFocusedState(true);
    hide();
    props.onFocus && props.onFocus(event);
  };
  var onOptionClick = function onOptionClick2(event) {
    var option = event.option;
    if (!option.disabled) {
      selectItem(event);
      DomHandler.focus(focusInputRef.current);
    }
    hide();
  };
  var onFilterInputChange = function onFilterInputChange2(event) {
    var filter = event.target.value;
    setFilterState(filter);
    if (props.onFilter) {
      props.onFilter({
        originalEvent: event,
        filter
      });
    }
  };
  var onFilterClearIconClick = function onFilterClearIconClick2(callback) {
    resetFilter(callback);
  };
  var resetFilter = function resetFilter2(callback) {
    setFilterState("");
    props.onFilter && props.onFilter({
      filter: ""
    });
    callback && callback();
  };
  var clear = function clear2(event) {
    if (props.onChange) {
      props.onChange({
        originalEvent: event,
        value: void 0,
        stopPropagation: function stopPropagation() {
          event === null || event === void 0 || event.stopPropagation();
        },
        preventDefault: function preventDefault() {
          event === null || event === void 0 || event.preventDefault();
        },
        target: {
          name: props.name,
          id: props.id,
          value: void 0
        }
      });
    }
    if (props.filter) {
      resetFilter();
    }
    updateEditableLabel();
  };
  var selectItem = function selectItem2(event) {
    if (selectedOption !== event.option) {
      updateEditableLabel(event.option);
      setFocusedOptionIndex(-1);
      var optionValue = getOptionValue(event.option);
      var selectedOptionIndex = findOptionIndexInList(event.option, visibleOptions);
      if (props.onChange) {
        props.onChange({
          originalEvent: event.originalEvent,
          value: optionValue,
          stopPropagation: function stopPropagation() {
            event.originalEvent.stopPropagation();
          },
          preventDefault: function preventDefault() {
            event.originalEvent.preventDefault();
          },
          target: {
            name: props.name,
            id: props.id,
            value: optionValue
          }
        });
      }
      changeFocusedOptionIndex(event.originalEvent, selectedOptionIndex);
    }
  };
  var getSelectedOptionIndex = function getSelectedOptionIndex2(options) {
    options = options || visibleOptions;
    if (props.value != null && options) {
      if (props.optionGroupLabel) {
        for (var i = 0; i < options.length; i++) {
          var selectedOptionIndex = findOptionIndexInList(props.value, getOptionGroupChildren(options[i]));
          if (selectedOptionIndex !== -1) {
            return {
              group: i,
              option: selectedOptionIndex
            };
          }
        }
      } else {
        return findOptionIndexInList(props.value, options);
      }
    }
    return -1;
  };
  var equalityKey = function equalityKey2() {
    return props.optionValue ? null : props.dataKey;
  };
  var findOptionIndexInList = function findOptionIndexInList2(value, list2) {
    var key = equalityKey();
    return list2.findIndex(function(item2) {
      return ObjectUtils.equals(value, getOptionValue(item2), key);
    });
  };
  var isSelected = function isSelected2(option) {
    return ObjectUtils.equals(props.value, getOptionValue(option), equalityKey());
  };
  var show = function show2() {
    setFocusedOptionIndex(focusedOptionIndex !== -1 ? focusedOptionIndex : props.autoOptionFocus ? findFirstFocusedOptionIndex() : props.editable ? -1 : findSelectedOptionIndex());
    setOverlayVisibleState(true);
  };
  var hide = function hide2() {
    setOverlayVisibleState(false);
    clickedRef.current = false;
  };
  var onFocus = function onFocus2() {
    if (props.editable && !overlayVisibleState && clickedRef.current === false) {
      DomHandler.focus(inputRef.current);
    }
  };
  var onOverlayEnter = function onOverlayEnter2(callback) {
    ZIndexUtils.set("overlay", overlayRef.current, context && context.autoZIndex || PrimeReact.autoZIndex, context && context.zIndex.overlay || PrimeReact.zIndex.overlay);
    DomHandler.addStyles(overlayRef.current, {
      position: "absolute",
      top: "0",
      left: "0"
    });
    alignOverlay();
    callback && callback();
  };
  var onOverlayEntered = function onOverlayEntered2(callback) {
    callback && callback();
    bindOverlayListener();
    props.onShow && props.onShow();
  };
  var onOverlayExit = function onOverlayExit2() {
    unbindOverlayListener();
  };
  var onOverlayExited = function onOverlayExited2() {
    if (props.filter && props.resetFilterOnHide) {
      resetFilter();
    }
    ZIndexUtils.clear(overlayRef.current);
    props.onHide && props.onHide();
  };
  var alignOverlay = function alignOverlay2() {
    DomHandler.alignOverlay(overlayRef.current, inputRef.current.parentElement, props.appendTo || context && context.appendTo || PrimeReact.appendTo);
  };
  var scrollInView = function scrollInView2() {
    var focusedItem = DomHandler.findSingle(overlayRef.current, 'li[data-p-focused="true"]');
    if (focusedItem && focusedItem.scrollIntoView) {
      focusedItem.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    } else {
      var highlightItem = DomHandler.findSingle(overlayRef.current, 'li[data-p-highlight="true"]');
      if (highlightItem && highlightItem.scrollIntoView) {
        highlightItem.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      }
    }
  };
  var updateEditableLabel = function updateEditableLabel2(option) {
    if (inputRef.current) {
      inputRef.current.value = option ? getOptionLabel(option) : props.value || "";
      if (focusInputRef.current) {
        focusInputRef.current.value = inputRef.current.value;
      }
    }
  };
  var getOptionLabel = function getOptionLabel2(option) {
    if (ObjectUtils.isScalar(option)) {
      return "".concat(option);
    }
    var optionLabel = props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : option["label"];
    return "".concat(optionLabel);
  };
  var getOptionValue = function getOptionValue2(option) {
    if (props.useOptionAsValue) {
      return option;
    }
    var optionValue = props.optionValue ? ObjectUtils.resolveFieldData(option, props.optionValue) : option ? option["value"] : ObjectUtils.resolveFieldData(option, "value");
    return props.optionValue || ObjectUtils.isNotEmpty(optionValue) ? optionValue : option;
  };
  var getOptionRenderKey = function getOptionRenderKey2(option) {
    return props.dataKey ? ObjectUtils.resolveFieldData(option, props.dataKey) : getOptionLabel(option);
  };
  var isOptionGroup = function isOptionGroup2(option) {
    return props.optionGroupLabel && option.group;
  };
  var isOptionDisabled = function isOptionDisabled2(option) {
    if (props.optionDisabled) {
      return ObjectUtils.isFunction(props.optionDisabled) ? props.optionDisabled(option) : ObjectUtils.resolveFieldData(option, props.optionDisabled);
    }
    return option && option.disabled !== void 0 ? option.disabled : false;
  };
  var getOptionGroupRenderKey = function getOptionGroupRenderKey2(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
  };
  var getOptionGroupLabel = function getOptionGroupLabel2(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
  };
  var getOptionGroupChildren = function getOptionGroupChildren2(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupChildren);
  };
  var updateInputField = function updateInputField2() {
    if (props.editable && inputRef.current) {
      var label = selectedOption ? getOptionLabel(selectedOption) : null;
      var value = label || props.value || "";
      inputRef.current.value = value;
      if (focusInputRef.current) {
        focusInputRef.current.value = value;
      }
    }
  };
  var getSelectedOption = function getSelectedOption2() {
    var index = getSelectedOptionIndex(props.options);
    return index !== -1 ? props.optionGroupLabel ? getOptionGroupChildren(props.options[index.group])[index.option] : props.options[index] : null;
  };
  React3.useImperativeHandle(ref, function() {
    return {
      props,
      show,
      hide,
      clear,
      focus: function focus() {
        return DomHandler.focus(focusInputRef.current);
      },
      getElement: function getElement() {
        return elementRef.current;
      },
      getOverlay: function getOverlay() {
        return overlayRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      },
      getFocusInput: function getFocusInput() {
        return focusInputRef.current;
      },
      getVirtualScroller: function getVirtualScroller() {
        return virtualScrollerRef.current;
      }
    };
  });
  React3.useEffect(function() {
    ObjectUtils.combinedRefs(inputRef, props.inputRef);
    ObjectUtils.combinedRefs(focusInputRef, props.focusInputRef);
  }, [inputRef, props.inputRef, focusInputRef, props.focusInputRef]);
  useMountEffect(function() {
    if (props.autoFocus) {
      DomHandler.focus(focusInputRef.current, props.autoFocus);
    }
    alignOverlay();
  });
  useUpdateEffect(function() {
    if (overlayVisibleState && (props.value || focusedOptionIndex >= 0)) {
      scrollInView();
    }
  }, [overlayVisibleState, props.value, focusedOptionIndex]);
  useUpdateEffect(function() {
    if (overlayVisibleState && filterState && props.filter) {
      alignOverlay();
    }
  }, [overlayVisibleState, filterState, props.filter]);
  useUpdateEffect(function() {
    virtualScrollerRef.current && virtualScrollerRef.current.scrollInView(0);
  }, [filterState]);
  useUpdateEffect(function() {
    if (filterState && (!props.options || props.options.length === 0)) {
      setFilterState("");
    }
    updateInputField();
    if (inputRef.current) {
      inputRef.current.selectedIndex = 1;
    }
  });
  useUnmountEffect(function() {
    ZIndexUtils.clear(overlayRef.current);
  });
  var createHiddenSelect = function createHiddenSelect2() {
    var option = {
      value: "",
      label: props.placeholder
    };
    if (selectedOption) {
      var optionValue = getOptionValue(selectedOption);
      option = {
        value: _typeof2(optionValue) === "object" ? props.options.findIndex(function(o) {
          return o === optionValue;
        }) : optionValue,
        label: getOptionLabel(selectedOption)
      };
    }
    var hiddenSelectedMessageProps = mergeProps({
      className: "p-hidden-accessible p-dropdown-hidden-select"
    }, ptm("hiddenSelectedMessage"));
    var selectProps = mergeProps({
      ref: inputRef,
      required: props.required,
      defaultValue: option.value,
      name: props.name,
      tabIndex: -1,
      "aria-hidden": "true"
    }, ptm("select"));
    var optionProps = mergeProps({
      value: option.value
    }, ptm("option"));
    return React3.createElement("div", hiddenSelectedMessageProps, React3.createElement("select", selectProps, React3.createElement("option", optionProps, option.label)));
  };
  var createKeyboardHelper = function createKeyboardHelper2() {
    var value = ObjectUtils.isNotEmpty(selectedOption) ? getOptionLabel(selectedOption) : null;
    if (props.editable) {
      value = value || props.value || "";
    }
    var hiddenSelectedMessageProps = mergeProps({
      className: "p-hidden-accessible"
    }, ptm("hiddenSelectedMessage"));
    var inputProps = mergeProps(_objectSpread2({
      ref: focusInputRef,
      id: props.inputId,
      defaultValue: value,
      type: "text",
      readOnly: true,
      "aria-haspopup": "listbox",
      onFocus: onInputFocus,
      onBlur: onInputBlur,
      onKeyDown: onInputKeyDown,
      disabled: props.disabled,
      tabIndex: !props.disabled ? props.tabIndex || 0 : -1
    }, ariaProps), ptm("input"));
    return React3.createElement("div", hiddenSelectedMessageProps, React3.createElement("input", inputProps));
  };
  var createLabel = function createLabel2() {
    var label = ObjectUtils.isNotEmpty(selectedOption) ? getOptionLabel(selectedOption) : null;
    if (props.editable) {
      var value = label || props.value || "";
      var _inputProps = mergeProps(_objectSpread2({
        ref: inputRef,
        type: "text",
        defaultValue: value,
        className: cx("input", {
          label
        }),
        disabled: props.disabled,
        placeholder: props.placeholder,
        maxLength: props.maxLength,
        onInput: onEditableInputChange,
        onFocus: onEditableInputFocus,
        onKeyDown: onInputKeyDown,
        onBlur: onInputBlur,
        tabIndex: !props.disabled ? props.tabIndex || 0 : -1,
        "aria-haspopup": "listbox"
      }, ariaProps), ptm("input"));
      return React3.createElement("input", _inputProps);
    }
    var content = props.valueTemplate ? ObjectUtils.getJSXElement(props.valueTemplate, selectedOption, props) : label || props.placeholder || props.emptyMessage || React3.createElement(React3.Fragment, null, " ");
    var inputProps = mergeProps({
      ref: inputRef,
      className: cx("input", {
        label
      }),
      tabIndex: "-1"
    }, ptm("input"));
    return React3.createElement("span", inputProps, content);
  };
  var onClearIconKeyDown = function onClearIconKeyDown2(event) {
    if (event.key === "Enter" || event.code === "Space") {
      clear(event);
      event.preventDefault();
    }
  };
  var createClearIcon = function createClearIcon2() {
    if (props.value != null && props.showClear && !props.disabled && !ObjectUtils.isEmpty(props.options)) {
      var clearIconProps = mergeProps({
        className: cx("clearIcon"),
        onPointerUp: clear,
        tabIndex: props.tabIndex || "0",
        onKeyDown: onClearIconKeyDown,
        "aria-label": localeOption("clear")
      }, ptm("clearIcon"));
      var icon = props.clearIcon || React3.createElement(TimesIcon, clearIconProps);
      return IconUtils.getJSXIcon(icon, _objectSpread2({}, clearIconProps), {
        props
      });
    }
    return null;
  };
  var createLoadingIcon = function createLoadingIcon2() {
    var loadingIconProps = mergeProps({
      className: cx("loadingIcon"),
      "data-pr-overlay-visible": overlayVisibleState
    }, ptm("loadingIcon"));
    var icon = props.loadingIcon || React3.createElement(SpinnerIcon, {
      spin: true
    });
    var loadingIcon = IconUtils.getJSXIcon(icon, _objectSpread2({}, loadingIconProps), {
      props
    });
    var ariaLabel = props.placeholder || props.ariaLabel;
    var loadingButtonProps = mergeProps({
      className: cx("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": overlayVisibleState,
      "aria-label": ariaLabel
    }, ptm("trigger"));
    return React3.createElement("div", loadingButtonProps, loadingIcon);
  };
  var createDropdownIcon = function createDropdownIcon2() {
    var dropdownIconProps = mergeProps({
      className: cx("dropdownIcon"),
      "data-pr-overlay-visible": overlayVisibleState
    }, ptm("dropdownIcon"));
    var icon = !overlayVisibleState ? props.dropdownIcon || React3.createElement(ChevronDownIcon, dropdownIconProps) : props.collapseIcon || React3.createElement(ChevronUpIcon, dropdownIconProps);
    var dropdownIcon2 = IconUtils.getJSXIcon(icon, _objectSpread2({}, dropdownIconProps), {
      props
    });
    var ariaLabel = props.placeholder || props.ariaLabel;
    var triggerProps = mergeProps({
      className: cx("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": overlayVisibleState,
      "aria-label": ariaLabel
    }, ptm("trigger"));
    return React3.createElement("div", triggerProps, dropdownIcon2);
  };
  var visibleOptions = getVisibleOptions();
  var selectedOption = getSelectedOption();
  var hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
  var otherProps = DropdownBase.getOtherProps(props);
  var ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
  var hiddenSelect = createHiddenSelect();
  var keyboardHelper = createKeyboardHelper();
  var labelElement = createLabel();
  var dropdownIcon = props.loading ? createLoadingIcon() : createDropdownIcon();
  var clearIcon = createClearIcon();
  var rootProps = mergeProps({
    id: props.id,
    ref: elementRef,
    className: classNames(props.className, cx("root", {
      context,
      focusedState,
      overlayVisibleState
    })),
    style: props.style,
    onClick: function onClick(e) {
      return _onClick(e);
    },
    onMouseDown: props.onMouseDown,
    onContextMenu: props.onContextMenu,
    onFocus,
    "data-p-disabled": props.disabled,
    "data-p-focus": focusedState,
    "aria-activedescendant": focusedState ? "dropdownItem_".concat(focusedOptionIndex) : void 0
  }, otherProps, ptm("root"));
  var firstHiddenFocusableElementProps = mergeProps({
    ref: firstHiddenFocusableElementOnOverlay,
    role: "presentation",
    "aria-hidden": "true",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: onFirstHiddenFocus,
    "data-p-hidden-accessible": true,
    "data-p-hidden-focusable": true
  }, ptm("hiddenFirstFocusableEl"));
  var lastHiddenFocusableElementProps = mergeProps({
    ref: lastHiddenFocusableElementOnOverlay,
    role: "presentation",
    "aria-hidden": "true",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: onLastHiddenFocus,
    "data-p-hidden-accessible": true,
    "data-p-hidden-focusable": true
  }, ptm("hiddenLastFocusableEl"));
  return React3.createElement(React3.Fragment, null, React3.createElement("div", rootProps, keyboardHelper, hiddenSelect, labelElement, clearIcon, dropdownIcon, React3.createElement(DropdownPanel, _extends3({
    hostName: "Dropdown",
    ref: overlayRef,
    visibleOptions,
    virtualScrollerRef
  }, props, {
    appendTo,
    cx,
    filterValue: filterState,
    focusedOptionIndex,
    getOptionGroupChildren,
    getOptionGroupLabel,
    getOptionGroupRenderKey,
    getOptionLabel,
    getOptionRenderKey,
    getSelectedOptionIndex,
    hasFilter,
    "in": overlayVisibleState,
    isOptionDisabled,
    isSelected,
    onClick: onPanelClick,
    onEnter: onOverlayEnter,
    onEntered: onOverlayEntered,
    onExit: onOverlayExit,
    onExited: onOverlayExited,
    onFilterClearIconClick,
    onFilterInputChange,
    onFilterInputKeyDown,
    onOptionClick,
    onInputKeyDown,
    ptm,
    resetFilter,
    changeFocusedOptionIndex,
    firstFocusableElement: React3.createElement("span", firstHiddenFocusableElementProps),
    lastFocusableElement: React3.createElement("span", lastHiddenFocusableElementProps),
    sx
  }))), hasTooltip && React3.createElement(Tooltip, _extends3({
    target: elementRef,
    content: props.tooltip,
    pt: ptm("tooltip")
  }, props.tooltipOptions)));
}));
Dropdown.displayName = "Dropdown";

export {
  VirtualScroller,
  Dropdown
};
//# sourceMappingURL=chunk-T23W3CS6.js.map
