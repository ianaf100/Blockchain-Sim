function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\r\n\r\n<mat-toolbar color=\"primary\">\r\n  <span class=\"fill\"></span>\r\n  <span>{{title}}</span>\r\n</mat-toolbar>\r\n\r\n<div id=\"title\">\r\n  <h2 class=\"mat-h2\">Ian's Blockchain Simulator</h2>\r\n</div>\r\n\r\n<app-options></app-options> \r\n<app-blockchain></app-blockchain>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/block/block.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/block/block.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlockBlockComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card \r\n    [ngClass]=\"{\r\n        'good-status' : isValid,\r\n        'bad-status' : isValid == false\r\n    }\">\r\n    <mat-card-title>Block {{count}}</mat-card-title>\r\n    <mat-card-subtitle>Status: {{isValid ? \"good\" : \"bad\" }}</mat-card-subtitle>\r\n    <mat-card-content>\r\n        <div class=\"fields\">\r\n            <mat-form-field >\r\n                <input matInput placeholder=\"ID\" [(ngModel)]=\"id\" readonly>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Parent\" [(ngModel)]=\"parentHash\" readonly>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <textarea matInput placeholder=\"Data\" [(ngModel)]=\"data\" (ngModelChange)=\"onUpdate()\" rows=5 spellcheck=\"false\"></textarea>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Nonce\" [(ngModel)]=\"nonce\" (ngModelChange)=\"onUpdate()\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Hash\" [(ngModel)]=\"hash\" readonly>\r\n            </mat-form-field>\r\n        </div>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-raised-button (click)=\"onMine()\">Mine</button>\r\n        <p id=\"timer\">({{time}} ms) </p>\r\n        <!-- <div id=\"spinner\" *ngIf=\"displayLoading | async\"><img src=\"assets/loading2.gif\"width=\"30\" height=\"30\"></div> -->\r\n    </mat-card-actions>\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blockchain/blockchain.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blockchain/blockchain.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlockchainBlockchainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"buttons\">\r\n    <button mat-raised-button (click)=\"onCreate()\">Create Block</button>\r\n    <button mat-raised-button (click)=\"onReset()\">Reset</button>\r\n</div>\r\n\r\n<app-block *ngFor=\"let b of chain; let idx = index\" \r\n    [count]=\"(idx + 1)\"\r\n    [parentId]=\"b.parentId\"\r\n    [parentHash]=\"b.parentHash\">\r\n</app-block>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/options/options.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/options/options.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOptionsOptionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"options-container\">\r\n    <mat-form-field>\r\n        <mat-label>Engine</mat-label>\r\n        <mat-select [(ngModel)]=\"selectedEngine\" (ngModelChange)=\"updateEngine()\">\r\n            <mat-option *ngFor=\"let e of engines\" [value]=\"e.value\" [disabled]=\"e.disabled\">\r\n                {{e.viewValue}}\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    \r\n    <label class=\"mat-typography\">Nonce Generator:</label> \r\n    <mat-radio-group aria-label=\"Nonce Generator\" [(ngModel)]=\"nonceGenerator\" (ngModelChange)=\"updateNonce()\">\r\n        <mat-radio-button value=\"linear\">Linear</mat-radio-button>\r\n        <mat-radio-button value=\"random\">Random</mat-radio-button>\r\n    </mat-radio-group>\r\n    <br> \r\n\r\n    <mat-form-field >\r\n        <input matInput placeholder=\"Difficulty\" [(ngModel)]=\"difficulty\" (ngModelChange)=\"updateDifficulty()\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <input matInput placeholder=\"Attempts\" [(ngModel)]=\"attempts\" (ngModelChange)=\"updateAttempts()\">\r\n    </mat-form-field>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\r\n    font-size: 30px;\r\n    font-weight: normal;\r\n    margin-bottom: 5pt;\r\n    margin-top: 5pt;\r\n}\r\n\r\n#title {\r\n    padding: 10pt;\r\n}\r\n\r\n.fill {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHQ7XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB0O1xyXG59XHJcblxyXG4uZmlsbCB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Blockchain-Sim';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./blockchain/blockchain.component */
    "./src/app/blockchain/blockchain.component.ts");
    /* harmony import */


    var _block_block_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./block/block.component */
    "./src/app/block/block.component.ts");
    /* harmony import */


    var _options_options_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./options/options.component */
    "./src/app/options/options.component.ts");
    /* harmony import */


    var _services_message_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/message-service.service */
    "./src/app/services/message-service.service.ts");
    /* harmony import */


    var _services_hash_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/hash.service */
    "./src/app/services/hash.service.ts");
    /* harmony import */


    var _services_mining_engine_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/mining-engine.service */
    "./src/app/services/mining-engine.service.ts");
    /* harmony import */


    var _services_external_mining_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/external-mining.service */
    "./src/app/services/external-mining.service.ts");
    /* harmony import */


    var _services_shared_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/shared.service */
    "./src/app/services/shared.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_10__["BlockchainComponent"], _block_block_component__WEBPACK_IMPORTED_MODULE_11__["BlockComponent"], _options_options_component__WEBPACK_IMPORTED_MODULE_12__["OptionsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
      providers: [_services_hash_service__WEBPACK_IMPORTED_MODULE_14__["HashService"], _services_mining_engine_service__WEBPACK_IMPORTED_MODULE_15__["MiningEngineService"], _services_message_service_service__WEBPACK_IMPORTED_MODULE_13__["MessageServiceService"], _services_external_mining_service__WEBPACK_IMPORTED_MODULE_16__["ExternalMiningService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_17__["SharedService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/block/block.component.css":
  /*!*******************************************!*\
    !*** ./src/app/block/block.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlockBlockComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fields {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n  \r\n.fields > * {\r\n    width: 100%;\r\n}\r\n  \r\nmat-card {\r\n    width: 400px;\r\n    margin: 10pt;\r\n    display: inline-block;\r\n    /* border: 1px solid #000 */\r\n}\r\n  \r\n.good-status {\r\n    background-color: rgba(203, 255, 179, 0.5);\r\n}\r\n  \r\n.bad-status {\r\n    background-color: rgba(255, 199, 199, 0.4);\r\n}\r\n  \r\ntextarea {\r\n    resize: none;\r\n}\r\n  \r\n#timer {\r\n    font-size: 10pt;\r\n    display: inline-block;\r\n    margin-left: 10pt;\r\n    color: rgb(70, 70, 70);\r\n\r\n}\r\n  \r\n/* #spinner {\r\n    display: inline-block;\r\n    margin-left: 20pt;\r\n    position: relative;\r\n    top: 8px\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2svYmxvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsc0JBQXNCOztBQUUxQjs7QUFFQTs7Ozs7R0FLRyIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrL2Jsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmllbGRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiAgXHJcbi5maWVsZHMgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMDAwICovXHJcbn1cclxuXHJcbi5nb29kLXN0YXR1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMywgMjU1LCAxNzksIDAuNSk7XHJcbn1cclxuXHJcbi5iYWQtc3RhdHVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTksIDE5OSwgMC40KTtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4jdGltZXIge1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHQ7XHJcbiAgICBjb2xvcjogcmdiKDcwLCA3MCwgNzApO1xyXG5cclxufVxyXG5cclxuLyogI3NwaW5uZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDhweFxyXG59ICovIl19 */";
    /***/
  },

  /***/
  "./src/app/block/block.component.ts":
  /*!******************************************!*\
    !*** ./src/app/block/block.component.ts ***!
    \******************************************/

  /*! exports provided: BlockComponent */

  /***/
  function srcAppBlockBlockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockComponent", function () {
      return BlockComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_message_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/message-service.service */
    "./src/app/services/message-service.service.ts");
    /* harmony import */


    var _services_hash_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/hash.service */
    "./src/app/services/hash.service.ts");
    /* harmony import */


    var _services_mining_engine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/mining-engine.service */
    "./src/app/services/mining-engine.service.ts");
    /* harmony import */


    var _services_external_mining_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/external-mining.service */
    "./src/app/services/external-mining.service.ts");
    /* harmony import */


    var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/shared.service */
    "./src/app/services/shared.service.ts");

    var BlockComponent = /*#__PURE__*/function () {
      function BlockComponent(messageService, hashService, miningEngine, externalEngine, sharedService) {
        _classCallCheck(this, BlockComponent);

        this.messageService = messageService;
        this.hashService = hashService;
        this.miningEngine = miningEngine;
        this.externalEngine = externalEngine;
        this.sharedService = sharedService;
        this.id = this.randomID();
        this.data = "";
        this.nonce = 0;
        this.isValid = false;
        this.time = 0;
      }

      _createClass(BlockComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.messageService.getMessage().subscribe(function (msg) {
            if (msg.id == _this.parentId) {
              // parent block hash has changed
              _this.parentHash = msg.text;

              _this.updateHash();

              _this.messageService.sendMessage(_this.id, _this.hash); // notify child block of new hash

            }
          });
        } // on init, after injection

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.updateHash();
        }
      }, {
        key: "randomID",
        value: function randomID() {
          return Math.random().toString(36).substr(2, 5) + '-' + Math.random().toString(36).substr(2, 5);
        }
      }, {
        key: "onMine",
        value: function onMine() {
          var _this2 = this;

          if (this.sharedService.useEmbeddedEngine) {
            var result = this.miningEngine.mine(this.id, this.parentHash, this.data);
            this.nonce = result.nonce;
            this.time = result.time;
            this.onUpdate();
          } else {
            this.externalEngine.mine(this.id, this.parentHash, this.data).subscribe(function (response) {
              _this2.nonce = response.nonce;
              _this2.time = response.time;

              _this2.onUpdate();
            });
          }
        }
      }, {
        key: "onUpdate",
        value: function onUpdate() {
          this.updateHash();
          this.messageService.sendMessage(this.id, this.hash);
        }
      }, {
        key: "updateHash",
        value: function updateHash() {
          var hashInput = this.id + this.parentHash + this.data + this.nonce;
          this.hash = this.hashService.generate(hashInput);
          if (this.hash.startsWith(this.sharedService.leadZeros) && this.parentHash.startsWith(this.sharedService.leadZeros)) this.isValid = true;else this.isValid = false;
        }
      }]);

      return BlockComponent;
    }();

    BlockComponent.ctorParameters = function () {
      return [{
        type: _services_message_service_service__WEBPACK_IMPORTED_MODULE_2__["MessageServiceService"]
      }, {
        type: _services_hash_service__WEBPACK_IMPORTED_MODULE_3__["HashService"]
      }, {
        type: _services_mining_engine_service__WEBPACK_IMPORTED_MODULE_4__["MiningEngineService"]
      }, {
        type: _services_external_mining_service__WEBPACK_IMPORTED_MODULE_5__["ExternalMiningService"]
      }, {
        type: _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BlockComponent.prototype, "count", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BlockComponent.prototype, "parentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BlockComponent.prototype, "parentHash", void 0);
    BlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-block',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./block.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/block/block.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./block.component.css */
      "./src/app/block/block.component.css"))["default"]]
    })], BlockComponent);
    /***/
  },

  /***/
  "./src/app/blockchain/blockchain.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/blockchain/blockchain.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlockchainBlockchainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#buttons {\r\n    margin: 10pt;\r\n}\r\n\r\n#buttons button {\r\n    margin-left: 5pt;\r\n    margin-right: 5pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2tjaGFpbi9ibG9ja2NoYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vYmxvY2tjaGFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2J1dHRvbnMge1xyXG4gICAgbWFyZ2luOiAxMHB0O1xyXG59XHJcblxyXG4jYnV0dG9ucyBidXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVwdDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB0O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/blockchain/blockchain.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/blockchain/blockchain.component.ts ***!
    \****************************************************/

  /*! exports provided: BlockTemplate, BlockchainComponent */

  /***/
  function srcAppBlockchainBlockchainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockTemplate", function () {
      return BlockTemplate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockchainComponent", function () {
      return BlockchainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _block_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../block/block.component */
    "./src/app/block/block.component.ts"); // Represents a block upon creation, with a reference to its parent block


    var BlockTemplate = function BlockTemplate(id, hash) {
      _classCallCheck(this, BlockTemplate);

      this.parentId = id;
      this.parentHash = hash;
    };
    /* BlockchainComponent represents the blockchain as a whole, as well as the Create Block and Reset buttons
    */


    var BlockchainComponent = /*#__PURE__*/function () {
      function BlockchainComponent() {
        _classCallCheck(this, BlockchainComponent);

        this.chain = [];
      }

      _createClass(BlockchainComponent, [{
        key: "onCreate",
        value: function onCreate() {
          var previousHash, previousId;

          if (this.chain.length == 0) {
            previousHash = previousId = "0000000000000000000000000000000000000000";
          } else {
            previousHash = this.blockComponents.last.hash; // current hash of previous block

            previousId = this.blockComponents.last.id;
          }

          var newBlock = new BlockTemplate(previousId, previousHash);
          this.chain.push(newBlock);
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.chain = [];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlockchainComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_block_block_component__WEBPACK_IMPORTED_MODULE_2__["BlockComponent"])], BlockchainComponent.prototype, "blockComponents", void 0);
    BlockchainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blockchain',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blockchain.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blockchain/blockchain.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blockchain.component.css */
      "./src/app/blockchain/blockchain.component.css"))["default"]]
    })], BlockchainComponent);
    /***/
  },

  /***/
  "./src/app/options/options.component.css":
  /*!***********************************************!*\
    !*** ./src/app/options/options.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppOptionsOptionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#options-container {\r\n    padding-left: 17pt;\r\n    padding-right: 17pt;\r\n    padding-bottom: 5pt;\r\n    padding-top: 15pt;\r\n    background-color: rgb(233, 233, 233);\r\n}\r\n\r\nmat-form-field {\r\n    width: 400px;\r\n    margin-left: 5pt;\r\n    margin-right: 25pt;\r\n}\r\n\r\nmat-radio-button {\r\n    margin-right: 10pt;\r\n}\r\n\r\nlabel {\r\n    margin-left: 5pt;\r\n    margin-right: 10pt;\r\n    font-size: 12pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvcHRpb25zLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE3cHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxN3B0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVwdDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB0O1xyXG59XHJcblxyXG5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBwdDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVwdDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBwdDtcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/options/options.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/options/options.component.ts ***!
    \**********************************************/

  /*! exports provided: OptionsComponent */

  /***/
  function srcAppOptionsOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionsComponent", function () {
      return OptionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/shared.service */
    "./src/app/services/shared.service.ts");
    /* OptionsComponent consists of the various options that are given to the mining engine
    */


    var OptionsComponent = /*#__PURE__*/function () {
      function OptionsComponent(sharedService) {
        _classCallCheck(this, OptionsComponent);

        this.sharedService = sharedService;
        this.attempts = 1000000;
        this.difficulty = "000";
        this.nonceGenerator = "linear";
        this.selectedEngine = "embedded";
        this.engines = [{
          value: 'embedded',
          viewValue: "Use Embedded Mining Engine",
          disabled: "false"
        }, {
          value: 'external',
          viewValue: "Use External Mining Engine (Python WebService)",
          disabled: "true"
        }];
      }

      _createClass(OptionsComponent, [{
        key: "updateNonce",
        value: function updateNonce() {
          if (this.nonceGenerator === 'linear') this.sharedService.useLinearNonce = true;else this.sharedService.useLinearNonce = false;
        }
      }, {
        key: "updateAttempts",
        value: function updateAttempts() {
          this.sharedService.maxAttempts = this.attempts;
        }
      }, {
        key: "updateDifficulty",
        value: function updateDifficulty() {
          this.sharedService.leadZeros = this.difficulty;
        }
      }, {
        key: "updateEngine",
        value: function updateEngine() {
          if (this.selectedEngine === 'embedded') this.sharedService.useEmbeddedEngine = true;else this.sharedService.useEmbeddedEngine = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OptionsComponent;
    }();

    OptionsComponent.ctorParameters = function () {
      return [{
        type: _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }];
    };

    OptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-options',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./options.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/options/options.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./options.component.css */
      "./src/app/options/options.component.css"))["default"]]
    })], OptionsComponent);
    /***/
  },

  /***/
  "./src/app/prng.ts":
  /*!*************************!*\
    !*** ./src/app/prng.ts ***!
    \*************************/

  /*! exports provided: Random */

  /***/
  function srcAppPrngTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Random", function () {
      return Random;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /**
     * Creates a pseudo-random value generator. The seed must be an integer.
     * https://gist.github.com/blixt/f17b47c62508be59987b
     *
     * Uses an optimized version of the Park-Miller PRNG.
     * http://www.firstpr.com.au/dsp/rand31/
     */


    var Random = /*#__PURE__*/function () {
      function Random(newSeed) {
        _classCallCheck(this, Random);

        this.seed = newSeed % 2147483647;

        if (this.seed <= 0) {
          this.seed += 2147483646;
        }
      }
      /**
       * Returns a pseudo-random value between 1 and 2147483646 (inclusive).
       */


      _createClass(Random, [{
        key: "next",
        value: function next() {
          return this.seed = this.seed * 16807 % 2147483647;
        }
      }, {
        key: "nextFloat",
        value:
        /**
         * Returns a pseudo-random floating point number in range [0, 1).
         */
        function nextFloat(opt_minOrMax, opt_max) {
          // We know that result of next() will be 1 to 2147483646 (inclusive).
          return (this.next() - 1) / 2147483646;
        }
      }]);

      return Random;
    }();
    /***/

  },

  /***/
  "./src/app/services/external-mining.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/external-mining.service.ts ***!
    \*****************************************************/

  /*! exports provided: ExternalMiningService */

  /***/
  function srcAppServicesExternalMiningServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExternalMiningService", function () {
      return ExternalMiningService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared.service */
    "./src/app/services/shared.service.ts");
    /* ExternalMiningService sends requests to an external web service for blockchain mining
    */


    var ExternalMiningService = /*#__PURE__*/function () {
      function ExternalMiningService(http, sharedService) {
        _classCallCheck(this, ExternalMiningService);

        this.http = http;
        this.sharedService = sharedService;
        this.url = "http://localhost:5000/blockchain";
      }

      _createClass(ExternalMiningService, [{
        key: "mine",
        value: function mine(id, parentHash, data) {
          var request = JSON.stringify({
            'id': id,
            'parentHash': parentHash,
            'data': data,
            'maxAttempts': this.sharedService.maxAttempts,
            'prefix': this.sharedService.leadZeros,
            'useLinear': this.sharedService.useLinearNonce ? 1 : 0
          });
          return this.http.post(this.url, request, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        }
      }]);

      return ExternalMiningService;
    }();

    ExternalMiningService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }];
    };

    ExternalMiningService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ExternalMiningService);
    /***/
  },

  /***/
  "./src/app/services/hash.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/hash.service.ts ***!
    \******************************************/

  /*! exports provided: HashService */

  /***/
  function srcAppServicesHashServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HashService", function () {
      return HashService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _sha_256_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../sha-256.js */
    "./src/app/sha-256.js");
    /* HashService provides a SHA-256 hash function
    */


    var HashService = /*#__PURE__*/function () {
      function HashService() {
        _classCallCheck(this, HashService);
      }

      _createClass(HashService, [{
        key: "generate",
        value: function generate(input) {
          return _sha_256_js__WEBPACK_IMPORTED_MODULE_2__["Sha256"].hash(input);
        }
      }]);

      return HashService;
    }();

    HashService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HashService);
    /***/
  },

  /***/
  "./src/app/services/message-service.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/message-service.service.ts ***!
    \*****************************************************/

  /*! exports provided: MessageServiceService */

  /***/
  function srcAppServicesMessageServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageServiceService", function () {
      return MessageServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MessageServiceService = /*#__PURE__*/function () {
      function MessageServiceService() {
        _classCallCheck(this, MessageServiceService);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(MessageServiceService, [{
        key: "sendMessage",
        value: function sendMessage(newId, newHash) {
          this.subject.next({
            id: newId,
            text: newHash
          });
        }
      }, {
        key: "getMessage",
        value: function getMessage() {
          return this.subject.asObservable();
        }
      }]);

      return MessageServiceService;
    }();

    MessageServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MessageServiceService);
    /***/
  },

  /***/
  "./src/app/services/mining-engine.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/mining-engine.service.ts ***!
    \***************************************************/

  /*! exports provided: MiningEngineService */

  /***/
  function srcAppServicesMiningEngineServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiningEngineService", function () {
      return MiningEngineService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _hash_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hash.service */
    "./src/app/services/hash.service.ts");
    /* harmony import */


    var _prng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../prng */
    "./src/app/prng.ts");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared.service */
    "./src/app/services/shared.service.ts");
    /* MiningEngineService performs embedded blockchain mining
    */


    var MiningEngineService = /*#__PURE__*/function () {
      function MiningEngineService(hashService, sharedService) {
        _classCallCheck(this, MiningEngineService);

        this.hashService = hashService;
        this.sharedService = sharedService;
      }
      /*  returns a JSON object
           {'nonce': the resulting nonce,
            'time':  the time in ms to produce nonce
           }
      */


      _createClass(MiningEngineService, [{
        key: "mine",
        value: function mine(id, parentHash, data) {
          var hashInput = id + parentHash + data;

          if (this.sharedService.useLinearNonce) {
            return this.linearMine(hashInput);
          } else {
            return this.randomMine(hashInput);
          }
        } // performs mining by generating nonce values linearly

      }, {
        key: "linearMine",
        value: function linearMine(hashInput) {
          var start = Date.now();
          var nonce;

          for (nonce = 0; nonce < this.sharedService.maxAttempts; nonce++) {
            var newHash = this.hashService.generate(hashInput + nonce);

            if (newHash.startsWith(this.sharedService.leadZeros)) {
              break;
            }
          }

          var elapsedTime = Date.now() - start;
          return {
            "nonce": nonce,
            "time": elapsedTime
          };
        } // performs mining by generating nonce values randomly

      }, {
        key: "randomMine",
        value: function randomMine(hashInput) {
          var start = Date.now();
          var random = new _prng__WEBPACK_IMPORTED_MODULE_3__["Random"](Date.now());
          var nonce;

          for (var i = 0; i < this.sharedService.maxAttempts; i++) {
            nonce = random.next();
            var newHash = this.hashService.generate(hashInput + nonce);

            if (newHash.startsWith(this.sharedService.leadZeros)) {
              break;
            }
          }

          var elapsedTime = Date.now() - start;
          return {
            "nonce": nonce,
            "time": elapsedTime
          };
        }
      }]);

      return MiningEngineService;
    }();

    MiningEngineService.ctorParameters = function () {
      return [{
        type: _hash_service__WEBPACK_IMPORTED_MODULE_2__["HashService"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }];
    };

    MiningEngineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MiningEngineService);
    /***/
  },

  /***/
  "./src/app/services/shared.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/shared.service.ts ***!
    \********************************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppServicesSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* SharedService stores various global option variables to be shared by multiple components/services
    */


    var SharedService = function SharedService() {
      _classCallCheck(this, SharedService);

      this.maxAttempts = 1000000;
      this.leadZeros = "000";
      this.useEmbeddedEngine = true;
      this.useLinearNonce = true;
    };

    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SharedService);
    /***/
  },

  /***/
  "./src/app/sha-256.js":
  /*!****************************!*\
    !*** ./src/app/sha-256.js ***!
    \****************************/

  /*! exports provided: Sha256 */

  /***/
  function srcAppSha256Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sha256", function () {
      return Sha256;
    });
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

    /* SHA-256 (FIPS 180-4) implementation in JavaScript                  (c) Chris Veness 2002-2019  */

    /*                                                                                   MIT Licence  */

    /* www.movable-type.co.uk/scripts/sha256.html                                                     */

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

    /**
     * SHA-256 hash function reference implementation.
     *
     * This is an annotated direct implementation of FIPS 180-4, without any optimisations. It is
     * intended to aid understanding of the algorithm rather than for production use.
     *
     * While it could be used where performance is not critical, I would recommend using the ‘Web
     * Cryptography API’ (developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest) for the browser,
     * or the ‘crypto’ library (nodejs.org/api/crypto.html#crypto_class_hash) in Node.js.
     *
     * See csrc.nist.gov/groups/ST/toolkit/secure_hashing.html
     *     csrc.nist.gov/groups/ST/toolkit/examples.html
     */


    var Sha256 = /*#__PURE__*/function () {
      function Sha256() {
        _classCallCheck(this, Sha256);
      }

      _createClass(Sha256, null, [{
        key: "hash",
        value:
        /**
         * Generates SHA-256 hash of string.
         *
         * @param   {string} msg - (Unicode) string to be hashed.
         * @param   {Object} [options]
         * @param   {string} [options.msgFormat=string] - Message format: 'string' for JavaScript string
         *   (gets converted to UTF-8 for hashing); 'hex-bytes' for string of hex bytes ('616263' ≡ 'abc') .
         * @param   {string} [options.outFormat=hex] - Output format: 'hex' for string of contiguous
         *   hex bytes; 'hex-w' for grouping hex bytes into groups of (4 byte / 8 character) words.
         * @returns {string} Hash of msg as hex character string.
         *
         * @example
         *   import Sha256 from './sha256.js';
         *   const hash = Sha256.hash('abc'); // 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'
         */
        function hash(msg, options) {
          var defaults = {
            msgFormat: 'string',
            outFormat: 'hex'
          };
          var opt = Object.assign(defaults, options); // note use throughout this routine of 'n >>> 0' to coerce Number 'n' to unsigned 32-bit integer

          switch (opt.msgFormat) {
            default: // default is to convert string to UTF-8, as SHA only deals with byte-streams

            case 'string':
              msg = utf8Encode(msg);
              break;

            case 'hex-bytes':
              msg = hexBytesToString(msg);
              break;
            // mostly for running tests
          } // constants [§4.2.2]


          var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2]; // initial hash value [§5.3.3]

          var H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]; // PREPROCESSING [§6.2.1]

          msg += String.fromCharCode(0x80); // add trailing '1' bit (+ 0's padding) to string [§5.1.1]
          // convert string msg into 512-bit blocks (array of 16 32-bit integers) [§5.2.1]

          var l = msg.length / 4 + 2; // length (in 32-bit integers) of msg + ‘1’ + appended length

          var N = Math.ceil(l / 16); // number of 16-integer (512-bit) blocks required to hold 'l' ints

          var M = new Array(N); // message M is N×16 array of 32-bit integers

          for (var i = 0; i < N; i++) {
            M[i] = new Array(16);

            for (var j = 0; j < 16; j++) {
              // encode 4 chars per integer (64 per block), big-endian encoding
              M[i][j] = msg.charCodeAt(i * 64 + j * 4 + 0) << 24 | msg.charCodeAt(i * 64 + j * 4 + 1) << 16 | msg.charCodeAt(i * 64 + j * 4 + 2) << 8 | msg.charCodeAt(i * 64 + j * 4 + 3) << 0;
            } // note running off the end of msg is ok 'cos bitwise ops on NaN return 0

          } // add length (in bits) into final pair of 32-bit integers (big-endian) [§5.1.1]
          // note: most significant word would be (len-1)*8 >>> 32, but since JS converts
          // bitwise-op args to 32 bits, we need to simulate this by arithmetic operators


          var lenHi = (msg.length - 1) * 8 / Math.pow(2, 32);
          var lenLo = (msg.length - 1) * 8 >>> 0;
          M[N - 1][14] = Math.floor(lenHi);
          M[N - 1][15] = lenLo; // HASH COMPUTATION [§6.2.2]

          for (var _i = 0; _i < N; _i++) {
            var W = new Array(64); // 1 - prepare message schedule 'W'

            for (var t = 0; t < 16; t++) {
              W[t] = M[_i][t];
            }

            for (var _t = 16; _t < 64; _t++) {
              W[_t] = Sha256.σ1(W[_t - 2]) + W[_t - 7] + Sha256.σ0(W[_t - 15]) + W[_t - 16] >>> 0;
            } // 2 - initialise working variables a, b, c, d, e, f, g, h with previous hash value


            var a = H[0],
                b = H[1],
                c = H[2],
                d = H[3],
                e = H[4],
                f = H[5],
                g = H[6],
                h = H[7]; // 3 - main loop (note '>>> 0' for 'addition modulo 2^32')

            for (var _t2 = 0; _t2 < 64; _t2++) {
              var T1 = h + Sha256.Σ1(e) + Sha256.Ch(e, f, g) + K[_t2] + W[_t2];

              var T2 = Sha256.Σ0(a) + Sha256.Maj(a, b, c);
              h = g;
              g = f;
              f = e;
              e = d + T1 >>> 0;
              d = c;
              c = b;
              b = a;
              a = T1 + T2 >>> 0;
            } // 4 - compute the new intermediate hash value (note '>>> 0' for 'addition modulo 2^32')


            H[0] = H[0] + a >>> 0;
            H[1] = H[1] + b >>> 0;
            H[2] = H[2] + c >>> 0;
            H[3] = H[3] + d >>> 0;
            H[4] = H[4] + e >>> 0;
            H[5] = H[5] + f >>> 0;
            H[6] = H[6] + g >>> 0;
            H[7] = H[7] + h >>> 0;
          } // convert H0..H7 to hex strings (with leading zeros)


          for (var _h = 0; _h < H.length; _h++) {
            H[_h] = ('00000000' + H[_h].toString(16)).slice(-8);
          } // concatenate H0..H7, with separator if required


          var separator = opt.outFormat == 'hex-w' ? ' ' : '';
          return H.join(separator);
          /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

          function utf8Encode(str) {
            try {
              return new TextEncoder().encode(str, 'utf-8').reduce(function (prev, curr) {
                return prev + String.fromCharCode(curr);
              }, '');
            } catch (e) {
              // no TextEncoder available?
              return unescape(encodeURIComponent(str)); // monsur.hossa.in/2012/07/20/utf-8-in-javascript.html
            }
          }

          function hexBytesToString(hexStr) {
            // convert string of hex numbers to a string of chars (eg '616263' -> 'abc').
            var str = hexStr.replace(' ', ''); // allow space-separated groups

            return str == '' ? '' : str.match(/.{2}/g).map(function (_byte) {
              return String.fromCharCode(parseInt(_byte, 16));
            }).join('');
          }
        }
        /**
         * Rotates right (circular right shift) value x by n positions [§3.2.4].
         * @private
         */

      }, {
        key: "ROTR",
        value: function ROTR(n, x) {
          return x >>> n | x << 32 - n;
        }
        /**
         * Logical functions [§4.1.2].
         * @private
         */

      }, {
        key: "\u03A30",
        value: function Σ0(x) {
          return Sha256.ROTR(2, x) ^ Sha256.ROTR(13, x) ^ Sha256.ROTR(22, x);
        }
      }, {
        key: "\u03A31",
        value: function Σ1(x) {
          return Sha256.ROTR(6, x) ^ Sha256.ROTR(11, x) ^ Sha256.ROTR(25, x);
        }
      }, {
        key: "\u03C30",
        value: function σ0(x) {
          return Sha256.ROTR(7, x) ^ Sha256.ROTR(18, x) ^ x >>> 3;
        }
      }, {
        key: "\u03C31",
        value: function σ1(x) {
          return Sha256.ROTR(17, x) ^ Sha256.ROTR(19, x) ^ x >>> 10;
        }
      }, {
        key: "Ch",
        value: function Ch(x, y, z) {
          return x & y ^ ~x & z;
        } // 'choice'

      }, {
        key: "Maj",
        value: function Maj(x, y, z) {
          return x & y ^ x & z ^ y & z;
        } // 'majority'

      }]);

      return Sha256;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Users\ianaf\Personal\Workspace\Blockchain-Sim\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map