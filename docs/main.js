(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/admin/categories/categories.component.ts");
/* harmony import */ var _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./our-services/our-services.component */ "./src/app/admin/our-services/our-services.component.ts");
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rooms/rooms.component */ "./src/app/admin/rooms/rooms.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _components_modals_modals_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/modals/modals.component */ "./src/app/components/modals/modals.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/users.component */ "./src/app/admin/users/users.component.ts");
/* harmony import */ var _dropzone_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dropzone.directive */ "./src/app/dropzone.directive.ts");
/* harmony import */ var _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./restaurant/restaurant.component */ "./src/app/admin/restaurant/restaurant.component.ts");









// import { KeyPipe } from '../pipes/key.pipe';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';






var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"],
                _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_3__["OurServicesComponent"],
                _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_4__["RoomsComponent"],
                _components_modals_modals_component__WEBPACK_IMPORTED_MODULE_11__["ModalsComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
                _dropzone_directive__WEBPACK_IMPORTED_MODULE_13__["DropzoneDirective"],
                _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_14__["RestaurantComponent"]
            ],
            exports: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({
                    timeOut: 1000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: false
                })
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/categories/categories.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/categories/categories.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n\n.toast-title {\n  font-weight: bold;\n}\n\n.toast-message {\n  word-wrap: break-word;\n}\n\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n\n.toast-container * {\n  box-sizing: border-box;\n}\n\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n.toast-success {\n  background-color: #51A351;\n}\n\n.toast-error {\n  background-color: #BD362F;\n}\n\n.toast-info {\n  background-color: #2F96B4;\n}\n\n.toast-warning {\n  background-color: #F89406;\n}\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n\n/* Responsive Design */\n\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9uZ3gtdG9hc3RyL3RvYXN0ci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0pBQWtKOztBQUVsSixhQUFhOztBQUNiO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UsTUFBTTtFQUNOLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFDQTtFQUNFLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUNBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUNBO0VBQ0UsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFDQTs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBQ0E7O3lEQUV5RDs7QUFDekQ7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFDQSxpSEFBaUg7O0FBQ2pIO0VBQ0UscWxCQUFxbEI7QUFDdmxCOztBQUNBLGtIQUFrSDs7QUFDbEg7RUFDRSw2akJBQTZqQjtBQUMvakI7O0FBQ0EsMkdBQTJHOztBQUMzRztFQUNFLHdkQUF3ZDtBQUMxZDs7QUFDQSwwSEFBMEg7O0FBQzFIO0VBQ0Usc29CQUFzb0I7QUFDeG9COztBQUNBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBOztFQUVFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUNBLHNCQUFzQjs7QUFDdEI7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2I7QUFDRjs7QUFDQTtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjtBQUNGOztBQUNBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJhc2VkIG9uIGFuZ3VsYXItdG9hc3RyIGNzcyBodHRwczovL2dpdGh1Yi5jb20vRm94YW5keHNzL2FuZ3VsYXItdG9hc3RyL2Jsb2IvY2I1MDhmZTY4MDFkNmIyODhkM2FmYzUyNWJiNDBmZWUxYjEwMTY1MC9kaXN0L2FuZ3VsYXItdG9hc3RyLmNzcyAqL1xuXG4vKiBwb3NpdGlvbiAqL1xuLnRvYXN0LWNlbnRlci1jZW50ZXIge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi50b2FzdC10b3AtY2VudGVyIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9hc3QtYm90dG9tLWNlbnRlciB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvYXN0LXRvcC1mdWxsLXdpZHRoIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2FzdC10b3AtbGVmdCB7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogMTJweDtcbn1cbi50b2FzdC10b3AtcmlnaHQge1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxMnB4O1xufVxuLnRvYXN0LWJvdHRvbS1yaWdodCB7XG4gIHJpZ2h0OiAxMnB4O1xuICBib3R0b206IDEycHg7XG59XG4udG9hc3QtYm90dG9tLWxlZnQge1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IDEycHg7XG59XG5cbi8qIHRvYXN0IHN0eWxlcyAqL1xuLnRvYXN0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udG9hc3QtbWVzc2FnZSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi50b2FzdC1tZXNzYWdlIGEsXG4udG9hc3QtbWVzc2FnZSBsYWJlbCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnRvYXN0LW1lc3NhZ2UgYTpob3ZlciB7XG4gIGNvbG9yOiAjQ0NDQ0NDO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogLTAuM2VtO1xuICB0b3A6IC0wLjNlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZmZmZjtcbiAgLyogb3BhY2l0eTogMC44OyAqL1xufVxuLnRvYXN0LWNsb3NlLWJ1dHRvbjpob3Zlcixcbi50b2FzdC1jbG9zZS1idXR0b246Zm9jdXMge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi8qQWRkaXRpb25hbCBwcm9wZXJ0aWVzIGZvciBidXR0b24gdmVyc2lvblxuIGlPUyByZXF1aXJlcyB0aGUgYnV0dG9uIGVsZW1lbnQgaW5zdGVhZCBvZiBhbiBhbmNob3IgdGFnLlxuIElmIHlvdSB3YW50IHRoZSBhbmNob3IgdmVyc2lvbiwgaXQgcmVxdWlyZXMgYGhyZWY9XCIjXCJgLiovXG5idXR0b24udG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuLnRvYXN0LWNvbnRhaW5lciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cbi50b2FzdC1jb250YWluZXIgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4udG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgMCA2cHg7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNXB4IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTJweCAjOTk5OTk5O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHI6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTJweCAjMDAwMDAwO1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9pbmZvLWNpcmNsZS5zdmcgKi9cbi50b2FzdC1pbmZvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMjU2IDhDMTE5LjA0MyA4IDggMTE5LjA4MyA4IDI1NmMwIDEzNi45OTcgMTExLjA0MyAyNDggMjQ4IDI0OHMyNDgtMTExLjAwMyAyNDgtMjQ4QzUwNCAxMTkuMDgzIDM5Mi45NTcgOCAyNTYgOHptMCAxMTBjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHonLyUzRSUzQy9zdmclM0VcIik7XG59XG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci90aW1lcy1jaXJjbGUuc3ZnICovXG4udG9hc3QtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4em0xMjEuNiAzMTMuMWM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzM4IDM3Ny42Yy00LjcgNC43LTEyLjMgNC43LTE3IDBMMjU2IDMxMmwtNjUuMSA2NS42Yy00LjcgNC43LTEyLjMgNC43LTE3IDBMMTM0LjQgMzM4Yy00LjctNC43LTQuNy0xMi4zIDAtMTdsNjUuNi02NS02NS42LTY1LjFjLTQuNy00LjctNC43LTEyLjMgMC0xN2wzOS42LTM5LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDY1IDY1LjcgNjUuMS02NS42YzQuNy00LjcgMTIuMy00LjcgMTcgMGwzOS42IDM5LjZjNC43IDQuNyA0LjcgMTIuMyAwIDE3TDMxMiAyNTZsNjUuNiA2NS4xeicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2NoZWNrLnN2ZyAqL1xuLnRvYXN0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00xNzMuODk4IDQzOS40MDRsLTE2Ni40LTE2Ni40Yy05Ljk5Ny05Ljk5Ny05Ljk5Ny0yNi4yMDYgMC0zNi4yMDRsMzYuMjAzLTM2LjIwNGM5Ljk5Ny05Ljk5OCAyNi4yMDctOS45OTggMzYuMjA0IDBMMTkyIDMxMi42OSA0MzIuMDk1IDcyLjU5NmM5Ljk5Ny05Ljk5NyAyNi4yMDctOS45OTcgMzYuMjA0IDBsMzYuMjAzIDM2LjIwNGM5Ljk5NyA5Ljk5NyA5Ljk5NyAyNi4yMDYgMCAzNi4yMDRsLTI5NC40IDI5NC40MDFjLTkuOTk4IDkuOTk3LTI2LjIwNyA5Ljk5Ny0zNi4yMDQtLjAwMXonLyUzRSUzQy9zdmclM0VcIik7XG59XG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9leGNsYW1hdGlvbi10cmlhbmdsZS5zdmcgKi9cbi50b2FzdC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMicgd2lkdGg9JzU3NicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLnRvYXN0LWNvbnRhaW5lci50b2FzdC10b3AtY2VudGVyIC5uZ3gtdG9hc3RyLFxuLnRvYXN0LWNvbnRhaW5lci50b2FzdC1ib3R0b20tY2VudGVyIC5uZ3gtdG9hc3RyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnRvYXN0LWNvbnRhaW5lci50b2FzdC10b3AtZnVsbC13aWR0aCAubmd4LXRvYXN0cixcbi50b2FzdC1jb250YWluZXIudG9hc3QtYm90dG9tLWZ1bGwtd2lkdGggLm5neC10b2FzdHIge1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLm5neC10b2FzdHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwMzAzO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi50b2FzdC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxQTM1MTtcbn1cbi50b2FzdC1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCRDM2MkY7XG59XG4udG9hc3QtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyRjk2QjQ7XG59XG4udG9hc3Qtd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGODk0MDY7XG59XG4udG9hc3QtcHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAyNDBweCkge1xuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggNTBweDtcbiAgICB3aWR0aDogMTFlbTtcbiAgfVxuICAudG9hc3QtY29udGFpbmVyIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgIHJpZ2h0OiAtMC4yZW07XG4gICAgdG9wOiAtMC4yZW07XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDI0MXB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDUwcHg7XG4gICAgd2lkdGg6IDE4ZW07XG4gIH1cbiAgLnRvYXN0LWNvbnRhaW5lciAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgICByaWdodDogLTAuMmVtO1xuICAgIHRvcDogLTAuMmVtO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICAgIHdpZHRoOiAyNWVtO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/categories/categories.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/categories/categories.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-pages></app-nav-pages>\r\n\r\n<div class=\"page-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\" sizeP col-md-2\">\r\n        <div class=\"sidebar content-box margin\" style=\"display: block;\">\r\n          <ul class=\"nav flex-column\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" routerLink=\"/admin/rooms\"><i class=\"fa fa-bed\"></i>Rooms</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/admin/categories\"><i class=\"fa fa-list\"></i>Categories</a>\r\n            </li>\r\n            <li>\r\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#collapseExample\" aria-expanded=\"false\"\r\n                aria-controls=\"collapseExample\"><i class=\"fas fa-concierge-bell\"></i>Services</a>\r\n              <div class=\"collapse\" id=\"collapseExample\">\r\n                <div class=\"card card-body\">\r\n                  <a class=\"nav-link\" routerLink=\"/admin/restaurant\"><i class=\"fa fa-f2bb\"></i>Restaurants</a>\r\n                  <a class=\"nav-link\" routerLink=\"/admin/our-services\"><i class=\"fa fa-layer-group\"></i>General</a>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" (click)=\"logout()\"><i class=\"fa fa-home\"></i>Exit</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\" sizeP col-md-10\">\r\n        <div class=\"container\">\r\n          <div class=\"content-box-large\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"panel-title\">Categories Management</div>\r\n            </div>\r\n            <!-- button-add -->\r\n            <div class=\"col col-xs-6 text-right\">\r\n              <p><button class=\"btn btn-add btn-xs\" data-toggle=\"modal\" data-target=\"#exampleModal\"\r\n                  data-whatever=\"@mdo\"><span class=\"fa fa-plus-square\"></span></button></p>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <div class=\"table-responsive\">\r\n                <table id=\"mytable\" class=\"table table-bordered table-striped \">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Category name</th>\r\n                      <th class=\"break\">Description</th>\r\n                      <th>Edit</th>\r\n                      <th>Delete</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"\r\n                    let cat of categoriesArray \">\r\n                      <td>{{ cat.name }}</td>\r\n                      <td>{{ cat.description }}</td>\r\n                      <td>\r\n                        <p data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@mdo\" title=\"Edit\"><button\r\n                            (click)=\"getUpdate(cat.key)\" class=\"btn btn-edit btn-xs\"><span\r\n                              class=\"fa fa-pencil\"></span></button></p>\r\n                      </td>\r\n                      <td>\r\n                        <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button (click)=\"onDelete(cat.key)\"\r\n                            class=\"btn btn-delete btn-xs\"><span class=\"fa fa-trash\"></span></button></p>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create a new category</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <!-- form -->\r\n        <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Name:</label>\r\n            <input [(ngModel)]=\"cat.name\" name=\"name\" type=\"text\" required class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Description:</label>\r\n            <input [(ngModel)]=\"cat.description\" name=\"description\" type=\"text\" required class=\"form-control\">\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/categories/categories.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/categories/categories.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoriesService, authService, toastr) {
        this.categoriesService = categoriesService;
        this.authService = authService;
        this.toastr = toastr;
        this.categoriesArray = [];
        this.cat = {
            name: '',
            description: ''
        };
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoriesComponent.prototype.getUpdate = function (cat) {
        var _this = this;
        this.id = cat;
        this.categoriesService.getCategoryById(this.id)
            .subscribe(function (data) { return _this.cat = data; });
    };
    CategoriesComponent.prototype.onSubmit = function (f) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!f.valid) {
                    // validated
                    this.toastr.info('Warning!', 'please fill in the missing fields');
                    return [2 /*return*/];
                }
                if (!this.id) {
                    // guarda
                    this.categoriesService.createCategories(this.cat).subscribe(function (resp) {
                        _this.toastr.success('Success', 'Successfully created category');
                        f.onReset();
                    }, function (err) {
                        _this.toastr.error('Oops!', 'You have an error');
                    });
                }
                else {
                    // actualiza
                    this.categoriesService.updateCategories(this.cat, this.id).subscribe(function (data) {
                        _this.toastr.success('Success', 'Successfully created category');
                        _this.id = '';
                        f.onReset();
                    }, function (err) {
                        _this.toastr.error('Oops!', 'You have an error');
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService.getCategoriesList().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (data) { return _this.categoriesArray = data; });
    };
    CategoriesComponent.prototype.onDelete = function (key) {
        var _this = this;
        this.categoriesService.deleteCategories(key).subscribe(function (resp) {
            _this.toastr.success('Success', 'It was successfully removed');
        }, function (err) {
            _this.toastr.error('Oops!', 'You have an error');
        });
    };
    CategoriesComponent.prototype.logout = function () {
        this.authService.logout();
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-categories",
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/admin/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/admin/categories/categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/admin/our-services/our-services.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/our-services/our-services.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL291ci1zZXJ2aWNlcy9vdXItc2VydmljZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/our-services/our-services.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/our-services/our-services.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-pages></app-nav-pages>\r\n\r\n<div class=\"page-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\" sizeP col-md-2\">\r\n        <div class=\"sidebar content-box margin\" style=\"display: block;\">\r\n          <ul class=\"nav flex-column\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" routerLink=\"/admin/rooms\"><i class=\"fa fa-bed\"></i>Rooms</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/admin/categories\"><i class=\"fa fa-list\"></i>Categories</a>\r\n            </li>\r\n            <li>\r\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#collapseExample\" aria-expanded=\"false\"\r\n                aria-controls=\"collapseExample\"><i class=\"fas fa-concierge-bell\"></i>Services</a>\r\n              <div class=\"collapse\" id=\"collapseExample\">\r\n                <div class=\"card card-body\">\r\n                  <a class=\"nav-link\" routerLink=\"/admin/restaurant\"><i class=\"fa fa-f2bb\"></i>Restaurants</a>\r\n                  <a class=\"nav-link\" routerLink=\"/admin/our-services\"><i class=\"fa fa-layer-group\"></i>General</a>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" (click)=\"logout()\"><i class=\"fa fa-home\"></i>Exit</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\" sizeP col-md-10\">\r\n        <div class=\"container\">\r\n          <div class=\"content-box-large\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"panel-title\">Services Management</div>\r\n            </div>\r\n            <!-- button-add -->\r\n            <div class=\"col col-xs-6 text-right\">\r\n              <p><button class=\"btn btn-add btn-xs\" data-toggle=\"modal\" data-target=\"#exampleModal\"\r\n                  data-whatever=\"@mdo\"><span class=\"fa fa-plus-square\"></span></button></p>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <div class=\"table-responsive\">\r\n                <table id=\"mytable\" class=\"table table-bordered table-striped \">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Image</th>\r\n                      <th>Service name</th>\r\n                      <th class=\"break\">Description</th>\r\n                      <th>Hours</th>\r\n                      <th>Price</th>\r\n                      <th>Edit</th>\r\n                      <th>Delete</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"\r\n                    let serv of servicesArray  \">\r\n                      <td><img *ngIf=\"serv.img\" (click)=\"viewImage( serv.img )\" data-toggle=\"modal\"\r\n                          data-target=\"#myModal\" data-whatever=\"@mdo\" class=\"img-50 pointer\" src=\"{{serv.img}}\"></td>\r\n                      <td>{{serv.name}}</td>\r\n                      <td>{{serv.description}}</td>\r\n                      <td>{{serv.hours}}</td>\r\n                      <td>{{serv.price}}</td>\r\n                      <td>\r\n                        <p data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@mdo\" title=\"Edit\"><button\r\n                            (click)=\"getUpdate(serv.key)\" class=\"btn btn-edit btn-xs\" data-target=\"#exampleModal\"><span\r\n                              class=\"fa fa-pencil\"></span></button></p>\r\n                      </td>\r\n                      <td>\r\n                        <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button (click)=\"delete(serv.key)\"\r\n                            class=\"btn btn-delete btn-xs\"><span class=\"fa fa-trash\"></span></button></p>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- modal normal -->\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create a new service</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div id=\"carousel-example-generic\" data-interval=\"false\" class=\"carousel slide\" data-ride=\"carousel\">\r\n          <!-- Wrapper for slides -->\r\n          <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n            <div class=\"carousel-inner\">\r\n              <div class=\"carousel-item active\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"recipient-name\" class=\"col-form-label\">Name:</label>\r\n                  <input [(ngModel)]=\"serv.name\" type=\"text\" class=\"form-control\" name=\"name\" required maxlength=80>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"message-text\" class=\"col-form-label\">Description:</label>\r\n                  <input [(ngModel)]=\"serv.description\" type=\"text\" class=\"form-control\" name=\"description\" required\r\n                    maxlength=200>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"message-text\" class=\"col-form-label\">Hours:</label>\r\n                  <input [(ngModel)]=\"serv.hours\" type=\"text\" class=\"form-control\" name=\"hours\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"message-text\" class=\"col-form-label\">Price:</label>\r\n                  <input [(ngModel)]=\"serv.price\" type=\"number\" class=\"form-control\" name=\"price\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"carousel-item\">\r\n                <!-- <form> -->\r\n                <div class=\"dropzone\" appDropzone (hovered)=\"toggleHover($event)\" (dropped)=\"onDrop($event)\"\r\n                  [class.hovering]=\"isHovering\">\r\n\r\n                  <h3>Drag and Drop a File</h3>\r\n                  <div class=\"file\">\r\n                    <label class=\"file-label\">\r\n                      <input class=\"file-input\" type=\"file\" (change)=\"onDrop($event.target.files)\">\r\n\r\n                      <span class=\"file-cta\">\r\n                        <span class=\"file-icon\">\r\n                          <i class=\"fa fa-upload\"></i>\r\n                        </span>\r\n                        <span class=\"file-label\">\r\n                          or choose a file…\r\n                        </span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                 \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </form>\r\n          <!-- </form> -->\r\n          <!-- Controls -->\r\n          <button (click)=\"control = true\" *ngIf=\"!control\" class=\" position btn btn-primary\" href=\"#carousel-example-generic\" role=\"button\"\r\n            data-slide=\"next\">Next\r\n            <span class=\"fa fa-chevron-right\"></span></button>\r\n            <button *ngIf=\"control\" (click)=\"control = false\" class=\" btn btn-primary \" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\r\n              <span class=\"fa fa-chevron-left\"></span>\r\n            </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- modal component -->\r\n<app-modals [img]=\"url\"></app-modals>"

/***/ }),

/***/ "./src/app/admin/our-services/our-services.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/our-services/our-services.component.ts ***!
  \**************************************************************/
