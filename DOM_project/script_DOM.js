/*************** Setting initial quantities ****************/
let quantities = Array.from(document.querySelectorAll('.qte'))
for (let quantity of quantities){
    quantity.setAttribute('value',0)
}
/*************** Setting initial prices ****************/
var price= [];
var pu=[];
for (let i=1;i<=7;i++){
price[i]=0;
pu[i]=25;
}
pu[6]=250;
pu[7]=75;


let total_1=price[1]+price[2]+price[3]
document.querySelector('.price-1').innerHTML=0+' dt'
document.querySelector('.price-2').innerHTML=0+' dt'
document.querySelector('.price-3').innerHTML=0+' dt'
document.querySelector('.total_1').innerHTML=0+' dt'
let total_2=price[4]+price[5]
document.querySelector('.price-4').innerHTML=0+' dt'
document.querySelector('.price-5').innerHTML=0+' dt'
document.querySelector('.total_2').innerHTML=0+' dt'
let total_3=price[6]+price[7]
document.querySelector('.price-6').innerHTML=0+' dt'
document.querySelector('.price-7').innerHTML=0+' dt'
document.querySelector('.total_3').innerHTML=0+' dt'
let total=total_1+total_2+total_3
document.querySelector('.total').innerHTML=0 +' dt'


/*************** Total price ****************/

/*************** Shopping items ****************/

/************ + button *************/
for(let i=1;i<=3;i++){
  document.querySelector(`.item-${i} > .plus-btn`)
.addEventListener("click", function(e) {
    document.querySelector(`.qte-${i}`).setAttribute('value',
    Number(document.querySelector(`.qte-${i}`).getAttribute('value'))+1);
    price[i]=price[i]+pu[i];
    total_1=total_1+pu[i];
    total=total_1+total_2+total_3;
    document.querySelector(`.price-${i}`).innerHTML=price[i]+' dt';
    document.querySelector('.total_1').innerHTML=total_1+' dt';
    document.querySelector('.total').innerHTML=total+' dt';
});
}
for(let i=4;i<=5;i++)
{
    document.querySelector(`.item-${i} > .plus-btn`)
  .addEventListener("click", function(e) {
      document.querySelector(`.qte-${i}`).setAttribute('value',
      Number(document.querySelector(`.qte-${i}`).getAttribute('value'))+1);
      price[i]=price[i]+pu[i];
      total_2=total_2+pu[i];
      total=total_1+total_2+total_3;
      document.querySelector(`.price-${i}`).innerHTML=price[i]+' dt';
      document.querySelector('.total_2').innerHTML=total_2+' dt';
      document.querySelector('.total').innerHTML=total+' dt';
  });
  }
  for(let i=6;i<=7;i++)
{
    document.querySelector(`.item-${i} > .plus-btn`)
  .addEventListener("click", function(e) {
      document.querySelector(`.qte-${i}`).setAttribute('value',
      Number(document.querySelector(`.qte-${i}`).getAttribute('value'))+1);
      price[i]=price[i]+pu[i];
      total_3=total_3+pu[i];
      total=total_1+total_2+total_3;
      document.querySelector(`.price-${i}`).innerHTML=price[i]+' dt';
      document.querySelector('.total_3').innerHTML=total_3+' dt';
      document.querySelector('.total').innerHTML=total+' dt';
  });
  }

/************ - button *************/
for (let i=1;i<=3;i++)
{
  document.querySelector(`.item-${i} > .minus-btn`)
.addEventListener("click", function(e) {
    if(Number(document.querySelector(`.qte-${i}`).getAttribute('value')) >0){
        document.querySelector(`.qte-${i}`).setAttribute('value',
        Number(document.querySelector(`.qte-${i}`).getAttribute('value'))-1);
        price[i]=price[i]-pu[i];
        total_1=total_1-pu[i];
        total=total_1+total_2+total_3;
        document.querySelector(`.price-${i}`).innerHTML=price[i]+' dt';
        document.querySelector('.total_1').innerHTML=total_1+' dt';
        document.querySelector('.total').innerHTML=total+' dt';
    } else {
        document.querySelector(`.qte-${i}`).setAttribute('value',1);
    }
    
});
}
for (let i=4;i<=5;i++){
    document.querySelector(`.item-${i} > .minus-btn`)
  .addEventListener("click", function(e) {
      if(Number(document.querySelector(`.qte-${i}`).getAttribute('value')) >0){
          document.querySelector(`.qte-${i}`).setAttribute('value',
          Number(document.querySelector(`.qte-${i}`).getAttribute('value'))-1);
          price[i]=price[i]-pu[i];
          total_2=total_2-pu[i];
          total=total_1+total_2+total_3;
          document.querySelector(`.price-${i}`).innerHTML=price[i]+' dt';
          document.querySelector('.total_2').innerHTML=total_2+' dt';
          document.querySelector('.total').innerHTML=total+' dt';
      } else {
          document.querySelector(`.qte-${i}`).setAttribute('value',1);
      }
      
  });
  }
  for (let i=6;i<=7;i++){
    document.querySelector(`.item-${i} > .minus-btn`)
  .addEventListener("click", function(e) {
      if(Number(document.querySelector(`.qte-${i}`).getAttribute('value')) >0){
          document.querySelector(`.qte-${i}`).setAttribute('value',
          Number(document.querySelector(`.qte-${i}`).getAttribute('value'))-1);
          price[i]=price[i]-pu[i];
          total_3=total_3-pu[i];
          total=total_1+total_2+total_3;
          document.querySelector(`.price-${i}`).innerHTML=price[i]+' dt';
          document.querySelector('.total_3').innerHTML=total_3+' dt';
          document.querySelector('.total').innerHTML=total+' dt';
      } else {
          document.querySelector(`.qte-${i}`).setAttribute('value',1);
      }
      
  });
  }

/*************** Icone close items ****************/
for(let i=1;i<=3;i++){
document.querySelector(`.icon-${i}`)
       .addEventListener("click", function(e) {
        total_1=total_1-price[i];
        total=total_1+total_2+total_3;
        document.querySelector('.total_1').innerHTML=total_1+' dt';
        document.querySelector('.total').innerHTML=total+' dt';
        document.querySelector(`.product-${i}`).remove();
});
}
for(let i=4;i<=5;i++){
    document.querySelector(`.icon-${i}`)
           .addEventListener("click", function(e) {
            total_2=total_2-price[i];
            total=total_1+total_2+total_3;
            document.querySelector('.total_2').innerHTML=total_2+' dt';
            document.querySelector('.total').innerHTML=total+' dt';
            document.querySelector(`.product-${i}`).remove();
    });
}
for(let i=6;i<=7;i++){
    document.querySelector(`.icon-${i}`)
           .addEventListener("click", function(e) {
            total_3=total_3-price[i];
            total=total_1+total_2+total_3;
            document.querySelector('.total_3').innerHTML=total_3+' dt';
            document.querySelector('.total').innerHTML=total+' dt';
            document.querySelector(`.product-${i}`).remove();
    });
}
/*************** Icone Love ****************/
let hearts = Array.from(document.querySelectorAll('.fa-heart'))
for (let heart of hearts){
    heart.addEventListener("click", function(e) {
        heart.style.setProperty('color','red')
});
}