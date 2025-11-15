//Completed
async function loadData() {
    let data;
   try {
        const res =await fetch('../schema/menu.json'); 
        data = await res.json();
    } catch(error){
        console.log("Error", error.message);
    }

// console.log(data);

const array = data.map((value, index) => {
     const str = `<div class='Menu-card' onclick="window.location.href='order.html'">
    <div class='Menu-card_image'>
        <img src='${value.image}' alt='${"pizzas img"}'>
        <h2>ITEMS AT $${value.price}</h2>
    </div>

    <div class='Menu-card_body'>
        <div class='Menu-card_title'>
            <h2>
                <svg width='24' height='24' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='15' cy='15' r='15' fill='#FEBC2F'/>
                    <path d='M15.0001 20.8252L8.67922 24.5454L10.0909 17.0749L4.77274 11.9038L11.966 11.007L15.0001 4.09082L18.034 11.007L25.2273 11.9038L19.9092 17.0749L21.3209 24.5454L15.0001 20.8252Z' fill='white'/>
                </svg>
                ${value.rating} <span>•${value.delivery_time} mins</span>
            </h2>

            <div class='Menu-card_subtitles'>${value.item}</div>
            <div class='Menu-card_subtitles'>${value.location}</div>

        </div>
    </div>
</div>
`;
    return str;
})
           

// store the menu-card-container
    const Container = document.querySelector('.Menu-carousel');
    Container.innerHTML = array.join('');
}

loadData();


