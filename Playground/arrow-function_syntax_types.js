//ARROW FUNCTION WITH BRACKETS
const square =  (x) => { 
    return x * x 
}
//SINGLE LINE
const square2 =  (x) =>  x * x 

console.log(square2(4))
//using function as an object
const event = {
    name: 'Birthday Party',
    printGuestList: function () {
        console.log(this.name)
    }
}
const event2 = {
    name: 'Birthday Party',
    guestList: ['Jon','Moe','Dog'],
    printGuestList() {
        console.log(this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        }
        )
    }
}

event2.printGuestList()