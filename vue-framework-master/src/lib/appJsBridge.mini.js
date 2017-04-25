(function() {
	if (window.EmulianJSBridge) {
		return;
	}
	var JSON;
	if (!JSON) {
		JSON = {};
	}
	(function() {
		function f(n) {
			return n < 10 ? "0" + n : n
		}
		if (typeof Date.prototype.toJSON !== "function") {
			Date.prototype.toJSON = function(key) {
				return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-"
						+ f(this.getUTCMonth() + 1) + "-"
						+ f(this.getUTCDate()) + "T" + f(this.getUTCHours())
						+ ":" + f(this.getUTCMinutes()) + ":"
						+ f(this.getUTCSeconds()) + "Z" : null
			};
			String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(
					key) {
				return this.valueOf()
			}
		}
		var cx, escapable, gap, indent, meta, rep;
		function quote(string) {
			escapable.lastIndex = 0;
			return escapable.test(string) ? '"'
					+ string.replace(escapable, function(a) {
						var c = meta[a];
						return typeof c === "string" ? c : "\\u"
								+ ("0000" + a.charCodeAt(0).toString(16))
										.slice(-4)
					}) + '"' : '"' + string + '"'
		}
		function str(key, holder) {
			var i, k, v, length, mind = gap, partial, value = holder[key];
			if (value && typeof value === "object"
					&& typeof value.toJSON === "function") {
				value = value.toJSON(key)
			}
			if (typeof rep === "function") {
				value = rep.call(holder, key, value)
			}
			switch (typeof value) {
			case "string":
				return quote(value);
			case "number":
				return isFinite(value) ? String(value) : "null";
			case "boolean":
			case "null":
				return String(value);
			case "object":
				if (!value) {
					return "null"
				}
				gap += indent;
				partial = [];
				if (Object.prototype.toString.apply(value) === "[object Array]") {
					length = value.length;
					for (i = 0; i < length; i += 1) {
						partial[i] = str(i, value) || "null"
					}
					v = partial.length === 0 ? "[]" : gap ? "[\n" + gap
							+ partial.join(",\n" + gap) + "\n" + mind + "]"
							: "[" + partial.join(",") + "]";
					gap = mind;
					return v
				}
				if (rep && typeof rep === "object") {
					length = rep.length;
					for (i = 0; i < length; i += 1) {
						k = rep[i];
						if (typeof k === "string") {
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ": " : ":") + v)
							}
						}
					}
				} else {
					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ": " : ":") + v)
							}
						}
					}
				}
				v = partial.length === 0 ? "{}" : gap ? "{\n" + gap
						+ partial.join(",\n" + gap) + "\n" + mind + "}" : "{"
						+ partial.join(",") + "}";
				gap = mind;
				return v
			}
		}
		if (typeof JSON.stringify !== "function") {
			escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
			meta = {
				"\b" : "\\b",
				"\t" : "\\t",
				"\n" : "\\n",
				"\f" : "\\f",
				"\r" : "\\r",
				'"' : '\\"',
				"\\" : "\\\\"
			};
			JSON.stringify = function(value, replacer, space) {
				var i;
				gap = "";
				indent = "";
				if (typeof space === "number") {
					for (i = 0; i < space; i += 1) {
						indent += " "
					}
				} else {
					if (typeof space === "string") {
						indent = space
					}
				}
				rep = replacer;
				if (replacer
						&& typeof replacer !== "function"
						&& (typeof replacer !== "object" || typeof replacer.length !== "number")) {
					throw new Error("JSON.stringify")
				}
				return str("", {
					"" : value
				})
			}
		}
		if (typeof JSON.parse !== "function") {
			cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
			JSON.parse = function(text, reviver) {
				var j;
				function walk(holder, key) {
					var k, v, value = holder[key];
					if (value && typeof value === "object") {
						for (k in value) {
							if (Object.prototype.hasOwnProperty.call(value, k)) {
								v = walk(value, k);
								if (v !== undefined) {
									value[k] = v
								} else {
									delete value[k]
								}
							}
						}
					}
					return reviver.call(holder, key, value)
				}
				text = String(text);
				cx.lastIndex = 0;
				if (cx.test(text)) {
					text = text.replace(cx, function(a) {
						return "\\u"
								+ ("0000" + a.charCodeAt(0).toString(16))
										.slice(-4)
					})
				}
				if (/^[\],:{}\s]*$/
						.test(text
								.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
										"@")
								.replace(
										/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
										"]")
								.replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
					j = eval("(" + text + ")");
					return typeof reviver === "function" ? walk({
						"" : j
					}, "") : j
				}
				throw new SyntaxError("JSON.parse")
			}
		}
		
	}());
	var base64encodechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	function base64encode(str) {
		if (str === undefined) {
			return str
		}
		var out, i, len;
		var c1, c2, c3;
		len = str.length;
		i = 0;
		out = "";
		while (i < len) {
			c1 = str.charCodeAt(i++) & 255;
			if (i == len) {
				out += base64encodechars.charAt(c1 >> 2);
				out += base64encodechars.charAt((c1 & 3) << 4);
				out += "==";
				break
			}
			c2 = str.charCodeAt(i++);
			if (i == len) {
				out += base64encodechars.charAt(c1 >> 2);
				out += base64encodechars.charAt(((c1 & 3) << 4)
						| ((c2 & 240) >> 4));
				out += base64encodechars.charAt((c2 & 15) << 2);
				out += "=";
				break
			}
			c3 = str.charCodeAt(i++);
			out += base64encodechars.charAt(c1 >> 2);
			out += base64encodechars
					.charAt(((c1 & 3) << 4) | ((c2 & 240) >> 4));
			out += base64encodechars.charAt(((c2 & 15) << 2)
					| ((c3 & 192) >> 6));
			out += base64encodechars.charAt(c3 & 63)
		}
		return out
	}
	var UTF8 = {
		encode : function(string) {
			string = string.replace(/\r\n/g, "\n");
			var utftext = "";
			for (var n = 0; n < string.length; n++) {
				var c = string.charCodeAt(n);
				if (c < 128) {
					utftext += String.fromCharCode(c)
				} else {
					if ((c > 127) && (c < 2048)) {
						utftext += String.fromCharCode((c >> 6) | 192);
						utftext += String.fromCharCode((c & 63) | 128)
					} else {
						utftext += String.fromCharCode((c >> 12) | 224);
						utftext += String.fromCharCode(((c >> 6) & 63) | 128);
						utftext += String.fromCharCode((c & 63) | 128)
					}
				}
			}
			return utftext
		},
		decode : function(utftext) {
			var string = "";
			var i = 0;
			var c = c1 = c2 = 0;
			while (i < utftext.length) {
				c = utftext.charCodeAt(i);
				if (c < 128) {
					string += String.fromCharCode(c);
					i++
				} else {
					if ((c > 191) && (c < 224)) {
						c2 = utftext.charCodeAt(i + 1);
						string += String.fromCharCode(((c & 31) << 6)
								| (c2 & 63));
						i += 2
					} else {
						c2 = utftext.charCodeAt(i + 1);
						c3 = utftext.charCodeAt(i + 2);
						string += String.fromCharCode(((c & 15) << 12)
								| ((c2 & 63) << 6) | (c3 & 63));
						i += 3
					}
				}
			}
			return string
		}
	};
	var _callback_count = 1000;
	var _callback_map = {};
	var _webFunctions = {};
	window.EmulianJSBridge = {
		call : function(func, params, callback) {
			if (!func || typeof func !== "string") {
				return
			}
			if (typeof params === "object") {
				params = JSON.stringify(params)
			} else {
				if (typeof params !== "string") {
					params = ""
				}
			}
			var callbackId = (_callback_count++).toString();
			if (typeof callback === "function") {
				_callback_map[callbackId] = callback
			}
			__JSBridgeIframe__.src = "emulian://jsbridge/call/" + func
					+ "/" + callbackId + "/"
					+ base64encode(UTF8.encode(params))
		},
		on : function( name , callback ){
			if (name && typeof callback === 'function') {
				_webFunctions[name] = callback;
			}
		},
		_handleCallback : function(callbackId, params) {
			if (typeof callbackId === "string"
					&& typeof _callback_map[callbackId] === "function") {
				_callback_map[callbackId](params);
				delete _callback_map[callbackId]
			}
		}
		,
		_invokeWebFunction : function( name , messageString ){
			var jsonMessage;
			try{
				jsonMessage = JSON.parse(messageString);
			}catch(e){
				jsonMessage = messageString
			}
			if(name in _webFunctions){
				_webFunctions[name](jsonMessage);
			}
		}
	};
	var __JSBridgeIframe__ = document.createElement("iframe");
	__JSBridgeIframe__.id = "__JSBridgeIframe__";
	__JSBridgeIframe__.style.display = "none";
	document.documentElement.appendChild(__JSBridgeIframe__);
	var readyEvent = document.createEvent("Events");
	readyEvent.initEvent("EmulianJSBridgeReady");
	document.dispatchEvent(readyEvent);
	// var caoniam = document.getElementById('__JSBridgeIframe__');
	// console.log(caoniam);
})();