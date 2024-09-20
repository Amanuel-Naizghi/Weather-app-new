/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/JosefinSans-VariableFont_wght.ttf */ "./src/fonts/JosefinSans-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/OpenSans_Condensed-Medium.ttf */ "./src/fonts/OpenSans_Condensed-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/new-font2.ttf */ "./src/fonts/new-font2.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin:0;
    padding:0;
}
@font-face{
    font-family: 'myFont1';
    src:url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(truetype);
}
@font-face{
    font-family: 'myFont2';
    src:url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(truetype);
}
@font-face{
    font-family: 'myFont3';
    src:url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format(truetype);
}
body{
    font-family:'myFont2';
}
.content>.header{
    display:flex;
    justify-content: center;
    align-items:center;
    padding:1rem 0;
    background:#3C3D37;
}
.content>.header>.img-container>img{
    width:100px;
    height:100px;
}
.content>.header>h2{
    font-family: 'myFont1';
    font-size:2rem;
    margin-left:0.8rem;
    color:whitesmoke;
}
.content>.body{
    display:flex;
    flex-direction:column;
    align-items:center;
    background:#D8D9DA;
    padding-top:0.8rem;
    position:relative;
}
.content>.body>.user-selection{
    font-size:1.2rem;
}
.content>.body>.user-selection form{
    display:flex;
    align-items:center;
    margin-bottom:0.1rem;
}
.content>.body>.user-selection form>label,.body>.user-selection>.set-temp>label{
    margin-right:0.5rem;
}
.content>.body>.user-selection form>input{
    border-radius: 10px;
    font-family:"myFont2";
    height:25px;
    padding-left:0.3rem;
    font-size:1rem;
}
.content>.body>.user-selection form>button,.body>.user-selection>.set-temp>button{
    font-size:1rem;
    font-family: 'myFont2';
    width:50px;
    background:#3C3D37;
    margin:0.5rem;
    border-radius: 5px;
    color:whitesmoke;
}
.content>.body>.user-selection form>button:hover,.body>.user-selection>.set-temp>button:hover{
    background: #686D76;
}
.content>.body>.user-selection>.set-temp{
    text-align:center;
}
.content>.body>.today-info{
    background: whitesmoke;
    width:650px;
    height:350px;
    margin-bottom:1.2rem;
    border-radius:10px;
    display:grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 2fr;
    padding:1rem 0;
}
.body>.today-info>.top-left{
    display:flex;
    flex-direction:column;
    grid-row:1/2;
    grid-column: 1/2;
    width:350px;
    padding-left:2.3rem;
}
.today-info>.top-left>.temp-container>.temp{
    font-size:4rem;
    font-weight:bold;
}
.body>.today-info>.top-left>.location-container{
    display:flex;
    flex-direction:column;
    height:80px;
}
.body>.today-info>.top-left>.location-container>.location,.top-left>.location-container>.date{
    font-size:1.5rem;
    color:#3C3D37;
}
.body>.today-info>.top-right{
    display:flex;
    flex-direction:column;
    height:150px;
    grid-row:1/2;
    grid-column:2/3;
}
.body>.today-info>.top-right>.time-img{
    display:flex;
}
.body>.today-info>.top-right>.time-img>.time{
    font-size:2rem;
    margin:2rem 0 0 1.5rem;
}
.body>.today-info>.top-right .img-container>img{
    width:120px;
    height:120px;
}
.body>.today-info>.top-right>.condition{
    font-size:1.5rem;
    padding-left:1.2rem;
    font-family:'myFont3';
    color:#3C3D37;
}
.content>.body>.today-info>.bottom{
    grid-row:2/3;
    grid-column:1/3;
    display:grid;
    grid-template-columns: repeat(5,1fr);
    gap:0.5rem;
    display:flex;
    align-items:center;
    justify-content:space-around;
}
.content>.body>.today-info>.bottom>div{
    display:flex;
    flex-direction:column;
}
.content>.body>.today-info>.bottom>div>.temp{
    font-size:1.5rem;
    margin-bottom:0.5rem;
}
.content>.body>.today-info>.bottom>div>.time{
    font-size:1.2rem;
    padding-left:0.8rem;
}
.content>.body>.today-info>.bottom>div>.time-indicator{
    font-family:'myFont3';
    padding-left:1rem;
    color:#3C3D37;
}
.content>.body>.today-info>.bottom>div>.img-container>img{
    width:70px;
    height:70px;
    margin-bottom:0.5rem;
}
.content>.body>.weekly-info{
    background:whitesmoke;
    width:650px;
    height:350px;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    padding:1.5rem 1.5rem;
    box-sizing: border-box;
    margin-bottom:2rem;
}
.content>.body>.weekly-info>div{
    display:flex;
    height:117px;
    justify-content: space-between;
    font-size:1.3rem;
}
.content>.body>.weekly-info>div>.date,.body>.weekly-info>div .rain-percent,.body>.weekly-info>div .water-drop>img
,.body>.weekly-info>div>.temp{
    padding-top:0.5rem;
}
.content>.body>.weekly-info>div>.date,.weekly-info>div>.temp,.content>.body>.weekly-info>div>.rain-percent-container
,.content>.body>.weekly-info>div>.img-container{
    width:160px;
    text-align: start;
}
.body>.weekly-info>div>.rain-percent-container{
    display:flex;
    justify-content: center;
}
.content>.body>.weekly-info .rain-percent-container{
    display:flex;
}
.content>.body>.weekly-info>div>.img-container>img{
    width:50px;
    height:50px;
}
.content>.body>#error-dialog{
    padding:2rem;
    font-size:1.5rem;
    background:#D8D9DA;
    position:absolute;
    top:400px;
    left:300px;
    border:1px solid black;
}
.content>.body>#loading-dialog{
    padding:2rem 3rem;
    font-size:1.5rem;
    background:#D8D9DA;
    position:absolute;
    top:30%;
    left:40%;
    border:1px solid black;
}
footer{
    background-color:#3C3D37;
    color:#D8D9DA;
    font-family: 'myFont3';
    text-align: center;
}
footer>span{
    padding-left:1.5rem;
}
@media(max-width:700px){
    .content{
        width:100%;
    }
    .content>.header>.img-container>img{
        width:80px;
        height:80px;
    }
    .content>.header>h2{
        font-size:1.8rem;
    }
    .content>.body>.user-selection{
        font-size:1rem;
    }
    .content>.body>.today-info{
        background: whitesmoke;
        width:300px;
        height:200px;
        display:grid;
        grid-template-rows: 90px 90px;
        gap:1.2rem;
    }
    .body>.today-info>.top-left{
        width:120px;
        padding-left:1rem;
    }
    .today-info>.top-left>.temp-container>.temp{
        font-size:1.8rem;
    }
    .body>.today-info>.top-left>.location-container>.location,.top-left>.location-container>.date{
        font-size:0.6rem;
    }
    .body>.today-info>.top-right>.time-img>.time{
        font-size:1rem;
        margin-left:0.5rem;
    }
    .body>.today-info>.top-right .img-container>img{
        width:60px;
        height:60px;
    }
    .body>.today-info>.top-right>.condition{
        font-size:1rem;
        padding-left:0.8rem;
    }
    .content>.body>.today-info>.bottom>div>.temp{
        font-size:0.8rem;
        margin-bottom:0.2rem;
    }
    .content>.body>.today-info>.bottom>div>.time{
        font-size:0.8rem;
        padding-left:0.4rem;
    }
    .content>.body>.today-info>.bottom>div>.time-indicator{
        padding-left:0.5rem;
        font-size:0.8rem;
    }
    .content>.body>.today-info>.bottom>div>.img-container>img{
        width:40px;
        height:40px;
        margin-bottom:0.2rem;
    }
    .content>.body>.weekly-info{
        width:300px;
        height:250px;
        flex-direction:column;
        padding:1rem 0.3rem;
    }
    .content>.body>.weekly-info>div{
        height:40px;
        font-size:0.8rem;
    }
    .content>.body>.weekly-info>div>.date{
        width:100px;
    }
    .weekly-info>div>.temp,.content>.body>.weekly-info>div>.rain-percent-container
    ,.content>.body>.weekly-info>div>.img-container{
        width:48px;
    }
    .body>.weekly-info>div>.temp{
        width:60px;
    }
    .content>.body>.weekly-info>div>.date,.body>.weekly-info>div .rain-percent,.body>.weekly-info>div>.temp{
        padding-top:0.5rem;
    }
    .body>.weekly-info>div .water-drop>img{
        padding-top:0.6rem;
    }
    .body>.weekly-info>div .water-drop>img{
        width:15px;
        height:15px;
    }
    .content>.body>.weekly-info>div>.img-container>img{
        width:40px;
        height:40px;
    }
    .content>.body>#error-dialog{
        padding:1rem 0.2rem;
        font-size:1rem;
        position:absolute;
        top:30%;
        left:10%;
        width:280px;
    }
    .content>.body>#loading-dialog{
        padding:1rem 2rem;
        font-size:1rem;
        position:absolute;
        top:30%;
        left:35%;
    }
    footer{
        font-size:0.7rem
    }
    footer>span{
        display:block;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,QAAQ;IACR,SAAS;AACb;AACA;IACI,sBAAsB;IACtB,4DAAmE;AACvE;AACA;IACI,sBAAsB;IACtB,4DAA+D;AACnE;AACA;IACI,sBAAsB;IACtB,4DAA+C;AACnD;AACA;IACI,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;IACX,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,cAAc;IACd,sBAAsB;IACtB,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;IACZ,8BAA8B;IAC9B,2BAA2B;IAC3B,cAAc;AAClB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,YAAY;AAChB;AACA;IACI,cAAc;IACd,sBAAsB;AAC1B;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,oCAAoC;IACpC,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,UAAU;IACV,WAAW;IACX,oBAAoB;AACxB;AACA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;IACrB,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,8BAA8B;IAC9B,gBAAgB;AACpB;AACA;;IAEI,kBAAkB;AACtB;AACA;;IAEI,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI,YAAY;AAChB;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,OAAO;IACP,QAAQ;IACR,sBAAsB;AAC1B;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,mBAAmB;AACvB;AACA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,gBAAgB;IACpB;IACA;QACI,cAAc;IAClB;IACA;QACI,sBAAsB;QACtB,WAAW;QACX,YAAY;QACZ,YAAY;QACZ,6BAA6B;QAC7B,UAAU;IACd;IACA;QACI,WAAW;QACX,iBAAiB;IACrB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,cAAc;QACd,kBAAkB;IACtB;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,cAAc;QACd,mBAAmB;IACvB;IACA;QACI,gBAAgB;QAChB,oBAAoB;IACxB;IACA;QACI,gBAAgB;QAChB,mBAAmB;IACvB;IACA;QACI,mBAAmB;QACnB,gBAAgB;IACpB;IACA;QACI,UAAU;QACV,WAAW;QACX,oBAAoB;IACxB;IACA;QACI,WAAW;QACX,YAAY;QACZ,qBAAqB;QACrB,mBAAmB;IACvB;IACA;QACI,WAAW;QACX,gBAAgB;IACpB;IACA;QACI,WAAW;IACf;IACA;;QAEI,UAAU;IACd;IACA;QACI,UAAU;IACd;IACA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,mBAAmB;QACnB,cAAc;QACd,iBAAiB;QACjB,OAAO;QACP,QAAQ;QACR,WAAW;IACf;IACA;QACI,iBAAiB;QACjB,cAAc;QACd,iBAAiB;QACjB,OAAO;QACP,QAAQ;IACZ;IACA;QACI;IACJ;IACA;QACI,aAAa;IACjB;AACJ","sourcesContent":["*{\n    margin:0;\n    padding:0;\n}\n@font-face{\n    font-family: 'myFont1';\n    src:url(./fonts/JosefinSans-VariableFont_wght.ttf) format(truetype);\n}\n@font-face{\n    font-family: 'myFont2';\n    src:url(./fonts/OpenSans_Condensed-Medium.ttf) format(truetype);\n}\n@font-face{\n    font-family: 'myFont3';\n    src:url(./fonts/new-font2.ttf) format(truetype);\n}\nbody{\n    font-family:'myFont2';\n}\n.content>.header{\n    display:flex;\n    justify-content: center;\n    align-items:center;\n    padding:1rem 0;\n    background:#3C3D37;\n}\n.content>.header>.img-container>img{\n    width:100px;\n    height:100px;\n}\n.content>.header>h2{\n    font-family: 'myFont1';\n    font-size:2rem;\n    margin-left:0.8rem;\n    color:whitesmoke;\n}\n.content>.body{\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    background:#D8D9DA;\n    padding-top:0.8rem;\n    position:relative;\n}\n.content>.body>.user-selection{\n    font-size:1.2rem;\n}\n.content>.body>.user-selection form{\n    display:flex;\n    align-items:center;\n    margin-bottom:0.1rem;\n}\n.content>.body>.user-selection form>label,.body>.user-selection>.set-temp>label{\n    margin-right:0.5rem;\n}\n.content>.body>.user-selection form>input{\n    border-radius: 10px;\n    font-family:\"myFont2\";\n    height:25px;\n    padding-left:0.3rem;\n    font-size:1rem;\n}\n.content>.body>.user-selection form>button,.body>.user-selection>.set-temp>button{\n    font-size:1rem;\n    font-family: 'myFont2';\n    width:50px;\n    background:#3C3D37;\n    margin:0.5rem;\n    border-radius: 5px;\n    color:whitesmoke;\n}\n.content>.body>.user-selection form>button:hover,.body>.user-selection>.set-temp>button:hover{\n    background: #686D76;\n}\n.content>.body>.user-selection>.set-temp{\n    text-align:center;\n}\n.content>.body>.today-info{\n    background: whitesmoke;\n    width:650px;\n    height:350px;\n    margin-bottom:1.2rem;\n    border-radius:10px;\n    display:grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1fr 2fr;\n    padding:1rem 0;\n}\n.body>.today-info>.top-left{\n    display:flex;\n    flex-direction:column;\n    grid-row:1/2;\n    grid-column: 1/2;\n    width:350px;\n    padding-left:2.3rem;\n}\n.today-info>.top-left>.temp-container>.temp{\n    font-size:4rem;\n    font-weight:bold;\n}\n.body>.today-info>.top-left>.location-container{\n    display:flex;\n    flex-direction:column;\n    height:80px;\n}\n.body>.today-info>.top-left>.location-container>.location,.top-left>.location-container>.date{\n    font-size:1.5rem;\n    color:#3C3D37;\n}\n.body>.today-info>.top-right{\n    display:flex;\n    flex-direction:column;\n    height:150px;\n    grid-row:1/2;\n    grid-column:2/3;\n}\n.body>.today-info>.top-right>.time-img{\n    display:flex;\n}\n.body>.today-info>.top-right>.time-img>.time{\n    font-size:2rem;\n    margin:2rem 0 0 1.5rem;\n}\n.body>.today-info>.top-right .img-container>img{\n    width:120px;\n    height:120px;\n}\n.body>.today-info>.top-right>.condition{\n    font-size:1.5rem;\n    padding-left:1.2rem;\n    font-family:'myFont3';\n    color:#3C3D37;\n}\n.content>.body>.today-info>.bottom{\n    grid-row:2/3;\n    grid-column:1/3;\n    display:grid;\n    grid-template-columns: repeat(5,1fr);\n    gap:0.5rem;\n    display:flex;\n    align-items:center;\n    justify-content:space-around;\n}\n.content>.body>.today-info>.bottom>div{\n    display:flex;\n    flex-direction:column;\n}\n.content>.body>.today-info>.bottom>div>.temp{\n    font-size:1.5rem;\n    margin-bottom:0.5rem;\n}\n.content>.body>.today-info>.bottom>div>.time{\n    font-size:1.2rem;\n    padding-left:0.8rem;\n}\n.content>.body>.today-info>.bottom>div>.time-indicator{\n    font-family:'myFont3';\n    padding-left:1rem;\n    color:#3C3D37;\n}\n.content>.body>.today-info>.bottom>div>.img-container>img{\n    width:70px;\n    height:70px;\n    margin-bottom:0.5rem;\n}\n.content>.body>.weekly-info{\n    background:whitesmoke;\n    width:650px;\n    height:350px;\n    border-radius:10px;\n    display:flex;\n    flex-direction:column;\n    padding:1.5rem 1.5rem;\n    box-sizing: border-box;\n    margin-bottom:2rem;\n}\n.content>.body>.weekly-info>div{\n    display:flex;\n    height:117px;\n    justify-content: space-between;\n    font-size:1.3rem;\n}\n.content>.body>.weekly-info>div>.date,.body>.weekly-info>div .rain-percent,.body>.weekly-info>div .water-drop>img\n,.body>.weekly-info>div>.temp{\n    padding-top:0.5rem;\n}\n.content>.body>.weekly-info>div>.date,.weekly-info>div>.temp,.content>.body>.weekly-info>div>.rain-percent-container\n,.content>.body>.weekly-info>div>.img-container{\n    width:160px;\n    text-align: start;\n}\n.body>.weekly-info>div>.rain-percent-container{\n    display:flex;\n    justify-content: center;\n}\n.content>.body>.weekly-info .rain-percent-container{\n    display:flex;\n}\n.content>.body>.weekly-info>div>.img-container>img{\n    width:50px;\n    height:50px;\n}\n.content>.body>#error-dialog{\n    padding:2rem;\n    font-size:1.5rem;\n    background:#D8D9DA;\n    position:absolute;\n    top:400px;\n    left:300px;\n    border:1px solid black;\n}\n.content>.body>#loading-dialog{\n    padding:2rem 3rem;\n    font-size:1.5rem;\n    background:#D8D9DA;\n    position:absolute;\n    top:30%;\n    left:40%;\n    border:1px solid black;\n}\nfooter{\n    background-color:#3C3D37;\n    color:#D8D9DA;\n    font-family: 'myFont3';\n    text-align: center;\n}\nfooter>span{\n    padding-left:1.5rem;\n}\n@media(max-width:700px){\n    .content{\n        width:100%;\n    }\n    .content>.header>.img-container>img{\n        width:80px;\n        height:80px;\n    }\n    .content>.header>h2{\n        font-size:1.8rem;\n    }\n    .content>.body>.user-selection{\n        font-size:1rem;\n    }\n    .content>.body>.today-info{\n        background: whitesmoke;\n        width:300px;\n        height:200px;\n        display:grid;\n        grid-template-rows: 90px 90px;\n        gap:1.2rem;\n    }\n    .body>.today-info>.top-left{\n        width:120px;\n        padding-left:1rem;\n    }\n    .today-info>.top-left>.temp-container>.temp{\n        font-size:1.8rem;\n    }\n    .body>.today-info>.top-left>.location-container>.location,.top-left>.location-container>.date{\n        font-size:0.6rem;\n    }\n    .body>.today-info>.top-right>.time-img>.time{\n        font-size:1rem;\n        margin-left:0.5rem;\n    }\n    .body>.today-info>.top-right .img-container>img{\n        width:60px;\n        height:60px;\n    }\n    .body>.today-info>.top-right>.condition{\n        font-size:1rem;\n        padding-left:0.8rem;\n    }\n    .content>.body>.today-info>.bottom>div>.temp{\n        font-size:0.8rem;\n        margin-bottom:0.2rem;\n    }\n    .content>.body>.today-info>.bottom>div>.time{\n        font-size:0.8rem;\n        padding-left:0.4rem;\n    }\n    .content>.body>.today-info>.bottom>div>.time-indicator{\n        padding-left:0.5rem;\n        font-size:0.8rem;\n    }\n    .content>.body>.today-info>.bottom>div>.img-container>img{\n        width:40px;\n        height:40px;\n        margin-bottom:0.2rem;\n    }\n    .content>.body>.weekly-info{\n        width:300px;\n        height:250px;\n        flex-direction:column;\n        padding:1rem 0.3rem;\n    }\n    .content>.body>.weekly-info>div{\n        height:40px;\n        font-size:0.8rem;\n    }\n    .content>.body>.weekly-info>div>.date{\n        width:100px;\n    }\n    .weekly-info>div>.temp,.content>.body>.weekly-info>div>.rain-percent-container\n    ,.content>.body>.weekly-info>div>.img-container{\n        width:48px;\n    }\n    .body>.weekly-info>div>.temp{\n        width:60px;\n    }\n    .content>.body>.weekly-info>div>.date,.body>.weekly-info>div .rain-percent,.body>.weekly-info>div>.temp{\n        padding-top:0.5rem;\n    }\n    .body>.weekly-info>div .water-drop>img{\n        padding-top:0.6rem;\n    }\n    .body>.weekly-info>div .water-drop>img{\n        width:15px;\n        height:15px;\n    }\n    .content>.body>.weekly-info>div>.img-container>img{\n        width:40px;\n        height:40px;\n    }\n    .content>.body>#error-dialog{\n        padding:1rem 0.2rem;\n        font-size:1rem;\n        position:absolute;\n        top:30%;\n        left:10%;\n        width:280px;\n    }\n    .content>.body>#loading-dialog{\n        padding:1rem 2rem;\n        font-size:1rem;\n        position:absolute;\n        top:30%;\n        left:35%;\n    }\n    footer{\n        font-size:0.7rem\n    }\n    footer>span{\n        display:block;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkCurrentScale: () => (/* binding */ checkCurrentScale),
/* harmony export */   clearPreviousContents: () => (/* binding */ clearPreviousContents),
/* harmony export */   convertToFahrenheit: () => (/* binding */ convertToFahrenheit),
/* harmony export */   importDataToDom: () => (/* binding */ importDataToDom),
/* harmony export */   loadHeaderImage: () => (/* binding */ loadHeaderImage)
/* harmony export */ });
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch.js */ "./src/fetch.js");
/* harmony import */ var _images_cloudy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/cloudy.png */ "./src/images/cloudy.png");
/* harmony import */ var _images_overcast_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/overcast.png */ "./src/images/overcast.png");
/* harmony import */ var _images_partial_cloud_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/partial-cloud.png */ "./src/images/partial-cloud.png");
/* harmony import */ var _images_rainy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/rainy.png */ "./src/images/rainy.png");
/* harmony import */ var _images_snow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/snow.png */ "./src/images/snow.png");
/* harmony import */ var _images_sunny_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/sunny.png */ "./src/images/sunny.png");
/* harmony import */ var _images_night_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/night.png */ "./src/images/night.png");
/* harmony import */ var _images_water_drop_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/water-drop.png */ "./src/images/water-drop.png");









