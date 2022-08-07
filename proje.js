const namesarray = [];
const aktararray = [];
let filarray = [];
let filarray2 = [];
function renderMap(name, index, a) {
    const div = document.createElement("div");
    const itemContainer = document.createElement("div");
    const butonlar = document.createElement("div");
    const sagButon = document.createElement("button");
    const sagsil = document.createElement("button");
    div.setAttribute('class', "liste");
    div.setAttribute('id', name);
    //sagButon.setAttribute("id", "mehmet");
    itemContainer.innerHTML = name;
    sagButon.innerHTML = "Sağa Ekle";
    sagsil.innerHTML = "Sil";
    sagButon.onclick = () => aktar(name, index);
    sagsil.onclick = () => sil(index);
    butonlar.appendChild(sagButon);
    butonlar.appendChild(sagsil);
    div.appendChild(itemContainer);
    div.appendChild(butonlar);
    a.appendChild(div);
}
function render() {
    const a = document.getElementById("liste");
    a.innerHTML = "";
    filarray.length !== 0 ? filarray.map((name, index) => renderMap(name, index, a)) : namesarray.map((name, index) => renderMap(name, index, a))
}
function render2() {
    const b = document.getElementById("aktarliste");
    b.innerHTML = "";
    filarray2.length !== 0 ? filarray2.map((name, index) => renderMap2(name, index, b)) : aktararray.map((name, index) => renderMap2(name, index, b))
}
function checkTextField(value) {
    if (value == '') {
        alert("Lütfen İsim Soyisim Giriniz...");
    }
}
function checkfilter(deger) {
    if (deger == '') {
        alert("Filtrelenecek Öğe Bulunamadı...");
    }
}
function aktar(name, index) {
    namesarray.splice(index, 1);
    aktararray.push(name);
    render();
    render2();
}
function aktar2(name, index) {
    aktararray.splice(index, 1);
    namesarray.push(name);
    render2();
    render();
}
function sil(index) {
    namesarray.splice(index, 1);
    render();
}
function sil2(index) {
    aktararray.splice(index, 1);
    render2();
}
function renderMap2(name, index, b) {
    const dive = document.createElement("div");
    const aContainer = document.createElement("div");
    const butonlarr = document.createElement("div");
    const solButon = document.createElement("button");
    const solsil = document.createElement("button");
    dive.setAttribute('class', "liste");
    dive.setAttribute('id', name);
    aContainer.innerHTML = name;
    solButon.innerHTML = "Sola Ekle";
    solsil.innerHTML = "Sil";
    solButon.onclick = () => aktar2(name, index);
    solsil.onclick = () => sil2(index);
    butonlarr.appendChild(solButon);
    butonlarr.appendChild(solsil);
    dive.appendChild(aContainer);
    dive.appendChild(butonlarr);
    b.appendChild(dive);
}
function addItem() {
    const isimler = document.getElementById("name");
    if (isimler.value == 0) {
        checkTextField(isimler.value);
    }
    else {
        namesarray.push(isimler.value);
        render();
    }
}
function addItem2() {
    const isimler = document.getElementById("name");
    if (isimler.value == 0) {
        checkTextField(isimler.value);
    }
    else {
        aktararray.push(isimler.value);
        render2();
    }
}
function filtrele() {
    const isimler = document.getElementById("name");
    if (isimler.value == 0) {
        checkfilter(isimler.value)
    }
    else {
        filarray = namesarray.filter((name) => name.includes(isimler.value));
        render();
    } 
}
function filtrele2() {
    const isimler = document.getElementById("name");
    if (isimler.value == 0) {
        checkfilter(isimler.value)
    }
    else {
        filarray2 = aktararray.filter((name) => name.includes(isimler.value));
        render2();
    }
}
const input = document.getElementById("name");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btnekle").click();
    }
});
const btn = document.getElementById('btnekle');
btn.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    const silme = document.getElementById('name');
    console.log(silme.value);
    silme.value = '';
});
const btn2 = document.getElementById('btnekle2');
btn2.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    const silme = document.getElementById('name');
    console.log(silme.value);
    silme.value = '';
});