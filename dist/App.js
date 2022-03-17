"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TypoGraphy = require("./TypoGraphy");

require("./App.css");

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App md:justify-center flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-l text-left lg:flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative md:mr-xl"
  }, /*#__PURE__*/React.createElement(_TypoGraphy.HotelImage, {
    src: "https://images.oyoroomscdn.com/uploads/hotel_image/113667/medium/16ca7ff2bac75f5d.JPG",
    Multiplesrc: ["https://images.oyoroomscdn.com/uploads/hotel_image/112624/medium/da7d592521f80a71.jpg", "https://images.oyoroomscdn.com/uploads/hotel_image/112624/medium/9b09939f6cd57acb.jpg", "https://images.oyoroomscdn.com/uploads/hotel_image/112624/medium/ae1d75e9d96e4c42.jpg", "https://images.oyoroomscdn.com/uploads/hotel_image/112624/medium/154511f7e7d8726a.jpg", "https://images.oyoroomscdn.com/uploads/hotel_image/112624/medium/9d259e48c918471a.jpg"]
  }), /*#__PURE__*/React.createElement(_TypoGraphy.CategoryBadge, {
    className: "absolute top-m left-m"
  }, "Townhouse")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex mt-m items-center"
  }, /*#__PURE__*/React.createElement(_TypoGraphy.Rating, null), /*#__PURE__*/React.createElement(_TypoGraphy.IconBadge, {
    className: "ml-m",
    icon: "check"
  }, "Wizard"), /*#__PURE__*/React.createElement(_TypoGraphy.IconBadge, {
    className: "ml-m",
    icon: "check"
  }, "Vaccinated staff")), /*#__PURE__*/React.createElement(_TypoGraphy.Subititle1, {
    className: "mt-m text-amber-darker"
  }, "OYO townhouse 057 Gujranwala Town"), /*#__PURE__*/React.createElement(_TypoGraphy.Caption, {
    className: "mt-s"
  }, "2.4km \xB7 Vikaspuri, Delhi"), /*#__PURE__*/React.createElement(_TypoGraphy.Subtitle2, {
    className: "mt-m text-crimson"
  }, /*#__PURE__*/React.createElement(_TypoGraphy.Icon, {
    icon: "bolt",
    className: "mr-s"
  }), "900+ people booked this OYO in last 6 months"), /*#__PURE__*/React.createElement(_TypoGraphy.Subtitle2, {
    className: "mt-m text-lavender"
  }, /*#__PURE__*/React.createElement(_TypoGraphy.Icon, {
    icon: "snowflake-o",
    className: "mr-s"
  }), "Room Sizes are 20% bigger than average"), /*#__PURE__*/React.createElement(_TypoGraphy.Caption, {
    className: "mt-m"
  }, "\u20B93,600 total for 3 nights, 1 deluxe room"), /*#__PURE__*/React.createElement("div", {
    className: "mt-s flex items-center"
  }, /*#__PURE__*/React.createElement(_TypoGraphy.Subititle1, null, "\u20B9980"), /*#__PURE__*/React.createElement(_TypoGraphy.Caption, {
    className: "ml-s"
  }, "+ taxes, per room per night"), /*#__PURE__*/React.createElement(_TypoGraphy.Inter, {
    className: "ml-s"
  }, "\u20B91960"), /*#__PURE__*/React.createElement(_TypoGraphy.Caption, {
    className: "text-sky-dd ml-s"
  }, "50% off")), /*#__PURE__*/React.createElement(_TypoGraphy.PrimaryButton, {
    className: " mt-m"
  }, "Book Now"))));
}

var _default = App;
exports.default = _default;