/*! exports provided: OurServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesComponent", function() { return OurServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_our_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/our-services.service */ "./src/app/services/our-services.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var OurServicesComponent = /** @class */ (function () {
    function OurServicesComponent(ourServices, authService, storage, toastr) {
        this.ourServices = ourServices;
        this.authService = authService;
        this.storage = storage;
        this.toastr = toastr;
        this.control = false;
        this.files = [];
        this.servicesArray = [];
        this.serv = {
            name: "",
            description: "",
            hours: "",
            price: "",
            img: []
        };
    }
    OurServicesComponent.prototype.ngOnInit = function () {
        this.getServices();
    };
    OurServicesComponent.prototype.logout = function () {
        this.authService.logout();
    };
    OurServicesComponent.prototype.toggleHover = function (event) {
        this.isHovering = event;
    };
    OurServicesComponent.prototype.onDrop = function (files) {
        // recibe los archivos
        for (var i = 0; i < files.length; i++) {
            this.files.push(files.item(i));
        }
    };
    OurServicesComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (!f.valid) {
            // validated
            this.toastr.info('Warning!', 'please fill in the missing fields');
            return;
        }
        if (!this.id) {
            // guarda
            var fileName = "imgs/" + new Date().valueOf().toString();
            var ref_1 = this.storage.ref(fileName);
            this.task = this.storage.upload(fileName, this.files[0]);
            this.task.snapshotChanges().subscribe(
            // The file's download URL
            (function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.serv;
                            return [4 /*yield*/, ref_1.getDownloadURL().toPromise()];
                        case 1:
                            _a.img = _b.sent();
                            this.ourServices.createService(this.serv).subscribe(function (data) {
                                _this.toastr.success('Success!', 'The service has been created successfully. ');
                                f.onReset();
                            }, function (err) {
                                _this.toastr.error('Oops', 'You have an error');
                            });
                            return [2 /*return*/];
                    }
                });
            }); }));
        }
        else {
            // actualiza
            this.ourServices.updateService(this.serv, this.id).subscribe(function (data) {
                _this.toastr.success('Success!', 'The service has been successfully updated. ');
                _this.id = "";
                f.onReset();
            }, function (err) {
                _this.toastr.error('Oops', 'You have an error');
                _this.id = "";
            });
        }
    };
    OurServicesComponent.prototype.getServices = function () {
        /** Se escucha los cambios en la lista.
         * obtiene la data del cambio
         */
        var _this = this;
        this.ourServices.getServicesList().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (data) { return _this.servicesArray = data; });
    };
    OurServicesComponent.prototype.getUpdate = function (key) {
        var _this = this;
        this.id = key;
        this.ourServices
            .getServiceById(this.id)
            .subscribe(function (data) { return _this.serv = data; });
    };
    OurServicesComponent.prototype.delete = function (key) {
        var _this = this;
        this.ourServices.deleteService(key).subscribe(function (data) {
            _this.toastr.success('Exito!', 'The service has been successfully removed. ');
        }, function (err) {
            _this.toastr.error('Oops', 'You have an error');
        });
    };
    OurServicesComponent.prototype.viewImage = function (img) {
        this.url = img;
    };
    OurServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-our-services",
            template: __webpack_require__(/*! ./our-services.component.html */ "./src/app/admin/our-services/our-services.component.html"),
            styles: [__webpack_require__(/*! ./our-services.component.css */ "./src/app/admin/our-services/our-services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_our_services_service__WEBPACK_IMPORTED_MODULE_2__["OurServicesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], OurServicesComponent);
    return OurServicesComponent;
}());



/***/ }),

/***/ "./src/app/admin/restaurant/restaurant.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/restaurant/restaurant.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/restaurant/restaurant.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/restaurant/restaurant.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-pages></app-nav-pages>\n\n<div class=\"page-content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\" sizeP col-md-2\">\n        <div class=\"sidebar content-box margin\" style=\"display: block;\">\n          <ul class=\"nav flex-column\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" routerLink=\"/admin/rooms\"><i class=\"fa fa-bed\"></i>Rooms</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/admin/categories\"><i class=\"fa fa-list\"></i>Categories</a>\n            </li>\n            <li>\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#collapseExample\" aria-expanded=\"false\"\n                aria-controls=\"collapseExample\"><i class=\"fas fa-concierge-bell\"></i>Services</a>\n              <div class=\"collapse\" id=\"collapseExample\">\n                <div class=\"card card-body\">\n                  <a class=\"nav-link\" routerLink=\"/admin/restaurant\"><i class=\"fa fa-f2bb\"></i>Restaurants</a>\n                  <a class=\"nav-link\" routerLink=\"/admin/our-services\"><i class=\"fa fa-layer-group\"></i>General</a>\n                </div>\n              </div>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"logout()\"><i class=\"fa fa-home\"></i>Exit</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\" sizeP col-md-10\">\n        <div class=\"container\">\n          <div class=\"content-box-large\">\n            <div class=\"panel-heading\">\n              <div class=\"panel-title\">Restaurant Management</div>\n            </div>\n            <!-- button-add -->\n            <div class=\"col col-xs-6 text-right\">\n              <p><button class=\"btn btn-add btn-xs\" data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@mdo\"><span class=\"fa fa-plus-square\"></span></button></p>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"table-responsive\">\n                <table id=\"mytable\" class=\"table table-bordered table-striped \">\n                  <thead>\n                    <tr>\n                      <th>Image</th>\n                      <th>Service name</th>\n                      <th class=\"break\">Description</th>\n                      <th>Hours</th>\n                      <th>Price</th>\n                      <th>Edit</th>\n                      <th>Delete</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"\n                    let rest of restaurantArray  \">\n                      <td><img *ngIf=\"rest.img\" \n                        (click)=\"viewImage( rest.img )\" \n                        data-toggle=\"modal\" data-target=\"#myModal\" data-whatever=\"@mdo\" \n                        class=\"img-50 pointer\" src=\"{{rest.img}}\"></td>\n                      <td>{{rest.name}}</td>\n                      <td>{{rest.description}}</td>\n                      <td>{{rest.hours}}</td>\n                      <td>{{rest.price}}</td>\n                      <td>\n                        <p data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@mdo\" title=\"Edit\"><button (click)=\"getUpdate(rest.key)\" class=\"btn btn-edit btn-xs\" data-target=\"#exampleModal\"><span class=\"fa fa-pencil\"></span></button></p>\n                      </td>\n                      <td>\n                        <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button (click)=\"delete(rest.key)\" class=\"btn btn-delete btn-xs\"><span class=\"fa fa-trash\"></span></button></p>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- modal normal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create a new service</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div id=\"carousel-example-generic\" data-interval=\"false\" class=\"carousel slide\" data-ride=\"carousel\">\n          <!-- Wrapper for slides -->\n          <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n            <div class=\"carousel-inner\">\n              <div class=\"carousel-item active\">\n                <div class=\"form-group\">\n                  <label for=\"recipient-name\" class=\"col-form-label\">Name:</label>\n                  <input [(ngModel)]=\"rest.name\" type=\"text\" class=\"form-control\" name=\"name\" required maxlength=80>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"message-text\" class=\"col-form-label\">Description:</label>\n                  <input [(ngModel)]=\"rest.description\" type=\"text\" class=\"form-control\" name=\"description\" required maxlength=200>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"message-text\" class=\"col-form-label\">Hours:</label>\n                  <input [(ngModel)]=\"rest.hours\" type=\"text\" class=\"form-control\" name=\"hours\" required>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"message-text\" class=\"col-form-label\">Price:</label>\n                  <input [(ngModel)]=\"rest.price\" type=\"number\" class=\"form-control\" name=\"price\" required>\n                </div>\n              </div>\n              <div class=\"carousel-item\">\n                <!-- <form> -->\n                <div class=\"dropzone\" \n                      appDropzone \n                      (hovered)=\"toggleHover($event)\" \n                      (dropped)=\"onDrop($event)\" \n                      [class.hovering]=\"isHovering\">\n                      \n                      <h3>Drag and Drop a File</h3>\n                      <div class=\"file\">\n                        <label class=\"file-label\">\n                      <input class=\"file-input\" type=\"file\" (change)=\"onDrop($event.target.files)\">\n                      \n                      <span class=\"file-cta\">\n                        <span class=\"file-icon\">\n                          <i class=\"fa fa-upload\"></i>\n                        </span>\n                        <span class=\"file-label\">\n                          or choose a file…\n                        </span>\n                      </span>\n                    </label>\n                  </div>\n                </div>\n               \n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n                </div>\n              </div>\n              \n            </div>\n          </form>\n          <!-- </form> -->\n          <!-- Controls -->\n                      <button  *ngIf=\"control\" (click)=\"control = false\" class=\" btn btn-primary \" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n                        <span class=\"fa fa-chevron-left\"></span>\n                      </button>\n          <button  (click)=\"control = true\" *ngIf=\"!control\" class=\" position btn btn-primary\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">Next\n            <span class=\"fa fa-chevron-right\"></span></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- modal component -->\n<app-modals [img]=\"url\"></app-modals>\n\n"

/***/ }),

/***/ "./src/app/admin/restaurant/restaurant.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/restaurant/restaurant.component.ts ***!
  \**********************************************************/
/*! exports provided: RestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantComponent", function() { return RestaurantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_restaurant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/restaurant.service */ "./src/app/services/restaurant.service.ts");







var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent(restaurant, authService, storage, toastr) {
        this.restaurant = restaurant;
        this.authService = authService;
        this.storage = storage;
        this.toastr = toastr;
        this.control = false;
        this.files = [];
        this.restaurantArray = [];
        this.rest = {
            name: "",
            description: "",
            hours: "",
            price: "",
            img: []
        };
    }
    RestaurantComponent.prototype.ngOnInit = function () {
        this.getRestaurant();
    };
    RestaurantComponent.prototype.logout = function () {
        this.authService.logout();
    };
    RestaurantComponent.prototype.toggleHover = function (event) {
        this.isHovering = event;
    };
    RestaurantComponent.prototype.onDrop = function (files) {
        // recibe los archivos
        for (var i = 0; i < files.length; i++) {
            this.files.push(files.item(i));
        }
    };
    RestaurantComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (!f.valid) {
            return;
        }
        if (!this.id) {
            // guarda
            var fileName = "imgs/" + new Date().valueOf().toString();
            var ref_1 = this.storage.ref(fileName);
            this.task = this.storage.upload(fileName, this.files[0]);
            this.task.snapshotChanges().subscribe(
            // The file's download URL
            (function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.rest;
                            return [4 /*yield*/, ref_1.getDownloadURL().toPromise()];
                        case 1:
                            _a.img = _b.sent();
                            this.restaurant.createRestaurant(this.rest).subscribe(function (data) {
                                _this.toastr.success('Exito!', 'El servicio ha sido creado con exito ');
                            }, function (err) {
                                _this.toastr.error('Oops', 'You have an error');
                            });
                            return [2 /*return*/];
                    }
                });
            }); }));
        }
        else {
            // actualiza
            this.restaurant.updateRestaurant(this.rest, this.id).subscribe(function (data) {
                _this.toastr.success('Exito!', 'El servicio ha sido actualizado con exito ');
                _this.id = "";
            }, function (err) {
                _this.toastr.error('Oops', 'You have an error');
                _this.id = "";
            });
        }
    };
    RestaurantComponent.prototype.getRestaurant = function () {
        /** Se escucha los cambios en la lista.
         * obtiene la data del cambio
         */
        var _this = this;
        this.restaurant.getRestaurantList().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (data) { return _this.restaurantArray = data; });
    };
    RestaurantComponent.prototype.getUpdate = function (key) {
        var _this = this;
        this.id = key;
        this.restaurant
            .getRestaurantById(this.id)
            .subscribe(function (data) { return _this.rest = data; });
    };
    RestaurantComponent.prototype.delete = function (key) {
        var _this = this;
        this.restaurant.deleteRestaurant(key).subscribe(function (data) {
            _this.toastr.success('Exito!', 'El servicio ha sido eliminado con exito ');
        }, function (err) {
            _this.toastr.error('Oops', 'You have an error');
        });
    };
    RestaurantComponent.prototype.viewImage = function (img) {
        this.url = img;
    };
    RestaurantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurant',
            template: __webpack_require__(/*! ./restaurant.component.html */ "./src/app/admin/restaurant/restaurant.component.html"),
            styles: [__webpack_require__(/*! ./restaurant.component.css */ "./src/app/admin/restaurant/restaurant.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_restaurant_service__WEBPACK_IMPORTED_MODULE_6__["RestaurantService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], RestaurantComponent);
    return RestaurantComponent;
}());



/***/ }),

/***/ "./src/app/admin/rooms/rooms.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/rooms/rooms.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Jvb21zL3Jvb21zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/rooms/rooms.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/rooms/rooms.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-pages></app-nav-pages>\r\n<div class=\"page-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\" sizeP col-md-2\">\r\n        <div class=\"sidebar content-box margin\" style=\"display: block;\">\r\n          <ul class=\"nav flex-column\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" routerLink=\"/admin/rooms\"><i class=\"fa fa-bed\"></i>Rooms</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/admin/categories\"><i class=\"fa fa-list\"></i>Categories</a>\r\n            </li>\r\n            <li>\r\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#collapseExample\" aria-expanded=\"false\"\r\n                aria-controls=\"collapseExample\"><i class=\"fas fa-concierge-bell\"></i>Services</a>\r\n              <div class=\"collapse\" id=\"collapseExample\">\r\n                <div class=\"card card-body\">\r\n                  <a class=\"nav-link\" routerLink=\"/admin/restaurant\"><i class=\"fa fa-f2bb\"></i>Restaurants</a>\r\n                  <a class=\"nav-link\" routerLink=\"/admin/our-services\"><i class=\"fa fa-layer-group\"></i>General</a>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" (click)=\"logout()\"><i class=\"fa fa-home\"></i>Exit</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\" sizeP col-md-10\">\r\n        <div class=\"container\">\r\n          <div class=\"content-box-large\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"panel-title\">Rooms Management</div>\r\n            </div>\r\n            <!-- button-add -->\r\n            <div class=\"col col-xs-6 text-right\">\r\n              <p><button class=\"btn btn-add btn-xs\" data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@mdo\"><span class=\"fa fa-plus-square\"></span></button></p>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <div class=\"table-responsive\">\r\n                <table id=\"mytable\" class=\"table table-bordered table-striped\">\r\n                  <thead>\r\n                    <tr >\r\n                      <th>Image</th>\r\n                      <th>Room number</th>\r\n                      <th>Category</th>\r\n                      <th>Description</th>\r\n                      <th>Characteristics</th>\r\n                      <th>AditionalInfo</th>\r\n                      <th style=\"width: 10px\">Price</th>\r\n                      <th>Edit</th>\r\n                      <th>Delete</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"\r\n                    let room of roomsArray \">\r\n                      <td> <img *ngIf=\"room.img\"\r\n                         (click)=\"viewImage(room.img)\" \r\n                         data-toggle=\"modal\" data-target=\"#myModal\" data-whatever=\"@mdo\" \r\n                         class=\"pointer img-50\" \r\n                         src=\"{{ room.img }}\"> </td>\r\n                      <td>{{ room.number }}</td>\r\n                      <td>{{ room.categoryName }}</td>\r\n                      <td class=\"break\">{{ room.description }}</td>\r\n                      <td class=\"break\">{{ room.characteristics }}</td>\r\n                      <td class=\"break\">{{ room.aditionalInfo }}</td>\r\n                      <td>{{ room.price }}</td>\r\n                      <td>\r\n                        <p data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@mdo\" title=\"Edit\"><button (click)=\"getUpdate(room.key)\" class=\"btn btn-edit btn-xs\"><span class=\"fa fa-pencil\"></span></button></p>\r\n                      </td>\r\n                      <td>\r\n                        <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button (click)=\"deleteRoom(room.key)\" class=\"btn btn-delete btn-xs\"><span class=\"fa fa-trash\"></span></button></p>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create a new room</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div id=\"carouselExampleControls\" data-interval=\"false\" class=\"carousel \" data-ride=\"carousel\">\r\n          <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n            <div class=\"carousel-inner\">\r\n              <div class=\"carousel-item active\">\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"recipient-name\" class=\"col-form-label\">Category:</label>\r\n                  <select [(ngModel)]=\"rom.categoryName\" type=\"text\" class=\"form-control\" name=\"categoryName\" required>\r\n                    <option value=\"\">Select a category</option>\r\n                    <option *ngFor=\"let cat of categoriesArray | keys let i = index\" [value]=\"categoriesArray[cat].name\">{{categoriesArray[cat].name}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"recipient-name\" class=\"col-form-label\">Number:</label>\r\n                  <input [(ngModel)]=\"rom.number\" type=\"number\" class=\"form-control\" name=\"number\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"message-text\" class=\"col-form-label\">Description:</label>\r\n                  <input [(ngModel)]=\"rom.description\" class=\"form-control\" name=\"description\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"message-text\" class=\"col-form-label\">Characteristics:</label>\r\n                  <input [(ngModel)]=\"rom.characteristics\" class=\"form-control\" name=\"characteristics\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"message-text\" class=\"col-form-label\">AditionalInfo:</label>\r\n                  <input [(ngModel)]=\"rom.aditionalInfo\" class=\"form-control\" name=\"aditionalInfo\" >\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"message-text\" class=\"col-form-label\">Price:</label>\r\n                  <input [(ngModel)]=\"rom.price\" type=\"number\" class=\"form-control\" name=\"price\" required>\r\n                </div>\r\n              </div>\r\n              <!-- form -->\r\n              <div class=\"carousel-item\">\r\n\r\n                <div class=\"dropzone\" \r\n                    appDropzone\r\n                    (hovered)=\"toggleHover($event)\" \r\n                    (dropped)=\"onDrop($event)\" \r\n                    [class.hovering]=\"isHovering\">\r\n\r\n                  <h3>Drag and Drop a File</h3>\r\n                  <div class=\"file\">\r\n                    <label class=\"file-label\">\r\n                      <input class=\"file-input\" type=\"file\" multiple  (change)=\"onDrop($event.target.files)\">\r\n\r\n                      <span class=\"file-cta\">\r\n                        <span class=\"file-icon\">\r\n                          <i class=\"fa fa-upload\"></i>\r\n                        </span>\r\n                        <span class=\"file-label\">\r\n                          or choose a file…\r\n                        </span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n          <!-- Controls -->\r\n          <button *ngIf=\"control\" (click)=\"control = false\" class=\"btn btn-primary \" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Previous</span>\r\n          </button>\r\n          <button (click)=\"control = true\" *ngIf=\"!control\" class=\" position btn btn-primary \" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n            Next <span class=\" carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-modals [img]=\"url\"></app-modals>\r\n"

/***/ }),

/***/ "./src/app/admin/rooms/rooms.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/rooms/rooms.component.ts ***!
  \************************************************/
/*! exports provided: RoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsComponent", function() { return RoomsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_rooms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rooms.service */ "./src/app/services/rooms.service.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");








