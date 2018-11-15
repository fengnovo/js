 (function(modules) { 
 	var installedModules = {};
 	function require(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};

 		modules[moduleId].call(module.exports, module, module.exports, require);

 		module.l = true;

 		return module.exports;
 	}

 	require.m = modules;

 	require.c = installedModules;

 	require.d = function(exports, name, getter) {
 		if(!require.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};

 	require.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};

 	require.t = function(value, mode) {
 		if(mode & 1) value = require(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		require.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) require.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};

 	require.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		require.d(getter, 'a', getter);
 		return getter;
 	};

 	require.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

 	require.p = "";


 	return require(require.s = "./src/index.js");
 })

 ({

 "./src/a.js":
 (function(module, exports) {

eval("module.exports = 'a';\n\n//# sourceURL=webpack:///./src/a.js?");

 }),

 "./src/index.js":
 (function(module, exports, require) {

eval("let s = require(/*! ./a.js */ \"./src/a.js\");\nalert(s);\n\n//# sourceURL=webpack:///./src/index.js?");

 })

 });