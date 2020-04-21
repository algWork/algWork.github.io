
function rand() {
    if(data.is__calling === false) {
        if(get__value(data.arrays) > 35 || get__value(data.arrays) < 1) {
            alert(`
                Длина массива должна быть меньше 35 и больше 0,
                Вы ввели: ${get__value(data.arrays)} `)
            clear__fields();
        }else if(get__value(data.from) < 1 || get__value(data.to) > 100 || get__value(data.to) < 1 || get__value(data.from) > 100) {
            alert(`Размер элементов должен быть только от одного до ста
                Вы ввели от ${get__value(data.from)} до ${get__value(data.to)}`)
                clear__fields();
        }
        else {
            //1. Clear elements and create some vairables
            data.main__array = [];
            data.arr__num.innerHTML = get__value(data.arrays);
            clear(data.arr);
            let ran;
            let arrs = get__value(data.arrays);
        
            //2. Create values for random function
            let min = Math.ceil(get__value(data.from));
            let max = Math.floor(get__value(data.to));
        
            //3. Make array of numbers
            for(let i = 0; i < arrs; i++) {
                ran = Math.floor(Math.random() * (max - min)) + min;
                data.main__array.push(ran);
            }
            calc__sum();
            //4. Print result to UI
            if(get__value(data.arrays) > 20 && get__value(data.arrays) < 30) {
                data.width = 40;
            }
            else if(get__value(data.arrays) >= 30) {
                data.width = 25;
            }else {
                data.width = 45;
            }
            print__array();
        }
    }
}
