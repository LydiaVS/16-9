window.onload = () => {
let obtenerParam = (url) => {
    let urlParam = String(url.match(/\?+.+/));
    urlParam = urlParam.replace("?id=", "");
    return urlParam; 
}
let param = obtenerParam(document.URL);
console.log(param);
fetch(`../data/articulos.json`)
    .then(res => res.json())
    .then(data=>{
        let user = data[Number(param)-1]
        let detalle = document.querySelector(".entrada");
        if(user.template == "largo"){
            detalle.innerHTML += `<img src="${user.img}">`}
        
    });
}