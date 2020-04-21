function turn__slider() {
    data.right.textContent = data.names__array[data.turn + 1];
    data.middle.textContent = data.names__array[data.turn];
    data.left.textContent = data.names__array[data.turn - 1];
}

function check() {
    if(data.turn !== 1 && data.turn !== 2) {
        data.f_el.style.display = 'none';
    }else {
        data.f_el.style.display = 'block';
    }
}

function clear(val) {
    val.innerHTML = "";
}

function get__value(val) {
    return val.value;
}

function calc__font() {
    return data.width / 100 * 50;
}

function color__el(ind) {
    document.querySelector(`#val__${ind}`).classList.add("color__element");
}

function color__off(ind) {
    document.querySelector(`#val__${ind}`).classList.remove("color__element");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function swap(j) {
    if (j === j + 1) {
        return;
    }

    let tmp = data.main__array[j];
    data.main__array[j] = data.main__array[j + 1];
    data.main__array[j + 1] = tmp;
    print__array();
}

function print__array() {
    let j = 0;
    clear(data.arr);
    let fs = calc__font();
    for(let i = 0; i < data.main__array.length; i++) {
        let markup = `<div class="town" id="val__${j++}" style="height: ${(data.main__array[i] + 5) * 5}px; width: ${data.width}px; font-size: ${fs}px">${data.main__array[i]}</div>`;
        data.arr.insertAdjacentHTML('beforeend', markup);
    }
}

function prepare__field() {
    data.arrays.value = 15;
    data.from.value = 1;
    data.to.value = 100;
}

function calc__sum() {
    let sum = data.main__array.reduce((a, b) => a + b, 0)
    data.sum__items.innerHTML = sum;
}

function clear__fields() {
    data.arrays.value = '';
    data.from.value = '';
    data.to.value = '';
}

function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
        data.operations.innerHTML = Number(data.operations.innerHTML) + 1;
    }
  
    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}

function second__swap(a, b) {
    let temp = data.main__array[a];
    data.main__array[a] = data.main__array[b];
    data.main__array[b] = temp;
    print__array();
}

function done() {
    alert("Массив отсортирован");
}
