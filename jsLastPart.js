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