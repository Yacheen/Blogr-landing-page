//what do i need to make this menu?

//onclick of the burger

const burgerButton = document.querySelector('.burger');
const list = document.querySelector('.navigation-links');
const listItems = document.querySelectorAll('.navigation-links ul li');
const productChildren = document.querySelector('.navigation-links li .Product-children');
const companyChildren = document.querySelector('.Company-children');
const connectChildren = document.querySelector('.Connect-children');
let itemNumber = 0;
//give each list item a class .list-items 
listItems.forEach(item => {
    itemNumber++
    item.classList.add('list-item');
    item.classList.add(`item-${itemNumber}`);
});


//event listeners for burger and inside burger menu
burgerButton.addEventListener('click', () => {
    //when they tap/click the button, dropdown the menu 
    //give each list item a class .list-items 
    list.classList.toggle('list-items-active');
    

});
productChildren.addEventListener('click', () => {
    
    productChildren.classList.toggle('item-1-active');

});

companyChildren.addEventListener('click', () => {
    
    companyChildren.classList.toggle('item-2-active');

});

connectChildren.addEventListener('click', () => {
    
    connectChildren.classList.toggle('item-3-active');

});








