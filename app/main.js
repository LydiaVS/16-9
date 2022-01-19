let portada = document.querySelector(`.portada`);
let entradilla = document.querySelector(`.entradilla`);
let largo = document.querySelector(`.articulo-largo`);
let corto = document.querySelector(`.articulo-corto`);
let articulos = document.querySelector(`.articulos`);

fetch(`assets/data/articulos.json`)
	.then (response => response.json())
	.then (data => {
        data.forEach(articulo=>{
            if (articulo.id == 1){
                portada.innerHTML +=`
                <img src="${articulo.img}" alt=""> 
                <a id="btnII" href="#">${articulo.seccion}</a>
                <a href="assets/data/articulo.html"><h1>${articulo.titulo}</h1></a>
              `; 
            } 
        });
    })
fetch(`assets/data/articulos.json`)
	.then (response => response.json())
	.then (data => {
        data.forEach(articulo=>{
            if (articulo.id == 3){
                largo.innerHTML +=`
                <img src="${articulo.img}" alt=""> 
                <div id="largo-text">
                <a href="assets/data/articulo.html"><h2>${articulo.titulo}</h2></a>
                <p id="autor">${articulo.nombres}</p>
                <p id="fecha">${articulo.fecha}</p>
                <h4>${articulo.destacado}</h4> </div>`
            } 
        });
    })
fetch(`assets/data/articulos.json`)
	.then (response => response.json())
	.then (data => {
        data.forEach(articulo=>{
            if (articulo.id == 1){
                entradilla.innerHTML +=`
                <div class="entradilla-texto">
                <p id="autor">${articulo.nombres}</p>
                <p id="fecha">${articulo.fecha}</p>
                </div>
				<h4 >${articulo.destacado}</h4>
                
                `
            } 
        });
    })
fetch(`assets/data/articulos.json`)
	.then (response => response.json())
	.then (data => {
        data.forEach(articulo=>{
            if (articulo.id == 2){
                corto.innerHTML +=`
                <img src="${articulo.img}" alt="">
                <div class="corto-texto">
                <a href="assets/data/articulo.html"><h2>${articulo.titulo}</h2></a>
                <p id="autor">${articulo.nombres}</p>
                <p id="fecha">${articulo.fecha}</p>
                <h4>${articulo.destacado}</h4></div>
                <img class="publi" src="assets/images/Cinesa.jpg" alt="">`
            } 
        });
    })
fetch(`assets/data/articulos.json`)
	.then (response => response.json())
	.then (data => {
        data.forEach(articulo=>{
            if (articulo.id == 1){
                articulos.innerHTML +=`
                <div class="art-uno">
                <img src="${articulo.img}" alt="">
                <a href="assets/data/articulo.html"><h5>${articulo.titulo}</h5></a>
                <p id="autor">${articulo.nombres}</p>
                <p id="fecha">${articulo.fecha}</p>
                </div>
                </div>`
            } 
        });
    })
fetch(`assets/data/articulos.json`)
	.then (response => response.json())
	.then (data => {
        data.forEach(articulo=>{
            if (articulo.id == 2){
                articulos.innerHTML +=`
                <div class="art-dos">
                <img src="${articulo.img}" alt="">
                <a href="assets/data/articulo.html"><h5>${articulo.titulo}</h5></a>
                <p id="autor">${articulo.nombres}</p>
                <p id="fecha">${articulo.fecha}</p>
                </div>
                </div>`
            } 
        });
    })
fetch(`assets/data/articulos.json`)
	.then (response => response.json())
	.then (data => {
        data.forEach(articulo=>{
            if (articulo.id == 3){
                articulos.innerHTML +=`
                <div class="art-tres">
                <img src="${articulo.img}" alt="">
                <a href="assets/data/articulo.html"><h5>${articulo.titulo}</h5></a>
                <p id="autor">${articulo.nombres}</p>
                <p id="fecha">${articulo.fecha}</p>
                </div>
                </div>`
            } 
        });
    })