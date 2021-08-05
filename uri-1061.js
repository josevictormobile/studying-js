//ENTRADAS

// Input Sample	
// Dia 5
// 08 : 12 : 23
// Dia 9
// 06 : 13 : 23

// Output Sample
// 3 dia(s)
// 22 hora(s)
// 1 minuto(s)
// 0 segundo(s)

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var diaInicio = lines.shift();
var horaInicio = lines.shift();
var diaFinal = lines.shift();
var horaFinal = lines.shift();

//CAPTURA DOS DADOS QUE QUANTIFICAM TEMPO NAS ENTRADAS DE INICIO
var hora = horaInicio[0]+horaInicio[1];
var minuto = horaInicio[5]+horaInicio[6];
var segundo = horaInicio[10]+horaInicio[11];

var dia = diaInicio[4]+diaInicio[5];

//PARSE DOS TEMPOS INICIAIS PARA INTEIRO
var di = parseInt(dia);
var hi = parseInt(hora);
var mi = parseInt(minuto);
var si = parseInt(segundo);

//CAPTURA DOS DADOS QUE QUANTIFICAM TEMPO NAS ENTRADAS DE TÉRMINO
var hora = horaFinal[0]+horaFinal[1];
var minuto = horaFinal[5]+horaFinal[6];
var segundo = horaFinal[10]+horaFinal[11];

var dia = diaFinal[4]+diaFinal[5];

//PARSE DOS TEMPOS FINAIS PARA INTEIRO
var df = parseInt(dia);
var hf = parseInt(hora);
var mf = parseInt(minuto);
var sf = parseInt(segundo);


var totalEmSegundoDodiaInicial = hi * 60 *60 + mi *60 + si;
var tempoRecheioDodiaInicial = 86400-totalEmSegundoDodiaInicial;//quero
di++;
var qtdDias = df-di;
var tempoEmSegundosDosDias = qtdDias*24*60*60;//quero
var tempoEmSegundosDoDiaFinal = hf * 60 *60 + mf *60 + sf;//quero

var totalSegundos = tempoRecheioDodiaInicial+tempoEmSegundosDosDias+tempoEmSegundosDoDiaFinal;

var respostaDias = totalSegundos/86400;
var respostaHoras = (totalSegundos%86400)/3600;
var respostaMin = ((totalSegundos%86400)%3600)/60;
var respostaSeg = ((totalSegundos%86400)%3600)%60;

console.log(`${Math.trunc(respostaDias)} dia(s)`);
console.log(`${Math.trunc(respostaHoras)} hora(s)`);
console.log(`${Math.trunc(respostaMin)} minuto(s)`);
console.log(`${Math.trunc(respostaSeg)} segundo(s)`);




