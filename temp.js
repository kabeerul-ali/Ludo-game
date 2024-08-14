//short operation
let bpid = [
  br1.parentNode.id,
  br2.parentNode.id,
  br3.parentNode.id,
  br4.parentNode.id,
  bg1.parentNode.id,
  bg2.parentNode.id,
  bg3.parentNode.id,
  bg4.parentNode.id,
  by1.parentNode.id,
  by2.parentNode.id,
  by3.parentNode.id,
  by4.parentNode.id,
];
let bpath3 = {
  rp1: rp1,
  rp2: rp2,
  rp3: rp3,
  rp4: rp4,
  gp1: gp1,
  gp2: gp1,
  gp3: gp3,
  gp4: gp4,
  yp1: yp1,
  yp2: yp2,
  yp3: yp3,
  yp4: yp4,
};
let spath = [r1, r2, r3, r4, g1, g2, g3, g4, y1, y2, y3, y4];
let count = 0;
for (let i = 0; i < bpid.length; i++) {
  if (bpid[i] == bb4.parentNode.id) {
    let x = bb4.parentElement;
    let y = x.children[0];
    spath[i].appendChild(y);
    //for do  path value 1
    for (var key in bpath3) {
      if (count == i) {
        bpath3[key] = 1;
        eval(`${key} = 1`);
      }
      count++;
    }
  }
}
//opr close
