'use strict';

let nextId = 1;

const comments = [];

const root = document.getElementById('root');
const form = document.createElement('form');
form.dataset.id = 'comment-form';

const textarea = document.createElement('textarea');
textarea.setAttribute('data-input', 'comment');

const submit = document.createElement('button');
submit.dataset.action = 'add';
submit.textContent = 'Добавить';

const err = document.createElement('p');
err.dataset.id = 'message';

form.appendChild(textarea);
form.appendChild(submit);
form.appendChild(err);
root.appendChild(form);

const list = document.createElement('ul');
list.dataset.id = 'comment-list';
root.appendChild(list);

form.onsubmit = (evt) => {
    evt.preventDefault();

    if (validateMessage(textarea)) {
        const id = nextId++;
        const message = textarea.value.trim();
        addComment(id, message, comments);

        const el = document.createElement('li');
        el.setAttribute('data-comment-id', id);
        el.appendChild(message);

        list.appendChild(el);
    }
    
    textarea.focus();
    form.reset();
    
};

function addComment(id, message, massive) {
    const obj = {
        id: id,
        text: message,
    };
    massive.push(obj);
}

function validateMessage(message) {
    if (message.value.trim() === '') {
        err.textContent = 'Значение поля не может быть пустым';
        return false;
    } else {
        err.textContent = '';
        return true;
    }
}