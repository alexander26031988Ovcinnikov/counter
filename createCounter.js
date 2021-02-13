const createCounterBtn = document.getElementById('createCounter');
const countersContainer = document.getElementById('counters');

const createCounterElement = () => {
	let counterTitle  = document.getElementById('title').value;
	let counter = createElement('div', 'counter');
  let titleDiv = createElement('div', 'title');
  titleDiv.innerText = counterTitle + ":";
  let value = createElement('div', 'value');
  value.innerText = '0';
  let leftBtn = createElement('button', 'left');
  
  leftBtn.innerHTML = '&lt;';
  
  leftBtn.addEventListener('click', () => {
  	let currentValue = parseFloat(value.innerText);
    if (currentValue > 0){
    	--currentValue;
    }
    value.innerText = `${currentValue}`;
  });
  
    let rightBtn = createElement('button', 'right');
      rightBtn.innerHTML = '&gt;';
  rightBtn.addEventListener('click', () => {
  	let currentValue = parseFloat(value.innerText);
    	++currentValue;
    value.innerText = `${currentValue}`;
  });
  
  let deleteBtn = createElement('a', 'remove');
  deleteBtn.innerText = 'X';
  deleteBtn.addEventListener('click', () => {
  	countersContainer.removeChild(counter);
  })
  
  counter.append(titleDiv);
  counter.append(leftBtn);
  counter.append(value);
  counter.append(rightBtn);
  counter.append(deleteBtn);
  
  countersContainer.append(counter);
  
}

const createElement = (tag, className) => {
	let newElement;
	if (tag && typeof tag === 'string'){
    newElement = document.createElement(tag);
      if (className && typeof className === 'string'){
        newElement.classList.add(className)
      }
  return newElement;
	}
} 

createCounterBtn.addEventListener('click',createCounterElement);
