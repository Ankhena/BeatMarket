function dopFunctional() {
    let brokerContainer = document.querySelectorAll(".broker-container");

    brokerContainer.forEach((item) => {
        let brokerChoose = item.querySelectorAll(".broker-choose");
        if (brokerChoose.length > 15) { // если брокеров больше 15, делаем уменьшенный список
            item.classList.add("broker-container--long");
        }
    });

    ///////////// ПЕРЕКЛЮЧАТЕЛЬ КОНТЕНТА В МОДАЛКЕ БРОКЕРА //////////////////

    let contentSwitcherSelector = document.querySelectorAll(".contentSwitcher__selector");
    let contentSwitcherContainer = document.querySelectorAll(".contentSwitcher__container");

    contentSwitcherSelector.forEach((item, id) => {
        item.addEventListener("change", () => {
            contentSwitcherContainer[id].classList.toggle("contentSwitcher__container--visible")
        });
    });
}

dopFunctional();