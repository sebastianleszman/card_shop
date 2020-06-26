const priceGroup = document.querySelectorAll('.price__group');
const saleElement = document.querySelectorAll('.sale');

for (i = 0; i < priceGroup.length; i++){
  if(priceGroup[i].children.length === 2){
    saleElement[i].classList.remove('dis-none')
  }
}