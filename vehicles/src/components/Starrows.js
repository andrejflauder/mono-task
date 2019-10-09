import React from 'react';
import editUYScuti from './Scutiedit'

var starrows = [{
    name: "UY Scuti",
    mass: 10,
    diameter: 1708,
    editmass: '<button onclick="editUYScuti()">EDIT</button><section id="edit-input-scuti"> <input id="massofscuti" type="number" placeholder="new mass"><input id="sizeofscuti" type="number" placeholder="new diameter"> <button onclick="newValueScuti()">Save</button> </section>'
}, {
    name: "WOH G64",
    mass: 25,
    diameter: 1540,
    editmass: '<button onclick="editWoh()">EDIT</button><section id="edit-input-woh"> <input id="massofwoh" type="number" placeholder="new mass"><input id="sizeofwoh" type="number" placeholder="new diameter"> <button onclick="newValueWoh()">Save</button> </section>'
}, {
    name: "HR 5171 A",
    mass: 36,
    diameter: 1315,
    editmass: '<button onclick="editHr()">EDIT</button><section id="edit-input-hr"> <input id="massofhr" type="number" placeholder="new mass"><input id="sizeofhr" type="number" placeholder="new diameter"> <button onclick="newValueHr()">Save</button> </section>'
}, {
    name: "RSGC1-F02",
    mass: 30000,
    diameter: 1498,
    editmass: '<button onclick="editRSGC1()">EDIT</button><section id="edit-input-rsgc1"> <input id="massofrsgc1" type="number" placeholder="new mass"><input id="sizeofrsgc1" type="number" placeholder="new diameter"> <button onclick="newValueRSGC1()">Save</button> </section>'
}, {
    name: "HD 143183",
    mass: 20,
    diameter: 1469,
    editmass: '<button onclick="editHd()">EDIT</button><section id="edit-input-hd"> <input id="massofhd" type="number" placeholder="new mass"><input id="sizeofhd" type="number" placeholder="new diameter"> <button onclick="newValueHd()">Save</button> </section>'
}, {
    name: "VY Canis Majoris",
    mass: 25,
    diameter: 1420,
    editmass: '<button onclick="editCanis()">EDIT</button><section id="edit-input-canis"> <input id="massofcanis" type="number" placeholder="new mass"><input id="sizeofcanis" type="number" placeholder="new diameter"> <button onclick="newValueCanis()">Save</button> </section>'
}, {
    name: "KY Cygni",
    mass: 25,
    diameter: 1420,
    editmass: '<button onclick="editCygni()">EDIT</button><section id="edit-input-cygni"> <input id="massofcygni" type="number" placeholder="new mass"><input id="sizeofcygni" type="number" placeholder="new diameter"> <button onclick="newValueCygni()">Save</button> </section>'
}, {
    name: "S Persei",
    mass: 20,
    diameter: 1212,
    editmass: '<button onclick="editPersei()">EDIT</button><section id="edit-input-persei"> <input id="massofpersei" type="number" placeholder="new mass"><input id="sizeofpersei" type="number" placeholder="new diameter"> <button onclick="newValuePersei()">Save</button> </section>'
}, {
    name: "Mu Cephei",
    mass: 19,
    diameter: 1260,
    editmass: '<button onclick="editCephei()">EDIT</button><section id="edit-input-cephei"> <input id="massofcephei" type="number" placeholder="new mass"><input id="sizeofcephei" type="number" placeholder="new diameter"> <button onclick="newValueCephei()">Save</button> </section>'
}, {
    name: "VV Cephei A",
    mass: 28,
    diameter: 1400,
    editmass: '<button onclick="editVV()">EDIT</button><section id="edit-input-vv"> <input id="massofvv" type="number" placeholder="new mass"><input id="sizeofvv" type="number" placeholder="new diameter"> <button onclick="newValueVV()">Save</button> </section>'
}];

export default starrows