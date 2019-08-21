let list = document.getElementById('list');
let text = document.getElementById('text');
let add  = document.getElementById('add');

add.addEventListener('click', () =>
{
    if(!text.value)
    {
        return alert('Fill the task');
    }

    let newItem = document.createElement('li');
    newItem.innerHTML = text.value;
    list.append(newItem);

    text.value = null;
});