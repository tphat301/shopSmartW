// library slick
$(document).ready(function(){
    $('.wrapper__deal-product-list').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        adaptiveHeight:false,
        autoplay: true,
        
        pauseOnFocus: true,
        prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='bx bx-chevron-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='bx bx-chevron-right'></i></button>",
    });
  });

// wrapper img banner
$(document).ready(function(){
    $('.wrapper__slide-banner').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
  });
 

// MODAL
var btnModalClose = document.querySelector('.header__modal-close');
var headerModalAddress = document.querySelector('.header__modal-address');
var headerNavInfoAddress = document.querySelector('.header__nav-info-address');
var modalContainer = document.querySelector('.header__modal-container');
headerNavInfoAddress.addEventListener('click', function(e) {
    headerModalAddress.classList.add('open');
});
btnModalClose.addEventListener('click', function(e) {
    headerModalAddress.classList.remove('open');
});
headerModalAddress.addEventListener('click', function(e) {
    headerModalAddress.classList.remove('open');
});

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
});

//JAVASCRIPT BTN FASHION SHOP 
var fashionProductList1 = document.querySelector('.wrapper__fashion-product-list1');
var fashionProductList2 = document.querySelector('.wrapper__fashion-product-list2');
var fashionProductList3 = document.querySelector('.wrapper__fashion-product-list3');
var fashionProductList4 = document.querySelector('.wrapper__fashion-product-list4');
var fashionProductList5 = document.querySelector('.wrapper__fashion-product-list5');
var fashionProductList6 = document.querySelector('.wrapper__fashion-product-list6');
var fashionProductList7 = document.querySelector('.wrapper__fashion-product-list7');
var btnFashion1 = document.querySelector('.wrapper__fashion-spliter-outstanding1');
var btnFashion2 = document.querySelector('.wrapper__fashion-spliter-outstanding2');
var btnFashion3 = document.querySelector('.wrapper__fashion-spliter-outstanding3');
var btnFashion4 = document.querySelector('.wrapper__fashion-spliter-outstanding4');
var btnFashion5 = document.querySelector('.wrapper__fashion-spliter-outstanding5');
var btnFashion6 = document.querySelector('.wrapper__fashion-spliter-outstanding6');
var btnFashion7 = document.querySelector('.wrapper__fashion-spliter-outstanding7');

btnFashion1.addEventListener('click', e => {
    fashionProductList1.style.display = 'flex';
    fashionProductList2.style.display = 'none';
    fashionProductList3.style.display = 'none';
    fashionProductList4.style.display = 'none';
    fashionProductList5.style.display = 'none';
    fashionProductList6.style.display = 'none';
    fashionProductList7.style.display = 'none';
});
btnFashion2.addEventListener('click', e => {
    fashionProductList1.style.display = 'none';
    fashionProductList2.style.display = 'flex';
    fashionProductList3.style.display = 'none';
    fashionProductList4.style.display = 'none';
    fashionProductList5.style.display = 'none';
    fashionProductList6.style.display = 'none';
    fashionProductList7.style.display = 'none';
});
btnFashion3.addEventListener('click', function(e) {
    fashionProductList1.style.display = 'none';
    fashionProductList2.style.display = 'none';
    fashionProductList3.style.display = 'flex';
    fashionProductList4.style.display = 'none';
    fashionProductList5.style.display = 'none';
    fashionProductList6.style.display = 'none';
    fashionProductList7.style.display = 'none';
});
btnFashion4.addEventListener('click', function(e) {
    fashionProductList1.style.display = 'none';
    fashionProductList2.style.display = 'none';
    fashionProductList3.style.display = 'none';
    fashionProductList4.style.display = 'flex';
    fashionProductList5.style.display = 'none';
    fashionProductList6.style.display = 'none';
    fashionProductList7.style.display = 'none';
});
btnFashion5.addEventListener('click', function(e) {
    fashionProductList1.style.display = 'none';
    fashionProductList2.style.display = 'none';
    fashionProductList3.style.display = 'none';
    fashionProductList4.style.display = 'none';
    fashionProductList5.style.display = 'flex';
    fashionProductList6.style.display = 'none';
    fashionProductList7.style.display = 'none';
});
btnFashion6.addEventListener('click', function(e) {
    fashionProductList1.style.display = 'none';
    fashionProductList2.style.display = 'none';
    fashionProductList3.style.display = 'none';
    fashionProductList4.style.display = 'none';
    fashionProductList5.style.display = 'none';
    fashionProductList6.style.display = 'flex';
    fashionProductList7.style.display = 'none';
});
btnFashion7.addEventListener('click', function(e) {
    fashionProductList1.style.display = 'none';
    fashionProductList2.style.display = 'none';
    fashionProductList3.style.display = 'none';
    fashionProductList4.style.display = 'none';
    fashionProductList5.style.display = 'none';
    fashionProductList6.style.display = 'none';
    fashionProductList7.style.display = 'flex';
});

