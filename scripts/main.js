const toggleList = document.getElementById('togglelist');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUL = listDiv.querySelector('ul')
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUL.children;
const firstListItem = listUL.firstElementChild;
const lastListItem = listUL.lastElementChild;

function attachListItemButtons (li) {
	let up = document.createElement('button');
	up.className = 'up';
	up.textContent = 'up';
	li.appendChild(up);

	let down = document.createElement('button');
	down.className = 'Down';
	down.textContent = 'Down';
	li.appendChild(down);

	let remove = document.createElement('button');
	remove.className = 'remove';
	remove.textContent = 'remove'
	li.appendChild(remove);

}

for (let i = 0; i < lis.length; i++) {   //adding the buttons to the html li items
	attachListItemButtons(lis[i]);
};


listUL.addEventListener('click', (e) => {
if (e.target.tagName == 'BUTTON') {
	if (e.target.className == 'remove') {
	let li = event.target.parentNode;
	let ul = li.parentNode;
	ul.removeChild(li);
		};

	if (e.target.className == 'up') {			// up function
	let li = e.target.parentNode;
	let prevLi = li.previousElementSibling;
	let ul = li.parentNode;
	if (prevLi) {
	ul.insertBefore(li, prevLi)
			}

		}

	if (e.target.className == 'Down') {			// down function
	let li = e.target.parentNode;
	let nextLi = li.nextElementSibling;
	let ul = li.parentNode;
	if (nextLi) {
	ul.insertBefore(nextLi, li)
			}

		}


	}

});


// toggleList function
toggleList.addEventListener('click', () => {
	if(listDiv.style.display == 'none'){
		toggleList.textContent = 'Hide list';
		listDiv.style.display = 'block';

	}else{
	listDiv.style.display = 'none';
	toggleList.textContent = 'show list';


}
});


descriptionButton.addEventListener('click', () => {
descriptionP.innerHTML = descriptionInput.value;
descriptionInput.value = '';

});

// add button function
addItemButton.addEventListener('click', () => {
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.createElement('li');
	li.textContent = addItemInput.value;
	attachListItemButtons(li);
	ul.appendChild(li);
	addItemInput.value = '';
});
