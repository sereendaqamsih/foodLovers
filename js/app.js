'use strict';

let table1= document.getElementById('myTable');
let form1= document.getElementById('myForm');
let tbody1= document.getElementById('tbody');
let orderArr= [];
let imageArr=[];

function Order (customerName,foodType,newPrice){
    this.customerName=customerName;
    this.foodType=foodType;
    this.newPrice=newPrice;
orderArr.push(this);
settingLocal();

} 
function settingLocal (){
    let data = JSON.stringify(orderArr);
    localStorage.setItem('Order',data);
    let imageData = JSON.stringify(imageArr);
    localStorage.setItem('Image',imageData);


}

function gettingLocal (){
    let stringObj= localStorage.getItem('Order');
    let normalObj= JSON.parse(stringObj);
    let stringimgObj =localStorage.getItem('Image');
    let normalimgObj= JSON.parse(stringimgObj);
    if (normalimgObj !== null){ normalObj=orderArr;}
    if (normalObj !== null){ normalObj=imageArr;}
    render();

}
function render (){


while ( table1.rows.length > 1) {
    table1.deleteRow(1);
}


for (let i = 0; i < orderArr.length; i++) {
    if ( orderArr[i].foodType ==='shawarma') {
    let tr1= document.createElement('tr');
    let td1 = document.createElement('td');
    tbody1.appendChild(tr1);
    tr1.appendChild(td1);
    let td2 = document.createElement('td');
    tr1.appendChild(td2);
    let p1= document.createElement('p');
    p1.setAttribute('id','image1');
    td1.appendChild(p1);
    let img1 = document.createElement("img");
    img1.src = "img/shawarma.jpg";
    let src1 = document.getElementById("image1");
    src1.appendChild(img1);
    p1.textContent=img1.src1;
 imageArr.push(img1.src1);

td2.textContent= `Customer Name: ${orderArr[i].customerName} Food Type ${orderArr[i].foodType} Food Price ${orderArr[i].newPrice}`;
}
if ( orderArr[i].foodType ==='burger') {
    let tr1= document.createElement('tr');
    let td1 = document.createElement('td');
    tbody1.appendChild(tr1);
    tr1.appendChild(td1);
    let td2 = document.createElement('td');
    tr1.appendChild(td2);
    let p1= document.createElement('p');
    p1.setAttribute('id','image1');
    td1.appendChild(p1);
    let img1 = document.createElement("img");
    img1.src = "img/burger.jpg";
    let src1 = document.getElementById("image1");
    src1.appendChild(img1);
    p1.textContent=img1.src1;
    imageArr.push(img1.src1);

   


td2.textContent= `Customer Name: ${orderArr[i].customerName} Food Type ${orderArr[i].foodType} Food Price ${orderArr[i].newPrice}`;
}
if ( orderArr[i].foodType ==='pizza') {
    let tr1= document.createElement('tr');
    let td1 = document.createElement('td');
    tbody1.appendChild(tr1);
    tr1.appendChild(td1);
    let td2 = document.createElement('td');
    tr1.appendChild(td2);
    let p1= document.createElement('p');
    p1.setAttribute('id','image1');
    td1.appendChild(p1);
    let img1 = document.createElement("img");
    img1.src = "img/pizza.jpg";
    let src1 = document.getElementById("image1");
    src1.appendChild(img1);
    p1.textContent=img1.src1;
td2.textContent= `Customer Name: ${orderArr[i].customerName} Food Type ${orderArr[i].foodType} Food Price ${orderArr[i].newPrice}`;
imageArr.push(img1.src1);
}

}}



function randomPrice (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function handlesubmite(event){
    event.preventDefault();
    console.log(event.target);
let customerName = event.target.customerName.value;
let foodType= event.target.foodType.value;
let newPrice= randomPrice(10,30);
let newOrder= new Order (customerName,foodType,newPrice);
console.log(newOrder);
render ();
}
form1.addEventListener ('submit',handlesubmite);
gettingLocal();