//JAVASCRIPT Btn MEDIA SHOP
var mediaProductList1 = document.querySelector('.wrapper__media-product-list1');
var mediaProductList2 = document.querySelector('.wrapper__media-product-list2');
var mediaProductList3 = document.querySelector('.wrapper__media-product-list3');
var mediaProductList4 = document.querySelector('.wrapper__media-product-list4');
var mediaProductList5 = document.querySelector('.wrapper__media-product-list5');

var btnFashion1 = document.querySelector('.wrapper__media-spliter-outstanding1');
var btnFashion2 = document.querySelector('.wrapper__media-spliter-outstanding2'); 
var btnFashion3 = document.querySelector('.wrapper__media-spliter-outstanding3'); 
var btnFashion4 = document.querySelector('.wrapper__media-spliter-outstanding4'); 
var btnFashion5 = document.querySelector('.wrapper__media-spliter-outstanding5'); 

btnFashion1.addEventListener('click', e => {
    mediaProductList1.style.display = 'flex'
    mediaProductList2.style.display = 'none'
    mediaProductList3.style.display = 'none'
    mediaProductList4.style.display = 'none'
    mediaProductList5.style.display = 'none'
});

btnFashion2.addEventListener('click', e => {
    mediaProductList1.style.display = 'none'
    mediaProductList2.style.display = 'flex'
    mediaProductList3.style.display = 'none'
    mediaProductList4.style.display = 'none'
    mediaProductList5.style.display = 'none'
});

btnFashion3.addEventListener('click', e => {
    mediaProductList1.style.display = 'none'
    mediaProductList2.style.display = 'none'
    mediaProductList3.style.display = 'flex'
    mediaProductList4.style.display = 'none'
    mediaProductList5.style.display = 'none'
});

btnFashion4.addEventListener('click', e => {
    mediaProductList1.style.display = 'none'
    mediaProductList2.style.display = 'none'
    mediaProductList3.style.display = 'none'
    mediaProductList4.style.display = 'flex'
    mediaProductList5.style.display = 'none'
});

btnFashion5.addEventListener('click', e => {
    mediaProductList1.style.display = 'none'
    mediaProductList2.style.display = 'none'
    mediaProductList3.style.display = 'none'
    mediaProductList4.style.display = 'none'
    mediaProductList5.style.display = 'flex'
});

//JAVASCRIPT Btn Sport SHOP
var sportProductList1 = document.querySelector('.wrapper__sport-product-list1');
var sportProductList2 = document.querySelector('.wrapper__sport-product-list2');
var sportProductList3 = document.querySelector('.wrapper__sport-product-list3');
var sportProductList4 = document.querySelector('.wrapper__sport-product-list4');
var sportProductList5 = document.querySelector('.wrapper__sport-product-list5');
var sportProductList6 = document.querySelector('.wrapper__sport-product-list6');
var sportProductList7 = document.querySelector('.wrapper__sport-product-list7');

var btnSport1 = document.querySelector('.wrapper__sport-spliter-outstanding1');
var btnSport2 = document.querySelector('.wrapper__sport-spliter-outstanding2'); 
var btnSport3 = document.querySelector('.wrapper__sport-spliter-outstanding3'); 
var btnSport4 = document.querySelector('.wrapper__sport-spliter-outstanding4'); 
var btnSport5 = document.querySelector('.wrapper__sport-spliter-outstanding5'); 
var btnSport6 = document.querySelector('.wrapper__sport-spliter-outstanding6'); 
var btnSport7 = document.querySelector('.wrapper__sport-spliter-outstanding7'); 

btnSport1.addEventListener('click', e => {
    sportProductList1.style.display = 'flex'
    sportProductList2.style.display = 'none'
    sportProductList3.style.display = 'none'
    sportProductList4.style.display = 'none'
    sportProductList5.style.display = 'none'
    sportProductList6.style.display = 'none'
    sportProductList7.style.display = 'none'
});

btnSport2.addEventListener('click', e => {
    sportProductList1.style.display = 'none'
    sportProductList2.style.display = 'flex'
    sportProductList3.style.display = 'none'
    sportProductList4.style.display = 'none'
    sportProductList5.style.display = 'none'
    sportProductList6.style.display = 'none'
    sportProductList7.style.display = 'none'
});

