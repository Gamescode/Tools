fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cet'+
'hereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=inr&include_24hr_change=true').then(res => res.json()).then(
    json => {
        const container = document.querySelector(".container");
        const coins = Object.getOwnPropertyNames(json);

        for(let coin of coins){
            const coinInfo = json[`${coin}`];
            const price = coinInfo.inr;
            const change = coinInfo.inr_24h_change.toFixed(5);

            container.innerHTML += `
                <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                    <div class="coin-logo">
                        <img src="images/${coin}.png">
                    </div>
                    <div class="coin-name">
                        <h3>${coin}</h3>
                        <span>/INR</span>
                    </div>
                    <div class="coin-price">
                        <span class="price">&#8377;${price}</span>
                        <span class="change">&#8377;${change}</span>
                    </div>
                </div>
            `;
        }
    }
);