let address={
    title:"Liberty Market",
    location:"Lahore"
}
function printaddress(title,location){
    console.log(title+"is in the"+address);
}
const {title,location} = address;
printaddress(title,location);
console.log(title);