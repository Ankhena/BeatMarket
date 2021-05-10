Highcharts.chart('dividendsGraph', {
    chart: {
      type: 'variablepie',
      backgroundColor: 'transparent'
    },
    title: {
      text: ''
    },
    tooltip: {
      enabled: false
    },
    series: [{
      innerSize: '60%',
      zMin: 1,
      name: 'countries',
      data: [{
        name: 'AMAT',
        y: 1000,
        z: 100,
        color: "red"
      }, {
        name: 'AMGN',
        y: 1000,
        z: 100
      }, {
        name: 'BFB',
        y: 1000,
        z: 100
      }, {
        name: 'Other',
        y: 2000,
        z: 100
      }]
    }]
  });