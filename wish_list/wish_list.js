"use strick";
var detailsform = document.querySelector("#destination_detail_form");
detailsform.addEventListener('submit', (e)=>{
    e.preventDefault();
    const destName = e.target.elements['name'].value;
    const destLocation = e.target.elements['location'].value;
    const destPhoto = e.target.elements['photo'].value; 
    const destDescription = e.target.elements['describtion'].value;
    for (let i = 0; i < detailsform.length; i++) {
        detailsform.elements[i].value="";   
    }
    const wishListContainer = document.querySelector('#destination_container');
    if (wishListContainer.children.length ===0) {
        document.querySelector("#title").innerHTML = "My wish List";
        
    
    }
    newCard(destName,destLocation,destPhoto,destDescription);
    
})
function newCard(name,location,photourl,description) {
        const card = document.createElement('div');
        card.className='card';
        const img = document.createElement('img');
        img.setAttribute('alt',name);
        const constantImgUrl = "images/signpost.jpg";
        if(constantImgUrl.length===0){
            img.setAttribute('src', constantImgUrl);
        }else{img.setAttribute('src', photourl);}
        card.appendChild(img)
        const cardBody = document.createElement('div');
        cardBody.className='card-body';
        const cardTitle = document.createElement('h3');
        cardTitle.innerHTML = name;
        cardBody.appendChild(cardTitle);
        const carsubstitle = document.createElement('h4');
        carsubstitle.innerHTML = location;
        cardBody.appendChild(carsubstitle);
        if (description.length!==0) {
            const cardText = document.createElement('p');
            cardText.innerHTML = description;
            cardBody.appendChild(cardText);
        }
        const cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.innerHTML="remove";
        cardBody.appendChild(cardDeleteBtn);
        cardDeleteBtn.addEventListener('click',removeDestination);
        card.appendChild(cardBody);
        document.querySelector('#destination_container').appendChild(card);
    }
    function removeDestination(e){
        const card = e.target.parentElement.parentElement;
        card.remove();}