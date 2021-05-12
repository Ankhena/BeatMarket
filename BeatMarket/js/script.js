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
    function initBurgerMenu() {
    let button_burger = $("[data-burger='button']");
    let menu_burger = $("[data-burger='menu']");
    let overlay = document.querySelector(".overlay_burger");
    let body = document.body;
    
    $(button_burger).click(() => {
        menu_burger.toggleClass("active")
        body.classList.toggle("hideScroll");
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
    function initMoveStrategy() {
    let moveActive = false;
    let strategies = document.querySelectorAll(".myStrategy-items-item");

    $(".myStrategy-items").sortable();
    $(".myStrategy-items").disableSelection();
    $(".myStrategy-items").sortable("disable");

    document.querySelectorAll(".myStrategy-header button").forEach(item => {
        item.addEventListener("click", (e) => {
            item.classList.toggle("active");
            moveActive = !moveActive;

            if (moveActive) {
                $(".myStrategy-items").sortable("enable");
            }
            else {
                $(".myStrategy-items").sortable("disable");
            }

            strategies.forEach(item => {
                item.classList.toggle("move");
            });

        });
    });
}

initMoveStrategy();
    const myGraph = document.querySelector("#dividendsGraph");
if (myGraph !== null) {
    Highcharts.chart('dividendsGraph', {
        chart: {
            type: 'variablepie',
            backgroundColor: 'transparent'
        },
        title: {
            text: ''
        },
        tooltip: {
            headerFormat: '',
            pointFormat: `
        <div style="text-align: center;">
          <h5>{point.name}</h5>
          <span>{point.y}$</span>
        </div>
      `,
            useHTML: true
        },
        series: [{
            innerSize: '60%',
            zMin: 1,
            name: 'countries',
            data: [{
                name: 'AMAT',
                y: 1000,
                z: 100,
                color: "#199F27"
            }, {
                name: 'AMGN',
                y: 1000,
                z: 100,
                color: "#DE4355"
            }, {
                name: 'BFB',
                y: 1000,
                z: 100,
                color: "#3E54D8"
            }, {
                name: 'Other',
                y: 2000,
                z: 100,
                color: "#929398"
            }]
        }]
    });
}
    function initInputCounter() {
    document.querySelectorAll("[data-counter]").forEach(item => {
        item.addEventListener("click", () => {
            let value = +document.querySelector(`#${item.dataset.counter}`).innerText;
            (item.dataset.operation === "minus" ? value-- : value++);
            document.querySelector(`#${item.dataset.counter}`).innerText = value;
        });
    });
}

initInputCounter();

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