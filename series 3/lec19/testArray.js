let rates=[1,2,3,4];
let newrates= rates.map(function(r){
    return r*2;
});
console.log(newrates);

let names=["NOMAN","ALI","HADAN"];
names.sort();
console.log(names);
let findname=names.find(fun);
function fun(std){
    if(std=="ALI") return true;
    else return false;
}
// console.log(findname);
names.splice(1,0,"zahid","anwar");
console.log(names);