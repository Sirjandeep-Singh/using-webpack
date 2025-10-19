import myimage from "../images/images2.jpg";
const create = function(){
    //divs
    let landingdiv = document.createElement('div');
    let contentdiv = document.getElementById('content');
    let card1 = document.createElement('div');
    let card2 = document.createElement('div');
    let card3 = document.createElement('div');
    let card4 = document.createElement('div');
    card1.classList.add('card');
    card2.classList.add('card');
    card3.classList.add('card');
    card4.classList.add('card');
    contentdiv.classList.add('landingcontent');
    landingdiv.classList.add('landing');
    //all 4 Headings
    let heading1 = document.createElement('h1');
    heading1.textContent = "Fresh Ingredients";
    let heading2 = document.createElement('h1');
    heading2.textContent = "Authentic Flavors";
    let heading3 = document.createElement('h1');
    heading3.textContent = "Exceptional Service";
    let heading4 = document.createElement('h1');
    heading4.textContent = "Cozy Atmosphere";
    //all4 paragraphs and footer
    let para1 = document.createElement('p');
    para1.textContent = "Every dish begins with the best ingredients. We partner with trusted local farms and suppliers to bring you seasonal produce, tender meats, and the finest herbs and spices. Our commitment to freshness ensures every bite is flavorful, nutritious, and made with care.";
    let para2 = document.createElement('p');
    para2.textContent = "We believe great food tells a story. That's why our chefs stay true to traditional recipes, carefully blending flavors and techniques passed down through generations. Each plate is prepared with love, giving you a taste that's both comforting and unforgettable.";
    let para3 = document.createElement('p');
    para3.textContent = "Dining is more than just food — it's an experience. Our team is dedicated to making every guest feel at home with warm smiles, attentive service, and thoughtful details. From the moment you arrive, we make sure every experience is smooth, personal, and memorable.";
    let para4 = document.createElement('p');
    para4.textContent = "Step into a warm and inviting space designed for comfort and connection. Whether you're here for a family dinner, a romantic night out, or just a quick bite with friends, our ambiance makes every moment feel special. Relax, unwind, and savor the experience.";
    //image
    let image = document.createElement('img');
    image.src = myimage;
    image.style.height = "380px";
    // image.style.width = "650px";
    //structuring
    contentdiv.appendChild(image);
    contentdiv.appendChild(landingdiv);
    landingdiv.appendChild(card1);
    landingdiv.appendChild(card2);
    landingdiv.appendChild(card3);
    landingdiv.appendChild(card4);
    card1.appendChild(heading1);
    card1.appendChild(para1);
    card2.appendChild(heading2);
    card2.appendChild(para2);
    card3.appendChild(heading3);
    card3.appendChild(para3);
    card4.appendChild(heading4);
    card4.appendChild(para4);
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