//For loading the header image
function loadHeaderImage() {
  const myWeatherIconContainer = document.querySelector(
    '.header>.img-container',
  );
  const myWeatherIcon = document.createElement('img');
  myWeatherIcon.src = _images_cloudy_png__WEBPACK_IMPORTED_MODULE_1__;
  myWeatherIconContainer.appendChild(myWeatherIcon);
}
//This function is used for loading weather condition icons based of the uses
function loadContentImages() {
  const overcastIcon = document.createElement('img');
  const partialCloudIcon = document.createElement('img');
  const rainyIcon = document.createElement('img');
  const snowIcon = document.createElement('img');
  const sunnyIcon = document.createElement('img');
  const nightIcon = document.createElement('img');
  const dropIcon = document.createElement('img');

  overcastIcon.src = _images_overcast_png__WEBPACK_IMPORTED_MODULE_2__;
  partialCloudIcon.src = _images_partial_cloud_png__WEBPACK_IMPORTED_MODULE_3__;
  rainyIcon.src = _images_rainy_png__WEBPACK_IMPORTED_MODULE_4__;
  snowIcon.src = _images_snow_png__WEBPACK_IMPORTED_MODULE_5__;
  sunnyIcon.src = _images_sunny_png__WEBPACK_IMPORTED_MODULE_6__;
  nightIcon.src = _images_night_png__WEBPACK_IMPORTED_MODULE_7__;
  dropIcon.src = _images_water_drop_png__WEBPACK_IMPORTED_MODULE_8__;

  return {
    overcastIcon,
    partialCloudIcon,
    rainyIcon,
    snowIcon,
    sunnyIcon,
    nightIcon,
    dropIcon,
  };
}

