function getImg(){
    var sampul = document.querySelector('#txtFoto');
    var imgPrev = document.querySelector('.imgPrev');
    
    var fileGambar = new FileReader();
    
    fileGambar.readAsDataURL(sampul.files[0]);
    
    fileGambar.onload = function(e){
        let hasil = e.target.result;
        imgPrev.src = hasil;

        resemble(hasil).onComplete(function(data){
            let alpha = data.alpha;
            let black = data.black;
            let blue = data.blue;
            let brightness = data.brightness;
            let green = data.green;
            let red = data.red;
            let white = data.white;

            let total = parseInt(alpha) + parseInt(black) + parseInt(blue) + parseInt(brightness) + parseInt(green) + parseInt(red) + parseInt(white);
            console.log(total);
        });

    }

    

}
