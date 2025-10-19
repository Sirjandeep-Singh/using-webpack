const create = function(){
    let contentdiv = document.getElementById('content');
    let menucard = document.createElement('div');
    menucard.classList.add('card');
    menucard.style.width = "40%";
    menucard.style.fontSize = "30px";
    menucard.style.textAlign = "justify";
    menucard.style.lineHeight = "50px";
    menucard.style.padding = "40px";
   menucard.innerHTML = `
  <div class="menu-item"><span>🍕 <strong>Pizza</strong></span><span>80 Rs</span></div>
  <div class="menu-item"><span>🍔 <strong>Burger</strong></span><span>40 Rs</span></div>
  <div class="menu-item"><span>🥪 <strong>Sandwich</strong></span><span>50 Rs</span></div>
  <div class="menu-item"><span>🌮 <strong>Tacos</strong></span><span>70 Rs</span></div>
  <div class="menu-item"><span>🍝 <strong>Pasta</strong></span><span>90 Rs</span></div>
  <div class="menu-item"><span>🥗 <strong>Salad</strong></span><span>60 Rs</span></div>
  <div class="menu-item"><span>🍗 <strong>Grilled Chicken</strong></span><span>150 Rs</span></div>
  <div class="menu-item"><span>🍛 <strong>Biryani</strong></span><span>120 Rs</span></div>
  <div class="menu-item"><span>🥘 <strong>Paneer Butter Masala</strong></span><span>130 Rs</span></div>
  <div class="menu-item"><span>🍟 <strong>French Fries</strong></span><span>40 Rs</span></div>
  <div class="menu-item"><span>🍹 <strong>Cold Drinks</strong></span><span>30 Rs</span></div>
  <div class="menu-item"><span>☕ <strong>Coffee</strong></span><span>40 Rs</span></div>
  <div class="menu-item"><span>🧁 <strong>Brownie</strong></span><span>60 Rs</span></div>
  <div class="menu-item"><span>🍨 <strong>Ice Cream</strong></span><span>50 Rs</span></div>
`;
    contentdiv.appendChild(menucard);
    contentdiv.classList.add('menucontent');
    //footer
    let footer = document.createElement('div');
    footer.classList.add('bar');
    footer.style.position = "fixed";
    footer.style.bottom = "0px";
    footer.style.color = "white";
    footer.textContent = "Copyright";
    footer.style.width = "100vw";
    //add
    contentdiv.appendChild(footer);
}
export default create;