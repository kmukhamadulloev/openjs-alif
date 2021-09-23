'use strict';

let itemId = 1;
let purchases = [];

const root = document.getElementById('root');

// Form stuff
const form = document.createElement('form');
form.dataset.id = 'purchase-form';

const fName = document.createElement('input');
fName.dataset.input = 'name';
fName.type = 'text';

const fPrice = document.createElement('input');
fPrice.dataset.input = 'price';
fPrice.type = 'number';

const fSubmit = document.createElement('button');
fSubmit.dataset.action = 'add';
fSubmit.textContent = 'Добавить';

form.appendChild(fName);
form.appendChild(fPrice);
form.appendChild(fSubmit);
root.appendChild(form);

// Error
const err = document.createElement('div');
err.dataset.id = 'message';

root.appendChild(err);

// Purchase list stuff
const list = document.createElement('ul');
list.dataset.id = 'purchases-list';

root.appendChild(list);

// Cashback
const cashback = document.createElement('div');
cashback.textContent = 'Самая дорогая покупка: ';
const cSpan = document.createElement('span');
cSpan.textContent = 'нет покупок';
cSpan.dataset.id = 'most-expensive';

cashback.appendChild(cSpan);
root.appendChild(cashback);

// Action to add new element
form.onsubmit = evt => {
    evt.preventDefault();
    err.textContent = '';
    if (formValidator(fName, 'text') && formValidator(fPrice, 'price')) {
        const id = itemId++;
        const name = fName.value.trim();
        const price = fPrice.value;

        addToPurchases(id, name, price);

        const el = document.createElement('li');
        el.setAttribute('data-purchase-id', id);
        el.textContent = `${name} на сумму ${price} с. `;
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.setAttribute('data-action', 'remove');
        remove.textContent = 'Удалить';
        el.appendChild(remove);
        list.insertBefore(el, list.firstElementChild);
        cSpan.textContent = findMaxPurchase();
        fName.focus();
        form.reset();

        remove.onclick = () => {
            list.removeChild(el);
            removeFromPurchases(parseInt(el.getAttribute('data-purchase-id')));
            cSpan.textContent = findMaxPurchase();
        };
    }

};

// Function to control input form
function formValidator(el, type) {
    if (type === 'text') {

        if (el.value.trim() === '') {
            err.textContent += 'Значение поля не может быть пустым';
            el.focus();
            return false;
        } else {
            return true;
        }
        
    } else if (type === 'price') {
        
        const value = Number(el.value);
        if (value < 1 || Number.isNaN(value) || value === '') {
            err.textContent += 'Значение поля не может быть строкой или меньше 1';
            el.focus();
            return false;
        }
        
        return true;
    }
}

// Function which adds object to purchases array
function addToPurchases(id, name, price) {
    const obj = {
        id: id,
        name: name,
        price: parseInt(price),
    };
    purchases.push(obj);
}

function removeFromPurchases(id) {
    purchases = purchases.filter(o => o.id !== parseInt(id));
}

// Finds max valued purchase
function findMaxPurchase() {
    if (purchases.length > 0) {
        let result = purchases.map(o => o.price).reduce((ac, cu) => Math.max(ac, cu));
        const id = purchases.filter(o => o.price === result);
        result = list.querySelector('[data-purchase-id="' + id[id.length - 1].id + '"]').textContent.replace(' Удалить', '');
        return result;
    }
    
    return 'нет покупок';
}