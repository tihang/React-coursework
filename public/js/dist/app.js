(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        app: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/App.js", "vendors~app" ]);
    return checkDeferredModules();
})({
    "./assets/js/App.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Counter_Counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Counter/Counter.js */ "./assets/js/components/Counter/Counter.js");\n/* harmony import */ var _components_Immutable_Immutable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Immutable/Immutable.js */ "./assets/js/components/Immutable/Immutable.js");\n/* harmony import */ var _components_Counter_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Counter/Form */ "./assets/js/components/Counter/Form.js");\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Immutable_Immutable_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Counter_Form__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null));\n  }\n\n}\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById(\'app\'));\n\n//# sourceURL=webpack:///./assets/js/App.js?');
    },
    "./assets/js/components/Counter/Button.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Button; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Button extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n\n    this.toggleHOver = () => {\n      return this.setState({\n        hover: !this.state.hover\n      });\n    };\n\n    this.state = {\n      hover: false\n    };\n  }\n\n  render() {\n    const styleButtons = {\n      cursor: 'pointer',\n      width: '50%',\n      display: 'inline-block',\n      border: '3px solid black',\n      padding: '50px',\n      fontSize: '2rem',\n      fontWeight: '900',\n      textAlign: 'center',\n      transition: 'all .3s ease-in-out',\n      background: this.state.hover ? this.props.hoverColor : this.props.backgroundColor\n    };\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"button \".concat(this.props.action),\n      style: styleButtons,\n      onMouseEnter: this.toggleHOver,\n      onMouseLeave: this.toggleHOver,\n      onClick: this.props.trigger\n    }, this.props.children);\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Counter/Button.js?");
    },
    "./assets/js/components/Counter/Counter.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* unused harmony export default */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.js */ "./assets/js/components/Counter/Button.js");\n\n\nclass Counter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.doMinus = () => {\n      this.setState({\n        counter: this.state.counter - 1\n      });\n    };\n\n    this.doPlus = () => {\n      this.setState({\n        counter: this.state.counter + 1\n      });\n    };\n\n    this.counterAutorun = () => {\n      setInterval(() => {\n        this.setState({\n          counter: this.state.counter + 1\n        });\n      }, 1000);\n    };\n\n    this.state = {\n      status: \'manual\',\n      counter: 0\n    };\n  }\n\n  componentWillMount() {\n    console.log(\'component will mount started\');\n  }\n\n  componentDidMount() {\n    if (this.props.status == \'auto\') {\n      this.setState({\n        status: this.props.status\n      }, () => {\n        this.counterAutorun();\n      });\n    }\n  }\n\n  render() {\n    const styleCounterComp = {\n      maxWidth: \'400px\',\n      width: \'100%\',\n      margin: \'0 auto\'\n    };\n    const styleNumber = {\n      border: \'3px solid black\',\n      padding: \'20px\',\n      fontSize: \'2rem\',\n      fontWeight: \'900\',\n      textAlign: \'center\'\n    };\n    const styleButton = {\n      display: this.props.status == \'auto\' ? \'none\' : \'flex\'\n    };\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      id: "counter-comp",\n      style: styleCounterComp\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "number",\n      style: styleNumber\n    }, this.state.counter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "buttons",\n      style: styleButton\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {\n      trigger: this.doMinus,\n      backgroundColor: "white",\n      hoverColor: "red",\n      action: "minus"\n    }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {\n      trigger: this.doPlus,\n      backgroundColor: "white",\n      hoverColor: "green",\n      action: "plus"\n    }, "+")));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Counter/Counter.js?');
    },
    "./assets/js/components/Counter/Form.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Form extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.setUsername = event => {\n      this.setState({\n        username: event.target.value\n      }, () => {\n        console.log(this.state.username);\n      });\n    };\n\n    this.validateUsername = () => {\n      if (this.state.username.length < 3) {\n        return \'err-msg\';\n      } else {\n        return \'\';\n      }\n    };\n\n    this.state = {\n      username: \'\'\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      id: "form-validate"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      placeholder: "Enter username",\n      onChange: this.setUsername\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "err-box ".concat(this.validateUsername())\n    }, "Enter atleast 3 characters"));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Counter/Form.js?');
    },
    "./assets/js/components/Immutable/Immutable.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Immutable; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutability-helper */ \"./node_modules/immutability-helper/index.js\");\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Immutable extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {\n      // const newGrade = {\n      // \t...this.state.user.grades,\n      // \tgym: 'A'\n      // };\n      // const newNamesArr = {\n      // \t// names: [...this.state.names, 'Ramsey']\n      // \t// names: this.state.names.filter(name => name !== 'Mary')\n      // \tboth: [...this.state.names, ...this.state.teachers]\n      // };\n      // const newUser = Object.assign({}, this.state.user, {\n      // \tname: 'Jane',\n      // \tgrades: newGrade\n      // });\n      const newState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(this.state, {\n        background: {\n          $set: 'green'\n        },\n        names: {\n          $push: ['Sachin']\n        },\n        user: {\n          name: {\n            $set: 'Rajan'\n          }\n        }\n      });\n      console.log(this.state);\n      this.setState(newState, () => {\n        console.log(this.state);\n      });\n      console.log('clicked');\n    };\n\n    this.changeToActive = () => {\n      if (this.state.both[6] == 'Rai') {\n        return 'active';\n      } else {\n        return '';\n      }\n    };\n\n    this.state = {\n      background: 'black',\n      names: ['Joe', 'Mary', 'Lisa', 'Adam'],\n      teachers: ['Sam', 'Suzan', 'Rai'],\n      both: [],\n      user: {\n        name: 'Joe',\n        age: 23,\n        location: 'NYC',\n        grades: {\n          math: 'A',\n          science: 'B',\n          gym: 'C'\n        }\n      }\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"immutable-comp\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"box \".concat(this.changeToActive())\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"button\",\n      onClick: this.clickedBtn\n    }, \"Press me\"));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Immutable/Immutable.js?");
    }
});