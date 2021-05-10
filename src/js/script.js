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

    document.querySelectorAll(".myStrategy-news-container .table-content-item").forEach(item => {
        item.addEventListener("click", (e) => {
            item.classList.toggle("shown")
        });
    });

    document.querySelectorAll(".myStrategy-header").forEach(item => {
        let indicatorTable = document.querySelector(".myStrategy-indicators-container .table-scroll");
        if (indicatorTable != null) {
            indicatorTable.style.width = `${item.offsetWidth-2}px`
        }
    });

    $(".strategyCards-card-range").slider();
    
});