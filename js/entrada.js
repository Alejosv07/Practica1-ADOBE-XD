const main = document.getElementById("main");


const init = ()=>{
    const url = window.location.search;
    if(url.length == 0){
        main.innerHTML = '<h2 style="text-align: center;">Nada que mostrar</h2>';
    }else{
        const imgRuta = url.substring(url.indexOf("?img="),url.indexOf("?title=")).replace("?img=","");
        const title = url.substring(url.indexOf("?title="),url.indexOf("?texto=")).replace("?title=","").replace(/%20/g," ");
        const texto = url.substring(url.indexOf("?texto=")).replace("?texto=","").replace(/%20/g," ");
        
        if(imgRuta.length==0 || title.length==0 || texto.length==0){
            main.innerHTML = '<h2 style="text-align: center;">Parametros incorrectos</h2>';
        }else{
            main.innerHTML = `<img src="${imgRuta}" class="img  img--main">
            <h2 class="title--main">
                ${title}
            </h2>
            <p class="text text--main">
                ${texto}
            </p>`;
        }
    }
}

init();