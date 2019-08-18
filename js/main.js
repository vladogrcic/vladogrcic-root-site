
// for (var i = 0; i < document.querySelectorAll('.portfolio-item .gallery > *').length; i++) {
//     document.querySelectorAll('.portfolio-item .gallery > *')[i].onclick = function() { 
//         var src = this.style.backgroundImage;
//         src = src.replace('url("','').replace('")','');
//         document.querySelectorAll('#background-gallery .gallery img')[0].src = String(src);
//         document.getElementById("background-gallery").style.display = "block";
        
//         var newImg = new Image();
//         newImg.src = src;
//         curHeight = newImg.height;
//         curWidth = newImg.width;
//         console.log(src);
//     }
//     document.getElementById("background-gallery").onclick = function() { 
//         document.getElementById("background-gallery").style.display = "none";
        
//     }
// }

// View an image
// var viewer = new Viewer(document.getElementById('image'), {
//     inline: true,
//     function (params) {
//         viewer.zoomTo(1);
//     }
      
//   });
for (var i = 0; i < document.querySelectorAll('.portfolio-item .gallery > *').length; i++) {
    document.querySelectorAll('.portfolio-item .gallery > *')[i].onclick = function() { 
        for (var j = 0; j < document.querySelectorAll('.portfolio-item .gallery').length; j++) {
            var gallery = new Viewer(document.querySelectorAll('.portfolio-item .gallery')[j]);
        };
    };
    document.getElementById("background-gallery").onclick = function() { 
        document.getElementById("background-gallery").style.display = "none";
        
    };
}
function resizePortHeroImage(){
    var mq = window.matchMedia( "(min-width: 1000px)" );
    if (mq.matches) {
        for (var k = 0; k < document.querySelectorAll('.portfolio-item.row').length; k++) {
            document.querySelectorAll('.portfolio-item.row section')[k].style.height = document.querySelectorAll('.portfolio-item.row header')[k].offsetHeight+'px';
            document.querySelectorAll('.portfolio-item.row section div')[k].style.height = document.querySelectorAll('.portfolio-item.row header')[k].offsetHeight+'px';
        }
    }
    else{
        for (var k = 0; k < document.querySelectorAll('.portfolio-item.row').length; k++) {
            document.querySelectorAll('.portfolio-item.row section')[k].removeAttribute("style");
            // document.querySelectorAll('.portfolio-item.row section div')[k].;
        }
    }
}
resizePortHeroImage();
window.onresize = function() {
    resizePortHeroImage();
};




for (var n = 0; n < document.querySelectorAll('.portfolio-item.row > section > .image').length; n++) {
    document.querySelectorAll('.portfolio-item.row > section > .image')[n].onclick = function() { 
        // var src = this.style.backgroundImage;
        // src = src.replace('url("','').replace('")','');
        // var newImg = document.createElement("img");
        // var newDiv = document.createElement("div");
        // newImg.setAttribute("src", src);
        // newDiv.appendChild(newImg);  
        // newDiv.setAttribute('data-original', src);
        // newImg.src = src;
        console.log('tdfhgds');
        
        var gallery_main = new Viewer(this.parentElement);
    };
}
