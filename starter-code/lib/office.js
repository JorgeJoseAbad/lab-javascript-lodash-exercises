
var opinions = [ "This is the best job ever",
                  "Satisfied",
                  "At least I get paid",
                  "I'm looking for another job",
                  "I don't want to answer"
                ];

var oficce = [];

//var opinion='';

console.log(opinions);
console.log("********");


function sampleOpinion(){
  return _.sample(opinions);
}

opinion=sampleOpinion(opinions);
console.log(opinion);

function sampleDepartament(){
  /*var departament=[];
  for (i=0;i<10;i++){
    departament[i]=sampleOpinion();
    //console.log(departament[i]);
  }
  */
  //var departament=[];
  //console.log(departament);
  return _.times(10,sampleOpinion);
}


function sampleOficce(){
  //console.log(oficce);
  return _.times(5,sampleDepartament);
}

oficce=sampleOficce();
console.log(oficce);
console.log("-----------------");


/*
for (i=0;i<5;i++){
  oficce[i]=[];
  for (j=0;j<10;j++){
      var opinion= _.sample(opinions);
    oficce[i][j]=opinion;
    }
}
console.log(oficce);
*/



//esto funciona paso 2
//function sampleOpinion(){
//  return _.sample(opinions);
//}

/*
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function getOpinion() {
 return _.sample(opinions);
}
var sampleOpinion=getOpinion();
console.log("Sample en la funcion getOpinion toma aleatoriamente una opinion: ");
console.log("y la guarda en sampleOpinion");
console.log(sampleOpinion);

console.log("_times ejecunta 10 veces  getOpinion y guarda los valores:");
function getDepartmentOpinion(){
 return _.times(10, getOpinion);
}
console.log("en departamentOpinion");
var departamentOpinion=getDepartmentOpinion();
console.log(departamentOpinion);

console.log("repite 5 veces get departmentopinion y lo guarda en array companySatisfaction");
function getCompanySatisfaction() {
 return _.times(5, getDepartmentOpinion);
}
var companySatisfaction=getCompanySatisfaction();
console.log(companySatisfaction);

*/
console.log("----- Esto es lo de los nacimientos---------");
var birthdays = ["Severus Snape", "9 January", "Arthur Weasley", "6 February",
                 "Ron Weasley", "1 March", "Remus Lupin", "10 March",
                 "Fred & George Weasley", "1 April", "Pomona Sprout", "15 May",
                  "Draco Malfoy", "5 June", "Dobby", "28 June",
                  "Neville Longbottom", "30 July", "Harry Potter", "31 July",
                  "Ginevra Weasley", "11 August", "Percy Weasley ", "22 August",
                  "Hermione Granger", "19 September", "Minerva McGonagall",
                  "4 October", "Filius Flitwick", "17 October", "Molly Weasley",
                  "30 October", "Bill Weasley", "29 November", "Rubeus Hagrid",
                  "6 December", "Charlie Weasley", "12 December"];




var birthdays2D = [];
var birthdays1D =[];
var dates1D=[];

function getBithdaysNames(array){
  var birth1D=[];
  for (i=0;i<array.length;i=i+2){
      //console.log(i+" "+array[i]);
      birth1D.push(array[i]);
 }
return birth1D;
}

function getBirthdayDate(array){
var dates=[];
for (i=1;i<array.length;i=i+2){
  //console.log(i+" "+array[i]);
  dates.push(array[i]);
}
  return dates;
}

var birthdays1D=getBithdaysNames(birthdays);
console.log("array de nombres:  "+birthdays1D);
console.log(birthdays1D);

var dates1D=getBirthdayDate(birthdays);
console.log("array de fechas:  "+dates1D);
console.log(dates1D);




console.log("Intento de array 2D");
function make2D(array1,array2){
  mbirthdays2D=array1;
  for (i=0;i<array1.length;i++){
    mbirthdays2D[i][1].push(array2[i]);
  }
  return mbirthdays2D;
}

//usando lodash directamente con chunk
var mbirthdays2D=_.chunk(birthdays, 2);
console.log(mbirthdays2D);


var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

var newBirthdays=[];

newBirthdays=_.concat(moreBirthdays,birthdays);
console.log(newBirthdays);

//corrijo ahora mbirthdays2D
mbirthdays2D=_.chunk(newBirthdays,2);
console.log(mbirthdays2D);

console.log("---- The Password Problem ------");

var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  var i = 0;
   var comprobacion = _.times(password.length-1, function(){
      i++;
      //var subString = password[i-1];
      console.log(password[i-1],password.substring(i));
      return password.substring(i).includes(password[i-1]) ? "incorrect" : "correct";
    });

  if (_.includes(comprobacion, 'incorrect')) {
      console.log(comprobacion);
      console.log("El password: "+password+" no es valido");
    } else {
      console.log(comprobacion);
      console.log("El password: "+password+" es valido");
  }
};

noRepeatChar(goodPsswd);

noRepeatChar(badPsswd);

/* VIEJO TRABAJO DE AQUI ABAJO COMENTADO
fbirthdays2D = function(numrows, numcols, array1, array2){
    var arr = [];
    console.log("numrows: 19 "+numrows);
    console.log("numcols: 2 "+numcols);
    console.log(array1);
    console.log(array2);
    for (var i = 0; i < numrows; ++i){
      var columns=[];
      for (var j=0;j<2;j++){
            column = array1[i];

            }
      arr[i]=columns;
      }
    return arr;
};


var birthdays2D = fbirthdays2D(dates1D.length,2,birthdays1D,dates1D);

//var birthdays2D=make2D(birthdays1D,dates1D);
console.log(birthdays2D);
/*
var get2Darray=function(array){
  return _.toPairs(birthdays);
};

console.log(get2Darray());
// tambien se puede hacer con funtion get2Darray(array)
//var array2D=get2Darray(birthdays);
//console.log(array2D);

var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

var completeBirthdays=function(get2Darray()){


};
*/
