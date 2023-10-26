//----------------------------//
//-----Methods, Revisited-----//

const favMovies = ['Jaws', 'The Fellowship of the Ring', 
'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 
'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes',
 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 
 'Fast and Furious'];

// Console log: the index of Titanic
console.log(favMovies.indexOf('Titanic'))


//Do the following and console.log the final results (I have included some thought questions, 
// you don't have to write out an answer for those marked as such):

// use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
favMovies.sort()
console.log(`array has been sorted from A to Z : ${favMovies}`)

//Use the method pop
favMovies.pop()

// push"Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy")

//Reverse the array
favMovies.reverse()

//Use the shiftmethod
favMovies.shift()

//unshift- what does it return?
favMovies.unshift("All Amirican")
// unshift- used to add an element in the biggening of an array
console.log(favMovies)

/**splice"Django Unchained" and add "Avatar" 
 * (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: 
 * did this permanently alter our array? */

myIndex = favMovies.indexOf('Django Unchained')
favMovies.splice(myIndex, 0, "Avatar")
console.log(favMovies)


/**slice the last half of the array (challenge yourself and try to programatically 
 * determine the middle of the array rather than counting it and hard coding it) - 
 * Thought question: did this permanently alter our array? */

    let halfOfFavMovies =0;
if(favMovies.length%2 ===0){
    halfOfFavMovies = favMovies.length/2
}else if(favMovies.length%2 !==0){
    favMovies.length++
    halfOfFavMovies = favMovies.length/2
}


// store the value of your slice in a variable, console.log it - Thought question: what is going on here?
slicenFavMovies = favMovies.slice(halfOfFavMovies, favMovies.length)
// The slicened array printed the last half of the array
console.log(halfOfFavMovies)
console.log(favMovies.length)
//console.log your final results
console.log(slicenFavMovies)


//After running the above tasks, console.log the index of "Fast and Furious" -We 
// removed it from the array, what value do we get when we look for the index of something 
// that is not in the array?.
console.log(favMovies.indexOf('Fast and Furious'))
indexToDelet = favMovies.indexOf('Fast and Furious')
favMovies[indexToDelet] = favMovies[indexToDelet+1]
console.log(favMovies)


//Thought question: that we declared the variable favMovies with const, and yet,
// we were allowed to change the array. Weird? Should we have used let?

// We can change the elements of the arry with const but we cant assign a new variable or change all
// of the array at once like EX : faveMovies = [1, 2, 3] can not be done But we can .push([1, 2, 3])
// TypeError asignment to const variable => favMovies = [1, 2, 3]


