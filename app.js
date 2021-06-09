//what do i need to make this menu?

//onclick of the burger

const burgerButton = document.querySelector('.burger');
const list = document.querySelector('.navigation-links');
const listItems = document.querySelectorAll('.navigation-links ul li');
const productChildren = document.querySelector('.Product-children');
const companyChildren = document.querySelector('.Company-children');
const connectChildren = document.querySelector('.Connect-children');
const itemOne = document.querySelector('.navigation-links, .item-1');
const itemTwo = document.querySelector('.navigation-links, .item-2');
const itemThree = document.querySelector('.navigation-links, .item-3');
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
itemOne.addEventListener('click', () => {
    
    productChildren.classList.toggle('item-1-active');

});

itemTwo.addEventListener('click', () => {
    
    companyChildren.classList.toggle('item-2-active');

});

itemThree.addEventListener('click', () => {
    
    connectChildren.classList.toggle('item-3-active');

});








