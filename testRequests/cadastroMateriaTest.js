var request = require('request');

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: 'http://192.168.15.107:3000/cadastro/materia',
    method: 'POST',
    headers: headers,
    form: {
          	usuario: {
          		email: "bacs96@gmail.com"
          	},
          	materia: {
          	  codigo: "Q123",
          	  nome: "Redes",
          	  professor: "Kelton",
          	  criterioAval: "MP*0.2+MT*0.5",
          	  qteProvas: 2,
          	  qteTrabalhos: 2,
          	  qteExercicios: 0,
          	  dataAula: [{ diaSemana: "Segunda", horaAula: { hora: 14, min: 00 } }],
          	  faltas: [{totalAulas: 20, porcFaltas: 0.7, qtdeFaltas: 12}],
          	  provas: [{prova: "P1", data: "01/12/2017", nota: 0}],
          	  trabalhos: [{trabalho: "T1", data: "01/14/2017", nota: 2}]
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
