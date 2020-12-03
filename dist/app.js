(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.MyLibs = factory());
}(this, (function () { 'use strict';

    //####ddd

    var Aobj = {
        say: function (word) {
            console.log(word);
        }
    };

    // src/main.js
    // console.log(jQuery.fn.jQuery);
    // jQuery("body")
    // class A {
    //     show() {
    //         console.log(123);
    //     }
    // }
    // const { a, b } = { a: 1, b: 2 };
    // const CC = {
    //     show() {
    //         console.log(a, b);
    //     }
    // }

    function main () {
      // new A().show();
      Aobj.say("main show"); //foo.show();
      //CC.show();
      // console.log(foo);
    }

    return main;

})));
