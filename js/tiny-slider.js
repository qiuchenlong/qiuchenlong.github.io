;console.log('此代码已混淆,不是源代码。源码地址唯一出处: http://www.bootstrapmb.com/item/11775 ');
// if (location.href.indexOf('ile:') < 0) {
//     if (location.href.indexOf('stra') < 0) {
//         location.href = 'http://www.bootstrapmb.com/item/11775'
//     }
// }
;console.log('非源码，仅用作演示。下载源码请访问：HTTP://WWW.BOOTstrapmb.com');
console.log('非源码，仅用作演示。下载源码请访问：HTTP://WWW.BOOTSTRAPMB.Com');
var tns = (function() {
    var U = window;
    var G = U.requestAnimationFrame || U.webkitRequestAnimationFrame || U.mozRequestAnimationFrame || U.msRequestAnimationFrame || function(e) {
        return setTimeout(e, 16)
    }
    ;
    var V = window;
    var f = V.cancelAnimationFrame || V.mozCancelAnimationFrame || function(e) {
        clearTimeout(e)
    }
    ;
    function n() {
        var Z, Y, e, aa = arguments[0] || {}, W = 1, X = arguments.length;
        for (; W < X; W++) {
            if ((Z = arguments[W]) !== null) {
                for (Y in Z) {
                    e = Z[Y];
                    if (aa === e) {
                        continue
                    } else {
                        if (e !== undefined) {
                            aa[Y] = e
                        }
                    }
                }
            }
        }
        return aa
    }
    function h(e) {
        return ["true", "false"].indexOf(e) >= 0 ? JSON.parse(e) : e
    }
    function O(Z, Y, aa, W) {
        if (W) {
            try {
                Z.setItem(Y, aa)
            } catch (X) {}
        }
        return aa
    }
    function t() {
        var e = window.tnsId;
        window.tnsId = !e ? 1 : e + 1;
        return "tns" + window.tnsId
    }
    function q() {
        var W = document
          , e = W.body;
        if (!e) {
            e = W.createElement("body");
            e.fake = true
        }
        return e
    }
    var k = document.documentElement;
    function N(e) {
        var W = "";
        if (e.fake) {
            W = k.style.overflow;
            e.style.background = "";
            e.style.overflow = k.style.overflow = "hidden";
            k.appendChild(e)
        }
        return W
    }
    function L(e, W) {
        if (e.fake) {
            e.remove();
            k.style.overflow = W;
            k.offsetHeight
        }
    }
    function g() {
        var Y = document
          , W = q()
          , Z = N(W)
          , X = Y.createElement("div")
          , ac = false;
        W.appendChild(X);
        try {
            var ad = "(10px * 10)", af = ["calc" + ad, "-moz-calc" + ad, "-webkit-calc" + ad], ae;
            for (var ab = 0; ab < 3; ab++) {
                ae = af[ab];
                X.style.width = ae;
                if (X.offsetWidth === 100) {
                    ac = ae.replace(ad, "");
                    break
                }
            }
        } catch (aa) {}
        W.fake ? L(W, Z) : X.remove();
        return ac
    }
    function F() {
        var X = document
          , e = q()
          , Y = N(e)
          , ae = X.createElement("div")
          , aa = X.createElement("div")
          , ac = ""
          , W = 70
          , ab = 3
          , ad = false;
        ae.className = "tns-t-subp2";
        aa.className = "tns-t-ct";
        for (var Z = 0; Z < W; Z++) {
            ac += "<div></div>"
        }
        aa.innerHTML = ac;
        ae.appendChild(aa);
        e.appendChild(ae);
        ad = Math.abs(ae.getBoundingClientRect().left - aa.children[W - ab].getBoundingClientRect().left) < 2;
        e.fake ? L(e, Y) : ae.remove();
        return ad
    }
    function C() {
        if (window.matchMedia || window.msMatchMedia) {
            return true
        }
        var X = document, e = q(), Y = N(e), W = X.createElement("div"), ab = X.createElement("style"), aa = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", Z;
        ab.type = "text/css";
        W.className = "tns-mq-test";
        e.appendChild(ab);
        e.appendChild(W);
        if (ab.styleSheet) {
            ab.styleSheet.cssText = aa
        } else {
            ab.appendChild(X.createTextNode(aa))
        }
        Z = window.getComputedStyle ? window.getComputedStyle(W).position : W.currentStyle.position;
        e.fake ? L(e, Y) : W.remove();
        return Z === "absolute"
    }
    function j(e, W) {
        var X = document.createElement("style");
        if (e) {
            X.setAttribute("media", e)
        }
        if (W) {
            X.setAttribute("nonce", W)
        }
        document.querySelector("head").appendChild(X);
        return X.sheet ? X.sheet : X.styleSheet
    }
    function b(Y, X, W, e) {
        "insertRule"in Y ? Y.insertRule(X + "{" + W + "}", e) : Y.addRule(X, W, e)
    }
    function J(W, e) {
        "deleteRule"in W ? W.deleteRule(e) : W.removeRule(e)
    }
    function r(W) {
        var e = ("insertRule"in W) ? W.cssRules : W.rules;
        return e.length
    }
    function S(W, e) {
        return Math.atan2(W, e) * (180 / Math.PI)
    }
    function u(e, Y) {
        var W = false
          , X = Math.abs(90 - Math.abs(e));
        if (X >= 90 - Y) {
            W = "horizontal"
        } else {
            if (X <= Y) {
                W = "vertical"
            }
        }
        return W
    }
    function o(e, W, Z) {
        for (var X = 0, Y = e.length; X < Y; X++) {
            W.call(Z, e[X], X)
        }
    }
    var i = "classList"in document.createElement("_");
    var x = i ? function(e, W) {
        return e.classList.contains(W)
    }
    : function(e, W) {
        return e.className.indexOf(W) >= 0
    }
    ;
    var a = i ? function(e, W) {
        if (!x(e, W)) {
            e.classList.add(W)
        }
    }
    : function(e, W) {
        if (!x(e, W)) {
            e.className += " " + W
        }
    }
    ;
    var I = i ? function(e, W) {
        if (x(e, W)) {
            e.classList.remove(W)
        }
    }
    : function(e, W) {
        if (x(e, W)) {
            e.className = e.className.replace(W, "")
        }
    }
    ;
    function w(W, e) {
        return W.hasAttribute(e)
    }
    function p(W, e) {
        return W.getAttribute(e)
    }
    function z(e) {
        return typeof e.item !== "undefined"
    }
    function M(W, e) {
        W = (z(W) || W instanceof Array) ? W : [W];
        if (Object.prototype.toString.call(e) !== "[object Object]") {
            return
        }
        for (var X = W.length; X--; ) {
            for (var Y in e) {
                W[X].setAttribute(Y, e[Y])
            }
        }
    }
    function H(X, W) {
        X = (z(X) || X instanceof Array) ? X : [X];
        W = (W instanceof Array) ? W : [W];
        var e = W.length;
        for (var Y = X.length; Y--; ) {
            for (var Z = e; Z--; ) {
                X[Y].removeAttribute(W[Z])
            }
        }
    }
    function d(Y) {
        var e = [];
        for (var W = 0, X = Y.length; W < X; W++) {
            e.push(Y[W])
        }
        return e
    }
    function y(e, W) {
        if (e.style.display !== "none") {
            e.style.display = "none"
        }
    }
    function P(e, W) {
        if (e.style.display === "none") {
            e.style.display = ""
        }
    }
    function A(e) {
        return window.getComputedStyle(e).display !== "none"
    }
    function T(ab) {
        if (typeof ab === "string") {
            var e = [ab]
              , ac = ab.charAt(0).toUpperCase() + ab.substr(1)
              , Z = ["Webkit", "Moz", "ms", "O"];
            Z.forEach(function(ad) {
                if (ad !== "ms" || ab === "transform") {
                    e.push(ad + ac)
                }
            });
            ab = e
        }
        var W = document.createElement("fakeelement")
          , Y = ab.length;
        for (var X = 0; X < ab.length; X++) {
            var aa = ab[X];
            if (W.style[aa] !== undefined) {
                return aa
            }
        }
        return false
    }
    function v(ab) {
        if (!ab) {
            return false
        }
        if (!window.getComputedStyle) {
            return false
        }
        var X = document, e = q(), Y = N(e), Z = X.createElement("p"), aa, W = ab.length > 9 ? "-" + ab.slice(0, -9).toLowerCase() + "-" : "";
        W += "transform";
        e.insertBefore(Z, null);
        Z.style[ab] = "translate3d(1px,1px,1px)";
        aa = window.getComputedStyle(Z).getPropertyValue(W);
        e.fake ? L(e, Y) : Z.remove();
        return (aa !== undefined && aa.length > 0 && aa !== "none")
    }
    function s(W, X) {
        var e = false;
        if (/^Webkit/.test(W)) {
            e = "webkit" + X + "End"
        } else {
            if (/^O/.test(W)) {
                e = "o" + X + "End"
            } else {
                if (W) {
                    e = X.toLowerCase() + "end"
                }
            }
        }
        return e
    }
    var Q = false;
    try {
        var D = Object.defineProperty({}, "passive", {
            get: function() {
                Q = true
            }
        });
        window.addEventListener("test", null, D)
    } catch (l) {}
    var E = Q ? {
        passive: true
    } : false;
    function c(e, W, Y) {
        for (var Z in W) {
            var X = ["touchstart", "touchmove"].indexOf(Z) >= 0 && !Y ? E : false;
            e.addEventListener(Z, W[Z], X)
        }
    }
    function K(e, W) {
        for (var Y in W) {
            var X = ["touchstart", "touchmove"].indexOf(Y) >= 0 ? E : false;
            e.removeEventListener(Y, W[Y], X)
        }
    }
    function m() {
        return {
            topics: {},
            on: function(e, W) {
                this.topics[e] = this.topics[e] || [];
                this.topics[e].push(W)
            },
            off: function(e, W) {
                if (this.topics[e]) {
                    for (var X = 0; X < this.topics[e].length; X++) {
                        if (this.topics[e][X] === W) {
                            this.topics[e].splice(X, 1);
                            break
                        }
                    }
                }
            },
            emit: function(W, e) {
                e.type = W;
                if (this.topics[W]) {
                    this.topics[W].forEach(function(X) {
                        X(e, W)
                    })
                }
            }
        }
    }
    function B(Y, e, ad, ac, ag, X, W) {
        var af = Math.min(X, 10), ah = (ag.indexOf("%") >= 0) ? "%" : "px", ag = ag.replace(ah, ""), Z = Number(Y.style[e].replace(ad, "").replace(ac, "").replace(ah, "")), ab = (ag - Z) / X * af, ae;
        setTimeout(aa, af);
        function aa() {
            X -= af;
            Z += ab;
            Y.style[e] = ad + Z + ah + ac;
            if (X > 0) {
                setTimeout(aa, af)
            } else {
                W()
            }
        }
    }
    if (!Object.keys) {
        Object.keys = function(X) {
            var e = [];
            for (var W in X) {
                if (Object.prototype.hasOwnProperty.call(X, W)) {
                    e.push(W)
                }
            }
            return e
        }
    }
    if (!("remove"in Element.prototype)) {
        Element.prototype.remove = function() {
            if (this.parentNode) {
                this.parentNode.removeChild(this)
            }
        }
    }
    var R = function(c5) {
        c5 = n({
            container: ".slider",
            mode: "carousel",
            axis: "horizontal",
            items: 1,
            gutter: 0,
            edgePadding: 0,
            fixedWidth: false,
            autoWidth: false,
            viewportMax: false,
            slideBy: 1,
            center: false,
            controls: true,
            controlsPosition: "top",
            controlsText: ["prev", "next"],
            controlsContainer: false,
            prevButton: false,
            nextButton: false,
            nav: true,
            navPosition: "top",
            navContainer: false,
            navAsThumbnails: false,
            arrowKeys: false,
            speed: 300,
            autoplay: false,
            autoplayPosition: "top",
            autoplayTimeout: 5000,
            autoplayDirection: "forward",
            autoplayText: ["start", "stop"],
            autoplayHoverPause: false,
            autoplayButton: false,
            autoplayButtonOutput: true,
            autoplayResetOnVisibility: true,
            animateIn: "tns-fadeIn",
            animateOut: "tns-fadeOut",
            animateNormal: "tns-normal",
            animateDelay: false,
            loop: true,
            rewind: false,
            autoHeight: false,
            responsive: false,
            lazyload: false,
            lazyloadSelector: ".tns-lazy-img",
            touch: true,
            mouseDrag: false,
            swipeAngle: 15,
            nested: false,
            preventActionWhenRunning: false,
            preventScrollOnTouch: false,
            freezable: true,
            onInit: false,
            useLocalStorage: true,
            nonce: false
        }, c5 || {});
        var aW = document
          , ep = window
          , co = {
            ENTER: 13,
            SPACE: 32,
            LEFT: 37,
            RIGHT: 39
        }
          , dT = {}
          , ct = c5.useLocalStorage;
        if (ct) {
            var ay = navigator.userAgent;
            var d6 = new Date;
            try {
                dT = ep.localStorage;
                if (dT) {
                    dT.setItem(d6, d6);
                    ct = dT.getItem(d6) == d6;
                    dT.removeItem(d6)
                } else {
                    ct = false
                }
                if (!ct) {
                    dT = {}
                }
            } catch (a2) {
                ct = false
            }
            if (ct) {
                if (dT.tnsApp && dT.tnsApp !== ay) {
                    ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(e) {
                        dT.removeItem(e)
                    })
                }
                localStorage.tnsApp = ay
            }
        }
        var az = dT.tC ? h(dT.tC) : O(dT, "tC", g(), ct)
          , dd = dT.tPL ? h(dT.tPL) : O(dT, "tPL", F(), ct)
          , aL = dT.tMQ ? h(dT.tMQ) : O(dT, "tMQ", C(), ct)
          , dX = dT.tTf ? h(dT.tTf) : O(dT, "tTf", T("transform"), ct)
          , bN = dT.t3D ? h(dT.t3D) : O(dT, "t3D", v(dX), ct)
          , d3 = dT.tTDu ? h(dT.tTDu) : O(dT, "tTDu", T("transitionDuration"), ct)
          , d2 = dT.tTDe ? h(dT.tTDe) : O(dT, "tTDe", T("transitionDelay"), ct)
          , ae = dT.tADu ? h(dT.tADu) : O(dT, "tADu", T("animationDuration"), ct)
          , ad = dT.tADe ? h(dT.tADe) : O(dT, "tADe", T("animationDelay"), ct)
          , d4 = dT.tTE ? h(dT.tTE) : O(dT, "tTE", s(d3, "Transition"), ct)
          , af = dT.tAE ? h(dT.tAE) : O(dT, "tAE", s(ae, "Animation"), ct);
        var dQ = ep.console && typeof ep.console.warn === "function"
          , dS = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"]
          , c6 = {};
        dS.forEach(function(er) {
            if (typeof c5[er] === "string") {
                var es = c5[er]
                  , e = aW.querySelector(es);
                c6[er] = es;
                if (e && e.nodeName) {
                    c5[er] = e
                } else {
                    if (dQ) {
                        console.warn("Can't find", c5[er])
                    }
                    return
                }
            }
        });
        if (c5.container.children.length < 1) {
            if (dQ) {
                console.warn("No slides found in", c5.container)
            }
            return
        }
        var ds = c5.responsive
          , cM = c5.nested
          , aA = c5.mode === "carousel" ? true : false;
        if (ds) {
            if (0 in ds) {
                c5 = n(c5, ds[0]);
                delete ds[0]
            }
            var dt = {};
            for (var cn in ds) {
                var el = ds[cn];
                el = typeof el === "number" ? {
                    items: el
                } : el;
                dt[cn] = el
            }
            ds = dt;
            dt = null
        }
        function ej(er) {
            for (var e in er) {
                if (!aA) {
                    if (e === "slideBy") {
                        er[e] = "page"
                    }
                    if (e === "edgePadding") {
                        er[e] = false
                    }
                    if (e === "autoHeight") {
                        er[e] = false
                    }
                }
                if (e === "responsive") {
                    ej(er[e])
                }
            }
        }
        if (!aA) {
            ej(c5)
        }
        if (!aA) {
            c5.axis = "horizontal";
            c5.slideBy = "page";
            c5.edgePadding = false;
            var Y = c5.animateIn
              , aa = c5.animateOut
              , X = c5.animateDelay
              , Z = c5.animateNormal
        }
        var bV = c5.axis === "horizontal" ? true : false, c7 = aW.createElement("div"), ch = aW.createElement("div"), cv, aD = c5.container, aF = aD.parentNode, aE = aD.outerHTML, dI = aD.children, dF = dI.length, ax, eq = bK(), ck = false;
        if (ds) {
            dy()
        }
        if (aA) {
            aD.className += " tns-vpfix"
        }
        var aw = c5.autoWidth, a7 = by("fixedWidth"), a3 = by("edgePadding"), bM = by("gutter"), em = bI(), aB = by("center"), cm = !aw ? Math.floor(by("items")) : 1, dD = by("slideBy"), en = c5.viewportMax || c5.fixedWidthViewportWidth, ag = by("arrowKeys"), dL = by("speed"), du = c5.rewind, cu = du ? false : c5.loop, ah = by("autoHeight"), aG = by("controls"), aK = by("controlsText"), cA = by("nav"), dV = by("touch"), cw = by("mouseDrag"), ai = by("autoplay"), ar = by("autoplayTimeout"), aq = by("autoplayText"), am = by("autoplayHoverPause"), ap = by("autoplayResetOnVisibility"), dB = j(null, by("nonce")), cq = c5.lazyload, cr = c5.lazyloadSelector, dK, dJ = [], aC = cu ? bg() : 0, dG = !aA ? dF + aC : dF + aC * 2, bT = (a7 || aw) && !cu ? true : false, dv = a7 ? bA() : null, ee = (!aA || !cu) ? true : false, dY = bV ? "left" : "top", d1 = "", d0 = "", bq = (function() {
            if (a7) {
                return function() {
                    return aB && !cu ? dF - 1 : Math.ceil(-dv / (a7 + bM))
                }
            } else {
                if (aw) {
                    return function() {
                        for (var e = 0; e < dG; e++) {
                            if (dK[e] >= -dv) {
                                return e
                            }
                        }
                    }
                } else {
                    return function() {
                        if (aB && aA && !cu) {
                            return dF - 1
                        } else {
                            return cu || aA ? Math.max(0, dG - Math.ceil(cm)) : dG - 1
                        }
                    }
                }
            }
        }
        )(), b4 = bF(by("startIndex")), b5 = b4, aS = bl(), b7 = 0, b6 = !aw ? bq() : null, dr, dh = c5.preventActionWhenRunning, dR = c5.swipeAngle, cz = dR ? "?" : true, dw = false, cW = c5.onInit, a6 = new m(), cN = " tns-slider tns-" + c5.mode, dH = aD.id || t(), aN = by("disable"), aO = false, a8 = c5.freezable, a9 = a8 && !aw ? bo() : false, bb = false, aJ = {
            click: cR,
            keydown: cS
        }, cI = {
            click: cX,
            keydown: cY
        }, bW = {
            mouseover: cy,
            mouseout: cx
        }, eo = {
            visibilitychange: c4
        }, aX = {
            keydown: cT
        }, dW = {
            touchstart: c1,
            touchmove: c0,
            touchend: cZ,
            touchcancel: cZ
        }, a1 = {
            mousedown: c1,
            mousemove: c0,
            mouseup: cZ,
            mouseleave: cZ
        }, bP = bS("controls"), bR = bS("nav"), cC = aw ? true : c5.navAsThumbnails, bO = bS("autoplay"), bU = bS("touch"), bQ = bS("mouseDrag"), dC = "tns-slide-active", dE = "tns-slide-cloned", bX = "tns-complete", bZ = {
            load: cV,
            error: cU
        }, b2, cs, dj = c5.preventScrollOnTouch === "force" ? true : false;
        if (bP) {
            var aH = c5.controlsContainer, aI = c5.controlsContainer ? c5.controlsContainer.outerHTML : "", df = c5.prevButton, cO = c5.nextButton, dg = c5.prevButton ? c5.prevButton.outerHTML : "", cP = c5.nextButton ? c5.nextButton.outerHTML : "", dk, cQ
        }
        if (bR) {
            var cE = c5.navContainer, cF = c5.navContainer ? c5.navContainer.outerHTML : "", cJ, c8 = aw ? dF : bz(), c9 = 0, cD = -1, cG = bk(), cH = cG, cB = "tns-nav-active", cK = "Carousel Page ", cL = " (Current Slide)"
        }
        if (bO) {
            var al = c5.autoplayDirection === "forward" ? 1 : -1, aj = c5.autoplayButton, ak = c5.autoplayButton ? c5.autoplayButton.outerHTML : "", ao = ["<span class='tns-visually-hidden'>", " animation</span>"], at, ac, an, au, av
        }
        if (bU || bQ) {
            var ca = {}, cp = {}, d5, aT, aU, da = false, dl, bm = bV ? function(e, er) {
                return e.x - er.x
            }
            : function(e, er) {
                return e.y - er.y
            }
        }
        if (!aw) {
            dp(aN || a9)
        }
        if (dX) {
            dY = dX;
            d1 = "translate";
            if (bN) {
                d1 += bV ? "3d(" : "3d(0px, ";
                d0 = bV ? ", 0px, 0px)" : ", 0px)"
            } else {
                d1 += bV ? "X(" : "Y(";
                d0 = ")"
            }
        }
        if (aA) {
            aD.className = aD.className.replace("tns-vpfix", "")
        }
        cf();
        cb();
        cc();
        function dp(e) {
            if (e) {
                aG = cA = dV = cw = ag = ai = am = ap = false
            }
        }
        function bl() {
            var e = aA ? b4 - aC : b4;
            while (e < 0) {
                e += dF
            }
            return e % dF + 1
        }
        function bF(e) {
            e = e ? Math.max(0, Math.min(cu ? dF - 1 : dF - cm, e)) : 0;
            return aA ? e + aC : e
        }
        function bc(e) {
            if (e == null) {
                e = b4
            }
            if (aA) {
                e -= aC
            }
            while (e < 0) {
                e += dF
            }
            return Math.floor(e % dF)
        }
        function bk() {
            var e = bc(), er;
            er = cC ? e : a7 || aw ? Math.ceil((e + 1) * c8 / dF - 1) : Math.floor(e / cm);
            if (!cu && aA && b4 === b6) {
                er = c8 - 1
            }
            return er
        }
        function bt() {
            if (aw || (a7 && !en)) {
                return dF - 1
            } else {
                var es = a7 ? "fixedWidth" : "items"
                  , e = [];
                if (a7 || c5[es] < dF) {
                    e.push(c5[es])
                }
                if (ds) {
                    for (var er in ds) {
                        var et = ds[er][es];
                        if (et && (a7 || et < dF)) {
                            e.push(et)
                        }
                    }
                }
                if (!e.length) {
                    e.push(0)
                }
                return Math.ceil(a7 ? en / Math.min.apply(null, e) : Math.max.apply(null, e))
            }
        }
        function bg() {
            var e = bt()
              , er = aA ? Math.ceil((e * 5 - dF) / 2) : (e * 4 - dF);
            er = Math.max(e, er);
            return bS("edgePadding") ? er + 1 : er
        }
        function bK() {
            return ep.innerWidth || aW.documentElement.clientWidth || aW.body.clientWidth
        }
        function bs(e) {
            return e === "top" ? "afterbegin" : "beforeend"
        }
        function bf(er) {
            if (er == null) {
                return
            }
            var e = aW.createElement("div"), es, et;
            er.appendChild(e);
            es = e.getBoundingClientRect();
            et = es.right - es.left;
            e.remove();
            return et || bf(er.parentNode)
        }
        function bI() {
            var e = a3 ? a3 * 2 - bM : 0;
            return bf(aF) - e
        }
        function bS(er) {
            if (c5[er]) {
                return true
            } else {
                if (ds) {
                    for (var e in ds) {
                        if (ds[e][er]) {
                            return true
                        }
                    }
                }
                return false
            }
        }
        function by(er, et) {
            if (et == null) {
                et = eq
            }
            if (er === "items" && a7) {
                return Math.floor((em + bM) / (a7 + bM)) || 1
            } else {
                var es = c5[er];
                if (ds) {
                    for (var e in ds) {
                        if (et >= parseInt(e)) {
                            if (er in ds[e]) {
                                es = ds[e][er]
                            }
                        }
                    }
                }
                if (er === "slideBy" && es === "page") {
                    es = by("items")
                }
                if (!aA && (er === "slideBy" || er === "items")) {
                    es = Math.floor(es)
                }
                return es
            }
        }
        function bC(e) {
            return az ? az + "(" + e * 100 + "% / " + dG + ")" : e * 100 / dG + "%"
        }
        function br(es, ev, et, ex, e) {
            var ey = "";
            if (es !== undefined) {
                var eu = es;
                if (ev) {
                    eu -= ev
                }
                ey = bV ? "margin: 0 " + eu + "px 0 " + es + "px;" : "margin: " + es + "px 0 " + eu + "px 0;"
            } else {
                if (ev && !et) {
                    var ew = "-" + ev + "px"
                      , er = bV ? ew + " 0 0" : "0 " + ew + " 0";
                    ey = "margin: 0 " + er + ";"
                }
            }
            if (!aA && e && d3 && ex) {
                ey += bH(ex)
            }
            return ey
        }
        function bi(e, er, es) {
            if (e) {
                return (e + er) * dG + "px"
            } else {
                return az ? az + "(" + dG * 100 + "% / " + es + ")" : dG * 100 / es + "%"
            }
        }
        function bE(er, es, et) {
            var eu;
            if (er) {
                eu = (er + es) + "px"
            } else {
                if (!aA) {
                    et = Math.floor(et)
                }
                var e = aA ? dG : et;
                eu = az ? az + "(100% / " + e + ")" : 100 / e + "%"
            }
            eu = "width:" + eu;
            return cM !== "inner" ? eu + ";" : eu + " !important;"
        }
        function bB(er) {
            var et = "";
            if (er !== false) {
                var es = bV ? "padding-" : "margin-"
                  , e = bV ? "right" : "bottom";
                et = es + e + ": " + er + "px;"
            }
            return et
        }
        function bj(e, er) {
            var es = e.substring(0, e.length - er).toLowerCase();
            if (es) {
                es = "-" + es + "-"
            }
            return es
        }
        function bH(e) {
            return bj(d3, 18) + "transition-duration:" + e / 1000 + "s;"
        }
        function bd(e) {
            return bj(ae, 17) + "animation-duration:" + e / 1000 + "s;"
        }
        function cf() {
            var er = "tns-outer"
              , e = "tns-inner"
              , ew = bS("gutter");
            c7.className = er;
            ch.className = e;
            c7.id = dH + "-ow";
            ch.id = dH + "-iw";
            if (aD.id === "") {
                aD.id = dH
            }
            cN += dd || aw ? " tns-subpixel" : " tns-no-subpixel";
            cN += az ? " tns-calc" : " tns-no-calc";
            if (aw) {
                cN += " tns-autowidth"
            }
            cN += " tns-" + c5.axis;
            aD.className += cN;
            if (aA) {
                cv = aW.createElement("div");
                cv.id = dH + "-mw";
                cv.className = "tns-ovh";
                c7.appendChild(cv);
                cv.appendChild(ch)
            } else {
                c7.appendChild(ch)
            }
            if (ah) {
                var ez = cv ? cv : ch;
                ez.className += " tns-ah"
            }
            aF.insertBefore(c7, aD);
            ch.appendChild(aD);
            o(dI, function(eB, eA) {
                a(eB, "tns-item");
                if (!eB.id) {
                    eB.id = dH + "-item" + eA
                }
                if (!aA && Z) {
                    a(eB, Z)
                }
                M(eB, {
                    "aria-hidden": "true",
                    tabindex: "-1"
                })
            });
            if (aC) {
                var ev = aW.createDocumentFragment()
                  , eu = aW.createDocumentFragment();
                for (var ex = aC; ex--; ) {
                    var ey = ex % dF
                      , es = dI[ey].cloneNode(true);
                    a(es, dE);
                    H(es, "id");
                    eu.insertBefore(es, eu.firstChild);
                    if (aA) {
                        var et = dI[dF - 1 - ey].cloneNode(true);
                        a(et, dE);
                        H(et, "id");
                        ev.appendChild(et)
                    }
                }
                aD.insertBefore(ev, aD.firstChild);
                aD.appendChild(eu);
                dI = aD.children
            }
        }
        function cc() {
            if (bS("autoHeight") || aw || !bV) {
                var e = aD.querySelectorAll("img");
                o(e, function(er) {
                    var es = er.src;
                    if (!cq) {
                        if (es && es.indexOf("data:image") < 0) {
                            er.src = "";
                            c(er, bZ);
                            a(er, "loading");
                            er.src = es
                        } else {
                            b1(er)
                        }
                    }
                });
                G(function() {
                    b3(d(e), function() {
                        b2 = true
                    })
                });
                if (bS("autoHeight")) {
                    e = bp(b4, Math.min(b4 + cm - 1, dG - 1))
                }
                cq ? ce() : G(function() {
                    b3(d(e), ce)
                })
            } else {
                if (aA) {
                    aZ()
                }
                cg();
                b9()
            }
        }
        function ce() {
            if (aw && dF > 1) {
                var e = cu ? b4 : dF - 1;
                (function er() {
                    var es = dI[e].getBoundingClientRect().left;
                    var et = dI[e - 1].getBoundingClientRect().right;
                    (Math.abs(es - et) <= 1) ? cd() : setTimeout(function() {
                        er()
                    }, 16)
                }
                )()
            } else {
                cd()
            }
        }
        function cd() {
            if (!bV || aw) {
                dA();
                if (aw) {
                    dv = bA();
                    if (a8) {
                        a9 = bo()
                    }
                    b6 = bq();
                    dp(aN || a9)
                } else {
                    ea()
                }
            }
            if (aA) {
                aZ()
            }
            cg();
            b9()
        }
        function cb() {
            if (!aA) {
                for (var ew = b4, eA = b4 + Math.min(dF, cm); ew < eA; ew++) {
                    var ey = dI[ew];
                    ey.style.left = (ew - b4) * 100 / cm + "%";
                    a(ey, Y);
                    I(ey, Z)
                }
            }
            if (bV) {
                if (dd || aw) {
                    b(dB, "#" + dH + " > .tns-item", "font-size:" + ep.getComputedStyle(dI[0]).fontSize + ";", r(dB));
                    b(dB, "#" + dH, "font-size:0;", r(dB))
                } else {
                    if (aA) {
                        o(dI, function(eH, eG) {
                            eH.style.marginLeft = bC(eG)
                        })
                    }
                }
            }
            if (aL) {
                if (d3) {
                    var eF = cv && c5.autoHeight ? bH(c5.speed) : "";
                    b(dB, "#" + dH + "-mw", eF, r(dB))
                }
                eF = br(c5.edgePadding, c5.gutter, c5.fixedWidth, c5.speed, c5.autoHeight);
                b(dB, "#" + dH + "-iw", eF, r(dB));
                if (aA) {
                    eF = bV && !aw ? "width:" + bi(c5.fixedWidth, c5.gutter, c5.items) + ";" : "";
                    if (d3) {
                        eF += bH(dL)
                    }
                    b(dB, "#" + dH, eF, r(dB))
                }
                eF = bV && !aw ? bE(c5.fixedWidth, c5.gutter, c5.items) : "";
                if (c5.gutter) {
                    eF += bB(c5.gutter)
                }
                if (!aA) {
                    if (d3) {
                        eF += bH(dL)
                    }
                    if (ae) {
                        eF += bd(dL)
                    }
                }
                if (eF) {
                    b(dB, "#" + dH + " > .tns-item", eF, r(dB))
                }
            } else {
                d8();
                ch.style.cssText = br(a3, bM, a7, ah);
                if (aA && bV && !aw) {
                    aD.style.width = bi(a7, bM, cm)
                }
                var eF = bV && !aw ? bE(a7, bM, cm) : "";
                if (bM) {
                    eF += bB(bM)
                }
                if (eF) {
                    b(dB, "#" + dH + " > .tns-item", eF, r(dB))
                }
            }
            if (ds && aL) {
                for (var er in ds) {
                    er = parseInt(er);
                    var eC = ds[er]
                      , eF = ""
                      , eB = ""
                      , ex = ""
                      , es = ""
                      , eD = ""
                      , ez = !aw ? by("items", er) : null
                      , eu = by("fixedWidth", er)
                      , eE = by("speed", er)
                      , et = by("edgePadding", er)
                      , e = by("autoHeight", er)
                      , ev = by("gutter", er);
                    if (d3 && cv && by("autoHeight", er) && "speed"in eC) {
                        eB = "#" + dH + "-mw{" + bH(eE) + "}"
                    }
                    if ("edgePadding"in eC || "gutter"in eC) {
                        ex = "#" + dH + "-iw{" + br(et, ev, eu, eE, e) + "}"
                    }
                    if (aA && bV && !aw && ("fixedWidth"in eC || "items"in eC || (a7 && "gutter"in eC))) {
                        es = "width:" + bi(eu, ev, ez) + ";"
                    }
                    if (d3 && "speed"in eC) {
                        es += bH(eE)
                    }
                    if (es) {
                        es = "#" + dH + "{" + es + "}"
                    }
                    if ("fixedWidth"in eC || (a7 && "gutter"in eC) || !aA && "items"in eC) {
                        eD += bE(eu, ev, ez)
                    }
                    if ("gutter"in eC) {
                        eD += bB(ev)
                    }
                    if (!aA && "speed"in eC) {
                        if (d3) {
                            eD += bH(eE)
                        }
                        if (ae) {
                            eD += bd(eE)
                        }
                    }
                    if (eD) {
                        eD = "#" + dH + " > .tns-item{" + eD + "}"
                    }
                    eF = eB + ex + es + eD;
                    if (eF) {
                        dB.insertRule("@media (min-width: " + er / 16 + "em) {" + eF + "}", dB.cssRules.length)
                    }
                }
            }
        }
        function cg() {
            ek();
            c7.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + bu() + "</span>  of " + dF + "</div>");
            cs = c7.querySelector(".tns-liveregion .current");
            if (bO) {
                var ew = ai ? "stop" : "start";
                if (aj) {
                    M(aj, {
                        "data-action": ew
                    })
                } else {
                    if (c5.autoplayButtonOutput) {
                        c7.insertAdjacentHTML(bs(c5.autoplayPosition), '<button type="button" data-action="' + ew + '">' + ao[0] + ew + ao[1] + aq[0] + "</button>");
                        aj = c7.querySelector("[data-action]")
                    }
                }
                if (aj) {
                    c(aj, {
                        click: dU
                    })
                }
                if (ai) {
                    dM();
                    if (am) {
                        c(aD, bW)
                    }
                    if (ap) {
                        c(aD, eo)
                    }
                }
            }
            if (bR) {
                var es = !aA ? 0 : aC;
                if (cE) {
                    M(cE, {
                        "aria-label": "Carousel Pagination"
                    });
                    cJ = cE.children;
                    o(cJ, function(ey, ex) {
                        M(ey, {
                            "data-nav": ex,
                            tabindex: "-1",
                            "aria-label": cK + (ex + 1),
                            "aria-controls": dH,
                        })
                    })
                } else {
                    var et = ""
                      , e = cC ? "" : 'style="display:none"';
                    for (var er = 0; er < dF; er++) {
                        et += '<button type="button" data-nav="' + er + '" tabindex="-1" aria-controls="' + dH + '" ' + e + ' aria-label="' + cK + (er + 1) + '"></button>'
                    }
                    et = '<div class="tns-nav" aria-label="Carousel Pagination">' + et + "</div>";
                    c7.insertAdjacentHTML(bs(c5.navPosition), et);
                    cE = c7.querySelector(".tns-nav");
                    cJ = cE.children
                }
                ei();
                if (d3) {
                    var eu = d3.substring(0, d3.length - 18).toLowerCase()
                      , ev = "transition: all " + dL / 1000 + "s";
                    if (eu) {
                        ev = "-" + eu + "-" + ev
                    }
                    b(dB, "[aria-controls^=" + dH + "-item]", ev, r(dB))
                }
                M(cJ[cG], {
                    "aria-label": cK + (cG + 1) + cL
                });
                H(cJ[cG], "tabindex");
                a(cJ[cG], cB);
                c(cE, cI)
            }
            if (bP) {
                if (!aH && (!df || !cO)) {
                    c7.insertAdjacentHTML(bs(c5.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + dH + '">' + aK[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + dH + '">' + aK[1] + "</button></div>");
                    aH = c7.querySelector(".tns-controls")
                }
                if (!df || !cO) {
                    df = aH.children[0];
                    cO = aH.children[1]
                }
                if (c5.controlsContainer) {
                    M(aH, {
                        "aria-label": "Carousel Navigation",
                        tabindex: "0"
                    })
                }
                if (c5.controlsContainer || (c5.prevButton && c5.nextButton)) {
                    M([df, cO], {
                        "aria-controls": dH,
                        tabindex: "-1",
                    })
                }
                if (c5.controlsContainer || (c5.prevButton && c5.nextButton)) {
                    M(df, {
                        "data-controls": "prev"
                    });
                    M(cO, {
                        "data-controls": "next"
                    })
                }
                dk = cj(df);
                cQ = cj(cO);
                eb();
                if (aH) {
                    c(aH, aJ)
                } else {
                    c(df, aJ);
                    c(cO, aJ)
                }
            }
            aQ()
        }
        function b9() {
            if (aA && d4) {
                var e = {};
                e[d4] = c3;
                c(aD, e)
            }
            if (dV) {
                c(aD, dW, c5.preventScrollOnTouch)
            }
            if (cw) {
                c(aD, a1)
            }
            if (ag) {
                c(aW, aX)
            }
            if (cM === "inner") {
                a6.on("outerResized", function() {
                    dq();
                    a6.emit("innerLoaded", b8())
                })
            } else {
                if (ds || a7 || aw || ah || !bV) {
                    c(ep, {
                        resize: c2
                    })
                }
            }
            if (ah) {
                if (cM === "outer") {
                    a6.on("innerLoaded", aV)
                } else {
                    if (!aN) {
                        aV()
                    }
                }
            }
            a0();
            if (aN) {
                aP()
            } else {
                if (a9) {
                    ba()
                }
            }
            a6.on("indexChanged", W);
            if (cM === "inner") {
                a6.emit("innerLoaded", b8())
            }
            if (typeof cW === "function") {
                cW(b8())
            }
            ck = true
        }
        function aM() {
            dB.disabled = true;
            if (dB.ownerNode) {
                dB.ownerNode.remove()
            }
            K(ep, {
                resize: c2
            });
            if (ag) {
                K(aW, aX)
            }
            if (aH) {
                K(aH, aJ)
            }
            if (cE) {
                K(cE, cI)
            }
            K(aD, bW);
            K(aD, eo);
            if (aj) {
                K(aj, {
                    click: dU
                })
            }
            if (ai) {
                clearInterval(at)
            }
            if (aA && d4) {
                var er = {};
                er[d4] = c3;
                K(aD, er)
            }
            if (dV) {
                K(aD, dW)
            }
            if (cw) {
                K(aD, a1)
            }
            var es = [aE, aI, dg, cP, cF, ak];
            dS.forEach(function(ev, eu) {
                var et = ev === "container" ? c7 : c5[ev];
                if (typeof et === "object" && et) {
                    var ex = et.previousElementSibling ? et.previousElementSibling : false
                      , ew = et.parentNode;
                    et.outerHTML = es[eu];
                    c5[ev] = ex ? ex.nextElementSibling : ew.firstElementChild
                }
            });
            dS = Y = aa = X = Z = bV = c7 = ch = aD = aF = aE = dI = dF = ax = eq = aw = a7 = a3 = bM = em = cm = dD = en = ag = dL = du = cu = ah = dB = cq = dK = dJ = aC = dG = bT = dv = ee = dY = d1 = d0 = bq = b4 = b5 = b7 = b6 = dr = dR = cz = dw = cW = a6 = cN = dH = aN = aO = a8 = a9 = bb = aJ = cI = bW = eo = aX = dW = a1 = bP = bR = cC = bO = bU = bQ = dC = bX = bZ = b2 = aG = aK = aH = aI = df = cO = dk = cQ = cA = cE = cF = cJ = c8 = c9 = cD = cG = cH = cB = cK = cL = ai = ar = al = aq = am = aj = ak = ap = ao = at = ac = an = au = av = ca = cp = d5 = aT = aU = da = dl = bm = dV = cw = null;
            for (var e in this) {
                if (e !== "rebuild") {
                    this[e] = null
                }
            }
            ck = false
        }
        function c2(er) {
            G(function() {
                dq(bn(er))
            })
        }
        function dq(eD) {
            if (!ck) {
                return
            }
            if (cM === "outer") {
                a6.emit("outerResized", b8(eD))
            }
            eq = bK();
            var ex, ey = ax, eR = false;
            if (ds) {
                dy();
                ex = ey !== ax;
                if (ex) {
                    a6.emit("newBreakpointStart", b8(eD))
                }
            }
            var eK, eM, eN = cm, eC = aN, eG = a9, er = ag, eA = aG, eQ = cA, eT = dV, eP = cw, ev = ai, et = am, eu = ap, eL = b4;
            if (ex) {
                var eF = a7
                  , es = ah
                  , eB = aK
                  , ez = aB
                  , ew = aq;
                if (!aL) {
                    var eH = bM
                      , eE = a3
                }
            }
            ag = by("arrowKeys");
            aG = by("controls");
            cA = by("nav");
            dV = by("touch");
            aB = by("center");
            cw = by("mouseDrag");
            ai = by("autoplay");
            am = by("autoplayHoverPause");
            ap = by("autoplayResetOnVisibility");
            if (ex) {
                aN = by("disable");
                a7 = by("fixedWidth");
                dL = by("speed");
                ah = by("autoHeight");
                aK = by("controlsText");
                aq = by("autoplayText");
                ar = by("autoplayTimeout");
                if (!aL) {
                    a3 = by("edgePadding");
                    bM = by("gutter")
                }
            }
            dp(aN);
            em = bI();
            if ((!bV || aw) && !aN) {
                dA();
                if (!bV) {
                    ea();
                    eR = true
                }
            }
            if (a7 || aw) {
                dv = bA();
                b6 = bq()
            }
            if (ex || a7) {
                cm = by("items");
                dD = by("slideBy");
                eM = cm !== eN;
                if (eM) {
                    if (!a7 && !aw) {
                        b6 = bq()
                    }
                    ed()
                }
            }
            if (ex) {
                if (aN !== eC) {
                    if (aN) {
                        aP()
                    } else {
                        a4()
                    }
                }
            }
            if (a8 && (ex || a7 || aw)) {
                a9 = bo();
                if (a9 !== eG) {
                    if (a9) {
                        aY(bh(bF(0)));
                        ba()
                    } else {
                        d7();
                        eR = true
                    }
                }
            }
            dp(aN || a9);
            if (!ai) {
                am = ap = false
            }
            if (ag !== er) {
                ag ? c(aW, aX) : K(aW, aX)
            }
            if (aG !== eA) {
                if (aG) {
                    if (aH) {
                        P(aH)
                    } else {
                        if (df) {
                            P(df)
                        }
                        if (cO) {
                            P(cO)
                        }
                    }
                } else {
                    if (aH) {
                        y(aH)
                    } else {
                        if (df) {
                            y(df)
                        }
                        if (cO) {
                            y(cO)
                        }
                    }
                }
            }
            if (cA !== eQ) {
                if (cA) {
                    P(cE);
                    ei()
                } else {
                    y(cE)
                }
            }
            if (dV !== eT) {
                dV ? c(aD, dW, c5.preventScrollOnTouch) : K(aD, dW)
            }
            if (cw !== eP) {
                cw ? c(aD, a1) : K(aD, a1)
            }
            if (ai !== ev) {
                if (ai) {
                    if (aj) {
                        P(aj)
                    }
                    if (!ac && !au) {
                        dM()
                    }
                } else {
                    if (aj) {
                        y(aj)
                    }
                    if (ac) {
                        dN()
                    }
                }
            }
            if (am !== et) {
                am ? c(aD, bW) : K(aD, bW)
            }
            if (ap !== eu) {
                ap ? c(aW, eo) : K(aW, eo)
            }
            if (ex) {
                if (a7 !== eF || aB !== ez) {
                    eR = true
                }
                if (ah !== es) {
                    if (!ah) {
                        ch.style.height = ""
                    }
                }
                if (aG && aK !== eB) {
                    df.innerHTML = aK[0];
                    cO.innerHTML = aK[1]
                }
                if (aj && aq !== ew) {
                    var eJ = ai ? 1 : 0
                      , eI = aj.innerHTML
                      , eO = eI.length - ew[eJ].length;
                    if (eI.substring(eO) === ew[eJ]) {
                        aj.innerHTML = eI.substring(0, eO) + aq[eJ]
                    }
                }
            } else {
                if (aB && (a7 || aw)) {
                    eR = true
                }
            }
            if (eM || a7 && !aw) {
                c8 = bz();
                ei()
            }
            eK = b4 !== eL;
            if (eK) {
                a6.emit("indexChanged", b8());
                eR = true
            } else {
                if (eM) {
                    if (!eK) {
                        W()
                    }
                } else {
                    if (a7 || aw) {
                        a0();
                        ek();
                        eg()
                    }
                }
            }
            if (eM && !aA) {
                ec()
            }
            if (!aN && !a9) {
                if (ex && !aL) {
                    if (a3 !== eE || bM !== eH) {
                        ch.style.cssText = br(a3, bM, a7, dL, ah)
                    }
                    if (bV) {
                        if (aA) {
                            aD.style.width = bi(a7, bM, cm)
                        }
                        var eS = bE(a7, bM, cm) + bB(bM);
                        J(dB, r(dB) - 1);
                        b(dB, "#" + dH + " > .tns-item", eS, r(dB))
                    }
                }
                if (ah) {
                    aV()
                }
                if (eR) {
                    aZ();
                    b5 = b4
                }
            }
            if (ex) {
                a6.emit("newBreakpointEnd", b8(eD))
            }
        }
        function bo() {
            if (!a7 && !aw) {
                var e = aB ? cm - (cm - 1) / 2 : cm;
                return dF <= e
            }
            var es = a7 ? (a7 + bM) * dF : dK[dF]
              , er = a3 ? em + a3 * 2 : em + bM;
            if (aB) {
                er -= a7 ? (em - a7) / 2 : (em - (dK[b4 + 1] - dK[b4] - bM)) / 2
            }
            return es <= er
        }
        function dy() {
            ax = 0;
            for (var e in ds) {
                e = parseInt(e);
                if (eq >= e) {
                    ax = e
                }
            }
        }
        var ed = (function() {
            return cu ? aA ? function() {
                var e = b7
                  , er = b6;
                e += dD;
                er -= dD;
                if (a3) {
                    e += 1;
                    er -= 1
                } else {
                    if (a7) {
                        if ((em + bM) % (a7 + bM)) {
                            er -= 1
                        }
                    }
                }
                if (aC) {
                    if (b4 > er) {
                        b4 -= dF
                    } else {
                        if (b4 < e) {
                            b4 += dF
                        }
                    }
                }
            }
            : function() {
                if (b4 > b6) {
                    while (b4 >= b7 + dF) {
                        b4 -= dF
                    }
                } else {
                    if (b4 < b7) {
                        while (b4 <= b6 - dF) {
                            b4 += dF
                        }
                    }
                }
            }
            : function() {
                b4 = Math.max(b7, Math.min(b6, b4))
            }
        }
        )();
        function aQ() {
            if (!ai && aj) {
                y(aj)
            }
            if (!cA && cE) {
                y(cE)
            }
            if (!aG) {
                if (aH) {
                    y(aH)
                } else {
                    if (df) {
                        y(df)
                    }
                    if (cO) {
                        y(cO)
                    }
                }
            }
        }
        function a5() {
            if (ai && aj) {
                P(aj)
            }
            if (cA && cE) {
                P(cE)
            }
            if (aG) {
                if (aH) {
                    P(aH)
                } else {
                    if (df) {
                        P(df)
                    }
                    if (cO) {
                        P(cO)
                    }
                }
            }
        }
        function ba() {
            if (bb) {
                return
            }
            if (a3) {
                ch.style.margin = "0px"
            }
            if (aC) {
                var er = "tns-transparent";
                for (var e = aC; e--; ) {
                    if (aA) {
                        a(dI[e], er)
                    }
                    a(dI[dG - e - 1], er)
                }
            }
            aQ();
            bb = true
        }
        function d7() {
            if (!bb) {
                return
            }
            if (a3 && aL) {
                ch.style.margin = ""
            }
            if (aC) {
                var er = "tns-transparent";
                for (var e = aC; e--; ) {
                    if (aA) {
                        I(dI[e], er)
                    }
                    I(dI[dG - e - 1], er)
                }
            }
            a5();
            bb = false
        }
        function aP() {
            if (aO) {
                return
            }
            dB.disabled = true;
            aD.className = aD.className.replace(cN.substring(1), "");
            H(aD, ["style"]);
            if (cu) {
                for (var es = aC; es--; ) {
                    if (aA) {
                        y(dI[es])
                    }
                    y(dI[dG - es - 1])
                }
            }
            if (!bV || !aA) {
                H(ch, ["style"])
            }
            if (!aA) {
                for (var e = b4, et = b4 + dF; e < et; e++) {
                    var er = dI[e];
                    H(er, ["style"]);
                    I(er, Y);
                    I(er, Z)
                }
            }
            aQ();
            aO = true
        }
        function a4() {
            if (!aO) {
                return
            }
            dB.disabled = false;
            aD.className += cN;
            aZ();
            if (cu) {
                for (var et = aC; et--; ) {
                    if (aA) {
                        P(dI[et])
                    }
                    P(dI[dG - et - 1])
                }
            }
            if (!aA) {
                for (var er = b4, eu = b4 + dF; er < eu; er++) {
                    var es = dI[er]
                      , e = er < b4 + cm ? Y : Z;
                    es.style.left = (er - b4) * 100 / cm + "%";
                    a(es, e)
                }
            }
            a5();
            aO = false
        }
        function eg() {
            var e = bu();
            if (cs.innerHTML !== e) {
                cs.innerHTML = e
            }
        }
        function bu() {
            var e = bJ()
              , es = e[0] + 1
              , er = e[1] + 1;
            return es === er ? es + "" : es + " to " + er
        }
        function bJ(ex) {
            if (ex == null) {
                ex = bh()
            }
            var ew = b4, et, ev, eu;
            if (aB || a3) {
                if (aw || a7) {
                    ev = -(parseFloat(ex) + a3);
                    eu = ev + em + a3 * 2
                }
            } else {
                if (aw) {
                    ev = dK[b4];
                    eu = ev + em
                }
            }
            if (aw) {
                dK.forEach(function(ez, ey) {
                    if (ey < dG) {
                        if ((aB || a3) && ez <= ev + 0.5) {
                            ew = ey
                        }
                        if (eu - ez >= 0.5) {
                            et = ey
                        }
                    }
                })
            } else {
                if (a7) {
                    var es = a7 + bM;
                    if (aB || a3) {
                        ew = Math.floor(ev / es);
                        et = Math.ceil(eu / es - 1)
                    } else {
                        et = ew + Math.ceil(em / es) - 1
                    }
                } else {
                    if (aB || a3) {
                        var e = cm - 1;
                        if (aB) {
                            ew -= e / 2;
                            et = b4 + e / 2
                        } else {
                            et = b4 + e
                        }
                        if (a3) {
                            var er = a3 * cm / em;
                            ew -= er;
                            et += er
                        }
                        ew = Math.floor(ew);
                        et = Math.ceil(et)
                    } else {
                        et = ew + cm - 1
                    }
                }
                ew = Math.max(ew, 0);
                et = Math.min(et, dG - 1)
            }
            return [ew, et]
        }
        function a0() {
            if (cq && !aN) {
                var e = bJ();
                e.push(cr);
                bp.apply(null, e).forEach(function(es) {
                    if (!x(es, bX)) {
                        var er = {};
                        er[d4] = function(eu) {
                            eu.stopPropagation()
                        }
                        ;
                        c(es, er);
                        c(es, bZ);
                        es.src = p(es, "data-src");
                        var et = p(es, "data-srcset");
                        if (et) {
                            es.srcset = et
                        }
                        a(es, "loading")
                    }
                })
            }
        }
        function cV(er) {
            b1(bG(er))
        }
        function cU(er) {
            b0(bG(er))
        }
        function b1(e) {
            a(e, "loaded");
            bY(e)
        }
        function b0(e) {
            a(e, "failed");
            bY(e)
        }
        function bY(e) {
            a(e, bX);
            I(e, "loading");
            K(e, bZ)
        }
        function bp(et, e, es) {
            var er = [];
            if (!es) {
                es = "img"
            }
            while (et <= e) {
                o(dI[et].querySelectorAll(es), function(eu) {
                    er.push(eu)
                });
                et++
            }
            return er
        }
        function aV() {
            var e = bp.apply(null, bJ());
            G(function() {
                b3(e, ef)
            })
        }
        function b3(er, e) {
            if (b2) {
                return e()
            }
            er.forEach(function(es, et) {
                if (!cq && es.complete) {
                    bY(es)
                }
                if (x(es, bX)) {
                    er.splice(et, 1)
                }
            });
            if (!er.length) {
                return e()
            }
            G(function() {
                b3(er, e)
            })
        }
        function W() {
            a0();
            ek();
            eg();
            eb();
            eh()
        }
        function d8() {
            if (aA && ah) {
                cv.style[d3] = dL / 1000 + "s"
            }
        }
        function bw(eu, et) {
            var e = [];
            for (var er = eu, es = Math.min(eu + et, dG); er < es; er++) {
                e.push(dI[er].offsetHeight)
            }
            return Math.max.apply(null, e)
        }
        function ef() {
            var e = ah ? bw(b4, cm) : bw(aC, dF)
              , er = cv ? cv : ch;
            if (er.style.height !== e) {
                er.style.height = e + "px"
            }
        }
        function dA() {
            dK = [0];
            var e = bV ? "left" : "top"
              , er = bV ? "right" : "bottom"
              , es = dI[0].getBoundingClientRect()[e];
            o(dI, function(eu, et) {
                if (et) {
                    dK.push(eu.getBoundingClientRect()[e] - es)
                }
                if (et === dG - 1) {
                    dK.push(eu.getBoundingClientRect()[er] - es)
                }
            })
        }
        function ek() {
            var er = bJ()
              , es = er[0]
              , e = er[1];
            o(dI, function(eu, et) {
                if (et >= es && et <= e) {
                    if (w(eu, "aria-hidden")) {
                        H(eu, ["aria-hidden", "tabindex"]);
                        a(eu, dC)
                    }
                } else {
                    if (!w(eu, "aria-hidden")) {
                        M(eu, {
                            "aria-hidden": "true",
                            tabindex: "-1"
                        });
                        I(eu, dC)
                    }
                }
            })
        }
        function ec() {
            var es = b4 + Math.min(dF, cm);
            for (var e = dG; e--; ) {
                var er = dI[e];
                if (e >= b4 && e < es) {
                    a(er, "tns-moving");
                    er.style.left = (e - b4) * 100 / cm + "%";
                    a(er, Y);
                    I(er, Z)
                } else {
                    if (er.style.left) {
                        er.style.left = "";
                        a(er, Z);
                        I(er, Y)
                    }
                }
                I(er, aa)
            }
            setTimeout(function() {
                o(dI, function(et) {
                    I(et, "tns-moving")
                })
            }, 300)
        }
        function eh() {
            if (cA) {
                cG = cD >= 0 ? cD : bk();
                cD = -1;
                if (cG !== cH) {
                    var er = cJ[cH]
                      , e = cJ[cG];
                    M(er, {
                        tabindex: "-1",
                        "aria-label": cK + (cH + 1)
                    });
                    I(er, cB);
                    M(e, {
                        "aria-label": cK + (cG + 1) + cL
                    });
                    H(e, "tabindex");
                    a(e, cB);
                    cH = cG
                }
            }
        }
        function bv(e) {
            return e.nodeName.toLowerCase()
        }
        function cj(e) {
            return bv(e) === "button"
        }
        function ci(e) {
            return e.getAttribute("aria-disabled") === "true"
        }
        function aR(er, e, es) {
            if (er) {
                e.disabled = es
            } else {
                e.setAttribute("aria-disabled", es.toString())
            }
        }
        function eb() {
            if (!aG || du || cu) {
                return
            }
            var et = (dk) ? df.disabled : ci(df)
              , es = (cQ) ? cO.disabled : ci(cO)
              , er = (b4 <= b7) ? true : false
              , e = (!du && b4 >= b6) ? true : false;
            if (er && !et) {
                aR(dk, df, true)
            }
            if (!er && et) {
                aR(dk, df, false)
            }
            if (e && !es) {
                aR(cQ, cO, true)
            }
            if (!e && es) {
                aR(cQ, cO, false)
            }
        }
        function dn(e, er) {
            if (d3) {
                e.style[d3] = er
            }
        }
        function bD() {
            return a7 ? (a7 + bM) * dG : dK[dG]
        }
        function be(er) {
            if (er == null) {
                er = b4
            }
            var e = a3 ? bM : 0;
            return aw ? ((em - e) - (dK[er + 1] - dK[er] - bM)) / 2 : a7 ? (em - a7) / 2 : (cm - 1) / 2
        }
        function bA() {
            var e = a3 ? bM : 0
              , er = (em + e) - bD();
            if (aB && !cu) {
                er = a7 ? -(a7 + bM) * (dG - 1) - be() : be(dG - 1) - dK[dG - 1]
            }
            if (er > 0) {
                er = 0
            }
            return er
        }
        function bh(er) {
            if (er == null) {
                er = b4
            }
            var es;
            if (bV && !aw) {
                if (a7) {
                    es = -(a7 + bM) * er;
                    if (aB) {
                        es += be()
                    }
                } else {
                    var e = dX ? dG : cm;
                    if (aB) {
                        er -= be()
                    }
                    es = -er * 100 / e
                }
            } else {
                es = -dK[er];
                if (aB && aw) {
                    es += be()
                }
            }
            if (bT) {
                es = Math.max(es, dv)
            }
            es += (bV && !aw && !a7) ? "%" : "px";
            return es
        }
        function aZ(e) {
            dn(aD, "0s");
            aY(e)
        }
        function aY(e) {
            if (e == null) {
                e = bh()
            }
            aD.style[dY] = d1 + e + d0
        }
        function ab(ew, er, e, et) {
            var ev = ew + cm;
            if (!cu) {
                ev = Math.min(ev, dG)
            }
            for (var es = ew; es < ev; es++) {
                var eu = dI[es];
                if (!et) {
                    eu.style.left = (es - b4) * 100 / cm + "%"
                }
                if (X && d2) {
                    eu.style[d2] = eu.style[ad] = X * (es - ew) / 1000 + "s"
                }
                I(eu, er);
                a(eu, e);
                if (et) {
                    dJ.push(eu)
                }
            }
        }
        var dZ = (function() {
            return aA ? function() {
                dn(aD, "");
                if (d3 || !dL) {
                    aY();
                    if (!dL || !A(aD)) {
                        c3()
                    }
                } else {
                    B(aD, dY, d1, d0, bh(), dL, c3)
                }
                if (!bV) {
                    ea()
                }
            }
            : function() {
                dJ = [];
                var e = {};
                e[d4] = e[af] = c3;
                K(dI[b5], e);
                c(dI[b4], e);
                ab(b5, Y, aa, true);
                ab(b4, Z, Y);
                if (!d4 || !af || !dL || !A(aD)) {
                    c3()
                }
            }
        }
        )();
        function dm(er, es) {
            if (ee) {
                ed()
            }
            if (b4 !== b5 || es) {
                a6.emit("indexChanged", b8());
                a6.emit("transitionStart", b8());
                if (ah) {
                    aV()
                }
                if (ac && er && ["click", "keydown"].indexOf(er.type) >= 0) {
                    dN()
                }
                dw = true;
                dZ()
            }
        }
        function dP(e) {
            return e.toLowerCase().replace(/-/g, "")
        }
        function c3(e) {
            if (aA || dw) {
                a6.emit("transitionEnd", b8(e));
                if (!aA && dJ.length > 0) {
                    for (var er = 0; er < dJ.length; er++) {
                        var et = dJ[er];
                        et.style.left = "";
                        if (ad && d2) {
                            et.style[ad] = "";
                            et.style[d2] = ""
                        }
                        I(et, aa);
                        a(et, Z)
                    }
                }
                if (!e || !aA && e.target.parentNode === aD || e.target === aD && dP(e.propertyName) === dP(dY)) {
                    if (!ee) {
                        var es = b4;
                        ed();
                        if (b4 !== es) {
                            a6.emit("indexChanged", b8());
                            aZ()
                        }
                    }
                    if (cM === "inner") {
                        a6.emit("innerLoaded", b8())
                    }
                    dw = false;
                    b5 = b4
                }
            }
        }
        function bL(ev, es) {
            if (a9) {
                return
            }
            if (ev === "prev") {
                cR(es, -1)
            } else {
                if (ev === "next") {
                    cR(es, 1)
                } else {
                    if (dw) {
                        if (dh) {
                            return
                        } else {
                            c3()
                        }
                    }
                    var er = bc()
                      , eu = 0;
                    if (ev === "first") {
                        eu = -er
                    } else {
                        if (ev === "last") {
                            eu = aA ? dF - cm - er : dF - 1 - er
                        } else {
                            if (typeof ev !== "number") {
                                ev = parseInt(ev)
                            }
                            if (!isNaN(ev)) {
                                if (!es) {
                                    ev = Math.max(0, Math.min(dF - 1, ev))
                                }
                                eu = ev - er
                            }
                        }
                    }
                    if (!aA && eu && Math.abs(eu) < cm) {
                        var et = eu > 0 ? 1 : -1;
                        eu += (b4 + eu - dF) >= b7 ? dF * et : dF * 2 * et * -1
                    }
                    b4 += eu;
                    if (aA && cu) {
                        if (b4 < b7) {
                            b4 += dF
                        }
                        if (b4 > b6) {
                            b4 -= dF
                        }
                    }
                    if (bc(b4) !== bc(b5)) {
                        dm(es)
                    }
                }
            }
        }
        function cR(es, er) {
            if (dw) {
                if (dh) {
                    return
                } else {
                    c3()
                }
            }
            var et;
            if (!er) {
                es = bn(es);
                var eu = bG(es);
                while (eu !== aH && [df, cO].indexOf(eu) < 0) {
                    eu = eu.parentNode
                }
                var ev = [df, cO].indexOf(eu);
                if (ev >= 0) {
                    et = true;
                    er = ev === 0 ? -1 : 1
                }
            }
            if (du) {
                if (b4 === b7 && er === -1) {
                    bL("last", es);
                    return
                } else {
                    if (b4 === b6 && er === 1) {
                        bL("first", es);
                        return
                    }
                }
            }
            if (er) {
                b4 += dD * er;
                if (aw) {
                    b4 = Math.floor(b4)
                }
                dm((et || (es && es.type === "keydown")) ? es : null)
            }
        }
        function cX(er) {
            if (dw) {
                if (dh) {
                    return
                } else {
                    c3()
                }
            }
            er = bn(er);
            var et = bG(er), es;
            while (et !== cE && !w(et, "data-nav")) {
                et = et.parentNode
            }
            if (w(et, "data-nav")) {
                var es = cD = Number(p(et, "data-nav"))
                  , ev = a7 || aw ? es * dF / c8 : es * cm
                  , eu = cC ? es : Math.min(Math.ceil(ev), dF - 1);
                bL(eu, er);
                if (cG === es) {
                    if (ac) {
                        dN()
                    }
                    cD = -1
                }
            }
        }
        function dx() {
            at = setInterval(function() {
                cR(null, al)
            }, ar);
            ac = true
        }
        function dO() {
            clearInterval(at);
            ac = false
        }
        function d9(e, er) {
            M(aj, {
                "data-action": e
            });
            aj.innerHTML = ao[0] + e + ao[1] + er
        }
        function dM() {
            dx();
            if (aj) {
                d9("stop", aq[1])
            }
        }
        function dN() {
            dO();
            if (aj) {
                d9("start", aq[0])
            }
        }
        function de() {
            if (ai && !ac) {
                dM();
                au = false
            }
        }
        function dc() {
            if (ac) {
                dN();
                au = true
            }
        }
        function dU() {
            if (ac) {
                dN();
                au = true
            } else {
                dM();
                au = false
            }
        }
        function c4() {
            if (aW.hidden) {
                if (ac) {
                    dO();
                    av = true
                }
            } else {
                if (av) {
                    dx();
                    av = false
                }
            }
        }
        function cy() {
            if (ac) {
                dO();
                an = true
            }
        }
        function cx() {
            if (an) {
                dx();
                an = false
            }
        }
        function cT(er) {
            er = bn(er);
            var es = [co.LEFT, co.RIGHT].indexOf(er.keyCode);
            if (es >= 0) {
                cR(er, es === 0 ? -1 : 1)
            }
        }
        function cS(er) {
            er = bn(er);
            var es = [co.LEFT, co.RIGHT].indexOf(er.keyCode);
            if (es >= 0) {
                if (es === 0) {
                    if (!df.disabled) {
                        cR(er, -1)
                    }
                } else {
                    if (!cO.disabled) {
                        cR(er, 1)
                    }
                }
            }
        }
        function dz(e) {
            e.focus()
        }
        function cY(es) {
            es = bn(es);
            var er = aW.activeElement;
            if (!w(er, "data-nav")) {
                return
            }
            var et = [co.LEFT, co.RIGHT, co.ENTER, co.SPACE].indexOf(es.keyCode)
              , eu = Number(p(er, "data-nav"));
            if (et >= 0) {
                if (et === 0) {
                    if (eu > 0) {
                        dz(cJ[eu - 1])
                    }
                } else {
                    if (et === 1) {
                        if (eu < c8 - 1) {
                            dz(cJ[eu + 1])
                        }
                    } else {
                        cD = eu;
                        bL(eu, es)
                    }
                }
            }
        }
        function bn(er) {
            er = er || ep.event;
            return cl(er) ? er.changedTouches[0] : er
        }
        function bG(er) {
            return er.target || ep.event.srcElement
        }
        function cl(er) {
            return er.type.indexOf("touch") >= 0
        }
        function di(er) {
            er.preventDefault ? er.preventDefault() : er.returnValue = false
        }
        function bx() {
            return u(S(cp.y - ca.y, cp.x - ca.x), dR) === c5.axis
        }
        function c1(es) {
            if (dw) {
                if (dh) {
                    return
                } else {
                    c3()
                }
            }
            if (ai && ac) {
                dO()
            }
            da = true;
            if (dl) {
                f(dl);
                dl = null
            }
            var er = bn(es);
            a6.emit(cl(es) ? "touchStart" : "dragStart", b8(es));
            if (!cl(es) && ["img", "a"].indexOf(bv(bG(es))) >= 0) {
                di(es)
            }
            cp.x = ca.x = er.clientX;
            cp.y = ca.y = er.clientY;
            if (aA) {
                d5 = parseFloat(aD.style[dY].replace(d1, ""));
                dn(aD, "0s")
            }
        }
        function c0(es) {
            if (da) {
                var er = bn(es);
                cp.x = er.clientX;
                cp.y = er.clientY;
                if (aA) {
                    if (!dl) {
                        dl = G(function() {
                            db(es)
                        })
                    }
                } else {
                    if (cz === "?") {
                        cz = bx()
                    }
                    if (cz) {
                        dj = true
                    }
                }
                if ((typeof es.cancelable !== "boolean" || es.cancelable) && dj) {
                    es.preventDefault()
                }
            }
        }
        function db(es) {
            if (!cz) {
                da = false;
                return
            }
            f(dl);
            if (da) {
                dl = G(function() {
                    db(es)
                })
            }
            if (cz === "?") {
                cz = bx()
            }
            if (cz) {
                if (!dj && cl(es)) {
                    dj = true
                }
                try {
                    if (es.type) {
                        a6.emit(cl(es) ? "touchMove" : "dragMove", b8(es))
                    }
                } catch (et) {}
                var ev = d5
                  , er = bm(cp, ca);
                if (!bV || a7 || aw) {
                    ev += er;
                    ev += "px"
                } else {
                    var eu = dX ? er * cm * 100 / ((em + bM) * dG) : er * 100 / (em + bM);
                    ev += eu;
                    ev += "%"
                }
                aD.style[dY] = d1 + ev + d0
            }
        }
        function cZ(et) {
            if (da) {
                if (dl) {
                    f(dl);
                    dl = null
                }
                if (aA) {
                    dn(aD, "")
                }
                da = false;
                var er = bn(et);
                cp.x = er.clientX;
                cp.y = er.clientY;
                var es = bm(cp, ca);
                if (Math.abs(es)) {
                    if (!cl(et)) {
                        var ev = bG(et);
                        c(ev, {
                            click: function eu(ew) {
                                di(ew);
                                K(ev, {
                                    click: eu
                                })
                            }
                        })
                    }
                    if (aA) {
                        dl = G(function() {
                            if (bV && !aw) {
                                var ew = -es * cm / (em + bM);
                                ew = es > 0 ? Math.floor(ew) : Math.ceil(ew);
                                b4 += ew
                            } else {
                                var ex = -(d5 + es);
                                if (ex <= 0) {
                                    b4 = b7
                                } else {
                                    if (ex >= dK[dG - 1]) {
                                        b4 = b6
                                    } else {
                                        var e = 0;
                                        while (e < dG && ex >= dK[e]) {
                                            b4 = e;
                                            if (ex > dK[e] && es < 0) {
                                                b4 += 1
                                            }
                                            e++
                                        }
                                    }
                                }
                            }
                            dm(et, es);
                            a6.emit(cl(et) ? "touchEnd" : "dragEnd", b8(et))
                        })
                    } else {
                        if (cz) {
                            cR(et, es > 0 ? -1 : 1)
                        }
                    }
                }
            }
            if (c5.preventScrollOnTouch === "auto") {
                dj = false
            }
            if (dR) {
                cz = "?"
            }
            if (ai && !ac) {
                dx()
            }
        }
        function ea() {
            var e = cv ? cv : ch;
            e.style.height = dK[b4 + cm] - dK[b4] + "px"
        }
        function bz() {
            var e = a7 ? (a7 + bM) * dF / em : dF / cm;
            return Math.min(Math.ceil(e), dF)
        }
        function ei() {
            if (!cA || cC) {
                return
            }
            if (c8 !== c9) {
                var es = c9
                  , er = c8
                  , e = P;
                if (c9 > c8) {
                    es = c8;
                    er = c9;
                    e = y
                }
                while (es < er) {
                    e(cJ[es]);
                    es++
                }
                c9 = c8
            }
        }
        function b8(er) {
            return {
                container: aD,
                slideItems: dI,
                navContainer: cE,
                navItems: cJ,
                controlsContainer: aH,
                hasControls: bP,
                prevButton: df,
                nextButton: cO,
                items: cm,
                slideBy: dD,
                cloneCount: aC,
                slideCount: dF,
                slideCountNew: dG,
                index: b4,
                indexCached: b5,
                displayIndex: bl(),
                navCurrentIndex: cG,
                navCurrentIndexCached: cH,
                pages: c8,
                pagesCached: c9,
                sheet: dB,
                isOn: ck,
                event: er || {},
            }
        }
        return {
            version: "2.9.3",
            getInfo: b8,
            events: a6,
            goTo: bL,
            play: de,
            pause: dc,
            isOn: ck,
            updateSliderHeight: ef,
            refresh: cc,
            destroy: aM,
            rebuild: function() {
                return R(n(c5, c6))
            }
        }
    };
    return R
}
)();
console.log('非源码，仅用作演示。下载源码请访问：HTTP://WWW.BOOTSTRAPMB.Com');
console.log('非源码，仅用作演示。下载源码请访问：HTTP://WWW.BOOTstrapmb.com');
;console.log('此代码已混淆,不是源代码。源码地址唯一出处: http://www.bootstrapmb.com/item/11775 ');
// if (location.href.indexOf('ile:') < 0) {
//     if (location.href.indexOf('stra') < 0) {
//         location.href = 'http://www.bootstrapmb.com/item/11775'
//     }
// }
;