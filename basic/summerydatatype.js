// # Primitve datatype

// 7 type:string,number,boolean,null,undefined,symbol,bigint


// Reference (Non primitive)
// Array,object,Functions


const isloggedIn=false
const outsideTemp=null
const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id==anotherid);


const heros=["Shaktiman","hreo"]
console.log(heros);


let myobject= {
name:"Pradyumn",
Age:22,

}

const myfunction=function(){

    console.log("Pradyumn");
}

console.log(typeof myfunction);
console.log(typeof anotherid);
console.log(typeof myobject);