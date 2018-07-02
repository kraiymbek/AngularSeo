"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("firebase");
var core_1 = require("@angular/core");
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.signupUser = function (email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function (err) { return console.log(err); });
    };
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (res) {
            _this.router.navigate(['/']);
            firebase.auth().currentUser.getIdToken()
                .then(function (token) { return _this.token = token; });
        })
            .catch(function (err) { return console.log(err); });
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService.prototype.logout = function () {
        firebase.auth().signOut();
        this.token = null;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
