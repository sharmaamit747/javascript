// constructor Object (singalton)

// const obj1 = new Object()
const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}
const obj3 = { 5: "e", 6: "f"}
const obj4 = Object.assign({}, obj1, obj2, obj3)

// const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)

const users = [
    {
        id : 1,
        name: 'amit'
    },
    {
        id : 1,
        name: 'amit'
    },
    {
        id : 1,
        name: 'amit'
    }
]

const user1 = {}
user1.id = 1
user1.name = 'amit'
user1.email = 'amit@gmail.com'

console.log(user1)

console.log(Object.keys(user1))
console.log(Object.values(user1))
console.log(Object.entries(user1))

console.log(user1.hasOwnProperty('email'))