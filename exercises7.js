//Menyusun Barisan Bintang

var a = '*'
var b = 0

while(b < 5){

    console.log(a)

    b = b + 1

}




//Menyusun Barisan Bintang Dengan Nested Looping

var b = 0

while(b < 5){

    var c = ''

    while(c.length < 5){

        c = c + '*'

    }

    console.log(c)
    b = b + 1

}




//Menyusun Barisan Tangga Bintang Dengan Nested Looping

var a = ''
var b = 0

while(b <= 5){

    console.log(a)

    b = b + 1
    a = a + '*'

}