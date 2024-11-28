let add = document.querySelector('button');
let input = document.querySelector('input');
let addlist = document.querySelector('.listdiv');

add.addEventListener('click', () => {
    if (input.value.trim() === '') return;

    let newlist = document.createElement('li');
    let checkboxTextDiv = document.createElement('div');
    checkboxTextDiv.classList.add('checkbox-text');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    let taskText = document.createElement('span');
    taskText.textContent = input.value;

    checkboxTextDiv.appendChild(checkbox);
    checkboxTextDiv.appendChild(taskText);

    let removebtn = document.createElement('button');
    removebtn.innerHTML = '<img src="close-line.png" alt="">';
    removebtn.classList.add('remove-btn');

    newlist.appendChild(checkboxTextDiv);
    newlist.appendChild(removebtn);
    addlist.appendChild(newlist);
    input.value = '';

    removebtn.addEventListener('click', () => {
        newlist.remove();
    });

    checkbox.addEventListener('change', () => {
        taskText.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });
});
