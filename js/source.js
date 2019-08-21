let list = document.getElementById('list');
let text = document.getElementById('text');
let add  = document.getElementById('add');

add.addEventListener('click', (event) =>
{
    event.preventDefault();

    if(!text.value)
    {
        UIkit.notification({message: 'Fill the task', status: 'danger'});
        return;
    }

    create(text.value);

    text.value = null;
});

function create(text)
{
    let newItem = `<li>${text}</li>`;
    list.insertAdjacentHTML('beforeend', newItem);
}