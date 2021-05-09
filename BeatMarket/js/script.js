// Проверка на поддержку WebP от браузера

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp-support');
    }
});;

$(document).ready(function() {
 
    function initModal() {
    let overlay = document.querySelector(".overlay_modal");
    let body = document.body;
    
    function showModal(id) {
        overlay.classList.add("visible");
        body.classList.add("hideScroll");
        document.querySelector(`#${id}`).classList.add("visible");
    }

    function changeModal(id) { // закрыть текущее модальное окно, и открыть новое через 700 мс
        closeModal();
        setTimeout(() => showModal(id), 700);
    }
    
    function closeModal() {
        overlay.classList.remove("visible");
        body.classList.remove("hideScroll");
        document.querySelector(".modal.visible").classList.remove("visible");
    }
    
    document.querySelectorAll("[data-modal]").forEach(item => {
        item.addEventListener("click", (e) => showModal(e.target.dataset.modal));
    });

    document.querySelectorAll("[data-changeModal]").forEach(item => {
        item.addEventListener("click", (e) => changeModal(e.target.dataset.changemodal));
    });
    
    document.querySelectorAll("[data-closeModal]").forEach(item => {
        item.addEventListener("click", () => closeModal());
    });
}

initModal();
    function initBurgerMenu() {
    let button_burger = $("[data-burger='button']");
    let menu_burger = $("[data-burger='menu']");
    let overlay = document.querySelector(".overlay_burger");
    let body = document.body;
    
    $(button_burger).click(() => {
        menu_burger.toggleClass("active")
    });

    overlay.addEventListener("click", () => {
        $(button_burger).click();
        $(button_burger).find("input").prop('checked', false);
    });
}

initBurgerMenu();
    // link: https://selectric.js.org

function initSelectric() {
    document.querySelectorAll("select").forEach(item => {
        $(item).selectric();
    });
}

initSelectric();
    function initScroll() {
    let overlay_burger = document.querySelector(".overlay_burger");

    document.querySelectorAll("[data-scroll]").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            scrollTo(e.target.dataset.scroll)
        });
    });

    function scrollTo(target) {
        if (document.querySelector(".overlay_burger.visible") !== null) { // если в момент клика открыта шторка бургер-меню
            overlay_burger.click();
        }
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    }
}

initScroll();
    Highcharts.chart('stategyPromoChart', {
    chart: {
      type: 'spline',
      style: {"fontFamily": ""}
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      labels: {
        style: {
            fontSize: "16px",
            color: "#373943"
        }
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return (this.value / 1000) + 'к';
        },
        style: {
            fontSize: "16px",
            color: "#373943"
        }
      },
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      useHTML: true
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: 'transparent',
          lineWidth: 1
        }
      }
    },
    series: [

    {
      name: 'Портфель',
      marker: {
        symbol: 'circle'
      },
      data: [1500, 2100, 3500, 5500, 4200, 6500, 7200],
      color: "#3E54D8"
    }, 
    {
      name: 'S&P 500',
      marker: {
        symbol: 'circle'
      },
      data: [2200, 2300, 5200, 3700, 4000, 7800, 3800],
      color: "#DE4355"
    },
    {
        name: 'Советник',
        marker: {
          symbol: 'circle'
        },
        data: [4200, 3300, 1200, 7700, 2000, 5800, 1800],
        color: "#199F27"
    }

    ]
  });
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

    document.querySelectorAll(".myStrategy-news-container .table-content-item").forEach(item => {
        item.addEventListener("click", (e) => {
            item.classList.toggle("shown")
        });
    });
    
});