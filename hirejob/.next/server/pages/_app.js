(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./styles/style.css
var style = __webpack_require__(8702);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
// EXTERNAL MODULE: ./node_modules/font-awesome/css/font-awesome.min.css
var font_awesome_min = __webpack_require__(1367);
// EXTERNAL MODULE: ./layouts/layout.js + 1 modules
var layout = __webpack_require__(2192);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./component/Navbar2.js




// import axios from "axios";

const Navbar2 = ()=>{
    const router = (0,router_.useRouter)();
    // const [user, setUser] = useState({});
    // useEffect(() => {
    //   const data = JSON.parse(localStorage.getItem("data"));
    //   const id_user = data.id_user;
    //   axios
    //     .get(`http://localhost:3001/user/list/${id_user}`)
    //     .then((res) => {
    //       console.log(res.data.data);
    //       setUser(res.data.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, []);
    const navigateLogo = ()=>{
        router.push("/landingpage/afterlogin");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container-fluid",
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "navbar navbar-expand-lg bg-white",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container-fluid",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        onClick: navigateLogo,
                        style: {
                            background: "none",
                            border: "none"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/Group 980 2.png",
                            width: "100",
                            height: 30,
                            alt: "logo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#navbarText",
                        "aria-controls": "navbarText",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "navbar-toggler-icon"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarText",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "navbar-nav me-auto mb-2 ms-5 mb-lg-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "nav-link active",
                                        "aria-current": "page",
                                        href: "/home/homeRec",
                                        children: "Home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "dropdown",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "nav-link active mx-5",
                                    "aria-current": "page",
                                    href: "#",
                                    id: "dropdownMenuButton1",
                                    "data-bs-toggle": "dropdown",
                                    "aria-expanded": "false",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/Group 797.png",
                                            width: "20",
                                            alt: "",
                                            className: "mx-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/btnNotifications.png",
                                            width: "20",
                                            alt: "",
                                            className: "ms-2",
                                            type: "button",
                                            "data-bs-toggle": "collapse",
                                            "data-bs-target": "#collapseWidthExample",
                                            "aria-expanded": "false",
                                            "aria-controls": "collapseWidthExample"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "collapse collapse-vertical",
                                                id: "collapseWidthExample",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "card card-body",
                                                    width: 40,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/notify.png",
                                                        width: "20",
                                                        alt: "",
                                                        className: "mx-4"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/updateperus/update",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/nnzkZNYWHaU.png",
                                    width: 45,
                                    height: 45,
                                    className: "mobileProfileNavbar mx-5 rounded-circle customBorder",
                                    alt: "profile image"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const component_Navbar2 = (Navbar2);

;// CONCATENATED MODULE: ./layouts/layout2.js



const layout2 = (props)=>{
    const { children  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(component_Navbar2, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            })
        ]
    });
};
/* harmony default export */ const layouts_layout2 = (layout2);

// EXTERNAL MODULE: ./layouts/footerlay.js
var footerlay = __webpack_require__(4020);
;// CONCATENATED MODULE: ./pages/_app.js









const layouts = {
    L2: layouts_layout2,
    L: layout/* default */.Z,
    F: footerlay/* default */.Z
};
const noLayout = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
};
function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        __webpack_require__(399);
    }, []);
    const Layout = layouts[Component.layout] || noLayout;
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 9090:
/***/ (() => {



/***/ }),

/***/ 1367:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 8702:
/***/ (() => {



/***/ }),

/***/ 399:
/***/ ((module) => {

"use strict";
module.exports = require("bootstrap/dist/js/bootstrap.bundle.min.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,676,664,675,943,754], () => (__webpack_exec__(9209)));
module.exports = __webpack_exports__;

})();