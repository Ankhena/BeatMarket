--include("_webpsup.js");

$(document).ready(function() {
 
    --include("_modal.js")
    --include("_burger.js")
    --include("_selectric.js")
    --include("_scroll.js")
    --include("_strategyPromoGraph.js")
    --include("_searchInput.js")

    document.querySelectorAll(".myStrategy-news-container .table-content-item").forEach(item => {
        item.addEventListener("click", (e) => {
            item.classList.toggle("shown")
        });
    });
    
});