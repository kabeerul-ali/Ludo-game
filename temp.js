//short operation
let bpid = [
  br1.parentNode.id,
  br2.parentNode.id,
  br3.parentNode.id,
  br4.parentNode.id,
  bb1.parentNode.id,
  bb2.parentNode.id,
  bb3.parentNode.id,
  bb4.parentNode.id,
  bg1.parentNode.id,
  bg2.parentNode.id,
  bg3.parentNode.id,
  bg4.parentNode.id,
];
let ypath4 = {
  rp1: rp1,
  rp2: rp2,
  rp3: rp3,
  rp4: rp4,
  bp1: bp1,
  bp2: bp1,
  bp3: bp3,
  bp4: bp4,
  gp1: yp1,
  gp2: yp2,
  gp3: yp3,
  gp4: yp4,
};
let spath = [r1, r2, r3, r4, b1, b2, b3, b4, g1, g2, g3, g4];
let count = 0;
for (let i = 0; i < bpid.length; i++) {
  if (bpid[i] == by4.parentNode.id) {
    let x = by4.parentElement;
    let y = x.children[0];
    spath[i].appendChild(y);
    //for do  path value 1
    for (var key in ypath4) {
      if (count == i) {
        ypath4[key] = 1;
        eval(`${key} = 1`);
      }
      count++;
    }
  }
}
//opr close