btnSport3.addEventListener('click', e => {
    sportProductList1.style.display = 'none'
    sportProductList2.style.display = 'none'
    sportProductList3.style.display = 'flex'
    sportProductList4.style.display = 'none'
    sportProductList5.style.display = 'none'
    sportProductList6.style.display = 'none'
    sportProductList7.style.display = 'none'
});

btnSport4.addEventListener('click', e => {
    sportProductList1.style.display = 'none'
    sportProductList2.style.display = 'none'
    sportProductList3.style.display = 'none'
    sportProductList4.style.display = 'flex'
    sportProductList5.style.display = 'none'
    sportProductList6.style.display = 'none'
    sportProductList7.style.display = 'none'
});

btnSport5.addEventListener('click', e => {
    sportProductList1.style.display = 'none'
    sportProductList2.style.display = 'none'
    sportProductList3.style.display = 'none'
    sportProductList4.style.display = 'none'
    sportProductList5.style.display = 'flex'
    sportProductList6.style.display = 'none'
    sportProductList7.style.display = 'none'
});

btnSport6.addEventListener('click', e => {
    sportProductList1.style.display = 'none'
    sportProductList2.style.display = 'none'
    sportProductList3.style.display = 'none'
    sportProductList4.style.display = 'none'
    sportProductList5.style.display = 'none'
    sportProductList6.style.display = 'flex'
    sportProductList7.style.display = 'none'
});

btnSport7.addEventListener('click', e => {
    sportProductList1.style.display = 'none'
    sportProductList2.style.display = 'none'
    sportProductList3.style.display = 'none'
    sportProductList4.style.display = 'none'
    sportProductList5.style.display = 'none'
    sportProductList6.style.display = 'none'
    sportProductList7.style.display = 'flex'
});

// BTN JS Other Product
var otherProductList1 = document.querySelector('.wrapper__other-product-list1');
var otherProductList2 = document.querySelector('.wrapper__other-product-list2');
var otherProductList3 = document.querySelector('.wrapper__other-product-list3');
var otherProductList4 = document.querySelector('.wrapper__other-product-list4');
var otherProductList5 = document.querySelector('.wrapper__other-product-list5');
var otherProductList6 = document.querySelector('.wrapper__other-product-list6');

var btnOther1 = document.querySelector('.wrapper__other-spliter-outstanding1');
var btnOther2 = document.querySelector('.wrapper__other-spliter-outstanding2'); 
var btnOther3 = document.querySelector('.wrapper__other-spliter-outstanding3'); 
var btnOther4 = document.querySelector('.wrapper__other-spliter-outstanding4'); 
var btnOther5 = document.querySelector('.wrapper__other-spliter-outstanding5'); 
var btnOther6 = document.querySelector('.wrapper__other-spliter-outstanding6');

btnOther1.addEventListener('click', e => {
    otherProductList1.style.display = 'flex'
    otherProductList2.style.display = 'none'
    otherProductList3.style.display = 'none'
    otherProductList4.style.display = 'none'
    otherProductList5.style.display = 'none'
    otherProductList6.style.display = 'none'
});

btnOther2.addEventListener('click', e => {
    otherProductList1.style.display = 'none'
    otherProductList2.style.display = 'flex'
    otherProductList3.style.display = 'none'
    otherProductList4.style.display = 'none'
    otherProductList5.style.display = 'none'
    otherProductList6.style.display = 'none'
});

btnOther3.addEventListener('click', e => {
    otherProductList1.style.display = 'none'
    otherProductList2.style.display = 'none'
    otherProductList3.style.display = 'flex'
    otherProductList4.style.display = 'none'
    otherProductList5.style.display = 'none'
    otherProductList6.style.display = 'none'
});

btnOther4.addEventListener('click', e => {
    otherProductList1.style.display = 'none'
    otherProductList2.style.display = 'none'
    otherProductList3.style.display = 'none'
    otherProductList4.style.display = 'flex'
    otherProductList5.style.display = 'none'
    otherProductList6.style.display = 'none'
});

btnOther5.addEventListener('click', e => {
    otherProductList1.style.display = 'none'
    otherProductList2.style.display = 'none'
    otherProductList3.style.display = 'none'
    otherProductList4.style.display = 'none'
    otherProductList5.style.display = 'flex'
    otherProductList6.style.display = 'none'
});

btnOther6.addEventListener('click', e => {
    otherProductList1.style.display = 'none'
    otherProductList2.style.display = 'none'
    otherProductList3.style.display = 'none'
    otherProductList4.style.display = 'none'
    otherProductList5.style.display = 'none'
    otherProductList6.style.display = 'flex'
});