var RoomsComponent = /** @class */ (function () {
    function RoomsComponent(roomsService, storage, authService, categoriesService, toastr) {
        this.roomsService = roomsService;
        this.storage = storage;
        this.authService = authService;
        this.categoriesService = categoriesService;
        this.toastr = toastr;
        this.control = false;
        this.files = [];
        this.categoriesArray = [];
        this.roomsArray = [];
        this.rom = {
            categoryName: '',
            number: 0,
            description: "",
            characteristics: "",
            aditionalInfo: "",
            price: 0,
            img: []
        };
    }
    RoomsComponent.prototype.ngOnInit = function () {
        this.getRooms();
        this.getCategories();
    };
    RoomsComponent.prototype.getUpdate = function (key) {
        var _this = this;
        this.id = key;
        this.roomsService
            .getRoomById(this.id)
            .subscribe(function (data) { return _this.rom = data; });
    };
    RoomsComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (!f.valid) {
            // validated
            this.toastr.info('Warning!', 'please fill in the missing fields');
            return;
        }
        if (!this.id) {
            // guarda
            var fileName = "imgs/" + new Date().valueOf().toString();
            var ref_1 = this.storage.ref(fileName);
            this.task = this.storage.upload(fileName, this.files[0]);
            this.task.snapshotChanges().subscribe(
            // The file's download URL
            (function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.rom;
                            return [4 /*yield*/, ref_1.getDownloadURL().toPromise()];
                        case 1:
                            _a.img = _b.sent();
                            this.roomsService.createRoom(this.rom).subscribe(function (data) {
                                _this.id = "";
                                f.onReset();
                                _this.toastr.success('Success!', 'The room has been successfully created.');
                            }, function (err) {
                                _this.toastr.error('Oops!', 'You have an error');
                                _this.id = "";
                            });
                            return [2 /*return*/];
                    }
                });
            }); }));
        }
        else {
            // actualiza
            this.roomsService.updateRoom(this.rom, this.id).subscribe(function (data) {
                _this.toastr.success('Success!', 'The room has been successfully updated');
                _this.id = "";
                f.onReset();
            }, function (err) {
                _this.toastr.error('Oops!', 'You have an error');
                _this.id = "";
            });
        }
    };
    RoomsComponent.prototype.toggleHover = function (event) {
        this.isHovering = event;
    };
    RoomsComponent.prototype.onDrop = function (files) {
        // recibe los archivos
        for (var i = 0; i < files.length; i++) {
            this.files.push(files.item(i));
        }
    };
    RoomsComponent.prototype.getRooms = function () {
        var _this = this;
        this.roomsService.getRoomsList().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (data) { return _this.roomsArray = data; });
    };
    RoomsComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService
            .getCategories()
            .subscribe(function (data) { return _this.categoriesArray = data; });
    };
    RoomsComponent.prototype.deleteRoom = function (key) {
        var _this = this;
        this.roomsService.deleteRoom(key).subscribe(function (data) {
            _this.toastr.success('Sucess!', 'The room has been successfully removed');
        }, function (err) {
            _this.toastr.error('Oops!', 'You have an error');
        });
    };
    RoomsComponent.prototype.viewImage = function (img) {
        this.url = img;
    };
    RoomsComponent.prototype.logout = function () {
        this.authService.logout();
    };
    RoomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-rooms",
            template: __webpack_require__(/*! ./rooms.component.html */ "./src/app/admin/rooms/rooms.component.html"),
            styles: [__webpack_require__(/*! ./rooms.component.css */ "./src/app/admin/rooms/rooms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rooms_service__WEBPACK_IMPORTED_MODULE_3__["RoomsService"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], RoomsComponent);
    return RoomsComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/users.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/users/users.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/users/users.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/users/users.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-pages></app-nav-pages>\r\n\r\n<div class=\"page-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\" sizeP col-md-2\">\r\n        <div class=\"sidebar content-box margin\" style=\"display: block;\">\r\n          <ul class=\"nav flex-column\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" routerLink=\"/admin/rooms\"><i class=\"fa fa-bed\"></i>Rooms</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/admin/categories\"><i class=\"fa fa-list\"></i>Categories</a>\r\n            </li>\r\n            <li>\r\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#collapseExample\" aria-expanded=\"false\"\r\n                aria-controls=\"collapseExample\"><i class=\"fas fa-concierge-bell\"></i>Services</a>\r\n              <div class=\"collapse\" id=\"collapseExample\">\r\n                <div class=\"card card-body\">\r\n                  <a class=\"nav-link\" routerLink=\"/admin/restaurant\"><i class=\"fa fa-f2bb\"></i>Restaurants</a>\r\n                  <a class=\"nav-link\" routerLink=\"/admin/our-services\"><i class=\"fa fa-layer-group\"></i>General</a>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" (click)=\"logout()\"><i class=\"fa fa-home\"></i>Exit</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-10\">\r\n        <div class=\"container\">\r\n          <div class=\"content-box-large\">\r\n            \r\n              <div class=\"panel-heading\">\r\n                <div class=\"panel-title\">Users Management</div>\r\n              </div>\r\n\r\n              <hr>\r\n              <div class=\"panel-body col-xs-12\">\r\n                <div class=\"table-responsive col-xs-12\">\r\n                  <table id=\"mytable\" class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Name</th>\r\n                        <th>Email</th>\r\n                        <th>Office</th>\r\n                        <th>Status</th>                                               \r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"\r\n                          let user of usersArray \">\r\n                        <td>{{ user.name }}</td>\r\n                        <td>{{ user.email }}</td>\r\n                        <td>{{ user.office }}</td>                        \r\n                        <td>\r\n\r\n                          <button class=\"btn btn-primary\" *ngIf=\"user.permissionState\" (click)=\"updateStatus(user['key'], false)\">Inactive</button>\r\n                          <button class=\"btn btn-warning\" *ngIf=\"!user.permissionState\" (click)=\"updateStatus(user['key'], true)\">Active</button>\r\n                        </td>\r\n\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService, authService) {
        this.userService = userService;
        this.authService = authService;
        this.usersArray = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        /** Se escucha los cambios en la lista.
         * obtiene la data del cambio
         */
        var _this = this;
        this.userService.getUsersList().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (data) { return _this.usersArray = data; });
    };
    UsersComponent.prototype.updateStatus = function (key, isActive) {
        this.userService.updateUser(key, { permissionState: isActive })
            .catch(function (err) { return sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('You have an error', err, 'error'); });
    };
    UsersComponent.prototype.logout = function () {
        this.authService.logout();
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/admin/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/admin/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _pages_room_room_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/room/room.component */ "./src/app/pages/room/room.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_single_single_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/single/single.component */ "./src/app/pages/single/single.component.ts");
/* harmony import */ var _pages_destination_destination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/destination/destination.component */ "./src/app/pages/destination/destination.component.ts");
/* harmony import */ var _pages_destination_single_destination_single_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/destination-single/destination-single.component */ "./src/app/pages/destination-single/destination-single.component.ts");
/* harmony import */ var _pages_hotel_single_hotel_single_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/hotel-single/hotel-single.component */ "./src/app/pages/hotel-single/hotel-single.component.ts");
/* harmony import */ var _admin_categories_categories_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/categories/categories.component */ "./src/app/admin/categories/categories.component.ts");
/* harmony import */ var _admin_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/our-services/our-services.component */ "./src/app/admin/our-services/our-services.component.ts");
/* harmony import */ var _admin_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/rooms/rooms.component */ "./src/app/admin/rooms/rooms.component.ts");
/* harmony import */ var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/users/users.component */ "./src/app/admin/users/users.component.ts");
/* harmony import */ var _pages_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/reservation/reservation.component */ "./src/app/pages/reservation/reservation.component.ts");
/* harmony import */ var _admin_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/restaurant/restaurant.component */ "./src/app/admin/restaurant/restaurant.component.ts");




// guard

// pages














