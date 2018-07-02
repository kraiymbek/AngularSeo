"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, currentRoute, currentState) {
        return component.canDeactivate();
    };
    return CanDeactivateGuard;
}());
exports.CanDeactivateGuard = CanDeactivateGuard;
