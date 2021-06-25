(function () {
  function k(b, a) {
    s[b] || (typeof console !== "undefined" && typeof console.warn == "function" && console.warn("[WARNING] " + b + " is deprecated and will be removed in version 1.0. Instead, use `" + a + "`."), (s[b] = !0));
  }
  function t(b) {
    b.localize = i.localize.bind(i);
    b.timezone = i.timezone.bind(i);
    b.utc = i.utc.bind(i);
  }
  function r(b, a, e) {
    a && a.days && ((e = a), (a = void 0));
    e && k("`" + g + "(format, [date], [locale])`", "var s = " + g + ".localize(locale); s(format, [date])");
    return (e ? i.localize(e) : i)(b, a);
  }
  function u(b, a, e) {
    e ? k("`" + g + ".strftime(format, [date], [locale])`", "var s = " + g + ".localize(locale); s(format, [date])") : k("`" + g + ".strftime(format, [date])`", g + "(format, [date])");
    return (e ? i.localize(e) : i)(b, a);
  }
  function p(b, a, e) {
    function g(b, c, h, a) {
      for (var d = "", f = null, e = !1, i = b.length, j = !1, o = 0; o < i; o++) {
        var n = b.charCodeAt(o);
        if (e === !0)
          if (n === 45) f = "";
          else if (n === 95) f = " ";
          else if (n === 48) f = "0";
          else if (n === 58) j && typeof console !== "undefined" && typeof console.warn == "function" && console.warn("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime"), (j = !0);
          else {
            switch (n) {
              case 65:
                d += h.days[c.getDay()];
                break;
              case 66:
                d += h.months[c.getMonth()];
                break;
              case 67:
                d += l(Math.floor(c.getFullYear() / 100), f);
                break;
              case 68:
                d += g(h.formats.D, c, h, a);
                break;
              case 70:
                d += g(h.formats.F, c, h, a);
                break;
              case 72:
                d += l(c.getHours(), f);
                break;
              case 73:
                d += l(v(c.getHours()), f);
                break;
              case 76:
                d += Math.floor(a % 1e3) > 99 ? Math.floor(a % 1e3) : Math.floor(a % 1e3) > 9 ? "0" + Math.floor(a % 1e3) : "00" + Math.floor(a % 1e3);
                break;
              case 77:
                d += l(c.getMinutes(), f);
                break;
              case 80:
                d += c.getHours() < 12 ? h.am : h.pm;
                break;
              case 82:
                d += g(h.formats.R, c, h, a);
                break;
              case 83:
                d += l(c.getSeconds(), f);
                break;
              case 84:
                d += g(h.formats.T, c, h, a);
                break;
              case 85:
                d += l(w(c, "sunday"), f);
                break;
              case 87:
                d += l(w(c, "monday"), f);
                break;
              case 88:
                d += g(h.formats.X, c, h, a);
                break;
              case 89:
                d += c.getFullYear();
                break;
              case 90:
                k && m === 0 ? (d += "GMT") : ((f = c.toString().match(/\(([\w\s]+)\)/)), (d += (f && f[1]) || ""));
                break;
              case 97:
                d += h.shortDays[c.getDay()];
                break;
              case 98:
                d += h.shortMonths[c.getMonth()];
                break;
              case 99:
                d += g(h.formats.c, c, h, a);
                break;
              case 100:
                d += l(c.getDate(), f);
                break;
              case 101:
                d += l(c.getDate(), f == null ? " " : f);
                break;
              case 104:
                d += h.shortMonths[c.getMonth()];
                break;
              case 106:
                f = new Date(c.getFullYear(), 0, 1);
                f = Math.ceil((c.getTime() - f.getTime()) / 864e5);
                d += f > 99 ? f : f > 9 ? "0" + f : "00" + f;
                break;
              case 107:
                d += l(c.getHours(), f == null ? " " : f);
                break;
              case 108:
                d += l(v(c.getHours()), f == null ? " " : f);
                break;
              case 109:
                d += l(c.getMonth() + 1, f);
                break;
              case 110:
                d += "\n";
                break;
              case 111:
                d += String(c.getDate()) + A(c.getDate());
                break;
              case 112:
                d += c.getHours() < 12 ? h.AM : h.PM;
                break;
              case 114:
                d += g(h.formats.r, c, h, a);
                break;
              case 115:
                d += Math.floor(a / 1e3);
                break;
              case 116:
                d += "\t";
                break;
              case 117:
                f = c.getDay();
                d += f === 0 ? 7 : f;
                break;
              case 118:
                d += g(h.formats.v, c, h, a);
                break;
              case 119:
                d += c.getDay();
                break;
              case 120:
                d += g(h.formats.x, c, h, a);
                break;
              case 121:
                d += ("" + c.getFullYear()).slice(2);
                break;
              case 122:
                k && m === 0 ? (d += j ? "+00:00" : "+0000") : ((f = m !== 0 ? m / 6e4 : -c.getTimezoneOffset()), (e = j ? ":" : ""), (n = Math.abs(f % 60)), (d += (f < 0 ? "-" : "+") + l(Math.floor(Math.abs(f / 60))) + e + l(n)));
                break;
              default:
                d += b[o];
            }
            f = null;
            e = !1;
          }
        else n === 37 ? (e = !0) : (d += b[o]);
      }
      return d;
    }
    var i = b || x,
      m = a || 0,
      k = e || !1,
      j = 0,
      q,
      b = function (b, c) {
        var a;
        c
          ? ((a = c.getTime()), k && (c = new Date(c.getTime() + (c.getTimezoneOffset() || 0) * 6e4 + m)))
          : ((a = Date.now()), a > j ? ((j = a), (q = new Date(j)), (a = j), k && (q = new Date(j + (q.getTimezoneOffset() || 0) * 6e4 + m))) : (a = j), (c = q));
        return g(b, c, i, a);
      };
    b.localize = function (a) {
      return new p(a || i, m, k);
    };
    b.timezone = function (a) {
      var c = m,
        b = k,
        e = typeof a;
      if (e === "number" || e === "string") (b = !0), e === "string" ? ((c = a[0] === "-" ? -1 : 1), (e = parseInt(a.slice(1, 3), 10)), (a = parseInt(a.slice(3, 5), 10)), (c = c * (60 * e + a) * 6e4)) : e === "number" && (c = a * 6e4);
      return new p(i, c, b);
    };
    b.utc = function () {
      return new p(i, m, !0);
    };
    return b;
  }
  function l(b, a) {
    if (a === "" || b > 9) return b;
    a == null && (a = "0");
    return a + b;
  }
  function v(b) {
    if (b === 0) return 12;
    else if (b > 12) return b - 12;
    return b;
  }
  function w(b, a) {
    var a = a || "sunday",
      e = b.getDay();
    a === "monday" && (e === 0 ? (e = 6) : e--);
    var g = Date.UTC(b.getFullYear(), 0, 1),
      i = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((Math.floor((i - g) / 864e5) + 7 - e) / 7);
  }
  function A(b) {
    var a = b % 10;
    b %= 100;
    if ((b >= 11 && b <= 13) || a === 0 || a >= 4) return "th";
    switch (a) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
    }
  }
  var x = {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      AM: "AM",
      PM: "PM",
      am: "am",
      pm: "pm",
      formats: { D: "%m/%d/%y", F: "%Y-%m-%d", R: "%H:%M", T: "%H:%M:%S", X: "%T", c: "%a %b %d %X %Y", r: "%I:%M:%S %p", v: "%e-%b-%Y", x: "%D" },
    },
    i = new p(x, 0, !1),
    y = typeof module !== "undefined",
    j;
  y
    ? ((j = module.exports = r), (j.strftime = u))
    : ((j = (function () {
        return this || (0, eval)("this");
      })()),
      (j.strftime = r));
  var g = y ? "require('strftime')" : "strftime",
    s = {};
  j.strftimeTZ = function (b, a, e, j) {
    if ((typeof e == "number" || typeof e == "string") && j == null) (j = e), (e = void 0);
    e
      ? k("`" + g + ".strftimeTZ(format, date, locale, tz)`", "var s = " + g + ".localize(locale).timezone(tz); s(format, [date])` or `var s = " + g + ".localize(locale); s.timezone(tz)(format, [date])")
      : k("`" + g + ".strftimeTZ(format, date, tz)`", "var s = " + g + ".timezone(tz); s(format, [date])` or `" + g + ".timezone(tz)(format, [date])");
    return (e ? i.localize(e) : i).timezone(j)(b, a);
  };
  j.strftimeUTC = function (b, a, e) {
    e ? k("`" + g + ".strftimeUTC(format, date, locale)`", "var s = " + g + ".localize(locale).utc(); s(format, [date])") : k("`" + g + ".strftimeUTC(format, [date])`", "var s = " + g + ".utc(); s(format, [date])");
    return (e ? z.localize(e) : z)(b, a);
  };
  j.localizedStrftime = function (b) {
    k("`" + g + ".localizedStrftime(locale)`", g + ".localize(locale)");
    return i.localize(b);
  };
  t(r);
  t(u);
  var z = i.utc();
  if (typeof Date.now !== "function")
    Date.now = function () {
      return +new Date();
    };
})();
!(function () {
  "use strict";
  var strptime = function (str, format, local) {
    return strptime.parse(str, format, local);
  };
  strptime.version = "0.0.1";
  var namespace;
  if (typeof module !== "undefined") {
    namespace = module.exports = strptime;
  } else {
    namespace = (function () {
      return this || (1, eval)("this");
    })();
  }
  namespace.strptime = strptime;
  !(function (strptime) {
    strptime.locale = {
      a: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      A: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      b: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      B: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      f: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."],
      c: "%Y-%m-%d %H:%M:%S",
      P: ["am", "pm"],
      r: "%I:%M:%S %p",
      x: "%m/%d/%y",
      X: "%H:%M:%S",
      day: ["Yesterday", "Today", "Tomorrow"],
      bg: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      Bg: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      fg: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."],
      Date_dBY_year_in_HM: "%#B %-d, %Y at %-H:%M",
      Date_dBY_year: "%#B %-d, %Y",
      Date_dBY: "%#B %-d, %Y",
      Date_AdBY: "%A, %#B %-d, %Y",
      Date_dBA: "%#B %-d, %A",
      Date_df_in_HM: "%#f, %-d at %-H:%M",
      Date_dfY: "%-d %#f %Y",
      Date_dB_in_HM: "%#B %-d at %-H:%M",
      Date_df: "%-d %#f",
    };
  })(strptime);
  !(function (strptime) {
    var inArray =
      Array.prototype.indexOf ||
      function (el) {
        var l = this.length;
        var i = 0;
        while (i < l) {
          if (el == this[i]) {
            return i;
          }
          i++;
        }
        return -1;
      };
    var locale = strptime.locale;
    var strRegNum2 = "[\\d\\s]?\\d";
    var strRegStr = "\\S+";
    var specifiers = {
      "%": "\\%",
      a: strRegStr,
      A: strRegStr,
      b: {
        reg: strRegStr,
        make: function (date, data, mod, gen) {
          data = inArray.call(gen ? locale.bg : locale.b, toLetterCaseReverse(data, mod));
          if (data === -1) {
            return false;
          }
          date.setUTCMonth(data);
          return true;
        },
      },
      h: {
        reg: strRegStr,
        make: function (date, data, mod, gen) {
          data = inArray.call(gen ? locale.bg : locale.b, toLetterCaseReverse(data, mod));
          if (data === -1) {
            return false;
          }
          date.setUTCMonth(data);
          return true;
        },
      },
      B: {
        reg: strRegStr,
        make: function (date, data, mod, gen) {
          data = inArray.call(gen ? locale.Bg : locale.B, toLetterCaseReverse(data, mod));
          if (data === -1) {
            return false;
          }
          date.setUTCMonth(data);
          return true;
        },
      },
      f: {
        reg: strRegStr,
        make: function (date, data, mod, gen) {
          data = inArray.call(gen ? locale.fg : locale.f, toLetterCaseReverse(data, mod));
          if (data === -1) {
            return false;
          }
          date.setUTCMonth(data);
          return true;
        },
      },
      g: {
        reg: strRegNum2,
        make: function (date, data) {
          data = parseInt(data, 10);
          if (data < 0 || data > 99) {
            return false;
          }
          data = data + 100 * parseInt(new Date().getUTCFullYear() / 100, 10);
          date.setUTCFullYear(data);
          return true;
        },
      },
      G: {
        reg: "\\d{4}",
        make: function (date, data) {
          data = parseInt(data, 10);
          date.setUTCFullYear(data);
          return true;
        },
      },
      d: {
        reg: strRegNum2,
        make: function (date, data) {
          data = parseInt(data, 10);
          if (data < 1 || data > 31) {
            return false;
          }
          date.setUTCDate(data);
          return true;
        },
      },
      e: {
        reg: strRegNum2,
        make: function (date, data) {
          data = parseInt(data, 10);
          if (data < 1 || data > 31) {
            return false;
          }
          date.setUTCDate(data);
          return true;
        },
      },
      H: {
        reg: strRegNum2,
        make: function (date, data) {
          data = parseInt(data, 10);
          if (data < 0 || data > 23) {
            return false;
          }
          date.setUTCHours(data);
          return true;
        },
      },
      I: {
        reg: strRegNum2,
        make: function (date, data) {
          data = parseInt(data, 10);
          if (data < 1 || data > 12) {
            return false;
          }
          date.setUTCHours(date.getUTCHours() + data);
          return true;
        },
      },
      m: {
        reg: strRegNum2,
        make: function (date, data) {
          data = parseInt(data, 10);
          if (data < 1 || data > 12) {
            return false;
          }
          date.setUTCMonth(data - 1);
          return true;
        },
      },
      M: {
        reg: strRegNum2,
        make: function (date, data) {
          data = parseInt(data, 10);
          if (data < 0 || data > 59) {
            return false;
          }
          date.setUTCMinutes(data);
          return true;
        },
      },
      n: "\\n",
      p: {
        reg: strRegStr,
        make: function (date, data) {
          data = inArray.call(locale.P, data.toLowerCase());
          if (data === -1) {
            return false;
          }
          if (data === 1) {
            date.setUTCHours(date.getUTCHours() + 12);
          }
          return true;
        },
      },
      P: {
        reg: strRegStr,
        make: function (date, data) {
          data = inArray.call(locale.P, data.toLowerCase());
          if (data === -1) {
            return false;
          }
          if (data === 1) {
            date.setUTCHours(date.getUTCHours() + 12);
          }
          return true;
        },
      },
      S: {
        reg: strRegNum2,
        make: function (date, data) {
          data = parseInt(data, 10);
          if (data < 0 || data > 60) {
            return false;
          }
          date.setUTCSeconds(data);
          return true;
        },
      },
      t: "\\t",
      u: "\\d",
      U: strRegNum2,
      w: "\\d",
      W: strRegNum2,
      y: {
        reg: strRegNum2,
        make: function (date, data) {
          data = parseInt(data, 10);
          if (data < 0 || data > 99) {
            return false;
          }
          data = data + 100 * parseInt(new Date().getUTCFullYear() / 100, 10);
          date.setUTCFullYear(data);
          return true;
        },
      },
      Y: {
        reg: "\\d{4}",
        make: function (date, data) {
          data = parseInt(data, 10);
          date.setUTCFullYear(data);
          return true;
        },
      },
      z: {
        reg: "[+\\-]\\d{4}",
        make: function (date, data) {
          var m = data.match(/^([+\-])(\d{2})(\d{2})$/);
          if (!m) {
            return false;
          }
          var offset = (parseInt(m[2], 10) * 60 + parseInt(m[3], 10)) * 6e4;
          if (m[1] === "+") {
            offset = -offset;
          }
          date.setTime(date.getTime() + offset);
          return true;
        },
      },
      l: {
        reg: strRegNum2,
        make: function (date, data) {
          data = parseInt(data, 10);
          if (data < 1 || data > 12) {
            return false;
          }
          date.setUTCHours(date.getUTCHours() + data);
          return true;
        },
      },
      s: {
        reg: "\\d+",
        make: function (date, data) {
          data = parseInt(data, 10);
          date.setTime(data * 1e3);
          return true;
        },
      },
      c: locale.c,
      r: locale.r,
      R: "%H:%M",
      T: "%H:%M:%S",
      x: locale.x,
      X: locale.X,
      D: "%m/%d/%y",
      F: "%Y-%m-%d",
      Date_iso: "%Y-%m-%dT%H:%M:%S",
      Date_dBY_year_in_HM: locale.Date_dBY_year_in_HM,
      Date_dBY_year: locale.Date_dBY_year,
      Date_dBY: locale.Date_dBY,
      Date_dBA: locale.Date_dBA,
      Date_AdBY: locale.Date_AdBY,
      Date_df_in_HM: locale.Date_df_in_HM,
      Date_dfY: locale.Date_dfY,
      Date_dB_in_HM: locale.Date_dB_in_HM,
      Date_dmY__dot: "%d.%m.%Y",
      Date_df: locale.Date_df,
      Date_FT: "%F %T",
      Date_dmY__minus: "%d-%m-%Y",
    };
    strptime.parse = function (str, format, local) {
      str = String(str);
      format = String(format);
      var loop = 5;
      while (/%(Date_[a-zA-Z0-9_]+|[cDFrRTxX])/g.test(format) && loop) {
        format = format.replace(/%(Date_[a-zA-Z0-9_]+|[cDFrRTxX])/, formatTransform);
        loop--;
      }
      formatTransform.make = [];
      var reg = format.replace(/%(([#\^!~]{0,2})[aAbBfh]|([0\-_]?)[degHImMSVWyl]|[GnpPtuUwYzZs%])/g, formatTransform);
      var match = str.match(new RegExp(reg));
      if (!match || !formatTransform.make.length) {
        return null;
      }
      var date = new Date(Date.UTC(0, 0));
      for (var i = 0, l = formatTransform.make.length; i < l; i++) {
        var build = formatTransform.make[i];
        if (!build[0](date, match[i + 1], build[1], build[2])) {
          return null;
        }
      }
      if (local) {
        date.setTime(date.getTime() + date.getTimezoneOffset() * 6e4);
      }
      return date;
    };
    function formatTransform(_, spec, mod, numPad, pos, str) {
      spec = String(spec);
      mod = String(mod);
      spec = spec.replace(/^[#_0\^\-!~]+/, "");
      var s = specifiers[spec];
      if (!s) {
        return _;
      }
      var genitive = false;
      if (mod.indexOf("!") === -1 && spec.length === 1 && (mod.indexOf("~") > -1 || ("bBf".indexOf(spec) > -1 && /%[0\-_]?d[\s]+$/.test(str.substr(0, pos))))) {
        genitive = true;
      }
      if ((spec === "I" || spec === "l") && !/%[pP]/.test(str)) {
        throw new Error("Undefined AM/PM");
      }
      switch (typeof s) {
        case "function":
          return s();
        case "string":
          return s;
        case "object":
          formatTransform.make.push([s.make, mod, genitive]);
          return "(" + s.reg + ")";
        default:
          return _;
      }
    }
    function toLetterCaseReverse(str, mode) {
      str = String(str);
      mode = String(mode);
      if (mode.indexOf("#") !== -1) {
        return str.substr(0, 1).toUpperCase() + str.substr(1);
      }
      if (mode.indexOf("^") !== -1) {
        return str.substr(0, 1) + str.substr(1).toLowerCase();
      }
      return str;
    }
  })(strptime);
})();
(function () {
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.ASSUME_ES5 = !1;
  $jscomp.ASSUME_NO_NATIVE_MAP = !1;
  $jscomp.ASSUME_NO_NATIVE_SET = !1;
  $jscomp.SIMPLE_FROUND_POLYFILL = !1;
  $jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          a != Array.prototype && a != Object.prototype && (a[b] = c.value);
        };
  $jscomp.getGlobal = function (a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
  };
  $jscomp.global = $jscomp.getGlobal(this);
  $jscomp.polyfill = function (a, b, c, d) {
    if (b) {
      c = $jscomp.global;
      a = a.split(".");
      for (d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {});
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && null != b && $jscomp.defineProperty(c, a, { configurable: !0, writable: !0, value: b });
    }
  };
  $jscomp.polyfill(
    "String.fromCodePoint",
    function (a) {
      return a
        ? a
        : function (a) {
            for (var b = "", d = 0; d < arguments.length; d++) {
              var e = Number(arguments[d]);
              if (0 > e || 1114111 < e || e !== Math.floor(e)) throw new RangeError("invalid_code_point " + e);
              65535 >= e ? (b += String.fromCharCode(e)) : ((e -= 65536), (b += String.fromCharCode(((e >>> 10) & 1023) | 55296)), (b += String.fromCharCode((e & 1023) | 56320)));
            }
            return b;
          };
    },
    "es6",
    "es3"
  );
  $jscomp.arrayIteratorImpl = function (a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  };
  $jscomp.arrayIterator = function (a) {
    return { next: $jscomp.arrayIteratorImpl(a) };
  };
  $jscomp.makeIterator = function (a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : $jscomp.arrayIterator(a);
  };
  $jscomp.FORCE_POLYFILL_PROMISE = !1;
  $jscomp.polyfill(
    "Promise",
    function (a) {
      function b() {
        this.batch_ = null;
      }
      function c(a) {
        return a instanceof e
          ? a
          : new e(function (b, c) {
              b(a);
            });
      }
      if (a && !$jscomp.FORCE_POLYFILL_PROMISE) return a;
      b.prototype.asyncExecute = function (a) {
        if (null == this.batch_) {
          this.batch_ = [];
          var b = this;
          this.asyncExecuteFunction(function () {
            b.executeBatch_();
          });
        }
        this.batch_.push(a);
      };
      var d = $jscomp.global.setTimeout;
      b.prototype.asyncExecuteFunction = function (a) {
        d(a, 0);
      };
      b.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length; ) {
          var a = this.batch_;
          this.batch_ = [];
          for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            a[b] = null;
            try {
              c();
            } catch (l) {
              this.asyncThrow_(l);
            }
          }
        }
        this.batch_ = null;
      };
      b.prototype.asyncThrow_ = function (a) {
        this.asyncExecuteFunction(function () {
          throw a;
        });
      };
      var e = function (a) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        var b = this.createResolveAndReject_();
        try {
          a(b.resolve, b.reject);
        } catch (k) {
          b.reject(k);
        }
      };
      e.prototype.createResolveAndReject_ = function () {
        function a(a) {
          return function (d) {
            c || ((c = !0), a.call(b, d));
          };
        }
        var b = this,
          c = !1;
        return { resolve: a(this.resolveTo_), reject: a(this.reject_) };
      };
      e.prototype.resolveTo_ = function (a) {
        if (a === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (a instanceof e) this.settleSameAsPromise_(a);
        else {
          a: switch (typeof a) {
            case "object":
              var b = null != a;
              break a;
            case "function":
              b = !0;
              break a;
            default:
              b = !1;
          }
          b ? this.resolveToNonPromiseObj_(a) : this.fulfill_(a);
        }
      };
      e.prototype.resolveToNonPromiseObj_ = function (a) {
        var b = void 0;
        try {
          b = a.then;
        } catch (k) {
          this.reject_(k);
          return;
        }
        "function" == typeof b ? this.settleSameAsThenable_(b, a) : this.fulfill_(a);
      };
      e.prototype.reject_ = function (a) {
        this.settle_(2, a);
      };
      e.prototype.fulfill_ = function (a) {
        this.settle_(1, a);
      };
      e.prototype.settle_ = function (a, b) {
        if (0 != this.state_) throw Error("Cannot settle(" + a + ", " + b + "): Promise already settled in state" + this.state_);
        this.state_ = a;
        this.result_ = b;
        this.executeOnSettledCallbacks_();
      };
      e.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var a = 0; a < this.onSettledCallbacks_.length; ++a) f.asyncExecute(this.onSettledCallbacks_[a]);
          this.onSettledCallbacks_ = null;
        }
      };
      var f = new b();
      e.prototype.settleSameAsPromise_ = function (a) {
        var b = this.createResolveAndReject_();
        a.callWhenSettled_(b.resolve, b.reject);
      };
      e.prototype.settleSameAsThenable_ = function (a, b) {
        var c = this.createResolveAndReject_();
        try {
          a.call(b, c.resolve, c.reject);
        } catch (l) {
          c.reject(l);
        }
      };
      e.prototype.then = function (a, b) {
        function c(a, b) {
          return "function" == typeof a
            ? function (b) {
                try {
                  d(a(b));
                } catch (t) {
                  f(t);
                }
              }
            : b;
        }
        var d,
          f,
          g = new e(function (a, b) {
            d = a;
            f = b;
          });
        this.callWhenSettled_(c(a, d), c(b, f));
        return g;
      };
      e.prototype.catch = function (a) {
        return this.then(void 0, a);
      };
      e.prototype.callWhenSettled_ = function (a, b) {
        function c() {
          switch (d.state_) {
            case 1:
              a(d.result_);
              break;
            case 2:
              b(d.result_);
              break;
            default:
              throw Error("Unexpected state: " + d.state_);
          }
        }
        var d = this;
        null == this.onSettledCallbacks_ ? f.asyncExecute(c) : this.onSettledCallbacks_.push(c);
      };
      e.resolve = c;
      e.reject = function (a) {
        return new e(function (b, c) {
          c(a);
        });
      };
      e.race = function (a) {
        return new e(function (b, d) {
          for (var e = $jscomp.makeIterator(a), f = e.next(); !f.done; f = e.next()) c(f.value).callWhenSettled_(b, d);
        });
      };
      e.all = function (a) {
        var b = $jscomp.makeIterator(a),
          d = b.next();
        return d.done
          ? c([])
          : new e(function (a, e) {
              function f(b) {
                return function (c) {
                  g[b] = c;
                  h--;
                  0 == h && a(g);
                };
              }
              var g = [],
                h = 0;
              do g.push(void 0), h++, c(d.value).callWhenSettled_(f(g.length - 1), e), (d = b.next());
              while (!d.done);
            });
      };
      return e;
    },
    "es6",
    "es3"
  );
  $jscomp.polyfill(
    "Math.hypot",
    function (a) {
      return a
        ? a
        : function (a) {
            if (2 > arguments.length) return arguments.length ? Math.abs(arguments[0]) : 0;
            var b, d, e;
            for (b = e = 0; b < arguments.length; b++) e = Math.max(e, Math.abs(arguments[b]));
            if (1e100 < e || 1e-100 > e) {
              if (!e) return e;
              for (b = d = 0; b < arguments.length; b++) {
                var f = Number(arguments[b]) / e;
                d += f * f;
              }
              return Math.sqrt(d) * e;
            }
            for (b = d = 0; b < arguments.length; b++) (f = Number(arguments[b])), (d += f * f);
            return Math.sqrt(d);
          };
    },
    "es6",
    "es3"
  );
  $jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
  $jscomp.initSymbol = function () {
    $jscomp.initSymbol = function () {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
  };
  $jscomp.SymbolClass = function (a, b) {
    this.$jscomp$symbol$id_ = a;
    $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: b });
  };
  $jscomp.SymbolClass.prototype.toString = function () {
    return this.$jscomp$symbol$id_;
  };
  $jscomp.Symbol = (function () {
    function a(c) {
      if (this instanceof a) throw new TypeError("Symbol is not a constructor");
      return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (c || "") + "_" + b++, c);
    }
    var b = 0;
    return a;
  })();
  $jscomp.initSymbolIterator = function () {
    $jscomp.initSymbol();
    var a = $jscomp.global.Symbol.iterator;
    a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[a] &&
      $jscomp.defineProperty(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
        },
      });
    $jscomp.initSymbolIterator = function () {};
  };
  $jscomp.initSymbolAsyncIterator = function () {
    $jscomp.initSymbol();
    var a = $jscomp.global.Symbol.asyncIterator;
    a || (a = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
    $jscomp.initSymbolAsyncIterator = function () {};
  };
  $jscomp.iteratorPrototype = function (a) {
    $jscomp.initSymbolIterator();
    a = { next: a };
    a[$jscomp.global.Symbol.iterator] = function () {
      return this;
    };
    return a;
  };
  $jscomp.iteratorFromArray = function (a, b) {
    $jscomp.initSymbolIterator();
    a instanceof String && (a += "");
    var c = 0,
      d = {
        next: function () {
          if (c < a.length) {
            var e = c++;
            return { value: b(e, a[e]), done: !1 };
          }
          d.next = function () {
            return { done: !0, value: void 0 };
          };
          return d.next();
        },
      };
    d[Symbol.iterator] = function () {
      return d;
    };
    return d;
  };
  $jscomp.polyfill(
    "Array.prototype.values",
    function (a) {
      return a
        ? a
        : function () {
            return $jscomp.iteratorFromArray(this, function (a, c) {
              return c;
            });
          };
    },
    "es8",
    "es3"
  );
  $jscomp.polyfill(
    "Array.prototype.keys",
    function (a) {
      return a
        ? a
        : function () {
            return $jscomp.iteratorFromArray(this, function (a) {
              return a;
            });
          };
    },
    "es6",
    "es3"
  );
  (function (a) {
    function b(a) {
      p[n] = c.apply(void 0, a);
      return n++;
    }
    function c(a, b) {
      var c = [].slice.call(arguments, 1);
      return function () {
        "function" === typeof a ? a.apply(void 0, c) : new Function("" + a)();
      };
    }
    function d(a) {
      if (r) setTimeout(c(d, a), 0);
      else {
        var b = p[a];
        if (b) {
          r = !0;
          try {
            b();
          } finally {
            e(a), (r = !1);
          }
        }
      }
    }
    function e(a) {
      delete p[a];
    }
    function f() {
      t = function () {
        var a = b(arguments);
        process.nextTick(c(d, a));
        return a;
      };
    }
    function g() {
      if (a.postMessage && !a.importScripts) {
        var b = !0,
          c = a.onmessage;
        a.onmessage = function () {
          b = !1;
        };
        a.postMessage("", "*");
        a.onmessage = c;
        return b;
      }
    }
    function h() {
      var c = "setImmediate$" + Math.random() + "$",
        e = function (b) {
          b.source === a && "string" === typeof b.data && 0 === b.data.indexOf(c) && d(+b.data.slice(c.length));
        };
      a.addEventListener ? a.addEventListener("message", e, !1) : a.attachEvent("onmessage", e);
      t = function () {
        var d = b(arguments);
        a.postMessage(c + d, "*");
        return d;
      };
    }
    function k() {
      var a = new MessageChannel();
      a.port1.onmessage = function (a) {
        d(a.data);
      };
      t = function () {
        var c = b(arguments);
        a.port2.postMessage(c);
        return c;
      };
    }
    function l() {
      var a = q.documentElement;
      t = function () {
        var c = b(arguments),
          e = q.createElement("script");
        e.onreadystatechange = function () {
          d(c);
          e.onreadystatechange = null;
          a.removeChild(e);
          e = null;
        };
        a.appendChild(e);
        return c;
      };
    }
    function m() {
      t = function () {
        var a = b(arguments);
        setTimeout(c(d, a), 0);
        return a;
      };
    }
    if (!a.setImmediate) {
      var n = 1,
        p = {},
        r = !1,
        q = a.document,
        t,
        u = Object.getPrototypeOf && Object.getPrototypeOf(a);
      u = u && u.setTimeout ? u : a;
      "[object process]" === {}.toString.call(a.process) ? f() : g() ? h() : a.MessageChannel ? k() : q && "onreadystatechange" in q.createElement("script") ? l() : m();
      u.setImmediate = t;
      u.clearImmediate = e;
    }
  })("undefined" === typeof self ? ("undefined" === typeof global ? this : global) : self);
  var Sk = Sk || {};
  Sk.js_beautify = function (a) {
    return a;
  };
  Sk.global = "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
  Sk.exportSymbol = function (a, b) {
    a = a.split(".");
    var c = Sk.global,
      d;
    for (d = 0; d < a.length - 1; d++) {
      var e = a[d];
      c = c.hasOwnProperty(e) ? c[e] : (c[e] = {});
    }
    "undefined" !== typeof b && ((e = a[d]), (c[e] = b));
  };
  Sk.isArrayLike = function (a) {
    return a instanceof Array || (a && a.length && "number" == typeof a.length) ? !0 : !1;
  };
  Sk.exportSymbol("Sk", Sk);
  Sk.exportSymbol("Sk.global", Sk.global);
  Sk.exportSymbol("Sk.exportSymbol", Sk.exportSymbol);
  Sk.exportSymbol("Sk.isArrayLike", Sk.isArrayLike);
  Sk.asserts = {};
  Sk.asserts.ENABLE_ASSERTS = !1;
  Sk.exportSymbol("Sk.asserts.ENABLE_ASSERTS", Sk.asserts.ENABLE_ASSERTS);
  Sk.asserts.assert = function (a, b) {
    if (Sk.asserts.ENABLE_ASSERTS && !a) throw ((a = "Assertion failure"), b && (a = a + ": " + b), Error(a));
    return a;
  };
  Sk.exportSymbol("Sk.asserts.assert", Sk.asserts.assert);
  Sk.asserts.fail = function (a) {
    if (Sk.asserts.ENABLE_ASSERTS) {
      var b = "Assertion failure";
      a && (b = b + ": " + a);
      throw Error(b);
    }
  };
  Sk.exportSymbol("Sk.asserts.fail", Sk.asserts.fail);
  Sk.bool_check = function (a, b) {
    if (void 0 === a || null === a || "boolean" !== typeof a) throw Error("must specify " + b + " and it must be a boolean");
  };
  Sk.python2 = {
    print_function: !1,
    division: !1,
    absolute_import: null,
    unicode_literals: !1,
    set_repr: !1,
    class_repr: !1,
    inherit_from_object: !1,
    super_args: !1,
    octal_number_literal: !1,
    bankers_rounding: !1,
    python_version: !1,
    dunder_next: !1,
    dunder_round: !1,
    exceptions: !1,
    no_long_type: !1,
    ceil_floor_int: !1,
  };
  Sk.python3 = {
    print_function: !0,
    division: !0,
    absolute_import: null,
    unicode_literals: !0,
    set_repr: !0,
    class_repr: !0,
    inherit_from_object: !0,
    super_args: !0,
    octal_number_literal: !0,
    bankers_rounding: !0,
    python_version: !0,
    dunder_next: !0,
    dunder_round: !0,
    exceptions: !0,
    no_long_type: !0,
    ceil_floor_int: !0,
  };
  Sk.configure = function (a) {
    Sk.output = a.output || Sk.output;
    Sk.asserts.assert("function" === typeof Sk.output);
    Sk.debugout = a.debugout || Sk.debugout;
    Sk.asserts.assert("function" === typeof Sk.debugout);
    Sk.uncaughtException = a.uncaughtException || Sk.uncaughtException;
    Sk.asserts.assert("function" === typeof Sk.uncaughtException);
    Sk.read = a.read || Sk.read;
    Sk.asserts.assert("function" === typeof Sk.read);
    Sk.nonreadopen = a.nonreadopen || !1;
    Sk.asserts.assert("boolean" === typeof Sk.nonreadopen);
    Sk.fileopen = a.fileopen || void 0;
    Sk.asserts.assert("function" === typeof Sk.fileopen || "undefined" === typeof Sk.fileopen);
    Sk.filewrite = a.filewrite || void 0;
    Sk.asserts.assert("function" === typeof Sk.filewrite || "undefined" === typeof Sk.filewrite);
    Sk.timeoutMsg = a.timeoutMsg || Sk.timeoutMsg;
    Sk.asserts.assert("function" === typeof Sk.timeoutMsg);
    Sk.exportSymbol("Sk.timeoutMsg", Sk.timeoutMsg);
    Sk.sysargv = a.sysargv || Sk.sysargv;
    Sk.asserts.assert(Sk.isArrayLike(Sk.sysargv));
    Sk.__future__ = a.__future__ || Sk.python2;
    Sk.bool_check(Sk.__future__.print_function, "Sk.__future__.print_function");
    Sk.bool_check(Sk.__future__.division, "Sk.__future__.division");
    Sk.bool_check(Sk.__future__.unicode_literals, "Sk.__future__.unicode_literals");
    Sk.bool_check(Sk.__future__.set_repr, "Sk.__future__.set_repr");
    Sk.bool_check(Sk.__future__.class_repr, "Sk.__future__.class_repr");
    Sk.bool_check(Sk.__future__.inherit_from_object, "Sk.__future__.inherit_from_object");
    Sk.bool_check(Sk.__future__.super_args, "Sk.__future__.super_args");
    Sk.bool_check(Sk.__future__.octal_number_literal, "Sk.__future__.octal_number_literal");
    Sk.bool_check(Sk.__future__.bankers_rounding, "Sk.__future__.bankers_rounding");
    Sk.bool_check(Sk.__future__.python_version, "Sk.__future__.python_version");
    Sk.bool_check(Sk.__future__.dunder_next, "Sk.__future__.dunder_next");
    Sk.bool_check(Sk.__future__.dunder_round, "Sk.__future__.dunder_round");
    Sk.bool_check(Sk.__future__.exceptions, "Sk.__future__.exceptions");
    Sk.bool_check(Sk.__future__.no_long_type, "Sk.__future__.no_long_type");
    Sk.bool_check(Sk.__future__.ceil_floor_int, "Sk.__future__.ceil_floor_int");
    Sk.imageProxy = a.imageProxy || "http://localhost:8080/320x";
    Sk.asserts.assert("string" === typeof Sk.imageProxy || "function" === typeof Sk.imageProxy);
    Sk.inputfun = a.inputfun || Sk.inputfun;
    Sk.asserts.assert("function" === typeof Sk.inputfun);
    Sk.inputfunTakesPrompt = a.inputfunTakesPrompt || !1;
    Sk.asserts.assert("boolean" === typeof Sk.inputfunTakesPrompt);
    Sk.retainGlobals = a.retainglobals || !1;
    Sk.asserts.assert("boolean" === typeof Sk.retainGlobals);
    Sk.debugging = a.debugging || !1;
    Sk.asserts.assert("boolean" === typeof Sk.debugging);
    Sk.killableWhile = a.killableWhile || !1;
    Sk.asserts.assert("boolean" === typeof Sk.killableWhile);
    Sk.killableFor = a.killableFor || !1;
    Sk.asserts.assert("boolean" === typeof Sk.killableFor);
    Sk.signals = a.signals;
    Sk.signals =
      !0 === Sk.signals
        ? {
            listeners: [],
            addEventListener: function (a) {
              Sk.signals.listeners.push(a);
            },
            removeEventListener: function (a) {
              a = Sk.signals.listeners.indexOf(a);
              0 <= a && Sk.signals.listeners.splice(a, 1);
            },
            signal: function (a, c) {
              for (var b = 0; b < Sk.signals.listeners.length; b++) Sk.signals.listeners[b].call(null, a, c);
            },
          }
        : null;
    Sk.asserts.assert("object" === typeof Sk.signals);
    Sk.breakpoints =
      a.breakpoints ||
      function () {
        return !0;
      };
    Sk.asserts.assert("function" === typeof Sk.breakpoints);
    Sk.setTimeout = a.setTimeout;
    void 0 === Sk.setTimeout &&
      (Sk.setTimeout =
        "function" === typeof setTimeout
          ? function (a, c) {
              setTimeout(a, c);
            }
          : function (a, c) {
              a();
            });
    Sk.asserts.assert("function" === typeof Sk.setTimeout);
    "execLimit" in a && (Sk.execLimit = a.execLimit);
    "yieldLimit" in a && (Sk.yieldLimit = a.yieldLimit);
    a.syspath && ((Sk.syspath = a.syspath), Sk.asserts.assert(Sk.isArrayLike(Sk.syspath)), (Sk.realsyspath = void 0), (Sk.sysmodules = new Sk.builtin.dict([])));
    Sk.misceval.softspace_ = !1;
    Sk.switch_version("round$", Sk.__future__.dunder_round);
    Sk.switch_version("next$", Sk.__future__.dunder_next);
    Sk.builtin.lng.tp$name = Sk.__future__.no_long_type ? "int" : "long";
  };
  Sk.exportSymbol("Sk.configure", Sk.configure);
  Sk.uncaughtException = function (a) {
    throw a;
  };
  Sk.uncaughtException = function (a) {
    throw a;
  };
  Sk.exportSymbol("Sk.uncaughtException", Sk.uncaughtException);
  Sk.timeoutMsg = function () {
    return "Program exceeded run time limit.";
  };
  Sk.exportSymbol("Sk.timeoutMsg", Sk.timeoutMsg);
  Sk.execLimit = Number.POSITIVE_INFINITY;
  Sk.yieldLimit = Number.POSITIVE_INFINITY;
  Sk.output = function (a) {};
  Sk.read = function (a) {
    throw "Sk.read has not been implemented";
  };
  Sk.sysargv = [];
  Sk.getSysArgv = function () {
    return Sk.sysargv;
  };
  Sk.exportSymbol("Sk.getSysArgv", Sk.getSysArgv);
  Sk.syspath = [];
  Sk.inBrowser = void 0 !== Sk.global.document;
  Sk.debugout = function (a) {};
  (function () {
    void 0 !== Sk.global.write
      ? (Sk.output = Sk.global.write)
      : void 0 !== Sk.global.console && void 0 !== Sk.global.console.log
      ? (Sk.output = function (a) {
          Sk.global.console.log(a);
        })
      : void 0 !== Sk.global.print && (Sk.output = Sk.global.print);
    void 0 !== Sk.global.console && void 0 !== Sk.global.console.log
      ? (Sk.debugout = function (a) {
          Sk.global.console.log(a);
        })
      : void 0 !== Sk.global.print && (Sk.debugout = Sk.global.print);
  })();
  Sk.inputfun = function (a) {
    return window.prompt(a);
  };
  Sk.setup_method_mappings = function () {
    return {
      round$: { classes: [Sk.builtin.float_, Sk.builtin.int_, Sk.builtin.nmber], 2: null, 3: "__round__" },
      next$: { classes: [Sk.builtin.dict_iter_, Sk.builtin.list_iter_, Sk.builtin.set_iter_, Sk.builtin.str_iter_, Sk.builtin.tuple_iter_, Sk.builtin.generator, Sk.builtin.enumerate, Sk.builtin.iterator], 2: "next", 3: "__next__" },
    };
  };
  Sk.switch_version = function (a, b) {
    var c;
    var d = Sk.setup_method_mappings()[a];
    if (b) {
      b = d[3];
      var e = d[2];
    } else (b = d[2]), (e = d[3]);
    var f = d.classes;
    var g = f.length;
    for (c = 0; c < g; c++) (d = f[c]), e && d.prototype.hasOwnProperty(e) && delete d.prototype[e], b && (d.prototype[b] = new Sk.builtin.func(d.prototype[a]));
  };
  Sk.exportSymbol("Sk.__future__", Sk.__future__);
  Sk.exportSymbol("Sk.inputfun", Sk.inputfun);
  void 0 === Sk.builtin && (Sk.builtin = {});
  Sk.dunderToSkulpt = {
    __eq__: "ob$eq",
    __ne__: "ob$ne",
    __lt__: "ob$lt",
    __le__: "ob$le",
    __gt__: "ob$gt",
    __ge__: "ob$ge",
    __hash__: "tp$hash",
    __abs__: "nb$abs",
    __neg__: "nb$negative",
    __pos__: "nb$positive",
    __int__: "nb$int_",
    __long__: "nb$lng",
    __float__: "nb$float_",
    __add__: "nb$add",
    __radd__: "nb$reflected_add",
    __sub__: "nb$subtract",
    __rsub__: "nb$reflected_subtract",
    __mul__: "nb$multiply",
    __rmul__: "nb$reflected_multiply",
    __div__: "nb$divide",
    __rdiv__: "nb$reflected_divide",
    __floordiv__: "nb$floor_divide",
    __rfloordiv__: "nb$reflected_floor_divide",
    __mod__: "nb$remainder",
    __rmod__: "nb$reflected_remainder",
    __divmod__: "nb$divmod",
    __rdivmod__: "nb$reflected_divmod",
    __pow__: "nb$power",
    __rpow__: "nb$reflected_power",
    __contains__: "sq$contains",
    __len__: ["sq$length", 1],
    __get__: ["tp$descr_get", 3],
    __set__: ["tp$descr_set", 3],
  };
  Sk.builtin.type = function (a, b, c) {
    var d;
    if (void 0 === b && void 0 === c) return a.ob$type;
    if ("dict" !== c.tp$name) throw new Sk.builtin.TypeError("type() argument 3 must be dict, not " + Sk.abstr.typeName(c));
    if (!Sk.builtin.checkString(a)) throw new Sk.builtin.TypeError("type() argument 1 must be str, not " + Sk.abstr.typeName(a));
    if ("tuple" !== b.tp$name) throw new Sk.builtin.TypeError("type() argument 2 must be tuple, not " + Sk.abstr.typeName(b));
    var e = function (a, b) {
      void 0 !== e.prototype.tp$base && (e.prototype.tp$base.sk$klass ? e.prototype.tp$base.call(this, a, b) : ((a = a.slice()), a.unshift(e, this), Sk.abstr.superConstructor.apply(void 0, a)));
      this.$d = new Sk.builtin.dict([]);
      this.$d.mp$ass_subscript(new Sk.builtin.str("__dict__"), this.$d);
    };
    var f = Sk.ffi.remapToJs(a),
      g = !1;
    e.tp$call = function (a, b) {
      var c = Sk.builtin.type.typeLookup(e, Sk.builtin.str.$new);
      a = a || [];
      b = b || [];
      if (void 0 === c || c === Sk.builtin.object.prototype.__new__) {
        var d = new e(a, b);
        c = void 0;
      } else {
        var f = a.slice();
        f.unshift(e);
        d = Sk.misceval.applyOrSuspend(c, void 0, void 0, b, f);
      }
      return Sk.misceval.chain(
        d,
        function (e) {
          var f = Sk.builtin.type.typeLookup(e.ob$type, Sk.builtin.str.$init);
          d = e;
          if (void 0 !== f) return a.unshift(d), Sk.misceval.applyOrSuspend(f, void 0, void 0, b, a);
          if (void 0 === c && (0 !== a.length || 0 !== b.length) && !g) throw new Sk.builtin.TypeError("__init__() got unexpected argument(s)");
        },
        function (a) {
          if (a !== Sk.builtin.none.none$ && void 0 !== a) throw new Sk.builtin.TypeError("__init__() should return None, not " + Sk.abstr.typeName(a));
          return d;
        }
      );
    };
    0 === b.v.length && Sk.__future__.inherit_from_object && (b.v.push(Sk.builtin.object), Sk.abstr.setUpInheritance(f, e, Sk.builtin.object));
    var h,
      k = [];
    var l = b.tp$iter();
    for (d = l.tp$iternext(); void 0 !== d; d = l.tp$iternext()) {
      for (void 0 === h && (h = d); d.sk$klass && d.prototype.tp$base; ) d = d.prototype.tp$base;
      !d.sk$klass && 0 > k.indexOf(d) && (k.push(d), (g = !0));
    }
    if (1 < k.length) throw new Sk.builtin.TypeError("Multiple inheritance with more than one builtin type is unsupported");
    void 0 !== h && (Sk.abstr.inherits(e, h), h.prototype instanceof Sk.builtin.object || h === Sk.builtin.object) && (e.prototype.tp$base = h);
    e.prototype.tp$name = f;
    e.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj(f, e);
    var m = new Sk.builtin.str("__module__");
    void 0 === c.mp$lookup(m) && c.mp$ass_subscript(m, Sk.globals.__name__);
    l = c.tp$iter();
    for (h = l.tp$iternext(); void 0 !== h; h = l.tp$iternext()) (d = c.mp$subscript(h)), void 0 === d && (d = null), (e.prototype[h.v] = d), (e[h.v] = d);
    e.__class__ = e;
    e.__name__ = a;
    e.sk$klass = !0;
    e.prototype.$r = function () {
      var a = this.tp$getattr(Sk.builtin.str.$repr);
      if (void 0 !== a && a.im_func !== Sk.builtin.object.prototype.__repr__) return Sk.misceval.apply(a, void 0, void 0, void 0, []);
      if (void 0 !== e.prototype.tp$base && e.prototype.tp$base !== Sk.builtin.object && void 0 !== e.prototype.tp$base.prototype.$r) return e.prototype.tp$base.prototype.$r.call(this);
      var b = c.mp$subscript(m);
      a = "";
      b && (a = b.v + ".");
      return new Sk.builtin.str("<" + a + f + " object>");
    };
    e.prototype.tp$setattr = function (a, b, c) {
      var d = Sk.builtin.object.prototype.GenericGetAttr.call(this, Sk.builtin.str.$setattr);
      return void 0 !== d ? ((a = Sk.misceval.callsimOrSuspendArray(d, [a, b])), c ? a : Sk.misceval.retryOptionalSuspensionOrThrow(a)) : Sk.builtin.object.prototype.GenericSetAttr.call(this, a, b, c);
    };
    e.prototype.tp$getattr = function (a, b) {
      var c;
      var d = Sk.builtin.type.typeLookup(e, Sk.builtin.str.$getattribute);
      void 0 !== d && null !== d && void 0 !== d.tp$descr_get && (c = d.tp$descr_get.call(d, this, e));
      void 0 === c && (c = Sk.builtin.object.prototype.GenericPythonGetAttr.bind(null, this));
      d = Sk.misceval.tryCatch(
        function () {
          return Sk.misceval.callsimOrSuspendArray(c, [a]);
        },
        function (a) {
          if (!(a instanceof Sk.builtin.AttributeError)) throw a;
        }
      );
      return b ? d : Sk.misceval.retryOptionalSuspensionOrThrow(d);
    };
    e.prototype.tp$str = function () {
      var a = this.tp$getattr(Sk.builtin.str.$str);
      return void 0 !== a && a.im_func !== Sk.builtin.object.prototype.__str__
        ? Sk.misceval.apply(a, void 0, void 0, void 0, [])
        : void 0 !== e.prototype.tp$base && e.prototype.tp$base !== Sk.builtin.object && void 0 !== e.prototype.tp$base.prototype.tp$str
        ? e.prototype.tp$base.prototype.tp$str.call(this)
        : this.$r();
    };
    e.prototype.tp$length = function (a) {
      var b = Sk.misceval.chain(Sk.abstr.gattr(this, Sk.builtin.str.$len, a), function (a) {
        return Sk.misceval.applyOrSuspend(a, void 0, void 0, void 0, []);
      });
      return a ? b : Sk.misceval.retryOptionalSuspensionOrThrow(b);
    };
    e.prototype.tp$call = function (a, b) {
      return Sk.misceval.chain(this.tp$getattr(Sk.builtin.str.$call, !0), function (c) {
        if (void 0 === c) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(this) + "' object is not callable");
        return Sk.misceval.applyOrSuspend(c, void 0, void 0, b, a);
      });
    };
    e.prototype.tp$iter = function () {
      var a = this.tp$getattr(Sk.builtin.str.$iter);
      if (void 0 === a) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(this) + "' object is not iterable");
      return Sk.misceval.callsimArray(a);
    };
    e.prototype.tp$iternext = function (a) {
      var b = this,
        c = Sk.misceval.chain(b.tp$getattr(Sk.__future__.dunder_next ? Sk.builtin.str.$next3 : Sk.builtin.str.$next2, a), function (a) {
          if (void 0 === a) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object is not iterable");
          return Sk.misceval.tryCatch(
            function () {
              return Sk.misceval.callsimOrSuspendArray(a);
            },
            function (a) {
              if (!(a instanceof Sk.builtin.StopIteration)) throw a;
            }
          );
        });
      return a ? c : Sk.misceval.retryOptionalSuspensionOrThrow(c);
    };
    e.prototype.tp$getitem = function (a, b) {
      var c = this.tp$getattr(Sk.builtin.str.$getitem, b);
      if (void 0 !== c) return (a = Sk.misceval.applyOrSuspend(c, void 0, void 0, void 0, [a])), b ? a : Sk.misceval.retryOptionalSuspensionOrThrow(a);
      throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(this) + "' object does not support indexing");
    };
    e.prototype.tp$setitem = function (a, b, c) {
      var d = this.tp$getattr(Sk.builtin.str.$setitem, c);
      if (void 0 !== d) return (a = Sk.misceval.applyOrSuspend(d, void 0, void 0, void 0, [a, b])), c ? a : Sk.misceval.retryOptionalSuspensionOrThrow(a);
      throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(this) + "' object does not support item assignment");
    };
    b && ((e.$d = new Sk.builtin.dict([])), e.$d.mp$ass_subscript(Sk.builtin.type.basesStr_, b), (a = Sk.builtin.type.buildMRO(e)), e.$d.mp$ass_subscript(Sk.builtin.type.mroStr_, a), (e.tp$mro = a));
    e.tp$setattr = Sk.builtin.type.prototype.tp$setattr;
    a = function (a, b, c, d) {
      e.prototype[a] = function () {
        var a = !1,
          b = arguments.length,
          e;
        var f = null !== d && d <= b ? Array(b) : Array(b + 1);
        f[0] = this;
        var g = 1;
        for (e = 0; e < b; e++) e === d - 1 ? (a = arguments[e]) : ((f[g] = arguments[e]), (g += 1));
        return a ? Sk.misceval.callsimOrSuspendArray(c, f) : Sk.misceval.callsimArray(c, f);
      };
    };
    for (var n in Sk.dunderToSkulpt) (b = Sk.dunderToSkulpt[n]), "string" === typeof b ? (l = null) : ((l = b[1]), (b = b[0])), e[n] && a(b, n, e[n], l);
    return e;
  };
  Sk.builtin.type.makeTypeObj = function (a, b) {
    Sk.builtin.type.makeIntoTypeObj(a, b);
    return b;
  };
  Sk.builtin.type.makeIntoTypeObj = function (a, b) {
    Sk.asserts.assert(void 0 !== a);
    Sk.asserts.assert(void 0 !== b);
    b.ob$type = Sk.builtin.type;
    b.tp$name = a;
    b.$r = function () {
      var a = b.__module__,
        d = "";
      a && (d = a.v + ".");
      var e = "class";
      a || b.sk$klass || Sk.__future__.class_repr || (e = "type");
      return new Sk.builtin.str("<" + e + " '" + d + b.tp$name + "'>");
    };
    b.tp$str = void 0;
    b.tp$getattr = Sk.builtin.type.prototype.tp$getattr;
    b.tp$setattr = Sk.builtin.object.prototype.GenericSetAttr;
    b.tp$richcompare = Sk.builtin.type.prototype.tp$richcompare;
    b.sk$type = !0;
    return b;
  };
  Sk.builtin.type.ob$type = Sk.builtin.type;
  Sk.builtin.type.tp$name = "type";
  Sk.builtin.type.sk$type = !0;
  Sk.builtin.type.$r = function () {
    return Sk.__future__.class_repr ? new Sk.builtin.str("<class 'type'>") : new Sk.builtin.str("<type 'type'>");
  };
  Sk.builtin.type.prototype.tp$getattr = function (a, b) {
    if (this.$d) {
      var c = this.$d.mp$lookup(a);
      if (void 0 !== c) return c;
    }
    a = Sk.builtin.type.typeLookup(this, a);
    if (void 0 !== a && null !== a && void 0 !== a.ob$type) var d = a.tp$descr_get;
    if (d) return d.call(a, Sk.builtin.none.none$, this, b);
    if (void 0 !== a) return a;
  };
  Sk.builtin.type.prototype.tp$setattr = function (a, b) {
    this[a.$jsstr()] = b;
  };
  Sk.builtin.type.typeLookup = function (a, b) {
    var c = a.tp$mro,
      d,
      e = b.$jsstr();
    if (c)
      for (d = 0; d < c.v.length; ++d) {
        a = c.v[d];
        if (a.hasOwnProperty(e)) return a[e];
        var f = a.$d.mp$lookup(b);
        if (void 0 !== f) return f;
        if (a.prototype && void 0 !== a.prototype[e]) return a.prototype[e];
      }
    else if (a.prototype) return a.prototype[e];
  };
  Sk.builtin.type.mroMerge_ = function (a) {
    for (var b, c, d, e, f, g, h = []; ; ) {
      for (c = 0; c < a.length && ((b = a[c]), 0 === b.length); ++c);
      if (c === a.length) return h;
      d = [];
      for (c = 0; c < a.length; ++c)
        if (((b = a[c]), 0 !== b.length)) {
          g = b[0];
          f = 0;
          a: for (; f < a.length; ++f) for (e = a[f], b = 1; b < e.length; ++b) if (e[b] === g) break a;
          f === a.length && d.push(g);
        }
      if (0 === d.length) throw new Sk.builtin.TypeError("Inconsistent precedences in type hierarchy");
      d = d[0];
      h.push(d);
      for (c = 0; c < a.length; ++c) (b = a[c]), 0 < b.length && b[0] === d && b.splice(0, 1);
    }
  };
  Sk.builtin.type.buildMRO_ = function (a) {
    var b = [[a]],
      c = a.$d.mp$subscript(Sk.builtin.type.basesStr_);
    for (a = 0; a < c.v.length; ++a) b.push(Sk.builtin.type.buildMRO_(c.v[a]));
    var d = [];
    for (a = 0; a < c.v.length; ++a) d.push(c.v[a]);
    b.push(d);
    return Sk.builtin.type.mroMerge_(b);
  };
  Sk.builtin.type.buildMRO = function (a) {
    return new Sk.builtin.tuple(Sk.builtin.type.buildMRO_(a));
  };
  Sk.builtin.type.prototype.tp$richcompare = function (a, b) {
    if (a.ob$type == Sk.builtin.type && this.$r && a.$r) {
      var c = this.$r();
      a = a.$r();
      return c.tp$richcompare(a, b);
    }
  };
  Sk.builtin.type.prototype.__format__ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__format__", arguments.length, 1, 2);
    return new Sk.builtin.str(a);
  };
  Sk.builtin.type.pythonFunctions = ["__format__"];
  Sk.abstr = {};
  Sk.abstr.typeName = function (a) {
    return void 0 !== a.tp$name ? a.tp$name : "<invalid type>";
  };
  Sk.abstr.binop_type_error = function (a, b, c) {
    a = Sk.abstr.typeName(a);
    b = Sk.abstr.typeName(b);
    throw new Sk.builtin.TypeError("unsupported operand type(s) for " + c + ": '" + a + "' and '" + b + "'");
  };
  Sk.abstr.unop_type_error = function (a, b) {
    a = Sk.abstr.typeName(a);
    throw new Sk.builtin.TypeError("bad operand type for unary " + { UAdd: "+", USub: "-", Invert: "~" }[b] + ": '" + a + "'");
  };
  Sk.abstr.boNameToSlotFuncLhs_ = function (a, b) {
    if (null !== a)
      switch (b) {
        case "Add":
          return a.nb$add ? a.nb$add : a.__add__;
        case "Sub":
          return a.nb$subtract ? a.nb$subtract : a.__sub__;
        case "Mult":
          return a.nb$multiply ? a.nb$multiply : a.__mul__;
        case "Div":
          return a.nb$divide ? a.nb$divide : a.__div__;
        case "FloorDiv":
          return a.nb$floor_divide ? a.nb$floor_divide : a.__floordiv__;
        case "Mod":
          return a.nb$remainder ? a.nb$remainder : a.__mod__;
        case "DivMod":
          return a.nb$divmod ? a.nb$divmod : a.__divmod__;
        case "Pow":
          return a.nb$power ? a.nb$power : a.__pow__;
        case "LShift":
          return a.nb$lshift ? a.nb$lshift : a.__lshift__;
        case "RShift":
          return a.nb$rshift ? a.nb$rshift : a.__rshift__;
        case "BitAnd":
          return a.nb$and ? a.nb$and : a.__and__;
        case "BitXor":
          return a.nb$xor ? a.nb$xor : a.__xor__;
        case "BitOr":
          return a.nb$or ? a.nb$or : a.__or__;
      }
  };
  Sk.abstr.boNameToSlotFuncRhs_ = function (a, b) {
    if (null !== a)
      switch (b) {
        case "Add":
          return a.nb$reflected_add ? a.nb$reflected_add : a.__radd__;
        case "Sub":
          return a.nb$reflected_subtract ? a.nb$reflected_subtract : a.__rsub__;
        case "Mult":
          return a.nb$reflected_multiply ? a.nb$reflected_multiply : a.__rmul__;
        case "Div":
          return a.nb$reflected_divide ? a.nb$reflected_divide : a.__rdiv__;
        case "FloorDiv":
          return a.nb$reflected_floor_divide ? a.nb$reflected_floor_divide : a.__rfloordiv__;
        case "Mod":
          return a.nb$reflected_remainder ? a.nb$reflected_remainder : a.__rmod__;
        case "DivMod":
          return a.nb$reflected_divmod ? a.nb$reflected_divmod : a.__rdivmod__;
        case "Pow":
          return a.nb$reflected_power ? a.nb$reflected_power : a.__rpow__;
        case "LShift":
          return a.nb$reflected_lshift ? a.nb$reflected_lshift : a.__rlshift__;
        case "RShift":
          return a.nb$reflected_rshift ? a.nb$reflected_rshift : a.__rrshift__;
        case "BitAnd":
          return a.nb$reflected_and ? a.nb$reflected_and : a.__rand__;
        case "BitXor":
          return a.nb$reflected_xor ? a.nb$reflected_xor : a.__rxor__;
        case "BitOr":
          return a.nb$reflected_or ? a.nb$reflected_or : a.__ror__;
      }
  };
  Sk.abstr.iboNameToSlotFunc_ = function (a, b) {
    switch (b) {
      case "Add":
        return a.nb$inplace_add ? a.nb$inplace_add : a.__iadd__;
      case "Sub":
        return a.nb$inplace_subtract ? a.nb$inplace_subtract : a.__isub__;
      case "Mult":
        return a.nb$inplace_multiply ? a.nb$inplace_multiply : a.__imul__;
      case "Div":
        return a.nb$inplace_divide ? a.nb$inplace_divide : a.__idiv__;
      case "FloorDiv":
        return a.nb$inplace_floor_divide ? a.nb$inplace_floor_divide : a.__ifloordiv__;
      case "Mod":
        return a.nb$inplace_remainder;
      case "Pow":
        return a.nb$inplace_power;
      case "LShift":
        return a.nb$inplace_lshift ? a.nb$inplace_lshift : a.__ilshift__;
      case "RShift":
        return a.nb$inplace_rshift ? a.nb$inplace_rshift : a.__irshift__;
      case "BitAnd":
        return a.nb$inplace_and;
      case "BitOr":
        return a.nb$inplace_or;
      case "BitXor":
        return a.nb$inplace_xor ? a.nb$inplace_xor : a.__ixor__;
    }
  };
  Sk.abstr.uoNameToSlotFunc_ = function (a, b) {
    if (null !== a)
      switch (b) {
        case "USub":
          return a.nb$negative ? a.nb$negative : a.__neg__;
        case "UAdd":
          return a.nb$positive ? a.nb$positive : a.__pos__;
        case "Invert":
          return a.nb$invert ? a.nb$invert : a.__invert__;
      }
  };
  Sk.abstr.binary_op_ = function (a, b, c) {
    var d = b.constructor.prototype instanceof a.constructor;
    if (d) {
      var e = Sk.abstr.boNameToSlotFuncRhs_(b, c);
      if (void 0 !== e && ((e = e.call ? e.call(b, a) : Sk.misceval.callsimArray(e, [b, a])), void 0 !== e && e !== Sk.builtin.NotImplemented.NotImplemented$)) return e;
    }
    e = Sk.abstr.boNameToSlotFuncLhs_(a, c);
    if (
      (void 0 !== e && ((e = e.call ? e.call(a, b) : Sk.misceval.callsimArray(e, [a, b])), void 0 !== e && e !== Sk.builtin.NotImplemented.NotImplemented$)) ||
      (!d && ((e = Sk.abstr.boNameToSlotFuncRhs_(b, c)), void 0 !== e && ((e = e.call ? e.call(b, a) : Sk.misceval.callsimArray(e, [b, a])), void 0 !== e && e !== Sk.builtin.NotImplemented.NotImplemented$)))
    )
      return e;
    Sk.abstr.binop_type_error(a, b, c);
  };
  Sk.abstr.binary_iop_ = function (a, b, c) {
    var d = Sk.abstr.iboNameToSlotFunc_(a, c);
    return void 0 !== d && ((d = d.call ? d.call(a, b) : Sk.misceval.callsimArray(d, [a, b])), void 0 !== d && d !== Sk.builtin.NotImplemented.NotImplemented$) ? d : Sk.abstr.binary_op_(a, b, c);
  };
  Sk.abstr.unary_op_ = function (a, b) {
    var c = Sk.abstr.uoNameToSlotFunc_(a, b);
    if (void 0 !== c && ((c = c.call ? c.call(a) : Sk.misceval.callsimArray(c, [a])), void 0 !== c)) return c;
    Sk.abstr.unop_type_error(a, b);
  };
  Sk.abstr.numOpAndPromote = function (a, b, c) {
    if (null !== a && null !== b) {
      if ("number" === typeof a && "number" === typeof b) return (c = c(a, b)), (c > Sk.builtin.int_.threshold$ || c < -Sk.builtin.int_.threshold$) && Math.floor(c) === c ? [Sk.builtin.lng.fromInt$(a), Sk.builtin.lng.fromInt$(b)] : c;
      if (void 0 === a || void 0 === b) throw new Sk.builtin.NameError("Undefined variable in expression");
      if (a.constructor === Sk.builtin.lng) return [a, b];
      if ((a.constructor !== Sk.builtin.int_ && a.constructor !== Sk.builtin.float_) || b.constructor !== Sk.builtin.complex) {
        if (a.constructor === Sk.builtin.int_ || a.constructor === Sk.builtin.float_) return [a, b];
        if ("number" === typeof a) return (a = Sk.builtin.assk$(a)), [a, b];
      } else return (a = new Sk.builtin.complex(a)), [a, b];
    }
  };
  Sk.abstr.boNumPromote_ = {
    Add: function (a, b) {
      return a + b;
    },
    Sub: function (a, b) {
      return a - b;
    },
    Mult: function (a, b) {
      return a * b;
    },
    Mod: function (a, b) {
      if (0 === b) throw new Sk.builtin.ZeroDivisionError("division or modulo by zero");
      a %= b;
      return 0 > a * b ? a + b : a;
    },
    Div: function (a, b) {
      if (0 === b) throw new Sk.builtin.ZeroDivisionError("division or modulo by zero");
      return a / b;
    },
    FloorDiv: function (a, b) {
      if (0 === b) throw new Sk.builtin.ZeroDivisionError("division or modulo by zero");
      return Math.floor(a / b);
    },
    Pow: Math.pow,
    BitAnd: function (a, b) {
      a &= b;
      0 > a && (a += 4294967296);
      return a;
    },
    BitOr: function (a, b) {
      a |= b;
      0 > a && (a += 4294967296);
      return a;
    },
    BitXor: function (a, b) {
      a ^= b;
      0 > a && (a += 4294967296);
      return a;
    },
    LShift: function (a, b) {
      if (0 > b) throw new Sk.builtin.ValueError("negative shift count");
      var c = a << b;
      return c > a ? c : a * Math.pow(2, b);
    },
    RShift: function (a, b) {
      if (0 > b) throw new Sk.builtin.ValueError("negative shift count");
      var c = a >> b;
      0 < a && 0 > c && (c &= Math.pow(2, 32 - b) - 1);
      return c;
    },
  };
  Sk.abstr.numberBinOp = function (a, b, c) {
    var d = Sk.abstr.boNumPromote_[c];
    if (void 0 !== d) {
      d = Sk.abstr.numOpAndPromote(a, b, d);
      if ("number" === typeof d) return d;
      if ((void 0 !== d && d.constructor === Sk.builtin.int_) || (void 0 !== d && d.constructor === Sk.builtin.float_) || (void 0 !== d && d.constructor === Sk.builtin.lng)) return d;
      void 0 !== d && ((a = d[0]), (b = d[1]));
    }
    return Sk.abstr.binary_op_(a, b, c);
  };
  Sk.exportSymbol("Sk.abstr.numberBinOp", Sk.abstr.numberBinOp);
  Sk.abstr.numberInplaceBinOp = function (a, b, c) {
    var d = Sk.abstr.boNumPromote_[c];
    if (void 0 !== d) {
      d = Sk.abstr.numOpAndPromote(a, b, d);
      if ("number" === typeof d) return d;
      if ((void 0 !== d && d.constructor === Sk.builtin.int_) || (void 0 !== d && d.constructor === Sk.builtin.float_) || (void 0 !== d && d.constructor === Sk.builtin.lng)) return d;
      void 0 !== d && ((a = d[0]), (b = d[1]));
    }
    return Sk.abstr.binary_iop_(a, b, c);
  };
  Sk.exportSymbol("Sk.abstr.numberInplaceBinOp", Sk.abstr.numberInplaceBinOp);
  Sk.abstr.numberUnaryOp = function (a, b) {
    if ("Not" === b) return Sk.misceval.isTrue(a) ? Sk.builtin.bool.false$ : Sk.builtin.bool.true$;
    if (a instanceof Sk.builtin.bool) {
      var c = Sk.builtin.asnum$(a);
      if ("USub" === b) return new Sk.builtin.int_(-c);
      if ("UAdd" === b) return new Sk.builtin.int_(c);
      if ("Invert" === b) return new Sk.builtin.int_(~c);
    } else {
      if ("USub" === b && a.nb$negative) return a.nb$negative();
      if ("UAdd" === b && a.nb$positive) return a.nb$positive();
      if ("Invert" === b && a.nb$invert) return a.nb$invert();
    }
    return Sk.abstr.unary_op_(a, b);
  };
  Sk.exportSymbol("Sk.abstr.numberUnaryOp", Sk.abstr.numberUnaryOp);
  Sk.abstr.fixSeqIndex_ = function (a, b) {
    b = Sk.builtin.asnum$(b);
    0 > b && a.sq$length && (b += a.sq$length());
    return b;
  };
  Sk.abstr.sequenceContains = function (a, b, c) {
    if (a.sq$contains) return a.sq$contains(b);
    var d = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$contains);
    if (null != d) return Sk.misceval.isTrue(Sk.misceval.callsimArray(d, [a, b]));
    if (!Sk.builtin.checkIterable(a)) throw ((c = Sk.abstr.typeName(a)), new Sk.builtin.TypeError("argument of type '" + c + "' is not iterable"));
    a = Sk.misceval.iterFor(
      Sk.abstr.iter(a),
      function (a) {
        return Sk.misceval.richCompareBool(a, b, "Eq") ? new Sk.misceval.Break(!0) : !1;
      },
      !1
    );
    return c ? a : Sk.misceval.retryOptionalSuspensionOrThrow(a);
  };
  Sk.abstr.sequenceConcat = function (a, b) {
    if (a.sq$concat) return a.sq$concat(b);
    a = Sk.abstr.typeName(a);
    throw new Sk.builtin.TypeError("'" + a + "' object can't be concatenated");
  };
  Sk.abstr.sequenceGetIndexOf = function (a, b) {
    if (a.index) return Sk.misceval.callsimArray(a.index, [a, b]);
    if (Sk.builtin.checkIterable(a)) {
      var c = 0;
      var d = Sk.abstr.iter(a);
      for (a = d.tp$iternext(); void 0 !== a; a = d.tp$iternext()) {
        if (Sk.misceval.richCompareBool(b, a, "Eq")) return new Sk.builtin.int_(c);
        c += 1;
      }
      throw new Sk.builtin.ValueError("sequence.index(x): x not in sequence");
    }
    b = Sk.abstr.typeName(a);
    throw new Sk.builtin.TypeError("argument of type '" + b + "' is not iterable");
  };
  Sk.abstr.sequenceGetCountOf = function (a, b) {
    if (a.count) return Sk.misceval.callsimArray(a.count, [a, b]);
    if (Sk.builtin.checkIterable(a)) {
      var c = 0;
      var d = Sk.abstr.iter(a);
      for (a = d.tp$iternext(); void 0 !== a; a = d.tp$iternext()) Sk.misceval.richCompareBool(b, a, "Eq") && (c += 1);
      return new Sk.builtin.int_(c);
    }
    b = Sk.abstr.typeName(a);
    throw new Sk.builtin.TypeError("argument of type '" + b + "' is not iterable");
  };
  Sk.abstr.sequenceGetItem = function (a, b, c) {
    if (a.mp$subscript) return a.mp$subscript(b);
    a = Sk.abstr.typeName(a);
    throw new Sk.builtin.TypeError("'" + a + "' object is unsubscriptable");
  };
  Sk.abstr.sequenceSetItem = function (a, b, c, d) {
    if (a.mp$ass_subscript) return a.mp$ass_subscript(b, c);
    a = Sk.abstr.typeName(a);
    throw new Sk.builtin.TypeError("'" + a + "' object does not support item assignment");
  };
  Sk.abstr.sequenceDelItem = function (a, b) {
    if (a.sq$del_item) (b = Sk.abstr.fixSeqIndex_(a, b)), a.sq$del_item(b);
    else throw ((a = Sk.abstr.typeName(a)), new Sk.builtin.TypeError("'" + a + "' object does not support item deletion"));
  };
  Sk.abstr.sequenceRepeat = function (a, b, c) {
    c = Sk.builtin.asnum$(c);
    if (void 0 === Sk.misceval.asIndex(c)) throw ((a = Sk.abstr.typeName(c)), new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + a + "'"));
    return a.call(b, c);
  };
  Sk.abstr.sequenceGetSlice = function (a, b, c) {
    if (a.sq$slice) return (b = Sk.abstr.fixSeqIndex_(a, b)), (c = Sk.abstr.fixSeqIndex_(a, c)), a.sq$slice(b, c);
    if (a.mp$subscript) return a.mp$subscript(new Sk.builtin.slice(b, c));
    a = Sk.abstr.typeName(a);
    throw new Sk.builtin.TypeError("'" + a + "' object is unsliceable");
  };
  Sk.abstr.sequenceDelSlice = function (a, b, c) {
    if (a.sq$del_slice) (b = Sk.abstr.fixSeqIndex_(a, b)), (c = Sk.abstr.fixSeqIndex_(a, c)), a.sq$del_slice(b, c);
    else throw ((a = Sk.abstr.typeName(a)), new Sk.builtin.TypeError("'" + a + "' doesn't support slice deletion"));
  };
  Sk.abstr.sequenceSetSlice = function (a, b, c, d) {
    if (a.sq$ass_slice) (b = Sk.abstr.fixSeqIndex_(a, b)), (c = Sk.abstr.fixSeqIndex_(a, c)), a.sq$ass_slice(b, c, d);
    else if (a.mp$ass_subscript) a.mp$ass_subscript(new Sk.builtin.slice(b, c), d);
    else throw ((a = Sk.abstr.typeName(a)), new Sk.builtin.TypeError("'" + a + "' object doesn't support slice assignment"));
  };
  Sk.abstr.sequenceUnpack = function (a, b) {
    var c = [],
      d;
    if (!Sk.builtin.checkIterable(a)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not iterable");
    a = Sk.abstr.iter(a);
    for (d = a.tp$iternext(); void 0 !== d && c.length < b; d = a.tp$iternext()) c.push(d);
    if (c.length < b) throw new Sk.builtin.ValueError("need more than " + c.length + " values to unpack");
    if (void 0 !== d) throw new Sk.builtin.ValueError("too many values to unpack");
    return c;
  };
  Sk.abstr.objectFormat = function (a, b) {
    var c = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$format);
    if (null == c) throw new Sk.builtin.TypeError("Type " + Sk.abstr.typeName(a) + " doesn't define __format__");
    a = Sk.misceval.callsimArray(c, [a, b]);
    if (!Sk.builtin.checkString(a)) throw new Sk.builtin.TypeError("__format__ must return a str, not " + Sk.abstr.typeName(a));
    return a;
  };
  Sk.abstr.objectAdd = function (a, b) {
    if (a.nb$add) return a.nb$add(b);
    a = Sk.abstr.typeName(a);
    b = Sk.abstr.typeName(b);
    throw new Sk.builtin.TypeError("unsupported operand type(s) for +: '" + a + "' and '" + b + "'");
  };
  Sk.abstr.objectNegative = function (a) {
    var b = Sk.builtin.asnum$(a);
    a instanceof Sk.builtin.bool && (a = new Sk.builtin.int_(b));
    if (a.nb$negative) return a.nb$negative();
    a = Sk.abstr.typeName(a);
    throw new Sk.builtin.TypeError("bad operand type for unary -: '" + a + "'");
  };
  Sk.abstr.objectPositive = function (a) {
    var b = Sk.abstr.typeName(a),
      c = Sk.builtin.asnum$(a);
    a instanceof Sk.builtin.bool && (a = new Sk.builtin.int_(c));
    if (a.nb$negative) return a.nb$positive();
    throw new Sk.builtin.TypeError("bad operand type for unary +: '" + b + "'");
  };
  Sk.abstr.objectDelItem = function (a, b) {
    if (null !== a) {
      if (a.mp$del_subscript) {
        a.mp$del_subscript(b);
        return;
      }
      if (a.sq$ass_item) {
        var c = Sk.misceval.asIndex(b);
        if (void 0 === c) throw ((a = Sk.abstr.typeName(b)), new Sk.builtin.TypeError("sequence index must be integer, not '" + a + "'"));
        Sk.abstr.sequenceDelItem(a, c);
        return;
      }
    }
    a = Sk.abstr.typeName(a);
    throw new Sk.builtin.TypeError("'" + a + "' object does not support item deletion");
  };
  Sk.exportSymbol("Sk.abstr.objectDelItem", Sk.abstr.objectDelItem);
  Sk.abstr.objectGetItem = function (a, b, c) {
    if (null !== a) {
      if (a.tp$getitem) return a.tp$getitem(b, c);
      if (a.mp$subscript) return a.mp$subscript(b, c);
      if (Sk.misceval.isIndex(b) && a.sq$item) return Sk.abstr.sequenceGetItem(a, Sk.misceval.asIndex(b), c);
    }
    a = Sk.abstr.typeName(a);
    throw new Sk.builtin.TypeError("'" + a + "' does not support indexing");
  };
  Sk.exportSymbol("Sk.abstr.objectGetItem", Sk.abstr.objectGetItem);
  Sk.abstr.objectSetItem = function (a, b, c, d) {
    if (null !== a) {
      if (a.tp$setitem) return a.tp$setitem(b, c, d);
      if (a.mp$ass_subscript) return a.mp$ass_subscript(b, c, d);
      if (Sk.misceval.isIndex(b) && a.sq$ass_item) return Sk.abstr.sequenceSetItem(a, Sk.misceval.asIndex(b), c, d);
    }
    a = Sk.abstr.typeName(a);
    throw new Sk.builtin.TypeError("'" + a + "' does not support item assignment");
  };
  Sk.exportSymbol("Sk.abstr.objectSetItem", Sk.abstr.objectSetItem);
  Sk.abstr.gattr = function (a, b, c) {
    var d,
      e = Sk.abstr.typeName(a),
      f = b.$jsstr();
    if (null === a) throw new Sk.builtin.AttributeError("'" + e + "' object has no attribute '" + f + "'");
    void 0 !== a.tp$getattr && (d = a.tp$getattr(b, c));
    d = Sk.misceval.chain(d, function (a) {
      if (void 0 === a) throw new Sk.builtin.AttributeError("'" + e + "' object has no attribute '" + f + "'");
      return a;
    });
    return c ? d : Sk.misceval.retryOptionalSuspensionOrThrow(d);
  };
  Sk.exportSymbol("Sk.abstr.gattr", Sk.abstr.gattr);
  Sk.abstr.sattr = function (a, b, c, d) {
    var e = Sk.abstr.typeName(a),
      f = b.$jsstr();
    if (null === a) throw new Sk.builtin.AttributeError("'" + e + "' object has no attribute '" + f + "'");
    if (void 0 !== a.tp$setattr) return a.tp$setattr(b, c, d);
    throw new Sk.builtin.AttributeError("'" + e + "' object has no attribute '" + f + "'");
  };
  Sk.exportSymbol("Sk.abstr.sattr", Sk.abstr.sattr);
  Sk.abstr.iternext = function (a, b) {
    return a.tp$iternext(b);
  };
  Sk.exportSymbol("Sk.abstr.iternext", Sk.abstr.iternext);
  Sk.abstr.iter = function (a) {
    var b,
      c = function (a) {
        this.idx = 0;
        this.myobj = a;
        this.getitem = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$getitem);
        this.tp$iternext = function () {
          try {
            var a = Sk.misceval.callsimArray(this.getitem, [this.myobj, Sk.ffi.remapToPy(this.idx)]);
          } catch (g) {
            if (g instanceof Sk.builtin.IndexError || g instanceof Sk.builtin.StopIteration) return;
            throw g;
          }
          this.idx++;
          return a;
        };
      };
    if (a.tp$getattr && (b = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$iter))) {
      var d = Sk.misceval.callsimArray(b, [a]);
      if (d.tp$iternext) return d;
    }
    if (a.tp$iter)
      try {
        if (((d = a.tp$iter()), d.tp$iternext)) return d;
      } catch (e) {}
    if (Sk.abstr.lookupSpecial(a, Sk.builtin.str.$getitem)) return new c(a);
    throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not iterable");
  };
  Sk.exportSymbol("Sk.abstr.iter", Sk.abstr.iter);
  Sk.abstr.lookupSpecial = function (a, b) {
    if (a.ob$type) a = a.ob$type;
    else return null;
    return Sk.builtin.type.typeLookup(a, b);
  };
  Sk.exportSymbol("Sk.abstr.lookupSpecial", Sk.abstr.lookupSpecial);
  Sk.abstr.markUnhashable = function (a) {
    a = a.prototype;
    a.__hash__ = Sk.builtin.none.none$;
    a.tp$hash = Sk.builtin.none.none$;
  };
  Sk.abstr.inherits = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.superClass_ = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
  };
  Sk.abstr.setUpInheritance = function (a, b, c) {
    Sk.abstr.inherits(b, c);
    b.prototype.tp$base = c;
    b.prototype.tp$name = a;
    b.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj(a, b);
  };
  Sk.abstr.superConstructor = function (a, b, c) {
    var d = Array.prototype.slice.call(arguments, 2);
    a.prototype.tp$base.apply(b, d);
  };
  Sk.builtin.object = function () {
    return this instanceof Sk.builtin.object ? this : new Sk.builtin.object();
  };
  Sk.builtin.object.prototype.__init__ = function () {
    return Sk.builtin.none.none$;
  };
  Sk.builtin.object.prototype.__init__.co_kwargs = 1;
  Sk.builtin._tryGetSubscript = function (a, b) {
    try {
      return a.mp$subscript(b);
    } catch (c) {}
  };
  Sk.exportSymbol("Sk.builtin._tryGetSubscript", Sk.builtin._tryGetSubscript);
  Sk.builtin.object.prototype.GenericGetAttr = function (a, b) {
    var c,
      d,
      e = a.$jsstr();
    var f = this.ob$type;
    Sk.asserts.assert(void 0 !== f, "object has no ob$type!");
    if ((d = this.$d || this.constructor.$d)) if ((d.mp$lookup ? (c = d.mp$lookup(a)) : d.mp$subscript ? (c = Sk.builtin._tryGetSubscript(d, a)) : "object" === typeof d && (c = d[e]), void 0 !== c)) return c;
    d = Sk.builtin.type.typeLookup(f, a);
    if (void 0 !== d && null !== d && (c = d.tp$descr_get)) return c.call(d, this, this.ob$type, b);
    if (void 0 !== d) return d;
    d = Sk.builtin.type.typeLookup(f, Sk.builtin.str.$getattr);
    if (void 0 !== d && null !== d) {
      var g = (c = d.tp$descr_get) ? c.call(d, this, this.ob$type) : d;
      c = Sk.misceval.tryCatch(
        function () {
          return Sk.misceval.callsimOrSuspendArray(g, [a]);
        },
        function (a) {
          if (!(a instanceof Sk.builtin.AttributeError)) throw a;
        }
      );
      return b ? c : Sk.misceval.retryOptionalSuspensionOrThrow(c);
    }
  };
  Sk.exportSymbol("Sk.builtin.object.prototype.GenericGetAttr", Sk.builtin.object.prototype.GenericGetAttr);
  Sk.builtin.object.prototype.GenericPythonGetAttr = function (a, b) {
    a = Sk.builtin.object.prototype.GenericGetAttr.call(a, b, !0);
    if (void 0 === a) throw new Sk.builtin.AttributeError(b);
    return a;
  };
  Sk.exportSymbol("Sk.builtin.object.prototype.GenericPythonGetAttr", Sk.builtin.object.prototype.GenericPythonGetAttr);
  Sk.builtin.object.prototype.GenericSetAttr = function (a, b, c) {
    var d = Sk.abstr.typeName(this),
      e = a.$jsstr(),
      f = this.ob$type,
      g;
    Sk.asserts.assert(void 0 !== f, "object has no ob$type!");
    var h = this.$d || this.constructor.$d;
    if ("__class__" == e) {
      if (void 0 === b.tp$mro || void 0 === b.tp$name || void 0 === b.tp$name) throw new Sk.builtin.TypeError("attempted to assign non-class to __class__");
      this.ob$type = b;
      this.tp$name = b.tp$name;
    } else {
      f = Sk.builtin.type.typeLookup(f, a);
      if (void 0 !== f && null !== f && (g = f.tp$descr_set)) return g.call(f, this, b, c);
      if (h.mp$ass_subscript) {
        if (this instanceof Sk.builtin.object && !this.ob$type.sk$klass && void 0 === h.mp$lookup(a)) throw new Sk.builtin.AttributeError("'" + d + "' object has no attribute '" + Sk.unfixReserved(e) + "'");
        h.mp$ass_subscript(a, b);
      } else "object" === typeof h && (h[e] = b);
    }
  };
  Sk.exportSymbol("Sk.builtin.object.prototype.GenericSetAttr", Sk.builtin.object.prototype.GenericSetAttr);
  Sk.builtin.object.prototype.GenericPythonSetAttr = function (a, b, c) {
    return Sk.builtin.object.prototype.GenericSetAttr.call(a, b, c, !0);
  };
  Sk.exportSymbol("Sk.builtin.object.prototype.GenericPythonSetAttr", Sk.builtin.object.prototype.GenericPythonSetAttr);
  Sk.builtin.object.prototype.HashNotImplemented = function () {
    throw new Sk.builtin.TypeError("unhashable type: '" + Sk.abstr.typeName(this) + "'");
  };
  Sk.builtin.object.prototype.tp$getattr = Sk.builtin.object.prototype.GenericGetAttr;
  Sk.builtin.object.prototype.tp$setattr = Sk.builtin.object.prototype.GenericSetAttr;
  Sk.builtin.object.prototype.__getattribute__ = Sk.builtin.object.prototype.GenericPythonGetAttr;
  Sk.builtin.object.prototype.__setattr__ = Sk.builtin.object.prototype.GenericPythonSetAttr;
  Sk.builtin.object.prototype.tp$name = "object";
  Sk.builtin.object.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj("object", Sk.builtin.object);
  Sk.builtin.object.prototype.ob$type.sk$klass = void 0;
  Sk.builtin.object.prototype.tp$descr_set = void 0;
  Sk.builtin.object.prototype.__new__ = function (a) {
    Sk.builtin.pyCheckArgsLen("__new__", arguments.length, 1, 1, !1, !1);
    return new a([], []);
  };
  Sk.builtin.object.prototype.__repr__ = function (a) {
    Sk.builtin.pyCheckArgsLen("__repr__", arguments.length, 0, 0, !1, !0);
    return a.$r();
  };
  Sk.builtin.object.prototype.__format__ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__format__", arguments.length, 2, 2);
    if (Sk.builtin.checkString(b)) {
      var c = Sk.ffi.remapToJs(b);
      if ("" !== c) throw new Sk.builtin.NotImplementedError("format spec is not yet implemented");
    } else {
      if (Sk.__future__.exceptions) throw new Sk.builtin.TypeError("format() argument 2 must be str, not " + Sk.abstr.typeName(b));
      throw new Sk.builtin.TypeError("format expects arg 2 to be string or unicode, not " + Sk.abstr.typeName(b));
    }
    return new Sk.builtin.str(a);
  };
  Sk.builtin.object.prototype.__str__ = function (a) {
    Sk.builtin.pyCheckArgsLen("__str__", arguments.length, 0, 0, !1, !0);
    return a.$r();
  };
  Sk.builtin.object.prototype.__hash__ = function (a) {
    Sk.builtin.pyCheckArgsLen("__hash__", arguments.length, 0, 0, !1, !0);
    return a.tp$hash();
  };
  Sk.builtin.object.prototype.__eq__ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__eq__", arguments.length, 1, 1, !1, !0);
    return a.ob$eq(b);
  };
  Sk.builtin.object.prototype.__ne__ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__ne__", arguments.length, 1, 1, !1, !0);
    return a.ob$ne(b);
  };
  Sk.builtin.object.prototype.__lt__ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__lt__", arguments.length, 1, 1, !1, !0);
    return a.ob$lt(b);
  };
  Sk.builtin.object.prototype.__le__ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__le__", arguments.length, 1, 1, !1, !0);
    return a.ob$le(b);
  };
  Sk.builtin.object.prototype.__gt__ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__gt__", arguments.length, 1, 1, !1, !0);
    return a.ob$gt(b);
  };
  Sk.builtin.object.prototype.__ge__ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__ge__", arguments.length, 1, 1, !1, !0);
    return a.ob$ge(b);
  };
  Sk.builtin.object.prototype.$r = function () {
    return new Sk.builtin.str("<object>");
  };
  Sk.builtin.hashCount = 1;
  Sk.builtin.idCount = 1;
  Sk.builtin.object.prototype.tp$hash = function () {
    this.$savedHash_ || (this.$savedHash_ = new Sk.builtin.int_(Sk.builtin.hashCount++));
    return this.$savedHash_;
  };
  Sk.builtin.object.prototype.ob$eq = function (a) {
    return this === a ? Sk.builtin.bool.true$ : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.object.prototype.ob$ne = function (a) {
    return this === a ? Sk.builtin.bool.false$ : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.object.prototype.ob$lt = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.object.prototype.ob$le = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.object.prototype.ob$gt = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.object.prototype.ob$ge = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.object.pythonFunctions = "__repr__ __str__ __hash__ __eq__ __ne__ __lt__ __le__ __gt__ __ge__ __getattribute__ __setattr__ __format__".split(" ");
  Sk.builtin.none = function () {
    this.v = null;
  };
  Sk.abstr.setUpInheritance("NoneType", Sk.builtin.none, Sk.builtin.object);
  Sk.builtin.none.prototype.$r = function () {
    return new Sk.builtin.str("None");
  };
  Sk.builtin.none.prototype.tp$hash = function () {
    return new Sk.builtin.int_(0);
  };
  Sk.builtin.none.none$ = new Sk.builtin.none();
  Sk.builtin.NotImplemented = function () {};
  Sk.abstr.setUpInheritance("NotImplementedType", Sk.builtin.NotImplemented, Sk.builtin.object);
  Sk.builtin.NotImplemented.prototype.$r = function () {
    return new Sk.builtin.str("NotImplemented");
  };
  Sk.builtin.NotImplemented.NotImplemented$ = new Sk.builtin.NotImplemented();
  Sk.exportSymbol("Sk.builtin.none", Sk.builtin.none);
  Sk.exportSymbol("Sk.builtin.NotImplemented", Sk.builtin.NotImplemented);
  Sk.builtin.pyCheckArgs = function (a, b, c, d, e, f) {
    b = b.length;
    void 0 === d && (d = Infinity);
    e && --b;
    f && --b;
    if (b < c || b > d) throw new Sk.builtin.TypeError((c === d ? a + "() takes exactly " + c + " arguments" : b < c ? a + "() takes at least " + c + " arguments" : a + "() takes at most " + d + " arguments") + (" (" + b + " given)"));
  };
  Sk.exportSymbol("Sk.builtin.pyCheckArgs", Sk.builtin.pyCheckArgs);
  Sk.builtin.pyCheckArgsLen = function (a, b, c, d, e, f) {
    void 0 === d && (d = Infinity);
    e && --b;
    f && --b;
    if (b < c || b > d) throw new Sk.builtin.TypeError((c === d ? a + "() takes exactly " + c + " arguments" : b < c ? a + "() takes at least " + c + " arguments" : a + "() takes at most " + d + " arguments") + (" (" + b + " given)"));
  };
  Sk.builtin.pyCheckType = function (a, b, c) {
    if (!c) throw new Sk.builtin.TypeError(a + " must be a " + b);
  };
  Sk.exportSymbol("Sk.builtin.pyCheckType", Sk.builtin.pyCheckType);
  Sk.builtin.checkSequence = function (a) {
    return null !== a && void 0 !== a.mp$subscript;
  };
  Sk.exportSymbol("Sk.builtin.checkSequence", Sk.builtin.checkSequence);
  Sk.builtin.checkIterable = function (a) {
    var b = !1;
    if (null !== a)
      try {
        return (b = Sk.abstr.iter(a)) ? !0 : !1;
      } catch (c) {
        if (c instanceof Sk.builtin.TypeError) return !1;
        throw c;
      }
    return b;
  };
  Sk.exportSymbol("Sk.builtin.checkIterable", Sk.builtin.checkIterable);
  Sk.builtin.checkCallable = function (a) {
    return "function" === typeof a || a instanceof Sk.builtin.func || a instanceof Sk.builtin.method || void 0 !== Sk.abstr.lookupSpecial(a, Sk.builtin.str.$call) ? !0 : !1;
  };
  Sk.builtin.checkNumber = function (a) {
    return null !== a && ("number" === typeof a || a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_ || a instanceof Sk.builtin.lng);
  };
  Sk.exportSymbol("Sk.builtin.checkNumber", Sk.builtin.checkNumber);
  Sk.builtin.checkComplex = function (a) {
    return Sk.builtin.complex._complex_check(a);
  };
  Sk.exportSymbol("Sk.builtin.checkComplex", Sk.builtin.checkComplex);
  Sk.builtin.checkInt = function (a) {
    return null !== a && (("number" === typeof a && a === (a | 0)) || a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng);
  };
  Sk.exportSymbol("Sk.builtin.checkInt", Sk.builtin.checkInt);
  Sk.builtin.checkFloat = function (a) {
    return null !== a && a instanceof Sk.builtin.float_;
  };
  Sk.exportSymbol("Sk.builtin.checkFloat", Sk.builtin.checkFloat);
  Sk.builtin.checkString = function (a) {
    return null !== a && a.__class__ == Sk.builtin.str;
  };
  Sk.exportSymbol("Sk.builtin.checkString", Sk.builtin.checkString);
  Sk.builtin.checkClass = function (a) {
    return null !== a && a.sk$type;
  };
  Sk.exportSymbol("Sk.builtin.checkClass", Sk.builtin.checkClass);
  Sk.builtin.checkBool = function (a) {
    return a instanceof Sk.builtin.bool;
  };
  Sk.exportSymbol("Sk.builtin.checkBool", Sk.builtin.checkBool);
  Sk.builtin.checkNone = function (a) {
    return a instanceof Sk.builtin.none;
  };
  Sk.exportSymbol("Sk.builtin.checkNone", Sk.builtin.checkNone);
  Sk.builtin.checkFunction = function (a) {
    return null !== a && void 0 !== a.tp$call;
  };
  Sk.exportSymbol("Sk.builtin.checkFunction", Sk.builtin.checkFunction);
  Sk.builtin.func = function (a, b, c, d) {
    if (!(this instanceof Sk.builtin.func)) throw Error("builtin func should be called as a class with `new`");
    var e;
    this.func_code = a;
    this.func_globals = b || null;
    if (void 0 !== d) for (e in d) c[e] = d[e];
    this.$d = { __name__: a.co_name, __class__: Sk.builtin.func };
    this.func_closure = c;
    this.tp$name = (this.func_code && this.func_code.co_name && this.func_code.co_name.v) || this.func_code.name || "<native JS>";
    return this;
  };
  Sk.abstr.setUpInheritance("function", Sk.builtin.func, Sk.builtin.object);
  Sk.exportSymbol("Sk.builtin.func", Sk.builtin.func);
  Sk.builtin.func.prototype.tp$name = "function";
  Sk.builtin.func.prototype.tp$descr_get = function (a, b) {
    Sk.asserts.assert(!(void 0 === a && void 0 === b));
    return b && b.tp$name in Sk.builtin && Sk.builtin[b.tp$name] === b ? new Sk.builtin.method(this, a, b, !0) : new Sk.builtin.method(this, a, b);
  };
  Sk.builtin.func.pythonFunctions = ["__get__"];
  Sk.builtin.func.prototype.__get__ = function (a, b, c) {
    Sk.builtin.pyCheckArgsLen("__get__", arguments.length, 1, 2, !1, !0);
    if (b === Sk.builtin.none.none$ && c === Sk.builtin.none.none$) throw new Sk.builtin.TypeError("__get__(None, None) is invalid");
    return a.tp$descr_get(b, c);
  };
  Sk.builtin.func.prototype.tp$getname = function () {
    return (this.func_code && this.func_code.co_name && this.func_code.co_name.v) || this.func_code.name || "<native JS>";
  };
  Sk.builtin.func.prototype.tp$call = function (a, b) {
    var c,
      d,
      e = this.func_code.co_varnames || [],
      f = this.func_code.$defaults || [],
      g = [],
      h = this.func_code.co_kwargs,
      k = a.length,
      l = [],
      m = e.length - k > f.length ? f.length : e.length - k,
      n = e.length - f.length;
    if (this.func_code.no_kw && b) throw new Sk.builtin.TypeError(this.tp$getname() + "() takes no keyword arguments");
    if (b)
      for (c = 0; c < b.length; c += 2)
        if (e && -1 !== (d = e.indexOf(b[c]))) {
          if (d < k) {
            a = this.tp$getname();
            if (a in Sk.builtins && this === Sk.builtins[a]) throw new Sk.builtin.TypeError("Argument given by name ('" + b[c] + "') and position (" + (d + 1) + ")");
            throw new Sk.builtin.TypeError(a + "() got multiple values for keyword argument '" + b[c] + "'");
          }
          l[d] = b[c + 1];
        } else if (h) g.push(new Sk.builtin.str(b[c])), g.push(b[c + 1]);
        else {
          a = this.tp$getname();
          if (a in Sk.builtins && this === Sk.builtins[a]) throw new Sk.builtin.TypeError("'" + b[c] + "' is an invalid keyword argument for this function");
          throw new Sk.builtin.TypeError(a + "() got an unexpected keyword argument '" + b[c] + "'");
        }
    if (m <= f.length) for (c = f.length - m; c < f.length; c++) l[n + c] || (l[n + c] = f[c]);
    for (c = 0; c < l.length; c++) l[c] && (a[c] = l[c]);
    if (b && k < e.length - f.length)
      for (c = k; c < e.length - f.length; c++)
        if (-1 === b.indexOf(e[c]))
          throw new Sk.builtin.TypeError(
            this.tp$getname() +
              "() takes atleast " +
              (e.length - f.length) +
              " arguments (" +
              (k +
                l.filter(function (a) {
                  return a;
                }).length) +
              " given)"
          );
    if (this.func_closure) {
      if (e) for (c = a.length; c < e.length; c++) a.push(void 0);
      a.push(this.func_closure);
    }
    h && a.unshift(g);
    return this.func_code.apply(this.func_globals, a);
  };
  Sk.builtin.func.prototype.$r = function () {
    var a = this.tp$getname();
    return a in Sk.builtins && this === Sk.builtins[a] ? new Sk.builtin.str("<built-in function " + a + ">") : new Sk.builtin.str("<function " + a + ">");
  };
  Sk.builtin.range = function (a, b, c) {
    var d = [],
      e;
    Sk.builtin.pyCheckArgsLen("range", arguments.length, 1, 3);
    Sk.builtin.pyCheckType("start", "integer", Sk.builtin.checkInt(a));
    void 0 !== b && Sk.builtin.pyCheckType("stop", "integer", Sk.builtin.checkInt(b));
    void 0 !== c && Sk.builtin.pyCheckType("step", "integer", Sk.builtin.checkInt(c));
    a = Sk.builtin.asnum$(a);
    b = Sk.builtin.asnum$(b);
    c = Sk.builtin.asnum$(c);
    void 0 === b && void 0 === c ? ((b = a), (a = 0), (c = 1)) : void 0 === c && (c = 1);
    if (0 === c) throw new Sk.builtin.ValueError("range() step argument must not be zero");
    if (0 < c) for (e = a; e < b; e += c) d.push(new Sk.builtin.int_(e));
    else for (e = a; e > b; e += c) d.push(new Sk.builtin.int_(e));
    return new Sk.builtin.list(d);
  };
  Sk.builtin.asnum$ = function (a) {
    return void 0 === a || null === a
      ? a
      : a instanceof Sk.builtin.none
      ? null
      : a instanceof Sk.builtin.bool
      ? a.v
        ? 1
        : 0
      : "number" === typeof a
      ? a
      : "string" === typeof a
      ? a
      : a instanceof Sk.builtin.int_
      ? a.v
      : a instanceof Sk.builtin.float_
      ? a.v
      : a instanceof Sk.builtin.lng
      ? a.cantBeInt()
        ? a.str$(10, !0)
        : a.toInt$()
      : a.constructor === Sk.builtin.biginteger
      ? 0 < a.trueCompare(new Sk.builtin.biginteger(Sk.builtin.int_.threshold$)) || 0 > a.trueCompare(new Sk.builtin.biginteger(-Sk.builtin.int_.threshold$))
        ? a.toString()
        : a.intValue()
      : a;
  };
  Sk.exportSymbol("Sk.builtin.asnum$", Sk.builtin.asnum$);
  Sk.builtin.assk$ = function (a) {
    return 0 === a % 1 ? new Sk.builtin.int_(a) : new Sk.builtin.float_(a);
  };
  Sk.exportSymbol("Sk.builtin.assk$", Sk.builtin.assk$);
  Sk.builtin.asnum$nofloat = function (a) {
    if (void 0 === a || null === a) return a;
    if (a.constructor === Sk.builtin.none) return null;
    if (a.constructor === Sk.builtin.bool) return a.v ? 1 : 0;
    "number" === typeof a && (a = a.toString());
    a.constructor === Sk.builtin.int_ && (a = a.v.toString());
    a.constructor === Sk.builtin.float_ && (a = a.v.toString());
    a.constructor === Sk.builtin.lng && (a = a.str$(10, !0));
    a.constructor === Sk.builtin.biginteger && (a = a.toString());
    if (0 > a.indexOf(".") && 0 > a.indexOf("e") && 0 > a.indexOf("E")) return a;
    var b = 0;
    if (0 <= a.indexOf("e")) {
      var c = a.substr(0, a.indexOf("e"));
      b = a.substr(a.indexOf("e") + 1);
    } else 0 <= a.indexOf("E") ? ((c = a.substr(0, a.indexOf("e"))), (b = a.substr(a.indexOf("E") + 1))) : (c = a);
    b = parseInt(b, 10);
    a = c.indexOf(".");
    if (0 > a) {
      if (0 <= b) {
        for (; 0 < b--; ) c += "0";
        return c;
      }
      return c.length > -b ? c.substr(0, c.length + b) : 0;
    }
    c = 0 === a ? c.substr(1) : a < c.length ? c.substr(0, a) + c.substr(a + 1) : c.substr(0, a);
    for (a += b; a > c.length; ) c += "0";
    return (c = 0 >= a ? 0 : c.substr(0, a));
  };
  Sk.exportSymbol("Sk.builtin.asnum$nofloat", Sk.builtin.asnum$nofloat);
  Sk.builtin.round = function (a, b) {
    Sk.builtin.pyCheckArgsLen("round", arguments.length, 1, 2);
    if (!Sk.builtin.checkNumber(a)) {
      if (!Sk.builtin.checkFunction(a)) throw new Sk.builtin.TypeError("a float is required");
      if (!Sk.__future__.exceptions) throw new Sk.builtin.AttributeError(Sk.abstr.typeName(a) + " instance has no attribute '__float__'");
    }
    if (void 0 !== b && !Sk.misceval.isIndex(b)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object cannot be interpreted as an index");
    if (!Sk.__future__.dunder_round && a.round$) return a.round$(a, b);
    var c = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$round);
    if (null != c) return Sk.builtin.checkFunction(a) ? Sk.misceval.callsimArray(c, [a]) : Sk.misceval.callsimArray(c, [a, b]);
    throw new Sk.builtin.TypeError("a float is required");
  };
  Sk.builtin.len = function (a) {
    Sk.builtin.pyCheckArgsLen("len", arguments.length, 1, 1);
    var b = function (a) {
      return new Sk.builtin.int_(a);
    };
    var c = function (a) {
      if (Sk.builtin.checkInt(a)) return b(a);
      if (Sk.__future__.exceptions) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object cannot be interpreted as an integer");
      throw new Sk.builtin.TypeError("__len__() should return an int");
    };
    if (a.sq$length) return Sk.misceval.chain(a.sq$length(!0), c);
    if (a.mp$length) return Sk.misceval.chain(a.mp$length(), b);
    if (a.tp$length)
      if (Sk.builtin.checkFunction(a)) {
        c = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$len);
        if (null != c) return Sk.misceval.callsimArray(c, [a]);
        if (!Sk.__future__.exceptions) throw new Sk.builtin.AttributeError(Sk.abstr.typeName(a) + " instance has no attribute '__len__'");
      } else return Sk.misceval.chain(a.tp$length(!0), c);
    throw new Sk.builtin.TypeError("object of type '" + Sk.abstr.typeName(a) + "' has no len()");
  };
  Sk.builtin.min = function () {
    var a;
    Sk.builtin.pyCheckArgsLen("min", arguments.length, 1);
    var b = Sk.misceval.arrayFromArguments(arguments);
    var c = b[0];
    if (void 0 === c) throw new Sk.builtin.ValueError("min() arg is an empty sequence");
    for (a = 1; a < b.length; ++a) Sk.misceval.richCompareBool(b[a], c, "Lt") && (c = b[a]);
    return c;
  };
  Sk.builtin.max = function () {
    var a;
    Sk.builtin.pyCheckArgsLen("max", arguments.length, 1);
    var b = Sk.misceval.arrayFromArguments(arguments);
    var c = b[0];
    if (void 0 === c) throw new Sk.builtin.ValueError("max() arg is an empty sequence");
    for (a = 1; a < b.length; ++a) Sk.misceval.richCompareBool(b[a], c, "Gt") && (c = b[a]);
    return c;
  };
  Sk.builtin.any = function (a) {
    var b;
    Sk.builtin.pyCheckArgsLen("any", arguments.length, 1, 1);
    if (!Sk.builtin.checkIterable(a)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not iterable");
    var c = Sk.abstr.iter(a);
    for (b = c.tp$iternext(); void 0 !== b; b = c.tp$iternext()) if (Sk.misceval.isTrue(b)) return Sk.builtin.bool.true$;
    return Sk.builtin.bool.false$;
  };
  Sk.builtin.all = function (a) {
    var b;
    Sk.builtin.pyCheckArgsLen("all", arguments.length, 1, 1);
    if (!Sk.builtin.checkIterable(a)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not iterable");
    var c = Sk.abstr.iter(a);
    for (b = c.tp$iternext(); void 0 !== b; b = c.tp$iternext()) if (!Sk.misceval.isTrue(b)) return Sk.builtin.bool.false$;
    return Sk.builtin.bool.true$;
  };
  Sk.builtin.sum = function (a, b) {
    var c;
    Sk.builtin.pyCheckArgsLen("sum", arguments.length, 1, 2);
    Sk.builtin.pyCheckType("iter", "iterable", Sk.builtin.checkIterable(a));
    if (void 0 !== b && Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("sum() can't sum strings [use ''.join(seq) instead]");
    var d = void 0 === b ? new Sk.builtin.int_(0) : b;
    var e = Sk.abstr.iter(a);
    for (c = e.tp$iternext(); void 0 !== c; c = e.tp$iternext()) {
      if (c instanceof Sk.builtin.float_) {
        var f = !0;
        d instanceof Sk.builtin.float_ || (d = new Sk.builtin.float_(Sk.builtin.asnum$(d)));
      } else c instanceof Sk.builtin.lng && (f || d instanceof Sk.builtin.lng || (d = new Sk.builtin.lng(d)));
      if (void 0 !== d.nb$add) {
        var g = d.nb$add(c);
        if (void 0 !== g && g !== Sk.builtin.NotImplemented.NotImplemented$) {
          d = d.nb$add(c);
          continue;
        }
      }
      throw new Sk.builtin.TypeError("unsupported operand type(s) for +: '" + Sk.abstr.typeName(d) + "' and '" + Sk.abstr.typeName(c) + "'");
    }
    return d;
  };
  Sk.builtin.zip = function () {
    var a, b;
    if (0 === arguments.length) return new Sk.builtin.list([]);
    var c = [];
    for (b = 0; b < arguments.length; b++)
      if (Sk.builtin.checkIterable(arguments[b])) c.push(Sk.abstr.iter(arguments[b]));
      else throw new Sk.builtin.TypeError("argument " + b + " must support iteration");
    var d = [];
    for (a = !1; !a; ) {
      var e = [];
      for (b = 0; b < arguments.length; b++) {
        var f = c[b].tp$iternext();
        if (void 0 === f) {
          a = !0;
          break;
        }
        e.push(f);
      }
      a || d.push(new Sk.builtin.tuple(e));
    }
    return new Sk.builtin.list(d);
  };
  Sk.builtin.abs = function (a) {
    Sk.builtin.pyCheckArgsLen("abs", arguments.length, 1, 1);
    if (a instanceof Sk.builtin.int_) return new Sk.builtin.int_(Math.abs(a.v));
    if (a instanceof Sk.builtin.float_) return new Sk.builtin.float_(Math.abs(a.v));
    if (Sk.builtin.checkNumber(a)) return Sk.builtin.assk$(Math.abs(Sk.builtin.asnum$(a)));
    if (Sk.builtin.checkComplex(a)) return Sk.misceval.callsimArray(a.__abs__, [a]);
    if (a.tp$getattr) {
      var b = a.tp$getattr(Sk.builtin.str.$abs);
      return Sk.misceval.callsimArray(b);
    }
    throw new TypeError("bad operand type for abs(): '" + Sk.abstr.typeName(a) + "'");
  };
  Sk.builtin.fabs = function (a) {
    return Sk.builtin.abs(a);
  };
  Sk.builtin.ord = function (a) {
    Sk.builtin.pyCheckArgsLen("ord", arguments.length, 1, 1);
    if (!Sk.builtin.checkString(a)) throw new Sk.builtin.TypeError("ord() expected a string of length 1, but " + Sk.abstr.typeName(a) + " found");
    if (1 !== a.v.length) throw new Sk.builtin.TypeError("ord() expected a character, but string of length " + a.v.length + " found");
    return new Sk.builtin.int_(a.v.charCodeAt(0));
  };
  Sk.builtin.chr = function (a) {
    Sk.builtin.pyCheckArgsLen("chr", arguments.length, 1, 1);
    if (!Sk.builtin.checkInt(a)) throw new Sk.builtin.TypeError("an integer is required");
    a = Sk.builtin.asnum$(a);
    if (0 > a || 255 < a) throw new Sk.builtin.ValueError("chr() arg not in range(256)");
    return new Sk.builtin.str(String.fromCharCode(a));
  };
  Sk.builtin.unichr = function (a) {
    Sk.builtin.pyCheckArgsLen("chr", arguments.length, 1, 1);
    if (!Sk.builtin.checkInt(a)) throw new Sk.builtin.TypeError("an integer is required");
    a = Sk.builtin.asnum$(a);
    try {
      return new Sk.builtin.str(String.fromCodePoint(a));
    } catch (b) {
      if (b instanceof RangeError) throw new Sk.builtin.ValueError(b.message);
      throw b;
    }
  };
  Sk.builtin.int2str_ = function (a, b, c) {
    if (a instanceof Sk.builtin.lng) {
      var d = "";
      2 !== b && (d = "L");
      b = a.str$(b, !1);
      return a.nb$isnegative() ? new Sk.builtin.str("-" + c + b + d) : new Sk.builtin.str(c + b + d);
    }
    a = Sk.misceval.asIndex(a);
    b = a.toString(b);
    return 0 > a ? new Sk.builtin.str("-" + c + b.slice(1)) : new Sk.builtin.str(c + b);
  };
  Sk.builtin.hex = function (a) {
    Sk.builtin.pyCheckArgsLen("hex", arguments.length, 1, 1);
    if (!Sk.misceval.isIndex(a)) throw new Sk.builtin.TypeError("hex() argument can't be converted to hex");
    return Sk.builtin.int2str_(a, 16, "0x");
  };
  Sk.builtin.oct = function (a) {
    Sk.builtin.pyCheckArgsLen("oct", arguments.length, 1, 1);
    if (!Sk.misceval.isIndex(a)) throw new Sk.builtin.TypeError("oct() argument can't be converted to hex");
    return Sk.__future__.octal_number_literal ? Sk.builtin.int2str_(a, 8, "0o") : Sk.builtin.int2str_(a, 8, "0");
  };
  Sk.builtin.bin = function (a) {
    Sk.builtin.pyCheckArgsLen("bin", arguments.length, 1, 1);
    if (!Sk.misceval.isIndex(a)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object can't be interpreted as an index");
    return Sk.builtin.int2str_(a, 2, "0b");
  };
  Sk.builtin.dir = function (a) {
    var b, c;
    Sk.builtin.pyCheckArgsLen("dir", arguments.length, 1, 1);
    var d = function (a) {
      var b = null;
      if (-1 !== "__bases__ __mro__ __class__ __name__ GenericGetAttr GenericSetAttr GenericPythonGetAttr GenericPythonSetAttr pythonFunctions HashNotImplemented constructor __dict__".split(" ").indexOf(a)) return null;
      -1 !== a.indexOf("$") ? (b = Sk.builtin.dir.slotNameToRichName(a)) : "_" !== a.charAt(a.length - 1) ? (b = a) : "_" === a.charAt(0) && (b = a);
      return b;
    };
    var e = [];
    var f = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$dir);
    if (null != f) {
      var g = Sk.misceval.callsimArray(f, [a]);
      if (!Sk.builtin.checkSequence(g)) throw new Sk.builtin.TypeError("__dir__ must return sequence.");
      g = Sk.ffi.remapToJs(g);
      for (b = 0; b < g.length; ++b) e.push(new Sk.builtin.str(g[b]));
    } else {
      for (b in a.constructor.prototype) (c = d(b)) && e.push(new Sk.builtin.str(c));
      if (a.$d)
        if (a.$d.tp$iter) for (f = a.$d.tp$iter(), b = f.tp$iternext(); void 0 !== b; b = f.tp$iternext()) (c = new Sk.builtin.str(b)), (c = d(c.v)) && e.push(new Sk.builtin.str(c));
        else for (c in a.$d) e.push(new Sk.builtin.str(c));
      var h = a.tp$mro;
      !h && a.ob$type && (h = a.ob$type.tp$mro);
      if (h) for (b = 0; b < h.v.length; ++b) for (g in ((f = h.v[b]), f)) f.hasOwnProperty(g) && (c = d(g)) && e.push(new Sk.builtin.str(c));
    }
    e.sort(function (a, b) {
      return (a.v > b.v) - (a.v < b.v);
    });
    return new Sk.builtin.list(
      e.filter(function (a, b, c) {
        return a !== c[b + 1];
      })
    );
  };
  Sk.builtin.dir.slotNameToRichName = function (a) {};
  Sk.builtin.repr = function (a) {
    Sk.builtin.pyCheckArgsLen("repr", arguments.length, 1, 1);
    return Sk.misceval.objectRepr(a);
  };
  Sk.builtin.open = function (a, b, c) {
    Sk.builtin.pyCheckArgsLen("open", arguments.length, 1, 3);
    void 0 === b && (b = new Sk.builtin.str("r"));
    if (/\+/.test(b.v)) throw "todo; haven't implemented read/write mode";
    if (("w" === b.v || "wb" === b.v || "a" === b.v || "ab" === b.v) && !Sk.nonreadopen) throw "todo; haven't implemented non-read opens";
    return new Sk.builtin.file(a, b, c);
  };
  Sk.builtin.isinstance = function (a, b) {
    var c;
    Sk.builtin.pyCheckArgsLen("isinstance", arguments.length, 2, 2);
    if (!(Sk.builtin.checkClass(b) || b instanceof Sk.builtin.tuple)) throw new Sk.builtin.TypeError("isinstance() arg 2 must be a class, type, or tuple of classes and types");
    if (b === Sk.builtin.none.prototype.ob$type) return a instanceof Sk.builtin.none ? Sk.builtin.bool.true$ : Sk.builtin.bool.false$;
    if (a.ob$type === b) return Sk.builtin.bool.true$;
    if (b instanceof Sk.builtin.tuple) {
      for (c = 0; c < b.v.length; ++c) if (Sk.misceval.isTrue(Sk.builtin.isinstance(a, b.v[c]))) return Sk.builtin.bool.true$;
      return Sk.builtin.bool.false$;
    }
    if (a instanceof b) return Sk.builtin.bool.true$;
    var d = function (a, b) {
      if (a === b) return Sk.builtin.bool.true$;
      if (void 0 === a.$d) return Sk.builtin.bool.false$;
      var c = a.$d.mp$subscript(Sk.builtin.type.basesStr_);
      for (a = 0; a < c.v.length; ++a) if (Sk.misceval.isTrue(d(c.v[a], b))) return Sk.builtin.bool.true$;
      return Sk.builtin.bool.false$;
    };
    return d(a.ob$type, b);
  };
  Sk.builtin.hash = function (a) {
    Sk.builtin.pyCheckArgsLen("hash", arguments.length, 1, 1);
    if (a instanceof Object) {
      if (Sk.builtin.checkNone(a.tp$hash)) throw new Sk.builtin.TypeError(new Sk.builtin.str("unhashable type: '" + Sk.abstr.typeName(a) + "'"));
      if (void 0 !== a.tp$hash) {
        if (a.$savedHash_) return a.$savedHash_;
        a.$savedHash_ = a.tp$hash();
        return a.$savedHash_;
      }
      void 0 === a.__hash && ((Sk.builtin.hashCount += 1), (a.__hash = Sk.builtin.hashCount));
      return new Sk.builtin.int_(a.__hash);
    }
    if ("number" === typeof a || null === a || !0 === a || !1 === a) throw new Sk.builtin.TypeError("unsupported Javascript type");
    return new Sk.builtin.str(typeof a + " " + String(a));
  };
  Sk.builtin.getattr = function (a, b, c) {
    Sk.builtin.pyCheckArgsLen("getattr", arguments.length, 2, 3);
    if (!Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("attribute name must be string");
    var d = b.$jsstr();
    var e = new Sk.builtin.str(Sk.fixReservedWords(d));
    e = a.tp$getattr(e);
    if (void 0 === e) {
      if (void 0 !== c) return c;
      throw new Sk.builtin.AttributeError("'" + Sk.abstr.typeName(a) + "' object has no attribute '" + d + "'");
    }
    return e;
  };
  Sk.builtin.setattr = function (a, b, c) {
    Sk.builtin.pyCheckArgsLen("setattr", arguments.length, 3, 3);
    if (void 0 === a || void 0 === a.$r || "type" !== a.$r().v.slice(1, 5)) {
      if (!Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("attribute name must be string");
      var d = b.$jsstr();
      if (a.tp$setattr) a.tp$setattr(new Sk.builtin.str(Sk.fixReservedWords(d)), c);
      else throw new Sk.builtin.AttributeError("object has no attribute " + d);
      return Sk.builtin.none.none$;
    }
    throw new Sk.builtin.TypeError("can't set attributes of built-in/extension type '" + a.tp$name + "'");
  };
  Sk.builtin.raw_input = function (a) {
    var b = a ? a : "";
    return Sk.misceval.chain(Sk.importModule("sys", !1, !0), function (a) {
      return Sk.inputfunTakesPrompt
        ? Sk.misceval.callsimOrSuspendArray(Sk.builtin.file.$readline, [a.$d.stdin, null, b])
        : Sk.misceval.chain(
            void 0,
            function () {
              return Sk.misceval.callsimOrSuspendArray(a.$d.stdout.write, [a.$d.stdout, new Sk.builtin.str(b)]);
            },
            function () {
              return Sk.misceval.callsimOrSuspendArray(a.$d.stdin.readline, [a.$d.stdin]);
            }
          );
    });
  };
  Sk.builtin.input = Sk.builtin.raw_input;
  Sk.builtin.jseval = function (a) {
    a = Sk.global.eval(Sk.ffi.remapToJs(a));
    try {
      return Sk.ffi.remapToPy(a);
    } catch (b) {
      if (b.constructor === Sk.asserts.AssertionError) return Sk.builtin.none.none$;
      throw b;
    }
  };
  Sk.builtin.jsmillis = function () {
    return new Date().valueOf();
  };
  Sk.builtin.eval_ = function () {
    throw new Sk.builtin.NotImplementedError("eval is not yet implemented");
  };
  Sk.builtin.map = function (a, b) {
    var c = [],
      d,
      e;
    Sk.builtin.pyCheckArgsLen("map", arguments.length, 2);
    if (2 < arguments.length) {
      var f = [];
      var g = Array.prototype.slice.apply(arguments).slice(1);
      for (e = 0; e < g.length; e++) {
        if (!Sk.builtin.checkIterable(g[e])) {
          var h = parseInt(e, 10) + 2;
          throw new Sk.builtin.TypeError("argument " + h + " to map() must support iteration");
        }
        g[e] = Sk.abstr.iter(g[e]);
      }
      for (;;) {
        var k = [];
        for (e = d = 0; e < g.length; e++) (h = g[e].tp$iternext()), void 0 === h ? (k.push(Sk.builtin.none.none$), d++) : k.push(h);
        if (d !== g.length) f.push(k);
        else break;
      }
      b = new Sk.builtin.list(f);
    }
    if (!Sk.builtin.checkIterable(b)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object is not iterable");
    return Sk.misceval.chain(
      Sk.misceval.iterFor(Sk.abstr.iter(b), function (b) {
        if (a === Sk.builtin.none.none$) b instanceof Array && (b = new Sk.builtin.tuple(b)), c.push(b);
        else
          return (
            b instanceof Array || (b = [b]),
            Sk.misceval.chain(Sk.misceval.applyOrSuspend(a, void 0, void 0, void 0, b), function (a) {
              c.push(a);
            })
          );
      }),
      function () {
        return new Sk.builtin.list(c);
      }
    );
  };
  Sk.builtin.reduce = function (a, b, c) {
    var d;
    Sk.builtin.pyCheckArgsLen("reduce", arguments.length, 2, 3);
    if (!Sk.builtin.checkIterable(b)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object is not iterable");
    var e = Sk.abstr.iter(b);
    if (void 0 === c && ((c = e.tp$iternext()), void 0 === c)) throw new Sk.builtin.TypeError("reduce() of empty sequence with no initial value");
    var f = c;
    for (d = e.tp$iternext(); void 0 !== d; d = e.tp$iternext()) f = Sk.misceval.callsimArray(a, [f, d]);
    return f;
  };
  Sk.builtin.filter = function (a, b) {
    var c;
    Sk.builtin.pyCheckArgsLen("filter", arguments.length, 2, 2);
    if (!Sk.builtin.checkIterable(b)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object is not iterable");
    var d = function () {
      return [];
    };
    var e = function (a, b) {
      a.push(b);
      return a;
    };
    var f = function (a) {
      return new Sk.builtin.list(a);
    };
    b.__class__ === Sk.builtin.str
      ? ((d = function () {
          return new Sk.builtin.str("");
        }),
        (e = function (a, b) {
          return a.sq$concat(b);
        }),
        (f = function (a) {
          return a;
        }))
      : b.__class__ === Sk.builtin.tuple &&
        (f = function (a) {
          return new Sk.builtin.tuple(a);
        });
    var g = d();
    var h = Sk.abstr.iter(b);
    for (c = h.tp$iternext(); void 0 !== c; c = h.tp$iternext()) (d = a === Sk.builtin.none.none$ ? new Sk.builtin.bool(c) : Sk.misceval.callsimArray(a, [c])), Sk.misceval.isTrue(d) && (g = e(g, c));
    return f(g);
  };
  Sk.builtin.hasattr = function (a, b) {
    Sk.builtin.pyCheckArgsLen("hasattr", arguments.length, 2, 2);
    if (!Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("hasattr(): attribute name must be string");
    if (a.tp$getattr) return a.tp$getattr(b) ? Sk.builtin.bool.true$ : Sk.builtin.bool.false$;
    throw new Sk.builtin.AttributeError("Object has no tp$getattr method");
  };
  Sk.builtin.pow = function (a, b, c) {
    Sk.builtin.pyCheckArgsLen("pow", arguments.length, 2, 3);
    c instanceof Sk.builtin.none && (c = void 0);
    if (Sk.builtin.checkComplex(a)) return a.nb$power(b, c);
    var d = Sk.builtin.asnum$(a);
    var e = Sk.builtin.asnum$(b);
    var f = Sk.builtin.asnum$(c);
    if (!Sk.builtin.checkNumber(a) || !Sk.builtin.checkNumber(b)) {
      if (void 0 === c) throw new Sk.builtin.TypeError("unsupported operand type(s) for pow(): '" + Sk.abstr.typeName(a) + "' and '" + Sk.abstr.typeName(b) + "'");
      throw new Sk.builtin.TypeError("unsupported operand type(s) for pow(): '" + Sk.abstr.typeName(a) + "', '" + Sk.abstr.typeName(b) + "', '" + Sk.abstr.typeName(c) + "'");
    }
    if (0 > d && b instanceof Sk.builtin.float_) throw new Sk.builtin.ValueError("negative number cannot be raised to a fractional power");
    if (void 0 === c) {
      if (a instanceof Sk.builtin.float_ || b instanceof Sk.builtin.float_ || 0 > e) return new Sk.builtin.float_(Math.pow(d, e));
      f = new Sk.builtin.int_(d);
      e = new Sk.builtin.int_(e);
      e = f.nb$power(e);
      return a instanceof Sk.builtin.lng || b instanceof Sk.builtin.lng ? new Sk.builtin.lng(e) : e;
    }
    if (!Sk.builtin.checkInt(a) || !Sk.builtin.checkInt(b) || !Sk.builtin.checkInt(c)) throw new Sk.builtin.TypeError("pow() 3rd argument not allowed unless all arguments are integers");
    if (0 > e) {
      if (Sk.__future__.exceptions) throw new Sk.builtin.ValueError("pow() 2nd argument cannot be negative when 3rd argument specified");
      throw new Sk.builtin.TypeError("pow() 2nd argument cannot be negative when 3rd argument specified");
    }
    if (0 === f) throw new Sk.builtin.ValueError("pow() 3rd argument cannot be 0");
    return a instanceof Sk.builtin.lng || b instanceof Sk.builtin.lng || c instanceof Sk.builtin.lng || Infinity === Math.pow(d, e) ? ((a = new Sk.builtin.lng(a)), a.nb$power(b, c)) : new Sk.builtin.int_(Math.pow(d, e)).nb$remainder(c);
  };
  Sk.builtin.quit = function (a) {
    a = new Sk.builtin.str(a).v;
    throw new Sk.builtin.SystemExit(a);
  };
  Sk.builtin.issubclass = function (a, b) {
    var c;
    Sk.builtin.pyCheckArgsLen("issubclass", arguments.length, 2, 2);
    if (!Sk.builtin.checkClass(a)) throw new Sk.builtin.TypeError("issubclass() arg 1 must be a class");
    if (!(Sk.builtin.checkClass(b) || b instanceof Sk.builtin.tuple)) throw new Sk.builtin.TypeError("issubclass() arg 2 must be a class or tuple of classes");
    var d = function (a, b) {
      if (a === b) return !0;
      if (void 0 !== a.$d && a.$d.mp$subscript)
        if (a.$d.sq$contains(Sk.builtin.type.basesStr_)) var c = a.$d.mp$subscript(Sk.builtin.type.basesStr_);
        else return !1;
      else return !1;
      for (a = 0; a < c.v.length; ++a) if (d(c.v[a], b)) return !0;
      return !1;
    };
    if (Sk.builtin.checkClass(b)) return a === b ? !0 : d(a, b);
    if (b instanceof Sk.builtin.tuple) {
      for (c = 0; c < b.v.length; ++c) if (Sk.builtin.issubclass(a, b.v[c])) return !0;
      return !1;
    }
  };
  Sk.builtin.globals = function () {
    var a,
      b = new Sk.builtin.dict([]);
    for (a in Sk.globals) b.mp$ass_subscript(new Sk.builtin.str(a), Sk.globals[a]);
    return b;
  };
  Sk.builtin.divmod = function (a, b) {
    return Sk.abstr.numberBinOp(a, b, "DivMod");
  };
  Sk.builtin.format = function (a, b) {
    Sk.builtin.pyCheckArgsLen("format", arguments.length, 1, 2);
    void 0 === b && (b = Sk.builtin.str.$emptystr);
    return Sk.abstr.objectFormat(a, b);
  };
  Sk.builtin.reversed = function (a) {
    Sk.builtin.pyCheckArgsLen("reversed", arguments.length, 1, 1);
    var b = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$reversed);
    if (null != b) return Sk.misceval.callsimArray(b, [a]);
    if (!Sk.builtin.checkSequence(a)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not a sequence");
    return new (function (a) {
      this.idx = a.sq$length() - 1;
      this.myobj = a;
      this.getitem = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$getitem);
      this.tp$iter = function () {
        return this;
      };
      this.tp$iternext = function () {
        if (!(0 > this.idx)) {
          try {
            var a = Sk.misceval.callsimArray(this.getitem, [this.myobj, Sk.ffi.remapToPy(this.idx)]);
          } catch (e) {
            if (e instanceof Sk.builtin.IndexError) return;
            throw e;
          }
          this.idx--;
          return a;
        }
      };
    })(a);
  };
  Sk.builtin.id = function (a) {
    Sk.builtin.pyCheckArgsLen("id", arguments.length, 1, 1);
    void 0 === a.__id && ((Sk.builtin.idCount += 1), (a.__id = Sk.builtin.idCount));
    return new Sk.builtin.int_(a.__id);
  };
  Sk.builtin.bytearray = function () {
    throw new Sk.builtin.NotImplementedError("bytearray is not yet implemented");
  };
  Sk.builtin.callable = function (a) {
    Sk.builtin.pyCheckArgsLen("callable", arguments.length, 1, 1);
    return Sk.builtin.checkCallable(a) ? Sk.builtin.bool.true$ : Sk.builtin.bool.false$;
  };
  Sk.builtin.delattr = function (a, b) {
    Sk.builtin.pyCheckArgsLen("delattr", arguments.length, 2, 2);
    if (void 0 !== a.$d[b.v])
      return Sk.misceval.tryCatch(
        function () {
          return Sk.builtin.setattr(a, b, void 0);
        },
        function (c) {
          Sk.misceval.tryCatch(
            function () {
              return Sk.builtin.setattr(a.$d, b, void 0);
            },
            function (c) {
              if (c instanceof Sk.builtin.AttributeError) throw new Sk.builtin.AttributeError(Sk.abstr.typeName(a) + " instance has no attribute '" + b.v + "'");
              throw c;
            }
          );
        }
      );
    if ("type" !== a.$r().v.slice(1, 5)) {
      if (a.ob$type === Sk.builtin.type && void 0 !== a[b.v]) return (a[b.v] = void 0), Sk.builtin.none.none$;
      throw new Sk.builtin.AttributeError(Sk.abstr.typeName(a) + " instance has no attribute '" + b.v + "'");
    }
    throw new Sk.builtin.TypeError("can't set attributes of built-in/extension type '" + a.tp$name + "'");
  };
  Sk.builtin.execfile = function () {
    throw new Sk.builtin.NotImplementedError("execfile is not yet implemented");
  };
  Sk.builtin.frozenset = function () {
    throw new Sk.builtin.NotImplementedError("frozenset is not yet implemented");
  };
  Sk.builtin.help = function () {
    throw new Sk.builtin.NotImplementedError("help is not yet implemented");
  };
  Sk.builtin.iter = function (a, b) {
    Sk.builtin.pyCheckArgsLen("iter", arguments.length, 1, 2);
    if (1 === arguments.length) {
      if (Sk.builtin.checkIterable(a)) return new Sk.builtin.iterator(a);
      throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not iterable");
    }
    if (Sk.builtin.checkCallable(a)) return new Sk.builtin.iterator(a, b);
    throw new TypeError("iter(v, w): v must be callable");
  };
  Sk.builtin.locals = function () {
    throw new Sk.builtin.NotImplementedError("locals is not yet implemented");
  };
  Sk.builtin.memoryview = function () {
    throw new Sk.builtin.NotImplementedError("memoryview is not yet implemented");
  };
  Sk.builtin.next_ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("next", arguments.length, 1, 2);
    if (!a.tp$iternext) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not an iterator");
    var c = a.tp$iternext();
    if (void 0 === c) {
      if (b) return b;
      throw new Sk.builtin.StopIteration();
    }
    return c;
  };
  Sk.builtin.reload = function () {
    throw new Sk.builtin.NotImplementedError("reload is not yet implemented");
  };
  Sk.builtin.vars = function () {
    throw new Sk.builtin.NotImplementedError("vars is not yet implemented");
  };
  Sk.builtin.xrange = Sk.builtin.range;
  Sk.builtin.apply_ = function () {
    throw new Sk.builtin.NotImplementedError("apply is not yet implemented");
  };
  Sk.builtin.buffer = function () {
    throw new Sk.builtin.NotImplementedError("buffer is not yet implemented");
  };
  Sk.builtin.coerce = function () {
    throw new Sk.builtin.NotImplementedError("coerce is not yet implemented");
  };
  Sk.builtin.intern = function () {
    throw new Sk.builtin.NotImplementedError("intern is not yet implemented");
  }; /*
 https://mths.be/fromcodepoint v0.2.1 by @mathias */
  String.fromCodePoint ||
    (function () {
      var a = (function () {
          try {
            var a = {},
              b = Object.defineProperty;
            var c = b(a, "foo", a) && b;
          } catch (h) {}
          return c;
        })(),
        b = String.fromCharCode,
        c = Math.floor,
        d = function (a) {
          var d = [],
            e = -1,
            h = arguments.length;
          if (!h) return "";
          for (var k = ""; ++e < h; ) {
            var l = Number(arguments[e]);
            if (!isFinite(l) || 0 > l || 1114111 < l || c(l) != l) throw RangeError("Invalid code point: " + l);
            if (65535 >= l) d.push(l);
            else {
              l -= 65536;
              var m = (l >> 10) + 55296;
              l = (l % 1024) + 56320;
              d.push(m, l);
            }
            if (e + 1 == h || 16384 < d.length) (k += b.apply(null, d)), (d.length = 0);
          }
          return k;
        };
      a ? a(String, "fromCodePoint", { value: d, configurable: !0, writable: !0 }) : (String.fromCodePoint = d);
    })();
  Sk.builtin.BaseException = function (a) {
    if (!(this instanceof Sk.builtin.BaseException)) {
      var b = Object.create(Sk.builtin.BaseException.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    a = Array.prototype.slice.call(arguments);
    for (b = 0; b < a.length; ++b) "string" === typeof a[b] && (a[b] = new Sk.builtin.str(a[b]));
    this.args = new Sk.builtin.tuple(a);
    this.traceback = [];
    3 <= this.args.sq$length() && this.traceback.push({ lineno: this.args.v[2], filename: this.args.v[1].v || "<unknown>" });
  };
  Sk.abstr.setUpInheritance("BaseException", Sk.builtin.BaseException, Sk.builtin.object);
  Sk.builtin.BaseException.prototype.tp$str = function () {
    var a;
    var b = "" + this.tp$name;
    this.args && (b += ": " + (0 < this.args.v.length ? this.args.v[0].v : ""));
    b = 0 !== this.traceback.length ? b + (" on line " + this.traceback[0].lineno) : b + " at <unknown>";
    if (4 < this.args.v.length) {
      b += "\n" + this.args.v[4].v + "\n";
      for (a = 0; a < this.args.v[3]; ++a) b += " ";
      b += "^\n";
    }
    return new Sk.builtin.str(b);
  };
  Sk.builtin.BaseException.prototype.toString = function () {
    return this.tp$str().v;
  };
  Sk.builtin.BaseException.prototype.args = {
    tp$descr_get: function (a, b) {
      return a.args;
    },
  };
  Sk.exportSymbol("Sk.builtin.BaseException", Sk.builtin.BaseException);
  Sk.builtin.Exception = function (a) {
    if (!(this instanceof Sk.builtin.Exception)) {
      var b = Object.create(Sk.builtin.Exception.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.BaseException.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("Exception", Sk.builtin.Exception, Sk.builtin.BaseException);
  Sk.exportSymbol("Sk.builtin.Exception", Sk.builtin.Exception);
  Sk.builtin.StandardError = function (a) {
    if (!(this instanceof Sk.builtin.StandardError)) {
      var b = Object.create(Sk.builtin.StandardError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.Exception.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("StandardError", Sk.builtin.StandardError, Sk.builtin.Exception);
  Sk.exportSymbol("Sk.builtin.StandardError", Sk.builtin.StandardError);
  Sk.builtin.AssertionError = function (a) {
    if (!(this instanceof Sk.builtin.AssertionError)) {
      var b = Object.create(Sk.builtin.AssertionError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("AssertionError", Sk.builtin.AssertionError, Sk.builtin.StandardError);
  Sk.exportSymbol("Sk.builtin.AssertionError", Sk.builtin.AssertionError);
  Sk.builtin.AttributeError = function (a) {
    if (!(this instanceof Sk.builtin.AttributeError)) {
      var b = Object.create(Sk.builtin.AttributeError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("AttributeError", Sk.builtin.AttributeError, Sk.builtin.StandardError);
  Sk.builtin.ImportError = function (a) {
    if (!(this instanceof Sk.builtin.ImportError)) {
      var b = Object.create(Sk.builtin.ImportError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("ImportError", Sk.builtin.ImportError, Sk.builtin.StandardError);
  Sk.builtin.IndentationError = function (a) {
    if (!(this instanceof Sk.builtin.IndentationError)) {
      var b = Object.create(Sk.builtin.IndentationError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("IndentationError", Sk.builtin.IndentationError, Sk.builtin.StandardError);
  Sk.builtin.IndexError = function (a) {
    if (!(this instanceof Sk.builtin.IndexError)) {
      var b = Object.create(Sk.builtin.IndexError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("IndexError", Sk.builtin.IndexError, Sk.builtin.StandardError);
  Sk.builtin.KeyError = function (a) {
    if (!(this instanceof Sk.builtin.KeyError)) {
      var b = Object.create(Sk.builtin.KeyError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("KeyError", Sk.builtin.KeyError, Sk.builtin.StandardError);
  Sk.builtin.NameError = function (a) {
    if (!(this instanceof Sk.builtin.NameError)) {
      var b = Object.create(Sk.builtin.NameError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("NameError", Sk.builtin.NameError, Sk.builtin.StandardError);
  Sk.builtin.UnboundLocalError = function (a) {
    if (!(this instanceof Sk.builtin.UnboundLocalError)) {
      var b = Object.create(Sk.builtin.UnboundLocalError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("UnboundLocalError", Sk.builtin.UnboundLocalError, Sk.builtin.StandardError);
  Sk.builtin.OverflowError = function (a) {
    if (!(this instanceof Sk.builtin.OverflowError)) {
      var b = Object.create(Sk.builtin.OverflowError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("OverflowError", Sk.builtin.OverflowError, Sk.builtin.StandardError);
  Sk.builtin.SyntaxError = function (a) {
    if (!(this instanceof Sk.builtin.SyntaxError)) {
      var b = Object.create(Sk.builtin.SyntaxError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("SyntaxError", Sk.builtin.SyntaxError, Sk.builtin.StandardError);
  Sk.builtin.RuntimeError = function (a) {
    if (!(this instanceof Sk.builtin.RuntimeError)) {
      var b = Object.create(Sk.builtin.RuntimeError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("RuntimeError", Sk.builtin.RuntimeError, Sk.builtin.StandardError);
  Sk.exportSymbol("Sk.builtin.RuntimeError", Sk.builtin.RuntimeError);
  Sk.builtin.SuspensionError = function (a) {
    if (!(this instanceof Sk.builtin.SuspensionError)) {
      var b = Object.create(Sk.builtin.SuspensionError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("SuspensionError", Sk.builtin.SuspensionError, Sk.builtin.StandardError);
  Sk.exportSymbol("Sk.builtin.SuspensionError", Sk.builtin.SuspensionError);
  Sk.builtin.SystemExit = function (a) {
    if (!(this instanceof Sk.builtin.SystemExit)) {
      var b = Object.create(Sk.builtin.SystemExit.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.BaseException.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("SystemExit", Sk.builtin.SystemExit, Sk.builtin.BaseException);
  Sk.exportSymbol("Sk.builtin.SystemExit", Sk.builtin.SystemExit);
  Sk.builtin.TypeError = function (a) {
    if (!(this instanceof Sk.builtin.TypeError)) {
      var b = Object.create(Sk.builtin.TypeError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("TypeError", Sk.builtin.TypeError, Sk.builtin.StandardError);
  Sk.exportSymbol("Sk.builtin.TypeError", Sk.builtin.TypeError);
  Sk.builtin.ValueError = function (a) {
    if (!(this instanceof Sk.builtin.ValueError)) {
      var b = Object.create(Sk.builtin.ValueError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("ValueError", Sk.builtin.ValueError, Sk.builtin.StandardError);
  Sk.exportSymbol("Sk.builtin.ValueError", Sk.builtin.ValueError);
  Sk.builtin.ZeroDivisionError = function (a) {
    if (!(this instanceof Sk.builtin.ZeroDivisionError)) {
      var b = Object.create(Sk.builtin.ZeroDivisionError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("ZeroDivisionError", Sk.builtin.ZeroDivisionError, Sk.builtin.StandardError);
  Sk.builtin.TimeLimitError = function (a) {
    if (!(this instanceof Sk.builtin.TimeLimitError)) {
      var b = Object.create(Sk.builtin.TimeLimitError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("TimeLimitError", Sk.builtin.TimeLimitError, Sk.builtin.StandardError);
  Sk.exportSymbol("Sk.builtin.TimeLimitError", Sk.builtin.TimeLimitError);
  Sk.builtin.IOError = function (a) {
    if (!(this instanceof Sk.builtin.IOError)) {
      var b = Object.create(Sk.builtin.IOError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("IOError", Sk.builtin.IOError, Sk.builtin.StandardError);
  Sk.exportSymbol("Sk.builtin.IOError", Sk.builtin.IOError);
  Sk.builtin.NotImplementedError = function (a) {
    if (!(this instanceof Sk.builtin.NotImplementedError)) {
      var b = Object.create(Sk.builtin.NotImplementedError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("NotImplementedError", Sk.builtin.NotImplementedError, Sk.builtin.StandardError);
  Sk.exportSymbol("Sk.builtin.NotImplementedError", Sk.builtin.NotImplementedError);
  Sk.builtin.NegativePowerError = function (a) {
    if (!(this instanceof Sk.builtin.NegativePowerError)) {
      var b = Object.create(Sk.builtin.NegativePowerError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("NegativePowerError", Sk.builtin.NegativePowerError, Sk.builtin.StandardError);
  Sk.exportSymbol("Sk.builtin.NegativePowerError", Sk.builtin.NegativePowerError);
  Sk.builtin.ExternalError = function (a, b) {
    if (!(this instanceof Sk.builtin.ExternalError)) {
      var c = Object.create(Sk.builtin.ExternalError.prototype);
      c.constructor.apply(c, arguments);
      return c;
    }
    b = Array.prototype.slice.call(arguments);
    this.nativeError = b[0];
    b[0] instanceof Sk.builtin.str || (b[0] = "" + b[0]);
    Sk.builtin.StandardError.apply(this, b);
  };
  Sk.abstr.setUpInheritance("ExternalError", Sk.builtin.ExternalError, Sk.builtin.StandardError);
  Sk.exportSymbol("Sk.builtin.ExternalError", Sk.builtin.ExternalError);
  Sk.builtin.OperationError = function (a) {
    if (!(this instanceof Sk.builtin.OperationError)) {
      var b = Object.create(Sk.builtin.OperationError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("OperationError", Sk.builtin.OperationError, Sk.builtin.StandardError);
  Sk.exportSymbol("Sk.builtin.OperationError", Sk.builtin.OperationError);
  Sk.builtin.SystemError = function (a) {
    if (!(this instanceof Sk.builtin.SystemError)) {
      var b = Object.create(Sk.builtin.SystemError.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.StandardError.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("SystemError", Sk.builtin.SystemError, Sk.builtin.StandardError);
  Sk.exportSymbol("Sk.builtin.SystemError", Sk.builtin.SystemError);
  Sk.builtin.StopIteration = function (a) {
    if (!(this instanceof Sk.builtin.StopIteration)) {
      var b = Object.create(Sk.builtin.StopIteration.prototype);
      b.constructor.apply(b, arguments);
      return b;
    }
    Sk.builtin.Exception.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("StopIteration", Sk.builtin.StopIteration, Sk.builtin.Exception);
  Sk.exportSymbol("Sk.builtin.StopIteration", Sk.builtin.StopIteration);
  Sk.builtin.getExcInfo = function (a) {
    return new Sk.builtin.tuple([a.ob$type || Sk.builtin.none.none$, a, Sk.builtin.none.none$]);
  };
  Sk.builtin.method = function (a, b, c, d) {
    if (!(this instanceof Sk.builtin.method)) {
      Sk.builtin.pyCheckArgsLen("method", arguments.length, 3, 3);
      if (!Sk.builtin.checkCallable(a)) throw new Sk.builtin.TypeError("First argument must be callable");
      if (void 0 === b.ob$type) throw new Sk.builtin.TypeError("Second argument must be object of known type");
      return new Sk.builtin.method(a, b, c);
    }
    this.tp$name = a.tp$name;
    this.im_func = a;
    this.im_self = b || Sk.builtin.none.none$;
    this.im_class = c || Sk.builtin.none.none$;
    this.im_builtin = d;
    this.$d = { im_func: a, im_self: b, im_class: c };
  };
  Sk.exportSymbol("Sk.builtin.method", Sk.builtin.method);
  Sk.abstr.setUpInheritance("instancemethod", Sk.builtin.method, Sk.builtin.object);
  Sk.builtin.method.prototype.tp$name = "method";
  Sk.builtin.method.prototype.tp$call = function (a, b) {
    this.im_self !== Sk.builtin.none.none$ && a.unshift(this.im_self);
    if (this.im_self === Sk.builtin.none.none$) {
      var c = function (a) {
        return "unbound method " + this.tp$name + "() must be called with " + Sk.abstr.typeName(this.im_class) + " instance as first argument (got " + a + " instead)";
      }.bind(this);
      if (0 < a.length) {
        if (this.im_class != Sk.builtin.none.none$ && !Sk.builtin.issubclass(a[0].ob$type, this.im_class) && !this.im_builtin) throw new Sk.builtin.TypeError(c(Sk.abstr.typeName(a[0].ob$type) + " instance"));
      } else throw new Sk.builtin.TypeError(c("nothing"));
    }
    return this.im_func.tp$call(a, b);
  };
  Sk.builtin.method.prototype.tp$descr_get = function (a, b) {
    Sk.asserts.assert(void 0 !== a && void 0 !== b);
    return new Sk.builtin.method(this, a, b, this.im_builtin);
  };
  Sk.builtin.method.pythonFunctions = ["__get__"];
  Sk.builtin.method.prototype.__get__ = function (a, b, c) {
    Sk.builtin.pyCheckArgsLen("__get__", arguments.length, 1, 2, !1, !0);
    if (b === Sk.builtin.none.none$ && c === Sk.builtin.none.none$) throw new Sk.builtin.TypeError("__get__(None, None) is invalid");
    return c && c !== Sk.builtin.none.none$ ? (Sk.builtin.issubclass(c, a.im_class) ? a.tp$descr_get(b, c) : a) : a.tp$descr_get(b, Sk.builtin.none.none$);
  };
  Sk.builtin.method.prototype.$r = function () {
    if (this.im_builtin) return new Sk.builtin.str("<built-in method " + this.tp$name + " of type object>");
    if (this.im_self === Sk.builtin.none.none$) return new Sk.builtin.str("<unbound method " + Sk.abstr.typeName(this.im_class) + "." + this.tp$name + ">");
    var a = this.im_class !== Sk.builtin.none.none$ ? Sk.abstr.typeName(this.im_class) : "?";
    return new Sk.builtin.str("<bound method " + a + "." + this.tp$name + " of " + Sk.ffi.remapToJs(Sk.misceval.objectRepr(this.im_self)) + ">");
  };
  Sk.misceval = {};
  Sk.misceval.Suspension = function (a, b, c) {
    this.$isSuspension = !0;
    void 0 !== a &&
      void 0 !== b &&
      (this.resume = function () {
        return a(b.resume());
      });
    this.child = b;
    this.optional = void 0 !== b && b.optional;
    this.data = void 0 === c && void 0 !== b ? b.data : c;
  };
  Sk.exportSymbol("Sk.misceval.Suspension", Sk.misceval.Suspension);
  Sk.misceval.retryOptionalSuspensionOrThrow = function (a, b) {
    for (; a instanceof Sk.misceval.Suspension; ) {
      if (!a.optional) throw new Sk.builtin.SuspensionError(b || "Cannot call a function that blocks or suspends here");
      a = a.resume();
    }
    return a;
  };
  Sk.exportSymbol("Sk.misceval.retryOptionalSuspensionOrThrow", Sk.misceval.retryOptionalSuspensionOrThrow);
  Sk.misceval.isIndex = function (a) {
    return Sk.builtin.checkInt(a) || Sk.abstr.lookupSpecial(a, Sk.builtin.str.$index) ? !0 : !1;
  };
  Sk.exportSymbol("Sk.misceval.isIndex", Sk.misceval.isIndex);
  Sk.misceval.asIndex = function (a) {
    var b;
    if (Sk.misceval.isIndex(a) && null !== a) {
      if (!0 === a) return 1;
      if (!1 === a) return 0;
      if ("number" === typeof a) return a;
      if (a.constructor === Sk.builtin.int_) return a.v;
      if (a.constructor === Sk.builtin.lng) return a.tp$index();
      if (a.constructor === Sk.builtin.bool) return Sk.builtin.asnum$(a);
      if ((b = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$index))) {
        a = Sk.misceval.callsimArray(b, [a]);
        if (!Sk.builtin.checkInt(a)) throw new Sk.builtin.TypeError("__index__ returned non-(int,long) (type " + Sk.abstr.typeName(a) + ")");
        return Sk.builtin.asnum$(a);
      }
      Sk.asserts.fail("todo asIndex;");
    }
  };
  Sk.misceval.applySlice = function (a, b, c, d) {
    return a.sq$slice && Sk.misceval.isIndex(b) && Sk.misceval.isIndex(c)
      ? ((b = Sk.misceval.asIndex(b)), void 0 === b && (b = 0), (c = Sk.misceval.asIndex(c)), void 0 === c && (c = 1e100), Sk.abstr.sequenceGetSlice(a, b, c))
      : Sk.abstr.objectGetItem(a, new Sk.builtin.slice(b, c, null), d);
  };
  Sk.exportSymbol("Sk.misceval.applySlice", Sk.misceval.applySlice);
  Sk.misceval.assignSlice = function (a, b, c, d, e) {
    if (a.sq$ass_slice && Sk.misceval.isIndex(b) && Sk.misceval.isIndex(c)) (e = Sk.misceval.asIndex(b) || 0), (c = Sk.misceval.asIndex(c) || 1e100), null === d ? Sk.abstr.sequenceDelSlice(a, e, c) : Sk.abstr.sequenceSetSlice(a, e, c, d);
    else return (c = new Sk.builtin.slice(b, c)), null === d ? Sk.abstr.objectDelItem(a, c) : Sk.abstr.objectSetItem(a, c, d, e);
  };
  Sk.exportSymbol("Sk.misceval.assignSlice", Sk.misceval.assignSlice);
  Sk.misceval.arrayFromArguments = function (a) {
    var b;
    if (1 != a.length) return a;
    var c = a[0];
    c instanceof Sk.builtin.set ? (c = c.tp$iter().$obj) : c instanceof Sk.builtin.dict && (c = Sk.builtin.dict.prototype.keys.func_code(c));
    if (c instanceof Sk.builtin.list || c instanceof Sk.builtin.tuple) return c.v;
    if (Sk.builtin.checkIterable(c)) {
      a = [];
      c = Sk.abstr.iter(c);
      for (b = c.tp$iternext(); void 0 !== b; b = c.tp$iternext()) a.push(b);
      return a;
    }
    throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(c) + "' object is not iterable");
  };
  Sk.exportSymbol("Sk.misceval.arrayFromArguments", Sk.misceval.arrayFromArguments);
  Sk.misceval.swappedOp_ = { Eq: "Eq", NotEq: "NotEq", Lt: "GtE", LtE: "Gt", Gt: "LtE", GtE: "Lt", Is: "IsNot", IsNot: "Is", In_: "NotIn", NotIn: "In_" };
  Sk.misceval.richCompareBool = function (a, b, c, d) {
    var e;
    Sk.asserts.assert(null !== a && void 0 !== a, "passed null or undefined parameter to Sk.misceval.richCompareBool");
    Sk.asserts.assert(null !== b && void 0 !== b, "passed null or undefined parameter to Sk.misceval.richCompareBool");
    var f = new Sk.builtin.type(a);
    var g = new Sk.builtin.type(b);
    if (f !== g && ("GtE" === c || "Gt" === c || "LtE" === c || "Lt" === c)) {
      var h = [Sk.builtin.float_.prototype.ob$type, Sk.builtin.int_.prototype.ob$type, Sk.builtin.lng.prototype.ob$type, Sk.builtin.bool.prototype.ob$type];
      var k = [Sk.builtin.dict.prototype.ob$type, Sk.builtin.enumerate.prototype.ob$type, Sk.builtin.list.prototype.ob$type, Sk.builtin.str.prototype.ob$type, Sk.builtin.tuple.prototype.ob$type];
      var l = h.indexOf(f);
      var m = k.indexOf(f);
      h = h.indexOf(g);
      k = k.indexOf(g);
      if (f === Sk.builtin.none.prototype.ob$type)
        switch (c) {
          case "Lt":
            return !0;
          case "LtE":
            return !0;
          case "Gt":
            return !1;
          case "GtE":
            return !1;
        }
      if (g === Sk.builtin.none.prototype.ob$type)
        switch (c) {
          case "Lt":
            return !1;
          case "LtE":
            return !1;
          case "Gt":
            return !0;
          case "GtE":
            return !0;
        }
      if (-1 !== l && -1 !== k)
        switch (c) {
          case "Lt":
            return !0;
          case "LtE":
            return !0;
          case "Gt":
            return !1;
          case "GtE":
            return !1;
        }
      if (-1 !== m && -1 !== h)
        switch (c) {
          case "Lt":
            return !1;
          case "LtE":
            return !1;
          case "Gt":
            return !0;
          case "GtE":
            return !0;
        }
      if (-1 !== m && -1 !== k)
        switch (c) {
          case "Lt":
            return m < k;
          case "LtE":
            return m <= k;
          case "Gt":
            return m > k;
          case "GtE":
            return m >= k;
        }
    }
    if ("Is" === c)
      return a instanceof Sk.builtin.int_ && b instanceof Sk.builtin.int_
        ? 0 === a.numberCompare(b)
        : a instanceof Sk.builtin.float_ && b instanceof Sk.builtin.float_
        ? 0 === a.numberCompare(b)
        : a instanceof Sk.builtin.lng && b instanceof Sk.builtin.lng
        ? 0 === a.longCompare(b)
        : a === b;
    if ("IsNot" === c)
      return a instanceof Sk.builtin.int_ && b instanceof Sk.builtin.int_
        ? 0 !== a.numberCompare(b)
        : a instanceof Sk.builtin.float_ && b instanceof Sk.builtin.float_
        ? 0 !== a.numberCompare(b)
        : a instanceof Sk.builtin.lng && b instanceof Sk.builtin.lng
        ? 0 !== a.longCompare(b)
        : a !== b;
    if ("In" === c) return Sk.misceval.chain(Sk.abstr.sequenceContains(b, a, d), Sk.misceval.isTrue);
    if ("NotIn" === c)
      return Sk.misceval.chain(Sk.abstr.sequenceContains(b, a, d), function (a) {
        return !Sk.misceval.isTrue(a);
      });
    l = { Eq: "ob$eq", NotEq: "ob$ne", Gt: "ob$gt", GtE: "ob$ge", Lt: "ob$lt", LtE: "ob$le" };
    m = l[c];
    if ((d = a.constructor.prototype.hasOwnProperty(m)) && (e = a[m](b)) !== Sk.builtin.NotImplemented.NotImplemented$) return Sk.misceval.isTrue(e);
    l = l[Sk.misceval.swappedOp_[c]];
    if ((m = b.constructor.prototype.hasOwnProperty(l)) && (e = b[l](a)) !== Sk.builtin.NotImplemented.NotImplemented$) return Sk.misceval.isTrue(e);
    if (
      (a.tp$richcompare && void 0 !== (e = a.tp$richcompare(b, c)) && e != Sk.builtin.NotImplemented.NotImplemented$) ||
      (b.tp$richcompare && void 0 !== (e = b.tp$richcompare(a, Sk.misceval.swappedOp_[c])) && e != Sk.builtin.NotImplemented.NotImplemented$)
    )
      return Sk.misceval.isTrue(e);
    if (
      ((l = Sk.abstr.lookupSpecial(a, Sk.misceval.op2method_[c])) && !d && ((e = Sk.misceval.callsimArray(l, [a, b])), e != Sk.builtin.NotImplemented.NotImplemented$)) ||
      ((d = Sk.abstr.lookupSpecial(b, Sk.misceval.op2method_[Sk.misceval.swappedOp_[c]])) && !m && ((e = Sk.misceval.callsimArray(d, [b, a])), e != Sk.builtin.NotImplemented.NotImplemented$))
    )
      return Sk.misceval.isTrue(e);
    if ((d = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$cmp)))
      try {
        e = Sk.misceval.callsimArray(d, [a, b]);
        if (Sk.builtin.checkNumber(e)) {
          e = Sk.builtin.asnum$(e);
          if ("Eq" === c) return 0 === e;
          if ("NotEq" === c) return 0 !== e;
          if ("Lt" === c) return 0 > e;
          if ("Gt" === c) return 0 < e;
          if ("LtE" === c) return 0 >= e;
          if ("GtE" === c) return 0 <= e;
        }
        if (e !== Sk.builtin.NotImplemented.NotImplemented$) throw new Sk.builtin.TypeError("comparison did not return an int");
      } catch (n) {
        throw new Sk.builtin.TypeError("comparison did not return an int");
      }
    if ((d = Sk.abstr.lookupSpecial(b, Sk.builtin.str.$cmp)))
      try {
        e = Sk.misceval.callsimArray(d, [b, a]);
        if (Sk.builtin.checkNumber(e)) {
          e = Sk.builtin.asnum$(e);
          if ("Eq" === c) return 0 === e;
          if ("NotEq" === c) return 0 !== e;
          if ("Lt" === c) return 0 < e;
          if ("Gt" === c) return 0 > e;
          if ("LtE" === c) return 0 <= e;
          if ("GtE" === c) return 0 >= e;
        }
        if (e !== Sk.builtin.NotImplemented.NotImplemented$) throw new Sk.builtin.TypeError("comparison did not return an int");
      } catch (n) {
        throw new Sk.builtin.TypeError("comparison did not return an int");
      }
    if ((a instanceof Sk.builtin.none && b instanceof Sk.builtin.none) || (a instanceof Sk.builtin.bool && b instanceof Sk.builtin.bool)) {
      if ("Eq" === c) return a.v === b.v;
      if ("NotEq" === c) return a.v !== b.v;
      if ("Gt" === c) return a.v > b.v;
      if ("GtE" === c) return a.v >= b.v;
      if ("Lt" === c) return a.v < b.v;
      if ("LtE" === c) return a.v <= b.v;
    }
    if ("Eq" === c) return a instanceof Sk.builtin.str && b instanceof Sk.builtin.str ? a.v === b.v : a === b;
    if ("NotEq" === c) return a instanceof Sk.builtin.str && b instanceof Sk.builtin.str ? a.v !== b.v : a !== b;
    a = Sk.abstr.typeName(a);
    b = Sk.abstr.typeName(b);
    throw new Sk.builtin.ValueError("don't know how to compare '" + a + "' and '" + b + "'");
  };
  Sk.exportSymbol("Sk.misceval.richCompareBool", Sk.misceval.richCompareBool);
  Sk.misceval.objectRepr = function (a) {
    Sk.asserts.assert(void 0 !== a, "trying to repr undefined");
    return null === a || a instanceof Sk.builtin.none
      ? new Sk.builtin.str("None")
      : !0 === a
      ? new Sk.builtin.str("True")
      : !1 === a
      ? new Sk.builtin.str("False")
      : "number" === typeof a
      ? new Sk.builtin.str("" + a)
      : "string" === typeof a
      ? new Sk.builtin.str(a)
      : a.$r
      ? a.constructor === Sk.builtin.float_
        ? Infinity === a.v
          ? new Sk.builtin.str("inf")
          : -Infinity === a.v
          ? new Sk.builtin.str("-inf")
          : a.$r()
        : a.$r()
      : a.tp$name
      ? new Sk.builtin.str("<" + a.tp$name + " object>")
      : new Sk.builtin.str("<unknown>");
  };
  Sk.exportSymbol("Sk.misceval.objectRepr", Sk.misceval.objectRepr);
  Sk.misceval.opAllowsEquality = function (a) {
    switch (a) {
      case "LtE":
      case "Eq":
      case "GtE":
        return !0;
    }
    return !1;
  };
  Sk.exportSymbol("Sk.misceval.opAllowsEquality", Sk.misceval.opAllowsEquality);
  Sk.misceval.isTrue = function (a) {
    if (!0 === a) return !0;
    if (!1 === a || null === a || a.constructor === Sk.builtin.none || a.constructor === Sk.builtin.NotImplemented) return !1;
    if (a.constructor === Sk.builtin.bool) return a.v;
    if ("number" === typeof a) return 0 !== a;
    if (a instanceof Sk.builtin.lng) return a.nb$nonzero();
    if (a.constructor === Sk.builtin.int_ || a.constructor === Sk.builtin.float_) return 0 !== a.v;
    if (a.__nonzero__) {
      a = Sk.misceval.callsimArray(a.__nonzero__, [a]);
      if (!Sk.builtin.checkInt(a)) throw new Sk.builtin.TypeError("__nonzero__ should return an int");
      return 0 !== Sk.builtin.asnum$(a);
    }
    if (a.__len__) {
      a = Sk.misceval.callsimArray(a.__len__, [a]);
      if (!Sk.builtin.checkInt(a)) throw new Sk.builtin.TypeError("__len__ should return an int");
      return 0 !== Sk.builtin.asnum$(a);
    }
    return a.mp$length ? 0 !== Sk.builtin.asnum$(a.mp$length()) : a.sq$length ? 0 !== Sk.builtin.asnum$(a.sq$length()) : !0;
  };
  Sk.exportSymbol("Sk.misceval.isTrue", Sk.misceval.isTrue);
  Sk.misceval.softspace_ = !1;
  Sk.misceval.print_ = function (a) {
    Sk.misceval.softspace_ && ("\n" !== a && Sk.output(" "), (Sk.misceval.softspace_ = !1));
    var b = new Sk.builtin.str(a);
    return Sk.misceval.chain(
      Sk.importModule("sys", !1, !0),
      function (a) {
        return Sk.misceval.apply(a.$d.stdout.write, void 0, void 0, void 0, [a.$d.stdout, b]);
      },
      function () {
        var a;
        (a = 0 === b.v.length) || ((a = b.v[b.v.length - 1]), (a = !("\n" === a || "\t" === a || "\r" === a)));
        if (a || " " === b.v[b.v.length - 1]) Sk.misceval.softspace_ = !0;
      }
    );
  };
  Sk.exportSymbol("Sk.misceval.print_", Sk.misceval.print_);
  Sk.misceval.loadname = function (a, b) {
    b = b[a];
    if (void 0 !== b) return "function" === typeof b && void 0 === b.$d && void 0 === b.tp$name ? b() : b;
    b = Sk.builtins[a];
    if (void 0 !== b) return b;
    throw new Sk.builtin.NameError("name '" + Sk.unfixReserved(a) + "' is not defined");
  };
  Sk.exportSymbol("Sk.misceval.loadname", Sk.misceval.loadname);
  Sk.misceval.call = function (a, b, c, d, e) {
    e = Array.prototype.slice.call(arguments, 4);
    return Sk.misceval.apply(a, b, c, d, e);
  };
  Sk.exportSymbol("Sk.misceval.call", Sk.misceval.call);
  Sk.misceval.callAsync = function (a, b, c, d, e, f) {
    f = Array.prototype.slice.call(arguments, 5);
    return Sk.misceval.applyAsync(a, b, c, d, e, f);
  };
  Sk.exportSymbol("Sk.misceval.callAsync", Sk.misceval.callAsync);
  Sk.misceval.callOrSuspend = function (a, b, c, d, e) {
    e = Array.prototype.slice.call(arguments, 4);
    return Sk.misceval.applyOrSuspend(a, b, c, d, e);
  };
  Sk.exportSymbol("Sk.misceval.callOrSuspend", Sk.misceval.callOrSuspend);
  Sk.misceval.callsim = function (a, b) {
    b = Array.prototype.slice.call(arguments, 1);
    return Sk.misceval.apply(a, void 0, void 0, void 0, b);
  };
  Sk.exportSymbol("Sk.misceval.callsim", Sk.misceval.callsim);
  Sk.misceval.callsimArray = function (a, b) {
    return Sk.misceval.apply(a, void 0, void 0, void 0, b ? b : []);
  };
  Sk.exportSymbol("Sk.misceval.callsimArray", Sk.misceval.callsimArray);
  Sk.misceval.callsimAsync = function (a, b, c) {
    c = Array.prototype.slice.call(arguments, 2);
    return Sk.misceval.applyAsync(a, b, void 0, void 0, void 0, c);
  };
  Sk.exportSymbol("Sk.misceval.callsimAsync", Sk.misceval.callsimAsync);
  Sk.misceval.callsimOrSuspend = function (a, b) {
    b = Array.prototype.slice.call(arguments, 1);
    return Sk.misceval.applyOrSuspend(a, void 0, void 0, void 0, b);
  };
  Sk.exportSymbol("Sk.misceval.callsimOrSuspend", Sk.misceval.callsimOrSuspend);
  Sk.misceval.callsimOrSuspendArray = function (a, b) {
    return Sk.misceval.applyOrSuspend(a, void 0, void 0, void 0, b ? b : []);
  };
  Sk.exportSymbol("Sk.misceval.callsimOrSuspendArray", Sk.misceval.callsimOrSuspendArray);
  Sk.misceval.apply = function (a, b, c, d, e) {
    a = Sk.misceval.applyOrSuspend(a, b, c, d, e);
    return a instanceof Sk.misceval.Suspension ? Sk.misceval.retryOptionalSuspensionOrThrow(a) : a;
  };
  Sk.exportSymbol("Sk.misceval.apply", Sk.misceval.apply);
  Sk.misceval.asyncToPromise = function (a, b) {
    return new Promise(function (c, d) {
      try {
        (function g(a) {
          try {
            for (
              var f = function () {
                  try {
                    g(a.resume());
                  } catch (p) {
                    d(p);
                  }
                },
                k = function (b) {
                  try {
                    (a.data.result = b), f();
                  } catch (r) {
                    d(r);
                  }
                },
                l = function (b) {
                  try {
                    (a.data.error = b), f();
                  } catch (r) {
                    d(r);
                  }
                };
              a instanceof Sk.misceval.Suspension;

            ) {
              var m = b && (b[a.data.type] || b["*"]);
              if (m) {
                var n = m(a);
                if (n) {
                  n.then(g, d);
                  return;
                }
              }
              if ("Sk.promise" == a.data.type) {
                a.data.promise.then(k, l);
                return;
              }
              if ("Sk.yield" == a.data.type) {
                setImmediate(f);
                return;
              }
              if ("Sk.delay" == a.data.type) {
                setImmediate(f);
                return;
              }
              if (a.optional) a = a.resume();
              else throw new Sk.builtin.SuspensionError("Unhandled non-optional suspension of type '" + a.data.type + "'");
            }
            c(a);
          } catch (p) {
            d(p);
          }
        })(a());
      } catch (e) {
        d(e);
      }
    });
  };
  Sk.exportSymbol("Sk.misceval.asyncToPromise", Sk.misceval.asyncToPromise);
  Sk.misceval.applyAsync = function (a, b, c, d, e, f) {
    return Sk.misceval.asyncToPromise(function () {
      return Sk.misceval.applyOrSuspend(b, c, d, e, f);
    }, a);
  };
  Sk.exportSymbol("Sk.misceval.applyAsync", Sk.misceval.applyAsync);
  Sk.misceval.chain = function (a, b) {
    for (var c = 1, d = a, e, f; ; ) {
      if (c == arguments.length) return d;
      if (d && d.$isSuspension) break;
      d = arguments[c](d);
      c++;
    }
    f = Array(arguments.length - c);
    for (e = 0; e < arguments.length - c; e++) f[e] = arguments[c + e];
    e = 0;
    return (function k(a) {
      for (; e < f.length; ) {
        if (a instanceof Sk.misceval.Suspension) return new Sk.misceval.Suspension(k, a);
        a = f[e](a);
        e++;
      }
      return a;
    })(d);
  };
  Sk.exportSymbol("Sk.misceval.chain", Sk.misceval.chain);
  Sk.misceval.tryCatch = function (a, b) {
    try {
      var c = a();
    } catch (d) {
      return b(d);
    }
    return c instanceof Sk.misceval.Suspension
      ? ((a = new Sk.misceval.Suspension(void 0, c)),
        (a.resume = function () {
          return Sk.misceval.tryCatch(c.resume, b);
        }),
        a)
      : c;
  };
  Sk.exportSymbol("Sk.misceval.tryCatch", Sk.misceval.tryCatch);
  Sk.misceval.iterFor = function (a, b, c) {
    var d = c,
      e = function (b) {
        d = b;
        return b instanceof Sk.misceval.Break ? b : a.tp$iternext(!0);
      };
    return (function h(a) {
      for (; void 0 !== a; ) {
        if (a instanceof Sk.misceval.Suspension) return new Sk.misceval.Suspension(h, a);
        if (a === Sk.misceval.Break || a instanceof Sk.misceval.Break) return a.brValue;
        a = Sk.misceval.chain(b(a, d), e);
      }
      return d;
    })(a.tp$iternext(!0));
  };
  Sk.exportSymbol("Sk.misceval.iterFor", Sk.misceval.iterFor);
  Sk.misceval.Break = function (a) {
    if (!(this instanceof Sk.misceval.Break)) return new Sk.misceval.Break(a);
    this.brValue = a;
  };
  Sk.exportSymbol("Sk.misceval.Break", Sk.misceval.Break);
  Sk.misceval.applyOrSuspend = function (a, b, c, d, e) {
    var f;
    if (null === a || a instanceof Sk.builtin.none) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not callable");
    "function" === typeof a && void 0 === a.tp$call && (a = new Sk.builtin.func(a));
    var g = a.tp$call;
    if (void 0 !== g) {
      if (c) for (c = c.tp$iter(), f = c.tp$iternext(); void 0 !== f; f = c.tp$iternext()) e.push(f);
      if (b)
        for (c = Sk.abstr.iter(b), f = c.tp$iternext(); void 0 !== f; f = c.tp$iternext()) {
          if (!Sk.builtin.checkString(f)) throw new Sk.builtin.TypeError("Function keywords must be strings");
          d.push(f.v);
          d.push(Sk.abstr.objectGetItem(b, f, !1));
        }
      return g.call(a, e, d, b);
    }
    g = a.__call__;
    if (void 0 !== g) return e.unshift(a), Sk.misceval.apply(g, b, c, d, e);
    throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not callable");
  };
  Sk.exportSymbol("Sk.misceval.applyOrSuspend", Sk.misceval.applyOrSuspend);
  Sk.misceval.promiseToSuspension = function (a) {
    var b = new Sk.misceval.Suspension();
    b.resume = function () {
      if (b.data.error) throw b.data.error;
      return b.data.result;
    };
    b.data = { type: "Sk.promise", promise: a };
    return b;
  };
  Sk.exportSymbol("Sk.misceval.promiseToSuspension", Sk.misceval.promiseToSuspension);
  Sk.misceval.buildClass = function (a, b, c, d, e) {
    var f = Sk.builtin.type,
      g = {};
    b(a, g, void 0 === e ? {} : e);
    g.__module__ = a.__name__;
    a = new Sk.builtin.str(c);
    d = new Sk.builtin.tuple(d);
    b = [];
    for (var h in g) g.hasOwnProperty(h) && (b.push(new Sk.builtin.str(h)), b.push(g[h]));
    b = new Sk.builtin.dict(b);
    return Sk.misceval.callsimArray(f, [a, d, b]);
  };
  Sk.exportSymbol("Sk.misceval.buildClass", Sk.misceval.buildClass);
  Sk.builtin.seqtype = function () {
    throw new Sk.builtin.ExternalError("Cannot instantiate abstract Sk.builtin.seqtype class");
  };
  Sk.abstr.setUpInheritance("SequenceType", Sk.builtin.seqtype, Sk.builtin.object);
  Sk.builtin.seqtype.sk$abstract = !0;
  Sk.builtin.seqtype.prototype.__len__ = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("__len__", arguments.length, 0, 0, !1, !0);
    return new Sk.builtin.int_(a.sq$length());
  });
  Sk.builtin.seqtype.prototype.__iter__ = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("__iter__", arguments.length, 0, 0, !1, !0);
    return a.tp$iter();
  });
  Sk.builtin.seqtype.prototype.__contains__ = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("__contains__", arguments.length, 1, 1, !1, !0);
    return a.sq$contains(b) ? Sk.builtin.bool.true$ : Sk.builtin.bool.false$;
  });
  Sk.builtin.seqtype.prototype.__getitem__ = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("__getitem__", arguments.length, 1, 1, !1, !0);
    return a.mp$subscript(b);
  });
  Sk.builtin.seqtype.prototype.__add__ = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("__add__", arguments.length, 1, 1, !1, !0);
    return a.sq$concat(b);
  });
  Sk.builtin.seqtype.prototype.__mul__ = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("__mul__", arguments.length, 1, 1, !1, !0);
    if (!Sk.misceval.isIndex(b)) throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + Sk.abstr.typeName(b) + "'");
    return a.sq$repeat(b);
  });
  Sk.builtin.seqtype.prototype.__rmul__ = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("__rmul__", arguments.length, 1, 1, !1, !0);
    return a.sq$repeat(b);
  });
  Sk.builtin.list = function (a, b) {
    if (this instanceof Sk.builtin.list) b = b || !1;
    else return new Sk.builtin.list(a, b || !0);
    this.__class__ = Sk.builtin.list;
    if (void 0 === a) var c = [];
    else if ("[object Array]" === Object.prototype.toString.apply(a)) c = a;
    else {
      if (Sk.builtin.checkIterable(a)) {
        c = [];
        var d = Sk.abstr.iter(a);
        var e = this;
        return (function h(a) {
          for (;;) {
            if (a instanceof Sk.misceval.Suspension) return new Sk.misceval.Suspension(h, a);
            if (void 0 === a) return (e.v = c), e;
            c.push(a);
            a = d.tp$iternext(b);
          }
        })(d.tp$iternext(b));
      }
      throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not iterable");
    }
    this.v = this.v = c;
    return this;
  };
  Sk.abstr.setUpInheritance("list", Sk.builtin.list, Sk.builtin.seqtype);
  Sk.abstr.markUnhashable(Sk.builtin.list);
  Sk.builtin.list.prototype.list_concat_ = function (a) {
    var b;
    if (!a.__class__ || a.__class__ != Sk.builtin.list) throw new Sk.builtin.TypeError("can only concatenate list to list");
    var c = this.v.slice();
    for (b = 0; b < a.v.length; ++b) c.push(a.v[b]);
    return new Sk.builtin.list(c, !1);
  };
  Sk.builtin.list.prototype.list_extend_ = function (a) {
    var b;
    if (!Sk.builtin.checkIterable(a)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not iterable");
    if (this == a) {
      var c = [];
      a = Sk.abstr.iter(a);
      for (b = a.tp$iternext(); void 0 !== b; b = a.tp$iternext()) c.push(b);
      this.v.push.apply(this.v, c);
    } else for (a = Sk.abstr.iter(a), b = a.tp$iternext(); void 0 !== b; b = a.tp$iternext()) this.v.push(b);
    return this;
  };
  Sk.builtin.list.prototype.list_del_item_ = function (a) {
    a = Sk.builtin.asnum$(a);
    if (0 > a || a >= this.v.length) throw new Sk.builtin.IndexError("list assignment index out of range");
    this.list_del_slice_(a, a + 1);
  };
  Sk.builtin.list.prototype.list_del_slice_ = function (a, b) {
    a = Sk.builtin.asnum$(a);
    b = Sk.builtin.asnum$(b);
    var c = [];
    c.unshift(b - a);
    c.unshift(a);
    this.v.splice.apply(this.v, c);
  };
  Sk.builtin.list.prototype.list_ass_item_ = function (a, b) {
    a = Sk.builtin.asnum$(a);
    if (0 > a || a >= this.v.length) throw new Sk.builtin.IndexError("list assignment index out of range");
    this.v[a] = b;
  };
  Sk.builtin.list.prototype.list_ass_slice_ = function (a, b, c) {
    a = Sk.builtin.asnum$(a);
    b = Sk.builtin.asnum$(b);
    if (Sk.builtin.checkIterable(c)) c = new Sk.builtin.list(c, !1).v.slice(0);
    else throw new Sk.builtin.TypeError("can only assign an iterable");
    c.unshift(b - a);
    c.unshift(a);
    this.v.splice.apply(this.v, c);
  };
  Sk.builtin.list.prototype.$r = function () {
    var a,
      b = [];
    var c = Sk.abstr.iter(this);
    for (a = c.tp$iternext(); void 0 !== a; a = c.tp$iternext()) a === this ? b.push("[...]") : b.push(Sk.misceval.objectRepr(a).v);
    return new Sk.builtin.str("[" + b.join(", ") + "]");
  };
  Sk.builtin.list.prototype.tp$richcompare = function (a, b) {
    var c;
    if (this === a && Sk.misceval.opAllowsEquality(b)) return !0;
    if (!a.__class__ || a.__class__ != Sk.builtin.list) return "Eq" === b ? !1 : "NotEq" === b ? !0 : !1;
    var d = this.v;
    a = a.v;
    var e = d.length;
    var f = a.length;
    for (c = 0; c < e && c < f; ++c) {
      var g = Sk.misceval.richCompareBool(d[c], a[c], "Eq");
      if (!g) break;
    }
    if (c >= e || c >= f)
      switch (b) {
        case "Lt":
          return e < f;
        case "LtE":
          return e <= f;
        case "Eq":
          return e === f;
        case "NotEq":
          return e !== f;
        case "Gt":
          return e > f;
        case "GtE":
          return e >= f;
        default:
          Sk.asserts.fail();
      }
    return "Eq" === b ? !1 : "NotEq" === b ? !0 : Sk.misceval.richCompareBool(d[c], a[c], b);
  };
  Sk.builtin.list.prototype.__iter__ = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("__iter__", arguments.length, 0, 0, !0, !1);
    return new Sk.builtin.list_iter_(a);
  });
  Sk.builtin.list.prototype.tp$iter = function () {
    return new Sk.builtin.list_iter_(this);
  };
  Sk.builtin.list.prototype.sq$length = function () {
    return this.v.length;
  };
  Sk.builtin.list.prototype.sq$concat = Sk.builtin.list.prototype.list_concat_;
  Sk.builtin.list.prototype.nb$add = Sk.builtin.list.prototype.list_concat_;
  Sk.builtin.list.prototype.nb$inplace_add = Sk.builtin.list.prototype.list_extend_;
  Sk.builtin.list.prototype.sq$repeat = function (a) {
    var b, c;
    if (!Sk.misceval.isIndex(a)) throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + Sk.abstr.typeName(a) + "'");
    a = Sk.misceval.asIndex(a);
    var d = [];
    for (c = 0; c < a; ++c) for (b = 0; b < this.v.length; ++b) d.push(this.v[b]);
    return new Sk.builtin.list(d, !1);
  };
  Sk.builtin.list.prototype.nb$multiply = Sk.builtin.list.prototype.sq$repeat;
  Sk.builtin.list.prototype.nb$inplace_multiply = function (a) {
    var b, c;
    if (!Sk.misceval.isIndex(a)) throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + Sk.abstr.typeName(a) + "'");
    a = Sk.misceval.asIndex(a);
    var d = this.v.length;
    for (c = 1; c < a; ++c) for (b = 0; b < d; ++b) this.v.push(this.v[b]);
    return this;
  };
  Sk.builtin.list.prototype.sq$ass_item = Sk.builtin.list.prototype.list_ass_item_;
  Sk.builtin.list.prototype.sq$del_item = Sk.builtin.list.prototype.list_del_item_;
  Sk.builtin.list.prototype.sq$ass_slice = Sk.builtin.list.prototype.list_ass_slice_;
  Sk.builtin.list.prototype.sq$del_slice = Sk.builtin.list.prototype.list_del_slice_;
  Sk.builtin.list.prototype.sq$contains = function (a) {
    var b;
    var c = this.tp$iter();
    for (b = c.tp$iternext(); void 0 !== b; b = c.tp$iternext()) if (Sk.misceval.richCompareBool(b, a, "Eq")) return !0;
    return !1;
  };
  Sk.builtin.list.prototype.__contains__ = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("__contains__", arguments.length, 2, 2);
    return new Sk.builtin.bool(a.sq$contains(b));
  });
  Sk.builtin.list.prototype.list_subscript_ = function (a) {
    if (Sk.misceval.isIndex(a)) {
      var b = Sk.misceval.asIndex(a);
      if (void 0 !== b) {
        0 > b && (b = this.v.length + b);
        if (0 > b || b >= this.v.length) throw new Sk.builtin.IndexError("list index out of range");
        return this.v[b];
      }
    } else if (a instanceof Sk.builtin.slice) {
      var c = [];
      a.sssiter$(this, function (a, b) {
        c.push(b.v[a]);
      });
      return new Sk.builtin.list(c, !1);
    }
    throw new Sk.builtin.TypeError("list indices must be integers, not " + Sk.abstr.typeName(a));
  };
  Sk.builtin.list.prototype.list_ass_subscript_ = function (a, b) {
    if (Sk.misceval.isIndex(a)) {
      var c = Sk.misceval.asIndex(a);
      if (void 0 !== c) {
        0 > c && (c = this.v.length + c);
        this.list_ass_item_(c, b);
        return;
      }
    } else if (a instanceof Sk.builtin.slice) {
      c = a.slice_indices_(this.v.length);
      if (1 === c[2]) this.list_ass_slice_(c[0], c[1], b);
      else {
        var d = [];
        a.sssiter$(this, function (a, b) {
          d.push(a);
        });
        a = 0;
        if (d.length !== b.v.length) throw new Sk.builtin.ValueError("attempt to assign sequence of size " + b.v.length + " to extended slice of size " + d.length);
        for (c = 0; c < d.length; ++c) this.v.splice(d[c], 1, b.v[a]), (a += 1);
      }
      return;
    }
    throw new Sk.builtin.TypeError("list indices must be integers, not " + Sk.abstr.typeName(a));
  };
  Sk.builtin.list.prototype.list_del_subscript_ = function (a) {
    if (Sk.misceval.isIndex(a)) {
      var b = Sk.misceval.asIndex(a);
      if (void 0 !== b) {
        0 > b && (b = this.v.length + b);
        this.list_del_item_(b);
        return;
      }
    } else if (a instanceof Sk.builtin.slice) {
      b = a.slice_indices_(this.v.length);
      if (1 === b[2]) this.list_del_slice_(b[0], b[1]);
      else {
        var c = this;
        var d = 0;
        var e = 0 < b[2] ? 1 : 0;
        a.sssiter$(this, function (a, b) {
          c.v.splice(a - d, 1);
          d += e;
        });
      }
      return;
    }
    throw new Sk.builtin.TypeError("list indices must be integers, not " + typeof a);
  };
  Sk.builtin.list.prototype.mp$subscript = Sk.builtin.list.prototype.list_subscript_;
  Sk.builtin.list.prototype.mp$ass_subscript = Sk.builtin.list.prototype.list_ass_subscript_;
  Sk.builtin.list.prototype.mp$del_subscript = Sk.builtin.list.prototype.list_del_subscript_;
  Sk.builtin.list.prototype.__getitem__ = new Sk.builtin.func(function (a, b) {
    return Sk.builtin.list.prototype.list_subscript_.call(a, b);
  });
  Sk.builtin.list.prototype.__setitem__ = new Sk.builtin.func(function (a, b, c) {
    return Sk.builtin.list.prototype.list_ass_subscript_.call(a, b, c);
  });
  Sk.builtin.list.prototype.__delitem__ = new Sk.builtin.func(function (a, b) {
    return Sk.builtin.list.prototype.list_del_subscript_.call(a, b);
  });
  Sk.builtin.list.prototype.list_sort_ = function (a, b, c, d) {
    var e,
      f = void 0 !== c && null !== c && c !== Sk.builtin.none.none$;
    var g = void 0 !== b && null !== b && b !== Sk.builtin.none.none$;
    if (void 0 === d) var h = !1;
    else {
      if (d === Sk.builtin.none.none$) throw new Sk.builtin.TypeError("an integer is required");
      h = Sk.misceval.isTrue(d);
    }
    d = new Sk.builtin.timSort(a);
    a.v = [];
    var k = new Sk.builtin.int_(0);
    if (f)
      for (
        d.lt = g
          ? function (a, c) {
              a = Sk.misceval.callsimArray(b, [a[0], c[0]]);
              return Sk.misceval.richCompareBool(a, k, "Lt");
            }
          : function (a, b) {
              return Sk.misceval.richCompareBool(a[0], b[0], "Lt");
            },
          e = 0;
        e < d.listlength;
        e++
      ) {
        g = d.list.v[e];
        var l = Sk.misceval.callsimArray(c, [g]);
        d.list.v[e] = [l, g];
      }
    else
      g &&
        (d.lt = function (a, c) {
          a = Sk.misceval.callsimArray(b, [a, c]);
          return Sk.misceval.richCompareBool(a, k, "Lt");
        });
    h && d.list.list_reverse_(d.list);
    d.sort();
    h && d.list.list_reverse_(d.list);
    if (f) for (c = 0; c < d.listlength; c++) (g = d.list.v[c][1]), (d.list.v[c] = g);
    c = 0 < a.sq$length();
    a.v = d.list.v;
    if (c) throw new Sk.builtin.OperationError("list modified during sort");
    return Sk.builtin.none.none$;
  };
  Sk.builtin.list.prototype.list_sort_.co_varnames = ["__self__", "cmp", "key", "reverse"];
  Sk.builtin.list.prototype.list_sort_.$defaults = [Sk.builtin.none.none$, Sk.builtin.none.none$, !1];
  Sk.builtin.list.prototype.list_reverse_ = function (a) {
    Sk.builtin.pyCheckArgsLen("reverse", arguments.length, 1, 1);
    var b = a.v.length;
    var c = a.v;
    var d = [];
    for (--b; -1 < b; --b) d.push(c[b]);
    a.v = d;
    return Sk.builtin.none.none$;
  };
  Sk.builtin.list.prototype.append = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("append", arguments.length, 2, 2);
    a.v.push(b);
    return Sk.builtin.none.none$;
  });
  Sk.builtin.list.prototype.insert = new Sk.builtin.func(function (a, b, c) {
    Sk.builtin.pyCheckArgsLen("insert", arguments.length, 3, 3);
    if (!Sk.builtin.checkNumber(b)) throw new Sk.builtin.TypeError("an integer is required");
    b = Sk.builtin.asnum$(b);
    0 > b && (b += a.v.length);
    0 > b ? (b = 0) : b > a.v.length && (b = a.v.length);
    a.v.splice(b, 0, c);
    return Sk.builtin.none.none$;
  });
  Sk.builtin.list.prototype.extend = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("extend", arguments.length, 2, 2);
    a.list_extend_(b);
    return Sk.builtin.none.none$;
  });
  Sk.builtin.list.prototype.pop = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("pop", arguments.length, 1, 2);
    void 0 === b && (b = a.v.length - 1);
    if (!Sk.builtin.checkNumber(b)) throw new Sk.builtin.TypeError("an integer is required");
    b = Sk.builtin.asnum$(b);
    0 > b && (b += a.v.length);
    if (0 > b || b >= a.v.length) throw new Sk.builtin.IndexError("pop index out of range");
    var c = a.v[b];
    a.v.splice(b, 1);
    return c;
  });
  Sk.builtin.list.prototype.remove = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("remove", arguments.length, 2, 2);
    var c = Sk.builtin.list.prototype.index.func_code(a, b);
    a.v.splice(Sk.builtin.asnum$(c), 1);
    return Sk.builtin.none.none$;
  });
  Sk.builtin.list.prototype.index = new Sk.builtin.func(function (a, b, c, d) {
    Sk.builtin.pyCheckArgsLen("index", arguments.length, 2, 4);
    if (void 0 !== c && !Sk.builtin.checkInt(c)) throw new Sk.builtin.TypeError("slice indices must be integers");
    if (void 0 !== d && !Sk.builtin.checkInt(d)) throw new Sk.builtin.TypeError("slice indices must be integers");
    var e = a.v.length;
    var f = a.v;
    c = void 0 === c ? 0 : c.v;
    0 > c && (c = 0 <= c + e ? c + e : 0);
    d = void 0 === d ? e : d.v;
    0 > d && (d = 0 <= d + e ? d + e : 0);
    for (e = c; e < d; ++e) if (Sk.misceval.richCompareBool(f[e], b, "Eq")) return new Sk.builtin.int_(e);
    throw new Sk.builtin.ValueError("list.index(x): x not in list");
  });
  Sk.builtin.list.prototype.count = new Sk.builtin.func(function (a, b) {
    var c, d;
    Sk.builtin.pyCheckArgsLen("count", arguments.length, 2, 2);
    var e = a.v.length;
    var f = a.v;
    for (c = d = 0; c < e; ++c) Sk.misceval.richCompareBool(f[c], b, "Eq") && (d += 1);
    return new Sk.builtin.int_(d);
  });
  Sk.builtin.list.prototype.reverse = new Sk.builtin.func(Sk.builtin.list.prototype.list_reverse_);
  Sk.builtin.list.prototype.sort = new Sk.builtin.func(Sk.builtin.list.prototype.list_sort_);
  Sk.exportSymbol("Sk.builtin.list", Sk.builtin.list);
  Sk.builtin.list_iter_ = function (a) {
    if (!(this instanceof Sk.builtin.list_iter_)) return new Sk.builtin.list_iter_(a);
    this.$index = 0;
    this.lst = a.v.slice();
    this.sq$length = this.lst.length;
    this.tp$iter = this;
    this.tp$iternext = function () {
      if (!(this.$index >= this.sq$length)) return this.lst[this.$index++];
    };
    this.$r = function () {
      return new Sk.builtin.str("listiterator");
    };
    return this;
  };
  Sk.abstr.setUpInheritance("listiterator", Sk.builtin.list_iter_, Sk.builtin.object);
  Sk.builtin.list_iter_.prototype.__class__ = Sk.builtin.list_iter_;
  Sk.builtin.list_iter_.prototype.__iter__ = new Sk.builtin.func(function (a) {
    return a;
  });
  Sk.builtin.list_iter_.prototype.next$ = function (a) {
    a = a.tp$iternext();
    if (void 0 === a) throw new Sk.builtin.StopIteration();
    return a;
  };
  Sk.builtin.interned = {};
  Sk.builtin.str = function (a) {
    Sk.builtin.pyCheckArgsLen("str", arguments.length, 0, 1);
    void 0 === a && (a = "");
    if (a instanceof Sk.builtin.str) return a;
    if (!(this instanceof Sk.builtin.str)) return new Sk.builtin.str(a);
    if (!0 === a) var b = "True";
    else if (!1 === a) b = "False";
    else if (null === a || a instanceof Sk.builtin.none) b = "None";
    else if (a instanceof Sk.builtin.bool) b = a.v ? "True" : "False";
    else if ("number" === typeof a) (b = a.toString()), "Infinity" === b ? (b = "inf") : "-Infinity" === b && (b = "-inf");
    else if ("string" === typeof a) b = a;
    else {
      if (void 0 !== a.tp$str) {
        b = a.tp$str();
        if (!(b instanceof Sk.builtin.str)) throw new Sk.builtin.ValueError("__str__ didn't return a str");
        return b;
      }
      return Sk.misceval.objectRepr(a);
    }
    if (Sk.builtin.interned["1" + b]) return Sk.builtin.interned["1" + b];
    this.__class__ = Sk.builtin.str;
    this.v = this.v = b;
    Sk.builtin.interned["1" + b] = this;
    return this;
  };
  Sk.exportSymbol("Sk.builtin.str", Sk.builtin.str);
  Sk.abstr.setUpInheritance("str", Sk.builtin.str, Sk.builtin.seqtype);
  Sk.builtin.str.prototype.$jsstr = function () {
    return this.v;
  };
  Sk.builtin.str.prototype.mp$subscript = function (a) {
    if (Sk.misceval.isIndex(a)) {
      a = Sk.misceval.asIndex(a);
      0 > a && (a = this.v.length + a);
      if (0 > a || a >= this.v.length) throw new Sk.builtin.IndexError("string index out of range");
      return new Sk.builtin.str(this.v.charAt(a));
    }
    if (a instanceof Sk.builtin.slice) {
      var b = "";
      a.sssiter$(this, function (a, d) {
        0 <= a && a < d.v.length && (b += d.v.charAt(a));
      });
      return new Sk.builtin.str(b);
    }
    throw new Sk.builtin.TypeError("string indices must be integers, not " + Sk.abstr.typeName(a));
  };
  Sk.builtin.str.prototype.sq$length = function () {
    return this.v.length;
  };
  Sk.builtin.str.prototype.sq$concat = function (a) {
    if (!a || !Sk.builtin.checkString(a)) throw ((a = Sk.abstr.typeName(a)), new Sk.builtin.TypeError("cannot concatenate 'str' and '" + a + "' objects"));
    return new Sk.builtin.str(this.v + a.v);
  };
  Sk.builtin.str.prototype.nb$add = Sk.builtin.str.prototype.sq$concat;
  Sk.builtin.str.prototype.nb$inplace_add = Sk.builtin.str.prototype.sq$concat;
  Sk.builtin.str.prototype.sq$repeat = function (a) {
    var b;
    if (!Sk.misceval.isIndex(a)) throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + Sk.abstr.typeName(a) + "'");
    a = Sk.misceval.asIndex(a);
    var c = "";
    for (b = 0; b < a; ++b) c += this.v;
    return new Sk.builtin.str(c);
  };
  Sk.builtin.str.prototype.nb$multiply = Sk.builtin.str.prototype.sq$repeat;
  Sk.builtin.str.prototype.nb$inplace_multiply = Sk.builtin.str.prototype.sq$repeat;
  Sk.builtin.str.prototype.sq$item = function () {
    Sk.asserts.fail();
  };
  Sk.builtin.str.prototype.sq$slice = function (a, b) {
    a = Sk.builtin.asnum$(a);
    b = Sk.builtin.asnum$(b);
    0 > a && (a = 0);
    return new Sk.builtin.str(this.v.substr(a, b - a));
  };
  Sk.builtin.str.prototype.sq$contains = function (a) {
    if (!(a instanceof Sk.builtin.str)) throw new Sk.builtin.TypeError("TypeError: 'In <string> requires string as left operand");
    return -1 != this.v.indexOf(a.v);
  };
  Sk.builtin.str.prototype.__iter__ = new Sk.builtin.func(function (a) {
    return new Sk.builtin.str_iter_(a);
  });
  Sk.builtin.str.prototype.tp$iter = function () {
    return new Sk.builtin.str_iter_(this);
  };
  Sk.builtin.str.prototype.tp$richcompare = function (a, b) {
    if (a instanceof Sk.builtin.str)
      switch (b) {
        case "Lt":
          return this.v < a.v;
        case "LtE":
          return this.v <= a.v;
        case "Eq":
          return this.v === a.v;
        case "NotEq":
          return this.v !== a.v;
        case "Gt":
          return this.v > a.v;
        case "GtE":
          return this.v >= a.v;
        default:
          Sk.asserts.fail();
      }
  };
  Sk.builtin.str.prototype.$r = function () {
    var a,
      b = "'";
    -1 !== this.v.indexOf("'") && -1 === this.v.indexOf('"') && (b = '"');
    var c = this.v.length;
    var d = b;
    for (a = 0; a < c; ++a) {
      var e = this.v.charAt(a);
      e === b || "\\" === e
        ? (d += "\\" + e)
        : "\t" === e
        ? (d += "\\t")
        : "\n" === e
        ? (d += "\\n")
        : "\r" === e
        ? (d += "\\r")
        : " " > e || 127 <= e
        ? ((e = e.charCodeAt(0).toString(16)), 2 > e.length && (e = "0" + e), (d += "\\x" + e))
        : (d += e);
    }
    return new Sk.builtin.str(d + b);
  };
  Sk.builtin.str.re_escape_ = function (a) {
    var b,
      c = [],
      d = /^[A-Za-z0-9]+$/;
    for (b = 0; b < a.length; ++b) {
      var e = a.charAt(b);
      d.test(e) ? c.push(e) : "\\000" === e ? c.push("\\000") : c.push("\\" + e);
    }
    return c.join("");
  };
  Sk.builtin.str.prototype.lower = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("lower", arguments.length, 1, 1);
    return new Sk.builtin.str(a.v.toLowerCase());
  });
  Sk.builtin.str.prototype.upper = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("upper", arguments.length, 1, 1);
    return new Sk.builtin.str(a.v.toUpperCase());
  });
  Sk.builtin.str.prototype.capitalize = new Sk.builtin.func(function (a) {
    var b;
    Sk.builtin.pyCheckArgsLen("capitalize", arguments.length, 1, 1);
    var c = a.v;
    if (0 === c.length) return new Sk.builtin.str("");
    var d = c.charAt(0).toUpperCase();
    for (b = 1; b < c.length; b++) d += c.charAt(b).toLowerCase();
    return new Sk.builtin.str(d);
  });
  Sk.builtin.str.prototype.join = new Sk.builtin.func(function (a, b) {
    var c;
    Sk.builtin.pyCheckArgsLen("join", arguments.length, 2, 2);
    Sk.builtin.pyCheckType("seq", "iterable", Sk.builtin.checkIterable(b));
    var d = [];
    var e = b.tp$iter();
    for (c = e.tp$iternext(); void 0 !== c; c = e.tp$iternext()) {
      if (c.constructor !== Sk.builtin.str) throw new Sk.builtin.TypeError("TypeError: sequence item " + d.length + ": expected string, " + typeof c + " found");
      d.push(c.v);
    }
    return new Sk.builtin.str(d.join(a.v));
  });
  Sk.builtin.str.prototype.split = new Sk.builtin.func(function (a, b, c) {
    var d, e;
    Sk.builtin.pyCheckArgsLen("split", arguments.length, 1, 3);
    if (void 0 === b || b instanceof Sk.builtin.none) b = null;
    if (null !== b && !Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("expected a string");
    if (null !== b && "" === b.v) throw new Sk.builtin.ValueError("empty separator");
    if (void 0 !== c && !Sk.builtin.checkInt(c)) throw new Sk.builtin.TypeError("an integer is required");
    c = Sk.builtin.asnum$(c);
    var f = /[\s\xa0]+/g;
    var g = a.v;
    if (null === b) g = g.replace(/^[\s\xa0]+/, "");
    else {
      var h = b.v.replace(/([.*+?=|\\\/()\[\]\{\}^$])/g, "\\$1");
      f = new RegExp(h, "g");
    }
    var k = [];
    for (h = d = 0; null != (e = f.exec(g)) && e.index !== f.lastIndex && !(k.push(new Sk.builtin.str(g.substring(d, e.index))), (d = f.lastIndex), (h += 1), c && h >= c); );
    g = g.substring(d);
    (null !== b || 0 < g.length) && k.push(new Sk.builtin.str(g));
    return new Sk.builtin.list(k);
  });
  Sk.builtin.str.prototype.strip = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("strip", arguments.length, 1, 2);
    if (void 0 !== b && !Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("strip arg must be None or str");
    if (void 0 === b) var c = /^\s+|\s+$/g;
    else (c = Sk.builtin.str.re_escape_(b.v)), (c = new RegExp("^[" + c + "]+|[" + c + "]+$", "g"));
    return new Sk.builtin.str(a.v.replace(c, ""));
  });
  Sk.builtin.str.prototype.lstrip = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("lstrip", arguments.length, 1, 2);
    if (void 0 !== b && !Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("lstrip arg must be None or str");
    if (void 0 === b) var c = /^\s+/g;
    else (c = Sk.builtin.str.re_escape_(b.v)), (c = new RegExp("^[" + c + "]+", "g"));
    return new Sk.builtin.str(a.v.replace(c, ""));
  });
  Sk.builtin.str.prototype.rstrip = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("rstrip", arguments.length, 1, 2);
    if (void 0 !== b && !Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("rstrip arg must be None or str");
    if (void 0 === b) var c = /\s+$/g;
    else (c = Sk.builtin.str.re_escape_(b.v)), (c = new RegExp("[" + c + "]+$", "g"));
    return new Sk.builtin.str(a.v.replace(c, ""));
  });
  Sk.builtin.str.prototype.__format__ = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("__format__", arguments.length, 2, 2);
    if (Sk.builtin.checkString(b)) {
      var c = Sk.ffi.remapToJs(b);
      if ("" !== c && "s" !== c) throw new Sk.builtin.NotImplementedError("format spec is not yet implemented");
    } else {
      if (Sk.__future__.exceptions) throw new Sk.builtin.TypeError("format() argument 2 must be str, not " + Sk.abstr.typeName(b));
      throw new Sk.builtin.TypeError("format expects arg 2 to be string or unicode, not " + Sk.abstr.typeName(b));
    }
    return new Sk.builtin.str(a);
  });
  Sk.builtin.str.prototype.partition = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("partition", arguments.length, 2, 2);
    Sk.builtin.pyCheckType("sep", "string", Sk.builtin.checkString(b));
    var c = new Sk.builtin.str(b);
    var d = a.v.indexOf(c.v);
    return 0 > d ? new Sk.builtin.tuple([a, Sk.builtin.str.$emptystr, Sk.builtin.str.$emptystr]) : new Sk.builtin.tuple([new Sk.builtin.str(a.v.substring(0, d)), c, new Sk.builtin.str(a.v.substring(d + c.v.length))]);
  });
  Sk.builtin.str.prototype.rpartition = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("rpartition", arguments.length, 2, 2);
    Sk.builtin.pyCheckType("sep", "string", Sk.builtin.checkString(b));
    var c = new Sk.builtin.str(b);
    var d = a.v.lastIndexOf(c.v);
    return 0 > d ? new Sk.builtin.tuple([Sk.builtin.str.$emptystr, Sk.builtin.str.$emptystr, a]) : new Sk.builtin.tuple([new Sk.builtin.str(a.v.substring(0, d)), c, new Sk.builtin.str(a.v.substring(d + c.v.length))]);
  });
  Sk.builtin.str.prototype.count = new Sk.builtin.func(function (a, b, c, d) {
    Sk.builtin.pyCheckArgsLen("count", arguments.length, 2, 4);
    if (!Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("expected a character buffer object");
    if (void 0 !== c && !Sk.builtin.checkInt(c)) throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
    if (void 0 !== d && !Sk.builtin.checkInt(d)) throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
    void 0 === c ? (c = 0) : ((c = Sk.builtin.asnum$(c)), (c = 0 <= c ? c : a.v.length + c));
    void 0 === d ? (d = a.v.length) : ((d = Sk.builtin.asnum$(d)), (d = 0 <= d ? d : a.v.length + d));
    var e = b.v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    e = new RegExp(e, "g");
    return (e = a.v.slice(c, d).match(e)) ? new Sk.builtin.int_(e.length) : new Sk.builtin.int_(0);
  });
  Sk.builtin.str.prototype.ljust = new Sk.builtin.func(function (a, b, c) {
    Sk.builtin.pyCheckArgsLen("ljust", arguments.length, 2, 3);
    if (!Sk.builtin.checkInt(b)) throw new Sk.builtin.TypeError("integer argument exepcted, got " + Sk.abstr.typeName(b));
    if (void 0 !== c && (!Sk.builtin.checkString(c) || 1 !== c.v.length)) throw new Sk.builtin.TypeError("must be char, not " + Sk.abstr.typeName(c));
    c = void 0 === c ? " " : c.v;
    b = Sk.builtin.asnum$(b);
    if (a.v.length >= b) return a;
    var d = Array.prototype.join.call({ length: Math.floor(b - a.v.length) + 1 }, c);
    return new Sk.builtin.str(a.v + d);
  });
  Sk.builtin.str.prototype.rjust = new Sk.builtin.func(function (a, b, c) {
    Sk.builtin.pyCheckArgsLen("rjust", arguments.length, 2, 3);
    if (!Sk.builtin.checkInt(b)) throw new Sk.builtin.TypeError("integer argument exepcted, got " + Sk.abstr.typeName(b));
    if (void 0 !== c && (!Sk.builtin.checkString(c) || 1 !== c.v.length)) throw new Sk.builtin.TypeError("must be char, not " + Sk.abstr.typeName(c));
    c = void 0 === c ? " " : c.v;
    b = Sk.builtin.asnum$(b);
    if (a.v.length >= b) return a;
    var d = Array.prototype.join.call({ length: Math.floor(b - a.v.length) + 1 }, c);
    return new Sk.builtin.str(d + a.v);
  });
  Sk.builtin.str.prototype.center = new Sk.builtin.func(function (a, b, c) {
    Sk.builtin.pyCheckArgsLen("center", arguments.length, 2, 3);
    if (!Sk.builtin.checkInt(b)) throw new Sk.builtin.TypeError("integer argument exepcted, got " + Sk.abstr.typeName(b));
    if (void 0 !== c && (!Sk.builtin.checkString(c) || 1 !== c.v.length)) throw new Sk.builtin.TypeError("must be char, not " + Sk.abstr.typeName(c));
    c = void 0 === c ? " " : c.v;
    b = Sk.builtin.asnum$(b);
    if (a.v.length >= b) return a;
    var d = Array.prototype.join.call({ length: Math.floor((b - a.v.length) / 2) + 1 }, c);
    d = d + a.v + d;
    d.length < b && (d += c);
    return new Sk.builtin.str(d);
  });
  Sk.builtin.str.prototype.find = new Sk.builtin.func(function (a, b, c, d) {
    Sk.builtin.pyCheckArgsLen("find", arguments.length, 2, 4);
    if (!Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("expected a character buffer object");
    if (void 0 !== c && !Sk.builtin.checkInt(c)) throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
    if (void 0 !== d && !Sk.builtin.checkInt(d)) throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
    void 0 === c ? (c = 0) : ((c = Sk.builtin.asnum$(c)), (c = 0 <= c ? c : a.v.length + c));
    void 0 === d ? (d = a.v.length) : ((d = Sk.builtin.asnum$(d)), (d = 0 <= d ? d : a.v.length + d));
    var e = a.v.indexOf(b.v, c);
    return new Sk.builtin.int_(e >= c && e < d ? e : -1);
  });
  Sk.builtin.str.prototype.index = new Sk.builtin.func(function (a, b, c, d) {
    Sk.builtin.pyCheckArgsLen("index", arguments.length, 2, 4);
    var e = Sk.misceval.callsimArray(a.find, [a, b, c, d]);
    if (-1 === Sk.builtin.asnum$(e)) throw new Sk.builtin.ValueError("substring not found");
    return e;
  });
  Sk.builtin.str.prototype.rfind = new Sk.builtin.func(function (a, b, c, d) {
    Sk.builtin.pyCheckArgsLen("rfind", arguments.length, 2, 4);
    if (!Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("expected a character buffer object");
    if (void 0 !== c && !Sk.builtin.checkInt(c)) throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
    if (void 0 !== d && !Sk.builtin.checkInt(d)) throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
    void 0 === c ? (c = 0) : ((c = Sk.builtin.asnum$(c)), (c = 0 <= c ? c : a.v.length + c));
    void 0 === d ? (d = a.v.length) : ((d = Sk.builtin.asnum$(d)), (d = 0 <= d ? d : a.v.length + d));
    var e = a.v.lastIndexOf(b.v, d);
    e = e !== d ? e : a.v.lastIndexOf(b.v, d - 1);
    return new Sk.builtin.int_(e >= c && e < d ? e : -1);
  });
  Sk.builtin.str.prototype.rindex = new Sk.builtin.func(function (a, b, c, d) {
    Sk.builtin.pyCheckArgsLen("rindex", arguments.length, 2, 4);
    var e = Sk.misceval.callsimArray(a.rfind, [a, b, c, d]);
    if (-1 === Sk.builtin.asnum$(e)) throw new Sk.builtin.ValueError("substring not found");
    return e;
  });
  Sk.builtin.str.prototype.startswith = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("startswith", arguments.length, 2, 2);
    Sk.builtin.pyCheckType("tgt", "string", Sk.builtin.checkString(b));
    return new Sk.builtin.bool(0 === a.v.indexOf(b.v));
  });
  Sk.builtin.str.prototype.endswith = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("endswith", arguments.length, 2, 2);
    Sk.builtin.pyCheckType("tgt", "string", Sk.builtin.checkString(b));
    return new Sk.builtin.bool(-1 !== a.v.indexOf(b.v, a.v.length - b.v.length));
  });
  Sk.builtin.str.prototype.replace = new Sk.builtin.func(function (a, b, c, d) {
    Sk.builtin.pyCheckArgsLen("replace", arguments.length, 3, 4);
    Sk.builtin.pyCheckType("oldS", "string", Sk.builtin.checkString(b));
    Sk.builtin.pyCheckType("newS", "string", Sk.builtin.checkString(c));
    if (void 0 !== d && !Sk.builtin.checkInt(d)) throw new Sk.builtin.TypeError("integer argument expected, got " + Sk.abstr.typeName(d));
    d = Sk.builtin.asnum$(d);
    var e = new RegExp(Sk.builtin.str.re_escape_(b.v), "g");
    if (void 0 === d || 0 > d) return new Sk.builtin.str(a.v.replace(e, c.v));
    var f = 0;
    return new Sk.builtin.str(
      a.v.replace(e, function (a) {
        f++;
        return f <= d ? c.v : a;
      })
    );
  });
  Sk.builtin.str.prototype.zfill = new Sk.builtin.func(function (a, b) {
    var c = a.v,
      d = "";
    Sk.builtin.pyCheckArgsLen("zfill", arguments.length, 2, 2);
    if (!Sk.builtin.checkInt(b)) throw new Sk.builtin.TypeError("integer argument exepected, got " + Sk.abstr.typeName(b));
    var e = b.v - c.length;
    var f = "+" === c[0] || "-" === c[0] ? 1 : 0;
    for (var g = 0; g < e; g++) d += "0";
    c = c.substr(0, f) + d + c.substr(f);
    return new Sk.builtin.str(c);
  });
  Sk.builtin.str.prototype.isdigit = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("isdigit", arguments.length, 1, 1);
    return new Sk.builtin.bool(/^\d+$/.test(a.v));
  });
  Sk.builtin.str.prototype.isspace = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("isspace", arguments.length, 1, 1);
    return new Sk.builtin.bool(/^\s+$/.test(a.v));
  });
  Sk.builtin.str.prototype.expandtabs = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("expandtabs", arguments.length, 1, 2);
    if (void 0 !== b && !Sk.builtin.checkInt(b)) throw new Sk.builtin.TypeError("integer argument exepected, got " + Sk.abstr.typeName(b));
    b = void 0 === b ? 8 : Sk.builtin.asnum$(b);
    var c = Array(b + 1).join(" ");
    var d = a.v.replace(/([^\r\n\t]*)\t/g, function (a, d) {
      return d + c.slice(d.length % b);
    });
    return new Sk.builtin.str(d);
  });
  Sk.builtin.str.prototype.swapcase = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("swapcase", arguments.length, 1, 1);
    var b = a.v.replace(/[a-z]/gi, function (a) {
      var b = a.toLowerCase();
      return b === a ? a.toUpperCase() : b;
    });
    return new Sk.builtin.str(b);
  });
  Sk.builtin.str.prototype.splitlines = new Sk.builtin.func(function (a, b) {
    var c = a.v,
      d,
      e = a.v.length,
      f = [],
      g = 0;
    Sk.builtin.pyCheckArgsLen("splitlines", arguments.length, 1, 2);
    if (void 0 !== b && !Sk.builtin.checkBool(b)) throw new Sk.builtin.TypeError("boolean argument expected, got " + Sk.abstr.typeName(b));
    b = void 0 === b ? !1 : b.v;
    for (d = 0; d < e; d++) {
      var h = c.charAt(d);
      if ("\n" === c.charAt(d + 1) && "\r" === h) (h = d + 2), (g = c.slice(g, h)), b || (g = g.replace(/(\r|\n)/g, "")), f.push(new Sk.builtin.str(g)), (g = h);
      else if (("\n" === h && "\r" !== c.charAt(d - 1)) || "\r" === h) (h = d + 1), (g = c.slice(g, h)), b || (g = g.replace(/(\r|\n)/g, "")), f.push(new Sk.builtin.str(g)), (g = h);
    }
    g < e && ((g = c.slice(g, e)), b || (g = g.replace(/(\r|\n)/g, "")), f.push(new Sk.builtin.str(g)));
    return new Sk.builtin.list(f);
  });
  Sk.builtin.str.prototype.title = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("title", arguments.length, 1, 1);
    var b = a.v.replace(/[a-z][a-z]*/gi, function (a) {
      return a[0].toUpperCase() + a.substr(1).toLowerCase();
    });
    return new Sk.builtin.str(b);
  });
  Sk.builtin.str.prototype.isalpha = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("isalpha", arguments.length, 1, 1);
    return new Sk.builtin.bool(a.v.length && !/[^a-zA-Z]/.test(a.v));
  });
  Sk.builtin.str.prototype.isalnum = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("isalnum", arguments.length, 1, 1);
    return new Sk.builtin.bool(a.v.length && !/[^a-zA-Z0-9]/.test(a.v));
  });
  Sk.builtin.str.prototype.isnumeric = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("isnumeric", arguments.length, 1, 1);
    return new Sk.builtin.bool(a.v.length && !/[^0-9]/.test(a.v));
  });
  Sk.builtin.str.prototype.islower = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("islower", arguments.length, 1, 1);
    return new Sk.builtin.bool(a.v.length && /[a-z]/.test(a.v) && !/[A-Z]/.test(a.v));
  });
  Sk.builtin.str.prototype.isupper = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("isupper", arguments.length, 1, 1);
    return new Sk.builtin.bool(a.v.length && !/[a-z]/.test(a.v) && /[A-Z]/.test(a.v));
  });
  Sk.builtin.str.prototype.istitle = new Sk.builtin.func(function (a) {
    var b = a.v,
      c = !1,
      d = !1,
      e;
    Sk.builtin.pyCheckArgsLen("istitle", arguments.length, 1, 1);
    for (e = 0; e < b.length; e++) {
      var f = b.charAt(e);
      if (!/[a-z]/.test(f) && /[A-Z]/.test(f)) {
        if (d) return new Sk.builtin.bool(!1);
        c = d = !0;
      } else if (/[a-z]/.test(f) && !/[A-Z]/.test(f)) {
        if (!d) return new Sk.builtin.bool(!1);
        c = !0;
      } else d = !1;
    }
    return new Sk.builtin.bool(c);
  });
  Sk.builtin.str.prototype.nb$remainder = function (a) {
    a.constructor === Sk.builtin.tuple || (void 0 !== a.mp$subscript && a.constructor !== Sk.builtin.str) || (a = new Sk.builtin.tuple([a]));
    var b = 0;
    var c = this.v.replace(/%(\([a-zA-Z0-9]+\))?([#0 +\-]+)?(\*|[0-9]+)?(\.(\*|[0-9]+))?[hlL]?([diouxXeEfFgGcrs%])/g, function (c, e, f, g, h, k, l) {
      var d, n, p, r;
      g = Sk.builtin.asnum$(g);
      h = Sk.builtin.asnum$(h);
      if (void 0 === e || "" === e) var q = b++;
      "" === h && (h = void 0);
      var t = (d = n = p = r = !1);
      f && (-1 !== f.indexOf("-") ? (p = !0) : -1 !== f.indexOf("0") && (r = !0), -1 !== f.indexOf("+") ? (d = !0) : -1 !== f.indexOf(" ") && (n = !0), (t = -1 !== f.indexOf("#")));
      h && (h = parseInt(h.substr(1), 10));
      f = function (a, b) {
        var c;
        b = Sk.builtin.asnum$(b);
        var e = !1;
        if ("number" === typeof a) {
          0 > a && ((a = -a), (e = !0));
          var f = a.toString(b);
        } else
          a instanceof Sk.builtin.float_
            ? ((f = a.str$(b, !1)), 2 < f.length && ".0" === f.substr(-2) && (f = f.substr(0, f.length - 2)), (e = a.nb$isnegative()))
            : a instanceof Sk.builtin.int_
            ? ((f = a.str$(b, !1)), (e = a.nb$isnegative()))
            : a instanceof Sk.builtin.lng && ((f = a.str$(b, !1)), (e = a.nb$isnegative()));
        Sk.asserts.assert(void 0 !== f, "unhandled number format");
        a = !1;
        if (h) for (c = f.length; c < h; ++c) (f = "0" + f), (a = !0);
        c = "";
        e ? (c = "-") : d ? (c = "+" + c) : n && (c = " " + c);
        t && (16 === b ? (c += "0x") : 8 !== b || a || "0" === f || (c += "0"));
        return [c, f];
      };
      c = function (a) {
        var b = a[0];
        a = a[1];
        if (g) {
          g = parseInt(g, 10);
          var c = a.length + b.length;
          if (r) for (; c < g; ++c) a = "0" + a;
          else if (p) for (; c < g; ++c) a += " ";
          else for (; c < g; ++c) b = " " + b;
        }
        return b + a;
      };
      if (a.constructor === Sk.builtin.tuple) e = a.v[q];
      else if (void 0 !== a.mp$subscript && void 0 !== e) (e = e.substring(1, e.length - 1)), (e = a.mp$subscript(new Sk.builtin.str(e)));
      else if (a.constructor === Sk.builtin.dict || a.constructor === Sk.builtin.list) e = a;
      else throw new Sk.builtin.AttributeError(a.tp$name + " instance has no attribute 'mp$subscript'");
      if ("d" === l || "i" === l) return c(f(e, 10));
      if ("o" === l) return c(f(e, 8));
      if ("x" === l) return c(f(e, 16));
      if ("X" === l) return c(f(e, 16)).toUpperCase();
      if ("f" === l || "F" === l || "e" === l || "E" === l || "g" === l || "G" === l) {
        q = Sk.builtin.asnum$(e);
        "string" === typeof q && (q = Number(q));
        if (Infinity === q) return "inf";
        if (-Infinity === q) return "-inf";
        if (isNaN(q)) return "nan";
        f = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(l.toLowerCase())];
        if (void 0 === h || "" === h)
          if ("e" === l || "E" === l) h = 6;
          else if ("f" === l || "F" === l) h = 7;
        f = q[f](h);
        Sk.builtin.checkFloat(e) && 0 === q && -Infinity === 1 / q && (f = "-" + f);
        -1 !== "EFG".indexOf(l) && (f = f.toUpperCase());
        return c(["", f]);
      }
      if ("c" === l) {
        if ("number" === typeof e) return String.fromCharCode(e);
        if (e instanceof Sk.builtin.int_) return String.fromCharCode(e.v);
        if (e instanceof Sk.builtin.float_) return String.fromCharCode(e.v);
        if (e instanceof Sk.builtin.lng) return String.fromCharCode(e.str$(10, !1)[0]);
        if (e.constructor === Sk.builtin.str) return e.v.substr(0, 1);
        throw new Sk.builtin.TypeError("an integer is required");
      }
      if ("r" === l) return (l = Sk.builtin.repr(e)), h ? l.v.substr(0, h) : l.v;
      if ("s" === l) {
        l = new Sk.builtin.str(e);
        l = l.$jsstr();
        if (h) return l.substr(0, h);
        g && (l = c([" ", l]));
        return l;
      }
      if ("%" === l) return "%";
    });
    return new Sk.builtin.str(c);
  };
  Sk.builtin.str_iter_ = function (a) {
    if (!(this instanceof Sk.builtin.str_iter_)) return new Sk.builtin.str_iter_(a);
    this.$index = 0;
    this.$obj = a.v.slice();
    this.sq$length = this.$obj.length;
    this.tp$iter = this;
    this.tp$iternext = function () {
      if (!(this.$index >= this.sq$length)) return new Sk.builtin.str(this.$obj.substr(this.$index++, 1));
    };
    this.$r = function () {
      return new Sk.builtin.str("iterator");
    };
    return this;
  };
  Sk.abstr.setUpInheritance("iterator", Sk.builtin.str_iter_, Sk.builtin.object);
  Sk.builtin.str_iter_.prototype.__class__ = Sk.builtin.str_iter_;
  Sk.builtin.str_iter_.prototype.__iter__ = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("__iter__", arguments.length, 0, 0, !0, !1);
    return a;
  });
  Sk.builtin.str_iter_.prototype.next$ = function (a) {
    a = a.tp$iternext();
    if (void 0 === a) throw new Sk.builtin.StopIteration();
    return a;
  };
  var format = function (a) {
    var b = {};
    Sk.builtin.pyCheckArgsLen("format", arguments.length, 0, Infinity, !0, !0);
    var c = new Sk.builtins.tuple(Array.prototype.slice.call(arguments, 1));
    var d = new Sk.builtins.dict(a);
    if (void 0 === arguments[1]) return c.v;
    var e = 0;
    if (0 !== d.size) {
      d = Sk.misceval.callsimArray(Sk.builtin.dict.prototype.items, [d]);
      for (var f in d.v) b[d.v[f].v[0].v] = d.v[f].v[1];
    }
    for (var g in c.v) "0" !== g && (b[g - 1] = c.v[g]);
    c = c.v[0].v.replace(/{(((?:\d+)|(?:\w+))?((?:\.(\w+))|(?:\[((?:\d+)|(?:\w+))\])?))?(?:!([rs]))?(?::((?:(.)?([<>=\^]))?([\+\-\s])?(#)?(0)?(\d+)?(,)?(?:\.(\d+))?([bcdeEfFgGnosxX%])?))?}/g, function (
      a,
      c,
      d,
      f,
      g,
      p,
      r,
      q,
      t,
      u,
      x,
      z,
      D,
      y,
      E,
      w,
      v,
      F,
      G
    ) {
      var h, k, l, m;
      y = Sk.builtin.asnum$(y);
      w = Sk.builtin.asnum$(w);
      if (void 0 !== p && "" !== p) {
        a = b[d];
        var n = a.constructor === Array ? a[p] : a instanceof Sk.builtin.dict ? Sk.abstr.objectGetItem(a, new Sk.builtin.str(p), !1) : Sk.abstr.objectGetItem(a, new Sk.builtin.int_(parseInt(p, 10)), !1);
        e++;
      } else if (void 0 !== g && "" !== g) (n = b[d][g]), e++;
      else if (void 0 !== d && "" !== d) (n = b[d]), e++;
      else if (void 0 === c || "" === c) (p = b[e]), e++, (n = p);
      else if (c instanceof Sk.builtin.int_ || c instanceof Sk.builtin.float_ || c instanceof Sk.builtin.lng || !isNaN(parseInt(c, 10))) (p = b[c]), e++, (n = p);
      "" === w && (w = void 0);
      if (void 0 === t || "" === t) t = " ";
      var B = (h = k = l = !1);
      q &&
        (void 0 !== x && "" !== x && (-1 !== "-".indexOf(x) ? (l = !0) : -1 !== "+".indexOf(x) ? (h = !0) : -1 !== " ".indexOf(x) && (k = !0)),
        z && (B = -1 !== "#".indexOf(z)),
        void 0 === y || "" === y || (void 0 !== t && "" !== t) || (t = " "),
        -1 !== "%".indexOf(v) && (m = !0));
      w && (w = parseInt(w, 10));
      var C = function (a) {
        if (void 0 === r || "" === r || "s" == r) return (a = new Sk.builtin.str(a)), a.v;
        if ("r" == r) return (a = Sk.builtin.repr(a)), a.v;
      };
      var A = function (a, b) {
        b = Sk.ffi.remapToJs(b);
        m && (b += "%");
        if (void 0 !== y && "" !== y) {
          y = parseInt(y, 10);
          var c = b.length + a.length;
          if (l) for (; c < y; ++c) b += t;
          else if (-1 !== ">".indexOf(u)) for (; c < y; ++c) a = t + a;
          else if (-1 !== "^".indexOf(u)) for (; c < y; ++c) 0 === c % 2 ? (a = t + a) : 1 === c % 2 && (b += t);
          else if (-1 !== "=".indexOf(u)) for (; c < y; ++c) b = t + b;
          else for (; c < y; ++c) b += t;
        }
        return C(a + b);
      };
      x = function (a, b) {
        b = Sk.builtin.asnum$(b);
        var c = !1;
        if (void 0 === q) return C(n);
        if ("number" === typeof a) {
          0 > a && ((a = -a), (c = !0));
          var d = a.toString(b);
        } else
          a instanceof Sk.builtin.float_
            ? ((d = a.str$(b, !1)), 2 < d.length && ".0" === d.substr(-2) && (d = d.substr(0, d.length - 2)), (c = a.nb$isnegative()))
            : a instanceof Sk.builtin.int_
            ? ((d = a.str$(b, !1)), (c = a.nb$isnegative()))
            : a instanceof Sk.builtin.lng
            ? ((d = a.str$(b, !1)), (c = a.nb$isnegative()))
            : (d = a);
        w && ((a = Number(d)), 0 > a && ((a = -a), (c = !0)), (d = a.toFixed(w)));
        a = "";
        c ? (a = "-") : h ? (a = "+") : k && (a = " ");
        B && (16 === b ? (a += "0x") : 8 === b && "0" !== d ? (a += "0o") : 2 === b && "0" !== d && (a += "0b"));
        "n" === v ? (d = d.toLocaleString()) : -1 !== ",".indexOf(E) && ((b = d.toString().split(".")), (b[0] = b[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")), (d = b.join(".")));
        return A(a, d);
      };
      if ("d" === v || "n" === v || "" === v || void 0 === v) return x(n, 10);
      if ("b" === v) return x(n, 2);
      if ("o" === v) return x(n, 8);
      if ("x" === v) return x(n, 16);
      if ("X" === v) return x(n, 16).toUpperCase();
      if ("f" === v || "F" === v || "e" === v || "E" === v || "g" === v || "G" === v) {
        if (B) throw new Sk.builtin.ValueError("Alternate form (#) not allowed in float format specifier");
        p = Sk.builtin.asnum$(n);
        "string" === typeof p && (p = Number(p));
        if (Infinity === p) return A("", "inf");
        if (-Infinity === p) return A("-", "inf");
        if (isNaN(p)) return A("", "nan");
        z = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(v.toLowerCase())];
        if (void 0 === w || "" === w)
          if ("e" === v || "E" === v || "%" === v) w = 6;
          else if ("f" === v || "F" === v) w = 6;
        z = p[z](w);
        -1 !== "EFG".indexOf(v) && (z = z.toUpperCase());
        return x(z, 10);
      }
      if ("c" === v) {
        if ("number" === typeof n) return A("", String.fromCharCode(n));
        if (n instanceof Sk.builtin.int_ || n instanceof Sk.builtin.float_) return A("", String.fromCharCode(n.v));
        if (n instanceof Sk.builtin.lng) return A("", String.fromCharCode(n.str$(10, !1)[0]));
        if (n.constructor === Sk.builtin.str) return A("", n.v.substr(0, 1));
        throw new Sk.builtin.TypeError("an integer is required");
      }
      if (m) return void 0 === w && (w = 7), x(n.nb$multiply(new Sk.builtin.int_(100)), 10);
    });
    return new Sk.builtin.str(c);
  };
  format.co_kwargs = !0;
  Sk.builtin.str.prototype.format = new Sk.builtin.func(format);
  Sk.builtin.tuple = function (a) {
    var b;
    if (!(this instanceof Sk.builtin.tuple)) return Sk.builtin.pyCheckArgsLen("tuple", arguments.length, 0, 1), new Sk.builtin.tuple(a);
    void 0 === a && (a = []);
    if ("[object Array]" === Object.prototype.toString.apply(a)) this.v = a;
    else if (Sk.builtin.checkIterable(a)) {
      this.v = [];
      var c = Sk.abstr.iter(a);
      for (b = c.tp$iternext(); void 0 !== b; b = c.tp$iternext()) this.v.push(b);
    } else throw new Sk.builtin.TypeError("expecting Array or iterable");
    this.__class__ = Sk.builtin.tuple;
    this.v = this.v;
    return this;
  };
  Sk.abstr.setUpInheritance("tuple", Sk.builtin.tuple, Sk.builtin.seqtype);
  Sk.builtin.tuple.prototype.$r = function () {
    var a;
    if (0 === this.v.length) return new Sk.builtin.str("()");
    var b = [];
    for (a = 0; a < this.v.length; ++a) b[a] = Sk.misceval.objectRepr(this.v[a]).v;
    a = b.join(", ");
    1 === this.v.length && (a += ",");
    return new Sk.builtin.str("(" + a + ")");
  };
  Sk.builtin.tuple.prototype.mp$subscript = function (a) {
    if (Sk.misceval.isIndex(a)) {
      var b = Sk.misceval.asIndex(a);
      if (void 0 !== b) {
        0 > b && (b = this.v.length + b);
        if (0 > b || b >= this.v.length) throw new Sk.builtin.IndexError("tuple index out of range");
        return this.v[b];
      }
    } else if (a instanceof Sk.builtin.slice) {
      var c = [];
      a.sssiter$(this, function (a, b) {
        c.push(b.v[a]);
      });
      return new Sk.builtin.tuple(c);
    }
    throw new Sk.builtin.TypeError("tuple indices must be integers, not " + Sk.abstr.typeName(a));
  };
  Sk.builtin.tuple.prototype.tp$hash = function () {
    var a,
      b = 1000003,
      c = 3430008,
      d = this.v.length;
    for (a = 0; a < d; ++a) {
      var e = Sk.builtin.hash(this.v[a]).v;
      if (-1 === e) return new Sk.builtin.int_(-1);
      c = (c ^ e) * b;
      b += 82520 + d + d;
    }
    c += 97531;
    -1 === c && (c = -2);
    return new Sk.builtin.int_(c | 0);
  };
  Sk.builtin.tuple.prototype.sq$repeat = function (a) {
    var b, c;
    a = Sk.misceval.asIndex(a);
    var d = [];
    for (c = 0; c < a; ++c) for (b = 0; b < this.v.length; ++b) d.push(this.v[b]);
    return new Sk.builtin.tuple(d);
  };
  Sk.builtin.tuple.prototype.nb$multiply = Sk.builtin.tuple.prototype.sq$repeat;
  Sk.builtin.tuple.prototype.nb$inplace_multiply = Sk.builtin.tuple.prototype.sq$repeat;
  Sk.builtin.tuple.prototype.__iter__ = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("__iter__", arguments.length, 1, 1);
    return new Sk.builtin.tuple_iter_(a);
  });
  Sk.builtin.tuple.prototype.tp$iter = function () {
    return new Sk.builtin.tuple_iter_(this);
  };
  Sk.builtin.tuple.prototype.tp$richcompare = function (a, b) {
    var c;
    if (!a.__class__ || !Sk.misceval.isTrue(Sk.builtin.isinstance(a, Sk.builtin.tuple))) return "Eq" === b ? !1 : "NotEq" === b ? !0 : !1;
    var d = this.v;
    a = a.v;
    var e = d.length;
    var f = a.length;
    for (c = 0; c < e && c < f; ++c) {
      var g = Sk.misceval.richCompareBool(d[c], a[c], "Eq");
      if (!g) break;
    }
    if (c >= e || c >= f)
      switch (b) {
        case "Lt":
          return e < f;
        case "LtE":
          return e <= f;
        case "Eq":
          return e === f;
        case "NotEq":
          return e !== f;
        case "Gt":
          return e > f;
        case "GtE":
          return e >= f;
        default:
          Sk.asserts.fail();
      }
    return "Eq" === b ? !1 : "NotEq" === b ? !0 : Sk.misceval.richCompareBool(d[c], a[c], b);
  };
  Sk.builtin.tuple.prototype.sq$concat = function (a) {
    if (a.__class__ != Sk.builtin.tuple) throw ((a = 'can only concatenate tuple (not "' + (Sk.abstr.typeName(a) + '") to tuple')), new Sk.builtin.TypeError(a));
    return new Sk.builtin.tuple(this.v.concat(a.v));
  };
  Sk.builtin.tuple.prototype.sq$contains = function (a) {
    var b;
    var c = this.tp$iter();
    for (b = c.tp$iternext(); void 0 !== b; b = c.tp$iternext()) if (Sk.misceval.richCompareBool(b, a, "Eq")) return !0;
    return !1;
  };
  Sk.builtin.tuple.prototype.nb$add = Sk.builtin.tuple.prototype.sq$concat;
  Sk.builtin.tuple.prototype.nb$inplace_add = Sk.builtin.tuple.prototype.sq$concat;
  Sk.builtin.tuple.prototype.sq$length = function () {
    return this.v.length;
  };
  Sk.builtin.tuple.prototype.index = new Sk.builtin.func(function (a, b) {
    var c = a.v.length,
      d = a.v;
    for (a = 0; a < c; ++a) if (Sk.misceval.richCompareBool(d[a], b, "Eq")) return new Sk.builtin.int_(a);
    throw new Sk.builtin.ValueError("tuple.index(x): x not in tuple");
  });
  Sk.builtin.tuple.prototype.count = new Sk.builtin.func(function (a, b) {
    var c = a.v.length,
      d = a.v,
      e = 0;
    for (a = 0; a < c; ++a) Sk.misceval.richCompareBool(d[a], b, "Eq") && (e += 1);
    return new Sk.builtin.int_(e);
  });
  Sk.exportSymbol("Sk.builtin.tuple", Sk.builtin.tuple);
  Sk.builtin.tuple_iter_ = function (a) {
    if (!(this instanceof Sk.builtin.tuple_iter_)) return new Sk.builtin.tuple_iter_(a);
    this.$index = 0;
    this.$obj = a.v.slice();
    this.sq$length = this.$obj.length;
    this.tp$iter = this;
    this.tp$iternext = function () {
      if (!(this.$index >= this.sq$length)) return this.$obj[this.$index++];
    };
    this.$r = function () {
      return new Sk.builtin.str("tupleiterator");
    };
    return this;
  };
  Sk.abstr.setUpInheritance("tupleiterator", Sk.builtin.tuple_iter_, Sk.builtin.object);
  Sk.builtin.tuple_iter_.prototype.__class__ = Sk.builtin.tuple_iter_;
  Sk.builtin.tuple_iter_.prototype.__iter__ = new Sk.builtin.func(function (a) {
    return a;
  });
  Sk.builtin.tuple_iter_.prototype.next$ = function (a) {
    a = a.tp$iternext();
    if (void 0 === a) throw new Sk.builtin.StopIteration();
    return a;
  };
  Sk.builtin.dict = function (a) {
    var b, c;
    if (!(this instanceof Sk.builtin.dict)) return new Sk.builtin.dict(a);
    void 0 === a && (a = []);
    this.size = 0;
    this.buckets = {};
    if ("[object Array]" === Object.prototype.toString.apply(a)) for (b = 0; b < a.length; b += 2) this.mp$ass_subscript(a[b], a[b + 1]);
    else if (a instanceof Sk.builtin.dict) {
      var d = Sk.abstr.iter(a);
      for (c = d.tp$iternext(); void 0 !== c; c = d.tp$iternext()) (b = a.mp$subscript(c)), void 0 === b && (b = null), this.mp$ass_subscript(c, b);
    } else if (Sk.builtin.checkIterable(a))
      for (d = Sk.abstr.iter(a), b = d.tp$iternext(); void 0 !== b; b = d.tp$iternext())
        if (b.mp$subscript) this.mp$ass_subscript(b.mp$subscript(0), b.mp$subscript(1));
        else throw new Sk.builtin.TypeError("element " + this.size + " is not a sequence");
    else throw new Sk.builtin.TypeError("object is not iterable");
    this.__class__ = Sk.builtin.dict;
    this.tp$call = void 0;
    return this;
  };
  Sk.builtin.dict.tp$call = function (a, b) {
    var c;
    Sk.builtin.pyCheckArgsLen("dict", a, 0, 1);
    a = new Sk.builtin.dict(a[0]);
    if (b) for (c = 0; c < b.length; c += 2) a.mp$ass_subscript(new Sk.builtin.str(b[c]), b[c + 1]);
    return a;
  };
  Sk.abstr.setUpInheritance("dict", Sk.builtin.dict, Sk.builtin.object);
  Sk.abstr.markUnhashable(Sk.builtin.dict);
  var kf = Sk.builtin.hash;
  Sk.builtin.dict.prototype.key$lookup = function (a, b) {
    var c, d;
    for (d = 0; d < a.items.length; d++) {
      var e = a.items[d];
      if ((c = Sk.misceval.richCompareBool(e.lhs, b, "Eq"))) return e;
    }
    return null;
  };
  Sk.builtin.dict.prototype.key$pop = function (a, b) {
    var c, d;
    for (d = 0; d < a.items.length; d++) {
      var e = a.items[d];
      if ((c = Sk.misceval.richCompareBool(e.lhs, b, "Eq"))) return a.items.splice(d, 1), --this.size, e;
    }
  };
  Sk.builtin.dict.prototype.mp$lookup = function (a) {
    var b = kf(a);
    b = this.buckets[b.v];
    if (void 0 !== b && (a = this.key$lookup(b, a))) return a.rhs;
  };
  Sk.builtin.dict.prototype.mp$subscript = function (a) {
    Sk.builtin.pyCheckArgsLen("[]", arguments.length, 1, 2, !1, !1);
    var b = this.mp$lookup(a);
    if (void 0 !== b) return b;
    b = new Sk.builtin.str(a);
    throw new Sk.builtin.KeyError(b.v);
  };
  Sk.builtin.dict.prototype.sq$contains = function (a) {
    return void 0 !== this.mp$lookup(a);
  };
  Sk.builtin.dict.prototype.mp$ass_subscript = function (a, b) {
    var c = kf(a),
      d = this.buckets[c.v];
    void 0 === d ? ((d = { $hash: c, items: [{ lhs: a, rhs: b }] }), (this.buckets[c.v] = d), (this.size += 1)) : (c = this.key$lookup(d, a)) ? (c.rhs = b) : (d.items.push({ lhs: a, rhs: b }), (this.size += 1));
  };
  Sk.builtin.dict.prototype.mp$del_subscript = function (a) {
    Sk.builtin.pyCheckArgsLen("del", arguments.length, 1, 1, !1, !1);
    var b = kf(a);
    b = this.buckets[b.v];
    if (void 0 !== b && ((b = this.key$pop(b, a)), void 0 !== b)) return;
    b = new Sk.builtin.str(a);
    throw new Sk.builtin.KeyError(b.v);
  };
  Sk.builtin.dict.prototype.$r = function () {
    var a,
      b = [];
    var c = Sk.abstr.iter(this);
    for (a = c.tp$iternext(); void 0 !== a; a = c.tp$iternext()) {
      var d = this.mp$subscript(a);
      void 0 === d && (d = null);
      d === this ? b.push(Sk.misceval.objectRepr(a).v + ": {...}") : b.push(Sk.misceval.objectRepr(a).v + ": " + Sk.misceval.objectRepr(d).v);
    }
    return new Sk.builtin.str("{" + b.join(", ") + "}");
  };
  Sk.builtin.dict.prototype.mp$length = function () {
    return this.size;
  };
  Sk.builtin.dict.prototype.get = new Sk.builtin.func(function (a, b, c) {
    Sk.builtin.pyCheckArgsLen("get()", arguments.length, 1, 2, !1, !0);
    void 0 === c && (c = Sk.builtin.none.none$);
    var d = a.mp$lookup(b);
    void 0 === d && (d = c);
    return d;
  });
  Sk.builtin.dict.prototype.pop = new Sk.builtin.func(function (a, b, c) {
    Sk.builtin.pyCheckArgsLen("pop()", arguments.length, 1, 2, !1, !0);
    var d = kf(b);
    d = a.buckets[d.v];
    if (void 0 !== d && ((d = a.key$pop(d, b)), void 0 !== d)) return d.rhs;
    if (void 0 !== c) return c;
    d = new Sk.builtin.str(b);
    throw new Sk.builtin.KeyError(d.v);
  });
  Sk.builtin.dict.prototype.has_key = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("has_key()", arguments.length, 1, 1, !1, !0);
    return new Sk.builtin.bool(a.sq$contains(b));
  });
  Sk.builtin.dict.prototype.items = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("items()", arguments.length, 0, 0, !1, !0);
    var b,
      c = [];
    var d = Sk.abstr.iter(a);
    for (b = d.tp$iternext(); void 0 !== b; b = d.tp$iternext()) {
      var e = a.mp$subscript(b);
      void 0 === e && (e = null);
      c.push(new Sk.builtin.tuple([b, e]));
    }
    return new Sk.builtin.list(c);
  });
  Sk.builtin.dict.prototype.keys = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("keys()", arguments.length, 0, 0, !1, !0);
    var b,
      c = [];
    var d = Sk.abstr.iter(a);
    for (b = d.tp$iternext(); void 0 !== b; b = d.tp$iternext()) c.push(b);
    return new Sk.builtin.list(c);
  });
  Sk.builtin.dict.prototype.values = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("values()", arguments.length, 0, 0, !1, !0);
    var b,
      c = [];
    var d = Sk.abstr.iter(a);
    for (b = d.tp$iternext(); void 0 !== b; b = d.tp$iternext()) (b = a.mp$subscript(b)), void 0 === b && (b = null), c.push(b);
    return new Sk.builtin.list(c);
  });
  Sk.builtin.dict.prototype.clear = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("clear()", arguments.length, 0, 0, !1, !0);
    var b;
    var c = Sk.abstr.iter(a);
    for (b = c.tp$iternext(); void 0 !== b; b = c.tp$iternext()) a.mp$del_subscript(b);
  });
  Sk.builtin.dict.prototype.setdefault = new Sk.builtin.func(function (a, b, c) {
    try {
      return a.mp$subscript(b);
    } catch (d) {
      return void 0 === c && (c = Sk.builtin.none.none$), a.mp$ass_subscript(b, c), c;
    }
  });
  Sk.builtin.dict.prototype.dict_merge = function (a) {
    var b;
    if (a instanceof Sk.builtin.dict) {
      var c = a.tp$iter();
      for (b = c.tp$iternext(); void 0 !== b; b = c.tp$iternext()) {
        var d = a.mp$subscript(b);
        if (void 0 === d) throw new Sk.builtin.AttributeError("cannot get item for key: " + b.v);
        this.mp$ass_subscript(b, d);
      }
    } else
      for (c = Sk.misceval.callsimArray(a.keys, [a]), c = Sk.abstr.iter(c), b = c.tp$iternext(); void 0 !== b; b = c.tp$iternext()) {
        d = a.tp$getitem(b);
        if (void 0 === d) throw new Sk.builtin.AttributeError("cannot get item for key: " + b.v);
        this.mp$ass_subscript(b, d);
      }
  };
  var update_f = function (a, b, c) {
    if (void 0 !== c && ("dict" === c.tp$name || c.keys)) b.dict_merge(c);
    else if (void 0 !== c && Sk.builtin.checkIterable(c)) {
      var d,
        e = 0;
      c = Sk.abstr.iter(c);
      for (d = c.tp$iternext(); void 0 !== d; d = c.tp$iternext(), e++) {
        if (!Sk.builtin.checkIterable(d)) throw new Sk.builtin.TypeError("cannot convert dictionary update sequence element #" + e + " to a sequence");
        if (2 === d.sq$length()) {
          var f = Sk.abstr.iter(d);
          d = f.tp$iternext();
          f = f.tp$iternext();
          b.mp$ass_subscript(d, f);
        } else throw new Sk.builtin.ValueError("dictionary update sequence element #" + e + " has length " + d.sq$length() + "; 2 is required");
      }
    } else if (void 0 !== c) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(c) + "' object is not iterable");
    a = new Sk.builtins.dict(a);
    b.dict_merge(a);
    return Sk.builtin.none.none$;
  };
  update_f.co_kwargs = !0;
  Sk.builtin.dict.prototype.update = new Sk.builtin.func(update_f);
  Sk.builtin.dict.prototype.__contains__ = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("__contains__", arguments.length, 2, 2);
    return new Sk.builtin.bool(a.sq$contains(b));
  });
  Sk.builtin.dict.prototype.__cmp__ = new Sk.builtin.func(function (a, b, c) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  });
  Sk.builtin.dict.prototype.__delitem__ = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("__delitem__", arguments.length, 1, 1, !1, !0);
    return Sk.builtin.dict.prototype.mp$del_subscript.call(a, b);
  });
  Sk.builtin.dict.prototype.__getitem__ = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("__getitem__", arguments.length, 1, 1, !1, !0);
    return Sk.builtin.dict.prototype.mp$subscript.call(a, b);
  });
  Sk.builtin.dict.prototype.__setitem__ = new Sk.builtin.func(function (a, b, c) {
    Sk.builtin.pyCheckArgsLen("__setitem__", arguments.length, 2, 2, !1, !0);
    return Sk.builtin.dict.prototype.mp$ass_subscript.call(a, b, c);
  });
  Sk.builtin.dict.prototype.__hash__ = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("__hash__", arguments.length, 0, 0, !1, !0);
    return Sk.builtin.dict.prototype.tp$hash.call(a);
  });
  Sk.builtin.dict.prototype.__len__ = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("__len__", arguments.length, 0, 0, !1, !0);
    return Sk.builtin.dict.prototype.mp$length.call(a);
  });
  Sk.builtin.dict.prototype.__getattribute__ = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("__getattribute__", arguments.length, 1, 1, !1, !0);
    if (!Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("__getattribute__ requires a string");
    return Sk.builtin.dict.prototype.tp$getattr.call(a, b);
  });
  Sk.builtin.dict.prototype.__iter__ = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("__iter__", arguments.length, 0, 0, !1, !0);
    return new Sk.builtin.dict_iter_(a);
  });
  Sk.builtin.dict.prototype.tp$iter = function () {
    return new Sk.builtin.dict_iter_(this);
  };
  Sk.builtin.dict.prototype.__repr__ = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("__repr__", arguments.length, 0, 0, !1, !0);
    return Sk.builtin.dict.prototype.$r.call(a);
  });
  Sk.builtin.dict.prototype.ob$eq = function (a) {
    var b;
    if (this === a) return Sk.builtin.bool.true$;
    if (!(a instanceof Sk.builtin.dict)) return Sk.builtin.NotImplemented.NotImplemented$;
    if (this.size !== a.size) return Sk.builtin.bool.false$;
    var c = this.tp$iter();
    for (b = c.tp$iternext(); void 0 !== b; b = c.tp$iternext()) {
      var d = this.mp$subscript(b);
      b = a.mp$subscript(b);
      if (!Sk.misceval.richCompareBool(d, b, "Eq")) return Sk.builtin.bool.false$;
    }
    return Sk.builtin.bool.true$;
  };
  Sk.builtin.dict.prototype.ob$ne = function (a) {
    a = this.ob$eq(a);
    return a instanceof Sk.builtin.NotImplemented ? a : a.v ? Sk.builtin.bool.false$ : Sk.builtin.bool.true$;
  };
  Sk.builtin.dict.prototype.copy = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("copy", arguments.length, 0, 0, !1, !0);
    var b,
      c = new Sk.builtin.dict([]);
    var d = Sk.abstr.iter(a);
    for (b = d.tp$iternext(); void 0 !== b; b = d.tp$iternext()) {
      var e = a.mp$subscript(b);
      void 0 === e && (e = null);
      c.mp$ass_subscript(b, e);
    }
    return c;
  });
  Sk.builtin.dict.$fromkeys = function (a, b, c) {
    if (a instanceof Sk.builtin.dict) {
      Sk.builtin.pyCheckArgsLen("fromkeys", arguments.length, 1, 2, !1, !0);
      var d = a;
      var e = b;
      var f = void 0 === c ? Sk.builtin.none.none$ : c;
    } else Sk.builtin.pyCheckArgsLen("fromkeys", arguments.length, 1, 2, !1, !1), (d = new Sk.builtin.dict([])), (e = a), (f = void 0 === b ? Sk.builtin.none.none$ : b);
    if (!Sk.builtin.checkIterable(e)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(e) + "' object is not iterable");
    var g = Sk.abstr.iter(e);
    for (e = g.tp$iternext(); void 0 !== e; e = g.tp$iternext()) d.mp$ass_subscript(e, f);
    return d;
  };
  Sk.builtin.dict.prototype.iteritems = new Sk.builtin.func(function (a) {
    throw new Sk.builtin.NotImplementedError("dict.iteritems is not yet implemented in Skulpt");
  });
  Sk.builtin.dict.prototype.iterkeys = new Sk.builtin.func(function (a) {
    throw new Sk.builtin.NotImplementedError("dict.iterkeys is not yet implemented in Skulpt");
  });
  Sk.builtin.dict.prototype.itervalues = new Sk.builtin.func(function (a) {
    throw new Sk.builtin.NotImplementedError("dict.itervalues is not yet implemented in Skulpt");
  });
  Sk.builtin.dict.prototype.popitem = new Sk.builtin.func(function (a) {
    throw new Sk.builtin.NotImplementedError("dict.popitem is not yet implemented in Skulpt");
  });
  Sk.builtin.dict.prototype.viewitems = new Sk.builtin.func(function (a) {
    throw new Sk.builtin.NotImplementedError("dict.viewitems is not yet implemented in Skulpt");
  });
  Sk.builtin.dict.prototype.viewkeys = new Sk.builtin.func(function (a) {
    throw new Sk.builtin.NotImplementedError("dict.viewkeys is not yet implemented in Skulpt");
  });
  Sk.builtin.dict.prototype.viewvalues = new Sk.builtin.func(function (a) {
    throw new Sk.builtin.NotImplementedError("dict.viewvalues is not yet implemented in Skulpt");
  });
  Sk.exportSymbol("Sk.builtin.dict", Sk.builtin.dict);
  Sk.builtin.dict_iter_ = function (a) {
    var b, c;
    if (!(this instanceof Sk.builtin.dict_iter_)) return new Sk.builtin.dict_iter_(a);
    this.$index = 0;
    this.$obj = a;
    var d = [];
    var e = a.buckets;
    for (b in e) if (e.hasOwnProperty(b) && (c = e[b]) && void 0 !== c.$hash && void 0 !== c.items) for (a = 0; a < c.items.length; a++) d.push(c.items[a].lhs);
    this.$keys = d;
    this.tp$iter = this;
    this.tp$iternext = function () {
      if (!(this.$index >= this.$keys.length)) return this.$keys[this.$index++];
    };
    this.$r = function () {
      return new Sk.builtin.str("dictionary-keyiterator");
    };
    return this;
  };
  Sk.abstr.setUpInheritance("dictionary-keyiterator", Sk.builtin.dict_iter_, Sk.builtin.object);
  Sk.builtin.dict_iter_.prototype.__class__ = Sk.builtin.dict_iter_;
  Sk.builtin.dict_iter_.prototype.__iter__ = new Sk.builtin.func(function (a) {
    return a;
  });
  Sk.builtin.dict_iter_.prototype.next$ = function (a) {
    a = a.tp$iternext();
    if (void 0 === a) throw new Sk.builtin.StopIteration();
    return a;
  };
  Sk.builtin.numtype = function () {
    throw new Sk.builtin.ExternalError("Cannot instantiate abstract Sk.builtin.numtype class");
  };
  Sk.abstr.setUpInheritance("NumericType", Sk.builtin.numtype, Sk.builtin.object);
  Sk.builtin.numtype.sk$abstract = !0;
  Sk.builtin.numtype.prototype.__abs__ = new Sk.builtin.func(function (a) {
    if (void 0 === a.nb$abs) throw new Sk.builtin.NotImplementedError("__abs__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__abs__", arguments.length, 0, 0, !1, !0);
    return a.nb$abs();
  });
  Sk.builtin.numtype.prototype.__neg__ = new Sk.builtin.func(function (a) {
    if (void 0 === a.nb$negative) throw new Sk.builtin.NotImplementedError("__neg__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__neg__", arguments.length, 0, 0, !1, !0);
    return a.nb$negative();
  });
  Sk.builtin.numtype.prototype.__pos__ = new Sk.builtin.func(function (a) {
    if (void 0 === a.nb$positive) throw new Sk.builtin.NotImplementedError("__pos__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__pos__", arguments.length, 0, 0, !1, !0);
    return a.nb$positive();
  });
  Sk.builtin.numtype.prototype.__int__ = new Sk.builtin.func(function (a) {
    if (void 0 === a.nb$int_) throw new Sk.builtin.NotImplementedError("__int__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__int__", arguments.length, 0, 0, !1, !0);
    return a.nb$int_();
  });
  Sk.builtin.numtype.prototype.__long__ = new Sk.builtin.func(function (a) {
    if (void 0 === a.nb$lng) throw new Sk.builtin.NotImplementedError("__long__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__long__", arguments.length, 0, 0, !1, !0);
    return a.nb$lng();
  });
  Sk.builtin.numtype.prototype.__float__ = new Sk.builtin.func(function (a) {
    if (void 0 === a.nb$float_) throw new Sk.builtin.NotImplementedError("__float__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__float__", arguments.length, 0, 0, !1, !0);
    return a.nb$float_();
  });
  Sk.builtin.numtype.prototype.__add__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$add) throw new Sk.builtin.NotImplementedError("__add__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__add__", arguments.length, 1, 1, !1, !0);
    return a.nb$add(b);
  });
  Sk.builtin.numtype.prototype.__radd__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$reflected_add) throw new Sk.builtin.NotImplementedError("__radd__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__radd__", arguments.length, 1, 1, !1, !0);
    return a.nb$reflected_add(b);
  });
  Sk.builtin.numtype.prototype.__sub__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$subtract) throw new Sk.builtin.NotImplementedError("__sub__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__sub__", arguments.length, 1, 1, !1, !0);
    return a.nb$subtract(b);
  });
  Sk.builtin.numtype.prototype.__rsub__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$reflected_subtract) throw new Sk.builtin.NotImplementedError("__rsub__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__rsub__", arguments.length, 1, 1, !1, !0);
    return a.nb$reflected_subtract(b);
  });
  Sk.builtin.numtype.prototype.__mul__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$multiply) throw new Sk.builtin.NotImplementedError("__mul__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__mul__", arguments.length, 1, 1, !1, !0);
    return a.nb$multiply(b);
  });
  Sk.builtin.numtype.prototype.__rmul__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$reflected_multiply) throw new Sk.builtin.NotImplementedError("__rmul__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__rmul__", arguments.length, 1, 1, !1, !0);
    return a.nb$reflected_multiply(b);
  });
  Sk.builtin.numtype.prototype.__div__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$divide) throw new Sk.builtin.NotImplementedError("__div__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__div__", arguments.length, 1, 1, !1, !0);
    return a.nb$divide(b);
  });
  Sk.builtin.numtype.prototype.__rdiv__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$reflected_divide) throw new Sk.builtin.NotImplementedError("__rdiv__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__rdiv__", arguments.length, 1, 1, !1, !0);
    return a.nb$reflected_divide(b);
  });
  Sk.builtin.numtype.prototype.__floordiv__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$floor_divide) throw new Sk.builtin.NotImplementedError("__floordiv__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__floordiv__", arguments.length, 1, 1, !1, !0);
    return a.nb$floor_divide(b);
  });
  Sk.builtin.numtype.prototype.__rfloordiv__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$reflected_floor_divide) throw new Sk.builtin.NotImplementedError("__rfloordiv__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__rfloordiv__", arguments.length, 1, 1, !1, !0);
    return a.nb$reflected_floor_divide(b);
  });
  Sk.builtin.numtype.prototype.__mod__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$remainder) throw new Sk.builtin.NotImplementedError("__mod__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__mod__", arguments.length, 1, 1, !1, !0);
    return a.nb$remainder(b);
  });
  Sk.builtin.numtype.prototype.__rmod__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$reflected_remainder) throw new Sk.builtin.NotImplementedError("__rmod__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__rmod__", arguments.length, 1, 1, !1, !0);
    return a.nb$reflected_remainder(b);
  });
  Sk.builtin.numtype.prototype.__divmod__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$divmod) throw new Sk.builtin.NotImplementedError("__divmod__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__divmod__", arguments.length, 1, 1, !1, !0);
    return a.nb$divmod(b);
  });
  Sk.builtin.numtype.prototype.__rdivmod__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$reflected_divmod) throw new Sk.builtin.NotImplementedError("__rdivmod__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__rdivmod__", arguments.length, 1, 1, !1, !0);
    return a.nb$reflected_divmod(b);
  });
  Sk.builtin.numtype.prototype.__pow__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$power) throw new Sk.builtin.NotImplementedError("__pow__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__pow__", arguments.length, 1, 1, !1, !0);
    return a.nb$power(b);
  });
  Sk.builtin.numtype.prototype.__rpow__ = new Sk.builtin.func(function (a, b) {
    if (void 0 === a.nb$reflected_power) throw new Sk.builtin.NotImplementedError("__rpow__ is not yet implemented");
    Sk.builtin.pyCheckArgsLen("__rpow__", arguments.length, 1, 1, !1, !0);
    return a.nb$reflected_power(b);
  });
  Sk.builtin.numtype.prototype.__coerce__ = new Sk.builtin.func(function (a, b) {
    throw new Sk.builtin.NotImplementedError("__coerce__ is not yet implemented");
  });
  Sk.builtin.numtype.prototype.nb$add = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$reflected_add = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$inplace_add = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$subtract = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$reflected_subtract = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$inplace_subtract = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$multiply = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$reflected_multiply = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$inplace_multiply = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$divide = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$reflected_divide = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$inplace_divide = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$floor_divide = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$reflected_floor_divide = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$inplace_floor_divide = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$remainder = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$reflected_remainder = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$inplace_remainder = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$divmod = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$reflected_divmod = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$power = function (a, b) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$reflected_power = function (a, b) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$inplace_power = function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$abs = function () {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$negative = function () {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$positive = function () {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$nonzero = function () {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$isnegative = function () {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.numtype.prototype.nb$ispositive = function () {
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.biginteger = function (a, b, c) {
    null != a && ("number" == typeof a ? this.fromNumber(a, b, c) : null == b && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b));
  };
  Sk.builtin.biginteger.canary = 0xdeadbeefcafe;
  Sk.builtin.biginteger.j_lm = 15715070 == (Sk.builtin.biginteger.canary & 16777215);
  Sk.builtin.biginteger.nbi = function () {
    return new Sk.builtin.biginteger(null);
  };
  Sk.builtin.biginteger.prototype.am1 = function (a, b, c, d, e, f) {
    for (var g; 0 <= --f; ) (g = b * this[a++] + c[d] + e), (e = Math.floor(g / 67108864)), (c[d++] = g & 67108863);
    return e;
  };
  Sk.builtin.biginteger.prototype.am2 = function (a, b, c, d, e, f) {
    for (var g, h, k = b & 32767, l = b >> 15; 0 <= --f; )
      (h = this[a] & 32767), (g = this[a++] >> 15), (b = l * h + g * k), (h = k * h + ((b & 32767) << 15) + c[d] + (e & 1073741823)), (e = (h >>> 30) + (b >>> 15) + l * g + (e >>> 30)), (c[d++] = h & 1073741823);
    return e;
  };
  Sk.builtin.biginteger.prototype.am3 = function (a, b, c, d, e, f) {
    for (var g, h, k = b & 16383, l = b >> 14; 0 <= --f; ) (h = this[a] & 16383), (g = this[a++] >> 14), (b = l * h + g * k), (h = k * h + ((b & 16383) << 14) + c[d] + e), (e = (h >> 28) + (b >> 14) + l * g), (c[d++] = h & 268435455);
    return e;
  };
  Sk.builtin.biginteger.prototype.am = Sk.builtin.biginteger.prototype.am3;
  Sk.builtin.biginteger.dbits = 28;
  Sk.builtin.biginteger.prototype.DB = Sk.builtin.biginteger.dbits;
  Sk.builtin.biginteger.prototype.DM = (1 << Sk.builtin.biginteger.dbits) - 1;
  Sk.builtin.biginteger.prototype.DV = 1 << Sk.builtin.biginteger.dbits;
  Sk.builtin.biginteger.BI_FP = 52;
  Sk.builtin.biginteger.prototype.FV = Math.pow(2, Sk.builtin.biginteger.BI_FP);
  Sk.builtin.biginteger.prototype.F1 = Sk.builtin.biginteger.BI_FP - Sk.builtin.biginteger.dbits;
  Sk.builtin.biginteger.prototype.F2 = 2 * Sk.builtin.biginteger.dbits - Sk.builtin.biginteger.BI_FP;
  Sk.builtin.biginteger.BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  Sk.builtin.biginteger.BI_RC = [];
  var rr, vv;
  rr = 48;
  for (vv = 0; 9 >= vv; ++vv) Sk.builtin.biginteger.BI_RC[rr++] = vv;
  rr = 97;
  for (vv = 10; 36 > vv; ++vv) Sk.builtin.biginteger.BI_RC[rr++] = vv;
  rr = 65;
  for (vv = 10; 36 > vv; ++vv) Sk.builtin.biginteger.BI_RC[rr++] = vv;
  Sk.builtin.biginteger.int2char = function (a) {
    return Sk.builtin.biginteger.BI_RM.charAt(a);
  };
  Sk.builtin.biginteger.intAt = function (a, b) {
    a = Sk.builtin.biginteger.BI_RC[a.charCodeAt(b)];
    return null == a ? -1 : a;
  };
  Sk.builtin.biginteger.prototype.bnpCopyTo = function (a) {
    var b;
    for (b = this.t - 1; 0 <= b; --b) a[b] = this[b];
    a.t = this.t;
    a.s = this.s;
  };
  Sk.builtin.biginteger.prototype.bnpFromInt = function (a) {
    this.t = 1;
    this.s = 0 > a ? -1 : 0;
    0 < a ? (this[0] = a) : -1 > a ? (this[0] = a + this.DV) : (this.t = 0);
  };
  Sk.builtin.biginteger.nbv = function (a) {
    var b = new Sk.builtin.biginteger(null);
    b.bnpFromInt(a);
    return b;
  };
  Sk.builtin.biginteger.prototype.bnpFromString = function (a, b) {
    var c;
    if (16 == b) var d = 4;
    else if (8 == b) d = 3;
    else if (256 == b) d = 8;
    else if (2 == b) d = 1;
    else if (32 == b) d = 5;
    else if (4 == b) d = 2;
    else {
      this.fromRadix(a, b);
      return;
    }
    this.s = this.t = 0;
    var e = a.length;
    var f = !1;
    for (c = 0; 0 <= --e; )
      (b = 8 == d ? a[e] & 255 : Sk.builtin.biginteger.intAt(a, e)),
        0 > b
          ? "-" == a.charAt(e) && (f = !0)
          : ((f = !1),
            0 === c ? (this[this.t++] = b) : c + d > this.DB ? ((this[this.t - 1] |= (b & ((1 << (this.DB - c)) - 1)) << c), (this[this.t++] = b >> (this.DB - c))) : (this[this.t - 1] |= b << c),
            (c += d),
            c >= this.DB && (c -= this.DB));
    8 == d && 0 !== (a[0] & 128) && ((this.s = -1), 0 < c && (this[this.t - 1] |= ((1 << (this.DB - c)) - 1) << c));
    this.clamp();
    f && Sk.builtin.biginteger.ZERO.subTo(this, this);
  };
  Sk.builtin.biginteger.prototype.bnpClamp = function () {
    for (var a = this.s & this.DM; 0 < this.t && this[this.t - 1] == a; ) --this.t;
  };
  Sk.builtin.biginteger.prototype.bnToString = function (a) {
    var b;
    if (0 > this.s) return "-" + this.negate().toString(a);
    if (16 == a) var c = 4;
    else if (8 == a) c = 3;
    else if (2 == a) c = 1;
    else if (32 == a) c = 5;
    else if (4 == a) c = 2;
    else return this.toRadix(a);
    var d = (1 << c) - 1;
    var e = !1;
    var f = "";
    var g = this.t;
    a = this.DB - ((g * this.DB) % c);
    if (0 < g--)
      for (a < this.DB && 0 < (b = this[g] >> a) && ((e = !0), (f = Sk.builtin.biginteger.int2char(b))); 0 <= g; )
        a < c ? ((b = (this[g] & ((1 << a) - 1)) << (c - a)), (b |= this[--g] >> (a += this.DB - c))) : ((b = (this[g] >> (a -= c)) & d), 0 >= a && ((a += this.DB), --g)), 0 < b && (e = !0), e && (f += Sk.builtin.biginteger.int2char(b));
    return e ? f : "0";
  };
  Sk.builtin.biginteger.prototype.bnNegate = function () {
    var a = Sk.builtin.biginteger.nbi();
    Sk.builtin.biginteger.ZERO.subTo(this, a);
    return a;
  };
  Sk.builtin.biginteger.prototype.bnAbs = function () {
    return 0 > this.s ? this.negate() : this;
  };
  Sk.builtin.biginteger.prototype.bnCompareTo = function (a) {
    var b = this.s - a.s;
    if (0 !== b) return b;
    var c = this.t;
    b = c - a.t;
    if (0 !== b) return 0 > this.s ? -b : b;
    for (; 0 <= --c; ) if (0 !== (b = this[c] - a[c])) return b;
    return 0;
  };
  Sk.builtin.biginteger.nbits = function (a) {
    var b = 1,
      c;
    0 !== (c = a >>> 16) && ((a = c), (b += 16));
    0 !== (c = a >> 8) && ((a = c), (b += 8));
    0 !== (c = a >> 4) && ((a = c), (b += 4));
    0 !== (c = a >> 2) && ((a = c), (b += 2));
    0 !== a >> 1 && (b += 1);
    return b;
  };
  Sk.builtin.biginteger.prototype.bnBitLength = function () {
    return 0 >= this.t ? 0 : this.DB * (this.t - 1) + Sk.builtin.biginteger.nbits(this[this.t - 1] ^ (this.s & this.DM));
  };
  Sk.builtin.biginteger.prototype.bnpDLShiftTo = function (a, b) {
    var c;
    for (c = this.t - 1; 0 <= c; --c) b[c + a] = this[c];
    for (c = a - 1; 0 <= c; --c) b[c] = 0;
    b.t = this.t + a;
    b.s = this.s;
  };
  Sk.builtin.biginteger.prototype.bnpDRShiftTo = function (a, b) {
    var c;
    for (c = a; c < this.t; ++c) b[c - a] = this[c];
    b.t = Math.max(this.t - a, 0);
    b.s = this.s;
  };
  Sk.builtin.biginteger.prototype.bnpLShiftTo = function (a, b) {
    var c = a % this.DB,
      d = this.DB - c,
      e = (1 << d) - 1;
    a = Math.floor(a / this.DB);
    var f = (this.s << c) & this.DM,
      g;
    for (g = this.t - 1; 0 <= g; --g) (b[g + a + 1] = (this[g] >> d) | f), (f = (this[g] & e) << c);
    for (g = a - 1; 0 <= g; --g) b[g] = 0;
    b[a] = f;
    b.t = this.t + a + 1;
    b.s = this.s;
    b.clamp();
  };
  Sk.builtin.biginteger.prototype.bnpRShiftTo = function (a, b) {
    b.s = this.s;
    var c = Math.floor(a / this.DB);
    if (c >= this.t) b.t = 0;
    else {
      var d = a % this.DB;
      var e = this.DB - d;
      var f = (1 << d) - 1;
      b[0] = this[c] >> d;
      for (a = c + 1; a < this.t; ++a) (b[a - c - 1] |= (this[a] & f) << e), (b[a - c] = this[a] >> d);
      0 < d && (b[this.t - c - 1] |= (this.s & f) << e);
      b.t = this.t - c;
      b.clamp();
    }
  };
  Sk.builtin.biginteger.prototype.bnpSubTo = function (a, b) {
    for (var c = 0, d = 0, e = Math.min(a.t, this.t); c < e; ) (d += this[c] - a[c]), (b[c++] = d & this.DM), (d >>= this.DB);
    if (a.t < this.t) {
      for (d -= a.s; c < this.t; ) (d += this[c]), (b[c++] = d & this.DM), (d >>= this.DB);
      d += this.s;
    } else {
      for (d += this.s; c < a.t; ) (d -= a[c]), (b[c++] = d & this.DM), (d >>= this.DB);
      d -= a.s;
    }
    b.s = 0 > d ? -1 : 0;
    -1 > d ? (b[c++] = this.DV + d) : 0 < d && (b[c++] = d);
    b.t = c;
    b.clamp();
  };
  Sk.builtin.biginteger.prototype.bnpMultiplyTo = function (a, b) {
    var c = this.abs(),
      d = a.abs(),
      e = c.t;
    for (b.t = e + d.t; 0 <= --e; ) b[e] = 0;
    for (e = 0; e < d.t; ++e) b[e + c.t] = c.am(0, d[e], b, e, 0, c.t);
    b.s = 0;
    b.clamp();
    this.s != a.s && Sk.builtin.biginteger.ZERO.subTo(b, b);
  };
  Sk.builtin.biginteger.prototype.bnpSquareTo = function (a) {
    for (var b, c = this.abs(), d = (a.t = 2 * c.t); 0 <= --d; ) a[d] = 0;
    for (d = 0; d < c.t - 1; ++d) (b = c.am(d, c[d], a, 2 * d, 0, 1)), (a[d + c.t] += c.am(d + 1, 2 * c[d], a, 2 * d + 1, b, c.t - d - 1)) >= c.DV && ((a[d + c.t] -= c.DV), (a[d + c.t + 1] = 1));
    0 < a.t && (a[a.t - 1] += c.am(d, c[d], a, 2 * d, 0, 1));
    a.s = 0;
    a.clamp();
  };
  Sk.builtin.biginteger.prototype.bnpDivRemTo = function (a, b, c) {
    var d = a.abs();
    if (!(0 >= d.t)) {
      var e = this.abs();
      if (e.t < d.t) null != b && b.fromInt(0), null != c && this.copyTo(c);
      else {
        null == c && (c = Sk.builtin.biginteger.nbi());
        var f = Sk.builtin.biginteger.nbi();
        var g = this.s;
        var h = a.s;
        a = this.DB - Sk.builtin.biginteger.nbits(d[d.t - 1]);
        0 < a ? (d.lShiftTo(a, f), e.lShiftTo(a, c)) : (d.copyTo(f), e.copyTo(c));
        var k = f.t;
        d = f[k - 1];
        if (0 !== d) {
          var l = d * (1 << this.F1) + (1 < k ? f[k - 2] >> this.F2 : 0);
          e = this.FV / l;
          var m = (1 << this.F1) / l;
          var n = 1 << this.F2;
          var p = c.t;
          var r = p - k;
          var q = null == b ? Sk.builtin.biginteger.nbi() : b;
          f.dlShiftTo(r, q);
          0 <= c.compareTo(q) && ((c[c.t++] = 1), c.subTo(q, c));
          Sk.builtin.biginteger.ONE.dlShiftTo(k, q);
          for (q.subTo(f, f); f.t < k; ) f[f.t++] = 0;
          for (; 0 <= --r; ) if (((l = c[--p] == d ? this.DM : Math.floor(c[p] * e + (c[p - 1] + n) * m)), (c[p] += f.am(0, l, c, r, 0, k)) < l)) for (f.dlShiftTo(r, q), c.subTo(q, c); c[p] < --l; ) c.subTo(q, c);
          null != b && (c.drShiftTo(k, b), g != h && Sk.builtin.biginteger.ZERO.subTo(b, b));
          c.t = k;
          c.clamp();
          0 < a && c.rShiftTo(a, c);
          0 > g && Sk.builtin.biginteger.ZERO.subTo(c, c);
        }
      }
    }
  };
  Sk.builtin.biginteger.prototype.bnMod = function (a) {
    var b = Sk.builtin.biginteger.nbi();
    this.abs().divRemTo(a, null, b);
    0 > this.s && 0 < b.compareTo(Sk.builtin.biginteger.ZERO) && a.subTo(b, b);
    return b;
  };
  Sk.builtin.biginteger.Classic = function (a) {
    this.m = a;
  };
  Sk.builtin.biginteger.prototype.cConvert = function (a) {
    return 0 > a.s || 0 <= a.compareTo(this.m) ? a.mod(this.m) : a;
  };
  Sk.builtin.biginteger.prototype.cRevert = function (a) {
    return a;
  };
  Sk.builtin.biginteger.prototype.cReduce = function (a) {
    a.divRemTo(this.m, null, a);
  };
  Sk.builtin.biginteger.prototype.cMulTo = function (a, b, c) {
    a.multiplyTo(b, c);
    this.reduce(c);
  };
  Sk.builtin.biginteger.prototype.cSqrTo = function (a, b) {
    a.squareTo(b);
    this.reduce(b);
  };
  Sk.builtin.biginteger.Classic.prototype.convert = Sk.builtin.biginteger.prototype.cConvert;
  Sk.builtin.biginteger.Classic.prototype.revert = Sk.builtin.biginteger.prototype.cRevert;
  Sk.builtin.biginteger.Classic.prototype.reduce = Sk.builtin.biginteger.prototype.cReduce;
  Sk.builtin.biginteger.Classic.prototype.mulTo = Sk.builtin.biginteger.prototype.cMulTo;
  Sk.builtin.biginteger.Classic.prototype.sqrTo = Sk.builtin.biginteger.prototype.cSqrTo;
  Sk.builtin.biginteger.prototype.bnpInvDigit = function () {
    if (1 > this.t) return 0;
    var a = this[0];
    if (0 === (a & 1)) return 0;
    var b = a & 3;
    b = (b * (2 - (a & 15) * b)) & 15;
    b = (b * (2 - (a & 255) * b)) & 255;
    b = (b * (2 - (((a & 65535) * b) & 65535))) & 65535;
    b = (b * (2 - ((a * b) % this.DV))) % this.DV;
    return 0 < b ? this.DV - b : -b;
  };
  Sk.builtin.biginteger.Montgomery = function (a) {
    this.m = a;
    this.mp = a.invDigit();
    this.mpl = this.mp & 32767;
    this.mph = this.mp >> 15;
    this.um = (1 << (a.DB - 15)) - 1;
    this.mt2 = 2 * a.t;
  };
  Sk.builtin.biginteger.prototype.montConvert = function (a) {
    var b = Sk.builtin.biginteger.nbi();
    a.abs().dlShiftTo(this.m.t, b);
    b.divRemTo(this.m, null, b);
    0 > a.s && 0 < b.compareTo(Sk.builtin.biginteger.ZERO) && this.m.subTo(b, b);
    return b;
  };
  Sk.builtin.biginteger.prototype.montRevert = function (a) {
    var b = Sk.builtin.biginteger.nbi();
    a.copyTo(b);
    this.reduce(b);
    return b;
  };
  Sk.builtin.biginteger.prototype.montReduce = function (a) {
    for (var b, c, d; a.t <= this.mt2; ) a[a.t++] = 0;
    for (d = 0; d < this.m.t; ++d)
      for (c = a[d] & 32767, b = (c * this.mpl + (((c * this.mph + (a[d] >> 15) * this.mpl) & this.um) << 15)) & a.DM, c = d + this.m.t, a[c] += this.m.am(0, b, a, d, 0, this.m.t); a[c] >= a.DV; ) (a[c] -= a.DV), a[++c]++;
    a.clamp();
    a.drShiftTo(this.m.t, a);
    0 <= a.compareTo(this.m) && a.subTo(this.m, a);
  };
  Sk.builtin.biginteger.prototype.montSqrTo = function (a, b) {
    a.squareTo(b);
    this.reduce(b);
  };
  Sk.builtin.biginteger.prototype.montMulTo = function (a, b, c) {
    a.multiplyTo(b, c);
    this.reduce(c);
  };
  Sk.builtin.biginteger.Montgomery.prototype.convert = Sk.builtin.biginteger.prototype.montConvert;
  Sk.builtin.biginteger.Montgomery.prototype.revert = Sk.builtin.biginteger.prototype.montRevert;
  Sk.builtin.biginteger.Montgomery.prototype.reduce = Sk.builtin.biginteger.prototype.montReduce;
  Sk.builtin.biginteger.Montgomery.prototype.mulTo = Sk.builtin.biginteger.prototype.montMulTo;
  Sk.builtin.biginteger.Montgomery.prototype.sqrTo = Sk.builtin.biginteger.prototype.montSqrTo;
  Sk.builtin.biginteger.prototype.bnpIsEven = function () {
    return 0 === (0 < this.t ? this[0] & 1 : this.s);
  };
  Sk.builtin.biginteger.prototype.bnpExp = function (a, b) {
    if (4294967295 < a || 1 > a) return Sk.builtin.biginteger.ONE;
    var c = Sk.builtin.biginteger.nbi();
    var d = Sk.builtin.biginteger.nbi();
    var e = b.convert(this);
    var f = Sk.builtin.biginteger.nbits(a) - 1;
    for (e.copyTo(c); 0 <= --f; )
      if ((b.sqrTo(c, d), 0 < (a & (1 << f)))) b.mulTo(d, e, c);
      else {
        var g = c;
        c = d;
        d = g;
      }
    return b.revert(c);
  };
  Sk.builtin.biginteger.prototype.bnModPowInt = function (a, b) {
    b = 256 > a || b.isEven() ? new Sk.builtin.biginteger.Classic(b) : new Sk.builtin.biginteger.Montgomery(b);
    return this.exp(a, b);
  };
  Sk.builtin.biginteger.prototype.copyTo = Sk.builtin.biginteger.prototype.bnpCopyTo;
  Sk.builtin.biginteger.prototype.fromInt = Sk.builtin.biginteger.prototype.bnpFromInt;
  Sk.builtin.biginteger.prototype.fromString = Sk.builtin.biginteger.prototype.bnpFromString;
  Sk.builtin.biginteger.prototype.clamp = Sk.builtin.biginteger.prototype.bnpClamp;
  Sk.builtin.biginteger.prototype.dlShiftTo = Sk.builtin.biginteger.prototype.bnpDLShiftTo;
  Sk.builtin.biginteger.prototype.drShiftTo = Sk.builtin.biginteger.prototype.bnpDRShiftTo;
  Sk.builtin.biginteger.prototype.lShiftTo = Sk.builtin.biginteger.prototype.bnpLShiftTo;
  Sk.builtin.biginteger.prototype.rShiftTo = Sk.builtin.biginteger.prototype.bnpRShiftTo;
  Sk.builtin.biginteger.prototype.subTo = Sk.builtin.biginteger.prototype.bnpSubTo;
  Sk.builtin.biginteger.prototype.multiplyTo = Sk.builtin.biginteger.prototype.bnpMultiplyTo;
  Sk.builtin.biginteger.prototype.squareTo = Sk.builtin.biginteger.prototype.bnpSquareTo;
  Sk.builtin.biginteger.prototype.divRemTo = Sk.builtin.biginteger.prototype.bnpDivRemTo;
  Sk.builtin.biginteger.prototype.invDigit = Sk.builtin.biginteger.prototype.bnpInvDigit;
  Sk.builtin.biginteger.prototype.isEven = Sk.builtin.biginteger.prototype.bnpIsEven;
  Sk.builtin.biginteger.prototype.exp = Sk.builtin.biginteger.prototype.bnpExp;
  Sk.builtin.biginteger.prototype.toString = Sk.builtin.biginteger.prototype.bnToString;
  Sk.builtin.biginteger.prototype.negate = Sk.builtin.biginteger.prototype.bnNegate;
  Sk.builtin.biginteger.prototype.abs = Sk.builtin.biginteger.prototype.bnAbs;
  Sk.builtin.biginteger.prototype.compareTo = Sk.builtin.biginteger.prototype.bnCompareTo;
  Sk.builtin.biginteger.prototype.bitLength = Sk.builtin.biginteger.prototype.bnBitLength;
  Sk.builtin.biginteger.prototype.mod = Sk.builtin.biginteger.prototype.bnMod;
  Sk.builtin.biginteger.prototype.modPowInt = Sk.builtin.biginteger.prototype.bnModPowInt;
  Sk.builtin.biginteger.ZERO = Sk.builtin.biginteger.nbv(0);
  Sk.builtin.biginteger.ONE = Sk.builtin.biginteger.nbv(1);
  Sk.builtin.biginteger.prototype.bnClone = function () {
    var a = Sk.builtin.biginteger.nbi();
    this.copyTo(a);
    return a;
  };
  Sk.builtin.biginteger.prototype.bnIntValue = function () {
    if (0 > this.s) {
      if (1 == this.t) return this[0] - this.DV;
      if (0 === this.t) return -1;
    } else {
      if (1 == this.t) return this[0];
      if (0 === this.t) return 0;
    }
    return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
  };
  Sk.builtin.biginteger.prototype.bnByteValue = function () {
    return 0 === this.t ? this.s : (this[0] << 24) >> 24;
  };
  Sk.builtin.biginteger.prototype.bnShortValue = function () {
    return 0 === this.t ? this.s : (this[0] << 16) >> 16;
  };
  Sk.builtin.biginteger.prototype.bnpChunkSize = function (a) {
    return Math.floor((Math.LN2 * this.DB) / Math.log(a));
  };
  Sk.builtin.biginteger.prototype.bnSigNum = function () {
    return 0 > this.s ? -1 : 0 >= this.t || (1 == this.t && 0 >= this[0]) ? 0 : 1;
  };
  Sk.builtin.biginteger.prototype.bnpToRadix = function (a) {
    null == a && (a = 10);
    if (0 === this.signum() || 2 > a || 36 < a) return "0";
    var b = this.chunkSize(a);
    var c = Math.pow(a, b);
    b = Sk.builtin.biginteger.nbv(c);
    var d = Sk.builtin.biginteger.nbi();
    var e = Sk.builtin.biginteger.nbi();
    var f = "";
    for (this.divRemTo(b, d, e); 0 < d.signum(); ) (f = (c + e.intValue()).toString(a).substr(1) + f), d.divRemTo(b, d, e);
    return e.intValue().toString(a) + f;
  };
  Sk.builtin.biginteger.prototype.bnpFromRadix = function (a, b) {
    var c, d, e;
    this.fromInt(0);
    null == b && (b = 10);
    var f = this.chunkSize(b);
    var g = Math.pow(b, f);
    var h = !1;
    for (c = e = d = 0; c < a.length; ++c) {
      var k = Sk.builtin.biginteger.intAt(a, c);
      if (0 > k) {
        if (("-" == a.charAt(c) && 0 === this.signum() && (h = !0), "." == a.charAt(c))) break;
      } else (e = b * e + k), ++d >= f && (this.dMultiply(g), this.dAddOffset(e, 0), (e = d = 0));
    }
    0 < d && (this.dMultiply(Math.pow(b, d)), this.dAddOffset(e, 0));
    h && Sk.builtin.biginteger.ZERO.subTo(this, this);
  };
  Sk.builtin.biginteger.prototype.bnpFromNumber = function (a, b, c) {
    if ("number" == typeof b)
      if (2 > a) this.fromInt(1);
      else
        for (this.fromNumber(a, c), this.testBit(a - 1) || this.bitwiseTo(Sk.builtin.biginteger.ONE.shiftLeft(a - 1), Sk.builtin.biginteger.op_or, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(b); )
          this.dAddOffset(2, 0), this.bitLength() > a && this.subTo(Sk.builtin.biginteger.ONE.shiftLeft(a - 1), this);
    this.fromString(a + "");
  };
  Sk.builtin.biginteger.prototype.bnToByteArray = function () {
    var a,
      b = this.t,
      c = [];
    c[0] = this.s;
    var d = this.DB - ((b * this.DB) % 8);
    var e = 0;
    if (0 < b--)
      for (d < this.DB && (a = this[b] >> d) != (this.s & this.DM) >> d && (c[e++] = a | (this.s << (this.DB - d))); 0 <= b; )
        if (
          (8 > d ? ((a = (this[b] & ((1 << d) - 1)) << (8 - d)), (a |= this[--b] >> (d += this.DB - 8))) : ((a = (this[b] >> (d -= 8)) & 255), 0 >= d && ((d += this.DB), --b)),
          0 !== (a & 128) && (a |= -256),
          0 === e && (this.s & 128) != (a & 128) && ++e,
          0 < e || a != this.s)
        )
          c[e++] = a;
    return c;
  };
  Sk.builtin.biginteger.prototype.bnEquals = function (a) {
    return 0 === this.compareTo(a);
  };
  Sk.builtin.biginteger.prototype.bnMin = function (a) {
    return 0 > this.compareTo(a) ? this : a;
  };
  Sk.builtin.biginteger.prototype.bnMax = function (a) {
    return 0 < this.compareTo(a) ? this : a;
  };
  Sk.builtin.biginteger.prototype.bnpBitwiseTo = function (a, b, c) {
    var d,
      e = Math.min(a.t, this.t);
    for (d = 0; d < e; ++d) c[d] = b(this[d], a[d]);
    if (a.t < this.t) {
      var f = a.s & this.DM;
      for (d = e; d < this.t; ++d) c[d] = b(this[d], f);
      c.t = this.t;
    } else {
      f = this.s & this.DM;
      for (d = e; d < a.t; ++d) c[d] = b(f, a[d]);
      c.t = a.t;
    }
    c.s = b(this.s, a.s);
    c.clamp();
  };
  Sk.builtin.biginteger.op_and = function (a, b) {
    return a & b;
  };
  Sk.builtin.biginteger.prototype.bnAnd = function (a) {
    var b = Sk.builtin.biginteger.nbi();
    this.bitwiseTo(a, Sk.builtin.biginteger.op_and, b);
    return b;
  };
  Sk.builtin.biginteger.op_or = function (a, b) {
    return a | b;
  };
  Sk.builtin.biginteger.prototype.bnOr = function (a) {
    var b = Sk.builtin.biginteger.nbi();
    this.bitwiseTo(a, Sk.builtin.biginteger.op_or, b);
    return b;
  };
  Sk.builtin.biginteger.op_xor = function (a, b) {
    return a ^ b;
  };
  Sk.builtin.biginteger.prototype.bnXor = function (a) {
    var b = Sk.builtin.biginteger.nbi();
    this.bitwiseTo(a, Sk.builtin.biginteger.op_xor, b);
    return b;
  };
  Sk.builtin.biginteger.op_andnot = function (a, b) {
    return a & ~b;
  };
  Sk.builtin.biginteger.prototype.bnAndNot = function (a) {
    var b = Sk.builtin.biginteger.nbi();
    this.bitwiseTo(a, Sk.builtin.biginteger.op_andnot, b);
    return b;
  };
  Sk.builtin.biginteger.prototype.bnNot = function () {
    var a,
      b = Sk.builtin.biginteger.nbi();
    for (a = 0; a < this.t; ++a) b[a] = this.DM & ~this[a];
    b.t = this.t;
    b.s = ~this.s;
    return b;
  };
  Sk.builtin.biginteger.prototype.bnShiftLeft = function (a) {
    var b = Sk.builtin.biginteger.nbi();
    0 > a ? this.rShiftTo(-a, b) : this.lShiftTo(a, b);
    return b;
  };
  Sk.builtin.biginteger.prototype.bnShiftRight = function (a) {
    var b = Sk.builtin.biginteger.nbi();
    0 > a ? this.lShiftTo(-a, b) : this.rShiftTo(a, b);
    return b;
  };
  Sk.builtin.biginteger.lbit = function (a) {
    if (0 === a) return -1;
    var b = 0;
    0 === (a & 65535) && ((a >>= 16), (b += 16));
    0 === (a & 255) && ((a >>= 8), (b += 8));
    0 === (a & 15) && ((a >>= 4), (b += 4));
    0 === (a & 3) && ((a >>= 2), (b += 2));
    0 === (a & 1) && ++b;
    return b;
  };
  Sk.builtin.biginteger.prototype.bnGetLowestSetBit = function () {
    var a;
    for (a = 0; a < this.t; ++a) if (0 !== this[a]) return a * this.DB + Sk.builtin.biginteger.lbit(this[a]);
    return 0 > this.s ? this.t * this.DB : -1;
  };
  Sk.builtin.biginteger.cbit = function (a) {
    for (var b = 0; 0 !== a; ) (a &= a - 1), ++b;
    return b;
  };
  Sk.builtin.biginteger.prototype.bnBitCount = function () {
    var a,
      b = 0,
      c = this.s & this.DM;
    for (a = 0; a < this.t; ++a) b += Sk.builtin.biginteger.cbit(this[a] ^ c);
    return b;
  };
  Sk.builtin.biginteger.prototype.bnTestBit = function (a) {
    var b = Math.floor(a / this.DB);
    return b >= this.t ? 0 !== this.s : 0 !== (this[b] & (1 << a % this.DB));
  };
  Sk.builtin.biginteger.prototype.bnpChangeBit = function (a, b) {
    a = Sk.builtin.biginteger.ONE.shiftLeft(a);
    this.bitwiseTo(a, b, a);
    return a;
  };
  Sk.builtin.biginteger.prototype.bnSetBit = function (a) {
    return this.changeBit(a, Sk.builtin.biginteger.op_or);
  };
  Sk.builtin.biginteger.prototype.bnClearBit = function (a) {
    return this.changeBit(a, Sk.builtin.biginteger.op_andnot);
  };
  Sk.builtin.biginteger.prototype.bnFlipBit = function (a) {
    return this.changeBit(a, Sk.builtin.biginteger.op_xor);
  };
  Sk.builtin.biginteger.prototype.bnpAddTo = function (a, b) {
    for (var c = 0, d = 0, e = Math.min(a.t, this.t); c < e; ) (d += this[c] + a[c]), (b[c++] = d & this.DM), (d >>= this.DB);
    if (a.t < this.t) {
      for (d += a.s; c < this.t; ) (d += this[c]), (b[c++] = d & this.DM), (d >>= this.DB);
      d += this.s;
    } else {
      for (d += this.s; c < a.t; ) (d += a[c]), (b[c++] = d & this.DM), (d >>= this.DB);
      d += a.s;
    }
    b.s = 0 > d ? -1 : 0;
    0 < d ? (b[c++] = d) : -1 > d && (b[c++] = this.DV + d);
    b.t = c;
    b.clamp();
  };
  Sk.builtin.biginteger.prototype.bnAdd = function (a) {
    var b = Sk.builtin.biginteger.nbi();
    this.addTo(a, b);
    return b;
  };
  Sk.builtin.biginteger.prototype.bnSubtract = function (a) {
    var b = Sk.builtin.biginteger.nbi();
    this.subTo(a, b);
    return b;
  };
  Sk.builtin.biginteger.prototype.bnMultiply = function (a) {
    var b = Sk.builtin.biginteger.nbi();
    this.multiplyTo(a, b);
    return b;
  };
  Sk.builtin.biginteger.prototype.bnDivide = function (a) {
    var b = Sk.builtin.biginteger.nbi();
    this.divRemTo(a, b, null);
    return b;
  };
  Sk.builtin.biginteger.prototype.bnRemainder = function (a) {
    var b = Sk.builtin.biginteger.nbi();
    this.divRemTo(a, null, b);
    return b;
  };
  Sk.builtin.biginteger.prototype.bnDivideAndRemainder = function (a) {
    var b = Sk.builtin.biginteger.nbi(),
      c = Sk.builtin.biginteger.nbi();
    this.divRemTo(a, b, c);
    return [b, c];
  };
  Sk.builtin.biginteger.prototype.bnpDMultiply = function (a) {
    this[this.t] = this.am(0, a - 1, this, 0, 0, this.t);
    ++this.t;
    this.clamp();
  };
  Sk.builtin.biginteger.prototype.bnpDAddOffset = function (a, b) {
    if (0 !== a) {
      for (; this.t <= b; ) this[this.t++] = 0;
      for (this[b] += a; this[b] >= this.DV; ) (this[b] -= this.DV), ++b >= this.t && (this[this.t++] = 0), ++this[b];
    }
  };
  Sk.builtin.biginteger.NullExp = function () {};
  Sk.builtin.biginteger.prototype.nNop = function (a) {
    return a;
  };
  Sk.builtin.biginteger.prototype.nMulTo = function (a, b, c) {
    a.multiplyTo(b, c);
  };
  Sk.builtin.biginteger.prototype.nSqrTo = function (a, b) {
    a.squareTo(b);
  };
  Sk.builtin.biginteger.NullExp.prototype.convert = Sk.builtin.biginteger.prototype.nNop;
  Sk.builtin.biginteger.NullExp.prototype.revert = Sk.builtin.biginteger.prototype.nNop;
  Sk.builtin.biginteger.NullExp.prototype.mulTo = Sk.builtin.biginteger.prototype.nMulTo;
  Sk.builtin.biginteger.NullExp.prototype.sqrTo = Sk.builtin.biginteger.prototype.nSqrTo;
  Sk.builtin.biginteger.prototype.bnPow = function (a) {
    return this.exp(a, new Sk.builtin.biginteger.NullExp());
  };
  Sk.builtin.biginteger.prototype.bnpMultiplyLowerTo = function (a, b, c) {
    var d,
      e = Math.min(this.t + a.t, b);
    c.s = 0;
    for (c.t = e; 0 < e; ) c[--e] = 0;
    for (d = c.t - this.t; e < d; ++e) c[e + this.t] = this.am(0, a[e], c, e, 0, this.t);
    for (d = Math.min(a.t, b); e < d; ++e) this.am(0, a[e], c, e, 0, b - e);
    c.clamp();
  };
  Sk.builtin.biginteger.prototype.bnpMultiplyUpperTo = function (a, b, c) {
    --b;
    var d = (c.t = this.t + a.t - b);
    for (c.s = 0; 0 <= --d; ) c[d] = 0;
    for (d = Math.max(b - this.t, 0); d < a.t; ++d) c[this.t + d - b] = this.am(b - d, a[d], c, 0, 0, this.t + d - b);
    c.clamp();
    c.drShiftTo(1, c);
  };
  Sk.builtin.biginteger.Barrett = function (a) {
    this.r2 = Sk.builtin.biginteger.nbi();
    this.q3 = Sk.builtin.biginteger.nbi();
    Sk.builtin.biginteger.ONE.dlShiftTo(2 * a.t, this.r2);
    this.mu = this.r2.divide(a);
    this.m = a;
  };
  Sk.builtin.biginteger.prototype.barrettConvert = function (a) {
    if (0 > a.s || a.t > 2 * this.m.t) return a.mod(this.m);
    if (0 > a.compareTo(this.m)) return a;
    var b = Sk.builtin.biginteger.nbi();
    a.copyTo(b);
    this.reduce(b);
    return b;
  };
  Sk.builtin.biginteger.prototype.barrettRevert = function (a) {
    return a;
  };
  Sk.builtin.biginteger.prototype.barrettReduce = function (a) {
    a.drShiftTo(this.m.t - 1, this.r2);
    a.t > this.m.t + 1 && ((a.t = this.m.t + 1), a.clamp());
    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    for (this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); 0 > a.compareTo(this.r2); ) a.dAddOffset(1, this.m.t + 1);
    for (a.subTo(this.r2, a); 0 <= a.compareTo(this.m); ) a.subTo(this.m, a);
  };
  Sk.builtin.biginteger.prototype.barrettSqrTo = function (a, b) {
    a.squareTo(b);
    this.reduce(b);
  };
  Sk.builtin.biginteger.prototype.barrettMulTo = function (a, b, c) {
    a.multiplyTo(b, c);
    this.reduce(c);
  };
  Sk.builtin.biginteger.Barrett.prototype.convert = Sk.builtin.biginteger.prototype.barrettConvert;
  Sk.builtin.biginteger.Barrett.prototype.revert = Sk.builtin.biginteger.prototype.barrettRevert;
  Sk.builtin.biginteger.Barrett.prototype.reduce = Sk.builtin.biginteger.prototype.barrettReduce;
  Sk.builtin.biginteger.Barrett.prototype.mulTo = Sk.builtin.biginteger.prototype.barrettMulTo;
  Sk.builtin.biginteger.Barrett.prototype.sqrTo = Sk.builtin.biginteger.prototype.barrettSqrTo;
  Sk.builtin.biginteger.prototype.bnModPow = function (a, b) {
    var c = a.bitLength();
    var d = Sk.builtin.biginteger.nbv(1);
    if (0 >= c) return d;
    var e = 18 > c ? 1 : 48 > c ? 3 : 144 > c ? 4 : 768 > c ? 5 : 6;
    var f = 8 > c ? new Sk.builtin.biginteger.Classic(b) : b.isEven() ? new Sk.builtin.biginteger.Barrett(b) : new Sk.builtin.biginteger.Montgomery(b);
    b = [];
    var g = 3;
    var h = e - 1;
    var k = (1 << e) - 1;
    b[1] = f.convert(this);
    if (1 < e) for (c = Sk.builtin.biginteger.nbi(), f.sqrTo(b[1], c); g <= k; ) (b[g] = Sk.builtin.biginteger.nbi()), f.mulTo(c, b[g - 2], b[g]), (g += 2);
    var l = a.t - 1;
    var m = !0;
    var n = Sk.builtin.biginteger.nbi();
    for (c = Sk.builtin.biginteger.nbits(a[l]) - 1; 0 <= l; ) {
      if (c >= h) var p = (a[l] >> (c - h)) & k;
      else (p = (a[l] & ((1 << (c + 1)) - 1)) << (h - c)), 0 < l && (p |= a[l - 1] >> (this.DB + c - h));
      for (g = e; 0 === (p & 1); ) (p >>= 1), --g;
      0 > (c -= g) && ((c += this.DB), --l);
      if (m) b[p].copyTo(d), (m = !1);
      else {
        for (; 1 < g; ) f.sqrTo(d, n), f.sqrTo(n, d), (g -= 2);
        0 < g ? f.sqrTo(d, n) : ((g = d), (d = n), (n = g));
        f.mulTo(n, b[p], d);
      }
      for (; 0 <= l && 0 === (a[l] & (1 << c)); ) f.sqrTo(d, n), (g = d), (d = n), (n = g), 0 > --c && ((c = this.DB - 1), --l);
    }
    return f.revert(d);
  };
  Sk.builtin.biginteger.prototype.bnGCD = function (a) {
    var b = 0 > this.s ? this.negate() : this.clone();
    a = 0 > a.s ? a.negate() : a.clone();
    if (0 > b.compareTo(a)) {
      var c = b;
      b = a;
      a = c;
    }
    c = b.getLowestSetBit();
    var d = a.getLowestSetBit();
    if (0 > d) return b;
    c < d && (d = c);
    0 < d && (b.rShiftTo(d, b), a.rShiftTo(d, a));
    for (; 0 < b.signum(); ) 0 < (c = b.getLowestSetBit()) && b.rShiftTo(c, b), 0 < (c = a.getLowestSetBit()) && a.rShiftTo(c, a), 0 <= b.compareTo(a) ? (b.subTo(a, b), b.rShiftTo(1, b)) : (a.subTo(b, a), a.rShiftTo(1, a));
    0 < d && a.lShiftTo(d, a);
    return a;
  };
  Sk.builtin.biginteger.prototype.bnpModInt = function (a) {
    var b;
    if (0 >= a) return 0;
    var c = this.DV % a;
    var d = 0 > this.s ? a - 1 : 0;
    if (0 < this.t)
      if (0 === c) d = this[0] % a;
      else for (b = this.t - 1; 0 <= b; --b) d = (c * d + this[b]) % a;
    return d;
  };
  Sk.builtin.biginteger.prototype.bnModInverse = function (a) {
    var b,
      c = a.isEven();
    if ((this.isEven() && c) || 0 === a.signum()) return Sk.builtin.biginteger.ZERO;
    var d = a.clone();
    var e = this.clone();
    var f = Sk.builtin.biginteger.nbv(1);
    var g = Sk.builtin.biginteger.nbv(0);
    var h = Sk.builtin.biginteger.nbv(0);
    for (b = Sk.builtin.biginteger.nbv(1); 0 !== d.signum(); ) {
      for (; d.isEven(); ) d.rShiftTo(1, d), c ? ((f.isEven() && g.isEven()) || (f.addTo(this, f), g.subTo(a, g)), f.rShiftTo(1, f)) : g.isEven() || g.subTo(a, g), g.rShiftTo(1, g);
      for (; e.isEven(); ) e.rShiftTo(1, e), c ? ((h.isEven() && b.isEven()) || (h.addTo(this, h), b.subTo(a, b)), h.rShiftTo(1, h)) : b.isEven() || b.subTo(a, b), b.rShiftTo(1, b);
      0 <= d.compareTo(e) ? (d.subTo(e, d), c && f.subTo(h, f), g.subTo(b, g)) : (e.subTo(d, e), c && h.subTo(f, h), b.subTo(g, b));
    }
    if (0 !== e.compareTo(Sk.builtin.biginteger.ONE)) return Sk.builtin.biginteger.ZERO;
    if (0 <= b.compareTo(a)) return b.subtract(a);
    if (0 > b.signum()) b.addTo(a, b);
    else return b;
    return 0 > b.signum() ? b.add(a) : b;
  };
  Sk.builtin.biginteger.lowprimes = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
    107,
    109,
    113,
    127,
    131,
    137,
    139,
    149,
    151,
    157,
    163,
    167,
    173,
    179,
    181,
    191,
    193,
    197,
    199,
    211,
    223,
    227,
    229,
    233,
    239,
    241,
    251,
    257,
    263,
    269,
    271,
    277,
    281,
    283,
    293,
    307,
    311,
    313,
    317,
    331,
    337,
    347,
    349,
    353,
    359,
    367,
    373,
    379,
    383,
    389,
    397,
    401,
    409,
    419,
    421,
    431,
    433,
    439,
    443,
    449,
    457,
    461,
    463,
    467,
    479,
    487,
    491,
    499,
    503,
    509,
  ];
  Sk.builtin.biginteger.lplim = 67108864 / Sk.builtin.biginteger.lowprimes[Sk.builtin.biginteger.lowprimes.length - 1];
  Sk.builtin.biginteger.prototype.bnIsProbablePrime = function (a) {
    var b,
      c,
      d = this.abs();
    if (1 == d.t && d[0] <= Sk.builtin.biginteger.lowprimes[Sk.builtin.biginteger.lowprimes.length - 1]) {
      for (c = 0; c < Sk.builtin.biginteger.lowprimes.length; ++c) if (d[0] == Sk.builtin.biginteger.lowprimes[c]) return !0;
      return !1;
    }
    if (d.isEven()) return !1;
    for (c = 1; c < Sk.builtin.biginteger.lowprimes.length; ) {
      var e = Sk.builtin.biginteger.lowprimes[c];
      for (b = c + 1; b < Sk.builtin.biginteger.lowprimes.length && e < Sk.builtin.biginteger.lplim; ) e *= Sk.builtin.biginteger.lowprimes[b++];
      for (e = d.modInt(e); c < b; ) if (0 === e % Sk.builtin.biginteger.lowprimes[c++]) return !1;
    }
    return d.millerRabin(a);
  };
  Sk.builtin.biginteger.prototype.bnpMillerRabin = function (a) {
    var b,
      c,
      d = this.subtract(Sk.builtin.biginteger.ONE),
      e = d.getLowestSetBit();
    if (0 >= e) return !1;
    var f = d.shiftRight(e);
    a = (a + 1) >> 1;
    a > Sk.builtin.biginteger.lowprimes.length && (a = Sk.builtin.biginteger.lowprimes.length);
    var g = Sk.builtin.biginteger.nbi();
    for (c = 0; c < a; ++c) {
      g.fromInt(Sk.builtin.biginteger.lowprimes[c]);
      var h = g.modPow(f, this);
      if (0 !== h.compareTo(Sk.builtin.biginteger.ONE) && 0 !== h.compareTo(d)) {
        for (b = 1; b++ < e && 0 !== h.compareTo(d); ) if (((h = h.modPowInt(2, this)), 0 === h.compareTo(Sk.builtin.biginteger.ONE))) return !1;
        if (0 !== h.compareTo(d)) return !1;
      }
    }
    return !0;
  };
  Sk.builtin.biginteger.prototype.isnegative = function () {
    return 0 > this.s;
  };
  Sk.builtin.biginteger.prototype.ispositive = function () {
    return 0 <= this.s;
  };
  Sk.builtin.biginteger.prototype.trueCompare = function (a) {
    return 0 <= this.s && 0 > a.s ? 1 : 0 > this.s && 0 <= a.s ? -1 : this.compare(a);
  };
  Sk.builtin.biginteger.prototype.chunkSize = Sk.builtin.biginteger.prototype.bnpChunkSize;
  Sk.builtin.biginteger.prototype.toRadix = Sk.builtin.biginteger.prototype.bnpToRadix;
  Sk.builtin.biginteger.prototype.fromRadix = Sk.builtin.biginteger.prototype.bnpFromRadix;
  Sk.builtin.biginteger.prototype.fromNumber = Sk.builtin.biginteger.prototype.bnpFromNumber;
  Sk.builtin.biginteger.prototype.bitwiseTo = Sk.builtin.biginteger.prototype.bnpBitwiseTo;
  Sk.builtin.biginteger.prototype.changeBit = Sk.builtin.biginteger.prototype.bnpChangeBit;
  Sk.builtin.biginteger.prototype.addTo = Sk.builtin.biginteger.prototype.bnpAddTo;
  Sk.builtin.biginteger.prototype.dMultiply = Sk.builtin.biginteger.prototype.bnpDMultiply;
  Sk.builtin.biginteger.prototype.dAddOffset = Sk.builtin.biginteger.prototype.bnpDAddOffset;
  Sk.builtin.biginteger.prototype.multiplyLowerTo = Sk.builtin.biginteger.prototype.bnpMultiplyLowerTo;
  Sk.builtin.biginteger.prototype.multiplyUpperTo = Sk.builtin.biginteger.prototype.bnpMultiplyUpperTo;
  Sk.builtin.biginteger.prototype.modInt = Sk.builtin.biginteger.prototype.bnpModInt;
  Sk.builtin.biginteger.prototype.millerRabin = Sk.builtin.biginteger.prototype.bnpMillerRabin;
  Sk.builtin.biginteger.prototype.clone = Sk.builtin.biginteger.prototype.bnClone;
  Sk.builtin.biginteger.prototype.intValue = Sk.builtin.biginteger.prototype.bnIntValue;
  Sk.builtin.biginteger.prototype.byteValue = Sk.builtin.biginteger.prototype.bnByteValue;
  Sk.builtin.biginteger.prototype.shortValue = Sk.builtin.biginteger.prototype.bnShortValue;
  Sk.builtin.biginteger.prototype.signum = Sk.builtin.biginteger.prototype.bnSigNum;
  Sk.builtin.biginteger.prototype.toByteArray = Sk.builtin.biginteger.prototype.bnToByteArray;
  Sk.builtin.biginteger.prototype.equals = Sk.builtin.biginteger.prototype.bnEquals;
  Sk.builtin.biginteger.prototype.compare = Sk.builtin.biginteger.prototype.compareTo;
  Sk.builtin.biginteger.prototype.min = Sk.builtin.biginteger.prototype.bnMin;
  Sk.builtin.biginteger.prototype.max = Sk.builtin.biginteger.prototype.bnMax;
  Sk.builtin.biginteger.prototype.and = Sk.builtin.biginteger.prototype.bnAnd;
  Sk.builtin.biginteger.prototype.or = Sk.builtin.biginteger.prototype.bnOr;
  Sk.builtin.biginteger.prototype.xor = Sk.builtin.biginteger.prototype.bnXor;
  Sk.builtin.biginteger.prototype.andNot = Sk.builtin.biginteger.prototype.bnAndNot;
  Sk.builtin.biginteger.prototype.not = Sk.builtin.biginteger.prototype.bnNot;
  Sk.builtin.biginteger.prototype.shiftLeft = Sk.builtin.biginteger.prototype.bnShiftLeft;
  Sk.builtin.biginteger.prototype.shiftRight = Sk.builtin.biginteger.prototype.bnShiftRight;
  Sk.builtin.biginteger.prototype.getLowestSetBit = Sk.builtin.biginteger.prototype.bnGetLowestSetBit;
  Sk.builtin.biginteger.prototype.bitCount = Sk.builtin.biginteger.prototype.bnBitCount;
  Sk.builtin.biginteger.prototype.testBit = Sk.builtin.biginteger.prototype.bnTestBit;
  Sk.builtin.biginteger.prototype.setBit = Sk.builtin.biginteger.prototype.bnSetBit;
  Sk.builtin.biginteger.prototype.clearBit = Sk.builtin.biginteger.prototype.bnClearBit;
  Sk.builtin.biginteger.prototype.flipBit = Sk.builtin.biginteger.prototype.bnFlipBit;
  Sk.builtin.biginteger.prototype.add = Sk.builtin.biginteger.prototype.bnAdd;
  Sk.builtin.biginteger.prototype.subtract = Sk.builtin.biginteger.prototype.bnSubtract;
  Sk.builtin.biginteger.prototype.multiply = Sk.builtin.biginteger.prototype.bnMultiply;
  Sk.builtin.biginteger.prototype.divide = Sk.builtin.biginteger.prototype.bnDivide;
  Sk.builtin.biginteger.prototype.remainder = Sk.builtin.biginteger.prototype.bnRemainder;
  Sk.builtin.biginteger.prototype.divideAndRemainder = Sk.builtin.biginteger.prototype.bnDivideAndRemainder;
  Sk.builtin.biginteger.prototype.modPow = Sk.builtin.biginteger.prototype.bnModPow;
  Sk.builtin.biginteger.prototype.modInverse = Sk.builtin.biginteger.prototype.bnModInverse;
  Sk.builtin.biginteger.prototype.pow = Sk.builtin.biginteger.prototype.bnPow;
  Sk.builtin.biginteger.prototype.gcd = Sk.builtin.biginteger.prototype.bnGCD;
  Sk.builtin.biginteger.prototype.isProbablePrime = Sk.builtin.biginteger.prototype.bnIsProbablePrime;
  Sk.builtin.int_ = function (a, b) {
    if (!(this instanceof Sk.builtin.int_)) return new Sk.builtin.int_(a, b);
    if (this instanceof Sk.builtin.bool) return this;
    if (a instanceof Sk.builtin.int_ && void 0 === b) return (this.v = a.v), this;
    if (b !== Sk.builtin.none.none$ && void 0 !== b && !Sk.builtin.checkInt(b)) {
      if (Sk.builtin.checkFloat(b)) throw new Sk.builtin.TypeError("integer argument expected, got " + Sk.abstr.typeName(b));
      if (b.__index__) b = Sk.misceval.callsimArray(b.__index__, [b]);
      else if (b.__int__) b = Sk.misceval.callsimArray(b.__int__, [b]);
      else throw new Sk.builtin.AttributeError(Sk.abstr.typeName(b) + " instance has no attribute '__index__' or '__int__'");
    }
    if (a instanceof Sk.builtin.str) {
      b = Sk.builtin.asnum$(b);
      b === Sk.builtin.none.none$ && (b = 10);
      var c = Sk.str2number(
        a.v,
        b,
        parseInt,
        function (a) {
          return -a;
        },
        "int"
      );
      if (c > Sk.builtin.int_.threshold$ || c < -Sk.builtin.int_.threshold$) return new Sk.builtin.lng(a, b);
      this.v = c;
      return this;
    }
    if (void 0 !== b && b !== Sk.builtin.none.none$) throw new Sk.builtin.TypeError("int() can't convert non-string with explicit base");
    if (void 0 === a || a === Sk.builtin.none) a = 0;
    if (void 0 !== a && a.tp$getattr && (c = a.tp$getattr(Sk.builtin.str.$int_))) {
      var d = Sk.misceval.callsimArray(c);
      var e = "__int__";
    } else
      void 0 !== a && a.__int__
        ? ((d = Sk.misceval.callsimArray(a.__int__, [a])), (e = "__int__"))
        : void 0 !== a && a.tp$getattr && (c = a.tp$getattr(Sk.builtin.str.$trunc))
        ? ((d = Sk.misceval.callsimArray(c)), (e = "__trunc__"))
        : void 0 !== a && a.__trunc__ && ((d = Sk.misceval.callsimArray(a.__trunc__, [a])), (e = "__trunc__"));
    if (void 0 === d || Sk.builtin.checkInt(d)) void 0 !== d && (a = d);
    else throw new Sk.builtin.TypeError(e + " returned non-Integral (type " + Sk.abstr.typeName(d) + ")");
    if (!Sk.builtin.checkNumber(a)) throw new Sk.builtin.TypeError("int() argument must be a string or a number, not '" + Sk.abstr.typeName(a) + "'");
    a = Sk.builtin.asnum$(a);
    if (a > Sk.builtin.int_.threshold$ || a < -Sk.builtin.int_.threshold$) return new Sk.builtin.lng(a);
    -1 < a && 1 > a && (a = 0);
    this.v = parseInt(a, b);
    return this;
  };
  Sk.builtin.int_.$shiftconsts = [
    0.5,
    1,
    2,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512,
    1024,
    2048,
    4096,
    8192,
    16384,
    32768,
    65536,
    131072,
    262144,
    524288,
    1048576,
    2097152,
    4194304,
    8388608,
    16777216,
    33554432,
    67108864,
    134217728,
    268435456,
    536870912,
    1073741824,
    2147483648,
    4294967296,
    8589934592,
    17179869184,
    34359738368,
    68719476736,
    137438953472,
    274877906944,
    549755813888,
    1099511627776,
    2199023255552,
    4398046511104,
    8796093022208,
    17592186044416,
    35184372088832,
    70368744177664,
    0x800000000000,
    281474976710656,
    562949953421312,
    0x4000000000000,
    0x8000000000000,
    4503599627370496,
    9007199254740992,
  ];
  Sk.abstr.setUpInheritance("int", Sk.builtin.int_, Sk.builtin.numtype);
  Sk.builtin.int_.prototype.nb$int_ = function () {
    return this;
  };
  Sk.builtin.int_.prototype.nb$float_ = function () {
    return new Sk.builtin.float_(this.v);
  };
  Sk.builtin.int_.prototype.nb$lng = function () {
    return new Sk.builtin.lng(this.v);
  };
  Sk.builtin.int_.prototype.__trunc__ = new Sk.builtin.func(function (a) {
    return a;
  });
  Sk.builtin.int_.prototype.__index__ = new Sk.builtin.func(function (a) {
    return a;
  });
  Sk.builtin.int_.prototype.__complex__ = new Sk.builtin.func(function (a) {
    return Sk.builtin.NotImplemented.NotImplemented$;
  });
  Sk.builtin.int_.prototype.tp$index = function () {
    return this.v;
  };
  Sk.builtin.int_.prototype.tp$hash = function () {
    return new Sk.builtin.int_(this.v);
  };
  Sk.builtin.int_.threshold$ = Math.pow(2, 53) - 1;
  Sk.builtin.int_.prototype.clone = function () {
    return new Sk.builtin.int_(this.v);
  };
  Sk.builtin.int_.prototype.nb$add = function (a) {
    if (a instanceof Sk.builtin.int_) {
      var b = this.v + a.v;
      return b > Sk.builtin.int_.threshold$ || b < -Sk.builtin.int_.threshold$ ? ((b = new Sk.builtin.lng(this.v)), b.nb$add(a)) : new Sk.builtin.int_(b);
    }
    return a instanceof Sk.builtin.lng ? ((b = new Sk.builtin.lng(this.v)), b.nb$add(a)) : a instanceof Sk.builtin.float_ ? ((b = new Sk.builtin.float_(this.v)), b.nb$add(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$reflected_add = function (a) {
    return Sk.builtin.int_.prototype.nb$add.call(this, a);
  };
  Sk.builtin.int_.prototype.nb$subtract = function (a) {
    if (a instanceof Sk.builtin.int_) {
      var b = this.v - a.v;
      return b > Sk.builtin.int_.threshold$ || b < -Sk.builtin.int_.threshold$ ? ((b = new Sk.builtin.lng(this.v)), b.nb$subtract(a)) : new Sk.builtin.int_(b);
    }
    return a instanceof Sk.builtin.lng ? ((b = new Sk.builtin.lng(this.v)), b.nb$subtract(a)) : a instanceof Sk.builtin.float_ ? ((b = new Sk.builtin.float_(this.v)), b.nb$subtract(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$reflected_subtract = function (a) {
    var b = this.nb$negative();
    return Sk.builtin.int_.prototype.nb$add.call(b, a);
  };
  Sk.builtin.int_.prototype.nb$multiply = function (a) {
    if (a instanceof Sk.builtin.int_) {
      var b = this.v * a.v;
      return b > Sk.builtin.int_.threshold$ || b < -Sk.builtin.int_.threshold$ ? ((b = new Sk.builtin.lng(this.v)), b.nb$multiply(a)) : new Sk.builtin.int_(b);
    }
    return a instanceof Sk.builtin.lng ? ((b = new Sk.builtin.lng(this.v)), b.nb$multiply(a)) : a instanceof Sk.builtin.float_ ? ((b = new Sk.builtin.float_(this.v)), b.nb$multiply(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$reflected_multiply = function (a) {
    return Sk.builtin.int_.prototype.nb$multiply.call(this, a);
  };
  Sk.builtin.int_.prototype.nb$divide = function (a) {
    if (Sk.__future__.division) {
      var b = new Sk.builtin.float_(this.v);
      return b.nb$divide(a);
    }
    return a instanceof Sk.builtin.int_
      ? this.nb$floor_divide(a)
      : a instanceof Sk.builtin.lng
      ? ((b = new Sk.builtin.lng(this.v)), b.nb$divide(a))
      : a instanceof Sk.builtin.float_
      ? ((b = new Sk.builtin.float_(this.v)), b.nb$divide(a))
      : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$reflected_divide = function (a) {
    return this.nb$reflected_floor_divide(a);
  };
  Sk.builtin.int_.prototype.nb$floor_divide = function (a) {
    if (a instanceof Sk.builtin.int_) {
      if (0 === a.v) throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
      return new Sk.builtin.int_(Math.floor(this.v / a.v));
    }
    if (a instanceof Sk.builtin.lng) {
      var b = new Sk.builtin.lng(this.v);
      return b.nb$floor_divide(a);
    }
    return a instanceof Sk.builtin.float_ ? ((b = new Sk.builtin.float_(this.v)), b.nb$floor_divide(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$reflected_floor_divide = function (a) {
    return a instanceof Sk.builtin.int_ ? a.nb$divide(this) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$remainder = function (a) {
    if (a instanceof Sk.builtin.int_) {
      var b = Sk.abstr.numberBinOp(this, a, "FloorDiv");
      b = Sk.abstr.numberBinOp(b, a, "Mult");
      b = Sk.abstr.numberBinOp(this, b, "Sub");
      b = b.v;
      0 > a.v && 0 === b ? (b = -0) : 0 === b && -Infinity === Infinity / b && (b = 0);
      return new Sk.builtin.int_(b);
    }
    return a instanceof Sk.builtin.lng ? ((b = new Sk.builtin.lng(this.v)), b.nb$remainder(a)) : a instanceof Sk.builtin.float_ ? ((b = new Sk.builtin.float_(this.v)), b.nb$remainder(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$reflected_remainder = function (a) {
    return a instanceof Sk.builtin.int_ ? a.nb$remainder(this) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$divmod = function (a) {
    if (a instanceof Sk.builtin.int_) return new Sk.builtin.tuple([this.nb$floor_divide(a), this.nb$remainder(a)]);
    if (a instanceof Sk.builtin.lng) {
      var b = new Sk.builtin.lng(this.v);
      return b.nb$divmod(a);
    }
    return a instanceof Sk.builtin.float_ ? ((b = new Sk.builtin.float_(this.v)), b.nb$divmod(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$reflected_divmod = function (a) {
    return a instanceof Sk.builtin.int_ ? new Sk.builtin.tuple([a.nb$floor_divide(this), a.nb$remainder(this)]) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$power = function (a, b) {
    if (a instanceof Sk.builtin.int_ && (void 0 === b || b instanceof Sk.builtin.int_)) {
      var c = Math.pow(this.v, a.v);
      c > Sk.builtin.int_.threshold$ || c < -Sk.builtin.int_.threshold$ ? ((c = new Sk.builtin.lng(this.v)), (c = c.nb$power(a, b))) : (c = 0 > a.v ? new Sk.builtin.float_(c) : new Sk.builtin.int_(c));
      if (void 0 !== b) {
        if (0 > a.v) throw new Sk.builtin.TypeError("pow() 2nd argument cannot be negative when 3rd argument specified");
        return c.nb$remainder(b);
      }
      return c;
    }
    return a instanceof Sk.builtin.lng ? ((c = new Sk.builtin.lng(this.v)), c.nb$power(a)) : a instanceof Sk.builtin.float_ ? ((b = new Sk.builtin.float_(this.v)), b.nb$power(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$reflected_power = function (a, b) {
    return a instanceof Sk.builtin.int_ ? a.nb$power(this, b) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$abs = function () {
    return new Sk.builtin.int_(Math.abs(this.v));
  };
  Sk.builtin.int_.prototype.nb$and = function (a) {
    if (a instanceof Sk.builtin.int_) {
      a = Sk.builtin.asnum$(a);
      var b = this.v & a;
      void 0 !== b && 0 > b && (b += 4294967296);
      if (void 0 !== b) return new Sk.builtin.int_(b);
    }
    return a instanceof Sk.builtin.lng ? ((b = new Sk.builtin.lng(this.v)), b.nb$and(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$reflected_and = Sk.builtin.int_.prototype.nb$and;
  Sk.builtin.int_.prototype.nb$or = function (a) {
    if (a instanceof Sk.builtin.int_) {
      a = Sk.builtin.asnum$(a);
      var b = this.v | a;
      void 0 !== b && 0 > b && (b += 4294967296);
      if (void 0 !== b) return new Sk.builtin.int_(b);
    }
    return a instanceof Sk.builtin.lng ? ((b = new Sk.builtin.lng(this.v)), b.nb$and(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$reflected_or = Sk.builtin.int_.prototype.nb$or;
  Sk.builtin.int_.prototype.nb$xor = function (a) {
    if (a instanceof Sk.builtin.int_) {
      a = Sk.builtin.asnum$(a);
      var b = this.v ^ a;
      void 0 !== b && 0 > b && (b += 4294967296);
      if (void 0 !== b) return new Sk.builtin.int_(b);
    }
    return a instanceof Sk.builtin.lng ? ((b = new Sk.builtin.lng(this.v)), b.nb$xor(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$reflected_xor = Sk.builtin.int_.prototype.nb$xor;
  Sk.builtin.int_.prototype.nb$lshift = function (a) {
    if (0 === this.v) return this;
    if (a instanceof Sk.builtin.int_) {
      var b = Sk.builtin.asnum$(a);
      if (void 0 !== b) {
        if (0 > b) throw new Sk.builtin.ValueError("negative shift count");
        if (53 < b) return new Sk.builtin.lng(this.v).nb$lshift(new Sk.builtin.int_(b));
        var c = 2 * this.v * Sk.builtin.int_.$shiftconsts[b];
        if (c > Sk.builtin.int_.threshold$ || c < -Sk.builtin.int_.threshold$) return new Sk.builtin.lng(c);
      }
      if (void 0 !== c) return new Sk.builtin.int_(c);
    }
    return a instanceof Sk.builtin.lng ? ((c = new Sk.builtin.lng(this.v)), c.nb$lshift(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$reflected_lshift = function (a) {
    return a instanceof Sk.builtin.int_ ? a.nb$lshift(this) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$rshift = function (a) {
    if (a instanceof Sk.builtin.int_) {
      var b = Sk.builtin.asnum$(a);
      if (void 0 !== b) {
        if (0 > b) throw new Sk.builtin.ValueError("negative shift count");
        var c = this.v >> b;
        0 < this.v && 0 > c && (c &= Math.pow(2, 32 - b) - 1);
      }
      if (void 0 !== c) return new Sk.builtin.int_(c);
    }
    return a instanceof Sk.builtin.lng ? ((c = new Sk.builtin.lng(this.v)), c.nb$rshift(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$reflected_rshift = function (a) {
    return a instanceof Sk.builtin.int_ ? a.nb$rshift(this) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.nb$invert = function () {
    return new Sk.builtin.int_(~this.v);
  };
  Sk.builtin.int_.prototype.nb$inplace_add = Sk.builtin.int_.prototype.nb$add;
  Sk.builtin.int_.prototype.nb$inplace_subtract = Sk.builtin.int_.prototype.nb$subtract;
  Sk.builtin.int_.prototype.nb$inplace_multiply = Sk.builtin.int_.prototype.nb$multiply;
  Sk.builtin.int_.prototype.nb$inplace_divide = Sk.builtin.int_.prototype.nb$divide;
  Sk.builtin.int_.prototype.nb$inplace_remainder = Sk.builtin.int_.prototype.nb$remainder;
  Sk.builtin.int_.prototype.nb$inplace_floor_divide = Sk.builtin.int_.prototype.nb$floor_divide;
  Sk.builtin.int_.prototype.nb$inplace_power = Sk.builtin.int_.prototype.nb$power;
  Sk.builtin.int_.prototype.nb$inplace_and = Sk.builtin.int_.prototype.nb$and;
  Sk.builtin.int_.prototype.nb$inplace_or = Sk.builtin.int_.prototype.nb$or;
  Sk.builtin.int_.prototype.nb$inplace_xor = Sk.builtin.int_.prototype.nb$xor;
  Sk.builtin.int_.prototype.nb$inplace_lshift = Sk.builtin.int_.prototype.nb$lshift;
  Sk.builtin.int_.prototype.nb$inplace_rshift = Sk.builtin.int_.prototype.nb$rshift;
  Sk.builtin.int_.prototype.nb$negative = function () {
    return new Sk.builtin.int_(-this.v);
  };
  Sk.builtin.int_.prototype.nb$positive = function () {
    return this.clone();
  };
  Sk.builtin.int_.prototype.nb$nonzero = function () {
    return 0 !== this.v;
  };
  Sk.builtin.int_.prototype.nb$isnegative = function () {
    return 0 > this.v;
  };
  Sk.builtin.int_.prototype.nb$ispositive = function () {
    return 0 <= this.v;
  };
  Sk.builtin.int_.prototype.numberCompare = function (a) {
    return a instanceof Sk.builtin.int_ ? this.v - a.v : a instanceof Sk.builtin.lng ? -a.longCompare(this) : a instanceof Sk.builtin.float_ ? -a.numberCompare(this) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.ob$eq = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_
      ? new Sk.builtin.bool(0 == this.numberCompare(a))
      : a instanceof Sk.builtin.none
      ? Sk.builtin.bool.false$
      : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.ob$ne = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_
      ? new Sk.builtin.bool(0 != this.numberCompare(a))
      : a instanceof Sk.builtin.none
      ? Sk.builtin.bool.true$
      : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.ob$lt = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 > this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.ob$le = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 >= this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.ob$gt = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 < this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.ob$ge = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 <= this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.int_.prototype.round$ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__round__", arguments.length, 1, 2);
    if (void 0 !== b && !Sk.misceval.isIndex(b)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object cannot be interpreted as an index");
    var c = Sk.builtin.asnum$(a);
    var d = void 0 === b ? 0 : Sk.misceval.asIndex(b);
    if (Sk.__future__.bankers_rounding) {
      c *= Math.pow(10, d);
      var e = Math.round(c);
      d = (0.5 === (0 < c ? c : -c) % 1 ? (0 === e % 2 ? e : e - 1) : e) / Math.pow(10, d);
    } else (d = Math.pow(10, d)), (d = Math.round(c * d) / d);
    return new Sk.builtin.int_(d);
  };
  Sk.builtin.int_.prototype.__format__ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__format__", arguments.length, 2, 2);
    if (Sk.builtin.checkString(b)) {
      var c = Sk.ffi.remapToJs(b);
      if ("" !== c) throw new Sk.builtin.NotImplementedError("format spec is not yet implemented");
    } else {
      if (Sk.__future__.exceptions) throw new Sk.builtin.TypeError("format() argument 2 must be str, not " + Sk.abstr.typeName(b));
      throw new Sk.builtin.TypeError("format expects arg 2 to be string or unicode, not " + Sk.abstr.typeName(b));
    }
    return new Sk.builtin.str(a);
  };
  Sk.builtin.int_.prototype.conjugate = new Sk.builtin.func(function (a) {
    return new Sk.builtin.int_(a.v);
  });
  Sk.builtin.int_.prototype.$r = function () {
    return new Sk.builtin.str(this.str$(10, !0));
  };
  Sk.builtin.int_.prototype.tp$str = function () {
    return new Sk.builtin.str(this.str$(10, !0));
  };
  Sk.builtin.int_.prototype.str$ = function (a, b) {
    void 0 === b && (b = !0);
    b = b ? this.v : Math.abs(this.v);
    return void 0 === a || 10 === a ? b.toString() : b.toString(a);
  };
  Sk.str2number = function (a, b, c, d, e) {
    var f = a,
      g = !1,
      h;
    a = a.replace(/^\s+|\s+$/g, "");
    "-" === a.charAt(0) && ((g = !0), (a = a.substring(1)));
    "+" === a.charAt(0) && (a = a.substring(1));
    if (null === b || void 0 === b) b = 10;
    if ((2 > b || 36 < b) && 0 !== b) throw new Sk.builtin.ValueError(e + "() base must be >= 2 and <= 36");
    if ("0x" === a.substring(0, 2).toLowerCase())
      if (16 === b || 0 === b) (a = a.substring(2)), (b = 16);
      else {
        if (34 > b) throw new Sk.builtin.ValueError("invalid literal for " + e + "() with base " + b + ": '" + f + "'");
      }
    else if ("0b" === a.substring(0, 2).toLowerCase())
      if (2 === b || 0 === b) (a = a.substring(2)), (b = 2);
      else {
        if (12 > b) throw new Sk.builtin.ValueError("invalid literal for " + e + "() with base " + b + ": '" + f + "'");
      }
    else if ("0o" === a.substring(0, 2).toLowerCase())
      if (8 === b || 0 === b) (a = a.substring(2)), (b = 8);
      else {
        if (25 > b) throw new Sk.builtin.ValueError("invalid literal for " + e + "() with base " + b + ": '" + f + "'");
      }
    else if ("0" === a.charAt(0)) {
      if ("0" === a) return 0;
      if (8 === b || 0 === b) b = 8;
    }
    0 === b && (b = 10);
    if (0 === a.length) throw new Sk.builtin.ValueError("invalid literal for " + e + "() with base " + b + ": '" + f + "'");
    for (h = 0; h < a.length; h += 1) {
      var k = a.charCodeAt(h);
      var l = b;
      48 <= k && 57 >= k ? (l = k - 48) : 65 <= k && 90 >= k ? (l = k - 65 + 10) : 97 <= k && 122 >= k && (l = k - 97 + 10);
      if (l >= b) throw new Sk.builtin.ValueError("invalid literal for " + e + "() with base " + b + ": '" + f + "'");
    }
    l = c(a, b);
    g && (l = d(l));
    return l;
  };
  Sk.exportSymbol("Sk.builtin.int_", Sk.builtin.int_);
  Sk.builtin.bool = function (a) {
    Sk.builtin.pyCheckArgsLen("bool", arguments.length, 1);
    return Sk.misceval.isTrue(a) ? Sk.builtin.bool.true$ : Sk.builtin.bool.false$;
  };
  Sk.abstr.setUpInheritance("bool", Sk.builtin.bool, Sk.builtin.int_);
  Sk.builtin.bool.prototype.$r = function () {
    return this.v ? new Sk.builtin.str("True") : new Sk.builtin.str("False");
  };
  Sk.builtin.bool.prototype.tp$hash = function () {
    return new Sk.builtin.int_(this.v);
  };
  Sk.builtin.bool.prototype.__int__ = new Sk.builtin.func(function (a) {
    a = Sk.builtin.asnum$(a);
    return new Sk.builtin.int_(a);
  });
  Sk.builtin.bool.prototype.__float__ = new Sk.builtin.func(function (a) {
    return new Sk.builtin.float_(Sk.ffi.remapToJs(a));
  });
  Sk.exportSymbol("Sk.builtin.bool", Sk.builtin.bool);
  Sk.builtin.float_ = function (a) {
    if (void 0 === a) return new Sk.builtin.float_(0);
    if (!(this instanceof Sk.builtin.float_)) return new Sk.builtin.float_(a);
    if (a instanceof Sk.builtin.str) return Sk.builtin._str_to_float(a.v);
    if ("number" === typeof a || a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_) {
      a = Sk.builtin.asnum$(a);
      if ("string" === typeof a) return Sk.builtin._str_to_float(a);
      this.v = a;
      return this;
    }
    if (a instanceof Sk.builtin.bool) return (this.v = Sk.builtin.asnum$(a)), this;
    if ("boolean" === typeof a) return (this.v = a ? 1 : 0), this;
    if ("string" === typeof a) return (this.v = parseFloat(a)), this;
    var b = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$float_);
    if (null != b) return Sk.misceval.callsimArray(b, [a]);
    throw new Sk.builtin.TypeError("float() argument must be a string or a number");
  };
  Sk.abstr.setUpInheritance("float", Sk.builtin.float_, Sk.builtin.numtype);
  Sk.builtin._str_to_float = function (a) {
    if (a.match(/^-inf$/i)) a = -Infinity;
    else if (a.match(/^[+]?inf$/i)) a = Infinity;
    else if (a.match(/^[-+]?nan$/i)) a = NaN;
    else {
      if (isNaN(a)) throw new Sk.builtin.ValueError("float: Argument: " + a + " is not number");
      a = parseFloat(a);
    }
    return new Sk.builtin.float_(a);
  };
  Sk.builtin.float_.prototype.nb$int_ = function () {
    var a = this.v;
    a = 0 > a ? Math.ceil(a) : Math.floor(a);
    return new Sk.builtin.int_(a);
  };
  Sk.builtin.float_.prototype.nb$float_ = function () {
    return this;
  };
  Sk.builtin.float_.prototype.nb$lng = function () {
    return new Sk.builtin.lng(this.v);
  };
  Sk.builtin.float_.PyFloat_Check = function (a) {
    return void 0 === a ? !1 : Sk.builtin.checkNumber(a) || Sk.builtin.checkFloat(a) || Sk.builtin.issubclass(a.ob$type, Sk.builtin.float_) ? !0 : !1;
  };
  Sk.builtin.float_.PyFloat_Check_Exact = function (a) {
    return Sk.builtin.checkFloat(a);
  };
  Sk.builtin.float_.PyFloat_AsDouble = function (a) {
    if (a && Sk.builtin.float_.PyFloat_Check(a)) return Sk.ffi.remapToJs(a);
    if (null == a) throw Error("bad argument for internal PyFloat_AsDouble function");
    var b = Sk.builtin.type.typeLookup(a.ob$type, Sk.builtin.str.$float_);
    if (null == b) throw new Sk.builtin.TypeError("a float is required");
    a = Sk.misceval.callsimArray(b, [a]);
    if (!Sk.builtin.float_.PyFloat_Check(a)) throw new Sk.builtin.TypeError("nb_float should return float object");
    return Sk.ffi.remapToJs(a);
  };
  Sk.builtin.float_.prototype.tp$index = function () {
    return this.v;
  };
  Sk.builtin.float_.prototype.tp$hash = function () {
    return this.nb$int_();
  };
  Sk.builtin.float_.prototype.clone = function () {
    return new Sk.builtin.float_(this.v);
  };
  Sk.builtin.float_.prototype.toFixed = function (a) {
    a = Sk.builtin.asnum$(a);
    return this.v.toFixed(a);
  };
  Sk.builtin.float_.prototype.nb$add = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_
      ? new Sk.builtin.float_(this.v + a.v)
      : a instanceof Sk.builtin.lng
      ? new Sk.builtin.float_(this.v + parseFloat(a.str$(10, !0)))
      : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.nb$reflected_add = function (a) {
    return Sk.builtin.float_.prototype.nb$add.call(this, a);
  };
  Sk.builtin.float_.prototype.nb$subtract = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_
      ? new Sk.builtin.float_(this.v - a.v)
      : a instanceof Sk.builtin.lng
      ? new Sk.builtin.float_(this.v - parseFloat(a.str$(10, !0)))
      : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.nb$reflected_subtract = function (a) {
    var b = this.nb$negative();
    return Sk.builtin.float_.prototype.nb$add.call(b, a);
  };
  Sk.builtin.float_.prototype.nb$multiply = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_
      ? new Sk.builtin.float_(this.v * a.v)
      : a instanceof Sk.builtin.lng
      ? new Sk.builtin.float_(this.v * parseFloat(a.str$(10, !0)))
      : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.nb$reflected_multiply = function (a) {
    return Sk.builtin.float_.prototype.nb$multiply.call(this, a);
  };
  Sk.builtin.float_.prototype.nb$divide = function (a) {
    if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_) {
      if (0 === a.v) throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
      return Infinity === this.v
        ? Infinity === a.v || -Infinity === a.v
          ? new Sk.builtin.float_(NaN)
          : a.nb$isnegative()
          ? new Sk.builtin.float_(-Infinity)
          : new Sk.builtin.float_(Infinity)
        : -Infinity === this.v
        ? Infinity === a.v || -Infinity === a.v
          ? new Sk.builtin.float_(NaN)
          : a.nb$isnegative()
          ? new Sk.builtin.float_(Infinity)
          : new Sk.builtin.float_(-Infinity)
        : new Sk.builtin.float_(this.v / a.v);
    }
    if (a instanceof Sk.builtin.lng) {
      if (0 === a.longCompare(Sk.builtin.biginteger.ZERO)) throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
      return Infinity === this.v
        ? a.nb$isnegative()
          ? new Sk.builtin.float_(-Infinity)
          : new Sk.builtin.float_(Infinity)
        : -Infinity === this.v
        ? a.nb$isnegative()
          ? new Sk.builtin.float_(Infinity)
          : new Sk.builtin.float_(-Infinity)
        : new Sk.builtin.float_(this.v / parseFloat(a.str$(10, !0)));
    }
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.nb$reflected_divide = function (a) {
    if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng) a = new Sk.builtin.float_(a);
    return a instanceof Sk.builtin.float_ ? a.nb$divide(this) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.nb$floor_divide = function (a) {
    if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_) {
      if (Infinity === this.v || -Infinity === this.v) return new Sk.builtin.float_(NaN);
      if (0 === a.v) throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
      return Infinity === a.v
        ? this.nb$isnegative()
          ? new Sk.builtin.float_(-1)
          : new Sk.builtin.float_(0)
        : -Infinity === a.v
        ? this.nb$isnegative() || !this.nb$nonzero()
          ? new Sk.builtin.float_(0)
          : new Sk.builtin.float_(-1)
        : new Sk.builtin.float_(Math.floor(this.v / a.v));
    }
    if (a instanceof Sk.builtin.lng) {
      if (0 === a.longCompare(Sk.builtin.biginteger.ZERO)) throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
      return Infinity === this.v || -Infinity === this.v ? new Sk.builtin.float_(NaN) : new Sk.builtin.float_(Math.floor(this.v / parseFloat(a.str$(10, !0))));
    }
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.nb$reflected_floor_divide = function (a) {
    if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng) a = new Sk.builtin.float_(a);
    return a instanceof Sk.builtin.float_ ? a.nb$floor_divide(this) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.nb$remainder = function (a) {
    if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_) {
      if (0 === a.v) throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
      if (0 === this.v) return new Sk.builtin.float_(0);
      if (Infinity === a.v) return Infinity === this.v || -Infinity === this.v ? new Sk.builtin.float_(NaN) : this.nb$ispositive() ? new Sk.builtin.float_(this.v) : new Sk.builtin.float_(Infinity);
      var b = this.v % a.v;
      0 > this.v ? 0 < a.v && 0 > b && (b += a.v) : 0 > a.v && 0 !== b && (b += a.v);
      0 > a.v && 0 === b ? (b = -0) : 0 === b && -Infinity === Infinity / b && (b = 0);
      return new Sk.builtin.float_(b);
    }
    if (a instanceof Sk.builtin.lng) {
      if (0 === a.longCompare(Sk.builtin.biginteger.ZERO)) throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
      if (0 === this.v) return new Sk.builtin.float_(0);
      var c = parseFloat(a.str$(10, !0));
      b = this.v % c;
      0 > b ? 0 < c && 0 !== b && (b += c) : 0 > c && 0 !== b && (b += c);
      a.nb$isnegative() && 0 === b ? (b = -0) : 0 === b && -Infinity === Infinity / b && (b = 0);
      return new Sk.builtin.float_(b);
    }
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.nb$reflected_remainder = function (a) {
    if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng) a = new Sk.builtin.float_(a);
    return a instanceof Sk.builtin.float_ ? a.nb$remainder(this) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.nb$divmod = function (a) {
    if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng) a = new Sk.builtin.float_(a);
    return a instanceof Sk.builtin.float_ ? new Sk.builtin.tuple([this.nb$floor_divide(a), this.nb$remainder(a)]) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.nb$reflected_divmod = function (a) {
    if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng) a = new Sk.builtin.float_(a);
    return a instanceof Sk.builtin.float_ ? new Sk.builtin.tuple([a.nb$floor_divide(this), a.nb$remainder(this)]) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.nb$power = function (a, b) {
    if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_) {
      if (0 > this.v && 0 !== a.v % 1) throw new Sk.builtin.NegativePowerError("cannot raise a negative number to a fractional power");
      if (0 === this.v && 0 > a.v) throw new Sk.builtin.NegativePowerError("cannot raise zero to a negative power");
      b = new Sk.builtin.float_(Math.pow(this.v, a.v));
      if (Infinity === Math.abs(b.v) && Infinity !== Math.abs(this.v) && Infinity !== Math.abs(a.v)) throw new Sk.builtin.OverflowError("Numerical result out of range");
      return b;
    }
    if (a instanceof Sk.builtin.lng) {
      if (0 === this.v && 0 > a.longCompare(Sk.builtin.biginteger.ZERO)) throw new Sk.builtin.NegativePowerError("cannot raise zero to a negative power");
      return new Sk.builtin.float_(Math.pow(this.v, parseFloat(a.str$(10, !0))));
    }
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.nb$reflected_power = function (a, b) {
    if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng) a = new Sk.builtin.float_(a);
    return a instanceof Sk.builtin.float_ ? a.nb$power(this, b) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.nb$abs = function () {
    return new Sk.builtin.float_(Math.abs(this.v));
  };
  Sk.builtin.float_.prototype.nb$inplace_add = Sk.builtin.float_.prototype.nb$add;
  Sk.builtin.float_.prototype.nb$inplace_subtract = Sk.builtin.float_.prototype.nb$subtract;
  Sk.builtin.float_.prototype.nb$inplace_multiply = Sk.builtin.float_.prototype.nb$multiply;
  Sk.builtin.float_.prototype.nb$inplace_divide = Sk.builtin.float_.prototype.nb$divide;
  Sk.builtin.float_.prototype.nb$inplace_remainder = Sk.builtin.float_.prototype.nb$remainder;
  Sk.builtin.float_.prototype.nb$inplace_floor_divide = Sk.builtin.float_.prototype.nb$floor_divide;
  Sk.builtin.float_.prototype.nb$inplace_power = Sk.builtin.float_.prototype.nb$power;
  Sk.builtin.float_.prototype.nb$negative = function () {
    return new Sk.builtin.float_(-this.v);
  };
  Sk.builtin.float_.prototype.nb$positive = function () {
    return this.clone();
  };
  Sk.builtin.float_.prototype.nb$nonzero = function () {
    return 0 !== this.v;
  };
  Sk.builtin.float_.prototype.nb$isnegative = function () {
    return 0 > this.v;
  };
  Sk.builtin.float_.prototype.nb$ispositive = function () {
    return 0 <= this.v;
  };
  Sk.builtin.float_.prototype.numberCompare = function (a) {
    if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_) return (Infinity == this.v && Infinity == a.v) || (-Infinity == this.v && -Infinity == a.v) ? 0 : this.v - a.v;
    if (a instanceof Sk.builtin.lng) {
      if (0 === this.v % 1) {
        var b = new Sk.builtin.lng(this.v);
        return (a = b.longCompare(a));
      }
      a = this.nb$subtract(a);
      if (a instanceof Sk.builtin.float_) return a.v;
      if (a instanceof Sk.builtin.lng) return a.longCompare(Sk.builtin.biginteger.ZERO);
    }
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.ob$eq = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_
      ? new Sk.builtin.bool(0 == this.numberCompare(a))
      : a instanceof Sk.builtin.none
      ? Sk.builtin.bool.false$
      : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.ob$ne = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_
      ? new Sk.builtin.bool(0 != this.numberCompare(a))
      : a instanceof Sk.builtin.none
      ? Sk.builtin.bool.true$
      : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.ob$lt = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 > this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.ob$le = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 >= this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.ob$gt = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 < this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.ob$ge = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 <= this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.float_.prototype.round$ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__round__", arguments.length, 1, 2);
    if (void 0 !== b && !Sk.misceval.isIndex(b)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object cannot be interpreted as an index");
    var c = Sk.builtin.asnum$(a);
    var d = void 0 === b ? 0 : Sk.misceval.asIndex(b);
    if (Sk.__future__.bankers_rounding) {
      c *= Math.pow(10, d);
      var e = Math.round(c);
      d = (0.5 === (0 < c ? c : -c) % 1 ? (0 === e % 2 ? e : e - 1) : e) / Math.pow(10, d);
      return void 0 === b ? new Sk.builtin.int_(d) : new Sk.builtin.float_(d);
    }
    d = Math.pow(10, d);
    d = Math.round(c * d) / d;
    return new Sk.builtin.float_(d);
  };
  Sk.builtin.float_.prototype.__format__ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__format__", arguments.length, 2, 2);
    if (Sk.builtin.checkString(b)) {
      var c = Sk.ffi.remapToJs(b);
      if ("" !== c) throw new Sk.builtin.NotImplementedError("format spec is not yet implemented");
    } else {
      if (Sk.__future__.exceptions) throw new Sk.builtin.TypeError("format() argument 2 must be str, not " + Sk.abstr.typeName(b));
      throw new Sk.builtin.TypeError("format expects arg 2 to be string or unicode, not " + Sk.abstr.typeName(b));
    }
    return new Sk.builtin.str(a);
  };
  Sk.builtin.float_.prototype.conjugate = new Sk.builtin.func(function (a) {
    return new Sk.builtin.float_(a.v);
  });
  Sk.builtin.float_.prototype.$r = function () {
    return new Sk.builtin.str(this.str$(10, !0));
  };
  Sk.builtin.float_.prototype.tp$str = function () {
    return new Sk.builtin.str(this.str$(10, !0));
  };
  Sk.builtin.float_.prototype.str$ = function (a, b) {
    if (isNaN(this.v)) return "nan";
    void 0 === b && (b = !0);
    if (Infinity == this.v) return "inf";
    if (-Infinity == this.v && b) return "-inf";
    if (-Infinity == this.v && !b) return "inf";
    b = b ? this.v : Math.abs(this.v);
    if (void 0 === a || 10 === a) {
      var c = b.toPrecision(12);
      var d = c.indexOf(".");
      a = b.toString().slice(0, d);
      d = b.toString().slice(d);
      a.match(/^-?0$/) && d.slice(1).match(/^0{4,}/) && (c = 12 > c.length ? b.toExponential() : b.toExponential(11));
      if (0 > c.indexOf("e") && 0 <= c.indexOf(".")) {
        for (; "0" == c.charAt(c.length - 1); ) c = c.substring(0, c.length - 1);
        "." == c.charAt(c.length - 1) && (c += "0");
      }
      c = c.replace(/\.0+e/, "e", "i");
      c = c.replace(/(e[-+])([1-9])$/, "$10$2");
      c = c.replace(/0+(e.*)/, "$1");
    } else c = b.toString(a);
    0 === this.v && -Infinity === 1 / this.v && (c = "-" + c);
    0 > c.indexOf(".") && 0 > c.indexOf("E") && 0 > c.indexOf("e") && (c += ".0");
    return c;
  };
  var deprecatedError = new Sk.builtin.ExternalError("Sk.builtin.nmber is deprecated.");
  Sk.builtin.nmber = function (a, b) {
    throw new Sk.builtin.ExternalError("Sk.builtin.nmber is deprecated. Please replace with Sk.builtin.int_, Sk.builtin.float_, or Sk.builtin.assk$.");
  };
  Sk.builtin.nmber.prototype.tp$index = function () {
    return this.v;
  };
  Sk.builtin.nmber.prototype.tp$hash = function () {
    throw deprecatedError;
  };
  Sk.builtin.nmber.fromInt$ = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.clone = function () {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.toFixed = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$add = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$subtract = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$multiply = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$divide = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$floor_divide = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$remainder = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$divmod = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$power = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$and = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$or = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$xor = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$lshift = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$rshift = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$inplace_add = Sk.builtin.nmber.prototype.nb$add;
  Sk.builtin.nmber.prototype.nb$inplace_subtract = Sk.builtin.nmber.prototype.nb$subtract;
  Sk.builtin.nmber.prototype.nb$inplace_multiply = Sk.builtin.nmber.prototype.nb$multiply;
  Sk.builtin.nmber.prototype.nb$inplace_divide = Sk.builtin.nmber.prototype.nb$divide;
  Sk.builtin.nmber.prototype.nb$inplace_remainder = Sk.builtin.nmber.prototype.nb$remainder;
  Sk.builtin.nmber.prototype.nb$inplace_floor_divide = Sk.builtin.nmber.prototype.nb$floor_divide;
  Sk.builtin.nmber.prototype.nb$inplace_power = Sk.builtin.nmber.prototype.nb$power;
  Sk.builtin.nmber.prototype.nb$inplace_and = Sk.builtin.nmber.prototype.nb$and;
  Sk.builtin.nmber.prototype.nb$inplace_or = Sk.builtin.nmber.prototype.nb$or;
  Sk.builtin.nmber.prototype.nb$inplace_xor = Sk.builtin.nmber.prototype.nb$xor;
  Sk.builtin.nmber.prototype.nb$inplace_lshift = Sk.builtin.nmber.prototype.nb$lshift;
  Sk.builtin.nmber.prototype.nb$inplace_rshift = Sk.builtin.nmber.prototype.nb$rshift;
  Sk.builtin.nmber.prototype.nb$negative = function () {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$positive = function () {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$nonzero = function () {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$isnegative = function () {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.nb$ispositive = function () {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.numberCompare = function (a) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.__eq__ = function (a, b) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.__ne__ = function (a, b) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.__lt__ = function (a, b) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.__le__ = function (a, b) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.__gt__ = function (a, b) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.__ge__ = function (a, b) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.round$ = function (a, b) {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.$r = function () {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.tp$str = function () {
    throw deprecatedError;
  };
  Sk.builtin.nmber.prototype.str$ = function (a, b) {
    throw deprecatedError;
  };
  Sk.exportSymbol("Sk.builtin.nmber", Sk.builtin.nmber);
  Sk.builtin.lng = function (a, b) {
    b = Sk.builtin.asnum$(b);
    if (!(this instanceof Sk.builtin.lng)) return new Sk.builtin.lng(a, b);
    if (void 0 === a) return (this.biginteger = new Sk.builtin.biginteger(0)), this;
    if (a instanceof Sk.builtin.lng) return (this.biginteger = a.biginteger.clone()), this;
    if (a instanceof Sk.builtin.biginteger) return (this.biginteger = a), this;
    if (a instanceof String || "string" === typeof a) return Sk.longFromStr(a, b);
    if (a instanceof Sk.builtin.str) return Sk.longFromStr(a.v, b);
    if (void 0 !== a && !Sk.builtin.checkString(a) && !Sk.builtin.checkNumber(a))
      if (!0 === a) a = 1;
      else if (!1 === a) a = 0;
      else throw new Sk.builtin.TypeError("long() argument must be a string or a number, not '" + Sk.abstr.typeName(a) + "'");
    a = Sk.builtin.asnum$nofloat(a);
    this.biginteger = new Sk.builtin.biginteger(a);
    return this;
  };
  Sk.abstr.setUpInheritance("long", Sk.builtin.lng, Sk.builtin.numtype);
  Sk.builtin.lng.prototype.tp$index = function () {
    return parseInt(this.str$(10, !0), 10);
  };
  Sk.builtin.lng.prototype.tp$hash = function () {
    return new Sk.builtin.int_(this.tp$index());
  };
  Sk.builtin.lng.prototype.nb$int_ = function () {
    return this.cantBeInt() ? new Sk.builtin.lng(this) : new Sk.builtin.int_(this.toInt$());
  };
  Sk.builtin.lng.prototype.__format__ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__format__", arguments.length, 2, 2);
    if (Sk.builtin.checkString(b)) {
      var c = Sk.ffi.remapToJs(b);
      if ("" !== c) throw new Sk.builtin.NotImplementedError("format spec is not yet implemented");
    } else {
      if (Sk.__future__.exceptions) throw new Sk.builtin.TypeError("format() argument 2 must be str, not " + Sk.abstr.typeName(b));
      throw new Sk.builtin.TypeError("format expects arg 2 to be string or unicode, not " + Sk.abstr.typeName(b));
    }
    return new Sk.builtin.str(a);
  };
  Sk.builtin.lng.prototype.round$ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__round__", arguments.length, 1, 2);
    if (void 0 !== b && !Sk.misceval.isIndex(b)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object cannot be interpreted as an index");
    var c = Sk.builtin.asnum$(a);
    var d = void 0 === b ? 0 : Sk.misceval.asIndex(b);
    if (Sk.__future__.bankers_rounding) {
      c *= Math.pow(10, d);
      var e = Math.round(c);
      d = (0.5 === (0 < c ? c : -c) % 1 ? (0 === e % 2 ? e : e - 1) : e) / Math.pow(10, d);
    } else (d = Math.pow(10, d)), (d = Math.round(c * d) / d);
    return new Sk.builtin.lng(d);
  };
  Sk.builtin.lng.prototype.__index__ = new Sk.builtin.func(function (a) {
    return a.nb$int_(a);
  });
  Sk.builtin.lng.prototype.nb$lng_ = function () {
    return this;
  };
  Sk.builtin.lng.prototype.nb$float_ = function () {
    return new Sk.builtin.float_(Sk.ffi.remapToJs(this));
  };
  Sk.builtin.lng.MAX_INT$ = new Sk.builtin.lng(Sk.builtin.int_.threshold$);
  Sk.builtin.lng.MIN_INT$ = new Sk.builtin.lng(-Sk.builtin.int_.threshold$);
  Sk.builtin.lng.prototype.cantBeInt = function () {
    return 0 < this.longCompare(Sk.builtin.lng.MAX_INT$) || 0 > this.longCompare(Sk.builtin.lng.MIN_INT$);
  };
  Sk.builtin.lng.fromInt$ = function (a) {
    return new Sk.builtin.lng(a);
  };
  Sk.longFromStr = function (a, b) {
    a = Sk.str2number(
      a,
      b,
      function (a, b) {
        return 10 === b ? new Sk.builtin.biginteger(a) : new Sk.builtin.biginteger(a, b);
      },
      function (a) {
        return a.negate();
      },
      "long"
    );
    return new Sk.builtin.lng(a);
  };
  Sk.exportSymbol("Sk.longFromStr", Sk.longFromStr);
  Sk.builtin.lng.prototype.toInt$ = function () {
    return this.biginteger.intValue();
  };
  Sk.builtin.lng.prototype.clone = function () {
    return new Sk.builtin.lng(this);
  };
  Sk.builtin.lng.prototype.conjugate = new Sk.builtin.func(function (a) {
    return a.clone();
  });
  Sk.builtin.lng.prototype.nb$add = function (a) {
    if (a instanceof Sk.builtin.float_) {
      var b = new Sk.builtin.float_(this.str$(10, !0));
      return b.nb$add(a);
    }
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng ? new Sk.builtin.lng(this.biginteger.add(a.biginteger)) : a instanceof Sk.builtin.biginteger ? new Sk.builtin.lng(this.biginteger.add(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$reflected_add = function (a) {
    return Sk.builtin.lng.prototype.nb$add.call(this, a);
  };
  Sk.builtin.lng.prototype.nb$inplace_add = Sk.builtin.lng.prototype.nb$add;
  Sk.builtin.lng.prototype.nb$subtract = function (a) {
    if (a instanceof Sk.builtin.float_) {
      var b = new Sk.builtin.float_(this.str$(10, !0));
      return b.nb$subtract(a);
    }
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng ? new Sk.builtin.lng(this.biginteger.subtract(a.biginteger)) : a instanceof Sk.builtin.biginteger ? new Sk.builtin.lng(this.biginteger.subtract(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$reflected_subtract = function (a) {
    var b = this.nb$negative();
    return Sk.builtin.lng.prototype.nb$add.call(b, a);
  };
  Sk.builtin.lng.prototype.nb$inplace_subtract = Sk.builtin.lng.prototype.nb$subtract;
  Sk.builtin.lng.prototype.nb$multiply = function (a) {
    if (a instanceof Sk.builtin.float_) {
      var b = new Sk.builtin.float_(this.str$(10, !0));
      return b.nb$multiply(a);
    }
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng ? new Sk.builtin.lng(this.biginteger.multiply(a.biginteger)) : a instanceof Sk.builtin.biginteger ? new Sk.builtin.lng(this.biginteger.multiply(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$reflected_multiply = function (a) {
    return Sk.builtin.lng.prototype.nb$multiply.call(this, a);
  };
  Sk.builtin.lng.prototype.nb$inplace_multiply = Sk.builtin.lng.prototype.nb$multiply;
  Sk.builtin.lng.prototype.nb$divide = function (a) {
    if (a instanceof Sk.builtin.float_) {
      var b = new Sk.builtin.float_(this.str$(10, !0));
      return b.nb$divide(a);
    }
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    if (a instanceof Sk.builtin.lng) {
      b = this.nb$isnegative();
      var c = a.nb$isnegative();
      if ((b && !c) || (c && !b)) {
        a = this.biginteger.divideAndRemainder(a.biginteger);
        if (0 === a[1].trueCompare(Sk.builtin.biginteger.ZERO)) return new Sk.builtin.lng(a[0]);
        a = a[0].subtract(Sk.builtin.biginteger.ONE);
        return new Sk.builtin.lng(a);
      }
      return new Sk.builtin.lng(this.biginteger.divide(a.biginteger));
    }
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$reflected_divide = function (a) {
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng ? a.nb$divide(this) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$floor_divide = function (a) {
    if (a instanceof Sk.builtin.float_) {
      var b = new Sk.builtin.float_(this.str$(10, !0));
      return b.nb$floor_divide(a);
    }
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng ? a.nb$divide(this) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$divmod = function (a) {
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng ? new Sk.builtin.tuple([this.nb$floor_divide(a), this.nb$remainder(a)]) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$reflected_divmod = function (a) {
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng ? new Sk.builtin.tuple([a.nb$floor_divide(this), a.nb$remainder(this)]) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$inplace_divide = Sk.builtin.lng.prototype.nb$divide;
  Sk.builtin.lng.prototype.nb$floor_divide = Sk.builtin.lng.prototype.nb$divide;
  Sk.builtin.lng.prototype.nb$reflected_floor_divide = Sk.builtin.lng.prototype.nb$reflected_divide;
  Sk.builtin.lng.prototype.nb$inplace_floor_divide = Sk.builtin.lng.prototype.nb$floor_divide;
  Sk.builtin.lng.prototype.nb$remainder = function (a) {
    if (0 === this.biginteger.trueCompare(Sk.builtin.biginteger.ZERO)) return a instanceof Sk.builtin.float_ ? new Sk.builtin.float_(0) : new Sk.builtin.lng(0);
    if (a instanceof Sk.builtin.float_) {
      var b = new Sk.builtin.float_(this.str$(10, !0));
      return b.nb$remainder(a);
    }
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng
      ? ((b = new Sk.builtin.lng(this.biginteger.remainder(a.biginteger))), this.nb$isnegative() ? a.nb$ispositive() && b.nb$nonzero() && (b = b.nb$add(a).nb$remainder(a)) : a.nb$isnegative() && b.nb$nonzero() && (b = b.nb$add(a)), b)
      : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$reflected_remainder = function (a) {
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng ? a.nb$remainder(this) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$inplace_remainder = Sk.builtin.lng.prototype.nb$remainder;
  Sk.builtin.lng.prototype.nb$divmod = function (a) {
    a === Sk.builtin.bool.true$ && (a = new Sk.builtin.lng(1));
    a === Sk.builtin.bool.false$ && (a = new Sk.builtin.lng(0));
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    if (a instanceof Sk.builtin.lng) return new Sk.builtin.tuple([this.nb$floor_divide(a), this.nb$remainder(a)]);
    if (a instanceof Sk.builtin.float_) {
      var b = new Sk.builtin.float_(this.str$(10, !0));
      return b.nb$divmod(a);
    }
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$power = function (a, b) {
    if (void 0 !== b) return (a = new Sk.builtin.biginteger(Sk.builtin.asnum$(a))), (b = new Sk.builtin.biginteger(Sk.builtin.asnum$(b))), new Sk.builtin.lng(this.biginteger.modPowInt(a, b));
    if (a instanceof Sk.builtin.float_ || (a instanceof Sk.builtin.int_ && 0 > a.v)) return (b = new Sk.builtin.float_(this.str$(10, !0))), b.nb$power(a);
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng
      ? void 0 !== b
        ? ((a = new Sk.builtin.biginteger(Sk.builtin.asnum$(a))), (b = new Sk.builtin.biginteger(Sk.builtin.asnum$(b))), new Sk.builtin.lng(this.biginteger.modPowInt(a, b)))
        : a.nb$isnegative()
        ? ((b = new Sk.builtin.float_(this.str$(10, !0))), b.nb$power(a))
        : new Sk.builtin.lng(this.biginteger.pow(a.biginteger))
      : a instanceof Sk.builtin.biginteger
      ? void 0 !== b
        ? ((b = new Sk.builtin.biginteger(Sk.builtin.asnum$(b))), new Sk.builtin.lng(this.biginteger.modPowInt(a, b)))
        : a.isnegative()
        ? ((b = new Sk.builtin.float_(this.str$(10, !0))), b.nb$power(a))
        : new Sk.builtin.lng(this.biginteger.pow(a))
      : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$reflected_power = function (a, b) {
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng ? a.nb$power(this, b) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$inplace_power = Sk.builtin.lng.prototype.nb$power;
  Sk.builtin.lng.prototype.nb$abs = function () {
    return new Sk.builtin.lng(this.biginteger.bnAbs());
  };
  Sk.builtin.lng.prototype.nb$lshift = function (a) {
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    if (a instanceof Sk.builtin.lng) {
      if (0 > a.biginteger.signum()) throw new Sk.builtin.ValueError("negative shift count");
      return new Sk.builtin.lng(this.biginteger.shiftLeft(a.biginteger));
    }
    if (a instanceof Sk.builtin.biginteger) {
      if (0 > a.signum()) throw new Sk.builtin.ValueError("negative shift count");
      return new Sk.builtin.lng(this.biginteger.shiftLeft(a));
    }
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$reflected_lshift = function (a) {
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng ? a.nb$lshift(this) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$inplace_lshift = Sk.builtin.lng.prototype.nb$lshift;
  Sk.builtin.lng.prototype.nb$rshift = function (a) {
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    if (a instanceof Sk.builtin.lng) {
      if (0 > a.biginteger.signum()) throw new Sk.builtin.ValueError("negative shift count");
      return new Sk.builtin.lng(this.biginteger.shiftRight(a.biginteger));
    }
    if (a instanceof Sk.builtin.biginteger) {
      if (0 > a.signum()) throw new Sk.builtin.ValueError("negative shift count");
      return new Sk.builtin.lng(this.biginteger.shiftRight(a));
    }
    return Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$reflected_rshift = function (a) {
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng ? a.nb$rshift(this) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$inplace_rshift = Sk.builtin.lng.prototype.nb$rshift;
  Sk.builtin.lng.prototype.nb$and = function (a) {
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng ? new Sk.builtin.lng(this.biginteger.and(a.biginteger)) : a instanceof Sk.builtin.biginteger ? new Sk.builtin.lng(this.biginteger.and(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$reflected_and = Sk.builtin.lng.prototype.nb$and;
  Sk.builtin.lng.prototype.nb$inplace_and = Sk.builtin.lng.prototype.nb$and;
  Sk.builtin.lng.prototype.nb$or = function (a) {
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng ? new Sk.builtin.lng(this.biginteger.or(a.biginteger)) : a instanceof Sk.builtin.biginteger ? new Sk.builtin.lng(this.biginteger.or(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$reflected_or = Sk.builtin.lng.prototype.nb$or;
  Sk.builtin.lng.prototype.nb$inplace_or = Sk.builtin.lng.prototype.nb$or;
  Sk.builtin.lng.prototype.nb$xor = function (a) {
    a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
    return a instanceof Sk.builtin.lng ? new Sk.builtin.lng(this.biginteger.xor(a.biginteger)) : a instanceof Sk.builtin.biginteger ? new Sk.builtin.lng(this.biginteger.xor(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.nb$reflected_xor = Sk.builtin.lng.prototype.nb$xor;
  Sk.builtin.lng.prototype.nb$inplace_xor = Sk.builtin.lng.prototype.nb$xor;
  Sk.builtin.lng.prototype.nb$negative = function () {
    return new Sk.builtin.lng(this.biginteger.negate());
  };
  Sk.builtin.lng.prototype.nb$invert = function () {
    return new Sk.builtin.lng(this.biginteger.not());
  };
  Sk.builtin.lng.prototype.nb$positive = function () {
    return this.clone();
  };
  Sk.builtin.lng.prototype.nb$nonzero = function () {
    return 0 !== this.biginteger.trueCompare(Sk.builtin.biginteger.ZERO);
  };
  Sk.builtin.lng.prototype.nb$isnegative = function () {
    return this.biginteger.isnegative();
  };
  Sk.builtin.lng.prototype.nb$ispositive = function () {
    return !this.biginteger.isnegative();
  };
  Sk.builtin.lng.prototype.longCompare = function (a) {
    "number" === typeof a && (a = new Sk.builtin.lng(a));
    if (a instanceof Sk.builtin.int_ || (a instanceof Sk.builtin.float_ && 0 === a.v % 1)) return (a = new Sk.builtin.lng(a.v)), this.longCompare(a);
    if (a instanceof Sk.builtin.float_) {
      var b = new Sk.builtin.float_(this);
      return b.numberCompare(a);
    }
    return a instanceof Sk.builtin.lng ? this.biginteger.subtract(a.biginteger) : a instanceof Sk.builtin.biginteger ? this.biginteger.subtract(a) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.ob$eq = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_
      ? new Sk.builtin.bool(0 == this.longCompare(a))
      : a instanceof Sk.builtin.none
      ? Sk.builtin.bool.false$
      : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.ob$ne = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_
      ? new Sk.builtin.bool(0 != this.longCompare(a))
      : a instanceof Sk.builtin.none
      ? Sk.builtin.bool.true$
      : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.ob$lt = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 > this.longCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.ob$le = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 >= this.longCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.ob$gt = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 < this.longCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.ob$ge = function (a) {
    return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 <= this.longCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$;
  };
  Sk.builtin.lng.prototype.$r = function () {
    return new Sk.builtin.str(this.str$(10, !0) + "L");
  };
  Sk.builtin.lng.prototype.tp$str = function () {
    return new Sk.builtin.str(this.str$(10, !0));
  };
  Sk.builtin.lng.prototype.str$ = function (a, b) {
    void 0 === b && (b = !0);
    b = b ? this.biginteger : this.biginteger.abs();
    return void 0 === a || 10 === a ? b.toString() : b.toString(a);
  };
  Math.hypot =
    Math.hypot ||
    function () {
      for (var a = 0, b = arguments.length, c = 0; c < b; c++) {
        if (Infinity === arguments[c] || -Infinity === arguments[c]) return Infinity;
        a += arguments[c] * arguments[c];
      }
      return Math.sqrt(a);
    };
  Sk.builtin.complex = function (a, b) {
    Sk.builtin.pyCheckArgsLen("complex", arguments.length, 0, 2);
    var c,
      d = !1,
      e = !1;
    if (!(this instanceof Sk.builtin.complex)) return new Sk.builtin.complex(a, b);
    var f = null == a ? Sk.builtin.bool.false$ : a;
    if (f instanceof Sk.builtin.complex && null == b) return a;
    if (null != f && Sk.builtin.checkString(f)) {
      if (null != b) throw new Sk.builtin.TypeError("complex() can't take second arg if first is a string");
      return Sk.builtin.complex.complex_subtype_from_string(f);
    }
    if (null != b && Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("complex() second arg can't be a string");
    var g = Sk.builtin.complex.try_complex_special_method(f);
    if (null != g && g !== Sk.builtin.NotImplemented.NotImplemented$) {
      if (!Sk.builtin.checkComplex(g)) throw new Sk.builtin.TypeError("__complex__ should return a complex object");
      f = g;
    }
    g = Sk.builtin.asnum$(f);
    null != b && (c = Sk.builtin.asnum$(b));
    var h = function (a) {
      if (Sk.builtin.checkNumber(a) || void 0 !== Sk.builtin.type.typeLookup(a.ob$type, Sk.builtin.str.$float_)) return !0;
    };
    if (null == g || (!h(f) && !Sk.builtin.checkComplex(f)) || (null != b && (null == c || (!h(b) && !Sk.builtin.checkComplex(b))))) throw new Sk.builtin.TypeError("complex() argument must be a string or number");
    if (Sk.builtin.complex._complex_check(f)) (c = f.real.v), (f = f.imag.v), (d = !0);
    else {
      g = Sk.builtin.float_.PyFloat_AsDouble(f);
      if (null == g) return null;
      c = g;
      f = 0;
    }
    if (null == b) g = 0;
    else if (Sk.builtin.complex._complex_check(b)) {
      g = b.real.v;
      var k = b.imag.v;
      e = !0;
    } else {
      g = Sk.builtin.float_.PyFloat_AsDouble(b);
      if (null == g) return null;
      k = 0;
    }
    !0 === e && (c -= k);
    !0 === d && (g += f);
    0 === c && (0 > g || Sk.builtin.complex._isNegativeZero(g)) && (c = -0);
    this.real = new Sk.builtin.float_(c);
    this.imag = new Sk.builtin.float_(g);
    return this;
  };
  Sk.abstr.setUpInheritance("complex", Sk.builtin.complex, Sk.builtin.numtype);
  Sk.builtin.complex.prototype.__class__ = Sk.builtin.complex;
  Sk.builtin.complex.prototype.nb$int_ = function () {
    throw new Sk.builtin.TypeError("can't convert complex to int");
  };
  Sk.builtin.complex.prototype.nb$float_ = function () {
    throw new Sk.builtin.TypeError("can't convert complex to float");
  };
  Sk.builtin.complex.prototype.nb$lng = function () {
    throw new Sk.builtin.TypeError("can't convert complex to long");
  };
  Sk.builtin.complex.prototype.__doc__ = new Sk.builtin.str(
    "complex(real[, imag]) -> complex number\n\nCreate a complex number from a real part and an optional imaginary part.\nThis is equivalent to (real + imag*1j) where imag defaults to 0."
  );
  Sk.builtin.complex._isNegativeZero = function (a) {
    return 0 !== a ? !1 : -Infinity === 1 / a;
  };
  Sk.builtin.complex.try_complex_special_method = function (a) {
    if (null == a) return null;
    var b = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$complex);
    return null != b ? (a = Sk.misceval.callsimArray(b, [a])) : null;
  };
  Sk.builtin.complex.check_number_or_complex = function (a) {
    if (!Sk.builtin.checkNumber(a) && "complex" !== a.tp$name) throw new Sk.builtin.TypeError("unsupported operand type(s) for +: 'complex' and '" + Sk.abstr.typeName(a) + "'");
    Sk.builtin.checkNumber(a) && (a = new Sk.builtin.complex(a));
    return a;
  };
  Sk.builtin.complex.complex_subtype_from_string = function (a) {
    var b = 0,
      c = 0,
      d = !1;
    if (Sk.builtin.checkString(a)) a = Sk.ffi.remapToJs(a);
    else if ("string" !== typeof a) throw new TypeError("provided unsupported string-alike argument");
    if (-1 !== a.indexOf("\x00") || 0 === a.length || "" === a) throw new Sk.builtin.ValueError("complex() arg is a malformed string");
    var e = 0;
    a = a.replace(/inf|infinity/gi, "Infinity");
    for (a = a.replace(/nan/gi, "NaN"); " " === a[e]; ) e++;
    if ("(" === a[e]) for (d = !0, e++; " " === a[e]; ) e++;
    var f = /^(?:[+-]?(?:(?:(?:\d*\.\d+)|(?:\d+\.?))(?:[eE][+-]?\d+)?|NaN|Infinity))/;
    var g = a.substr(e);
    var h = g.match(f);
    if (null !== h)
      if (((e += h[0].length), "j" === a[e] || "J" === a[e])) (c = parseFloat(h[0])), e++;
      else if ("+" === a[e] || "-" === a[e]) {
        b = parseFloat(h[0]);
        h = a.substr(e).match(f);
        null !== h ? ((c = parseFloat(h[0])), (e += h[0].length)) : ((c = "+" === a[e] ? 1 : -1), e++);
        if ("j" !== a[e] && "J" !== a[e]) throw new Sk.builtin.ValueError("complex() arg is malformed string");
        e++;
      } else b = parseFloat(h[0]);
    else (h = h = g.match(/^([+-]?[jJ])/)), null !== h && ((c = 1 === h[0].length ? 1 : "+" === h[0][0] ? 1 : -1), (e += h[0].length));
    for (; " " === a[e]; ) e++;
    if (d) {
      if (")" !== a[e]) throw new Sk.builtin.ValueError("complex() arg is malformed string");
      for (e++; " " === a[e]; ) e++;
    }
    if (a.length !== e) throw new Sk.builtin.ValueError("complex() arg is malformed string");
    return new Sk.builtin.complex(new Sk.builtin.float_(b), new Sk.builtin.float_(c));
  };
  Sk.builtin.complex.prototype.tp$hash = function () {
    return new Sk.builtin.int_(1000003 * this.tp$getattr(Sk.builtin.str.$imag).v + this.tp$getattr(Sk.builtin.str.$real).v);
  };
  Sk.builtin.complex.prototype.nb$add = function (a) {
    a = Sk.builtin.complex.check_number_or_complex(a);
    var b = this.tp$getattr(Sk.builtin.str.$real).v + a.tp$getattr(Sk.builtin.str.$real).v;
    a = this.tp$getattr(Sk.builtin.str.$imag).v + a.tp$getattr(Sk.builtin.str.$imag).v;
    return new Sk.builtin.complex(new Sk.builtin.float_(b), new Sk.builtin.float_(a));
  };
  Sk.builtin.complex._c_diff = function (a, b) {
    var c = a.real.nb$subtract.call(a.real, b.real);
    a = a.imag.nb$subtract.call(a.imag, b.imag);
    return new Sk.builtin.complex(c, a);
  };
  Sk.builtin.complex.prototype.nb$subtract = function (a) {
    var b = Sk.builtin.complex.check_number_or_complex(this);
    a = Sk.builtin.complex.check_number_or_complex(a);
    return Sk.builtin.complex._c_diff(b, a);
  };
  Sk.builtin.complex.prototype.nb$multiply = function (a) {
    var b = Sk.builtin.complex.check_number_or_complex(a);
    a = this.real.v * b.real.v - this.imag.v * b.imag.v;
    b = this.real.v * b.imag.v + this.imag.v * b.real.v;
    return new Sk.builtin.complex(new Sk.builtin.float_(a), new Sk.builtin.float_(b));
  };
  Sk.builtin.complex.prototype.nb$divide = function (a) {
    a = Sk.builtin.complex.check_number_or_complex(a);
    var b = a.real.v;
    var c = a.imag.v;
    a = this.real.v;
    var d = this.imag.v;
    var e = Math.abs(b);
    var f = Math.abs(c);
    if (e >= f) {
      if (0 === e) throw new Sk.builtin.ZeroDivisionError("complex division by zero");
      e = c / b;
      f = b + c * e;
      b = (a + d * e) / f;
      a = (d - a * e) / f;
    } else f >= e ? ((e = b / c), (f = b * e + c), Sk.asserts.assert(0 !== c), (b = (a * e + d) / f), (a = (d * e - a) / f)) : (a = b = NaN);
    return new Sk.builtin.complex(new Sk.builtin.float_(b), new Sk.builtin.float_(a));
  };
  Sk.builtin.complex.prototype.nb$floor_divide = function (a) {
    throw new Sk.builtin.TypeError("can't take floor of complex number.");
  };
  Sk.builtin.complex.prototype.nb$remainder = function (a) {
    throw new Sk.builtin.TypeError("can't mod complex numbers.");
  };
  Sk.builtin.complex.prototype.nb$power = function (a, b) {
    if (null != b && !Sk.builtin.checkNone(b)) throw new Sk.builtin.ValueError("complex modulo");
    b = Sk.builtin.complex.check_number_or_complex(a);
    a = b.real.v | 0;
    return 0 === b.imag.v && b.real.v === a ? Sk.builtin.complex.c_powi(this, a) : Sk.builtin.complex.c_pow(this, b);
  };
  Sk.builtin.complex.c_pow = function (a, b) {
    var c = b.real.v;
    b = b.imag.v;
    var d = a.real.v;
    var e = a.imag.v;
    if (0 === c && 0 === b) (b = 1), (a = 0);
    else if (0 === d && 0 === e) {
      if (0 !== b || 0 > c) throw new Sk.builtin.ZeroDivisionError("complex division by zero");
      a = b = 0;
    } else {
      var f = Math.hypot(d, e);
      a = Math.pow(f, c);
      d = Math.atan2(e, d);
      c *= d;
      0 !== b && ((a /= Math.exp(d * b)), (c += b * Math.log(f)));
      b = a * Math.cos(c);
      a *= Math.sin(c);
    }
    return new Sk.builtin.complex(new Sk.builtin.float_(b), new Sk.builtin.float_(a));
  };
  Sk.builtin.complex.c_powi = function (a, b) {
    return 100 < b || -100 > b
      ? ((b = new Sk.builtin.complex(new Sk.builtin.float_(b), new Sk.builtin.float_(0))), Sk.builtin.complex.c_pow(a, b))
      : 0 < b
      ? Sk.builtin.complex.c_powu(a, b)
      : new Sk.builtin.complex(new Sk.builtin.float_(1), new Sk.builtin.float_(0)).nb$divide(Sk.builtin.complex.c_powu(a, -b));
  };
  Sk.builtin.complex.c_powu = function (a, b) {
    var c,
      d = 1;
    for (c = new Sk.builtin.complex(new Sk.builtin.float_(1), new Sk.builtin.float_(0)); 0 < d && b >= d; ) b & d && (c = c.nb$multiply(a)), (d <<= 1), (a = a.nb$multiply(a));
    return c;
  };
  Sk.builtin.complex.prototype.nb$inplace_add = Sk.builtin.complex.prototype.nb$add;
  Sk.builtin.complex.prototype.nb$inplace_subtract = Sk.builtin.complex.prototype.nb$subtract;
  Sk.builtin.complex.prototype.nb$inplace_multiply = Sk.builtin.complex.prototype.nb$multiply;
  Sk.builtin.complex.prototype.nb$inplace_divide = Sk.builtin.complex.prototype.nb$divide;
  Sk.builtin.complex.prototype.nb$inplace_remainder = Sk.builtin.complex.prototype.nb$remainder;
  Sk.builtin.complex.prototype.nb$inplace_floor_divide = Sk.builtin.complex.prototype.nb$floor_divide;
  Sk.builtin.complex.prototype.nb$inplace_power = Sk.builtin.complex.prototype.nb$power;
  Sk.builtin.complex.prototype.nb$negative = function () {
    var a = this.real.v;
    var b = -this.imag.v;
    return new Sk.builtin.complex(new Sk.builtin.float_(-a), new Sk.builtin.float_(b));
  };
  Sk.builtin.complex.prototype.nb$positive = function () {
    return Sk.builtin.complex.check_number_or_complex(this);
  };
  Sk.builtin.complex._complex_check = function (a) {
    return void 0 === a ? !1 : a instanceof Sk.builtin.complex || (a.tp$name && "complex" === a.tp$name) || Sk.builtin.issubclass(new Sk.builtin.type(a), Sk.builtin.complex) ? !0 : !1;
  };
  Sk.builtin.complex.prototype.tp$richcompare = function (a, b) {
    if ("Eq" !== b && "NotEq" !== b) {
      if (Sk.builtin.checkNumber(a) || Sk.builtin.complex._complex_check(a)) throw new Sk.builtin.TypeError("no ordering relation is defined for complex numbers");
      return Sk.builtin.NotImplemented.NotImplemented$;
    }
    var c = Sk.builtin.complex.check_number_or_complex(this);
    var d = c.tp$getattr(Sk.builtin.str.$real).v;
    c = c.tp$getattr(Sk.builtin.str.$imag).v;
    if (Sk.builtin.checkInt(a)) {
      if (0 === c) return (d = Sk.misceval.richCompareBool(new Sk.builtin.float_(d), a, b)), (b = new Sk.builtin.bool(d));
      d = !1;
    } else if (Sk.builtin.checkFloat(a)) d = d === Sk.builtin.float_.PyFloat_AsDouble(a) && 0 === c;
    else if (Sk.builtin.complex._complex_check(a)) {
      var e = a.tp$getattr(Sk.builtin.str.$real).v;
      a = a.tp$getattr(Sk.builtin.str.$imag).v;
      d = d === e && c === a;
    } else return Sk.builtin.NotImplemented.NotImplemented$;
    "NotEq" === b && (d = !d);
    return (b = new Sk.builtin.bool(d));
  };
  Sk.builtin.complex.prototype.__eq__ = function (a, b) {
    return Sk.builtin.complex.prototype.tp$richcompare.call(a, b, "Eq");
  };
  Sk.builtin.complex.prototype.__ne__ = function (a, b) {
    return Sk.builtin.complex.prototype.tp$richcompare.call(a, b, "NotEq");
  };
  Sk.builtin.complex.prototype.__lt__ = function (a, b) {
    throw new Sk.builtin.TypeError("unorderable types: " + Sk.abstr.typeName(a) + " < " + Sk.abstr.typeName(b));
  };
  Sk.builtin.complex.prototype.__le__ = function (a, b) {
    throw new Sk.builtin.TypeError("unorderable types: " + Sk.abstr.typeName(a) + " <= " + Sk.abstr.typeName(b));
  };
  Sk.builtin.complex.prototype.__gt__ = function (a, b) {
    throw new Sk.builtin.TypeError("unorderable types: " + Sk.abstr.typeName(a) + " > " + Sk.abstr.typeName(b));
  };
  Sk.builtin.complex.prototype.__ge__ = function (a, b) {
    throw new Sk.builtin.TypeError("unorderable types: " + Sk.abstr.typeName(a) + " >= " + Sk.abstr.typeName(b));
  };
  Sk.builtin.complex.prototype.__float__ = function (a) {
    throw new Sk.builtin.TypeError("can't convert complex to float");
  };
  Sk.builtin.complex.prototype.__int__ = function (a) {
    throw new Sk.builtin.TypeError("can't convert complex to int");
  };
  Sk.builtin.complex.prototype._internalGenericGetAttr = Sk.builtin.object.prototype.GenericGetAttr;
  Sk.builtin.complex.prototype.tp$getattr = function (a) {
    if (null != a && (Sk.builtin.checkString(a) || "string" === typeof a)) {
      var b = a;
      Sk.builtin.checkString(a) && (b = Sk.ffi.remapToJs(a));
      if ("real" === b || "imag" === b) return this[b];
    }
    return this._internalGenericGetAttr(a);
  };
  Sk.builtin.complex.prototype.tp$setattr = function (a, b) {
    if (null != a && (Sk.builtin.checkString(a) || "string" === typeof a) && ((b = a), Sk.builtin.checkString(a) && (b = Sk.ffi.remapToJs(a)), "real" === b || "imag" === b)) throw new Sk.builtin.AttributeError("readonly attribute");
    throw new Sk.builtin.AttributeError("'complex' object attribute '" + a + "' is readonly");
  };
  Sk.builtin.complex.complex_format = function (a, b, c) {
    if (null == a || !Sk.builtin.complex._complex_check(a)) throw Error("Invalid internal method call: Sk.complex.complex_format() called with invalid value type.");
    var d = "",
      e = "";
    if (0 === a.real.v && 1 == (0 > a.real.v ? -1 : 1)) {
      var f = "";
      b = Sk.builtin.complex.PyOS_double_to_string(a.imag.v, c, b, 0, null);
    } else
      (f = Sk.builtin.complex.PyOS_double_to_string(a.real.v, c, b, 0, null)),
        (b = Sk.builtin.complex.PyOS_double_to_string(a.imag.v, c, b, Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_SIGN, null)),
        0 === a.imag.v && -Infinity === 1 / a.imag.v && b && "-" !== b[0] && (b = "-" + b),
        (d = "("),
        (e = ")");
    return new Sk.builtin.str("" + d + f + b + "j" + e);
  };
  Sk.builtin.complex.prototype.$r = function () {
    return Sk.builtin.complex.complex_format(this, 0, "r");
  };
  Sk.builtin.complex.prototype.tp$str = function () {
    return Sk.builtin.complex.complex_format(this, null, "g");
  };
  Sk.builtin.complex.prototype.int$format = function (a, b) {
    if (null == b) return null;
    if (Sk.builtin.checkString(b)) return (a = Sk.builtin.complex._PyComplex_FormatAdvanced(a, b));
    throw new Sk.builtin.TypeError("__format__ requires str or unicode");
  };
  Sk.builtin.complex.prototype.int$format.co_name = new Sk.builtin.str("__format__");
  Sk.builtin.complex.prototype.__format__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$format);
  Sk.builtin.complex._PyComplex_FormatAdvanced = function (a, b) {
    throw new Sk.builtin.NotImplementedError("__format__ is not implemented for complex type.");
  };
  Sk.builtin.complex._is_finite = function (a) {
    return !isNaN(a) && Infinity !== a && -Infinity !== a;
  };
  Sk.builtin.complex._is_infinity = function (a) {
    return Infinity === a || -Infinity === a;
  };
  Sk.builtin.complex.prototype.int$abs = function (a) {
    var b = a.real.v;
    a = a.imag.v;
    if (!Sk.builtin.complex._is_finite(b) || !Sk.builtin.complex._is_finite(a))
      return Sk.builtin.complex._is_infinity(b) ? ((b = Math.abs(b)), new Sk.builtin.float_(b)) : Sk.builtin.complex._is_infinity(a) ? ((b = Math.abs(a)), new Sk.builtin.float_(b)) : new Sk.builtin.float_(NaN);
    b = Math.hypot(b, a);
    if (!Sk.builtin.complex._is_finite(b)) throw new Sk.builtin.OverflowError("absolute value too large");
    return new Sk.builtin.float_(b);
  };
  Sk.builtin.complex.prototype.int$abs.co_name = new Sk.builtin.str("__abs__");
  Sk.builtin.complex.prototype.__abs__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$abs);
  Sk.builtin.complex.prototype.int$bool = function (a) {
    return new Sk.builtin.bool(a.tp$getattr(Sk.builtin.str.$real).v || a.tp$getattr(Sk.builtin.str.$real).v);
  };
  Sk.builtin.complex.prototype.int$bool.co_name = new Sk.builtin.str("__bool__");
  Sk.builtin.complex.prototype.__bool__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$bool);
  Sk.builtin.complex.prototype.int$truediv = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__truediv__", arguments.length, 1, 1, !0);
    return a.nb$divide.call(a, b);
  };
  Sk.builtin.complex.prototype.int$truediv.co_name = new Sk.builtin.str("__truediv__");
  Sk.builtin.complex.prototype.__truediv__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$truediv);
  Sk.builtin.complex.prototype.int$hash = function (a) {
    Sk.builtin.pyCheckArgsLen("__hash__", arguments.length, 0, 0, !0);
    return a.tp$hash.call(a);
  };
  Sk.builtin.complex.prototype.int$hash.co_name = new Sk.builtin.str("__hash__");
  Sk.builtin.complex.prototype.__hash__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$hash);
  Sk.builtin.complex.prototype.int$add = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__add__", arguments.length, 1, 1, !0);
    return a.nb$add.call(a, b);
  };
  Sk.builtin.complex.prototype.int$add.co_name = new Sk.builtin.str("__add__");
  Sk.builtin.complex.prototype.__add__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$add);
  Sk.builtin.complex.prototype.int$repr = function (a) {
    Sk.builtin.pyCheckArgsLen("__repr__", arguments.length, 0, 0, !0);
    return a.r$.call(a);
  };
  Sk.builtin.complex.prototype.int$repr.co_name = new Sk.builtin.str("__repr__");
  Sk.builtin.complex.prototype.__repr__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$repr);
  Sk.builtin.complex.prototype.int$str = function (a) {
    Sk.builtin.pyCheckArgsLen("__str__", arguments.length, 0, 0, !0);
    return a.tp$str.call(a);
  };
  Sk.builtin.complex.prototype.int$str.co_name = new Sk.builtin.str("__str__");
  Sk.builtin.complex.prototype.__str__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$str);
  Sk.builtin.complex.prototype.int$sub = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__sub__", arguments.length, 1, 1, !0);
    return a.nb$subtract.call(a, b);
  };
  Sk.builtin.complex.prototype.int$sub.co_name = new Sk.builtin.str("__sub__");
  Sk.builtin.complex.prototype.__sub__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$sub);
  Sk.builtin.complex.prototype.int$mul = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__mul__", arguments.length, 1, 1, !0);
    return a.nb$multiply.call(a, b);
  };
  Sk.builtin.complex.prototype.int$mul.co_name = new Sk.builtin.str("__mul__");
  Sk.builtin.complex.prototype.__mul__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$mul);
  Sk.builtin.complex.prototype.int$div = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__div__", arguments.length, 1, 1, !0);
    return a.nb$divide.call(a, b);
  };
  Sk.builtin.complex.prototype.int$div.co_name = new Sk.builtin.str("__div__");
  Sk.builtin.complex.prototype.__div__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$div);
  Sk.builtin.complex.prototype.int$floordiv = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__floordiv__", arguments.length, 1, 1, !0);
    return a.nb$floor_divide.call(a, b);
  };
  Sk.builtin.complex.prototype.int$floordiv.co_name = new Sk.builtin.str("__floordiv__");
  Sk.builtin.complex.prototype.__floordiv__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$floordiv);
  Sk.builtin.complex.prototype.int$mod = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__mod__", arguments.length, 1, 1, !0);
    return a.nb$remainder.call(a, b);
  };
  Sk.builtin.complex.prototype.int$mod.co_name = new Sk.builtin.str("__mod__");
  Sk.builtin.complex.prototype.__mod__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$mod);
  Sk.builtin.complex.prototype.int$pow = function (a, b, c) {
    Sk.builtin.pyCheckArgsLen("__pow__", arguments.length, 1, 2, !0);
    return a.nb$power.call(a, b, c);
  };
  Sk.builtin.complex.prototype.int$pow.co_name = new Sk.builtin.str("__pow__");
  Sk.builtin.complex.prototype.__pow__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$pow);
  Sk.builtin.complex.prototype.int$neg = function (a) {
    Sk.builtin.pyCheckArgsLen("__neg__", arguments.length, 0, 0, !0);
    return a.nb$negative.call(a);
  };
  Sk.builtin.complex.prototype.__neg__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$neg);
  Sk.builtin.complex.prototype.int$pos = function (a) {
    Sk.builtin.pyCheckArgsLen("__pos__", arguments.length, 0, 0, !0);
    return a.nb$positive.call(a);
  };
  Sk.builtin.complex.prototype.int$pos.co_name = new Sk.builtin.str("__pos__");
  Sk.builtin.complex.prototype.__pos__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$pos);
  Sk.builtin.complex.prototype.int$conjugate = function (a) {
    Sk.builtin.pyCheckArgsLen("conjugate", arguments.length, 0, 0, !0);
    return new Sk.builtin.complex(a.real, new Sk.builtin.float_(-a.imag.v));
  };
  Sk.builtin.complex.prototype.int$conjugate.co_name = new Sk.builtin.str("conjugate");
  Sk.builtin.complex.prototype.conjugate = new Sk.builtin.func(Sk.builtin.complex.prototype.int$conjugate);
  Sk.builtin.complex.prototype.int$divmod = function (a, b) {
    Sk.builtin.pyCheckArgsLen("__divmod__", arguments.length, 1, 1, !0);
    var c = Sk.builtin.complex.check_number_or_complex(a);
    var d = Sk.builtin.complex.check_number_or_complex(b);
    var e = c.nb$divide.call(c, d);
    e.real = new Sk.builtin.float_(Math.floor(e.real.v));
    e.imag = new Sk.builtin.float_(0);
    c = c.nb$subtract.call(c, d.nb$multiply.call(d, e));
    return new Sk.builtin.tuple([e, c]);
  };
  Sk.builtin.complex.prototype.int$divmod.co_name = new Sk.builtin.str("__divmod__");
  Sk.builtin.complex.prototype.__divmod__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$divmod);
  Sk.builtin.complex.prototype.int$getnewargs = function (a) {
    Sk.builtin.pyCheckArgsLen("__getnewargs__", arguments.length, 0, 0, !0);
    return new Sk.builtin.tuple([a.real, a.imag]);
  };
  Sk.builtin.complex.prototype.int$getnewargs.co_name = new Sk.builtin.str("__getnewargs__");
  Sk.builtin.complex.prototype.__getnewargs__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$getnewargs);
  Sk.builtin.complex.prototype.int$nonzero = function (a) {
    Sk.builtin.pyCheckArgsLen("__nonzero__", arguments.length, 0, 0, !0);
    return 0 !== a.real.v || 0 !== a.imag.v ? Sk.builtin.bool.true$ : Sk.builtin.bool.false$;
  };
  Sk.builtin.complex.prototype.int$nonzero.co_name = new Sk.builtin.str("__nonzero__");
  Sk.builtin.complex.prototype.__nonzero__ = new Sk.builtin.func(Sk.builtin.complex.prototype.int$nonzero);
  Sk.exportSymbol("Sk.builtin.complex", Sk.builtin.complex);
  Sk.builtin.complex.PyOS_double_to_string = function (a, b, c, d, e) {
    e = !1;
    switch (b) {
      case "e":
      case "f":
      case "g":
        break;
      case "E":
        e = !0;
        b = "e";
        break;
      case "F":
        e = !0;
        b = "f";
        break;
      case "r":
        if (0 !== c) throw Error("Bad internall call");
        c = 17;
        b = "g";
        break;
      default:
        throw Error("Bad internall call");
    }
    if (isNaN(a)) a = "nan";
    else if (Infinity === a) a = "inf";
    else if (-Infinity === a) a = "-inf";
    else {
      d & Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_ADD_DOT_0 && (b = "g");
      var f = "%" + (d & Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_ALT ? "#" : "");
      null != c && (f = f + "." + c);
      f = new Sk.builtin.str(f + b);
      a = f.nb$remainder(new Sk.builtin.float_(a));
      a = a.v;
    }
    d & Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_SIGN && "-" !== a[0] && (a = "+" + a);
    e && (a = a.toUpperCase());
    return a;
  };
  Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_SIGN = 1;
  Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_ADD_DOT_0 = 2;
  Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_ALT = 4;
  Sk.builtin.complex.PyOS_double_to_string.Py_DTST_FINITE = 0;
  Sk.builtin.complex.PyOS_double_to_string.Py_DTST_INFINITE = 1;
  Sk.builtin.complex.PyOS_double_to_string.Py_DTST_NAN = 2;
  Sk.builtin.slice = function (a, b, c) {
    Sk.builtin.pyCheckArgsLen("slice", arguments.length, 1, 3, !1, !1);
    if (void 0 !== c && Sk.misceval.isIndex(c) && 0 === Sk.misceval.asIndex(c)) throw new Sk.builtin.ValueError("slice step cannot be zero");
    if (!(this instanceof Sk.builtin.slice)) return new Sk.builtin.slice(a, b, c);
    void 0 === b && void 0 === c && ((b = a), (a = Sk.builtin.none.none$));
    void 0 === b && (b = Sk.builtin.none.none$);
    void 0 === c && (c = Sk.builtin.none.none$);
    this.start = a;
    this.stop = b;
    this.step = c;
    this.__class__ = Sk.builtin.slice;
    this.$d = new Sk.builtin.dict([Sk.builtin.slice$start, this.start, Sk.builtin.slice$stop, this.stop, Sk.builtin.slice$step, this.step]);
    return this;
  };
  Sk.abstr.setUpInheritance("slice", Sk.builtin.slice, Sk.builtin.object);
  Sk.builtin.slice.prototype.$r = function () {
    var a = Sk.builtin.repr(this.start).v,
      b = Sk.builtin.repr(this.stop).v,
      c = Sk.builtin.repr(this.step).v;
    return new Sk.builtin.str("slice(" + a + ", " + b + ", " + c + ")");
  };
  Sk.builtin.slice.prototype.tp$richcompare = function (a, b) {
    if (!a.__class__ || a.__class__ != Sk.builtin.slice) return "Eq" === b ? !1 : "NotEq" === b ? !0 : !1;
    var c = new Sk.builtin.tuple([this.start, this.stop, this.step]);
    a = new Sk.builtin.tuple([a.start, a.stop, a.step]);
    return c.tp$richcompare(a, b);
  };
  Sk.builtin.slice.prototype.slice_indices_ = function (a) {
    if (Sk.builtin.checkNone(this.start)) var b = null;
    else if (Sk.misceval.isIndex(this.start)) b = Sk.misceval.asIndex(this.start);
    else throw new Sk.builtin.TypeError("slice indices must be integers or None");
    if (Sk.builtin.checkNone(this.stop)) var c = null;
    else if (Sk.misceval.isIndex(this.stop)) c = Sk.misceval.asIndex(this.stop);
    else throw new Sk.builtin.TypeError("slice indices must be integers or None");
    if (Sk.builtin.checkNone(this.step)) var d = null;
    else if (Sk.misceval.isIndex(this.step)) d = Sk.misceval.asIndex(this.step);
    else throw new Sk.builtin.TypeError("slice indices must be integers or None");
    null === d && (d = 1);
    0 < d
      ? (null === b && (b = 0), null === c && (c = a), c > a && (c = a), 0 > b && ((b = a + b), 0 > b && (b = 0)), 0 > c && (c = a + c))
      : (null === b && (b = a - 1), b >= a && (b = a - 1), null === c ? (c = -1) : 0 > c && ((c = a + c), 0 > c && (c = -1)), 0 > b && (b = a + b));
    return [b, c, d];
  };
  Sk.builtin.slice.prototype.indices = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("indices", arguments.length, 2, 2, !1, !1);
    b = Sk.builtin.asnum$(b);
    var c = a.slice_indices_(b);
    return new Sk.builtin.tuple([new Sk.builtin.int_(c[0]), new Sk.builtin.int_(c[1]), new Sk.builtin.int_(c[2])]);
  });
  Sk.builtin.slice.prototype.sssiter$ = function (a, b) {
    var c = Sk.builtin.asnum$(a),
      d = this.slice_indices_("number" === typeof c ? c : a.v.length);
    if (0 < d[2]) for (a = d[0]; a < d[1] && !1 !== b(a, c); a += d[2]);
    else for (a = d[0]; a > d[1] && !1 !== b(a, c); a += d[2]);
  };
  Sk.builtin.slice$start = new Sk.builtin.str("start");
  Sk.builtin.slice$stop = new Sk.builtin.str("stop");
  Sk.builtin.slice$step = new Sk.builtin.str("step");
  Sk.builtin.set = function (a) {
    var b;
    if (!(this instanceof Sk.builtin.set)) return Sk.builtin.pyCheckArgsLen("set", arguments.length, 0, 1), new Sk.builtin.set(a);
    "undefined" === typeof a && (a = []);
    this.set_reset_();
    var c = new Sk.builtin.list(a);
    c = Sk.abstr.iter(c);
    for (b = c.tp$iternext(); void 0 !== b; b = c.tp$iternext()) Sk.builtin.set.prototype.add.func_code(this, b);
    this.__class__ = Sk.builtin.set;
    this.v = this.v;
    return this;
  };
  Sk.abstr.setUpInheritance("set", Sk.builtin.set, Sk.builtin.object);
  Sk.abstr.markUnhashable(Sk.builtin.set);
  Sk.builtin.set.prototype.set_reset_ = function () {
    this.v = new Sk.builtin.dict([]);
  };
  Sk.builtin.set.prototype.$r = function () {
    var a,
      b = [];
    var c = Sk.abstr.iter(this);
    for (a = c.tp$iternext(); void 0 !== a; a = c.tp$iternext()) b.push(Sk.misceval.objectRepr(a).v);
    return Sk.__future__.set_repr ? new Sk.builtin.str("{" + b.join(", ") + "}") : new Sk.builtin.str("set([" + b.join(", ") + "])");
  };
  Sk.builtin.set.prototype.ob$eq = function (a) {
    return this === a ? Sk.builtin.bool.true$ : a instanceof Sk.builtin.set && Sk.builtin.set.prototype.sq$length.call(this) === Sk.builtin.set.prototype.sq$length.call(a) ? this.issubset.func_code(this, a) : Sk.builtin.bool.false$;
  };
  Sk.builtin.set.prototype.ob$ne = function (a) {
    return this === a
      ? Sk.builtin.bool.false$
      : a instanceof Sk.builtin.set && Sk.builtin.set.prototype.sq$length.call(this) === Sk.builtin.set.prototype.sq$length.call(a)
      ? this.issubset.func_code(this, a).v
        ? Sk.builtin.bool.false$
        : Sk.builtin.bool.true$
      : Sk.builtin.bool.true$;
  };
  Sk.builtin.set.prototype.ob$lt = function (a) {
    return this === a || Sk.builtin.set.prototype.sq$length.call(this) >= Sk.builtin.set.prototype.sq$length.call(a) ? Sk.builtin.bool.false$ : this.issubset.func_code(this, a);
  };
  Sk.builtin.set.prototype.ob$le = function (a) {
    return this === a ? Sk.builtin.bool.true$ : Sk.builtin.set.prototype.sq$length.call(this) > Sk.builtin.set.prototype.sq$length.call(a) ? Sk.builtin.bool.false$ : this.issubset.func_code(this, a);
  };
  Sk.builtin.set.prototype.ob$gt = function (a) {
    return this === a || Sk.builtin.set.prototype.sq$length.call(this) <= Sk.builtin.set.prototype.sq$length.call(a) ? Sk.builtin.bool.false$ : this.issuperset.func_code(this, a);
  };
  Sk.builtin.set.prototype.ob$ge = function (a) {
    return this === a ? Sk.builtin.bool.true$ : Sk.builtin.set.prototype.sq$length.call(this) < Sk.builtin.set.prototype.sq$length.call(a) ? Sk.builtin.bool.false$ : this.issuperset.func_code(this, a);
  };
  Sk.builtin.set.prototype.nb$and = function (a) {
    return this.intersection.func_code(this, a);
  };
  Sk.builtin.set.prototype.nb$or = function (a) {
    return this.union.func_code(this, a);
  };
  Sk.builtin.set.prototype.nb$xor = function (a) {
    return this.symmetric_difference.func_code(this, a);
  };
  Sk.builtin.set.prototype.nb$subtract = function (a) {
    return this.difference.func_code(this, a);
  };
  Sk.builtin.set.prototype.__iter__ = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("__iter__", arguments.length, 0, 0, !1, !0);
    return new Sk.builtin.set_iter_(a);
  });
  Sk.builtin.set.prototype.tp$iter = function () {
    return new Sk.builtin.set_iter_(this);
  };
  Sk.builtin.set.prototype.sq$length = function () {
    return this.v.mp$length();
  };
  Sk.builtin.set.prototype.sq$contains = function (a) {
    return this.v.sq$contains(a);
  };
  Sk.builtin.set.prototype.isdisjoint = new Sk.builtin.func(function (a, b) {
    var c;
    Sk.builtin.pyCheckArgsLen("isdisjoint", arguments.length, 2, 2);
    if (!Sk.builtin.checkIterable(b)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object is not iterable");
    var d = Sk.abstr.iter(a);
    for (c = d.tp$iternext(); void 0 !== c; c = d.tp$iternext()) if ((c = Sk.abstr.sequenceContains(b, c))) return Sk.builtin.bool.false$;
    return Sk.builtin.bool.true$;
  });
  Sk.builtin.set.prototype.issubset = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("issubset", arguments.length, 2, 2);
    if (!Sk.builtin.checkIterable(b)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object is not iterable");
    var c = a.sq$length();
    var d = b.sq$length();
    if (c > d) return Sk.builtin.bool.false$;
    c = Sk.abstr.iter(a);
    for (d = c.tp$iternext(); void 0 !== d; d = c.tp$iternext()) if (((d = Sk.abstr.sequenceContains(b, d)), !d)) return Sk.builtin.bool.false$;
    return Sk.builtin.bool.true$;
  });
  Sk.builtin.set.prototype.issuperset = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("issuperset", arguments.length, 2, 2);
    return Sk.builtin.set.prototype.issubset.func_code(b, a);
  });
  Sk.builtin.set.prototype.union = new Sk.builtin.func(function (a) {
    var b;
    Sk.builtin.pyCheckArgsLen("union", arguments.length, 1);
    var c = Sk.builtin.set.prototype.copy.func_code(a);
    var d = [c];
    for (b = 1; b < arguments.length; b++) d.push(arguments[b]);
    Sk.builtin.set.prototype.update.func_code.apply(null, d);
    return c;
  });
  Sk.builtin.set.prototype.intersection = new Sk.builtin.func(function (a) {
    var b;
    Sk.builtin.pyCheckArgsLen("intersection", arguments.length, 1);
    var c = Sk.builtin.set.prototype.copy.func_code(a);
    var d = [c];
    for (b = 1; b < arguments.length; b++) d.push(arguments[b]);
    Sk.builtin.set.prototype.intersection_update.func_code.apply(null, d);
    return c;
  });
  Sk.builtin.set.prototype.difference = new Sk.builtin.func(function (a, b) {
    var c;
    Sk.builtin.pyCheckArgsLen("difference", arguments.length, 2);
    var d = Sk.builtin.set.prototype.copy.func_code(a);
    var e = [d];
    for (c = 1; c < arguments.length; c++) e.push(arguments[c]);
    Sk.builtin.set.prototype.difference_update.func_code.apply(null, e);
    return d;
  });
  Sk.builtin.set.prototype.symmetric_difference = new Sk.builtin.func(function (a, b) {
    var c;
    Sk.builtin.pyCheckArgsLen("symmetric_difference", arguments.length, 2, 2);
    var d = Sk.builtin.set.prototype.union.func_code(a, b);
    var e = Sk.abstr.iter(d);
    for (c = e.tp$iternext(); void 0 !== c; c = e.tp$iternext()) Sk.abstr.sequenceContains(a, c) && Sk.abstr.sequenceContains(b, c) && Sk.builtin.set.prototype.discard.func_code(d, c);
    return d;
  });
  Sk.builtin.set.prototype.copy = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("copy", arguments.length, 1, 1);
    return new Sk.builtin.set(a);
  });
  Sk.builtin.set.prototype.update = new Sk.builtin.func(function (a, b) {
    var c, d;
    Sk.builtin.pyCheckArgsLen("update", arguments.length, 2);
    for (c = 1; c < arguments.length; c++) {
      var e = arguments[c];
      if (!Sk.builtin.checkIterable(e)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(e) + "' object is not iterable");
      e = Sk.abstr.iter(e);
      for (d = e.tp$iternext(); void 0 !== d; d = e.tp$iternext()) Sk.builtin.set.prototype.add.func_code(a, d);
    }
    return Sk.builtin.none.none$;
  });
  Sk.builtin.set.prototype.intersection_update = new Sk.builtin.func(function (a, b) {
    var c, d;
    Sk.builtin.pyCheckArgsLen("intersection_update", arguments.length, 2);
    for (c = 1; c < arguments.length; c++) if (!Sk.builtin.checkIterable(arguments[c])) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(arguments[c]) + "' object is not iterable");
    var e = Sk.abstr.iter(a);
    for (d = e.tp$iternext(); void 0 !== d; d = e.tp$iternext())
      for (c = 1; c < arguments.length; c++)
        if (!Sk.abstr.sequenceContains(arguments[c], d)) {
          Sk.builtin.set.prototype.discard.func_code(a, d);
          break;
        }
    return Sk.builtin.none.none$;
  });
  Sk.builtin.set.prototype.difference_update = new Sk.builtin.func(function (a, b) {
    var c, d;
    Sk.builtin.pyCheckArgsLen("difference_update", arguments.length, 2);
    for (c = 1; c < arguments.length; c++) if (!Sk.builtin.checkIterable(arguments[c])) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(arguments[c]) + "' object is not iterable");
    var e = Sk.abstr.iter(a);
    for (d = e.tp$iternext(); void 0 !== d; d = e.tp$iternext())
      for (c = 1; c < arguments.length; c++)
        if (Sk.abstr.sequenceContains(arguments[c], d)) {
          Sk.builtin.set.prototype.discard.func_code(a, d);
          break;
        }
    return Sk.builtin.none.none$;
  });
  Sk.builtin.set.prototype.symmetric_difference_update = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("symmetric_difference_update", arguments.length, 2, 2);
    var c = Sk.builtin.set.prototype.symmetric_difference.func_code(a, b);
    a.set_reset_();
    Sk.builtin.set.prototype.update.func_code(a, c);
    return Sk.builtin.none.none$;
  });
  Sk.builtin.set.prototype.add = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("add", arguments.length, 2, 2);
    a.v.mp$ass_subscript(b, !0);
    return Sk.builtin.none.none$;
  });
  Sk.builtin.set.prototype.discard = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("discard", arguments.length, 2, 2);
    Sk.builtin.dict.prototype.pop.func_code(a.v, b, Sk.builtin.none.none$);
    return Sk.builtin.none.none$;
  });
  Sk.builtin.set.prototype.pop = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("pop", arguments.length, 1, 1);
    if (0 === a.sq$length()) throw new Sk.builtin.KeyError("pop from an empty set");
    var b = Sk.abstr.iter(a).tp$iternext();
    Sk.builtin.set.prototype.discard.func_code(a, b);
    return b;
  });
  Sk.builtin.set.prototype.remove = new Sk.builtin.func(function (a, b) {
    Sk.builtin.pyCheckArgsLen("remove", arguments.length, 2, 2);
    a.v.mp$del_subscript(b);
    return Sk.builtin.none.none$;
  });
  Sk.exportSymbol("Sk.builtin.set", Sk.builtin.set);
  Sk.builtin.set_iter_ = function (a) {
    var b, c;
    if (!(this instanceof Sk.builtin.set_iter_)) return new Sk.builtin.set_iter_(a);
    this.$obj = a;
    this.tp$iter = this;
    var d = [];
    var e = a.v.buckets;
    for (b in e) if (e.hasOwnProperty(b) && (c = e[b]) && void 0 !== c.$hash && void 0 !== c.items) for (a = 0; a < c.items.length; a++) d.push(c.items[a].lhs);
    this.$index = 0;
    this.$keys = d;
    this.tp$iternext = function () {
      if (!(this.$index >= this.$keys.length)) return this.$keys[this.$index++];
    };
    this.$r = function () {
      return new Sk.builtin.str("setiterator");
    };
    return this;
  };
  Sk.abstr.setUpInheritance("setiterator", Sk.builtin.set_iter_, Sk.builtin.object);
  Sk.builtin.set_iter_.prototype.__class__ = Sk.builtin.set_iter_;
  Sk.builtin.set_iter_.prototype.__iter__ = new Sk.builtin.func(function (a) {
    Sk.builtin.pyCheckArgsLen("__iter__", arguments.length, 0, 0, !0, !1);
    return a;
  });
  Sk.builtin.set_iter_.prototype.next$ = function (a) {
    a = a.tp$iternext();
    if (void 0 === a) throw new Sk.builtin.StopIteration();
    return a;
  };
  var print_f = function (a) {
    Sk.builtin.pyCheckArgsLen("print", arguments.length, 0, Infinity, !0, !1);
    var b = Array.prototype.slice.call(arguments, 1),
      c = new Sk.builtins.dict(a);
    Sk.ffi.remapToJs(c);
    var d = { sep: " ", end: "\n", file: null };
    var e = c.mp$lookup(new Sk.builtin.str("sep"));
    if (void 0 !== e) {
      var f = Sk.builtin.checkNone(e);
      if (Sk.builtin.checkString(e) || f) d.sep = f ? d.sep : Sk.ffi.remapToJs(e);
      else throw new Sk.builtin.TypeError("sep must be None or a string, not " + Sk.abstr.typeName(e));
    }
    e = c.mp$lookup(new Sk.builtin.str("end"));
    if (void 0 !== e)
      if (((f = Sk.builtin.checkNone(e)), Sk.builtin.checkString(e) || f)) d.end = f ? d.end : Sk.ffi.remapToJs(e);
      else throw new Sk.builtin.TypeError("end must be None or a string, not " + Sk.abstr.typeName(e));
    e = c.mp$lookup(new Sk.builtin.str("file"));
    if (void 0 !== e)
      if ((f = Sk.builtin.checkNone(e)) || void 0 !== e.tp$getattr("write")) d.file = f ? d.file : e;
      else throw new Sk.builtin.AttributeError("'" + Sk.abstr.typeName(e) + "' object has no attribute 'write'");
    var g = "";
    for (c = 0; c < b.length; c++) (g += new Sk.builtin.str(b[c]).v), (g += d.sep);
    0 < b.length && 0 < d.sep.length && (g = g.substring(0, g.length - d.sep.length));
    g += d.end;
    if (null !== d.file) Sk.misceval.callsimArray(d.file.write, [d.file, new Sk.builtin.str(g)]);
    else
      return Sk.misceval.chain(Sk.importModule("sys", !1, !0), function (a) {
        return Sk.misceval.apply(a.$d.stdout.write, void 0, void 0, void 0, [a.$d.stdout, new Sk.builtin.str(g)]);
      });
  };
  print_f.co_kwargs = !0;
  Sk.builtin.print = new Sk.builtin.func(print_f);
  Sk.builtin.print.__doc__ = new Sk.builtin.str(
    "print(value, ..., sep=' ', end='\\n', file=sys.stdout, flush=False)\n\nPrints the values to a stream, or to sys.stdout by default.\nOptional keyword arguments:\nfile:  a file-like object (stream); defaults to the current sys.stdout.\nsep:   string inserted between values, default a space.\nend:   string appended after the last value, default a newline.\nflush: whether to forcibly flush the stream."
  );
  Sk.builtin.module = function () {};
  Sk.exportSymbol("Sk.builtin.module", Sk.builtin.module);
  Sk.builtin.module.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj("module", Sk.builtin.module);
  Sk.builtin.module.prototype.tp$getattr = Sk.builtin.object.prototype.GenericGetAttr;
  Sk.builtin.module.prototype.tp$setattr = Sk.builtin.object.prototype.GenericSetAttr;
  Sk.builtin.module.prototype.tp$name = "module";
  Sk.builtin.structseq_types = {};
  Sk.builtin.make_structseq = function (a, b, c, d) {
    var e = a + "." + b,
      f = [];
    a = [];
    for (var g in c) f.push(g), a.push(c[g]);
    c = function (a) {
      Sk.builtin.pyCheckArgsLen(e, arguments.length, 1, 1);
      var b;
      if (!(this instanceof Sk.builtin.structseq_types[e])) {
        var c = Object.create(Sk.builtin.structseq_types[e].prototype);
        c.constructor.apply(c, arguments);
        return c;
      }
      if (Array.isArray(a)) var d = a;
      else {
        d = [];
        c = Sk.abstr.iter(a);
        for (b = c.tp$iternext(); void 0 !== b; b = c.tp$iternext()) d.push(b);
        if (d.length != f.length) throw new Sk.builtin.TypeError(e + "() takes a " + f.length + "-sequence (" + d.length + "-sequence given)");
      }
      Sk.builtin.tuple.call(this, d);
      this.__class__ = Sk.builtin.structseq_types[e];
    };
    Sk.builtin.structseq_types[e] = c;
    Sk.abstr.inherits(c, Sk.builtin.tuple);
    d && (c.prototype.__doc__ = d);
    c.prototype.tp$name = e;
    c.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj(e, Sk.builtin.structseq_types[e]);
    c.prototype.ob$type.$d = new Sk.builtin.dict([]);
    c.prototype.ob$type.$d.mp$ass_subscript(Sk.builtin.type.basesStr_, new Sk.builtin.tuple([Sk.builtin.tuple]));
    c.prototype.__getitem__ = new Sk.builtin.func(function (a, b) {
      return Sk.builtin.tuple.prototype.mp$subscript.call(a, b);
    });
    c.prototype.__reduce__ = new Sk.builtin.func(function (a) {
      throw new Sk.builtin.Exception("__reduce__ is not implemented");
    });
    c.prototype.$r = function () {
      var a;
      if (0 === this.v.length) return new Sk.builtin.str(e + "()");
      var b = [];
      for (a = 0; a < this.v.length; ++a) b[a] = f[a] + "=" + Sk.misceval.objectRepr(this.v[a]).v;
      a = b.join(", ");
      1 === this.v.length && (a += ",");
      return new Sk.builtin.str(e + "(" + a + ")");
    };
    c.prototype.tp$setattr = function (a, b) {
      throw new Sk.builtin.AttributeError("readonly property");
    };
    c.prototype.tp$getattr = function (a) {
      var b = a.$jsstr();
      b = f.indexOf(b);
      return 0 <= b ? this.v[b] : Sk.builtin.object.prototype.GenericGetAttr(a);
    };
    return c;
  };
  Sk.exportSymbol("Sk.builtin.make_structseq", Sk.builtin.make_structseq);
  Sk.builtin.generator = function (a, b, c, d, e) {
    var f;
    if (a) {
      if (!(this instanceof Sk.builtin.generator)) return new Sk.builtin.generator(a, b, c, d, e);
      this.func_code = a;
      this.func_globals = b || null;
      this.gi$running = !1;
      this.gi$resumeat = 0;
      this.gi$sentvalue = void 0;
      this.gi$locals = {};
      this.gi$cells = {};
      if (0 < c.length) for (b = 0; b < a.co_varnames.length; ++b) this.gi$locals[a.co_varnames[b]] = c[b];
      if (void 0 !== e) for (f in e) d[f] = e[f];
      this.func_closure = d;
      return this;
    }
  };
  Sk.exportSymbol("Sk.builtin.generator", Sk.builtin.generator);
  Sk.abstr.setUpInheritance("generator", Sk.builtin.generator, Sk.builtin.object);
  Sk.builtin.generator.prototype.tp$iter = function () {
    return this;
  };
  Sk.builtin.generator.prototype.tp$iternext = function (a, b) {
    var c = this;
    this.gi$running = !0;
    void 0 === b && (b = null);
    this.gi$sentvalue = b;
    b = [this];
    this.func_closure && b.push(this.func_closure);
    return (function f(b) {
      if (b instanceof Sk.misceval.Suspension) {
        if (a) return new Sk.misceval.Suspension(f, b);
        b = Sk.misceval.retryOptionalSuspensionOrThrow(b);
      }
      c.gi$running = !1;
      Sk.asserts.assert(void 0 !== b);
      if (b !== Sk.builtin.none.none$) return (c.gi$resumeat = b[0]), (b = b[1]);
    })(this.func_code.apply(this.func_globals, b));
  };
  Sk.builtin.generator.prototype.next$ = function (a) {
    return a.tp$iternext(!0);
  };
  Sk.builtin.generator.prototype.$r = function () {
    return new Sk.builtin.str("<generator object " + this.func_code.co_name.v + ">");
  };
  Sk.builtin.generator.prototype.send = new Sk.builtin.func(function (a, b) {
    return a.tp$iternext(!0, b);
  });
  Sk.builtin.makeGenerator = function (a, b) {
    var c,
      d = new Sk.builtin.generator(null, null, null);
    d.tp$iternext = a;
    for (c in b) b.hasOwnProperty(c) && (d[c] = b[c]);
    return d;
  };
  Sk.exportSymbol("Sk.builtin.makeGenerator", Sk.builtin.makeGenerator);
  Sk.builtin.file = function (a, b, c) {
    var d;
    if (!(this instanceof Sk.builtin.file)) return new Sk.builtin.file(a, b, c);
    this.mode = b;
    this.name = Sk.ffi.remapToJs(a);
    this.closed = !1;
    if ("/dev/stdout" === this.name) (this.data$ = Sk.builtin.none.none$), (this.fileno = 1);
    else if ("/dev/stdin" === this.name) this.fileno = 0;
    else if ("/dev/stderr" === this.name) this.fileno = 2;
    else {
      if (Sk.inBrowser)
        if (((this.fileno = 10), (c = document.getElementById(a.v)), null == c))
          if ("w" == b.v || "a" == b.v) this.data$ = "";
          else throw new Sk.builtin.IOError("[Errno 2] No such file or directory: '" + a.v + "'");
        else "textarea" == c.nodeName.toLowerCase() ? (this.data$ = c.value) : (this.data$ = c.textContent);
      else (this.fileno = 11), (this.data$ = Sk.read(a.v));
      this.lineList = this.data$.split("\n");
      this.lineList = this.lineList.slice(0, -1);
      for (d in this.lineList) this.lineList[d] += "\n";
      this.currentLine = 0;
    }
    this.pos$ = 0;
    this.__class__ = Sk.builtin.file;
    Sk.fileopen && 10 <= this.fileno && Sk.fileopen(this);
    return this;
  };
  Sk.abstr.setUpInheritance("file", Sk.builtin.file, Sk.builtin.object);
  Sk.builtin.file.prototype.$r = function () {
    return new Sk.builtin.str("<" + (this.closed ? "closed" : "open") + "file '" + this.name + "', mode '" + Sk.ffi.remapToJs(this.mode) + "'>");
  };
  Sk.builtin.file.prototype.__enter__ = new Sk.builtin.func(function (a) {
    return a;
  });
  Sk.builtin.file.prototype.__exit__ = new Sk.builtin.func(function (a) {
    return Sk.misceval.callsimArray(Sk.builtin.file.prototype.close, [a]);
  });
  Sk.builtin.file.prototype.tp$iter = function () {
    var a = {
      tp$iter: function () {
        return a;
      },
      $obj: this,
      $index: this.currentLine,
      $lines: this.lineList,
      tp$iternext: function () {
        if (!(a.$index >= a.$lines.length)) return new Sk.builtin.str(a.$lines[a.$index++]);
      },
    };
    return a;
  };
  Sk.builtin.file.prototype.close = new Sk.builtin.func(function (a) {
    a.closed = !0;
    return Sk.builtin.none.none$;
  });
  Sk.builtin.file.prototype.flush = new Sk.builtin.func(function (a) {});
  Sk.builtin.file.prototype.fileno = new Sk.builtin.func(function (a) {
    return this.fileno;
  });
  Sk.builtin.file.prototype.isatty = new Sk.builtin.func(function (a) {
    return !1;
  });
  Sk.builtin.file.prototype.read = new Sk.builtin.func(function (a, b) {
    var c = a.data$.length;
    if (a.closed) throw new Sk.builtin.ValueError("I/O operation on closed file");
    var d = void 0 === b ? c : Sk.ffi.remapToJs(b);
    d = new Sk.builtin.str(a.data$.substr(a.pos$, d));
    a.pos$ = void 0 === b ? c : a.pos$ + Sk.ffi.remapToJs(b);
    a.pos$ >= c && (a.pos$ = c);
    return d;
  });
  Sk.builtin.file.$readline = function (a, b, c) {
    if (0 === a.fileno) {
      a = Sk.ffi.remapToJs(c);
      a = Sk.inputfun(a ? a : "");
      if (a instanceof Promise) {
        var d = new Sk.misceval.Suspension();
        d.resume = function () {
          if (d.data.error) throw d.data.error;
          return new Sk.builtin.str(d.data.result);
        };
        d.data = { type: "Sk.promise", promise: a };
        return d;
      }
      return new Sk.builtin.str(a);
    }
    b = "";
    a.currentLine < a.lineList.length && ((b = a.lineList[a.currentLine]), a.currentLine++);
    return new Sk.builtin.str(b);
  };
  Sk.builtin.file.prototype.readline = new Sk.builtin.func(function (a, b) {
    return Sk.builtin.file.$readline(a, b, void 0);
  });
  Sk.builtin.file.prototype.readlines = new Sk.builtin.func(function (a, b) {
    if (0 === a.fileno) return new Sk.builtin.NotImplementedError("readlines ins't implemented because the web doesn't support Ctrl+D");
    var c = [];
    for (b = a.currentLine; b < a.lineList.length; b++) c.push(new Sk.builtin.str(a.lineList[b]));
    return new Sk.builtin.list(c);
  });
  Sk.builtin.file.prototype.seek = new Sk.builtin.func(function (a, b, c) {
    b = Sk.ffi.remapToJs(b);
    void 0 === c && (c = 0);
    0 === c ? (a.pos$ = b) : 1 == c ? (a.pos$ = a.data$.length + b) : 2 == c && (a.pos$ = a.data$.length + b);
    return Sk.builtin.none.none$;
  });
  Sk.builtin.file.prototype.tell = new Sk.builtin.func(function (a) {
    return Sk.ffi.remapToPy(a.pos$);
  });
  Sk.builtin.file.prototype.truncate = new Sk.builtin.func(function (a, b) {
    Sk.asserts.fail();
  });
  Sk.builtin.file.prototype.write = new Sk.builtin.func(function (a, b) {
    var c = Sk.ffi.remapToJs(a.mode);
    if ("w" === c || "wb" === c || "a" === c || "ab" === c)
      if (Sk.filewrite) {
        if (a.closed) throw new Sk.builtin.ValueError("I/O operation on closed file");
        1 === a.fileno ? Sk.output(Sk.ffi.remapToJs(b)) : Sk.filewrite(a, b);
      } else 1 === a.fileno ? Sk.output(Sk.ffi.remapToJs(b)) : Sk.asserts.fail();
    else throw new Sk.builtin.IOError("File not open for writing");
  });
  Sk.exportSymbol("Sk.builtin.file", Sk.builtin.file);
  Sk.ffi = Sk.ffi || {};
  Sk.ffi.remapToPy = function (a) {
    var b;
    if (null === a || "undefined" === typeof a) return Sk.builtin.none.none$;
    if (a.ob$type) return a;
    if (a instanceof Sk.misceval.Suspension) return a;
    if ("[object Array]" === Object.prototype.toString.call(a)) {
      var c = [];
      for (b = 0; b < a.length; ++b) c.push(Sk.ffi.remapToPy(a[b]));
      return new Sk.builtin.list(c);
    }
    if ("object" === typeof a) {
      c = [];
      for (b in a) c.push(Sk.ffi.remapToPy(b)), c.push(Sk.ffi.remapToPy(a[b]));
      return new Sk.builtin.dict(c);
    }
    if ("string" === typeof a) return new Sk.builtin.str(a);
    if ("number" === typeof a) return Sk.builtin.assk$(a);
    if ("boolean" === typeof a) return new Sk.builtin.bool(a);
    if ("undefined" === typeof a) return Sk.builtin.none.none$;
    if ("function" === typeof a) return new Sk.builtin.func(a);
    Sk.asserts.fail("unhandled remap type " + typeof a);
  };
  Sk.exportSymbol("Sk.ffi.remapToPy", Sk.ffi.remapToPy);
  Sk.ffi.remapToJs = function (a) {
    var b;
    if (a instanceof Sk.builtin.dict) {
      var c = {};
      var d = a.tp$iter();
      for (b = d.tp$iternext(); void 0 !== b; b = d.tp$iternext()) {
        var e = a.mp$subscript(b);
        void 0 === e && (e = null);
        b = Sk.ffi.remapToJs(b);
        c[b] = Sk.ffi.remapToJs(e);
      }
      return c;
    }
    if (a instanceof Sk.builtin.list || a instanceof Sk.builtin.tuple) {
      c = [];
      for (e = 0; e < a.v.length; ++e) c.push(Sk.ffi.remapToJs(a.v[e]));
      return c;
    }
    if (a instanceof Sk.builtin.bool) return a.v ? !0 : !1;
    if (a instanceof Sk.builtin.int_) return Sk.builtin.asnum$(a);
    if (a instanceof Sk.builtin.float_) return Sk.builtin.asnum$(a);
    if (a instanceof Sk.builtin.lng) return Sk.builtin.asnum$(a);
    if ("number" === typeof a || "boolean" === typeof a || "string" === typeof a) return a;
    if (void 0 !== a) return a.v;
  };
  Sk.exportSymbol("Sk.ffi.remapToJs", Sk.ffi.remapToJs);
  Sk.ffi.callback = function (a) {
    return void 0 === a
      ? a
      : function () {
          return Sk.misceval.apply(a, void 0, void 0, void 0, Array.prototype.slice.call(arguments, 0));
        };
  };
  Sk.exportSymbol("Sk.ffi.callback", Sk.ffi.callback);
  Sk.ffi.stdwrap = function (a, b) {
    a = new a();
    a.v = b;
    return a;
  };
  Sk.exportSymbol("Sk.ffi.stdwrap", Sk.ffi.stdwrap);
  Sk.ffi.basicwrap = function (a) {
    if (a instanceof Sk.builtin.int_) return Sk.builtin.asnum$(a);
    if (a instanceof Sk.builtin.float_) return Sk.builtin.asnum$(a);
    if (a instanceof Sk.builtin.lng) return Sk.builtin.asnum$(a);
    if ("number" === typeof a || "boolean" === typeof a) return a;
    if ("string" === typeof a) return new Sk.builtin.str(a);
    Sk.asserts.fail("unexpected type for basicwrap");
  };
  Sk.exportSymbol("Sk.ffi.basicwrap", Sk.ffi.basicwrap);
  Sk.ffi.unwrapo = function (a) {
    if (void 0 !== a) return a.v;
  };
  Sk.exportSymbol("Sk.ffi.unwrapo", Sk.ffi.unwrapo);
  Sk.ffi.unwrapn = function (a) {
    return null === a ? null : a.v;
  };
  Sk.exportSymbol("Sk.ffi.unwrapn", Sk.ffi.unwrapn);
  Sk.builtin.iterator = function (a, b) {
    var c;
    if (a instanceof Sk.builtin.generator) return a;
    if ((c = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$iter))) return Sk.misceval.callsimArray(c, [a]);
    this.sentinel = b;
    this.flag = !1;
    this.idx = 0;
    this.obj = a;
    void 0 === b
      ? ((this.getitem = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$getitem)),
        (this.$r = function () {
          return new Sk.builtin.str("<iterator object>");
        }))
      : ((this.call = Sk.abstr.lookupSpecial(a, Sk.builtin.str.$call)),
        (this.$r = function () {
          return new Sk.builtin.str("<callable-iterator object>");
        }));
    return this;
  };
  Sk.abstr.setUpInheritance("iterator", Sk.builtin.iterator, Sk.builtin.object);
  Sk.builtin.iterator.prototype.__class__ = Sk.builtin.iterator;
  Sk.builtin.iterator.prototype.__iter__ = new Sk.builtin.func(function (a) {
    return a.tp$iter();
  });
  Sk.builtin.iterator.prototype.tp$iter = function () {
    return this;
  };
  Sk.builtin.iterator.prototype.tp$iternext = function (a) {
    var b = this;
    if (!0 !== this.flag) {
      if (this.getitem) {
        var c = Sk.misceval.tryCatch(
          function () {
            return Sk.misceval.callsimOrSuspendArray(b.getitem, [b.obj, Sk.ffi.remapToPy(b.idx++)]);
          },
          function (a) {
            if (!(a instanceof Sk.builtin.StopIteration || a instanceof Sk.builtin.IndexError)) throw a;
          }
        );
        return a ? c : Sk.misceval.retryOptionalSuspensionOrThrow(c);
      }
      c = function (a) {
        if (Sk.misceval.richCompareBool(a, b.sentinel, "Eq")) b.flag = !0;
        else return a;
      };
      c = this.call ? Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(this.call, [this.obj]), c) : Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(this.obj), c);
      return a ? c : Sk.misceval.retryOptionalSuspensionOrThrow(c);
    }
  };
  Sk.builtin.iterator.prototype.next$ = function (a) {
    a = a.tp$iternext();
    if (!a) throw new Sk.builtin.StopIteration();
    return a;
  };
  Sk.exportSymbol("Sk.builtin.iterator", Sk.builtin.iterator);
  Sk.builtin.enumerate = function (a, b) {
    if (!(this instanceof Sk.builtin.enumerate)) return new Sk.builtin.enumerate(a, b);
    Sk.builtin.pyCheckArgsLen("enumerate", arguments.length, 1, 2);
    if (!Sk.builtin.checkIterable(a)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not iterable");
    if (void 0 !== b)
      if (Sk.misceval.isIndex(b)) b = Sk.misceval.asIndex(b);
      else throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object cannot be interpreted as an index");
    else b = 0;
    var c = a.tp$iter();
    this.tp$iter = function () {
      return this;
    };
    this.$index = b;
    this.tp$iternext = function () {
      var a = c.tp$iternext();
      if (void 0 !== a) {
        var b = new Sk.builtin.int_(this.$index++);
        return new Sk.builtin.tuple([b, a]);
      }
    };
    this.__class__ = Sk.builtin.enumerate;
    return this;
  };
  Sk.abstr.setUpInheritance("enumerate", Sk.builtin.enumerate, Sk.builtin.object);
  Sk.builtin.enumerate.prototype.__iter__ = new Sk.builtin.func(function (a) {
    return a.tp$iter();
  });
  Sk.builtin.enumerate.prototype.next$ = function (a) {
    return a.tp$iternext();
  };
  Sk.builtin.enumerate.prototype.$r = function () {
    return new Sk.builtin.str("<enumerate object>");
  };
  Sk.Tokenizer = function (a, b, c) {
    this.filename = a;
    this.callback = c;
    this.parenlev = this.lnum = 0;
    this.continued = !1;
    this.namechars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
    this.numchars = "0123456789";
    this.contstr = "";
    this.needcont = !1;
    this.contline = void 0;
    this.indents = [0];
    this.endprog = /.*/;
    this.strstart = [-1, -1];
    this.interactive = b;
    this.doneFunc = function () {
      var a;
      for (a = 1; a < this.indents.length; ++a) if (this.callback(Sk.Tokenizer.Tokens.T_DEDENT, "", [this.lnum, 0], [this.lnum, 0], "")) return "done";
      return this.callback(Sk.Tokenizer.Tokens.T_ENDMARKER, "", [this.lnum, 0], [this.lnum, 0], "") ? "done" : "failed";
    };
  };
  Sk.Tokenizer.Tokens = {
    T_ENDMARKER: 0,
    T_NAME: 1,
    T_NUMBER: 2,
    T_STRING: 3,
    T_NEWLINE: 4,
    T_INDENT: 5,
    T_DEDENT: 6,
    T_LPAR: 7,
    T_RPAR: 8,
    T_LSQB: 9,
    T_RSQB: 10,
    T_COLON: 11,
    T_COMMA: 12,
    T_SEMI: 13,
    T_PLUS: 14,
    T_MINUS: 15,
    T_STAR: 16,
    T_SLASH: 17,
    T_VBAR: 18,
    T_AMPER: 19,
    T_LESS: 20,
    T_GREATER: 21,
    T_EQUAL: 22,
    T_DOT: 23,
    T_PERCENT: 24,
    T_BACKQUOTE: 25,
    T_LBRACE: 26,
    T_RBRACE: 27,
    T_EQEQUAL: 28,
    T_NOTEQUAL: 29,
    T_LESSEQUAL: 30,
    T_GREATEREQUAL: 31,
    T_TILDE: 32,
    T_CIRCUMFLEX: 33,
    T_LEFTSHIFT: 34,
    T_RIGHTSHIFT: 35,
    T_DOUBLESTAR: 36,
    T_PLUSEQUAL: 37,
    T_MINEQUAL: 38,
    T_STAREQUAL: 39,
    T_SLASHEQUAL: 40,
    T_PERCENTEQUAL: 41,
    T_AMPEREQUAL: 42,
    T_VBAREQUAL: 43,
    T_CIRCUMFLEXEQUAL: 44,
    T_LEFTSHIFTEQUAL: 45,
    T_RIGHTSHIFTEQUAL: 46,
    T_DOUBLESTAREQUAL: 47,
    T_DOUBLESLASH: 48,
    T_DOUBLESLASHEQUAL: 49,
    T_AT: 50,
    T_OP: 51,
    T_COMMENT: 52,
    T_NL: 53,
    T_RARROW: 54,
    T_ERRORTOKEN: 55,
    T_N_TOKENS: 56,
    T_NT_OFFSET: 256,
  };
  function group(a) {
    return "(" + Array.prototype.slice.call(arguments).join("|") + ")";
  }
  function any(a) {
    return group.apply(null, arguments) + "*";
  }
  function maybe(a) {
    return group.apply(null, arguments) + "?";
  }
  var Whitespace = "[ \\f\\t]*",
    Comment_ = "#[^\\r\\n]*",
    Ident = "[a-zA-Z_]\\w*",
    Binnumber = "0[bB][01]*",
    Hexnumber = "0[xX][\\da-fA-F]*[lL]?",
    Octnumber = "0[oO]?[0-7]*[lL]?",
    Decnumber = "[1-9]\\d*[lL]?",
    Intnumber = group(Binnumber, Hexnumber, Octnumber, Decnumber),
    Exponent = "[eE][-+]?\\d+",
    Pointfloat = group("\\d+\\.\\d*", "\\.\\d+") + maybe(Exponent),
    Expfloat = "\\d+" + Exponent,
    Floatnumber = group(Pointfloat, Expfloat),
    Imagnumber = group("\\d+[jJ]", Floatnumber + "[jJ]"),
    Number_ = group(Imagnumber, Floatnumber, Intnumber),
    Single = "^[^'\\\\]*(?:\\\\.[^'\\\\]*)*'",
    Double_ = '^[^"\\\\]*(?:\\\\.[^"\\\\]*)*"',
    Single3 = "[^'\\\\]*(?:(?:\\\\.|'(?!''))[^'\\\\]*)*'''",
    Double3 = '[^"\\\\]*(?:(?:\\\\.|"(?!""))[^"\\\\]*)*"""',
    Triple = group("[ubUB]?[rR]?'''", '[ubUB]?[rR]?"""'),
    String_ = group("[uU]?[rR]?'[^\\n'\\\\]*(?:\\\\.[^\\n'\\\\]*)*'", '[uU]?[rR]?"[^\\n"\\\\]*(?:\\\\.[^\\n"\\\\]*)*"'),
    Operator = group("\\*\\*=?", ">>=?", "<<=?", "<>", "!=", "//=?", "->", "[+\\-*/%&|^=<>]=?", "~"),
    Bracket = "[\\][(){}]",
    Special = group("\\r?\\n", "[:;.,`@]"),
    Funny = group(Operator, Bracket, Special),
    ContStr = group("[uUbB]?[rR]?'[^\\n'\\\\]*(?:\\\\.[^\\n'\\\\]*)*" + group("'", "\\\\\\r?\\n"), '[uUbB]?[rR]?"[^\\n"\\\\]*(?:\\\\.[^\\n"\\\\]*)*' + group('"', "\\\\\\r?\\n")),
    PseudoExtras = group("\\\\\\r?\\n", Comment_, Triple),
    PseudoToken = "^" + group(PseudoExtras, Number_, Funny, ContStr, Ident),
    triple_quoted = {
      "'''": !0,
      '"""': !0,
      "r'''": !0,
      'r"""': !0,
      "R'''": !0,
      'R"""': !0,
      "u'''": !0,
      'u"""': !0,
      "U'''": !0,
      'U"""': !0,
      "b'''": !0,
      'b"""': !0,
      "B'''": !0,
      'B"""': !0,
      "ur'''": !0,
      'ur"""': !0,
      "Ur'''": !0,
      'Ur"""': !0,
      "uR'''": !0,
      'uR"""': !0,
      "UR'''": !0,
      'UR"""': !0,
      "br'''": !0,
      'br"""': !0,
      "Br'''": !0,
      'Br"""': !0,
      "bR'''": !0,
      'bR"""': !0,
      "BR'''": !0,
      'BR"""': !0,
    },
    single_quoted = {
      "'": !0,
      '"': !0,
      "r'": !0,
      'r"': !0,
      "R'": !0,
      'R"': !0,
      "u'": !0,
      'u"': !0,
      "U'": !0,
      'U"': !0,
      "b'": !0,
      'b"': !0,
      "B'": !0,
      'B"': !0,
      "ur'": !0,
      'ur"': !0,
      "Ur'": !0,
      'Ur"': !0,
      "uR'": !0,
      'uR"': !0,
      "UR'": !0,
      'UR"': !0,
      "br'": !0,
      'br"': !0,
      "Br'": !0,
      'Br"': !0,
      "bR'": !0,
      'bR"': !0,
      "BR'": !0,
      'BR"': !0,
    };
  (function () {
    for (var a in triple_quoted);
    for (a in single_quoted);
  })();
  var tabsize = 8;
  function contains(a, b) {
    for (var c = a.length; c--; ) if (a[c] === b) return !0;
    return !1;
  }
  function rstrip(a, b) {
    var c;
    for (c = a.length; 0 < c && -1 !== b.indexOf(a.charAt(c - 1)); --c);
    return a.substring(0, c);
  }
  Sk.Tokenizer.prototype.generateTokens = function (a) {
    var b, c, d;
    var e = new RegExp(PseudoToken);
    var f = new RegExp(Single3, "g");
    var g = new RegExp(Double3, "g");
    var h = {
      "'": new RegExp(Single, "g"),
      '"': new RegExp(Double_, "g"),
      "'''": f,
      '"""': g,
      "r'''": f,
      'r"""': g,
      "u'''": f,
      'u"""': g,
      "b'''": f,
      'b"""': g,
      "ur'''": f,
      'ur"""': g,
      "br'''": f,
      'br"""': g,
      "R'''": f,
      'R"""': g,
      "U'''": f,
      'U"""': g,
      "B'''": f,
      'B"""': g,
      "uR'''": f,
      'uR"""': g,
      "Ur'''": f,
      'Ur"""': g,
      "UR'''": f,
      'UR"""': g,
      "bR'''": f,
      'bR"""': g,
      "Br'''": f,
      'Br"""': g,
      "BR'''": f,
      'BR"""': g,
      r: null,
      R: null,
      u: null,
      U: null,
      b: null,
      B: null,
    };
    a || (a = "");
    this.lnum += 1;
    f = 0;
    g = a.length;
    if (0 < this.contstr.length) {
      if (!a) throw new Sk.builtin.SyntaxError("EOF in multi-line string", this.filename, this.strstart[0], this.strstart[1], this.contline);
      this.endprog.lastIndex = 0;
      if ((c = this.endprog.test(a))) {
        f = b = this.endprog.lastIndex;
        if (this.callback(Sk.Tokenizer.Tokens.T_STRING, this.contstr + a.substring(0, b), this.strstart, [this.lnum, b], this.contline + a)) return "done";
        this.contstr = "";
        this.needcont = !1;
        this.contline = void 0;
      } else {
        if (this.needcont && "\\\n" !== a.substring(a.length - 2) && "\\\r\n" !== a.substring(a.length - 3)) {
          if (this.callback(Sk.Tokenizer.Tokens.T_ERRORTOKEN, this.contstr + a, this.strstart, [this.lnum, a.length], this.contline)) return "done";
          this.contstr = "";
          this.contline = void 0;
        } else (this.contstr += a), (this.contline += a);
        return !1;
      }
    } else if (0 !== this.parenlev || this.continued) {
      if (!a) throw new Sk.builtin.SyntaxError("EOF in multi-line statement", this.filename, this.lnum, 0, a);
      this.continued = !1;
    } else {
      if (!a) return this.doneFunc();
      for (d = 0; f < g; ) {
        if (" " === a.charAt(f)) d += 1;
        else if ("\t" === a.charAt(f)) d = (d / tabsize + 1) * tabsize;
        else if ("\f" === a.charAt(f)) d = 0;
        else break;
        f += 1;
      }
      if (f === g) return this.doneFunc();
      if (-1 !== "#\r\n".indexOf(a.charAt(f))) {
        if ("#" === a.charAt(f))
          return (
            (g = rstrip(a.substring(f), "\r\n")),
            (e = f + g.length),
            this.callback(Sk.Tokenizer.Tokens.T_COMMENT, g, [this.lnum, f], [this.lnum, f + g.length], a) || this.callback(Sk.Tokenizer.Tokens.T_NL, a.substring(e), [this.lnum, e], [this.lnum, a.length], a) ? "done" : !1
          );
        if (this.callback(Sk.Tokenizer.Tokens.T_NL, a.substring(f), [this.lnum, f], [this.lnum, a.length], a)) return "done";
        if (!this.interactive) return !1;
      }
      if (d > this.indents[this.indents.length - 1] && (this.indents.push(d), this.callback(Sk.Tokenizer.Tokens.T_INDENT, a.substring(0, f), [this.lnum, 0], [this.lnum, f], a))) return "done";
      for (; d < this.indents[this.indents.length - 1]; ) {
        if (!contains(this.indents, d)) throw new Sk.builtin.IndentationError("unindent does not match any outer indentation level", this.filename, this.lnum, f, a);
        this.indents.splice(this.indents.length - 1, 1);
        if (this.callback(Sk.Tokenizer.Tokens.T_DEDENT, "", [this.lnum, f], [this.lnum, f], a)) return "done";
      }
    }
    for (; f < g; ) {
      for (d = a.charAt(f); " " === d || "\f" === d || "\t" === d; ) (f += 1), (d = a.charAt(f));
      e.lastIndex = 0;
      if ((d = e.exec(a.substring(f)))) {
        var k = f;
        b = k + d[1].length;
        d = [this.lnum, k];
        c = [this.lnum, b];
        f = b;
        b = a.substring(k, b);
        var l = a.charAt(k);
        if (-1 !== this.numchars.indexOf(l) || ("." === l && "." !== b)) {
          if (this.callback(Sk.Tokenizer.Tokens.T_NUMBER, b, d, c, a)) return "done";
        } else if ("\r" === l || "\n" === l) {
          if (((k = Sk.Tokenizer.Tokens.T_NEWLINE), 0 < this.parenlev && (k = Sk.Tokenizer.Tokens.T_NL), this.callback(k, b, d, c, a))) return "done";
        } else if ("#" === l) {
          if (this.callback(Sk.Tokenizer.Tokens.T_COMMENT, b, d, c, a)) return "done";
        } else if (triple_quoted.hasOwnProperty(b))
          if (((this.endprog = h[b]), (this.endprog.lastIndex = 0), (c = this.endprog.test(a.substring(f))))) {
            if (((f = this.endprog.lastIndex + f), (b = a.substring(k, f)), this.callback(Sk.Tokenizer.Tokens.T_STRING, b, d, [this.lnum, f], a))) return "done";
          } else {
            this.strstart = [this.lnum, k];
            this.contstr = a.substring(k);
            this.contline = a;
            break;
          }
        else if (single_quoted.hasOwnProperty(l) || single_quoted.hasOwnProperty(b.substring(0, 2)) || single_quoted.hasOwnProperty(b.substring(0, 3)))
          if ("\n" === b[b.length - 1]) {
            this.strstart = [this.lnum, k];
            this.endprog = h[l] || h[b[1]] || h[b[2]];
            this.contstr = a.substring(k);
            this.needcont = !0;
            this.contline = a;
            break;
          } else {
            if (this.callback(Sk.Tokenizer.Tokens.T_STRING, b, d, c, a)) return "done";
          }
        else if (-1 !== this.namechars.indexOf(l)) {
          if (this.callback(Sk.Tokenizer.Tokens.T_NAME, b, d, c, a)) return "done";
        } else if ("\\" === l) {
          if (this.callback(Sk.Tokenizer.Tokens.T_NL, b, d, [this.lnum, f], a)) return "done";
          this.continued = !0;
        } else if ((-1 !== "([{".indexOf(l) ? (this.parenlev += 1) : -1 !== ")]}".indexOf(l) && --this.parenlev, this.callback(Sk.Tokenizer.Tokens.T_OP, b, d, c, a))) return "done";
      } else {
        if (this.callback(Sk.Tokenizer.Tokens.T_ERRORTOKEN, a.charAt(f), [this.lnum, f], [this.lnum, f + 1], a)) return "done";
        f += 1;
      }
    }
    return !1;
  };
  Sk.Tokenizer.tokenNames = {
    0: "T_ENDMARKER",
    1: "T_NAME",
    2: "T_NUMBER",
    3: "T_STRING",
    4: "T_NEWLINE",
    5: "T_INDENT",
    6: "T_DEDENT",
    7: "T_LPAR",
    8: "T_RPAR",
    9: "T_LSQB",
    10: "T_RSQB",
    11: "T_COLON",
    12: "T_COMMA",
    13: "T_SEMI",
    14: "T_PLUS",
    15: "T_MINUS",
    16: "T_STAR",
    17: "T_SLASH",
    18: "T_VBAR",
    19: "T_AMPER",
    20: "T_LESS",
    21: "T_GREATER",
    22: "T_EQUAL",
    23: "T_DOT",
    24: "T_PERCENT",
    25: "T_BACKQUOTE",
    26: "T_LBRACE",
    27: "T_RBRACE",
    28: "T_EQEQUAL",
    29: "T_NOTEQUAL",
    30: "T_LESSEQUAL",
    31: "T_GREATEREQUAL",
    32: "T_TILDE",
    33: "T_CIRCUMFLEX",
    34: "T_LEFTSHIFT",
    35: "T_RIGHTSHIFT",
    36: "T_DOUBLESTAR",
    37: "T_PLUSEQUAL",
    38: "T_MINEQUAL",
    39: "T_STAREQUAL",
    40: "T_SLASHEQUAL",
    41: "T_PERCENTEQUAL",
    42: "T_AMPEREQUAL",
    43: "T_VBAREQUAL",
    44: "T_CIRCUMFLEXEQUAL",
    45: "T_LEFTSHIFTEQUAL",
    46: "T_RIGHTSHIFTEQUAL",
    47: "T_DOUBLESTAREQUAL",
    48: "T_DOUBLESLASH",
    49: "T_DOUBLESLASHEQUAL",
    50: "T_AT",
    51: "T_OP",
    52: "T_COMMENT",
    53: "T_NL",
    54: "T_RARROW",
    55: "T_ERRORTOKEN",
    56: "T_N_TOKENS",
    256: "T_NT_OFFSET",
  };
  Sk.exportSymbol("Sk.Tokenizer", Sk.Tokenizer);
  Sk.exportSymbol("Sk.Tokenizer.prototype.generateTokens", Sk.Tokenizer.prototype.generateTokens);
  Sk.exportSymbol("Sk.Tokenizer.tokenNames", Sk.Tokenizer.tokenNames);
  Sk.OpMap = {
    "(": Sk.Tokenizer.Tokens.T_LPAR,
    ")": Sk.Tokenizer.Tokens.T_RPAR,
    "[": Sk.Tokenizer.Tokens.T_LSQB,
    "]": Sk.Tokenizer.Tokens.T_RSQB,
    ":": Sk.Tokenizer.Tokens.T_COLON,
    ",": Sk.Tokenizer.Tokens.T_COMMA,
    ";": Sk.Tokenizer.Tokens.T_SEMI,
    "+": Sk.Tokenizer.Tokens.T_PLUS,
    "-": Sk.Tokenizer.Tokens.T_MINUS,
    "*": Sk.Tokenizer.Tokens.T_STAR,
    "/": Sk.Tokenizer.Tokens.T_SLASH,
    "|": Sk.Tokenizer.Tokens.T_VBAR,
    "&": Sk.Tokenizer.Tokens.T_AMPER,
    "<": Sk.Tokenizer.Tokens.T_LESS,
    ">": Sk.Tokenizer.Tokens.T_GREATER,
    "=": Sk.Tokenizer.Tokens.T_EQUAL,
    ".": Sk.Tokenizer.Tokens.T_DOT,
    "%": Sk.Tokenizer.Tokens.T_PERCENT,
    "`": Sk.Tokenizer.Tokens.T_BACKQUOTE,
    "{": Sk.Tokenizer.Tokens.T_LBRACE,
    "}": Sk.Tokenizer.Tokens.T_RBRACE,
    "@": Sk.Tokenizer.Tokens.T_AT,
    "==": Sk.Tokenizer.Tokens.T_EQEQUAL,
    "!=": Sk.Tokenizer.Tokens.T_NOTEQUAL,
    "<>": Sk.Tokenizer.Tokens.T_NOTEQUAL,
    "<=": Sk.Tokenizer.Tokens.T_LESSEQUAL,
    ">=": Sk.Tokenizer.Tokens.T_GREATEREQUAL,
    "~": Sk.Tokenizer.Tokens.T_TILDE,
    "^": Sk.Tokenizer.Tokens.T_CIRCUMFLEX,
    "<<": Sk.Tokenizer.Tokens.T_LEFTSHIFT,
    ">>": Sk.Tokenizer.Tokens.T_RIGHTSHIFT,
    "**": Sk.Tokenizer.Tokens.T_DOUBLESTAR,
    "+=": Sk.Tokenizer.Tokens.T_PLUSEQUAL,
    "-=": Sk.Tokenizer.Tokens.T_MINEQUAL,
    "*=": Sk.Tokenizer.Tokens.T_STAREQUAL,
    "/=": Sk.Tokenizer.Tokens.T_SLASHEQUAL,
    "%=": Sk.Tokenizer.Tokens.T_PERCENTEQUAL,
    "&=": Sk.Tokenizer.Tokens.T_AMPEREQUAL,
    "|=": Sk.Tokenizer.Tokens.T_VBAREQUAL,
    "^=": Sk.Tokenizer.Tokens.T_CIRCUMFLEXEQUAL,
    "<<=": Sk.Tokenizer.Tokens.T_LEFTSHIFTEQUAL,
    ">>=": Sk.Tokenizer.Tokens.T_RIGHTSHIFTEQUAL,
    "**=": Sk.Tokenizer.Tokens.T_DOUBLESTAREQUAL,
    "//": Sk.Tokenizer.Tokens.T_DOUBLESLASH,
    "//=": Sk.Tokenizer.Tokens.T_DOUBLESLASHEQUAL,
    "->": Sk.Tokenizer.Tokens.T_RARROW,
  };
  Sk.ParseTables = {
    sym: {
      and_expr: 257,
      and_test: 258,
      arglist: 259,
      argument: 260,
      arith_expr: 261,
      assert_stmt: 262,
      atom: 263,
      augassign: 264,
      break_stmt: 265,
      classdef: 266,
      comp_for: 267,
      comp_if: 268,
      comp_iter: 269,
      comp_op: 270,
      comparison: 271,
      compound_stmt: 272,
      continue_stmt: 273,
      debugger_stmt: 274,
      decorated: 275,
      decorator: 276,
      decorators: 277,
      del_stmt: 278,
      dictorsetmaker: 279,
      dotted_as_name: 280,
      dotted_as_names: 281,
      dotted_name: 282,
      encoding_decl: 283,
      eval_input: 284,
      except_clause: 285,
      exec_stmt: 286,
      expr: 287,
      expr_stmt: 288,
      exprlist: 289,
      factor: 290,
      file_input: 291,
      flow_stmt: 292,
      for_stmt: 293,
      fpdef: 294,
      fplist: 295,
      funcdef: 296,
      global_stmt: 297,
      if_stmt: 298,
      import_as_name: 299,
      import_as_names: 300,
      import_from: 301,
      import_name: 302,
      import_stmt: 303,
      lambdef: 304,
      list_for: 305,
      list_if: 306,
      list_iter: 307,
      listmaker: 308,
      not_test: 309,
      old_lambdef: 310,
      old_test: 311,
      or_test: 312,
      parameters: 313,
      pass_stmt: 314,
      power: 315,
      print_stmt: 316,
      raise_stmt: 317,
      return_stmt: 318,
      shift_expr: 319,
      simple_stmt: 320,
      single_input: 256,
      sliceop: 321,
      small_stmt: 322,
      stmt: 323,
      subscript: 324,
      subscriptlist: 325,
      suite: 326,
      term: 327,
      test: 328,
      testlist: 329,
      testlist1: 330,
      testlist_comp: 331,
      testlist_safe: 332,
      trailer: 333,
      try_stmt: 334,
      varargslist: 335,
      while_stmt: 336,
      with_item: 337,
      with_stmt: 338,
      xor_expr: 339,
      yield_expr: 340,
      yield_stmt: 341,
    },
    number2symbol: {
      256: "single_input",
      257: "and_expr",
      258: "and_test",
      259: "arglist",
      260: "argument",
      261: "arith_expr",
      262: "assert_stmt",
      263: "atom",
      264: "augassign",
      265: "break_stmt",
      266: "classdef",
      267: "comp_for",
      268: "comp_if",
      269: "comp_iter",
      270: "comp_op",
      271: "comparison",
      272: "compound_stmt",
      273: "continue_stmt",
      274: "debugger_stmt",
      275: "decorated",
      276: "decorator",
      277: "decorators",
      278: "del_stmt",
      279: "dictorsetmaker",
      280: "dotted_as_name",
      281: "dotted_as_names",
      282: "dotted_name",
      283: "encoding_decl",
      284: "eval_input",
      285: "except_clause",
      286: "exec_stmt",
      287: "expr",
      288: "expr_stmt",
      289: "exprlist",
      290: "factor",
      291: "file_input",
      292: "flow_stmt",
      293: "for_stmt",
      294: "fpdef",
      295: "fplist",
      296: "funcdef",
      297: "global_stmt",
      298: "if_stmt",
      299: "import_as_name",
      300: "import_as_names",
      301: "import_from",
      302: "import_name",
      303: "import_stmt",
      304: "lambdef",
      305: "list_for",
      306: "list_if",
      307: "list_iter",
      308: "listmaker",
      309: "not_test",
      310: "old_lambdef",
      311: "old_test",
      312: "or_test",
      313: "parameters",
      314: "pass_stmt",
      315: "power",
      316: "print_stmt",
      317: "raise_stmt",
      318: "return_stmt",
      319: "shift_expr",
      320: "simple_stmt",
      321: "sliceop",
      322: "small_stmt",
      323: "stmt",
      324: "subscript",
      325: "subscriptlist",
      326: "suite",
      327: "term",
      328: "test",
      329: "testlist",
      330: "testlist1",
      331: "testlist_comp",
      332: "testlist_safe",
      333: "trailer",
      334: "try_stmt",
      335: "varargslist",
      336: "while_stmt",
      337: "with_item",
      338: "with_stmt",
      339: "xor_expr",
      340: "yield_expr",
      341: "yield_stmt",
    },
    dfas: {
      256: [
        [
          [
            [1, 1],
            [2, 1],
            [3, 2],
          ],
          [[0, 1]],
          [[2, 1]],
        ],
        {
          2: 1,
          4: 1,
          5: 1,
          6: 1,
          7: 1,
          8: 1,
          9: 1,
          10: 1,
          11: 1,
          12: 1,
          13: 1,
          14: 1,
          15: 1,
          16: 1,
          17: 1,
          18: 1,
          19: 1,
          20: 1,
          21: 1,
          22: 1,
          23: 1,
          24: 1,
          25: 1,
          26: 1,
          27: 1,
          28: 1,
          29: 1,
          30: 1,
          31: 1,
          32: 1,
          33: 1,
          34: 1,
          35: 1,
          36: 1,
          37: 1,
        },
      ],
      257: [
        [
          [[38, 1]],
          [
            [39, 0],
            [0, 1],
          ],
        ],
        { 6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      258: [
        [
          [[40, 1]],
          [
            [41, 0],
            [0, 1],
          ],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      259: [
        [
          [
            [42, 1],
            [43, 2],
            [44, 3],
          ],
          [[45, 4]],
          [
            [46, 5],
            [0, 2],
          ],
          [[45, 6]],
          [
            [46, 7],
            [0, 4],
          ],
          [
            [42, 1],
            [43, 2],
            [44, 3],
            [0, 5],
          ],
          [[0, 6]],
          [
            [43, 4],
            [44, 3],
          ],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1, 42: 1, 44: 1 },
      ],
      260: [
        [
          [[45, 1]],
          [
            [47, 2],
            [48, 3],
            [0, 1],
          ],
          [[45, 3]],
          [[0, 3]],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      261: [
        [
          [[49, 1]],
          [
            [26, 0],
            [37, 0],
            [0, 1],
          ],
        ],
        { 6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      262: [
        [
          [[21, 1]],
          [[45, 2]],
          [
            [46, 3],
            [0, 2],
          ],
          [[45, 4]],
          [[0, 4]],
        ],
        { 21: 1 },
      ],
      263: [
        [
          [
            [19, 1],
            [8, 2],
            [9, 5],
            [30, 4],
            [14, 3],
            [15, 6],
            [22, 2],
          ],
          [
            [19, 1],
            [0, 1],
          ],
          [[0, 2]],
          [
            [50, 7],
            [51, 2],
          ],
          [
            [52, 2],
            [53, 8],
            [54, 8],
          ],
          [
            [55, 2],
            [56, 9],
          ],
          [[57, 10]],
          [[51, 2]],
          [[52, 2]],
          [[55, 2]],
          [[15, 2]],
        ],
        { 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 30: 1 },
      ],
      264: [
        [
          [
            [58, 1],
            [59, 1],
            [60, 1],
            [61, 1],
            [62, 1],
            [63, 1],
            [64, 1],
            [65, 1],
            [66, 1],
            [67, 1],
            [68, 1],
            [69, 1],
          ],
          [[0, 1]],
        ],
        { 58: 1, 59: 1, 60: 1, 61: 1, 62: 1, 63: 1, 64: 1, 65: 1, 66: 1, 67: 1, 68: 1, 69: 1 },
      ],
      265: [[[[33, 1]], [[0, 1]]], { 33: 1 }],
      266: [
        [
          [[10, 1]],
          [[22, 2]],
          [
            [70, 3],
            [30, 4],
          ],
          [[71, 5]],
          [
            [52, 6],
            [72, 7],
          ],
          [[0, 5]],
          [[70, 3]],
          [[52, 6]],
        ],
        { 10: 1 },
      ],
      267: [
        [
          [[29, 1]],
          [[73, 2]],
          [[74, 3]],
          [[75, 4]],
          [
            [76, 5],
            [0, 4],
          ],
          [[0, 5]],
        ],
        { 29: 1 },
      ],
      268: [
        [
          [[32, 1]],
          [[77, 2]],
          [
            [76, 3],
            [0, 2],
          ],
          [[0, 3]],
        ],
        { 32: 1 },
      ],
      269: [
        [
          [
            [78, 1],
            [48, 1],
          ],
          [[0, 1]],
        ],
        { 29: 1, 32: 1 },
      ],
      270: [
        [
          [
            [79, 1],
            [80, 1],
            [7, 2],
            [81, 1],
            [79, 1],
            [74, 1],
            [82, 1],
            [83, 3],
            [84, 1],
            [85, 1],
          ],
          [[0, 1]],
          [[74, 1]],
          [
            [7, 1],
            [0, 3],
          ],
        ],
        { 7: 1, 74: 1, 79: 1, 80: 1, 81: 1, 82: 1, 83: 1, 84: 1, 85: 1 },
      ],
      271: [
        [
          [[86, 1]],
          [
            [87, 0],
            [0, 1],
          ],
        ],
        { 6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      272: [
        [
          [
            [88, 1],
            [89, 1],
            [90, 1],
            [91, 1],
            [92, 1],
            [93, 1],
            [94, 1],
            [95, 1],
          ],
          [[0, 1]],
        ],
        { 4: 1, 10: 1, 16: 1, 18: 1, 29: 1, 32: 1, 35: 1, 36: 1 },
      ],
      273: [[[[34, 1]], [[0, 1]]], { 34: 1 }],
      274: [[[[13, 1]], [[0, 1]]], { 13: 1 }],
      275: [
        [
          [[96, 1]],
          [
            [94, 2],
            [91, 2],
          ],
          [[0, 2]],
        ],
        { 35: 1 },
      ],
      276: [
        [
          [[35, 1]],
          [[97, 2]],
          [
            [2, 4],
            [30, 3],
          ],
          [
            [52, 5],
            [98, 6],
          ],
          [[0, 4]],
          [[2, 4]],
          [[52, 5]],
        ],
        { 35: 1 },
      ],
      277: [
        [
          [[99, 1]],
          [
            [99, 1],
            [0, 1],
          ],
        ],
        { 35: 1 },
      ],
      278: [[[[23, 1]], [[73, 2]], [[0, 2]]], { 23: 1 }],
      279: [
        [
          [[45, 1]],
          [
            [70, 2],
            [48, 3],
            [46, 4],
            [0, 1],
          ],
          [[45, 5]],
          [[0, 3]],
          [
            [45, 6],
            [0, 4],
          ],
          [
            [48, 3],
            [46, 7],
            [0, 5],
          ],
          [
            [46, 4],
            [0, 6],
          ],
          [
            [45, 8],
            [0, 7],
          ],
          [[70, 9]],
          [[45, 10]],
          [
            [46, 7],
            [0, 10],
          ],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      280: [
        [
          [[97, 1]],
          [
            [100, 2],
            [0, 1],
          ],
          [[22, 3]],
          [[0, 3]],
        ],
        { 22: 1 },
      ],
      281: [
        [
          [[101, 1]],
          [
            [46, 0],
            [0, 1],
          ],
        ],
        { 22: 1 },
      ],
      282: [
        [
          [[22, 1]],
          [
            [102, 0],
            [0, 1],
          ],
        ],
        { 22: 1 },
      ],
      283: [[[[22, 1]], [[0, 1]]], { 22: 1 }],
      284: [
        [
          [[72, 1]],
          [
            [2, 1],
            [103, 2],
          ],
          [[0, 2]],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      285: [
        [
          [[104, 1]],
          [
            [45, 2],
            [0, 1],
          ],
          [
            [100, 3],
            [46, 3],
            [0, 2],
          ],
          [[45, 4]],
          [[0, 4]],
        ],
        { 104: 1 },
      ],
      286: [
        [
          [[17, 1]],
          [[86, 2]],
          [
            [74, 3],
            [0, 2],
          ],
          [[45, 4]],
          [
            [46, 5],
            [0, 4],
          ],
          [[45, 6]],
          [[0, 6]],
        ],
        { 17: 1 },
      ],
      287: [
        [
          [[105, 1]],
          [
            [106, 0],
            [0, 1],
          ],
        ],
        { 6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      288: [
        [
          [[72, 1]],
          [
            [107, 2],
            [47, 3],
            [0, 1],
          ],
          [
            [72, 4],
            [53, 4],
          ],
          [
            [72, 5],
            [53, 5],
          ],
          [[0, 4]],
          [
            [47, 3],
            [0, 5],
          ],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      289: [
        [
          [[86, 1]],
          [
            [46, 2],
            [0, 1],
          ],
          [
            [86, 1],
            [0, 2],
          ],
        ],
        { 6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      290: [
        [
          [
            [37, 2],
            [26, 2],
            [6, 2],
            [108, 1],
          ],
          [[0, 1]],
          [[109, 1]],
        ],
        { 6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      291: [
        [
          [
            [2, 0],
            [103, 1],
            [110, 0],
          ],
          [[0, 1]],
        ],
        {
          2: 1,
          4: 1,
          5: 1,
          6: 1,
          7: 1,
          8: 1,
          9: 1,
          10: 1,
          11: 1,
          12: 1,
          13: 1,
          14: 1,
          15: 1,
          16: 1,
          17: 1,
          18: 1,
          19: 1,
          20: 1,
          21: 1,
          22: 1,
          23: 1,
          24: 1,
          25: 1,
          26: 1,
          27: 1,
          28: 1,
          29: 1,
          30: 1,
          31: 1,
          32: 1,
          33: 1,
          34: 1,
          35: 1,
          36: 1,
          37: 1,
          103: 1,
        },
      ],
      292: [
        [
          [
            [111, 1],
            [112, 1],
            [113, 1],
            [114, 1],
            [115, 1],
          ],
          [[0, 1]],
        ],
        { 5: 1, 20: 1, 27: 1, 33: 1, 34: 1 },
      ],
      293: [
        [
          [[29, 1]],
          [[73, 2]],
          [[74, 3]],
          [[72, 4]],
          [[70, 5]],
          [[71, 6]],
          [
            [116, 7],
            [0, 6],
          ],
          [[70, 8]],
          [[71, 9]],
          [[0, 9]],
        ],
        { 29: 1 },
      ],
      294: [
        [
          [
            [30, 1],
            [22, 2],
          ],
          [[117, 3]],
          [[0, 2]],
          [[52, 2]],
        ],
        { 22: 1, 30: 1 },
      ],
      295: [
        [
          [[118, 1]],
          [
            [46, 2],
            [0, 1],
          ],
          [
            [118, 1],
            [0, 2],
          ],
        ],
        { 22: 1, 30: 1 },
      ],
      296: [[[[4, 1]], [[22, 2]], [[119, 3]], [[70, 4]], [[71, 5]], [[0, 5]]], { 4: 1 }],
      297: [
        [
          [[28, 1]],
          [[22, 2]],
          [
            [46, 1],
            [0, 2],
          ],
        ],
        { 28: 1 },
      ],
      298: [
        [
          [[32, 1]],
          [[45, 2]],
          [[70, 3]],
          [[71, 4]],
          [
            [116, 5],
            [120, 1],
            [0, 4],
          ],
          [[70, 6]],
          [[71, 7]],
          [[0, 7]],
        ],
        { 32: 1 },
      ],
      299: [
        [
          [[22, 1]],
          [
            [100, 2],
            [0, 1],
          ],
          [[22, 3]],
          [[0, 3]],
        ],
        { 22: 1 },
      ],
      300: [
        [
          [[121, 1]],
          [
            [46, 2],
            [0, 1],
          ],
          [
            [121, 1],
            [0, 2],
          ],
        ],
        { 22: 1 },
      ],
      301: [
        [
          [[31, 1]],
          [
            [97, 2],
            [102, 3],
          ],
          [[25, 4]],
          [
            [97, 2],
            [25, 4],
            [102, 3],
          ],
          [
            [122, 5],
            [42, 5],
            [30, 6],
          ],
          [[0, 5]],
          [[122, 7]],
          [[52, 5]],
        ],
        { 31: 1 },
      ],
      302: [[[[25, 1]], [[123, 2]], [[0, 2]]], { 25: 1 }],
      303: [
        [
          [
            [124, 1],
            [125, 1],
          ],
          [[0, 1]],
        ],
        { 25: 1, 31: 1 },
      ],
      304: [
        [
          [[11, 1]],
          [
            [70, 2],
            [126, 3],
          ],
          [[45, 4]],
          [[70, 2]],
          [[0, 4]],
        ],
        { 11: 1 },
      ],
      305: [
        [
          [[29, 1]],
          [[73, 2]],
          [[74, 3]],
          [[127, 4]],
          [
            [128, 5],
            [0, 4],
          ],
          [[0, 5]],
        ],
        { 29: 1 },
      ],
      306: [
        [
          [[32, 1]],
          [[77, 2]],
          [
            [128, 3],
            [0, 2],
          ],
          [[0, 3]],
        ],
        { 32: 1 },
      ],
      307: [
        [
          [
            [129, 1],
            [130, 1],
          ],
          [[0, 1]],
        ],
        { 29: 1, 32: 1 },
      ],
      308: [
        [
          [[45, 1]],
          [
            [129, 2],
            [46, 3],
            [0, 1],
          ],
          [[0, 2]],
          [
            [45, 4],
            [0, 3],
          ],
          [
            [46, 3],
            [0, 4],
          ],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      309: [
        [
          [
            [7, 1],
            [131, 2],
          ],
          [[40, 2]],
          [[0, 2]],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      310: [
        [
          [[11, 1]],
          [
            [70, 2],
            [126, 3],
          ],
          [[77, 4]],
          [[70, 2]],
          [[0, 4]],
        ],
        { 11: 1 },
      ],
      311: [
        [
          [
            [132, 1],
            [75, 1],
          ],
          [[0, 1]],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      312: [
        [
          [[133, 1]],
          [
            [134, 0],
            [0, 1],
          ],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      313: [
        [
          [[30, 1]],
          [
            [52, 2],
            [126, 3],
          ],
          [[0, 2]],
          [[52, 2]],
        ],
        { 30: 1 },
      ],
      314: [[[[24, 1]], [[0, 1]]], { 24: 1 }],
      315: [
        [
          [[135, 1]],
          [
            [44, 2],
            [136, 1],
            [0, 1],
          ],
          [[109, 3]],
          [[0, 3]],
        ],
        { 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 30: 1 },
      ],
      316: [
        [
          [[12, 1]],
          [
            [45, 2],
            [137, 3],
            [0, 1],
          ],
          [
            [46, 4],
            [0, 2],
          ],
          [[45, 5]],
          [
            [45, 2],
            [0, 4],
          ],
          [
            [46, 6],
            [0, 5],
          ],
          [[45, 7]],
          [
            [46, 8],
            [0, 7],
          ],
          [
            [45, 7],
            [0, 8],
          ],
        ],
        { 12: 1 },
      ],
      317: [
        [
          [[5, 1]],
          [
            [45, 2],
            [0, 1],
          ],
          [
            [46, 3],
            [0, 2],
          ],
          [[45, 4]],
          [
            [46, 5],
            [0, 4],
          ],
          [[45, 6]],
          [[0, 6]],
        ],
        { 5: 1 },
      ],
      318: [
        [
          [[20, 1]],
          [
            [72, 2],
            [0, 1],
          ],
          [[0, 2]],
        ],
        { 20: 1 },
      ],
      319: [
        [
          [[138, 1]],
          [
            [139, 0],
            [137, 0],
            [0, 1],
          ],
        ],
        { 6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      320: [
        [
          [[140, 1]],
          [
            [2, 2],
            [141, 3],
          ],
          [[0, 2]],
          [
            [140, 1],
            [2, 2],
          ],
        ],
        { 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 17: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 1, 28: 1, 30: 1, 31: 1, 33: 1, 34: 1, 37: 1 },
      ],
      321: [
        [
          [[70, 1]],
          [
            [45, 2],
            [0, 1],
          ],
          [[0, 2]],
        ],
        { 70: 1 },
      ],
      322: [
        [
          [
            [142, 1],
            [143, 1],
            [144, 1],
            [145, 1],
            [146, 1],
            [147, 1],
            [148, 1],
            [149, 1],
            [150, 1],
            [151, 1],
          ],
          [[0, 1]],
        ],
        { 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 17: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 1, 28: 1, 30: 1, 31: 1, 33: 1, 34: 1, 37: 1 },
      ],
      323: [
        [
          [
            [1, 1],
            [3, 1],
          ],
          [[0, 1]],
        ],
        {
          4: 1,
          5: 1,
          6: 1,
          7: 1,
          8: 1,
          9: 1,
          10: 1,
          11: 1,
          12: 1,
          13: 1,
          14: 1,
          15: 1,
          16: 1,
          17: 1,
          18: 1,
          19: 1,
          20: 1,
          21: 1,
          22: 1,
          23: 1,
          24: 1,
          25: 1,
          26: 1,
          27: 1,
          28: 1,
          29: 1,
          30: 1,
          31: 1,
          32: 1,
          33: 1,
          34: 1,
          35: 1,
          36: 1,
          37: 1,
        },
      ],
      324: [
        [
          [
            [45, 1],
            [70, 2],
            [102, 3],
          ],
          [
            [70, 2],
            [0, 1],
          ],
          [
            [45, 4],
            [152, 5],
            [0, 2],
          ],
          [[102, 6]],
          [
            [152, 5],
            [0, 4],
          ],
          [[0, 5]],
          [[102, 5]],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1, 70: 1, 102: 1 },
      ],
      325: [
        [
          [[153, 1]],
          [
            [46, 2],
            [0, 1],
          ],
          [
            [153, 1],
            [0, 2],
          ],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1, 70: 1, 102: 1 },
      ],
      326: [
        [
          [
            [1, 1],
            [2, 2],
          ],
          [[0, 1]],
          [[154, 3]],
          [[110, 4]],
          [
            [155, 1],
            [110, 4],
          ],
        ],
        { 2: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 17: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 1, 28: 1, 30: 1, 31: 1, 33: 1, 34: 1, 37: 1 },
      ],
      327: [
        [
          [[109, 1]],
          [
            [156, 0],
            [42, 0],
            [157, 0],
            [158, 0],
            [0, 1],
          ],
        ],
        { 6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      328: [
        [
          [
            [75, 1],
            [159, 2],
          ],
          [
            [32, 3],
            [0, 1],
          ],
          [[0, 2]],
          [[75, 4]],
          [[116, 5]],
          [[45, 2]],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      329: [
        [
          [[45, 1]],
          [
            [46, 2],
            [0, 1],
          ],
          [
            [45, 1],
            [0, 2],
          ],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      330: [
        [
          [[45, 1]],
          [
            [46, 0],
            [0, 1],
          ],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      331: [
        [
          [[45, 1]],
          [
            [48, 2],
            [46, 3],
            [0, 1],
          ],
          [[0, 2]],
          [
            [45, 4],
            [0, 3],
          ],
          [
            [46, 3],
            [0, 4],
          ],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      332: [
        [
          [[77, 1]],
          [
            [46, 2],
            [0, 1],
          ],
          [[77, 3]],
          [
            [46, 4],
            [0, 3],
          ],
          [
            [77, 3],
            [0, 4],
          ],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      333: [
        [
          [
            [30, 1],
            [102, 2],
            [14, 3],
          ],
          [
            [52, 4],
            [98, 5],
          ],
          [[22, 4]],
          [[160, 6]],
          [[0, 4]],
          [[52, 4]],
          [[51, 4]],
        ],
        { 14: 1, 30: 1, 102: 1 },
      ],
      334: [
        [
          [[16, 1]],
          [[70, 2]],
          [[71, 3]],
          [
            [161, 4],
            [162, 5],
          ],
          [[70, 6]],
          [[70, 7]],
          [[71, 8]],
          [[71, 9]],
          [
            [161, 4],
            [116, 10],
            [162, 5],
            [0, 8],
          ],
          [[0, 9]],
          [[70, 11]],
          [[71, 12]],
          [
            [162, 5],
            [0, 12],
          ],
        ],
        { 16: 1 },
      ],
      335: [
        [
          [
            [42, 1],
            [118, 2],
            [44, 3],
          ],
          [[22, 4]],
          [
            [47, 5],
            [46, 6],
            [0, 2],
          ],
          [[22, 7]],
          [
            [46, 8],
            [0, 4],
          ],
          [[45, 9]],
          [
            [42, 1],
            [118, 2],
            [44, 3],
            [0, 6],
          ],
          [[0, 7]],
          [[44, 3]],
          [
            [46, 6],
            [0, 9],
          ],
        ],
        { 22: 1, 30: 1, 42: 1, 44: 1 },
      ],
      336: [
        [
          [[18, 1]],
          [[45, 2]],
          [[70, 3]],
          [[71, 4]],
          [
            [116, 5],
            [0, 4],
          ],
          [[70, 6]],
          [[71, 7]],
          [[0, 7]],
        ],
        { 18: 1 },
      ],
      337: [
        [
          [[45, 1]],
          [
            [100, 2],
            [0, 1],
          ],
          [[86, 3]],
          [[0, 3]],
        ],
        { 6: 1, 7: 1, 8: 1, 9: 1, 11: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      338: [
        [
          [[36, 1]],
          [[163, 2]],
          [
            [70, 3],
            [46, 1],
          ],
          [[71, 4]],
          [[0, 4]],
        ],
        { 36: 1 },
      ],
      339: [
        [
          [[164, 1]],
          [
            [165, 0],
            [0, 1],
          ],
        ],
        { 6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1 },
      ],
      340: [
        [
          [[27, 1]],
          [
            [72, 2],
            [0, 1],
          ],
          [[0, 2]],
        ],
        { 27: 1 },
      ],
      341: [[[[53, 1]], [[0, 1]]], { 27: 1 }],
    },
    states: [
      [
        [
          [1, 1],
          [2, 1],
          [3, 2],
        ],
        [[0, 1]],
        [[2, 1]],
      ],
      [
        [[38, 1]],
        [
          [39, 0],
          [0, 1],
        ],
      ],
      [
        [[40, 1]],
        [
          [41, 0],
          [0, 1],
        ],
      ],
      [
        [
          [42, 1],
          [43, 2],
          [44, 3],
        ],
        [[45, 4]],
        [
          [46, 5],
          [0, 2],
        ],
        [[45, 6]],
        [
          [46, 7],
          [0, 4],
        ],
        [
          [42, 1],
          [43, 2],
          [44, 3],
          [0, 5],
        ],
        [[0, 6]],
        [
          [43, 4],
          [44, 3],
        ],
      ],
      [
        [[45, 1]],
        [
          [47, 2],
          [48, 3],
          [0, 1],
        ],
        [[45, 3]],
        [[0, 3]],
      ],
      [
        [[49, 1]],
        [
          [26, 0],
          [37, 0],
          [0, 1],
        ],
      ],
      [
        [[21, 1]],
        [[45, 2]],
        [
          [46, 3],
          [0, 2],
        ],
        [[45, 4]],
        [[0, 4]],
      ],
      [
        [
          [19, 1],
          [8, 2],
          [9, 5],
          [30, 4],
          [14, 3],
          [15, 6],
          [22, 2],
        ],
        [
          [19, 1],
          [0, 1],
        ],
        [[0, 2]],
        [
          [50, 7],
          [51, 2],
        ],
        [
          [52, 2],
          [53, 8],
          [54, 8],
        ],
        [
          [55, 2],
          [56, 9],
        ],
        [[57, 10]],
        [[51, 2]],
        [[52, 2]],
        [[55, 2]],
        [[15, 2]],
      ],
      [
        [
          [58, 1],
          [59, 1],
          [60, 1],
          [61, 1],
          [62, 1],
          [63, 1],
          [64, 1],
          [65, 1],
          [66, 1],
          [67, 1],
          [68, 1],
          [69, 1],
        ],
        [[0, 1]],
      ],
      [[[33, 1]], [[0, 1]]],
      [
        [[10, 1]],
        [[22, 2]],
        [
          [70, 3],
          [30, 4],
        ],
        [[71, 5]],
        [
          [52, 6],
          [72, 7],
        ],
        [[0, 5]],
        [[70, 3]],
        [[52, 6]],
      ],
      [
        [[29, 1]],
        [[73, 2]],
        [[74, 3]],
        [[75, 4]],
        [
          [76, 5],
          [0, 4],
        ],
        [[0, 5]],
      ],
      [
        [[32, 1]],
        [[77, 2]],
        [
          [76, 3],
          [0, 2],
        ],
        [[0, 3]],
      ],
      [
        [
          [78, 1],
          [48, 1],
        ],
        [[0, 1]],
      ],
      [
        [
          [79, 1],
          [80, 1],
          [7, 2],
          [81, 1],
          [79, 1],
          [74, 1],
          [82, 1],
          [83, 3],
          [84, 1],
          [85, 1],
        ],
        [[0, 1]],
        [[74, 1]],
        [
          [7, 1],
          [0, 3],
        ],
      ],
      [
        [[86, 1]],
        [
          [87, 0],
          [0, 1],
        ],
      ],
      [
        [
          [88, 1],
          [89, 1],
          [90, 1],
          [91, 1],
          [92, 1],
          [93, 1],
          [94, 1],
          [95, 1],
        ],
        [[0, 1]],
      ],
      [[[34, 1]], [[0, 1]]],
      [[[13, 1]], [[0, 1]]],
      [
        [[96, 1]],
        [
          [94, 2],
          [91, 2],
        ],
        [[0, 2]],
      ],
      [
        [[35, 1]],
        [[97, 2]],
        [
          [2, 4],
          [30, 3],
        ],
        [
          [52, 5],
          [98, 6],
        ],
        [[0, 4]],
        [[2, 4]],
        [[52, 5]],
      ],
      [
        [[99, 1]],
        [
          [99, 1],
          [0, 1],
        ],
      ],
      [[[23, 1]], [[73, 2]], [[0, 2]]],
      [
        [[45, 1]],
        [
          [70, 2],
          [48, 3],
          [46, 4],
          [0, 1],
        ],
        [[45, 5]],
        [[0, 3]],
        [
          [45, 6],
          [0, 4],
        ],
        [
          [48, 3],
          [46, 7],
          [0, 5],
        ],
        [
          [46, 4],
          [0, 6],
        ],
        [
          [45, 8],
          [0, 7],
        ],
        [[70, 9]],
        [[45, 10]],
        [
          [46, 7],
          [0, 10],
        ],
      ],
      [
        [[97, 1]],
        [
          [100, 2],
          [0, 1],
        ],
        [[22, 3]],
        [[0, 3]],
      ],
      [
        [[101, 1]],
        [
          [46, 0],
          [0, 1],
        ],
      ],
      [
        [[22, 1]],
        [
          [102, 0],
          [0, 1],
        ],
      ],
      [[[22, 1]], [[0, 1]]],
      [
        [[72, 1]],
        [
          [2, 1],
          [103, 2],
        ],
        [[0, 2]],
      ],
      [
        [[104, 1]],
        [
          [45, 2],
          [0, 1],
        ],
        [
          [100, 3],
          [46, 3],
          [0, 2],
        ],
        [[45, 4]],
        [[0, 4]],
      ],
      [
        [[17, 1]],
        [[86, 2]],
        [
          [74, 3],
          [0, 2],
        ],
        [[45, 4]],
        [
          [46, 5],
          [0, 4],
        ],
        [[45, 6]],
        [[0, 6]],
      ],
      [
        [[105, 1]],
        [
          [106, 0],
          [0, 1],
        ],
      ],
      [
        [[72, 1]],
        [
          [107, 2],
          [47, 3],
          [0, 1],
        ],
        [
          [72, 4],
          [53, 4],
        ],
        [
          [72, 5],
          [53, 5],
        ],
        [[0, 4]],
        [
          [47, 3],
          [0, 5],
        ],
      ],
      [
        [[86, 1]],
        [
          [46, 2],
          [0, 1],
        ],
        [
          [86, 1],
          [0, 2],
        ],
      ],
      [
        [
          [37, 2],
          [26, 2],
          [6, 2],
          [108, 1],
        ],
        [[0, 1]],
        [[109, 1]],
      ],
      [
        [
          [2, 0],
          [103, 1],
          [110, 0],
        ],
        [[0, 1]],
      ],
      [
        [
          [111, 1],
          [112, 1],
          [113, 1],
          [114, 1],
          [115, 1],
        ],
        [[0, 1]],
      ],
      [
        [[29, 1]],
        [[73, 2]],
        [[74, 3]],
        [[72, 4]],
        [[70, 5]],
        [[71, 6]],
        [
          [116, 7],
          [0, 6],
        ],
        [[70, 8]],
        [[71, 9]],
        [[0, 9]],
      ],
      [
        [
          [30, 1],
          [22, 2],
        ],
        [[117, 3]],
        [[0, 2]],
        [[52, 2]],
      ],
      [
        [[118, 1]],
        [
          [46, 2],
          [0, 1],
        ],
        [
          [118, 1],
          [0, 2],
        ],
      ],
      [[[4, 1]], [[22, 2]], [[119, 3]], [[70, 4]], [[71, 5]], [[0, 5]]],
      [
        [[28, 1]],
        [[22, 2]],
        [
          [46, 1],
          [0, 2],
        ],
      ],
      [
        [[32, 1]],
        [[45, 2]],
        [[70, 3]],
        [[71, 4]],
        [
          [116, 5],
          [120, 1],
          [0, 4],
        ],
        [[70, 6]],
        [[71, 7]],
        [[0, 7]],
      ],
      [
        [[22, 1]],
        [
          [100, 2],
          [0, 1],
        ],
        [[22, 3]],
        [[0, 3]],
      ],
      [
        [[121, 1]],
        [
          [46, 2],
          [0, 1],
        ],
        [
          [121, 1],
          [0, 2],
        ],
      ],
      [
        [[31, 1]],
        [
          [97, 2],
          [102, 3],
        ],
        [[25, 4]],
        [
          [97, 2],
          [25, 4],
          [102, 3],
        ],
        [
          [122, 5],
          [42, 5],
          [30, 6],
        ],
        [[0, 5]],
        [[122, 7]],
        [[52, 5]],
      ],
      [[[25, 1]], [[123, 2]], [[0, 2]]],
      [
        [
          [124, 1],
          [125, 1],
        ],
        [[0, 1]],
      ],
      [
        [[11, 1]],
        [
          [70, 2],
          [126, 3],
        ],
        [[45, 4]],
        [[70, 2]],
        [[0, 4]],
      ],
      [
        [[29, 1]],
        [[73, 2]],
        [[74, 3]],
        [[127, 4]],
        [
          [128, 5],
          [0, 4],
        ],
        [[0, 5]],
      ],
      [
        [[32, 1]],
        [[77, 2]],
        [
          [128, 3],
          [0, 2],
        ],
        [[0, 3]],
      ],
      [
        [
          [129, 1],
          [130, 1],
        ],
        [[0, 1]],
      ],
      [
        [[45, 1]],
        [
          [129, 2],
          [46, 3],
          [0, 1],
        ],
        [[0, 2]],
        [
          [45, 4],
          [0, 3],
        ],
        [
          [46, 3],
          [0, 4],
        ],
      ],
      [
        [
          [7, 1],
          [131, 2],
        ],
        [[40, 2]],
        [[0, 2]],
      ],
      [
        [[11, 1]],
        [
          [70, 2],
          [126, 3],
        ],
        [[77, 4]],
        [[70, 2]],
        [[0, 4]],
      ],
      [
        [
          [132, 1],
          [75, 1],
        ],
        [[0, 1]],
      ],
      [
        [[133, 1]],
        [
          [134, 0],
          [0, 1],
        ],
      ],
      [
        [[30, 1]],
        [
          [52, 2],
          [126, 3],
        ],
        [[0, 2]],
        [[52, 2]],
      ],
      [[[24, 1]], [[0, 1]]],
      [
        [[135, 1]],
        [
          [44, 2],
          [136, 1],
          [0, 1],
        ],
        [[109, 3]],
        [[0, 3]],
      ],
      [
        [[12, 1]],
        [
          [45, 2],
          [137, 3],
          [0, 1],
        ],
        [
          [46, 4],
          [0, 2],
        ],
        [[45, 5]],
        [
          [45, 2],
          [0, 4],
        ],
        [
          [46, 6],
          [0, 5],
        ],
        [[45, 7]],
        [
          [46, 8],
          [0, 7],
        ],
        [
          [45, 7],
          [0, 8],
        ],
      ],
      [
        [[5, 1]],
        [
          [45, 2],
          [0, 1],
        ],
        [
          [46, 3],
          [0, 2],
        ],
        [[45, 4]],
        [
          [46, 5],
          [0, 4],
        ],
        [[45, 6]],
        [[0, 6]],
      ],
      [
        [[20, 1]],
        [
          [72, 2],
          [0, 1],
        ],
        [[0, 2]],
      ],
      [
        [[138, 1]],
        [
          [139, 0],
          [137, 0],
          [0, 1],
        ],
      ],
      [
        [[140, 1]],
        [
          [2, 2],
          [141, 3],
        ],
        [[0, 2]],
        [
          [140, 1],
          [2, 2],
        ],
      ],
      [
        [[70, 1]],
        [
          [45, 2],
          [0, 1],
        ],
        [[0, 2]],
      ],
      [
        [
          [142, 1],
          [143, 1],
          [144, 1],
          [145, 1],
          [146, 1],
          [147, 1],
          [148, 1],
          [149, 1],
          [150, 1],
          [151, 1],
        ],
        [[0, 1]],
      ],
      [
        [
          [1, 1],
          [3, 1],
        ],
        [[0, 1]],
      ],
      [
        [
          [45, 1],
          [70, 2],
          [102, 3],
        ],
        [
          [70, 2],
          [0, 1],
        ],
        [
          [45, 4],
          [152, 5],
          [0, 2],
        ],
        [[102, 6]],
        [
          [152, 5],
          [0, 4],
        ],
        [[0, 5]],
        [[102, 5]],
      ],
      [
        [[153, 1]],
        [
          [46, 2],
          [0, 1],
        ],
        [
          [153, 1],
          [0, 2],
        ],
      ],
      [
        [
          [1, 1],
          [2, 2],
        ],
        [[0, 1]],
        [[154, 3]],
        [[110, 4]],
        [
          [155, 1],
          [110, 4],
        ],
      ],
      [
        [[109, 1]],
        [
          [156, 0],
          [42, 0],
          [157, 0],
          [158, 0],
          [0, 1],
        ],
      ],
      [
        [
          [75, 1],
          [159, 2],
        ],
        [
          [32, 3],
          [0, 1],
        ],
        [[0, 2]],
        [[75, 4]],
        [[116, 5]],
        [[45, 2]],
      ],
      [
        [[45, 1]],
        [
          [46, 2],
          [0, 1],
        ],
        [
          [45, 1],
          [0, 2],
        ],
      ],
      [
        [[45, 1]],
        [
          [46, 0],
          [0, 1],
        ],
      ],
      [
        [[45, 1]],
        [
          [48, 2],
          [46, 3],
          [0, 1],
        ],
        [[0, 2]],
        [
          [45, 4],
          [0, 3],
        ],
        [
          [46, 3],
          [0, 4],
        ],
      ],
      [
        [[77, 1]],
        [
          [46, 2],
          [0, 1],
        ],
        [[77, 3]],
        [
          [46, 4],
          [0, 3],
        ],
        [
          [77, 3],
          [0, 4],
        ],
      ],
      [
        [
          [30, 1],
          [102, 2],
          [14, 3],
        ],
        [
          [52, 4],
          [98, 5],
        ],
        [[22, 4]],
        [[160, 6]],
        [[0, 4]],
        [[52, 4]],
        [[51, 4]],
      ],
      [
        [[16, 1]],
        [[70, 2]],
        [[71, 3]],
        [
          [161, 4],
          [162, 5],
        ],
        [[70, 6]],
        [[70, 7]],
        [[71, 8]],
        [[71, 9]],
        [
          [161, 4],
          [116, 10],
          [162, 5],
          [0, 8],
        ],
        [[0, 9]],
        [[70, 11]],
        [[71, 12]],
        [
          [162, 5],
          [0, 12],
        ],
      ],
      [
        [
          [42, 1],
          [118, 2],
          [44, 3],
        ],
        [[22, 4]],
        [
          [47, 5],
          [46, 6],
          [0, 2],
        ],
        [[22, 7]],
        [
          [46, 8],
          [0, 4],
        ],
        [[45, 9]],
        [
          [42, 1],
          [118, 2],
          [44, 3],
          [0, 6],
        ],
        [[0, 7]],
        [[44, 3]],
        [
          [46, 6],
          [0, 9],
        ],
      ],
      [
        [[18, 1]],
        [[45, 2]],
        [[70, 3]],
        [[71, 4]],
        [
          [116, 5],
          [0, 4],
        ],
        [[70, 6]],
        [[71, 7]],
        [[0, 7]],
      ],
      [
        [[45, 1]],
        [
          [100, 2],
          [0, 1],
        ],
        [[86, 3]],
        [[0, 3]],
      ],
      [
        [[36, 1]],
        [[163, 2]],
        [
          [70, 3],
          [46, 1],
        ],
        [[71, 4]],
        [[0, 4]],
      ],
      [
        [[164, 1]],
        [
          [165, 0],
          [0, 1],
        ],
      ],
      [
        [[27, 1]],
        [
          [72, 2],
          [0, 1],
        ],
        [[0, 2]],
      ],
      [[[53, 1]], [[0, 1]]],
    ],
    labels: [
      [0, "EMPTY"],
      [320, null],
      [4, null],
      [272, null],
      [1, "def"],
      [1, "raise"],
      [32, null],
      [1, "not"],
      [2, null],
      [26, null],
      [1, "class"],
      [1, "lambda"],
      [1, "print"],
      [1, "debugger"],
      [9, null],
      [25, null],
      [1, "try"],
      [1, "exec"],
      [1, "while"],
      [3, null],
      [1, "return"],
      [1, "assert"],
      [1, null],
      [1, "del"],
      [1, "pass"],
      [1, "import"],
      [15, null],
      [1, "yield"],
      [1, "global"],
      [1, "for"],
      [7, null],
      [1, "from"],
      [1, "if"],
      [1, "break"],
      [1, "continue"],
      [50, null],
      [1, "with"],
      [14, null],
      [319, null],
      [19, null],
      [309, null],
      [1, "and"],
      [16, null],
      [260, null],
      [36, null],
      [328, null],
      [12, null],
      [22, null],
      [267, null],
      [327, null],
      [308, null],
      [10, null],
      [8, null],
      [340, null],
      [331, null],
      [27, null],
      [279, null],
      [330, null],
      [46, null],
      [39, null],
      [41, null],
      [47, null],
      [42, null],
      [43, null],
      [37, null],
      [44, null],
      [49, null],
      [45, null],
      [38, null],
      [40, null],
      [11, null],
      [326, null],
      [329, null],
      [289, null],
      [1, "in"],
      [312, null],
      [269, null],
      [311, null],
      [268, null],
      [29, null],
      [21, null],
      [28, null],
      [30, null],
      [1, "is"],
      [31, null],
      [20, null],
      [287, null],
      [270, null],
      [334, null],
      [298, null],
      [293, null],
      [266, null],
      [338, null],
      [336, null],
      [296, null],
      [275, null],
      [277, null],
      [282, null],
      [259, null],
      [276, null],
      [1, "as"],
      [280, null],
      [23, null],
      [0, null],
      [1, "except"],
      [339, null],
      [18, null],
      [264, null],
      [315, null],
      [290, null],
      [323, null],
      [265, null],
      [273, null],
      [317, null],
      [318, null],
      [341, null],
      [1, "else"],
      [295, null],
      [294, null],
      [313, null],
      [1, "elif"],
      [299, null],
      [300, null],
      [281, null],
      [302, null],
      [301, null],
      [335, null],
      [332, null],
      [307, null],
      [305, null],
      [306, null],
      [271, null],
      [310, null],
      [258, null],
      [1, "or"],
      [263, null],
      [333, null],
      [35, null],
      [261, null],
      [34, null],
      [322, null],
      [13, null],
      [292, null],
      [278, null],
      [288, null],
      [314, null],
      [316, null],
      [262, null],
      [286, null],
      [297, null],
      [303, null],
      [274, null],
      [321, null],
      [324, null],
      [5, null],
      [6, null],
      [48, null],
      [17, null],
      [24, null],
      [304, null],
      [325, null],
      [285, null],
      [1, "finally"],
      [337, null],
      [257, null],
      [33, null],
    ],
    keywords: {
      and: 41,
      as: 100,
      assert: 21,
      break: 33,
      class: 10,
      continue: 34,
      debugger: 13,
      def: 4,
      del: 23,
      elif: 120,
      else: 116,
      except: 104,
      exec: 17,
      finally: 162,
      for: 29,
      from: 31,
      global: 28,
      if: 32,
      import: 25,
      in: 74,
      is: 83,
      lambda: 11,
      not: 7,
      or: 134,
      pass: 24,
      print: 12,
      raise: 5,
      return: 20,
      try: 16,
      while: 18,
      with: 36,
      yield: 27,
    },
    tokens: {
      0: 103,
      1: 22,
      2: 8,
      3: 19,
      4: 2,
      5: 154,
      6: 155,
      7: 30,
      8: 52,
      9: 14,
      10: 51,
      11: 70,
      12: 46,
      13: 141,
      14: 37,
      15: 26,
      16: 42,
      17: 157,
      18: 106,
      19: 39,
      20: 85,
      21: 80,
      22: 47,
      23: 102,
      24: 158,
      25: 15,
      26: 9,
      27: 55,
      28: 81,
      29: 79,
      30: 82,
      31: 84,
      32: 6,
      33: 165,
      34: 139,
      35: 137,
      36: 44,
      37: 64,
      38: 68,
      39: 59,
      40: 69,
      41: 60,
      42: 62,
      43: 63,
      44: 65,
      45: 67,
      46: 58,
      47: 61,
      48: 156,
      49: 66,
      50: 35,
    },
    start: 256,
  };
  function Parser(a, b) {
    this.filename = a;
    this.grammar = b;
    this.p_flags = 0;
    return this;
  }
  Parser.FUTURE_PRINT_FUNCTION = "print_function";
  Parser.FUTURE_UNICODE_LITERALS = "unicode_literals";
  Parser.FUTURE_DIVISION = "division";
  Parser.FUTURE_ABSOLUTE_IMPORT = "absolute_import";
  Parser.FUTURE_WITH_STATEMENT = "with_statement";
  Parser.FUTURE_NESTED_SCOPES = "nested_scopes";
  Parser.FUTURE_GENERATORS = "generators";
  Parser.CO_FUTURE_PRINT_FUNCTION = 65536;
  Parser.CO_FUTURE_UNICODE_LITERALS = 131072;
  Parser.CO_FUTURE_DIVISON = 8192;
  Parser.CO_FUTURE_ABSOLUTE_IMPORT = 16384;
  Parser.CO_FUTURE_WITH_STATEMENT = 32768;
  Parser.prototype.setup = function (a) {
    a = a || this.grammar.start;
    this.stack = [{ dfa: this.grammar.dfas[a], state: 0, node: { type: a, value: null, context: null, children: [] } }];
    this.used_names = {};
  };
  function findInDfa(a, b) {
    for (var c = a.length; c--; ) if (a[c][0] === b[0] && a[c][1] === b[1]) return !0;
    return !1;
  }
  Parser.prototype.addtoken = function (a, b, c) {
    var d,
      e = this.classify(a, b, c);
    a: for (;;) {
      var f = this.stack[this.stack.length - 1];
      var g = f.dfa[0];
      var h = g[f.state];
      for (d = 0; d < h.length; ++d) {
        var k = h[d][0];
        var l = h[d][1];
        var m = this.grammar.labels[k][0];
        if (e === k) {
          Sk.asserts.assert(256 > m);
          this.shift(a, b, l, c);
          for (c = l; 1 === g[c].length && 0 === g[c][0][0] && g[c][0][1] === c; ) {
            this.pop();
            if (0 === this.stack.length) return !0;
            f = this.stack[this.stack.length - 1];
            c = f.state;
            g = f.dfa[0];
          }
          return !1;
        }
        if (256 <= m && ((k = this.grammar.dfas[m]), (k = k[1]), k.hasOwnProperty(e))) {
          this.push(m, this.grammar.dfas[m], l, c);
          continue a;
        }
      }
      if (findInDfa(h, [0, f.state])) {
        if ((this.pop(), 0 === this.stack.length)) throw new Sk.builtin.SyntaxError("too much input", this.filename);
      } else throw ((g = c[0][0]), new Sk.builtin.SyntaxError("bad input", this.filename, g, c));
    }
  };
  Parser.prototype.classify = function (a, b, c) {
    if (a === Sk.Tokenizer.Tokens.T_NAME) {
      this.used_names[b] = !0;
      var d = this.grammar.keywords.hasOwnProperty(b) && this.grammar.keywords[b];
      "print" === b && (this.p_flags & Parser.CO_FUTURE_PRINT_FUNCTION || !0 === Sk.__future__.print_function) && (d = !1);
      if (d) return d;
    }
    d = this.grammar.tokens.hasOwnProperty(a) && this.grammar.tokens[a];
    if (!d) throw new Sk.builtin.SyntaxError("bad token", this.filename, c[0][0], c);
    return d;
  };
  Parser.prototype.shift = function (a, b, c, d) {
    var e = this.stack[this.stack.length - 1].dfa,
      f = this.stack[this.stack.length - 1].node;
    f.children.push({ type: a, value: b, lineno: d[0][0], col_offset: d[0][1], children: null });
    this.stack[this.stack.length - 1] = { dfa: e, state: c, node: f };
  };
  Parser.prototype.push = function (a, b, c, d) {
    a = { type: a, value: null, lineno: d[0][0], col_offset: d[0][1], children: [] };
    this.stack[this.stack.length - 1] = { dfa: this.stack[this.stack.length - 1].dfa, state: c, node: this.stack[this.stack.length - 1].node };
    this.stack.push({ dfa: b, state: 0, node: a });
  };
  Parser.prototype.pop = function () {
    var a = this.stack.pop().node;
    if (a)
      if (0 !== this.stack.length) {
        var b = this.stack[this.stack.length - 1].node;
        b.children.push(a);
      } else (this.rootnode = a), (this.rootnode.used_names = this.used_names);
  };
  function makeParser(a, b) {
    void 0 === b && (b = "file_input");
    var c = new Parser(a, Sk.ParseTables);
    "file_input" === b ? c.setup(Sk.ParseTables.sym.file_input) : Sk.asserts.fail("todo;");
    var d = Sk.Tokenizer.Tokens.T_COMMENT;
    var e = Sk.Tokenizer.Tokens.T_NL;
    var f = Sk.Tokenizer.Tokens.T_OP;
    var g = new Sk.Tokenizer(a, "single_input" === b, function (a, b, g, m, n) {
      if (a !== d && a !== e && (a === f && (a = Sk.OpMap[b]), c.addtoken(a, b, [g, m, n]))) return !0;
    });
    a = function (a) {
      if ((a = g.generateTokens(a))) {
        if ("done" !== a) throw new Sk.builtin.SyntaxError("incomplete input", this.filename);
        return c.rootnode;
      }
      return !1;
    }.bind(this);
    a.p_flags = c.p_flags;
    return a;
  }
  Sk.parse = function (a, b) {
    a = makeParser(a);
    "\n" !== b.substr(b.length - 1, 1) && (b += "\n");
    var c = b.split("\n");
    for (b = 0; b < c.length; ++b) var d = a(c[b] + (b === c.length - 1 ? "" : "\n"));
    return { cst: d, flags: a.p_flags };
  };
  Sk.parseTreeDump = function (a, b) {
    var c;
    b = b || "";
    var d = "" + b;
    if (256 <= a.type) for (d += Sk.ParseTables.number2symbol[a.type] + "\n", c = 0; c < a.children.length; ++c) d += Sk.parseTreeDump(a.children[c], b + "  ");
    else d += Sk.Tokenizer.tokenNames[a.type] + ": " + new Sk.builtin.str(a.value).$r().v + "\n";
    return d;
  };
  Sk.exportSymbol("Parser", Parser);
  Sk.exportSymbol("Sk.parse", Sk.parse);
  Sk.exportSymbol("Sk.parseTreeDump", Sk.parseTreeDump);
  Sk.astnodes = {};
  Sk.astnodes.Load = function () {};
  Sk.astnodes.Store = function () {};
  Sk.astnodes.Del = function () {};
  Sk.astnodes.AugLoad = function () {};
  Sk.astnodes.AugStore = function () {};
  Sk.astnodes.Param = function () {};
  Sk.astnodes.And = function () {};
  Sk.astnodes.Or = function () {};
  Sk.astnodes.Add = function () {};
  Sk.astnodes.Sub = function () {};
  Sk.astnodes.Mult = function () {};
  Sk.astnodes.Div = function () {};
  Sk.astnodes.Mod = function () {};
  Sk.astnodes.Pow = function () {};
  Sk.astnodes.LShift = function () {};
  Sk.astnodes.RShift = function () {};
  Sk.astnodes.BitOr = function () {};
  Sk.astnodes.BitXor = function () {};
  Sk.astnodes.BitAnd = function () {};
  Sk.astnodes.FloorDiv = function () {};
  Sk.astnodes.Invert = function () {};
  Sk.astnodes.Not = function () {};
  Sk.astnodes.UAdd = function () {};
  Sk.astnodes.USub = function () {};
  Sk.astnodes.Eq = function () {};
  Sk.astnodes.NotEq = function () {};
  Sk.astnodes.Lt = function () {};
  Sk.astnodes.LtE = function () {};
  Sk.astnodes.Gt = function () {};
  Sk.astnodes.GtE = function () {};
  Sk.astnodes.Is = function () {};
  Sk.astnodes.IsNot = function () {};
  Sk.astnodes.In_ = function () {};
  Sk.astnodes.NotIn = function () {};
  Sk.astnodes.Module = function (a) {
    this.body = a;
    return this;
  };
  Sk.astnodes.Interactive = function (a) {
    this.body = a;
    return this;
  };
  Sk.astnodes.Expression = function (a) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.body = a;
    return this;
  };
  Sk.astnodes.Suite = function (a) {
    this.body = a;
    return this;
  };
  Sk.astnodes.FunctionDef = function (a, b, c, d, e, f) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    Sk.asserts.assert(null !== b && void 0 !== b);
    this.name = a;
    this.args = b;
    this.body = c;
    this.decorator_list = d;
    this.lineno = e;
    this.col_offset = f;
    return this;
  };
  Sk.astnodes.ClassDef = function (a, b, c, d, e, f) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.name = a;
    this.bases = b;
    this.body = c;
    this.decorator_list = d;
    this.lineno = e;
    this.col_offset = f;
    return this;
  };
  Sk.astnodes.Return_ = function (a, b, c) {
    this.value = a;
    this.lineno = b;
    this.col_offset = c;
    return this;
  };
  Sk.astnodes.Delete_ = function (a, b, c) {
    this.targets = a;
    this.lineno = b;
    this.col_offset = c;
    return this;
  };
  Sk.astnodes.Assign = function (a, b, c, d) {
    Sk.asserts.assert(null !== b && void 0 !== b);
    this.targets = a;
    this.value = b;
    this.lineno = c;
    this.col_offset = d;
    return this;
  };
  Sk.astnodes.AugAssign = function (a, b, c, d, e) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    Sk.asserts.assert(null !== b && void 0 !== b);
    Sk.asserts.assert(null !== c && void 0 !== c);
    this.target = a;
    this.op = b;
    this.value = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.Print = function (a, b, c, d, e) {
    this.dest = a;
    this.values = b;
    this.nl = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.For_ = function (a, b, c, d, e, f) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    Sk.asserts.assert(null !== b && void 0 !== b);
    this.target = a;
    this.iter = b;
    this.body = c;
    this.orelse = d;
    this.lineno = e;
    this.col_offset = f;
    return this;
  };
  Sk.astnodes.While_ = function (a, b, c, d, e) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.test = a;
    this.body = b;
    this.orelse = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.If_ = function (a, b, c, d, e) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.test = a;
    this.body = b;
    this.orelse = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.With_ = function (a, b, c, d, e) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.context_expr = a;
    this.optional_vars = b;
    this.body = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.Raise = function (a, b, c, d, e) {
    this.type = a;
    this.inst = b;
    this.tback = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.TryExcept = function (a, b, c, d, e) {
    this.body = a;
    this.handlers = b;
    this.orelse = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.TryFinally = function (a, b, c, d) {
    this.body = a;
    this.finalbody = b;
    this.lineno = c;
    this.col_offset = d;
    return this;
  };
  Sk.astnodes.Assert = function (a, b, c, d) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.test = a;
    this.msg = b;
    this.lineno = c;
    this.col_offset = d;
    return this;
  };
  Sk.astnodes.Import_ = function (a, b, c) {
    this.names = a;
    this.lineno = b;
    this.col_offset = c;
    return this;
  };
  Sk.astnodes.ImportFrom = function (a, b, c, d, e) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.module = a;
    this.names = b;
    this.level = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.Exec = function (a, b, c, d, e) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.body = a;
    this.globals = b;
    this.locals = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.Global = function (a, b, c) {
    this.names = a;
    this.lineno = b;
    this.col_offset = c;
    return this;
  };
  Sk.astnodes.Expr = function (a, b, c) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.value = a;
    this.lineno = b;
    this.col_offset = c;
    return this;
  };
  Sk.astnodes.Pass = function (a, b) {
    this.lineno = a;
    this.col_offset = b;
    return this;
  };
  Sk.astnodes.Break_ = function (a, b) {
    this.lineno = a;
    this.col_offset = b;
    return this;
  };
  Sk.astnodes.Continue_ = function (a, b) {
    this.lineno = a;
    this.col_offset = b;
    return this;
  };
  Sk.astnodes.Debugger_ = function (a, b) {
    this.lineno = a;
    this.col_offset = b;
    return this;
  };
  Sk.astnodes.BoolOp = function (a, b, c, d) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.op = a;
    this.values = b;
    this.lineno = c;
    this.col_offset = d;
    return this;
  };
  Sk.astnodes.BinOp = function (a, b, c, d, e) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    Sk.asserts.assert(null !== b && void 0 !== b);
    Sk.asserts.assert(null !== c && void 0 !== c);
    this.left = a;
    this.op = b;
    this.right = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.UnaryOp = function (a, b, c, d) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    Sk.asserts.assert(null !== b && void 0 !== b);
    this.op = a;
    this.operand = b;
    this.lineno = c;
    this.col_offset = d;
    return this;
  };
  Sk.astnodes.Lambda = function (a, b, c, d) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    Sk.asserts.assert(null !== b && void 0 !== b);
    this.args = a;
    this.body = b;
    this.lineno = c;
    this.col_offset = d;
    return this;
  };
  Sk.astnodes.IfExp = function (a, b, c, d, e) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    Sk.asserts.assert(null !== b && void 0 !== b);
    Sk.asserts.assert(null !== c && void 0 !== c);
    this.test = a;
    this.body = b;
    this.orelse = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.Dict = function (a, b, c, d) {
    this.keys = a;
    this.values = b;
    this.lineno = c;
    this.col_offset = d;
    return this;
  };
  Sk.astnodes.Set = function (a, b, c) {
    this.elts = a;
    this.lineno = b;
    this.col_offset = c;
    return this;
  };
  Sk.astnodes.ListComp = function (a, b, c, d) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.elt = a;
    this.generators = b;
    this.lineno = c;
    this.col_offset = d;
    return this;
  };
  Sk.astnodes.SetComp = function (a, b, c, d) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.elt = a;
    this.generators = b;
    this.lineno = c;
    this.col_offset = d;
    return this;
  };
  Sk.astnodes.DictComp = function (a, b, c, d, e) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    Sk.asserts.assert(null !== b && void 0 !== b);
    this.key = a;
    this.value = b;
    this.generators = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.GeneratorExp = function (a, b, c, d) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.elt = a;
    this.generators = b;
    this.lineno = c;
    this.col_offset = d;
    return this;
  };
  Sk.astnodes.Yield = function (a, b, c) {
    this.value = a;
    this.lineno = b;
    this.col_offset = c;
    return this;
  };
  Sk.astnodes.Compare = function (a, b, c, d, e) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.left = a;
    this.ops = b;
    this.comparators = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.Call = function (a, b, c, d, e, f, g) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.func = a;
    this.args = b;
    this.keywords = c;
    this.starargs = d;
    this.kwargs = e;
    this.lineno = f;
    this.col_offset = g;
    return this;
  };
  Sk.astnodes.Repr = function (a, b, c) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.value = a;
    this.lineno = b;
    this.col_offset = c;
    return this;
  };
  Sk.astnodes.Num = function (a, b, c) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.n = a;
    this.lineno = b;
    this.col_offset = c;
    return this;
  };
  Sk.astnodes.Str = function (a, b, c) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.s = a;
    this.lineno = b;
    this.col_offset = c;
    return this;
  };
  Sk.astnodes.Attribute = function (a, b, c, d, e) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    Sk.asserts.assert(null !== b && void 0 !== b);
    Sk.asserts.assert(null !== c && void 0 !== c);
    this.value = a;
    this.attr = b;
    this.ctx = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.Subscript = function (a, b, c, d, e) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    Sk.asserts.assert(null !== b && void 0 !== b);
    Sk.asserts.assert(null !== c && void 0 !== c);
    this.value = a;
    this.slice = b;
    this.ctx = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.Name = function (a, b, c, d) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    Sk.asserts.assert(null !== b && void 0 !== b);
    this.id = a;
    this.ctx = b;
    this.lineno = c;
    this.col_offset = d;
    return this;
  };
  Sk.astnodes.List = function (a, b, c, d) {
    Sk.asserts.assert(null !== b && void 0 !== b);
    this.elts = a;
    this.ctx = b;
    this.lineno = c;
    this.col_offset = d;
    return this;
  };
  Sk.astnodes.Tuple = function (a, b, c, d) {
    Sk.asserts.assert(null !== b && void 0 !== b);
    this.elts = a;
    this.ctx = b;
    this.lineno = c;
    this.col_offset = d;
    return this;
  };
  Sk.astnodes.Ellipsis = function () {
    return this;
  };
  Sk.astnodes.Slice = function (a, b, c) {
    this.lower = a;
    this.upper = b;
    this.step = c;
    return this;
  };
  Sk.astnodes.ExtSlice = function (a) {
    this.dims = a;
    return this;
  };
  Sk.astnodes.Index = function (a) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.value = a;
    return this;
  };
  Sk.astnodes.comprehension = function (a, b, c) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    Sk.asserts.assert(null !== b && void 0 !== b);
    this.target = a;
    this.iter = b;
    this.ifs = c;
    return this;
  };
  Sk.astnodes.ExceptHandler = function (a, b, c, d, e) {
    this.type = a;
    this.name = b;
    this.body = c;
    this.lineno = d;
    this.col_offset = e;
    return this;
  };
  Sk.astnodes.arguments_ = function (a, b, c, d) {
    this.args = a;
    this.vararg = b;
    this.kwarg = c;
    this.defaults = d;
    return this;
  };
  Sk.astnodes.keyword = function (a, b) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    Sk.asserts.assert(null !== b && void 0 !== b);
    this.arg = a;
    this.value = b;
    return this;
  };
  Sk.astnodes.alias = function (a, b) {
    Sk.asserts.assert(null !== a && void 0 !== a);
    this.name = a;
    this.asname = b;
    return this;
  };
  Sk.astnodes.Module.prototype._astname = "Module";
  Sk.astnodes.Module.prototype._fields = [
    "body",
    function (a) {
      return a.body;
    },
  ];
  Sk.astnodes.Interactive.prototype._astname = "Interactive";
  Sk.astnodes.Interactive.prototype._fields = [
    "body",
    function (a) {
      return a.body;
    },
  ];
  Sk.astnodes.Expression.prototype._astname = "Expression";
  Sk.astnodes.Expression.prototype._fields = [
    "body",
    function (a) {
      return a.body;
    },
  ];
  Sk.astnodes.Suite.prototype._astname = "Suite";
  Sk.astnodes.Suite.prototype._fields = [
    "body",
    function (a) {
      return a.body;
    },
  ];
  Sk.astnodes.FunctionDef.prototype._astname = "FunctionDef";
  Sk.astnodes.FunctionDef.prototype._fields = [
    "name",
    function (a) {
      return a.name;
    },
    "args",
    function (a) {
      return a.args;
    },
    "body",
    function (a) {
      return a.body;
    },
    "decorator_list",
    function (a) {
      return a.decorator_list;
    },
  ];
  Sk.astnodes.ClassDef.prototype._astname = "ClassDef";
  Sk.astnodes.ClassDef.prototype._fields = [
    "name",
    function (a) {
      return a.name;
    },
    "bases",
    function (a) {
      return a.bases;
    },
    "body",
    function (a) {
      return a.body;
    },
    "decorator_list",
    function (a) {
      return a.decorator_list;
    },
  ];
  Sk.astnodes.Return_.prototype._astname = "Return";
  Sk.astnodes.Return_.prototype._fields = [
    "value",
    function (a) {
      return a.value;
    },
  ];
  Sk.astnodes.Delete_.prototype._astname = "Delete";
  Sk.astnodes.Delete_.prototype._fields = [
    "targets",
    function (a) {
      return a.targets;
    },
  ];
  Sk.astnodes.Assign.prototype._astname = "Assign";
  Sk.astnodes.Assign.prototype._fields = [
    "targets",
    function (a) {
      return a.targets;
    },
    "value",
    function (a) {
      return a.value;
    },
  ];
  Sk.astnodes.AugAssign.prototype._astname = "AugAssign";
  Sk.astnodes.AugAssign.prototype._fields = [
    "target",
    function (a) {
      return a.target;
    },
    "op",
    function (a) {
      return a.op;
    },
    "value",
    function (a) {
      return a.value;
    },
  ];
  Sk.astnodes.Print.prototype._astname = "Print";
  Sk.astnodes.Print.prototype._fields = [
    "dest",
    function (a) {
      return a.dest;
    },
    "values",
    function (a) {
      return a.values;
    },
    "nl",
    function (a) {
      return a.nl;
    },
  ];
  Sk.astnodes.For_.prototype._astname = "For";
  Sk.astnodes.For_.prototype._fields = [
    "target",
    function (a) {
      return a.target;
    },
    "iter",
    function (a) {
      return a.iter;
    },
    "body",
    function (a) {
      return a.body;
    },
    "orelse",
    function (a) {
      return a.orelse;
    },
  ];
  Sk.astnodes.While_.prototype._astname = "While";
  Sk.astnodes.While_.prototype._fields = [
    "test",
    function (a) {
      return a.test;
    },
    "body",
    function (a) {
      return a.body;
    },
    "orelse",
    function (a) {
      return a.orelse;
    },
  ];
  Sk.astnodes.If_.prototype._astname = "If";
  Sk.astnodes.If_.prototype._fields = [
    "test",
    function (a) {
      return a.test;
    },
    "body",
    function (a) {
      return a.body;
    },
    "orelse",
    function (a) {
      return a.orelse;
    },
  ];
  Sk.astnodes.With_.prototype._astname = "With";
  Sk.astnodes.With_.prototype._fields = [
    "context_expr",
    function (a) {
      return a.context_expr;
    },
    "optional_vars",
    function (a) {
      return a.optional_vars;
    },
    "body",
    function (a) {
      return a.body;
    },
  ];
  Sk.astnodes.Raise.prototype._astname = "Raise";
  Sk.astnodes.Raise.prototype._fields = [
    "type",
    function (a) {
      return a.type;
    },
    "inst",
    function (a) {
      return a.inst;
    },
    "tback",
    function (a) {
      return a.tback;
    },
  ];
  Sk.astnodes.TryExcept.prototype._astname = "TryExcept";
  Sk.astnodes.TryExcept.prototype._fields = [
    "body",
    function (a) {
      return a.body;
    },
    "handlers",
    function (a) {
      return a.handlers;
    },
    "orelse",
    function (a) {
      return a.orelse;
    },
  ];
  Sk.astnodes.TryFinally.prototype._astname = "TryFinally";
  Sk.astnodes.TryFinally.prototype._fields = [
    "body",
    function (a) {
      return a.body;
    },
    "finalbody",
    function (a) {
      return a.finalbody;
    },
  ];
  Sk.astnodes.Assert.prototype._astname = "Assert";
  Sk.astnodes.Assert.prototype._fields = [
    "test",
    function (a) {
      return a.test;
    },
    "msg",
    function (a) {
      return a.msg;
    },
  ];
  Sk.astnodes.Import_.prototype._astname = "Import";
  Sk.astnodes.Import_.prototype._fields = [
    "names",
    function (a) {
      return a.names;
    },
  ];
  Sk.astnodes.ImportFrom.prototype._astname = "ImportFrom";
  Sk.astnodes.ImportFrom.prototype._fields = [
    "module",
    function (a) {
      return a.module;
    },
    "names",
    function (a) {
      return a.names;
    },
    "level",
    function (a) {
      return a.level;
    },
  ];
  Sk.astnodes.Exec.prototype._astname = "Exec";
  Sk.astnodes.Exec.prototype._fields = [
    "body",
    function (a) {
      return a.body;
    },
    "globals",
    function (a) {
      return a.globals;
    },
    "locals",
    function (a) {
      return a.locals;
    },
  ];
  Sk.astnodes.Global.prototype._astname = "Global";
  Sk.astnodes.Global.prototype._fields = [
    "names",
    function (a) {
      return a.names;
    },
  ];
  Sk.astnodes.Expr.prototype._astname = "Expr";
  Sk.astnodes.Expr.prototype._fields = [
    "value",
    function (a) {
      return a.value;
    },
  ];
  Sk.astnodes.Pass.prototype._astname = "Pass";
  Sk.astnodes.Pass.prototype._fields = [];
  Sk.astnodes.Break_.prototype._astname = "Break";
  Sk.astnodes.Break_.prototype._fields = [];
  Sk.astnodes.Continue_.prototype._astname = "Continue";
  Sk.astnodes.Continue_.prototype._fields = [];
  Sk.astnodes.Debugger_.prototype._astname = "Debugger";
  Sk.astnodes.Debugger_.prototype._fields = [];
  Sk.astnodes.BoolOp.prototype._astname = "BoolOp";
  Sk.astnodes.BoolOp.prototype._fields = [
    "op",
    function (a) {
      return a.op;
    },
    "values",
    function (a) {
      return a.values;
    },
  ];
  Sk.astnodes.BinOp.prototype._astname = "BinOp";
  Sk.astnodes.BinOp.prototype._fields = [
    "left",
    function (a) {
      return a.left;
    },
    "op",
    function (a) {
      return a.op;
    },
    "right",
    function (a) {
      return a.right;
    },
  ];
  Sk.astnodes.UnaryOp.prototype._astname = "UnaryOp";
  Sk.astnodes.UnaryOp.prototype._fields = [
    "op",
    function (a) {
      return a.op;
    },
    "operand",
    function (a) {
      return a.operand;
    },
  ];
  Sk.astnodes.Lambda.prototype._astname = "Lambda";
  Sk.astnodes.Lambda.prototype._fields = [
    "args",
    function (a) {
      return a.args;
    },
    "body",
    function (a) {
      return a.body;
    },
  ];
  Sk.astnodes.IfExp.prototype._astname = "IfExp";
  Sk.astnodes.IfExp.prototype._fields = [
    "test",
    function (a) {
      return a.test;
    },
    "body",
    function (a) {
      return a.body;
    },
    "orelse",
    function (a) {
      return a.orelse;
    },
  ];
  Sk.astnodes.Dict.prototype._astname = "Dict";
  Sk.astnodes.Dict.prototype._fields = [
    "keys",
    function (a) {
      return a.keys;
    },
    "values",
    function (a) {
      return a.values;
    },
  ];
  Sk.astnodes.Set.prototype._astname = "Set";
  Sk.astnodes.Set.prototype._fields = [
    "elts",
    function (a) {
      return a.elts;
    },
  ];
  Sk.astnodes.ListComp.prototype._astname = "ListComp";
  Sk.astnodes.ListComp.prototype._fields = [
    "elt",
    function (a) {
      return a.elt;
    },
    "generators",
    function (a) {
      return a.generators;
    },
  ];
  Sk.astnodes.SetComp.prototype._astname = "SetComp";
  Sk.astnodes.SetComp.prototype._fields = [
    "elt",
    function (a) {
      return a.elt;
    },
    "generators",
    function (a) {
      return a.generators;
    },
  ];
  Sk.astnodes.DictComp.prototype._astname = "DictComp";
  Sk.astnodes.DictComp.prototype._fields = [
    "key",
    function (a) {
      return a.key;
    },
    "value",
    function (a) {
      return a.value;
    },
    "generators",
    function (a) {
      return a.generators;
    },
  ];
  Sk.astnodes.GeneratorExp.prototype._astname = "GeneratorExp";
  Sk.astnodes.GeneratorExp.prototype._fields = [
    "elt",
    function (a) {
      return a.elt;
    },
    "generators",
    function (a) {
      return a.generators;
    },
  ];
  Sk.astnodes.Yield.prototype._astname = "Yield";
  Sk.astnodes.Yield.prototype._fields = [
    "value",
    function (a) {
      return a.value;
    },
  ];
  Sk.astnodes.Compare.prototype._astname = "Compare";
  Sk.astnodes.Compare.prototype._fields = [
    "left",
    function (a) {
      return a.left;
    },
    "ops",
    function (a) {
      return a.ops;
    },
    "comparators",
    function (a) {
      return a.comparators;
    },
  ];
  Sk.astnodes.Call.prototype._astname = "Call";
  Sk.astnodes.Call.prototype._fields = [
    "func",
    function (a) {
      return a.func;
    },
    "args",
    function (a) {
      return a.args;
    },
    "keywords",
    function (a) {
      return a.keywords;
    },
    "starargs",
    function (a) {
      return a.starargs;
    },
    "kwargs",
    function (a) {
      return a.kwargs;
    },
  ];
  Sk.astnodes.Repr.prototype._astname = "Repr";
  Sk.astnodes.Repr.prototype._fields = [
    "value",
    function (a) {
      return a.value;
    },
  ];
  Sk.astnodes.Num.prototype._astname = "Num";
  Sk.astnodes.Num.prototype._fields = [
    "n",
    function (a) {
      return a.n;
    },
  ];
  Sk.astnodes.Str.prototype._astname = "Str";
  Sk.astnodes.Str.prototype._fields = [
    "s",
    function (a) {
      return a.s;
    },
  ];
  Sk.astnodes.Attribute.prototype._astname = "Attribute";
  Sk.astnodes.Attribute.prototype._fields = [
    "value",
    function (a) {
      return a.value;
    },
    "attr",
    function (a) {
      return a.attr;
    },
    "ctx",
    function (a) {
      return a.ctx;
    },
  ];
  Sk.astnodes.Subscript.prototype._astname = "Subscript";
  Sk.astnodes.Subscript.prototype._fields = [
    "value",
    function (a) {
      return a.value;
    },
    "slice",
    function (a) {
      return a.slice;
    },
    "ctx",
    function (a) {
      return a.ctx;
    },
  ];
  Sk.astnodes.Name.prototype._astname = "Name";
  Sk.astnodes.Name.prototype._fields = [
    "id",
    function (a) {
      return a.id;
    },
    "ctx",
    function (a) {
      return a.ctx;
    },
  ];
  Sk.astnodes.List.prototype._astname = "List";
  Sk.astnodes.List.prototype._fields = [
    "elts",
    function (a) {
      return a.elts;
    },
    "ctx",
    function (a) {
      return a.ctx;
    },
  ];
  Sk.astnodes.Tuple.prototype._astname = "Tuple";
  Sk.astnodes.Tuple.prototype._fields = [
    "elts",
    function (a) {
      return a.elts;
    },
    "ctx",
    function (a) {
      return a.ctx;
    },
  ];
  Sk.astnodes.Load.prototype._astname = "Load";
  Sk.astnodes.Load.prototype._isenum = !0;
  Sk.astnodes.Store.prototype._astname = "Store";
  Sk.astnodes.Store.prototype._isenum = !0;
  Sk.astnodes.Del.prototype._astname = "Del";
  Sk.astnodes.Del.prototype._isenum = !0;
  Sk.astnodes.AugLoad.prototype._astname = "AugLoad";
  Sk.astnodes.AugLoad.prototype._isenum = !0;
  Sk.astnodes.AugStore.prototype._astname = "AugStore";
  Sk.astnodes.AugStore.prototype._isenum = !0;
  Sk.astnodes.Param.prototype._astname = "Param";
  Sk.astnodes.Param.prototype._isenum = !0;
  Sk.astnodes.Ellipsis.prototype._astname = "Ellipsis";
  Sk.astnodes.Ellipsis.prototype._fields = [];
  Sk.astnodes.Slice.prototype._astname = "Slice";
  Sk.astnodes.Slice.prototype._fields = [
    "lower",
    function (a) {
      return a.lower;
    },
    "upper",
    function (a) {
      return a.upper;
    },
    "step",
    function (a) {
      return a.step;
    },
  ];
  Sk.astnodes.ExtSlice.prototype._astname = "ExtSlice";
  Sk.astnodes.ExtSlice.prototype._fields = [
    "dims",
    function (a) {
      return a.dims;
    },
  ];
  Sk.astnodes.Index.prototype._astname = "Index";
  Sk.astnodes.Index.prototype._fields = [
    "value",
    function (a) {
      return a.value;
    },
  ];
  Sk.astnodes.And.prototype._astname = "And";
  Sk.astnodes.And.prototype._isenum = !0;
  Sk.astnodes.Or.prototype._astname = "Or";
  Sk.astnodes.Or.prototype._isenum = !0;
  Sk.astnodes.Add.prototype._astname = "Add";
  Sk.astnodes.Add.prototype._isenum = !0;
  Sk.astnodes.Sub.prototype._astname = "Sub";
  Sk.astnodes.Sub.prototype._isenum = !0;
  Sk.astnodes.Mult.prototype._astname = "Mult";
  Sk.astnodes.Mult.prototype._isenum = !0;
  Sk.astnodes.Div.prototype._astname = "Div";
  Sk.astnodes.Div.prototype._isenum = !0;
  Sk.astnodes.Mod.prototype._astname = "Mod";
  Sk.astnodes.Mod.prototype._isenum = !0;
  Sk.astnodes.Pow.prototype._astname = "Pow";
  Sk.astnodes.Pow.prototype._isenum = !0;
  Sk.astnodes.LShift.prototype._astname = "LShift";
  Sk.astnodes.LShift.prototype._isenum = !0;
  Sk.astnodes.RShift.prototype._astname = "RShift";
  Sk.astnodes.RShift.prototype._isenum = !0;
  Sk.astnodes.BitOr.prototype._astname = "BitOr";
  Sk.astnodes.BitOr.prototype._isenum = !0;
  Sk.astnodes.BitXor.prototype._astname = "BitXor";
  Sk.astnodes.BitXor.prototype._isenum = !0;
  Sk.astnodes.BitAnd.prototype._astname = "BitAnd";
  Sk.astnodes.BitAnd.prototype._isenum = !0;
  Sk.astnodes.FloorDiv.prototype._astname = "FloorDiv";
  Sk.astnodes.FloorDiv.prototype._isenum = !0;
  Sk.astnodes.Invert.prototype._astname = "Invert";
  Sk.astnodes.Invert.prototype._isenum = !0;
  Sk.astnodes.Not.prototype._astname = "Not";
  Sk.astnodes.Not.prototype._isenum = !0;
  Sk.astnodes.UAdd.prototype._astname = "UAdd";
  Sk.astnodes.UAdd.prototype._isenum = !0;
  Sk.astnodes.USub.prototype._astname = "USub";
  Sk.astnodes.USub.prototype._isenum = !0;
  Sk.astnodes.Eq.prototype._astname = "Eq";
  Sk.astnodes.Eq.prototype._isenum = !0;
  Sk.astnodes.NotEq.prototype._astname = "NotEq";
  Sk.astnodes.NotEq.prototype._isenum = !0;
  Sk.astnodes.Lt.prototype._astname = "Lt";
  Sk.astnodes.Lt.prototype._isenum = !0;
  Sk.astnodes.LtE.prototype._astname = "LtE";
  Sk.astnodes.LtE.prototype._isenum = !0;
  Sk.astnodes.Gt.prototype._astname = "Gt";
  Sk.astnodes.Gt.prototype._isenum = !0;
  Sk.astnodes.GtE.prototype._astname = "GtE";
  Sk.astnodes.GtE.prototype._isenum = !0;
  Sk.astnodes.Is.prototype._astname = "Is";
  Sk.astnodes.Is.prototype._isenum = !0;
  Sk.astnodes.IsNot.prototype._astname = "IsNot";
  Sk.astnodes.IsNot.prototype._isenum = !0;
  Sk.astnodes.In_.prototype._astname = "In";
  Sk.astnodes.In_.prototype._isenum = !0;
  Sk.astnodes.NotIn.prototype._astname = "NotIn";
  Sk.astnodes.NotIn.prototype._isenum = !0;
  Sk.astnodes.comprehension.prototype._astname = "comprehension";
  Sk.astnodes.comprehension.prototype._fields = [
    "target",
    function (a) {
      return a.target;
    },
    "iter",
    function (a) {
      return a.iter;
    },
    "ifs",
    function (a) {
      return a.ifs;
    },
  ];
  Sk.astnodes.ExceptHandler.prototype._astname = "ExceptHandler";
  Sk.astnodes.ExceptHandler.prototype._fields = [
    "type",
    function (a) {
      return a.type;
    },
    "name",
    function (a) {
      return a.name;
    },
    "body",
    function (a) {
      return a.body;
    },
  ];
  Sk.astnodes.arguments_.prototype._astname = "arguments";
  Sk.astnodes.arguments_.prototype._fields = [
    "args",
    function (a) {
      return a.args;
    },
    "vararg",
    function (a) {
      return a.vararg;
    },
    "kwarg",
    function (a) {
      return a.kwarg;
    },
    "defaults",
    function (a) {
      return a.defaults;
    },
  ];
  Sk.astnodes.keyword.prototype._astname = "keyword";
  Sk.astnodes.keyword.prototype._fields = [
    "arg",
    function (a) {
      return a.arg;
    },
    "value",
    function (a) {
      return a.value;
    },
  ];
  Sk.astnodes.alias.prototype._astname = "alias";
  Sk.astnodes.alias.prototype._fields = [
    "name",
    function (a) {
      return a.name;
    },
    "asname",
    function (a) {
      return a.asname;
    },
  ];
  Sk.exportSymbol("Sk.astnodes", Sk.astnodes);
  var SYM = Sk.ParseTables.sym,
    TOK = Sk.Tokenizer.Tokens,
    COMP_GENEXP = 0,
    COMP_SETCOMP = 1;
  function Compiling(a, b, c) {
    this.c_encoding = a;
    this.c_filename = b;
    this.c_flags = c || 0;
  }
  function NCH(a) {
    Sk.asserts.assert(void 0 !== a);
    return null === a.children ? 0 : a.children.length;
  }
  function CHILD(a, b) {
    Sk.asserts.assert(void 0 !== a);
    Sk.asserts.assert(void 0 !== b);
    return a.children[b];
  }
  function REQ(a, b) {
    Sk.asserts.assert(a.type === b, "node wasn't expected type");
  }
  function strobj(a) {
    Sk.asserts.assert("string" === typeof a, "expecting string, got " + typeof a);
    return new Sk.builtin.str(a);
  }
  function numStmts(a) {
    var b, c;
    switch (a.type) {
      case SYM.single_input:
        if (CHILD(a, 0).type === TOK.T_NEWLINE) break;
        else return numStmts(CHILD(a, 0));
      case SYM.file_input:
        for (b = c = 0; b < NCH(a); ++b) {
          var d = CHILD(a, b);
          d.type === SYM.stmt && (c += numStmts(d));
        }
        return c;
      case SYM.stmt:
        return numStmts(CHILD(a, 0));
      case SYM.compound_stmt:
        return 1;
      case SYM.simple_stmt:
        return Math.floor(NCH(a) / 2);
      case SYM.suite:
        if (1 === NCH(a)) return numStmts(CHILD(a, 0));
        c = 0;
        for (b = 2; b < NCH(a) - 1; ++b) c += numStmts(CHILD(a, b));
        return c;
      default:
        Sk.asserts.fail("Non-statement found");
    }
    return 0;
  }
  function forbiddenCheck(a, b, c, d) {
    if ("None" === c) throw new Sk.builtin.SyntaxError("assignment to None", a.c_filename, d);
    if ("True" === c || "False" === c) throw new Sk.builtin.SyntaxError("assignment to True or False is forbidden", a.c_filename, d);
  }
  function setContext(a, b, c, d) {
    var e;
    Sk.asserts.assert(c !== Sk.astnodes.AugStore && c !== Sk.astnodes.AugLoad);
    var f = (e = null);
    switch (b.constructor) {
      case Sk.astnodes.Attribute:
      case Sk.astnodes.Name:
        c === Sk.astnodes.Store && forbiddenCheck(a, d, b.attr, d.lineno);
        b.ctx = c;
        break;
      case Sk.astnodes.Subscript:
        b.ctx = c;
        break;
      case Sk.astnodes.List:
        b.ctx = c;
        e = b.elts;
        break;
      case Sk.astnodes.Tuple:
        if (0 === b.elts.length) throw new Sk.builtin.SyntaxError("can't assign to ()", a.c_filename, d.lineno);
        b.ctx = c;
        e = b.elts;
        break;
      case Sk.astnodes.Lambda:
        f = "lambda";
        break;
      case Sk.astnodes.Call:
        f = "function call";
        break;
      case Sk.astnodes.BoolOp:
      case Sk.astnodes.BinOp:
      case Sk.astnodes.UnaryOp:
        f = "operator";
        break;
      case Sk.astnodes.GeneratorExp:
        f = "generator expression";
        break;
      case Sk.astnodes.Yield:
        f = "yield expression";
        break;
      case Sk.astnodes.ListComp:
        f = "list comprehension";
        break;
      case Sk.astnodes.SetComp:
        f = "set comprehension";
        break;
      case Sk.astnodes.DictComp:
        f = "dict comprehension";
        break;
      case Sk.astnodes.Dict:
      case Sk.astnodes.Set:
      case Sk.astnodes.Num:
      case Sk.astnodes.Str:
        f = "literal";
        break;
      case Sk.astnodes.Compare:
        f = "comparison";
        break;
      case Sk.astnodes.Repr:
        f = "repr";
        break;
      case Sk.astnodes.IfExp:
        f = "conditional expression";
        break;
      default:
        Sk.asserts.fail("unhandled expression in assignment");
    }
    if (f) throw new Sk.builtin.SyntaxError("can't " + (c === Sk.astnodes.Store ? "assign to" : "delete") + " " + f, a.c_filename, d.lineno);
    if (e) for (b = 0; b < e.length; ++b) setContext(a, e[b], c, d);
  }
  var operatorMap = {};
  (function () {
    operatorMap[TOK.T_VBAR] = Sk.astnodes.BitOr;
    operatorMap[TOK.T_CIRCUMFLEX] = Sk.astnodes.BitXor;
    operatorMap[TOK.T_AMPER] = Sk.astnodes.BitAnd;
    operatorMap[TOK.T_LEFTSHIFT] = Sk.astnodes.LShift;
    operatorMap[TOK.T_RIGHTSHIFT] = Sk.astnodes.RShift;
    operatorMap[TOK.T_PLUS] = Sk.astnodes.Add;
    operatorMap[TOK.T_MINUS] = Sk.astnodes.Sub;
    operatorMap[TOK.T_STAR] = Sk.astnodes.Mult;
    operatorMap[TOK.T_SLASH] = Sk.astnodes.Div;
    operatorMap[TOK.T_DOUBLESLASH] = Sk.astnodes.FloorDiv;
    operatorMap[TOK.T_PERCENT] = Sk.astnodes.Mod;
  })();
  function getOperator(a) {
    Sk.asserts.assert(void 0 !== operatorMap[a.type]);
    return operatorMap[a.type];
  }
  function astForCompOp(a, b) {
    REQ(b, SYM.comp_op);
    if (1 === NCH(b))
      switch (((b = CHILD(b, 0)), b.type)) {
        case TOK.T_LESS:
          return Sk.astnodes.Lt;
        case TOK.T_GREATER:
          return Sk.astnodes.Gt;
        case TOK.T_EQEQUAL:
          return Sk.astnodes.Eq;
        case TOK.T_LESSEQUAL:
          return Sk.astnodes.LtE;
        case TOK.T_GREATEREQUAL:
          return Sk.astnodes.GtE;
        case TOK.T_NOTEQUAL:
          return Sk.astnodes.NotEq;
        case TOK.T_NAME:
          if ("in" === b.value) return Sk.astnodes.In_;
          if ("is" === b.value) return Sk.astnodes.Is;
      }
    else if (2 === NCH(b) && CHILD(b, 0).type === TOK.T_NAME) {
      if ("in" === CHILD(b, 1).value) return Sk.astnodes.NotIn;
      if ("is" === CHILD(b, 0).value) return Sk.astnodes.IsNot;
    }
    Sk.asserts.fail("invalid comp_op");
  }
  function seqForTestlist(a, b) {
    var c,
      d = [];
    Sk.asserts.assert(b.type === SYM.testlist || b.type === SYM.listmaker || b.type === SYM.testlist_comp || b.type === SYM.testlist_safe || b.type === SYM.testlist1);
    for (c = 0; c < NCH(b); c += 2) Sk.asserts.assert(CHILD(b, c).type === SYM.test || CHILD(b, c).type === SYM.old_test), (d[c / 2] = astForExpr(a, CHILD(b, c)));
    return d;
  }
  function astForSuite(a, b) {
    var c;
    REQ(b, SYM.suite);
    var d = [];
    var e = 0;
    if (CHILD(b, 0).type === SYM.simple_stmt) {
      b = CHILD(b, 0);
      var f = NCH(b) - 1;
      CHILD(b, f - 1).type === TOK.T_SEMI && --f;
      for (c = 0; c < f; c += 2) d[e++] = astForStmt(a, CHILD(b, c));
    } else
      for (c = 2; c < NCH(b) - 1; ++c) {
        f = CHILD(b, c);
        REQ(f, SYM.stmt);
        var g = numStmts(f);
        if (1 === g) d[e++] = astForStmt(a, f);
        else
          for (f = CHILD(f, 0), REQ(f, SYM.simple_stmt), g = 0; g < NCH(f); g += 2) {
            if (0 === NCH(CHILD(f, g))) {
              Sk.asserts.assert(g + 1 === NCH(f));
              break;
            }
            d[e++] = astForStmt(a, CHILD(f, g));
          }
      }
    Sk.asserts.assert(e === numStmts(b));
    return d;
  }
  function astForExceptClause(a, b, c) {
    REQ(b, SYM.except_clause);
    REQ(c, SYM.suite);
    if (1 === NCH(b)) return new Sk.astnodes.ExceptHandler(null, null, astForSuite(a, c), b.lineno, b.col_offset);
    if (2 === NCH(b)) return new Sk.astnodes.ExceptHandler(astForExpr(a, CHILD(b, 1)), null, astForSuite(a, c), b.lineno, b.col_offset);
    if (4 === NCH(b)) {
      var d = astForExpr(a, CHILD(b, 3));
      setContext(a, d, Sk.astnodes.Store, CHILD(b, 3));
      return new Sk.astnodes.ExceptHandler(astForExpr(a, CHILD(b, 1)), d, astForSuite(a, c), b.lineno, b.col_offset);
    }
    Sk.asserts.fail("wrong number of children for except clause");
  }
  function astForTryStmt(a, b) {
    var c = NCH(b);
    var d = (c - 3) / 3,
      e = [],
      f = null;
    REQ(b, SYM.try_stmt);
    var g = astForSuite(a, CHILD(b, 2));
    if (CHILD(b, c - 3).type === TOK.T_NAME)
      "finally" === CHILD(b, c - 3).value ? (9 <= c && CHILD(b, c - 6).type === TOK.T_NAME && ((e = astForSuite(a, CHILD(b, c - 4))), d--), (f = astForSuite(a, CHILD(b, c - 1)))) : (e = astForSuite(a, CHILD(b, c - 1))), d--;
    else if (CHILD(b, c - 3).type !== SYM.except_clause) throw new Sk.builtin.SyntaxError("malformed 'try' statement", a.c_filename, b.lineno);
    if (0 < d) {
      var h = [];
      for (c = 0; c < d; ++c) h[c] = astForExceptClause(a, CHILD(b, 3 + 3 * c), CHILD(b, 5 + 3 * c));
      a = new Sk.astnodes.TryExcept(g, h, e, b.lineno, b.col_offset);
      if (!f) return a;
      g = [a];
    }
    Sk.asserts.assert(null !== f);
    return new Sk.astnodes.TryFinally(g, f, b.lineno, b.col_offset);
  }
  function astForDottedName(a, b) {
    REQ(b, SYM.dotted_name);
    var c = b.lineno;
    var d = b.col_offset;
    var e = strobj(CHILD(b, 0).value);
    var f = new Sk.astnodes.Name(e, Sk.astnodes.Load, c, d);
    for (a = 2; a < NCH(b); a += 2) (e = strobj(CHILD(b, a).value)), (f = new Sk.astnodes.Attribute(f, e, Sk.astnodes.Load, c, d));
    return f;
  }
  function astForDecorator(a, b) {
    REQ(b, SYM.decorator);
    REQ(CHILD(b, 0), TOK.T_AT);
    REQ(CHILD(b, NCH(b) - 1), TOK.T_NEWLINE);
    var c = astForDottedName(a, CHILD(b, 1));
    return 3 === NCH(b) ? c : 5 === NCH(b) ? new Sk.astnodes.Call(c, [], [], null, null, b.lineno, b.col_offset) : astForCall(a, CHILD(b, 3), c);
  }
  function astForDecorators(a, b) {
    var c;
    REQ(b, SYM.decorators);
    var d = [];
    for (c = 0; c < NCH(b); ++c) d[c] = astForDecorator(a, CHILD(b, c));
    return d;
  }
  function astForDecorated(a, b) {
    REQ(b, SYM.decorated);
    var c = astForDecorators(a, CHILD(b, 0));
    Sk.asserts.assert(CHILD(b, 1).type === SYM.funcdef || CHILD(b, 1).type === SYM.classdef);
    var d = null;
    CHILD(b, 1).type === SYM.funcdef ? (d = astForFuncdef(a, CHILD(b, 1), c)) : CHILD(b, 1) === SYM.classdef && (d = astForClassdef(a, CHILD(b, 1), c));
    d && ((d.lineno = b.lineno), (d.col_offset = b.col_offset));
    return d;
  }
  function astForWithItem(a, b, c) {
    REQ(b, SYM.with_item);
    var d = astForExpr(a, CHILD(b, 0));
    if (3 == NCH(b)) {
      var e = astForExpr(a, CHILD(b, 2));
      setContext(a, e, Sk.astnodes.Store, b);
    }
    return new Sk.astnodes.With_(d, e, c, b.lineno, b.col_offset);
  }
  function astForWithStmt(a, b) {
    var c;
    REQ(b, SYM.with_stmt);
    var d = NCH(b) - 1;
    for (c = astForSuite(a, CHILD(b, d)); ; ) {
      d -= 2;
      c = astForWithItem(a, CHILD(b, d), c);
      if (1 == d) break;
      c = [c];
    }
    return c;
  }
  function astForExecStmt(a, b) {
    var c = null,
      d = null,
      e = NCH(b);
    Sk.asserts.assert(2 === e || 4 === e || 6 === e);
    REQ(b, SYM.exec_stmt);
    var f = astForExpr(a, CHILD(b, 1));
    4 <= e && (c = astForExpr(a, CHILD(b, 3)));
    6 === e && (d = astForExpr(a, CHILD(b, 5)));
    return new Sk.astnodes.Exec(f, c, d, b.lineno, b.col_offset);
  }
  function astForIfStmt(a, b) {
    var c;
    REQ(b, SYM.if_stmt);
    if (4 === NCH(b)) return new Sk.astnodes.If_(astForExpr(a, CHILD(b, 1)), astForSuite(a, CHILD(b, 3)), [], b.lineno, b.col_offset);
    var d = CHILD(b, 4).value.charAt(2);
    if ("s" === d) return new Sk.astnodes.If_(astForExpr(a, CHILD(b, 1)), astForSuite(a, CHILD(b, 3)), astForSuite(a, CHILD(b, 6)), b.lineno, b.col_offset);
    if ("i" === d) {
      var e = NCH(b) - 4;
      var f = !1;
      d = [];
      CHILD(b, e + 1).type === TOK.T_NAME && "s" === CHILD(b, e + 1).value.charAt(2) && ((f = !0), (e -= 3));
      e /= 4;
      f && ((d = [new Sk.astnodes.If_(astForExpr(a, CHILD(b, NCH(b) - 6)), astForSuite(a, CHILD(b, NCH(b) - 4)), astForSuite(a, CHILD(b, NCH(b) - 1)), CHILD(b, NCH(b) - 6).lineno, CHILD(b, NCH(b) - 6).col_offset)]), e--);
      for (c = 0; c < e; ++c) (f = 5 + 4 * (e - c - 1)), (d = [new Sk.astnodes.If_(astForExpr(a, CHILD(b, f)), astForSuite(a, CHILD(b, f + 2)), d, CHILD(b, f).lineno, CHILD(b, f).col_offset)]);
      return new Sk.astnodes.If_(astForExpr(a, CHILD(b, 1)), astForSuite(a, CHILD(b, 3)), d, b.lineno, b.col_offset);
    }
    Sk.asserts.fail("unexpected token in 'if' statement");
  }
  function astForExprlist(a, b, c) {
    var d;
    REQ(b, SYM.exprlist);
    var e = [];
    for (d = 0; d < NCH(b); d += 2) {
      var f = astForExpr(a, CHILD(b, d));
      e[d / 2] = f;
      c && setContext(a, f, c, CHILD(b, d));
    }
    return e;
  }
  function astForDelStmt(a, b) {
    REQ(b, SYM.del_stmt);
    return new Sk.astnodes.Delete_(astForExprlist(a, CHILD(b, 1), Sk.astnodes.Del), b.lineno, b.col_offset);
  }
  function astForGlobalStmt(a, b) {
    var c = [];
    REQ(b, SYM.global_stmt);
    for (a = 1; a < NCH(b); a += 2) c[(a - 1) / 2] = strobj(CHILD(b, a).value);
    return new Sk.astnodes.Global(c, b.lineno, b.col_offset);
  }
  function astForAssertStmt(a, b) {
    REQ(b, SYM.assert_stmt);
    if (2 === NCH(b)) return new Sk.astnodes.Assert(astForExpr(a, CHILD(b, 1)), null, b.lineno, b.col_offset);
    if (4 === NCH(b)) return new Sk.astnodes.Assert(astForExpr(a, CHILD(b, 1)), astForExpr(a, CHILD(b, 3)), b.lineno, b.col_offset);
    Sk.asserts.fail("improper number of parts to assert stmt");
  }
  function aliasForImportName(a, b) {
    a: for (;;)
      switch (b.type) {
        case SYM.import_as_name:
          a = null;
          var c = strobj(CHILD(b, 0).value);
          3 === NCH(b) && (a = CHILD(b, 2).value);
          return new Sk.astnodes.alias(c, null == a ? null : strobj(a));
        case SYM.dotted_as_name:
          if (1 === NCH(b)) {
            b = CHILD(b, 0);
            continue a;
          } else return (a = aliasForImportName(a, CHILD(b, 0))), Sk.asserts.assert(!a.asname), (a.asname = strobj(CHILD(b, 2).value)), a;
        case SYM.dotted_name:
          if (1 === NCH(b)) return new Sk.astnodes.alias(strobj(CHILD(b, 0).value), null);
          a = "";
          for (c = 0; c < NCH(b); c += 2) a += CHILD(b, c).value + ".";
          return new Sk.astnodes.alias(strobj(a.substr(0, a.length - 1)), null);
        case TOK.T_STAR:
          return new Sk.astnodes.alias(strobj("*"), null);
        default:
          throw new Sk.builtin.SyntaxError("unexpected import name", a.c_filename, b.lineno);
      }
  }
  function astForImportStmt(a, b) {
    var c;
    REQ(b, SYM.import_stmt);
    var d = b.lineno;
    var e = b.col_offset;
    b = CHILD(b, 0);
    if (b.type === SYM.import_name) {
      b = CHILD(b, 1);
      REQ(b, SYM.dotted_as_names);
      var f = [];
      for (c = 0; c < NCH(b); c += 2) f[c / 2] = aliasForImportName(a, CHILD(b, c));
      return new Sk.astnodes.Import_(f, d, e);
    }
    if (b.type === SYM.import_from) {
      var g = null;
      var h = 0;
      for (f = 1; f < NCH(b); ++f) {
        if (CHILD(b, f).type === SYM.dotted_name) {
          g = aliasForImportName(a, CHILD(b, f));
          f++;
          break;
        } else if (CHILD(b, f).type !== TOK.T_DOT) break;
        h++;
      }
      ++f;
      switch (CHILD(b, f).type) {
        case TOK.T_STAR:
          b = CHILD(b, f);
          break;
        case TOK.T_LPAR:
          b = CHILD(b, f + 1);
          NCH(b);
          break;
        case SYM.import_as_names:
          b = CHILD(b, f);
          f = NCH(b);
          if (0 === f % 2) throw new Sk.builtin.SyntaxError("trailing comma not allowed without surrounding parentheses", a.c_filename, b.lineno);
          break;
        default:
          throw new Sk.builtin.SyntaxError("Unexpected node-type in from-import", a.c_filename, b.lineno);
      }
      f = [];
      if (b.type === TOK.T_STAR) f[0] = aliasForImportName(a, b);
      else for (c = 0; c < NCH(b); c += 2) f[c / 2] = aliasForImportName(a, CHILD(b, c));
      a = g ? g.name.v : "";
      return new Sk.astnodes.ImportFrom(strobj(a), f, h, d, e);
    }
    throw new Sk.builtin.SyntaxError("unknown import statement", a.c_filename, b.lineno);
  }
  function astForTestlistComp(a, b) {
    Sk.asserts.assert(b.type === SYM.testlist_comp || b.type === SYM.argument);
    return 1 < NCH(b) && CHILD(b, 1).type === SYM.comp_for ? astForGenExpr(a, b) : astForTestlist(a, b);
  }
  function astForListcomp(a, b) {
    function c(a, b) {
      for (a = 0; ; ) {
        REQ(b, SYM.list_iter);
        if (CHILD(b, 0).type === SYM.list_for) return a;
        b = CHILD(b, 0);
        REQ(b, SYM.list_if);
        a++;
        if (2 == NCH(b)) return a;
        b = CHILD(b, 2);
      }
    }
    var d;
    REQ(b, SYM.listmaker);
    Sk.asserts.assert(1 < NCH(b));
    var e = astForExpr(a, CHILD(b, 0));
    var f = (function (a, b) {
      a = 0;
      b = CHILD(b, 1);
      a: for (;;) {
        a++;
        REQ(b, SYM.list_for);
        if (5 === NCH(b)) b = CHILD(b, 4);
        else return a;
        b: for (;;) {
          REQ(b, SYM.list_iter);
          b = CHILD(b, 0);
          if (b.type === SYM.list_for) continue a;
          else if (b.type === SYM.list_if)
            if (3 === NCH(b)) {
              b = CHILD(b, 2);
              continue b;
            } else return a;
          break;
        }
        break;
      }
    })(a, b);
    var g = [];
    var h = CHILD(b, 1);
    for (d = 0; d < f; ++d) {
      REQ(h, SYM.list_for);
      var k = CHILD(h, 1);
      var l = astForExprlist(a, k, Sk.astnodes.Store);
      var m = astForTestlist(a, CHILD(h, 3));
      var n = 1 === NCH(k) ? new Sk.astnodes.comprehension(l[0], m, []) : new Sk.astnodes.comprehension(new Sk.astnodes.Tuple(l, Sk.astnodes.Store, h.lineno, h.col_offset), m, []);
      if (5 === NCH(h)) {
        h = CHILD(h, 4);
        k = c(a, h);
        l = [];
        for (m = 0; m < k; ++m) REQ(h, SYM.list_iter), (h = CHILD(h, 0)), REQ(h, SYM.list_if), (l[m] = astForExpr(a, CHILD(h, 1))), 3 === NCH(h) && (h = CHILD(h, 2));
        h.type === SYM.list_iter && (h = CHILD(h, 0));
        n.ifs = l;
      }
      g[d] = n;
    }
    return new Sk.astnodes.ListComp(e, g, b.lineno, b.col_offset);
  }
  function astForFactor(a, b) {
    if (CHILD(b, 0).type === TOK.T_MINUS && 2 === NCH(b)) {
      var c = CHILD(b, 1);
      if (c.type === SYM.factor && 1 === NCH(c) && ((c = CHILD(c, 0)), c.type === SYM.power && 1 === NCH(c))) {
        var d = CHILD(c, 0);
        if (d.type === SYM.atom && ((c = CHILD(d, 0)), c.type === TOK.T_NUMBER)) return (c.value = "-" + c.value), astForAtom(a, d);
      }
    }
    a = astForExpr(a, CHILD(b, 1));
    switch (CHILD(b, 0).type) {
      case TOK.T_PLUS:
        return new Sk.astnodes.UnaryOp(Sk.astnodes.UAdd, a, b.lineno, b.col_offset);
      case TOK.T_MINUS:
        return new Sk.astnodes.UnaryOp(Sk.astnodes.USub, a, b.lineno, b.col_offset);
      case TOK.T_TILDE:
        return new Sk.astnodes.UnaryOp(Sk.astnodes.Invert, a, b.lineno, b.col_offset);
    }
    Sk.asserts.fail("unhandled factor");
  }
  function astForForStmt(a, b) {
    var c = [];
    REQ(b, SYM.for_stmt);
    9 === NCH(b) && (c = astForSuite(a, CHILD(b, 8)));
    var d = CHILD(b, 1);
    var e = astForExprlist(a, d, Sk.astnodes.Store);
    e = 1 === NCH(d) ? e[0] : new Sk.astnodes.Tuple(e, Sk.astnodes.Store, b.lineno, b.col_offset);
    return new Sk.astnodes.For_(e, astForTestlist(a, CHILD(b, 3)), astForSuite(a, CHILD(b, 5)), c, b.lineno, b.col_offset);
  }
  function astForCall(a, b, c) {
    var d, e, f, g, h, k;
    REQ(b, SYM.arglist);
    for (g = e = h = k = 0; g < NCH(b); g++) {
      var l = CHILD(b, g);
      l.type === SYM.argument && (1 === NCH(l) ? k++ : CHILD(l, 1).type === SYM.comp_for ? e++ : h++);
    }
    if (1 < e || (e && (k || h))) throw new Sk.builtin.SyntaxError("Generator expression must be parenthesized if not sole argument", a.c_filename, b.lineno);
    if (255 < k + h + e) throw new Sk.builtin.SyntaxError("more than 255 arguments", a.c_filename, b.lineno);
    var m = [];
    var n = [];
    h = k = 0;
    e = f = null;
    for (g = 0; g < NCH(b); g++)
      if (((l = CHILD(b, g)), l.type === SYM.argument))
        if (1 === NCH(l)) {
          if (h) throw new Sk.builtin.SyntaxError("non-keyword arg after keyword arg", a.c_filename, b.lineno);
          if (f) throw new Sk.builtin.SyntaxError("only named arguments may follow *expression", a.c_filename, b.lineno);
          m[k++] = astForExpr(a, CHILD(l, 0));
        } else if (CHILD(l, 1).type === SYM.comp_for) m[k++] = astForGenExpr(a, l);
        else {
          var p = astForExpr(a, CHILD(l, 0));
          if (p.constructor === Sk.astnodes.Lambda) throw new Sk.builtin.SyntaxError("lambda cannot contain assignment", a.c_filename, b.lineno);
          if (p.constructor !== Sk.astnodes.Name) throw new Sk.builtin.SyntaxError("keyword can't be an expression", a.c_filename, b.lineno);
          var r = p.id;
          forbiddenCheck(a, CHILD(l, 0), r, b.lineno);
          for (d = 0; d < h; ++d) if (((p = n[d].arg), p === r)) throw new Sk.builtin.SyntaxError("keyword argument repeated", a.c_filename, b.lineno);
          n[h++] = new Sk.astnodes.keyword(r, astForExpr(a, CHILD(l, 2)));
        }
      else l.type === TOK.T_STAR ? (f = astForExpr(a, CHILD(b, ++g))) : l.type === TOK.T_DOUBLESTAR && (e = astForExpr(a, CHILD(b, ++g)));
    return new Sk.astnodes.Call(c, m, n, f, e, c.lineno, c.col_offset);
  }
  function astForTrailer(a, b, c) {
    var d;
    REQ(b, SYM.trailer);
    if (CHILD(b, 0).type === TOK.T_LPAR) return 2 === NCH(b) ? new Sk.astnodes.Call(c, [], [], null, null, b.lineno, b.col_offset) : astForCall(a, CHILD(b, 1), c);
    if (CHILD(b, 0).type === TOK.T_DOT) return new Sk.astnodes.Attribute(c, strobj(CHILD(b, 1).value), Sk.astnodes.Load, b.lineno, b.col_offset);
    REQ(CHILD(b, 0), TOK.T_LSQB);
    REQ(CHILD(b, 2), TOK.T_RSQB);
    b = CHILD(b, 1);
    if (1 === NCH(b)) return new Sk.astnodes.Subscript(c, astForSlice(a, CHILD(b, 0)), Sk.astnodes.Load, b.lineno, b.col_offset);
    var e = !0;
    var f = [];
    for (d = 0; d < NCH(b); d += 2) {
      var g = astForSlice(a, CHILD(b, d));
      g.constructor !== Sk.astnodes.Index && (e = !1);
      f[d / 2] = g;
    }
    if (!e) return new Sk.astnodes.Subscript(c, new Sk.astnodes.ExtSlice(f), Sk.astnodes.Load, b.lineno, b.col_offset);
    a = [];
    for (d = 0; d < f.length; ++d) (g = f[d]), Sk.asserts.assert(g.constructor === Sk.astnodes.Index && null !== g.value && void 0 !== g.value), (a[d] = g.value);
    g = new Sk.astnodes.Tuple(a, Sk.astnodes.Load, b.lineno, b.col_offset);
    return new Sk.astnodes.Subscript(c, new Sk.astnodes.Index(g), Sk.astnodes.Load, b.lineno, b.col_offset);
  }
  function astForFlowStmt(a, b) {
    REQ(b, SYM.flow_stmt);
    var c = CHILD(b, 0);
    switch (c.type) {
      case SYM.break_stmt:
        return new Sk.astnodes.Break_(b.lineno, b.col_offset);
      case SYM.continue_stmt:
        return new Sk.astnodes.Continue_(b.lineno, b.col_offset);
      case SYM.yield_stmt:
        return new Sk.astnodes.Expr(astForExpr(a, CHILD(c, 0)), b.lineno, b.col_offset);
      case SYM.return_stmt:
        return 1 === NCH(c) ? new Sk.astnodes.Return_(null, b.lineno, b.col_offset) : new Sk.astnodes.Return_(astForTestlist(a, CHILD(c, 1)), b.lineno, b.col_offset);
      case SYM.raise_stmt:
        if (1 === NCH(c)) return new Sk.astnodes.Raise(null, null, null, b.lineno, b.col_offset);
        if (2 === NCH(c)) return new Sk.astnodes.Raise(astForExpr(a, CHILD(c, 1)), null, null, b.lineno, b.col_offset);
        if (4 === NCH(c)) return new Sk.astnodes.Raise(astForExpr(a, CHILD(c, 1)), astForExpr(a, CHILD(c, 3)), null, b.lineno, b.col_offset);
        if (6 === NCH(c)) return new Sk.astnodes.Raise(astForExpr(a, CHILD(c, 1)), astForExpr(a, CHILD(c, 3)), astForExpr(a, CHILD(c, 5)), b.lineno, b.col_offset);
        break;
      default:
        Sk.asserts.fail("unexpected flow_stmt");
    }
    Sk.asserts.fail("unhandled flow statement");
  }
  function astForArguments(a, b) {
    var c,
      d,
      e,
      f = null,
      g = null;
    if (b.type === SYM.parameters) {
      if (2 === NCH(b)) return new Sk.astnodes.arguments_([], null, null, []);
      b = CHILD(b, 1);
    }
    REQ(b, SYM.varargslist);
    var h = [];
    var k = [];
    var l = !1;
    for (c = d = e = 0; e < NCH(b); ) {
      var m = CHILD(b, e);
      switch (m.type) {
        case SYM.fpdef:
          var n = 0;
          a: for (;;) {
            if (e + 1 < NCH(b) && CHILD(b, e + 1).type === TOK.T_EQUAL) (k[d++] = astForExpr(a, CHILD(b, e + 2))), (e += 2), (l = !0);
            else if (l) {
              if (n) throw new Sk.builtin.SyntaxError("parenthesized arg with default", a.c_filename, b.lineno);
              throw new Sk.builtin.SyntaxError("non-default argument follows default argument", a.c_filename, b.lineno);
            }
            if (3 === NCH(m)) {
              m = CHILD(m, 1);
              if (1 !== NCH(m)) throw new Sk.builtin.SyntaxError("tuple parameter unpacking has been removed", a.c_filename, b.lineno);
              n = !0;
              m = CHILD(m, 0);
              Sk.asserts.assert(m.type === SYM.fpdef);
              continue a;
            }
            if (CHILD(m, 0).type === TOK.T_NAME) {
              forbiddenCheck(a, b, CHILD(m, 0).value, b.lineno);
              var p = strobj(CHILD(m, 0).value);
              h[c++] = new Sk.astnodes.Name(p, Sk.astnodes.Param, m.lineno, m.col_offset);
            }
            e += 2;
            if (n) throw new Sk.builtin.SyntaxError("parenthesized argument names are invalid", a.c_filename, b.lineno);
            break;
          }
          break;
        case TOK.T_STAR:
          forbiddenCheck(a, CHILD(b, e + 1), CHILD(b, e + 1).value, b.lineno);
          f = strobj(CHILD(b, e + 1).value);
          e += 3;
          break;
        case TOK.T_DOUBLESTAR:
          forbiddenCheck(a, CHILD(b, e + 1), CHILD(b, e + 1).value, b.lineno);
          g = strobj(CHILD(b, e + 1).value);
          e += 3;
          break;
        default:
          Sk.asserts.fail("unexpected node in varargslist");
      }
    }
    return new Sk.astnodes.arguments_(h, f, g, k);
  }
  function astForFuncdef(a, b, c) {
    REQ(b, SYM.funcdef);
    var d = strobj(CHILD(b, 1).value);
    forbiddenCheck(a, CHILD(b, 1), CHILD(b, 1).value, b.lineno);
    var e = astForArguments(a, CHILD(b, 2));
    a = astForSuite(a, CHILD(b, 4));
    return new Sk.astnodes.FunctionDef(d, e, a, c, b.lineno, b.col_offset);
  }
  function astForClassBases(a, b) {
    Sk.asserts.assert(0 < NCH(b));
    REQ(b, SYM.testlist);
    return 1 === NCH(b) ? [astForExpr(a, CHILD(b, 0))] : seqForTestlist(a, b);
  }
  function astForClassdef(a, b, c) {
    REQ(b, SYM.classdef);
    forbiddenCheck(a, b, CHILD(b, 1).value, b.lineno);
    var d = strobj(CHILD(b, 1).value);
    if (4 === NCH(b)) return new Sk.astnodes.ClassDef(d, [], astForSuite(a, CHILD(b, 3)), c, b.lineno, b.col_offset);
    if (CHILD(b, 3).type === TOK.T_RPAR) return new Sk.astnodes.ClassDef(d, [], astForSuite(a, CHILD(b, 5)), c, b.lineno, b.col_offset);
    var e = astForClassBases(a, CHILD(b, 3));
    a = astForSuite(a, CHILD(b, 6));
    return new Sk.astnodes.ClassDef(d, e, a, c, b.lineno, b.col_offset);
  }
  function astForLambdef(a, b) {
    if (3 === NCH(b)) {
      var c = new Sk.astnodes.arguments_([], null, null, []);
      a = astForExpr(a, CHILD(b, 2));
    } else (c = astForArguments(a, CHILD(b, 1))), (a = astForExpr(a, CHILD(b, 3)));
    return new Sk.astnodes.Lambda(c, a, b.lineno, b.col_offset);
  }
  function astForComprehension(a, b) {
    function c(a, b) {
      for (a = 0; ; ) {
        REQ(b, SYM.comp_iter);
        if (CHILD(b, 0).type === SYM.comp_for) return a;
        b = CHILD(b, 0);
        REQ(b, SYM.comp_if);
        a++;
        if (2 == NCH(b)) return a;
        b = CHILD(b, 2);
      }
    }
    var d;
    var e = (function (a, b) {
      a = 0;
      a: for (;;) {
        a++;
        REQ(b, SYM.comp_for);
        if (5 === NCH(b)) b = CHILD(b, 4);
        else return a;
        b: for (;;) {
          REQ(b, SYM.comp_iter);
          b = CHILD(b, 0);
          if (b.type === SYM.comp_for) continue a;
          else if (b.type === SYM.comp_if)
            if (3 === NCH(b)) {
              b = CHILD(b, 2);
              continue b;
            } else return a;
          break;
        }
        break;
      }
      Sk.asserts.fail("logic error in countCompFors");
    })(a, b);
    var f = [];
    for (d = 0; d < e; ++d) {
      REQ(b, SYM.comp_for);
      var g = CHILD(b, 1);
      var h = astForExprlist(a, g, Sk.astnodes.Store);
      var k = astForExpr(a, CHILD(b, 3));
      var l = 1 === NCH(g) ? new Sk.astnodes.comprehension(h[0], k, []) : new Sk.astnodes.comprehension(new Sk.astnodes.Tuple(h, Sk.astnodes.Store, b.lineno, b.col_offset), k, []);
      if (5 === NCH(b)) {
        b = CHILD(b, 4);
        var m = c(a, b);
        g = [];
        for (h = 0; h < m; ++h) REQ(b, SYM.comp_iter), (b = CHILD(b, 0)), REQ(b, SYM.comp_if), (k = astForExpr(a, CHILD(b, 1))), (g[h] = k), 3 === NCH(b) && (b = CHILD(b, 2));
        b.type === SYM.comp_iter && (b = CHILD(b, 0));
        l.ifs = g;
      }
      f[d] = l;
    }
    return f;
  }
  function astForIterComp(a, b, c) {
    Sk.asserts.assert(1 < NCH(b));
    var d = astForExpr(a, CHILD(b, 0));
    a = astForComprehension(a, CHILD(b, 1));
    if (c === COMP_GENEXP) return new Sk.astnodes.GeneratorExp(d, a, b.lineno, b.col_offset);
    if (c === COMP_SETCOMP) return new Sk.astnodes.SetComp(d, a, b.lineno, b.col_offset);
  }
  function astForDictComp(a, b) {
    Sk.asserts.assert(3 < NCH(b));
    REQ(CHILD(b, 1), TOK.T_COLON);
    var c = astForExpr(a, CHILD(b, 0));
    var d = astForExpr(a, CHILD(b, 2));
    a = astForComprehension(a, CHILD(b, 3));
    return new Sk.astnodes.DictComp(c, d, a, b.lineno, b.col_offset);
  }
  function astForGenExpr(a, b) {
    Sk.asserts.assert(b.type === SYM.testlist_comp || b.type === SYM.argument);
    return astForIterComp(a, b, COMP_GENEXP);
  }
  function astForSetComp(a, b) {
    Sk.asserts.assert(b.type === SYM.dictorsetmaker);
    return astForIterComp(a, b, COMP_SETCOMP);
  }
  function astForWhileStmt(a, b) {
    REQ(b, SYM.while_stmt);
    if (4 === NCH(b)) return new Sk.astnodes.While_(astForExpr(a, CHILD(b, 1)), astForSuite(a, CHILD(b, 3)), [], b.lineno, b.col_offset);
    if (7 === NCH(b)) return new Sk.astnodes.While_(astForExpr(a, CHILD(b, 1)), astForSuite(a, CHILD(b, 3)), astForSuite(a, CHILD(b, 6)), b.lineno, b.col_offset);
    Sk.asserts.fail("wrong number of tokens for 'while' stmt");
  }
  function astForAugassign(a, b) {
    REQ(b, SYM.augassign);
    b = CHILD(b, 0);
    switch (b.value.charAt(0)) {
      case "+":
        return Sk.astnodes.Add;
      case "-":
        return Sk.astnodes.Sub;
      case "/":
        return "/" === b.value.charAt(1) ? Sk.astnodes.FloorDiv : Sk.astnodes.Div;
      case "%":
        return Sk.astnodes.Mod;
      case "<":
        return Sk.astnodes.LShift;
      case ">":
        return Sk.astnodes.RShift;
      case "&":
        return Sk.astnodes.BitAnd;
      case "^":
        return Sk.astnodes.BitXor;
      case "|":
        return Sk.astnodes.BitOr;
      case "*":
        return "*" === b.value.charAt(1) ? Sk.astnodes.Pow : Sk.astnodes.Mult;
      default:
        Sk.asserts.fail("invalid augassign");
    }
  }
  function astForBinop(a, b) {
    var c,
      d = new Sk.astnodes.BinOp(astForExpr(a, CHILD(b, 0)), getOperator(CHILD(b, 1)), astForExpr(a, CHILD(b, 2)), b.lineno, b.col_offset),
      e = (NCH(b) - 1) / 2;
    for (c = 1; c < e; ++c) {
      var f = CHILD(b, 2 * c + 1);
      var g = getOperator(f);
      var h = astForExpr(a, CHILD(b, 2 * c + 2));
      d = new Sk.astnodes.BinOp(d, g, h, f.lineno, f.col_offset);
    }
    return d;
  }
  function astForTestlist(a, b) {
    Sk.asserts.assert(0 < NCH(b));
    b.type === SYM.testlist_comp ? 1 < NCH(b) && Sk.asserts.assert(CHILD(b, 1).type !== SYM.comp_for) : Sk.asserts.assert(b.type === SYM.testlist || b.type === SYM.testlist_safe || b.type === SYM.testlist1);
    return 1 === NCH(b) ? astForExpr(a, CHILD(b, 0)) : new Sk.astnodes.Tuple(seqForTestlist(a, b), Sk.astnodes.Load, b.lineno, b.col_offset);
  }
  function astForExprStmt(a, b) {
    REQ(b, SYM.expr_stmt);
    if (1 === NCH(b)) return new Sk.astnodes.Expr(astForTestlist(a, CHILD(b, 0)), b.lineno, b.col_offset);
    if (CHILD(b, 1).type === SYM.augassign) {
      var c = CHILD(b, 0);
      var d = astForTestlist(a, c);
      switch (d.constructor) {
        case Sk.astnodes.GeneratorExp:
          throw new Sk.builtin.SyntaxError("augmented assignment to generator expression not possible", a.c_filename, b.lineno);
        case Sk.astnodes.Yield:
          throw new Sk.builtin.SyntaxError("augmented assignment to yield expression not possible", a.c_filename, b.lineno);
        case Sk.astnodes.Name:
          var e = d.id;
          forbiddenCheck(a, c, e, b.lineno);
          break;
        case Sk.astnodes.Attribute:
        case Sk.astnodes.Subscript:
          break;
        default:
          throw new Sk.builtin.SyntaxError("illegal expression for augmented assignment", a.c_filename, b.lineno);
      }
      setContext(a, d, Sk.astnodes.Store, c);
      c = CHILD(b, 2);
      c = c.type === SYM.testlist ? astForTestlist(a, c) : astForExpr(a, c);
      return new Sk.astnodes.AugAssign(d, astForAugassign(a, CHILD(b, 1)), c, b.lineno, b.col_offset);
    }
    REQ(CHILD(b, 1), TOK.T_EQUAL);
    d = [];
    for (e = 0; e < NCH(b) - 2; e += 2) {
      c = CHILD(b, e);
      if (c.type === SYM.yield_expr) throw new Sk.builtin.SyntaxError("assignment to yield expression not possible", a.c_filename, b.lineno);
      c = astForTestlist(a, c);
      setContext(a, c, Sk.astnodes.Store, CHILD(b, e));
      d[e / 2] = c;
    }
    c = CHILD(b, NCH(b) - 1);
    a = c.type === SYM.testlist ? astForTestlist(a, c) : astForExpr(a, c);
    return new Sk.astnodes.Assign(d, a, b.lineno, b.col_offset);
  }
  function astForIfexpr(a, b) {
    Sk.asserts.assert(5 === NCH(b));
    return new Sk.astnodes.IfExp(astForExpr(a, CHILD(b, 2)), astForExpr(a, CHILD(b, 0)), astForExpr(a, CHILD(b, 4)), b.lineno, b.col_offset);
  }
  function parsestr(a, b) {
    var c = b.charAt(0),
      d = !1,
      e = !1;
    if (a.c_flags & Parser.CO_FUTURE_UNICODE_LITERALS || !0 === Sk.__future__.unicode_literals) e = !0;
    if ("u" === c || "U" === c) (b = b.substr(1)), (c = b.charAt(0)), (e = !0);
    else if ("r" === c || "R" === c) (b = b.substr(1)), (c = b.charAt(0)), (d = !0);
    Sk.asserts.assert("b" !== c && "B" !== c, "todo; haven't done b'' strings yet");
    Sk.asserts.assert("'" === c || ('"' === c && b.charAt(b.length - 1) === c));
    b = b.substr(1, b.length - 2);
    e && (b = unescape(encodeURIComponent(b)));
    4 <= b.length && b.charAt(0) === c && b.charAt(1) === c && (Sk.asserts.assert(b.charAt(b.length - 1) === c && b.charAt(b.length - 2) === c), (b = b.substr(2, b.length - 4)));
    if (d || -1 === b.indexOf("\\")) a = strobj(decodeURIComponent(escape(b)));
    else {
      a = b;
      c = a.length;
      d = "";
      for (b = 0; b < c; ++b)
        if (((e = a.charAt(b)), "\\" === e))
          if ((++b, (e = a.charAt(b)), "n" === e)) d += "\n";
          else if ("\\" === e) d += "\\";
          else if ("t" === e) d += "\t";
          else if ("r" === e) d += "\r";
          else if ("b" === e) d += "\b";
          else if ("f" === e) d += "\f";
          else if ("v" === e) d += "\v";
          else if ("0" === e) d += "\x00";
          else if ('"' === e) d += '"';
          else if ("'" === e) d += "'";
          else {
            if ("\n" !== e)
              if ("x" === e) {
                var f = a.charAt(++b);
                var g = a.charAt(++b);
                d += String.fromCharCode(parseInt(f + g, 16));
              } else if ("u" === e || "U" === e) {
                f = a.charAt(++b);
                g = a.charAt(++b);
                var h = a.charAt(++b);
                e = a.charAt(++b);
                d += String.fromCharCode(parseInt(f + g, 16), parseInt(h + e, 16));
              } else d += "\\" + e;
          }
        else d += e;
      a = strobj(d);
    }
    return a;
  }
  function parsestrplus(a, b) {
    var c;
    REQ(CHILD(b, 0), TOK.T_STRING);
    var d = new Sk.builtin.str("");
    for (c = 0; c < NCH(b); ++c)
      try {
        d = d.sq$concat(parsestr(a, CHILD(b, c).value));
      } catch (e) {
        throw new Sk.builtin.SyntaxError("invalid string (possibly contains a unicode character)", a.c_filename, CHILD(b, c).lineno);
      }
    return d;
  }
  function parsenumber(a, b, c) {
    a = b.charAt(b.length - 1);
    if ("j" === a || "J" === a) return Sk.builtin.complex.complex_subtype_from_string(b);
    if ("l" === a || "L" === a) return Sk.longFromStr(b.substr(0, b.length - 1), 0);
    if (-1 !== b.indexOf(".")) return new Sk.builtin.float_(parseFloat(b));
    c = b;
    a = !1;
    "-" === b.charAt(0) && ((c = b.substr(1)), (a = !0));
    if ("0" !== c.charAt(0) || ("x" !== c.charAt(1) && "X" !== c.charAt(1))) {
      if (-1 !== b.indexOf("e") || -1 !== b.indexOf("E")) return new Sk.builtin.float_(parseFloat(b));
      if ("0" !== c.charAt(0) || ("b" !== c.charAt(1) && "B" !== c.charAt(1)))
        if ("0" === c.charAt(0))
          if ("0" === c) c = 0;
          else {
            c = c.substring(1);
            if ("o" === c.charAt(0) || "O" === c.charAt(0)) c = c.substring(1);
            c = parseInt(c, 8);
          }
        else c = parseInt(c, 10);
      else (c = c.substring(2)), (c = parseInt(c, 2));
    } else (c = c.substring(2)), (c = parseInt(c, 16));
    return c > Sk.builtin.int_.threshold$ && Math.floor(c) === c && -1 === b.indexOf("e") && -1 === b.indexOf("E") ? Sk.longFromStr(b, 0) : a ? new Sk.builtin.int_(-c) : new Sk.builtin.int_(c);
  }
  function astForSlice(a, b) {
    var c, d;
    REQ(b, SYM.subscript);
    var e = CHILD(b, 0);
    var f = (c = d = null);
    if (e.type === TOK.T_DOT) return new Sk.astnodes.Ellipsis();
    if (1 === NCH(b) && e.type === SYM.test) return new Sk.astnodes.Index(astForExpr(a, e));
    e.type === SYM.test && (d = astForExpr(a, e));
    e.type === TOK.T_COLON ? 1 < NCH(b) && ((e = CHILD(b, 1)), e.type === SYM.test && (c = astForExpr(a, e))) : 2 < NCH(b) && ((e = CHILD(b, 2)), e.type === SYM.test && (c = astForExpr(a, e)));
    e = CHILD(b, NCH(b) - 1);
    e.type === SYM.sliceop && (1 === NCH(e) ? ((e = CHILD(e, 0)), (f = new Sk.astnodes.Name(strobj("None"), Sk.astnodes.Load, e.lineno, e.col_offset))) : ((e = CHILD(e, 1)), e.type === SYM.test && (f = astForExpr(a, e))));
    return new Sk.astnodes.Slice(d, c, f);
  }
  function astForAtom(a, b) {
    var c,
      d = CHILD(b, 0);
    switch (d.type) {
      case TOK.T_NAME:
        return new Sk.astnodes.Name(strobj(d.value), Sk.astnodes.Load, b.lineno, b.col_offset);
      case TOK.T_STRING:
        return new Sk.astnodes.Str(parsestrplus(a, b), b.lineno, b.col_offset);
      case TOK.T_NUMBER:
        return new Sk.astnodes.Num(parsenumber(a, d.value, b.lineno), b.lineno, b.col_offset);
      case TOK.T_LPAR:
        return (d = CHILD(b, 1)), d.type === TOK.T_RPAR ? new Sk.astnodes.Tuple([], Sk.astnodes.Load, b.lineno, b.col_offset) : d.type === SYM.yield_expr ? astForExpr(a, d) : astForTestlistComp(a, d);
      case TOK.T_LSQB:
        d = CHILD(b, 1);
        if (d.type === TOK.T_RSQB) return new Sk.astnodes.List([], Sk.astnodes.Load, b.lineno, b.col_offset);
        REQ(d, SYM.listmaker);
        return 1 === NCH(d) || CHILD(d, 1).type === TOK.T_COMMA ? new Sk.astnodes.List(seqForTestlist(a, d), Sk.astnodes.Load, b.lineno, b.col_offset) : astForListcomp(a, d);
      case TOK.T_LBRACE:
        var e = [];
        var f = [];
        d = CHILD(b, 1);
        if (b.type === TOK.T_RBRACE) return new Sk.astnodes.Dict([], null, b.lineno, b.col_offset);
        if (1 === NCH(d) || (0 !== NCH(d) && CHILD(d, 1).type === TOK.T_COMMA)) {
          f = [];
          NCH(d);
          for (c = 0; c < NCH(d); c += 2) (e = astForExpr(a, CHILD(d, c))), (f[c / 2] = e);
          return new Sk.astnodes.Set(f, b.lineno, b.col_offset);
        }
        if (0 !== NCH(d) && CHILD(d, 1).type == SYM.comp_for) return astForSetComp(a, d);
        if (3 < NCH(d) && CHILD(d, 3).type === SYM.comp_for) return astForDictComp(a, d);
        NCH(d);
        for (c = 0; c < NCH(d); c += 4) (e[c / 4] = astForExpr(a, CHILD(d, c))), (f[c / 4] = astForExpr(a, CHILD(d, c + 2)));
        return new Sk.astnodes.Dict(e, f, b.lineno, b.col_offset);
      case TOK.T_BACKQUOTE:
        return new Sk.astnodes.Repr(astForTestlist(a, CHILD(b, 1)), b.lineno, b.col_offset);
      default:
        Sk.asserts.fail("unhandled atom " + d.type.toString());
    }
  }
  function astForPower(a, b) {
    var c;
    REQ(b, SYM.power);
    var d = astForAtom(a, CHILD(b, 0));
    if (1 === NCH(b)) return d;
    for (c = 1; c < NCH(b); ++c) {
      var e = CHILD(b, c);
      if (e.type !== SYM.trailer) break;
      e = astForTrailer(a, e, d);
      e.lineno = d.lineno;
      e.col_offset = d.col_offset;
      d = e;
    }
    CHILD(b, NCH(b) - 1).type === SYM.factor && ((a = astForExpr(a, CHILD(b, NCH(b) - 1))), (d = new Sk.astnodes.BinOp(d, Sk.astnodes.Pow, a, b.lineno, b.col_offset)));
    return d;
  }
  function astForExpr(a, b) {
    var c;
    a: for (;;) {
      switch (b.type) {
        case SYM.test:
        case SYM.old_test:
          if (CHILD(b, 0).type === SYM.lambdef || CHILD(b, 0).type === SYM.old_lambdef) return astForLambdef(a, CHILD(b, 0));
          if (1 < NCH(b)) return astForIfexpr(a, b);
        case SYM.or_test:
        case SYM.and_test:
          if (1 === NCH(b)) {
            b = CHILD(b, 0);
            continue a;
          }
          var d = [];
          for (c = 0; c < NCH(b); c += 2) d[c / 2] = astForExpr(a, CHILD(b, c));
          if ("and" === CHILD(b, 1).value) return new Sk.astnodes.BoolOp(Sk.astnodes.And, d, b.lineno, b.col_offset);
          Sk.asserts.assert("or" === CHILD(b, 1).value);
          return new Sk.astnodes.BoolOp(Sk.astnodes.Or, d, b.lineno, b.col_offset);
        case SYM.not_test:
          if (1 === NCH(b)) {
            b = CHILD(b, 0);
            continue a;
          } else return new Sk.astnodes.UnaryOp(Sk.astnodes.Not, astForExpr(a, CHILD(b, 1)), b.lineno, b.col_offset);
        case SYM.comparison:
          if (1 === NCH(b)) {
            b = CHILD(b, 0);
            continue a;
          } else {
            var e = [];
            d = [];
            for (c = 1; c < NCH(b); c += 2) (e[(c - 1) / 2] = astForCompOp(a, CHILD(b, c))), (d[(c - 1) / 2] = astForExpr(a, CHILD(b, c + 1)));
            return new Sk.astnodes.Compare(astForExpr(a, CHILD(b, 0)), e, d, b.lineno, b.col_offset);
          }
        case SYM.expr:
        case SYM.xor_expr:
        case SYM.and_expr:
        case SYM.shift_expr:
        case SYM.arith_expr:
        case SYM.term:
          if (1 === NCH(b)) {
            b = CHILD(b, 0);
            continue a;
          }
          return astForBinop(a, b);
        case SYM.yield_expr:
          return (c = null), 2 === NCH(b) && (c = astForTestlist(a, CHILD(b, 1))), new Sk.astnodes.Yield(c, b.lineno, b.col_offset);
        case SYM.factor:
          if (1 === NCH(b)) {
            b = CHILD(b, 0);
            continue a;
          }
          return astForFactor(a, b);
        case SYM.power:
          return astForPower(a, b);
        default:
          Sk.asserts.fail("unhandled expr n.type: " + b.type.toString());
      }
      break;
    }
  }
  function astForPrintStmt(a, b) {
    var c;
    var d = 1;
    var e = null;
    REQ(b, SYM.print_stmt);
    2 <= NCH(b) && CHILD(b, 1).type === TOK.T_RIGHTSHIFT && ((e = astForExpr(a, CHILD(b, 2))), (d = 4));
    var f = [];
    for (c = 0; d < NCH(b); d += 2, ++c) f[c] = astForExpr(a, CHILD(b, d));
    a = CHILD(b, NCH(b) - 1).type === TOK.T_COMMA ? !1 : !0;
    return new Sk.astnodes.Print(e, f, a, b.lineno, b.col_offset);
  }
  function astForStmt(a, b) {
    b.type === SYM.stmt && (Sk.asserts.assert(1 === NCH(b)), (b = CHILD(b, 0)));
    b.type === SYM.simple_stmt && (Sk.asserts.assert(1 === numStmts(b)), (b = CHILD(b, 0)));
    if (b.type === SYM.small_stmt)
      switch ((REQ(b, SYM.small_stmt), (b = CHILD(b, 0)), b.type)) {
        case SYM.expr_stmt:
          return astForExprStmt(a, b);
        case SYM.print_stmt:
          return astForPrintStmt(a, b);
        case SYM.del_stmt:
          return astForDelStmt(a, b);
        case SYM.pass_stmt:
          return new Sk.astnodes.Pass(b.lineno, b.col_offset);
        case SYM.flow_stmt:
          return astForFlowStmt(a, b);
        case SYM.import_stmt:
          return astForImportStmt(a, b);
        case SYM.global_stmt:
          return astForGlobalStmt(a, b);
        case SYM.exec_stmt:
          return astForExecStmt(a, b);
        case SYM.assert_stmt:
          return astForAssertStmt(a, b);
        case SYM.debugger_stmt:
          return new Sk.astnodes.Debugger_(b.lineno, b.col_offset);
        default:
          Sk.asserts.fail("unhandled small_stmt");
      }
    else {
      var c = CHILD(b, 0);
      REQ(b, SYM.compound_stmt);
      switch (c.type) {
        case SYM.if_stmt:
          return astForIfStmt(a, c);
        case SYM.while_stmt:
          return astForWhileStmt(a, c);
        case SYM.for_stmt:
          return astForForStmt(a, c);
        case SYM.try_stmt:
          return astForTryStmt(a, c);
        case SYM.with_stmt:
          return astForWithStmt(a, c);
        case SYM.funcdef:
          return astForFuncdef(a, c, []);
        case SYM.classdef:
          return astForClassdef(a, c, []);
        case SYM.decorated:
          return astForDecorated(a, c);
        default:
          Sk.asserts.assert("unhandled compound_stmt");
      }
    }
  }
  Sk.astFromParse = function (a, b, c) {
    var d,
      e = new Compiling("utf-8", b, c),
      f = [],
      g = 0;
    switch (a.type) {
      case SYM.file_input:
        for (d = 0; d < NCH(a) - 1; ++d) {
          var h = CHILD(a, d);
          if (a.type !== TOK.T_NEWLINE)
            if ((REQ(h, SYM.stmt), (c = numStmts(h)), 1 === c)) f[g++] = astForStmt(e, h);
            else for (h = CHILD(h, 0), REQ(h, SYM.simple_stmt), b = 0; b < c; ++b) f[g++] = astForStmt(e, CHILD(h, 2 * b));
        }
        return new Sk.astnodes.Module(f);
      case SYM.eval_input:
        Sk.asserts.fail("todo;");
      case SYM.single_input:
        Sk.asserts.fail("todo;");
      default:
        Sk.asserts.fail("todo;");
    }
  };
  Sk.astDump = function (a) {
    var b = function (a) {
        var b,
          c = "";
        for (b = 0; b < a; ++b) c += " ";
        return c;
      },
      c = function (a, e) {
        var d;
        if (null === a) return e + "None";
        if (a.prototype && void 0 !== a.prototype._astname && a.prototype._isenum) return e + a.prototype._astname + "()";
        if (void 0 !== a._astname) {
          var g = b(a._astname.length + 1);
          var h = [];
          for (d = 0; d < a._fields.length; d += 2) {
            var k = a._fields[d];
            var l = a._fields[d + 1](a);
            var m = b(k.length + 1);
            h.push([k, c(l, e + g + m)]);
          }
          l = [];
          for (d = 0; d < h.length; ++d) (m = h[d]), l.push(m[0] + "=" + m[1].replace(/^\s+/, ""));
          d = l.join(",\n" + e + g);
          return e + a._astname + "(" + d + ")";
        }
        if (Sk.isArrayLike(a)) {
          g = [];
          for (d = 0; d < a.length; ++d) (h = a[d]), g.push(c(h, e + " "));
          a = g.join(",\n");
          return e + "[" + a.replace(/^\s+/, "") + "]";
        }
        a = !0 === a ? "True" : !1 === a ? "False" : a instanceof Sk.builtin.lng ? a.tp$str().v : a instanceof Sk.builtin.str ? a.$r().v : "" + a;
        return e + a;
      };
    return c(a, "");
  };
  Sk.exportSymbol("Sk.astFromParse", Sk.astFromParse);
  Sk.exportSymbol("Sk.astDump", Sk.astDump);
  var DEF_GLOBAL = 1,
    DEF_LOCAL = 2,
    DEF_PARAM = 4,
    USE = 8,
    DEF_STAR = 16,
    DEF_DOUBLESTAR = 32,
    DEF_INTUPLE = 64,
    DEF_FREE = 128,
    DEF_FREE_GLOBAL = 256,
    DEF_FREE_CLASS = 512,
    DEF_IMPORT = 1024,
    DEF_BOUND = DEF_LOCAL | DEF_PARAM | DEF_IMPORT,
    SCOPE_OFF = 11,
    SCOPE_MASK = 7,
    LOCAL = 1,
    GLOBAL_EXPLICIT = 2,
    GLOBAL_IMPLICIT = 3,
    FREE = 4,
    CELL = 5,
    OPT_IMPORT_STAR = 1,
    OPT_EXEC = 2,
    OPT_BARE_EXEC = 4,
    OPT_TOPLEVEL = 8,
    GENERATOR = 2,
    GENERATOR_EXPRESSION = 2,
    ModuleBlock = "module",
    FunctionBlock = "function",
    ClassBlock = "class",
    SYMTAB_CONSTS = {
      DEF_GLOBAL: DEF_GLOBAL,
      DEF_LOCAL: DEF_LOCAL,
      DEF_PARAM: DEF_PARAM,
      USE: USE,
      DEF_STAR: DEF_STAR,
      DEF_DOUBLESTAR: DEF_DOUBLESTAR,
      DEF_INTUPLE: DEF_INTUPLE,
      DEF_FREE: DEF_FREE,
      DEF_FREE_GLOBAL: DEF_FREE_GLOBAL,
      DEF_FREE_CLASS: DEF_FREE_CLASS,
      DEF_IMPORT: DEF_IMPORT,
      DEF_BOUND: DEF_BOUND,
      SCOPE_OFF: SCOPE_OFF,
      SCOPE_MASK: SCOPE_MASK,
      LOCAL: LOCAL,
      GLOBAL_EXPLICIT: GLOBAL_EXPLICIT,
      GLOBAL_IMPLICIT: GLOBAL_IMPLICIT,
      FREE: FREE,
      CELL: CELL,
      OPT_IMPORT_STAR: OPT_IMPORT_STAR,
      OPT_EXEC: OPT_EXEC,
      OPT_BARE_EXEC: OPT_BARE_EXEC,
      OPT_TOPLEVEL: OPT_TOPLEVEL,
      GENERATOR: GENERATOR,
      GENERATOR_EXPRESSION: GENERATOR_EXPRESSION,
      ModuleBlock: ModuleBlock,
      FunctionBlock: FunctionBlock,
      ClassBlock: ClassBlock,
    };
  Sk.exportSymbol("SYMTAB_CONSTS", SYMTAB_CONSTS);
  function Symbol_(a, b, c) {
    this.__name = a;
    this.__flags = b;
    this.__scope = (b >> SCOPE_OFF) & SCOPE_MASK;
    this.__namespaces = c || [];
  }
  Symbol_.prototype.get_name = function () {
    return this.__name;
  };
  Symbol_.prototype.is_referenced = function () {
    return !!(this.__flags & USE);
  };
  Symbol_.prototype.is_parameter = function () {
    return !!(this.__flags & DEF_PARAM);
  };
  Symbol_.prototype.is_global = function () {
    return this.__scope === GLOBAL_IMPLICIT || this.__scope == GLOBAL_EXPLICIT;
  };
  Symbol_.prototype.is_declared_global = function () {
    return this.__scope == GLOBAL_EXPLICIT;
  };
  Symbol_.prototype.is_local = function () {
    return !!(this.__flags & DEF_BOUND);
  };
  Symbol_.prototype.is_free = function () {
    return this.__scope == FREE;
  };
  Symbol_.prototype.is_imported = function () {
    return !!(this.__flags & DEF_IMPORT);
  };
  Symbol_.prototype.is_assigned = function () {
    return !!(this.__flags & DEF_LOCAL);
  };
  Symbol_.prototype.is_namespace = function () {
    return this.__namespaces && 0 < this.__namespaces.length;
  };
  Symbol_.prototype.get_namespaces = function () {
    return this.__namespaces;
  };
  var astScopeCounter = 0;
  function SymbolTableScope(a, b, c, d, e) {
    this.symFlags = {};
    this.name = b;
    this.varnames = [];
    this.children = [];
    this.blockType = c;
    this.returnsValue = this.varkeywords = this.varargs = this.generator = this.childHasFree = this.hasFree = this.isNested = !1;
    this.lineno = e;
    this.table = a;
    a.cur && (a.cur.nested || a.cur.blockType === FunctionBlock) && (this.isNested = !0);
    d.scopeId = astScopeCounter++;
    a.stss[d.scopeId] = this;
    this.symbols = {};
  }
  SymbolTableScope.prototype.get_type = function () {
    return this.blockType;
  };
  SymbolTableScope.prototype.get_name = function () {
    return this.name;
  };
  SymbolTableScope.prototype.get_lineno = function () {
    return this.lineno;
  };
  SymbolTableScope.prototype.is_nested = function () {
    return this.isNested;
  };
  SymbolTableScope.prototype.has_children = function () {
    return 0 < this.children.length;
  };
  SymbolTableScope.prototype.get_identifiers = function () {
    return this._identsMatching(function () {
      return !0;
    });
  };
  SymbolTableScope.prototype.lookup = function (a) {
    if (this.symbols.hasOwnProperty(a)) a = this.symbols[a];
    else {
      var b = this.symFlags[a];
      var c = this.__check_children(a);
      a = this.symbols[a] = new Symbol_(a, b, c);
    }
    return a;
  };
  SymbolTableScope.prototype.__check_children = function (a) {
    var b,
      c = [];
    for (b = 0; b < this.children.length; ++b) {
      var d = this.children[b];
      d.name === a && c.push(d);
    }
    return c;
  };
  SymbolTableScope.prototype._identsMatching = function (a) {
    var b,
      c = [];
    for (b in this.symFlags) this.symFlags.hasOwnProperty(b) && a(this.symFlags[b]) && c.push(b);
    c.sort();
    return c;
  };
  SymbolTableScope.prototype.get_parameters = function () {
    Sk.asserts.assert("function" == this.get_type(), "get_parameters only valid for function scopes");
    this._funcParams ||
      (this._funcParams = this._identsMatching(function (a) {
        return a & DEF_PARAM;
      }));
    return this._funcParams;
  };
  SymbolTableScope.prototype.get_locals = function () {
    Sk.asserts.assert("function" == this.get_type(), "get_locals only valid for function scopes");
    this._funcLocals ||
      (this._funcLocals = this._identsMatching(function (a) {
        return a & DEF_BOUND;
      }));
    return this._funcLocals;
  };
  SymbolTableScope.prototype.get_globals = function () {
    Sk.asserts.assert("function" == this.get_type(), "get_globals only valid for function scopes");
    this._funcGlobals ||
      (this._funcGlobals = this._identsMatching(function (a) {
        a = (a >> SCOPE_OFF) & SCOPE_MASK;
        return a == GLOBAL_IMPLICIT || a == GLOBAL_EXPLICIT;
      }));
    return this._funcGlobals;
  };
  SymbolTableScope.prototype.get_frees = function () {
    Sk.asserts.assert("function" == this.get_type(), "get_frees only valid for function scopes");
    this._funcFrees ||
      (this._funcFrees = this._identsMatching(function (a) {
        return ((a >> SCOPE_OFF) & SCOPE_MASK) == FREE;
      }));
    return this._funcFrees;
  };
  SymbolTableScope.prototype.get_methods = function () {
    var a;
    Sk.asserts.assert("class" == this.get_type(), "get_methods only valid for class scopes");
    if (!this._classMethods) {
      var b = [];
      for (a = 0; a < this.children.length; ++a) b.push(this.children[a].name);
      b.sort();
      this._classMethods = b;
    }
    return this._classMethods;
  };
  SymbolTableScope.prototype.getScope = function (a) {
    a = this.symFlags[a];
    return void 0 === a ? 0 : (a >> SCOPE_OFF) & SCOPE_MASK;
  };
  function SymbolTable(a) {
    this.filename = a;
    this.top = this.cur = null;
    this.stack = [];
    this.curClass = this.global = null;
    this.tmpname = 0;
    this.stss = {};
  }
  SymbolTable.prototype.getStsForAst = function (a) {
    Sk.asserts.assert(void 0 !== a.scopeId, "ast wasn't added to st?");
    a = this.stss[a.scopeId];
    Sk.asserts.assert(void 0 !== a, "unknown sym tab entry");
    return a;
  };
  SymbolTable.prototype.SEQStmt = function (a) {
    var b, c;
    Sk.asserts.assert(Sk.isArrayLike(a), "SEQ: nodes isn't array? got " + a.toString());
    var d = a.length;
    for (c = 0; c < d; ++c) (b = a[c]) && this.visitStmt(b);
  };
  SymbolTable.prototype.SEQExpr = function (a) {
    var b, c;
    Sk.asserts.assert(Sk.isArrayLike(a), "SEQ: nodes isn't array? got " + a.toString());
    var d = a.length;
    for (c = 0; c < d; ++c) (b = a[c]) && this.visitExpr(b);
  };
  SymbolTable.prototype.enterBlock = function (a, b, c, d) {
    a = Sk.fixReservedNames(a);
    var e = null;
    this.cur && ((e = this.cur), this.stack.push(this.cur));
    this.cur = new SymbolTableScope(this, a, b, c, d);
    "top" === a && (this.global = this.cur.symFlags);
    e && e.children.push(this.cur);
  };
  SymbolTable.prototype.exitBlock = function () {
    this.cur = null;
    0 < this.stack.length && (this.cur = this.stack.pop());
  };
  SymbolTable.prototype.visitParams = function (a, b) {
    var c;
    for (c = 0; c < a.length; ++c) {
      var d = a[c];
      if (d.constructor === Sk.astnodes.Name) Sk.asserts.assert(d.ctx === Sk.astnodes.Param || (d.ctx === Sk.astnodes.Store && !b)), this.addDef(d.id, DEF_PARAM, d.lineno);
      else throw new Sk.builtin.SyntaxError("invalid expression in parameter list", this.filename);
    }
  };
  SymbolTable.prototype.visitArguments = function (a, b) {
    a.args && this.visitParams(a.args, !0);
    a.vararg && (this.addDef(a.vararg, DEF_PARAM, b), (this.cur.varargs = !0));
    a.kwarg && (this.addDef(a.kwarg, DEF_PARAM, b), (this.cur.varkeywords = !0));
  };
  SymbolTable.prototype.newTmpname = function (a) {
    this.addDef(new Sk.builtin.str("_[" + ++this.tmpname + "]"), DEF_LOCAL, a);
  };
  SymbolTable.prototype.addDef = function (a, b, c) {
    var d = Sk.mangleName(this.curClass, new Sk.builtin.str(a)).v;
    d = Sk.fixReservedNames(d);
    var e = this.cur.symFlags[d];
    if (void 0 !== e) {
      if (b & DEF_PARAM && e & DEF_PARAM) throw new Sk.builtin.SyntaxError("duplicate argument '" + a.v + "' in function definition", this.filename, c);
      e |= b;
    } else e = b;
    this.cur.symFlags[d] = e;
    b & DEF_PARAM ? this.cur.varnames.push(d) : b & DEF_GLOBAL && ((e = b), (a = this.global[d]), void 0 !== a && (e |= a), (this.global[d] = e));
  };
  SymbolTable.prototype.visitSlice = function (a) {
    var b;
    switch (a.constructor) {
      case Sk.astnodes.Slice:
        a.lower && this.visitExpr(a.lower);
        a.upper && this.visitExpr(a.upper);
        a.step && this.visitExpr(a.step);
        break;
      case Sk.astnodes.ExtSlice:
        for (b = 0; b < a.dims.length; ++b) this.visitSlice(a.dims[b]);
        break;
      case Sk.astnodes.Index:
        this.visitExpr(a.value);
    }
  };
  SymbolTable.prototype.visitStmt = function (a) {
    var b;
    Sk.asserts.assert(void 0 !== a, "visitStmt called with undefined");
    switch (a.constructor) {
      case Sk.astnodes.FunctionDef:
        this.addDef(a.name, DEF_LOCAL, a.lineno);
        a.args.defaults && this.SEQExpr(a.args.defaults);
        a.decorator_list && this.SEQExpr(a.decorator_list);
        this.enterBlock(a.name.v, FunctionBlock, a, a.lineno);
        this.visitArguments(a.args, a.lineno);
        this.SEQStmt(a.body);
        this.exitBlock();
        break;
      case Sk.astnodes.ClassDef:
        this.addDef(a.name, DEF_LOCAL, a.lineno);
        this.SEQExpr(a.bases);
        a.decorator_list && this.SEQExpr(a.decorator_list);
        this.enterBlock(a.name.v, ClassBlock, a, a.lineno);
        this.curClass = a.name;
        this.SEQStmt(a.body);
        this.exitBlock();
        break;
      case Sk.astnodes.Return_:
        if (a.value && (this.visitExpr(a.value), (this.cur.returnsValue = !0), this.cur.generator)) throw new Sk.builtin.SyntaxError("'return' with argument inside generator", this.filename);
        break;
      case Sk.astnodes.Delete_:
        this.SEQExpr(a.targets);
        break;
      case Sk.astnodes.Assign:
        this.SEQExpr(a.targets);
        this.visitExpr(a.value);
        break;
      case Sk.astnodes.AugAssign:
        this.visitExpr(a.target);
        this.visitExpr(a.value);
        break;
      case Sk.astnodes.Print:
        a.dest && this.visitExpr(a.dest);
        this.SEQExpr(a.values);
        break;
      case Sk.astnodes.For_:
        this.visitExpr(a.target);
        this.visitExpr(a.iter);
        this.SEQStmt(a.body);
        a.orelse && this.SEQStmt(a.orelse);
        break;
      case Sk.astnodes.While_:
        this.visitExpr(a.test);
        this.SEQStmt(a.body);
        a.orelse && this.SEQStmt(a.orelse);
        break;
      case Sk.astnodes.If_:
        this.visitExpr(a.test);
        this.SEQStmt(a.body);
        a.orelse && this.SEQStmt(a.orelse);
        break;
      case Sk.astnodes.Raise:
        a.type && (this.visitExpr(a.type), a.inst && (this.visitExpr(a.inst), a.tback && this.visitExpr(a.tback)));
        break;
      case Sk.astnodes.TryExcept:
        this.SEQStmt(a.body);
        this.SEQStmt(a.orelse);
        this.visitExcepthandlers(a.handlers);
        break;
      case Sk.astnodes.TryFinally:
        this.SEQStmt(a.body);
        this.SEQStmt(a.finalbody);
        break;
      case Sk.astnodes.Assert:
        this.visitExpr(a.test);
        a.msg && this.visitExpr(a.msg);
        break;
      case Sk.astnodes.Import_:
      case Sk.astnodes.ImportFrom:
        this.visitAlias(a.names, a.lineno);
        break;
      case Sk.astnodes.Exec:
        this.visitExpr(a.body);
        a.globals && (this.visitExpr(a.globals), a.locals && this.visitExpr(a.locals));
        break;
      case Sk.astnodes.Global:
        var c = a.names.length;
        for (b = 0; b < c; ++b) {
          var d = Sk.mangleName(this.curClass, a.names[b]).v;
          d = Sk.fixReservedNames(d);
          var e = this.cur.symFlags[d];
          if (e & (DEF_LOCAL | USE)) {
            if (e & DEF_LOCAL) throw new Sk.builtin.SyntaxError("name '" + d + "' is assigned to before global declaration", this.filename, a.lineno);
            throw new Sk.builtin.SyntaxError("name '" + d + "' is used prior to global declaration", this.filename, a.lineno);
          }
          this.addDef(new Sk.builtin.str(d), DEF_GLOBAL, a.lineno);
        }
        break;
      case Sk.astnodes.Expr:
        this.visitExpr(a.value);
        break;
      case Sk.astnodes.Pass:
      case Sk.astnodes.Break_:
      case Sk.astnodes.Debugger_:
      case Sk.astnodes.Continue_:
        break;
      case Sk.astnodes.With_:
        this.newTmpname(a.lineno);
        this.visitExpr(a.context_expr);
        a.optional_vars && (this.newTmpname(a.lineno), this.visitExpr(a.optional_vars));
        this.SEQStmt(a.body);
        break;
      default:
        Sk.asserts.fail("Unhandled type " + a.constructor.name + " in visitStmt");
    }
  };
  SymbolTable.prototype.visitExpr = function (a) {
    var b;
    Sk.asserts.assert(void 0 !== a, "visitExpr called with undefined");
    switch (a.constructor) {
      case Sk.astnodes.BoolOp:
        this.SEQExpr(a.values);
        break;
      case Sk.astnodes.BinOp:
        this.visitExpr(a.left);
        this.visitExpr(a.right);
        break;
      case Sk.astnodes.UnaryOp:
        this.visitExpr(a.operand);
        break;
      case Sk.astnodes.Lambda:
        this.addDef(new Sk.builtin.str("lambda"), DEF_LOCAL, a.lineno);
        a.args.defaults && this.SEQExpr(a.args.defaults);
        this.enterBlock("lambda", FunctionBlock, a, a.lineno);
        this.visitArguments(a.args, a.lineno);
        this.visitExpr(a.body);
        this.exitBlock();
        break;
      case Sk.astnodes.IfExp:
        this.visitExpr(a.test);
        this.visitExpr(a.body);
        this.visitExpr(a.orelse);
        break;
      case Sk.astnodes.Dict:
        this.SEQExpr(a.keys);
        this.SEQExpr(a.values);
        break;
      case Sk.astnodes.DictComp:
      case Sk.astnodes.SetComp:
        this.visitComprehension(a.generators, 0);
        break;
      case Sk.astnodes.ListComp:
        this.newTmpname(a.lineno);
        this.visitExpr(a.elt);
        this.visitComprehension(a.generators, 0);
        break;
      case Sk.astnodes.GeneratorExp:
        this.visitGenexp(a);
        break;
      case Sk.astnodes.Yield:
        a.value && this.visitExpr(a.value);
        this.cur.generator = !0;
        if (this.cur.returnsValue) throw new Sk.builtin.SyntaxError("'return' with argument inside generator", this.filename);
        break;
      case Sk.astnodes.Compare:
        this.visitExpr(a.left);
        this.SEQExpr(a.comparators);
        break;
      case Sk.astnodes.Call:
        this.visitExpr(a.func);
        this.SEQExpr(a.args);
        for (b = 0; b < a.keywords.length; ++b) this.visitExpr(a.keywords[b].value);
        a.starargs && this.visitExpr(a.starargs);
        a.kwargs && this.visitExpr(a.kwargs);
        break;
      case Sk.astnodes.Num:
      case Sk.astnodes.Str:
        break;
      case Sk.astnodes.Attribute:
        this.visitExpr(a.value);
        break;
      case Sk.astnodes.Subscript:
        this.visitExpr(a.value);
        this.visitSlice(a.slice);
        break;
      case Sk.astnodes.Name:
        this.addDef(a.id, a.ctx === Sk.astnodes.Load ? USE : DEF_LOCAL, a.lineno);
        break;
      case Sk.astnodes.List:
      case Sk.astnodes.Tuple:
      case Sk.astnodes.Set:
        this.SEQExpr(a.elts);
        break;
      default:
        Sk.asserts.fail("Unhandled type " + a.constructor.name + " in visitExpr");
    }
  };
  SymbolTable.prototype.visitComprehension = function (a, b) {
    var c,
      d = a.length;
    for (c = b; c < d; ++c) (b = a[c]), this.visitExpr(b.target), this.visitExpr(b.iter), this.SEQExpr(b.ifs);
  };
  SymbolTable.prototype.visitAlias = function (a, b) {
    var c, d;
    for (d = 0; d < a.length; ++d) {
      var e = a[d];
      var f = (c = null === e.asname ? e.name.v : e.asname.v);
      e = c.indexOf(".");
      -1 !== e && (f = c.substr(0, e));
      if ("*" !== c) this.addDef(new Sk.builtin.str(f), DEF_IMPORT, b);
      else if (this.cur.blockType !== ModuleBlock) throw new Sk.builtin.SyntaxError("import * only allowed at module level", this.filename);
    }
  };
  SymbolTable.prototype.visitGenexp = function (a) {
    var b = a.generators[0];
    this.visitExpr(b.iter);
    this.enterBlock("genexpr", FunctionBlock, a, a.lineno);
    this.cur.generator = !0;
    this.addDef(new Sk.builtin.str(".0"), DEF_PARAM, a.lineno);
    this.visitExpr(b.target);
    this.SEQExpr(b.ifs);
    this.visitComprehension(a.generators, 1);
    this.visitExpr(a.elt);
    this.exitBlock();
  };
  SymbolTable.prototype.visitExcepthandlers = function (a) {
    var b, c;
    for (b = 0; (c = a[b]); ++b) c.type && this.visitExpr(c.type), c.name && this.visitExpr(c.name), this.SEQStmt(c.body);
  };
  function _dictUpdate(a, b) {
    for (var c in b) a[c] = b[c];
  }
  SymbolTable.prototype.analyzeBlock = function (a, b, c, d) {
    var e = {};
    var f = {},
      g = {},
      h = {},
      k = {};
    a.blockType == ClassBlock && (_dictUpdate(g, d), b && _dictUpdate(h, b));
    for (m in a.symFlags) {
      var l = a.symFlags[m];
      this.analyzeName(a, f, m, l, b, e, c, d);
    }
    a.blockType !== ClassBlock && (a.blockType === FunctionBlock && _dictUpdate(h, e), b && _dictUpdate(h, b), _dictUpdate(g, d));
    e = {};
    var m = a.children.length;
    for (l = 0; l < m; ++l) if (((d = a.children[l]), this.analyzeChildBlock(d, h, k, g, e), d.hasFree || d.childHasFree)) a.childHasFree = !0;
    _dictUpdate(k, e);
    a.blockType === FunctionBlock && this.analyzeCells(f, k);
    this.updateSymbols(a.symFlags, f, b, k, a.blockType === ClassBlock);
    _dictUpdate(c, k);
  };
  SymbolTable.prototype.analyzeChildBlock = function (a, b, c, d, e) {
    var f = {};
    _dictUpdate(f, b);
    b = {};
    _dictUpdate(b, c);
    c = {};
    _dictUpdate(c, d);
    this.analyzeBlock(a, f, b, c);
    _dictUpdate(e, b);
  };
  SymbolTable.prototype.analyzeCells = function (a, b) {
    var c;
    for (c in a) {
      var d = a[c];
      d === LOCAL && void 0 !== b[c] && ((a[c] = CELL), delete b[c]);
    }
  };
  SymbolTable.prototype.updateSymbols = function (a, b, c, d, e) {
    var f;
    for (f in a) {
      var g = a[f];
      var h = b[f];
      g |= h << SCOPE_OFF;
      a[f] = g;
    }
    b = FREE << SCOPE_OFF;
    for (f in d) (d = a[f]), void 0 !== d ? e && d & (DEF_BOUND | DEF_GLOBAL) && ((d |= DEF_FREE_CLASS), (a[f] = d)) : void 0 !== c[f] && (a[f] = b);
  };
  SymbolTable.prototype.analyzeName = function (a, b, c, d, e, f, g, h) {
    if (d & DEF_GLOBAL) {
      if (d & DEF_PARAM) throw new Sk.builtin.SyntaxError("name '" + c + "' is local and global", this.filename, a.lineno);
      b[c] = GLOBAL_EXPLICIT;
      h[c] = null;
      e && void 0 !== e[c] && delete e[c];
    } else d & DEF_BOUND ? ((b[c] = LOCAL), (f[c] = null), delete h[c]) : e && void 0 !== e[c] ? ((b[c] = FREE), (a.hasFree = !0), (g[c] = null)) : ((h && void 0 !== h[c]) || !a.isNested || (a.hasFree = !0), (b[c] = GLOBAL_IMPLICIT));
  };
  SymbolTable.prototype.analyze = function () {
    this.analyzeBlock(this.top, null, {}, {});
  };
  Sk.symboltable = function (a, b) {
    var c = new SymbolTable(b);
    c.enterBlock("top", ModuleBlock, a, 0);
    c.top = c.cur;
    for (b = 0; b < a.body.length; ++b) c.visitStmt(a.body[b]);
    c.exitBlock();
    c.analyze();
    return c;
  };
  Sk.dumpSymtab = function (a) {
    var b = function (a) {
        return a ? "True" : "False";
      },
      c = function (a) {
        var b,
          c = [];
        for (b = 0; b < a.length; ++b) c.push(new Sk.builtin.str(a[b]).$r().v);
        return "[" + c.join(", ") + "]";
      },
      d = function (a, f) {
        var e, h;
        void 0 === f && (f = "");
        var k = f + "Sym_type: " + a.get_type() + "\n";
        k += f + "Sym_name: " + a.get_name() + "\n";
        k += f + "Sym_lineno: " + a.get_lineno() + "\n";
        k += f + "Sym_nested: " + b(a.is_nested()) + "\n";
        k += f + "Sym_haschildren: " + b(a.has_children()) + "\n";
        "class" === a.get_type()
          ? (k += f + "Class_methods: " + c(a.get_methods()) + "\n")
          : "function" === a.get_type() &&
            ((k += f + "Func_params: " + c(a.get_parameters()) + "\n"), (k += f + "Func_locals: " + c(a.get_locals()) + "\n"), (k += f + "Func_globals: " + c(a.get_globals()) + "\n"), (k += f + "Func_frees: " + c(a.get_frees()) + "\n"));
        k += f + "-- Identifiers --\n";
        var l = a.get_identifiers();
        var m = l.length;
        for (h = 0; h < m; ++h) {
          var n = a.lookup(l[h]);
          k += f + "name: " + n.get_name() + "\n";
          k += f + "  is_referenced: " + b(n.is_referenced()) + "\n";
          k += f + "  is_imported: " + b(n.is_imported()) + "\n";
          k += f + "  is_parameter: " + b(n.is_parameter()) + "\n";
          k += f + "  is_global: " + b(n.is_global()) + "\n";
          k += f + "  is_declared_global: " + b(n.is_declared_global()) + "\n";
          k += f + "  is_local: " + b(n.is_local()) + "\n";
          k += f + "  is_free: " + b(n.is_free()) + "\n";
          k += f + "  is_assigned: " + b(n.is_assigned()) + "\n";
          k += f + "  is_namespace: " + b(n.is_namespace()) + "\n";
          var p = n.get_namespaces();
          var r = p.length;
          k += f + "  namespaces: [\n";
          var q = [];
          for (e = 0; e < r; ++e) (n = p[e]), q.push(d(n, f + "    "));
          k += q.join("\n");
          k += f + "  ]\n";
        }
        return k;
      };
    return d(a.top, "");
  };
  Sk.exportSymbol("Sk.symboltable", Sk.symboltable);
  Sk.exportSymbol("Sk.dumpSymtab", Sk.dumpSymtab);
  var out;
  Sk.gensymcount = 0;
  function Compiler(a, b, c, d, e) {
    this.filename = a;
    this.st = b;
    this.flags = c;
    this.canSuspend = d;
    this.interactive = !1;
    this.nestlevel = 0;
    this.u = null;
    this.stack = [];
    this.result = [];
    this.allUnits = [];
    this.source = e ? e.split("\n") : !1;
  }
  function CompilerUnit() {
    this.name = this.ste = null;
    this.doesSuspend = this.canSuspend = !1;
    this.private_ = null;
    this.lineno = this.firstlineno = 0;
    this.linenoSet = !1;
    this.localnames = [];
    this.localtemps = [];
    this.tempsToSave = [];
    this.blocknum = 0;
    this.blocks = [];
    this.curblock = 0;
    this.consts = {};
    this.scopename = null;
    this.suffixCode = this.switchCode = this.varDeclsCode = this.prefixCode = "";
    this.breakBlocks = [];
    this.continueBlocks = [];
    this.exceptBlocks = [];
    this.finallyBlocks = [];
  }
  CompilerUnit.prototype.activateScope = function () {
    var a = this;
    out = function () {
      var b,
        c = a.blocks[a.curblock];
      if (null === c._next) for (b = 0; b < arguments.length; ++b) c.push(arguments[b]);
    };
  };
  Compiler.prototype.getSourceLine = function (a) {
    Sk.asserts.assert(this.source);
    return this.source[a - 1];
  };
  Compiler.prototype.annotateSource = function (a) {
    if (this.source) {
      var b = a.lineno;
      var c = a.col_offset;
      out("\n//\n// line ", b, ":\n// ", this.getSourceLine(b), "\n// ");
      for (a = 0; a < c; ++a) out(" ");
      out("^\n//\n");
      out("$currLineNo = ", b, ";\n$currColNo = ", c, ";\n\n");
    }
  };
  Compiler.prototype.gensym = function (a) {
    return (a = "$" + (a || "") + Sk.gensymcount++);
  };
  Compiler.prototype.niceName = function (a) {
    return this.gensym(a.replace("<", "").replace(">", "").replace(" ", "_"));
  };
  var reservedWords_ = {
    abstract: !0,
    as: !0,
    boolean: !0,
    break: !0,
    byte: !0,
    case: !0,
    catch: !0,
    char: !0,
    class: !0,
    continue: !0,
    const: !0,
    debugger: !0,
    default: !0,
    delete: !0,
    do: !0,
    double: !0,
    else: !0,
    enum: !0,
    export: !0,
    extends: !0,
    false: !0,
    final: !0,
    finally: !0,
    float: !0,
    for: !0,
    function: !0,
    goto: !0,
    if: !0,
    implements: !0,
    import: !0,
    in: !0,
    instanceof: !0,
    int: !0,
    interface: !0,
    is: !0,
    long: !0,
    namespace: !0,
    native: !0,
    new: !0,
    null: !0,
    package: !0,
    private: !0,
    protected: !0,
    public: !0,
    return: !0,
    short: !0,
    static: !0,
    super: !1,
    switch: !0,
    synchronized: !0,
    this: !0,
    throw: !0,
    throws: !0,
    transient: !0,
    true: !0,
    try: !0,
    typeof: !0,
    use: !0,
    var: !0,
    void: !0,
    volatile: !0,
    while: !0,
    with: !0,
  };
  function fixReservedWords(a) {
    return !0 !== reservedWords_[a] ? a : a + "_$rw$";
  }
  var reservedNames_ = {
    __defineGetter__: !0,
    __defineSetter__: !0,
    apply: !0,
    call: !0,
    eval: !0,
    hasOwnProperty: !0,
    isPrototypeOf: !0,
    __lookupGetter__: !0,
    __lookupSetter__: !0,
    __noSuchMethod__: !0,
    propertyIsEnumerable: !0,
    toSource: !0,
    toLocaleString: !0,
    toString: !0,
    unwatch: !0,
    valueOf: !0,
    watch: !0,
    length: !0,
  };
  function fixReservedNames(a) {
    return reservedNames_[a] ? a + "_$rn$" : a;
  }
  function unfixReserved(a) {
    return a.replace(/_\$r[wn]\$$/, "");
  }
  function mangleName(a, b) {
    var c = b.v;
    if (null === a || null === c || "_" !== c.charAt(0) || "_" !== c.charAt(1) || ("_" === c.charAt(c.length - 1) && "_" === c.charAt(c.length - 2))) return b;
    var d = a.v;
    d.replace(/_/g, "");
    if ("" === d) return b;
    d = a.v;
    d.replace(/^_*/, "");
    return (d = new Sk.builtin.str("_" + d + c));
  }
  Compiler.prototype.makeConstant = function (a) {
    var b,
      c = "";
    for (b = 0; b < arguments.length; ++b) c += arguments[b];
    for (d in this.u.consts) if (this.u.consts.hasOwnProperty(d) && ((b = this.u.consts[d]), b == c)) return d;
    var d = this.u.scopename + "." + this.gensym("const");
    this.u.consts[d] = c;
    return d;
  };
  Compiler.prototype._gr = function (a, b) {
    var c,
      d = this.gensym(a);
    this.u.localtemps.push(d);
    out("var ", d, "=");
    for (c = 1; c < arguments.length; ++c) out(arguments[c]);
    out(";");
    return d;
  };
  Compiler.prototype.outputInterruptTest = function () {
    var a = "";
    if (null !== Sk.execLimit || (null !== Sk.yieldLimit && this.u.canSuspend))
      (a += "var $dateNow = Date.now();"),
        null !== Sk.execLimit && (a += "if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())}"),
        null !== Sk.yieldLimit &&
          this.u.canSuspend &&
          ((a = a + "if ($dateNow - Sk.lastYield > Sk.yieldLimit) {" + ("var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '" + this.filename + "',$currLineNo,$currColNo);")),
          (a += "$susp.$blk = $blk;$susp.optional = true;return $susp;}"),
          (this.u.doesSuspend = !0));
    return a;
  };
  Compiler.prototype._jumpfalse = function (a, b) {
    a = this._gr("jfalse", "(", a, "===false||!Sk.misceval.isTrue(", a, "))");
    out("if(", a, "){/*test failed */$blk=", b, ";continue;}");
  };
  Compiler.prototype._jumpundef = function (a, b) {
    out("if(", a, "===undefined){$blk=", b, ";continue;}");
  };
  Compiler.prototype._jumpnotundef = function (a, b) {
    out("if(", a, "!==undefined){$blk=", b, ";continue;}");
  };
  Compiler.prototype._jumptrue = function (a, b) {
    a = this._gr("jtrue", "(", a, "===true||Sk.misceval.isTrue(", a, "))");
    out("if(", a, "){/*test passed */$blk=", b, ";continue;}");
  };
  Compiler.prototype._jump = function (a) {
    null === this.u.blocks[this.u.curblock]._next && (out("$blk=", a, ";"), (this.u.blocks[this.u.curblock]._next = a));
  };
  Compiler.prototype._checkSuspension = function (a) {
    if (this.u.canSuspend) {
      var b = this.newBlock("function return or resume suspension");
      this._jump(b);
      this.setBlock(b);
      a = a || { lineno: "$currLineNo", col_offset: "$currColNo" };
      out("if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'" + this.filename + "'," + a.lineno + "," + a.col_offset + "); }");
      this.u.doesSuspend = !0;
      this.u.tempsToSave = this.u.tempsToSave.concat(this.u.localtemps);
    } else out("if ($ret && $ret.$isSuspension) { $ret = Sk.misceval.retryOptionalSuspensionOrThrow($ret); }");
  };
  Compiler.prototype.ctuplelistorset = function (a, b, c) {
    Sk.asserts.assert("tuple" === c || "list" === c || "set" === c);
    if (a.ctx === Sk.astnodes.Store) {
      var d = this._gr("items", "Sk.abstr.sequenceUnpack(" + b + "," + a.elts.length + ")");
      for (b = 0; b < a.elts.length; ++b) this.vexpr(a.elts[b], d + "[" + b + "]");
    } else if (a.ctx === Sk.astnodes.Load || "set" === c) {
      if ("tuple" === c) {
        var e = !0;
        d = [];
        for (b = 0; b < a.elts.length; ++b) {
          var f = this.vexpr(a.elts[b]);
          e && -1 == f.indexOf("$const") && (e = !1);
          d.push(f);
        }
        if (e) return this.makeConstant("new Sk.builtin.tuple([" + d + "])");
        for (b = 0; b < d.length; ++b) d[b] = this._gr("elem", d[b]);
        return this._gr("load" + c, "new Sk.builtins['", c, "']([", d, "])");
      }
      d = [];
      for (b = 0; b < a.elts.length; ++b) d.push(this._gr("elem", this.vexpr(a.elts[b])));
      return this._gr("load" + c, "new Sk.builtins['", c, "']([", d, "])");
    }
  };
  Compiler.prototype.cdict = function (a) {
    var b;
    Sk.asserts.assert(a.values.length === a.keys.length);
    var c = [];
    for (b = 0; b < a.values.length; ++b) {
      var d = this.vexpr(a.values[b]);
      c.push(this.vexpr(a.keys[b]));
      c.push(d);
    }
    return this._gr("loaddict", "new Sk.builtins['dict']([", c, "])");
  };
  Compiler.prototype.clistcomp = function (a) {
    Sk.asserts.assert(a instanceof Sk.astnodes.ListComp);
    var b = this._gr("_compr", "new Sk.builtins['list']([])");
    return this.ccompgen("list", b, a.generators, 0, a.elt, null, a);
  };
  Compiler.prototype.cdictcomp = function (a) {
    Sk.asserts.assert(a instanceof Sk.astnodes.DictComp);
    var b = this._gr("_dcompr", "new Sk.builtins.dict([])");
    return this.ccompgen("dict", b, a.generators, 0, a.value, a.key, a);
  };
  Compiler.prototype.csetcomp = function (a) {
    Sk.asserts.assert(a instanceof Sk.astnodes.SetComp);
    var b = this._gr("_setcompr", "new Sk.builtins.set([])");
    return this.ccompgen("set", b, a.generators, 0, a.elt, null, a);
  };
  Compiler.prototype.ccompgen = function (a, b, c, d, e, f, g) {
    var h = this.newBlock(a + " comp start"),
      k = this.newBlock(a + " comp skip"),
      l = this.newBlock(a + " comp anchor"),
      m = c[d],
      n = this.vexpr(m.iter);
    n = this._gr("iter", "Sk.abstr.iter(", n, ")");
    var p;
    this._jump(h);
    this.setBlock(h);
    out("$ret = Sk.abstr.iternext(", n, ", true);");
    this._checkSuspension(g);
    n = this._gr("next", "$ret");
    this._jumpundef(n, l);
    this.vexpr(m.target, n);
    var r = m.ifs.length;
    for (p = 0; p < r; ++p) (n = this.vexpr(m.ifs[p])), this._jumpfalse(n, h);
    ++d < c.length && this.ccompgen(a, b, c, d, e, f, g);
    d >= c.length &&
      ((c = this.vexpr(e)),
      "dict" === a ? ((a = this.vexpr(f)), out(b, ".mp$ass_subscript(", a, ",", c, ");")) : "list" === a ? out(b, ".v.push(", c, ");") : "set" === a && out(b, ".v.mp$ass_subscript(", c, ", true);"),
      this._jump(k),
      this.setBlock(k));
    this._jump(h);
    this.setBlock(l);
    return b;
  };
  Compiler.prototype.cyield = function (a) {
    if (this.u.ste.blockType !== SYMTAB_CONSTS.FunctionBlock) throw new SyntaxError("'yield' outside function");
    var b = "null";
    a.value && (b = this.vexpr(a.value));
    a = this.newBlock("after yield");
    out("return [/*resume*/", a, ",/*ret*/", b, "];");
    this.setBlock(a);
    return "$gen.gi$sentvalue";
  };
  Compiler.prototype.ccompare = function (a) {
    var b;
    Sk.asserts.assert(a.ops.length === a.comparators.length);
    var c = this.vexpr(a.left);
    var d = a.ops.length;
    var e = this.newBlock("done");
    var f = this._gr("compareres", "null");
    for (b = 0; b < d; ++b) {
      var g = this.vexpr(a.comparators[b]);
      out("$ret = Sk.builtin.bool(Sk.misceval.richCompareBool(", c, ",", g, ",'", a.ops[b].prototype._astname, "', true));");
      this._checkSuspension(a);
      out(f, "=$ret;");
      this._jumpfalse("$ret", e);
      c = g;
    }
    this._jump(e);
    this.setBlock(e);
    return f;
  };
  Compiler.prototype.ccall = function (a) {
    var b,
      c = this.vexpr(a.func),
      d = this.vseqexpr(a.args);
    if (0 < a.keywords.length || a.starargs || a.kwargs) {
      var e = [];
      for (b = 0; b < a.keywords.length; ++b) e.push("'" + a.keywords[b].arg.v + "'"), e.push(this.vexpr(a.keywords[b].value));
      var f = "[" + e.join(",") + "]";
      b = e = "undefined";
      a.starargs && (e = this.vexpr(a.starargs));
      a.kwargs && (b = this.vexpr(a.kwargs));
      out("$ret;");
      out("$ret = Sk.misceval.callOrSuspend(", c, ",", b, ",", e, ",", f, 0 < d.length ? "," : "", d, ");");
    } else
      out("$ret;"),
        Sk.__future__.super_args &&
          a.func.id &&
          "super" === a.func.id.v &&
          0 == d.length &&
          (out('if (typeof self === "undefined" || self.toString().indexOf("Window") > 0) { throw new Sk.builtin.RuntimeError("super(): no arguments") };'), d.push("$gbl.__class__"), d.push("self")),
        0 < d.length ? out("$ret = Sk.misceval.callsimOrSuspendArray(", c, ", [", d, "]);") : out("$ret = Sk.misceval.callsimOrSuspendArray(", c, ");");
    this._checkSuspension(a);
    return this._gr("call", "$ret");
  };
  Compiler.prototype.cslice = function (a) {
    Sk.asserts.assert(a instanceof Sk.astnodes.Slice);
    var b = a.lower ? this.vexpr(a.lower) : a.step ? "Sk.builtin.none.none$" : "new Sk.builtin.int_(0)";
    var c = a.upper ? this.vexpr(a.upper) : a.step ? "Sk.builtin.none.none$" : "new Sk.builtin.int_(2147483647)";
    a = a.step ? this.vexpr(a.step) : "Sk.builtin.none.none$";
    return this._gr("slice", "new Sk.builtins['slice'](", b, ",", c, ",", a, ")");
  };
  Compiler.prototype.eslice = function (a) {
    var b;
    Sk.asserts.assert(a instanceof Array);
    var c = [];
    for (b = 0; b < a.length; b++) c.push(this.vslicesub(a[b]));
    return this._gr("extslice", "new Sk.builtins['tuple']([", c, "])");
  };
  Compiler.prototype.vslicesub = function (a) {
    switch (a.constructor) {
      case Sk.astnodes.Index:
        var b = this.vexpr(a.value);
        break;
      case Sk.astnodes.Slice:
        b = this.cslice(a);
        break;
      case Sk.astnodes.Ellipsis:
        Sk.asserts.fail("todo compile.js Ellipsis;");
        break;
      case Sk.astnodes.ExtSlice:
        b = this.eslice(a.dims);
        break;
      default:
        Sk.asserts.fail("invalid subscript kind");
    }
    return b;
  };
  Compiler.prototype.vslice = function (a, b, c, d) {
    a = this.vslicesub(a);
    return this.chandlesubscr(b, c, a, d);
  };
  Compiler.prototype.chandlesubscr = function (a, b, c, d) {
    if (a === Sk.astnodes.Load || a === Sk.astnodes.AugLoad) return out("$ret = Sk.abstr.objectGetItem(", b, ",", c, ", true);"), this._checkSuspension(), this._gr("lsubscr", "$ret");
    a === Sk.astnodes.Store || a === Sk.astnodes.AugStore
      ? (out("$ret = Sk.abstr.objectSetItem(", b, ",", c, ",", d, ", true);"), this._checkSuspension())
      : a === Sk.astnodes.Del
      ? out("Sk.abstr.objectDelItem(", b, ",", c, ");")
      : Sk.asserts.fail("handlesubscr fail");
  };
  Compiler.prototype.cboolop = function (a) {
    var b, c;
    Sk.asserts.assert(a instanceof Sk.astnodes.BoolOp);
    var d = a.op === Sk.astnodes.And ? this._jumpfalse : this._jumptrue;
    var e = this.newBlock("end of boolop");
    var f = a.values;
    var g = f.length;
    for (b = 0; b < g; ++b) (a = this.vexpr(f[b])), 0 === b && (c = this._gr("boolopsucc", a)), out(c, "=", a, ";"), d.call(this, a, e);
    this._jump(e);
    this.setBlock(e);
    return c;
  };
  Compiler.prototype.vexpr = function (a, b, c, d) {
    var e;
    a.lineno > this.u.lineno && ((this.u.lineno = a.lineno), (this.u.linenoSet = !1));
    switch (a.constructor) {
      case Sk.astnodes.BoolOp:
        return this.cboolop(a);
      case Sk.astnodes.BinOp:
        return this._gr("binop", "Sk.abstr.numberBinOp(", this.vexpr(a.left), ",", this.vexpr(a.right), ",'", a.op.prototype._astname, "')");
      case Sk.astnodes.UnaryOp:
        return this._gr("unaryop", "Sk.abstr.numberUnaryOp(", this.vexpr(a.operand), ",'", a.op.prototype._astname, "')");
      case Sk.astnodes.Lambda:
        return this.clambda(a);
      case Sk.astnodes.IfExp:
        return this.cifexp(a);
      case Sk.astnodes.Dict:
        return this.cdict(a);
      case Sk.astnodes.ListComp:
        return this.clistcomp(a);
      case Sk.astnodes.DictComp:
        return this.cdictcomp(a);
      case Sk.astnodes.SetComp:
        return this.csetcomp(a);
      case Sk.astnodes.GeneratorExp:
        return this.cgenexp(a);
      case Sk.astnodes.Yield:
        return this.cyield(a);
      case Sk.astnodes.Compare:
        return this.ccompare(a);
      case Sk.astnodes.Call:
        return (b = this.ccall(a)), this.annotateSource(a), b;
      case Sk.astnodes.Num:
        if ("number" === typeof a.n) return a.n;
        if (a.n instanceof Sk.builtin.int_) return this.makeConstant("new Sk.builtin.int_(" + a.n.v + ")");
        if (a.n instanceof Sk.builtin.float_) return (a = 0 === a.n.v && -Infinity === 1 / a.n.v ? "-0" : a.n.v), this.makeConstant("new Sk.builtin.float_(" + a + ")");
        if (a.n instanceof Sk.builtin.lng) return this.makeConstant("Sk.longFromStr('" + a.n.tp$str().v + "')");
        if (a.n instanceof Sk.builtin.complex)
          return this.makeConstant(
            "new Sk.builtin.complex(new Sk.builtin.float_(" +
              (0 === a.n.real.v && -Infinity === 1 / a.n.real.v ? "-0" : a.n.real.v) +
              "), new Sk.builtin.float_(" +
              (0 === a.n.imag.v && -Infinity === 1 / a.n.imag.v ? "-0" : a.n.imag.v) +
              "))"
          );
        Sk.asserts.fail("unhandled Num type");
      case Sk.astnodes.Str:
        return this.makeConstant("new Sk.builtin.str(", a.s.$r().v, ")");
      case Sk.astnodes.Attribute:
        a.ctx !== Sk.astnodes.AugLoad && a.ctx !== Sk.astnodes.AugStore && (e = this.vexpr(a.value));
        d = a.attr.$r().v;
        d = d.substring(1, d.length - 1);
        d = mangleName(this.u.private_, new Sk.builtin.str(d)).v;
        d = fixReservedWords(d);
        d = fixReservedNames(d);
        d = this.makeConstant("new Sk.builtin.str('" + d + "')");
        switch (a.ctx) {
          case Sk.astnodes.AugLoad:
            return out("$ret = Sk.abstr.gattr(", c, ",", d, ", true);"), this._checkSuspension(a), this._gr("lattr", "$ret");
          case Sk.astnodes.Load:
            return out("$ret = Sk.abstr.gattr(", e, ",", d, ", true);"), this._checkSuspension(a), this._gr("lattr", "$ret");
          case Sk.astnodes.AugStore:
            out("$ret = undefined;");
            out("if(", b, "!==undefined){");
            out("$ret = Sk.abstr.sattr(", c, ",", d, ",", b, ", true);");
            out("}");
            this._checkSuspension(a);
            break;
          case Sk.astnodes.Store:
            out("$ret = Sk.abstr.sattr(", e, ",", d, ",", b, ", true);");
            this._checkSuspension(a);
            break;
          case Sk.astnodes.Del:
            Sk.asserts.fail("todo Del;");
            break;
          default:
            Sk.asserts.fail("invalid attribute expression");
        }
        break;
      case Sk.astnodes.Subscript:
        switch (a.ctx) {
          case Sk.astnodes.AugLoad:
            return out("$ret = Sk.abstr.objectGetItem(", c, ",", d, ", true);"), this._checkSuspension(a), this._gr("gitem", "$ret");
          case Sk.astnodes.Load:
          case Sk.astnodes.Store:
          case Sk.astnodes.Del:
            return this.vslice(a.slice, a.ctx, this.vexpr(a.value), b);
          case Sk.astnodes.AugStore:
            out("$ret=undefined;");
            out("if(", b, "!==undefined){");
            out("$ret=Sk.abstr.objectSetItem(", c, ",", d, ",", b, ", true)");
            out("}");
            this._checkSuspension(a);
            break;
          default:
            Sk.asserts.fail("invalid subscript expression");
        }
        break;
      case Sk.astnodes.Name:
        return this.nameop(a.id, a.ctx, b);
      case Sk.astnodes.List:
        return this.ctuplelistorset(a, b, "list");
      case Sk.astnodes.Tuple:
        return this.ctuplelistorset(a, b, "tuple");
      case Sk.astnodes.Set:
        return this.ctuplelistorset(a, b, "set");
      default:
        Sk.asserts.fail("unhandled case in vexpr");
    }
  };
  Compiler.prototype.vseqexpr = function (a, b) {
    var c;
    Sk.asserts.assert(void 0 === b || a.length === b.length);
    var d = [];
    for (c = 0; c < a.length; ++c) d.push(this.vexpr(a[c], void 0 === b ? void 0 : b[c]));
    return d;
  };
  Compiler.prototype.caugassign = function (a) {
    Sk.asserts.assert(a instanceof Sk.astnodes.AugAssign);
    var b = a.target;
    switch (b.constructor) {
      case Sk.astnodes.Attribute:
        var c = this.vexpr(b.value);
        b = new Sk.astnodes.Attribute(b.value, b.attr, Sk.astnodes.AugLoad, b.lineno, b.col_offset);
        var d = this.vexpr(b, void 0, c);
        var e = this.vexpr(a.value);
        a = this._gr("inplbinopattr", "Sk.abstr.numberInplaceBinOp(", d, ",", e, ",'", a.op.prototype._astname, "')");
        b.ctx = Sk.astnodes.AugStore;
        return this.vexpr(b, a, c);
      case Sk.astnodes.Subscript:
        c = this.vexpr(b.value);
        var f = this.vslicesub(b.slice);
        b = new Sk.astnodes.Subscript(b.value, f, Sk.astnodes.AugLoad, b.lineno, b.col_offset);
        d = this.vexpr(b, void 0, c, f);
        e = this.vexpr(a.value);
        a = this._gr("inplbinopsubscr", "Sk.abstr.numberInplaceBinOp(", d, ",", e, ",'", a.op.prototype._astname, "')");
        b.ctx = Sk.astnodes.AugStore;
        return this.vexpr(b, a, c, f);
      case Sk.astnodes.Name:
        return (c = this.nameop(b.id, Sk.astnodes.Load)), (e = this.vexpr(a.value)), (a = this._gr("inplbinop", "Sk.abstr.numberInplaceBinOp(", c, ",", e, ",'", a.op.prototype._astname, "')")), this.nameop(b.id, Sk.astnodes.Store, a);
      default:
        Sk.asserts.fail("unhandled case in augassign");
    }
  };
  Compiler.prototype.exprConstant = function (a) {
    switch (a.constructor) {
      case Sk.astnodes.Num:
        return Sk.misceval.isTrue(a.n) ? 1 : 0;
      case Sk.astnodes.Str:
        return Sk.misceval.isTrue(a.s) ? 1 : 0;
      default:
        return -1;
    }
  };
  Compiler.prototype.newBlock = function (a) {
    var b = this.u.blocknum++;
    this.u.blocks[b] = [];
    this.u.blocks[b]._name = a || "<unnamed>";
    this.u.blocks[b]._next = null;
    return b;
  };
  Compiler.prototype.setBlock = function (a) {
    Sk.asserts.assert(0 <= a && a < this.u.blocknum);
    this.u.curblock = a;
  };
  Compiler.prototype.pushBreakBlock = function (a) {
    Sk.asserts.assert(0 <= a && a < this.u.blocknum);
    this.u.breakBlocks.push(a);
  };
  Compiler.prototype.popBreakBlock = function () {
    this.u.breakBlocks.pop();
  };
  Compiler.prototype.pushContinueBlock = function (a) {
    Sk.asserts.assert(0 <= a && a < this.u.blocknum);
    this.u.continueBlocks.push(a);
  };
  Compiler.prototype.popContinueBlock = function () {
    this.u.continueBlocks.pop();
  };
  Compiler.prototype.pushExceptBlock = function (a) {
    Sk.asserts.assert(0 <= a && a < this.u.blocknum);
    this.u.exceptBlocks.push(a);
  };
  Compiler.prototype.popExceptBlock = function () {
    this.u.exceptBlocks.pop();
  };
  Compiler.prototype.pushFinallyBlock = function (a) {
    Sk.asserts.assert(0 <= a && a < this.u.blocknum);
    Sk.asserts.assert(this.u.breakBlocks.length === this.u.continueBlocks.length);
    this.u.finallyBlocks.push({ blk: a, breakDepth: this.u.breakBlocks.length });
  };
  Compiler.prototype.popFinallyBlock = function () {
    this.u.finallyBlocks.pop();
  };
  Compiler.prototype.peekFinallyBlock = function () {
    return 0 < this.u.finallyBlocks.length ? this.u.finallyBlocks[this.u.finallyBlocks.length - 1] : void 0;
  };
  Compiler.prototype.setupExcept = function (a) {
    out("$exc.push(", a, ");");
  };
  Compiler.prototype.endExcept = function () {
    out("$exc.pop();");
  };
  Compiler.prototype.outputLocals = function (a) {
    var b,
      c = {};
    for (b = 0; a.argnames && b < a.argnames.length; ++b) c[a.argnames[b]] = !0;
    a.localnames.sort();
    var d = [];
    for (b = 0; b < a.localnames.length; ++b) {
      var e = a.localnames[b];
      void 0 === c[e] && (d.push(e), (c[e] = !0));
    }
    return 0 < d.length ? "var " + d.join(",") + "; /* locals */" : "";
  };
  Compiler.prototype.outputSuspensionHelpers = function (a) {
    var b,
      c = [],
      d = a.localnames.concat(a.tempsToSave),
      e = {},
      f = a.ste.blockType === SYMTAB_CONSTS.FunctionBlock && a.ste.childHasFree,
      g =
        (0 < d.length ? "var " + d.join(",") + ";" : "") +
        "var $wakeFromSuspension = function() {var susp = " +
        a.scopename +
        ".$wakingSuspension; " +
        a.scopename +
        ".$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();" +
        (f ? "$cell=susp.$cell;" : "");
    for (b = 0; b < d.length; b++) {
      var h = d[b];
      void 0 === e[h] && ((g += h + "=susp.$tmps." + h + ";"), (e[h] = !0));
    }
    g +=
      "try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '" +
      this.filename +
      "'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};";
    g +=
      "var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){" +
      a.scopename +
      ".$wakingSuspension=susp; return " +
      a.scopename +
      "(" +
      (a.ste.generator ? "$gen" : "") +
      "); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;" +
      (f ? "susp.$cell=$cell;" : "");
    e = {};
    for (b = 0; b < d.length; b++) (h = d[b]), void 0 === e[h] && (c.push('"' + h + '":' + h), (e[h] = !0));
    return (g += "susp.$tmps={" + c.join(",") + "};return susp;};");
  };
  Compiler.prototype.outputAllUnits = function () {
    var a,
      b,
      c = "";
    for (b = 0; b < this.allUnits.length; ++b) {
      var d = this.allUnits[b];
      c += d.prefixCode;
      c += this.outputLocals(d);
      d.doesSuspend && (c += this.outputSuspensionHelpers(d));
      c += d.varDeclsCode;
      c += d.switchCode;
      var e = d.blocks;
      var f = Object.create(null);
      for (a = 0; a < e.length; ++a) {
        var g = a;
        if (!(g in f))
          for (;;)
            if (((f[g] = !0), (c += "case " + g + ": /* --- " + e[g]._name + " --- */"), (c += e[g].join("")), null !== e[g]._next))
              if (e[g]._next in f) {
                c += "/* jump */ continue;";
                break;
              } else (c += "/* allowing case fallthrough */"), (g = e[g]._next);
            else {
              c += "throw new Sk.builtin.SystemError('internal error: unterminated block');";
              break;
            }
      }
      c += d.suffixCode;
    }
    return c;
  };
  Compiler.prototype.cif = function (a) {
    var b;
    Sk.asserts.assert(a instanceof Sk.astnodes.If_);
    var c = this.exprConstant(a.test);
    if (0 === c) a.orelse && 0 < a.orelse.length && this.vseqstmt(a.orelse);
    else if (1 === c) this.vseqstmt(a.body);
    else {
      var d = this.newBlock("end of if");
      a.orelse && 0 < a.orelse.length && (b = this.newBlock("next branch of if"));
      c = this.vexpr(a.test);
      a.orelse && 0 < a.orelse.length ? (this._jumpfalse(c, b), this.vseqstmt(a.body), this._jump(d), this.setBlock(b), this.vseqstmt(a.orelse)) : (this._jumpfalse(c, d), this.vseqstmt(a.body));
      this._jump(d);
      this.setBlock(d);
    }
  };
  Compiler.prototype.cwhile = function (a) {
    if (0 === this.exprConstant(a.test)) a.orelse && this.vseqstmt(a.orelse);
    else {
      var b = this.newBlock("while test");
      this._jump(b);
      this.setBlock(b);
      var c = this.newBlock("after while");
      var d = 0 < a.orelse.length ? this.newBlock("while orelse") : null;
      var e = this.newBlock("while body");
      this.annotateSource(a);
      this._jumpfalse(this.vexpr(a.test), d ? d : c);
      this._jump(e);
      this.pushBreakBlock(c);
      this.pushContinueBlock(b);
      this.setBlock(e);
      (Sk.debugging || Sk.killableWhile) &&
        this.u.canSuspend &&
        ((e = this.newBlock("debug breakpoint for line " + a.lineno)),
        out(
          "if (Sk.breakpoints('" + this.filename + "'," + a.lineno + "," + a.col_offset + ")) {",
          "var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '" + this.filename + "'," + a.lineno + "," + a.col_offset + ");",
          "$susp.$blk = " + e + ";",
          "$susp.optional = true;",
          "return $susp;",
          "}"
        ),
        this._jump(e),
        this.setBlock(e),
        (this.u.doesSuspend = !0));
      this.vseqstmt(a.body);
      this._jump(b);
      this.popContinueBlock();
      this.popBreakBlock();
      0 < a.orelse.length && (this.setBlock(d), this.vseqstmt(a.orelse), this._jump(c));
      this.setBlock(c);
    }
  };
  Compiler.prototype.cfor = function (a) {
    var b = this.newBlock("for start"),
      c = this.newBlock("for cleanup"),
      d = this.newBlock("for end");
    this.pushBreakBlock(d);
    this.pushContinueBlock(b);
    var e = this.vexpr(a.iter);
    if (this.u.ste.generator) {
      var f = "$loc." + this.gensym("iter");
      out(f, "=Sk.abstr.iter(", e, ");");
    } else (f = this._gr("iter", "Sk.abstr.iter(", e, ")")), this.u.tempsToSave.push(f);
    this._jump(b);
    this.setBlock(b);
    out("$ret = Sk.abstr.iternext(", f, this.u.canSuspend ? ", true" : ", false", ");");
    this._checkSuspension(a);
    f = this._gr("next", "$ret");
    this._jumpundef(f, c);
    this.vexpr(a.target, f);
    (Sk.debugging || Sk.killableFor) &&
      this.u.canSuspend &&
      ((f = this.newBlock("debug breakpoint for line " + a.lineno)),
      out(
        "if (Sk.breakpoints('" + this.filename + "'," + a.lineno + "," + a.col_offset + ")) {",
        "var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '" + this.filename + "'," + a.lineno + "," + a.col_offset + ");",
        "$susp.$blk = " + f + ";",
        "$susp.optional = true;",
        "return $susp;",
        "}"
      ),
      this._jump(f),
      this.setBlock(f),
      (this.u.doesSuspend = !0));
    this.vseqstmt(a.body);
    this._jump(b);
    this.setBlock(c);
    this.popContinueBlock();
    this.popBreakBlock();
    this.vseqstmt(a.orelse);
    this._jump(d);
    this.setBlock(d);
  };
  Compiler.prototype.craise = function (a) {
    if (a.inst) {
      var b = this.vexpr(a.inst);
      out("throw ", this.vexpr(a.type), "(", b, ");");
    } else
      a.type
        ? a.type.func
          ? out("throw ", this.vexpr(a.type), ";")
          : ((a = this._gr("err", this.vexpr(a.type))),
            out("if(", a, " instanceof Sk.builtin.type) {", "throw Sk.misceval.callsimArray(", a, ");", "} else if(typeof(", a, ") === 'function') {", "throw ", a, "();", "} else {", "throw ", a, ";", "}"))
        : out("throw $err;");
  };
  Compiler.prototype.ctryexcept = function (a) {
    var b,
      c = a.handlers.length,
      d = [];
    for (b = 0; b < c; ++b) d.push(this.newBlock("except_" + b + "_"));
    var e = this.newBlock("unhandled");
    var f = this.newBlock("orelse");
    var g = this.newBlock("end");
    this.setupExcept(d[0]);
    this.vseqstmt(a.body);
    this.endExcept();
    this._jump(f);
    for (b = 0; b < c; ++b) {
      this.setBlock(d[b]);
      var h = a.handlers[b];
      if (!h.type && b < c - 1) throw new SyntaxError("default 'except:' must be last");
      if (h.type) {
        var k = this.vexpr(h.type);
        var l = b == c - 1 ? e : d[b + 1];
        k = this._gr("instance", "Sk.misceval.isTrue(Sk.builtin.isinstance($err, ", k, "))");
        this._jumpfalse(k, l);
      }
      h.name && this.vexpr(h.name, "$err");
      this.vseqstmt(h.body);
      this._jump(g);
    }
    this.setBlock(e);
    out("throw $err;");
    this.setBlock(f);
    this.vseqstmt(a.orelse);
    this._jump(g);
    this.setBlock(g);
  };
  Compiler.prototype.outputFinallyCascade = function (a) {
    if (0 == this.u.finallyBlocks.length) out("if($postfinally!==undefined) { if ($postfinally.returning) { return $postfinally.returning; } else { $blk=$postfinally.gotoBlock; $postfinally=undefined; continue; } }");
    else {
      var b = this.peekFinallyBlock();
      out(
        "if($postfinally!==undefined) {",
        "if ($postfinally.returning",
        b.breakDepth == a.breakDepth ? "|| $postfinally.isBreak" : "",
        ") {",
        "$blk=",
        b.blk,
        ";continue;",
        "} else {",
        "$blk=$postfinally.gotoBlock;$postfinally=undefined;continue;",
        "}",
        "}"
      );
    }
  };
  Compiler.prototype.ctryfinally = function (a) {
    var b = this.newBlock("finalbody"),
      c = this.newBlock("finalexh"),
      d = this._gr("finally_reraise", "undefined");
    this.u.tempsToSave.push(d);
    this.pushFinallyBlock(b);
    var e = this.peekFinallyBlock();
    this.setupExcept(c);
    this.vseqstmt(a.body);
    this.endExcept();
    this._jump(b);
    this.setBlock(c);
    out(d, "=$err;");
    this._jump(b);
    this.setBlock(b);
    this.popFinallyBlock();
    this.vseqstmt(a.finalbody);
    out("if(", d, "!==undefined) { throw ", d, ";}");
    this.outputFinallyCascade(e);
  };
  Compiler.prototype.cwith = function (a) {
    var b = this.newBlock("withexh"),
      c = this.newBlock("withtidyup"),
      d = this.newBlock("withcarryon");
    var e = this._gr("mgr", this.vexpr(a.context_expr));
    out("$ret = Sk.abstr.gattr(", e, ",Sk.builtin.str.$exit, true);");
    this._checkSuspension(a);
    var f = this._gr("exit", "$ret");
    this.u.tempsToSave.push(f);
    out("$ret = Sk.abstr.gattr(", e, ",Sk.builtin.str.$enter, true);");
    this._checkSuspension(a);
    out("$ret = Sk.misceval.callsimOrSuspendArray($ret);");
    this._checkSuspension(a);
    e = this._gr("value", "$ret");
    this.pushFinallyBlock(c);
    var g = this.u.finallyBlocks[this.u.finallyBlocks.length - 1];
    this.setupExcept(b);
    a.optional_vars && this.nameop(a.optional_vars.id, Sk.astnodes.Store, e);
    this.vseqstmt(a.body);
    this.endExcept();
    this._jump(c);
    this.setBlock(b);
    out("$ret = Sk.misceval.applyOrSuspend(", f, ",undefined,Sk.builtin.getExcInfo($err),undefined,[]);");
    this._checkSuspension(a);
    this._jumptrue("$ret", d);
    out("throw $err;");
    this.setBlock(c);
    this.popFinallyBlock();
    out("$ret = Sk.misceval.callsimOrSuspendArray(", f, ",[Sk.builtin.none.none$,Sk.builtin.none.none$,Sk.builtin.none.none$]);");
    this._checkSuspension(a);
    this.outputFinallyCascade(g);
    this._jump(d);
    this.setBlock(d);
  };
  Compiler.prototype.cassert = function (a) {
    var b = this.vexpr(a.test),
      c = this.newBlock("end");
    this._jumptrue(b, c);
    out("throw new Sk.builtin.AssertionError(", a.msg ? this.vexpr(a.msg) : "", ");");
    this.setBlock(c);
  };
  Compiler.prototype.cimportas = function (a, b, c) {
    a = a.v;
    var d = a.indexOf("."),
      e = c;
    if (-1 !== d) for (a = a.substr(d + 1); -1 !== d; ) (d = a.indexOf(".")), (c = -1 !== d ? a.substr(0, d) : a), (e = this._gr("lattr", "Sk.abstr.gattr(", e, ", new Sk.builtin.str('", c, "'))")), (a = a.substr(d + 1));
    return this.nameop(b, Sk.astnodes.Store, e);
  };
  Compiler.prototype.cimport = function (a) {
    var b,
      c = a.names.length;
    for (b = 0; b < c; ++b) {
      var d = a.names[b];
      out("$ret = Sk.builtin.__import__(", d.name.$r().v, ",$gbl,$loc,[],", Sk.__future__.absolute_import ? 0 : -1, ");");
      this._checkSuspension(a);
      var e = this._gr("module", "$ret");
      if (d.asname) this.cimportas(d.name, d.asname, e);
      else {
        var f = d.name;
        d = f.v.indexOf(".");
        -1 !== d && (f = new Sk.builtin.str(f.v.substr(0, d)));
        this.nameop(f, Sk.astnodes.Store, e);
      }
    }
  };
  Compiler.prototype.cfromimport = function (a) {
    var b,
      c = a.names.length;
    var d = [];
    var e = a.level;
    0 != e || Sk.__future__.absolute_import || (e = -1);
    for (b = 0; b < c; ++b) d[b] = "'" + fixReservedWords(a.names[b].name.v) + "'";
    out("$ret = Sk.builtin.__import__(", a.module.$r().v, ",$gbl,$loc,[", d, "],", e, ");");
    this._checkSuspension(a);
    e = this._gr("module", "$ret");
    for (b = 0; b < c; ++b) {
      d = a.names[b];
      var f = "'" + fixReservedWords(d.name.v) + "'";
      if (0 === b && "*" === d.name.v) {
        Sk.asserts.assert(1 === c);
        out("Sk.importStar(", e, ",$loc, $gbl);");
        break;
      }
      var g = this._gr("item", "Sk.abstr.gattr(", e, ", new Sk.builtin.str(", f, "))");
      f = d.name;
      d.asname && (f = d.asname);
      this.nameop(f, Sk.astnodes.Store, g);
    }
  };
  Compiler.prototype.buildcodeobj = function (a, b, c, d, e, f) {
    var g,
      h = [],
      k = [],
      l = null;
    var m = null;
    c && (h = this.vseqexpr(c));
    d && d.defaults && (k = this.vseqexpr(d.defaults));
    d && d.vararg && (l = d.vararg);
    d && d.kwarg && (m = d.kwarg);
    c = this.enterScope(b, a, a.lineno, this.canSuspend);
    a = this.u.ste.generator;
    var n = this.u.ste.hasFree;
    var p = this.u.ste.childHasFree;
    var r = this.newBlock("codeobj entry");
    this.u.prefixCode = "var " + c + "=(function " + this.niceName(b.v) + "$(";
    var q = [];
    if (a) {
      if (m) throw new SyntaxError(b.v + "(): keyword arguments in generators not supported");
      if (l) throw new SyntaxError(b.v + "(): variable number of arguments in generators not supported");
      q.push("$gen");
    } else for (m && (q.push("$kwa"), this.u.tempsToSave.push("$kwa")), g = 0; d && g < d.args.length; ++g) q.push(this.nameop(d.args[g].id, Sk.astnodes.Param));
    n && (l ? (this.u.varDeclsCode += "$free = arguments[arguments.length-1];") : (q.push("$free"), this.u.tempsToSave.push("$free")));
    this.u.prefixCode += q.join(",");
    this.u.prefixCode += "){";
    a && (this.u.prefixCode += "\n// generator\n");
    n && (this.u.prefixCode += "\n// has free\n");
    p && (this.u.prefixCode += "\n// has cell\n");
    var t = "{}";
    a && ((r = "$gen.gi$resumeat"), (t = "$gen.gi$locals"));
    g = ",$cell={}";
    p && a && (g = ",$cell=$gen.gi$cells");
    this.u.varDeclsCode += "var $blk=" + r + ",$exc=[],$loc=" + t + g + ",$gbl=this,$err=undefined,$ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;";
    null !== Sk.execLimit && (this.u.varDeclsCode += "if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}");
    null !== Sk.yieldLimit && this.u.canSuspend && (this.u.varDeclsCode += "if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}");
    this.u.varDeclsCode += "if (" + c + ".$wakingSuspension!==undefined) { $wakeFromSuspension(); } else {";
    if (0 < k.length) for (p = d.args.length - k.length, g = 0; g < k.length; ++g) (r = this.nameop(d.args[g + p].id, Sk.astnodes.Param)), (this.u.varDeclsCode += "if(" + r + "===undefined)" + r + "=" + c + ".$defaults[" + g + "];");
    for (g = 0; d && g < d.args.length; ++g) (r = d.args[g].id), this.isCell(r) && (this.u.varDeclsCode += "$cell." + r.v + "=" + r.v + ";");
    a || ((r = d ? d.args.length - k.length : 0), (g = l ? Infinity : d ? d.args.length : 0), (this.u.varDeclsCode += 'Sk.builtin.pyCheckArgsLen("' + b.v + '", arguments.length, ' + r + ", " + g + ", " + (m ? !0 : !1) + ", " + n + ");"));
    l && ((q = q.length), this.u.localnames.push(l.v), (this.u.varDeclsCode += l.v + "=new Sk.builtins['tuple'](Array.prototype.slice.call(arguments," + q + (n ? ",-1)" : ")") + "); /*vararg*/"));
    m && (this.u.localnames.push(m.v), (this.u.varDeclsCode += m.v + "=new Sk.builtins['dict']($kwa);"));
    this.u.varDeclsCode += "}";
    Sk.python3 && f && (this.u.varDeclsCode += "$gbl.__class__=this." + f.v + ";");
    this.u.switchCode = "while(true){try{";
    this.u.switchCode += this.outputInterruptTest();
    this.u.switchCode += "switch($blk){";
    this.u.suffixCode =
      "} }catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '" +
      this.filename +
      "'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} }});";
    e.call(this, c);
    if (d && 0 < d.args.length) {
      e = [];
      for (g = 0; g < d.args.length; ++g) e.push(d.args[g].id.v);
      var u = e.join("', '");
      this.u.argnames = e;
    }
    this.exitScope();
    0 < k.length && out(c, ".$defaults=[", k.join(","), "];");
    0 < h.length && out(c, ".$decorators=[", h.join(","), "];");
    u && out(c, ".co_varnames=['", u, "'];");
    m && out(c, ".co_kwargs=1;");
    u = "";
    n && ((u = ",$cell"), (m = this.u.ste.hasFree) && (u += ",$free"));
    return a
      ? d && 0 < d.args.length
        ? this._gr(
            "gener",
            "new Sk.builtins['function']((function(){var $origargs=Array.prototype.slice.call(arguments);Sk.builtin.pyCheckArgsLen(\"",
            b.v,
            '",arguments.length,',
            d.args.length - k.length,
            ",",
            d.args.length,
            ");return new Sk.builtins['generator'](",
            c,
            ",$gbl,$origargs",
            u,
            ");}))"
          )
        : this._gr("gener", "new Sk.builtins['function']((function(){Sk.builtin.pyCheckArgsLen(\"", b.v, "\",arguments.length,0,0);return new Sk.builtins['generator'](", c, ",$gbl,[]", u, ");}))")
      : 0 < h.length
      ? (out("$ret = Sk.misceval.callsimOrSuspendArray(", c, ".$decorators[0], [new Sk.builtins['function'](", c, ",$gbl", u, ")]);"), this._checkSuspension(), this._gr("funcobj", "$ret"))
      : this._gr("funcobj", "new Sk.builtins['function'](", c, ",$gbl", u, ")");
  };
  Compiler.prototype.cfunction = function (a, b) {
    Sk.asserts.assert(a instanceof Sk.astnodes.FunctionDef);
    b = this.buildcodeobj(
      a,
      a.name,
      a.decorator_list,
      a.args,
      function (b) {
        this.vseqstmt(a.body);
        out("return Sk.builtin.none.none$;");
      },
      b
    );
    this.nameop(a.name, Sk.astnodes.Store, b);
  };
  Compiler.prototype.clambda = function (a) {
    Sk.asserts.assert(a instanceof Sk.astnodes.Lambda);
    return this.buildcodeobj(a, new Sk.builtin.str("<lambda>"), null, a.args, function (b) {
      b = this.vexpr(a.body);
      out("return ", b, ";");
    });
  };
  Compiler.prototype.cifexp = function (a) {
    var b = this.newBlock("next of ifexp"),
      c = this.newBlock("end of ifexp"),
      d = this._gr("res", "null"),
      e = this.vexpr(a.test);
    this._jumpfalse(e, b);
    out(d, "=", this.vexpr(a.body), ";");
    this._jump(c);
    this.setBlock(b);
    out(d, "=", this.vexpr(a.orelse), ";");
    this._jump(c);
    this.setBlock(c);
    return d;
  };
  Compiler.prototype.cgenexpgen = function (a, b, c) {
    var d = this.newBlock("start for " + b),
      e = this.newBlock("skip for " + b);
    this.newBlock("if cleanup for " + b);
    var f = this.newBlock("end for " + b),
      g = a[b];
    if (0 === b) var h = "$loc.$iter0";
    else {
      var k = this.vexpr(g.iter);
      h = "$loc." + this.gensym("iter");
      out(h, "=", "Sk.abstr.iter(", k, ");");
    }
    this._jump(d);
    this.setBlock(d);
    this.annotateSource(c);
    out("$ret = Sk.abstr.iternext(", h, this.u.canSuspend ? ", true" : ", false", ");");
    this._checkSuspension(c);
    k = this._gr("next", "$ret");
    this._jumpundef(k, f);
    this.vexpr(g.target, k);
    var l = g.ifs.length;
    for (h = 0; h < l; ++h) this.annotateSource(g.ifs[h]), (k = this.vexpr(g.ifs[h])), this._jumpfalse(k, d);
    ++b < a.length && this.cgenexpgen(a, b, c);
    b >= a.length && (this.annotateSource(c), (a = this.vexpr(c)), out("return [", e, "/*resume*/,", a, "/*ret*/];"), this.setBlock(e));
    this._jump(d);
    this.setBlock(f);
    1 === b && out("return Sk.builtin.none.none$;");
  };
  Compiler.prototype.cgenexp = function (a) {
    var b = this.buildcodeobj(a, new Sk.builtin.str("<genexpr>"), null, null, function (b) {
      this.cgenexpgen(a.generators, 0, a.elt);
    });
    b = this._gr("gener", "Sk.misceval.callsimArray(", b, ");");
    out(b, ".gi$locals.$iter0=Sk.abstr.iter(", this.vexpr(a.generators[0].iter), ");");
    return b;
  };
  Compiler.prototype.cclass = function (a) {
    Sk.asserts.assert(a instanceof Sk.astnodes.ClassDef);
    var b = this.vseqexpr(a.bases);
    var c = this.enterScope(a.name, a, a.lineno);
    var d = this.newBlock("class entry");
    this.u.prefixCode = "var " + c + "=(function $" + a.name.v + "$class_outer($globals,$locals,$cell){var $gbl=$globals,$loc=$locals;$free=$globals;";
    this.u.switchCode += "(function $" + a.name.v + "$_closure($cell){";
    this.u.switchCode += "var $blk=" + d + ",$exc=[],$ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;";
    null !== Sk.execLimit && (this.u.switchCode += "if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}");
    null !== Sk.yieldLimit && this.u.canSuspend && (this.u.switchCode += "if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}");
    this.u.switchCode += "while(true){try{";
    this.u.switchCode += this.outputInterruptTest();
    this.u.switchCode += "switch($blk){";
    this.u.suffixCode =
      "}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '" +
      this.filename +
      "'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }}}";
    this.u.suffixCode += "}).call(null, $cell);});";
    this.u.private_ = a.name;
    this.cbody(a.body, a.name);
    out("return;");
    this.exitScope();
    d = this._gr("built", "Sk.misceval.buildClass($gbl,", c, ",", a.name.$r().v, ",[", b, "], $cell)");
    this.nameop(a.name, Sk.astnodes.Store, d);
  };
  Compiler.prototype.ccontinue = function (a) {
    a = this.peekFinallyBlock();
    if (0 == this.u.continueBlocks.length) throw new SyntaxError("'continue' outside loop");
    var b = this.u.continueBlocks[this.u.continueBlocks.length - 1];
    Sk.asserts.assert(this.u.breakBlocks.length === this.u.continueBlocks.length);
    a && a.breakDepth == this.u.continueBlocks.length ? out("$postfinally={isBreak:true,gotoBlock:", b, "};") : this._jump(b);
  };
  Compiler.prototype.cbreak = function (a) {
    a = this.peekFinallyBlock();
    if (0 === this.u.breakBlocks.length) throw new SyntaxError("'break' outside loop");
    var b = this.u.breakBlocks[this.u.breakBlocks.length - 1];
    a && a.breakDepth == this.u.breakBlocks.length ? out("$postfinally={isBreak:true,gotoBlock:", b, "};") : this._jump(b);
  };
  Compiler.prototype.vstmt = function (a, b) {
    this.u.lineno = a.lineno;
    this.u.linenoSet = !1;
    this.u.localtemps = [];
    if (Sk.debugging && this.u.canSuspend) {
      var c = this.newBlock("debug breakpoint for line " + a.lineno);
      out(
        "if (Sk.breakpoints('" + this.filename + "'," + a.lineno + "," + a.col_offset + ")) {",
        "var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '" + this.filename + "'," + a.lineno + "," + a.col_offset + ");",
        "$susp.$blk = " + c + ";",
        "$susp.optional = true;",
        "return $susp;",
        "}"
      );
      this._jump(c);
      this.setBlock(c);
      this.u.doesSuspend = !0;
    }
    this.annotateSource(a);
    switch (a.constructor) {
      case Sk.astnodes.FunctionDef:
        this.cfunction(a, b);
        break;
      case Sk.astnodes.ClassDef:
        this.cclass(a);
        break;
      case Sk.astnodes.Return_:
        if (this.u.ste.blockType !== SYMTAB_CONSTS.FunctionBlock) throw new SyntaxError("'return' outside function");
        c = a.value ? this.vexpr(a.value) : "Sk.builtin.none.none$";
        0 == this.u.finallyBlocks.length ? out("return ", c, ";") : (out("$postfinally={returning:", c, "};"), this._jump(this.peekFinallyBlock().blk));
        break;
      case Sk.astnodes.Delete_:
        this.vseqexpr(a.targets);
        break;
      case Sk.astnodes.Assign:
        var d = a.targets.length;
        c = this.vexpr(a.value);
        for (b = 0; b < d; ++b) this.vexpr(a.targets[b], c);
        break;
      case Sk.astnodes.AugAssign:
        return this.caugassign(a);
      case Sk.astnodes.Print:
        this.cprint(a);
        break;
      case Sk.astnodes.For_:
        return this.cfor(a);
      case Sk.astnodes.While_:
        return this.cwhile(a);
      case Sk.astnodes.If_:
        return this.cif(a);
      case Sk.astnodes.Raise:
        return this.craise(a);
      case Sk.astnodes.TryExcept:
        return this.ctryexcept(a);
      case Sk.astnodes.TryFinally:
        return this.ctryfinally(a);
      case Sk.astnodes.With_:
        return this.cwith(a);
      case Sk.astnodes.Assert:
        return this.cassert(a);
      case Sk.astnodes.Import_:
        return this.cimport(a);
      case Sk.astnodes.ImportFrom:
        return this.cfromimport(a);
      case Sk.astnodes.Global:
        break;
      case Sk.astnodes.Expr:
        this.vexpr(a.value);
        break;
      case Sk.astnodes.Pass:
        break;
      case Sk.astnodes.Break_:
        this.cbreak(a);
        break;
      case Sk.astnodes.Continue_:
        this.ccontinue(a);
        break;
      case Sk.astnodes.Debugger_:
        out("debugger;");
        break;
      default:
        Sk.asserts.fail("unhandled case in vstmt: " + JSON.stringify(a));
    }
  };
  Compiler.prototype.vseqstmt = function (a) {
    var b;
    for (b = 0; b < a.length; ++b) this.vstmt(a[b]);
  };
  var OP_FAST = 0,
    OP_GLOBAL = 1,
    OP_DEREF = 2,
    OP_NAME = 3,
    D_NAMES = 0,
    D_FREEVARS = 1,
    D_CELLVARS = 2;
  Compiler.prototype.isCell = function (a) {
    a = mangleName(this.u.private_, a).v;
    return this.u.ste.getScope(a) === SYMTAB_CONSTS.CELL;
  };
  Compiler.prototype.nameop = function (a, b, c) {
    if ((b === Sk.astnodes.Store || b === Sk.astnodes.AugStore || b === Sk.astnodes.Del) && "__debug__" === a.v) throw new Sk.builtin.SyntaxError("can not assign to __debug__");
    if ((b === Sk.astnodes.Store || b === Sk.astnodes.AugStore || b === Sk.astnodes.Del) && "None" === a.v) throw new Sk.builtin.SyntaxError("can not assign to None");
    if ("None" === a.v) return "Sk.builtin.none.none$";
    if ("True" === a.v) return "Sk.builtin.bool.true$";
    if ("False" === a.v) return "Sk.builtin.bool.false$";
    if ("NotImplemented" === a.v) return "Sk.builtin.NotImplemented.NotImplemented$";
    var d = mangleName(this.u.private_, a).v;
    d = fixReservedNames(d);
    var e = OP_NAME;
    var f = this.u.ste.getScope(d);
    var g = null;
    switch (f) {
      case SYMTAB_CONSTS.FREE:
        g = "$free";
        e = OP_DEREF;
        break;
      case SYMTAB_CONSTS.CELL:
        g = "$cell";
        e = OP_DEREF;
        break;
      case SYMTAB_CONSTS.LOCAL:
        this.u.ste.blockType !== SYMTAB_CONSTS.FunctionBlock || this.u.ste.generator || (e = OP_FAST);
        break;
      case SYMTAB_CONSTS.GLOBAL_IMPLICIT:
        this.u.ste.blockType === SYMTAB_CONSTS.FunctionBlock && (e = OP_GLOBAL);
        break;
      case SYMTAB_CONSTS.GLOBAL_EXPLICIT:
        e = OP_GLOBAL;
    }
    d = fixReservedWords(d);
    Sk.asserts.assert(f || "_" === a.v.charAt(1));
    a = d;
    this.u.ste.generator || this.u.ste.blockType !== SYMTAB_CONSTS.FunctionBlock ? (d = "$loc." + d) : (e === OP_FAST || e === OP_NAME) && this.u.localnames.push(d);
    switch (e) {
      case OP_FAST:
        switch (b) {
          case Sk.astnodes.Load:
          case Sk.astnodes.Param:
            return out("if (", d, " === undefined) { throw new Sk.builtin.UnboundLocalError('local variable \\'", d, "\\' referenced before assignment'); }\n"), d;
          case Sk.astnodes.Store:
            out(d, "=", c, ";");
            break;
          case Sk.astnodes.Del:
            out("delete ", d, ";");
            break;
          default:
            Sk.asserts.fail("unhandled");
        }
        break;
      case OP_NAME:
        switch (b) {
          case Sk.astnodes.Load:
            return this._gr("loadname", d, "!==undefined?", d, ":Sk.misceval.loadname('", a, "',$gbl);");
          case Sk.astnodes.Store:
            out(d, "=", c, ";");
            break;
          case Sk.astnodes.Del:
            out("delete ", d, ";");
            break;
          case Sk.astnodes.Param:
            return d;
          default:
            Sk.asserts.fail("unhandled");
        }
        break;
      case OP_GLOBAL:
        switch (b) {
          case Sk.astnodes.Load:
            return this._gr("loadgbl", "Sk.misceval.loadname('", a, "',$gbl)");
          case Sk.astnodes.Store:
            out("$gbl.", a, "=", c, ";");
            break;
          case Sk.astnodes.Del:
            out("delete $gbl.", a);
            break;
          default:
            Sk.asserts.fail("unhandled case in name op_global");
        }
        break;
      case OP_DEREF:
        switch (b) {
          case Sk.astnodes.Load:
            return g + "." + a;
          case Sk.astnodes.Store:
            out(g, ".", a, "=", c, ";");
            break;
          case Sk.astnodes.Param:
            return a;
          default:
            Sk.asserts.fail("unhandled case in name op_deref");
        }
        break;
      default:
        Sk.asserts.fail("unhandled case");
    }
  };
  Compiler.prototype.enterScope = function (a, b, c, d) {
    var e = new CompilerUnit();
    e.ste = this.st.getStsForAst(b);
    e.name = a;
    e.firstlineno = c;
    e.canSuspend = d || !1;
    this.u && this.u.private_ && (e.private_ = this.u.private_);
    this.stack.push(this.u);
    this.allUnits.push(e);
    a = this.gensym("scope");
    e.scopename = a;
    this.u = e;
    this.u.activateScope();
    this.nestlevel++;
    return a;
  };
  Compiler.prototype.exitScope = function () {
    var a = this.u;
    this.nestlevel--;
    (this.u = 0 <= this.stack.length - 1 ? this.stack.pop() : null) && this.u.activateScope();
    if ("<module>" !== a.name.v) {
      var b = a.name.$r().v;
      b = b.substring(1, b.length - 1);
      b = fixReservedWords(b);
      b = fixReservedNames(b);
      out(a.scopename, ".co_name=new Sk.builtins['str']('", b, "');");
    }
    for (var c in a.consts) a.consts.hasOwnProperty(c) && (a.suffixCode += c + " = " + a.consts[c] + ";");
  };
  Compiler.prototype.cbody = function (a, b) {
    var c;
    for (c = 0; c < a.length; ++c) this.vstmt(a[c], b);
  };
  Compiler.prototype.cprint = function (a) {
    var b;
    Sk.asserts.assert(a instanceof Sk.astnodes.Print);
    a.dest && this.vexpr(a.dest);
    var c = a.values.length;
    for (b = 0; b < c; ++b) out("$ret = Sk.misceval.print_(", "new Sk.builtins['str'](", this.vexpr(a.values[b]), ").v);"), this._checkSuspension(a);
    a.nl && (out("$ret = Sk.misceval.print_(", '"\\n");'), this._checkSuspension(a));
  };
  Compiler.prototype.cmod = function (a) {
    var b = this.enterScope(new Sk.builtin.str("<module>"), a, 0, this.canSuspend),
      c = this.newBlock("module entry");
    this.u.prefixCode = "var " + b + "=(function($forcegbl){";
    this.u.varDeclsCode =
      "var $gbl = $forcegbl || {}, $blk=" + c + ",$exc=[],$loc=$gbl,$cell={},$err=undefined;$loc.__file__=new Sk.builtins.str('" + this.filename + "');var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;";
    null !== Sk.execLimit && (this.u.varDeclsCode += "if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}");
    null !== Sk.yieldLimit && this.u.canSuspend && (this.u.varDeclsCode += "if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}");
    this.u.varDeclsCode +=
      "if (" +
      b +
      ".$wakingSuspension!==undefined) { $wakeFromSuspension(); }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; $loc.__file__=new Sk.builtins.str('" +
      this.filename +
      "');}    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }";
    this.u.switchCode = "while(true){try{";
    this.u.switchCode += this.outputInterruptTest();
    this.u.switchCode += "switch($blk){";
    this.u.suffixCode = "}";
    this.u.suffixCode +=
      "}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '" +
      this.filename +
      "'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });";
    switch (a.constructor) {
      case Sk.astnodes.Module:
        this.cbody(a.body);
        out("return $loc;");
        break;
      default:
        Sk.asserts.fail("todo; unhandled case in compilerMod");
    }
    this.exitScope();
    this.result.push(this.outputAllUnits());
    return b;
  };
  Sk.compile = function (a, b, c, d) {
    var e = Sk.parse(b, a);
    c = Sk.astFromParse(e.cst, b, e.flags);
    e = e.flags;
    var f = Sk.symboltable(c, b);
    a = new Compiler(b, f, e, d, a);
    b = a.cmod(c);
    return { funcname: "$compiledmod", code: "$compiledmod = function() {" + a.result.join("") + "\nreturn " + b + ";}();" };
  };
  Sk.exportSymbol("Sk.compile", Sk.compile);
  Sk.resetCompiler = function () {
    Sk.gensymcount = 0;
  };
  Sk.exportSymbol("Sk.resetCompiler", Sk.resetCompiler);
  Sk.fixReservedWords = fixReservedWords;
  Sk.exportSymbol("Sk.fixReservedWords", Sk.fixReservedWords);
  Sk.fixReservedNames = fixReservedNames;
  Sk.exportSymbol("Sk.fixReservedNames", Sk.fixReservedNames);
  Sk.unfixReserved = unfixReserved;
  Sk.exportSymbol("Sk.unfixReserved", Sk.unfixReserved);
  Sk.mangleName = mangleName;
  Sk.exportSymbol("Sk.mangleName", Sk.mangleName);
  Sk.sysmodules = new Sk.builtin.dict([]);
  Sk.realsyspath = void 0;
  Sk.importSearchPathForName = function (a, b, c) {
    var d = a.replace(/\./g, "/"),
      e = function (a, b) {
        return Sk.misceval.chain(
          Sk.misceval.tryCatch(
            function () {
              return Sk.read(a);
            },
            function (a) {}
          ),
          function (c) {
            if (void 0 !== c) return new Sk.misceval.Break({ filename: a, code: c, packagePath: b });
          }
        );
      };
    void 0 === c && (c = Sk.realsyspath);
    return Sk.misceval.iterFor(c.tp$iter(), function (a) {
      return Sk.misceval.chain(e(a.v + "/" + d + b, !1), function (c) {
        return c ? c : e(a.v + "/" + d + "/__init__" + b, a.v + "/" + d);
      });
    });
  };
  Sk.doOneTimeInitialization = function (a) {
    var b;
    Sk.builtin.type.basesStr_ = new Sk.builtin.str("__bases__");
    Sk.builtin.type.mroStr_ = new Sk.builtin.str("__mro__");
    for (f in Sk.builtin)
      if (((a = Sk.builtin[f]), (a.prototype instanceof Sk.builtin.object || a === Sk.builtin.object) && !a.sk$abstract)) {
        var c = a;
        var d = [];
        for (a = c.tp$base; void 0 !== a; a = a.tp$base) d.push(a);
        c.tp$mro = new Sk.builtin.tuple([c]);
        c.tp$base || (c.tp$base = d[0]);
        c.$d = new Sk.builtin.dict([]);
        c.$d.mp$ass_subscript(Sk.builtin.type.basesStr_, new Sk.builtin.tuple(d));
        c.$d.mp$ass_subscript(Sk.builtin.type.mroStr_, c.tp$mro);
      }
    d = [Sk.builtin.object, Sk.builtin.type, Sk.builtin.func, Sk.builtin.method];
    for (c = 0; c < d.length; c++) {
      var e = d[c];
      var f = e.prototype;
      for (b = 0; b < e.pythonFunctions.length; b++) {
        a = e.pythonFunctions[b];
        if (f[a] instanceof Sk.builtin.func) break;
        f[a].co_kwargs = null;
        f[a] = new Sk.builtin.func(f[a]);
      }
    }
    for (var g in Sk.internalPy.files)
      (f = g.split(".")[0].split("/")[1]),
        (a = Sk.importBuiltinWithBody(f, !1, Sk.internalPy.files[g], !0)),
        (a = Sk.misceval.retryOptionalSuspensionOrThrow(a)),
        Sk.asserts.assert(void 0 !== a.$d[f], "Should have imported name " + f),
        (Sk.builtins[f] = a.$d[f]);
  };
  Sk.importSetUpPath = function (a) {
    var b;
    if (!Sk.realsyspath) {
      var c = [new Sk.builtin.str("src/builtin"), new Sk.builtin.str("src/lib"), new Sk.builtin.str(".")];
      for (b = 0; b < Sk.syspath.length; ++b) c.push(new Sk.builtin.str(Sk.syspath[b]));
      Sk.realsyspath = new Sk.builtin.list(c);
      Sk.doOneTimeInitialization(a);
    }
  };
  Sk.importModuleInternal_ = function (a, b, c, d, e, f, g) {
    var h,
      k,
      l,
      m = null,
      n = void 0 !== e ? e.tp$getattr(Sk.builtin.str.$name) : void 0,
      p = void 0 !== n ? n.v + "." : "",
      r = void 0 !== e ? e.tp$getattr(Sk.builtin.str.$path) : void 0;
    Sk.importSetUpPath(g);
    if (e && !n) {
      if (f) return;
      throw new Sk.builtin.ValueError("Attempted to import relative to invalid package (no name)");
    }
    void 0 === c && (c = p + a);
    var q = a.split(".");
    try {
      var t = Sk.sysmodules.mp$subscript(c);
      return 1 < q.length ? Sk.sysmodules.mp$subscript(p + q[0]) : t;
    } catch (x) {}
    if (1 < q.length) {
      var u = q.slice(0, q.length - 1).join(".");
      m = Sk.importModuleInternal_(u, b, void 0, void 0, e, f, g);
    }
    t = Sk.misceval.chain(
      m,
      function (b) {
        var c = a;
        m = b;
        if (1 < q.length) {
          if (!m) return;
          k = Sk.sysmodules.mp$subscript(p + u);
          c = q[q.length - 1];
          r = k.tp$getattr(Sk.builtin.str.$path);
        }
        l = new Sk.builtin.module();
        d
          ? ((h = a + ".py"), (b = Sk.compile(d, h, "exec", g)))
          : (b = Sk.misceval.chain(
              void 0,
              function () {
                if (Sk.onBeforeImport && "function" === typeof Sk.onBeforeImport) return Sk.onBeforeImport(a);
              },
              function (b) {
                if (!1 === b) throw new Sk.builtin.ImportError("Importing " + a + " is not allowed");
                if ("string" === typeof b) throw new Sk.builtin.ImportError(b);
                return Sk.importSearchPathForName(c, ".js", r);
              },
              function (a) {
                return a
                  ? { funcname: "$builtinmodule", code: a.code, filename: a.filename, packagePath: a.packagePath }
                  : Sk.misceval.chain(
                      Sk.importSearchPathForName(c, ".py", r),
                      function (b) {
                        if ((a = b)) return Sk.compile(a.code, a.filename, "exec", g);
                      },
                      function (b) {
                        if (b) return (b.packagePath = a.packagePath), b;
                      }
                    );
              }
            ));
        return b;
      },
      function (a) {
        if (a) {
          Sk.sysmodules.mp$ass_subscript(c, l);
          var d = (l.$js = a.code);
          null == h && (h = a.filename);
          (null != Sk.dateSet && Sk.dateSet) || ((d = "Sk.execStart = Sk.lastYield = new Date();\n" + a.code), (Sk.dateSet = !0));
          if (b) {
            var e = function (a) {
              var b,
                c = Sk.js_beautify(a).split("\n");
              for (b = 1; b <= c.length; ++b) {
                var d = ("" + b).length;
                for (a = ""; 5 > d; ++d) a += " ";
                c[b - 1] = "/* " + a + b + " */ " + c[b - 1];
              }
              return c.join("\n");
            };
            d = e(d);
            Sk.debugout(d);
          }
          d += "\n" + a.funcname + ";";
          d = Sk.global.eval(d);
          l.$d = { __name__: new Sk.builtin.str(c), __doc__: Sk.builtin.none.none$, __package__: a.packagePath ? new Sk.builtin.str(c) : u ? new Sk.builtin.str(p + u) : n ? n : Sk.builtin.none.none$ };
          a.packagePath && (l.$d.__path__ = new Sk.builtin.tuple([new Sk.builtin.str(a.packagePath)]));
          return d(l.$d);
        }
      },
      function (b) {
        var c;
        if (void 0 === b) {
          if (f && !m) return;
          throw new Sk.builtin.ImportError("No module named " + a);
        }
        if (b !== l.$d) {
          for (c in l.$d) b[c] || (b[c] = l.$d[c]);
          l.$d = b;
        }
        if (Sk.onAfterImport && "function" === typeof Sk.onAfterImport)
          try {
            Sk.onAfterImport(a);
          } catch (D) {}
        if (m) return k.tp$setattr(new Sk.builtin.str(q[q.length - 1]), l), m;
        e && e.tp$setattr(new Sk.builtin.str(a), l);
        return l;
      }
    );
    return g ? t : Sk.misceval.retryOptionalSuspensionOrThrow(t);
  };
  Sk.importModule = function (a, b, c) {
    return Sk.importModuleInternal_(a, b, void 0, void 0, void 0, !1, c);
  };
  Sk.importMain = function (a, b, c) {
    Sk.dateSet = !1;
    Sk.filesLoaded = !1;
    Sk.sysmodules = new Sk.builtin.dict([]);
    Sk.realsyspath = void 0;
    Sk.resetCompiler();
    return Sk.importModuleInternal_(a, b, "__main__", void 0, void 0, !1, c);
  };
  Sk.importMainWithBody = function (a, b, c, d) {
    Sk.dateSet = !1;
    Sk.filesLoaded = !1;
    Sk.sysmodules = new Sk.builtin.dict([]);
    Sk.realsyspath = void 0;
    Sk.resetCompiler();
    return Sk.importModuleInternal_(a, b, "__main__", c, void 0, !1, d);
  };
  Sk.importBuiltinWithBody = function (a, b, c, d) {
    return Sk.importModuleInternal_(a, b, "__builtin__." + a, c, void 0, !1, d);
  };
  Sk.builtin.__import__ = function (a, b, c, d, e) {
    var f = Sk.globals,
      g;
    void 0 === e && (e = Sk.__future__.absolute_import ? 0 : -1);
    if (0 !== e && b.__package__ && b.__package__ !== Sk.builtin.none.none$) {
      if ((g = b.__package__.v) && 0 < e) {
        b = g.split(".");
        if (e - 1 >= b.length) throw new Sk.builtin.ValueError("Attempted relative import beyond toplevel package");
        b.length -= e - 1;
        g = b.join(".");
      }
      try {
        var h = Sk.sysmodules.mp$subscript(g);
      } catch (k) {
        g = void 0;
      }
    }
    if (0 < e && void 0 === h) throw new Sk.builtin.ValueError("Attempted relative import in non-package");
    a.split(".");
    return Sk.misceval.chain(
      void 0,
      function () {
        if (0 !== e && void 0 !== h) return "" === a ? h : Sk.importModuleInternal_(a, void 0, g + "." + a, void 0, h, -1 == e, !0);
      },
      function (b) {
        return void 0 === b ? ((g = h = void 0), Sk.importModuleInternal_(a, void 0, void 0, void 0, void 0, !1, !0)) : b;
      },
      function (b) {
        if (d && 0 !== d.length) {
          var c;
          var e = Sk.sysmodules.mp$subscript((g || "") + (g && a ? "." : "") + a);
          for (b = 0; b < d.length; b++) {
            var f = d[b];
            "*" != f && void 0 === e.tp$getattr(new Sk.builtin.str(f)) && (c = Sk.misceval.chain(c, Sk.importModuleInternal_.bind(null, f, void 0, void 0, void 0, e, !0, !0)));
          }
          return Sk.misceval.chain(c, function () {
            Sk.asserts.assert(e);
            return e;
          });
        }
        return b;
      },
      function (a) {
        f !== Sk.globals && (Sk.globals = f);
        return a;
      }
    );
  };
  Sk.importStar = function (a, b, c) {
    var d;
    c = Object.getOwnPropertyNames(a.$d);
    for (d in c) "_" != c[d].charAt(0) && (b[c[d]] = a.$d[c[d]]);
  };
  Sk.exportSymbol("Sk.importMain", Sk.importMain);
  Sk.exportSymbol("Sk.importMainWithBody", Sk.importMainWithBody);
  Sk.exportSymbol("Sk.importBuiltinWithBody", Sk.importBuiltinWithBody);
  Sk.exportSymbol("Sk.builtin.__import__", Sk.builtin.__import__);
  Sk.exportSymbol("Sk.importStar", Sk.importStar);
  Sk.builtin.timSort = function (a, b) {
    this.list = new Sk.builtin.list(a.v);
    this.MIN_GALLOP = 7;
    this.listlength = b ? b : a.sq$length();
  };
  Sk.builtin.timSort.prototype.lt = function (a, b) {
    return Sk.misceval.richCompareBool(a, b, "Lt");
  };
  Sk.builtin.timSort.prototype.le = function (a, b) {
    return !this.lt(b, a);
  };
  Sk.builtin.timSort.prototype.setitem = function (a, b) {
    this.list.v[a] = b;
  };
  Sk.builtin.timSort.prototype.binary_sort = function (a, b) {
    var c;
    for (c = a.base + b; c < a.base + a.len; c++) {
      var d = a.base;
      var e = c;
      for (b = a.getitem(e); d < e; ) {
        var f = d + ((e - d) >> 1);
        this.lt(b, a.getitem(f)) ? (e = f) : (d = f + 1);
      }
      Sk.asserts.assert(d === e);
      for (f = c; f > d; f--) a.setitem(f, a.getitem(f - 1));
      a.setitem(d, b);
    }
  };
  Sk.builtin.timSort.prototype.count_run = function (a) {
    var b;
    if (1 >= a.len) {
      var c = a.len;
      var d = !1;
    } else if (((c = 2), this.lt(a.getitem(a.base + 1), a.getitem(a.base))))
      for (d = !0, b = a.base + 2; b < a.base + a.len; b++)
        if (this.lt(a.getitem(b), a.getitem(b - 1))) c++;
        else break;
    else for (d = !1, b = a.base + 2; b < a.base + a.len && !this.lt(a.getitem(b), a.getitem(b - 1)); b++) c++;
    return { run: new Sk.builtin.listSlice(a.list, a.base, c), descending: d };
  };
  Sk.builtin.timSort.prototype.sort = function () {
    var a,
      b = new Sk.builtin.listSlice(this.list, 0, this.listlength);
    if (!(2 > b.len)) {
      this.merge_init();
      for (a = this.merge_compute_minrun(b.len); 0 < b.len; ) {
        var c = this.count_run(b);
        c.descending && c.run.reverse();
        if (c.run.len < a) {
          var d = c.run.len;
          c.run.len = a < b.len ? a : b.len;
          this.binary_sort(c.run, d);
        }
        b.advance(c.run.len);
        this.pending.push(c.run);
        this.merge_collapse();
      }
      Sk.asserts.assert(b.base == this.listlength);
      this.merge_force_collapse();
      Sk.asserts.assert(1 == this.pending.length);
      Sk.asserts.assert(0 === this.pending[0].base);
      Sk.asserts.assert(this.pending[0].len == this.listlength);
    }
  };
  Sk.builtin.timSort.prototype.gallop = function (a, b, c, d) {
    var e;
    Sk.asserts.assert(0 <= c && c < b.len);
    var f = this;
    d = d
      ? function (a, b) {
          return f.le(a, b);
        }
      : function (a, b) {
          return f.lt(a, b);
        };
    var g = b.base + c;
    var h = 0;
    var k = 1;
    if (d(b.getitem(g), a)) {
      for (e = b.len - c; k < e; )
        if (d(b.getitem(g + k), a)) {
          h = k;
          try {
            k = (k << 1) + 1;
          } catch (l) {
            k = e;
          }
        } else break;
      k > e && (k = e);
      h += c;
      k += c;
    } else {
      for (e = c + 1; k < e && !d(b.getitem(g - k), a); ) {
        h = k;
        try {
          k = (k << 1) + 1;
        } catch (l) {
          k = e;
        }
      }
      k > e && (k = e);
      g = c - h;
      h = c - k;
      k = g;
    }
    Sk.asserts.assert(-1 <= h < k <= b.len);
    for (h += 1; h < k; ) (c = h + ((k - h) >> 1)), d(b.getitem(b.base + c), a) ? (h = c + 1) : (k = c);
    Sk.asserts.assert(h == k);
    return k;
  };
  Sk.builtin.timSort.prototype.merge_init = function () {
    this.min_gallop = this.MIN_GALLOP;
    this.pending = [];
  };
  Sk.builtin.timSort.prototype.merge_lo = function (a, b) {
    var c, d, e;
    Sk.asserts.assert(0 < a.len && 0 < b.len && a.base + a.len == b.base);
    var f = this.min_gallop;
    var g = a.base;
    a = a.copyitems();
    try {
      if ((this.setitem(g, b.popleft()), g++, 1 != a.len && 0 !== b.len))
        for (;;) {
          for (d = c = 0; ; )
            if (this.lt(b.getitem(b.base), a.getitem(a.base))) {
              this.setitem(g, b.popleft());
              g++;
              if (0 === b.len) return;
              d++;
              c = 0;
              if (d >= f) break;
            } else {
              this.setitem(g, a.popleft());
              g++;
              if (1 == a.len) return;
              c++;
              d = 0;
              if (c >= f) break;
            }
          for (f += 1; ; ) {
            this.min_gallop = f -= 1 < f;
            c = this.gallop(b.getitem(b.base), a, 0, !0);
            for (e = a.base; e < a.base + c; e++) this.setitem(g, a.getitem(e)), g++;
            a.advance(c);
            if (1 >= a.len) return;
            this.setitem(g, b.popleft());
            g++;
            if (0 === b.len) return;
            d = this.gallop(a.getitem(a.base), b, 0, !1);
            for (e = b.base; e < b.base + d; e++) this.setitem(g, b.getitem(e)), g++;
            b.advance(d);
            if (0 === b.len) return;
            this.setitem(g, a.popleft());
            g++;
            if (1 == a.len) return;
            if (c < this.MIN_GALLOP && d < this.MIN_GALLOP) break;
            f++;
            this.min_gallop = f;
          }
        }
    } finally {
      Sk.asserts.assert(0 <= a.len && 0 <= b.len);
      for (e = b.base; e < b.base + b.len; e++) this.setitem(g, b.getitem(e)), g++;
      for (e = a.base; e < a.base + a.len; e++) this.setitem(g, a.getitem(e)), g++;
    }
  };
  Sk.builtin.timSort.prototype.merge_hi = function (a, b) {
    var c, d, e;
    Sk.asserts.assert(0 < a.len && 0 < b.len && a.base + a.len == b.base);
    var f = this.min_gallop;
    var g = b.base + b.len;
    b = b.copyitems();
    try {
      if ((g--, this.setitem(g, a.popright()), 0 !== a.len && 1 != b.len))
        for (;;) {
          for (d = c = 0; ; ) {
            var h = a.getitem(a.base + a.len - 1);
            var k = b.getitem(b.base + b.len - 1);
            if (this.lt(k, h)) {
              g--;
              this.setitem(g, h);
              a.len--;
              if (0 === a.len) return;
              c++;
              d = 0;
              if (c >= f) break;
            } else {
              g--;
              this.setitem(g, k);
              b.len--;
              if (1 == b.len) return;
              d++;
              c = 0;
              if (d >= f) break;
            }
          }
          for (f += 1; ; ) {
            this.min_gallop = f -= 1 < f;
            k = b.getitem(b.base + b.len - 1);
            var l = this.gallop(k, a, a.len - 1, !0);
            c = a.len - l;
            for (e = a.base + a.len - 1; e > a.base + l - 1; e--) g--, this.setitem(g, a.getitem(e));
            a.len -= c;
            if (0 === a.len) return;
            g--;
            this.setitem(g, b.popright());
            if (1 == b.len) return;
            h = a.getitem(a.base + a.len - 1);
            l = this.gallop(h, b, b.len - 1, !1);
            d = b.len - l;
            for (e = b.base + b.len - 1; e > b.base + l - 1; e--) g--, this.setitem(g, b.getitem(e));
            b.len -= d;
            if (1 >= b.len) return;
            g--;
            this.setitem(g, a.popright());
            if (0 === a.len) return;
            if (c < this.MIN_GALLOP && d < this.MIN_GALLOP) break;
            f++;
            this.min_gallop = f;
          }
        }
    } finally {
      Sk.asserts.assert(0 <= a.len && 0 <= b.len);
      for (e = a.base + a.len - 1; e > a.base - 1; e--) g--, this.setitem(g, a.getitem(e));
      for (e = b.base + b.len - 1; e > b.base - 1; e--) g--, this.setitem(g, b.getitem(e));
    }
  };
  Sk.builtin.timSort.prototype.merge_at = function (a) {
    0 > a && (a = this.pending.length + a);
    var b = this.pending[a];
    var c = this.pending[a + 1];
    Sk.asserts.assert(0 < b.len && 0 < c.len);
    Sk.asserts.assert(b.base + b.len == c.base);
    this.pending[a] = new Sk.builtin.listSlice(this.list, b.base, b.len + c.len);
    this.pending.splice(a + 1, 1);
    a = this.gallop(c.getitem(c.base), b, 0, !0);
    b.advance(a);
    0 !== b.len && ((c.len = this.gallop(b.getitem(b.base + b.len - 1), c, c.len - 1, !1)), 0 !== c.len && (b.len <= c.len ? this.merge_lo(b, c) : this.merge_hi(b, c)));
  };
  Sk.builtin.timSort.prototype.merge_collapse = function () {
    for (var a = this.pending; 1 < a.length; )
      if (3 <= a.length && a[a.length - 3].len <= a[a.length - 2].len + a[a.length - 1].len) a[a.length - 3].len < a[a.length - 1].len ? this.merge_at(-3) : this.merge_at(-2);
      else if (a[a.length - 2].len <= a[a.length - 1].len) this.merge_at(-2);
      else break;
  };
  Sk.builtin.timSort.prototype.merge_force_collapse = function () {
    for (var a = this.pending; 1 < a.length; ) 3 <= a.length && a[a.length - 3].len < a[a.length - 1].len ? this.merge_at(-3) : this.merge_at(-2);
  };
  Sk.builtin.timSort.prototype.merge_compute_minrun = function (a) {
    for (var b = 0; 64 <= a; ) (b |= a & 1), (a >>= 1);
    return a + b;
  };
  Sk.builtin.listSlice = function (a, b, c) {
    this.list = a;
    this.base = b;
    this.len = c;
  };
  Sk.builtin.listSlice.prototype.copyitems = function () {
    var a = this.base,
      b = this.base + this.len;
    Sk.asserts.assert(0 <= a <= b);
    return new Sk.builtin.listSlice(new Sk.builtin.list(this.list.v.slice(a, b)), 0, this.len);
  };
  Sk.builtin.listSlice.prototype.advance = function (a) {
    this.base += a;
    this.len -= a;
    Sk.asserts.assert(this.base <= this.list.sq$length());
  };
  Sk.builtin.listSlice.prototype.getitem = function (a) {
    return this.list.v[a];
  };
  Sk.builtin.listSlice.prototype.setitem = function (a, b) {
    this.list.v[a] = b;
  };
  Sk.builtin.listSlice.prototype.popleft = function () {
    var a = this.list.v[this.base];
    this.base++;
    this.len--;
    return a;
  };
  Sk.builtin.listSlice.prototype.popright = function () {
    this.len--;
    return this.list.v[this.base + this.len];
  };
  Sk.builtin.listSlice.prototype.reverse = function () {
    for (var a, b, c = this.list, d = this.base, e = d + this.len - 1; d < e; ) (a = c.v[e]), (b = c.v[d]), (c.v[d] = a), (c.v[e] = b), d++, e--;
  };
  Sk.exportSymbol("Sk.builtin.listSlice", Sk.builtin.listSlice);
  Sk.exportSymbol("Sk.builtin.timSort", Sk.builtin.timSort);
  Sk.builtin.sorted = function (a, b, c, d) {
    var e;
    if (void 0 === d) d = !1;
    else {
      if (d instanceof Sk.builtin.float_) throw new Sk.builtin.TypeError("an integer is required, got float");
      if (d instanceof Sk.builtin.int_ || d.prototype instanceof Sk.builtin.int_) d = Sk.misceval.isTrue(d);
      else throw new Sk.builtin.TypeError("an integer is required");
    }
    if (void 0 === c || c instanceof Sk.builtin.none) b instanceof Sk.builtin.none || void 0 === b || (e = b), (a = new Sk.builtin.list(a));
    else {
      e =
        b instanceof Sk.builtin.none || void 0 === b
          ? function (a, b) {
              return Sk.misceval.richCompareBool(a[0], b[0], "Lt") ? new Sk.builtin.int_(-1) : new Sk.builtin.int_(0);
            }
          : function (a, c) {
              return Sk.misceval.callsimArray(b, [a[0], c[0]]);
            };
      var f = a.tp$iter();
      var g = f.tp$iternext();
      for (a = []; void 0 !== g; ) a.push([Sk.misceval.callsimArray(c, [g]), g]), (g = f.tp$iternext());
      a = new Sk.builtin.list(a);
    }
    void 0 !== e ? a.list_sort_(a, e) : a.list_sort_(a);
    d && a.list_reverse_(a);
    if (void 0 !== c && !(c instanceof Sk.builtin.none)) {
      f = a.tp$iter();
      g = f.tp$iternext();
      for (a = []; void 0 !== g; ) a.push(g[1]), (g = f.tp$iternext());
      a = new Sk.builtin.list(a);
    }
    return a;
  };
  Sk.builtin.type_is_subtype_base_chain = function (a, b) {
    do {
      if (a == b) return !0;
      a = a.tp$base;
    } while (void 0 !== a);
    return b == Sk.builtin.object;
  };
  Sk.builtin.PyType_IsSubtype = function (a, b) {
    var c = a.tp$mro;
    if (c) {
      Sk.asserts.assert(c instanceof Sk.builtin.tuple);
      for (a = 0; a < c.v.length; a++) if (c.v[a] == b) return !0;
      return !1;
    }
    return Sk.builtin.type_is_subtype_base_chain(a, b);
  };
  Sk.builtin.super_ = function (a, b) {
    Sk.builtin.pyCheckArgsLen("super", arguments.length, 1);
    if (!(this instanceof Sk.builtin.super_)) return new Sk.builtin.super_(a, b);
    Sk.misceval.callsimArray(Sk.builtin.super_.__init__, [this, a, b]);
    return this;
  };
  Sk.builtin.super_.__init__ = new Sk.builtin.func(function (a, b, c) {
    a.obj = c;
    a.type = b;
    if (!b.tp$mro) throw new Sk.builtin.TypeError("must be type, not " + b.ob$type.tp$name);
    a.obj_type = b.tp$mro.v[1];
    if (!c) throw new Sk.builtin.NotImplementedError("unbound super not supported because skulpts implementation of type descriptors aren't brilliant yet, see this question for more information https://stackoverflow.com/a/30190341/117242");
    if (!Sk.builtin.PyType_IsSubtype(a.obj.ob$type, a.type)) throw new Sk.builtin.TypeError("super(type, obj): obj must be an instance of subtype of type");
    return Sk.builtin.none.none$;
  });
  Sk.abstr.setUpInheritance("super", Sk.builtin.super_, Sk.builtin.object);
  Sk.builtin.super_.prototype.tp$getattr = function (a, b) {
    var c,
      d,
      e = a.$jsstr();
    var f = this.obj_type;
    Sk.asserts.assert(void 0 !== f, "object has no ob$type!");
    if ((d = this.obj.$d || this.obj.constructor.$d)) if ((d.mp$lookup ? (c = d.mp$lookup(a)) : d.mp$subscript ? (c = Sk.builtin._tryGetSubscript(d, a)) : "object" === typeof d && (c = d[e]), void 0 !== c)) return c;
    c = Sk.builtin.type.typeLookup(f, a);
    if (void 0 !== c && null !== c && (a = c.tp$descr_get)) return a.call(c, this.obj, this.obj_type, b);
    if (void 0 !== c) return c;
  };
  Sk.builtin.super_.prototype.$r = function (a) {
    return this.obj
      ? new Sk.builtin.str("<super: <class '" + (this.type ? this.type.tp$name : "NULL") + "'>, <" + this.obj.tp$name + " object>>")
      : new Sk.builtin.str("<super: <class '" + (this.type ? this.type.tp$name : "NULL") + "'>, NULL>");
  };
  Sk.builtin.super_.__doc__ = new Sk.builtin.str(
    "super(type, obj) -> bound super object; requires isinstance(obj, type)\nsuper(type) -> unbound super object\nsuper(type, type2) -> bound super object; requires issubclass(type2, type)\nTypical use to call a cooperative superclass method:\nclass C(B):\n    def meth(self, arg):\n        super(C, self).meth(arg)"
  );
  Sk.builtins = {
    range: new Sk.builtin.func(Sk.builtin.range),
    round: new Sk.builtin.func(Sk.builtin.round),
    len: new Sk.builtin.func(Sk.builtin.len),
    min: new Sk.builtin.func(Sk.builtin.min),
    max: new Sk.builtin.func(Sk.builtin.max),
    sum: new Sk.builtin.func(Sk.builtin.sum),
    zip: new Sk.builtin.func(Sk.builtin.zip),
    abs: new Sk.builtin.func(Sk.builtin.abs),
    fabs: new Sk.builtin.func(Sk.builtin.fabs),
    ord: new Sk.builtin.func(Sk.builtin.ord),
    chr: new Sk.builtin.func(Sk.builtin.chr),
    hex: new Sk.builtin.func(Sk.builtin.hex),
    oct: new Sk.builtin.func(Sk.builtin.oct),
    bin: new Sk.builtin.func(Sk.builtin.bin),
    dir: new Sk.builtin.func(Sk.builtin.dir),
    repr: new Sk.builtin.func(Sk.builtin.repr),
    open: new Sk.builtin.func(Sk.builtin.open),
    isinstance: new Sk.builtin.func(Sk.builtin.isinstance),
    hash: new Sk.builtin.func(Sk.builtin.hash),
    getattr: new Sk.builtin.func(Sk.builtin.getattr),
    hasattr: new Sk.builtin.func(Sk.builtin.hasattr),
    id: new Sk.builtin.func(Sk.builtin.id),
    map: new Sk.builtin.func(Sk.builtin.map),
    filter: new Sk.builtin.func(Sk.builtin.filter),
    reduce: new Sk.builtin.func(Sk.builtin.reduce),
    sorted: new Sk.builtin.func(Sk.builtin.sorted),
    any: new Sk.builtin.func(Sk.builtin.any),
    all: new Sk.builtin.func(Sk.builtin.all),
    AttributeError: Sk.builtin.AttributeError,
    ValueError: Sk.builtin.ValueError,
    Exception: Sk.builtin.Exception,
    ZeroDivisionError: Sk.builtin.ZeroDivisionError,
    AssertionError: Sk.builtin.AssertionError,
    ImportError: Sk.builtin.ImportError,
    IndentationError: Sk.builtin.IndentationError,
    IndexError: Sk.builtin.IndexError,
    KeyError: Sk.builtin.KeyError,
    TypeError: Sk.builtin.TypeError,
    NameError: Sk.builtin.NameError,
    IOError: Sk.builtin.IOError,
    NotImplementedError: Sk.builtin.NotImplementedError,
    StandardError: Sk.builtin.StandardError,
    SystemExit: Sk.builtin.SystemExit,
    OverflowError: Sk.builtin.OverflowError,
    OperationError: Sk.builtin.OperationError,
    NegativePowerError: Sk.builtin.NegativePowerError,
    RuntimeError: Sk.builtin.RuntimeError,
    StopIteration: Sk.builtin.StopIteration,
    float_$rw$: Sk.builtin.float_,
    int_$rw$: Sk.builtin.int_,
    bool: Sk.builtin.bool,
    complex: Sk.builtin.complex,
    enumerate: Sk.builtin.enumerate,
    dict: Sk.builtin.dict,
    file: Sk.builtin.file,
    function: Sk.builtin.func,
    generator: Sk.builtin.generator,
    list: Sk.builtin.list,
    long_$rw$: Sk.builtin.lng,
    method: Sk.builtin.method,
    object: Sk.builtin.object,
    slice: Sk.builtin.slice,
    str: Sk.builtin.str,
    set: Sk.builtin.set,
    tuple: Sk.builtin.tuple,
    type: Sk.builtin.type,
    input: new Sk.builtin.func(Sk.builtin.input),
    raw_input: new Sk.builtin.func(Sk.builtin.raw_input),
    setattr: new Sk.builtin.func(Sk.builtin.setattr),
    jseval: Sk.builtin.jseval,
    jsmillis: Sk.builtin.jsmillis,
    quit: new Sk.builtin.func(Sk.builtin.quit),
    exit: new Sk.builtin.func(Sk.builtin.quit),
    print: Sk.builtin.print,
    divmod: new Sk.builtin.func(Sk.builtin.divmod),
    format: new Sk.builtin.func(Sk.builtin.format),
    globals: new Sk.builtin.func(Sk.builtin.globals),
    issubclass: new Sk.builtin.func(Sk.builtin.issubclass),
    iter: Sk.builtin.iter,
    bytearray: Sk.builtin.bytearray,
    callable: Sk.builtin.callable,
    delattr: Sk.builtin.delattr,
    eval_$rn$: Sk.builtin.eval_,
    execfile: Sk.builtin.execfile,
    frozenset: Sk.builtin.frozenset,
    help: Sk.builtin.help,
    locals: Sk.builtin.locals,
    memoryview: Sk.builtin.memoryview,
    next: Sk.builtin.next_,
    pow: Sk.builtin.pow,
    reload: Sk.builtin.reload,
    reversed: Sk.builtin.reversed,
    super: Sk.builtin.super_,
    unichr: Sk.builtin.unichr,
    vars: Sk.builtin.vars,
    xrange: Sk.builtin.xrange,
    apply_$rn$: Sk.builtin.apply_,
    buffer: Sk.builtin.buffer,
    coerce: Sk.builtin.coerce,
    intern: Sk.builtin.intern,
  };
  Sk.exportSymbol("Sk.builtins", Sk.builtins);
  Sk.builtin.str.$emptystr = new Sk.builtin.str("");
  Sk.builtin.bool.true$ = Object.create(Sk.builtin.bool.prototype, { v: { value: 1, enumerable: !0 } });
  Sk.builtin.bool.false$ = Object.create(Sk.builtin.bool.prototype, { v: { value: 0, enumerable: !0 } });
  Sk.builtin.int_.co_varnames = ["number", "base"];
  Sk.builtin.int_.$defaults = [Sk.builtin.none.none$];
  Sk.builtin.lng.co_varnames = ["number", "base"];
  Sk.builtin.lng.$defaults = [Sk.builtin.none.none$];
  Sk.builtin.sorted.co_varnames = ["list", "cmp", "key", "reverse"];
  Sk.builtin.sorted.$defaults = [Sk.builtin.none.none$, Sk.builtin.none.none$, Sk.builtin.bool.false$];
  Sk.builtin.dict.$fromkeys.co_name = new Sk.builtin.str("fromkeys");
  Sk.builtin.dict.prototype.fromkeys = new Sk.builtin.func(Sk.builtin.dict.$fromkeys);
  Sk.builtin.str.$empty = new Sk.builtin.str("");
  Sk.builtin.str.$default_factory = new Sk.builtin.str("default_factory");
  Sk.builtin.str.$imag = new Sk.builtin.str("imag");
  Sk.builtin.str.$real = new Sk.builtin.str("real");
  Sk.builtin.str.$abs = new Sk.builtin.str("__abs__");
  Sk.builtin.str.$call = new Sk.builtin.str("__call__");
  Sk.builtin.str.$cmp = new Sk.builtin.str("__cmp__");
  Sk.builtin.str.$complex = new Sk.builtin.str("__complex__");
  Sk.builtin.str.$contains = new Sk.builtin.str("__contains__");
  Sk.builtin.str.$copy = new Sk.builtin.str("__copy__");
  Sk.builtin.str.$dict = new Sk.builtin.str("__dict__");
  Sk.builtin.str.$dir = new Sk.builtin.str("__dir__");
  Sk.builtin.str.$enter = new Sk.builtin.str("__enter__");
  Sk.builtin.str.$eq = new Sk.builtin.str("__eq__");
  Sk.builtin.str.$exit = new Sk.builtin.str("__exit__");
  Sk.builtin.str.$index = new Sk.builtin.str("__index__");
  Sk.builtin.str.$init = new Sk.builtin.str("__init__");
  Sk.builtin.str.$int_ = new Sk.builtin.str("__int__");
  Sk.builtin.str.$iter = new Sk.builtin.str("__iter__");
  Sk.builtin.str.$float_ = new Sk.builtin.str("__float__");
  Sk.builtin.str.$format = new Sk.builtin.str("__format__");
  Sk.builtin.str.$ge = new Sk.builtin.str("__ge__");
  Sk.builtin.str.$getattr = new Sk.builtin.str("__getattr__");
  Sk.builtin.str.$getattribute = new Sk.builtin.str("__getattribute__");
  Sk.builtin.str.$getitem = new Sk.builtin.str("__getitem__");
  Sk.builtin.str.$gt = new Sk.builtin.str("__gt__");
  Sk.builtin.str.$le = new Sk.builtin.str("__le__");
  Sk.builtin.str.$len = new Sk.builtin.str("__len__");
  Sk.builtin.str.$lt = new Sk.builtin.str("__lt__");
  Sk.builtin.str.$name = new Sk.builtin.str("__name__");
  Sk.builtin.str.$ne = new Sk.builtin.str("__ne__");
  Sk.builtin.str.$new = new Sk.builtin.str("__new__");
  Sk.builtin.str.$next2 = new Sk.builtin.str("next");
  Sk.builtin.str.$next3 = new Sk.builtin.str("__next__");
  Sk.builtin.str.$path = new Sk.builtin.str("__path__");
  Sk.builtin.str.$repr = new Sk.builtin.str("__repr__");
  Sk.builtin.str.$reversed = new Sk.builtin.str("__reversed__");
  Sk.builtin.str.$round = new Sk.builtin.str("__round__");
  Sk.builtin.str.$setattr = new Sk.builtin.str("__setattr__");
  Sk.builtin.str.$setitem = new Sk.builtin.str("__setitem__");
  Sk.builtin.str.$str = new Sk.builtin.str("__str__");
  Sk.builtin.str.$trunc = new Sk.builtin.str("__trunc__");
  Sk.builtin.str.$write = new Sk.builtin.str("write");
  Sk.misceval.op2method_ = { Eq: Sk.builtin.str.$eq, NotEq: Sk.builtin.str.$ne, Gt: Sk.builtin.str.$gt, GtE: Sk.builtin.str.$ge, Lt: Sk.builtin.str.$lt, LtE: Sk.builtin.str.$le };
  for (
    var builtinNames = "int_ lng sorted range round len min max sum zip abs fabs ord chr hex oct bin dir repr open isinstance hash getattr hasattr id map filter reduce sorted any all input raw_input setattr quit quit divmod format globals issubclass".split(
        " "
      ),
      i = 0;
    i < builtinNames.length;
    i++
  )
    Sk.builtin[builtinNames[i]].co_name = new Sk.builtin.str(builtinNames[i]);
  Sk.internalPy = {
    files: {
      "src/staticmethod.py": 'class staticmethod(object):\n    "Emulate PyStaticMethod_Type() in Objects/funcobject.c"\n\n    def __init__(self, f):\n        self.f = f\n\n    def __get__(self, obj, objtype=None):\n        return self.f\n',
      "src/property.py":
        'class property(object):\n    "Emulate PyProperty_Type() in Objects/descrobject.c"\n\n    def __init__(self, fget=None, fset=None, fdel=None, doc=None):\n        self.fget = fget\n        self.fset = fset\n        self.fdel = fdel\n        if doc is None and fget is not None:\n            if hasattr(fget, \'__doc__\'):\n                doc = fget.__doc__\n            else:\n                doc = None\n        self.__doc__ = doc\n\n    def __get__(self, obj, objtype=None):\n        if obj is None:\n            return self\n        if self.fget is None:\n            raise AttributeError("unreadable attribute")\n        return self.fget(obj)\n\n    def __set__(self, obj, value):\n        if self.fset is None:\n            raise AttributeError("can\'t set attribute")\n        self.fset(obj, value)\n\n    def __delete__(self, obj):\n        if self.fdel is None:\n            raise AttributeError("can\'t delete attribute")\n        self.fdel(obj)\n\n    def getter(self, fget):\n        return type(self)(fget, self.fset, self.fdel, self.__doc__)\n\n    def setter(self, fset):\n        return type(self)(self.fget, fset, self.fdel, self.__doc__)\n\n    def deleter(self, fdel):\n        return type(self)(self.fget, self.fset, fdel, self.__doc__)\n',
      "src/classmethod.py":
        'class classmethod(object):\n    "Emulate PyClassMethod_Type() in Objects/funcobject.c"\n\n    def __init__(self, f):\n        self.f = f\n\n    def __get__(self, obj, klass=None):\n        if klass is None:\n            klass = type(obj)\n        def newfunc(*args):\n            return self.f(klass, *args)\n        return newfunc\n',
    },
  };
})();