function importDataToDom(data) {
  const topLeftTemp = document.querySelector('.top-left>.temp-container>.temp');
  const topLeftAddress = document.querySelector(
    '.top-left>.location-container>.location',
  );
  const topLeftDate = document.querySelector(
    '.top-left>.location-container>.date',
  );
  const topRightTime = document.querySelector('.top-right>.time-img>.time');
  const topRightCondition = document.querySelector('.top-right>.condition');
  const topRightImage = document.querySelector(
    '.top-right>.time-img>.img-container',
  );

  // The currentDay and currentDayMonthYear variables is getting the date, month and year in a convenient format
  const currentDay = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(data.days[0].datetime).getDayName();
  const currentDayMonthYear = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(
    data.days[0].datetime,
  ).getActualDayMonthYear();
  // myTopRightIcon variable contains the appropriate icon which matches with the current air condition
  const myTopRightIcon = loadIcon(data.currentConditions.conditions);

  topLeftTemp.textContent = `${data.currentConditions.temp} °C`;
  topLeftAddress.textContent = data.resolvedAddress;
  topLeftDate.textContent = `${currentDay}, ${currentDayMonthYear}`;
  topRightTime.textContent = `${(0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(data.currentConditions.datetime).myNewTime} ${(0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(data.currentConditions.datetime).timeIndicator}`;
  topRightCondition.textContent = data.currentConditions.conditions;
  topRightImage.appendChild(myTopRightIcon);
//loads the current day's weather information from the the data fetched from the visual crossing API
  const todayTempInfo = () => {
    let todayInfoIndex = 1;
    let shift = false;
    const bottomDivContainers = document.querySelectorAll(
      '.today-info>.bottom>div',
    );
    const currentTime = data.currentConditions.datetime;
    let index = data.days[0].hours.findIndex(
      (item) => item.datetime === currentTime,
    );
    if (index === -1) {
      index =
        data.days[0].hours.findIndex(
          (item) => item.datetime.slice(0, 2) === currentTime.slice(0, 2),
        ) + 2;
    } else {
      index += 2;
    }
    if (index > 23) {
      index = 0;
      shift = true;
    }
    // console.log(currentTime);
    // console.log(index); 
    bottomDivContainers.forEach(() => {
      const temperature = document.querySelector(
        `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`,
      );
      const imgContainer = document.querySelector(
        `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.img-container`,
      );
      const time = document.querySelector(
        `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time`,
      );
      const timeIndicator = document.querySelector(
        `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time-indicator`,
      );
      if (!shift && index <= 23) {
        temperature.textContent = `${data.days[0].hours[index].temp} °C`;
        const conditionIcon = data.days[0].hours[index].icon;
        const myIcon = loadIcon(conditionIcon);
        imgContainer.appendChild(myIcon);
        time.textContent = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(
          data.days[0].hours[index].datetime,
        ).myNewTime;
        timeIndicator.textContent = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(
          data.days[0].hours[index].datetime,
        ).timeIndicator;
      } else {
        temperature.textContent = `${data.days[1].hours[index].temp} °C`;
        const conditionIcon = data.days[1].hours[index].icon;
        const myIcon = loadIcon(conditionIcon);
        imgContainer.appendChild(myIcon);
        time.textContent = data.days[1].hours[index].datetime;
        time.textContent = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(
          data.days[1].hours[index].datetime,
        ).myNewTime;
        timeIndicator.textContent = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(
          data.days[1].hours[index].datetime,
        ).timeIndicator;
      }
      index += 2;
      todayInfoIndex += 1;
      if (index > 23) {
        if (index - 2 === 23) {
          index = 1;
        } else {
          index = 0;
        }
        shift = true;
      }
    });
  };
//loads the current week's weather information from the the data fetched from the visual crossing API
  const weeklyTempInfo = () => {
    let weeklyInfoIndex = 1;
    const weeklyDivContainers = document.querySelectorAll('.weekly-info>div');

    weeklyDivContainers.forEach(() => {
      const date = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"]>.date`,
      );
      const rainPercent = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"] .rain-percent`,
      );
      const waterDropIconCont = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"] .water-drop`,
      );
      const conditionIconContainer = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"]>.img-container`,
      );
      const tempMin = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.min`,
      );
      const tempMax = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.max`,
      );

      const daysInfo = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(data.days[weeklyInfoIndex].datetime)
        .getDayName()
        .slice(0, 3);
      const daysAndMonthInfo = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(
        data.days[weeklyInfoIndex].datetime,
      ).getActualDayMonth();
      date.textContent = `${daysInfo}, ${daysAndMonthInfo.slice(0, -6)}`;
      rainPercent.textContent = `${data.days[weeklyInfoIndex].precipprob} %`;
      waterDropIconCont.appendChild(loadContentImages().dropIcon);
      tempMin.textContent = data.days[weeklyInfoIndex].tempmin;
      tempMax.textContent = `/${data.days[weeklyInfoIndex].tempmax} °C`;

      const conditionIcon = loadIcon(data.days[weeklyInfoIndex].conditions);
      conditionIconContainer.appendChild(conditionIcon);

      weeklyInfoIndex += 1;
    });
  };

//   console.log(data.days[0]);
//   console.log(data.days[1]);
//   console.log(data.days[2]);
//   console.log(data.days[3]);
  todayTempInfo();
  weeklyTempInfo();
}
//Assigns the right weather condition icon based on the current condition fetched from the API
function loadIcon(conditionIcon) {
  let myIcon;
  if (/Clear/i.test(conditionIcon)) {
    console.log(conditionIcon);
    if (/night/i.test(conditionIcon)) {
      myIcon = loadContentImages().nightIcon;
    } else {
      myIcon = loadContentImages().sunnyIcon;
    }
  } else if (/Rain/i.test(conditionIcon)) {
    myIcon = loadContentImages().rainyIcon;
  } else if (/partly-cloudy/i.test(conditionIcon)) {
    if (/night/i.test(conditionIcon)) {
      myIcon = loadContentImages().nightIcon;
    } else {
      myIcon = loadContentImages().partialCloudIcon;
    }
  } else if (/Overcast/i.test(conditionIcon) || /Cloudy/i.test(conditionIcon)) {
    myIcon = loadContentImages().overcastIcon;
  } else if (/Snow/i.test(conditionIcon)) {
    myIcon = loadContentImages().snowIcon;
  }

  return myIcon;
}
//Clears all the previous data from the DOM
function clearPreviousContents() {
  const topLeftTemp = document.querySelector('.top-left>.temp-container>.temp');
  const topLeftAddress = document.querySelector(
    '.top-left>.location-container>.location',
  );
  const topLeftDate = document.querySelector(
    '.top-left>.location-container>.date',
  );
  const topRightTime = document.querySelector('.top-right>.time-img>.time');
  const topRightCondition = document.querySelector('.top-right>.condition');
  const topRightImage = document.querySelector(
    '.top-right>.time-img>.img-container',
  );
  const bottomDivContainers = document.querySelectorAll(
    '.today-info>.bottom>div',
  );

  topLeftTemp.innerHTML = '';
  topLeftAddress.textContent = '';
  topLeftDate.innerHTML = '';
  topRightTime.innerHTML = '';
  topRightCondition.innerHTML = '';
  topRightImage.innerHTML = '';

  let todayInfoIndex = 1;
  bottomDivContainers.forEach(() => {
    const temperature = document.querySelector(
      `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`,
    );
    const imgContainer = document.querySelector(
      `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.img-container`,
    );
    const time = document.querySelector(
      `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time`,
    );
    const timeIndicator = document.querySelector(
      `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time-indicator`,
    );

    temperature.innerHTML = '';
    imgContainer.innerHTML = '';
    time.innerHtml = '';
    timeIndicator.innerHtml = '';

    todayInfoIndex += 1;
  });

  const weeklyInfoDivContainers = document.querySelectorAll('.weekly-info>div');
  let weeklyInfoIndex = 1;

  weeklyInfoDivContainers.forEach(() => {
    const date = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"]>.date`,
    );
    const rainPercent = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"] .rain-percent`,
    );
    const waterDropIconCont = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"] .water-drop`,
    );
    const conditionIconContainer = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"]>.img-container`,
    );
    const tempMin = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.min`,
    );
    const tempMax = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.max`,
    );

    date.innerHTML = '';
    rainPercent.innerHtml = '';
    waterDropIconCont.innerHTML = '';
    conditionIconContainer.innerHTML = '';
    tempMin.innerHTML = '';
    tempMax.innerHTML = '';

    weeklyInfoIndex += 1;
  });
}
//Checks the current temperature scale after the scale button clicked
function checkCurrentScale() {
  const status = document
    .querySelector('.top-left>.temp-container>.temp')
    .textContent.slice(-1);
  if (status === 'C') {
    convertToFahrenheit();
  } else {
    const userInput = document.querySelector('#city').value;
    clearPreviousContents();
    (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(userInput);
  }
}
//Converts from °C to °F
function convertToFahrenheit() {
  const topLeftTemp = document.querySelector('.top-left>.temp-container>.temp');
  const topLeftTempValue = topLeftTemp.textContent;
  const topLeftTempInNumber = Number(
    topLeftTempValue.substring(0, topLeftTempValue.length - 3),
  );
  topLeftTemp.textContent = `${((topLeftTempInNumber * 9) / 5 + 32).toFixed(2)} °F`;

  const bottomDivContainers = document.querySelectorAll(
    '.today-info>.bottom>div',
  );
  let todayInfoIndex = 1;
  bottomDivContainers.forEach(() => {
    const bottomTemp = document.querySelector(
      `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`,
    );
    const bottomTempValue = bottomTemp.textContent;
    const bottomTempInNumber = Number(
      bottomTempValue.substring(0, bottomTempValue.length - 3),
    );
    bottomTemp.textContent = `${((bottomTempInNumber * 9) / 5 + 32).toFixed(2)} °F`;

    todayInfoIndex += 1;
  });

  const weeklyInfoDivContainers = document.querySelectorAll('.weekly-info>div');
  let weeklyInfoIndex = 1;
  weeklyInfoDivContainers.forEach(() => {
    const minTempCont = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"] .min`,
    );
    const maxTempCont = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"] .max`,
    );
    const minTempValue = minTempCont.textContent;
    const maxTempValue = maxTempCont.textContent;

    const minTempInNumber = Number(minTempValue);
    const maxTempInNumber = Number(
      maxTempValue.substring(1, maxTempValue.length - 3),
    );

    minTempCont.textContent = `${((minTempInNumber * 9) / 5 + 32).toFixed(2)}`;
    maxTempCont.textContent = `/${((maxTempInNumber * 9) / 5 + 32).toFixed(2)} °F`;

    weeklyInfoIndex += 1;
  });
}




/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData),
/* harmony export */   getCurrentDayInfo: () => (/* binding */ getCurrentDayInfo),
/* harmony export */   timeFormatter: () => (/* binding */ timeFormatter)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");


