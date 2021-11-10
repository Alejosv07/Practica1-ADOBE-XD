let cards = document.getElementById("cards");


cards.addEventListener("click",(e)=>{
    if(e.target.classList.contains("btnEntry")){
        const card = e.target.parentNode.parentNode;
        const imgCard = card.children.item(0).children.item(0).getAttribute("src");
        const titleCard = card.children.item(0).children.item(1).textContent;
        const texto = card.children.item(1).children.item(0).textContent;
        window.location = "entrada.html?img="+imgCard+"?title="+titleCard+"?texto="+texto;
    }
});