//Mengenal Penggunaan Function

function shoutOut(){

    return 'Halo World! '

} console.log(shoutOut())


function calculateMultiply(num1, num2){

    return num1 * num2

}

    var num1 = 5;
    var num2 = 6;

    console.log(calculateMultiply(5, 6))


function processSentence(name,age,address,hobby){

    return " Nama Saya " + name + " Umur Saya " + age + " Alamat Saya " + address + 
            " Hobby Saya " + hobby

}

    var name = "Reka";
    var age = 18;
    var address = "Jln. Tanah Kusir IV, Jakarta";
    var hobby = "Singing";

    var fullSentence = processSentence(name,age,address,hobby);
    console.log(fullSentence); 