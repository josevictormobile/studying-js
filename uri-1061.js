var diaInicio = "Dia 5";

var horaInicio = "08 : 12 : 23";

var diaFinal = "Dia 9";

var horaFinal = "06 : 13 : 23";

var hora = horaInicio[0]+horaInicio[1];
var minuto = horaInicio[5]+horaInicio[6];
var segundo = horaInicio[10]+horaInicio[11];

var dia = diaInicio[4]+diaInicio[5];

var d = parseInt(dia);
var h = parseInt(hora);
var m = parseInt(minuto);
var s = parseInt(segundo);

var totalEmSegundo = h * 60 *60 + m *60 + s;
var tempoRecheio = 86400-totalEmSegundo;
d++;


