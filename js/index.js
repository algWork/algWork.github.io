prepare__field();
rand();
clear__fields();
if(screen.width < 1000) {
    data.body.style.display = 'none';
}else {
    data.mes.style.display = 'none';
}

//1. Create sider above
document.querySelector(".left").addEventListener("click", function() {
    if(data.turn - 1 >= 1) {
        data.turn -= 1;
        turn__slider();
    }
    check();
});
document.querySelector(".right").addEventListener("click", function() {
    if(data.turn + 1 <= 6) {
        data.turn += 1;
        turn__slider(1, 4);
    }
    check();
});
data.left.addEventListener("click", function() {
    if(data.turn - 1 >= 0) {
        data.turn -= 1;
        turn__slider();
    }
    check();
});
data.right.addEventListener("click", function() {
    if(data.turn + 1 <= 6) {
        data.turn += 1;
        turn__slider(1, 4);
    }
    check();
});

document.querySelector("#ran").addEventListener("click", rand);

// Set element
data.arr.addEventListener("click", el => {
    let item = el.target;
    if(!item.classList.contains("town")) return;
    data.fname.value = item.innerHTML;
})

//2. Linear Search
data.start.addEventListener("click", () => {
    clear__fields();
    
    if(data.is__calling === false) {
        if(data.middle.innerHTML === 'Линейный Поиск') {
            linear();
        }else if(data.middle.innerHTML === 'Бинарный Поиск') {
            binary();
        }else if(data.middle.innerHTML === 'Сортировка пузырьком') {
            buble();
            data.is__sorted = true;
        }else if(data.middle.innerHTML === 'Cортировка Вставок'){
            insertion();
            data.is__sorted = true;
        }else if(data.middle.innerHTML === 'Сортировка Cлиянием'){
            data.main__array = mergeSort(data.main__array);
            print__array();
            data.is__sorted = true;
            is__calling = false;
            setTimeout(done, 100);
        }else {
            selection();
            data.is__sorted = true;
        }
    }
})




