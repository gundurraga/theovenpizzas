//diseño final
//escribir textos
//future updates: pizza oven: bake your own pizza -night mode -multi language support

import data from "../TheOvenPizzasData.json" assert { type: "json" };

const orderData = data.sort((a, b) => a.rarity_rank - b.rarity_rank);

const data100 = orderData.slice(0, 100);

function pizzaTemplate(item) {
  return `
  <div class="cell">
    <div class="rank_header">
      <div class="rarity_rank">
        <div>Rarity</div> 
        <div>#${item.rarity_rank}</div>
      </div>
      <div class="rarity_score">
        <div>Score</div> 
        <div>${item.rarity_score.toFixed(1)}</div>
      </div>
    </div>
    <img src="${item.img_url}=w256"></img>
    <div class="edition">Oven Pizza #${item.id}</div>
    <div class="trait">
      <div class="trait-name">
        <div>Crust</div>
        <div class="crust">${item.crust}</div>
      </div>
      <div class="crust_score">+${item.r_crust_score.toFixed(1)}</div>
    </div>
    <div class="trait">
      <div class="trait-name">
        <div>Background</div>
        <div class="background">${item.background}</div>
      </div>
      <div class="background_score">+${item.r_background_score.toFixed(1)}</div>
    </div>
    <div class="trait">
      <div class="trait-name">
        <div>Plate</div>
        <div class="plate">${item.plate}</div>
      </div>
      <div class="plate_score">+${item.r_plate_score.toFixed(1)}</div>
    </div>
    ${
      item.topping1
        ? `
      <div class="trait">
        <div class="trait-name">
          <div>Topping</div>
          <div class="topping1">${item.topping1}</div>
        </div>
        <div class="topping1_score">+${item.r_topping1_score.toFixed(1)}</div>
      </div>
      `
        : ""
    }
    ${
      item.topping2
        ? `
      <div class="trait">
        <div class="trait-name">
          <div>Topping</div>
          <div class="topping2">${item.topping2}</div>
        </div>
        <div class="topping2_score">+${item.r_topping2_score.toFixed(1)}</div>
      </div>
      `
        : ""
    }
    ${
      item.topping3
        ? `
      <div class="trait">
        <div class="trait-name">
          <div>Topping</div>
          <div class="topping3">${item.topping3}</div>
        </div>
        <div class="topping3_score">+${item.r_topping3_score.toFixed(1)}</div>
      </div>
      `
        : ""
    }
    <div class="trait">
    <div class="trait-name">
      <div>Pizza Type</div>
      <div class="all_toppings">${item.all_toppings}</div>
    </div>
    <div class="all_toppings_score">+${item.r_combined_toppings_score.toFixed(
      1
    )}</div>
  </div>
    <div class="trait">
      <div class="trait-name">
        <div>Toppings qty</div>
        <div class="topping_qty">${item.topping_qty}</div>
      </div>
      <div class="topping_qty_score">+${item.r_topping_qty_score.toFixed(
        1
      )}</div>
    </div>
    <div class="trait">
      <div class="opensea-link">
      <a href=${item.opensea_url}>View on Opensea</a>
      </div>
    </div>
  </div>
  `;
}

document.querySelector(".rarity").innerHTML = `
${data100.map(pizzaTemplate).join("")}
`;
