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

list.addEventListener('click', (event) =>
{
    if(event.target.matches('input'))
    {
        completed(event.target);
    }
    else if(event.target.matches(['a', 'svg', 'polyline', 'rect',]))
    {
        remove(event.target);
    }
});

function create(text)
{
    let newItem = `
                       <li>
                           <input class="completed uk-checkbox" type="checkbox" />
                           <span>${text}</span>
                           <a href="#" class="uk-float-right" uk-icon="trash"></a>
                       </li>
                  `;
    list.insertAdjacentHTML('beforeend', newItem);
}

function completed(item)
{
    item.parentNode.querySelector('span').classList.toggle('completed');
}

function remove(item)
{
    switch (item.tagName)
    {
        case 'a':
            list.removeChild(item.parentNode);
            break;

        case 'svg':
            list.removeChild(item.parentNode.parentNode);
            break;

        case 'polyline':
            list.removeChild(item.parentNode.parentNode.parentNode);
            break;

        case 'rect':
            list.removeChild(item.parentNode.parentNode.parentNode);
            break;

        default:
            return;
    }
}