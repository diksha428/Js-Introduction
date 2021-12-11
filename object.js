//Object

//key value pair

//to declare an object

let obj={}

let cap={
        firstName : 'Steve',
        lastName  : 'Roger',
        friends: ['Bucky ' , 'Tony Stark','Dr Banner'],
        isAvenger :true,
        age:150,
        address:{
            state :'New York',
            city: "Manhatten"
        },

        sayHi : function fn(){
            console.log('Cap says Hi')
        }
}

//console.log(captain)

//Dot notation

console.log(captain.friends[1])

//Bracket Notation
console.log(captain['age'])

captain.sayHi()

//update object

captain.isAvenger='False'
console.log(captain)

//create something inside an object
captain.movies=['first Avenger',"Age og ultron",'endgame']
console.log(captain)

//delete a property
delete captain.age
console.log(captain)

//special loop (For in loop)

for(let key in captain){
    console.log("key->" , key,'value->',captain[key]
}
//for in loop
