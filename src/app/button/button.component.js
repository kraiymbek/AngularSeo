"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ButtonComponent = (function () {
    function ButtonComponent() {
        this.fontSize = '25';
        this.onClickEvent = new core_1.EventEmitter();
    }
    ButtonComponent.prototype.handleClick = function (event) {
        this.onClickEvent.emit(event);
    };
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.onClick = function () {
    };
    return ButtonComponent;
}());
__decorate([
    core_1.HostBinding('style.fontSize.px')
], ButtonComponent.prototype, "fontSize", void 0);
__decorate([
    core_1.Input()
], ButtonComponent.prototype, "btnName", void 0);
__decorate([
    core_1.Input()
], ButtonComponent.prototype, "type", void 0);
__decorate([
    core_1.Output()
], ButtonComponent.prototype, "onClickEvent", void 0);
ButtonComponent = __decorate([
    core_1.Component({
        selector: 'app-button',
        template: "\n  <button\n      (click)=\"handleClick($event)\"\n      type=\"{{type || 'button'}}\"\n      class=\"btn btn-primary {{btnName}}\">\n      <ng-content></ng-content>\n    </button>\n",
        styleUrls: ['./button.component.css']
    })
], ButtonComponent);
exports.ButtonComponent = ButtonComponent;
