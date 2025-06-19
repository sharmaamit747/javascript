// Literel Objects

const usekey = Symbol('insta')
const first_user = {
    name: 'Amit Kumar',
    "date of joing": '20-05-2015',
    dob: '20-03-1991',
    mobile: '9874561230',
    email: 'sharmaamit@gmail.com',
    [usekey] : '123456',
    isLoggedIn: false,
    days: ['Mpday', 'Sunday']
}

console.log(first_user.dob)
console.log(first_user['dob'])
console.log(first_user.usekey)
console.log(first_user[usekey])
// console.log(first_user.date of joing)
console.log(first_user['date of joing'])
console.log(first_user['days'])
console.log(first_user['days'][1])

first_user.email = 'sharma@yahoo.com'
console.log(first_user)

first_user.message = function(){
    console.log('Hiiii Member')
}

first_user.message2 = function(){
    console.log(`Hiiii Member, ${this.name}`)
}

console.log(first_user.message)
console.log(first_user.message())
console.log(first_user.message2())