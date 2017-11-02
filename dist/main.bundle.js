webpackJsonp([0,3],{

/***/ 352:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 352;


/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(461);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/apps/tcf/typescriptcollectionsframework-Demo-For-Angular2/src/main.js.map

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
/* unused harmony export PetStoreProduct */
/* unused harmony export PetStoreProductHashable */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.active = "ArrayList";
        this.alData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["ArrayList"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldCollectable"]());
        this.llData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["LinkedList"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldCollectable"]());
        this.hsData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["HashSet"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldHashable"]());
        this.tsData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["TreeSet"](__WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["Collections"].getStringComparator());
        this.alData.add("Cat");
        this.alData.add("Squirrel");
        this.alData.add("Dog");
        this.llData.add("Cat");
        this.llData.add("Squirrel");
        this.llData.add("Dog");
        this.hsData.add("Cat");
        this.hsData.add("Squirrel");
        this.hsData.add("Dog");
        this.tsData.add("Cat");
        this.tsData.add("Squirrel");
        this.tsData.add("Dog");
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ArrayList = function () {
        this.active = "ArrayList";
    };
    AppComponent.prototype.LinkedList = function () {
        this.active = "LinkedList";
    };
    AppComponent.prototype.HashSet = function () {
        this.active = "HashSet";
    };
    AppComponent.prototype.TreeSet = function () {
        this.active = "TreeSet";
    };
    AppComponent.prototype.addArrayList = function (newdata) {
        this.alData.add(newdata);
    };
    AppComponent.prototype.addLinkedList = function (newdata) {
        this.llData.add(newdata);
    };
    AppComponent.prototype.addHashSet = function (newdata) {
        this.hsData.add(newdata);
    };
    AppComponent.prototype.addTreeSet = function (newdata) {
        this.tsData.add(newdata);
    };
    AppComponent.prototype.removeArrayListEntry = function (olddata) {
        this.alData.remove(olddata);
    };
    AppComponent.prototype.removeLinkedListEntry = function (olddata) {
        this.llData.remove(olddata);
    };
    AppComponent.prototype.removeHashSetEntry = function (olddata) {
        this.hsData.remove(olddata);
    };
    AppComponent.prototype.removeTreeSetEntry = function (olddata) {
        this.tsData.remove(olddata);
    };
    AppComponent.prototype.exercise = function (victim) {
        var control = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["ArrayList"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldCollectable"](), victim);
        var foundbug = false;
        var numberofactions = 0;
        while (foundbug === false) {
            if (numberofactions >= 100000)
                foundbug = true;
            numberofactions = numberofactions + 1;
            var offset = Math.floor(Math.random() * control.size());
            var predelete = control.get(offset);
            if (victim.contains(predelete) === false) {
                console.log("set was supposed to contain " + predelete);
                foundbug = true;
            }
            else {
                control.removeIndex(offset);
                var presize = victim.size();
                if (victim.remove(predelete) === false) {
                    console.log("set could not remove " + predelete);
                    foundbug = true;
                }
                else {
                    var loop = 0;
                    for (var iter = victim.iterator(); ((foundbug === false) && (iter.hasNext())); loop = loop + 1) {
                        var t = iter.next();
                        if (loop > presize) {
                            foundbug = true;
                            console.log("iterate forever post remove " + predelete);
                        }
                    }
                    var postsize = victim.size();
                    if (postsize >= presize) {
                        foundbug = true;
                        console.log("size is now " + postsize + " and was " + presize);
                    }
                    console.log("removed " + predelete);
                    var c1 = Math.floor(Math.random() * 26) + 1;
                    var c2 = Math.floor(Math.random() * 26) + 1;
                    var c3 = Math.floor(Math.random() * 26) + 1;
                    var c4 = Math.floor(Math.random() * 26) + 1;
                    var c5 = Math.floor(Math.random() * 26) + 1;
                    var added = false;
                    while (added === false) {
                        var add = String.fromCharCode(96 + c1) + String.fromCharCode(96 + c2) + String.fromCharCode(96 + c3) + String.fromCharCode(96 + c4) + String.fromCharCode(96 + c5);
                        if (victim.contains(add) === false) {
                            victim.add(add);
                            control.add(add);
                            added = true;
                            console.log("added " + add + " " + numberofactions);
                        }
                    }
                }
            }
        }
    };
    AppComponent.prototype.exerciseHashSet = function () {
        this.exercise(this.hsData);
    };
    AppComponent.prototype.exerciseTreeSet = function () {
        this.exercise(this.tsData);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(617),
            styles: [__webpack_require__(616)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
var PetStoreProduct = (function () {
    function PetStoreProduct() {
    }
    PetStoreProduct.prototype.getSku = function () { return this.sku; };
    PetStoreProduct.prototype.getName = function () { return this.name; };
    PetStoreProduct.prototype.getPrice = function () { return this.price; };
    PetStoreProduct.prototype.setSku = function (newsku) { this.sku = newsku; };
    PetStoreProduct.prototype.setName = function (newname) { this.name = newname; };
    PetStoreProduct.prototype.setPrice = function (newprice) { this.price = newprice; };
    return PetStoreProduct;
}());
var PetStoreProductHashable = (function () {
    function PetStoreProductHashable() {
    }
    PetStoreProductHashable.prototype.equals = function (o1, o2) {
        if (o1 === undefined) {
            if (o2 === undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        if (o1 === null) {
            if (o2 === null) {
                return true;
            }
            else {
                return false;
            }
        }
        if ((o2 === null) || (o2 === undefined)) {
            return false;
        }
        if (JSON.stringify(o1.getSku()) === JSON.stringify(o2.getSku()))
            return true;
        return false;
    };
    ;
    PetStoreProductHashable.prototype.hashCode = function (o) {
        if (o === undefined) {
            return 0;
        }
        if (o === null) {
            return 0;
        }
        var tmp = JSON.stringify(o);
        var hash = 0;
        for (var loop = 0; loop < tmp.length; loop++) {
            var n = tmp.charCodeAt(loop);
            hash = ((hash * 256) + n) % 1000000000;
        }
        return hash;
    };
    ;
    PetStoreProductHashable.prototype.getHashCodeForString = function (o) {
        if (o === undefined) {
            return 0;
        }
        if (o === null) {
            return 0;
        }
        var tmp = JSON.stringify(o);
        var hash = 0;
        for (var loop = 0; loop < tmp.length; loop++) {
            var n = tmp.charCodeAt(loop);
            hash = ((hash * 256) + n) % 1000000000;
        }
        return hash;
    };
    PetStoreProductHashable.prototype.getHashCodeForStringArray = function (o) {
        if (o === undefined) {
            return 0;
        }
        if (o === null) {
            return 0;
        }
        var tmp = 0;
        for (var loop = 0; loop < o.length; loop++) {
            var ostr = o[loop];
            tmp = ((tmp * 256) + this.getHashCodeForString(ostr)) % 1000000000;
        }
        return tmp;
    };
    PetStoreProductHashable.prototype.getHashCodeForStrings = function (o) {
        if (o === undefined) {
            return 0;
        }
        if (o === null) {
            return 0;
        }
        var tmp = 0;
        for (var iter = o.iterator(); iter.hasNext();) {
            var ostr = iter.next();
            tmp = ((tmp * 256) + this.getHashCodeForString(ostr)) % 1000000000;
        }
        return tmp;
    };
    PetStoreProductHashable.prototype.getHashCodeForNumber = function (o) {
        if (o === undefined) {
            return 0;
        }
        if (o === null) {
            return 0;
        }
        var tmp = o;
        while ((tmp < 1000000000) && (Math.floor(tmp) === tmp)) {
            tmp = tmp * 10;
        }
        return tmp;
    };
    return PetStoreProductHashable;
}());
//# sourceMappingURL=C:/apps/tcf/typescriptcollectionsframework-Demo-For-Angular2/src/app.component.js.map

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(460);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/apps/tcf/typescriptcollectionsframework-Demo-For-Angular2/src/app.module.js.map

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/apps/tcf/typescriptcollectionsframework-Demo-For-Angular2/src/environment.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/apps/tcf/typescriptcollectionsframework-Demo-For-Angular2/src/polyfills.js.map

/***/ },

/***/ 616:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 617:
/***/ function(module, exports) {

module.exports = "<a href=\"#\" (click)=\"ArrayList()\">ArrayList</a>&nbsp;\r\n<a href=\"#\" (click)=\"LinkedList()\">LinkedList</a>&nbsp;\r\n<a href=\"#\" (click)=\"HashSet()\">HashSet</a>&nbsp;\r\n<a href=\"#\" (click)=\"TreeSet()\">TreeSet</a>&nbsp;\r\n<br>\r\n\r\n<p *ngIf=\"active=='ArrayList'\">\r\n  ArrayList<br>\r\n  <li *ngFor=\"let str of alData\"><button (click)=\"removeArrayListEntry(str);\">{{str}}</button></li>\r\n  <br>\r\n  <input #aladd type=text placeholder=\"add\">\r\n  <button (click)=\"addArrayList(aladd.value);aladd.value=''\">Add</button>\r\n</p>\r\n\r\n<p *ngIf=\"active=='LinkedList'\">\r\n  LinkedList<br>\r\n  <li *ngFor=\"let str of llData\"><button (click)=\"removeLinkedListEntry(str);\">{{str}}</button></li>\r\n  <br>\r\n  <input #lladd type=text placeholder=\"add\">\r\n  <button (click)=\"addLinkedList(lladd.value);lladd.value=''\">Add</button>\r\n</p>\r\n\r\n<p *ngIf=\"active=='HashSet'\">\r\n  HashSet<br>\r\n  <li *ngFor=\"let str of hsData\"><button (click)=\"removeHashSetEntry(str);\">{{str}}</button></li>\r\n  <br>\r\n  <input #hsadd type=text placeholder=\"add\">\r\n  <button (click)=\"addHashSet(hsadd.value);hsadd.value=''\">Add</button>\r\n</p>\r\n\r\n<p *ngIf=\"active=='TreeSet'\">\r\n  TreeSet<br>\r\n  <li *ngFor=\"let str of tsData\"><button (click)=\"removeTreeSetEntry(str);\">{{str}}</button></li>\r\n  <br>\r\n  <input #tsadd type=text placeholder=\"add\">\r\n  <button (click)=\"addTreeSet(tsadd.value);tsadd.value=''\">Add</button>\r\n</p>\r\n"

/***/ },

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(353);


/***/ }

},[632]);
//# sourceMappingURL=main.bundle.map