var request = require('request');

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: 'http://192.168.15.107:3000/alterar/usuario/materia',
    method: 'POST',
    headers: headers,
    form: {
          	usuario: {
          		email: "bacs96@gmail.com"
          	},
          	materia: {
          	  nome: "Redes",
          	  professor: "Kelton",
          	  criterioAval: {mp:0.8,mt:0,me:0.2},
          	  qteProvas: 2,
          	  qteTrabalhos: 2,
          	  qteExercicios: 0,
          	  dataAula: [{diaSemana: "Segunda", horaIni: { hora: 14, min: 00 }, horaFin: { hora: 18, min: 00 } }],
          	  faltas: {totalAulas: 20, porcFaltas: 0.7, qtdeFaltas: 12},
          	  notaProvas: [0,8,10,5],
          	  notaTrabalhos: [],
              notaExercicios: [10,0,0.2],
              arquivado: false
          	}
          }
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body);
    }else {
      console.log(error);
    }
})
