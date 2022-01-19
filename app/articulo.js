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
        .then(data=> {
            let articulo = data[Number(param)-1]
            let detalle = document.querySelector(".grid");
            if(articulo.template == "largo"){
                detalle.innerHTML += `
                <div class="entrada">
                    <img  src="../../${articulo.img}" alt="">
                    <div class="text">
                        <h1>${articulo.titulo}</h1>
                        <a id="btnII" href="#">${articulo.seccion}</a>
                        <p id="autor">${articulo.nombres}</p>
                        <p id="fecha">${articulo.fecha}</p></div>
                </div>
                <div class="article">
                    <h4>${articulo.destacado}</h4>
                    <p>${articulo.text}</p>
                </div>`
            }else if (articulo.template =="corto"){
                detalle.innerHTML += `
                <div class="entrada">
                    <img  src="../../${articulo.img}" alt="">
                    <div class="text">
                        <h1>${articulo.titulo}</h1>
                        <a id="btnII" href="#">${articulo.seccion}</a>
                        <p id="autor">${articulo.nombres}</p>
                        <p id="fecha">${articulo.fecha}</p></div>
                </div>
                <div class="article-corto">
                    <h4>${articulo.destacado}</h4>
                    <p>${articulo.text}</p>
                </div>`                
            }
            });
        
    
}