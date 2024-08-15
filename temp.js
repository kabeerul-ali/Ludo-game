//short operation
let rpid = [
  bb1.parentNode.id,
  bb2.parentNode.id,
  bb3.parentNode.id,
  bb4.parentNode.id,
  bg1.parentNode.id,
  bg2.parentNode.id,
  bg3.parentNode.id,
  bg4.parentNode.id,
  by1.parentNode.id,
  by2.parentNode.id,
  by3.parentNode.id,
  by4.parentNode.id,
];
let rpath1 = {
  bp1: bp1,
  bp2: bp2,
  bp3: bp3,
  bp4: bp4,
  gp1: gp1,
  gp2: gp1,
  gp3: gp3,
  gp4: gp4,
  yp1: yp1,
  yp2: yp2,
  yp3: yp3,
  yp4: yp4,
};
let spath = [b1, b2, b3, b4, g1, g2, g3, g4, y1, y2, y3, y4];
let count = 0;
for (let i = 0; i < rpid.length; i++) {
  if (rpid[i] == br2.parentNode.id) {
    let x = br2.parentElement;
    let y = x.children[0];
    spath[i].appendChild(y);
    //for do  path value 1
    for (var key in rpath1) {
      if (count == i) {
        rpath1[key] = 1;
        eval(`${key} = 1`);
      }
      count++;
    }
  }
}
//opr close
