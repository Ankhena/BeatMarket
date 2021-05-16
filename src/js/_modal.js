function initModal() {
    let overlay = document.querySelector(".overlay_modal");
    let body = document.body;
    let scrollBarWidth = getScrollBarWidth(); // чтобы не прыгала ширина сайта при скрытии скролла 

    //console.log(scrollBarWidth);
    
    function showModal(id) {
        overlay.classList.add("visible");
        body.classList.add("hideScroll");
        body.style.paddingRight = `${scrollBarWidth}px`;
        document.querySelector(`#${id}`).classList.add("visible");
    }

    function changeModal(id) { // закрыть текущее модальное окно, и открыть новое через 700 мс
        closeModal();
        setTimeout(() => showModal(id), 700);
    }
    
    function closeModal() {
        document.querySelector(".modal.visible").classList.remove("visible");
        setTimeout(() => {
            overlay.classList.remove("visible");
            body.classList.remove("hideScroll");
            body.style.paddingRight = "";
        }, 150); // так как 0.3s ease-in-out, это нужно чтобы окно модальное не прыгало резко влево во время закрытия
    }

    function getScrollBarWidth() {
        const scrollBlock = document.createElement("div");
        scrollBlock.classList.add("scroll_block_dummy");
        document.body.appendChild(scrollBlock);

        const scrollBarWidth = scrollBlock.offsetWidth - scrollBlock.clientWidth;
        document.body.removeChild(scrollBlock);
        return scrollBarWidth;
    }
    
    document.querySelectorAll("[data-modal]").forEach(item => {
        item.addEventListener("click", () => {
            showModal(item.dataset.modal)
        });
    });

    document.querySelectorAll("[data-changeModal]").forEach(item => {
        item.addEventListener("click", () => changeModal(item.dataset.changemodal));
    });
    
    document.querySelectorAll("[data-closeModal]").forEach(item => {
        item.addEventListener("click", () => closeModal());
    });
}

initModal();