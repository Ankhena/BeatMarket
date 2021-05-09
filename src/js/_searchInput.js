function initSearchInput() {
    document.querySelectorAll("#mySearchContainer").forEach(item => {

        item.addEventListener("input", (e) => {
            var input, filter, a, i;
            input = document.getElementById("mySearchInput");
            filter = input.value.toUpperCase();
            div = document.getElementById("mySearchContainer");
            a = div.getElementsByTagName("div");
            for (i = 0; i < a.length; i++) {
                txtValue = a[i].textContent || a[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    a[i].style.display = "";
                } else {
                    a[i].style.display = "none";
                }
            }
        });
    
    });
    
    document.querySelectorAll("#mySearchInput").forEach(item => {
        myContainer = document.querySelector(".input_search-container");
    
        item.addEventListener("focus", (e) => {
            myContainer.classList.add("visible");
        });
    
        item.addEventListener("blur", (e) => {
            myContainer.classList.remove("visible");
        });
    });
}

initSearchInput()