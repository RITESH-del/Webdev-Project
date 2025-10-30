async function loadData() {
    let data;
   try {
        const res = await fetch('../schema/reviews.json'); 
        data = await res.json();
    } catch(error){
        console.log("Error", error.message);
    }
    console.log(data);


document.querySelector(".reviews-count").innerHTML=`${data.length}+ ratings • ${60}+ public reviews`



// review Container data
    const str1 = `<div class="overall-rating slide">
                        <div class="rating-number">4.8</div>
                        <div class="rating-details">
                            <div>⭐⭐⭐⭐⭐</div>
                            <div>${data.length}+ ratings</div>
                        </div>
                    </div>`

    const array = data.map((value, index) => {
        const str = `<div class="review-card slide">
                        <div class="review-header">
                            <div class="reviewer-avatar" style="background: #4A90E2;">${value.name.substring(0,1)}</div>
                            <div class="reviewer-info">
                                <h4>${value.name} ›</h4>
                                <p>${value.contributions} contributions</p>
                            </div>
                        </div>
                        <div class="review-rating">
                            <span class="stars">${value.star}</span>
                            <span>${value.date} • order</span>
                        </div>
                        <p class="review-text">
                        ${value.description}
                        </p>
                    </div>`;
        return str;
    });

    const reviewContainer = document.querySelector(".reviews-container");
    reviewContainer.innerHTML = str1 + array.join('');
}

loadData();