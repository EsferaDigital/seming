"use strict";var actual=0,prev=document.getElementById("anterior"),next=document.getElementById("siguiente");function mostrar(t){for(var e=document.getElementsByClassName("Ligthbox-contenedor-item"),a=0;a<e.length;a++)if(e[a].className.includes("Ligthbox-actual")){e[a].className=e[a].className.replace("Ligthbox-actual","");break}e[actual=t].className+=" Ligthbox-actual"}function siguiente(){3<++actual&&(actual=0),mostrar(actual)}function anterior(){--actual<0&&(actual=3),mostrar(actual)}next.addEventListener("click",function(){siguiente()}),prev.addEventListener("click",function(){anterior()});