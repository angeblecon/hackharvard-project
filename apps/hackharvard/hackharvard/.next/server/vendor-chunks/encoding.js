"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/encoding";
exports.ids = ["vendor-chunks/encoding"];
exports.modules = {

/***/ "(rsc)/../../../../node_modules/encoding/lib/encoding.js":
/*!*********************************************************!*\
  !*** ../../../../node_modules/encoding/lib/encoding.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar iconvLite = __webpack_require__(/*! iconv-lite */ \"(rsc)/../../../../node_modules/iconv-lite/lib/index.js\");\n// Expose to the world\nmodule.exports.convert = convert;\n/**\n * Convert encoding of an UTF-8 string or a buffer\n *\n * @param {String|Buffer} str String to be converted\n * @param {String} to Encoding to be converted to\n * @param {String} [from='UTF-8'] Encoding to be converted from\n * @return {Buffer} Encoded string\n */ function convert(str, to, from) {\n    from = checkEncoding(from || \"UTF-8\");\n    to = checkEncoding(to || \"UTF-8\");\n    str = str || \"\";\n    var result;\n    if (from !== \"UTF-8\" && typeof str === \"string\") {\n        str = Buffer.from(str, \"binary\");\n    }\n    if (from === to) {\n        if (typeof str === \"string\") {\n            result = Buffer.from(str);\n        } else {\n            result = str;\n        }\n    } else {\n        try {\n            result = convertIconvLite(str, to, from);\n        } catch (E) {\n            console.error(E);\n            result = str;\n        }\n    }\n    if (typeof result === \"string\") {\n        result = Buffer.from(result, \"utf-8\");\n    }\n    return result;\n}\n/**\n * Convert encoding of astring with iconv-lite\n *\n * @param {String|Buffer} str String to be converted\n * @param {String} to Encoding to be converted to\n * @param {String} [from='UTF-8'] Encoding to be converted from\n * @return {Buffer} Encoded string\n */ function convertIconvLite(str, to, from) {\n    if (to === \"UTF-8\") {\n        return iconvLite.decode(str, from);\n    } else if (from === \"UTF-8\") {\n        return iconvLite.encode(str, to);\n    } else {\n        return iconvLite.encode(iconvLite.decode(str, from), to);\n    }\n}\n/**\n * Converts charset name if needed\n *\n * @param {String} name Character set\n * @return {String} Character set name\n */ function checkEncoding(name) {\n    return (name || \"\").toString().trim().replace(/^latin[\\-_]?(\\d+)$/i, \"ISO-8859-$1\").replace(/^win(?:dows)?[\\-_]?(\\d+)$/i, \"WINDOWS-$1\").replace(/^utf[\\-_]?(\\d+)$/i, \"UTF-$1\").replace(/^ks_c_5601\\-1987$/i, \"CP949\").replace(/^us[\\-_]?ascii$/i, \"ASCII\").toUpperCase();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2VuY29kaW5nL2xpYi9lbmNvZGluZy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLFlBQVlDLG1CQUFPQSxDQUFDO0FBRXhCLHNCQUFzQjtBQUN0QkMsc0JBQXNCLEdBQUdFO0FBRXpCOzs7Ozs7O0NBT0MsR0FDRCxTQUFTQSxRQUFRQyxHQUFHLEVBQUVDLEVBQUUsRUFBRUMsSUFBSTtJQUMxQkEsT0FBT0MsY0FBY0QsUUFBUTtJQUM3QkQsS0FBS0UsY0FBY0YsTUFBTTtJQUN6QkQsTUFBTUEsT0FBTztJQUViLElBQUlJO0lBRUosSUFBSUYsU0FBUyxXQUFXLE9BQU9GLFFBQVEsVUFBVTtRQUM3Q0EsTUFBTUssT0FBT0gsSUFBSSxDQUFDRixLQUFLO0lBQzNCO0lBRUEsSUFBSUUsU0FBU0QsSUFBSTtRQUNiLElBQUksT0FBT0QsUUFBUSxVQUFVO1lBQ3pCSSxTQUFTQyxPQUFPSCxJQUFJLENBQUNGO1FBQ3pCLE9BQU87WUFDSEksU0FBU0o7UUFDYjtJQUNKLE9BQU87UUFDSCxJQUFJO1lBQ0FJLFNBQVNFLGlCQUFpQk4sS0FBS0MsSUFBSUM7UUFDdkMsRUFBRSxPQUFPSyxHQUFHO1lBQ1JDLFFBQVFDLEtBQUssQ0FBQ0Y7WUFDZEgsU0FBU0o7UUFDYjtJQUNKO0lBRUEsSUFBSSxPQUFPSSxXQUFXLFVBQVU7UUFDNUJBLFNBQVNDLE9BQU9ILElBQUksQ0FBQ0UsUUFBUTtJQUNqQztJQUVBLE9BQU9BO0FBQ1g7QUFFQTs7Ozs7OztDQU9DLEdBQ0QsU0FBU0UsaUJBQWlCTixHQUFHLEVBQUVDLEVBQUUsRUFBRUMsSUFBSTtJQUNuQyxJQUFJRCxPQUFPLFNBQVM7UUFDaEIsT0FBT04sVUFBVWUsTUFBTSxDQUFDVixLQUFLRTtJQUNqQyxPQUFPLElBQUlBLFNBQVMsU0FBUztRQUN6QixPQUFPUCxVQUFVZ0IsTUFBTSxDQUFDWCxLQUFLQztJQUNqQyxPQUFPO1FBQ0gsT0FBT04sVUFBVWdCLE1BQU0sQ0FBQ2hCLFVBQVVlLE1BQU0sQ0FBQ1YsS0FBS0UsT0FBT0Q7SUFDekQ7QUFDSjtBQUVBOzs7OztDQUtDLEdBQ0QsU0FBU0UsY0FBY1MsSUFBSTtJQUN2QixPQUFPLENBQUNBLFFBQVEsRUFBQyxFQUNaQyxRQUFRLEdBQ1JDLElBQUksR0FDSkMsT0FBTyxDQUFDLHVCQUF1QixlQUMvQkEsT0FBTyxDQUFDLDhCQUE4QixjQUN0Q0EsT0FBTyxDQUFDLHFCQUFxQixVQUM3QkEsT0FBTyxDQUFDLHNCQUFzQixTQUM5QkEsT0FBTyxDQUFDLG9CQUFvQixTQUM1QkMsV0FBVztBQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2toYXJ2YXJkLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9lbmNvZGluZy9saWIvZW5jb2RpbmcuanM/MTk4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBpY29udkxpdGUgPSByZXF1aXJlKCdpY29udi1saXRlJyk7XG5cbi8vIEV4cG9zZSB0byB0aGUgd29ybGRcbm1vZHVsZS5leHBvcnRzLmNvbnZlcnQgPSBjb252ZXJ0O1xuXG4vKipcbiAqIENvbnZlcnQgZW5jb2Rpbmcgb2YgYW4gVVRGLTggc3RyaW5nIG9yIGEgYnVmZmVyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8QnVmZmVyfSBzdHIgU3RyaW5nIHRvIGJlIGNvbnZlcnRlZFxuICogQHBhcmFtIHtTdHJpbmd9IHRvIEVuY29kaW5nIHRvIGJlIGNvbnZlcnRlZCB0b1xuICogQHBhcmFtIHtTdHJpbmd9IFtmcm9tPSdVVEYtOCddIEVuY29kaW5nIHRvIGJlIGNvbnZlcnRlZCBmcm9tXG4gKiBAcmV0dXJuIHtCdWZmZXJ9IEVuY29kZWQgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnQoc3RyLCB0bywgZnJvbSkge1xuICAgIGZyb20gPSBjaGVja0VuY29kaW5nKGZyb20gfHwgJ1VURi04Jyk7XG4gICAgdG8gPSBjaGVja0VuY29kaW5nKHRvIHx8ICdVVEYtOCcpO1xuICAgIHN0ciA9IHN0ciB8fCAnJztcblxuICAgIHZhciByZXN1bHQ7XG5cbiAgICBpZiAoZnJvbSAhPT0gJ1VURi04JyAmJiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykge1xuICAgICAgICBzdHIgPSBCdWZmZXIuZnJvbShzdHIsICdiaW5hcnknKTtcbiAgICB9XG5cbiAgICBpZiAoZnJvbSA9PT0gdG8pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBCdWZmZXIuZnJvbShzdHIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gc3RyO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnZlcnRJY29udkxpdGUoc3RyLCB0bywgZnJvbSk7XG4gICAgICAgIH0gY2F0Y2ggKEUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoRSk7XG4gICAgICAgICAgICByZXN1bHQgPSBzdHI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmVzdWx0ID0gQnVmZmVyLmZyb20ocmVzdWx0LCAndXRmLTgnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnQgZW5jb2Rpbmcgb2YgYXN0cmluZyB3aXRoIGljb252LWxpdGVcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xCdWZmZXJ9IHN0ciBTdHJpbmcgdG8gYmUgY29udmVydGVkXG4gKiBAcGFyYW0ge1N0cmluZ30gdG8gRW5jb2RpbmcgdG8gYmUgY29udmVydGVkIHRvXG4gKiBAcGFyYW0ge1N0cmluZ30gW2Zyb209J1VURi04J10gRW5jb2RpbmcgdG8gYmUgY29udmVydGVkIGZyb21cbiAqIEByZXR1cm4ge0J1ZmZlcn0gRW5jb2RlZCBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gY29udmVydEljb252TGl0ZShzdHIsIHRvLCBmcm9tKSB7XG4gICAgaWYgKHRvID09PSAnVVRGLTgnKSB7XG4gICAgICAgIHJldHVybiBpY29udkxpdGUuZGVjb2RlKHN0ciwgZnJvbSk7XG4gICAgfSBlbHNlIGlmIChmcm9tID09PSAnVVRGLTgnKSB7XG4gICAgICAgIHJldHVybiBpY29udkxpdGUuZW5jb2RlKHN0ciwgdG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpY29udkxpdGUuZW5jb2RlKGljb252TGl0ZS5kZWNvZGUoc3RyLCBmcm9tKSwgdG8pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBjaGFyc2V0IG5hbWUgaWYgbmVlZGVkXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgQ2hhcmFjdGVyIHNldFxuICogQHJldHVybiB7U3RyaW5nfSBDaGFyYWN0ZXIgc2V0IG5hbWVcbiAqL1xuZnVuY3Rpb24gY2hlY2tFbmNvZGluZyhuYW1lKSB7XG4gICAgcmV0dXJuIChuYW1lIHx8ICcnKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9ebGF0aW5bXFwtX10/KFxcZCspJC9pLCAnSVNPLTg4NTktJDEnKVxuICAgICAgICAucmVwbGFjZSgvXndpbig/OmRvd3MpP1tcXC1fXT8oXFxkKykkL2ksICdXSU5ET1dTLSQxJylcbiAgICAgICAgLnJlcGxhY2UoL151dGZbXFwtX10/KFxcZCspJC9pLCAnVVRGLSQxJylcbiAgICAgICAgLnJlcGxhY2UoL15rc19jXzU2MDFcXC0xOTg3JC9pLCAnQ1A5NDknKVxuICAgICAgICAucmVwbGFjZSgvXnVzW1xcLV9dP2FzY2lpJC9pLCAnQVNDSUknKVxuICAgICAgICAudG9VcHBlckNhc2UoKTtcbn1cbiJdLCJuYW1lcyI6WyJpY29udkxpdGUiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbnZlcnQiLCJzdHIiLCJ0byIsImZyb20iLCJjaGVja0VuY29kaW5nIiwicmVzdWx0IiwiQnVmZmVyIiwiY29udmVydEljb252TGl0ZSIsIkUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWNvZGUiLCJlbmNvZGUiLCJuYW1lIiwidG9TdHJpbmciLCJ0cmltIiwicmVwbGFjZSIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../../../node_modules/encoding/lib/encoding.js\n");

/***/ })

};
;