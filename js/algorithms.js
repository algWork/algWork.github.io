/////////////////////////////////////////////////////////////////////////
//Linear Search
async function linear() {
    data.operations.innerHTML = 1;
    data.is__calling = true;
    let val = get__value(data.fname);
    for(let i = 0; i < data.main__array.length; i++) {
        color__el(i);
        await sleep(250);
        if(get__value(data.fname) == data.main__array[i]) {
            alert("Я нашёл элемент!");
            color__off(i);
            data.is__calling = false;
            return;
        }
        color__off(i);

        data.operations.innerHTML = Number(data.operations.innerHTML) + 1;
    }
    alert("Такого элемента в массиве нет");
    
    data.is__calling = false;
}
async function binary() {
    if(data.is__sorted === false) {
        alert("Для бинарного поиска массив должен быть отсортирован!")
    }else {
        data.operations.innerHTML = 1;
        data.is__calling = true;
        let val = get__value(data.fname);
        let low = 0;
        let high = data.main__array.length - 1;
        while(low <= high) {
            let mid = Math.floor((low + high) / 2);
            color__el(mid);
            await sleep(500);
            if(data.main__array[mid] == val) {
                alert("Я нашёл элемент!");
                color__off(mid);
                data.is__calling = false;
                return;
            }
            else if (data.main__array[mid] < val) {
                low = mid + 1; 
            }
            else {
                high = mid - 1;
            }
            color__off(mid);
            data.operations.innerHTML = Number(data.operations.innerHTML) + 1;
        }
        alert("Такого элемента в массиве нет");
        data.is__calling = false;
    }
}

async function buble() {    
    data.operations.innerHTML = 1;
    data.is__calling = true;
    let len = data.main__array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            color__el(j);
            await sleep(50);
            if(j + 1 < data.main__array.length) {
                color__el(j + 1);
            }
            await sleep(50);
            if (data.main__array[j] > data.main__array[j + 1]) {
                swap(j);
            }
            if(j + 1 < data.main__array.length) {
                color__off(j + 1);
            }
            color__off(j);
            data.operations.innerHTML = Number(data.operations.innerHTML) + 1;
        }
        data.operations.innerHTML = Number(data.operations.innerHTML) + 1;
    }
    data.is__calling = false;
    done();
}

async function insertion() {    
    data.operations.innerHTML = 1;
    data.is__calling = true;
    for(let i = 1; i <= data.main__array.length; i++) {

        let key = data.main__array[i];
        color__el(i - 1);
        await sleep(100);
        let j = i - 1;
        while(j >= 0 && key < data.main__array[j]){
            color__off(i - 1);
            if(j >= 0) {
                color__el(j);
            }
            color__el(j + 1);
            await sleep(100);

            swap(j);
            j -= 1;
            print__array();

            if(j >= 0) {
                color__off(j);
            }
            color__off(j + 1);

            data.operations.innerHTML = Number(data.operations.innerHTML) + 1;
        }
        if(j + 1 < data.main__array.length) {
            data.main__array[j + 1] = key;
        }
        print__array();
        color__off(i - 1);
        data.operations.innerHTML = Number(data.operations.innerHTML) + 1;
    }
    data.is__calling = false;
    done();
}

function mergeSort (unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);
    // data.main__array = unsortedArray;
    // await sleep(1000);
    // print__array();
    // await sleep(1000);
    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
    data.operations.innerHTML = Number(data.operations.innerHTML) + 1;
    // Using recursion to combine the left and right
    return merge(
      mergeSort(left), mergeSort(right)
    );
}

async function selection() {
    data.operations.innerHTML = 1;
    data.is__calling = true;
    for(let i = 0; i < data.main__array.length; i++) {
        let min = i;
        color__el(i);
        for(let j = i; j < data.main__array.length; j++) {
            color__el(j);
            await sleep(100);
            color__off(j)
            if(data.main__array[j] < data.main__array[min]) {
                color__off(min);
                min = j;
                color__el(min);
            }
            data.operations.innerHTML = Number(data.operations.innerHTML) + 1;
        }
        data.operations.innerHTML = Number(data.operations.innerHTML) + 1;
        color__off(i);

        second__swap(i, min);
    }
    data.is__calling = false;
    done();
}


