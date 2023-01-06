console.log("JAVA script LINKED")

function notScrolling()
{
        window.onscroll = function() 
        {
            window.scrollTo(0,0);
        }
}
notScrolling()

function enableScroll() 
{
    window.onscroll = function() {   };
}



window.onload = function()
{
    var preloader = document.querySelector(".preloader");
    console.log("WINDOW LOADED")
    setTimeout(()=>{

        preloader.style.display="none";
        enableScroll();
        // document.body.style.removeProperty('overflow');
        document.querySelector(".htmlStyle").style.overflowY="scroll";
    },100)
}


