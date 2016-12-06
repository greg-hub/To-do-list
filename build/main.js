(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var toggleList = document.getElementById('togglelist');
var listDiv = document.querySelector('.list');
var descriptionInput = document.querySelector('input.description');
var descriptionP = document.querySelector('p.description');
var descriptionButton = document.querySelector('button.description');
var listUL = listDiv.querySelector('ul');
var addItemInput = document.querySelector('input.addItemInput');
var addItemButton = document.querySelector('button.addItemButton');
var lis = listUL.children;
var firstListItem = listUL.firstElementChild;
var lastListItem = listUL.lastElementChild;

function attachListItemButtons(li) {
	var up = document.createElement('button');
	up.className = 'up';
	up.textContent = 'up';
	li.appendChild(up);

	var down = document.createElement('button');
	down.className = 'Down';
	down.textContent = 'Down';
	li.appendChild(down);

	var remove = document.createElement('button');
	remove.className = 'remove';
	remove.textContent = 'remove';
	li.appendChild(remove);
}

for (var i = 0; i < lis.length; i++) {
	//adding the buttons to the html li items
	attachListItemButtons(lis[i]);
};

listUL.addEventListener('click', function (e) {
	if (e.target.tagName == 'BUTTON') {
		if (e.target.className == 'remove') {
			var li = event.target.parentNode;
			var ul = li.parentNode;
			ul.removeChild(li);
		};

		if (e.target.className == 'up') {
			// up function
			var li = e.target.parentNode;
			var prevLi = li.previousElementSibling;
			var ul = li.parentNode;
			if (prevLi) {
				ul.insertBefore(li, prevLi);
			}
		}

		if (e.target.className == 'Down') {
			// down function
			var li = e.target.parentNode;
			var nextLi = li.nextElementSibling;
			var ul = li.parentNode;
			if (nextLi) {
				ul.insertBefore(nextLi, li);
			}
		}
	}
});

// toggleList function
toggleList.addEventListener('click', function () {
	if (listDiv.style.display == 'none') {
		toggleList.textContent = 'Hide list';
		listDiv.style.display = 'block';
	} else {
		listDiv.style.display = 'none';
		toggleList.textContent = 'show list';
	}
});

descriptionButton.addEventListener('click', function () {
	descriptionP.innerHTML = descriptionInput.value;
	descriptionInput.value = '';
});

// add button function
addItemButton.addEventListener('click', function () {
	var ul = document.getElementsByTagName('ul')[0];
	var li = document.createElement('li');
	li.textContent = addItemInput.value;
	attachListItemButtons(li);
	ul.appendChild(li);
	addItemInput.value = '';
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9ncmVnYy9EZXNrdG9wL0JvbGllcmxpc3Qvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pELElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEQsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDckUsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3RCxJQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN2RSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzFDLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNsRSxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDckUsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUM1QixJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7QUFDL0MsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxTQUFTLHFCQUFxQixDQUFFLEVBQUUsRUFBRTtBQUNuQyxLQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLEdBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLEdBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3RC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O0NBRTNCLENBQUMsQ0FBQzs7O0FBR0gsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0FBQzdDLEtBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRCxLQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLEdBQUUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztBQUNwQyxzQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQixHQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ25CLGFBQVksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0NBQ3hCLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCB0b2dnbGVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZWxpc3QnKTtcclxuY29uc3QgbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XHJcbmNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dC5kZXNjcmlwdGlvbicpO1xyXG5jb25zdCBkZXNjcmlwdGlvblAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwLmRlc2NyaXB0aW9uJyk7XHJcbmNvbnN0IGRlc2NyaXB0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmRlc2NyaXB0aW9uJyk7XHJcbmNvbnN0IGxpc3RVTCA9IGxpc3REaXYucXVlcnlTZWxlY3RvcigndWwnKVxyXG5jb25zdCBhZGRJdGVtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dC5hZGRJdGVtSW5wdXQnKTtcclxuY29uc3QgYWRkSXRlbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5hZGRJdGVtQnV0dG9uJyk7XHJcbmNvbnN0IGxpcyA9IGxpc3RVTC5jaGlsZHJlbjtcclxuY29uc3QgZmlyc3RMaXN0SXRlbSA9IGxpc3RVTC5maXJzdEVsZW1lbnRDaGlsZDtcclxuY29uc3QgbGFzdExpc3RJdGVtID0gbGlzdFVMLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hMaXN0SXRlbUJ1dHRvbnMgKGxpKSB7XHJcblx0bGV0IHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0dXAuY2xhc3NOYW1lID0gJ3VwJztcclxuXHR1cC50ZXh0Q29udGVudCA9ICd1cCc7XHJcblx0bGkuYXBwZW5kQ2hpbGQodXApO1xyXG5cclxuXHRsZXQgZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdGRvd24uY2xhc3NOYW1lID0gJ0Rvd24nO1xyXG5cdGRvd24udGV4dENvbnRlbnQgPSAnRG93bic7XHJcblx0bGkuYXBwZW5kQ2hpbGQoZG93bik7XHJcblxyXG5cdGxldCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRyZW1vdmUuY2xhc3NOYW1lID0gJ3JlbW92ZSc7XHJcblx0cmVtb3ZlLnRleHRDb250ZW50ID0gJ3JlbW92ZSdcclxuXHRsaS5hcHBlbmRDaGlsZChyZW1vdmUpO1xyXG5cclxufVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBsaXMubGVuZ3RoOyBpKyspIHsgICAvL2FkZGluZyB0aGUgYnV0dG9ucyB0byB0aGUgaHRtbCBsaSBpdGVtc1xyXG5cdGF0dGFjaExpc3RJdGVtQnV0dG9ucyhsaXNbaV0pO1xyXG59O1xyXG5cclxuXHJcbmxpc3RVTC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbmlmIChlLnRhcmdldC50YWdOYW1lID09ICdCVVRUT04nKSB7XHJcblx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAncmVtb3ZlJykge1xyXG5cdGxldCBsaSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xyXG5cdGxldCB1bCA9IGxpLnBhcmVudE5vZGU7XHJcblx0dWwucmVtb3ZlQ2hpbGQobGkpO1xyXG5cdFx0fTtcclxuXHJcblx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAndXAnKSB7XHRcdFx0Ly8gdXAgZnVuY3Rpb25cclxuXHRsZXQgbGkgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xyXG5cdGxldCBwcmV2TGkgPSBsaS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG5cdGxldCB1bCA9IGxpLnBhcmVudE5vZGU7XHJcblx0aWYgKHByZXZMaSkge1xyXG5cdHVsLmluc2VydEJlZm9yZShsaSwgcHJldkxpKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09ICdEb3duJykge1x0XHRcdC8vIGRvd24gZnVuY3Rpb25cclxuXHRsZXQgbGkgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xyXG5cdGxldCBuZXh0TGkgPSBsaS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0bGV0IHVsID0gbGkucGFyZW50Tm9kZTtcclxuXHRpZiAobmV4dExpKSB7XHJcblx0dWwuaW5zZXJ0QmVmb3JlKG5leHRMaSwgbGkpXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG59KTtcclxuXHJcblxyXG4vLyB0b2dnbGVMaXN0IGZ1bmN0aW9uXHJcbnRvZ2dsZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0aWYobGlzdERpdi5zdHlsZS5kaXNwbGF5ID09ICdub25lJyl7XHJcblx0XHR0b2dnbGVMaXN0LnRleHRDb250ZW50ID0gJ0hpZGUgbGlzdCc7XHJcblx0XHRsaXN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuXHR9ZWxzZXtcclxuXHRsaXN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0dG9nZ2xlTGlzdC50ZXh0Q29udGVudCA9ICdzaG93IGxpc3QnO1xyXG5cclxuXHJcbn1cclxufSk7XHJcblxyXG5cclxuZGVzY3JpcHRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbmRlc2NyaXB0aW9uUC5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG5kZXNjcmlwdGlvbklucHV0LnZhbHVlID0gJyc7XHJcblxyXG59KTtcclxuXHJcbi8vIGFkZCBidXR0b24gZnVuY3Rpb25cclxuYWRkSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRsZXQgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndWwnKVswXTtcclxuXHRsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdGxpLnRleHRDb250ZW50ID0gYWRkSXRlbUlucHV0LnZhbHVlO1xyXG5cdGF0dGFjaExpc3RJdGVtQnV0dG9ucyhsaSk7XHJcblx0dWwuYXBwZW5kQ2hpbGQobGkpO1xyXG5cdGFkZEl0ZW1JbnB1dC52YWx1ZSA9ICcnO1xyXG59KTtcclxuIl19