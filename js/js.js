/**
 * @name:   js.js
 * @desc:   Present functions controlling Gallery
 */


(function () {
    
        var

            imgSpace    =   document.getElementById("imgSpace"),
            nextBtn     =   document.getElementById("nextBtn"),
            prevBtn     =   document.getElementById("prevBtn"),
            imgArray    =   ["imgs/mars.jpg", "imgs/img2.jpg", "imgs/img3.jpg"],
            imgIndex    =   0,
            imgSpace1    =   document.getElementById("imgSpace1"),

            

        /**
        * @name:   bindBtns
        * @desc:   Control next and prev btn of gallery
        */

        bindBtns    = function () {


            nextBtn.addEventListener("click", function () {
                if (imgIndex < imgArray.length - 1 ) {
                    imgIndex++;
                }else {
                    imgIndex = 0;
                }

                imgSpace.src = imgArray[imgIndex];

            }); //nextBtn


            prevBtn.addEventListener("click", function () {
                if (imgIndex > 0  ) {
                    imgIndex--;
                }else {
                    imgIndex = imgArray.length -1;
                }

                imgSpace.src = imgArray[imgIndex];

            }); //btnPrev

            

        }, //bindBtns


            
        /**
        * @name:   automaticGallery
        * @desc:   Automatic Gallery will change every 5 seconds
        */

        automaticGallery    =   function () {
            imgIndex++;

            if (imgIndex >= imgArray.length) {
                imgIndex = 0;
            } //if

            imgSpace1.setAttribute("src", imgArray[imgIndex]);

            setTimeout(function () {
                automaticGallery();
            }, 5000);



        }, //automaticGallery


      
    
            
            
            







                

            
    
    
    
    
    
    
    
    
    
        init = function () {
            bindBtns();
            automaticGallery();
        }
    
    
        ;
    
    window.addEventListener("load", init)
})();