var routes = [
    { path: "", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: "single", component: _pages_single_single_component__WEBPACK_IMPORTED_MODULE_9__["SingleComponent"] },
    { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: "destination", component: _pages_destination_destination_component__WEBPACK_IMPORTED_MODULE_10__["DestinationComponent"] },
    { path: "destination-single", component: _pages_destination_single_destination_single_component__WEBPACK_IMPORTED_MODULE_11__["DestinationSingleComponent"] },
    { path: "hotel-single", component: _pages_hotel_single_hotel_single_component__WEBPACK_IMPORTED_MODULE_12__["HotelSingleComponent"] },
    { path: "rooms", component: _pages_room_room_component__WEBPACK_IMPORTED_MODULE_7__["RoomComponent"] },
    { path: "reservation", component: _pages_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_17__["ReservationComponent"] },
    { path: "register", component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: "login", component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "admin/users", component: _admin_users_users_component__WEBPACK_IMPORTED_MODULE_16__["UsersComponent"] },
    { path: "admin/categories", component: _admin_categories_categories_component__WEBPACK_IMPORTED_MODULE_13__["CategoriesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: "admin/our-services", component: _admin_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_14__["OurServicesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: "admin/restaurant", component: _admin_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_18__["RestaurantComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: "admin/rooms", component: _admin_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_15__["RoomsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: "**", pathMatch: "full", redirectTo: "home" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hostal';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");










// enviroment

// Firebase









// import { MaterialModule } from './material/material.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _auth_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__["AdminModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_9__["ServicesModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            ],
            providers: [_angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabase"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnMar {\r\n    margin-bottom: 20px !important;\r\n    margin-top: 20px !important;\r\n    background-color: #007BFF !important;\r\n    border-color:#007BFF !important;\r\n}\r\n\r\n.f {\r\n    font-family: Poppins-Regular;\r\n}\r\n\r\na {\r\n    color:  #007BFF !important;\r\n}\r\n\r\n:root {\r\n  --input-padding-x: 1.5rem;\r\n  --input-padding-y: 0.75rem;  \r\n}\r\n\r\n.login,\r\n.image {\r\n  min-height: 100vh;\r\n}\r\n\r\n.bg-image {\r\n  background-image: url('fondologin.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n.login-heading {\r\n  font-weight: 300;\r\n}\r\n\r\n.btn-login {\r\n  font-size: 0.9rem;\r\n  letter-spacing: 0.05rem;\r\n  padding: 0.75rem 1rem;\r\n  border-radius: 2rem;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group>input,\r\n.form-label-group>label {\r\n  padding: var(--input-padding-y) var(--input-padding-x) !important;\r\n  height: auto;\r\n  border-radius: 2rem;\r\n}\r\n\r\n.form-label-group>label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  cursor: text;\r\n  /* Match the input under the label */\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-moz-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown)~label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n/* Fallback for Edge\r\n-------------------------------------------------- */\r\n\r\n@supports (-ms-ime-align: auto) {\r\n  .form-label-group>label {\r\n    display: none;\r\n  }\r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: #777;\r\n  }\r\n}\r\n\r\n/* Fallback for IE\r\n-------------------------------------------------- */\r\n\r\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\r\n  .form-label-group>label {\r\n    display: none;\r\n  }\r\n  .form-label-group input:-ms-input-placeholder {\r\n    color: #777;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixvQ0FBb0M7SUFDcEMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1Q0FBOEQ7RUFDOUQsc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsaUVBQWlFO0VBQ2pFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQU1BO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEVBQTRFO0VBQzVFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxnREFBZ0Q7RUFDaEQsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtvREFDb0Q7O0FBRXBEO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO29EQUNvRDs7QUFFcEQ7RUFFRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuTWFyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdCRkYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjojMDA3QkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICAjMDA3QkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xyXG4gIC0taW5wdXQtcGFkZGluZy15OiAwLjc1cmVtOyAgXHJcbn1cclxuXHJcbi5sb2dpbixcclxuLmltYWdlIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmJnLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZm9uZG9sb2dpbi5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWhlYWRpbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5idG4tbG9naW4ge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwPmlucHV0LFxyXG4uZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZy15KSB2YXIoLS1pbnB1dC1wYWRkaW5nLXgpICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGN1cnNvcjogdGV4dDtcclxuICAvKiBNYXRjaCB0aGUgaW5wdXQgdW5kZXIgdGhlIGxhYmVsICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XHJcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSArIHZhcigtLWlucHV0LXBhZGRpbmcteSkgKiAoMiAvIDMpKTtcclxuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pfmxhYmVsIHtcclxuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzc3NztcclxufVxyXG5cclxuLyogRmFsbGJhY2sgZm9yIEVkZ2VcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBGYWxsYmFjayBmb3IgSUVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksXHJcbigtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\">\r\n  <div class=\"row no-gutter\">\r\n    <div class=\"d-none d-md-flex col-md-4 col-lg-6 bg-image\"></div>\r\n    <div class=\"col-md-8 col-lg-6\">\r\n      <div class=\"login d-flex align-items-center py-5\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-9 col-lg-8 mx-auto\">\r\n              <h3 class=\"f login-heading mb-4\">Welcome back!</h3>\r\n              <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n                <div class=\"wrap-input100 validate-input m-b-26\" data-validate=\"Username is required\">\r\n          <span class=\"label-input100\">Email</span>\r\n          <input class=\"input100\" type=\"email\" ngModel name=\"email\" placeholder=\"Enter email\" autocomplete=\"nope\">\r\n          <span class=\"focus-input100\"></span>\r\n        </div>\r\n\r\n                    <div class=\"wrap-input100 validate-input m-b-18\" data-validate=\"Password is required\">\r\n          <span class=\"label-input100\">Password</span>\r\n          <input class=\"input100\" ngModel type=\"password\" name=\"password\" placeholder=\"Enter password\">\r\n          <span class=\"focus-input100\"></span>\r\n        </div>\r\n         <div class=\"text-left\">\r\n                  <a  class=\"co\" style=\"font-size: 16px\" routerLink=\"/register\">Sign up</a></div>\r\n               \r\n                <button class=\" btnMar btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2\" type=\"submit\">Sign in</button>\r\n                <div class=\"text-center\">\r\n                  <a class=\"co\"  style=\"font-size: 16px\" routerLink=\"/home\">Home <span class=\"ion-ios-arrow-forward margin\"></span></a></div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div class=\"limiter\">\r\n  <div class=\"container-login100\">\r\n    <div class=\"wrap-login100\">\r\n      <div class=\"login100-form-title\" style=\"background-image: url(assets/login/images/bg-01.jpg);\">\r\n        <span class=\"login100-form-title-1\">\r\n          Sign In\r\n        </span>\r\n      </div>\r\n\r\n      <form class=\"login100-form validate-form\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n        <div class=\"wrap-input100 validate-input m-b-26\" data-validate=\"Username is required\">\r\n          <span class=\"label-input100\">Email Address</span>\r\n          <input class=\"input100\" type=\"email\" ngModel name=\"email\" placeholder=\"Enter email\" autocomplete=\"nope\">\r\n          <span class=\"focus-input100\"></span>\r\n        </div>\r\n\r\n        <div class=\"wrap-input100 validate-input m-b-18\" data-validate=\"Password is required\">\r\n          <span class=\"label-input100\">Password</span>\r\n          <input class=\"input100\" ngModel type=\"password\" name=\"password\" placeholder=\"Enter password\">\r\n          <span class=\"focus-input100\"></span>\r\n        </div>\r\n\r\n        <div>\r\n          <a routerLink=\"/register\" class=\"txt1\">\r\n            Sing up\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"container-login100-form-btn\">\r\n          <button class=\"login100-form-btn\" type=\"submit\">\r\n            Login\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.validateForms();
    };
    LoginComponent.prototype.validateForms = function () {
        this.forma;
    };
    LoginComponent.prototype.onSubmit = function (f) {
        this.authService.login(f.value);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .card-4 .card-body {\r\n    padding: 57px 150px;\r\n    padding-bottom: 65px;\r\n} */\r\n.btn-register{\r\n  background-color: #007BFF;  \r\n  border: 1px solid #007BFF ;\r\n  color: #fff ;\r\n  border-radius: 2px;  \r\n}\r\n.main-container{\r\n  margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUNIO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY2FyZC00IC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogNTdweCAxNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2NXB4O1xyXG59ICovXHJcbi5idG4tcmVnaXN0ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0JGRjsgIFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdCRkYgO1xyXG4gIGNvbG9yOiAjZmZmIDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7ICBcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\">\r\n\r\n<div class=\"row justify-content-center\">\r\n<div class=\"col-md-6\">\r\n<div class=\"card  main-container\">\r\n<header class=\"card-header\">\r\n\t<a routerLink=\"/login\"class=\"float-right btn btn-outline-primary mt-1\">Log in</a>\r\n\t<h4 class=\"card-title mt-2\">Sign up</h4>\r\n</header>\r\n<article class=\"card-body\">\r\n<form (ngSubmit)=\"onSubmit(f)\" class=\"form-horizontal form-material\" id=\"loginform\" #f=\"ngForm\">\r\n\t<div class=\"form-row\">\r\n\t\t<div class=\"col form-group\">\r\n\t\t\t<label>Name </label>   \r\n\t\t  \t<input  ngModel name=\"name\" type=\"text\" class=\"form-control\"  required>\r\n\t\t</div> <!-- form-group end.// -->\r\n\t\t<div class=\"col form-group\">\r\n\t\t\t<label>Office</label>\r\n\t\t  \t<input  ngModel name=\"office\" type=\"text\" class=\"form-control\">\r\n\t\t</div> <!-- form-group end.// -->\r\n\t</div> <!-- form-row end.// -->\r\n\t<div class=\"form-group\">\r\n\t\t<label>Email address</label>\r\n\t\t<input ngModel name=\"email\" type=\"email\" class=\"form-control\">\r\n\t\t<small class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n\t</div> <!-- form-group end.// -->\r\n \r\n\t<div class=\"form-group\">\r\n\t\t<label>Create password</label>\r\n\t    <input  ngModel name=\"password\" class=\"form-control\" type=\"password\">\r\n\t</div> <!-- form-group end.// -->  \r\n    <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-register btn-block\"> Register  </button>\r\n    </div> <!-- form-group// -->      \r\n    <small class=\"text-muted\">By clicking the 'Sign Up' button, you confirm that you accept our <br> Terms of use and Privacy Policy.</small>                                          \r\n</form>\r\n</article> <!-- card-body end .// -->\r\n<div class=\"border-top card-body text-center\">Have an account? <a routerLink=\"/login\" style=\"color: #007BFF\" href=\"\">Log In</a></div>\r\n</div> <!-- card.// -->\r\n</div> <!-- col.//-->\r\n\r\n</div> <!-- row.//-->\r\n</div> \r\n'´¿+'\r\n<!-- <div class=\"card-4\">\r\n<div class=\"card-body\">\r\n<section id=\"wrapper\">\r\n  <div class=\"login-register\">\r\n    <div class=\"login-box card\">\r\n      <div class=\"card-body\">\r\n        <form (ngSubmit)=\"onSubmit(f)\" class=\"form-horizontal form-material\" id=\"loginform\" #f=\"ngForm\">\r\n          <h3 class=\"box-title m-b-20\">Sign Up</h3>\r\n          <div class=\"form-group\">\r\n            <div class=\"col-xs-12\">\r\n              <input ngModel name=\"name\" class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Name\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group \">\r\n            <div class=\"col-xs-12\">\r\n              <input ngModel name=\"email\" class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Email\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group \">\r\n            <div class=\"col-xs-12\">\r\n              <input ngModel name=\"password\" class=\"form-control\" type=\"password\" required=\"\" placeholder=\"Password\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <div class=\"col-xs-12\">\r\n              <input ngModel name=\"office\" class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Office\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group text-center p-b-20\">\r\n            <div class=\"col-xs-12\">\r\n              <button class=\"btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light\" type=\"submit\">\r\n                Sign Up\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group m-b-0\">\r\n            <div class=\"col-sm-12 text-center\">\r\n              Already have an account?\r\n              <a routerLink=\"/login\" class=\"text-info m-l-5\"><b>Sign In</b></a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n</div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onSubmit = function (f) {
        this.authService.register(f.value);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/modals/modals.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/modals/modals.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\" *ngIf=\"img\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title text-themecolor\" id=\"exampleModalLabel\">Preview</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body text-center\">\r\n        <img [src]=\"img\" class=\"w150\">\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/modals/modals.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/modals/modals.component.ts ***!
  \*******************************************************/
/*! exports provided: ModalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function() { return ModalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalsComponent = /** @class */ (function () {
    function ModalsComponent() {
    }
    ModalsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalsComponent.prototype, "img", void 0);
    ModalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modals',
            template: __webpack_require__(/*! ./modals.component.html */ "./src/app/components/modals/modals.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalsComponent);
    return ModalsComponent;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: URL_SERVICES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_SERVICES", function() { return URL_SERVICES; });
var URL_SERVICES = 'https://hostal-8c19f.firebaseio.com/';


/***/ }),

/***/ "./src/app/dropzone.directive.ts":
/*!***************************************!*\
  !*** ./src/app/dropzone.directive.ts ***!
  \***************************************/
/*! exports provided: DropzoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropzoneDirective", function() { return DropzoneDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropzoneDirective = /** @class */ (function () {
    function DropzoneDirective() {
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hovered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DropzoneDirective.prototype.onDrop = function ($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    };
    DropzoneDirective.prototype.onDragOver = function ($event) {
        $event.preventDefault();
        this.hovered.emit(true);
    };
    DropzoneDirective.prototype.onDragLeave = function ($event) {
        $event.preventDefault();
        this.hovered.emit(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropzoneDirective.prototype, "dropped", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropzoneDirective.prototype, "hovered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropzoneDirective.prototype, "onDrop", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropzoneDirective.prototype, "onDragOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropzoneDirective.prototype, "onDragLeave", null);
    DropzoneDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDropzone]'
        })
    ], DropzoneDirective);
    return DropzoneDirective;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.authService.isAuth();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");








var MaterialComponents = [
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]
    // MatFormFieldControl
    // MatDatepickerInput
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [MaterialComponents],
            exports: [MaterialComponents]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/pages/destination-single/destination-single.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/destination-single/destination-single.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rlc3RpbmF0aW9uLXNpbmdsZS9kZXN0aW5hdGlvbi1zaW5nbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/destination-single/destination-single.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/destination-single/destination-single.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-pages></app-nav-pages>\n\n<section class=\"hero-wrap\" style=\"background-image: url('assets/images/destination-single.jpg');\"\n  data-stellar-background-ratio=\"0.5\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row no-gutters slider-text align-items-center justify-content-start\">\n      <div class=\"col-md-9 pb-4\">\n        <h1 class=\"mb-3 bread\">Discover Greece</h1>\n        <p>\n          <a href=\"#\" class=\"btn btn-primary py-2 px-4\">Book this tour</a>\n          <a href=\"#\" class=\"btn btn-black py-2 px-4\">Watch Video</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"ftco-section ftco-services-2 ftco-no-pt\">\n  <div class=\"container-fluid px-0 bg-light\">\n    <div class=\"container\">\n      <div class=\"row tour py-5\">\n        <div class=\"col-md d-flex align-self-stretch \">\n          <div class=\"media block-6 services text-center d-block\">\n            <div class=\"icon justify-content-center align-items-center d-flex\">\n              <span class=\"flaticon-alarm-clock\"></span>\n            </div>\n            <div class=\"media-body\">\n              <h3 class=\"heading mb-3\">5 Days</h3>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md d-flex align-self-stretch \">\n          <div class=\"media block-6 services text-center d-block\">\n            <div class=\"icon justify-content-center align-items-center d-flex\">\n              <span class=\"flaticon-manager\"></span>\n            </div>\n            <div class=\"media-body\">\n              <h3 class=\"heading mb-3\">Age 12+</h3>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md d-flex align-self-stretch \">\n          <div class=\"media block-6 services text-center d-block\">\n            <div class=\"icon justify-content-center align-items-center d-flex\">\n              <span class=\"flaticon-calendar\"></span>\n            </div>\n            <div class=\"media-body\">\n              <h3 class=\"heading mb-3\">April, May, June</h3>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md d-flex align-self-stretch \">\n          <div class=\"media block-6 services text-center d-block\">\n            <div class=\"icon justify-content-center align-items-center d-flex\">\n              <span class=\"flaticon-layers\"></span>\n            </div>\n            <div class=\"media-body\">\n              <h3 class=\"heading mb-3\">Availability 30</h3>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md d-flex align-self-stretch \">\n          <div class=\"media block-6 services text-center d-block\">\n            <div class=\"icon justify-content-center align-items-center d-flex\">\n              <span class=\"flaticon-wallet\"></span>\n            </div>\n            <div class=\"media-body\">\n              <h3 class=\"heading mb-3\"><span>$500</span> $400</h3>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 tour-wrap mb-5\">\n        <div class=\"row\">\n          <div class=\"col-md-6 d-flex \">\n            <div class=\"img align-self-stretch\" style=\"background-image: url(assets/images/destination-1.jpg);\"></div>\n          </div>\n          <div class=\"col-md-6 \">\n            <div class=\"text py-5\">\n              <h3><a href=\"#\">Discover Greece</a></h3>\n              <p class=\"pos\">from <span class=\"price\">$400.00</span>5 days</p>\n              <p>\n                Far far away, behind the word mountains, far from the countries\n                Vokalia and Consonantia, there live the blind texts. Separated\n                they live in Bookmarksgrove right at the coast of the Semantics,\n                a large language ocean. A small river named Duden flows by their\n                place and supplies it with the necessary regelialia. It is a\n                paradisematic country, in which roasted parts of sentences fly\n                into your mouth.\n              </p>\n              <p>\n                <a href=\"#\" class=\"btn btn-secondary\">Details</a>\n                <a href=\"#\" class=\"btn btn-primary\">Book now</a>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12 tour-wrap\">\n        <div class=\"day-wrap\">\n          <h3 class=\"pl-5\">Day 1</h3>\n          <p>\n            Far far away, behind the word mountains, far from the countries\n            Vokalia and Consonantia, there live the blind texts. Separated they\n            live in Bookmarksgrove right at the coast of the Semantics, a large\n            language ocean.\n          </p>\n          <img src=\"assets/images/bg_1.jpg\" class=\"img-fluid\" alt=\"Colorlib Free Template\" />\n        </div>\n      </div>\n      <div class=\"col-md-12 tour-wrap\">\n        <div class=\"day-wrap\">\n          <h3 class=\"pl-5\">Day 2</h3>\n          <p>\n            Far far away, behind the word mountains, far from the countries\n            Vokalia and Consonantia, there live the blind texts. Separated they\n            live in Bookmarksgrove right at the coast of the Semantics, a large\n            language ocean.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-md-12 tour-wrap\">\n        <div class=\"day-wrap\">\n          <h3 class=\"pl-5\">Day 3</h3>\n          <p>\n            Far far away, behind the word mountains, far from the countries\n            Vokalia and Consonantia, there live the blind texts. Separated they\n            live in Bookmarksgrove right at the coast of the Semantics, a large\n            language ocean.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-md-12 tour-wrap\">\n        <div class=\"day-wrap\">\n          <h3 class=\"pl-5\">Day 4</h3>\n          <p>\n            Far far away, behind the word mountains, far from the countries\n            Vokalia and Consonantia, there live the blind texts. Separated they\n            live in Bookmarksgrove right at the coast of the Semantics, a large\n            language ocean.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-md-12 tour-wrap\">\n        <div class=\"day-wrap\">\n          <h3 class=\"pl-5\">Day 5</h3>\n          <p>\n            Far far away, behind the word mountains, far from the countries\n            Vokalia and Consonantia, there live the blind texts. Separated they\n            live in Bookmarksgrove right at the coast of the Semantics, a large\n            language ocean.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-md-12 tour-wrap\">\n        <p>\n          <a href=\"#\" class=\"btn btn-primary py-3 px-4\">Book this tour</a>\n          <a href=\"#\" class=\"btn btn-secondary py-3 px-4\">Share this tour</a>\n        </p>\n      </div>\n      <div class=\"col-md-12 tour-wrap\">\n        <table class=\"table\">\n          <tbody>\n            <tr>\n              <th scope=\"row\">Departure</th>\n              <td>\n                <p>Greece International Airport</p>\n              </td>\n              <td></td>\n            </tr>\n            <!-- END TR-->\n\n            <tr>\n              <th scope=\"row\">Departure Time</th>\n              <td>\n                <p>\n                  Please arrive by 10:20 AM for a prompt departure at 10:50 AM\n                </p>\n              </td>\n              <td></td>\n            </tr>\n            <!-- END TR-->\n\n            <tr>\n              <th scope=\"row\">Return Time</th>\n              <td>\n                <p>Approximately 8:30 PM</p>\n              </td>\n              <td></td>\n            </tr>\n            <!-- END TR-->\n\n            <tr>\n              <th scope=\"row\">Included</th>\n              <td class=\"d-flex\">\n                <ul>\n                  <li>Airfare</li>\n                  <li>5 star accomodation</li>\n                </ul>\n                <ul>\n                  <li>Local transportation</li>\n                  <li>Private Professional Guide</li>\n                </ul>\n              </td>\n              <td></td>\n            </tr>\n            <!-- END TR-->\n\n            <tr>\n              <th scope=\"row\">Not Included</th>\n              <td class=\"d-flex\">\n                <ul>\n                  <li>Departure Taxes</li>\n                </ul>\n                <ul>\n                  <li>Entry Fees</li>\n                </ul>\n              </td>\n              <td></td>\n            </tr>\n            <!-- END TR-->\n\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-md-12 tour-wrap\">\n        <div class=\"pt-5 mt-5\">\n          <h3 class=\"mb-5\">6 Reviews</h3>\n          <ul class=\"comment-list\">\n            <li class=\"comment\">\n              <div class=\"vcard bio\">\n                <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\" />\n              </div>\n              <div class=\"comment-body\">\n                <h3>John Doe</h3>\n                <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                  Pariatur quidem laborum necessitatibus, ipsam impedit vitae\n                  autem, eum officia, fugiat saepe enim sapiente iste iure! Quam\n                  voluptas earum impedit necessitatibus, nihil?\n                </p>\n                <p><a href=\"#\" class=\"reply\">Reply</a></p>\n              </div>\n            </li>\n\n            <li class=\"comment\">\n              <div class=\"vcard bio\">\n                <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\" />\n              </div>\n              <div class=\"comment-body\">\n                <h3>John Doe</h3>\n                <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                  Pariatur quidem laborum necessitatibus, ipsam impedit vitae\n                  autem, eum officia, fugiat saepe enim sapiente iste iure! Quam\n                  voluptas earum impedit necessitatibus, nihil?\n                </p>\n                <p><a href=\"#\" class=\"reply\">Reply</a></p>\n              </div>\n\n              <ul class=\"children\">\n                <li class=\"comment\">\n                  <div class=\"vcard bio\">\n                    <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\" />\n                  </div>\n                  <div class=\"comment-body\">\n                    <h3>John Doe</h3>\n                    <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                    <p>\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                      Pariatur quidem laborum necessitatibus, ipsam impedit\n                      vitae autem, eum officia, fugiat saepe enim sapiente iste\n                      iure! Quam voluptas earum impedit necessitatibus, nihil?\n                    </p>\n                    <p><a href=\"#\" class=\"reply\">Reply</a></p>\n                  </div>\n\n                  <ul class=\"children\">\n                    <li class=\"comment\">\n                      <div class=\"vcard bio\">\n                        <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\" />\n                      </div>\n                      <div class=\"comment-body\">\n                        <h3>John Doe</h3>\n                        <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                        <p>\n                          Lorem ipsum dolor sit amet, consectetur adipisicing\n                          elit. Pariatur quidem laborum necessitatibus, ipsam\n                          impedit vitae autem, eum officia, fugiat saepe enim\n                          sapiente iste iure! Quam voluptas earum impedit\n                          necessitatibus, nihil?\n                        </p>\n                        <p><a href=\"#\" class=\"reply\">Reply</a></p>\n                      </div>\n\n                      <ul class=\"children\">\n                        <li class=\"comment\">\n                          <div class=\"vcard bio\">\n                            <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\" />\n                          </div>\n                          <div class=\"comment-body\">\n                            <h3>John Doe</h3>\n                            <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                            <p>\n                              Lorem ipsum dolor sit amet, consectetur\n                              adipisicing elit. Pariatur quidem laborum\n                              necessitatibus, ipsam impedit vitae autem, eum\n                              officia, fugiat saepe enim sapiente iste iure!\n                              Quam voluptas earum impedit necessitatibus, nihil?\n                            </p>\n                            <p><a href=\"#\" class=\"reply\">Reply</a></p>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n\n            <li class=\"comment\">\n              <div class=\"vcard bio\">\n                <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\" />\n              </div>\n              <div class=\"comment-body\">\n                <h3>John Doe</h3>\n                <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                  Pariatur quidem laborum necessitatibus, ipsam impedit vitae\n                  autem, eum officia, fugiat saepe enim sapiente iste iure! Quam\n                  voluptas earum impedit necessitatibus, nihil?\n                </p>\n                <p><a href=\"#\" class=\"reply\">Reply</a></p>\n              </div>\n            </li>\n          </ul>\n          <!-- END comment-list -->\n\n          <div class=\"comment-form-wrap pt-5\">\n            <h3 class=\"mb-5\">Leave a comment</h3>\n            <form action=\"#\" class=\"p-5 bg-light\">\n              <div class=\"form-group\">\n                <label for=\"name\">Name *</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Email *</label>\n                <input type=\"email\" class=\"form-control\" id=\"email\" />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"website\">Website</label>\n                <input type=\"url\" class=\"form-control\" id=\"website\" />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"message\">Message</label>\n                <textarea name=\"\" id=\"message\" cols=\"30\" rows=\"10\" class=\"form-control\"></textarea>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"submit\" value=\"Post Comment\" class=\"btn py-3 px-4 btn-primary\" />\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- .section -->"

/***/ }),

/***/ "./src/app/pages/destination-single/destination-single.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/destination-single/destination-single.component.ts ***!
  \**************************************************************************/
/*! exports provided: DestinationSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationSingleComponent", function() { return DestinationSingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DestinationSingleComponent = /** @class */ (function () {
    function DestinationSingleComponent() {
    }
    DestinationSingleComponent.prototype.ngOnInit = function () {
    };
    DestinationSingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-destination-single',
            template: __webpack_require__(/*! ./destination-single.component.html */ "./src/app/pages/destination-single/destination-single.component.html"),
            styles: [__webpack_require__(/*! ./destination-single.component.css */ "./src/app/pages/destination-single/destination-single.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DestinationSingleComponent);
    return DestinationSingleComponent;
}());



/***/ }),

/***/ "./src/app/pages/destination/destination.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/destination/destination.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transparency{\r\n  background-color: #000000;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVzdGluYXRpb24vZGVzdGluYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rlc3RpbmF0aW9uL2Rlc3RpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNwYXJlbmN5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/destination/destination.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/destination/destination.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-pages></app-nav-pages>\n\n<section class=\"hero-wrap hero-wrap-2\" style=\"background-image: url('assets/images/destination-single.jpg');\"\n  data-stellar-background-ratio=\"0.5\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row no-gutters slider-text align-items-end justify-content-start\">\n      <div class=\"col-md-9  pb-4\">\n        <h1 class=\"mb-3 bread\">Discover New Place</h1>\n        <p>\n          <a routerLink=\"/destination-single\" class=\"transparency btn btn-primary px-5 py-3 mt-3\">Single Destination <span\n              class=\"ion-ios-arrow-forward\"></span></a>\n        </p>\n        <p class=\"breadcrumbs\">\n          <span class=\"mr-2\"><a routerLink=\"/home \">Home <i class=\"ion-ios-arrow-forward\"></i></a></span>\n          <span>Destination <i class=\"ion-ios-arrow-forward\"></i></span>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"ftco-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-9 pr-lg-4\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-lg-4 \">\n            <div class=\"project\">\n              <div class=\"img\">\n                <div class=\"vr\"></div>\n                <a href=\"destination-single.html\"><img src=\"assets/images/destination-1.jpg\" class=\"img-fluid\"\n                    alt=\"Colorlib Template\" /></a>\n              </div>\n              <div class=\"text\">\n                <h4 class=\"price\">\n                  \n                </h4>\n                <span>15 Days Tour</span>\n                <h3>\n                  <a href=\"destination-single.html\">Gurtnellen, Swetzerland</a>\n                </h3>\n                <div class=\"star d-flex clearfix\">\n                  <div class=\"mr-auto float-left\">\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                  </div>\n                  <div class=\"float-right\">\n                    <span class=\"rate\"><a href=\"#\">(120)</a></span>\n                  </div>\n                </div>\n              </div>\n              <a href=\"assets/images/destination-1.jpg\"\n                class=\"icon image-popup d-flex justify-content-center align-items-center\">\n                <span class=\"icon-expand\"></span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-4 \">\n            <div class=\"project\">\n              <div class=\"img\">\n                <a href=\"destination-single.html\"><img src=\"assets/images/destination-2.jpg\" class=\"img-fluid\"\n                    alt=\"Colorlib Template\" /></a>\n              </div>\n              <div class=\"text\">\n                \n                <span>15 Days Tour</span>\n                <h3>\n                  <a href=\"destination-single.html\">Gurtnellen, Swetzerland</a>\n                </h3>\n                <div class=\"star d-flex clearfix\">\n                  <div class=\"mr-auto float-left\">\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                  </div>\n                  <div class=\"float-right\">\n                    <span class=\"rate\"><a href=\"#\">(120)</a></span>\n                  </div>\n                </div>\n              </div>\n              <a href=\"assets/images/destination-2.jpg\"\n                class=\"icon image-popup d-flex justify-content-center align-items-center\">\n                <span class=\"icon-expand\"></span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-4 \">\n            <div class=\"project\">\n              <div class=\"img\">\n                <a href=\"destination-single.html\"><img src=\"assets/images/destination-3.jpg\" class=\"img-fluid\"\n                    alt=\"Colorlib Template\" /></a>\n              </div>\n              <div class=\"text\">\n                \n                <span>15 Days Tour</span>\n                <h3>\n                  <a href=\"destination-single.html\">Gurtnellen, Swetzerland</a>\n                </h3>\n                <div class=\"star d-flex clearfix\">\n                  <div class=\"mr-auto float-left\">\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                  </div>\n                  <div class=\"float-right\">\n                    <span class=\"rate\"><a href=\"#\">(120)</a></span>\n                  </div>\n                </div>\n              </div>\n              <a href=\"assets/images/destination-3.jpg\"\n                class=\"icon image-popup d-flex justify-content-center align-items-center\">\n                <span class=\"icon-expand\"></span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-4 \">\n            <div class=\"project\">\n              <div class=\"img\">\n                <a href=\"destination-single.html\"><img src=\"assets/images/destination-4.jpg\" class=\"img-fluid\"\n                    alt=\"Colorlib Template\" /></a>\n              </div>\n              <div class=\"text\">\n                \n                <span>15 Days Tour</span>\n                <h3>\n                  <a href=\"destination-single.html\">Gurtnellen, Swetzerland</a>\n                </h3>\n                <div class=\"star d-flex clearfix\">\n                  <div class=\"mr-auto float-left\">\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                  </div>\n                  <div class=\"float-right\">\n                    <span class=\"rate\"><a href=\"#\">(120)</a></span>\n                  </div>\n                </div>\n              </div>\n              <a href=\"assets/images/destination-4.jpg\"\n                class=\"icon image-popup d-flex justify-content-center align-items-center\">\n                <span class=\"icon-expand\"></span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-4 \">\n            <div class=\"project\">\n              <div class=\"img\">\n                <a href=\"destination-single.html\"><img src=\"assets/images/destination-5.jpg\" class=\"img-fluid\"\n                    alt=\"Colorlib Template\" /></a>\n              </div>\n              <div class=\"text\">\n                \n                <span>15 Days Tour</span>\n                <h3>\n                  <a href=\"destination-single.html\">Gurtnellen, Swetzerland</a>\n                </h3>\n                <div class=\"star d-flex clearfix\">\n                  <div class=\"mr-auto float-left\">\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                  </div>\n                  <div class=\"float-right\">\n                    <span class=\"rate\"><a href=\"#\">(120)</a></span>\n                  </div>\n                </div>\n              </div>\n              <a href=\"assets/images/destination-5.jpg\"\n                class=\"icon image-popup d-flex justify-content-center align-items-center\">\n                <span class=\"icon-expand\"></span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-4 \">\n            <div class=\"project\">\n              <div class=\"img\">\n                <a href=\"destination-single.html\"><img src=\"assets/images/destination-6.jpg\" class=\"img-fluid\"\n                    alt=\"Colorlib Template\" /></a>\n              </div>\n              <div class=\"text\">\n                \n                <span>15 Days Tour</span>\n                <h3>\n                  <a href=\"destination-single.html\">Gurtnellen, Swetzerland</a>\n                </h3>\n                <div class=\"star d-flex clearfix\">\n                  <div class=\"mr-auto float-left\">\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                    <span class=\"ion-ios-star\"></span>\n                  </div>\n                  <div class=\"float-right\">\n                    <span class=\"rate\"><a href=\"#\">(120)</a></span>\n                  </div>\n                </div>\n              </div>\n              <a href=\"assets/images/destination-6.jpg\"\n                class=\"icon image-popup d-flex justify-content-center align-items-center\">\n                <span class=\"icon-expand\"></span>\n              </a>\n            </div>\n          </div>\n        </div>\n     \n      </div>\n      <!-- end -->\n      <div class=\"col-lg-3 p-4 bg-light\">\n        <div class=\"search-wrap-1 \">\n          <h2 class=\"mb-3\">Reservation</h2>\n          <form action=\"#\" class=\"search-property-1\">\n            <div class=\"row\">\n              \n              <div class=\"col-lg-12 align-items-end mb-3\">\n                <div class=\"form-group\">\n                  <label for=\"#\">Check-in date</label>\n                  <div class=\"form-control form-field\">\n                    <input style=\"width: 160px\" name= \"dateIn\" (dateChange)=\"addEvent('changeIn', $event)\" [(ngModel)]=\"formQuote.dateIn\"\n                    type=\"text\" class=\"checkout_date\" matInput [matDatepicker]=\"picker\"\n                    placeholder=\"Choose a date\" disabled>\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\">\n                    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n                  </mat-datepicker-toggle>\n                  <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-12 align-items-end mb-3\">\n                <div class=\"form-group\">\n                  <label for=\"#\">Check-out date</label>\n                  <div class=\"form-control form-field\">\n                    <input style=\"width: 160px\" name=\"dateOut\" (dateChange)=\"addEvent('changeOut', $event)\" [(ngModel)]=\"formQuote.dateOut\"\n                    type=\"text\" class=\" checkout_date\" matInput [matDatepicker]=\"picker2\"\n                    placeholder=\"Choose a date\" disabled>\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\">\n                      <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>                    \n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-12 align-items-end mb-3\">\n                <div class=\"form-group\">\n                  <label for=\"#\">Rooms</label>\n                  <div class=\"form-field\">\n                    <input name=\"room\" [(ngModel)]=\"formQuote.room\" type=\"text\" class=\"form-control checkout_date\"\n                    placeholder=\"Choose a room\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-12 align-self-end\">\n                <div class=\"form-group\">\n                  <div class=\"form-field\">\n                    <input type=\"submit\" value=\"Search\" class=\"form-control btn btn-primary\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <!-- end -->\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/pages/destination/destination.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/destination/destination.component.ts ***!
  \************************************************************/
/*! exports provided: DestinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationComponent", function() { return DestinationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DestinationComponent = /** @class */ (function () {
    function DestinationComponent() {
        this.formQuote = {
            dateIn: "",
            dateOut: "",
            room: ""
        };
    }
    DestinationComponent.prototype.ngAfterViewInit = function () {
        this.ViewPopup();
    };
    DestinationComponent.prototype.ngOnInit = function () {
    };
    DestinationComponent.prototype.addEvent = function (type, event) {
        if (type.indexOf('changeIn')) {
            this.formQuote.dateOut = event.value;
            console.log(this.formQuote.dateOut);
        }
        else {
            this.formQuote.dateIn = event.value;
            console.log("hola", this.formQuote.dateIn);
        }
    };
    DestinationComponent.prototype.ViewPopup = function () {
        $(".image-popup").magnificPopup({
            type: "image",
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: "mfp-no-margins mfp-with-zoom",
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300 // don't foget to change the duration also in CSS
            }
        });
    };
    DestinationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-destination',
            template: __webpack_require__(/*! ./destination.component.html */ "./src/app/pages/destination/destination.component.html"),
            styles: [__webpack_require__(/*! ./destination.component.css */ "./src/app/pages/destination/destination.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DestinationComponent);
    return DestinationComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 960px) {\r\n  .responsive {\r\n    width: 610px;\r\n  }\r\n}\r\n.separate {\r\n  margin-left: 10px !important;\r\n  margin-top: 10px;\r\n}\r\n.size {\r\n  width: 700px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAucmVzcG9uc2l2ZSB7XHJcbiAgICB3aWR0aDogNjEwcHg7XHJcbiAgfVxyXG59XHJcbi5zZXBhcmF0ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc2l6ZSB7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n\r\n<section id=\"home-section\" class=\"hero\">\r\n  <img src=\"assets/images/blob-shape-3.svg\" class=\"svg-blob\" alt=\"Colorlib Free Template\" />\r\n  <div class=\"home-slider owl-carousel owl-loaded owl-drag\">\r\n    <div class=\"slider-item\">\r\n      <div class=\"overlay\"></div>\r\n      <div class=\"container-fluid p-0\">\r\n        <div class=\"row d-md-flex no-gutters slider-text align-items-center justify-content-end\"\r\n          data-scrollax-parent=\"true\">\r\n          <div class=\"one-third order-md-last\">\r\n            <div class=\"img\" style=\"background-image:url(assets/images/bg_1.jpg);\">\r\n              <div class=\"overlay\"></div>\r\n            </div>\r\n\r\n            <div class=\"bg-primary\">\r\n              <div class=\"vr\">\r\n                <span class=\"pl-3 py-4\" style=\"background-image: url(assets/images/bg_1-1.jpg);\">Greece</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"one-forth d-flex align-items-center \" data-scrollax=\" properties: { translateY: '70%' }\">\r\n            <div class=\"text\">\r\n\r\n              <span class=\"subheading pl-5\">Discover Greece</span>\r\n              <h1 class=\"mb-4 mt-3\">\r\n                Explore Your Travel Destinations like never before\r\n              </h1>\r\n              <p>\r\n                A small river named Duden flows by their place and supplies it\r\n                with the necessary regelialia. It is a paradisematic country.\r\n              </p>\r\n\r\n              <p>\r\n                <a routerLink=\"/home\" class=\"btn btn-primary px-5 py-3 mt-3\">Discover <span\r\n                    class=\"ion-ios-arrow-forward\"></span></a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"slider-item\">\r\n      <div class=\"overlay\"></div>\r\n      <div class=\"container-fluid p-0\">\r\n        <div class=\"row d-flex no-gutters slider-text align-items-center justify-content-end\"\r\n          data-scrollax-parent=\"true\">\r\n          <div class=\"one-third order-md-last\">\r\n            <div class=\"img\" style=\"background-image:url(assets/images/bg_2.jpg);\">\r\n              <div class=\"overlay\"></div>\r\n            </div>\r\n            <div class=\"vr\">\r\n              <span class=\"pl-3 py-4\" style=\"background-image: url(assets/images/bg_2-2.jpg);\">Africa</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"one-forth d-flex align-items-center \" data-scrollax=\" properties: { translateY: '70%' }\">\r\n            <div class=\"text\">\r\n              <span class=\"subheading pl-5\">Discover Africa</span>\r\n              <h1 class=\"mb-4 mt-3\">Never Stop Exploring</h1>\r\n              <p>\r\n                A small river named Duden flows by their place and supplies it\r\n                with the necessary regelialia. It is a paradisematic country.\r\n              </p>\r\n\r\n              <p>\r\n                <a routerLink=\"/destination\" class=\"btn btn-primary px-5 py-3 mt-3\">Discover <span\r\n                    class=\"ion-ios-arrow-forward\"></span></a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- form -->\r\n<section class=\"ftco-section ftco-no-pb ftco-no-pt\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center pb-0 pb-mb-5 pt-5 pt-md-0\">\r\n      <div class=\"col-md-12 heading-section \">\r\n        <span class=\"subheading\">Sexy &amp; Healthy</span>\r\n        <h2 class=\"mb-4\">Where do you want to go?</h2>\r\n        <p>\r\n          Far far away, behind the word mountains, far from the countries\r\n          Vokalia and Consonantia\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"search-wrap-1 p-4\">\r\n          <div>\r\n<!-- form -->\r\n            <form (ngSubmit)=\"onsubmit(f)\" #f=\"ngForm\" class=\"search-property-1\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg align-items-end\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"#\">Check-in date</label>\r\n                  <div class=\" form-control form-field\">               \r\n                    <input style=\"width: 180px\" name= \"dateIn\" (dateChange)=\"addEvent('changeIn', $event)\" [(ngModel)]=\"formQuote.dateIn\"\r\n                      type=\"text\" class=\" responsive checkout_date\" matInput [matDatepicker]=\"picker\"\r\n                      placeholder=\"Choose a date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n                      <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n                    </mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg align-items-end\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"#\">Check-out date</label>\r\n                  <div class=\" form-control form-field\">\r\n                    <input style=\"width: 180px\" name=\"dateOut\" (dateChange)=\"addEvent('changeOut', $event)\" [(ngModel)]=\"formQuote.dateOut\"\r\n                      type=\"text\" class=\" checkout_date\" matInput [matDatepicker]=\"picker2\"\r\n                      placeholder=\"Choose a date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\">\r\n                      <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n                    </mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg align-items-end\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"#\">Choose a room</label>\r\n                  <div class=\"form-field\">\r\n                      <select [(ngModel)]=\"formQuote.room\" name=\"formQuote\" type=\"text\" class=\"form-control checkout_date\" placeholder=\"Choose a room\">\r\n                          <option value=\"\">Select a Room</option>\r\n                          <option >Single</option>\r\n                          <option >Double</option>\r\n                          <option >Junior Suites</option>\r\n                          <option >Suites</option>\r\n                          <option >Suite nupcial</option>\r\n                        </select>                \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg align-self-end\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"form-field\">\r\n                    <input (click)=\"quote()\" type=\"submit\" value=\"Search\" class=\"form-control btn btn-primary\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- form-END -->\r\n\r\n<!-- our services -->\r\n<section class=\"ftco-section\" id=\"services-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center pb-5\">\r\n      <div class=\"col-md-12 heading-section text-center \">\r\n        <span class=\"subheading\">Services</span>\r\n        <h2 class=\"mb-4\">Amazing services</h2>\r\n        <p>\r\n          At The Dann Carlton Hotel Medellin we love to create unforgettable moments. We offer different services, to make your stay at our hotel a luxurious experience.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n      <div *ngFor=\"let serv of servicesArray | keys; let i = index\" class=\"col-md-6 col-lg-4 \">\r\n        <div class=\"project\">\r\n          <div class=\"img\">\r\n            <img src=\"{{servicesArray[serv].img}}\" class=\" size img-fluid\" alt=\"\" />\r\n          </div>\r\n          <div class=\"text\">\r\n            <h4 class=\"price\"><span class=\"mr-2\">Service start at</span>{{servicesArray[serv].price | currency }}</h4>\r\n            <h3><a href=\"project.html\">{{servicesArray[serv].name}}</a></h3>\r\n            <span>{{servicesArray[serv].description}}</span>\r\n            <div class=\"star d-flex clearfix\">\r\n              <div class=\"mr-auto float-left\">\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n              </div>\r\n              <div class=\"float-right\">\r\n                <span class=\"rate\"><a href=\"#\">(120)</a></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a href=\"{{servicesArray[serv].img}}\" class=\"icon image-popup d-flex justify-content-center align-items-center\">\r\n            <span class=\"icon-expand\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n   \r\n    </div>\r\n  </div>\r\n  \r\n</section>\r\n<!-- our services_END -->\r\n\r\n<!-- About us -->\r\n<section class=\"ftco-counter img ftco-section ftco-no-pt ftco-no-pb\" id=\"about-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row no-gutters d-flex\">\r\n      <div class=\"col-md-6 col-lg-5 d-flex\">\r\n        <div class=\"img d-flex align-self-stretch align-items-center\"\r\n          style=\"background-image:url(assets/images/about.jpg);\"></div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 col-lg-7 px-lg-5 py-md-5 bg-darken\">\r\n        <div class=\"py-md-5\">\r\n          <div class=\"row justify-content-start pb-3\">\r\n            <div class=\"col-md-12 heading-section  p-5 p-lg-0\">\r\n              <span class=\"subheading\">Get in touch with us</span>\r\n              <h2 class=\"mb-4\">Get Best Travel Deals</h2>\r\n              <p>\r\n                A small river named Duden flows by their place and supplies it\r\n                with the necessary regelialia. It is a paradisematic country, in\r\n                which roasted parts of sentences fly into your mouth.\r\n              </p>\r\n              <p>\r\n                Even the all-powerful Pointing has no control about the blind\r\n                texts it is an almost unorthographic life One day however a\r\n                small line of blind text by the name of Lorem Ipsum decided to\r\n                leave for the far World of Grammar.\r\n              </p>\r\n              <p>\r\n                A small river named Duden flows by their place and supplies it\r\n                with the necessary regelialia. It is a paradisematic country, in\r\n                which roasted parts of sentences fly into your mouth.\r\n              </p>\r\n              <p>\r\n                <a routerLink=\"/reservation\" class=\"separate btn btn-primary py-3 px-4\">Book now</a>\r\n                <a href=\"#contact-section\" class=\"separate btn btn-white py-3 px-4\">Contact us</a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- About us end -->\r\n<section class=\"ftco-intro img\" id=\"destination-section\" style=\"background-image: url(assets/images/bg_3.jpg);\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-9 text-center\">\r\n        <h2>Choose the Perfect Destination</h2>\r\n        <p>\r\n          We can manage your dream building A small river named Duden flows by\r\n          their place\r\n        </p>\r\n        <p class=\"mb-0\">\r\n          <a routerLink=\"/destination\" class=\"btn btn-white px-4 py-3\">Search Places</a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center pb-5\">\r\n      <div class=\"col-md-12 heading-section text-center\">\r\n        <span class=\"subheading\">Best Destination</span>\r\n        <h2 class=\"mb-4\">Best Place to Travel</h2>\r\n        <p>\r\n          Far far away, behind the word mountains, far from the countries\r\n          Vokalia and Consonantia\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-lg-4 \">\r\n        <div class=\"project\">\r\n          <div class=\"img\">\r\n            <div class=\"vr\"><span>Sale</span></div>\r\n            <a routerLink=\"/destination\"><img src=\"assets/images/destination-1.jpg\" class=\" size img-fluid\"\r\n                alt=\"Colorlib Template\" /></a>\r\n          </div>\r\n          <div class=\"text\">\r\n            <h4 class=\"price\"><span class=\"old-price mr-2\">$500</span>$400</h4>\r\n            <span>15 Days Tour</span>\r\n            <h3><a routerLink=\"/destination\">Gurtnellen, Swetzerland</a></h3>\r\n            <div class=\"star d-flex clearfix\">\r\n              <div class=\"mr-auto float-left\">\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n              </div>\r\n              <div class=\"float-right\">\r\n                <span class=\"rate\"><a href=\"#\">(120)</a></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a href=\"assets/images/destination-1.jpg\"\r\n            class=\"icon image-popup d-flex justify-content-center align-items-center\">\r\n            <span class=\"icon-expand\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 col-lg-4 \">\r\n        <div class=\"project\">\r\n          <div class=\"img\">\r\n            <a routerLink=\"/destination\"><img src=\"assets/images/destination-2.jpg\" class=\"size img-fluid\"\r\n                alt=\"Colorlib Template\" /></a>\r\n          </div>\r\n          <div class=\"text\">\r\n            <h4 class=\"price\">$400</h4>\r\n            <span>15 Days Tour</span>\r\n            <h3><a routerLink=\"/destination\">Gurtnellen, Swetzerland</a></h3>\r\n            <div class=\"star d-flex clearfix\">\r\n              <div class=\"mr-auto float-left\">\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n              </div>\r\n              <div class=\"float-right\">\r\n                <span class=\"rate\"><a href=\"#\">(120)</a></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a href=\"assets/images/destination-2.jpg\"\r\n            class=\"icon image-popup d-flex justify-content-center align-items-center\">\r\n            <span class=\"icon-expand\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 col-lg-4 \">\r\n        <div class=\"project\">\r\n          <div class=\"img\">\r\n            <a routerLink=\"/destination\"><img src=\"assets/images/destination-3.jpg\" class=\" size img-fluid\"\r\n                alt=\"Colorlib Template\" /></a>\r\n          </div>\r\n          <div class=\"text\">\r\n            <h4 class=\"price\">$400</h4>\r\n            <span>15 Days Tour</span>\r\n            <h3><a routerLink=\"/destination\">Gurtnellen, Swetzerland</a></h3>\r\n            <div class=\"star d-flex clearfix\">\r\n              <div class=\"mr-auto float-left\">\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n              </div>\r\n              <div class=\"float-right\">\r\n                <span class=\"rate\"><a href=\"#\">(120)</a></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a href=\"assets/images/destination-3.jpg\"\r\n            class=\"icon image-popup d-flex justify-content-center align-items-center\">\r\n            <span class=\"icon-expand\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 col-lg-4 \">\r\n        <div class=\"project\">\r\n          <div class=\"img\">\r\n            <a routerLink=\"/destination\"><img src=\"assets/images/destination-4.jpg\" class=\" size img-fluid\"\r\n                alt=\"Colorlib Template\" /></a>\r\n          </div>\r\n          <div class=\"text\">\r\n            <h4 class=\"price\">$400</h4>\r\n            <span>15 Days Tour</span>\r\n            <h3><a routerLink=\"/destination\">Gurtnellen, Swetzerland</a></h3>\r\n            <div class=\"star d-flex clearfix\">\r\n              <div class=\"mr-auto float-left\">\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n              </div>\r\n              <div class=\"float-right\">\r\n                <span class=\"rate\"><a href=\"#\">(120)</a></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a href=\"assets/images/destination-4.jpg\"\r\n            class=\"icon image-popup d-flex justify-content-center align-items-center\">\r\n            <span class=\"icon-expand\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 col-lg-4 \">\r\n        <div class=\"project\">\r\n          <div class=\"img\">\r\n            <a routerLink=\"/destination\"><img src=\"assets/images/destination-5.jpg\" class=\" size img-fluid\"\r\n                alt=\"Colorlib Template\" /></a>\r\n          </div>\r\n          <div class=\"text\">\r\n            <h4 class=\"price\">$400</h4>\r\n            <span>15 Days Tour</span>\r\n            <h3><a routerLink=\"/destination\">Gurtnellen, Swetzerland</a></h3>\r\n            <div class=\"star d-flex clearfix\">\r\n              <div class=\"mr-auto float-left\">\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n              </div>\r\n              <div class=\"float-right\">\r\n                <span class=\"rate\"><a href=\"#\">(120)</a></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a href=\"assets/images/destination-5.jpg\"\r\n            class=\"icon image-popup d-flex justify-content-center align-items-center\">\r\n            <span class=\"icon-expand\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 col-lg-4 \">\r\n        <div class=\"project\">\r\n          <div class=\"img\">\r\n            <a routerLink=\"/destination\"><img src=\"assets/images/destination-6.jpg\" class=\" size img-fluid\"\r\n                alt=\"Colorlib Template\" /></a>\r\n          </div>\r\n          <div class=\"text\">\r\n            <h4 class=\"price\">$400</h4>\r\n            <span>15 Days Tour</span>\r\n            <h3><a routerLink=\"/destination\">Gurtnellen, Swetzerland</a></h3>\r\n            <div class=\"star d-flex clearfix\">\r\n              <div class=\"mr-auto float-left\">\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n              </div>\r\n              <div class=\"float-right\">\r\n                <span class=\"rate\"><a href=\"#\">(120)</a></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a href=\"assets/images/destination-6.jpg\"\r\n            class=\"icon image-popup d-flex justify-content-center align-items-center\">\r\n            <span class=\"icon-expand\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-intro img\" id=\"hotel-section\" style=\"background-image: url(assets/images/bg_4.jpg);\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-9 text-center\">\r\n        <h2>Choose at $99 Per Night Only</h2>\r\n        <p>\r\n          We can manage your dream building A small river named Duden flows by\r\n          their place\r\n        </p>\r\n        <p class=\"mb-0\">\r\n          <a routerLink=\"/rooms\" class=\"btn btn-white px-4 py-3\">Book a room now</a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center pb-5\">\r\n      <div class=\"col-md-12 heading-section text-center \">\r\n        <span class=\"subheading\">Suggested Hotel</span>\r\n        <h2 class=\"mb-4\">Find Nearest Hotel</h2>\r\n        <p>\r\n          Far far away, behind the word mountains, far from the countries\r\n          Vokalia and Consonantia\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-lg-4 \">\r\n        <div class=\"project\">\r\n          <div class=\"img\">\r\n            <div class=\"vr\"><span>Sale</span></div>\r\n            <a routerLink=\"/hotel\"><img src=\"assets/images/hotel-1.jpg\" class=\" size img-fluid\" alt=\"Colorlib Template\" /></a>\r\n          </div>\r\n          <div class=\"text\">\r\n            <h4 class=\"price\"><span class=\"old-price mr-2\">$500</span>$400</h4>\r\n            <span>3 nights</span>\r\n            <h3><a routerLink=\"/destination\">Luxury Hotel in Greece</a></h3>\r\n            <div class=\"star d-flex clearfix\">\r\n              <div class=\"mr-auto float-left\">\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n              </div>\r\n              <div class=\"float-right\">\r\n                <span class=\"rate\"><a href=\"#\">(120)</a></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a href=\"assets/images/hotel-1.jpg\" class=\"icon image-popup d-flex justify-content-center align-items-center\">\r\n            <span class=\"icon-expand\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 col-lg-4 \">\r\n        <div class=\"project\">\r\n          <div class=\"img\">\r\n            <a routerLink=\"/hotel\"><img src=\"assets/images/hotel-2.jpg\" class=\" size img-fluid\" alt=\"Colorlib Template\" /></a>\r\n          </div>\r\n          <div class=\"text\">\r\n            <h4 class=\"price\">$400</h4>\r\n            <span>3 nights</span>\r\n            <h3><a routerLink=\"/hotel\">Luxury Hotel in Greece</a></h3>\r\n            <div class=\"star d-flex clearfix\">\r\n              <div class=\"mr-auto float-left\">\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n              </div>\r\n              <div class=\"float-right\">\r\n                <span class=\"rate\"><a href=\"#\">(120)</a></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a href=\"assets/images/hotel-2.jpg\" class=\"icon image-popup d-flex justify-content-center align-items-center\">\r\n            <span class=\"icon-expand\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 col-lg-4 \">\r\n        <div class=\"project\">\r\n          <div class=\"img\">\r\n            <a routerLink=\"/hotel\"><img src=\"assets/images/hotel-3.jpg\" class=\" size img-fluid\" alt=\"Colorlib Template\" /></a>\r\n          </div>\r\n          <div class=\"text\">\r\n            <h4 class=\"price\">$400</h4>\r\n            <span>3 nights</span>\r\n            <h3><a routerLink=\"/hotel\">Luxury Hotel in Greece</a></h3>\r\n            <div class=\"star d-flex clearfix\">\r\n              <div class=\"mr-auto float-left\">\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n              </div>\r\n              <div class=\"float-right\">\r\n                <span class=\"rate\"><a href=\"#\">(120)</a></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a href=\"assets/images/hotel-3.jpg\" class=\"icon image-popup d-flex justify-content-center align-items-center\">\r\n            <span class=\"icon-expand\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n   \r\n   \r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section testimony-section\">\r\n  <img src=\"assets/images/blob-shape-2.svg\" class=\"svg-blob\" alt=\"Colorlib Free Template\" />\r\n  <img src=\"assets/images/blob-shape-2.svg\" class=\"svg-blob-2\" alt=\"Colorlib Free Template\" />\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center pb-3\">\r\n      <div class=\"col-md-7 text-center heading-section heading-section-white \">\r\n        <span class=\"subheading\">Read testimonials</span>\r\n        <h2 class=\"mb-4\">What Client Says</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row  justify-content-center\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"carousel-testimony owl-carousel ftco-owl\">\r\n          <div class=\"item\">\r\n            <div class=\"testimony-wrap text-center py-4 pb-5\">\r\n              <div class=\"user-img\" style=\"background-image: url(assets/images/person_1.jpg)\">\r\n                <span class=\"quote d-flex align-items-center justify-content-center\">\r\n                  <i class=\"icon-quote-left\"></i>\r\n                </span>\r\n              </div>\r\n              <div class=\"text px-4 pb-5\">\r\n                <p class=\"mb-4\">\r\n                  Far far away, behind the word mountains, far from the\r\n                  countries Vokalia and Consonantia, there live the blind texts.\r\n                </p>\r\n                <p class=\"name\">Jeff Freshman</p>\r\n                <span class=\"position\">Artist</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"testimony-wrap text-center py-4 pb-5\">\r\n              <div class=\"user-img\" style=\"background-image: url(assets/images/person_2.jpg)\">\r\n                <span class=\"quote d-flex align-items-center justify-content-center\">\r\n                  <i class=\"icon-quote-left\"></i>\r\n                </span>\r\n              </div>\r\n              <div class=\"text px-4 pb-5\">\r\n                <p class=\"mb-4\">\r\n                  Far far away, behind the word mountains, far from the\r\n                  countries Vokalia and Consonantia, there live the blind texts.\r\n                </p>\r\n                <p class=\"name\">Jeff Freshman</p>\r\n                <span class=\"position\">Artist</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"testimony-wrap text-center py-4 pb-5\">\r\n              <div class=\"user-img\" style=\"background-image: url(assets/images/person_3.jpg)\">\r\n                <span class=\"quote d-flex align-items-center justify-content-center\">\r\n                  <i class=\"icon-quote-left\"></i>\r\n                </span>\r\n              </div>\r\n              <div class=\"text px-4 pb-5\">\r\n                <p class=\"mb-4\">\r\n                  Far far away, behind the word mountains, far from the\r\n                  countries Vokalia and Consonantia, there live the blind texts.\r\n                </p>\r\n                <p class=\"name\">Jeff Freshman</p>\r\n                <span class=\"position\">Artist</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"testimony-wrap text-center py-4 pb-5\">\r\n              <div class=\"user-img\" style=\"background-image: url(assets/images/person_1.jpg)\">\r\n                <span class=\"quote d-flex align-items-center justify-content-center\">\r\n                  <i class=\"icon-quote-left\"></i>\r\n                </span>\r\n              </div>\r\n              <div class=\"text px-4 pb-5\">\r\n                <p class=\"mb-4\">\r\n                  Far far away, behind the word mountains, far from the\r\n                  countries Vokalia and Consonantia, there live the blind texts.\r\n                </p>\r\n                <p class=\"name\">Jeff Freshman</p>\r\n                <span class=\"position\">Artist</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"testimony-wrap text-center py-4 pb-5\">\r\n              <div class=\"user-img\" style=\"background-image: url(assets/images/person_3.jpg)\">\r\n                <span class=\"quote d-flex align-items-center justify-content-center\">\r\n                  <i class=\"icon-quote-left\"></i>\r\n                </span>\r\n              </div>\r\n              <div class=\"text px-4 pb-5\">\r\n                <p class=\"mb-4\">\r\n                  Far far away, behind the word mountains, far from the\r\n                  countries Vokalia and Consonantia, there live the blind texts.\r\n                </p>\r\n                <p class=\"name\">Jeff Freshman</p>\r\n                <span class=\"position\">Artist</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section\" id=\"restaurant-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center pb-5\">\r\n      <div class=\"col-md-12 heading-section text-center \">\r\n        <span class=\"subheading\">Restaurant</span>\r\n        <h2 class=\"mb-4\">Near Resturant</h2>\r\n        <p>\r\n          In our hotel we have three restaurants that offer different international cuisines, where you will enjoy unique ambiences for your meetings and celebrations.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n      <div *ngFor=\"let rest of restaurantArray | keys; let i = index\" class=\"col-md-6 col-lg-4 \">\r\n        <div class=\"project\">\r\n          <div class=\"img\">\r\n            <img src=\"{{restaurantArray[rest].img}}\" class=\" size img-fluid\" alt=\"\" />\r\n          </div>\r\n          <div class=\"text\">\r\n            <h4 class=\"price\"><span class=\"mr-2\">Menu start at</span>{{restaurantArray[rest].price | currency}}</h4>\r\n            <h3><a href=\"project.html\">{{restaurantArray[rest].name}}</a></h3>\r\n            <span>{{restaurantArray[rest].description}}</span>\r\n            <div class=\"star d-flex clearfix\">\r\n              <div class=\"mr-auto float-left\">\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n                <span class=\"ion-ios-star\"></span>\r\n              </div>\r\n              <div class=\"float-right\">\r\n                <span class=\"rate\"><a href=\"#\">(120)</a></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a href=\"assets/images/resto-1.jpg\" class=\"icon image-popup d-flex justify-content-center align-items-center\">\r\n            <span class=\"icon-expand\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n   \r\n    </div>\r\n  </div>\r\n  \r\n</section>\r\n\r\n<section class=\"ftco-section contact-section ftco-no-pb\" id=\"contact-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center mb-5 pb-3\">\r\n      <div class=\"col-md-7 heading-section text-center \">\r\n        <span class=\"subheading\">Contact</span>\r\n        <h2 class=\"mb-4\">Contact Me</h2>\r\n        <p>\r\n          Far far away, behind the word mountains, far from the countries\r\n          Vokalia and Consonantia\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row block-9\">\r\n      <div class=\"col-md-7 order-md-last d-flex\">\r\n        <form action=\"#\" class=\"bg-light p-4 p-md-5 contact-form\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Your Name\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Your Email\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <textarea name=\"\" id=\"\" cols=\"30\" rows=\"7\" class=\"form-control\" placeholder=\"Message\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"submit\" value=\"Send Message\" class=\"btn btn-primary py-3 px-5\" />\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"col-md-5 d-flex\">\r\n        <div class=\"row d-flex contact-info mb-5\">\r\n          <div class=\"col-md-12 \">\r\n            <div class=\"box p-2 px-3 bg-light d-flex\">\r\n              <div class=\"icon mr-3\"></div>\r\n              <div>\r\n                <h3 class=\"mb-3\">Address</h3>\r\n                <p>198 West 21th Street, Suite 721 New York NY 10016</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12 \">\r\n            <div class=\"box p-2 px-3 bg-light d-flex\">\r\n              <div class=\"icon mr-3\">\r\n                <span class=\"icon-phone2\"></span>\r\n              </div>\r\n              <div>\r\n                <h3 class=\"mb-3\">Contact Number</h3>\r\n                <p><a href=\"tel://1234567920\">+ 1235 2355 98</a></p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12 \">\r\n            <div class=\"box p-2 px-3 bg-light d-flex\">\r\n              <div class=\"icon mr-3\">\r\n                <span class=\"icon-paper-plane\"></span>\r\n              </div>\r\n              <div>\r\n                <h3 class=\"mb-3\">Email Address</h3>\r\n                <p><a href=\"mailto:info@yoursite.com\">info@yoursite.com</a></p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12 \">\r\n            <div class=\"box p-2 px-3 bg-light d-flex\">\r\n              <div class=\"icon mr-3\">\r\n                <span class=\"icon-globe\"></span>\r\n              </div>\r\n              <div>\r\n                <h3 class=\"mb-3\">Website</h3>\r\n                <p><a href=\"#\">yoursite.com</a></p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_our_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/our-services.service */ "./src/app/services/our-services.service.ts");
/* harmony import */ var src_app_services_restaurant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/restaurant.service */ "./src/app/services/restaurant.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var HomeComponent = /** @class */ (function () {
    function HomeComponent(ourServices, restaurant) {
        this.ourServices = ourServices;
        this.restaurant = restaurant;
        this.restaurantArray = [];
        this.servicesArray = [];
        this.images = [];
        this.formQuote = {
            dateIn: "",
            dateOut: "",
            room: ""
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getServices();
        this.getRestaurant();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.onCarousel();
        this.ViewPopup();
        this.stellar();
    };
    HomeComponent.prototype.quote = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Price:", "280,35");
    };
    HomeComponent.prototype.onsubmit = function (f) {
        // console.log(f.value);
    };
    HomeComponent.prototype.addEvent = function (type, event) {
        if (type.indexOf('changeIn')) {
            this.formQuote.dateOut = event.value;
            console.log(this.formQuote.dateOut);
        }
        else {
            this.formQuote.dateIn = event.value;
            console.log("hola", this.formQuote.dateIn);
        }
    };
    HomeComponent.prototype.getServices = function () {
        var _this = this;
        this.ourServices
            .getServices()
            .subscribe(function (data) {
            _this.servicesArray = data;
        });
    };
    HomeComponent.prototype.getRestaurant = function () {
        var _this = this;
        this.restaurant
            .getRestaurant()
            .subscribe(function (data) {
            _this.restaurantArray = data;
        });
    };
    HomeComponent.prototype.stellar = function () {
        "use strict";
        $(window).stellar({
            responsive: true,
            parallaxBackgrounds: true,
            parallaxElements: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            scrollProperty: "scroll"
        });
    };
    // JQUERY carousel
    HomeComponent.prototype.onCarousel = function () {
        $(".home-slider").owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            nav: false,
            autoplayHoverPause: false,
            items: 1,
            navText: [
                "<span class='ion-md-arrow-back'></span>",
                "<span class='ion-chevron-right'></span>"
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $(".carousel-testimony").owlCarousel({
            autoplay: true,
            autoHeight: true,
            center: true,
            loop: true,
            items: 1,
            margin: 30,
            stagePadding: 0,
            nav: false,
            dots: true,
            navText: [
                '<span class="ion-ios-arrow-back">',
                '<span class="ion-ios-arrow-forward">'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    };
    // magnific popup
    HomeComponent.prototype.ViewPopup = function () {
        $(".image-popup").magnificPopup({
            type: "image",
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: "mfp-no-margins mfp-with-zoom",
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300 // don't foget to change the duration also in CSS
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sections",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_our_services_service__WEBPACK_IMPORTED_MODULE_2__["OurServicesService"],
            src_app_services_restaurant_service__WEBPACK_IMPORTED_MODULE_3__["RestaurantService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/hotel-single/hotel-single.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/hotel-single/hotel-single.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvdGVsLXNpbmdsZS9ob3RlbC1zaW5nbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hotel-single/hotel-single.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/hotel-single/hotel-single.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-pages></app-nav-pages>\n\n<section class=\"hero-wrap\" style=\"background-image: url('assets/images/bg_4.jpg');\" data-stellar-background-ratio=\"0.5\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row no-gutters slider-text align-items-center justify-content-start\">\n      <div class=\"col-md-9  pb-4\">\n        <h1 class=\"mb-3 bread\">Amber Lights Villas</h1>\n        <p><a href=\"#\" class=\"btn btn-primary py-2 px-4\">Book this hotel</a> <a href=\"#\"\n            class=\"btn btn-black py-2 px-4\">Watch Video</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"ftco-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 room-wrap\">\n        <div class=\"row\">\n          <div class=\"col-md-7 d-flex \">\n            <div class=\"img align-self-stretch\" style=\"background-image: url(assets/images/hotel-1.jpg);\"></div>\n          </div>\n          <div class=\"col-md-5 \">\n            <div class=\"text py-5\">\n              <h3><a href=\"#\">Amber Lights Villas</a></h3>\n              <p class=\"pos\">from <span class=\"price\">$99.00</span>/night</p>\n              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the\n                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language\n                ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It\n                is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\n              <p><a href=\"#\" class=\"btn btn-secondary\">Details</a> <a href=\"#\" class=\"btn btn-primary\">Book now</a></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12 room-wrap room-wrap-thumb mt-4\">\n        <div class=\"row\">\n          <div class=\"col-md-3 \">\n            <a href=\"#\" class=\"d-flex thumb\">\n              <div class=\"img align-self-stretch\" style=\"background-image: url(assets/images/room-1.jpg);\"></div>\n              <div class=\"text pl-3 py-3\">\n                <h3>Classic Balcony Room</h3>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-md-3 \">\n            <a href=\"#\" class=\"d-flex thumb\">\n              <div class=\"img align-self-stretch\" style=\"background-image: url(assets/images/room-2.jpg);\"></div>\n              <div class=\"text pl-3 py-3\">\n                <h3>Classic Balcony Room</h3>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-md-3 \">\n            <a href=\"#\" class=\"d-flex thumb\">\n              <div class=\"img align-self-stretch\" style=\"background-image: url(assets/images/room-3.jpg);\"></div>\n              <div class=\"text pl-3 py-3\">\n                <h3>Classic Balcony Room</h3>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-md-3 \">\n            <a href=\"#\" class=\"d-flex thumb\">\n              <div class=\"img align-self-stretch\" style=\"background-image: url(assets/images/room-4.jpg);\"></div>\n              <div class=\"text pl-3 py-3\">\n                <h3>Classic Balcony Room</h3>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12 tour-wrap pt-5 mt-4\">\n        <h3 class=\"mb-5\" style=\"border-bottom: 1px solid #f2f2f2;\">Amber Lights Villas Location</h3>\n      </div>\n      <div class=\"col-md-12 tour-wrap pt-5 mt-4\">\n        <h3 class=\"mb-5\" style=\"border-bottom: 1px solid #f2f2f2;\">Reviews &amp; Ratings</h3>\n        <form method=\"post\" class=\"star-rating\">\n          <div class=\"form-check\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n            <label class=\"form-check-label\" for=\"exampleCheck1\">\n              <p class=\"rate\"><span><i class=\"icon-star\"></i><i class=\"icon-star\"></i><i class=\"icon-star\"></i><i\n                    class=\"icon-star\"></i><i class=\"icon-star\"></i> 100 Ratings</span></p>\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n            <label class=\"form-check-label\" for=\"exampleCheck1\">\n              <p class=\"rate\"><span><i class=\"icon-star\"></i><i class=\"icon-star\"></i><i class=\"icon-star\"></i><i\n                    class=\"icon-star\"></i><i class=\"icon-star-o\"></i> 30 Ratings</span></p>\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n            <label class=\"form-check-label\" for=\"exampleCheck1\">\n              <p class=\"rate\"><span><i class=\"icon-star\"></i><i class=\"icon-star\"></i><i class=\"icon-star\"></i><i\n                    class=\"icon-star-o\"></i><i class=\"icon-star-o\"></i> 5 Ratings</span></p>\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n            <label class=\"form-check-label\" for=\"exampleCheck1\">\n              <p class=\"rate\"><span><i class=\"icon-star\"></i><i class=\"icon-star\"></i><i class=\"icon-star-o\"></i><i\n                    class=\"icon-star-o\"></i><i class=\"icon-star-o\"></i> 0 Ratings</span></p>\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n            <label class=\"form-check-label\" for=\"exampleCheck1\">\n              <p class=\"rate\"><span><i class=\"icon-star\"></i><i class=\"icon-star-o\"></i><i class=\"icon-star-o\"></i><i\n                    class=\"icon-star-o\"></i><i class=\"icon-star-o\"></i> 0 Ratings</span></p>\n            </label>\n          </div>\n        </form>\n      </div>\n\n      <div class=\"col-md-12 tour-wrap\">\n        <div class=\"pt-5\">\n          <h3 class=\"mb-5\" style=\"border-bottom: 1px solid #f2f2f2;\">3 Comments</h3>\n          <ul class=\"comment-list\">\n            <li class=\"comment\">\n              <div class=\"vcard bio\">\n                <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\">\n              </div>\n              <div class=\"comment-body\">\n                <h3>John Doe</h3>\n                <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus,\n                  ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum\n                  impedit necessitatibus, nihil?</p>\n                <p><a href=\"#\" class=\"reply\">Reply</a></p>\n              </div>\n            </li>\n\n            <li class=\"comment\">\n              <div class=\"vcard bio\">\n                <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\">\n              </div>\n              <div class=\"comment-body\">\n                <h3>John Doe</h3>\n                <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus,\n                  ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum\n                  impedit necessitatibus, nihil?</p>\n                <p><a href=\"#\" class=\"reply\">Reply</a></p>\n              </div>\n\n              <ul class=\"children\">\n                <li class=\"comment\">\n                  <div class=\"vcard bio\">\n                    <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\">\n                  </div>\n                  <div class=\"comment-body\">\n                    <h3>John Doe</h3>\n                    <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus,\n                      ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum\n                      impedit necessitatibus, nihil?</p>\n                    <p><a href=\"#\" class=\"reply\">Reply</a></p>\n                  </div>\n\n\n                  <ul class=\"children\">\n                    <li class=\"comment\">\n                      <div class=\"vcard bio\">\n                        <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\">\n                      </div>\n                      <div class=\"comment-body\">\n                        <h3>John Doe</h3>\n                        <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum\n                          necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure!\n                          Quam voluptas earum impedit necessitatibus, nihil?</p>\n                        <p><a href=\"#\" class=\"reply\">Reply</a></p>\n                      </div>\n\n                      <ul class=\"children\">\n                        <li class=\"comment\">\n                          <div class=\"vcard bio\">\n                            <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\">\n                          </div>\n                          <div class=\"comment-body\">\n                            <h3>John Doe</h3>\n                            <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum\n                              necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste\n                              iure! Quam voluptas earum impedit necessitatibus, nihil?</p>\n                            <p><a href=\"#\" class=\"reply\">Reply</a></p>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n\n            <li class=\"comment\">\n              <div class=\"vcard bio\">\n                <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\">\n              </div>\n              <div class=\"comment-body\">\n                <h3>John Doe</h3>\n                <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus,\n                  ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum\n                  impedit necessitatibus, nihil?</p>\n                <p><a href=\"#\" class=\"reply\">Reply</a></p>\n              </div>\n            </li>\n          </ul>\n          <!-- END comment-list -->\n\n          <div class=\"comment-form-wrap pt-5\">\n            <h3 class=\"mb-5\">Leave a comment</h3>\n            <form action=\"#\" class=\"p-5 bg-light\">\n              <div class=\"form-group\">\n                <label for=\"name\">Name *</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Email *</label>\n                <input type=\"email\" class=\"form-control\" id=\"email\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"website\">Website</label>\n                <input type=\"url\" class=\"form-control\" id=\"website\">\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"message\">Message</label>\n                <textarea name=\"\" id=\"message\" cols=\"30\" rows=\"10\" class=\"form-control\"></textarea>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"submit\" value=\"Post Comment\" class=\"btn py-3 px-4 btn-primary\">\n              </div>\n\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section> <!-- .section -->"

/***/ }),

/***/ "./src/app/pages/hotel-single/hotel-single.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/hotel-single/hotel-single.component.ts ***!
  \**************************************************************/
/*! exports provided: HotelSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelSingleComponent", function() { return HotelSingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HotelSingleComponent = /** @class */ (function () {
    function HotelSingleComponent() {
    }
    HotelSingleComponent.prototype.ngOnInit = function () {
    };
    HotelSingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotel-single',
            template: __webpack_require__(/*! ./hotel-single.component.html */ "./src/app/pages/hotel-single/hotel-single.component.html"),
            styles: [__webpack_require__(/*! ./hotel-single.component.css */ "./src/app/pages/hotel-single/hotel-single.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HotelSingleComponent);
    return HotelSingleComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _destination_destination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./destination/destination.component */ "./src/app/pages/destination/destination.component.ts");
/* harmony import */ var _destination_single_destination_single_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./destination-single/destination-single.component */ "./src/app/pages/destination-single/destination-single.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./room/room.component */ "./src/app/pages/room/room.component.ts");
/* harmony import */ var _hotel_single_hotel_single_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hotel-single/hotel-single.component */ "./src/app/pages/hotel-single/hotel-single.component.ts");
/* harmony import */ var _single_single_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./single/single.component */ "./src/app/pages/single/single.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reservation/reservation.component */ "./src/app/pages/reservation/reservation.component.ts");
/* harmony import */ var _salons_salons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./salons/salons.component */ "./src/app/pages/salons/salons.component.ts");















var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _destination_destination_component__WEBPACK_IMPORTED_MODULE_4__["DestinationComponent"],
                _destination_single_destination_single_component__WEBPACK_IMPORTED_MODULE_5__["DestinationSingleComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _room_room_component__WEBPACK_IMPORTED_MODULE_7__["RoomComponent"],
                _hotel_single_hotel_single_component__WEBPACK_IMPORTED_MODULE_8__["HotelSingleComponent"],
                _single_single_component__WEBPACK_IMPORTED_MODULE_9__["SingleComponent"],
                _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_13__["ReservationComponent"],
                _salons_salons_component__WEBPACK_IMPORTED_MODULE_14__["SalonsComponent"]
            ],
            exports: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/reservation/reservation.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/reservation/reservation.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 809px) {\r\n  .responsive {\r\n    width: 700px !important;\r\n  }\r\n}\r\n\r\n.register-left img {\r\n  margin-top: 15%;\r\n  margin-bottom: 5%;\r\n  width: 25%;\r\n  -webkit-animation: mover 2s infinite alternate;\r\n  animation: mover 1s infinite alternate;\r\n}\r\n\r\n.g {\r\n  margin-left: 300px;\r\n  top: 30px;\r\n  margin-bottom: 60px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.t{\r\n  text-align: center !important;\r\n}\r\n\r\n.color{\r\n  background-color: #F8F9FA;  \r\n}\r\n\r\n.general{\r\n  width: 80% !important;\r\n  margin-left:55px;\r\n \r\n}\r\n\r\n.positio{\r\n  margin-left: 210px !important;\r\n  position: absolute;\r\n  top: 70px;\r\n  font-size: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDViw4Q0FBOEM7RUFDOUMsc0NBQXNDO0FBQ3hDOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjs7QUFFbEI7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODA5cHgpIHtcclxuICAucmVzcG9uc2l2ZSB7XHJcbiAgICB3aWR0aDogNzAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1sZWZ0IGltZyB7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDJzIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICBhbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG4uZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gIHRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9ye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RkE7ICBcclxufVxyXG4uZ2VuZXJhbHtcclxuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6NTVweDtcclxuIFxyXG59XHJcbi5wb3NpdGlve1xyXG4gIG1hcmdpbi1sZWZ0OiAyMTBweCAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/reservation/reservation.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/reservation/reservation.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"g col-lg-6 p-4 bg-light\">\r\n        <div class=\"search-wrap-1 \">\r\n          <h2 class=\" t mb-3 \">Reservation</h2>\r\n          <form action=\"#\" class=\"search-property-1\">\r\n            <div class=\"row\">\r\n              \r\n              <div class=\"col-lg-12 align-items-end mb-3\">\r\n                <div class=\"general form-group\">\r\n                  <label for=\"#\">Check-in date</label>\r\n                  <div class=\" form-control form-field\">\r\n                    <input class=\"responsive\" style=\"width: 350px\" [matDatepickerFilter]=\"myFilter\" name= \"dateIn\" (dateChange)=\"addEvent('changeIn', $event)\" [(ngModel)]=\"formQuote.dateIn\"\r\n                    type=\"text\" class=\" color checkout_date\" matInput [matDatepicker]=\"picker\"\r\n                    placeholder=\"Choose a date\" disabled>\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n                    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n                  </mat-datepicker-toggle>\r\n                  <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 align-items-end mb-3\">\r\n                <div class=\" general form-group\">\r\n                  <label for=\"#\">Check-out date</label>\r\n                  <div class=\"form-control form-field\">\r\n                    <input style=\"width: 350px\" [matDatepickerFilter]=\"myFilter\" name=\"dateOut\" (dateChange)=\"addEvent('changeOut', $event)\" [(ngModel)]=\"formQuote.dateOut\"\r\n                    type=\"text\" class=\" color checkout_date\" matInput [matDatepicker]=\"picker2\"\r\n                    placeholder=\"Choose a date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\">\r\n                      <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n                    </mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>                    \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 align-items-end mb-3\">\r\n                <div class=\" general form-group\">\r\n                  <label for=\"#\">Rooms</label>\r\n                  <div class=\"form-field\">\r\n                    <input name=\"room\" [(ngModel)]=\"formQuote.room\" type=\"text\" class=\"form-control checkout_date\"\r\n                    placeholder=\"Choose a room\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 align-self-end\">\r\n                <div class=\" general form-group\">\r\n                  <div class=\"form-field\">\r\n                    <input type=\"submit\" (click)=\"myFilter()\" value=\"Search\" class=\"form-control btn btn-primary\" />\r\n                    <a class=\"positio\" routerLink=\"/home\" href=\"\">Home  <span class=\"ion-ios-arrow-forward margin\"></span></a>\r\n                </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/pages/reservation/reservation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/reservation/reservation.component.ts ***!
  \************************************************************/
/*! exports provided: ReservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationComponent", function() { return ReservationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReservationComponent = /** @class */ (function () {
    function ReservationComponent() {
        this.formQuote = {
            dateIn: "",
            dateOut: "",
            room: ""
        };
        this.myFilter = function (d) {
            var date = d.getDate();
            // Prevent Saturday and Sunday from being selected.
            return true;
        };
    }
    ReservationComponent.prototype.ngOnInit = function () { };
    ReservationComponent.prototype.addEvent = function (type, event) {
        if (type.indexOf("changeIn")) {
            this.formQuote.dateOut = event.value;
            console.log(this.formQuote.dateOut);
        }
        else {
            this.formQuote.dateIn = event.value;
            console.log("hola", this.formQuote.dateIn);
        }
    };
    ReservationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-reservation",
            template: __webpack_require__(/*! ./reservation.component.html */ "./src/app/pages/reservation/reservation.component.html"),
            styles: [__webpack_require__(/*! ./reservation.component.css */ "./src/app/pages/reservation/reservation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReservationComponent);
    return ReservationComponent;
}());



/***/ }),

/***/ "./src/app/pages/room/room.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/room/room.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transparency{\r\n  background-color: #000000;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcm9vbS9yb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yb29tL3Jvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc3BhcmVuY3l7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/room/room.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/room/room.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-pages></app-nav-pages>\r\n\r\n<section class=\"hero-wrap hero-wrap-2\" style=\"background-image: url('assets/images/bg_4.jpg');\" data-stellar-background-ratio=\"0.5\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row no-gutters slider-text align-items-end justify-content-start\">\r\n      <div class=\"col-md-9 pb-4\">\r\n        <h1 class=\"mb-3 bread\">Find Your Room</h1>\r\n        <p class=\"breadcrumbs\">\r\n          <span class=\"mr-2\"><a href=\"index.html\">Home <i class=\"ion-ios-arrow-forward\"></i></a></span>\r\n          <span>Hotel <i class=\"ion-ios-arrow-forward\"></i></span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-9 pr-lg-4\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-6 col-lg-4 \" *ngFor=\"let room of rooms | keys; let i=index\">\r\n            <div class=\"project\">\r\n              <div class=\"img\">\r\n                <a href=\"{{ rooms[room].img }}\"><img src=\"{{ rooms[room].img }}\"  class=\"img-fluid\" alt=\"\" /></a>\r\n              </div>\r\n              <div class=\"text\">\r\n                <h4 class=\"price\">{{ rooms[room].price | currency }}</h4>\r\n                <span>{{ rooms[room].categoryName }}</span>\r\n                <h3><a href=\"hotel-single.html\">{{ rooms[room].description }}</a></h3>\r\n                <div class=\"star d-flex clearfix\">\r\n                  <div class=\"mr-auto float-left\">\r\n                    <span class=\"ion-ios-star\"></span>\r\n                    <span class=\"ion-ios-star\"></span>\r\n                    <span class=\"ion-ios-star\"></span>\r\n                    <span class=\"ion-ios-star\"></span>\r\n                    <span class=\"ion-ios-star\"></span>\r\n                  </div>\r\n                  <div class=\"float-right\">\r\n                    <span class=\"rate\"><a href=\"#\">(120)</a></span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <a href=\"{{ rooms[room].img }}\" class=\"icon image-popup d-flex justify-content-center align-items-center\">\r\n                <span class=\"icon-expand\"></span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          </div>      \r\n      </div>\r\n      <!-- end -->\r\n      <div class=\"col-lg-3 p-4 bg-light\">\r\n        <div class=\"search-wrap-1 \">\r\n          <h2 class=\"mb-3\">Reservation</h2>\r\n          <form action=\"#\" class=\"search-property-1\">\r\n            <div class=\"row\">\r\n              \r\n              <div class=\"col-lg-12 align-items-end mb-3\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"#\">Check-in date</label>\r\n                  <div class=\"form-control form-field\">\r\n                    <input style=\"width: 160px\" name= \"dateIn\" (dateChange)=\"addEvent('changeIn', $event)\" [(ngModel)]=\"formQuote.dateIn\"\r\n                    type=\"text\" class=\"checkout_date\" matInput [matDatepicker]=\"picker\"\r\n                    placeholder=\"Choose a date\" disabled>\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n                    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n                  </mat-datepicker-toggle>\r\n                  <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 align-items-end mb-3\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"#\">Check-out date</label>\r\n                  <div class=\"form-control form-field\">\r\n                    <input style=\"width: 160px\" name=\"dateOut\" (dateChange)=\"addEvent('changeOut', $event)\" [(ngModel)]=\"formQuote.dateOut\"\r\n                    type=\"text\" class=\" checkout_date\" matInput [matDatepicker]=\"picker2\"\r\n                    placeholder=\"Choose a date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\">\r\n                      <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n                    </mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>                    \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 align-items-end mb-3\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"#\">Rooms</label>\r\n                  <div class=\"form-field\">\r\n                    <input name=\"room\" [(ngModel)]=\"formQuote.room\" type=\"text\" class=\"form-control checkout_date\"\r\n                    placeholder=\"Choose a room\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 align-self-end\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"form-field\">\r\n                    <input type=\"submit\" value=\"Search\" class=\"form-control btn btn-primary\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- end -->\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/room/room.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/room/room.component.ts ***!
  \**********************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rooms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rooms.service */ "./src/app/services/rooms.service.ts");



var RoomComponent = /** @class */ (function () {
    function RoomComponent(roomService) {
        this.roomService = roomService;
        this.rooms = [];
        this.formQuote = {
            dateIn: "",
            dateOut: "",
            room: ""
        };
    }
    RoomComponent.prototype.ngOnInit = function () {
        this.getRooms();
    };
    RoomComponent.prototype.getRooms = function () {
        var _this = this;
        this.roomService.getRoom()
            .subscribe(function (data) {
            _this.rooms = data;
        });
    };
    RoomComponent.prototype.addEvent = function (type, event) {
        if (type.indexOf('changeIn')) {
            this.formQuote.dateOut = event.value;
            console.log(this.formQuote.dateOut);
        }
        else {
            this.formQuote.dateIn = event.value;
            console.log("hola", this.formQuote.dateIn);
        }
    };
    RoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(/*! ./room.component.html */ "./src/app/pages/room/room.component.html"),
            styles: [__webpack_require__(/*! ./room.component.css */ "./src/app/pages/room/room.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rooms_service__WEBPACK_IMPORTED_MODULE_2__["RoomsService"]])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/pages/salons/salons.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/salons/salons.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NhbG9ucy9zYWxvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/salons/salons.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/salons/salons.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  salons works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/salons/salons.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/salons/salons.component.ts ***!
  \**************************************************/
/*! exports provided: SalonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalonsComponent", function() { return SalonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SalonsComponent = /** @class */ (function () {
    function SalonsComponent() {
    }
    SalonsComponent.prototype.ngOnInit = function () {
    };
    SalonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salons',
            template: __webpack_require__(/*! ./salons.component.html */ "./src/app/pages/salons/salons.component.html"),
            styles: [__webpack_require__(/*! ./salons.component.css */ "./src/app/pages/salons/salons.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SalonsComponent);
    return SalonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/single/single.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/single/single.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpbmdsZS9zaW5nbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/single/single.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/single/single.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-pages></app-nav-pages>\n\n<section class=\"hero-wrap hero-wrap-2\" style=\"background-image: url('assets/images/bg_4.jpg');\"\n  data-stellar-background-ratio=\"0.5\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row no-gutters slider-text align-items-end justify-content-start\">\n      <div class=\"col-md-9  pb-4\">\n        <h1 class=\"mb-3 bread\">Our Stories</h1>\n        <p class=\"breadcrumbs\">\n          <span class=\"mr-2\"><a href=\"index.html\">Home <i class=\"ion-ios-arrow-forward\"></i></a></span>\n          <span class=\"mr-2\"><a href=\"blog.html\">Blog <i class=\"ion-ios-arrow-forward\"></i></a></span>\n          <span>Blog Single <i class=\"ion-ios-arrow-forward\"></i></span>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"ftco-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 \">\n        <h2 class=\"mb-3\">\n          It is a long established fact a reader be distracted\n        </h2>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,\n          eius mollitia suscipit, quisquam doloremque distinctio perferendis et\n          doloribus unde architecto optio laboriosam porro adipisci sapiente\n          officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore\n          perferendis, enim praesentium omnis, iste doloremque quia officia\n          optio deserunt molestiae voluptates soluta architecto tempora.\n        </p>\n        <p>\n          <img src=\"assets/images/image_3.jpg\" alt=\"\" class=\"img-fluid\" />\n        </p>\n        <p>\n          Molestiae cupiditate inventore animi, maxime sapiente optio, illo est\n          nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni\n          reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam\n          incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore\n          amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut\n          ea, repudiandae suscipit!\n        </p>\n        <h2 class=\"mb-3 mt-5\">#2. Creative WordPress Themes</h2>\n        <p>\n          Temporibus ad error suscipit exercitationem hic molestiae totam\n          obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora\n          maiores ex architecto voluptatum aut officia doloremque. Error dolore\n          voluptas, omnis molestias odio dignissimos culpa ex earum nisi\n          consequatur quos odit quasi repellat qui officiis reiciendis incidunt\n          hic non? Debitis commodi aut, adipisci.\n        </p>\n        <p>\n          <img src=\"assets/images/image_4.jpg\" alt=\"\" class=\"img-fluid\" />\n        </p>\n        <p>\n          Quisquam esse aliquam fuga distinctio, quidem delectus veritatis\n          reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur\n          tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur\n          suscipit veritatis nulla quos quia aspernatur perferendis, libero\n          sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam,\n          modi rem maiores.\n        </p>\n        <p>\n          Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo\n          velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa\n          vel nisi in dolorum consequatur, veritatis porro explicabo soluta\n          commodi libero voluptatem similique id quidem? Blanditiis voluptates\n          aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam\n          harum excepturi ea.\n        </p>\n        <p>\n          Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam\n          quidem, dolor distinctio similique asperiores voluptas enim,\n          exercitationem ratione aut adipisci modi quod quibusdam iusto,\n          voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur\n          totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis.\n          Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!\n        </p>\n        <p>\n          Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus\n          at officia adipisci quasi nemo a perspiciatis provident magni\n          laboriosam repudiandae iure iusto commodi debitis est blanditiis alias\n          laborum sint dolore. Dolores, iure, reprehenderit. Error provident,\n          pariatur cupiditate soluta doloremque aut ratione. Harum voluptates\n          mollitia illo minus praesentium, rerum ipsa debitis, inventore?\n        </p>\n        <div class=\"tag-widget post-tag-container mb-5 mt-5\">\n          <div class=\"tagcloud\">\n            <a href=\"#\" class=\"tag-cloud-link\">Life</a>\n            <a href=\"#\" class=\"tag-cloud-link\">Sport</a>\n            <a href=\"#\" class=\"tag-cloud-link\">Tech</a>\n            <a href=\"#\" class=\"tag-cloud-link\">Travel</a>\n          </div>\n        </div>\n\n        <div class=\"about-author d-flex p-4 bg-light\">\n          <div class=\"bio mr-5\">\n            <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\" class=\"img-fluid mb-4\" />\n          </div>\n          <div class=\"desc\">\n            <h3>George Washington</h3>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus\n              itaque, autem necessitatibus voluptate quod mollitia delectus aut,\n              sunt placeat nam vero culpa sapiente consectetur similique,\n              inventore eos fugit cupiditate numquam!\n            </p>\n          </div>\n        </div>\n\n        <div class=\"pt-5 mt-5\">\n          <h3 class=\"mb-5\">6 Comments</h3>\n          <ul class=\"comment-list\">\n            <li class=\"comment\">\n              <div class=\"vcard bio\">\n                <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\" />\n              </div>\n              <div class=\"comment-body\">\n                <h3>John Doe</h3>\n                <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                  Pariatur quidem laborum necessitatibus, ipsam impedit vitae\n                  autem, eum officia, fugiat saepe enim sapiente iste iure! Quam\n                  voluptas earum impedit necessitatibus, nihil?\n                </p>\n                <p><a href=\"#\" class=\"reply\">Reply</a></p>\n              </div>\n            </li>\n\n            <li class=\"comment\">\n              <div class=\"vcard bio\">\n                <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\" />\n              </div>\n              <div class=\"comment-body\">\n                <h3>John Doe</h3>\n                <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                  Pariatur quidem laborum necessitatibus, ipsam impedit vitae\n                  autem, eum officia, fugiat saepe enim sapiente iste iure! Quam\n                  voluptas earum impedit necessitatibus, nihil?\n                </p>\n                <p><a href=\"#\" class=\"reply\">Reply</a></p>\n              </div>\n\n              <ul class=\"children\">\n                <li class=\"comment\">\n                  <div class=\"vcard bio\">\n                    <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\" />\n                  </div>\n                  <div class=\"comment-body\">\n                    <h3>John Doe</h3>\n                    <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                    <p>\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                      Pariatur quidem laborum necessitatibus, ipsam impedit\n                      vitae autem, eum officia, fugiat saepe enim sapiente iste\n                      iure! Quam voluptas earum impedit necessitatibus, nihil?\n                    </p>\n                    <p><a href=\"#\" class=\"reply\">Reply</a></p>\n                  </div>\n\n                  <ul class=\"children\">\n                    <li class=\"comment\">\n                      <div class=\"vcard bio\">\n                        <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\" />\n                      </div>\n                      <div class=\"comment-body\">\n                        <h3>John Doe</h3>\n                        <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                        <p>\n                          Lorem ipsum dolor sit amet, consectetur adipisicing\n                          elit. Pariatur quidem laborum necessitatibus, ipsam\n                          impedit vitae autem, eum officia, fugiat saepe enim\n                          sapiente iste iure! Quam voluptas earum impedit\n                          necessitatibus, nihil?\n                        </p>\n                        <p><a href=\"#\" class=\"reply\">Reply</a></p>\n                      </div>\n\n                      <ul class=\"children\">\n                        <li class=\"comment\">\n                          <div class=\"vcard bio\">\n                            <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\" />\n                          </div>\n                          <div class=\"comment-body\">\n                            <h3>John Doe</h3>\n                            <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                            <p>\n                              Lorem ipsum dolor sit amet, consectetur\n                              adipisicing elit. Pariatur quidem laborum\n                              necessitatibus, ipsam impedit vitae autem, eum\n                              officia, fugiat saepe enim sapiente iste iure!\n                              Quam voluptas earum impedit necessitatibus, nihil?\n                            </p>\n                            <p><a href=\"#\" class=\"reply\">Reply</a></p>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n\n            <li class=\"comment\">\n              <div class=\"vcard bio\">\n                <img src=\"assets/images/person_1.jpg\" alt=\"Image placeholder\" />\n              </div>\n              <div class=\"comment-body\">\n                <h3>John Doe</h3>\n                <div class=\"meta\">October 03, 2018 at 2:21pm</div>\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                  Pariatur quidem laborum necessitatibus, ipsam impedit vitae\n                  autem, eum officia, fugiat saepe enim sapiente iste iure! Quam\n                  voluptas earum impedit necessitatibus, nihil?\n                </p>\n                <p><a href=\"#\" class=\"reply\">Reply</a></p>\n              </div>\n            </li>\n          </ul>\n          <!-- END comment-list -->\n\n          <div class=\"comment-form-wrap pt-5\">\n            <h3 class=\"mb-5\">Leave a comment</h3>\n            <form action=\"#\" class=\"p-5 bg-light\">\n              <div class=\"form-group\">\n                <label for=\"name\">Name *</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Email *</label>\n                <input type=\"email\" class=\"form-control\" id=\"email\" />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"website\">Website</label>\n                <input type=\"url\" class=\"form-control\" id=\"website\" />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"message\">Message</label>\n                <textarea name=\"\" id=\"message\" cols=\"30\" rows=\"10\" class=\"form-control\"></textarea>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"submit\" value=\"Post Comment\" class=\"btn py-3 px-4 btn-primary\" />\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <!-- .col-md-8 -->\n      <div class=\"col-lg-4 sidebar \">\n        <div class=\"sidebar-box\">\n          <form action=\"#\" class=\"search-form\">\n            <div class=\"form-group\">\n              <span class=\"icon icon-search\"></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Type a keyword and hit enter\" />\n            </div>\n          </form>\n        </div>\n        <div class=\"sidebar-box \">\n          <h3 class=\"heading-sidebar\">Categories</h3>\n          <ul class=\"categories\">\n            <li>\n              <a href=\"#\">Fitness Gym <span>(12)</span></a>\n            </li>\n            <li>\n              <a href=\"#\">Crossfit <span>(22)</span></a>\n            </li>\n            <li>\n              <a href=\"#\">Yoga <span>(37)</span></a>\n            </li>\n            <li>\n              <a href=\"#\">aerobics <span>(42)</span></a>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"sidebar-box \">\n          <h3 class=\"heading-sidebar\">Recent Blog</h3>\n          <div class=\"block-21 mb-4 d-flex\">\n            <a class=\"blog-img mr-4\" style=\"background-image: url(assets/images/image_1.jpg);\"></a>\n            <div class=\"text\">\n              <h3 class=\"heading\">\n                <a href=\"#\">Even the all-powerful Pointing has no control about the blind\n                  texts</a>\n              </h3>\n              <div class=\"meta\">\n                <div>\n                  <a href=\"#\"><span class=\"icon-calendar\"></span> April 04, 2019</a>\n                </div>\n                <div>\n                  <a href=\"#\"><span class=\"icon-person\"></span> Admin</a>\n                </div>\n                <div>\n                  <a href=\"#\"><span class=\"icon-chat\"></span> 19</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"block-21 mb-4 d-flex\">\n            <a class=\"blog-img mr-4\" style=\"background-image: url(assets/images/image_2.jpg);\"></a>\n            <div class=\"text\">\n              <h3 class=\"heading\">\n                <a href=\"#\">Even the all-powerful Pointing has no control about the blind\n                  texts</a>\n              </h3>\n              <div class=\"meta\">\n                <div>\n                  <a href=\"#\"><span class=\"icon-calendar\"></span> April 04, 2019</a>\n                </div>\n                <div>\n                  <a href=\"#\"><span class=\"icon-person\"></span> Admin</a>\n                </div>\n                <div>\n                  <a href=\"#\"><span class=\"icon-chat\"></span> 19</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"block-21 mb-4 d-flex\">\n            <a class=\"blog-img mr-4\" style=\"background-image: url(assets/images/image_3.jpg);\"></a>\n            <div class=\"text\">\n              <h3 class=\"heading\">\n                <a href=\"#\">Even the all-powerful Pointing has no control about the blind\n                  texts</a>\n              </h3>\n              <div class=\"meta\">\n                <div>\n                  <a href=\"#\"><span class=\"icon-calendar\"></span> April 04, 2019</a>\n                </div>\n                <div>\n                  <a href=\"#\"><span class=\"icon-person\"></span> Admin</a>\n                </div>\n                <div>\n                  <a href=\"#\"><span class=\"icon-chat\"></span> 19</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"sidebar-box \">\n          <h3 class=\"heading-sidebar\">Tag Cloud</h3>\n          <div class=\"tagcloud\">\n            <a href=\"#\" class=\"tag-cloud-link\">gym</a>\n            <a href=\"#\" class=\"tag-cloud-link\">pain</a>\n            <a href=\"#\" class=\"tag-cloud-link\">workhard</a>\n            <a href=\"#\" class=\"tag-cloud-link\">glory</a>\n            <a href=\"#\" class=\"tag-cloud-link\">table</a>\n            <a href=\"#\" class=\"tag-cloud-link\">interior</a>\n            <a href=\"#\" class=\"tag-cloud-link\">exterior</a>\n            <a href=\"#\" class=\"tag-cloud-link\">industrial</a>\n          </div>\n        </div>\n\n        <div class=\"sidebar-box \">\n          <h3 class=\"heading-sidebar\">Paragraph</h3>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus\n            itaque, autem necessitatibus voluptate quod mollitia delectus aut,\n            sunt placeat nam vero culpa sapiente consectetur similique,\n            inventore eos fugit cupiditate numquam!\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- .section -->"

/***/ }),

/***/ "./src/app/pages/single/single.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/single/single.component.ts ***!
  \**************************************************/
/*! exports provided: SingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleComponent", function() { return SingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SingleComponent = /** @class */ (function () {
    function SingleComponent() {
    }
    SingleComponent.prototype.ngOnInit = function () {
    };
    SingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single',
            template: __webpack_require__(/*! ./single.component.html */ "./src/app/pages/single/single.component.html"),
            styles: [__webpack_require__(/*! ./single.component.css */ "./src/app/pages/single/single.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SingleComponent);
    return SingleComponent;
}());



/***/ }),

/***/ "./src/app/pipes/key.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/pipes/key.pipe.ts ***!
  \***********************************/
/*! exports provided: KeyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyPipe", function() { return KeyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KeyPipe = /** @class */ (function () {
    function KeyPipe() {
    }
    KeyPipe.prototype.transform = function (value) {
        var keys = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    };
    KeyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "keys"
        })
    ], KeyPipe);
    return KeyPipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







var AuthService = /** @class */ (function () {
    function AuthService(afAauth, router, afDB) {
        this.afAauth = afAauth;
        this.router = router;
        this.afDB = afDB;
        this.uid = [];
    }
    AuthService.prototype.login = function (data) {
        var _this = this;
        this.afAauth.auth
            .signInWithEmailAndPassword(data.email, data.password)
            .then(function () {
            _this.router.navigate(["/home"]);
        })
            .catch(function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("You have an error", err.message, "error");
        });
    };
    AuthService.prototype.register = function (data) {
        var _this = this;
        this.afAauth.auth
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(function (res) {
            // se arma el obj que se va a enviar a firebase
            var USER = {
                name: data.name,
                email: res.user.email,
                uid: res.user.uid,
                office: data.office,
                permissionState: false
            };
            _this.afDB
                .list("/users")
                .push(USER)
                .then(function () {
                _this.router.navigate(["/home"]);
            });
        })
            .catch(function (err) {
            // error
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Ops error", err.message, "error");
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.afAauth.auth.signOut().then(function () {
            _this.router.navigate(["/login"]);
        });
    };
    AuthService.prototype.isAuth = function () {
        var _this = this;
        return this.afAauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (fbUser) {
            if (fbUser == null) {
                _this.router.navigate(["/login"]);
            }
            return fbUser != null;
        }));
    };
    AuthService.prototype.userPermission = function () {
        var _this = this;
        return this.afAauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (fbUser) {
            if (fbUser) {
                _this.uid.push(fbUser.uid);
            }
            return fbUser != null;
        }));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/categories.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");






var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
    "Content-Type": "application/json"
});
var CategoriesService = /** @class */ (function () {
    function CategoriesService(http, afDB) {
        this.http = http;
        this.afDB = afDB;
        this.dbPath = '/categories';
        this.categoriesRef = null;
        this.categoriesRef = this.afDB.list(this.dbPath);
    }
    CategoriesService.prototype.createCategories = function (category) {
        var body = JSON.stringify(category); // se convierte el dato puro a json
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICES"] + "categories.json"; // Aquí se va a enviar el dato
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    CategoriesService.prototype.deleteCategories = function (key) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICES"] + ("categories/" + key + ".json");
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    CategoriesService.prototype.updateCategories = function (category, key) {
        var body = JSON.stringify(category);
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICES"] + ("categories/" + key + ".json");
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    CategoriesService.prototype.getCategoriesList = function () {
        return this.categoriesRef;
    };
    CategoriesService.prototype.getCategories = function () {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICES"] + "categories.json";
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    CategoriesService.prototype.getCategoryById = function (key) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICES"] + ("categories/" + key + ".json");
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/services/our-services.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/our-services.service.ts ***!
  \**************************************************/
/*! exports provided: OurServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesService", function() { return OurServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");






var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
    "Content-Type": "aplication/json"
});
var OurServicesService = /** @class */ (function () {
    function OurServicesService(http, afDB) {
        this.http = http;
        this.afDB = afDB;
        this.dbPath = '/services';
        this.ourServicesRef = null;
        this.ourServicesRef = this.afDB.list(this.dbPath);
    }
    OurServicesService.prototype.createService = function (service) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICES"] + "services.json";
        var body = JSON.stringify(service);
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    OurServicesService.prototype.deleteService = function (key) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICES"] + ("services/" + key + ".json");
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    OurServicesService.prototype.updateService = function (service, key) {
        var body = JSON.stringify(service);
        var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICES"] + ("services/" + key + ".json");
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    OurServicesService.prototype.getServicesList = function () {
        // devuelve toda la lista
        return this.ourServicesRef;
    };
    OurServicesService.prototype.getServices = function () {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICES"] + "services.json";
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    OurServicesService.prototype.getServiceById = function (key) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICES"] + ("services/" + key + ".json");
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    OurServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], OurServicesService);
    return OurServicesService;
}());



/***/ }),

/***/ "./src/app/services/restaurant.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/restaurant.service.ts ***!
  \************************************************/
/*! exports provided: RestaurantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
    "Content-Type": "aplication/json"
});
var RestaurantService = /** @class */ (function () {
    function RestaurantService(http, afDB) {
        this.http = http;
        this.afDB = afDB;
        this.dbPath = '/restaurant';
        this.restaurantRef = null;
        this.restaurantRef = this.afDB.list(this.dbPath);
    }
    RestaurantService.prototype.createRestaurant = function (restaurant) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICES"] + "restaurant.json";
        var body = JSON.stringify(restaurant);
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
            return resp;
        }));
    };
    RestaurantService.prototype.deleteRestaurant = function (key) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICES"] + ("restaurant/" + key + ".json");
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
            return resp;
        }));
    };
    RestaurantService.prototype.updateRestaurant = function (restaurant, key) {
        var body = JSON.stringify(restaurant);
        var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICES"] + ("restaurant/" + key + ".json");
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
            return resp;
        }));
    };
    RestaurantService.prototype.getRestaurantList = function () {
        // devuelve toda la lista
        return this.restaurantRef;
    };
    RestaurantService.prototype.getRestaurant = function () {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICES"] + "restaurant.json";
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
            return resp;
        }));
    };
    RestaurantService.prototype.getRestaurantById = function (key) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICES"] + ("restaurant/" + key + ".json");
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
        }));
    };
    RestaurantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], RestaurantService);
    return RestaurantService;
}());



