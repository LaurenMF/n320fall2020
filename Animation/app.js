let titlebar = document.getElementsByClassName("titlebar");
let titleblock = document.getElementsByClassName("titleblock");
let gallery = document.getElementsByClassName("smblock");

TweenLite.from(titlebar, {duration: 1, x: -300, alpha: 0});
TweenLite.from(titleblock, {duration: 3, x: -1200, alpha: 0});

for (let i = 0; i < gallery.length; i++) {
    TweenLite.from(gallery[i], {duration: 4, x: -1250, alpha: 0});
}

let gallHover = CSSRulePlugin.getRule("smblock:hover");
TweenMax.to(gallHover, {backgroundColor:"#cc00cc"});


document.on("click", "smblock", function() {
    for (let i = 0; i < gallery.length; i++) {
        TweenLite.to(gallery[i], {duration: 4, x: -1250, alpha: 0});
    }
    
});
