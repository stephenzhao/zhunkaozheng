module.exports = {
    // debug host
    "host": "0.0.0.0",

    // debug port
    "port": "9527",

    // pepper src entry, also inner webpack entry, default to `src/pages/index.js`
    "base": "src",

    // target build dir
    "build": "dist",

    // CDN domain, or just leave it blank
    "static": {
        "start"         :   "",                    // here use relative path
        "test"          :   "",
        "pre"           :   "//static.v2rx.com/",// here use CDN domain
        "release"       :   "//static.v2rx.com/" // here use CDN domain
    },

    // globals
    "globals": {  // 配置全局变量，这里配置了 static_api 和 api 两个全局变量
        // config `mock.js` for CROS solution
        "static_api": {
            "start"     :   "",                    // local api base entry
            "test"      :   "//m.v2rx.com",
            "pre"       :   "//m.v2rx.com",      // online api base entry
            "release"   :   "//m.v2rx.com"
        },
        "api": {
          "start"       :   "",
          "test"        :   "",
          "pre"         :   "//api.v2rx.com",
          "release"     :   "//api.v2rx.com"
      }
    },

    // third patry libs to bundle
    "vendor": ["react", "react-dom"],

    // dir alias, could use globally, despite of CWD
    "alias": {
        "scss"          :   "scss",
        "components"    :   "components",
        "utils"         :   "utils",
        "assets"        :   "assets",
        "app"           :   "app"

    },

    // source map options
    "devtool": "source-map",

    // switch for CSS Modules
    "css_modules": false,

    // switch for eslint
    "eslint": false,

    // template settings
    "template": {
        "title"         :   "高考准考证",                         // inner template document title
        "keywords"      :   "",                         // inner template meta keywords
        "description"   :   "",                         // inner template meta description
        "viewport"      :   "",                         // inner template meta viewport
        "favicon"       :   "",                         // website favicon path
        "path"          :   "template.html"             // custom template path, omit it if your desire to use inner template
    },

    // custom default page dir
    "pages": "pages",

    // custom default component dir
    "components": "components",

    // custom default scss dir
    "scss": "scss",

    // switch template ES mode, ['es5' or 'es6']
    "esmode": "es6",

    // switch for transfering assets dir to dist when build
    "transfer_assets": false,

    // limit image size for use base64, (smaller use base64, larger use url)
    "base64_image_limit": 10240 // 10k
}
