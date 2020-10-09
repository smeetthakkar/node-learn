/*
const square = function(num){
    console.log(num * num)
}
square(2)

const square = function(x){
    return x * x
}

const square1 = (num) => console.log(num*num)
square1(3)
*/

//Arrow functions as properties on objects

/*
//1 - with function keyword and this.binding
const event = {
    name: 'Birthday Party',
    printGuestList: function(){
        //O/p as expected: Guest list for birthday part
        console.log('Guest list for ' + this.name)
    }
}
event.printGuestList()

//2 - with arrow function. They have no this binding
const eventArrow = {
    name: 'Birthday Part 2',
    //alternate ES6 syntax for methods inside an obj
    printGuestList(){
        console.log('Guest List for ' + this.name)
    }
    //throws undefined since there is no 'this' binding
    // printGuestList: () => console.log('Guest list for ' + this.name)
}
eventArrow.printGuestList()
*/

/* Early JS days, creating reference to 'this' using that

const event = {
    name: 'Birthday Party',
    guestList: ['Sam', 'Mike', 'Rob'],
    printGuestList: function(){
        const that = this;
        console.log('Guest List for ' + this.name)
        
        //this reference in a function creates it's own binding
        this.guestList.forEach(function(guest){
            console.log(guest + ' is attending ' + that.name)
        })
    }
}

event.printGuestList()

const eventArrow = {
    name: 'Birthday Party',
    guestList: ['Sim', 'Jim', 'Carrie'],
    printGuestList: function(){
        console.log('Guest List for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

eventArrow.printGuestList()
*/



