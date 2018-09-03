webpackJsonp(["main"],{

/***/ "../../../../../../resources/images/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.5b7deb051bcea9939ea6.jpg";

/***/ }),

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\r\n    background: url(" + escape(__webpack_require__("../../../../../../resources/images/background.jpg")) + ") no-repeat center fixed;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-size: cover;\r\n    color : #F5FBEF;\r\n    width: 100%;\r\n    min-height: 100vh;\r\n}\r\n\r\nfooter {\r\n  padding: 10px;\r\n  text-align: center;\r\n  color : #ffffff;\r\n  background-color: #343A40;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <header>\n    <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n      <a href=\"#\" class=\"navbar-brand\">{{title}}</a>\n      <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <a routerLink=\"/home\" class=\"nav-item active nav-link\">Home</a>\n          <a routerLink=\"/login\" class=\"nav-item active nav-link\">Login</a>\n        </ul>\n      </div>\n    </nav>\n  </header>\n  <div class=\"body\">\n    <router-outlet></router-outlet>\n  </div>\n  <footer>\n    DoggoCare - Site créé dans le cadre du cours de Développement Web Avancé - BLOC 3 - Informatique et Système - HEH Mons\n  </footer>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'DoggoCare';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_token_service__ = __webpack_require__("../../../../../src/app/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */].forRoot([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_9__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* HashLocationStrategy */] }, __WEBPACK_IMPORTED_MODULE_4__services_token_service__["a" /* TokenService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\r\n  color: #ffffff;\r\n  text-shadow: 0 0 4px #000000;\r\n  padding: 20px;\r\n  padding-left: 40px;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <h1>Bienvenue sur DoggoCare</h1>\n  <h3>A propos</h3>\n  <p>\n    Ce projet a été créé dans le cadre du cours de développement Web avancé - Bloc 3 Informatique à la Haute Ecole en Hainaut (HEH).<br>\n    Il nous permet de nous familiariser avec les frameworks Angular et Spring.<br>\n    Ce projet a aussi été développé en respectant la méthode SCRUM.\n  </p>\n  <h3>Contributeurs</h3>\n  <ul>\n    <li>Guillaume Isembaert</li>\n    <li>Thibault Stevanoni</li>\n    <li>Thomas Rosi</li>\n    <li>Arnaud Urbain</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\r\n  color: #ffffff;\r\n  text-shadow: 0 0 4px #000000;\r\n  padding: 20px;\r\n  padding-left: 40px;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\n.box {\r\n    width: 500px;\r\n    margin: 200px 0;\r\n}\r\n\r\n.shape1{\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #343A40;\r\n    border-radius: 80px;\r\n    float: left;\r\n    margin-right: -50px;\r\n}\r\n.shape2 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #343A40;\r\n    border-radius: 80px;\r\n    margin-top: -30px;\r\n    float: left;\r\n}\r\n.shape3 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #343A40;\r\n    border-radius: 80px;\r\n    margin-top: -30px;\r\n    float: left;\r\n    margin-left: -31px;\r\n}\r\n.shape4 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #343A40;\r\n    border-radius: 80px;\r\n    margin-top: -25px;\r\n    float: left;\r\n    margin-left: -32px;\r\n}\r\n.shape5 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #343A40;\r\n    border-radius: 80px;\r\n    float: left;\r\n    margin-right: -48px;\r\n    margin-left: -32px;\r\n    margin-top: -30px;\r\n}\r\n.shape6 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #343A40;\r\n    border-radius: 80px;\r\n    float: left;\r\n    margin-right: -20px;\r\n    margin-top: -35px;\r\n}\r\n.shape7 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #343A40;\r\n    border-radius: 80px;\r\n    float: left;\r\n    margin-right: -20px;\r\n    margin-top: -57px;\r\n}\r\n.float {\r\n    position: absolute;\r\n    z-index: 2;\r\n}\r\n\r\n.form {\r\n    margin-left: 145px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <h1>Bienvenue sur DoggoCare</h1>\n  <div class=\"container\">\n    <div id=\"login-row\" class=\"row justify-content-center align-items-center\">\n      <div id=\"login-column\" class=\"col-md-6\">\n        <div class=\"box\">\n          <div class=\"shape1\"></div>\n          <div class=\"shape2\"></div>\n          <div class=\"shape3\"></div>\n          <div class=\"shape4\"></div>\n          <div class=\"shape5\"></div>\n          <div class=\"shape6\"></div>\n          <div class=\"shape7\"></div>\n          <div class=\"float\">\n            <form class=\"form\" (ngSubmit)=\"submit(loginForm)\" novalidate #loginForm=\"ngForm\">\n              <div class=\"form-group\">\n                <label for=\"email\" class=\"text-white\">Email :</label><br>\n                <input type=\"text\" required [(ngModel)]=user.email name=\"email\" id=\"email\" #emailVar=\"ngModel\" class=\"form-control\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\" class=\"text-white\">Mot de passe :</label><br>\n                <input type=\"text\" required [(ngModel)]=user.password name=\"password\" id=\"password\" #passwordVar=\"ngModel\" class=\"form-control\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"submit\" [disabled]=\"!loginForm.valid\" name=\"submit\" class=\"btn btn-info btn-md\" value=\"Se connecter\">\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_token_service__ = __webpack_require__("../../../../../src/app/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/login/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _tokenService) {
        this._router = _router;
        this._tokenService = _tokenService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]("test@test.com", "Test123");
        this.badLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function (loginForm) {
        this.loginForm = loginForm;
        this._tokenService.getNewToken(this.user.email, this.user.password, function (token) {
            if (token == "error") {
                this.badLogin = true;
            }
            else {
                this._router.navigate(['/home']);
            }
        }.bind(this));
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_token_service__["a" /* TokenService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(email, password) {
        if (email === void 0) { email = ""; }
        if (password === void 0) { password = ""; }
        this.email = email;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/services/token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenService = /** @class */ (function () {
    function TokenService(_http) {
        this._http = _http;
        this.data = null;
        this.email = null;
        this.password = null;
    }
    TokenService.prototype.getNewToken = function (mail, pwd, callback) {
        var _this = this;
        this.email = mail;
        this.password = pwd;
        var username = 'test@test.com';
        var password = 'Test123*';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this._http.post('/oauth/token?grant_type=password&username=' + mail + '&password=' + pwd, this.data, { headers: headers }).subscribe(function (data) {
            _this.data = data;
            if (callback) {
                callback(data);
            }
        }, function (err) {
            if (err.status == 401 || err.status == 400) {
                callback("error");
            }
        });
    };
    TokenService.prototype.refreshMyToken = function () {
        var _this = this;
        var username = 'test@test.com';
        var password = 'Test123*';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this._http.post('/oauth/token?grant_type=refresh_token&refresh_token=' + this.data.refresh_token, this.data, { headers: headers }).subscribe(function (data) {
            _this.data = data;
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('An error occurred: ', err.error.message);
            }
            else {
                console.log("Backend returned code " + err.status + ", body was: " + err.error);
                if (err.status == 401) {
                    _this.getNewToken(_this.email, _this.password, null);
                }
            }
        });
    };
    TokenService.prototype.getMyToken = function () {
        if (this.data != null) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set("Authorization", "Bearer " + this.data.access_token);
            return headers;
        }
    };
    TokenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map