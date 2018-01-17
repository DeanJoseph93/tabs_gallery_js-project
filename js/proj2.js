/**
 * @name:   proj2.js
 * @desc:   
 */


(function () {

    var
        home             =   document.getElementById("home"),
        why              =   document.getElementById("why"),
        who              =   document.getElementById("who"),
        titleMain        =   document.getElementById("titleMain"),
        paraMain         =   document.getElementById("paraMain"),
        paraMainWho      =   document.getElementById("paraMainWho"),
        paraMainWhy      =   document.getElementById("paraMainWhy"),



        /**
         * @name:   resetPar
         * @desc:   will manipulate the par and reset each time link is clicked
         */


        resetPar    =   function () {

            paraMain.style.display = "none";
            paraMainWhy.style.display = "none";
            paraMainWho.style.display = "none";

            home.style.color = "#FFFF";
            why.style.color = "#FFFF";
            who.style.color = "#FFFF";

        }, //


        /**
         * @name:   bindBtns
         * @desc:   will manipulate main and display new text boxes with information
         */




        bindBtns        =       function () {


            home.addEventListener("click", function () {
                resetPar();
                var
                    title   =   true,
                    para    =   true ;

                if( title == true || para == true) {


                    //displaying title and paragraph
                    titleMain.innerHTML = "Welcome To My Page Of Projects";
                    titleMain.style.display = "block";
                    paraMain.style.display = "block";

                    //manipulating link
                    home.style.color = "red";
                    who.style.color = "white";
                    why.style.color = "white";

                } //if
            }); //why




            why.addEventListener("click", function () {
                resetPar();
                var
                    title   =   true,
                    para    =   true ;

                if( title == true || para == true) {

                    //displaying title and paragraph
                    titleMain.innerHTML = "Why...";
                    titleMain.style.borderBottom = "none";
                    paraMain.style.display = "none";
                    paraMainWhy.style.display = "block";

                    //manipulating link
                    home.style.color = "white";
                    why.style.color = "red";
                    who.style.color = "white";

                } //if
            }); //why





            who.addEventListener("click", function () {
                resetPar();
                var
                    title   =   true,
                    para    =   true ;

                if( title == true || para == true) {


                    //displaying title and paragraph
                    titleMain.innerHTML = "Who...";
                    titleMain.style.borderBottom = "none";
                    paraMain.style.display = "none";
                    paraMainWho.style.display = "block";

                    //manipulating link
                    who.style.color = "red";
                    why.style.color = "white";
                    home.style.color = "white";


                } //if
            }); //who






        }, //bindBtns



        /**
         * @name:   automaticGallery
         * @desc:   Automatic Gallery will change every 5 seconds
         */

      











        init = function () {
            bindBtns();
            
        }


        ;

    window.addEventListener("load", init)
})();
