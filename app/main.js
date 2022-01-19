window.onload = () => {
    let portada = document.querySelector(`.portada`);
    let entradilla = document.querySelector(`.entradilla`);
    let largo = document.querySelector(`.articulo-largo`);
    let corto = document.querySelector(`.articulo-corto`);
    let articulos = document.querySelector(`.articulos`);

    let mostrarDetalle = (e) =>{
        window.open(`../assets/data/articulo.html?id=${e.currentTarget.id}`)
    }

    fetch(`assets/data/articulos.json`)
        .then (response => response.json())
        .then (data => {
            data.forEach(articulo=>{
                if (articulo.id == 1){
                    portada.innerHTML +=`
                    <div class="user">
                    <img  src="${articulo.img}" alt=""> 
                    <a id="btnII" href="#">${articulo.seccion}</a>
                    <h1>${articulo.titulo}</h1>
                    </div>
                    
                `;
                entradilla.innerHTML +=`
                    <div class="entradilla-texto">
                    <p id="autor">${articulo.nombres}</p>
                    <p id="fecha">${articulo.fecha}</p>
                    </div>
                    <h4 >${articulo.destacado}</h4>`;
                articulos.innerHTML +=`
                    <div class="art-uno">
                    <img src="${articulo.img}" alt="">
                    <h5 class="user">${articulo.titulo}</h5>
                    <p id="autor">${articulo.nombres}</p>
                    <p id="fecha">${articulo.fecha}</p>
                    </div>
                    </div>`
                } else{
                    if(articulo.id == 2){
                        corto.innerHTML +=`
                        <img src="${articulo.img}" alt="">
                        <div class="corto-texto">
                        <h2 class="user">${articulo.titulo}</h2>
                        <p id="autor">${articulo.nombres}</p>
                        <p id="fecha">${articulo.fecha}</p>
                        <h4>${articulo.destacado}</h4></div>
                        <img class="publi" src="assets/images/Cinesa.jpg" alt="">`
                        articulos.innerHTML +=`
                        <div class="art-dos">
                        <img src="${articulo.img}" alt="">
                        <h5 class="user">${articulo.titulo}</h5>
                        <p id="autor">${articulo.nombres}</p>
                        <p id="fecha">${articulo.fecha}</p>
                        </div>
                        </div>`;

                    }else if (articulo.id == 3){
                        largo.innerHTML +=`
                        <img src="${articulo.img}" alt=""> 
                        <div id="largo-text">
                        <h2 class="user">${articulo.titulo}</h2>
                        <p id="autor">${articulo.nombres}</p>
                        <p id="fecha">${articulo.fecha}</p>
                        <h4>${articulo.destacado}</h4> </div>`;
                        articulos.innerHTML +=`
                        <div class="art-tres">
                        <img src="${articulo.img}" alt="">
                        <h5 class="user">${articulo.titulo}</h5>
                        <p id="autor">${articulo.nombres}</p>
                        <p id="fecha">${articulo.fecha}</p>
                        </div>
                        </div>`;

                    }
                     
                    
                }
            });
        })

        .then(() =>{
            let users = document.querySelectorAll(".user");
            users.forEach((articulo) =>{
                articulo.addEventListener("click", mostrarDetalle,true)
                })
            });
}
