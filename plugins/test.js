
import less from 'less';
import mkdirp from 'mkdirp';
import fs from 'fs-extra';
import csso from "csso";
import { dirname } from 'path';


const writeFile = (path, contents, minify, cb) => {


    mkdirp(dirname(path), function (err) {

        if (err && typeof cb === 'function') return cb(err);

        var minifiedCss = contents;

        if (minify) {
            minifiedCss = csso.minify(contents).css;
        }

        fs.writeFile(path, minifiedCss, cb);
    });
}


function myLess(userOptions = {}) {


    var allCode = '';

    return {

        name: "myLess",

        renderStart() {
            console.log("renderStart");
        },

        async transform(code, id) {

            var suffx = id.substring(id.lastIndexOf(".") + 1);

            if (suffx == "less") {

                less.render(code, {})
                    .then(function (output) {
                        allCode += output.css;
                    }, function (error) {
                        throw error;
                    });

                return '';
            }


        },


        renderChunk(code) {
            // console.log(code);
            console.log("renderChunk");
        },

        generateBundle() {


            writeFile(userOptions.output || "app.css", allCode, userOptions.minify, (err) => {
                err && console.error(err) || console.log("写入css文件成功");
            });
            console.log("generateBundle");
        },

        renderError() {
            console.log("renderError");
        }
    }


}

export default myLess;