/***/ }),

/***/ "./src/app/services/rooms.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/rooms.service.ts ***!
  \*******************************************/
/*! exports provided: RoomsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsService", function() { return RoomsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");






var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
    'Content-Type': 'application/json'
});
var RoomsService = /** @class */ (function () {
    function RoomsService(http, afDB) {
        this.http = http;
        this.afDB = afDB;
        this.dbPath = '/rooms';
        this.roomsRef = null;
        this.roomsRef = this.afDB.list(this.dbPath);
    }
    RoomsService.prototype.createRoom = function (room) {
        var body = JSON.stringify(room);
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICES"] + 'rooms.json';
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    RoomsService.prototype.deleteRoom = function (key) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICES"] + ("rooms/" + key + ".json");
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    RoomsService.prototype.updateRoom = function (room, key) {
        var body = JSON.stringify(room);
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICES"] + ("rooms/" + key + ".json");
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    RoomsService.prototype.getRoomsList = function () {
        return this.roomsRef;
    };
    RoomsService.prototype.getRoom = function () {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICES"] + "rooms.json";
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    RoomsService.prototype.getRoomById = function (key) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICES"] + ("rooms/" + key + ".json");
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    RoomsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], RoomsService);
    return RoomsService;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _our_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-services.service */ "./src/app/services/our-services.service.ts");
/* harmony import */ var _rooms_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rooms.service */ "./src/app/services/rooms.service.ts");








var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            providers: [_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _our_services_service__WEBPACK_IMPORTED_MODULE_6__["OurServicesService"], _rooms_service__WEBPACK_IMPORTED_MODULE_7__["RoomsService"]]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var UsersService = /** @class */ (function () {
    function UsersService(afDB) {
        this.afDB = afDB;
        this.dbPath = '/users';
        this.usersRef = null;
        this.usersRef = this.afDB.list(this.dbPath);
    }
    UsersService.prototype.getUsersList = function () {
        return this.usersRef;
    };
    UsersService.prototype.updateUser = function (key, user) {
        return this.usersRef.update(key, user);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.text {\r\n    color: #fff !important;\r\n     line-height: 1.5;  \r\n  font-weight: 400;\r\n  font-family: \"Cormorant Garamond\", Georgia, serif;\r\n  margin: 0 !important;\r\n  padding: 10px;\r\n}\r\n\r\n.margin {\r\nmargin: 0 !important;\r\n}\r\n\r\n.marginF {\r\nmargin-top: 25px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxzQkFBc0I7S0FDckIsZ0JBQWdCO0VBQ25CLGdCQUFnQjtFQUNoQixpREFBaUQ7RUFDakQsb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZjs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRleHQge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICBsaW5lLWhlaWdodDogMS41OyAgXHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LWZhbWlseTogXCJDb3Jtb3JhbnQgR2FyYW1vbmRcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm1hcmdpbiB7XHJcbm1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFyZ2luRiB7XHJcbm1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<footer class=\"ftco-footer ftco-section\">\r\n\r\n    <div >      \r\n        <div >\r\n            <div class=\"col-md-12 text-center\">\r\n                <p class=\"margin\">                  \r\n                  Copyright &copy;{{year}} All rights reserved | Hanna Buelvas - Valentina Muñoz  \r\n                  </p>                \r\n          <p class=\"col-md-12 text-center margin Title\">Are you an admin?</p>\r\n          <p class=\"margin\">\r\n              Sign in and manage your site, fast and without complications!</p>                          \r\n          <a  routerLink=\"/login\" style=\"color: #e2c0bb\">Sign in  <span class=\"ion-ios-arrow-forward margin\"></span></a>\r\n          <div class=\"col-md-12 text-center\">        \r\n          <ul class=\"ftco-footer-social list-unstyled  marginF\">\r\n                <li><a href=\"#\"><span class=\"icon-twitter\"></span></a></li>\r\n                <li><a href=\"#\"><span class=\"icon-facebook\"></span></a></li>\r\n                <li><a href=\"#\"><span class=\"icon-instagram\"></span></a></li>\r\n              </ul>\r\n              </div>\r\n              <div class=\"text-left\">\r\n              <a (click)=\"logout()\" style=\"color: #e2c0bb\">Exit <span class=\"ion-ios-arrow-forward margin\"></span></a>\r\n              </div>\r\n              </div>\r\n        </div>\r\n      </div>\r\n\r\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(authService) {
        this.authService = authService;
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.prototype.logout = function () {
        this.authService.logout();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-footer",
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/nav-pages/nav-pages.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/nav-pages/nav-pages.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXYtcGFnZXMvbmF2LXBhZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/nav-pages/nav-pages.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/nav-pages/nav-pages.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target\" id=\"ftco-navbar\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"/home\">Plaza Colombia</a>      \r\n    <button class=\"navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ftco-nav\" aria-controls=\"ftco-nav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"fa fa-bars\"></span> Menu\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"ftco-nav\">\r\n        <ul class=\"navbar-nav nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n              <a routerLink=\"/home\" class=\"nav-link\"><span>Home</span></a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a  routerLink=\"/services\" class=\"nav-link\"><span>Services</span></a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a  routerLink=\"/home\" class=\"nav-link\"><span>About</span></a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a  routerLink=\"/destination\" class=\"nav-link\"><span>Destination</span></a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a  routerLink=\"/rooms\" class=\"nav-link\"><span>Rooms</span></a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a  routerLink=\"/restaurant\" class=\"nav-link\"><span>Restaurant</span></a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a  routerLink=\"/home\"class=\"nav-link\"><span>Contact</span></a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a  (click)=\"logout()\" *ngIf=\"isUser\" class=\"nav-link\"><span>Exit</span></a>\r\n          </li>\r\n          <li class=\"nav-item dropdown\" *ngIf=\"isUser && status\">\r\n            <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Admin</a>\r\n            <div class=\"dropdown-menu\">\r\n              <a *ngIf=\"status\" class=\"dropdown-item\" routerLink=\"/admin/users\">Users</a>\r\n              <a class=\"dropdown-item\" routerLink=\"/admin/categories\">Categories</a>\r\n              <a class=\"dropdown-item\" routerLink=\"/admin/rooms\">Rooms</a>\r\n              <a class=\"dropdown-item\" routerLink=\"/admin/our-services\">Services</a>\r\n            </div>\r\n          </li>\r\n        </ul> \r\n      </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/nav-pages/nav-pages.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/nav-pages/nav-pages.component.ts ***!
  \*********************************************************/
/*! exports provided: NavPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavPagesComponent", function() { return NavPagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var NavPagesComponent = /** @class */ (function () {
    function NavPagesComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.isUser = false;
        this.status = false;
    }
    NavPagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.userPermission().subscribe(function (data) { return _this.isUser = data; });
        this.isAuthStatus();
    };
    NavPagesComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavPagesComponent.prototype.isAuthStatus = function () {
        var _this = this;
        this.userService.getUsersList().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (data) {
            var _loop_1 = function (user) {
                _this.authService.uid.forEach(function (uid) {
                    if (user.uid === uid) {
                        _this.isUser = true;
                        _this.status = user.permissionState;
                    }
                });
            };
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var user = data_1[_i];
                _loop_1(user);
            }
        });
    };
    NavPagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-pages',
            template: __webpack_require__(/*! ./nav-pages.component.html */ "./src/app/shared/nav-pages/nav-pages.component.html"),
            styles: [__webpack_require__(/*! ./nav-pages.component.css */ "./src/app/shared/nav-pages/nav-pages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], NavPagesComponent);
    return NavPagesComponent;
}());



/***/ }),

/***/ "./src/app/shared/nav/nav.component.css":
/*!**********************************************!*\
  !*** ./src/app/shared/nav/nav.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXYvbmF2LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/shared/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation\r\n    ==========================================-->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target\" id=\"ftco-navbar\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"/home\">Plaza Colombia      \r\n    </a>   \r\n    <button class=\"navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ftco-nav\" aria-controls=\"ftco-nav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"fa fa-bars\"></span> Menu\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"ftco-nav\">\r\n      <ul class=\"navbar-nav nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a href=\"#home-section\" class=\"nav-link\"><span>Home</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"#services-section\" class=\"nav-link\"><span>Services</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"#about-section\" class=\"nav-link\"><span>About</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"#destination-section\" class=\"nav-link\"><span>Destination</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"#hotel-section\" class=\"nav-link\"><span>Rooms</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"#restaurant-section\" class=\"nav-link\"><span>Restaurant</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"#contact-section\" class=\"nav-link\"><span>Contact</span></a>\r\n        </li>        \r\n        <li class=\"nav-item dropdown\" *ngIf=\"isUser && status\" >\r\n          <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Admin</a>\r\n          <div class=\"dropdown-menu\">\r\n            <a *ngIf=\"status\" class=\"dropdown-item\" routerLink=\"/admin/users\">Users</a>\r\n            <a class=\"dropdown-item\" routerLink=\"/admin/categories\">Categories</a>\r\n            <a class=\"dropdown-item\" routerLink=\"/admin/rooms\">Rooms</a>\r\n            <a class=\"dropdown-item\" routerLink=\"/admin/our-services\">Services</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<!-- END nav -->\r\n"

/***/ }),

