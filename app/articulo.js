let obtenerParam = (url) => {
    let urlParam = String(url.match(/\?+.+/));
    urlParam = urlParam.replace("?id=", "");
    return urlParam; 
}
let param = obtenerParam(document.URL);
console.log(param);
fetch(`../assets/data/articulos.json`)
    .then(res => res.json())
    .then(data=>{
        let user = data[Number(param)]
        let detalle = document.querySelector(".entrada");
        detalle.innerHTML += `<img src="${user.img}">`
        
    });
