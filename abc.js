let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard')
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let ten = document.querySelector('.name');
openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        fullname: 'Nhà giả kim',
        image: 'nhagiakim.webp',
        price: 79000
    },
    {
        id: 2,
        fullname: 'Tôi thấy hoa vàng trên cỏ xanh',
        image: 'toithayhoavangtrencoxanh.webp',
        price: 125000
    },
    {
        id: 3,
        fullname: 'Nghìn lẻ 1 đêm',
        image: 'nl1d.webp',
        price: 758950
    },
    {
        id: 4,
        fullname: 'Dịch hạch',
        image: 'dh.webp',
        price: 109000
    },
    {
        id: 5,
        fullname: 'Kiếp nào ta cũng tìm thấy nhau',
        image: 'kntcttn.webp',
        price: 75000
    },
    {
        id: 6,
        fullname: 'Nhân duyên tiền kiếp',
        image: 'ndtk.webp',
        price: 175500
    },
    {
        id: 7,
        fullname: 'Rừng sâu tăm tối',
        image: 'rstt.webp',
        price: 148500
    },
    {
        id: 8,
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
            <div class="title">${value.fullname}</div>
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
        listCards[key].quantity += 1;
        listCards[key].price = listCards[key].quantity * products[key].price / (listCards[key].quantity-1);
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
// Trong trang nhận
// Trong trang nhận
window.addEventListener('message', function(event) {
    // Kiểm tra nguồn của thông điệp có phải là trang gửi không
    if (event.origin === 'https://trinhtrongphuock66hus.github.io/ttpeeihus.github.io/') {
      // Xử lý dữ liệu trong event.data
      const username = event.data.username;
      console.log('Received username:', username);
  
      // Thực hiện các hành động tiếp theo với username nhận được
      // Ví dụ: Cập nhật giao diện người dùng với tên người dùng
      let nameElement = document.querySelector('.name');
      nameElement.textContent = username;
    }
  });
  


