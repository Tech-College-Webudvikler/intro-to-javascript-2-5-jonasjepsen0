let number1 = 5
let number2 = 12
let result = number1 + number2
result = result * 7
console.log(result)

let yndlingsby = "aalborg"
let bylength = yndlingsby.length
console.log(bylength)
let fullname = 'jonas jepsen'
let findspace = fullname.indexOf(' ')
let fornavn = fullname.substring(0, findspace)
console.log(fornavn)
let efternavn = fullname.substring(6)
console.log(fornavn)
console.log(efternavn)

let mains = document.getElementById('mainSection')
let yndlingsret1 = 'pizza1'
let yndlingsret2 = 'pizza2'
let yndlingsret3 = 'pizza3'
let ret1 = document.createElement('h2')
let ret2 = document.createElement('h3')
let ret3 = document.createElement('h4')
ret1.classList.add('hclass')
ret2.classList.add('hclass')
ret3.classList.add('hclass')
ret1.innerText = yndlingsret1
ret2.innerText = yndlingsret2
ret3.innerText = yndlingsret3
mains.appendChild(ret1)
mains.appendChild(ret2)
mains.appendChild(ret3)