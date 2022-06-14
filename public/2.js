(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AdminPanel.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/AdminPanel.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "AdminPanel",
  data: function data() {
    return {
      products: [],
      users: [],
      transactions: [],
      product: {
        name: "",
        image: "",
        amount: 0.00,
        filling: false,
        description: "",
        imageFile: ""
      },
      user: {
        login: "",
        email: "",
        password: "",
        isAdmin: false
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])({
    apiKey: function apiKey(state) {
      return state.apiKey;
    }
  })),
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/all/transaction', {
                headers: {
                  Authorization: "Bearer ".concat(_this.apiKey)
                }
              });

            case 2:
              _this.transactions = _context.sent;
              _this.transactions = _this.transactions.data.transactions;
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/products', {
                headers: {
                  Authorization: "Bearer ".concat(_this.apiKey)
                }
              });

            case 6:
              _this.products = _context.sent;
              _context.next = 9;
              return _this.products.data.products;

            case 9:
              _this.products = _context.sent;
              _context.next = 12;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/users', {
                headers: {
                  Authorization: "Bearer ".concat(_this.apiKey)
                }
              });

            case 12:
              _this.users = _context.sent;
              _context.next = 15;
              return _this.users.data.users;

            case 15:
              _this.users = _context.sent;

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    imageSelected: function imageSelected(e, item) {
      console.log("hello");
      item.image = e.target.files[0].name;
      item.imageFile = e.target.files[0];
    },
    deleteItem: function deleteItem(id, type) {
      switch (type) {
        case 'transaction':
          axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/api/transaction', {
            headers: {
              Authorization: "Bearer ".concat(this.apiKey)
            },
            params: {
              id: id
            }
          });
          break;

        case 'user':
          axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/api/user', {
            headers: {
              Authorization: "Bearer ".concat(this.apiKey)
            },
            params: {
              id: id
            }
          });
          break;

        case 'product':
          axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/api/product', {
            headers: {
              Authorization: "Bearer ".concat(this.apiKey)
            },
            params: {
              id: id
            }
          });
          break;
      }
    },
    updateItem: function updateItem(item, type) {
      console.error(item);

      switch (type) {
        case 'user':
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/api/user', {
            id: item.id,
            login: item.login,
            email: item.email,
            password: item.password,
            isAdmin: item.isAdmin
          }, {
            headers: {
              Authorization: "Bearer ".concat(this.apiKey)
            }
          });
          break;

        case 'product':
          var fd = new FormData();
          fd.append('id', item.id);
          fd.append('name', item.name);
          fd.append('amount', item.amount);
          fd.append('description', item.description);
          fd.append('image', item.image);
          fd.append('filling', Number(item.filling));
          fd.append('image_file', item.imageFile);
          console.error(fd.get('image_file'));
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/update/product", fd, {
            headers: {
              Authorization: "Bearer ".concat(this.apiKey),
              'Content-Type': 'multipart/form-data'
            }
          })["catch"](function (e) {
            console.error(e);
          });
          break;
      }
    },
    addItem: function addItem(type) {
      var _this2 = this;

      switch (type) {
        case 'user':
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('/api/addUser', {
            login: this.user.login,
            password: this.user.password,
            email: this.user.email,
            isAdmin: this.user.isAdmin
          }, {
            headers: {
              Authorization: "Bearer ".concat(this.apiKey)
            }
          }).then(function (resp) {
            _this2.users.push(_this2.user);
          });
          break;

        case 'product':
          console.warn(this.product);
          var fd = new FormData();
          fd.append('name', this.product.name);
          fd.append('amount', this.product.amount);
          fd.append('description', this.product.description);
          fd.append('image', this.product.image);
          fd.append('filling', Number(this.product.filling));
          fd.append('image_file', this.product.imageFile);
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/addProduct', fd, {
            headers: {
              Authorization: "Bearer ".concat(this.apiKey)
            }
          }).then(function (resp) {
            _this2.products.push(_this2.product);
          });
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AdminPanel.vue?vue&type=template&id=632fd3de&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/AdminPanel.vue?vue&type=template&id=632fd3de&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "adminPanel" }, [
    _c("h1", [_vm._v("Продукты")]),
    _vm._v(" "),
    _c("table", { staticClass: "table table-bordered mb-5" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        [
          _c("tr", [
            _c("th"),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.product.name,
                    expression: "product.name"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: _vm.product.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.product, "name", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.product.description,
                    expression: "product.description"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: _vm.product.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.product, "description", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.product.amount,
                    expression: "product.amount"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: _vm.product.amount },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.product, "amount", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.product.filling,
                    expression: "product.filling"
                  }
                ],
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.product.filling)
                    ? _vm._i(_vm.product.filling, null) > -1
                    : _vm.product.filling
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.product.filling,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(_vm.product, "filling", $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.product,
                            "filling",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.product, "filling", $$c)
                    }
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.product.image))]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "mb-3" }, [
                _c(
                  "label",
                  {
                    staticClass: "form-label btn btn-primary",
                    attrs: { for: "image_input_product}" }
                  },
                  [_vm._v("Выбрать")]
                ),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control form-control-sm",
                  staticStyle: { display: "none" },
                  attrs: { id: "image_input_product}", type: "file" },
                  on: {
                    change: function($event) {
                      return _vm.imageSelected($event, _vm.product)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("td", [
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-success mb-1",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.addItem("product")
                    }
                  }
                },
                [_vm._v("Добавить")]
              )
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.products, function(item, index) {
            return [
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [_vm._v(_vm._s(index))]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: item.name,
                        expression: "item.name"
                      }
                    ],
                    attrs: { type: "text" },
                    domProps: { value: item.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(item, "name", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: item.description,
                        expression: "item.description"
                      }
                    ],
                    attrs: { type: "text" },
                    domProps: { value: item.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(item, "description", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: item.amount,
                        expression: "item.amount"
                      }
                    ],
                    attrs: { type: "text" },
                    domProps: { value: item.amount },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(item, "amount", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: item.filling,
                        expression: "item.filling"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(item.filling)
                        ? _vm._i(item.filling, null) > -1
                        : item.filling
                    },
                    on: {
                      change: function($event) {
                        var $$a = item.filling,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(item, "filling", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                item,
                                "filling",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(item, "filling", $$c)
                        }
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.image))]),
                _vm._v(" "),
                _c("td", [
                  _c("div", { staticClass: "mb-3" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-label btn btn-primary",
                        attrs: { for: "image_input_" + index }
                      },
                      [_vm._v("Выбрать")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control form-control-sm",
                      staticStyle: { display: "none" },
                      attrs: { id: "image_input_" + index, type: "file" },
                      on: {
                        change: function($event) {
                          return _vm.imageSelected($event, item)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-primary mb-1",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.updateItem(item, "product")
                        }
                      }
                    },
                    [_vm._v("Сохранить изменения")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-danger",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.deleteItem(item.id, "product")
                        }
                      }
                    },
                    [_vm._v("Удалить")]
                  )
                ])
              ])
            ]
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c("h1", [_vm._v("Пользователи")]),
    _vm._v(" "),
    _c("table", { staticClass: "table table-bordered mb-5" }, [
      _vm._m(1),
      _vm._v(" "),
      _c(
        "tbody",
        [
          _c("tr", [
            _c("th"),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.login,
                    expression: "user.login"
                  }
                ],
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
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.email,
                    expression: "user.email"
                  }
                ],
                attrs: { type: "text" },
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
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.password,
                    expression: "user.password"
                  }
                ],
                attrs: { type: "text" },
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
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.isAdmin,
                    expression: "user.isAdmin"
                  }
                ],
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.user.isAdmin)
                    ? _vm._i(_vm.user.isAdmin, null) > -1
                    : _vm.user.isAdmin
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.user.isAdmin,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(_vm.user, "isAdmin", $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.user,
                            "isAdmin",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.user, "isAdmin", $$c)
                    }
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-success mb-1",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.addItem("user")
                    }
                  }
                },
                [_vm._v("Добавить")]
              )
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.users, function(item, index) {
            return [
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [_vm._v(_vm._s(index))]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: item.login,
                        expression: "item.login"
                      }
                    ],
                    attrs: { type: "text" },
                    domProps: { value: item.login },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(item, "login", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: item.email,
                        expression: "item.email"
                      }
                    ],
                    attrs: { type: "text" },
                    domProps: { value: item.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(item, "email", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: item.password,
                        expression: "item.password"
                      }
                    ],
                    attrs: { type: "text" },
                    domProps: { value: item.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(item, "password", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: item.isAdmin,
                        expression: "item.isAdmin"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(item.isAdmin)
                        ? _vm._i(item.isAdmin, null) > -1
                        : item.isAdmin
                    },
                    on: {
                      change: function($event) {
                        var $$a = item.isAdmin,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(item, "isAdmin", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                item,
                                "isAdmin",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(item, "isAdmin", $$c)
                        }
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-primary mb-1",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.updateItem(item, "user")
                        }
                      }
                    },
                    [_vm._v("Сохранить изменения")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-danger",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.deleteItem(item.id, "user")
                        }
                      }
                    },
                    [_vm._v("Удалить")]
                  )
                ])
              ])
            ]
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c("h1", [_vm._v("Транзакции")]),
    _vm._v(" "),
    _c(
      "table",
      { staticClass: "table table-bordered mb-5" },
      [
        _vm._m(2),
        _vm._v(" "),
        _vm._l(_vm.transactions, function(item, index) {
          return _c("tbody", { key: index }, [
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [_vm._v(_vm._s(index))]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: item.user_id,
                      expression: "item.user_id"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: item.user_id },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(item, "user_id", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: item.product_id,
                      expression: "item.product_id"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: item.product_id },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(item, "product_id", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value:
                        item.status === "COMPLETED"
                          ? "Завершённая"
                          : "Незавершённая",
                      expression:
                        "item.status === 'COMPLETED' ? 'Завершённая' : 'Незавершённая'"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: {
                    value:
                      item.status === "COMPLETED"
                        ? "Завершённая"
                        : "Незавершённая"
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        item,
                        "status === 'COMPLETED' ? 'Завершённая' : 'Незавершённая'",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: item.created_at,
                      expression: "item.created_at"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: item.created_at },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(item, "created_at", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-danger",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.deleteItem(item.id, "transaction")
                      }
                    }
                  },
                  [_vm._v("Удалить")]
                )
              ])
            ])
          ])
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Название")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Описание")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Цена")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Начинка")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Изображение")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [
          _vm._v("Выбрать новое изображение")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Логин")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Почта")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Пароль")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Администратор")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Номре клиента")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Номер продукта")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Статус")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Дата создания")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/AdminPanel.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/AdminPanel.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminPanel_vue_vue_type_template_id_632fd3de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminPanel.vue?vue&type=template&id=632fd3de&scoped=true& */ "./resources/js/Pages/AdminPanel.vue?vue&type=template&id=632fd3de&scoped=true&");
/* harmony import */ var _AdminPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminPanel.vue?vue&type=script&lang=js& */ "./resources/js/Pages/AdminPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminPanel_vue_vue_type_template_id_632fd3de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminPanel_vue_vue_type_template_id_632fd3de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "632fd3de",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/AdminPanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/AdminPanel.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/AdminPanel.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AdminPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/AdminPanel.vue?vue&type=template&id=632fd3de&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/AdminPanel.vue?vue&type=template&id=632fd3de&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPanel_vue_vue_type_template_id_632fd3de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminPanel.vue?vue&type=template&id=632fd3de&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AdminPanel.vue?vue&type=template&id=632fd3de&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPanel_vue_vue_type_template_id_632fd3de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPanel_vue_vue_type_template_id_632fd3de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);