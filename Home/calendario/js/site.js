var clndr = {};

$( function() {

  // TATO - FORMATO DE LOS MESES USANDO MOMENT.JS
  var lastMonth    = moment().add('month', -1).format('YYYY-MM');
  var currentMonth = moment().format('YYYY-MM');
  var nextMonth    = moment().add('month', 1).format('YYYY-MM');

  // TATO - AQUI VAN LOS EVENTOS ... PUDIERAMOS CONECTARLO A UNA DB Y SACAR TODA LA INFO

  var events = [
    { date: lastMonth + '-' + '01',    title: '01 - Hiperinflacion y Consecuencias', location: 'Auditorio' },
    { date: lastMonth + '-' + '07',    title: '07 - Curso de Fotografia', location: 'Grama' },
    { date: lastMonth + '-' + '12',    title: '12 - Food Trucks', location: 'Cincuentenario' },
    { date: lastMonth + '-' + '28',    title: '28 - Fiesta el Guamazo', location: 'La Lagunita' },
    { date: currentMonth + '-' + '10', title: '10 - Charla de Criptomoneadas', location: 'Aula Magna' },
    { date: currentMonth + '-' + '19', title: '19 - Ayuda a los Enfermos', location: 'Parque Social' },
    { date: currentMonth + '-' + '23', title: '23 - Conversatorio en Frances', location: 'CEICOSO - A554' },
    { date: nextMonth + '-' + '01',    title: '01 - Hiperinflacion y Consecuencias', location: 'Auditorio' },
    { date: nextMonth + '-' + '07',    title: '07 - Curso de Fotografia', location: 'Grama' },
    { date: nextMonth + '-' + '12',    title: '12 - Food Trucks', location: 'Cincuentenario' },
    { date: nextMonth + '-' + '28',    title: '28 - Fiesta el Guamazo', location: 'La Lagunita' }
  ];

  clndr = $('#full-clndr').clndr({
    template: $('#full-clndr-template').html(),
    events: events,
    forceSixRows: true,
  });

  $('#mini-clndr').clndr({
    template: $('#mini-clndr-template').html(),
    events: events,
    clickEvents: {
      click: function(target) {
        if(target.events.length) {
          var daysContainer = daysOfTheWeek;//$('#mini-clndr').find('.days-container');
          daysContainer.toggleClass('show-events', true);
          $('#mini-clndr').find('.x-button').click( function() {
            daysContainer.toggleClass('show-events', false);
          });
        }
      }
    },
    adjacentDaysChangeMonth: true,
    forceSixRows: true
  });

  $('#clndr-3').clndr({
    template: $('#clndr-3-template').html(),
    events: events,
    showAdjacentMonths: false
  });

  // $('#clndr-4').clndr({
  //   template: $('#clndr-4-template').html(),
  //   events: events,
  //   lengthOfTime: {
  //     days: 7,
  //     interval: 7
  //   }
  // });
});