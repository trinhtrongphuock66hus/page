let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard')
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'Nhà giả kim',
        fullname: 'Nhà giả kim',
        image: 'nhagiakim.webp',
        price: 79000
    },
    {
        id: 2,
        name: 'Tôi thấy hoa vàng trê..',
        fullname: 'Tôi thấy hoa vàng trên cỏ xanh',
        image: 'toithayhoavangtrencoxanh.webp',
        price: 125000
    },
    {
        id: 3,
        name: 'Nghìn lẻ 1 đêm',
        fullname: 'Nghìn lẻ 1 đêm',
        image: 'nl1d.webp',
        price: 758950
    },
    {
        id: 4,
        name: 'Dịch hạch',
        fullname: 'Dịch hạch',
        image: 'dh.webp',
        price: 109000
    },
    {
        id: 5,
        name: 'Kiếp nào ta cũng t..',
        fullname: 'Kiếp nào ta cũng tìm thấy nhau',
        image: 'kntcttn.webp',
        price: 75000
    },
    {
        id: 6,
        name: 'Nhân duyên tiền kiếp',
        fullname: 'Nhân duyên tiền kiếp',
        image: 'ndtk.webp',
        price: 175500
    },
    {
        id: 7,
        name: 'Rừng sâu tăm tối',
        fullname: 'Rừng sâu tăm tối',
        image: 'rstt.webp',
        price: 148500
    },
    {
        id: 8,
        name: 'Không phải sói như..',
        fullname: 'Không phải sói nhưng cũng đừng là cừu',
        image: 'kpsncdlc.webp',
        price: 101000
    }
];
let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Mua</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    else{
       
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.fullname}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity1(${key},${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }
    else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price / (quantity+1);
    }
    reloadCard();
}
function changeQuantity1(key, quantity){
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price / (quantity-1);
    reloadCard();
}