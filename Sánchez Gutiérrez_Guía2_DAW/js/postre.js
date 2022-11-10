var voto1 = 0 , voto2 = 0, voto3 = 0, voto4 = 0, votosTotal = 0;

function votar(){
    voto1 = voto1 + 1;

    alert("Usted votó por Cheese Cake");
}

function votar2(){
    voto2 = voto2 + 1;

    alert("Usted votó por Flan");
}
function votar3(){
    voto3 = voto3 + 1;

    alert("Usted votó por Helado");
}
function votar4(){
    voto4 = voto4 + 1;

    alert("Usted votó por Lava Cake");
}

function CalcularPorcent() {
    votosTotal = voto1+ voto2 + voto3 + voto4;

    var porcent1 = (voto1 * 100) / votosTotal;
    var porcent2 = (voto2 * 100) / votosTotal;
    var porcent3 = (voto3 * 100) / votosTotal;
    var porcent4 = (voto4 * 100) / votosTotal;

    result = document.getElementById("resultado");
    result.innerHTML = "<p>Chesee Cake: "+Math.round(porcent1)+"%<br>"+"<p>Flan: "+Math.round(porcent2)+"%<br>"+"<p>Helado: "+Math.round(porcent3)+"%<br>"+"<p>Lava Cake: "+Math.round(porcent4)+"%<br></p>";
}

function Ocultar() {
    result = document.getElementById("resultado");
    result.style.display="none";
}
