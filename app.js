const submitButton = document.getElementById('detail-submit-btn');

submitButton.addEventListener('click', function(){
  const buyerDetailsInput = document.getElementById('buyer-details-input');
  const buyerInfo = document.getElementById('buyer-info');
   buyerDetailsInput.value =buyerInfo.innerText ;
   buyerDetailsInput.value = "";

})

const addButton = document.getElementById('add-details-btn');
addButton.addEventListener('click', function(){
  const infoTable =document.getElementById ('info-table');

  const itemName = document.getElementById('item-name-input');
  const itemPrice = document.getElementById('item-price-input');
  const itemQuantity = document.getElementById('item-quantity-input');


  const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);
  const tr = document.createElement ('tr');
  const th = document.createElement ('th');
  const td1 = document.createElement ('td');
  const td2 = document.createElement ('td');
  const td3 = document.createElement ('td');

  td3.classList.add('item-total');
  th.innerText = itemName.value;
   td1.innerText = itemPrice.value;
   td2.innerText = itemQuantity.value;
   td3.innerText = totalPrice;
   console.log('-------------', totalPrice);
  //  td3.innerText =
   
  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  infoTable.appendChild(tr);
  totalCalculation();

  itemName.value ='';
  itemPrice.value ='';
  itemQuantity.value ='';

})


 function totalCalculation(){
const subTotal= calculateSubTotal();
  const subTotalTodisplay = document.getElementById('sub-total');
 subTotalTodisplay.innerText =subTotal;
 const tax = document.getElementById('tax');
 const taxPrice = subTotal * .2;
tax.innerText =taxPrice.toFixed(2);
const grandTotal = document.getElementById('grand-total');
const grandTotal2 = document.getElementById('grand-total-2');
const granTotalPrice = subTotal + taxPrice;
grandTotal.innerText =granTotalPrice;
grandTotal2.innerText = granTotalPrice;



 }


function calculateSubTotal(){
  let subTotal =0;
  const cost = document.getElementsByClassName('item-total');
 
  for (let i = 0; i < cost.length; i++) {
    const element = cost[i];
  
  const price = parseInt(element.innerText);
    subTotal = subTotal + price;
  }
  return subTotal;
}


  




