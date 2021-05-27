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