/***/ "./src/app/shared/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var NavComponent = /** @class */ (function () {
    function NavComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.isUser = false;
        this.status = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.userPermission().subscribe(function (data) { return _this.isUser = data; });
        this.isAuthStatus();
    };
    NavComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavComponent.prototype.isAuthStatus = function () {
        var _this = this;
        this.userService.getUsersList().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (data) {
            var _loop_1 = function (user) {
                _this.authService.uid.forEach(function (uid) {
                    if (user.uid === uid) {
                        _this.isUser = true;
                        _this.status = user.permissionState;
                    }
                });
            };
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var user = data_1[_i];
                _loop_1(user);
            }
        });
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-nav",
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/shared/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/shared/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/shared/nav/nav.component.ts");
/* harmony import */ var _nav_pages_nav_pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-pages/nav-pages.component */ "./src/app/shared/nav-pages/nav-pages.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pipes_key_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/key.pipe */ "./src/app/pipes/key.pipe.ts");








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _nav_pages_nav_pages_component__WEBPACK_IMPORTED_MODULE_4__["NavPagesComponent"], _pipes_key_pipe__WEBPACK_IMPORTED_MODULE_7__["KeyPipe"]],
            exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _nav_pages_nav_pages_component__WEBPACK_IMPORTED_MODULE_4__["NavPagesComponent"], _pipes_key_pipe__WEBPACK_IMPORTED_MODULE_7__["KeyPipe"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAHESpCn4sO4e3Ose60nDX6cf45YOxreoc",
        authDomain: "hostal-8c19f.firebaseapp.com",
        databaseURL: "https://hostal-8c19f.firebaseio.com",
        projectId: "hostal-8c19f",
        storageBucket: "hostal-8c19f.appspot.com",
        messagingSenderId: "797051629254",
        appId: "1:797051629254:web:60f2aa60ba9e71ad"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrador\Desktop\ecolandAngular\hostal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map