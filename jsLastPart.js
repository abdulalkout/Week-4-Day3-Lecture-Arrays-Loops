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




//----------------------------------//
//----------Find the Median---------//

console.log("//----------Find the Median---------//")
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];


//Find the median number in the following numsarray, then console.log that number.
let median =0;
// console.log(nums.length)
if(nums.length%2 === 0){
    let medianIndex = nums.length/2;
    median = nums[medianIndex] 
}else if (nums.length%2 !== 0){
    let medianIndex1 = (nums.length+1) /2
    let medianIndex2 = (nums.length-1) /2
    median = (nums[medianIndex1] + nums[medianIndex2]) /2
}
console.log(median)