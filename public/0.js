(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AuthorizationModal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/AuthorizationModal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AuthorizationModal",
  data: function data() {
    return {
      user: {
        login: "",
        email: "",
        password: "",
        isAdmin: false
      }
    };
  },
  props: {
    isLogin: {
      type: Boolean,
      "default": true
    }
  },
  created: function created() {
    console.error(this.isLogin);
  },
  computed: {
    title: function title() {
      return this.isLogin ? "Авторизация" : "Регистрация";
    }
  },
  methods: {
    tryToAuthorize: function tryToAuthorize() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var route;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                route = _this.isLogin ? 'login' : 'registration';
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("api/".concat(route), {
                  login: _this.user.login,
                  email: _this.user.email,
                  password: _this.user.password
                }).then(function (resp) {
                  localStorage.setItem("api_token", resp.data.access_token);

                  _this.$store.commit('ASSIGN');
                })["catch"](function (err) {
                  console.log(err);
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/NavBar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/NavBar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_AuthorizationModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/AuthorizationModal */ "./resources/js/Components/AuthorizationModal.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "NavBar",
  data: function data() {
    return {
      isLogin: true
    };
  },
  components: {
    AuthorizationModal: _Components_AuthorizationModal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    changeState: function changeState(state) {
      this.isLogin = state;
    },
    logout: function logout() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                localStorage.clear();

                _this.$store.commit("clearStore");

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])({
    isAuthorized: function isAuthorized(state) {
      return state.isAuthorized;
    }
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Product.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Product.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Product",
  props: ['item'],
  methods: {
    createTransaction: function createTransaction() {
      console.warn(this.item);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    isAuthorized: function isAuthorized(state) {
      return state.isAuthorized;
    }
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/ProductsList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/ProductsList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ "./resources/js/Components/Product.vue");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductsList",
  components: {
    Product: _Product__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      products: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get("/api/products").then(function (resp) {
      _this.products = resp.data.products;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/WindowFooter.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/WindowFooter.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WindowFooter"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Store.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Store.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_ProductsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/ProductsList */ "./resources/js/Components/ProductsList.vue");
/* harmony import */ var _Components_WindowFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/WindowFooter */ "./resources/js/Components/WindowFooter.vue");
/* harmony import */ var _Components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/NavBar */ "./resources/js/Components/NavBar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Store",
  components: {
    NavBar: _Components_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    WindowFooter: _Components_WindowFooter__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProductsList: _Components_ProductsList__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])({
    isAuthorized: function isAuthorized(state) {
      return state.isAuthorized;
    },
    apiKey: function apiKey(state) {
      return state.apiKey;
    }
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AuthorizationModal.vue?vue&type=template&id=41580582&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/AuthorizationModal.vue?vue&type=template&id=41580582&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "exampleModal",
        tabindex: "-1",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "modal-header" }, [
            _c(
              "h5",
              {
                staticClass: "modal-title",
                attrs: { id: "exampleModalLabel" }
              },
              [_vm._v(_vm._s(_vm.title))]
            ),
            _vm._v(" "),
            _c("button", {
              staticClass: "btn-close",
              attrs: {
                type: "button",
                "data-bs-dismiss": "modal",
                "aria-label": "Close"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Логин")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.login,
                    expression: "user.login"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.user.login },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "login", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            !_vm.isLogin
              ? _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Почта")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.email,
                        expression: "user.email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "email" },
                    domProps: { value: _vm.user.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "email", $event.target.value)
                      }
                    }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Пароль")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.password,
                    expression: "user.password"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "password" },
                domProps: { value: _vm.user.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "password", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "d-grid gap-2" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.tryToAuthorize()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.title))]
              )
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group form-check" }, [
      _c("input", {
        staticClass: "form-check-input",
        attrs: { type: "checkbox" }
      }),
      _vm._v(" "),
      _c("label", { staticClass: "form-check-label" }, [
        _vm._v("Войти как администратор")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/NavBar.vue?vue&type=template&id=3df829fb&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/NavBar.vue?vue&type=template&id=3df829fb&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    { staticClass: "navbar navbar-expand-lg bg-light" },
    [
      _c("div", { staticClass: "container-fluid" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse navbar-collapse",
            attrs: { id: "navbarSupportedContent" }
          },
          [
            !_vm.isAuthorized
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-success me-2",
                    attrs: {
                      "data-bs-toggle": "modal",
                      "data-bs-target": "#exampleModal"
                    },
                    on: {
                      click: function($event) {
                        return _vm.changeState(false)
                      }
                    }
                  },
                  [_vm._v("Регистрация")]
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.isAuthorized
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-success me-2",
                    attrs: {
                      "data-bs-toggle": "modal",
                      "data-bs-target": "#exampleModal"
                    },
                    on: {
                      click: function($event) {
                        return _vm.changeState(true)
                      }
                    }
                  },
                  [_vm._v("Авторизация")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isAuthorized
              ? _c(
                  "router-link",
                  {
                    staticClass: "btn btn-outline-success me-2",
                    attrs: { to: "/admin", tag: "button" }
                  },
                  [_vm._v("Админ панель")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isAuthorized
              ? _c(
                  "router-link",
                  {
                    staticClass: "btn btn-outline-success me-2",
                    attrs: { to: "/account", tag: "button" }
                  },
                  [_vm._v("Кабинет")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isAuthorized
              ? _c(
                  "router-link",
                  {
                    staticClass: "btn btn-outline-success me-2",
                    attrs: { to: "/bin", tag: "button" }
                  },
                  [_vm._v("Корзина")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isAuthorized
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-success me-2",
                    on: {
                      click: function($event) {
                        return _vm.logout()
                      }
                    }
                  },
                  [_vm._v("Выход")]
                )
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("authorization-modal", { attrs: { "is-login": _vm.isLogin } })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Product.vue?vue&type=template&id=a444da18&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Product.vue?vue&type=template&id=a444da18&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card", staticStyle: { width: "18rem" } }, [
      _c("img", {
        staticClass: "card-img-top",
        attrs: { src: "candy/" + _vm.item.image, alt: "" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("h5", { staticClass: "card-title" }, [
          _vm._v(_vm._s(_vm.item.name))
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "card-text" }, [
          _vm._v(_vm._s(_vm.item.amount))
        ]),
        _vm._v(" "),
        _vm.isAuthorized
          ? _c(
              "button",
              {
                staticClass: "btn btn-primary",
                on: {
                  click: function($event) {
                    return _vm.createTransaction()
                  }
                }
              },
              [_vm._v("В корзину")]
            )
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/ProductsList.vue?vue&type=template&id=7181c226&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/ProductsList.vue?vue&type=template&id=7181c226&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.products, function(item) {
      return _c("product", { attrs: { item: item } })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/WindowFooter.vue?vue&type=template&id=f2755014&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/WindowFooter.vue?vue&type=template&id=f2755014&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "footer",
      { staticClass: "text-center text-lg-start bg-light text-muted" },
      [
        _c("section", { staticClass: "mt-5" }, [
          _c(
            "div",
            { staticClass: "container text-center text-md-start mt-5" },
            [
              _c("div", { staticClass: "row mt-3" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-5"
                  },
                  [
                    _c("h6", { staticClass: "text-uppercase fw-bold mb-4" }, [
                      _vm._v(
                        "\n                        Products\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        { staticClass: "text-reset", attrs: { href: "#!" } },
                        [_vm._v("CandyStore")]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-5"
                  },
                  [
                    _c("h6", { staticClass: "text-uppercase fw-bold mb-4" }, [
                      _vm._v(
                        "\n                        Contact\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          staticClass: "fas fa-home me-3",
                          attrs: { href: "https://vk.com/alchemic__28" }
                        },
                        [_vm._v("VK")]
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Store.vue?vue&type=template&id=695dbef0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Store.vue?vue&type=template&id=695dbef0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "store" },
    [
      _c("nav-bar", { staticClass: "mb-2" }),
      _vm._v(" "),
      _c("products-list", { staticClass: "container" }),
      _vm._v(" "),
      _c("window-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/AuthorizationModal.vue":
/*!********************************************************!*\
  !*** ./resources/js/Components/AuthorizationModal.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthorizationModal_vue_vue_type_template_id_41580582_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthorizationModal.vue?vue&type=template&id=41580582&scoped=true& */ "./resources/js/Components/AuthorizationModal.vue?vue&type=template&id=41580582&scoped=true&");
/* harmony import */ var _AuthorizationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthorizationModal.vue?vue&type=script&lang=js& */ "./resources/js/Components/AuthorizationModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthorizationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthorizationModal_vue_vue_type_template_id_41580582_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthorizationModal_vue_vue_type_template_id_41580582_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "41580582",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/AuthorizationModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/AuthorizationModal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/AuthorizationModal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorizationModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AuthorizationModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/AuthorizationModal.vue?vue&type=template&id=41580582&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Components/AuthorizationModal.vue?vue&type=template&id=41580582&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizationModal_vue_vue_type_template_id_41580582_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorizationModal.vue?vue&type=template&id=41580582&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AuthorizationModal.vue?vue&type=template&id=41580582&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizationModal_vue_vue_type_template_id_41580582_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizationModal_vue_vue_type_template_id_41580582_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/NavBar.vue":
/*!********************************************!*\
  !*** ./resources/js/Components/NavBar.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBar_vue_vue_type_template_id_3df829fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.vue?vue&type=template&id=3df829fb&scoped=true& */ "./resources/js/Components/NavBar.vue?vue&type=template&id=3df829fb&scoped=true&");
/* harmony import */ var _NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.vue?vue&type=script&lang=js& */ "./resources/js/Components/NavBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavBar_vue_vue_type_template_id_3df829fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavBar_vue_vue_type_template_id_3df829fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3df829fb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/NavBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/NavBar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/NavBar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/NavBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/NavBar.vue?vue&type=template&id=3df829fb&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Components/NavBar.vue?vue&type=template&id=3df829fb&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_3df829fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=template&id=3df829fb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/NavBar.vue?vue&type=template&id=3df829fb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_3df829fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_3df829fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/Product.vue":
/*!*********************************************!*\
  !*** ./resources/js/Components/Product.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_a444da18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=a444da18&scoped=true& */ "./resources/js/Components/Product.vue?vue&type=template&id=a444da18&scoped=true&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/Components/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_a444da18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_a444da18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a444da18",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Product.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Components/Product.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Product.vue?vue&type=template&id=a444da18&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Components/Product.vue?vue&type=template&id=a444da18&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_a444da18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=a444da18&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Product.vue?vue&type=template&id=a444da18&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_a444da18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_a444da18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/ProductsList.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/ProductsList.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductsList_vue_vue_type_template_id_7181c226_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsList.vue?vue&type=template&id=7181c226&scoped=true& */ "./resources/js/Components/ProductsList.vue?vue&type=template&id=7181c226&scoped=true&");
/* harmony import */ var _ProductsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsList.vue?vue&type=script&lang=js& */ "./resources/js/Components/ProductsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductsList_vue_vue_type_template_id_7181c226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductsList_vue_vue_type_template_id_7181c226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7181c226",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/ProductsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/ProductsList.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/ProductsList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/ProductsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/ProductsList.vue?vue&type=template&id=7181c226&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Components/ProductsList.vue?vue&type=template&id=7181c226&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsList_vue_vue_type_template_id_7181c226_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsList.vue?vue&type=template&id=7181c226&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/ProductsList.vue?vue&type=template&id=7181c226&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsList_vue_vue_type_template_id_7181c226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsList_vue_vue_type_template_id_7181c226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/WindowFooter.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/WindowFooter.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WindowFooter_vue_vue_type_template_id_f2755014_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WindowFooter.vue?vue&type=template&id=f2755014&scoped=true& */ "./resources/js/Components/WindowFooter.vue?vue&type=template&id=f2755014&scoped=true&");
/* harmony import */ var _WindowFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WindowFooter.vue?vue&type=script&lang=js& */ "./resources/js/Components/WindowFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WindowFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WindowFooter_vue_vue_type_template_id_f2755014_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WindowFooter_vue_vue_type_template_id_f2755014_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f2755014",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/WindowFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/WindowFooter.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/WindowFooter.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WindowFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./WindowFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/WindowFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WindowFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/WindowFooter.vue?vue&type=template&id=f2755014&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Components/WindowFooter.vue?vue&type=template&id=f2755014&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WindowFooter_vue_vue_type_template_id_f2755014_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./WindowFooter.vue?vue&type=template&id=f2755014&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/WindowFooter.vue?vue&type=template&id=f2755014&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WindowFooter_vue_vue_type_template_id_f2755014_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WindowFooter_vue_vue_type_template_id_f2755014_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Store.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/Store.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Store_vue_vue_type_template_id_695dbef0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store.vue?vue&type=template&id=695dbef0&scoped=true& */ "./resources/js/Pages/Store.vue?vue&type=template&id=695dbef0&scoped=true&");
/* harmony import */ var _Store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Store.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Store_vue_vue_type_template_id_695dbef0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Store_vue_vue_type_template_id_695dbef0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "695dbef0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Store.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Store.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Store.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Store.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Store.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Store.vue?vue&type=template&id=695dbef0&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Store.vue?vue&type=template&id=695dbef0&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_template_id_695dbef0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Store.vue?vue&type=template&id=695dbef0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Store.vue?vue&type=template&id=695dbef0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_template_id_695dbef0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_template_id_695dbef0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);