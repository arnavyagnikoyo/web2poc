"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = Badge;
exports.Caption = Caption;
exports.CategoryBadge = CategoryBadge;
exports.HotelImage = HotelImage;
exports.Icon = Icon;
exports.IconBadge = IconBadge;
exports.Inter = Inter;
exports.PrimaryButton = PrimaryButton;
exports.Rating = Rating;
exports.Subititle1 = Subititle1;
exports.Subtitle2 = Subtitle2;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Subititle1(_ref) {
  var children = _ref.children,
      className = _ref.className,
      bold = _ref.bold;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-base ".concat(bold ? "font-bold" : "", " ").concat(className || "")
  }, " ", children, " ");
}

function Caption(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      bold = _ref2.bold;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm  text-amber-dd ".concat(bold ? "font-bold" : "", " ").concat(className || "")
  }, " ", children, " ");
}

function CategoryBadge(_ref3) {
  var children = _ref3.children,
      className = _ref3.className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-xs  px-s py-xs bg-asphalt-light  ".concat(className || "")
  }, " ", children, " ");
}

function Badge(_ref4) {
  var children = _ref4.children,
      className = _ref4.className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-xs  px-s py-xs bg-amber-light text-amber-darker  ".concat(className || "")
  }, children);
}

function Rating(_ref5) {
  var children = _ref5.children,
      className = _ref5.className,
      bold = _ref5.bold;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center ".concat(bold ? "font-bold" : "", " ").concat(className || "")
  }, /*#__PURE__*/_react.default.createElement(Icon, {
    icon: "star",
    className: "text-emerald text-m inline-block mr-m"
  }), /*#__PURE__*/_react.default.createElement(Subtitle2, null, "2.5 (245)"));
}

function IconBadge(_ref6) {
  var icon = _ref6.icon,
      className = _ref6.className,
      children = _ref6.children;
  return /*#__PURE__*/_react.default.createElement(Badge, {
    className: "flex items-center ".concat(className)
  }, /*#__PURE__*/_react.default.createElement(Icon, {
    className: "mr-0",
    icon: icon
  }), /*#__PURE__*/_react.default.createElement(Caption, {
    className: "ml-m text-amber-darker"
  }, children));
}

function Subtitle2(_ref7) {
  var children = _ref7.children,
      className = _ref7.className,
      bold = _ref7.bold;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-m ".concat(bold ? "font-bold" : "", " ").concat(className || "")
  }, " ", children, " ");
}

function Inter(_ref8) {
  var children = _ref8.children,
      className = _ref8.className,
      bold = _ref8.bold;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm ".concat(bold ? "font-bold" : "", " ").concat(className || "")
  }, " ", children, " ");
}

function Icon(_ref9) {
  var icon = _ref9.icon,
      className = _ref9.className;
  return /*#__PURE__*/_react.default.createElement("i", {
    class: "fa fa-".concat(icon, " mr-m ").concat(className)
  });
}

function HotelImage(_ref10) {
  var src = _ref10.src,
      Multiplesrc = _ref10.Multiplesrc;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "snap-mandatory snap-x flex overflow-x-auto overflow-hidden md:h-full md:w-80 rounded-lg"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    className: " snap-center h-auto w-full object-cover  "
  }));
}

function PrimaryButton(_ref11) {
  var children = _ref11.children,
      className = _ref11.className,
      bold = _ref11.bold;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center text-base bg-amber-darker text-[white] font-semibold rounded-lg px-l py-m ".concat(bold ? "font-bold" : "", " ").concat(className || "")
  }, " ", children, " ");
}