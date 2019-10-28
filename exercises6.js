//LOOPING while

var a = 'i love coding'
var b = 0

while(b < 20){

    console.log(a)

    b = b + 2

}

var a = 'i wil be fullstack developer'
var b = 20

while(b > 0){

    b = b - 2

    console.log(a)

}




//LOOPING for

var a = 'i love coding'

for(var b = 0; b<20; b=b+1){

    console.log(a)

}

var a = 'i will be fullstack developer'

for(var b = 20; b>0; b=b-1){

    console.log(a)

}




//Angka Ganjil Genap

var nilai = 0
var akhir = 100

while(nilai <=100){

    if(nilai%2 == 0){

        console.log(nilai, 'GENAP')

    } else {

        console.log(nilai, 'GANJIL')

    }

    nilai = nilai + 1

}




var nilai = 0 

while(nilai < 100){

    nilai = nilai + 2

    if(nilai%3 == 0){

        console.log(nilai + ' KELIPATAN 3 ')

    }
}




var nilai = 0

while(nilai < 100){

    nilai = nilai + 5

    if(nilai%6 == 0){

        console.log(nilai + ' KELIPATAN 6 ')

    }

}




var nilai = 0

while(nilai < 100){

    nilai = nilai + 9

    if(nilai%10 == 0){

        console.log(nilai + ' KELIPATAN 10 ')

    }

}