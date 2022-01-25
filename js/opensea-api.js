async function getStats() {
  const url = "https://api.opensea.io/api/v1/collection/theovenpizzas";
  let response = await axios.get(url);
  return response.data.collection.stats;
}

let stats = await getStats();

let {
  floor_price,
  num_owners,
  thirty_day_change,
  thirty_day_sales,
  thirty_day_volume,
  total_volume,
} = stats;

stats = [
  ["owners", "num_owners", num_owners, "NUMBER"],
  ["floor price", "floor_price", floor_price, "ETH"],
  ["volume traded", "total_volume", total_volume, "ETH"],
  ["30 day sales", "thirty_day_sales", thirty_day_sales, "NUMBER"],
  ["30 day change", "thirty_day_change", thirty_day_change, "PERCENTAGE"],
  ["30 day volume", "thirty_day_volume", thirty_day_volume, "ETH"],
];

function stat(stat) {
  return `
  <div onclick="window.open('https://opensea.io/collection/theovenpizzas?tab=activity','mywindow');" 
  style="cursor: pointer;" class="stat" 
  id="${stat[1]}">
    <div class="figures">
    ${stat[3] === "NUMBER" ? stat[2] : ""}
    ${
      stat[3] === "ETH"
        ? `<img class="eth" src="images/eth.svg"> ${stat[2].toFixed(4)}`
        : ""
    }
    ${stat[3] === "PERCENTAGE" ? `${Math.round(stat[2] * 100)}%` : ""}
    </div>
    <div class="text">${stat[0]}</div>
  </div>
  `;
}

document.querySelector(".stats").innerHTML = `${stats.map(stat).join("")}`;
