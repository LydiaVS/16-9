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
            let detalle = document.querySelector(".grid-article");
            if(articulo.template == "largo"){
                detalle.innerHTML += `
                <div class="entrada-largo">
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
                <div class="entrada-corto">
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
            }else if (articulo.template =="debate"){
                detalle.innerHTML+= `
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
                <h3>${articulo.text[0].persona1}</h3>
                <p>${articulo.text[0].text1}</p>
                <img src="../../${articulo.text[0].img1}" alt="">
                <h3>${articulo.text[0].persona2}</h3>
                <p>${articulo.text[0].text2}</p>
                <img src="../../${articulo.text[0].img2}" alt="">
                <h3>${articulo.text[0].persona1}</h3>
                <p>${articulo.text[0].text1}</p>

            </div>`
            }
            });
        
    
}