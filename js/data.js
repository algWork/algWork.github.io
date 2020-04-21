const data = {
    names__array: ['', 'Линейный Поиск', 'Бинарный Поиск', 'Сортировка пузырьком', 'Cортировка Вставок', 'Сортировка Cлиянием', 'Сортировка выбором', ''],
    left: document.querySelector(".first"),
    middle: document.querySelector(".second"),
    right: document.querySelector(".third"),
    turn: 2,                         // Turn is just index of main__array, i use it to make slider
    f_el: document.querySelector(".f__element"),
    main__array: [],
    from: document.querySelector("#value"),
    to: document.querySelector("#value1"),
    arrays: document.querySelector("#count"),
    arr: document.querySelector(".arrays"),
    width: 50,
    fname: document.querySelector("#fname"),
    start: document.querySelector(".btn"),
    is__calling: false,
    arr__num: document.querySelector("#val"),
    operations: document.querySelector("#ops"),
    sum__items: document.querySelector("#items"),
    body: document.querySelector(".body"),
    main__block: document.querySelector(".main"),
    mes: document.querySelector(".message__block"),
    is__sorted: false
}