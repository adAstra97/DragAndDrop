let items = document.querySelectorAll('.item');
let placeholders = document.querySelectorAll('.placeholder');
let dragged;

items.forEach(item => {
   item.addEventListener('dragstart', dragstart);
   item.addEventListener('dragend', dragend);
});


placeholders.forEach(item => {
   item.addEventListener('dragenter', dragenter);
   item.addEventListener('dragover', dragover);
   item.addEventListener('dragleave', dragleave);
   item.addEventListener('drop', drop);
});


function dragstart(event) {
   event.target.classList.add('hold');
   setTimeout(() => {
      event.target.classList.add('hide');
   }, 0);
   dragged = event.currentTarget;
}

function dragend(event) {
   event.target.className = 'item';
}

function dragenter(event) {
   event.target.classList.add('hovered');
}

function dragover(event) {
   event.preventDefault();
}

function dragleave(event) {
   event.target.classList.remove('hovered');
}

function drop(event) {
   event.target.classList.remove('hovered');
   event.currentTarget.append(dragged);
}