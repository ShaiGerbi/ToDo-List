let list = document.getElementById('list');
let text = document.getElementById('text');
let add  = document.getElementById('add');

add.addEventListener('click', (event) =>
{
    event.preventDefault();

    if(!text.value)
    {
        return alert('Fill the task');
    }

    create(text.value);

    text.value = null;
});

function create(text)
{
    let newItem = `<li>${text}</li>`;
    list.insertAdjacentHTML('beforeend', newItem);
}