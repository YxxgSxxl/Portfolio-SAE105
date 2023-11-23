let param = new URLSearchParams(location.search);
let quelleac = param.get('ac');

console.log(quelleac)
document.title = quelleac;

if (typeof(AC["AC"][quelleac]["image"]) != "undefined") {
    document.querySelector(".images").innerHTML+=`<img src="${AC["AC"][quelleac]["image"]}" alt="${quelleac}" width="80%" height="80%">`;
} else {
    document.querySelector(".images").innerHTML+="<h3>Pas d'image</h3>";
}

let jus = (AC["AC"][quelleac]);

document.querySelector(".justifications").innerHTML = AC["AC"][quelleac].justification