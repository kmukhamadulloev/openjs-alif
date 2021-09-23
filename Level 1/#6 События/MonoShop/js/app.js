'use strict';

let quantity = 1;

const max = 10;
const min = 1;

const nokia = {
    id: 1,
    price: 239,
    title: 'Nokia 105',
    img: './img/nokia.jpg',
};

const order = {
    id: 1,
    itemId: nokia.id,
    qty: quantity,
    price: nokia.price,
};

const increment = document.querySelector('[data-action="inc"]');
const decrement = document.querySelector('[data-action="dec"]');
const qty = document.querySelector('[data-id="qty"]');
qty.textContent = quantity;
const total = document.querySelector('[data-id="total"]');
total.textContent = nokia.price + ' с.';
const message = document.querySelector('[data-id="message"]');
const title = document.querySelector('[data-id="title"]');
title.textContent = nokia.title;
const image = document.querySelector('[data-id="image"]');
image.src = nokia.img;
image.alt = nokia.title;

increment.onclick = function() {
    quantity++;
    if (quantity > max) {
        quantity = max;
        message.textContent = `${quantity} шт - максимум в одни руки`;
    } else {
        message.textContent = '';
    }
    qty.textContent = quantity;
    order.qty = quantity;
    checkSum();
};

decrement.onclick = function() {
    quantity--;
    if (quantity < min) {
        quantity = min;
        message.textContent = `${quantity} шт - минимальный размер заказа`;
    } else {
        message.textContent = '';
    }
    qty.textContent = quantity;
    order.qty = quantity;
    checkSum();
};

function checkSum() {
    const sum = nokia.price * quantity;
    total.textContent = sum + ' с.';
}