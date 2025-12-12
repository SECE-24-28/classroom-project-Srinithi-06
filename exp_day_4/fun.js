/*let arr=["sri","yeso","sure"]
// array to String

/*console.log(arr)
arr.toString()
console.log(arr)*/

//insert the element at last
/*
arr.push("sudar");
console.log(arr);*/


/*

console.log(arr.unshift("subu")); _
 //arr.push("sudar") /*         // add data atlast
 arr.unshift("thapas")     // add data at first
 arr.slice(0,2)  //delete 2 data from the index 0
 arr.slice(0,1,"sree")  // detele 1 data from index 0  and replace it with the new value
arr.pop()  // delete data at last
arr.unshift() // delete data at front
 delete arr[0]*/



/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//returns in the array format
 let mob={brand:"samsung",color:"black"}
 console.log(mob)    
 mob.price=20000    //to add the new object into the array
 console.log(mob)  // returns the value of the 
 mob.price=25000   //it will update the price
 console.log(mob)

 console.log(mob.brand)      // returns the value of the array
 console.log(mob["color"])  // returns only the value of the color

 delete mob.brand          
 console.log(mob)
 delete mob["color"]
 console.log(mob)

*/



//////////////////////////////////////////////////////////////////////////////////////////////////////


/*

let student={sna:"srinithi",age:19,demo:function()
{
    console.log("hi "+this.sna)   //output will be ***hi sri***
}
}
student.demo()

let student2={sna:"subasri",age:19,samp:()=>
{
    console.log("hi "+ this.sna)           //output will be ***hi undefined***
}
}
student2.samp()

*/

/////////////////////////////////////////////////////////////////////////////////////////////////

/*

let student=[{sna:"srinithi",age:19,sma:"90",fee:"true"},
    {sna:"subasri",age:11,sma:100,fee:"true"},
    {sna:"sureka",age:20,sma:95,fee:"true"}
]
console.log(student)
student.forEach((stu)=>
    console.log(stu) // returns the whole array as a object 
    //console.log(stu.sna+" "+stu.age)     //returns the value without the array output will be printed 1 by 1
)


let newstu=student.map((stu)=>{  ///update and return the v
    return{na:stu.sna,ma:stu.sma+2}
}
)
console.log(newstu)

*/

////////////////////////////////////////////////////////////////////////////////////////////////

let student=[{sna:"srinithi",age:19,sma:"90",fee:"false"},
    {sna:"subasri",age:11,sma:100,fee:"true"},
    {sna:"sureka",age:20,sma:95,fee:"true"}
]
/*
let newstr=student.every((stu)=>    // returns true only of the all the conditions are satisfied
{return stu.sma>=30
}
)
console.log(newstr)
*/
let sm=student.some((str)=>   // returns true if any of the given condition is satisfiesd
{
    return str.age==19
})
console.log(sm)

let fil=student.filter((s)=>
{
    return s.age>=15
})
console.log(fil)

let fe=student.foreach((r)=>
{
    return r.age==19
})
console.log(fe)