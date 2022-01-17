let portada = document.querySelector(`.portada`);

fetch(`assets/data/articulos.json`)
	.then (response => response.json())
	.then (data => {
        data.forEach(user=>{
            portada.innerHTML +=`
            <img src="${user.img}" alt=""> 
            <h1>${user.titulo}</h1>
            <h4></h4>`;
        });
    })

