--include("_webpsup.js");

$(document).ready(function() {

    --include("_modal.js")
    --include("_burger.js")
    --include("_selectric.js")
    --include("_scroll.js")
    --include("_strategyPromoGraph.js")
    --include("_searchInput.js")
    --include("_moveStrategy.js")
    --include("_dividendsGraph.js")
    --include("_inputCounter.js")
    --include("_banchGraph.js")
    --include("_performance.js")
    --include("_dateRangePicker.js")
    --include("_tableMain.js")
    --include("_design.js")
    --include("_onboard.js")
    --include("_ticketSelect.js")

    document.querySelectorAll(".myStrategy-news-container .table-content-item").forEach(item => {
        item.addEventListener("click", (e) => {
            item.classList.toggle("shown")
        });
    });

    document.querySelectorAll(".myStrategy-items-item").forEach(item => {
        let indicatorTable = document.querySelector(".myStrategy-indicators-container .table-scroll");
        if (indicatorTable != null) {
            indicatorTable.style.width = `${item.offsetWidth-2}px`
        }
    });

    $(".strategyCards-card-range").slider();

    document.querySelectorAll(".myStrategy-items-item-header-toggle").forEach(item => { // открытие/закрытие стратегий
        item.addEventListener("click", () => {
            item.classList.toggle("active");
            const content = item.parentNode.nextElementSibling;
            if (content !== null) {
                content.classList.toggle("hidden");
            }
        });
    });

    const myHeader = document.querySelector(".section-header");
    if (myHeader !== null && window.innerWidth >= 768) {
        const myNav = document.querySelector(".main-menu-nav.nav");
        if (myNav !== null) {
            let atStart = true;

            if (pageYOffset >= myHeader.clientHeight) {
                atStart = false;
                myNav.classList.add("fixed");
            }
    
            window.addEventListener('scroll', () => {
                if (pageYOffset >= myHeader.clientHeight && atStart) {
                    atStart = false;
                    myNav.classList.add("fixed");
                }
                if (pageYOffset <= myHeader.clientHeight && !atStart) {
                    atStart = true;
                    myNav.classList.remove("fixed");
                }
            });
        }
    }

});