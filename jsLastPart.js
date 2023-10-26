//------------------//
//--Where is Waldo--//

console.log("Where is Waldo")

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

//Remove Eggbert (hint look at the slice/splice method(s))
myIndex = whereIsWaldo.indexOf("Eggbert")
whereIsWaldo.splice(myIndex, 1)
console.log(whereIsWaldo)

// Change "Neff" to "No One"
neffIndex = whereIsWaldo[1].indexOf('Neff')
whereIsWaldo[1][neffIndex] = "No One"
console.log(whereIsWaldo)

//Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1])



//---------------------------//
//-------Excited Kitten-----//

//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
/**For every even number in your loop, log 
 * "...human...why you taking pictures of me?...", 
 * "...the catnip made me do it...", or
 *  "...why does the red dot always get away...
 * " at random. */

KittenArr =["...human...why you taking pictures of me?...", 
    "...the catnip made me do it...", 
    "...why does the red dot always get away..."
]

for(let i=0; i<=20; i++){
    let randomNumber = Math.floor(Math.random() * KittenArr.length);
    if(i%2 ===0 ){
        console.log(KittenArr[randomNumber])
    }
    console.log("Love me, pet me! HSSSSSS!")
}