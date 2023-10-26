//-----------------------------//
//-----Hungry For More---------//

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];
  
// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
];

let kristynsShoe = kristynsCloset[0]
kristynsCloset.splice(0,1)
thomsCloset[2].push(kristynsShoe)
console.log(kristynsCloset, thomsCloset)

console.log(`Iam thomsCloset Im wearing ${thomsCloset[0][0]} and ${thomsCloset[1][0]} and ${thomsCloset[2][0]}`)
console.log(`Iam kristynsCloset Im wearing ${thomsCloset[0]} and ${thomsCloset[0]} and ${thomsCloset[0]}`)


// function randClothes(clothes=[]){
//     let newStyle = []
//     for(let i=0; i<=2; i++){
//         if(typeof clothes[i] === "Array"){
//             clothes.forEach(cloth => {
//                 let randNumber = Math.floor(Math.random() * cloth.length);
//                 newStyle.push(cloth[randNumber])
//             })
//             return newStyle
//         }else {
//             return 0
//         }
//     }
    
// }
// console.log(randClothes(thomsCloset))




//Time to do laundry - loop through Kristyn's closet and log the sentence
// "WHIRR: Now washing (item)" for each item in the array.
console.log('--------laundry--------')

kristynsCloset.forEach(item => {
    console.log("WHIRR: Now washing", item)
})


//Thom wants to do inventory on his closet. Using bracket notation, 
// log the arrays containing all of Thom's shirts, pants, and accessories.
console.log('--------Inventory--------')
thomsCloset.forEach(element =>{
    console.log('-------------')
    element.forEach(item => {
        console.log(item)
    })
})