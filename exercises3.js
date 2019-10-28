var nama = ''
var peran = ''

if(nama == ''){
    
    console.log('nama harus diisi')

    //tampilkan nama harus diisi

} else if(peran == ''){

    console.log('Halo' + nama + 'Pilih peranmu untuk memulai game!')

    //tampilkan pilih peranmu untuk memulai game

} else if (nama !='' && peran !==''){

    console.log('Selamat datang di Dunia Proxytia, + nama')
    console.log('Halo' + nama + peran )

}


if(peran =='ksatria'){

    console.log(' halo ksatria ' + nama + ' kamu dapat menyerang dengan senjatamu ')

} else if(peran =='tabib'){

    console.log(' halo tabib ' + nama + ' kamu akan membantu temanmu yang terluka ')

} else if(peran =='penyihir'){

    console.log(' halo penyihir ' + nama + ' ciptakan keajaiban yang membantu kemenanganmu ')
    
}