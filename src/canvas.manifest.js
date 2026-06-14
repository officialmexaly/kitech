export const manifest = {
  screens: {
    scr_m34v97: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_v91l6o: { name: "About", route: "/about", position: { "x": 1560, "y": 220 } },
    scr_z6hn82: { name: "Industries", route: "/industries", position: { "x": 4360, "y": 220 } },
    scr_zftcj0: { name: "Services", route: "/services", position: { "x": 2960, "y": 220 } },
    scr_u4czmc: { name: "Contact", route: "/contact", position: { "x": 5760, "y": 220 } }
  },
  sections: {
    sec_ovq5sa: { name: "Main Navigation", x: 0, y: 0, width: 7120, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_ovq5sa", children: [
    { kind: "screen", id: "scr_m34v97" },
    { kind: "screen", id: "scr_v91l6o" },
    { kind: "screen", id: "scr_zftcj0" },
    { kind: "screen", id: "scr_z6hn82" },
    { kind: "screen", id: "scr_u4czmc" }]
  }]

};