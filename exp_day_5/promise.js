/*const res= fetch("https://jsonplaceholder.typicode.com/users")          //fetch data in unreadable format
.then(res=> {return res.json()})                                            //converting the data into json format
.then(data=>{console.log(data)})                                         //printing the data
console.log(res)*/

//-----------------------------------------------------------------------------------------------------------------
/*const res=async()=>{
    const b=  await fetch("https://jsonplaceholder.typicode.com/users")
    const a=await console.log(b.json())                                                                         //output Promise { <pending> }undefined
    console.log(a)
}
res()
*/

//-------------------------------------------------------------------------------------------------------------------
const res=async()=>{
    const b=  await fetch("https://jsonplaceholder.typicode.com/users")
    const a=await (b.json())               
    console.log(a)
}
res()