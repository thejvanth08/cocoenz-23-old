// for mouse cursor trailing effect - snowflake
var cursoreffects = (function (e) {
  "use strict";
  return (
    (e.snowflakeCursor = function (e) {
      let t,
        i,
        n,
        o = e && e.element,
        s = o || document.body,
        h = ["❄️"],
        c = window.innerWidth,
        l = window.innerHeight,
        r = { x: c / 2, y: c / 2 },
        d = [],
        a = [];
      const A = window.matchMedia("(prefers-reduced-motion: reduce)");
      function u() {
        if (A.matches)
          return (
            console.log(
              "This browser has prefers reduced motion turned on, so the cursor did not init"
            ),
            !1
          );
        (t = document.createElement("canvas")),
          (i = t.getContext("2d")),
          (t.style.top = "0px"),
          (t.style.left = "0px"),
          (t.style.pointerEvents = "none"),
          o
            ? ((t.style.position = "absolute"),
              s.appendChild(t),
              (t.width = s.clientWidth),
              (t.height = s.clientHeight))
            : ((t.style.position = "fixed"),
              document.body.appendChild(t),
              (t.width = c),
              (t.height = l)),
          (i.font = "12px serif"),
          (i.textBaseline = "middle"),
          (i.textAlign = "center"),
          h.forEach((e) => {
            let t = i.measureText(e),
              n = document.createElement("canvas"),
              o = n.getContext("2d");
            (n.width = t.width),
              (n.height = 2 * t.actualBoundingBoxAscent),
              (o.textAlign = "center"),
              (o.font = "12px serif"),
              (o.textBaseline = "middle"),
              o.fillText(e, n.width / 2, t.actualBoundingBoxAscent),
              a.push(n);
          }),
          s.addEventListener("mousemove", f),
          s.addEventListener("touchmove", g, { passive: !0 }),
          s.addEventListener("touchstart", g, { passive: !0 }),
          window.addEventListener("resize", m),
          y();
      }
      function m(e) {
        (c = window.innerWidth),
          (l = window.innerHeight),
          o
            ? ((t.width = s.clientWidth), (t.height = s.clientHeight))
            : ((t.width = c), (t.height = l));
      }
      function g(e) {
        if (e.touches.length > 0)
          for (let t = 0; t < e.touches.length; t++)
            p(
              e.touches[t].clientX,
              e.touches[t].clientY,
              a[Math.floor(Math.random() * a.length)]
            );
      }
      function f(e) {
        if (o) {
          const t = s.getBoundingClientRect();
          (r.x = e.clientX - t.left), (r.y = e.clientY - t.top);
        } else (r.x = e.clientX), (r.y = e.clientY);
        p(r.x, r.y, a[Math.floor(Math.random() * h.length)]);
      }
      function p(e, t, i) {
        d.push(new v(e, t, i));
      }
      function y() {
        !(function () {
          if (0 != d.length) {
            i.clearRect(0, 0, c, l);
            for (let e = 0; e < d.length; e++) d[e].update(i);
            for (let e = d.length - 1; e >= 0; e--)
              d[e].lifeSpan < 0 && d.splice(e, 1);
            0 == d.length && i.clearRect(0, 0, c, l);
          }
        })(),
          (n = requestAnimationFrame(y));
      }
      function w() {
        t.remove(),
          cancelAnimationFrame(n),
          s.removeEventListener("mousemove", f),
          s.removeEventListener("touchmove", g),
          s.removeEventListener("touchstart", g),
          window.addEventListener("resize", m);
      }
      function v(e, t, i) {
        const n = Math.floor(60 * Math.random() + 80);
        (this.initialLifeSpan = n),
          (this.lifeSpan = n),
          (this.velocity = {
            x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
            y: 1 + Math.random(),
          }),
          (this.position = { x: e, y: t }),
          (this.canv = i),
          (this.update = function (e) {
            (this.position.x += this.velocity.x),
              (this.position.y += this.velocity.y),
              this.lifeSpan--,
              (this.velocity.x += (2 * (Math.random() < 0.5 ? -1 : 1)) / 75),
              (this.velocity.y -= Math.random() / 300);
            const t = Math.max(this.lifeSpan / this.initialLifeSpan, 0),
              i = 0.0174533 * (2 * this.lifeSpan);
            e.translate(this.position.x, this.position.y),
              e.rotate(i),
              e.drawImage(
                this.canv,
                (-this.canv.width / 2) * t,
                -this.canv.height / 2,
                this.canv.width * t,
                this.canv.height * t
              ),
              e.rotate(-i),
              e.translate(-this.position.x, -this.position.y);
          });
      }
      return (
        (A.onchange = () => {
          A.matches ? w() : u();
        }),
        u(),
        { destroy: w }
      );
    }),
    Object.defineProperty(e, "__esModule", { value: !0 }),
    e
  );
})({});
