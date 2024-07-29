"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
require("./App.css");
// import MyButton from './Button';
var MyButton = function (_a) {
    var count = _a.count, setCount = _a.setCount;
    return react_1["default"].createElement("button", { onClick: function () { return setCount(count + 1); } },
        "count is ",
        count);
};
function App(_a) {
    var c = _a.c, sC = _a.sC, m = _a.m;
    var _b = react_2.useState(0), count = _b[0], setCount = _b[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("a", { href: "https://vitejs.dev", target: "_blank" }),
            react_1["default"].createElement("a", { href: "https://react.dev", target: "_blank" })),
        react_1["default"].createElement("h1", null, "Vite + React"),
        react_1["default"].createElement("div", { className: "card" },
            react_1["default"].createElement("p", null,
                "Edit ",
                react_1["default"].createElement("code", null, "src/App.tsx"),
                " and save to test HMR")),
        react_1["default"].createElement("p", { className: "read-the-docs" }, "Click on the Vite and React logos to learn more")));
}
exports["default"] = App;
