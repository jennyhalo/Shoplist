// variables
const addItem = document.getElementById('add-item');
const itemContainer = document.getElementById('item-container');
const inputProduct = document.getElementById('input-product');
const saveAll = document.getElementById('save-all');
const removeAll = document.getElementById('remove-all');
const inputError = document.getElementById("input-error")

// Event listeners
// when clicking on 'Tallenna' button, all elements with class 'item-data' will be stored to local storage in an array
saveAll.addEventListener('click', function() {
    let datas = [];
    document.querySelectorAll('.item-data').forEach(data => {
    console.log(data.innerHTML);
    datas.push(data.innerHTML);
    });
    console.log(datas);
    window.localStorage.setItem('ostoslista', JSON.stringify(datas));
});
// when clicking 'Poista kaikki' button, all elements with class 'item' will be removed from the list
removeAll.addEventListener('click', function() {
    document.querySelectorAll('.item').forEach(item => {
    item.remove();
    });
});
// eventlistener that activates on click and enables to add new items to the shoppimg list with check and delete button
addItem.addEventListener('click', function() {
// creating a div with the class 'item'
    let item = document.createElement('div');
    item.classList.add('item');
// creating a li element with the class 'item-data' and appending it
    let li = document.createElement('li');
    li.classList.add('item-data');
    li.innerText = inputProduct.value;
    item.appendChild(li);
// creating a checked button and appending it
    let checkedButton = document.createElement("button");
    checkedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkedButton.classList.add('checkItem');
    item.appendChild(checkedButton);
// creating a delete button and appending it
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteItem');
    item.appendChild(deleteButton);
// using an alert if input value is empty, or error function if input value length under 3 characters or if the input has more than 22 characters.
    if(inputProduct.value ==="") {
        alert('Kirjoita jotain!');
    } else if (inputProduct.value.length < 3 ) {
        tooShortError()
    } else if (inputProduct.value.length > 22 ) {
        tooLongError()
    } else {
        itemContainer.appendChild(item);
    }
    inputProduct.value = "";
// eventlistener that activates on click and applies the class 'checked' or class 'item' on an item, depending on the current class
checkedButton.addEventListener('click', function(e) {
        let target = e.target;
    if(target.parentElement.parentElement.getAttribute('class') === 'item') {
        target.parentElement.parentElement.setAttribute('class', 'checked')
    } else {
        target.parentElement.parentElement.setAttribute('class', 'item')
    }});
// eventlistener that activates on click and removes the item from the list
deleteButton.addEventListener('click', function(e) {
        let target = e.target;
        target.parentElement.parentElement.remove();
    });
// error function to show red border around input field and a message for 3 seconds
    function tooShortError() {
        inputProduct.style.border = "2px solid red"
        inputError.innerText = 'min. 3 kirjainta';
// the timeout function
    setTimeout(() => {
        inputProduct.style.border = "none"
        inputError.innerText = '';
        }, 3000)
    }
// error function to show red border around input field and a message for 3 seconds
    function tooLongError() {
        inputProduct.style.border = "2px solid red"
        inputError.innerText = 'max. 22 kirjainta';
// the timeout function
    setTimeout(() => {
        inputProduct.style.border = "none"
        inputError.innerText = '';
        }, 3000)
    }
});
