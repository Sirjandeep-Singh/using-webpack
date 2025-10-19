const create = function(){
    let contentdiv = document.getElementById('content');
    let menucard = document.createElement('div');
    menucard.classList.add('card');
    menucard.style.fontSize = "20px";
    menucard.style.width = "50%";
    menucard.style.padding = "20px";
    menucard.style.lineHeight = "28px";
    menucard.style.textAlign = "center";
    menucard.innerHTML = `<h1>About Us</h1>
    <p>
        Welcome to our restaurant, where passion meets flavor. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aenean pulvinar, justo sed egestas luctus, tellus orci congue augue, 
        ac malesuada ipsum sapien sed odio. Vivamus eget eros ac elit 
        ultricies interdum. Fusce feugiat dignissim ex, vel tincidunt 
        libero interdum at. 
    </p>
    <p>
        Ut placerat, justo non dignissim porttitor, lorem lectus volutpat sem, 
        nec tincidunt libero mauris vel nunc. Sed ut perspiciatis unde omnis iste natus error 
        sit voluptatem accusantium doloremque laudantium. 
        We believe in serving fresh ingredients, warm smiles, and unforgettable experiences.
    </p>
    <address>Contact Us <br>
    Address: 123 Lorem Street, Ipsum City, Dolor State, 456789<br>
    Contact Number: +91 98765 43210<br>
    Contact Mail: contact@restaurantlorem.com<br>
    Timings: Mon - Sun: 10:00 AM - 11:00 PM
    </address>
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