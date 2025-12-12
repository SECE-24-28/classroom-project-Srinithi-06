let employeee=[{ena:"vishnu",mob:213},{ena:"arun",mob:345},{ena:"balu",mob:567},{ena:"carl",mob:789},  {ena:"dalu",mob:890},{ena:"emil",mob:912}];
let ep=employeee.filter((emp)=>{
    return emp.ena.includes("a")
}  )  
console.log(ep)




