(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@barba/core/dist/barba.umd.js
  var require_barba_umd = __commonJS({
    "node_modules/@barba/core/dist/barba.umd.js"(exports, module) {
      !function(t, n) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).barba = n();
      }(exports, function() {
        function t(t2, n2) {
          for (var r2 = 0; r2 < n2.length; r2++) {
            var e2 = n2[r2];
            e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t2, e2.key, e2);
          }
        }
        function n(n2, r2, e2) {
          return r2 && t(n2.prototype, r2), e2 && t(n2, e2), n2;
        }
        function r() {
          return (r = Object.assign || function(t2) {
            for (var n2 = 1; n2 < arguments.length; n2++) {
              var r2 = arguments[n2];
              for (var e2 in r2)
                Object.prototype.hasOwnProperty.call(r2, e2) && (t2[e2] = r2[e2]);
            }
            return t2;
          }).apply(this, arguments);
        }
        function e(t2, n2) {
          t2.prototype = Object.create(n2.prototype), t2.prototype.constructor = t2, t2.__proto__ = n2;
        }
        function i(t2) {
          return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          })(t2);
        }
        function o(t2, n2) {
          return (o = Object.setPrototypeOf || function(t3, n3) {
            return t3.__proto__ = n3, t3;
          })(t2, n2);
        }
        function u(t2, n2, r2) {
          return (u = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }() ? Reflect.construct : function(t3, n3, r3) {
            var e2 = [null];
            e2.push.apply(e2, n3);
            var i2 = new (Function.bind.apply(t3, e2))();
            return r3 && o(i2, r3.prototype), i2;
          }).apply(null, arguments);
        }
        function f(t2) {
          var n2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return (f = function(t3) {
            if (null === t3 || -1 === Function.toString.call(t3).indexOf("[native code]"))
              return t3;
            if ("function" != typeof t3)
              throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n2) {
              if (n2.has(t3))
                return n2.get(t3);
              n2.set(t3, r2);
            }
            function r2() {
              return u(t3, arguments, i(this).constructor);
            }
            return r2.prototype = Object.create(t3.prototype, { constructor: { value: r2, enumerable: false, writable: true, configurable: true } }), o(r2, t3);
          })(t2);
        }
        function s(t2, n2) {
          try {
            var r2 = t2();
          } catch (t3) {
            return n2(t3);
          }
          return r2 && r2.then ? r2.then(void 0, n2) : r2;
        }
        "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
        var c, a = "2.9.7", h = function() {
        };
        !function(t2) {
          t2[t2.off = 0] = "off", t2[t2.error = 1] = "error", t2[t2.warning = 2] = "warning", t2[t2.info = 3] = "info", t2[t2.debug = 4] = "debug";
        }(c || (c = {}));
        var v = c.off, l = function() {
          function t2(t3) {
            this.t = t3;
          }
          t2.getLevel = function() {
            return v;
          }, t2.setLevel = function(t3) {
            return v = c[t3];
          };
          var n2 = t2.prototype;
          return n2.error = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.error, c.error, n3);
          }, n2.warn = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.warn, c.warning, n3);
          }, n2.info = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.info, c.info, n3);
          }, n2.debug = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.log, c.debug, n3);
          }, n2.i = function(n3, r2, e2) {
            r2 <= t2.getLevel() && n3.apply(console, ["[" + this.t + "] "].concat(e2));
          }, t2;
        }(), d = O, m = E, p = g, w = x, b = T, y = "/", P = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");
        function g(t2, n2) {
          for (var r2, e2 = [], i2 = 0, o2 = 0, u2 = "", f2 = n2 && n2.delimiter || y, s2 = n2 && n2.whitelist || void 0, c2 = false; null !== (r2 = P.exec(t2)); ) {
            var a2 = r2[0], h2 = r2[1], v2 = r2.index;
            if (u2 += t2.slice(o2, v2), o2 = v2 + a2.length, h2)
              u2 += h2[1], c2 = true;
            else {
              var l2 = "", d2 = r2[2], m2 = r2[3], p2 = r2[4], w2 = r2[5];
              if (!c2 && u2.length) {
                var b2 = u2.length - 1, g2 = u2[b2];
                (!s2 || s2.indexOf(g2) > -1) && (l2 = g2, u2 = u2.slice(0, b2));
              }
              u2 && (e2.push(u2), u2 = "", c2 = false);
              var E2 = m2 || p2, x2 = l2 || f2;
              e2.push({ name: d2 || i2++, prefix: l2, delimiter: x2, optional: "?" === w2 || "*" === w2, repeat: "+" === w2 || "*" === w2, pattern: E2 ? A(E2) : "[^" + k(x2 === f2 ? x2 : x2 + f2) + "]+?" });
            }
          }
          return (u2 || o2 < t2.length) && e2.push(u2 + t2.substr(o2)), e2;
        }
        function E(t2, n2) {
          return function(r2, e2) {
            var i2 = t2.exec(r2);
            if (!i2)
              return false;
            for (var o2 = i2[0], u2 = i2.index, f2 = {}, s2 = e2 && e2.decode || decodeURIComponent, c2 = 1; c2 < i2.length; c2++)
              if (void 0 !== i2[c2]) {
                var a2 = n2[c2 - 1];
                f2[a2.name] = a2.repeat ? i2[c2].split(a2.delimiter).map(function(t3) {
                  return s2(t3, a2);
                }) : s2(i2[c2], a2);
              }
            return { path: o2, index: u2, params: f2 };
          };
        }
        function x(t2, n2) {
          for (var r2 = new Array(t2.length), e2 = 0; e2 < t2.length; e2++)
            "object" == typeof t2[e2] && (r2[e2] = new RegExp("^(?:" + t2[e2].pattern + ")$", R(n2)));
          return function(n3, e3) {
            for (var i2 = "", o2 = e3 && e3.encode || encodeURIComponent, u2 = !e3 || false !== e3.validate, f2 = 0; f2 < t2.length; f2++) {
              var s2 = t2[f2];
              if ("string" != typeof s2) {
                var c2, a2 = n3 ? n3[s2.name] : void 0;
                if (Array.isArray(a2)) {
                  if (!s2.repeat)
                    throw new TypeError('Expected "' + s2.name + '" to not repeat, but got array');
                  if (0 === a2.length) {
                    if (s2.optional)
                      continue;
                    throw new TypeError('Expected "' + s2.name + '" to not be empty');
                  }
                  for (var h2 = 0; h2 < a2.length; h2++) {
                    if (c2 = o2(a2[h2], s2), u2 && !r2[f2].test(c2))
                      throw new TypeError('Expected all "' + s2.name + '" to match "' + s2.pattern + '"');
                    i2 += (0 === h2 ? s2.prefix : s2.delimiter) + c2;
                  }
                } else if ("string" != typeof a2 && "number" != typeof a2 && "boolean" != typeof a2) {
                  if (!s2.optional)
                    throw new TypeError('Expected "' + s2.name + '" to be ' + (s2.repeat ? "an array" : "a string"));
                } else {
                  if (c2 = o2(String(a2), s2), u2 && !r2[f2].test(c2))
                    throw new TypeError('Expected "' + s2.name + '" to match "' + s2.pattern + '", but got "' + c2 + '"');
                  i2 += s2.prefix + c2;
                }
              } else
                i2 += s2;
            }
            return i2;
          };
        }
        function k(t2) {
          return t2.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        function A(t2) {
          return t2.replace(/([=!:$/()])/g, "\\$1");
        }
        function R(t2) {
          return t2 && t2.sensitive ? "" : "i";
        }
        function T(t2, n2, r2) {
          for (var e2 = (r2 = r2 || {}).strict, i2 = false !== r2.start, o2 = false !== r2.end, u2 = r2.delimiter || y, f2 = [].concat(r2.endsWith || []).map(k).concat("$").join("|"), s2 = i2 ? "^" : "", c2 = 0; c2 < t2.length; c2++) {
            var a2 = t2[c2];
            if ("string" == typeof a2)
              s2 += k(a2);
            else {
              var h2 = a2.repeat ? "(?:" + a2.pattern + ")(?:" + k(a2.delimiter) + "(?:" + a2.pattern + "))*" : a2.pattern;
              n2 && n2.push(a2), s2 += a2.optional ? a2.prefix ? "(?:" + k(a2.prefix) + "(" + h2 + "))?" : "(" + h2 + ")?" : k(a2.prefix) + "(" + h2 + ")";
            }
          }
          if (o2)
            e2 || (s2 += "(?:" + k(u2) + ")?"), s2 += "$" === f2 ? "$" : "(?=" + f2 + ")";
          else {
            var v2 = t2[t2.length - 1], l2 = "string" == typeof v2 ? v2[v2.length - 1] === u2 : void 0 === v2;
            e2 || (s2 += "(?:" + k(u2) + "(?=" + f2 + "))?"), l2 || (s2 += "(?=" + k(u2) + "|" + f2 + ")");
          }
          return new RegExp(s2, R(r2));
        }
        function O(t2, n2, r2) {
          return t2 instanceof RegExp ? function(t3, n3) {
            if (!n3)
              return t3;
            var r3 = t3.source.match(/\((?!\?)/g);
            if (r3)
              for (var e2 = 0; e2 < r3.length; e2++)
                n3.push({ name: e2, prefix: null, delimiter: null, optional: false, repeat: false, pattern: null });
            return t3;
          }(t2, n2) : Array.isArray(t2) ? function(t3, n3, r3) {
            for (var e2 = [], i2 = 0; i2 < t3.length; i2++)
              e2.push(O(t3[i2], n3, r3).source);
            return new RegExp("(?:" + e2.join("|") + ")", R(r3));
          }(t2, n2, r2) : function(t3, n3, r3) {
            return T(g(t3, r3), n3, r3);
          }(t2, n2, r2);
        }
        d.match = function(t2, n2) {
          var r2 = [];
          return E(O(t2, r2, n2), r2);
        }, d.regexpToFunction = m, d.parse = p, d.compile = function(t2, n2) {
          return x(g(t2, n2), n2);
        }, d.tokensToFunction = w, d.tokensToRegExp = b;
        var S = { container: "container", history: "history", namespace: "namespace", prefix: "data-barba", prevent: "prevent", wrapper: "wrapper" }, j = new (function() {
          function t2() {
            this.o = S, this.u = new DOMParser();
          }
          var n2 = t2.prototype;
          return n2.toString = function(t3) {
            return t3.outerHTML;
          }, n2.toDocument = function(t3) {
            return this.u.parseFromString(t3, "text/html");
          }, n2.toElement = function(t3) {
            var n3 = document.createElement("div");
            return n3.innerHTML = t3, n3;
          }, n2.getHtml = function(t3) {
            return void 0 === t3 && (t3 = document), this.toString(t3.documentElement);
          }, n2.getWrapper = function(t3) {
            return void 0 === t3 && (t3 = document), t3.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]');
          }, n2.getContainer = function(t3) {
            return void 0 === t3 && (t3 = document), t3.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]');
          }, n2.removeContainer = function(t3) {
            document.body.contains(t3) && t3.parentNode.removeChild(t3);
          }, n2.addContainer = function(t3, n3) {
            var r2 = this.getContainer();
            r2 ? this.s(t3, r2) : n3.appendChild(t3);
          }, n2.getNamespace = function(t3) {
            void 0 === t3 && (t3 = document);
            var n3 = t3.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
            return n3 ? n3.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
          }, n2.getHref = function(t3) {
            if (t3.tagName && "a" === t3.tagName.toLowerCase()) {
              if ("string" == typeof t3.href)
                return t3.href;
              var n3 = t3.getAttribute("href") || t3.getAttribute("xlink:href");
              if (n3)
                return this.resolveUrl(n3.baseVal || n3);
            }
            return null;
          }, n2.resolveUrl = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            var e2 = n3.length;
            if (0 === e2)
              throw new Error("resolveUrl requires at least one argument; got none.");
            var i2 = document.createElement("base");
            if (i2.href = arguments[0], 1 === e2)
              return i2.href;
            var o2 = document.getElementsByTagName("head")[0];
            o2.insertBefore(i2, o2.firstChild);
            for (var u2, f2 = document.createElement("a"), s2 = 1; s2 < e2; s2++)
              f2.href = arguments[s2], i2.href = u2 = f2.href;
            return o2.removeChild(i2), u2;
          }, n2.s = function(t3, n3) {
            n3.parentNode.insertBefore(t3, n3.nextSibling);
          }, t2;
        }())(), M = new (function() {
          function t2() {
            this.h = [], this.v = -1;
          }
          var e2 = t2.prototype;
          return e2.init = function(t3, n2) {
            this.l = "barba";
            var r2 = { ns: n2, scroll: { x: window.scrollX, y: window.scrollY }, url: t3 };
            this.h.push(r2), this.v = 0;
            var e3 = { from: this.l, index: 0, states: [].concat(this.h) };
            window.history && window.history.replaceState(e3, "", t3);
          }, e2.change = function(t3, n2, r2) {
            if (r2 && r2.state) {
              var e3 = r2.state, i2 = e3.index;
              n2 = this.m(this.v - i2), this.replace(e3.states), this.v = i2;
            } else
              this.add(t3, n2);
            return n2;
          }, e2.add = function(t3, n2) {
            var r2 = this.size, e3 = this.p(n2), i2 = { ns: "tmp", scroll: { x: window.scrollX, y: window.scrollY }, url: t3 };
            this.h.push(i2), this.v = r2;
            var o2 = { from: this.l, index: r2, states: [].concat(this.h) };
            switch (e3) {
              case "push":
                window.history && window.history.pushState(o2, "", t3);
                break;
              case "replace":
                window.history && window.history.replaceState(o2, "", t3);
            }
          }, e2.update = function(t3, n2) {
            var e3 = n2 || this.v, i2 = r({}, this.get(e3), {}, t3);
            this.set(e3, i2);
          }, e2.remove = function(t3) {
            t3 ? this.h.splice(t3, 1) : this.h.pop(), this.v--;
          }, e2.clear = function() {
            this.h = [], this.v = -1;
          }, e2.replace = function(t3) {
            this.h = t3;
          }, e2.get = function(t3) {
            return this.h[t3];
          }, e2.set = function(t3, n2) {
            return this.h[t3] = n2;
          }, e2.p = function(t3) {
            var n2 = "push", r2 = t3, e3 = S.prefix + "-" + S.history;
            return r2.hasAttribute && r2.hasAttribute(e3) && (n2 = r2.getAttribute(e3)), n2;
          }, e2.m = function(t3) {
            return Math.abs(t3) > 1 ? t3 > 0 ? "forward" : "back" : 0 === t3 ? "popstate" : t3 > 0 ? "back" : "forward";
          }, n(t2, [{ key: "current", get: function() {
            return this.h[this.v];
          } }, { key: "state", get: function() {
            return this.h[this.h.length - 1];
          } }, { key: "previous", get: function() {
            return this.v < 1 ? null : this.h[this.v - 1];
          } }, { key: "size", get: function() {
            return this.h.length;
          } }]), t2;
        }())(), L = function(t2, n2) {
          try {
            var r2 = function() {
              if (!n2.next.html)
                return Promise.resolve(t2).then(function(t3) {
                  var r3 = n2.next;
                  if (t3) {
                    var e2 = j.toElement(t3);
                    r3.namespace = j.getNamespace(e2), r3.container = j.getContainer(e2), r3.html = t3, M.update({ ns: r3.namespace });
                    var i2 = j.toDocument(t3);
                    document.title = i2.title;
                  }
                });
            }();
            return Promise.resolve(r2 && r2.then ? r2.then(function() {
            }) : void 0);
          } catch (t3) {
            return Promise.reject(t3);
          }
        }, $ = d, _ = { __proto__: null, update: L, nextTick: function() {
          return new Promise(function(t2) {
            window.requestAnimationFrame(t2);
          });
        }, pathToRegexp: $ }, q = function() {
          return window.location.origin;
        }, B = function(t2) {
          return void 0 === t2 && (t2 = window.location.href), U(t2).port;
        }, U = function(t2) {
          var n2, r2 = t2.match(/:\d+/);
          if (null === r2)
            /^http/.test(t2) && (n2 = 80), /^https/.test(t2) && (n2 = 443);
          else {
            var e2 = r2[0].substring(1);
            n2 = parseInt(e2, 10);
          }
          var i2, o2 = t2.replace(q(), ""), u2 = {}, f2 = o2.indexOf("#");
          f2 >= 0 && (i2 = o2.slice(f2 + 1), o2 = o2.slice(0, f2));
          var s2 = o2.indexOf("?");
          return s2 >= 0 && (u2 = D(o2.slice(s2 + 1)), o2 = o2.slice(0, s2)), { hash: i2, path: o2, port: n2, query: u2 };
        }, D = function(t2) {
          return t2.split("&").reduce(function(t3, n2) {
            var r2 = n2.split("=");
            return t3[r2[0]] = r2[1], t3;
          }, {});
        }, F = function(t2) {
          return void 0 === t2 && (t2 = window.location.href), t2.replace(/(\/#.*|\/|#.*)$/, "");
        }, H = { __proto__: null, getHref: function() {
          return window.location.href;
        }, getOrigin: q, getPort: B, getPath: function(t2) {
          return void 0 === t2 && (t2 = window.location.href), U(t2).path;
        }, parse: U, parseQuery: D, clean: F };
        function I(t2, n2, r2) {
          return void 0 === n2 && (n2 = 2e3), new Promise(function(e2, i2) {
            var o2 = new XMLHttpRequest();
            o2.onreadystatechange = function() {
              if (o2.readyState === XMLHttpRequest.DONE) {
                if (200 === o2.status)
                  e2(o2.responseText);
                else if (o2.status) {
                  var n3 = { status: o2.status, statusText: o2.statusText };
                  r2(t2, n3), i2(n3);
                }
              }
            }, o2.ontimeout = function() {
              var e3 = new Error("Timeout error [" + n2 + "]");
              r2(t2, e3), i2(e3);
            }, o2.onerror = function() {
              var n3 = new Error("Fetch error");
              r2(t2, n3), i2(n3);
            }, o2.open("GET", t2), o2.timeout = n2, o2.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o2.setRequestHeader("x-barba", "yes"), o2.send();
          });
        }
        var C = function(t2) {
          return !!t2 && ("object" == typeof t2 || "function" == typeof t2) && "function" == typeof t2.then;
        };
        function N(t2, n2) {
          return void 0 === n2 && (n2 = {}), function() {
            for (var r2 = arguments.length, e2 = new Array(r2), i2 = 0; i2 < r2; i2++)
              e2[i2] = arguments[i2];
            var o2 = false, u2 = new Promise(function(r3, i3) {
              n2.async = function() {
                return o2 = true, function(t3, n3) {
                  t3 ? i3(t3) : r3(n3);
                };
              };
              var u3 = t2.apply(n2, e2);
              o2 || (C(u3) ? u3.then(r3, i3) : r3(u3));
            });
            return u2;
          };
        }
        var X = new (function(t2) {
          function n2() {
            var n3;
            return (n3 = t2.call(this) || this).logger = new l("@barba/core"), n3.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], n3.registered = /* @__PURE__ */ new Map(), n3.init(), n3;
          }
          e(n2, t2);
          var r2 = n2.prototype;
          return r2.init = function() {
            var t3 = this;
            this.registered.clear(), this.all.forEach(function(n3) {
              t3[n3] || (t3[n3] = function(r3, e2) {
                t3.registered.has(n3) || t3.registered.set(n3, /* @__PURE__ */ new Set()), t3.registered.get(n3).add({ ctx: e2 || {}, fn: r3 });
              });
            });
          }, r2.do = function(t3) {
            for (var n3 = this, r3 = arguments.length, e2 = new Array(r3 > 1 ? r3 - 1 : 0), i2 = 1; i2 < r3; i2++)
              e2[i2 - 1] = arguments[i2];
            if (this.registered.has(t3)) {
              var o2 = Promise.resolve();
              return this.registered.get(t3).forEach(function(t4) {
                o2 = o2.then(function() {
                  return N(t4.fn, t4.ctx).apply(void 0, e2);
                });
              }), o2.catch(function(r4) {
                n3.logger.debug("Hook error [" + t3 + "]"), n3.logger.error(r4);
              });
            }
            return Promise.resolve();
          }, r2.clear = function() {
            var t3 = this;
            this.all.forEach(function(n3) {
              delete t3[n3];
            }), this.init();
          }, r2.help = function() {
            this.logger.info("Available hooks: " + this.all.join(","));
            var t3 = [];
            this.registered.forEach(function(n3, r3) {
              return t3.push(r3);
            }), this.logger.info("Registered hooks: " + t3.join(","));
          }, n2;
        }(h))(), z = function() {
          function t2(t3) {
            if (this.P = [], "boolean" == typeof t3)
              this.g = t3;
            else {
              var n2 = Array.isArray(t3) ? t3 : [t3];
              this.P = n2.map(function(t4) {
                return $(t4);
              });
            }
          }
          return t2.prototype.checkHref = function(t3) {
            if ("boolean" == typeof this.g)
              return this.g;
            var n2 = U(t3).path;
            return this.P.some(function(t4) {
              return null !== t4.exec(n2);
            });
          }, t2;
        }(), G = function(t2) {
          function n2(n3) {
            var r2;
            return (r2 = t2.call(this, n3) || this).k = /* @__PURE__ */ new Map(), r2;
          }
          e(n2, t2);
          var i2 = n2.prototype;
          return i2.set = function(t3, n3, r2) {
            return this.k.set(t3, { action: r2, request: n3 }), { action: r2, request: n3 };
          }, i2.get = function(t3) {
            return this.k.get(t3);
          }, i2.getRequest = function(t3) {
            return this.k.get(t3).request;
          }, i2.getAction = function(t3) {
            return this.k.get(t3).action;
          }, i2.has = function(t3) {
            return !this.checkHref(t3) && this.k.has(t3);
          }, i2.delete = function(t3) {
            return this.k.delete(t3);
          }, i2.update = function(t3, n3) {
            var e2 = r({}, this.k.get(t3), {}, n3);
            return this.k.set(t3, e2), e2;
          }, n2;
        }(z), Q = function() {
          return !window.history.pushState;
        }, W = function(t2) {
          return !t2.el || !t2.href;
        }, J = function(t2) {
          var n2 = t2.event;
          return n2.which > 1 || n2.metaKey || n2.ctrlKey || n2.shiftKey || n2.altKey;
        }, K = function(t2) {
          var n2 = t2.el;
          return n2.hasAttribute("target") && "_blank" === n2.target;
        }, V = function(t2) {
          var n2 = t2.el;
          return void 0 !== n2.protocol && window.location.protocol !== n2.protocol || void 0 !== n2.hostname && window.location.hostname !== n2.hostname;
        }, Y = function(t2) {
          var n2 = t2.el;
          return void 0 !== n2.port && B() !== B(n2.href);
        }, Z = function(t2) {
          var n2 = t2.el;
          return n2.getAttribute && "string" == typeof n2.getAttribute("download");
        }, tt = function(t2) {
          return t2.el.hasAttribute(S.prefix + "-" + S.prevent);
        }, nt = function(t2) {
          return Boolean(t2.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]'));
        }, rt = function(t2) {
          var n2 = t2.href;
          return F(n2) === F() && B(n2) === B();
        }, et = function(t2) {
          function n2(n3) {
            var r3;
            return (r3 = t2.call(this, n3) || this).suite = [], r3.tests = /* @__PURE__ */ new Map(), r3.init(), r3;
          }
          e(n2, t2);
          var r2 = n2.prototype;
          return r2.init = function() {
            this.add("pushState", Q), this.add("exists", W), this.add("newTab", J), this.add("blank", K), this.add("corsDomain", V), this.add("corsPort", Y), this.add("download", Z), this.add("preventSelf", tt), this.add("preventAll", nt), this.add("sameUrl", rt, false);
          }, r2.add = function(t3, n3, r3) {
            void 0 === r3 && (r3 = true), this.tests.set(t3, n3), r3 && this.suite.push(t3);
          }, r2.run = function(t3, n3, r3, e2) {
            return this.tests.get(t3)({ el: n3, event: r3, href: e2 });
          }, r2.checkLink = function(t3, n3, r3) {
            var e2 = this;
            return this.suite.some(function(i2) {
              return e2.run(i2, t3, n3, r3);
            });
          }, n2;
        }(z), it = function(t2) {
          function n2(r2, e2) {
            var i2;
            void 0 === e2 && (e2 = "Barba error");
            for (var o2 = arguments.length, u2 = new Array(o2 > 2 ? o2 - 2 : 0), f2 = 2; f2 < o2; f2++)
              u2[f2 - 2] = arguments[f2];
            return (i2 = t2.call.apply(t2, [this].concat(u2)) || this).error = r2, i2.label = e2, Error.captureStackTrace && Error.captureStackTrace(function(t3) {
              if (void 0 === t3)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t3;
            }(i2), n2), i2.name = "BarbaError", i2;
          }
          return e(n2, t2), n2;
        }(f(Error)), ot = function() {
          function t2(t3) {
            void 0 === t3 && (t3 = []), this.logger = new l("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{ name: "namespace", type: "strings" }, { name: "custom", type: "function" }], t3 && (this.all = this.all.concat(t3)), this.update();
          }
          var n2 = t2.prototype;
          return n2.add = function(t3, n3) {
            switch (t3) {
              case "rule":
                this.A.splice(n3.position || 0, 0, n3.value);
                break;
              case "transition":
              default:
                this.all.push(n3);
            }
            this.update();
          }, n2.resolve = function(t3, n3) {
            var r2 = this;
            void 0 === n3 && (n3 = {});
            var e2 = n3.once ? this.once : this.page;
            e2 = e2.filter(n3.self ? function(t4) {
              return t4.name && "self" === t4.name;
            } : function(t4) {
              return !t4.name || "self" !== t4.name;
            });
            var i2 = /* @__PURE__ */ new Map(), o2 = e2.find(function(e3) {
              var o3 = true, u3 = {};
              return !(!n3.self || "self" !== e3.name) || (r2.A.reverse().forEach(function(n4) {
                o3 && (o3 = r2.R(e3, n4, t3, u3), e3.from && e3.to && (o3 = r2.R(e3, n4, t3, u3, "from") && r2.R(e3, n4, t3, u3, "to")), e3.from && !e3.to && (o3 = r2.R(e3, n4, t3, u3, "from")), !e3.from && e3.to && (o3 = r2.R(e3, n4, t3, u3, "to")));
              }), i2.set(e3, u3), o3);
            }), u2 = i2.get(o2), f2 = [];
            if (f2.push(n3.once ? "once" : "page"), n3.self && f2.push("self"), u2) {
              var s2, c2 = [o2];
              Object.keys(u2).length > 0 && c2.push(u2), (s2 = this.logger).info.apply(s2, ["Transition found [" + f2.join(",") + "]"].concat(c2));
            } else
              this.logger.info("No transition found [" + f2.join(",") + "]");
            return o2;
          }, n2.update = function() {
            var t3 = this;
            this.all = this.all.map(function(n3) {
              return t3.T(n3);
            }).sort(function(t4, n3) {
              return t4.priority - n3.priority;
            }).reverse().map(function(t4) {
              return delete t4.priority, t4;
            }), this.page = this.all.filter(function(t4) {
              return void 0 !== t4.leave || void 0 !== t4.enter;
            }), this.once = this.all.filter(function(t4) {
              return void 0 !== t4.once;
            });
          }, n2.R = function(t3, n3, r2, e2, i2) {
            var o2 = true, u2 = false, f2 = t3, s2 = n3.name, c2 = s2, a2 = s2, h2 = s2, v2 = i2 ? f2[i2] : f2, l2 = "to" === i2 ? r2.next : r2.current;
            if (i2 ? v2 && v2[s2] : v2[s2]) {
              switch (n3.type) {
                case "strings":
                default:
                  var d2 = Array.isArray(v2[c2]) ? v2[c2] : [v2[c2]];
                  l2[c2] && -1 !== d2.indexOf(l2[c2]) && (u2 = true), -1 === d2.indexOf(l2[c2]) && (o2 = false);
                  break;
                case "object":
                  var m2 = Array.isArray(v2[a2]) ? v2[a2] : [v2[a2]];
                  l2[a2] ? (l2[a2].name && -1 !== m2.indexOf(l2[a2].name) && (u2 = true), -1 === m2.indexOf(l2[a2].name) && (o2 = false)) : o2 = false;
                  break;
                case "function":
                  v2[h2](r2) ? u2 = true : o2 = false;
              }
              u2 && (i2 ? (e2[i2] = e2[i2] || {}, e2[i2][s2] = f2[i2][s2]) : e2[s2] = f2[s2]);
            }
            return o2;
          }, n2.O = function(t3, n3, r2) {
            var e2 = 0;
            return (t3[n3] || t3.from && t3.from[n3] || t3.to && t3.to[n3]) && (e2 += Math.pow(10, r2), t3.from && t3.from[n3] && (e2 += 1), t3.to && t3.to[n3] && (e2 += 2)), e2;
          }, n2.T = function(t3) {
            var n3 = this;
            t3.priority = 0;
            var r2 = 0;
            return this.A.forEach(function(e2, i2) {
              r2 += n3.O(t3, e2.name, i2 + 1);
            }), t3.priority = r2, t3;
          }, t2;
        }(), ut = function() {
          function t2(t3) {
            void 0 === t3 && (t3 = []), this.logger = new l("@barba/core"), this.S = false, this.store = new ot(t3);
          }
          var r2 = t2.prototype;
          return r2.get = function(t3, n2) {
            return this.store.resolve(t3, n2);
          }, r2.doOnce = function(t3) {
            var n2 = t3.data, r3 = t3.transition;
            try {
              var e2 = function() {
                i2.S = false;
              }, i2 = this, o2 = r3 || {};
              i2.S = true;
              var u2 = s(function() {
                return Promise.resolve(i2.j("beforeOnce", n2, o2)).then(function() {
                  return Promise.resolve(i2.once(n2, o2)).then(function() {
                    return Promise.resolve(i2.j("afterOnce", n2, o2)).then(function() {
                    });
                  });
                });
              }, function(t4) {
                i2.S = false, i2.logger.debug("Transition error [before/after/once]"), i2.logger.error(t4);
              });
              return Promise.resolve(u2 && u2.then ? u2.then(e2) : e2());
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.doPage = function(t3) {
            var n2 = t3.data, r3 = t3.transition, e2 = t3.page, i2 = t3.wrapper;
            try {
              var o2 = function(t4) {
                if (u2)
                  return t4;
                f2.S = false;
              }, u2 = false, f2 = this, c2 = r3 || {}, a2 = true === c2.sync || false;
              f2.S = true;
              var h2 = s(function() {
                function t4() {
                  return Promise.resolve(f2.j("before", n2, c2)).then(function() {
                    var t5 = false;
                    function r5(r6) {
                      return t5 ? r6 : Promise.resolve(f2.remove(n2)).then(function() {
                        return Promise.resolve(f2.j("after", n2, c2)).then(function() {
                        });
                      });
                    }
                    var o3 = function() {
                      if (a2)
                        return s(function() {
                          return Promise.resolve(f2.add(n2, i2)).then(function() {
                            return Promise.resolve(f2.j("beforeLeave", n2, c2)).then(function() {
                              return Promise.resolve(f2.j("beforeEnter", n2, c2)).then(function() {
                                return Promise.resolve(Promise.all([f2.leave(n2, c2), f2.enter(n2, c2)])).then(function() {
                                  return Promise.resolve(f2.j("afterLeave", n2, c2)).then(function() {
                                    return Promise.resolve(f2.j("afterEnter", n2, c2)).then(function() {
                                    });
                                  });
                                });
                              });
                            });
                          });
                        }, function(t6) {
                          if (f2.M(t6))
                            throw new it(t6, "Transition error [sync]");
                        });
                      var r6 = function(r7) {
                        return t5 ? r7 : s(function() {
                          var t6 = function() {
                            if (false !== o4)
                              return Promise.resolve(f2.add(n2, i2)).then(function() {
                                return Promise.resolve(f2.j("beforeEnter", n2, c2)).then(function() {
                                  return Promise.resolve(f2.enter(n2, c2, o4)).then(function() {
                                    return Promise.resolve(f2.j("afterEnter", n2, c2)).then(function() {
                                    });
                                  });
                                });
                              });
                          }();
                          if (t6 && t6.then)
                            return t6.then(function() {
                            });
                        }, function(t6) {
                          if (f2.M(t6))
                            throw new it(t6, "Transition error [before/after/enter]");
                        });
                      }, o4 = false, u3 = s(function() {
                        return Promise.resolve(f2.j("beforeLeave", n2, c2)).then(function() {
                          return Promise.resolve(Promise.all([f2.leave(n2, c2), L(e2, n2)]).then(function(t6) {
                            return t6[0];
                          })).then(function(t6) {
                            return o4 = t6, Promise.resolve(f2.j("afterLeave", n2, c2)).then(function() {
                            });
                          });
                        });
                      }, function(t6) {
                        if (f2.M(t6))
                          throw new it(t6, "Transition error [before/after/leave]");
                      });
                      return u3 && u3.then ? u3.then(r6) : r6(u3);
                    }();
                    return o3 && o3.then ? o3.then(r5) : r5(o3);
                  });
                }
                var r4 = function() {
                  if (a2)
                    return Promise.resolve(L(e2, n2)).then(function() {
                    });
                }();
                return r4 && r4.then ? r4.then(t4) : t4();
              }, function(t4) {
                if (f2.S = false, t4.name && "BarbaError" === t4.name)
                  throw f2.logger.debug(t4.label), f2.logger.error(t4.error), t4;
                throw f2.logger.debug("Transition error [page]"), f2.logger.error(t4), t4;
              });
              return Promise.resolve(h2 && h2.then ? h2.then(o2) : o2(h2));
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.once = function(t3, n2) {
            try {
              return Promise.resolve(X.do("once", t3, n2)).then(function() {
                return n2.once ? N(n2.once, n2)(t3) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.leave = function(t3, n2) {
            try {
              return Promise.resolve(X.do("leave", t3, n2)).then(function() {
                return n2.leave ? N(n2.leave, n2)(t3) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.enter = function(t3, n2, r3) {
            try {
              return Promise.resolve(X.do("enter", t3, n2)).then(function() {
                return n2.enter ? N(n2.enter, n2)(t3, r3) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.add = function(t3, n2) {
            try {
              return j.addContainer(t3.next.container, n2), X.do("nextAdded", t3), Promise.resolve();
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.remove = function(t3) {
            try {
              return j.removeContainer(t3.current.container), X.do("currentRemoved", t3), Promise.resolve();
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.M = function(t3) {
            return t3.message ? !/Timeout error|Fetch error/.test(t3.message) : !t3.status;
          }, r2.j = function(t3, n2, r3) {
            try {
              return Promise.resolve(X.do(t3, n2, r3)).then(function() {
                return r3[t3] ? N(r3[t3], r3)(n2) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, n(t2, [{ key: "isRunning", get: function() {
            return this.S;
          }, set: function(t3) {
            this.S = t3;
          } }, { key: "hasOnce", get: function() {
            return this.store.once.length > 0;
          } }, { key: "hasSelf", get: function() {
            return this.store.all.some(function(t3) {
              return "self" === t3.name;
            });
          } }, { key: "shouldWait", get: function() {
            return this.store.all.some(function(t3) {
              return t3.to && !t3.to.route || t3.sync;
            });
          } }]), t2;
        }(), ft = function() {
          function t2(t3) {
            var n2 = this;
            this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = /* @__PURE__ */ new Map(), 0 !== t3.length && (t3.forEach(function(t4) {
              n2.byNamespace.set(t4.namespace, t4);
            }), this.names.forEach(function(t4) {
              X[t4](n2.L(t4));
            }));
          }
          return t2.prototype.L = function(t3) {
            var n2 = this;
            return function(r2) {
              var e2 = t3.match(/enter/i) ? r2.next : r2.current, i2 = n2.byNamespace.get(e2.namespace);
              return i2 && i2[t3] ? N(i2[t3], i2)(r2) : Promise.resolve();
            };
          }, t2;
        }();
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t2) {
          var n2 = this;
          do {
            if (n2.matches(t2))
              return n2;
            n2 = n2.parentElement || n2.parentNode;
          } while (null !== n2 && 1 === n2.nodeType);
          return null;
        });
        var st = { container: null, html: "", namespace: "", url: { hash: "", href: "", path: "", port: null, query: {} } };
        return new (function() {
          function t2() {
            this.version = a, this.schemaPage = st, this.Logger = l, this.logger = new l("@barba/core"), this.plugins = [], this.hooks = X, this.dom = j, this.helpers = _, this.history = M, this.request = I, this.url = H;
          }
          var e2 = t2.prototype;
          return e2.use = function(t3, n2) {
            var r2 = this.plugins;
            r2.indexOf(t3) > -1 ? this.logger.warn("Plugin [" + t3.name + "] already installed.") : "function" == typeof t3.install ? (t3.install(this, n2), r2.push(t3)) : this.logger.warn("Plugin [" + t3.name + '] has no "install" method.');
          }, e2.init = function(t3) {
            var n2 = void 0 === t3 ? {} : t3, e3 = n2.transitions, i2 = void 0 === e3 ? [] : e3, o2 = n2.views, u2 = void 0 === o2 ? [] : o2, f2 = n2.schema, s2 = void 0 === f2 ? S : f2, c2 = n2.requestError, a2 = n2.timeout, h2 = void 0 === a2 ? 2e3 : a2, v2 = n2.cacheIgnore, d2 = void 0 !== v2 && v2, m2 = n2.prefetchIgnore, p2 = void 0 !== m2 && m2, w2 = n2.preventRunning, b2 = void 0 !== w2 && w2, y2 = n2.prevent, P2 = void 0 === y2 ? null : y2, g2 = n2.debug, E2 = n2.logLevel;
            if (l.setLevel(true === (void 0 !== g2 && g2) ? "debug" : void 0 === E2 ? "off" : E2), this.logger.info(this.version), Object.keys(s2).forEach(function(t4) {
              S[t4] && (S[t4] = s2[t4]);
            }), this.$ = c2, this.timeout = h2, this.cacheIgnore = d2, this.prefetchIgnore = p2, this.preventRunning = b2, this._ = this.dom.getWrapper(), !this._)
              throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"), this.q();
            var x2 = this.data.current;
            if (!x2.container)
              throw new Error("[@barba/core] No Barba container found");
            if (this.cache = new G(d2), this.prevent = new et(p2), this.transitions = new ut(i2), this.views = new ft(u2), null !== P2) {
              if ("function" != typeof P2)
                throw new Error("[@barba/core] Prevent should be a function");
              this.prevent.add("preventCustom", P2);
            }
            this.history.init(x2.url.href, x2.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach(function(t4) {
              return t4.init();
            });
            var k2 = this.data;
            k2.trigger = "barba", k2.next = k2.current, k2.current = r({}, this.schemaPage), this.hooks.do("ready", k2), this.once(k2), this.q();
          }, e2.destroy = function() {
            this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = [];
          }, e2.force = function(t3) {
            window.location.assign(t3);
          }, e2.go = function(t3, n2, r2) {
            var e3;
            if (void 0 === n2 && (n2 = "barba"), this.transitions.isRunning)
              this.force(t3);
            else if (!(e3 = "popstate" === n2 ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t3) : this.prevent.run("sameUrl", null, null, t3)) || this.transitions.hasSelf)
              return n2 = this.history.change(t3, n2, r2), r2 && (r2.stopPropagation(), r2.preventDefault()), this.page(t3, n2, e3);
          }, e2.once = function(t3) {
            try {
              var n2 = this;
              return Promise.resolve(n2.hooks.do("beforeEnter", t3)).then(function() {
                function r2() {
                  return Promise.resolve(n2.hooks.do("afterEnter", t3)).then(function() {
                  });
                }
                var e3 = function() {
                  if (n2.transitions.hasOnce) {
                    var r3 = n2.transitions.get(t3, { once: true });
                    return Promise.resolve(n2.transitions.doOnce({ transition: r3, data: t3 })).then(function() {
                    });
                  }
                }();
                return e3 && e3.then ? e3.then(r2) : r2();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, e2.page = function(t3, n2, e3) {
            try {
              var i2 = function() {
                var t4 = o2.data;
                return Promise.resolve(o2.hooks.do("page", t4)).then(function() {
                  var n3 = s(function() {
                    var n4 = o2.transitions.get(t4, { once: false, self: e3 });
                    return Promise.resolve(o2.transitions.doPage({ data: t4, page: u2, transition: n4, wrapper: o2._ })).then(function() {
                      o2.q();
                    });
                  }, function() {
                    0 === l.getLevel() && o2.force(t4.current.url.href);
                  });
                  if (n3 && n3.then)
                    return n3.then(function() {
                    });
                });
              }, o2 = this;
              o2.data.next.url = r({ href: t3 }, o2.url.parse(t3)), o2.data.trigger = n2;
              var u2 = o2.cache.has(t3) ? o2.cache.update(t3, { action: "click" }).request : o2.cache.set(t3, o2.request(t3, o2.timeout, o2.onRequestError.bind(o2, n2)), "click").request, f2 = function() {
                if (o2.transitions.shouldWait)
                  return Promise.resolve(L(u2, o2.data)).then(function() {
                  });
              }();
              return Promise.resolve(f2 && f2.then ? f2.then(i2) : i2());
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, e2.onRequestError = function(t3) {
            this.transitions.isRunning = false;
            for (var n2 = arguments.length, r2 = new Array(n2 > 1 ? n2 - 1 : 0), e3 = 1; e3 < n2; e3++)
              r2[e3 - 1] = arguments[e3];
            var i2 = r2[0], o2 = r2[1], u2 = this.cache.getAction(i2);
            return this.cache.delete(i2), !(this.$ && false === this.$(t3, u2, i2, o2) || ("click" === u2 && this.force(i2), 1));
          }, e2.prefetch = function(t3) {
            var n2 = this;
            this.cache.has(t3) || this.cache.set(t3, this.request(t3, this.timeout, this.onRequestError.bind(this, "barba")).catch(function(t4) {
              n2.logger.error(t4);
            }), "prefetch");
          }, e2.F = function() {
            true !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D);
          }, e2.H = function() {
            true !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D);
          }, e2.B = function(t3) {
            var n2 = this, r2 = this.I(t3);
            if (r2) {
              var e3 = this.dom.getHref(r2);
              this.prevent.checkHref(e3) || this.cache.has(e3) || this.cache.set(e3, this.request(e3, this.timeout, this.onRequestError.bind(this, r2)).catch(function(t4) {
                n2.logger.error(t4);
              }), "enter");
            }
          }, e2.U = function(t3) {
            var n2 = this.I(t3);
            if (n2)
              return this.transitions.isRunning && this.preventRunning ? (t3.preventDefault(), void t3.stopPropagation()) : void this.go(this.dom.getHref(n2), n2, t3);
          }, e2.D = function(t3) {
            this.go(this.url.getHref(), "popstate", t3);
          }, e2.I = function(t3) {
            for (var n2 = t3.target; n2 && !this.dom.getHref(n2); )
              n2 = n2.parentNode;
            if (n2 && !this.prevent.checkLink(n2, t3, this.dom.getHref(n2)))
              return n2;
          }, e2.q = function() {
            var t3 = this.url.getHref(), n2 = { container: this.dom.getContainer(), html: this.dom.getHtml(), namespace: this.dom.getNamespace(), url: r({ href: t3 }, this.url.parse(t3)) };
            this.C = { current: n2, next: r({}, this.schemaPage), trigger: void 0 }, this.hooks.do("reset", this.data);
          }, n(t2, [{ key: "data", get: function() {
            return this.C;
          } }, { key: "wrapper", get: function() {
            return this._;
          } }]), t2;
        }())();
      });
    }
  });

  // src/index.js
  var import_core = __toESM(require_barba_umd(), 1);
  var setNavbar = function(pageWrap) {
    const navbar = pageWrap.querySelector(".navbar_component");
    let isTransparent;
    if (navbar.getAttribute("navbar-light") === "true") {
      isTransparent = true;
    } else {
      isTransparent = false;
    }
    if (isTransparent) {
      document.addEventListener("scroll", (event) => {
        if (window.scrollY !== 0) {
          navbar.setAttribute("navbar-light", "false");
        }
        if (window.scrollY === 0) {
          navbar.setAttribute("navbar-light", "true");
        }
      });
    }
  };
  var ACTIVE_CLASS = "active-flip-item";
  var PROJECT_NAME = '[data-barba="project-name"]';
  var PROJECT_TITLE = '[data-barba="project-title"]';
  var PROJECT_IMAGE = '[data-barba="project-image"]';
  var PROJECT_IMAGE_WRAP = '[data-barba="project-image-wrap"]';
  function resetWebflow(data) {
    let parser = new DOMParser();
    let dom = parser.parseFromString(data.next.html, "text/html");
    let webflowPageId = dom.querySelector("html").getAttribute("data-wf-page");
    document.documentElement.setAttribute("data-wf-page", webflowPageId);
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
  }
  function makeItemActive(data) {
    const cmsPageName = data.next.container.querySelector(PROJECT_NAME).textContent;
    document.querySelectorAll(".w-dyn-item").forEach((item) => {
      if (item.querySelector(PROJECT_NAME) && item.querySelector(PROJECT_NAME).textContent === cmsPageName) {
        item.classList.add(ACTIVE_CLASS);
      }
    });
  }
  function flipProjectImage(outgoingWrap, incomingWrap) {
    const outgoingImage = outgoingWrap.querySelector(PROJECT_IMAGE);
    const incomingImage = incomingWrap.querySelector(PROJECT_IMAGE);
    if (!outgoingImage, !incomingImage)
      return;
    let state = Flip.getState(outgoingImage);
    incomingWrap.insertAdjacentElement("beforeend", outgoingImage);
    incomingImage.remove();
    Flip.from(state, { duration: 0.8, ease: "power2.inOut" });
  }
  import_core.default.hooks.beforeEnter((data) => {
    setNavbar(data.next.container);
  });
  import_core.default.hooks.afterEnter((data) => {
    window.scrollTo(0, 0);
  });
  import_core.default.hooks.after((data) => {
    data.next.container.classList.remove("fixed");
    document.querySelectorAll(`.${ACTIVE_CLASS}`).forEach((item) => {
      item.classList.remove(ACTIVE_CLASS);
    });
    window.scrollTo(0, 0);
    resetWebflow(data);
  });
  import_core.default.init({
    preventRunning: true,
    transitions: [
      {
        sync: true,
        name: "opacity-transition",
        enter(data) {
          data.next.container.classList.add("fixed");
          gsap.to(data.current.container, { opacity: 0, duration: 0.6 });
          return gsap.from(data.next.container, { opacity: 0, duration: 0.6 });
        }
      },
      {
        sync: true,
        name: "to-project",
        from: { namespace: ["home", "work", "project"] },
        to: { namespace: ["project"] },
        enter(data) {
          makeItemActive(data);
          data.next.container.classList.add("fixed");
          flipProjectImage(
            data.current.container.querySelector(`.${ACTIVE_CLASS} ${PROJECT_IMAGE_WRAP}`),
            data.next.container.querySelector(PROJECT_IMAGE_WRAP)
          );
          gsap.from(data.next.container.querySelector(PROJECT_TITLE), {
            opacity: 0,
            y: "2rem",
            ease: "power2.Out",
            duration: 0.6
          });
          return gsap.to(data.current.container, { opacity: 0, duration: 0.8 });
        }
      }
    ],
    views: [
      {
        namespace: "work",
        after(data) {
        }
      }
    ]
  });
})();
