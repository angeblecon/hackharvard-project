"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/github-repo/route";
exports.ids = ["app/api/github-repo/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/../../../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgithub-repo%2Froute&page=%2Fapi%2Fgithub-repo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub-repo%2Froute.js&appDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgithub-repo%2Froute&page=%2Fapi%2Fgithub-repo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub-repo%2Froute.js&appDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/../../../../node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../../../../node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../../../../node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _app_apps_hackharvard_hackharvard_src_app_api_github_repo_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/github-repo/route.js */ \"(rsc)/./src/app/api/github-repo/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/github-repo/route\",\n        pathname: \"/api/github-repo\",\n        filename: \"route\",\n        bundlePath: \"app/api/github-repo/route\"\n    },\n    resolvedPagePath: \"/app/apps/hackharvard/hackharvard/src/app/api/github-repo/route.js\",\n    nextConfigOutput,\n    userland: _app_apps_hackharvard_hackharvard_src_app_api_github_repo_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/github-repo/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGZ2l0aHViLXJlcG8lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdpdGh1Yi1yZXBvJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZ2l0aHViLXJlcG8lMkZyb3V0ZS5qcyZhcHBEaXI9JTJGYXBwJTJGYXBwcyUyRmhhY2toYXJ2YXJkJTJGaGFja2hhcnZhcmQlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmFwcCUyRmFwcHMlMkZoYWNraGFydmFyZCUyRmhhY2toYXJ2YXJkJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ3NEO0FBQ3ZDO0FBQ2dDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2toYXJ2YXJkLz81MzA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG5pbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvYXBwL2FwcHMvaGFja2hhcnZhcmQvaGFja2hhcnZhcmQvc3JjL2FwcC9hcGkvZ2l0aHViLXJlcG8vcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dpdGh1Yi1yZXBvL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ2l0aHViLXJlcG9cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2dpdGh1Yi1yZXBvL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2FwcC9hcHBzL2hhY2toYXJ2YXJkL2hhY2toYXJ2YXJkL3NyYy9hcHAvYXBpL2dpdGh1Yi1yZXBvL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2dpdGh1Yi1yZXBvL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgithub-repo%2Froute&page=%2Fapi%2Fgithub-repo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub-repo%2Froute.js&appDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/github-repo/route.js":
/*!******************************************!*\
  !*** ./src/app/api/github-repo/route.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/../../../../node_modules/next/dist/server/web/exports/next-response.js\");\n\nconst util = __webpack_require__(/*! util */ \"util\");\nconst exec = util.promisify((__webpack_require__(/*! child_process */ \"child_process\").exec));\n// export async function GET(request) {\n//   const { searchParams } = new URL(request.url);\n// const user = searchParams.get('user');\n// const repo = searchParams.get('repo');\n//   // Step 1: Clone a public repository (for example purposes, cloning a random repository)\n//   // console.log('Cloning repository...');\n//   // const githubCloning = await exec(`git clone https://github.com/${user}/${repo}.git`);\n//   // console.log('Repository cloned.');\n//   const databaseName = `${repo}-db`;\n//   console.log('Creating CodeQL database...');\n//   const codeQlDatabase = await exec(`codeql database create ${databaseName} --language=javascript --source-root=${repo}`);\n//   console.log('CodeQL database created.');\n//   console.log('Running CodeQL query...');\n//   const codeQlQuery = await exec(`codeql database analyze ${databaseName} microsoft/coding-standards@1.0.0 github/security-queries --format=csv --output=query-results.csv --download`);\n//   console.log('CodeQL query completed.');\n//   // // Step 2: Create CodeQL database\n//   // exec('codeql database create my-database --language=javascript --source-root=somerepo', (error, stdout, stderr) => {\n//   //   if (error) {\n//   //     console.error(`Error creating database: ${error}`);\n//   //     return;\n//   //   }\n//   //   console.log(`Database created: ${stdout}`);\n//   // });\n//   // // Step 3: Run CodeQL query\n//   // exec('codeql database analyze my-database my-query.ql --format=sarif-latest', (error, stdout, stderr) => {\n//   //   if (error) {\n//   //     console.error(`Error running query: ${error}`);\n//   //     return;\n//   //   }\n//   //   console.log(`Query results: ${stdout}`);\n//   // });\n//   return NextResponse.json({\n//     status: 200,\n//     // githubCloning,\n//     codeQlDatabase,\n//     codeQlQuery\n//   });\n// }\nconst { Octokit } = __webpack_require__(/*! @octokit/core */ \"(rsc)/../../../node_modules/@octokit/core/dist-node/index.js\");\nconst octokit = new Octokit({\n    auth: \"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\"\n});\nasync function GET(request) {\n    const { searchParams } = new URL(request.url);\n    const owner = searchParams.get(\"owner\");\n    const repo = searchParams.get(\"repo\");\n    const { data: languages } = await octokit.request(`GET /repos/${owner}/${repo}/languages`, {\n        owner,\n        repo,\n        headers: {\n            \"X-GitHub-Api-Version\": \"2022-11-28\"\n        }\n    });\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        status: 200,\n        languages\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9naXRodWItcmVwby9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUMzQyxNQUFNQyxPQUFPQyxtQkFBT0EsQ0FBQztBQUNyQixNQUFNQyxPQUFPRixLQUFLRyxTQUFTLENBQUNGLGdFQUE2QjtBQUV6RCx1Q0FBdUM7QUFDdkMsbURBQW1EO0FBQ2pELHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFFM0MsNkZBQTZGO0FBQzdGLDZDQUE2QztBQUM3Qyw2RkFBNkY7QUFDN0YsMENBQTBDO0FBRTFDLHVDQUF1QztBQUV2QyxnREFBZ0Q7QUFDaEQsNkhBQTZIO0FBQzdILDZDQUE2QztBQUU3Qyw0Q0FBNEM7QUFDNUMsMkxBQTJMO0FBQzNMLDRDQUE0QztBQUU1Qyx5Q0FBeUM7QUFDekMsNEhBQTRIO0FBQzVILHNCQUFzQjtBQUN0QiwrREFBK0Q7QUFDL0QsbUJBQW1CO0FBQ25CLFdBQVc7QUFDWCxxREFBcUQ7QUFDckQsV0FBVztBQUVYLG1DQUFtQztBQUNuQyxrSEFBa0g7QUFDbEgsc0JBQXNCO0FBQ3RCLDJEQUEyRDtBQUMzRCxtQkFBbUI7QUFDbkIsV0FBVztBQUNYLGtEQUFrRDtBQUNsRCxXQUFXO0FBRVgsK0JBQStCO0FBQy9CLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixRQUFRO0FBQ1IsSUFBSTtBQUNKLE1BQU0sRUFBRUcsT0FBTyxFQUFFLEdBQUdILG1CQUFPQSxDQUFDO0FBRTVCLE1BQU1JLFVBQVUsSUFBSUQsUUFBUTtJQUMxQkUsTUFBTTtBQUNSO0FBRU8sZUFBZUMsSUFBSUMsT0FBTztJQUMvQixNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLFFBQVFHLEdBQUc7SUFDNUMsTUFBTUMsUUFBUUgsYUFBYUksR0FBRyxDQUFDO0lBQy9CLE1BQU1DLE9BQU9MLGFBQWFJLEdBQUcsQ0FBQztJQUU5QixNQUFNLEVBQUVFLE1BQU1DLFNBQVMsRUFBRSxHQUFHLE1BQU1YLFFBQVFHLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRUksTUFBTSxDQUFDLEVBQUVFLEtBQUssVUFBVSxDQUFDLEVBQUU7UUFDekZGO1FBQ0FFO1FBQ0FHLFNBQVM7WUFDUCx3QkFBd0I7UUFDMUI7SUFDRjtJQUVBLE9BQU9sQixrRkFBWUEsQ0FBQ21CLElBQUksQ0FBQztRQUN2QkMsUUFBUTtRQUNSSDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNraGFydmFyZC8uL3NyYy9hcHAvYXBpL2dpdGh1Yi1yZXBvL3JvdXRlLmpzPzA3NTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbmNvbnN0IGV4ZWMgPSB1dGlsLnByb21pc2lmeShyZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuZXhlYyk7XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCkge1xuLy8gICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIC8vIGNvbnN0IHVzZXIgPSBzZWFyY2hQYXJhbXMuZ2V0KCd1c2VyJyk7XG4gIC8vIGNvbnN0IHJlcG8gPSBzZWFyY2hQYXJhbXMuZ2V0KCdyZXBvJyk7XG5cbi8vICAgLy8gU3RlcCAxOiBDbG9uZSBhIHB1YmxpYyByZXBvc2l0b3J5IChmb3IgZXhhbXBsZSBwdXJwb3NlcywgY2xvbmluZyBhIHJhbmRvbSByZXBvc2l0b3J5KVxuLy8gICAvLyBjb25zb2xlLmxvZygnQ2xvbmluZyByZXBvc2l0b3J5Li4uJyk7XG4vLyAgIC8vIGNvbnN0IGdpdGh1YkNsb25pbmcgPSBhd2FpdCBleGVjKGBnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlcn0vJHtyZXBvfS5naXRgKTtcbi8vICAgLy8gY29uc29sZS5sb2coJ1JlcG9zaXRvcnkgY2xvbmVkLicpO1xuXG4vLyAgIGNvbnN0IGRhdGFiYXNlTmFtZSA9IGAke3JlcG99LWRiYDtcblxuLy8gICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgQ29kZVFMIGRhdGFiYXNlLi4uJyk7XG4vLyAgIGNvbnN0IGNvZGVRbERhdGFiYXNlID0gYXdhaXQgZXhlYyhgY29kZXFsIGRhdGFiYXNlIGNyZWF0ZSAke2RhdGFiYXNlTmFtZX0gLS1sYW5ndWFnZT1qYXZhc2NyaXB0IC0tc291cmNlLXJvb3Q9JHtyZXBvfWApO1xuLy8gICBjb25zb2xlLmxvZygnQ29kZVFMIGRhdGFiYXNlIGNyZWF0ZWQuJyk7XG5cbi8vICAgY29uc29sZS5sb2coJ1J1bm5pbmcgQ29kZVFMIHF1ZXJ5Li4uJyk7XG4vLyAgIGNvbnN0IGNvZGVRbFF1ZXJ5ID0gYXdhaXQgZXhlYyhgY29kZXFsIGRhdGFiYXNlIGFuYWx5emUgJHtkYXRhYmFzZU5hbWV9IG1pY3Jvc29mdC9jb2Rpbmctc3RhbmRhcmRzQDEuMC4wIGdpdGh1Yi9zZWN1cml0eS1xdWVyaWVzIC0tZm9ybWF0PWNzdiAtLW91dHB1dD1xdWVyeS1yZXN1bHRzLmNzdiAtLWRvd25sb2FkYCk7XG4vLyAgIGNvbnNvbGUubG9nKCdDb2RlUUwgcXVlcnkgY29tcGxldGVkLicpO1xuICAgIFxuLy8gICAvLyAvLyBTdGVwIDI6IENyZWF0ZSBDb2RlUUwgZGF0YWJhc2Vcbi8vICAgLy8gZXhlYygnY29kZXFsIGRhdGFiYXNlIGNyZWF0ZSBteS1kYXRhYmFzZSAtLWxhbmd1YWdlPWphdmFzY3JpcHQgLS1zb3VyY2Utcm9vdD1zb21lcmVwbycsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbi8vICAgLy8gICBpZiAoZXJyb3IpIHtcbi8vICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNyZWF0aW5nIGRhdGFiYXNlOiAke2Vycm9yfWApO1xuLy8gICAvLyAgICAgcmV0dXJuO1xuLy8gICAvLyAgIH1cbi8vICAgLy8gICBjb25zb2xlLmxvZyhgRGF0YWJhc2UgY3JlYXRlZDogJHtzdGRvdXR9YCk7XG4vLyAgIC8vIH0pO1xuXG4vLyAgIC8vIC8vIFN0ZXAgMzogUnVuIENvZGVRTCBxdWVyeVxuLy8gICAvLyBleGVjKCdjb2RlcWwgZGF0YWJhc2UgYW5hbHl6ZSBteS1kYXRhYmFzZSBteS1xdWVyeS5xbCAtLWZvcm1hdD1zYXJpZi1sYXRlc3QnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4vLyAgIC8vICAgaWYgKGVycm9yKSB7XG4vLyAgIC8vICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBydW5uaW5nIHF1ZXJ5OiAke2Vycm9yfWApO1xuLy8gICAvLyAgICAgcmV0dXJuO1xuLy8gICAvLyAgIH1cbi8vICAgLy8gICBjb25zb2xlLmxvZyhgUXVlcnkgcmVzdWx0czogJHtzdGRvdXR9YCk7XG4vLyAgIC8vIH0pO1xuXG4vLyAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4vLyAgICAgc3RhdHVzOiAyMDAsXG4vLyAgICAgLy8gZ2l0aHViQ2xvbmluZyxcbi8vICAgICBjb2RlUWxEYXRhYmFzZSxcbi8vICAgICBjb2RlUWxRdWVyeVxuLy8gICB9KTtcbi8vIH1cbmNvbnN0IHsgT2N0b2tpdCB9ID0gcmVxdWlyZSgnQG9jdG9raXQvY29yZScpO1xuXG5jb25zdCBvY3Rva2l0ID0gbmV3IE9jdG9raXQoe1xuICBhdXRoOiAnZ2hwX3IxZUdjRUtNbHVMUjBCcWhjdVR1ZGx6dU9JM3Y3RTNYb29kWidcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCkge1xuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IG93bmVyID0gc2VhcmNoUGFyYW1zLmdldCgnb3duZXInKTtcbiAgY29uc3QgcmVwbyA9IHNlYXJjaFBhcmFtcy5nZXQoJ3JlcG8nKTtcblxuICBjb25zdCB7IGRhdGE6IGxhbmd1YWdlcyB9ID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KGBHRVQgL3JlcG9zLyR7b3duZXJ9LyR7cmVwb30vbGFuZ3VhZ2VzYCwge1xuICAgIG93bmVyLFxuICAgIHJlcG8sXG4gICAgaGVhZGVyczoge1xuICAgICAgJ1gtR2l0SHViLUFwaS1WZXJzaW9uJzogJzIwMjItMTEtMjgnXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgIHN0YXR1czogMjAwLFxuICAgIGxhbmd1YWdlc1xuICB9KTtcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwidXRpbCIsInJlcXVpcmUiLCJleGVjIiwicHJvbWlzaWZ5IiwiT2N0b2tpdCIsIm9jdG9raXQiLCJhdXRoIiwiR0VUIiwicmVxdWVzdCIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsIm93bmVyIiwiZ2V0IiwicmVwbyIsImRhdGEiLCJsYW5ndWFnZXMiLCJoZWFkZXJzIiwianNvbiIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/github-repo/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@octokit","vendor-chunks/before-after-hook","vendor-chunks/wrappy","vendor-chunks/universal-user-agent","vendor-chunks/once","vendor-chunks/is-plain-object","vendor-chunks/deprecation"], () => (__webpack_exec__("(rsc)/../../../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgithub-repo%2Froute&page=%2Fapi%2Fgithub-repo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub-repo%2Froute.js&appDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();