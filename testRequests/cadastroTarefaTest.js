var request = require('request');

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: 'http://192.168.15.107:3000/cadastro/tarefa',
    method: 'POST',
    headers: headers,
    form: {
          	usuario: {
          		email: "bacs96@gmail.com"
          	},
          	tarefa: {
          	  tarefa: "Fazer trabalho de CG!",
              horaIni: {hora:14, min:0},
              horaFin: {hora:19, min:0}
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
