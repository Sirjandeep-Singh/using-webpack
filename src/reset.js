let reset = function(){
    let contentdiv = document.getElementById('content');
    // let parent = contentdiv.parentNode;
    // contentdiv.remove();
    // let newContentdiv = document.createElement('div');
    // newContentdiv.id = 'content';
    // parent.appendChild(newContentdiv);
    contentdiv.removeAttribute('style');
    contentdiv.classList.forEach(cls => contentdiv.classList.remove(cls));
    contentdiv.innerHTML = "";
}
export default reset;