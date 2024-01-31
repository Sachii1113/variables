const phone = {
    name: "pocoX3",
    brand : "redmi",
    ram : "8gb",
    color : "blue",
    camera :"108mpxl"
}
console.table([phone.name,phone.brand,phone.camera,phone.ram,phone.color])
const phone2 = {
    name :"Iphone SE",
    brand : "apple",
    ram:"8gb",
    color :"black",
    camera :"8mpxl",
    festures : function feature(){
    let os = "iOS"
    return this.brand+" "+this.name +" runs on a operating System called "+os
    } 
}
console.log(phone2.festures);
