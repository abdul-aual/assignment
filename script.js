function handleSearch(){
    loadingAnimationToggle(true);
const searchQuery = document.getElementById('search-input');
const searchvalue = searchQuery.value;
loadphone(searchvalue);
};


function loadingAnimationToggle(isLoading) {
    const loaderAnimation = document.getElementById("loader-animation");
    const cardContainer = document.getElementById("card-section");

    if (isLoading) {
        loaderAnimation.classList.remove("hidden");
        cardContainer.classList.add("hidden"); 
    } else {
        loaderAnimation.classList.add("hidden");
        cardContainer.classList.remove("hidden"); 
    }
}


const loadphone=async(searchText)=>{
    const res =await fetch(
        `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    );
    const serverData = await res.json();
    displayPhone(serverData.data);
}

const displayPhone = (data) =>{
    const cardContainer = document.getElementById("card-section");
    cardContainer.innerHTML="";
      data.forEach(singlePhone =>{
        const productCard = document.createElement("div");
        productCard.classList.add("card");
        productCard.innerHTML=` <div class="card-image">
                    <img src=${singlePhone.image} alt="phone image">
                </div>
                <h3 class="card-title">${singlePhone.phone_name}</h3>
                <p class="card-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos maxime assumenda recusandae quod, possimus aperiam!</p>
                <div class="card-price">
                    <span>$</span>
                    <span class="card-item-price">999</span>
                </div>
                <div class="card-btn">
                    <button class="btn">
                        Show details
                        <span></span>
                      </button>
                </div>`;
                cardContainer.appendChild(productCard);
      });
      loadingAnimationToggle(false);
      
}