async function fetchData(city) {
  try {
    const loadingDialog = document.querySelector('#loading-dialog');
    loadingDialog.showModal();
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=metric&key=VFS2WWLFWATZWDP439374ZTZY&contentType=json`,
      { mode: 'cors' },
    );
    const data = await response.json();
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.importDataToDom)(data);
    loadingDialog.close();
  } catch (err) {
    const errorDialog = document.querySelector('#error-dialog');
    const errorText = document.querySelector('#error-dialog>p');
    errorText.textContent = `${err}`;
    errorDialog.showModal();
    setTimeout(() => {
      errorDialog.close();
    }, 5000);
    fetchData('Asmara');
  }
}

function getCurrentDayInfo(dateInfo) {
  const dayData = new Date(dateInfo);
  const day = dayData.getDate();
  const month = dayData.getMonth() + 1;
  const year = dayData.getFullYear();

  const getActualDayMonthYear = () => {
    const date = new Date(year, month - 1, day);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleString('en-US', options);
  };

  const getActualDayMonth = () => {
    const date = new Date(year, month - 1, day);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleString('en-US', options);
  };

  const getDayName = () => {
    const date = new Date(dateInfo);
    return date.toLocaleString('en-US', { weekday: 'long' });
  };

  return { getDayName, getActualDayMonthYear, getActualDayMonth };
}

function timeFormatter(time) {
  const myTime = time.slice(0, 5);
  let myHour = myTime.slice(0, 2);
  const myMinute = myTime.slice(3, 5);
  let timeIndicator;

  if (myHour > 12) {
    myHour -= 12;
    timeIndicator = 'Pm';
  } else if (myHour === '12') {
    timeIndicator = 'Pm';
  } else {
    timeIndicator = 'Am';
  }

  const myNewTime = `${myHour}:${myMinute}`;
  return { myNewTime, timeIndicator };
}




/***/ }),

/***/ "./src/fonts/JosefinSans-VariableFont_wght.ttf":
/*!*****************************************************!*\
  !*** ./src/fonts/JosefinSans-VariableFont_wght.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "613585db06f849ca7717.ttf";

/***/ }),

/***/ "./src/fonts/OpenSans_Condensed-Medium.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/OpenSans_Condensed-Medium.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bbd4a90d400c77a2e76.ttf";

/***/ }),

/***/ "./src/fonts/new-font2.ttf":
/*!*********************************!*\
  !*** ./src/fonts/new-font2.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38b1e6579a4ae98f4318.ttf";

/***/ }),

/***/ "./src/images/cloudy.png":
/*!*******************************!*\
  !*** ./src/images/cloudy.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f009e441a604361a2783.png";

/***/ }),

/***/ "./src/images/night.png":
/*!******************************!*\
  !*** ./src/images/night.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73464bf22b99cd9e9f77.png";

/***/ }),

/***/ "./src/images/overcast.png":
/*!*********************************!*\
  !*** ./src/images/overcast.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0fc2d7e24f9b16140170.png";

/***/ }),

/***/ "./src/images/partial-cloud.png":
/*!**************************************!*\
  !*** ./src/images/partial-cloud.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20f0cc1d2fa7fabb49bb.png";

/***/ }),

/***/ "./src/images/rainy.png":
/*!******************************!*\
  !*** ./src/images/rainy.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7610299be6da6fba0d64.png";

/***/ }),

/***/ "./src/images/snow.png":
/*!*****************************!*\
  !*** ./src/images/snow.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9957456da0445490c376.png";

/***/ }),

/***/ "./src/images/sunny.png":
/*!******************************!*\
  !*** ./src/images/sunny.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b972dcf61eb381f03551.png";

/***/ }),

/***/ "./src/images/water-drop.png":
/*!***********************************!*\
  !*** ./src/images/water-drop.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03bc0409d105596860a6.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch.js */ "./src/fetch.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");




(0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.loadHeaderImage)();
(0,_fetch_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)('Asmara');

document.querySelector('#my-form').addEventListener('submit', () => {
  const userInput = document.querySelector('#city').value;
  (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.clearPreviousContents)();
  (0,_fetch_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)(userInput);
});
document.querySelector('.set-temp>button').addEventListener('click', () => {
  (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.checkCurrentScale)();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtKQUE0RDtBQUN4Ryw0Q0FBNEMsdUpBQXdEO0FBQ3BHLDRDQUE0Qyx1SEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVB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O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7QUNBcUI7QUFDaUM7QUFLcEM7O0FBRWxCLHdEQUFlO0FBQ2Ysb0RBQVM7O0FBRVQ7QUFDQTtBQUNBLEVBQUUsOERBQXFCO0FBQ3ZCLEVBQUUsb0RBQVM7QUFDWCxDQUFDO0FBQ0Q7QUFDQSxFQUFFLDBEQUFpQjtBQUNuQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtbmV3Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1uZXcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLW5ldy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtbmV3Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtbmV3Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLW5ldy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1uZXcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLW5ldy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1uZXcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtbmV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtbmV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtbmV3Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1uZXcvLi9zcmMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtbmV3L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwLW5ldy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1uZXcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwLW5ldy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwLW5ldy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwLW5ldy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLW5ldy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1uZXcvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtbmV3L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1uZXcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvSm9zZWZpblNhbnMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9PcGVuU2Fuc19Db25kZW5zZWQtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvbmV3LWZvbnQyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbn1cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQxJztcbiAgICBzcmM6dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCh0cnVldHlwZSk7XG59XG5AZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250Mic7XG4gICAgc3JjOnVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQodHJ1ZXR5cGUpO1xufVxuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogJ215Rm9udDMnO1xuICAgIHNyYzp1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KHRydWV0eXBlKTtcbn1cbmJvZHl7XG4gICAgZm9udC1mYW1pbHk6J215Rm9udDInO1xufVxuLmNvbnRlbnQ+LmhlYWRlcntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIHBhZGRpbmc6MXJlbSAwO1xuICAgIGJhY2tncm91bmQ6IzNDM0QzNztcbn1cbi5jb250ZW50Pi5oZWFkZXI+LmltZy1jb250YWluZXI+aW1ne1xuICAgIHdpZHRoOjEwMHB4O1xuICAgIGhlaWdodDoxMDBweDtcbn1cbi5jb250ZW50Pi5oZWFkZXI+aDJ7XG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQxJztcbiAgICBmb250LXNpemU6MnJlbTtcbiAgICBtYXJnaW4tbGVmdDowLjhyZW07XG4gICAgY29sb3I6d2hpdGVzbW9rZTtcbn1cbi5jb250ZW50Pi5ib2R5e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGJhY2tncm91bmQ6I0Q4RDlEQTtcbiAgICBwYWRkaW5nLXRvcDowLjhyZW07XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb257XG4gICAgZm9udC1zaXplOjEuMnJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3Jte1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTowLjFyZW07XG59XG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybT5sYWJlbCwuYm9keT4udXNlci1zZWxlY3Rpb24+LnNldC10ZW1wPmxhYmVse1xuICAgIG1hcmdpbi1yaWdodDowLjVyZW07XG59XG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybT5pbnB1dHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OlwibXlGb250MlwiO1xuICAgIGhlaWdodDoyNXB4O1xuICAgIHBhZGRpbmctbGVmdDowLjNyZW07XG4gICAgZm9udC1zaXplOjFyZW07XG59XG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybT5idXR0b24sLmJvZHk+LnVzZXItc2VsZWN0aW9uPi5zZXQtdGVtcD5idXR0b257XG4gICAgZm9udC1zaXplOjFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQyJztcbiAgICB3aWR0aDo1MHB4O1xuICAgIGJhY2tncm91bmQ6IzNDM0QzNztcbiAgICBtYXJnaW46MC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm0+YnV0dG9uOmhvdmVyLC5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXA+YnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICM2ODZENzY7XG59XG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24+LnNldC10ZW1we1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm97XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICB3aWR0aDo2NTBweDtcbiAgICBoZWlnaHQ6MzUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbToxLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xuICAgIHBhZGRpbmc6MXJlbSAwO1xufVxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgZ3JpZC1yb3c6MS8yO1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgd2lkdGg6MzUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OjIuM3JlbTtcbn1cbi50b2RheS1pbmZvPi50b3AtbGVmdD4udGVtcC1jb250YWluZXI+LnRlbXB7XG4gICAgZm9udC1zaXplOjRyZW07XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgaGVpZ2h0OjgwcHg7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4ubG9jYXRpb24sLnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmRhdGV7XG4gICAgZm9udC1zaXplOjEuNXJlbTtcbiAgICBjb2xvcjojM0MzRDM3O1xufVxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGhlaWdodDoxNTBweDtcbiAgICBncmlkLXJvdzoxLzI7XG4gICAgZ3JpZC1jb2x1bW46Mi8zO1xufVxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4udGltZS1pbWd7XG4gICAgZGlzcGxheTpmbGV4O1xufVxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4udGltZS1pbWc+LnRpbWV7XG4gICAgZm9udC1zaXplOjJyZW07XG4gICAgbWFyZ2luOjJyZW0gMCAwIDEuNXJlbTtcbn1cbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQgLmltZy1jb250YWluZXI+aW1ne1xuICAgIHdpZHRoOjEyMHB4O1xuICAgIGhlaWdodDoxMjBweDtcbn1cbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LmNvbmRpdGlvbntcbiAgICBmb250LXNpemU6MS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDoxLjJyZW07XG4gICAgZm9udC1mYW1pbHk6J215Rm9udDMnO1xuICAgIGNvbG9yOiMzQzNEMzc7XG59XG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9te1xuICAgIGdyaWQtcm93OjIvMztcbiAgICBncmlkLWNvbHVtbjoxLzM7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsMWZyKTtcbiAgICBnYXA6MC41cmVtO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbn1cbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG59XG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGVtcHtcbiAgICBmb250LXNpemU6MS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206MC41cmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRpbWV7XG4gICAgZm9udC1zaXplOjEuMnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6MC44cmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRpbWUtaW5kaWNhdG9ye1xuICAgIGZvbnQtZmFtaWx5OidteUZvbnQzJztcbiAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcbiAgICBjb2xvcjojM0MzRDM3O1xufVxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LmltZy1jb250YWluZXI+aW1ne1xuICAgIHdpZHRoOjcwcHg7XG4gICAgaGVpZ2h0OjcwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTowLjVyZW07XG59XG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm97XG4gICAgYmFja2dyb3VuZDp3aGl0ZXNtb2tlO1xuICAgIHdpZHRoOjY1MHB4O1xuICAgIGhlaWdodDozNTBweDtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBwYWRkaW5nOjEuNXJlbSAxLjVyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW4tYm90dG9tOjJyZW07XG59XG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBoZWlnaHQ6MTE3cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtc2l6ZToxLjNyZW07XG59XG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5kYXRlLC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLnJhaW4tcGVyY2VudCwuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC53YXRlci1kcm9wPmltZ1xuLC5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnRlbXB7XG4gICAgcGFkZGluZy10b3A6MC41cmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uZGF0ZSwud2Vla2x5LWluZm8+ZGl2Pi50ZW1wLC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnJhaW4tcGVyY2VudC1jb250YWluZXJcbiwuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5pbWctY29udGFpbmVye1xuICAgIHdpZHRoOjE2MHB4O1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuLmJvZHk+LndlZWtseS1pbmZvPmRpdj4ucmFpbi1wZXJjZW50LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8gLnJhaW4tcGVyY2VudC1jb250YWluZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xufVxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uaW1nLWNvbnRhaW5lcj5pbWd7XG4gICAgd2lkdGg6NTBweDtcbiAgICBoZWlnaHQ6NTBweDtcbn1cbi5jb250ZW50Pi5ib2R5PiNlcnJvci1kaWFsb2d7XG4gICAgcGFkZGluZzoycmVtO1xuICAgIGZvbnQtc2l6ZToxLjVyZW07XG4gICAgYmFja2dyb3VuZDojRDhEOURBO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDo0MDBweDtcbiAgICBsZWZ0OjMwMHB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG59XG4uY29udGVudD4uYm9keT4jbG9hZGluZy1kaWFsb2d7XG4gICAgcGFkZGluZzoycmVtIDNyZW07XG4gICAgZm9udC1zaXplOjEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiNEOEQ5REE7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjMwJTtcbiAgICBsZWZ0OjQwJTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xufVxuZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IzNDM0QzNztcbiAgICBjb2xvcjojRDhEOURBO1xuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250Myc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9vdGVyPnNwYW57XG4gICAgcGFkZGluZy1sZWZ0OjEuNXJlbTtcbn1cbkBtZWRpYShtYXgtd2lkdGg6NzAwcHgpe1xuICAgIC5jb250ZW50e1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbiAgICAuY29udGVudD4uaGVhZGVyPi5pbWctY29udGFpbmVyPmltZ3tcbiAgICAgICAgd2lkdGg6ODBweDtcbiAgICAgICAgaGVpZ2h0OjgwcHg7XG4gICAgfVxuICAgIC5jb250ZW50Pi5oZWFkZXI+aDJ7XG4gICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbntcbiAgICAgICAgZm9udC1zaXplOjFyZW07XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZve1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgaGVpZ2h0OjIwMHB4O1xuICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTBweCA5MHB4O1xuICAgICAgICBnYXA6MS4ycmVtO1xuICAgIH1cbiAgICAuYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnR7XG4gICAgICAgIHdpZHRoOjEyMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcbiAgICB9XG4gICAgLnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi50ZW1wLWNvbnRhaW5lcj4udGVtcHtcbiAgICAgICAgZm9udC1zaXplOjEuOHJlbTtcbiAgICB9XG4gICAgLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmxvY2F0aW9uLC50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5kYXRle1xuICAgICAgICBmb250LXNpemU6MC42cmVtO1xuICAgIH1cbiAgICAuYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0Pi50aW1lLWltZz4udGltZXtcbiAgICAgICAgZm9udC1zaXplOjFyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OjAuNXJlbTtcbiAgICB9XG4gICAgLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodCAuaW1nLWNvbnRhaW5lcj5pbWd7XG4gICAgICAgIHdpZHRoOjYwcHg7XG4gICAgICAgIGhlaWdodDo2MHB4O1xuICAgIH1cbiAgICAuYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0Pi5jb25kaXRpb257XG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MC44cmVtO1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGVtcHtcbiAgICAgICAgZm9udC1zaXplOjAuOHJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowLjJyZW07XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50aW1le1xuICAgICAgICBmb250LXNpemU6MC44cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MC40cmVtO1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGltZS1pbmRpY2F0b3J7XG4gICAgICAgIHBhZGRpbmctbGVmdDowLjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi5pbWctY29udGFpbmVyPmltZ3tcbiAgICAgICAgd2lkdGg6NDBweDtcbiAgICAgICAgaGVpZ2h0OjQwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206MC4ycmVtO1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm97XG4gICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICBoZWlnaHQ6MjUwcHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgICAgcGFkZGluZzoxcmVtIDAuM3JlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdntcbiAgICAgICAgaGVpZ2h0OjQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmRhdGV7XG4gICAgICAgIHdpZHRoOjEwMHB4O1xuICAgIH1cbiAgICAud2Vla2x5LWluZm8+ZGl2Pi50ZW1wLC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnJhaW4tcGVyY2VudC1jb250YWluZXJcbiAgICAsLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uaW1nLWNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6NDhweDtcbiAgICB9XG4gICAgLmJvZHk+LndlZWtseS1pbmZvPmRpdj4udGVtcHtcbiAgICAgICAgd2lkdGg6NjBweDtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uZGF0ZSwuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC5yYWluLXBlcmNlbnQsLmJvZHk+LndlZWtseS1pbmZvPmRpdj4udGVtcHtcbiAgICAgICAgcGFkZGluZy10b3A6MC41cmVtO1xuICAgIH1cbiAgICAuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC53YXRlci1kcm9wPmltZ3tcbiAgICAgICAgcGFkZGluZy10b3A6MC42cmVtO1xuICAgIH1cbiAgICAuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC53YXRlci1kcm9wPmltZ3tcbiAgICAgICAgd2lkdGg6MTVweDtcbiAgICAgICAgaGVpZ2h0OjE1cHg7XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmltZy1jb250YWluZXI+aW1ne1xuICAgICAgICB3aWR0aDo0MHB4O1xuICAgICAgICBoZWlnaHQ6NDBweDtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+I2Vycm9yLWRpYWxvZ3tcbiAgICAgICAgcGFkZGluZzoxcmVtIDAuMnJlbTtcbiAgICAgICAgZm9udC1zaXplOjFyZW07XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6MzAlO1xuICAgICAgICBsZWZ0OjEwJTtcbiAgICAgICAgd2lkdGg6MjgwcHg7XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5PiNsb2FkaW5nLWRpYWxvZ3tcbiAgICAgICAgcGFkZGluZzoxcmVtIDJyZW07XG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjMwJTtcbiAgICAgICAgbGVmdDozNSU7XG4gICAgfVxuICAgIGZvb3RlcntcbiAgICAgICAgZm9udC1zaXplOjAuN3JlbVxuICAgIH1cbiAgICBmb290ZXI+c3BhbntcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7QUFDYjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDREQUFtRTtBQUN2RTtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDREQUErRDtBQUNuRTtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDREQUErQztBQUNuRDtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFD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QUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7O1FBRUksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixPQUFPO1FBQ1AsUUFBUTtRQUNSLFdBQVc7SUFDZjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsT0FBTztRQUNQLFFBQVE7SUFDWjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250MSc7XFxuICAgIHNyYzp1cmwoLi9mb250cy9Kb3NlZmluU2Fucy1WYXJpYWJsZUZvbnRfd2dodC50dGYpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250Mic7XFxuICAgIHNyYzp1cmwoLi9mb250cy9PcGVuU2Fuc19Db25kZW5zZWQtTWVkaXVtLnR0ZikgZm9ybWF0KHRydWV0eXBlKTtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQzJztcXG4gICAgc3JjOnVybCguL2ZvbnRzL25ldy1mb250Mi50dGYpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcbmJvZHl7XFxuICAgIGZvbnQtZmFtaWx5OidteUZvbnQyJztcXG59XFxuLmNvbnRlbnQ+LmhlYWRlcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBwYWRkaW5nOjFyZW0gMDtcXG4gICAgYmFja2dyb3VuZDojM0MzRDM3O1xcbn1cXG4uY29udGVudD4uaGVhZGVyPi5pbWctY29udGFpbmVyPmltZ3tcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIGhlaWdodDoxMDBweDtcXG59XFxuLmNvbnRlbnQ+LmhlYWRlcj5oMntcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQxJztcXG4gICAgZm9udC1zaXplOjJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OjAuOHJlbTtcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXG59XFxuLmNvbnRlbnQ+LmJvZHl7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6I0Q4RDlEQTtcXG4gICAgcGFkZGluZy10b3A6MC44cmVtO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9ue1xcbiAgICBmb250LXNpemU6MS4ycmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206MC4xcmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybT5sYWJlbCwuYm9keT4udXNlci1zZWxlY3Rpb24+LnNldC10ZW1wPmxhYmVse1xcbiAgICBtYXJnaW4tcmlnaHQ6MC41cmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybT5pbnB1dHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6XFxcIm15Rm9udDJcXFwiO1xcbiAgICBoZWlnaHQ6MjVweDtcXG4gICAgcGFkZGluZy1sZWZ0OjAuM3JlbTtcXG4gICAgZm9udC1zaXplOjFyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmJ1dHRvbiwuYm9keT4udXNlci1zZWxlY3Rpb24+LnNldC10ZW1wPmJ1dHRvbntcXG4gICAgZm9udC1zaXplOjFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250Mic7XFxuICAgIHdpZHRoOjUwcHg7XFxuICAgIGJhY2tncm91bmQ6IzNDM0QzNztcXG4gICAgbWFyZ2luOjAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xcbn1cXG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybT5idXR0b246aG92ZXIsLmJvZHk+LnVzZXItc2VsZWN0aW9uPi5zZXQtdGVtcD5idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6ICM2ODZENzY7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXB7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG4uY29udGVudD4uYm9keT4udG9kYXktaW5mb3tcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG4gICAgd2lkdGg6NjUwcHg7XFxuICAgIGhlaWdodDozNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbToxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gICAgcGFkZGluZzoxcmVtIDA7XFxufVxcbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGdyaWQtcm93OjEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgd2lkdGg6MzUwcHg7XFxuICAgIHBhZGRpbmctbGVmdDoyLjNyZW07XFxufVxcbi50b2RheS1pbmZvPi50b3AtbGVmdD4udGVtcC1jb250YWluZXI+LnRlbXB7XFxuICAgIGZvbnQtc2l6ZTo0cmVtO1xcbiAgICBmb250LXdlaWdodDpib2xkO1xcbn1cXG4uYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGhlaWdodDo4MHB4O1xcbn1cXG4uYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4ubG9jYXRpb24sLnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmRhdGV7XFxuICAgIGZvbnQtc2l6ZToxLjVyZW07XFxuICAgIGNvbG9yOiMzQzNEMzc7XFxufVxcbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBoZWlnaHQ6MTUwcHg7XFxuICAgIGdyaWQtcm93OjEvMjtcXG4gICAgZ3JpZC1jb2x1bW46Mi8zO1xcbn1cXG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0Pi50aW1lLWltZ3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0Pi50aW1lLWltZz4udGltZXtcXG4gICAgZm9udC1zaXplOjJyZW07XFxuICAgIG1hcmdpbjoycmVtIDAgMCAxLjVyZW07XFxufVxcbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQgLmltZy1jb250YWluZXI+aW1ne1xcbiAgICB3aWR0aDoxMjBweDtcXG4gICAgaGVpZ2h0OjEyMHB4O1xcbn1cXG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0Pi5jb25kaXRpb257XFxuICAgIGZvbnQtc2l6ZToxLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDoxLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OidteUZvbnQzJztcXG4gICAgY29sb3I6IzNDM0QzNztcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbXtcXG4gICAgZ3JpZC1yb3c6Mi8zO1xcbiAgICBncmlkLWNvbHVtbjoxLzM7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwxZnIpO1xcbiAgICBnYXA6MC41cmVtO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXZ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbn1cXG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGVtcHtcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTowLjVyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50aW1le1xcbiAgICBmb250LXNpemU6MS4ycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6MC44cmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGltZS1pbmRpY2F0b3J7XFxuICAgIGZvbnQtZmFtaWx5OidteUZvbnQzJztcXG4gICAgcGFkZGluZy1sZWZ0OjFyZW07XFxuICAgIGNvbG9yOiMzQzNEMzc7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi5pbWctY29udGFpbmVyPmltZ3tcXG4gICAgd2lkdGg6NzBweDtcXG4gICAgaGVpZ2h0OjcwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206MC41cmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm97XFxuICAgIGJhY2tncm91bmQ6d2hpdGVzbW9rZTtcXG4gICAgd2lkdGg6NjUwcHg7XFxuICAgIGhlaWdodDozNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgcGFkZGluZzoxLjVyZW0gMS41cmVtO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW4tYm90dG9tOjJyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXZ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgaGVpZ2h0OjExN3B4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZToxLjNyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmRhdGUsLmJvZHk+LndlZWtseS1pbmZvPmRpdiAucmFpbi1wZXJjZW50LC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLndhdGVyLWRyb3A+aW1nXFxuLC5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnRlbXB7XFxuICAgIHBhZGRpbmctdG9wOjAuNXJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uZGF0ZSwud2Vla2x5LWluZm8+ZGl2Pi50ZW1wLC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnJhaW4tcGVyY2VudC1jb250YWluZXJcXG4sLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uaW1nLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6MTYwcHg7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5yYWluLXBlcmNlbnQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8gLnJhaW4tcGVyY2VudC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uaW1nLWNvbnRhaW5lcj5pbWd7XFxuICAgIHdpZHRoOjUwcHg7XFxuICAgIGhlaWdodDo1MHB4O1xcbn1cXG4uY29udGVudD4uYm9keT4jZXJyb3ItZGlhbG9ne1xcbiAgICBwYWRkaW5nOjJyZW07XFxuICAgIGZvbnQtc2l6ZToxLjVyZW07XFxuICAgIGJhY2tncm91bmQ6I0Q4RDlEQTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDo0MDBweDtcXG4gICAgbGVmdDozMDBweDtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG59XFxuLmNvbnRlbnQ+LmJvZHk+I2xvYWRpbmctZGlhbG9ne1xcbiAgICBwYWRkaW5nOjJyZW0gM3JlbTtcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXG4gICAgYmFja2dyb3VuZDojRDhEOURBO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOjMwJTtcXG4gICAgbGVmdDo0MCU7XFxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XFxufVxcbmZvb3RlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM0MzRDM3O1xcbiAgICBjb2xvcjojRDhEOURBO1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udDMnO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmZvb3Rlcj5zcGFue1xcbiAgICBwYWRkaW5nLWxlZnQ6MS41cmVtO1xcbn1cXG5AbWVkaWEobWF4LXdpZHRoOjcwMHB4KXtcXG4gICAgLmNvbnRlbnR7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5oZWFkZXI+LmltZy1jb250YWluZXI+aW1ne1xcbiAgICAgICAgd2lkdGg6ODBweDtcXG4gICAgICAgIGhlaWdodDo4MHB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5oZWFkZXI+aDJ7XFxuICAgICAgICBmb250LXNpemU6MS44cmVtO1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbntcXG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZve1xcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG4gICAgICAgIHdpZHRoOjMwMHB4O1xcbiAgICAgICAgaGVpZ2h0OjIwMHB4O1xcbiAgICAgICAgZGlzcGxheTpncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDkwcHg7XFxuICAgICAgICBnYXA6MS4ycmVtO1xcbiAgICB9XFxuICAgIC5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdHtcXG4gICAgICAgIHdpZHRoOjEyMHB4O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OjFyZW07XFxuICAgIH1cXG4gICAgLnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi50ZW1wLWNvbnRhaW5lcj4udGVtcHtcXG4gICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XFxuICAgIH1cXG4gICAgLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmxvY2F0aW9uLC50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5kYXRle1xcbiAgICAgICAgZm9udC1zaXplOjAuNnJlbTtcXG4gICAgfVxcbiAgICAuYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0Pi50aW1lLWltZz4udGltZXtcXG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6MC41cmVtO1xcbiAgICB9XFxuICAgIC5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQgLmltZy1jb250YWluZXI+aW1ne1xcbiAgICAgICAgd2lkdGg6NjBweDtcXG4gICAgICAgIGhlaWdodDo2MHB4O1xcbiAgICB9XFxuICAgIC5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LmNvbmRpdGlvbntcXG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OjAuOHJlbTtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGVtcHtcXG4gICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOjAuMnJlbTtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGltZXtcXG4gICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6MC40cmVtO1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50aW1lLWluZGljYXRvcntcXG4gICAgICAgIHBhZGRpbmctbGVmdDowLjVyZW07XFxuICAgICAgICBmb250LXNpemU6MC44cmVtO1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi5pbWctY29udGFpbmVyPmltZ3tcXG4gICAgICAgIHdpZHRoOjQwcHg7XFxuICAgICAgICBoZWlnaHQ6NDBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MC4ycmVtO1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mb3tcXG4gICAgICAgIHdpZHRoOjMwMHB4O1xcbiAgICAgICAgaGVpZ2h0OjI1MHB4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICAgICAgcGFkZGluZzoxcmVtIDAuM3JlbTtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2e1xcbiAgICAgICAgaGVpZ2h0OjQwcHg7XFxuICAgICAgICBmb250LXNpemU6MC44cmVtO1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmRhdGV7XFxuICAgICAgICB3aWR0aDoxMDBweDtcXG4gICAgfVxcbiAgICAud2Vla2x5LWluZm8+ZGl2Pi50ZW1wLC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnJhaW4tcGVyY2VudC1jb250YWluZXJcXG4gICAgLC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmltZy1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDo0OHB4O1xcbiAgICB9XFxuICAgIC5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnRlbXB7XFxuICAgICAgICB3aWR0aDo2MHB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmRhdGUsLmJvZHk+LndlZWtseS1pbmZvPmRpdiAucmFpbi1wZXJjZW50LC5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnRlbXB7XFxuICAgICAgICBwYWRkaW5nLXRvcDowLjVyZW07XFxuICAgIH1cXG4gICAgLmJvZHk+LndlZWtseS1pbmZvPmRpdiAud2F0ZXItZHJvcD5pbWd7XFxuICAgICAgICBwYWRkaW5nLXRvcDowLjZyZW07XFxuICAgIH1cXG4gICAgLmJvZHk+LndlZWtseS1pbmZvPmRpdiAud2F0ZXItZHJvcD5pbWd7XFxuICAgICAgICB3aWR0aDoxNXB4O1xcbiAgICAgICAgaGVpZ2h0OjE1cHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uaW1nLWNvbnRhaW5lcj5pbWd7XFxuICAgICAgICB3aWR0aDo0MHB4O1xcbiAgICAgICAgaGVpZ2h0OjQwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+I2Vycm9yLWRpYWxvZ3tcXG4gICAgICAgIHBhZGRpbmc6MXJlbSAwLjJyZW07XFxuICAgICAgICBmb250LXNpemU6MXJlbTtcXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgICAgdG9wOjMwJTtcXG4gICAgICAgIGxlZnQ6MTAlO1xcbiAgICAgICAgd2lkdGg6MjgwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+I2xvYWRpbmctZGlhbG9ne1xcbiAgICAgICAgcGFkZGluZzoxcmVtIDJyZW07XFxuICAgICAgICBmb250LXNpemU6MXJlbTtcXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgICAgdG9wOjMwJTtcXG4gICAgICAgIGxlZnQ6MzUlO1xcbiAgICB9XFxuICAgIGZvb3RlcntcXG4gICAgICAgIGZvbnQtc2l6ZTowLjdyZW1cXG4gICAgfVxcbiAgICBmb290ZXI+c3BhbntcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2V0Q3VycmVudERheUluZm8sIHRpbWVGb3JtYXR0ZXIsIGZldGNoRGF0YSB9IGZyb20gJy4vZmV0Y2guanMnO1xuaW1wb3J0IHdlYXRoZXJJY29uIGZyb20gJy4vaW1hZ2VzL2Nsb3VkeS5wbmcnO1xuaW1wb3J0IG92ZXJjYXN0IGZyb20gJy4vaW1hZ2VzL292ZXJjYXN0LnBuZyc7XG5pbXBvcnQgcGFydGlhbENsb3VkIGZyb20gJy4vaW1hZ2VzL3BhcnRpYWwtY2xvdWQucG5nJztcbmltcG9ydCByYWlueSBmcm9tICcuL2ltYWdlcy9yYWlueS5wbmcnO1xuaW1wb3J0IHNub3cgZnJvbSAnLi9pbWFnZXMvc25vdy5wbmcnO1xuaW1wb3J0IHN1bm55IGZyb20gJy4vaW1hZ2VzL3N1bm55LnBuZyc7XG5pbXBvcnQgbmlnaHQgZnJvbSAnLi9pbWFnZXMvbmlnaHQucG5nJztcbmltcG9ydCBkcm9wIGZyb20gJy4vaW1hZ2VzL3dhdGVyLWRyb3AucG5nJztcbi8vRm9yIGxvYWRpbmcgdGhlIGhlYWRlciBpbWFnZVxuZnVuY3Rpb24gbG9hZEhlYWRlckltYWdlKCkge1xuICBjb25zdCBteVdlYXRoZXJJY29uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLmhlYWRlcj4uaW1nLWNvbnRhaW5lcicsXG4gICk7XG4gIGNvbnN0IG15V2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbXlXZWF0aGVySWNvbi5zcmMgPSB3ZWF0aGVySWNvbjtcbiAgbXlXZWF0aGVySWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChteVdlYXRoZXJJY29uKTtcbn1cbi8vVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGZvciBsb2FkaW5nIHdlYXRoZXIgY29uZGl0aW9uIGljb25zIGJhc2VkIG9mIHRoZSB1c2VzXG5mdW5jdGlvbiBsb2FkQ29udGVudEltYWdlcygpIHtcbiAgY29uc3Qgb3ZlcmNhc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IHBhcnRpYWxDbG91ZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgcmFpbnlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IHNub3dJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IHN1bm55SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBuaWdodEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgZHJvcEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICBvdmVyY2FzdEljb24uc3JjID0gb3ZlcmNhc3Q7XG4gIHBhcnRpYWxDbG91ZEljb24uc3JjID0gcGFydGlhbENsb3VkO1xuICByYWlueUljb24uc3JjID0gcmFpbnk7XG4gIHNub3dJY29uLnNyYyA9IHNub3c7XG4gIHN1bm55SWNvbi5zcmMgPSBzdW5ueTtcbiAgbmlnaHRJY29uLnNyYyA9IG5pZ2h0O1xuICBkcm9wSWNvbi5zcmMgPSBkcm9wO1xuXG4gIHJldHVybiB7XG4gICAgb3ZlcmNhc3RJY29uLFxuICAgIHBhcnRpYWxDbG91ZEljb24sXG4gICAgcmFpbnlJY29uLFxuICAgIHNub3dJY29uLFxuICAgIHN1bm55SWNvbixcbiAgICBuaWdodEljb24sXG4gICAgZHJvcEljb24sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGltcG9ydERhdGFUb0RvbShkYXRhKSB7XG4gIGNvbnN0IHRvcExlZnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1sZWZ0Pi50ZW1wLWNvbnRhaW5lcj4udGVtcCcpO1xuICBjb25zdCB0b3BMZWZ0QWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5sb2NhdGlvbicsXG4gICk7XG4gIGNvbnN0IHRvcExlZnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmRhdGUnLFxuICApO1xuICBjb25zdCB0b3BSaWdodFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLXJpZ2h0Pi50aW1lLWltZz4udGltZScpO1xuICBjb25zdCB0b3BSaWdodENvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtcmlnaHQ+LmNvbmRpdGlvbicpO1xuICBjb25zdCB0b3BSaWdodEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnRvcC1yaWdodD4udGltZS1pbWc+LmltZy1jb250YWluZXInLFxuICApO1xuXG4gIC8vIFRoZSBjdXJyZW50RGF5IGFuZCBjdXJyZW50RGF5TW9udGhZZWFyIHZhcmlhYmxlcyBpcyBnZXR0aW5nIHRoZSBkYXRlLCBtb250aCBhbmQgeWVhciBpbiBhIGNvbnZlbmllbnQgZm9ybWF0XG4gIGNvbnN0IGN1cnJlbnREYXkgPSBnZXRDdXJyZW50RGF5SW5mbyhkYXRhLmRheXNbMF0uZGF0ZXRpbWUpLmdldERheU5hbWUoKTtcbiAgY29uc3QgY3VycmVudERheU1vbnRoWWVhciA9IGdldEN1cnJlbnREYXlJbmZvKFxuICAgIGRhdGEuZGF5c1swXS5kYXRldGltZSxcbiAgKS5nZXRBY3R1YWxEYXlNb250aFllYXIoKTtcbiAgLy8gbXlUb3BSaWdodEljb24gdmFyaWFibGUgY29udGFpbnMgdGhlIGFwcHJvcHJpYXRlIGljb24gd2hpY2ggbWF0Y2hlcyB3aXRoIHRoZSBjdXJyZW50IGFpciBjb25kaXRpb25cbiAgY29uc3QgbXlUb3BSaWdodEljb24gPSBsb2FkSWNvbihkYXRhLmN1cnJlbnRDb25kaXRpb25zLmNvbmRpdGlvbnMpO1xuXG4gIHRvcExlZnRUZW1wLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50Q29uZGl0aW9ucy50ZW1wfSDCsENgO1xuICB0b3BMZWZ0QWRkcmVzcy50ZXh0Q29udGVudCA9IGRhdGEucmVzb2x2ZWRBZGRyZXNzO1xuICB0b3BMZWZ0RGF0ZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnREYXl9LCAke2N1cnJlbnREYXlNb250aFllYXJ9YDtcbiAgdG9wUmlnaHRUaW1lLnRleHRDb250ZW50ID0gYCR7dGltZUZvcm1hdHRlcihkYXRhLmN1cnJlbnRDb25kaXRpb25zLmRhdGV0aW1lKS5teU5ld1RpbWV9ICR7dGltZUZvcm1hdHRlcihkYXRhLmN1cnJlbnRDb25kaXRpb25zLmRhdGV0aW1lKS50aW1lSW5kaWNhdG9yfWA7XG4gIHRvcFJpZ2h0Q29uZGl0aW9uLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5jb25kaXRpb25zO1xuICB0b3BSaWdodEltYWdlLmFwcGVuZENoaWxkKG15VG9wUmlnaHRJY29uKTtcbi8vbG9hZHMgdGhlIGN1cnJlbnQgZGF5J3Mgd2VhdGhlciBpbmZvcm1hdGlvbiBmcm9tIHRoZSB0aGUgZGF0YSBmZXRjaGVkIGZyb20gdGhlIHZpc3VhbCBjcm9zc2luZyBBUElcbiAgY29uc3QgdG9kYXlUZW1wSW5mbyA9ICgpID0+IHtcbiAgICBsZXQgdG9kYXlJbmZvSW5kZXggPSAxO1xuICAgIGxldCBzaGlmdCA9IGZhbHNlO1xuICAgIGNvbnN0IGJvdHRvbURpdkNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJy50b2RheS1pbmZvPi5ib3R0b20+ZGl2JyxcbiAgICApO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5kYXRldGltZTtcbiAgICBsZXQgaW5kZXggPSBkYXRhLmRheXNbMF0uaG91cnMuZmluZEluZGV4KFxuICAgICAgKGl0ZW0pID0+IGl0ZW0uZGF0ZXRpbWUgPT09IGN1cnJlbnRUaW1lLFxuICAgICk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgaW5kZXggPVxuICAgICAgICBkYXRhLmRheXNbMF0uaG91cnMuZmluZEluZGV4KFxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmRhdGV0aW1lLnNsaWNlKDAsIDIpID09PSBjdXJyZW50VGltZS5zbGljZSgwLCAyKSxcbiAgICAgICAgKSArIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4ICs9IDI7XG4gICAgfVxuICAgIGlmIChpbmRleCA+IDIzKSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgICBzaGlmdCA9IHRydWU7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRUaW1lKTtcbiAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7IFxuICAgIGJvdHRvbURpdkNvbnRhaW5lcnMuZm9yRWFjaCgoKSA9PiB7XG4gICAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LnRlbXBgLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LmltZy1jb250YWluZXJgLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi50aW1lYCxcbiAgICAgICk7XG4gICAgICBjb25zdCB0aW1lSW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGltZS1pbmRpY2F0b3JgLFxuICAgICAgKTtcbiAgICAgIGlmICghc2hpZnQgJiYgaW5kZXggPD0gMjMpIHtcbiAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtkYXRhLmRheXNbMF0uaG91cnNbaW5kZXhdLnRlbXB9IMKwQ2A7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkYXRhLmRheXNbMF0uaG91cnNbaW5kZXhdLmljb247XG4gICAgICAgIGNvbnN0IG15SWNvbiA9IGxvYWRJY29uKGNvbmRpdGlvbkljb24pO1xuICAgICAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQobXlJY29uKTtcbiAgICAgICAgdGltZS50ZXh0Q29udGVudCA9IHRpbWVGb3JtYXR0ZXIoXG4gICAgICAgICAgZGF0YS5kYXlzWzBdLmhvdXJzW2luZGV4XS5kYXRldGltZSxcbiAgICAgICAgKS5teU5ld1RpbWU7XG4gICAgICAgIHRpbWVJbmRpY2F0b3IudGV4dENvbnRlbnQgPSB0aW1lRm9ybWF0dGVyKFxuICAgICAgICAgIGRhdGEuZGF5c1swXS5ob3Vyc1tpbmRleF0uZGF0ZXRpbWUsXG4gICAgICAgICkudGltZUluZGljYXRvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5kYXlzWzFdLmhvdXJzW2luZGV4XS50ZW1wfSDCsENgO1xuICAgICAgICBjb25zdCBjb25kaXRpb25JY29uID0gZGF0YS5kYXlzWzFdLmhvdXJzW2luZGV4XS5pY29uO1xuICAgICAgICBjb25zdCBteUljb24gPSBsb2FkSWNvbihjb25kaXRpb25JY29uKTtcbiAgICAgICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKG15SWNvbik7XG4gICAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBkYXRhLmRheXNbMV0uaG91cnNbaW5kZXhdLmRhdGV0aW1lO1xuICAgICAgICB0aW1lLnRleHRDb250ZW50ID0gdGltZUZvcm1hdHRlcihcbiAgICAgICAgICBkYXRhLmRheXNbMV0uaG91cnNbaW5kZXhdLmRhdGV0aW1lLFxuICAgICAgICApLm15TmV3VGltZTtcbiAgICAgICAgdGltZUluZGljYXRvci50ZXh0Q29udGVudCA9IHRpbWVGb3JtYXR0ZXIoXG4gICAgICAgICAgZGF0YS5kYXlzWzFdLmhvdXJzW2luZGV4XS5kYXRldGltZSxcbiAgICAgICAgKS50aW1lSW5kaWNhdG9yO1xuICAgICAgfVxuICAgICAgaW5kZXggKz0gMjtcbiAgICAgIHRvZGF5SW5mb0luZGV4ICs9IDE7XG4gICAgICBpZiAoaW5kZXggPiAyMykge1xuICAgICAgICBpZiAoaW5kZXggLSAyID09PSAyMykge1xuICAgICAgICAgIGluZGV4ID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgc2hpZnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuLy9sb2FkcyB0aGUgY3VycmVudCB3ZWVrJ3Mgd2VhdGhlciBpbmZvcm1hdGlvbiBmcm9tIHRoZSB0aGUgZGF0YSBmZXRjaGVkIGZyb20gdGhlIHZpc3VhbCBjcm9zc2luZyBBUElcbiAgY29uc3Qgd2Vla2x5VGVtcEluZm8gPSAoKSA9PiB7XG4gICAgbGV0IHdlZWtseUluZm9JbmRleCA9IDE7XG4gICAgY29uc3Qgd2Vla2x5RGl2Q29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWVrbHktaW5mbz5kaXYnKTtcblxuICAgIHdlZWtseURpdkNvbnRhaW5lcnMuZm9yRWFjaCgoKSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4uZGF0ZWAsXG4gICAgICApO1xuICAgICAgY29uc3QgcmFpblBlcmNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdIC5yYWluLXBlcmNlbnRgLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHdhdGVyRHJvcEljb25Db250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXSAud2F0ZXItZHJvcGAsXG4gICAgICApO1xuICAgICAgY29uc3QgY29uZGl0aW9uSWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LmltZy1jb250YWluZXJgLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRlbXBNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdPi50ZW1wPi5taW5gLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRlbXBNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdPi50ZW1wPi5tYXhgLFxuICAgICAgKTtcblxuICAgICAgY29uc3QgZGF5c0luZm8gPSBnZXRDdXJyZW50RGF5SW5mbyhkYXRhLmRheXNbd2Vla2x5SW5mb0luZGV4XS5kYXRldGltZSlcbiAgICAgICAgLmdldERheU5hbWUoKVxuICAgICAgICAuc2xpY2UoMCwgMyk7XG4gICAgICBjb25zdCBkYXlzQW5kTW9udGhJbmZvID0gZ2V0Q3VycmVudERheUluZm8oXG4gICAgICAgIGRhdGEuZGF5c1t3ZWVrbHlJbmZvSW5kZXhdLmRhdGV0aW1lLFxuICAgICAgKS5nZXRBY3R1YWxEYXlNb250aCgpO1xuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke2RheXNJbmZvfSwgJHtkYXlzQW5kTW9udGhJbmZvLnNsaWNlKDAsIC02KX1gO1xuICAgICAgcmFpblBlcmNlbnQudGV4dENvbnRlbnQgPSBgJHtkYXRhLmRheXNbd2Vla2x5SW5mb0luZGV4XS5wcmVjaXBwcm9ifSAlYDtcbiAgICAgIHdhdGVyRHJvcEljb25Db250LmFwcGVuZENoaWxkKGxvYWRDb250ZW50SW1hZ2VzKCkuZHJvcEljb24pO1xuICAgICAgdGVtcE1pbi50ZXh0Q29udGVudCA9IGRhdGEuZGF5c1t3ZWVrbHlJbmZvSW5kZXhdLnRlbXBtaW47XG4gICAgICB0ZW1wTWF4LnRleHRDb250ZW50ID0gYC8ke2RhdGEuZGF5c1t3ZWVrbHlJbmZvSW5kZXhdLnRlbXBtYXh9IMKwQ2A7XG5cbiAgICAgIGNvbnN0IGNvbmRpdGlvbkljb24gPSBsb2FkSWNvbihkYXRhLmRheXNbd2Vla2x5SW5mb0luZGV4XS5jb25kaXRpb25zKTtcbiAgICAgIGNvbmRpdGlvbkljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29uZGl0aW9uSWNvbik7XG5cbiAgICAgIHdlZWtseUluZm9JbmRleCArPSAxO1xuICAgIH0pO1xuICB9O1xuXG4vLyAgIGNvbnNvbGUubG9nKGRhdGEuZGF5c1swXSk7XG4vLyAgIGNvbnNvbGUubG9nKGRhdGEuZGF5c1sxXSk7XG4vLyAgIGNvbnNvbGUubG9nKGRhdGEuZGF5c1syXSk7XG4vLyAgIGNvbnNvbGUubG9nKGRhdGEuZGF5c1szXSk7XG4gIHRvZGF5VGVtcEluZm8oKTtcbiAgd2Vla2x5VGVtcEluZm8oKTtcbn1cbi8vQXNzaWducyB0aGUgcmlnaHQgd2VhdGhlciBjb25kaXRpb24gaWNvbiBiYXNlZCBvbiB0aGUgY3VycmVudCBjb25kaXRpb24gZmV0Y2hlZCBmcm9tIHRoZSBBUElcbmZ1bmN0aW9uIGxvYWRJY29uKGNvbmRpdGlvbkljb24pIHtcbiAgbGV0IG15SWNvbjtcbiAgaWYgKC9DbGVhci9pLnRlc3QoY29uZGl0aW9uSWNvbikpIHtcbiAgICBjb25zb2xlLmxvZyhjb25kaXRpb25JY29uKTtcbiAgICBpZiAoL25pZ2h0L2kudGVzdChjb25kaXRpb25JY29uKSkge1xuICAgICAgbXlJY29uID0gbG9hZENvbnRlbnRJbWFnZXMoKS5uaWdodEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIG15SWNvbiA9IGxvYWRDb250ZW50SW1hZ2VzKCkuc3VubnlJY29uO1xuICAgIH1cbiAgfSBlbHNlIGlmICgvUmFpbi9pLnRlc3QoY29uZGl0aW9uSWNvbikpIHtcbiAgICBteUljb24gPSBsb2FkQ29udGVudEltYWdlcygpLnJhaW55SWNvbjtcbiAgfSBlbHNlIGlmICgvcGFydGx5LWNsb3VkeS9pLnRlc3QoY29uZGl0aW9uSWNvbikpIHtcbiAgICBpZiAoL25pZ2h0L2kudGVzdChjb25kaXRpb25JY29uKSkge1xuICAgICAgbXlJY29uID0gbG9hZENvbnRlbnRJbWFnZXMoKS5uaWdodEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIG15SWNvbiA9IGxvYWRDb250ZW50SW1hZ2VzKCkucGFydGlhbENsb3VkSWNvbjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoL092ZXJjYXN0L2kudGVzdChjb25kaXRpb25JY29uKSB8fCAvQ2xvdWR5L2kudGVzdChjb25kaXRpb25JY29uKSkge1xuICAgIG15SWNvbiA9IGxvYWRDb250ZW50SW1hZ2VzKCkub3ZlcmNhc3RJY29uO1xuICB9IGVsc2UgaWYgKC9Tbm93L2kudGVzdChjb25kaXRpb25JY29uKSkge1xuICAgIG15SWNvbiA9IGxvYWRDb250ZW50SW1hZ2VzKCkuc25vd0ljb247XG4gIH1cblxuICByZXR1cm4gbXlJY29uO1xufVxuLy9DbGVhcnMgYWxsIHRoZSBwcmV2aW91cyBkYXRhIGZyb20gdGhlIERPTVxuZnVuY3Rpb24gY2xlYXJQcmV2aW91c0NvbnRlbnRzKCkge1xuICBjb25zdCB0b3BMZWZ0VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbGVmdD4udGVtcC1jb250YWluZXI+LnRlbXAnKTtcbiAgY29uc3QgdG9wTGVmdEFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcudG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4ubG9jYXRpb24nLFxuICApO1xuICBjb25zdCB0b3BMZWZ0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5kYXRlJyxcbiAgKTtcbiAgY29uc3QgdG9wUmlnaHRUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1yaWdodD4udGltZS1pbWc+LnRpbWUnKTtcbiAgY29uc3QgdG9wUmlnaHRDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLXJpZ2h0Pi5jb25kaXRpb24nKTtcbiAgY29uc3QgdG9wUmlnaHRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy50b3AtcmlnaHQ+LnRpbWUtaW1nPi5pbWctY29udGFpbmVyJyxcbiAgKTtcbiAgY29uc3QgYm90dG9tRGl2Q29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy50b2RheS1pbmZvPi5ib3R0b20+ZGl2JyxcbiAgKTtcblxuICB0b3BMZWZ0VGVtcC5pbm5lckhUTUwgPSAnJztcbiAgdG9wTGVmdEFkZHJlc3MudGV4dENvbnRlbnQgPSAnJztcbiAgdG9wTGVmdERhdGUuaW5uZXJIVE1MID0gJyc7XG4gIHRvcFJpZ2h0VGltZS5pbm5lckhUTUwgPSAnJztcbiAgdG9wUmlnaHRDb25kaXRpb24uaW5uZXJIVE1MID0gJyc7XG4gIHRvcFJpZ2h0SW1hZ2UuaW5uZXJIVE1MID0gJyc7XG5cbiAgbGV0IHRvZGF5SW5mb0luZGV4ID0gMTtcbiAgYm90dG9tRGl2Q29udGFpbmVycy5mb3JFYWNoKCgpID0+IHtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi50ZW1wYCxcbiAgICApO1xuICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi5pbWctY29udGFpbmVyYCxcbiAgICApO1xuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGltZWAsXG4gICAgKTtcbiAgICBjb25zdCB0aW1lSW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LnRpbWUtaW5kaWNhdG9yYCxcbiAgICApO1xuXG4gICAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gJyc7XG4gICAgaW1nQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHRpbWUuaW5uZXJIdG1sID0gJyc7XG4gICAgdGltZUluZGljYXRvci5pbm5lckh0bWwgPSAnJztcblxuICAgIHRvZGF5SW5mb0luZGV4ICs9IDE7XG4gIH0pO1xuXG4gIGNvbnN0IHdlZWtseUluZm9EaXZDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlZWtseS1pbmZvPmRpdicpO1xuICBsZXQgd2Vla2x5SW5mb0luZGV4ID0gMTtcblxuICB3ZWVrbHlJbmZvRGl2Q29udGFpbmVycy5mb3JFYWNoKCgpID0+IHtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LmRhdGVgLFxuICAgICk7XG4gICAgY29uc3QgcmFpblBlcmNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXSAucmFpbi1wZXJjZW50YCxcbiAgICApO1xuICAgIGNvbnN0IHdhdGVyRHJvcEljb25Db250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0gLndhdGVyLWRyb3BgLFxuICAgICk7XG4gICAgY29uc3QgY29uZGl0aW9uSWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdPi5pbWctY29udGFpbmVyYCxcbiAgICApO1xuICAgIGNvbnN0IHRlbXBNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4udGVtcD4ubWluYCxcbiAgICApO1xuICAgIGNvbnN0IHRlbXBNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4udGVtcD4ubWF4YCxcbiAgICApO1xuXG4gICAgZGF0ZS5pbm5lckhUTUwgPSAnJztcbiAgICByYWluUGVyY2VudC5pbm5lckh0bWwgPSAnJztcbiAgICB3YXRlckRyb3BJY29uQ29udC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25kaXRpb25JY29uQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHRlbXBNaW4uaW5uZXJIVE1MID0gJyc7XG4gICAgdGVtcE1heC5pbm5lckhUTUwgPSAnJztcblxuICAgIHdlZWtseUluZm9JbmRleCArPSAxO1xuICB9KTtcbn1cbi8vQ2hlY2tzIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIHNjYWxlIGFmdGVyIHRoZSBzY2FsZSBidXR0b24gY2xpY2tlZFxuZnVuY3Rpb24gY2hlY2tDdXJyZW50U2NhbGUoKSB7XG4gIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy50b3AtbGVmdD4udGVtcC1jb250YWluZXI+LnRlbXAnKVxuICAgIC50ZXh0Q29udGVudC5zbGljZSgtMSk7XG4gIGlmIChzdGF0dXMgPT09ICdDJykge1xuICAgIGNvbnZlcnRUb0ZhaHJlbmhlaXQoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpLnZhbHVlO1xuICAgIGNsZWFyUHJldmlvdXNDb250ZW50cygpO1xuICAgIGZldGNoRGF0YSh1c2VySW5wdXQpO1xuICB9XG59XG4vL0NvbnZlcnRzIGZyb20gwrBDIHRvIMKwRlxuZnVuY3Rpb24gY29udmVydFRvRmFocmVuaGVpdCgpIHtcbiAgY29uc3QgdG9wTGVmdFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWxlZnQ+LnRlbXAtY29udGFpbmVyPi50ZW1wJyk7XG4gIGNvbnN0IHRvcExlZnRUZW1wVmFsdWUgPSB0b3BMZWZ0VGVtcC50ZXh0Q29udGVudDtcbiAgY29uc3QgdG9wTGVmdFRlbXBJbk51bWJlciA9IE51bWJlcihcbiAgICB0b3BMZWZ0VGVtcFZhbHVlLnN1YnN0cmluZygwLCB0b3BMZWZ0VGVtcFZhbHVlLmxlbmd0aCAtIDMpLFxuICApO1xuICB0b3BMZWZ0VGVtcC50ZXh0Q29udGVudCA9IGAkeygodG9wTGVmdFRlbXBJbk51bWJlciAqIDkpIC8gNSArIDMyKS50b0ZpeGVkKDIpfSDCsEZgO1xuXG4gIGNvbnN0IGJvdHRvbURpdkNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcudG9kYXktaW5mbz4uYm90dG9tPmRpdicsXG4gICk7XG4gIGxldCB0b2RheUluZm9JbmRleCA9IDE7XG4gIGJvdHRvbURpdkNvbnRhaW5lcnMuZm9yRWFjaCgoKSA9PiB7XG4gICAgY29uc3QgYm90dG9tVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi50ZW1wYCxcbiAgICApO1xuICAgIGNvbnN0IGJvdHRvbVRlbXBWYWx1ZSA9IGJvdHRvbVRlbXAudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgYm90dG9tVGVtcEluTnVtYmVyID0gTnVtYmVyKFxuICAgICAgYm90dG9tVGVtcFZhbHVlLnN1YnN0cmluZygwLCBib3R0b21UZW1wVmFsdWUubGVuZ3RoIC0gMyksXG4gICAgKTtcbiAgICBib3R0b21UZW1wLnRleHRDb250ZW50ID0gYCR7KChib3R0b21UZW1wSW5OdW1iZXIgKiA5KSAvIDUgKyAzMikudG9GaXhlZCgyKX0gwrBGYDtcblxuICAgIHRvZGF5SW5mb0luZGV4ICs9IDE7XG4gIH0pO1xuXG4gIGNvbnN0IHdlZWtseUluZm9EaXZDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlZWtseS1pbmZvPmRpdicpO1xuICBsZXQgd2Vla2x5SW5mb0luZGV4ID0gMTtcbiAgd2Vla2x5SW5mb0RpdkNvbnRhaW5lcnMuZm9yRWFjaCgoKSA9PiB7XG4gICAgY29uc3QgbWluVGVtcENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXSAubWluYCxcbiAgICApO1xuICAgIGNvbnN0IG1heFRlbXBDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0gLm1heGAsXG4gICAgKTtcbiAgICBjb25zdCBtaW5UZW1wVmFsdWUgPSBtaW5UZW1wQ29udC50ZXh0Q29udGVudDtcbiAgICBjb25zdCBtYXhUZW1wVmFsdWUgPSBtYXhUZW1wQ29udC50ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IG1pblRlbXBJbk51bWJlciA9IE51bWJlcihtaW5UZW1wVmFsdWUpO1xuICAgIGNvbnN0IG1heFRlbXBJbk51bWJlciA9IE51bWJlcihcbiAgICAgIG1heFRlbXBWYWx1ZS5zdWJzdHJpbmcoMSwgbWF4VGVtcFZhbHVlLmxlbmd0aCAtIDMpLFxuICAgICk7XG5cbiAgICBtaW5UZW1wQ29udC50ZXh0Q29udGVudCA9IGAkeygobWluVGVtcEluTnVtYmVyICogOSkgLyA1ICsgMzIpLnRvRml4ZWQoMil9YDtcbiAgICBtYXhUZW1wQ29udC50ZXh0Q29udGVudCA9IGAvJHsoKG1heFRlbXBJbk51bWJlciAqIDkpIC8gNSArIDMyKS50b0ZpeGVkKDIpfSDCsEZgO1xuXG4gICAgd2Vla2x5SW5mb0luZGV4ICs9IDE7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBpbXBvcnREYXRhVG9Eb20sXG4gIGxvYWRIZWFkZXJJbWFnZSxcbiAgY2hlY2tDdXJyZW50U2NhbGUsXG4gIGNvbnZlcnRUb0ZhaHJlbmhlaXQsXG4gIGNsZWFyUHJldmlvdXNDb250ZW50cyxcbn07XG4iLCJpbXBvcnQgeyBpbXBvcnREYXRhVG9Eb20gfSBmcm9tICcuL0RPTS5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbG9hZGluZ0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkaW5nLWRpYWxvZycpO1xuICAgIGxvYWRpbmdEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2VuY29kZVVSSUNvbXBvbmVudChjaXR5KX0/dW5pdEdyb3VwPW1ldHJpYyZrZXk9VkZTMldXTEZXQVRaV0RQNDM5Mzc0WlRaWSZjb250ZW50VHlwZT1qc29uYCxcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGltcG9ydERhdGFUb0RvbShkYXRhKTtcbiAgICBsb2FkaW5nRGlhbG9nLmNsb3NlKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnN0IGVycm9yRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yLWRpYWxvZycpO1xuICAgIGNvbnN0IGVycm9yVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvci1kaWFsb2c+cCcpO1xuICAgIGVycm9yVGV4dC50ZXh0Q29udGVudCA9IGAke2Vycn1gO1xuICAgIGVycm9yRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZXJyb3JEaWFsb2cuY2xvc2UoKTtcbiAgICB9LCA1MDAwKTtcbiAgICBmZXRjaERhdGEoJ0FzbWFyYScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnREYXlJbmZvKGRhdGVJbmZvKSB7XG4gIGNvbnN0IGRheURhdGEgPSBuZXcgRGF0ZShkYXRlSW5mbyk7XG4gIGNvbnN0IGRheSA9IGRheURhdGEuZ2V0RGF0ZSgpO1xuICBjb25zdCBtb250aCA9IGRheURhdGEuZ2V0TW9udGgoKSArIDE7XG4gIGNvbnN0IHllYXIgPSBkYXlEYXRhLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZ2V0QWN0dWFsRGF5TW9udGhZZWFyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9O1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIG9wdGlvbnMpO1xuICB9O1xuXG4gIGNvbnN0IGdldEFjdHVhbERheU1vbnRoID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9O1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIG9wdGlvbnMpO1xuICB9O1xuXG4gIGNvbnN0IGdldERheU5hbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVJbmZvKTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IHdlZWtkYXk6ICdsb25nJyB9KTtcbiAgfTtcblxuICByZXR1cm4geyBnZXREYXlOYW1lLCBnZXRBY3R1YWxEYXlNb250aFllYXIsIGdldEFjdHVhbERheU1vbnRoIH07XG59XG5cbmZ1bmN0aW9uIHRpbWVGb3JtYXR0ZXIodGltZSkge1xuICBjb25zdCBteVRpbWUgPSB0aW1lLnNsaWNlKDAsIDUpO1xuICBsZXQgbXlIb3VyID0gbXlUaW1lLnNsaWNlKDAsIDIpO1xuICBjb25zdCBteU1pbnV0ZSA9IG15VGltZS5zbGljZSgzLCA1KTtcbiAgbGV0IHRpbWVJbmRpY2F0b3I7XG5cbiAgaWYgKG15SG91ciA+IDEyKSB7XG4gICAgbXlIb3VyIC09IDEyO1xuICAgIHRpbWVJbmRpY2F0b3IgPSAnUG0nO1xuICB9IGVsc2UgaWYgKG15SG91ciA9PT0gJzEyJykge1xuICAgIHRpbWVJbmRpY2F0b3IgPSAnUG0nO1xuICB9IGVsc2Uge1xuICAgIHRpbWVJbmRpY2F0b3IgPSAnQW0nO1xuICB9XG5cbiAgY29uc3QgbXlOZXdUaW1lID0gYCR7bXlIb3VyfToke215TWludXRlfWA7XG4gIHJldHVybiB7IG15TmV3VGltZSwgdGltZUluZGljYXRvciB9O1xufVxuXG5leHBvcnQgeyBmZXRjaERhdGEsIGdldEN1cnJlbnREYXlJbmZvLCB0aW1lRm9ybWF0dGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZmV0Y2hEYXRhLCB0aW1lRm9ybWF0dGVyIH0gZnJvbSAnLi9mZXRjaC5qcyc7XG5pbXBvcnQge1xuICBsb2FkSGVhZGVySW1hZ2UsXG4gIGNoZWNrQ3VycmVudFNjYWxlLFxuICBjbGVhclByZXZpb3VzQ29udGVudHMsXG59IGZyb20gJy4vRE9NLmpzJztcblxubG9hZEhlYWRlckltYWdlKCk7XG5mZXRjaERhdGEoJ0FzbWFyYScpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKS52YWx1ZTtcbiAgY2xlYXJQcmV2aW91c0NvbnRlbnRzKCk7XG4gIGZldGNoRGF0YSh1c2VySW5wdXQpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LXRlbXA+YnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNoZWNrQ3VycmVudFNjYWxlKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==