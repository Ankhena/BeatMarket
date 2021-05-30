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
    let html = document.documentElement;
    let body = document.body;
    let scrollBarWidth = 0

    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0); // высота видимой страницы
    let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight); // общ. высота страницы

    if (height > vh) {
        scrollBarWidth = getScrollBarWidth(); // чтобы не прыгала ширина сайта при скрытии скролла 
    }

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
    const myRenderGraph = document.querySelector("#stategyPromoChart");
if (myRenderGraph !== null) {
    Highcharts.chart('stategyPromoChart', {
        chart: {
            type: 'spline',
            style: { "fontFamily": "" },
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
}
    function initSearchInput() {
    document.querySelectorAll(".mySearchContainer").forEach(item => {

        item.addEventListener("input", (e) => {
            let input, filter, a, i;
            input = document.querySelector(".mySearchInput");
            filter = input.value.toUpperCase();
            div = document.querySelector(".mySearchContainer");
            a = div.getElementsByTagName("div");
            for (i = 0; i < a.length; i++) {
                txtValue = a[i].textContent || a[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    a[i].style.display = "";
                } else {
                    if (!a[i].classList.contains("add")) {
                        a[i].style.display = "none";
                    }
                }
            }
        });
    
    });

    let breadcrumbs = []; // тут будут хранится объекты для breadcrumb

    function renderBreadcrumbs(breadcrumbsData) {
        const breadcrumbsContainer = document.querySelector(".breadcrumbs");
        if (breadcrumbsContainer !== null) {
            breadcrumbsContainer.innerHTML = ""; // очищаем все внутренние ноды

            breadcrumbsData.forEach((item, i) => { // и по дате загружаем новые
                let breadcrumb = document.createElement("div");
                breadcrumb.classList.add("breadcrumb");
                breadcrumb.setAttribute("data-id", i);
    
                let breadcrumb_name = document.createElement("strong");
                breadcrumb_name.innerHTML = item.name;
    
                let breadcrumb_org = document.createElement("span");
                breadcrumb_org.innerHTML = item.org;
    
                breadcrumb.appendChild(breadcrumb_name);
                breadcrumb.appendChild(breadcrumb_org);
    
                breadcrumbsContainer.appendChild(breadcrumb);
    
                breadcrumb.addEventListener("click", function(e) {
                    let id = breadcrumb.getAttribute("data-id"); // при клике получаем id breadcrumb
                    breadcrumbs.splice(id, 1); // удаляем из массива объект с необходимым breadcrmb
                    renderBreadcrumbs(breadcrumbs); // перерисовываем
                });
    
            });
        }
    }

    document.querySelectorAll(".input_search-container > div").forEach(item => {

        item.addEventListener("mousedown", () => {
            let name = item.querySelector(".content strong").innerHTML;
            let org = item.querySelector(".content span").innerHTML;

            breadcrumbs.push({name, org}); // добавили в массив новый объект с выбранными данными
            renderBreadcrumbs(breadcrumbs); // перерисовали

        });
    });
    
    document.querySelectorAll(".mySearchInput").forEach(item => {
        myContainer = document.querySelector(".input_search-container");
    
        item.addEventListener("focus", (e) => {
            myContainer.classList.add("visible");
        });
    
        item.addEventListener("blur", (event) => {
            myContainer.classList.remove("visible");
        });
    });

    renderBreadcrumbs(breadcrumbs);
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
                item.children[1].innerHTML = "Сохранить порядок";
            }
            else {
                $(".myStrategy-items").sortable("disable");
                item.children[1].innerHTML = "Изменить порядок";
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
            center: ["150px", "150px"],
            size: 40,
            sizeBy: 'radius',
            innerSize: '60%',
            zMin: 1,
            name: 'countries',
            borderWidth: 0,
            borderColor: null,
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
    function initBanchGraph() {
    const banchData = {
        months: ["Янв 2020", "Фев 2020", "Мар 2020", "Апр 2020", "Май 2020", "Июн 2020", "Июл 2020", "Авг 2020", "Сен 2020", "Окт 2020", "Ноя 2020", "Дек 2020"],
        data: [
            {
                name: "Мой портфель",
                class: "primary"
            },
            {
                name: "S&P 500",
                class: "success"
            },
        ],
        percentData: [
            [32.56, -12.22],
            [4.44, 5.12], 
            [6.18, -5.22], 
            [-10.22, 16.66],
            [10.23, -5.11],
            [12.22, 20.66],
            [-5.22, 4.44], 
            [10.23, -12.22], 
            [-5.11, 20.66], 
            [32.56, 10.23], 
            [5.12, 20.66], 
            [-5.11, 16.66]
        ]
    };

    const maxValue = fillGraphLabels();
    fillDescrItems();
    fillMainGraph(maxValue);

    function fillGraphLabels() { // заполнить серые цифры и графика (обозначения слева)
        let nums = banchData.percentData.map(item => Math.max.apply(null, item));
        let maxNum = Math.max.apply(null, nums);
        let cleanMaxNum = Math.ceil(maxNum).toFixed(2);
        let cleanArray = [cleanMaxNum, 0, "-" + cleanMaxNum];

        let parentNode = document.querySelector(".banchGraph-descr-percent");
        if (parentNode === null) {
            return false;
        }

        cleanArray.forEach(item => {
            let elem = document.createElement("span");
            elem.innerHTML = item;
            parentNode.appendChild(elem);
        });

        return cleanMaxNum;
    }

    function fillDescrItems() {
        let parentNode = document.querySelector(".banchGraph-descr-items");
        if (parentNode === null) {
            return false;
        }

        banchData.data.forEach(item => {
            let myNode = document.createElement("div");
            myNode.classList.add("banchGraph-descr-items-item");
    
            let mySpan = document.createElement("span");
            mySpan.classList.add(item.class);

            if (window.outerWidth > 720) {
                mySpan.innerHTML = item.name;
            }

            myNode.appendChild(mySpan);
            parentNode.appendChild(myNode);
        });
    }

    function fillMainGraph(maxValue) {
        let parentNode = document.querySelector(".banchGraph-content");
        if (parentNode === null) {
            return false;
        }

        banchData.months.forEach((item, i) => {
            let banchGraph_item = document.createElement("div");
            banchGraph_item.classList.add("banchGraph-content-item");

            let banchGraph_item_graph = document.createElement("div");
            banchGraph_item_graph.classList.add("banchGraph-content-item-graph");

            let banchGraph_item_graph_half = document.createElement("div");
            banchGraph_item_graph_half.classList.add("banchGraph-content-item-graph-half");


            let banchGraph_item_date = document.createElement("div");
            banchGraph_item_date.classList.add("banchGraph-content-item-date");

            let banchGraph_item_date_span = document.createElement("span");
            banchGraph_item_date_span.innerHTML = item;
            banchGraph_item_date.appendChild(banchGraph_item_date_span);

            let banchGraph_item_stat = document.createElement("div");
            banchGraph_item_stat.classList.add("banchGraph-content-item-stat");

            banchData.percentData[i].forEach((elem, j) => {
                let mySpan = document.createElement("span");
                mySpan.innerHTML = elem + "%";
                mySpan.classList.add((elem > 0 ? "success" : "error"));
                banchGraph_item_stat.appendChild(mySpan);

                let banchGraph_item_graph_half_item = document.createElement("div");
                banchGraph_item_graph_half_item.classList.add("banchGraph-content-item-graph-half-item");
                banchGraph_item_graph_half_item.classList.add(banchData.data[j].class);

                let myHeight = (elem * 100) / maxValue;

                if (myHeight < 0) {
                    myHeight = Math.abs(myHeight);
                    banchGraph_item_graph_half_item.style.transform = "translateY(calc(100% + 2px)) rotate(180deg)";
                }

                banchGraph_item_graph_half_item.style.height = `${myHeight}%`;

                banchGraph_item_graph_half.appendChild(banchGraph_item_graph_half_item);

            });

            banchGraph_item_graph.appendChild(banchGraph_item_graph_half);

            banchGraph_item.appendChild(banchGraph_item_graph);
            banchGraph_item.appendChild(banchGraph_item_date);
            banchGraph_item.appendChild(banchGraph_item_stat);
            parentNode.appendChild(banchGraph_item);
        });
    }
}

initBanchGraph();
    const separation_graph_1_data = [{
    name: 'Intel',
    y: 5,
    z: 100,
    color: "#5BDE60"
}, {
    name: 'Texas instrumental',
    y: 23.03,
    z: 100,
    color: "#5B97DE"
}, {
    name: 'Tractor supply',
    y: 7.11,
    z: 100,
    color: "#DE5B5B"
}, {
    name: 'Pool',
    y: 8.25,
    z: 100,
    color: "#DEAA5B"
}, {
    name: 'ZM company',
    y: 3.03,
    z: 100,
    color: "#5E5BDE"
}, {
    name: 'Mastercard',
    y: 5.24,
    z: 100,
    color: "#BC5BDE"
}, {
    name: 'Other',
    y: 55.67,
    z: 100,
    color: "#acacac"
}];

const separation_graph_2_data = [{
    name: 'Financial',
    y: 5,
    z: 100,
    color: "#5BDE60"
}, {
    name: 'Technology',
    y: 33.03,
    z: 100,
    color: "#5B97DE"
}, {
    name: 'Tractor supply',
    y: 17.11,
    z: 100,
    color: "#DE5B5B"
}, {
    name: 'Pool',
    y: 28.25,
    z: 100,
    color: "#DEAA5B"
}, {
    name: 'ZM company',
    y: 13.03,
    z: 100,
    color: "#5E5BDE"
}];

const separation_graph_3_data = [{
    name: 'Equity',
    y: 100,
    z: 100,
    color: "#DE5B5B"
}];

const separation_graph_4_data = [{
    name: 'INT',
    y: 23.03,
    z: 100,
    color: "#2C7259"
}, {
    name: 'TXN',
    y: 7.11,
    z: 100,
    color: "#FFEB34"
}, {
    name: 'TCKO',
    y: 8.25,
    z: 100,
    color: "#B22D2D"
}, {
    name: 'Pool',
    y: 3.03,
    z: 100,
    color: "#BC5BDE"
}, {
    name: 'MA',
    y: 5.24,
    z: 100,
    color: "#2D1336"
}, {
    name: 'MMA',
    y: 55.67,
    z: 100,
    color: "#842EA3"
}, {
    name: 'LEG',
    y: 3.03,
    z: 100,
    color: "#5BDE60"
}, {
    name: 'INT',
    y: 23.03,
    z: 100,
    color: "#2C7259"
}, {
    name: 'TXN',
    y: 7.11,
    z: 100,
    color: "#FFEB34"
}, {
    name: 'TCKO',
    y: 8.25,
    z: 100,
    color: "#B22D2D"
}, {
    name: 'Pool',
    y: 3.03,
    z: 100,
    color: "#BC5BDE"
}, {
    name: 'MA',
    y: 5.24,
    z: 100,
    color: "#2D1336"
}, {
    name: 'MMA',
    y: 55.67,
    z: 100,
    color: "#842EA3"
}, {
    name: 'LEG',
    y: 3.03,
    z: 100,
    color: "#5BDE60"
}, {
    name: 'INT',
    y: 23.03,
    z: 100,
    color: "#2C7259"
}, {
    name: 'TXN',
    y: 7.11,
    z: 100,
    color: "#FFEB34"
}, {
    name: 'TCKO',
    y: 8.25,
    z: 100,
    color: "#B22D2D"
}, {
    name: 'Pool',
    y: 3.03,
    z: 100,
    color: "#BC5BDE"
}, {
    name: 'MA',
    y: 5.24,
    z: 100,
    color: "#2D1336"
}, {
    name: 'MMA',
    y: 55.67,
    z: 100,
    color: "#842EA3"
}, {
    name: 'LEG',
    y: 3.03,
    z: 100,
    color: "#5BDE60"
}];

const separation_graph_5_data = [{
    name: 'Financial',
    y: 5,
    z: 100,
    color: "#5BDE60"
}, {
    name: 'Technology',
    y: 33.03,
    z: 100,
    color: "#5B97DE"
}, {
    name: 'Tractor supply',
    y: 17.11,
    z: 100,
    color: "#DE5B5B"
}, {
    name: 'Pool',
    y: 28.25,
    z: 100,
    color: "#DEAA5B"
}, {
    name: 'ZM company',
    y: 13.03,
    z: 100,
    color: "#5E5BDE"
}, {
    name: 'Industrial goods',
    y: 5.24,
    z: 100,
    color: "#BC5BDE"
}];

const separation_graph_6_data = [{
    name: 'Акции',
    y: 80,
    z: 100,
    color: "#5E5BDE"
}, {
    name: 'ETFS',
    y: 0,
    z: 100,
    color: "#5B97DE"
}, {
    name: 'Фонды',
    y: 20,
    z: 100,
    color: "#DE5B5B"
}, {
    name: 'Денежные средства',
    y: 0,
    z: 100,
    color: "#DEAA5B"
}];

const separation_graph_1 = document.querySelector("#separation_graph_1");
const separation_graph_2 = document.querySelector("#separation_graph_2");
const separation_graph_3 = document.querySelector("#separation_graph_3");
const separation_graph_4 = document.querySelector("#separation_graph_4");
const separation_graph_5 = document.querySelector("#separation_graph_5");
const separation_graph_6 = document.querySelector("#separation_graph_6");

addPerformanceGraph(separation_graph_1, "separation_graph_1", separation_graph_1_data, false, "60%");
addPerformanceGraph(separation_graph_2, "separation_graph_2", separation_graph_2_data, false, "60%");
addPerformanceGraph(separation_graph_3, "separation_graph_3", separation_graph_3_data, false,"60%");
addPerformanceGraph(separation_graph_4, "separation_graph_4", separation_graph_4_data, false, "70%");
addPerformanceGraph(separation_graph_5, "separation_graph_5", separation_graph_5_data, true, "60%");
addPerformanceGraph(separation_graph_6, "separation_graph_6", separation_graph_6_data, true, "60%");

function addPerformanceGraph(node, id, data, isInput, size) {
    if (node !== null) {
        Highcharts.chart(id, {
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
              <span>{point.y}%</span>
            </div>
          `,
                useHTML: true
            },
            series: [{
                innerSize: size,
                zMin: 1,
                name: 'countries',
                borderWidth: 0,
                borderColor: null,
                data: data
            }]
        });

        if (isInput) {
            addPerformanceGraphLabelsRadio(node.nextElementSibling, data, id);
        }
        else {
            if (size === "70%") {
                addPerformanceGraphLabels(document.querySelector(".content-graphInfo"), data);
            }
            else {
                addPerformanceGraphLabels(node.nextElementSibling, data);
            }
        }
        
        
    }
}

function addPerformanceGraphLabels(node, data) {

    data.forEach(item => {
        let graphContent = document.createElement("div");
        graphContent.classList.add("graphContent");

        let graphContentName = document.createElement("div");
        graphContentName.classList.add("graphContent-name");

        let graphRound = document.createElement("div");
        graphRound.style.backgroundColor = item.color;

        let graphName = document.createElement("span");
        graphName.innerHTML = item.name;

        graphContentName.appendChild(graphRound);
        graphContentName.appendChild(graphName);
    
        let graphValue = document.createElement("strong");
        graphValue.classList.add("graphContent-value");
        graphValue.innerHTML = item.y + "%";

        graphContent.appendChild(graphContentName);
        graphContent.appendChild(graphValue);

        node.appendChild(graphContent);
    });

}

function addPerformanceGraphLabelsRadio(node, data, name) {

    data.forEach(item => {
        let graphContent = document.createElement("div");
        graphContent.classList.add("graphContent");

        let graphContentName = document.createElement("label");
        graphContentName.classList.add("graphContent-name");
        graphContentName.classList.add("label");

        let graphRound = document.createElement("div");
        graphRound.style.backgroundColor = item.color;

        let graphRadio = document.createElement("input");
        graphRadio.setAttribute("type", "radio");
        graphRadio.setAttribute("name", name);
        graphRadio.classList.add("visually_hidden");
        graphRadio.classList.add("radio_custom");

        let graphName = document.createElement("span");
        graphName.innerHTML = item.name;

        graphContentName.appendChild(graphRound);
        graphContentName.appendChild(graphRadio);
        graphContentName.appendChild(graphName);
    
        let graphValue = document.createElement("strong");
        graphValue.classList.add("graphContent-value");
        graphValue.innerHTML = item.y + "%";

        graphContent.appendChild(graphContentName);
        graphContent.appendChild(graphValue);

        node.appendChild(graphContent);
    });

}
    function initDateRangePicker() {

    rusLocale = {
        "format": 'DD.MM.YYYY',
        "applyLabel": "Ок",
        "cancelLabel": "Отмена",
        "fromLabel": "От",
        "toLabel": "До",
        "customRangeLabel": "Произвольный",
        "daysOfWeek": [
            "Вс",
            "Пн",
            "Вт",
            "Ср",
            "Чт",
            "Пт",
            "Сб"
        ],
        "monthNames": [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ],
        firstDay: 1
    }
    
    $('#chooseDataStrategy').daterangepicker({
        locale: rusLocale,
        opens: 'left'
    }, function(start, end, label) {
        $("#chooseDataStrategyValue").text(start.format('DD.MM.YYYY') + " - " + end.format('DD.MM.YYYY'));
    });
    
    $('.period-info-date').daterangepicker({
        locale: rusLocale,
        opens: 'right'
    }, function(start, end, label) {
        $(".period-info-date span").text(start.format('DD.MM.YYYY') + " - " + end.format('DD.MM.YYYY'));
    });
}

initDateRangePicker();

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

    document.querySelectorAll(".myPapers-item").forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("opened");
        });
    });

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