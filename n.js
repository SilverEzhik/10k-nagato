function g(a){return document.getElementById(a)};
b = document.createElement("canvas");
b.width = 50; b.height = 32;
var img = new Image();
img.crossOrigin = "anonymous";
img.onload = function() {bg(0)};

img.src = "https://i.imgur.com/mTzQxtR.jpg";
function start() { 
g("ln").style.display = "none";
g("vn").style.display = "block";
}
function bg(n) { b.getContext("2d").drawImage(img,-50 * n,0);

g("vn").style.background = "url('" + b.toDataURL() + "') center/cover";
}


var a = document.getElementsByTagName("p"), l = a.length, i = 0;

function pl(c, s){
    
    g("vn").onclick = function(){clearInterval(w), pl(c,1)};
    var w = setInterval(function(){
        g("tt").innerHTML += a[i].innerHTML.charAt(c);
        c++;
        if (g("tt").innerHTML.length > 270 && a[i].innerHTML.charAt(c) == ' ') {
            g("tt").innerHTML += "..."
            clearInterval(w);
            g("vn").onclick = function(){g("tt").innerHTML = "...";pl(c+1, 40)};
        }
        if (c > a[i].innerHTML.length){
            clearInterval(w);
            i++;
            g("vn").onclick = function(){if(a[i].parentNode.className != a[i-1].parentNode.className) {bg(a[i].parentNode.className)} if(a[i].classList[1]){g("s").style.opacity = a[i].classList[1]};g("tt").innerHTML = "";pl(0, 40)};
        }
    }, s);

}
