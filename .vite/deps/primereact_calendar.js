"use client";
import {
  ChevronRightIcon
} from "./chunk-QBEILGYA.js";
import {
  CSSTransition,
  ChevronDownIcon,
  ChevronUpIcon,
  OverlayService
} from "./chunk-HTSKNMO4.js";
import "./chunk-NLU23IVM.js";
import {
  Button
} from "./chunk-2TTPPEEW.js";
import "./chunk-LZJISS6Y.js";
import {
  Ripple
} from "./chunk-3B33TPJN.js";
import {
  IconBase
} from "./chunk-OFNDZ4QC.js";
import {
  InputText
} from "./chunk-CUFKBUXH.js";
import "./chunk-WO6ITRWO.js";
import {
  Portal
} from "./chunk-V2MG7ABT.js";
import {
  ComponentBase,
  ESC_KEY_HANDLING_PRIORITIES,
  useDisplayOrder,
  useGlobalOnEscapeKey,
  useHandleStyle,
  useMergeProps,
  useMountEffect,
  useOverlayListener,
  usePrevious,
  useUnmountEffect,
  useUpdateEffect
} from "./chunk-NVVTRTSK.js";
import {
  PrimeReact,
  PrimeReactContext,
  localeOption,
  localeOptions
} from "./chunk-O2YLKOX3.js";
import "./chunk-HCGKX5ED.js";
import {
  DomHandler,
  IconUtils,
  ObjectUtils,
  UniqueComponentId,
  ZIndexUtils,
  classNames,
  mask
} from "./chunk-IWXOSFRG.js";
import {
  require_react
} from "./chunk-WNPTCGAH.js";
import {
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/primereact/calendar/calendar.esm.js
var React3 = __toESM(require_react());

// node_modules/primereact/icons/calendar/index.esm.js
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
var CalendarIcon = React.memo(React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React.createElement("svg", _extends({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React.createElement("path", {
    d: "M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z",
    fill: "currentColor"
  }));
}));
CalendarIcon.displayName = "CalendarIcon";

// node_modules/primereact/icons/chevronleft/index.esm.js
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
var ChevronLeftIcon = React2.memo(React2.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React2.createElement("svg", _extends2({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React2.createElement("path", {
    d: "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",
    fill: "currentColor"
  }));
}));
ChevronLeftIcon.displayName = "ChevronLeftIcon";

// node_modules/primereact/calendar/calendar.esm.js
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
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
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
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}
var styles = "\n@layer primereact {\n    .p-calendar {\n        position: relative;\n        display: inline-flex;\n        max-width: 100%;\n    }\n\n    .p-calendar .p-inputtext {\n        flex: 1 1 auto;\n        width: 1%;\n    }\n\n    .p-calendar-w-btn-right .p-inputtext {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n\n    .p-calendar-w-btn-right .p-datepicker-trigger {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n    }\n\n    .p-calendar-w-btn-left .p-inputtext {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n    }\n\n    .p-calendar-w-btn-left .p-datepicker-trigger {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n\n    /* Fluid */\n    .p-fluid .p-calendar {\n        display: flex;\n    }\n\n    .p-fluid .p-calendar .p-inputtext {\n        width: 1%;\n    }\n\n    /* Datepicker */\n    .p-calendar .p-datepicker {\n        min-width: 100%;\n    }\n\n    .p-datepicker {\n        width: auto;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    .p-datepicker-inline {\n        display: inline-block;\n        position: static;\n        overflow-x: auto;\n    }\n\n    /* Header */\n    .p-datepicker-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .p-datepicker-header .p-datepicker-title {\n        margin: 0 auto;\n    }\n\n    .p-datepicker-prev,\n    .p-datepicker-next {\n        cursor: pointer;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        overflow: hidden;\n        position: relative;\n    }\n\n    /* Multiple Month DatePicker */\n    .p-datepicker-multiple-month .p-datepicker-group-container {\n        display: flex;\n    }\n\n    .p-datepicker-multiple-month .p-datepicker-group-container .p-datepicker-group {\n        flex: 1 1 auto;\n    }\n\n    /* Multiple Month DatePicker */\n    .p-datepicker-multiple-month .p-datepicker-group-container {\n        display: flex;\n    }\n\n    /* DatePicker Table */\n    .p-datepicker table {\n        width: 100%;\n        border-collapse: collapse;\n    }\n\n    .p-datepicker td > span {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        margin: 0 auto;\n        overflow: hidden;\n        position: relative;\n    }\n\n    /* Month Picker */\n    .p-monthpicker-month {\n        width: 33.3%;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        overflow: hidden;\n        position: relative;\n    }\n\n    /*  Button Bar */\n    .p-datepicker-buttonbar {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n\n    /* Time Picker */\n    .p-timepicker {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .p-timepicker button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        overflow: hidden;\n        position: relative;\n    }\n\n    .p-timepicker > div {\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n    }\n\n    /* Touch UI */\n    .p-datepicker-touch-ui,\n    .p-calendar .p-datepicker-touch-ui {\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        min-width: 80vw;\n        transform: translate(-50%, -50%);\n    }\n\n    /* Year Picker */\n    .p-yearpicker-year {\n        width: 50%;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        overflow: hidden;\n        position: relative;\n    }\n}\n";
var classes = {
  root: function root(_ref) {
    var props = _ref.props, focusedState = _ref.focusedState, isFilled = _ref.isFilled, panelVisible = _ref.panelVisible;
    return classNames("p-calendar p-component p-inputwrapper", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "p-calendar-w-btn p-calendar-w-btn-".concat(props.iconPos), props.showIcon), "p-calendar-disabled", props.disabled), "p-invalid", props.invalid), "p-calendar-timeonly", props.timeOnly), "p-inputwrapper-filled", props.value || isFilled), "p-inputwrapper-focus", focusedState), "p-focus", focusedState || panelVisible));
  },
  input: function input(_ref2) {
    var props = _ref2.props, context = _ref2.context;
    return classNames("p-inputtext p-component", {
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled"
    });
  },
  dropdownButton: "p-datepicker-trigger",
  buttonbar: "p-datepicker-buttonbar",
  todayButton: "p-button-text",
  clearButton: "p-button-text",
  footer: "p-datepicker-footer",
  yearPicker: "p-yearpicker",
  year: function year(_ref3) {
    var isYearSelected = _ref3.isYearSelected, y = _ref3.y, isMonthYearDisabled = _ref3.isMonthYearDisabled;
    return classNames("p-yearpicker-year", {
      "p-highlight": isYearSelected(y),
      "p-disabled": isMonthYearDisabled(-1, y)
    });
  },
  monthPicker: "p-monthpicker",
  month: function month(_ref4) {
    var isMonthSelected = _ref4.isMonthSelected, isMonthYearDisabled = _ref4.isMonthYearDisabled, i = _ref4.i, currentYear = _ref4.currentYear;
    return classNames("p-monthpicker-month", {
      "p-highlight": isMonthSelected(i),
      "p-disabled": isMonthYearDisabled(i, currentYear)
    });
  },
  hourPicker: "p-hour-picker",
  secondPicker: "p-second-picker",
  minutePicker: "p-minute-picker",
  millisecondPicker: "p-millisecond-picker",
  ampmPicker: "p-ampm-picker",
  separatorContainer: "p-separator",
  dayLabel: function dayLabel(_ref5) {
    var className = _ref5.className;
    return className;
  },
  day: function day(_ref6) {
    var date = _ref6.date;
    return classNames({
      "p-datepicker-other-month": date.otherMonth,
      "p-datepicker-today": date.today
    });
  },
  panel: function panel(_ref7) {
    var panelClassName = _ref7.panelClassName;
    return panelClassName;
  },
  previousIcon: "p-datepicker-prev-icon",
  previousButton: "p-datepicker-prev",
  nextIcon: "p-datepicker-next-icon",
  nextButton: "p-datepicker-next",
  incrementButton: "p-link",
  decrementButton: "p-link",
  title: "p-datepicker-title",
  timePicker: "p-timepicker",
  monthTitle: "p-datepicker-month p-link",
  yearTitle: "p-datepicker-year p-link",
  decadeTitle: "p-datepicker-decade",
  header: "p-datepicker-header",
  groupContainer: "p-datepicker-group-container",
  group: "p-datepicker-group",
  select: function select(_ref8) {
    var props = _ref8.props;
    return props.monthNavigator && props.view !== "month" ? "p-datepicker-month" : props.yearNavigator ? "p-datepicker-year" : void 0;
  },
  weekHeader: "p-datepicker-weekheader p-disabled",
  weekNumber: "p-datepicker-weeknumber",
  weekLabelContainer: "p-disabled",
  container: "p-datepicker-calendar-container",
  table: "p-datepicker-calendar",
  transition: "p-connected-overlay"
};
var CalendarBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Calendar",
    appendTo: null,
    ariaLabelledBy: null,
    ariaLabel: null,
    autoZIndex: true,
    autoFocus: false,
    baseZIndex: 0,
    className: null,
    clearButtonClassName: "p-button-secondary",
    dateFormat: null,
    dateTemplate: null,
    decadeTemplate: null,
    decrementIcon: null,
    disabled: false,
    disabledDates: null,
    disabledDays: null,
    enabledDates: null,
    footerTemplate: null,
    formatDateTime: null,
    headerTemplate: null,
    hideOnDateTimeSelect: false,
    hideOnRangeSelection: false,
    hourFormat: "24",
    icon: null,
    iconPos: "right",
    id: null,
    incrementIcon: null,
    inline: false,
    inputClassName: null,
    inputId: null,
    inputMode: "none",
    inputRef: null,
    inputStyle: null,
    variant: null,
    invalid: false,
    keepInvalid: false,
    locale: null,
    mask: null,
    maskSlotChar: "_",
    maxDate: null,
    maxDateCount: null,
    minDate: null,
    monthNavigator: false,
    monthNavigatorTemplate: null,
    name: null,
    nextIcon: null,
    numberOfMonths: 1,
    onBlur: null,
    onChange: null,
    onClearButtonClick: null,
    onFocus: null,
    onHide: null,
    onInput: null,
    onMonthChange: null,
    onSelect: null,
    onShow: null,
    onTodayButtonClick: null,
    onViewDateChange: null,
    onVisibleChange: null,
    panelClassName: null,
    panelStyle: null,
    parseDateTime: null,
    placeholder: null,
    prevIcon: null,
    readOnlyInput: false,
    required: false,
    selectOtherMonths: false,
    selectionMode: "single",
    shortYearCutoff: "+10",
    showButtonBar: false,
    showIcon: false,
    showMillisec: false,
    showMinMaxRange: false,
    showOnFocus: true,
    showOtherMonths: true,
    showSeconds: false,
    showTime: false,
    showWeek: false,
    stepHour: 1,
    stepMillisec: 1,
    stepMinute: 1,
    stepSecond: 1,
    style: null,
    tabIndex: null,
    timeOnly: false,
    todayButtonClassName: "p-button-secondary",
    tooltip: null,
    tooltipOptions: null,
    touchUI: false,
    transitionOptions: null,
    value: null,
    view: "date",
    viewDate: null,
    visible: false,
    yearNavigator: false,
    yearNavigatorTemplate: null,
    yearRange: null,
    children: void 0
  },
  css: {
    classes,
    styles
  }
});
var CalendarPanel = React3.forwardRef(function(props, ref) {
  var cx = props.cx;
  var mergeProps = useMergeProps();
  var createElement4 = function createElement5() {
    var panelProps = mergeProps({
      className: cx("panel", {
        panelClassName: props.className
      }),
      style: props.style,
      role: props.inline ? null : "dialog",
      id: props.id,
      "aria-label": localeOption("chooseDate", props.locale),
      "aria-modal": props.inline ? null : "true",
      onClick: props.onClick,
      onMouseUp: props.onMouseUp
    }, props.ptm("panel", {
      hostName: props.hostName
    }));
    var transitionProps = mergeProps({
      classNames: cx("transition"),
      "in": props["in"],
      timeout: {
        enter: 120,
        exit: 100
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter: props.onEnter,
      onEntered: props.onEntered,
      onExit: props.onExit,
      onExited: props.onExited
    }, props.ptm("transition", {
      hostName: props.hostName
    }));
    return React3.createElement(CSSTransition, _extends3({
      nodeRef: ref
    }, transitionProps), React3.createElement("div", _extends3({
      ref
    }, panelProps), props.children));
  };
  var element = createElement4();
  return props.inline ? element : React3.createElement(Portal, {
    element,
    appendTo: props.appendTo
  });
});
CalendarPanel.displayName = "CalendarPanel";
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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
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
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var Calendar = React3.memo(React3.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React3.useContext(PrimeReactContext);
  var props = CalendarBase.getProps(inProps, context);
  var _React$useState = React3.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), focusedState = _React$useState2[0], setFocusedState = _React$useState2[1];
  var _React$useState3 = React3.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), overlayVisibleState = _React$useState4[0], setOverlayVisibleState = _React$useState4[1];
  var _React$useState5 = React3.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), viewDateState = _React$useState6[0], setViewDateState = _React$useState6[1];
  var _React$useState7 = React3.useState(props.id), _React$useState8 = _slicedToArray(_React$useState7, 2), idState = _React$useState8[0], setIdState = _React$useState8[1];
  var isCloseOnEscape = overlayVisibleState && props.closeOnEscape;
  var overlayDisplayOrder = useDisplayOrder("overlay-panel", isCloseOnEscape);
  var metaData = {
    props,
    state: {
      focused: focusedState,
      overlayVisible: overlayVisibleState,
      viewDate: viewDateState
    }
  };
  var _CalendarBase$setMeta = CalendarBase.setMetaData(metaData), ptm = _CalendarBase$setMeta.ptm, cx = _CalendarBase$setMeta.cx, isUnstyled = _CalendarBase$setMeta.isUnstyled;
  useGlobalOnEscapeKey({
    callback: function callback() {
      hide();
    },
    when: overlayVisibleState && overlayDisplayOrder,
    priority: [ESC_KEY_HANDLING_PRIORITIES.OVERLAY_PANEL, overlayDisplayOrder]
  });
  useHandleStyle(CalendarBase.css.styles, isUnstyled, {
    name: "calendar"
  });
  var elementRef = React3.useRef(null);
  var overlayRef = React3.useRef(null);
  var inputRef = React3.useRef(props.inputRef);
  var navigation = React3.useRef(null);
  var ignoreFocusFunctionality = React3.useRef(false);
  var timePickerTimer = React3.useRef(null);
  var viewStateChanged = React3.useRef(false);
  var touchUIMask = React3.useRef(null);
  var overlayEventListener = React3.useRef(null);
  var touchUIMaskClickListener = React3.useRef(null);
  var isOverlayClicked = React3.useRef(false);
  var previousButton = React3.useRef(false);
  var nextButton = React3.useRef(false);
  var viewChangedWithKeyDown = React3.useRef(false);
  var onChangeRef = React3.useRef(null);
  var isClearClicked = React3.useRef(false);
  var _React$useState9 = React3.useState("date"), _React$useState10 = _slicedToArray(_React$useState9, 2), currentView = _React$useState10[0], setCurrentView = _React$useState10[1];
  var _React$useState11 = React3.useState(null), _React$useState12 = _slicedToArray(_React$useState11, 2), currentMonth = _React$useState12[0], setCurrentMonth = _React$useState12[1];
  var _React$useState13 = React3.useState(null), _React$useState14 = _slicedToArray(_React$useState13, 2), currentYear = _React$useState14[0], setCurrentYear = _React$useState14[1];
  var _React$useState15 = React3.useState([]), _React$useState16 = _slicedToArray(_React$useState15, 2), yearOptions = _React$useState16[0], setYearOptions = _React$useState16[1];
  var previousValue = usePrevious(props.value);
  var visible = props.inline || (props.onVisibleChange ? props.visible : overlayVisibleState);
  var attributeSelector = UniqueComponentId();
  var panelId = idState + "_panel";
  var _useOverlayListener = useOverlayListener({
    target: elementRef,
    overlay: overlayRef,
    listener: function listener(event, _ref) {
      var type = _ref.type, valid = _ref.valid;
      if (valid) {
        type === "outside" ? !isOverlayClicked.current && !isNavIconClicked(event.target) && hide("outside") : hide();
      }
      isOverlayClicked.current = false;
    },
    when: !(props.touchUI || props.inline) && visible,
    type: "mousedown"
  }), _useOverlayListener2 = _slicedToArray(_useOverlayListener, 2), bindOverlayListener = _useOverlayListener2[0], unbindOverlayListener = _useOverlayListener2[1];
  var getDateFormat = function getDateFormat2() {
    return props.dateFormat || localeOption("dateFormat", props.locale);
  };
  var onInputFocus = function onInputFocus2(event) {
    if (ignoreFocusFunctionality.current) {
      setFocusedState(true);
      ignoreFocusFunctionality.current = false;
    } else {
      if (props.showOnFocus && !visible) {
        show();
      }
      setFocusedState(true);
      props.onFocus && props.onFocus(event);
    }
  };
  var onInputBlur = function onInputBlur2(event) {
    updateInputfield(props.value);
    props.onBlur && props.onBlur(event);
    setFocusedState(false);
  };
  var onInputKeyDown = function onInputKeyDown2(event) {
    switch (event.code) {
      case "ArrowDown": {
        if (!overlayVisibleState) {
          show();
        } else {
          focusToFirstCell();
          event.preventDefault();
        }
        break;
      }
      case "Escape": {
        hide();
        props.touchUI && disableModality();
        break;
      }
      case "Tab": {
        if (overlayRef && overlayRef.current) {
          DomHandler.getFocusableElements(overlayRef.current).forEach(function(el) {
            return el.tabIndex = "-1";
          });
          hide();
          props.touchUI && disableModality();
        }
        break;
      }
    }
  };
  var onUserInput = function onUserInput2(event) {
    updateValueOnInput(event, event.target.value);
    props.onInput && props.onInput(event);
  };
  var updateValueOnInput = function updateValueOnInput2(event, rawValue, invalidCallback) {
    try {
      var value = parseValueFromString(props.timeOnly ? rawValue.replace("_", "") : rawValue);
      if (isValidSelection(value)) {
        updateModel(event, value);
        var date = value.length ? value[0] : value;
        updateViewDate(event, date);
        onViewDateSelect({
          event,
          date
        });
      }
    } catch (err) {
      if (invalidCallback) {
        invalidCallback();
      } else {
        var _value = props.keepInvalid ? rawValue : null;
        updateModel(event, _value);
      }
    }
  };
  var onViewDateSelect = function onViewDateSelect2(_ref2) {
    var event = _ref2.event, date = _ref2.date;
    if (date && props.onSelect) {
      var day2 = date.getDate();
      var month2 = date.getMonth();
      var year2 = date.getFullYear();
      onDateSelect(event, {
        day: day2,
        month: month2,
        year: year2,
        selectable: isSelectable(day2, month2, year2)
      }, null, true);
    }
  };
  var reFocusInputField = function reFocusInputField2() {
    if (!props.inline && inputRef.current) {
      ignoreFocusFunctionality.current = true;
      DomHandler.focus(inputRef.current);
    }
  };
  var isValidSelection = function isValidSelection2(value) {
    var isValid = true;
    if (isSingleSelection()) {
      if (!(isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false) && isSelectableTime(value))) {
        isValid = false;
      }
    } else if (value.every(function(v) {
      return isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false) && isSelectableTime(v);
    })) {
      if (isRangeSelection()) {
        isValid = value.length > 1 && value[1] >= value[0];
      }
    }
    return isValid;
  };
  var onButtonClick = function onButtonClick2() {
    visible ? hide() : show();
  };
  var onPrevButtonClick = function onPrevButtonClick2(event) {
    navigation.current = {
      backward: true,
      button: true
    };
    navBackward(event);
  };
  var onNextButtonClick = function onNextButtonClick2(event) {
    navigation.current = {
      backward: false,
      button: true
    };
    navForward(event);
  };
  var onContainerButtonKeydown = function onContainerButtonKeydown2(event) {
    switch (event.code) {
      case "Tab":
        !props.inline && trapFocus(event);
        break;
      case "Escape":
        hide(null, reFocusInputField);
        event.preventDefault();
        break;
    }
  };
  var onPickerKeyDown = function onPickerKeyDown2(event, type, direction) {
    if (event.key === "Enter" || event.key === "Space") {
      onTimePickerElementMouseDown(event, type, direction);
      event.preventDefault();
      return;
    }
    onContainerButtonKeydown(event);
  };
  var onPickerKeyUp = function onPickerKeyUp2(event) {
    if (event.key === "Enter" || event.key === "Space") {
      onTimePickerElementMouseUp();
      event.preventDefault();
      return;
    }
  };
  var trapFocus = function trapFocus2(event) {
    event === null || event === void 0 || event.preventDefault();
    var focusableElements = DomHandler.getFocusableElements(overlayRef.current);
    if (focusableElements && focusableElements.length > 0) {
      if (!document.activeElement) {
        focusableElements[0].focus();
      } else {
        var focusedIndex = focusableElements.indexOf(document.activeElement);
        if (event !== null && event !== void 0 && event.shiftKey) {
          if (focusedIndex === -1 || focusedIndex === 0) {
            focusableElements[focusableElements.length - 1].focus();
          } else {
            focusableElements[focusedIndex - 1].focus();
          }
        } else if (focusedIndex === -1 || focusedIndex === focusableElements.length - 1) {
          focusableElements[0].focus();
        } else {
          focusableElements[focusedIndex + 1].focus();
        }
      }
    }
  };
  var updateFocus = function updateFocus2() {
    if (navigation.current) {
      if (navigation.current.button) {
        initFocusableCell();
        if (navigation.current.backward) {
          previousButton.current.focus();
        } else {
          nextButton.current.focus();
        }
      } else {
        var cell;
        if (navigation.current.backward) {
          var cells = DomHandler.find(overlayRef.current, 'table td span:not([data-p-disabled="true"])');
          cell = cells[cells.length - 1];
        } else {
          cell = DomHandler.findSingle(overlayRef.current, 'table td span:not([data-p-disabled="true"])');
        }
        if (cell) {
          cell.tabIndex = "0";
          cell.focus();
        }
      }
      navigation.current = null;
    } else {
      initFocusableCell();
    }
  };
  var initFocusableCell = function initFocusableCell2() {
    var cell;
    if (currentView === "month") {
      var cells = DomHandler.find(overlayRef.current, '[data-pc-section="monthpicker"] [data-pc-section="month"]');
      var selectedCell = DomHandler.findSingle(overlayRef.current, '[data-pc-section="monthpicker"] [data-pc-section="month"][data-p-highlight="true"]');
      cells.forEach(function(cell2) {
        return cell2.tabIndex = -1;
      });
      cell = selectedCell || cells[0];
    } else {
      cell = DomHandler.findSingle(overlayRef.current, 'span[data-p-highlight="true"]');
      if (!cell) {
        var todayCell = DomHandler.findSingle(overlayRef.current, "td.p-datepicker-today span:not(.p-disabled)");
        cell = todayCell || DomHandler.findSingle(overlayRef.current, 'table td span:not([data-p-disabled="true"])');
      }
    }
    if (cell) {
      cell.tabIndex = "0";
    }
  };
  var focusToFirstCell = function focusToFirstCell2() {
    if (currentView) {
      var cell;
      if (currentView === "date") {
        cell = DomHandler.findSingle(overlayRef.current, 'span[data-p-highlight="true"]');
        if (!cell) {
          var todayCell = DomHandler.findSingle(overlayRef.current, "td.p-datepicker-today span:not(.p-disabled)");
          cell = todayCell || DomHandler.findSingle(overlayRef.current, 'table td span:not([data-p-disabled="true"])');
        }
      } else if (currentView === "month" || currentView === "year") {
        cell = DomHandler.findSingle(overlayRef.current, 'span[data-p-highlight="true"]');
        if (!cell) {
          cell = DomHandler.findSingle(overlayRef.current, '[data-pc-section="'.concat(currentView, 'picker"] [data-pc-section="').concat(currentView, '"]:not([data-p-disabled="true"])'));
        }
      }
      if (cell) {
        cell.tabIndex = "0";
        cell && cell.focus();
      }
    }
  };
  var navBackward = function navBackward2(event) {
    if (props.disabled) {
      event.preventDefault();
      return;
    }
    var newViewDate = cloneDate(getViewDate());
    newViewDate.setDate(1);
    if (currentView === "date") {
      if (newViewDate.getMonth() === 0) {
        var newYear = decrementYear();
        newViewDate.setMonth(11);
        newViewDate.setFullYear(newYear);
        props.onMonthChange && props.onMonthChange({
          month: 11,
          year: newYear
        });
        setCurrentMonth(11);
      } else {
        newViewDate.setMonth(newViewDate.getMonth() - 1);
        props.onMonthChange && props.onMonthChange({
          month: currentMonth - 1,
          year: currentYear
        });
        setCurrentMonth(function(prevState) {
          return prevState - 1;
        });
      }
    } else if (currentView === "month") {
      var _newYear = newViewDate.getFullYear() - 1;
      if (props.yearNavigator) {
        var minYear = parseInt(props.yearRange.split(":")[0], 10);
        if (_newYear < minYear) {
          _newYear = minYear;
        }
      }
      newViewDate.setFullYear(_newYear);
    }
    if (currentView === "month") {
      newViewDate.setFullYear(decrementYear());
    } else if (currentView === "year") {
      newViewDate.setFullYear(decrementDecade());
    }
    updateViewDate(event, newViewDate);
    event.preventDefault();
  };
  var navForward = function navForward2(event) {
    if (props.disabled) {
      event.preventDefault();
      return;
    }
    var newViewDate = cloneDate(getViewDate());
    newViewDate.setDate(1);
    if (currentView === "date") {
      if (newViewDate.getMonth() === 11) {
        var newYear = incrementYear();
        newViewDate.setMonth(0);
        newViewDate.setFullYear(newYear);
        props.onMonthChange && props.onMonthChange({
          month: 0,
          year: newYear
        });
        setCurrentMonth(0);
      } else {
        newViewDate.setMonth(newViewDate.getMonth() + 1);
        props.onMonthChange && props.onMonthChange({
          month: currentMonth + 1,
          year: currentYear
        });
        setCurrentMonth(function(prevState) {
          return prevState + 1;
        });
      }
    } else if (currentView === "month") {
      var _newYear2 = newViewDate.getFullYear() + 1;
      if (props.yearNavigator) {
        var maxYear = parseInt(props.yearRange.split(":")[1], 10);
        if (_newYear2 > maxYear) {
          _newYear2 = maxYear;
        }
      }
      newViewDate.setFullYear(_newYear2);
    }
    if (currentView === "month") {
      newViewDate.setFullYear(incrementYear());
    } else if (currentView === "year") {
      newViewDate.setFullYear(incrementDecade());
    }
    updateViewDate(event, newViewDate);
    event.preventDefault();
  };
  var populateYearOptions = function populateYearOptions2(start, end) {
    var _yearOptions = [];
    for (var i = start; i <= end; i++) {
      yearOptions.push(i);
    }
    setYearOptions(_yearOptions);
  };
  var decrementYear = function decrementYear2() {
    var _currentYear = currentYear - 1;
    setCurrentYear(_currentYear);
    if (props.yearNavigator && _currentYear < yearOptions[0]) {
      var difference = yearOptions[yearOptions.length - 1] - yearOptions[0];
      populateYearOptions(yearOptions[0] - difference, yearOptions[yearOptions.length - 1] - difference);
    }
    return _currentYear;
  };
  var incrementYear = function incrementYear2() {
    var _currentYear = currentYear + 1;
    setCurrentYear(_currentYear);
    if (props.yearNavigator && _currentYear.current > yearOptions[yearOptions.length - 1]) {
      var difference = yearOptions[yearOptions.length - 1] - yearOptions[0];
      populateYearOptions(yearOptions[0] + difference, yearOptions[yearOptions.length - 1] + difference);
    }
    return _currentYear;
  };
  var onMonthDropdownChange = function onMonthDropdownChange2(event, value) {
    var currentViewDate = getViewDate();
    var newViewDate = cloneDate(currentViewDate);
    newViewDate.setDate(1);
    newViewDate.setMonth(parseInt(value, 10));
    updateViewDate(event, newViewDate);
  };
  var onYearDropdownChange = function onYearDropdownChange2(event, value) {
    var currentViewDate = getViewDate();
    var newViewDate = cloneDate(currentViewDate);
    newViewDate.setFullYear(parseInt(value, 10));
    updateViewDate(event, newViewDate);
  };
  var onTodayButtonClick = function onTodayButtonClick2(event) {
    var today = /* @__PURE__ */ new Date();
    var dateMeta = {
      day: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear(),
      today: true,
      selectable: true
    };
    var timeMeta = {
      hours: today.getHours(),
      minutes: today.getMinutes(),
      seconds: today.getSeconds(),
      milliseconds: today.getMilliseconds()
    };
    updateViewDate(event, today);
    onDateSelect(event, dateMeta, timeMeta);
    props.onTodayButtonClick && props.onTodayButtonClick(event);
  };
  var onClearButtonClick = function onClearButtonClick2(event) {
    isClearClicked.current = true;
    updateModel(event, null);
    updateInputfield(null);
    hide();
    props.onClearButtonClick && props.onClearButtonClick(event);
  };
  var onPanelClick = function onPanelClick2(event) {
    if (!props.inline) {
      OverlayService.emit("overlay-click", {
        originalEvent: event,
        target: elementRef.current
      });
    }
  };
  var onPanelMouseUp = function onPanelMouseUp2(event) {
    onPanelClick(event);
  };
  var onTimePickerElementMouseDown = function onTimePickerElementMouseDown2(event, type, direction) {
    if (!props.disabled) {
      _repeat(event, null, type, direction);
      event.preventDefault();
    }
  };
  var onTimePickerElementMouseUp = function onTimePickerElementMouseUp2() {
    if (!props.disabled) {
      clearTimePickerTimer();
    }
  };
  var onTimePickerElementMouseLeave = function onTimePickerElementMouseLeave2() {
    if (!props.disabled) {
      clearTimePickerTimer();
    }
  };
  var _repeat = function repeat(event, interval, type, direction) {
    clearTimePickerTimer();
    timePickerTimer.current = setTimeout(function() {
      _repeat(event, 100, type, direction);
    }, interval || 500);
    switch (type) {
      case 0:
        if (direction === 1) {
          incrementHour(event);
        } else {
          decrementHour(event);
        }
        break;
      case 1:
        if (direction === 1) {
          incrementMinute(event);
        } else {
          decrementMinute(event);
        }
        break;
      case 2:
        if (direction === 1) {
          incrementSecond(event);
        } else {
          decrementSecond(event);
        }
        break;
      case 3:
        if (direction === 1) {
          incrementMilliSecond(event);
        } else {
          decrementMilliSecond(event);
        }
        break;
    }
  };
  var clearTimePickerTimer = function clearTimePickerTimer2() {
    if (timePickerTimer.current) {
      clearTimeout(timePickerTimer.current);
    }
  };
  var roundMinutesToStep = function roundMinutesToStep2(minutes) {
    if (props.stepMinute) {
      return Math.round(minutes / props.stepMinute) * props.stepMinute;
    }
    return minutes;
  };
  var incrementHour = function incrementHour2(event) {
    var currentTime = getCurrentDateTime();
    var currentHour = currentTime.getHours();
    var newHour = currentHour + props.stepHour;
    newHour = newHour >= 24 ? newHour - 24 : newHour;
    if (validateHour(newHour, currentTime)) {
      if (props.maxDate && props.maxDate.toDateString() === currentTime.toDateString() && props.maxDate.getHours() === newHour) {
        if (props.maxDate.getMinutes() < currentTime.getMinutes()) {
          if (props.maxDate.getSeconds() < currentTime.getSeconds()) {
            if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
              updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), props.maxDate.getMilliseconds());
            } else {
              updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), currentTime.getMilliseconds());
            }
          } else {
            updateTime(event, newHour, props.maxDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
          }
        } else if (props.maxDate.getMinutes() === currentTime.getMinutes()) {
          if (props.maxDate.getSeconds() < currentTime.getSeconds()) {
            if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
              updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), props.maxDate.getMilliseconds());
            } else {
              updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), currentTime.getMilliseconds());
            }
          } else {
            updateTime(event, newHour, props.maxDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
          }
        } else {
          updateTime(event, newHour, roundMinutesToStep(currentTime.getMinutes()), currentTime.getSeconds(), currentTime.getMilliseconds());
        }
      } else {
        updateTime(event, newHour, roundMinutesToStep(currentTime.getMinutes()), currentTime.getSeconds(), currentTime.getMilliseconds());
      }
    }
    event.preventDefault();
  };
  var decrementHour = function decrementHour2(event) {
    var currentTime = getCurrentDateTime();
    var currentHour = currentTime.getHours();
    var newHour = currentHour - props.stepHour;
    newHour = newHour < 0 ? newHour + 24 : newHour;
    if (validateHour(newHour, currentTime)) {
      if (props.minDate && props.minDate.toDateString() === currentTime.toDateString() && props.minDate.getHours() === newHour) {
        if (props.minDate.getMinutes() > currentTime.getMinutes()) {
          if (props.minDate.getSeconds() > currentTime.getSeconds()) {
            if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
              updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), props.minDate.getMilliseconds());
            } else {
              updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), currentTime.getMilliseconds());
            }
          } else {
            updateTime(event, newHour, props.minDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
          }
        } else if (props.minDate.getMinutes() === currentTime.getMinutes()) {
          if (props.minDate.getSeconds() > currentTime.getSeconds()) {
            if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
              updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), props.minDate.getMilliseconds());
            } else {
              updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), currentTime.getMilliseconds());
            }
          } else {
            updateTime(event, newHour, props.minDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
          }
        } else {
          updateTime(event, newHour, roundMinutesToStep(currentTime.getMinutes()), currentTime.getSeconds(), currentTime.getMilliseconds());
        }
      } else {
        updateTime(event, newHour, roundMinutesToStep(currentTime.getMinutes()), currentTime.getSeconds(), currentTime.getMilliseconds());
      }
    }
    event.preventDefault();
  };
  var doStepMinute = function doStepMinute2(currentMinute, step) {
    if (props.stepMinute <= 1) {
      return step ? currentMinute + step : currentMinute;
    }
    if (!step) {
      step = props.stepMinute;
      if (currentMinute % step === 0) {
        return currentMinute;
      }
    }
    return Math.floor((currentMinute + step) / step) * step;
  };
  var incrementMinute = function incrementMinute2(event) {
    var currentTime = getCurrentDateTime();
    var currentMinute = currentTime.getMinutes();
    var newMinute = doStepMinute(currentMinute, props.stepMinute);
    newMinute = newMinute > 59 ? newMinute - 60 : newMinute;
    if (validateMinute(newMinute, currentTime)) {
      if (props.maxDate && props.maxDate.toDateString() === currentTime.toDateString() && props.maxDate.getMinutes() === newMinute) {
        if (props.maxDate.getSeconds() < currentTime.getSeconds()) {
          if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
            updateTime(event, currentTime.getHours(), newMinute, props.maxDate.getSeconds(), props.maxDate.getMilliseconds());
          } else {
            updateTime(event, currentTime.getHours(), newMinute, props.maxDate.getSeconds(), currentTime.getMilliseconds());
          }
        } else {
          updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
        }
      } else {
        updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
      }
    }
    event.preventDefault();
  };
  var decrementMinute = function decrementMinute2(event) {
    var currentTime = getCurrentDateTime();
    var currentMinute = currentTime.getMinutes();
    var newMinute = doStepMinute(currentMinute, -props.stepMinute);
    newMinute = newMinute < 0 ? newMinute + 60 : newMinute;
    if (validateMinute(newMinute, currentTime)) {
      if (props.minDate && props.minDate.toDateString() === currentTime.toDateString() && props.minDate.getMinutes() === newMinute) {
        if (props.minDate.getSeconds() > currentTime.getSeconds()) {
          if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
            updateTime(event, currentTime.getHours(), newMinute, props.minDate.getSeconds(), props.minDate.getMilliseconds());
          } else {
            updateTime(event, currentTime.getHours(), newMinute, props.minDate.getSeconds(), currentTime.getMilliseconds());
          }
        } else {
          updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
        }
      } else {
        updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
      }
    }
    event.preventDefault();
  };
  var incrementSecond = function incrementSecond2(event) {
    var currentTime = getCurrentDateTime();
    var currentSecond = currentTime.getSeconds();
    var newSecond = currentSecond + props.stepSecond;
    newSecond = newSecond > 59 ? newSecond - 60 : newSecond;
    if (validateSecond(newSecond, currentTime)) {
      if (props.maxDate && props.maxDate.toDateString() === currentTime.toDateString() && props.maxDate.getSeconds() === newSecond) {
        if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
          updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, props.maxDate.getMilliseconds());
        } else {
          updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
        }
      } else {
        updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
      }
    }
    event.preventDefault();
  };
  var decrementSecond = function decrementSecond2(event) {
    var currentTime = getCurrentDateTime();
    var currentSecond = currentTime.getSeconds();
    var newSecond = currentSecond - props.stepSecond;
    newSecond = newSecond < 0 ? newSecond + 60 : newSecond;
    if (validateSecond(newSecond, currentTime)) {
      if (props.minDate && props.minDate.toDateString() === currentTime.toDateString() && props.minDate.getSeconds() === newSecond) {
        if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
          updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, props.minDate.getMilliseconds());
        } else {
          updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
        }
      } else {
        updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
      }
    }
    event.preventDefault();
  };
  var incrementMilliSecond = function incrementMilliSecond2(event) {
    var currentTime = getCurrentDateTime();
    var currentMillisecond = currentTime.getMilliseconds();
    var newMillisecond = currentMillisecond + props.stepMillisec;
    newMillisecond = newMillisecond > 999 ? newMillisecond - 1e3 : newMillisecond;
    if (validateMillisecond(newMillisecond, currentTime)) {
      updateTime(event, currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), newMillisecond);
    }
    event.preventDefault();
  };
  var decrementMilliSecond = function decrementMilliSecond2(event) {
    var currentTime = getCurrentDateTime();
    var currentMillisecond = currentTime.getMilliseconds();
    var newMillisecond = currentMillisecond - props.stepMillisec;
    newMillisecond = newMillisecond < 0 ? newMillisecond + 999 : newMillisecond;
    if (validateMillisecond(newMillisecond, currentTime)) {
      updateTime(event, currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), newMillisecond);
    }
    event.preventDefault();
  };
  var toggleAmPm = function toggleAmPm2(event) {
    var currentTime = getCurrentDateTime();
    var currentHour = currentTime.getHours();
    var newHour = currentHour >= 12 ? currentHour - 12 : currentHour + 12;
    if (validateHour(convertTo24Hour(newHour, currentHour > 11), currentTime)) {
      updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
    }
    event.preventDefault();
  };
  var getViewDate = function getViewDate2(date) {
    var propValue = props.value;
    var viewDate = date || (props.onViewDateChange ? props.viewDate : viewDateState);
    if (Array.isArray(propValue)) {
      propValue = propValue[0];
    }
    return viewDate && isValidDate(viewDate) ? viewDate : propValue && isValidDate(propValue) ? propValue : /* @__PURE__ */ new Date();
  };
  var getCurrentDateTime = function getCurrentDateTime2() {
    if (isSingleSelection()) {
      return props.value && props.value instanceof Date ? cloneDate(props.value) : getViewDate();
    } else if (isMultipleSelection()) {
      if (props.value && props.value.length) {
        return cloneDate(props.value[props.value.length - 1]);
      }
    } else if (isRangeSelection()) {
      if (props.value && props.value.length) {
        var startDate = cloneDate(props.value[0]);
        var endDate = cloneDate(props.value[1]);
        return endDate || startDate;
      }
    }
    return /* @__PURE__ */ new Date();
  };
  var cloneDate = function cloneDate2(date) {
    return isValidDate(date) ? new Date(date.valueOf()) : date;
  };
  var isValidDate = function isValidDate2(date) {
    return date instanceof Date && !isNaN(date);
  };
  var convertTo24Hour = function convertTo24Hour2(hour, pm) {
    if (props.hourFormat === "12") {
      return hour === 12 ? pm ? 12 : 0 : pm ? hour + 12 : hour;
    }
    return hour;
  };
  var validateHour = function validateHour2(hour, value) {
    var valid = true;
    var valueDateString = value ? value.toDateString() : null;
    if (props.minDate && valueDateString && props.minDate.toDateString() === valueDateString) {
      if (props.minDate.getHours() > hour) {
        valid = false;
      }
    }
    if (props.maxDate && valueDateString && props.maxDate.toDateString() === valueDateString) {
      if (props.maxDate.getHours() < hour) {
        valid = false;
      }
    }
    return valid;
  };
  var validateMinute = function validateMinute2(minute, value) {
    var valid = true;
    var valueDateString = value ? value.toDateString() : null;
    if (props.minDate && valueDateString && props.minDate.toDateString() === valueDateString) {
      if (value.getHours() === props.minDate.getHours()) {
        if (props.minDate.getMinutes() > minute) {
          valid = false;
        }
      }
    }
    if (props.maxDate && valueDateString && props.maxDate.toDateString() === valueDateString) {
      if (value.getHours() === props.maxDate.getHours()) {
        if (props.maxDate.getMinutes() < minute) {
          valid = false;
        }
      }
    }
    return valid;
  };
  var validateSecond = function validateSecond2(second, value) {
    var valid = true;
    var valueDateString = value ? value.toDateString() : null;
    if (props.minDate && valueDateString && props.minDate.toDateString() === valueDateString) {
      if (value.getHours() === props.minDate.getHours() && value.getMinutes() === props.minDate.getMinutes()) {
        if (props.minDate.getSeconds() > second) {
          valid = false;
        }
      }
    }
    if (props.maxDate && valueDateString && props.maxDate.toDateString() === valueDateString) {
      if (value.getHours() === props.maxDate.getHours() && value.getMinutes() === props.maxDate.getMinutes()) {
        if (props.maxDate.getSeconds() < second) {
          valid = false;
        }
      }
    }
    return valid;
  };
  var validateMillisecond = function validateMillisecond2(millisecond, value) {
    var valid = true;
    var valueDateString = value ? value.toDateString() : null;
    if (props.minDate && valueDateString && props.minDate.toDateString() === valueDateString) {
      if (value.getHours() === props.minDate.getHours() && value.getSeconds() === props.minDate.getSeconds() && value.getMinutes() === props.minDate.getMinutes()) {
        if (props.minDate.getMilliseconds() > millisecond) {
          valid = false;
        }
      }
    }
    if (props.maxDate && valueDateString && props.maxDate.toDateString() === valueDateString) {
      if (value.getHours() === props.maxDate.getHours() && value.getSeconds() === props.maxDate.getSeconds() && value.getMinutes() === props.maxDate.getMinutes()) {
        if (props.maxDate.getMilliseconds() < millisecond) {
          valid = false;
        }
      }
    }
    return valid;
  };
  var validateDate = function validateDate2(value) {
    if (props.yearNavigator) {
      var viewYear = value.getFullYear();
      var minRangeYear = props.yearRange ? parseInt(props.yearRange.split(":")[0], 10) : null;
      var maxRangeYear = props.yearRange ? parseInt(props.yearRange.split(":")[1], 10) : null;
      var minYear = props.minDate && minRangeYear != null ? Math.max(props.minDate.getFullYear(), minRangeYear) : props.minDate || minRangeYear;
      var maxYear = props.maxDate && maxRangeYear != null ? Math.min(props.maxDate.getFullYear(), maxRangeYear) : props.maxDate || maxRangeYear;
      if (minYear && minYear > viewYear) {
        viewYear = minYear;
      }
      if (maxYear && maxYear < viewYear) {
        viewYear = maxYear;
      }
      value.setFullYear(viewYear);
    }
    if (renderMonthsNavigator(0)) {
      var viewMonth = value.getMonth();
      var viewMonthWithMinMax = parseInt(isInMinYear(value) && Math.max(props.minDate.getMonth(), viewMonth).toString() || isInMaxYear(value) && Math.min(props.maxDate.getMonth(), viewMonth).toString() || viewMonth);
      value.setMonth(viewMonthWithMinMax);
    }
  };
  var updateTime = function updateTime2(event, hour, minute, second, millisecond) {
    var newDateTime = getCurrentDateTime();
    newDateTime.setHours(hour);
    newDateTime.setMinutes(minute);
    newDateTime.setSeconds(second);
    newDateTime.setMilliseconds(millisecond);
    if (isMultipleSelection()) {
      if (props.value && props.value.length) {
        var value = _toConsumableArray(props.value);
        value[value.length - 1] = newDateTime;
        newDateTime = value;
      } else {
        newDateTime = [newDateTime];
      }
    } else if (isRangeSelection()) {
      if (props.value && props.value.length) {
        var startDate = props.value[0];
        var endDate = props.value[1];
        newDateTime = endDate ? [startDate, newDateTime] : [newDateTime, null];
      } else {
        newDateTime = [newDateTime, null];
      }
    }
    updateModel(event, newDateTime);
    if (props.onSelect) {
      props.onSelect({
        originalEvent: event,
        value: newDateTime
      });
    }
    updateInputfield(newDateTime);
  };
  var updateViewDate = function updateViewDate2(event, value) {
    validateDate(value);
    if (props.onViewDateChange && event) {
      props.onViewDateChange({
        originalEvent: event,
        value
      });
    } else {
      viewStateChanged.current = true;
      setViewDateState(value);
    }
    if (!value) onClearButtonClick(event);
  };
  var setNavigationState = function setNavigationState2(newViewDate) {
    if (!newViewDate || !props.showMinMaxRange || props.view !== "date" || !overlayRef.current) {
      return;
    }
    var navPrev = DomHandler.findSingle(overlayRef.current, '[data-pc-section="previousbutton"]');
    var navNext = DomHandler.findSingle(overlayRef.current, '[data-pc-section="nextbutton"]');
    if (props.disabled) {
      !isUnstyled() && DomHandler.addClass(navPrev, "p-disabled");
      navPrev.setAttribute("data-p-disabled", true);
      !isUnstyled() && DomHandler.addClass(navNext, "p-disabled");
      navNext.setAttribute("data-p-disabled", true);
      return;
    }
    if (props.minDate) {
      var firstDayOfMonth = cloneDate(newViewDate);
      if (firstDayOfMonth.getMonth() === 0) {
        firstDayOfMonth.setMonth(11, 1);
        firstDayOfMonth.setFullYear(firstDayOfMonth.getFullYear() - 1);
      } else {
        firstDayOfMonth.setMonth(firstDayOfMonth.getMonth(), 1);
      }
      firstDayOfMonth.setHours(0);
      firstDayOfMonth.setMinutes(0);
      firstDayOfMonth.setSeconds(0);
      if (props.minDate > firstDayOfMonth) {
        DomHandler.addClass(navPrev, "p-disabled");
      } else {
        DomHandler.removeClass(navPrev, "p-disabled");
      }
    }
    if (props.maxDate) {
      var lastDayOfMonth = cloneDate(newViewDate);
      if (lastDayOfMonth.getMonth() === 11) {
        lastDayOfMonth.setMonth(0, 1);
        lastDayOfMonth.setFullYear(lastDayOfMonth.getFullYear() + 1);
      } else {
        lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1, 1);
      }
      lastDayOfMonth.setHours(0);
      lastDayOfMonth.setMinutes(0);
      lastDayOfMonth.setSeconds(0);
      lastDayOfMonth.setSeconds(-1);
      if (props.maxDate < lastDayOfMonth) {
        DomHandler.addClass(navNext, "p-disabled");
      } else {
        DomHandler.removeClass(navNext, "p-disabled");
      }
    }
  };
  var onDateCellKeydown = function onDateCellKeydown2(event, date, groupIndex) {
    var cellContent = event.currentTarget;
    var cell = cellContent.parentElement;
    var cellIndex = DomHandler.index(cell);
    switch (event.code) {
      case "ArrowDown": {
        cellContent.tabIndex = "-1";
        var nextRow = cell.parentElement.nextElementSibling;
        if (nextRow) {
          var tableRowIndex = DomHandler.index(cell.parentElement);
          var tableRows = Array.from(cell.parentElement.parentElement.children);
          var nextTableRows = tableRows.slice(tableRowIndex + 1);
          var hasNextFocusableDate = nextTableRows.find(function(el) {
            var focusCell2 = el.children[cellIndex].children[0];
            return !DomHandler.getAttribute(focusCell2, "data-p-disabled");
          });
          if (hasNextFocusableDate) {
            var focusCell = hasNextFocusableDate.children[cellIndex].children[0];
            focusCell.tabIndex = "0";
            focusCell.focus();
          } else {
            navigation.current = {
              backward: false
            };
            navForward(event);
          }
        } else {
          navigation.current = {
            backward: false
          };
          navForward(event);
        }
        event.preventDefault();
        break;
      }
      case "ArrowUp": {
        cellContent.tabIndex = "-1";
        if (event.altKey) {
          hide(null, reFocusInputField);
        } else {
          var prevRow = cell.parentElement.previousElementSibling;
          if (prevRow) {
            var _tableRowIndex = DomHandler.index(cell.parentElement);
            var _tableRows = Array.from(cell.parentElement.parentElement.children);
            var prevTableRows = _tableRows.slice(0, _tableRowIndex).reverse();
            var _hasNextFocusableDate = prevTableRows.find(function(el) {
              var focusCell2 = el.children[cellIndex].children[0];
              return !DomHandler.getAttribute(focusCell2, "data-p-disabled");
            });
            if (_hasNextFocusableDate) {
              var _focusCell = _hasNextFocusableDate.children[cellIndex].children[0];
              _focusCell.tabIndex = "0";
              _focusCell.focus();
            } else {
              navigation.current = {
                backward: true
              };
              navBackward(event);
            }
          } else {
            navigation.current = {
              backward: true
            };
            navBackward(event);
          }
        }
        event.preventDefault();
        break;
      }
      case "ArrowLeft": {
        cellContent.tabIndex = "-1";
        var prevCell = cell.previousElementSibling;
        if (prevCell) {
          var cells = Array.from(cell.parentElement.children);
          var prevCells = cells.slice(0, cellIndex).reverse();
          var _hasNextFocusableDate2 = prevCells.find(function(el) {
            var focusCell2 = el.children[0];
            return !DomHandler.getAttribute(focusCell2, "data-p-disabled");
          });
          if (_hasNextFocusableDate2) {
            var _focusCell2 = _hasNextFocusableDate2.children[0];
            _focusCell2.tabIndex = "0";
            _focusCell2.focus();
          } else {
            navigateToMonth(true, groupIndex, event);
          }
        } else {
          navigateToMonth(true, groupIndex, event);
        }
        event.preventDefault();
        break;
      }
      case "ArrowRight": {
        cellContent.tabIndex = "-1";
        var nextCell = cell.nextElementSibling;
        if (nextCell) {
          var _cells = Array.from(cell.parentElement.children);
          var nextCells = _cells.slice(cellIndex + 1);
          var _hasNextFocusableDate3 = nextCells.find(function(el) {
            var focusCell2 = el.children[0];
            return !DomHandler.getAttribute(focusCell2, "data-p-disabled");
          });
          if (_hasNextFocusableDate3) {
            var _focusCell3 = _hasNextFocusableDate3.children[0];
            _focusCell3.tabIndex = "0";
            _focusCell3.focus();
          } else {
            navigateToMonth(false, groupIndex, event);
          }
        } else {
          navigateToMonth(false, groupIndex, event);
        }
        event.preventDefault();
        break;
      }
      case "Enter":
      case "NumpadEnter":
      case "Space": {
        onDateSelect(event, date);
        event.preventDefault();
        break;
      }
      case "Escape": {
        hide(null, reFocusInputField);
        event.preventDefault();
        break;
      }
      case "Tab": {
        if (!props.inline) {
          trapFocus(event);
        }
        break;
      }
      case "Home": {
        cellContent.tabIndex = "-1";
        var currentRow = cell.parentElement;
        var _focusCell4 = currentRow.children[0].children[0];
        if (DomHandler.getAttribute(_focusCell4, "data-p-disabled")) {
          navigateToMonth(groupIndex, true, event);
        } else {
          _focusCell4.tabIndex = "0";
          _focusCell4.focus();
        }
        event.preventDefault();
        break;
      }
      case "End": {
        cellContent.tabIndex = "-1";
        var _currentRow = cell.parentElement;
        var _focusCell5 = _currentRow.children[_currentRow.children.length - 1].children[0];
        if (DomHandler.getAttribute(_focusCell5, "data-p-disabled")) {
          navigateToMonth(groupIndex, false, event);
        } else {
          _focusCell5.tabIndex = "0";
          _focusCell5.focus();
        }
        event.preventDefault();
        break;
      }
      case "PageUp": {
        cellContent.tabIndex = "-1";
        if (event.shiftKey) {
          navigation.current = {
            backward: true
          };
          navBackward(event);
        } else {
          navigateToMonth(groupIndex, true, event);
        }
        event.preventDefault();
        break;
      }
      case "PageDown": {
        cellContent.tabIndex = "-1";
        if (event.shiftKey) {
          navigation.current = {
            backward: false
          };
          navForward(event);
        } else {
          navigateToMonth(groupIndex, false, event);
        }
        event.preventDefault();
        break;
      }
    }
  };
  var navigateToMonth = function navigateToMonth2(prev, groupIndex, event) {
    if (prev) {
      if (props.numberOfMonths === 1 || groupIndex === 0) {
        navigation.current = {
          backward: true
        };
        navBackward(event);
      } else {
        var prevMonthContainer = overlayRef.current.children[groupIndex - 1];
        var cells = DomHandler.find(prevMonthContainer, 'table td span:not([data-p-disabled="true"])');
        var focusCell = cells[cells.length - 1];
        focusCell.tabIndex = "0";
        focusCell.focus();
      }
    } else if (props.numberOfMonths === 1 || groupIndex === props.numberOfMonths - 1) {
      navigation.current = {
        backward: false
      };
      navForward(event);
    } else {
      var nextMonthContainer = overlayRef.current.children[groupIndex + 1];
      var _focusCell6 = DomHandler.findSingle(nextMonthContainer, 'table td span:not([data-p-disabled="true"])');
      _focusCell6.tabIndex = "0";
      _focusCell6.focus();
    }
  };
  var onMonthCellKeydown = function onMonthCellKeydown2(event, index) {
    var cell = event.currentTarget;
    switch (event.code) {
      case "ArrowUp":
      case "ArrowDown": {
        cell.tabIndex = "-1";
        var cells = cell.parentElement.children;
        var cellIndex = DomHandler.index(cell);
        var nextCell = cells[event.which === 40 ? cellIndex + 3 : cellIndex - 3];
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        }
        event.preventDefault();
        break;
      }
      case "ArrowLeft": {
        cell.tabIndex = "-1";
        var prevCell = cell.previousElementSibling;
        if (prevCell) {
          prevCell.tabIndex = "0";
          prevCell.focus();
        } else {
          navigation.current = {
            backward: true
          };
          navBackward(event);
        }
        event.preventDefault();
        break;
      }
      case "ArrowRight": {
        cell.tabIndex = "-1";
        var _nextCell = cell.nextElementSibling;
        if (_nextCell) {
          _nextCell.tabIndex = "0";
          _nextCell.focus();
        } else {
          navigation.current = {
            backward: false
          };
          navForward(event);
        }
        event.preventDefault();
        break;
      }
      case "PageUp": {
        if (event.shiftKey) {
          return;
        }
        navigation.current = {
          backward: true
        };
        navBackward(event);
        break;
      }
      case "PageDown": {
        if (event.shiftKey) {
          return;
        }
        navigation.current = {
          backward: false
        };
        navForward(event);
        break;
      }
      case "Enter":
      case "NumpadEnter":
      case "Space": {
        if (props.view !== "month") {
          viewChangedWithKeyDown.current = true;
        }
        onMonthSelect(event, index);
        event.preventDefault();
        break;
      }
      case "Escape": {
        hide(null, reFocusInputField);
        event.preventDefault();
        break;
      }
      case "Tab": {
        trapFocus(event);
        break;
      }
    }
  };
  var onYearCellKeydown = function onYearCellKeydown2(event, index) {
    var cell = event.currentTarget;
    switch (event.code) {
      case "ArrowUp":
      case "ArrowDown": {
        cell.tabIndex = "-1";
        var cells = cell.parentElement.children;
        var cellIndex = DomHandler.index(cell);
        var nextCell = cells[event.code === "ArrowDown" ? cellIndex + 2 : cellIndex - 2];
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        }
        event.preventDefault();
        break;
      }
      case "ArrowLeft": {
        cell.tabIndex = "-1";
        var prevCell = cell.previousElementSibling;
        if (prevCell) {
          prevCell.tabIndex = "0";
          prevCell.focus();
        } else {
          navigation.current = {
            backward: true
          };
          navBackward(event);
        }
        event.preventDefault();
        break;
      }
      case "ArrowRight": {
        cell.tabIndex = "-1";
        var _nextCell2 = cell.nextElementSibling;
        if (_nextCell2) {
          _nextCell2.tabIndex = "0";
          _nextCell2.focus();
        } else {
          navigation.current = {
            backward: false
          };
          navForward(event);
        }
        event.preventDefault();
        break;
      }
      case "PageUp": {
        if (event.shiftKey) {
          return;
        }
        navigation.current = {
          backward: true
        };
        navBackward(event);
        break;
      }
      case "PageDown": {
        if (event.shiftKey) {
          return;
        }
        navigation.current = {
          backward: false
        };
        navForward(event);
        break;
      }
      case "Enter":
      case "NumpadEnter":
      case "Space": {
        if (props.view !== "year") {
          viewChangedWithKeyDown.current = true;
        }
        onYearSelect(event, index);
        event.preventDefault();
        break;
      }
      case "Escape": {
        hide(null, reFocusInputField);
        event.preventDefault();
        break;
      }
      case "Tab": {
        trapFocus(event);
        break;
      }
    }
  };
  var onDateSelect = function onDateSelect2(event, dateMeta, timeMeta, isUpdateViewDate) {
    if (!event) {
      return;
    }
    if (props.disabled || !dateMeta.selectable) {
      event.preventDefault();
      return;
    }
    DomHandler.find(overlayRef.current, 'table td span:not([data-p-disabled="true"])').forEach(function(cell) {
      return cell.tabIndex = -1;
    });
    event.currentTarget.focus();
    if (isMultipleSelection()) {
      if (isSelected(dateMeta)) {
        var value = props.value.filter(function(date) {
          return !isDateEquals(date, dateMeta);
        });
        updateModel(event, value);
        updateInputfield(value);
      } else if (!props.maxDateCount || !props.value || props.maxDateCount > props.value.length) {
        selectDate(event, dateMeta, timeMeta);
      }
    } else {
      selectDate(event, dateMeta, timeMeta);
    }
    if (!props.inline && isSingleSelection() && (!props.showTime || props.hideOnDateTimeSelect) && !isUpdateViewDate) {
      setTimeout(function() {
        hide("dateselect");
      }, 100);
      if (touchUIMask.current) {
        disableModality();
      }
    }
    event.preventDefault();
  };
  var selectTime = function selectTime2(date, timeMeta) {
    if (props.showTime) {
      var hours;
      var minutes;
      var seconds;
      var milliseconds;
      if (timeMeta) {
        hours = timeMeta.hours;
        minutes = timeMeta.minutes;
        seconds = timeMeta.seconds;
        milliseconds = timeMeta.milliseconds;
      } else {
        var time = getCurrentDateTime();
        var _ref3 = [time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds()];
        hours = _ref3[0];
        minutes = _ref3[1];
        seconds = _ref3[2];
        milliseconds = _ref3[3];
      }
      date.setHours(hours);
      date.setMinutes(doStepMinute(minutes));
      date.setSeconds(seconds);
      date.setMilliseconds(milliseconds);
    }
  };
  var selectDate = function selectDate2(event, dateMeta, timeMeta) {
    var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
    selectTime(date, timeMeta);
    if (props.minDate && props.minDate > date) {
      date = props.minDate;
    }
    if (props.maxDate && props.maxDate < date) {
      date = props.maxDate;
    }
    var selectedValues = date;
    if (isSingleSelection()) {
      updateModel(event, date);
    } else if (isMultipleSelection()) {
      selectedValues = props.value ? [].concat(_toConsumableArray(props.value), [date]) : [date];
      updateModel(event, selectedValues);
    } else if (isRangeSelection()) {
      if (props.value && props.value.length) {
        var startDate = props.value[0];
        var endDate = props.value[1];
        if (!endDate) {
          if (date.getTime() >= startDate.getTime()) {
            endDate = date;
          } else {
            endDate = startDate;
            startDate = date;
          }
        } else {
          startDate = date;
          endDate = null;
        }
        selectedValues = [startDate, endDate];
        updateModel(event, selectedValues);
        if (props.hideOnRangeSelection && endDate !== null) {
          setTimeout(function() {
            setOverlayVisibleState(false);
            isOverlayClicked.current = false;
          }, 150);
        }
      } else {
        selectedValues = [date, null];
        updateModel(event, selectedValues);
      }
    }
    if (props.onSelect) {
      props.onSelect({
        originalEvent: event,
        value: date
      });
    }
    updateInputfield(selectedValues);
  };
  var decrementDecade = function decrementDecade2() {
    var _currentYear = currentYear - 10;
    setCurrentYear(_currentYear);
    return _currentYear;
  };
  var incrementDecade = function incrementDecade2() {
    var _currentYear = currentYear + 10;
    setCurrentYear(_currentYear);
    return _currentYear;
  };
  var switchToMonthView = function switchToMonthView2(event) {
    if (event && event.code && (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space")) {
      viewChangedWithKeyDown.current = true;
    }
    setCurrentView("month");
    event.preventDefault();
  };
  var switchToYearView = function switchToYearView2(event) {
    if (event && event.code && (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space")) {
      viewChangedWithKeyDown.current = true;
    }
    setCurrentView("year");
    event.preventDefault();
  };
  var onMonthSelect = function onMonthSelect2(event, month2) {
    if (props.view === "month") {
      onDateSelect(event, {
        year: currentYear,
        month: month2,
        day: 1,
        selectable: true
      });
      event.preventDefault();
    } else {
      setCurrentMonth(month2);
      createMonthsMeta(month2, currentYear);
      var currentDate = cloneDate(getCurrentDateTime());
      currentDate.setDate(1);
      currentDate.setMonth(month2);
      currentDate.setYear(currentYear);
      setViewDateState(currentDate);
      setCurrentView("date");
      props.onMonthChange && props.onMonthChange({
        month: month2 + 1,
        year: currentYear
      });
      updateViewDate(event, currentDate);
      onViewDateSelect({
        event,
        date: currentDate
      });
    }
  };
  var onYearSelect = function onYearSelect2(event, year2) {
    if (props.view === "year") {
      onDateSelect(event, {
        year: year2,
        month: 0,
        day: 1,
        selectable: true
      });
    } else {
      setCurrentYear(year2);
      setCurrentView("month");
      props.onMonthChange && props.onMonthChange({
        month: currentMonth + 1,
        year: year2
      });
    }
  };
  var updateModel = function updateModel2(event, value) {
    if (props.onChange) {
      var newValue = cloneDate(value);
      viewStateChanged.current = true;
      onChangeRef.current({
        originalEvent: event,
        value: newValue,
        stopPropagation: function stopPropagation() {
          event === null || event === void 0 || event.stopPropagation();
        },
        preventDefault: function preventDefault() {
          event === null || event === void 0 || event.preventDefault();
        },
        target: {
          name: props.name,
          id: props.id,
          value: newValue
        }
      });
    }
  };
  var show = function show2(type) {
    if (props.onVisibleChange) {
      props.onVisibleChange({
        visible: true,
        type
      });
    } else {
      setOverlayVisibleState(true);
      overlayEventListener.current = function(e) {
        if (!isOutsideClicked(e) && visible) {
          isOverlayClicked.current = true;
        }
      };
      OverlayService.on("overlay-click", overlayEventListener.current);
    }
  };
  var hide = function hide2(type, callback) {
    var _hideCallback = function _hideCallback2() {
      viewStateChanged.current = false;
      ignoreFocusFunctionality.current = false;
      isOverlayClicked.current = false;
      callback && callback();
      OverlayService.off("overlay-click", overlayEventListener.current);
      overlayEventListener.current = null;
    };
    props.touchUI && disableModality();
    if (props.onVisibleChange) {
      props.onVisibleChange({
        visible: type !== "dateselect",
        // false only if selecting a value to close panel
        type,
        callback: _hideCallback
      });
    } else {
      setOverlayVisibleState(false);
      _hideCallback();
    }
  };
  var onOverlayEnter = function onOverlayEnter2() {
    var styles2 = props.touchUI ? {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    } : !props.inline ? {
      position: "absolute",
      top: "0",
      left: "0"
    } : void 0;
    DomHandler.addStyles(overlayRef.current, styles2);
    if (props.autoZIndex) {
      var key = props.touchUI ? "modal" : "overlay";
      ZIndexUtils.set(key, overlayRef.current, context && context.autoZIndex || PrimeReact.autoZIndex, props.baseZIndex || context && context.zIndex[key] || PrimeReact.zIndex[key]);
    }
    if (!props.touchUI && overlayRef && overlayRef.current && inputRef && inputRef.current && !appendDisabled()) {
      var inputWidth = DomHandler.getOuterWidth(inputRef.current);
      if (inputWidth < 220) {
        inputWidth = 220;
      }
      if (props.view === "date") {
        overlayRef.current.style.width = DomHandler.getOuterWidth(overlayRef.current) + "px";
      } else {
        overlayRef.current.style.width = inputWidth + "px";
      }
      if (!isUnstyled()) {
        overlayRef.current.style.minWidth = inputWidth + "px";
      }
    }
    alignOverlay();
  };
  var onOverlayEntered = function onOverlayEntered2() {
    bindOverlayListener();
    props.onShow && props.onShow();
    setFocusedState(false);
  };
  var onOverlayExit = function onOverlayExit2() {
    unbindOverlayListener();
  };
  var onOverlayExited = function onOverlayExited2() {
    ZIndexUtils.clear(overlayRef.current);
    props.onHide && props.onHide();
  };
  var appendDisabled = function appendDisabled2() {
    var appendTo = props.appendTo || context && context.appendTo || PrimeReact.appendTo;
    return appendTo === "self" || props.inline;
  };
  var alignOverlay = function alignOverlay2() {
    if (props.touchUI) {
      enableModality();
    } else if (overlayRef && overlayRef.current && inputRef && inputRef.current) {
      DomHandler.alignOverlay(overlayRef.current, inputRef.current, props.appendTo || context && context.appendTo || PrimeReact.appendTo);
      if (appendDisabled()) {
        DomHandler.relativePosition(overlayRef.current, inputRef.current);
      } else {
        DomHandler.absolutePosition(overlayRef.current, inputRef.current);
      }
    }
    if (isUnstyled()) {
      overlayRef.current.style.minWidth = "";
    }
  };
  var enableModality = function enableModality2() {
    if (!touchUIMask.current) {
      touchUIMask.current = document.createElement("div");
      touchUIMask.current.style.zIndex = String(ZIndexUtils.get(overlayRef.current) - 1);
      !isUnstyled() && DomHandler.addMultipleClasses(touchUIMask.current, "p-component-overlay p-datepicker-mask p-datepicker-mask-scrollblocker p-component-overlay-enter");
      touchUIMaskClickListener.current = function() {
        disableModality();
        hide();
      };
      touchUIMask.current.addEventListener("click", touchUIMaskClickListener.current);
      document.body.appendChild(touchUIMask.current);
      DomHandler.blockBodyScroll();
    }
  };
  var disableModality = function disableModality2() {
    if (touchUIMask.current) {
      if (isUnstyled) {
        destroyMask();
      } else {
        !isUnstyled() && DomHandler.addClass(touchUIMask.current, "p-component-overlay-leave");
        if (DomHandler.hasCSSAnimation(touchUIMask.current) > 0) {
          touchUIMask.current.addEventListener("animationend", function() {
            destroyMask();
          });
        } else {
          destroyMask();
        }
      }
    }
  };
  var destroyMask = function destroyMask2() {
    if (touchUIMask.current) {
      touchUIMask.current.removeEventListener("click", touchUIMaskClickListener.current);
      touchUIMaskClickListener.current = null;
      document.body.removeChild(touchUIMask.current);
      touchUIMask.current = null;
    }
    var bodyChildren = document.body.children;
    var hasBlockerMasks;
    for (var i = 0; i < bodyChildren.length; i++) {
      var bodyChild = bodyChildren[i];
      if (DomHandler.hasClass(bodyChild, "p-datepicker-mask-scrollblocker")) {
        hasBlockerMasks = true;
        break;
      }
    }
    if (!hasBlockerMasks) {
      DomHandler.unblockBodyScroll();
    }
  };
  var isOutsideClicked = function isOutsideClicked2(event) {
    return elementRef.current && !(elementRef.current.isSameNode(event.target) || isNavIconClicked(event.target) || elementRef.current.contains(event.target) || overlayRef.current && overlayRef.current.contains(event.target));
  };
  var isNavIconClicked = function isNavIconClicked2(target) {
    return previousButton.current && (previousButton.current.isSameNode(target) || previousButton.current.contains(target)) || nextButton.current && (nextButton.current.isSameNode(target) || nextButton.current.contains(target));
  };
  var getFirstDayOfMonthIndex = function getFirstDayOfMonthIndex2(month2, year2) {
    var day2 = /* @__PURE__ */ new Date();
    day2.setDate(1);
    day2.setMonth(month2);
    day2.setFullYear(year2);
    var dayIndex = day2.getDay() + getSundayIndex();
    return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
  };
  var getDaysCountInMonth = function getDaysCountInMonth2(month2, year2) {
    return 32 - daylightSavingAdjust(new Date(year2, month2, 32)).getDate();
  };
  var getDaysCountInPrevMonth = function getDaysCountInPrevMonth2(month2, year2) {
    var prev = getPreviousMonthAndYear(month2, year2);
    return getDaysCountInMonth(prev.month, prev.year);
  };
  var daylightSavingAdjust = function daylightSavingAdjust2(date) {
    if (!date) {
      return null;
    }
    date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
    return date;
  };
  var getPreviousMonthAndYear = function getPreviousMonthAndYear2(month2, year2) {
    var m;
    var y;
    if (month2 === 0) {
      m = 11;
      y = year2 - 1;
    } else {
      m = month2 - 1;
      y = year2;
    }
    return {
      month: m,
      year: y
    };
  };
  var getNextMonthAndYear = function getNextMonthAndYear2(month2, year2) {
    var m;
    var y;
    if (month2 === 11) {
      m = 0;
      y = year2 + 1;
    } else {
      m = month2 + 1;
      y = year2;
    }
    return {
      month: m,
      year: y
    };
  };
  var getSundayIndex = function getSundayIndex2() {
    var firstDayOfWeek = localeOption("firstDayOfWeek", props.locale);
    return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
  };
  var createWeekDaysMeta = function createWeekDaysMeta2() {
    var weekDays = [];
    var _localeOptions = localeOptions(props.locale), dayIndex = _localeOptions.firstDayOfWeek, dayNamesMin = _localeOptions.dayNamesMin;
    for (var i = 0; i < 7; i++) {
      weekDays.push(dayNamesMin[dayIndex]);
      dayIndex = dayIndex === 6 ? 0 : ++dayIndex;
    }
    return weekDays;
  };
  var createMonthsMeta = function createMonthsMeta2(month2, year2) {
    var months = [];
    for (var i = 0; i < props.numberOfMonths; i++) {
      var m = month2 + i;
      var y = year2;
      if (m > 11) {
        m = m % 11 - 1;
        y = year2 + 1;
      }
      months.push(createMonthMeta(m, y));
    }
    return months;
  };
  var createMonthMeta = function createMonthMeta2(month2, year2) {
    var dates = [];
    var firstDay = getFirstDayOfMonthIndex(month2, year2);
    var daysLength = getDaysCountInMonth(month2, year2);
    var prevMonthDaysLength = getDaysCountInPrevMonth(month2, year2);
    var dayNo = 1;
    var today = /* @__PURE__ */ new Date();
    var weekNumbers = [];
    var monthRows = Math.ceil((daysLength + firstDay) / 7);
    for (var i = 0; i < monthRows; i++) {
      var week = [];
      if (i === 0) {
        for (var j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
          var prev = getPreviousMonthAndYear(month2, year2);
          week.push({
            day: j,
            month: prev.month,
            year: prev.year,
            otherMonth: true,
            today: isToday(today, j, prev.month, prev.year),
            selectable: isSelectable(j, prev.month, prev.year, true)
          });
        }
        var remainingDaysLength = 7 - week.length;
        for (var _j = 0; _j < remainingDaysLength; _j++) {
          week.push({
            day: dayNo,
            month: month2,
            year: year2,
            today: isToday(today, dayNo, month2, year2),
            selectable: isSelectable(dayNo, month2, year2, false)
          });
          dayNo++;
        }
      } else {
        for (var _j2 = 0; _j2 < 7; _j2++) {
          if (dayNo > daysLength) {
            var next = getNextMonthAndYear(month2, year2);
            week.push({
              day: dayNo - daysLength,
              month: next.month,
              year: next.year,
              otherMonth: true,
              today: isToday(today, dayNo - daysLength, next.month, next.year),
              selectable: isSelectable(dayNo - daysLength, next.month, next.year, true)
            });
          } else {
            week.push({
              day: dayNo,
              month: month2,
              year: year2,
              today: isToday(today, dayNo, month2, year2),
              selectable: isSelectable(dayNo, month2, year2, false)
            });
          }
          dayNo++;
        }
      }
      if (props.showWeek) {
        weekNumbers.push(getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
      }
      dates.push(week);
    }
    return {
      month: month2,
      year: year2,
      dates,
      weekNumbers
    };
  };
  var getWeekNumber = function getWeekNumber2(date) {
    var checkDate = cloneDate(date);
    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
    var time = checkDate.getTime();
    checkDate.setMonth(0);
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate.getTime()) / 864e5) / 7) + 1;
  };
  var isSelectable = function isSelectable2(day2, month2, year2, otherMonth) {
    var validMin = true;
    var validMax = true;
    var validDate = true;
    var validDay = true;
    var validMonth = true;
    if (props.minDate) {
      if (props.minDate.getFullYear() > year2) {
        validMin = false;
      } else if (props.minDate.getFullYear() === year2) {
        if (month2 > -1 && props.minDate.getMonth() > month2) {
          validMin = false;
        } else if (month2 > -1 && props.minDate.getMonth() === month2) {
          if (day2 > 0 && props.minDate.getDate() > day2) {
            validMin = false;
          }
        }
      }
    }
    if (props.maxDate) {
      if (props.maxDate.getFullYear() < year2) {
        validMax = false;
      } else if (props.maxDate.getFullYear() === year2) {
        if (month2 > -1 && props.maxDate.getMonth() < month2) {
          validMax = false;
        } else if (month2 > -1 && props.maxDate.getMonth() === month2) {
          if (day2 > 0 && props.maxDate.getDate() < day2) {
            validMax = false;
          }
        }
      }
    }
    if (props.disabledDates || props.enabledDates || props.disabledDays) {
      validDay = !isDayDisabled(day2, month2, year2);
    }
    if (props.selectOtherMonths === false && otherMonth) {
      validMonth = false;
    }
    return validMin && validMax && validDate && validDay && validMonth;
  };
  var isSelectableTime = function isSelectableTime2(value) {
    var validMin = true;
    var validMax = true;
    if (props.minDate && props.minDate.toDateString() === value.toDateString()) {
      if (props.minDate.getHours() > value.getHours()) {
        validMin = false;
      } else if (props.minDate.getHours() === value.getHours()) {
        if (props.minDate.getMinutes() > value.getMinutes()) {
          validMin = false;
        } else if (props.minDate.getMinutes() === value.getMinutes()) {
          if (props.minDate.getSeconds() > value.getSeconds()) {
            validMin = false;
          } else if (props.minDate.getSeconds() === value.getSeconds()) {
            if (props.minDate.getMilliseconds() > value.getMilliseconds()) {
              validMin = false;
            }
          }
        }
      }
    }
    if (props.maxDate && props.maxDate.toDateString() === value.toDateString()) {
      if (props.maxDate.getHours() < value.getHours()) {
        validMax = false;
      } else if (props.maxDate.getHours() === value.getHours()) {
        if (props.maxDate.getMinutes() < value.getMinutes()) {
          validMax = false;
        } else if (props.maxDate.getMinutes() === value.getMinutes()) {
          if (props.maxDate.getSeconds() < value.getSeconds()) {
            validMax = false;
          } else if (props.maxDate.getSeconds() === value.getSeconds()) {
            if (props.maxDate.getMilliseconds() < value.getMilliseconds()) {
              validMax = false;
            }
          }
        }
      }
    }
    return validMin && validMax;
  };
  var isSelected = function isSelected2(dateMeta) {
    if (props.value) {
      if (isSingleSelection()) {
        return isDateEquals(props.value, dateMeta);
      } else if (isMultipleSelection()) {
        var selected = false;
        var _iterator = _createForOfIteratorHelper(props.value), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var date = _step.value;
            selected = isDateEquals(date, dateMeta);
            if (selected) {
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return selected;
      } else if (isRangeSelection()) {
        if (props.value[1]) {
          return isDateEquals(props.value[0], dateMeta) || isDateEquals(props.value[1], dateMeta) || isDateBetween(props.value[0], props.value[1], dateMeta);
        }
        return isDateEquals(props.value[0], dateMeta);
      }
    } else {
      return false;
    }
  };
  var isComparable = function isComparable2() {
    return props.value != null && typeof props.value !== "string";
  };
  var isMonthSelected = function isMonthSelected2(month2) {
    if (!isComparable()) return false;
    if (isMultipleSelection()) {
      return props.value.some(function(v) {
        return v.getMonth() === month2 && v.getFullYear() === currentYear;
      });
    } else if (isRangeSelection()) {
      var _props$value = _slicedToArray(props.value, 2), start = _props$value[0], end = _props$value[1];
      var startYear = start ? start.getFullYear() : null;
      var endYear = end ? end.getFullYear() : null;
      var startMonth = start ? start.getMonth() : null;
      var endMonth = end ? end.getMonth() : null;
      if (!end) {
        return startYear === currentYear && startMonth === month2;
      } else {
        var currentDate = new Date(currentYear, month2, 1);
        var startDate = new Date(startYear, startMonth, 1);
        var endDate = new Date(endYear, endMonth, 1);
        return currentDate >= startDate && currentDate <= endDate;
      }
    } else {
      return props.value.getMonth() === month2 && props.value.getFullYear() === currentYear;
    }
  };
  var isYearSelected = function isYearSelected2(year2) {
    if (!isComparable()) return false;
    if (isMultipleSelection()) {
      return props.value.some(function(v) {
        return v.getFullYear() === year2;
      });
    } else if (isRangeSelection()) {
      var start = props.value[0] ? props.value[0].getFullYear() : null;
      var end = props.value[1] ? props.value[1].getFullYear() : null;
      return start === year2 || end === year2 || start < year2 && end > year2;
    } else {
      return props.value.getFullYear() === year2;
    }
  };
  var switchViewButtonDisabled = function switchViewButtonDisabled2() {
    return props.numberOfMonths > 1 || props.disabled;
  };
  var isDateEquals = function isDateEquals2(value, dateMeta) {
    if (value && value instanceof Date) {
      return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
    }
    return false;
  };
  var isDateBetween = function isDateBetween2(start, end, dateMeta) {
    var between = false;
    if (start && end) {
      var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
      return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
    }
    return between;
  };
  var isSingleSelection = function isSingleSelection2() {
    return props.selectionMode === "single";
  };
  var isRangeSelection = function isRangeSelection2() {
    return props.selectionMode === "range";
  };
  var isMultipleSelection = function isMultipleSelection2() {
    return props.selectionMode === "multiple";
  };
  var isToday = function isToday2(today, day2, month2, year2) {
    return today.getDate() === day2 && today.getMonth() === month2 && today.getFullYear() === year2;
  };
  var isDayDisabled = function isDayDisabled2(day2, month2, year2) {
    var isDisabled = false;
    if (props.disabledDates) {
      if (props.disabledDates.some(function(d) {
        return d.getFullYear() === year2 && d.getMonth() === month2 && d.getDate() === day2;
      })) {
        isDisabled = true;
      }
    }
    if (!isDisabled && props.disabledDays && currentView === "date") {
      var weekday = new Date(year2, month2, day2);
      var weekdayNumber = weekday.getDay();
      if (props.disabledDays.indexOf(weekdayNumber) !== -1) {
        isDisabled = true;
      }
    }
    if (props.enabledDates) {
      var isEnabled = props.enabledDates.some(function(d) {
        return d.getFullYear() === year2 && d.getMonth() === month2 && d.getDate() === day2;
      });
      if (isEnabled) {
        isDisabled = false;
      } else if (!props.disabledDays && !props.disabledDates) {
        isDisabled = true;
      }
    }
    return isDisabled;
  };
  var isMonthYearDisabled = function isMonthYearDisabled2(month2, year2) {
    var daysCountInAllMonth = month2 === -1 ? new Array(12).fill(0).map(function(_, i2) {
      return getDaysCountInMonth(i2, year2);
    }) : [getDaysCountInMonth(month2, year2)];
    for (var i = 0; i < daysCountInAllMonth.length; i++) {
      var monthDays = daysCountInAllMonth[i];
      var _month = month2 === -1 ? i : month2;
      for (var day2 = 1; day2 <= monthDays; day2++) {
        var isDateSelectable = isSelectable(day2, _month, year2);
        if (isDateSelectable) {
          return false;
        }
      }
    }
    return true;
  };
  var updateInputfield = function updateInputfield2(value) {
    if (!inputRef.current) {
      return;
    }
    var formattedValue = "";
    if (value) {
      try {
        if (isSingleSelection()) {
          formattedValue = isValidDate(value) ? formatDateTime(value) : props.keepInvalid ? value : "";
        } else if (isMultipleSelection()) {
          for (var i = 0; i < value.length; i++) {
            var selectedValue = value[i];
            var dateAsString = isValidDate(selectedValue) ? formatDateTime(selectedValue) : "";
            formattedValue = formattedValue + dateAsString;
            if (i !== value.length - 1) {
              formattedValue = formattedValue + ", ";
            }
          }
        } else if (isRangeSelection()) {
          if (value && value.length) {
            var startDate = value[0];
            var endDate = value[1];
            formattedValue = isValidDate(startDate) ? formatDateTime(startDate) : "";
            if (endDate) {
              formattedValue = formattedValue + (isValidDate(endDate) ? " - " + formatDateTime(endDate) : "");
            }
          }
        }
      } catch (err) {
        formattedValue = value;
      }
    }
    inputRef.current.value = formattedValue;
  };
  var formatDateTime = function formatDateTime2(date) {
    if (props.formatDateTime) {
      return props.formatDateTime(date);
    }
    var formattedValue = null;
    if (date) {
      if (props.timeOnly) {
        formattedValue = formatTime(date);
      } else {
        formattedValue = formatDate(date, getDateFormat());
        if (props.showTime) {
          formattedValue = formattedValue + (" " + formatTime(date));
        }
      }
    }
    return formattedValue;
  };
  var formatDate = function formatDate2(date, format) {
    if (!date) {
      return "";
    }
    var iFormat;
    var lookAhead = function lookAhead2(match) {
      var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) {
        iFormat++;
      }
      return matches;
    };
    var formatNumber = function formatNumber2(match, value, len) {
      var num = "" + value;
      if (lookAhead(match)) {
        while (num.length < len) {
          num = "0" + num;
        }
      }
      return num;
    };
    var formatName = function formatName2(match, value, shortNames, longNames) {
      return lookAhead(match) ? longNames[value] : shortNames[value];
    };
    var output = "";
    var literal = false;
    var _localeOptions2 = localeOptions(props.locale), dayNamesShort = _localeOptions2.dayNamesShort, dayNames = _localeOptions2.dayNames, monthNamesShort = _localeOptions2.monthNamesShort, monthNames = _localeOptions2.monthNames;
    if (date) {
      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
            literal = false;
          } else {
            output = output + format.charAt(iFormat);
          }
        } else {
          switch (format.charAt(iFormat)) {
            case "d":
              output = output + formatNumber("d", date.getDate(), 2);
              break;
            case "D":
              output = output + formatName("D", date.getDay(), dayNamesShort, dayNames);
              break;
            case "o":
              output = output + formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              output = output + formatNumber("m", date.getMonth() + 1, 2);
              break;
            case "M":
              output = output + formatName("M", date.getMonth(), monthNamesShort, monthNames);
              break;
            case "y":
              output = output + (lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100);
              break;
            case "@":
              output = output + date.getTime();
              break;
            case "!":
              output = output + (date.getTime() * 1e4 + ticksTo1970);
              break;
            case "'":
              if (lookAhead("'")) {
                output = output + "'";
              } else {
                literal = true;
              }
              break;
            default:
              output = output + format.charAt(iFormat);
          }
        }
      }
    }
    return output;
  };
  var formatTime = function formatTime2(date) {
    if (!date) {
      return "";
    }
    var output = "";
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();
    if (props.hourFormat === "12" && hours > 11 && hours !== 12) {
      hours = hours - 12;
    }
    if (props.hourFormat === "12") {
      output = output + (hours === 0 ? 12 : hours < 10 ? "0" + hours : hours);
    } else {
      output = output + (hours < 10 ? "0" + hours : hours);
    }
    output = output + ":";
    output = output + (minutes < 10 ? "0" + minutes : minutes);
    if (props.showSeconds) {
      output = output + ":";
      output = output + (seconds < 10 ? "0" + seconds : seconds);
    }
    if (props.showMillisec) {
      output = output + ".";
      output = output + (milliseconds < 100 ? (milliseconds < 10 ? "00" : "0") + milliseconds : milliseconds);
    }
    if (props.hourFormat === "12") {
      output = output + (date.getHours() > 11 ? " PM" : " AM");
    }
    return output;
  };
  var parseValueFromString = function parseValueFromString2(text) {
    if (!text || text.trim().length === 0) {
      return null;
    }
    var value;
    if (isSingleSelection()) {
      value = parseDateTime(text);
    } else if (isMultipleSelection()) {
      var tokens = text.split(",");
      value = [];
      var _iterator2 = _createForOfIteratorHelper(tokens), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var token = _step2.value;
          value.push(parseDateTime(token.trim()));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } else if (isRangeSelection()) {
      var _tokens = text.split(" - ");
      value = [];
      for (var i = 0; i < _tokens.length; i++) {
        value[i] = parseDateTime(_tokens[i].trim());
      }
    }
    return value;
  };
  var parseDateTime = function parseDateTime2(text) {
    if (props.parseDateTime) {
      return props.parseDateTime(text);
    }
    var date;
    var parts = text.split(" ");
    if (props.timeOnly) {
      date = /* @__PURE__ */ new Date();
      populateTime(date, parts[0], parts[1]);
    } else if (props.showTime) {
      date = parseDate(parts[0], getDateFormat());
      populateTime(date, parts[1], parts[2]);
    } else {
      date = parseDate(text, getDateFormat());
    }
    return date;
  };
  var populateTime = function populateTime2(value, timeString, ampm) {
    if (props.hourFormat === "12" && ampm !== "PM" && ampm !== "AM") {
      throw new Error("Invalid Time");
    }
    var time = parseTime(timeString, ampm);
    value.setHours(time.hour);
    value.setMinutes(time.minute);
    value.setSeconds(time.second);
    value.setMilliseconds(time.millisecond);
  };
  var parseTime = function parseTime2(value, ampm) {
    value = props.showMillisec ? value.replace(".", ":") : value;
    var tokens = value.split(":");
    var validTokenLength = props.showSeconds ? 3 : 2;
    validTokenLength = props.showMillisec ? validTokenLength + 1 : validTokenLength;
    if (tokens.length !== validTokenLength || tokens[0].length !== 2 || tokens[1].length !== 2 || props.showSeconds && tokens[2].length !== 2 || props.showMillisec && tokens[3].length !== 3) {
      throw new Error("Invalid time");
    }
    var h = parseInt(tokens[0], 10);
    var m = parseInt(tokens[1], 10);
    var s = props.showSeconds ? parseInt(tokens[2], 10) : null;
    var ms = props.showMillisec ? parseInt(tokens[3], 10) : null;
    if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || props.hourFormat === "12" && h > 12 || props.showSeconds && (isNaN(s) || s > 59) || props.showMillisec && (isNaN(s) || s > 1e3)) {
      throw new Error("Invalid time");
    } else {
      if (props.hourFormat === "12") {
        if (h !== 12 && ampm === "PM") {
          h = h + 12;
        }
        if (h === 12 && ampm === "AM") {
          h = h - 12;
        }
      }
      return {
        hour: h,
        minute: m,
        second: s,
        millisecond: ms
      };
    }
  };
  var parseDate = function parseDate2(value, format) {
    if (format == null || value == null) {
      throw new Error("Invalid arguments");
    }
    value = _typeof(value) === "object" ? value.toString() : value + "";
    if (value === "") {
      return null;
    }
    var iFormat;
    var dim;
    var extra;
    var iValue = 0;
    var shortYearCutoff = typeof props.shortYearCutoff !== "string" ? props.shortYearCutoff : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(props.shortYearCutoff, 10);
    var year2 = -1;
    var month2 = -1;
    var day2 = -1;
    var doy = -1;
    var literal = false;
    var date;
    var lookAhead = function lookAhead2(match) {
      var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) {
        iFormat++;
      }
      return matches;
    };
    var getNumber = function getNumber2(match) {
      var isDoubled = lookAhead(match);
      var size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2;
      var minSize = match === "y" ? size : 1;
      var digits = new RegExp("^\\d{" + minSize + "," + size + "}");
      var num = value.substring(iValue).match(digits);
      if (!num) {
        throw new Error("Missing number at position " + iValue);
      }
      iValue = iValue + num[0].length;
      return parseInt(num[0], 10);
    };
    var getName = function getName2(match, shortNames, longNames) {
      var index = -1;
      var arr = lookAhead(match) ? longNames : shortNames;
      var names = [];
      for (var i = 0; i < arr.length; i++) {
        names.push([i, arr[i]]);
      }
      names.sort(function(a, b) {
        return -(a[1].length - b[1].length);
      });
      for (var _i = 0; _i < names.length; _i++) {
        var name = names[_i][1];
        if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
          index = names[_i][0];
          iValue = iValue + name.length;
          break;
        }
      }
      if (index !== -1) {
        return index + 1;
      }
      throw new Error("Unknown name at position " + iValue);
    };
    var checkLiteral = function checkLiteral2() {
      if (value.charAt(iValue) !== format.charAt(iFormat)) {
        throw new Error("Unexpected literal at position " + iValue);
      }
      iValue++;
    };
    if (props.view === "month") {
      day2 = 1;
    }
    if (props.view === "year") {
      day2 = 1;
      month2 = 1;
    }
    var _localeOptions3 = localeOptions(props.locale), dayNamesShort = _localeOptions3.dayNamesShort, dayNames = _localeOptions3.dayNames, monthNamesShort = _localeOptions3.monthNamesShort, monthNames = _localeOptions3.monthNames;
    for (iFormat = 0; iFormat < format.length; iFormat++) {
      if (literal) {
        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
          literal = false;
        } else {
          checkLiteral();
        }
      } else {
        switch (format.charAt(iFormat)) {
          case "d":
            day2 = getNumber("d");
            break;
          case "D":
            getName("D", dayNamesShort, dayNames);
            break;
          case "o":
            doy = getNumber("o");
            break;
          case "m":
            month2 = getNumber("m");
            break;
          case "M":
            month2 = getName("M", monthNamesShort, monthNames);
            break;
          case "y":
            year2 = getNumber("y");
            break;
          case "@":
            date = new Date(getNumber("@"));
            year2 = date.getFullYear();
            month2 = date.getMonth() + 1;
            day2 = date.getDate();
            break;
          case "!":
            date = new Date((getNumber("!") - ticksTo1970) / 1e4);
            year2 = date.getFullYear();
            month2 = date.getMonth() + 1;
            day2 = date.getDate();
            break;
          case "'":
            if (lookAhead("'")) {
              checkLiteral();
            } else {
              literal = true;
            }
            break;
          default:
            checkLiteral();
        }
      }
    }
    if (iValue < value.length) {
      extra = value.substr(iValue);
      if (!/^\s+/.test(extra)) {
        throw new Error("Extra/unparsed characters found in date: " + extra);
      }
    }
    if (year2 === -1) {
      year2 = (/* @__PURE__ */ new Date()).getFullYear();
    } else if (year2 < 100) {
      year2 = year2 + ((/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (year2 <= shortYearCutoff ? 0 : -100));
    }
    if (doy > -1) {
      month2 = 1;
      day2 = doy;
      do {
        dim = getDaysCountInMonth(year2, month2 - 1);
        if (day2 <= dim) {
          break;
        }
        month2++;
        day2 = day2 - dim;
      } while (true);
    }
    date = daylightSavingAdjust(new Date(year2, month2 - 1, day2));
    if (date.getFullYear() !== year2 || date.getMonth() + 1 !== month2 || date.getDate() !== day2) {
      throw new Error("Invalid date");
    }
    return date;
  };
  var isInMinYear = function isInMinYear2(viewDate) {
    return props.minDate && props.minDate.getFullYear() === viewDate.getFullYear();
  };
  var isInMaxYear = function isInMaxYear2(viewDate) {
    return props.maxDate && props.maxDate.getFullYear() === viewDate.getFullYear();
  };
  React3.useEffect(function() {
    ObjectUtils.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  useMountEffect(function() {
    var viewDate = getViewDate(props.viewDate);
    validateDate(viewDate);
    setViewDateState(viewDate);
    setCurrentMonth(viewDate.getMonth());
    setCurrentYear(viewDate.getFullYear());
    setCurrentView(props.view);
    if (!idState) {
      var uniqueId = UniqueComponentId();
      !idState && setIdState(uniqueId);
    }
    if (props.inline) {
      overlayRef && overlayRef.current.setAttribute(attributeSelector, "");
      if (!props.disabled) {
        initFocusableCell();
        if (props.numberOfMonths === 1) {
          overlayRef.current.style.width = DomHandler.getOuterWidth(overlayRef.current) + "px";
        }
      }
    }
    if (props.value) {
      updateInputfield(props.value);
      setValue(props.value);
    }
    if (props.autoFocus) {
      setTimeout(function() {
        return DomHandler.focus(inputRef.current, props.autoFocus);
      }, 200);
    }
  });
  React3.useEffect(function() {
    onChangeRef.current = props.onChange;
  }, [props.onChange]);
  React3.useEffect(function() {
    var unbindMaskEvents = null;
    if (props.mask) {
      unbindMaskEvents = mask(inputRef.current, {
        mask: props.mask,
        slotChar: props.maskSlotChar,
        readOnly: props.readOnlyInput || props.disabled,
        onChange: function onChange(e) {
          updateValueOnInput(e.originalEvent, e.value, function() {
            return false;
          });
        },
        onBlur: function onBlur(e) {
          updateValueOnInput(e, e.target.value);
        }
      }).unbindEvents;
    }
    return function() {
      props.mask && unbindMaskEvents && unbindMaskEvents();
    };
  }, [props.disabled, props.mask, props.readOnlyInput]);
  useUpdateEffect(function() {
    if (viewChangedWithKeyDown.current) {
      setCurrentView(props.view);
    }
    viewChangedWithKeyDown.current = false;
  }, [props.view]);
  useUpdateEffect(function() {
    if (visible && !props.inline) {
      focusToFirstCell();
    }
  }, [visible, currentView, props.inline]);
  useUpdateEffect(function() {
    if (!props.onViewDateChange && !viewStateChanged.current) {
      setValue(props.value);
    }
    if (props.viewDate) {
      var date = getViewDate(props.viewDate);
      updateViewDate(null, date);
      onViewDateSelect({
        event: null,
        date
      });
    }
  }, [props.onViewDateChange, props.value, props.viewDate]);
  useUpdateEffect(function() {
    if (overlayVisibleState || props.visible) {
      setTimeout(function() {
        alignOverlay();
      });
    }
  }, [currentView, overlayVisibleState, props.visible]);
  useUpdateEffect(function() {
    var newDate = props.value;
    if (previousValue !== newDate) {
      var isInputFocused = document.activeElement === inputRef.current;
      if (!isInputFocused) {
        updateInputfield(newDate);
      }
      if (!newDate) return;
      var viewDate = newDate;
      if (isMultipleSelection()) {
        if (newDate.length) {
          viewDate = newDate[newDate.length - 1];
        }
      } else if (isRangeSelection()) {
        if (newDate.length) {
          var startDate = newDate[0];
          var endDate = newDate[1];
          viewDate = endDate || startDate;
        }
      }
      if (viewDate instanceof Date) {
        validateDate(viewDate);
        setViewDateState(viewDate);
        setCurrentMonth(viewDate.getMonth());
        setCurrentYear(viewDate.getFullYear());
      }
    }
  }, [props.value, visible]);
  useUpdateEffect(function() {
    updateInputfield(props.value);
  }, [props.dateFormat, props.hourFormat, props.timeOnly, props.showSeconds, props.showMillisec, props.showTime, props.locale]);
  useUpdateEffect(function() {
    if (overlayRef.current) {
      setNavigationState(viewDateState);
      updateFocus();
    }
  });
  useUnmountEffect(function() {
    if (touchUIMask.current) {
      disableModality();
      touchUIMask.current = null;
    }
    ZIndexUtils.clear(overlayRef.current);
  });
  React3.useImperativeHandle(ref, function() {
    return {
      props,
      show,
      hide,
      getCurrentDateTime,
      getViewDate,
      updateViewDate,
      focus: function focus() {
        return DomHandler.focus(inputRef.current);
      },
      getElement: function getElement() {
        return elementRef.current;
      },
      getOverlay: function getOverlay() {
        return overlayRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      }
    };
  });
  var setValue = function setValue2(propValue) {
    if (Array.isArray(propValue)) {
      propValue = propValue[0];
    }
    var prevPropValue = previousValue;
    if (Array.isArray(prevPropValue)) {
      prevPropValue = prevPropValue[0];
    }
    var viewDate = props.viewDate && isValidDate(props.viewDate) ? props.viewDate : propValue && isValidDate(propValue) ? propValue : /* @__PURE__ */ new Date();
    if (isClearClicked.current && props.showTime) {
      viewDate.setHours(0, 0, 0);
      isClearClicked.current = false;
    }
    if (!prevPropValue && propValue || propValue && propValue instanceof Date && propValue.getTime() !== prevPropValue.getTime()) {
      validateDate(viewDate);
    }
    setViewDateState(viewDate);
    viewStateChanged.current = true;
  };
  var createBackwardNavigator = function createBackwardNavigator2(isVisible) {
    var navigatorProps = isVisible ? {
      onClick: onPrevButtonClick,
      onKeyDown: function onKeyDown(e) {
        return onContainerButtonKeydown(e);
      }
    } : {
      style: {
        visibility: "hidden"
      }
    };
    var previousIconProps = mergeProps({
      className: cx("previousIcon")
    }, ptm("previousIcon"));
    var icon = props.prevIcon || React3.createElement(ChevronLeftIcon, previousIconProps);
    var backwardNavigatorIcon = IconUtils.getJSXIcon(icon, _objectSpread({}, previousIconProps), {
      props
    });
    var _localeOptions4 = localeOptions(props.locale), prevDecade = _localeOptions4.prevDecade, prevYear = _localeOptions4.prevYear, prevMonth = _localeOptions4.prevMonth;
    var previousButtonLabel = currentView === "year" ? prevDecade : currentView === "month" ? prevYear : prevMonth;
    var previousButtonProps = mergeProps(_objectSpread({
      type: "button",
      className: cx("previousButton"),
      "aria-label": previousButtonLabel
    }, navigatorProps), ptm("previousButton"));
    return React3.createElement("button", _extends3({
      ref: previousButton
    }, previousButtonProps), backwardNavigatorIcon, React3.createElement(Ripple, null));
  };
  var createForwardNavigator = function createForwardNavigator2(isVisible) {
    var navigatorProps = isVisible ? {
      onClick: onNextButtonClick,
      onKeyDown: function onKeyDown(e) {
        return onContainerButtonKeydown(e);
      }
    } : {
      style: {
        visibility: "hidden"
      }
    };
    var nextIconProps = mergeProps({
      className: cx("nextIcon")
    }, ptm("nextIcon"));
    var icon = props.nextIcon || React3.createElement(ChevronRightIcon, nextIconProps);
    var forwardNavigatorIcon = IconUtils.getJSXIcon(icon, _objectSpread({}, nextIconProps), {
      props
    });
    var _localeOptions5 = localeOptions(props.locale), nextDecade = _localeOptions5.nextDecade, nextYear = _localeOptions5.nextYear, nextMonth = _localeOptions5.nextMonth;
    var nextButtonLabel = currentView === "year" ? nextDecade : currentView === "month" ? nextYear : nextMonth;
    var nextButtonProps = mergeProps(_objectSpread({
      type: "button",
      className: cx("nextButton"),
      "aria-label": nextButtonLabel
    }, navigatorProps), ptm("nextButton"));
    return React3.createElement("button", _extends3({
      ref: nextButton
    }, nextButtonProps), forwardNavigatorIcon, React3.createElement(Ripple, null));
  };
  var renderMonthsNavigator = function renderMonthsNavigator2(index) {
    return props.monthNavigator && props.view !== "month" && (props.numberOfMonths === 1 || index === 0);
  };
  var createTitleMonthElement = function createTitleMonthElement2(month2, monthIndex) {
    var monthNames = localeOption("monthNames", props.locale);
    if (renderMonthsNavigator(monthIndex)) {
      var viewDate = getViewDate();
      var viewMonth = viewDate.getMonth();
      var displayedMonthOptions = monthNames.map(function(month3, index) {
        return (!isInMinYear(viewDate) || index >= props.minDate.getMonth()) && (!isInMaxYear(viewDate) || index <= props.maxDate.getMonth()) ? {
          label: month3,
          value: index,
          index
        } : null;
      }).filter(function(option) {
        return !!option;
      });
      var displayedMonthNames = displayedMonthOptions.map(function(option) {
        return option.label;
      });
      var selectProps = mergeProps({
        className: cx("select"),
        onChange: function onChange(e) {
          return onMonthDropdownChange(e, e.target.value);
        },
        value: viewMonth
      }, ptm("select"));
      var _content = React3.createElement("select", selectProps, displayedMonthOptions.map(function(option) {
        var optionProps = mergeProps({
          value: option.value
        }, ptm("option"));
        return React3.createElement("option", _extends3({}, optionProps, {
          key: option.label
        }), option.label);
      }));
      if (props.monthNavigatorTemplate) {
        var defaultContentOptions = {
          onChange: onMonthDropdownChange,
          className: "p-datepicker-month",
          value: viewMonth,
          names: displayedMonthNames,
          options: displayedMonthOptions,
          element: _content,
          props
        };
        return ObjectUtils.getJSXElement(props.monthNavigatorTemplate, defaultContentOptions);
      }
      return _content;
    }
    var monthTitleProps = mergeProps({
      className: cx("monthTitle"),
      onKeyDown: onContainerButtonKeydown,
      "aria-label": localeOption("chooseMonth", props.locale),
      onClick: switchToMonthView,
      disabled: switchViewButtonDisabled()
    }, ptm("monthTitle"));
    return currentView === "date" && React3.createElement("button", monthTitleProps, monthNames[month2]);
  };
  var createTitleYearElement = function createTitleYearElement2(metaYear) {
    var viewDate = getViewDate();
    var viewYear = viewDate.getFullYear();
    var displayYear = props.numberOfMonths > 1 || props.yearNavigator ? metaYear : currentYear;
    if (props.yearNavigator) {
      var _yearOptions2 = [];
      if (props.yearRange) {
        var years = props.yearRange.split(":");
        var yearStart = parseInt(years[0], 10);
        var yearEnd = parseInt(years[1], 10);
        for (var i = yearStart; i <= yearEnd; i++) {
          _yearOptions2.push(i);
        }
      } else {
        var base = viewYear - viewYear % 10;
        for (var _i2 = 0; _i2 < 10; _i2++) {
          _yearOptions2.push(base + _i2);
        }
      }
      var displayedYearNames = _yearOptions2.filter(function(year2) {
        return !(props.minDate && props.minDate.getFullYear() > year2) && !(props.maxDate && props.maxDate.getFullYear() < year2);
      });
      var selectProps = mergeProps({
        className: cx("select"),
        onChange: function onChange(e) {
          return onYearDropdownChange(e, e.target.value);
        },
        value: displayYear
      }, ptm("select"));
      var _content2 = React3.createElement("select", selectProps, displayedYearNames.map(function(year2) {
        var optionProps = mergeProps({
          value: year2
        }, ptm("option"));
        return React3.createElement("option", _extends3({}, optionProps, {
          key: year2
        }), year2);
      }));
      if (props.yearNavigatorTemplate) {
        var options = displayedYearNames.map(function(name, i2) {
          return {
            label: name,
            value: name,
            index: i2
          };
        });
        var defaultContentOptions = {
          onChange: onYearDropdownChange,
          className: "p-datepicker-year",
          value: viewYear,
          names: displayedYearNames,
          options,
          element: _content2,
          props
        };
        return ObjectUtils.getJSXElement(props.yearNavigatorTemplate, defaultContentOptions);
      }
      return _content2;
    }
    var yearTitleProps = mergeProps({
      className: cx("yearTitle"),
      "aria-label": localeOption("chooseYear", props.locale),
      onClick: function onClick(e) {
        return switchToYearView(e);
      },
      disabled: switchViewButtonDisabled()
    }, ptm("yearTitle"));
    return currentView !== "year" && React3.createElement("button", yearTitleProps, displayYear);
  };
  var createTitleDecadeElement = function createTitleDecadeElement2() {
    var years = yearPickerValues();
    var decadeTitleProps = mergeProps({
      className: cx("decadeTitle")
    }, ptm("decadeTitle"));
    if (currentView === "year") {
      var decadeTitleTextProps = mergeProps(ptm("decadeTitleText"));
      return React3.createElement("span", decadeTitleProps, props.decadeTemplate ? props.decadeTemplate(years) : React3.createElement("span", decadeTitleTextProps, "".concat(yearPickerValues()[0], " - ").concat(yearPickerValues()[yearPickerValues().length - 1])));
    }
    return null;
  };
  var createTitle = function createTitle2(monthMetaData, index) {
    var month2 = createTitleMonthElement(monthMetaData.month, index);
    var year2 = createTitleYearElement(monthMetaData.year);
    var decade = createTitleDecadeElement();
    var titleProps = mergeProps({
      className: cx("title")
    }, ptm("title"));
    var showMonthAfterYear = localeOption("showMonthAfterYear", props.locale);
    return React3.createElement("div", titleProps, showMonthAfterYear ? year2 : month2, showMonthAfterYear ? month2 : year2, decade);
  };
  var createDayNames = function createDayNames2(weekDays) {
    var weekDayProps = mergeProps(ptm("weekDay"));
    var tableHeaderCellProps = mergeProps({
      scope: "col"
    }, ptm("tableHeaderCell"));
    var dayNames = weekDays.map(function(weekDay, index) {
      return React3.createElement("th", _extends3({}, tableHeaderCellProps, {
        key: "".concat(weekDay, "-").concat(index)
      }), React3.createElement("span", weekDayProps, weekDay));
    });
    if (props.showWeek) {
      var weekHeaderProps = mergeProps({
        scope: "col",
        className: cx("weekHeader"),
        "data-p-disabled": props.showWeek
      }, ptm("weekHeader", {
        context: {
          disabled: props.showWeek
        }
      }));
      var weekLabel = mergeProps(ptm("weekLabel"));
      var weekHeader = React3.createElement("th", _extends3({}, weekHeaderProps, {
        key: "wn"
      }), React3.createElement("span", weekLabel, localeOption("weekHeader", props.locale)));
      return [weekHeader].concat(_toConsumableArray(dayNames));
    }
    return dayNames;
  };
  var createDateCellContent = function createDateCellContent2(date, className, groupIndex) {
    var content2 = props.dateTemplate ? props.dateTemplate(date) : date.day;
    var selected = isSelected(date);
    var dayLabelProps = mergeProps({
      className: cx("dayLabel", {
        className
      }),
      "aria-selected": selected,
      "aria-disabled": !date.selectable,
      onClick: function onClick(e) {
        return onDateSelect(e, date);
      },
      onKeyDown: function onKeyDown(e) {
        return onDateCellKeydown(e, date, groupIndex);
      },
      "data-p-highlight": selected,
      "data-p-disabled": !date.selectable
    }, ptm("dayLabel", {
      context: {
        selected,
        disabled: !date.selectable
      }
    }));
    return React3.createElement("span", dayLabelProps, content2, selected && React3.createElement("div", {
      "aria-live": "polite",
      className: "p-hidden-accessible",
      "data-p-hidden-accessible": true,
      pt: ptm("hiddenSelectedDay")
    }));
  };
  var createWeek = function createWeek2(weekDates, weekNumber, groupIndex) {
    var week = weekDates.map(function(date) {
      var selected = isSelected(date);
      var dateClassName = classNames({
        "p-highlight": selected,
        "p-disabled": !date.selectable
      });
      var content2 = date.otherMonth && !props.showOtherMonths ? null : createDateCellContent(date, dateClassName, groupIndex);
      var dayProps = mergeProps({
        className: cx("day", {
          date
        }),
        "aria-label": date.day,
        "data-p-today": date.today,
        "data-p-other-month": date.otherMonth
      }, ptm("day", {
        context: {
          date,
          today: date.today,
          otherMonth: date.otherMonth
        }
      }));
      return React3.createElement("td", _extends3({}, dayProps, {
        key: date.day
      }), content2);
    });
    if (props.showWeek) {
      var weekNumberProps = mergeProps({
        className: cx("weekNumber")
      }, ptm("weekNumber"));
      var weekLabelContainerProps = mergeProps({
        className: cx("weekLabelContainer"),
        "data-p-disabled": props.showWeek
      }, ptm("weekLabelContainer", {
        context: {
          disabled: props.showWeek
        }
      }));
      var weekNumberCell = React3.createElement("td", _extends3({}, weekNumberProps, {
        key: "wn" + weekNumber
      }), React3.createElement("span", weekLabelContainerProps, weekNumber));
      return [weekNumberCell].concat(_toConsumableArray(week));
    }
    return week;
  };
  var createDates = function createDates2(monthMetaData, groupIndex) {
    var tableBodyRowProps = mergeProps(ptm("tableBodyRowProps"));
    return monthMetaData.dates.map(function(weekDates, index) {
      return React3.createElement("tr", _extends3({}, tableBodyRowProps, {
        key: index
      }), createWeek(weekDates, monthMetaData.weekNumbers[index], groupIndex));
    });
  };
  var createDateViewGrid = function createDateViewGrid2(monthMetaData, weekDays, groupIndex) {
    var dayNames = createDayNames(weekDays);
    var dates = createDates(monthMetaData, groupIndex);
    var containerProps = mergeProps({
      className: cx("container")
    }, ptm("container"));
    var tableProps = mergeProps({
      role: "grid",
      className: cx("table")
    }, ptm("table"));
    var tableHeaderProps = mergeProps(ptm("tableHeader"));
    var tableHeaderRowProps = mergeProps(ptm("tableHeaderRow"));
    var tableBodyProps = mergeProps(ptm("tableBody"));
    return currentView === "date" && React3.createElement("div", _extends3({}, containerProps, {
      key: UniqueComponentId("calendar_container_")
    }), React3.createElement("table", tableProps, React3.createElement("thead", tableHeaderProps, React3.createElement("tr", tableHeaderRowProps, dayNames)), React3.createElement("tbody", tableBodyProps, dates)));
  };
  var createMonth = function createMonth2(monthMetaData, index) {
    var weekDays = createWeekDaysMeta();
    var backwardNavigator = createBackwardNavigator(index === 0);
    var forwardNavigator = createForwardNavigator(props.numberOfMonths === 1 || index === props.numberOfMonths - 1);
    var title = createTitle(monthMetaData, index);
    var dateViewGrid = createDateViewGrid(monthMetaData, weekDays, index);
    var header = props.headerTemplate ? props.headerTemplate() : null;
    var monthKey = monthMetaData.month + "-" + monthMetaData.year;
    var groupProps = mergeProps({
      className: cx("group")
    }, ptm("group"));
    var headerProps = mergeProps({
      className: cx("header")
    }, ptm("header"));
    return React3.createElement("div", _extends3({}, groupProps, {
      key: monthKey
    }), React3.createElement("div", _extends3({}, headerProps, {
      key: index
    }), header, backwardNavigator, title, forwardNavigator), dateViewGrid);
  };
  var createMonths = function createMonths2(monthsMetaData) {
    var groups = monthsMetaData.map(createMonth);
    var groupContainerProps = mergeProps({
      className: cx("groupContainer")
    }, ptm("groupContainer"));
    return React3.createElement("div", groupContainerProps, groups);
  };
  var createDateView = function createDateView2() {
    var viewDate = getViewDate();
    var monthsMetaData = createMonthsMeta(viewDate.getMonth(), viewDate.getFullYear());
    var months = createMonths(monthsMetaData);
    return months;
  };
  var monthPickerValues = function monthPickerValues2() {
    var monthPickerValues3 = [];
    var monthNamesShort = localeOption("monthNamesShort", props.locale);
    for (var i = 0; i <= 11; i++) {
      monthPickerValues3.push(monthNamesShort[i]);
    }
    return monthPickerValues3;
  };
  var yearPickerValues = function yearPickerValues2() {
    var yearPickerValues3 = [];
    var base = currentYear - currentYear % 10;
    for (var i = 0; i < 10; i++) {
      yearPickerValues3.push(base + i);
    }
    return yearPickerValues3;
  };
  var createMonthYearView = function createMonthYearView2() {
    var backwardNavigator = createBackwardNavigator(true);
    var forwardNavigator = createForwardNavigator(true);
    var yearElement = createTitleYearElement(getViewDate().getFullYear());
    var decade = createTitleDecadeElement();
    var groupContainerProps = mergeProps({
      className: cx("groupContainer")
    }, ptm("groupContainer"));
    var groupProps = mergeProps({
      className: cx("group")
    }, ptm("group"));
    var headerProps = mergeProps({
      className: cx("header")
    }, ptm("header"));
    var titleProps = mergeProps({
      className: cx("title")
    }, ptm("title"));
    return React3.createElement(React3.Fragment, null, React3.createElement("div", groupContainerProps, React3.createElement("div", groupProps, React3.createElement("div", headerProps, backwardNavigator, React3.createElement("div", titleProps, yearElement, decade), forwardNavigator))));
  };
  var createDatePicker = function createDatePicker2() {
    if (!props.timeOnly) {
      if (props.view === "date") {
        return createDateView();
      }
      return createMonthYearView();
    }
    return null;
  };
  var incrementIconProps = mergeProps(ptm("incrementIcon"));
  var decrementIconProps = mergeProps(ptm("decrementIcon"));
  var incrementIcon = IconUtils.getJSXIcon(props.incrementIcon || React3.createElement(ChevronUpIcon, incrementIconProps), _objectSpread({}, incrementIconProps), {
    props
  });
  var decrementIcon = IconUtils.getJSXIcon(props.decrementIcon || React3.createElement(ChevronDownIcon, decrementIconProps), _objectSpread({}, decrementIconProps), {
    props
  });
  var createHourPicker = function createHourPicker2() {
    var currentTime = getCurrentDateTime();
    var minute = doStepMinute(currentTime.getMinutes());
    var hour = currentTime.getHours();
    hour = minute > 59 ? hour + 1 : hour;
    if (props.hourFormat === "12") {
      if (hour === 0) {
        hour = 12;
      } else if (hour > 11 && hour !== 12) {
        hour = hour - 12;
      }
    }
    var hourProps = mergeProps(ptm("hour"));
    var _localeOptions6 = localeOptions(props.locale), nextHour = _localeOptions6.nextHour, prevHour = _localeOptions6.prevHour;
    var hourDisplay = hour < 10 ? "0" + hour : hour;
    var hourPickerProps = mergeProps({
      className: cx("hourPicker")
    }, ptm("hourPicker"));
    var incrementButtonProps = mergeProps({
      type: "button",
      className: cx("incrementButton"),
      "aria-label": nextHour,
      onMouseDown: function onMouseDown(e) {
        return onTimePickerElementMouseDown(e, 0, 1);
      },
      onMouseUp: onTimePickerElementMouseUp,
      onMouseLeave: onTimePickerElementMouseLeave,
      onKeyDown: function onKeyDown(e) {
        return onPickerKeyDown(e, 0, 1);
      },
      onKeyUp: onPickerKeyUp
    }, ptm("incrementButton"));
    var decrementButtonProps = mergeProps({
      type: "button",
      className: cx("decrementButton"),
      "aria-label": prevHour,
      onMouseDown: function onMouseDown(e) {
        return onTimePickerElementMouseDown(e, 0, -1);
      },
      onMouseUp: onTimePickerElementMouseUp,
      onMouseLeave: onTimePickerElementMouseLeave,
      onKeyDown: function onKeyDown(e) {
        return onPickerKeyDown(e, 0, -1);
      },
      onKeyUp: onPickerKeyUp
    }, ptm("decrementButton"));
    return React3.createElement("div", hourPickerProps, React3.createElement("button", incrementButtonProps, incrementIcon, React3.createElement(Ripple, null)), React3.createElement("span", hourProps, hourDisplay), React3.createElement("button", decrementButtonProps, decrementIcon, React3.createElement(Ripple, null)));
  };
  var createMinutePicker = function createMinutePicker2() {
    var currentTime = getCurrentDateTime();
    var minute = doStepMinute(currentTime.getMinutes());
    minute = minute > 59 ? minute - 60 : minute;
    var minuteProps = mergeProps(ptm("minute"));
    var _localeOptions7 = localeOptions(props.locale), nextMinute = _localeOptions7.nextMinute, prevMinute = _localeOptions7.prevMinute;
    var minuteDisplay = minute < 10 ? "0" + minute : minute;
    var minutePickerProps = mergeProps({
      className: cx("minutePicker")
    }, ptm("minutePicker"));
    var incrementButtonProps = mergeProps({
      type: "button",
      className: cx("incrementButton"),
      "aria-label": nextMinute,
      onMouseDown: function onMouseDown(e) {
        return onTimePickerElementMouseDown(e, 1, 1);
      },
      onMouseUp: onTimePickerElementMouseUp,
      onMouseLeave: onTimePickerElementMouseLeave,
      onKeyDown: function onKeyDown(e) {
        return onPickerKeyDown(e, 1, 1);
      },
      onKeyUp: onPickerKeyUp
    }, ptm("incrementButton"));
    var decrementButtonProps = mergeProps({
      type: "button",
      className: cx("decrementButton"),
      "aria-label": prevMinute,
      onMouseDown: function onMouseDown(e) {
        return onTimePickerElementMouseDown(e, 1, -1);
      },
      onMouseUp: onTimePickerElementMouseUp,
      onMouseLeave: onTimePickerElementMouseLeave,
      onKeyDown: function onKeyDown(e) {
        return onPickerKeyDown(e, 1, -1);
      },
      onKeyUp: onPickerKeyUp
    }, ptm("decrementButton"));
    return React3.createElement("div", minutePickerProps, React3.createElement("button", incrementButtonProps, incrementIcon, React3.createElement(Ripple, null)), React3.createElement("span", minuteProps, minuteDisplay), React3.createElement("button", decrementButtonProps, decrementIcon, React3.createElement(Ripple, null)));
  };
  var createSecondPicker = function createSecondPicker2() {
    if (props.showSeconds) {
      var currentTime = getCurrentDateTime();
      var _localeOptions8 = localeOptions(props.locale), nextSecond = _localeOptions8.nextSecond, prevSecond = _localeOptions8.prevSecond;
      var secondProps = mergeProps(ptm("second"));
      var second = currentTime.getSeconds();
      var secondDisplay = second < 10 ? "0" + second : second;
      var secondPickerProps = mergeProps({
        className: cx("secondPicker")
      }, ptm("secondPicker"));
      var incrementButtonProps = mergeProps({
        type: "button",
        className: cx("incrementButton"),
        "aria-label": nextSecond,
        onMouseDown: function onMouseDown(e) {
          return onTimePickerElementMouseDown(e, 2, 1);
        },
        onMouseUp: onTimePickerElementMouseUp,
        onMouseLeave: onTimePickerElementMouseLeave,
        onKeyDown: function onKeyDown(e) {
          return onPickerKeyDown(e, 2, 1);
        },
        onKeyUp: onPickerKeyUp
      }, ptm("incrementButton"));
      var decrementButtonProps = mergeProps({
        type: "button",
        className: cx("decrementButton"),
        "aria-label": prevSecond,
        onMouseDown: function onMouseDown(e) {
          return onTimePickerElementMouseDown(e, 2, -1);
        },
        onMouseUp: onTimePickerElementMouseUp,
        onMouseLeave: onTimePickerElementMouseLeave,
        onKeyDown: function onKeyDown(e) {
          return onPickerKeyDown(e, 2, -1);
        },
        onKeyUp: onPickerKeyUp
      }, ptm("decrementButton"));
      return React3.createElement("div", secondPickerProps, React3.createElement("button", incrementButtonProps, incrementIcon, React3.createElement(Ripple, null)), React3.createElement("span", secondProps, secondDisplay), React3.createElement("button", decrementButtonProps, decrementIcon, React3.createElement(Ripple, null)));
    }
    return null;
  };
  var createMiliSecondPicker = function createMiliSecondPicker2() {
    if (props.showMillisec) {
      var currentTime = getCurrentDateTime();
      var _localeOptions9 = localeOptions(props.locale), nextMilliSecond = _localeOptions9.nextMilliSecond, prevMilliSecond = _localeOptions9.prevMilliSecond;
      var millisecondProps = mergeProps(ptm("millisecond"));
      var millisecond = currentTime.getMilliseconds();
      var millisecondDisplay = millisecond < 100 ? (millisecond < 10 ? "00" : "0") + millisecond : millisecond;
      var millisecondPickerProps = mergeProps({
        className: cx("millisecondPicker")
      }, ptm("millisecondPicker"));
      var incrementButtonProps = mergeProps({
        type: "button",
        className: cx("incrementButton"),
        "aria-label": nextMilliSecond,
        onMouseDown: function onMouseDown(e) {
          return onTimePickerElementMouseDown(e, 3, 1);
        },
        onMouseUp: onTimePickerElementMouseUp,
        onMouseLeave: onTimePickerElementMouseLeave,
        onKeyDown: function onKeyDown(e) {
          return onPickerKeyDown(e, 3, 1);
        },
        onKeyUp: onPickerKeyUp
      }, ptm("incrementButton"));
      var decrementButtonProps = mergeProps({
        type: "button",
        className: cx("decrementButton"),
        "aria-label": prevMilliSecond,
        onMouseDown: function onMouseDown(e) {
          return onTimePickerElementMouseDown(e, 3, -1);
        },
        onMouseUp: onTimePickerElementMouseUp,
        onMouseLeave: onTimePickerElementMouseLeave,
        onKeyDown: function onKeyDown(e) {
          return onPickerKeyDown(e, 3, -1);
        },
        onKeyUp: onPickerKeyUp
      }, ptm("decrementButton"));
      return React3.createElement("div", millisecondPickerProps, React3.createElement("button", incrementButtonProps, incrementIcon, React3.createElement(Ripple, null)), React3.createElement("span", millisecondProps, millisecondDisplay), React3.createElement("button", decrementButtonProps, decrementIcon, React3.createElement(Ripple, null)));
    }
    return null;
  };
  var createAmPmPicker = function createAmPmPicker2() {
    if (props.hourFormat === "12") {
      var currentTime = getCurrentDateTime();
      var _localeOptions10 = localeOptions(props.locale), am = _localeOptions10.am, pm = _localeOptions10.pm;
      var hour = currentTime.getHours();
      var display = hour > 11 ? "PM" : "AM";
      var ampmProps = mergeProps(ptm("ampm"));
      var ampmPickerProps = mergeProps({
        className: cx("ampmPicker")
      }, ptm("ampmPicker"));
      var incrementButtonProps = mergeProps({
        type: "button",
        className: cx("incrementButton"),
        "aria-label": am,
        onClick: function onClick(e) {
          return toggleAmPm(e);
        }
      }, ptm("incrementButton"));
      var decrementButtonProps = mergeProps({
        type: "button",
        className: cx("decrementButton"),
        "aria-label": pm,
        onClick: function onClick(e) {
          return toggleAmPm(e);
        }
      }, ptm("decrementButton"));
      return React3.createElement("div", ampmPickerProps, React3.createElement("button", incrementButtonProps, incrementIcon, React3.createElement(Ripple, null)), React3.createElement("span", ampmProps, display), React3.createElement("button", decrementButtonProps, decrementIcon, React3.createElement(Ripple, null)));
    }
    return null;
  };
  var createSeparator = function createSeparator2(separator) {
    var separatorContainerProps = mergeProps({
      className: cx("separatorContainer")
    }, ptm("separatorContainer"));
    var separatorProps = mergeProps(ptm("separator"));
    return React3.createElement("div", separatorContainerProps, React3.createElement("span", separatorProps, separator));
  };
  var createTimePicker = function createTimePicker2() {
    if ((props.showTime || props.timeOnly) && currentView === "date") {
      var timePickerProps = mergeProps({
        className: cx("timePicker")
      }, ptm("timePicker"));
      return React3.createElement("div", timePickerProps, createHourPicker(), createSeparator(":"), createMinutePicker(), props.showSeconds && createSeparator(":"), createSecondPicker(), props.showMillisec && createSeparator("."), createMiliSecondPicker(), props.hourFormat === "12" && createSeparator(":"), createAmPmPicker());
    }
    return null;
  };
  var createInputElement = function createInputElement2() {
    if (!props.inline) {
      return React3.createElement(InputText, {
        ref: inputRef,
        id: props.inputId,
        name: props.name,
        type: "text",
        role: "combobox",
        className: classNames(props.inputClassName, cx("input", {
          context
        })),
        style: props.inputStyle,
        readOnly: props.readOnlyInput,
        disabled: props.disabled,
        required: props.required,
        autoComplete: "off",
        placeholder: props.placeholder,
        tabIndex: props.tabIndex,
        onInput: onUserInput,
        onFocus: onInputFocus,
        onBlur: onInputBlur,
        onKeyDown: onInputKeyDown,
        "aria-expanded": overlayVisibleState,
        "aria-autocomplete": "none",
        "aria-haspopup": "dialog",
        "aria-controls": panelId,
        "aria-labelledby": props.ariaLabelledBy,
        "aria-label": props.ariaLabel,
        inputMode: props.inputMode,
        tooltip: props.tooltip,
        tooltipOptions: props.tooltipOptions,
        pt: ptm("input"),
        unstyled: props.unstyled,
        __parentMetadata: {
          parent: metaData
        }
      });
    }
    return null;
  };
  var createButton = function createButton2() {
    if (props.showIcon) {
      return React3.createElement(Button, {
        type: "button",
        icon: props.icon || React3.createElement(CalendarIcon, null),
        onClick: onButtonClick,
        tabIndex: "-1",
        disabled: props.disabled,
        "aria-haspopup": "dialog",
        "aria-label": localeOption("chooseDate", props.locale),
        "aria-expanded": overlayVisibleState,
        "aria-controls": panelId,
        className: cx("dropdownButton"),
        pt: ptm("dropdownButton"),
        __parentMetadata: {
          parent: metaData
        }
      });
    }
    return null;
  };
  var createContent = function createContent2() {
    var input2 = createInputElement();
    var button = createButton();
    if (props.iconPos === "left") {
      return React3.createElement(React3.Fragment, null, button, input2);
    }
    return React3.createElement(React3.Fragment, null, input2, button);
  };
  var createButtonBar = function createButtonBar2() {
    if (props.showButtonBar) {
      var _localeOptions11 = localeOptions(props.locale), today = _localeOptions11.today, clear = _localeOptions11.clear, now = _localeOptions11.now;
      var nowDate = /* @__PURE__ */ new Date();
      var isHidden = props.minDate && props.minDate > nowDate || props.maxDate && props.maxDate < nowDate;
      var buttonbarProps = mergeProps({
        className: cx("buttonbar")
      }, ptm("buttonbar"));
      return React3.createElement("div", buttonbarProps, React3.createElement(Button, {
        type: "button",
        label: props.showTime ? now : today,
        onClick: onTodayButtonClick,
        onKeyDown: function onKeyDown(e) {
          return onContainerButtonKeydown(e);
        },
        className: classNames(props.todayButtonClassName, cx("todayButton")),
        pt: ptm("todayButton"),
        style: isHidden ? {
          visibility: "hidden"
        } : void 0
      }), React3.createElement(Button, {
        type: "button",
        label: clear,
        onClick: onClearButtonClick,
        onKeyDown: function onKeyDown(e) {
          return onContainerButtonKeydown(e);
        },
        className: classNames(props.clearButtonClassName, cx("clearButton")),
        pt: ptm("clearButton")
      }));
    }
    return null;
  };
  var createFooter = function createFooter2() {
    if (props.footerTemplate) {
      var _content3 = props.footerTemplate();
      var footerProps = mergeProps({
        className: cx("footer")
      }, ptm("footer"));
      return React3.createElement("div", footerProps, _content3);
    }
    return null;
  };
  var createMonthPicker = function createMonthPicker2() {
    if (currentView === "month") {
      var monthPickerProps = mergeProps({
        className: cx("monthPicker")
      }, ptm("monthPicker"));
      return React3.createElement("div", monthPickerProps, monthPickerValues().map(function(m, i) {
        var selected = isMonthSelected(i);
        var monthProps = mergeProps({
          className: cx("month", {
            isMonthSelected,
            isMonthYearDisabled,
            i,
            currentYear
          }),
          onClick: function onClick(event) {
            return onMonthSelect(event, i);
          },
          onKeyDown: function onKeyDown(event) {
            return onMonthCellKeydown(event, i);
          },
          "data-p-disabled": isMonthYearDisabled(i, currentYear),
          "data-p-highlight": selected
        }, ptm("month", {
          context: {
            month: m,
            monthIndex: i,
            selected,
            disabled: isMonthYearDisabled(i, currentYear)
          }
        }));
        return React3.createElement("span", _extends3({}, monthProps, {
          key: "month".concat(i + 1)
        }), m, selected && React3.createElement("div", {
          "aria-live": "polite",
          className: "p-hidden-accessible",
          "data-p-hidden-accessible": true,
          pt: ptm("hiddenMonth")
        }, m));
      }));
    }
    return null;
  };
  var createYearPicker = function createYearPicker2() {
    if (currentView === "year") {
      var yearPickerProps = mergeProps({
        className: cx("yearPicker")
      }, ptm("yearPicker"));
      return React3.createElement("div", yearPickerProps, yearPickerValues().map(function(y, i) {
        var selected = isYearSelected(y);
        var yearProps = mergeProps({
          className: cx("year", {
            isYearSelected,
            isMonthYearDisabled,
            y
          }),
          onClick: function onClick(event) {
            return onYearSelect(event, y);
          },
          onKeyDown: function onKeyDown(event) {
            return onYearCellKeydown(event, y);
          },
          "data-p-highlight": isYearSelected(y),
          "data-p-disabled": isMonthYearDisabled(-1, y)
        }, ptm("year", {
          context: {
            year: y,
            yearIndex: i,
            selected,
            disabled: isMonthYearDisabled(-1, y)
          }
        }));
        return React3.createElement("span", _extends3({}, yearProps, {
          key: "year".concat(i + 1)
        }), y, selected && React3.createElement("div", {
          "aria-live": "polite",
          className: "p-hidden-accessible",
          "data-p-hidden-accessible": true,
          pt: ptm("hiddenYear")
        }, y));
      }));
    }
    return null;
  };
  var panelClassName = classNames("p-datepicker p-component", props.panelClassName, {
    "p-datepicker-inline": props.inline,
    "p-disabled": props.disabled,
    "p-datepicker-timeonly": props.timeOnly,
    "p-datepicker-multiple-month": props.numberOfMonths > 1,
    "p-datepicker-monthpicker": currentView === "month",
    "p-datepicker-touch-ui": props.touchUI,
    "p-input-filled": context && context.inputStyle === "filled" || PrimeReact.inputStyle === "filled",
    "p-ripple-disabled": context && context.ripple === false || PrimeReact.ripple === false
  });
  var content = createContent();
  var datePicker = createDatePicker();
  var timePicker = createTimePicker();
  var buttonBar = createButtonBar();
  var footer = createFooter();
  var monthPicker = createMonthPicker();
  var yearPicker = createYearPicker();
  var isFilled = DomHandler.hasClass(inputRef.current, "p-filled") && inputRef.current.value !== "";
  var rootProps = mergeProps({
    id: props.id,
    className: classNames(props.className, cx("root", {
      focusedState,
      isFilled,
      panelVisible: visible
    })),
    style: props.style
  }, CalendarBase.getOtherProps(props), ptm("root"));
  return React3.createElement("span", _extends3({
    ref: elementRef
  }, rootProps), content, React3.createElement(CalendarPanel, {
    hostName: "Calendar",
    id: panelId,
    locale: props.locale,
    ref: overlayRef,
    className: panelClassName,
    style: props.panelStyle,
    appendTo: props.appendTo,
    inline: props.inline,
    onClick: onPanelClick,
    onMouseUp: onPanelMouseUp,
    "in": visible,
    onEnter: onOverlayEnter,
    onEntered: onOverlayEntered,
    onExit: onOverlayExit,
    onExited: onOverlayExited,
    transitionOptions: props.transitionOptions,
    ptm,
    cx
  }, datePicker, timePicker, monthPicker, yearPicker, buttonBar, footer));
}));
Calendar.displayName = "Calendar";
export {
  Calendar
};
//# sourceMappingURL=primereact_calendar.js.map
