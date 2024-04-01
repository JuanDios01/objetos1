  // Clase para representar un Cliente
  class Cliente {
    nombre = '';
    email = '';
    codigo = '';
    edad = '';
  }

// Clase para representar un Viaje
  class Viaje {
    destino = '';
    duracionEnDias = 0;
    precio = 0;
    guiaTuristico = '';
  }
  
  // Clase para representar una maleta
  class maleta {
    destinomaleta = null;
    dueñoMaleta = null;
    peso = null;
    idMaleta = 0;
  }
  
  // Clase para representar un hotel
  class hotel {
    nombre = '';
    ubicacion = '';
    estrellas = 0;
    capacidad = 0;
  }
  
  // Clase para representar un Transporte
  class Transporte {
    conductor = '';
    capacidad = 0;
    horaSalida = '';
    codigoLateral = '';
    destinoTransporte = ``;
  }
  
  // Crear 15 instancias de cada clase
// inicio instancia cliente
const cliente1 = new Cliente();
cliente1.nombre = "Luis";
cliente1.email = "luis@example.com";
cliente1.codigo = "CL001";
cliente1.edad = 34;

const cliente2 = new Cliente();
cliente2.nombre = "Andrea";
cliente2.email = "andrea@example.com";
cliente2.codigo = "CL002";
cliente2.edad = 28;

const cliente3 = new Cliente();
cliente3.nombre = "José";
cliente3.email = "jose@example.com";
cliente3.codigo = "CL003";
cliente3.edad = 45;

const cliente4 = new Cliente();
cliente4.nombre = "Sofía";
cliente4.email = "sofia@example.com";
cliente4.codigo = "CL004";
cliente4.edad = 30;

const cliente5 = new Cliente();
cliente5.nombre = "Carlos";
cliente5.email = "carlos@example.com";
cliente5.codigo = "CL005";
cliente5.edad = 25;

const cliente6 = new Cliente();
cliente6.nombre = "María";
cliente6.email = "maria@example.com";
cliente6.codigo = "CL006";
cliente6.edad = 38;

const cliente7 = new Cliente();
cliente7.nombre = "Juan";
cliente7.email = "juan@example.com";
cliente7.codigo = "CL007";
cliente7.edad = 22;

const cliente8 = new Cliente();
cliente8.nombre = "Ana";
cliente8.email = "ana@example.com";
cliente8.codigo = "CL008";
cliente8.edad = 29;

const cliente9 = new Cliente();
cliente9.nombre = "David";
cliente9.email = "david@example.com";
cliente9.codigo = "CL009";
cliente9.edad = 41;

const cliente10 = new Cliente();
cliente10.nombre = "Laura";
cliente10.email = "laura@example.com";
cliente10.codigo = "CL010";
cliente10.edad = 36;

const cliente11 = new Cliente();
cliente11.nombre = "Daniel";
cliente11.email = "daniel@example.com";
cliente11.codigo = "CL011";
cliente11.edad = 27;

const cliente12 = new Cliente();
cliente12.nombre = "Patricia";
cliente12.email = "patricia@example.com";
cliente12.codigo = "CL012";
cliente12.edad = 33;

const cliente13 = new Cliente();
cliente13.nombre = "Oscar";
cliente13.email = "oscar@example.com";
cliente13.codigo = "CL013";
cliente13.edad = 39;

const cliente14 = new Cliente();
cliente14.nombre = "Teresa";
cliente14.email = "teresa@example.com";
cliente14.codigo = "CL014";
cliente14.edad = 24;

const cliente15 = new Cliente();
cliente15.nombre = "Sergio";
cliente15.email = "sergio@example.com";
cliente15.codigo = "CL015";
cliente15.edad = 31;
// fin instancia cliente

// incio instancia Viaje
const viaje1 = new Viaje();
viaje1.destino = "Cartagena";
viaje1.duracionEnDias = 7;
viaje1.precio = 1500;
viaje1.guiaTuristico = "isabela";

const viaje2 = new Viaje();
viaje2.destino = "Medellín";
viaje2.duracionEnDias = 5;
viaje2.precio = 1200;
viaje2.guiaTuristico = "Ana";

const viaje3 = new Viaje();
viaje3.destino = "Bogotá";
viaje3.duracionEnDias = 4;
viaje3.precio = 1100;
viaje3.guiaTuristico = "Carlos";

const viaje4 = new Viaje();
viaje4.destino = "Cali";
viaje4.duracionEnDias = 6;
viaje4.precio = 1300;
viaje4.guiaTuristico = "Laura";

const viaje5 = new Viaje();
viaje5.destino = "Santa Marta";
viaje5.duracionEnDias = 5;
viaje5.precio = 1400;
viaje5.guiaTuristico = "David";

const viaje6 = new Viaje();
viaje6.destino = "Villa de Leyva";
viaje6.duracionEnDias = 4;
viaje6.precio = 1000;
viaje6.guiaTuristico = "Emma";

const viaje7 = new Viaje();
viaje7.destino = "San Andrés";
viaje7.duracionEnDias = 3;
viaje7.precio = 900;
viaje7.guiaTuristico = "Petro";

const viaje8 = new Viaje();
viaje8.destino = "Leticia";
viaje8.duracionEnDias = 5;
viaje8.precio = 1300;
viaje8.guiaTuristico = "Julia";

const viaje9 = new Viaje();
viaje9.destino = "Manizales";
viaje9.duracionEnDias = 6;
viaje9.precio = 1250;
viaje9.guiaTuristico = "jose";

const viaje10 = new Viaje();
viaje10.destino = "Pereira";
viaje10.duracionEnDias = 7;
viaje10.precio = 1100;
viaje10.guiaTuristico = "Maria";

const viaje11 = new Viaje();
viaje11.destino = "Armenia";
viaje11.duracionEnDias = 5;
viaje11.precio = 950;
viaje11.guiaTuristico = "roberto";

const viaje12 = new Viaje();
viaje12.destino = "Bucaramanga";
viaje12.duracionEnDias = 7;
viaje12.precio = 1600;
viaje12.guiaTuristico = "Olga";

const viaje13 = new Viaje();
viaje13.destino = "Neiva";
viaje13.duracionEnDias = 5;
viaje13.precio = 1700;
viaje13.guiaTuristico = "Erik";

const viaje14 = new Viaje();
viaje14.destino = "Popayán";
viaje14.duracionEnDias = 6;
viaje14.precio = 1800;
viaje14.guiaTuristico = "pedro";

const viaje15 = new Viaje();
viaje15.destino = "Barranquilla";
viaje15.duracionEnDias = 10;
viaje15.precio = 2500;
viaje15.guiaTuristico = "Sofía";   
// fin instancia Viaje

// inicio instancia maleta
const maleta1 = new maleta();
maleta1.destinomaleta = "Cartagena";
maleta1.dueñoMaleta = "Luis";
maleta1.peso = 23;
maleta1.idMaleta = 1;

const maleta2 = new maleta();
maleta2.destinomaleta = "Medellín";
maleta2.dueñoMaleta = "Andrea";
maleta2.peso = 20;
maleta2.idMaleta = 2;

const maleta3 = new maleta();
maleta3.destinomaleta = "Bogotá";
maleta3.dueñoMaleta = "José";
maleta3.peso = 25;
maleta3.idMaleta = 3;

const maleta4 = new maleta();
maleta4.destinomaleta = "Cali";
maleta4.dueñoMaleta = "Sofía";
maleta4.peso = 22;
maleta4.idMaleta = 4;

const maleta5 = new maleta();
maleta5.destinomaleta = "Santa Marta";
maleta5.dueñoMaleta = "Carlos";
maleta5.peso = 18;
maleta5.idMaleta = 5;

const maleta6 = new maleta();
maleta6.destinomaleta = "Villa de Leyva";
maleta6.dueñoMaleta = "María";
maleta6.peso = 21;
maleta6.idMaleta = 6;

const maleta7 = new maleta();
maleta7.destinomaleta = "San Andrés";
maleta7.dueñoMaleta = "Juan";
maleta7.peso = 19;
maleta7.idMaleta = 7;

const maleta8 = new maleta();
maleta8.destinomaleta = "Leticia";
maleta8.dueñoMaleta = "Ana";
maleta8.peso = 24;
maleta8.idMaleta = 8;

const maleta9 = new maleta();
maleta9.destinomaleta = "Manizales";
maleta9.dueñoMaleta = "David";
maleta9.peso = 20;
maleta9.idMaleta = 9;

const maleta10 = new maleta();
maleta10.destinomaleta = "Pereira";
maleta10.dueñoMaleta = "Laura";
maleta10.peso = 22;
maleta10.idMaleta = 10;

const maleta11 = new maleta();
maleta11.destinomaleta = "Armenia";
maleta11.dueñoMaleta = "Daniel";
maleta11.peso = 23;
maleta11.idMaleta = 11;

const maleta12 = new maleta();
maleta12.destinomaleta = "Bucaramanga";
maleta12.dueñoMaleta = "Patricia";
maleta12.peso = 17;
maleta12.idMaleta = 12;

const maleta13 = new maleta();
maleta13.destinomaleta = "Neiva";
maleta13.dueñoMaleta = "Oscar";
maleta13.peso = 26;
maleta13.idMaleta = 13;

const maleta14 = new maleta();
maleta14.destinomaleta = "Popayán";
maleta14.dueñoMaleta = "Teresa";
maleta14.peso = 20;
maleta14.idMaleta = 14;

const maleta15 = new maleta();
maleta15.destinomaleta = "Barranquilla";
maleta15.dueñoMaleta = "Sergio";
maleta15.peso = 21;
maleta15.idMaleta = 15;
// fin instancia maleta

// incio instancia hotel
const hotel1 = new hotel();
hotel1.nombre = "Caribe Suites";
hotel1.ubicacion = "Cartagena";
hotel1.estrellas = 5;
hotel1.capacidad = 200;

const hotel2 = new hotel();
hotel2.nombre = "Medellín Central";
hotel2.ubicacion = "Medellín";
hotel2.estrellas = 4;
hotel2.capacidad = 150;

const hotel3 = new hotel();
hotel3.nombre = "Capital Inn";
hotel3.ubicacion = "Bogotá";
hotel3.estrellas = 5;
hotel3.capacidad = 250;

const hotel4 = new hotel();
hotel4.nombre = "Cali Vista";
hotel4.ubicacion = "Cali";
hotel4.estrellas = 4;
hotel4.capacidad = 180;

const hotel5 = new hotel();
hotel5.nombre = "Santa Marta Relax";
hotel5.ubicacion = "Santa Marta";
hotel5.estrellas = 5;
hotel5.capacidad = 220;

const hotel6 = new hotel();
hotel6.nombre = "Leyva Retreat";
hotel6.ubicacion = "Villa de Leyva";
hotel6.estrellas = 3;
hotel6.capacidad = 100;

const hotel7 = new hotel();
hotel7.nombre = "Andrés Paradise";
hotel7.ubicacion = "San Andrés";
hotel7.estrellas = 3;
hotel7.capacidad = 80;

const hotel8 = new hotel();
hotel8.nombre = "Leticia Lodge";
hotel8.ubicacion = "Leticia";
hotel8.estrellas = 3;
hotel8.capacidad = 50;

const hotel9 = new hotel();
hotel9.nombre = "Manizales Comfort";
hotel9.ubicacion = "Manizales";
hotel9.estrellas = 4;
hotel9.capacidad = 120;

const hotel10 = new hotel();
hotel10.nombre = "Pereira Plaza";
hotel10.ubicacion = "Pereira";
hotel10.estrellas = 5;
hotel10.capacidad = 200;

const hotel11 = new hotel();
hotel11.nombre = "Armenia Stay";
hotel11.ubicacion = "Armenia";
hotel11.estrellas = 4;
hotel11.capacidad = 130;

const hotel12 = new hotel();
hotel12.nombre = "Bucaramanga Residency";
hotel12.ubicacion = "Bucaramanga";
hotel12.estrellas = 4;
hotel12.capacidad = 160;

const hotel13 = new hotel();
hotel13.nombre = "Neiva Nook";
hotel13.ubicacion = "Neiva";
hotel13.estrellas = 4;
hotel13.capacidad = 140;

const hotel14 = new hotel();
hotel14.nombre = "Popayán Place";
hotel14.ubicacion = "Popayán";
hotel14.estrellas = 3;
hotel14.capacidad = 70;

const hotel15 = new hotel();
hotel15.nombre = "Barranquilla Bay";
hotel15.ubicacion = "Barranquilla";
hotel15.estrellas = 5;
hotel15.capacidad = 230;
// fin instancia hotel

// incio instancia Transporte
const transporte1 = new Transporte();
transporte1.conductor = "Pedro";
transporte1.capacidad = 40;
transporte1.horaSalida = "08:00";
transporte1.codigoLateral = "T001";
transporte1.destinoTransporte = "Cartagena";

const transporte2 = new Transporte();
transporte2.conductor = "María";
transporte2.capacidad = 30;
transporte2.horaSalida = "09:00";
transporte2.codigoLateral = "T002";
transporte2.destinoTransporte = "Medellín";

const transporte3 = new Transporte();
transporte3.conductor = "Juan";
transporte3.capacidad = 35;
transporte3.horaSalida = "10:00";
transporte3.codigoLateral = "T003";
transporte3.destinoTransporte = "Bogotá";

const transporte4 = new Transporte();
transporte4.conductor = "Laura";
transporte4.capacidad = 32;
transporte4.horaSalida = "11:00";
transporte4.codigoLateral = "T004";
transporte4.destinoTransporte = "Cali";

const transporte5 = new Transporte();
transporte5.conductor = "Carlos";
transporte5.capacidad = 28;
transporte5.horaSalida = "12:00";
transporte5.codigoLateral = "T005";
transporte5.destinoTransporte = "Santa Marta";

const transporte6 = new Transporte();
transporte6.conductor = "Luisa";
transporte6.capacidad = 20;
transporte6.horaSalida = "01:00";
transporte6.codigoLateral = "T006";
transporte6.destinoTransporte = "Villa de Leyva";

const transporte7 = new Transporte();
transporte7.conductor = "Sergio";
transporte7.capacidad = 25;
transporte7.horaSalida = "02:00";
transporte7.codigoLateral = "T007";
transporte7.destinoTransporte = "San Andrés";

const transporte8 = new Transporte();
transporte8.conductor = "Angela";
transporte8.capacidad = 22;
transporte8.horaSalida = "03:00";
transporte8.codigoLateral = "T008";
transporte8.destinoTransporte = "Leticia";

const transporte9 = new Transporte();
transporte9.conductor = "Jorge";
transporte9.capacidad = 30;
transporte9.horaSalida = "04:00";
transporte9.codigoLateral = "T009";
transporte9.destinoTransporte = "Manizales";

const transporte10 = new Transporte();
transporte10.conductor = "Diana";
transporte10.capacidad = 33;
transporte10.horaSalida = "05:00";
transporte10.codigoLateral = "T010";
transporte10.destinoTransporte = "Pereira";

const transporte11 = new Transporte();
transporte11.conductor = "Miguel";
transporte11.capacidad = 27;
transporte11.horaSalida = "06:00";
transporte11.codigoLateral = "T011";
transporte11.destinoTransporte = "Armenia";

const transporte12 = new Transporte();
transporte12.conductor = "Camila";
transporte12.capacidad = 29;
transporte12.horaSalida = "07:00";
transporte12.codigoLateral = "T012";
transporte12.destinoTransporte = "Bucaramanga";

const transporte13 = new Transporte();
transporte13.conductor = "Andrés";
transporte13.capacidad = 31;
transporte13.horaSalida = "08:00";
transporte13.codigoLateral = "T013";
transporte13.destinoTransporte = "Neiva";

const transporte14 = new Transporte();
transporte14.conductor = "Tatiana";
transporte14.capacidad = 24;
transporte14.horaSalida = "09:00";
transporte14.codigoLateral = "T014";
transporte14.destinoTransporte = "Popayán";

const transporte15 = new Transporte();
transporte15.conductor = "Roberto";
transporte15.capacidad = 36;
transporte15.horaSalida = "10:00";
transporte15.codigoLateral = "T015";
transporte15.destinoTransporte = "Barranquilla";
// fin instancia Transporte

//problema1: encontrar el viaje con la duracion más larga.
let viajeMasLargo = viaje1;
if (viaje2.duracionEnDias > viajeMasLargo.duracionEnDias) { viajeMasLargo = viaje2; }
if (viaje3.duracionEnDias > viajeMasLargo.duracionEnDias) { viajeMasLargo = viaje3; }
if (viaje4.duracionEnDias > viajeMasLargo.duracionEnDias) { viajeMasLargo = viaje4; }
if (viaje5.duracionEnDias > viajeMasLargo.duracionEnDias) { viajeMasLargo = viaje5; }
if (viaje6.duracionEnDias > viajeMasLargo.duracionEnDias) { viajeMasLargo = viaje6; }
if (viaje7.duracionEnDias > viajeMasLargo.duracionEnDias) { viajeMasLargo = viaje7; }
if (viaje8.duracionEnDias > viajeMasLargo.duracionEnDias) { viajeMasLargo = viaje8; }
if (viaje9.duracionEnDias > viajeMasLargo.duracionEnDias) { viajeMasLargo = viaje9; }
if (viaje10.duracionEnDias > viajeMasLargo.duracionEnDias) { viajeMasLargo = viaje10; }
if (viaje11.duracionEnDias > viajeMasLargo.duracionEnDias) { viajeMasLargo = viaje11; }
if (viaje12.duracionEnDias > viajeMasLargo.duracionEnDias) { viajeMasLargo = viaje12; }
if (viaje13.duracionEnDias > viajeMasLargo.duracionEnDias) { viajeMasLargo = viaje13; }
if (viaje14.duracionEnDias > viajeMasLargo.duracionEnDias) { viajeMasLargo = viaje14; }
if (viaje15.duracionEnDias > viajeMasLargo.duracionEnDias) { viajeMasLargo = viaje15; }
console.log(`El viaje más largo es a ${viajeMasLargo.destino} y dura ${viajeMasLargo.duracionEnDias} días.`);

//problema2 : Determinar cuál maleta es la más pesada.
let maletaMasPesada = maleta1;
if (maleta2.peso > maletaMasPesada.peso) { maletaMasPesada = maleta2; }
if (maleta3.peso > maletaMasPesada.peso) { maletaMasPesada = maleta3; }
if (maleta4.peso > maletaMasPesada.peso) { maletaMasPesada = maleta4; }
if (maleta5.peso > maletaMasPesada.peso) { maletaMasPesada = maleta5; }
if (maleta6.peso > maletaMasPesada.peso) { maletaMasPesada = maleta6; }
if (maleta7.peso > maletaMasPesada.peso) { maletaMasPesada = maleta7; }
if (maleta8.peso > maletaMasPesada.peso) { maletaMasPesada = maleta8; }
if (maleta9.peso > maletaMasPesada.peso) { maletaMasPesada = maleta9; }
if (maleta10.peso > maletaMasPesada.peso) { maletaMasPesada = maleta10; }
if (maleta11.peso > maletaMasPesada.peso) { maletaMasPesada = maleta11; }
if (maleta12.peso > maletaMasPesada.peso) { maletaMasPesada = maleta12; }
if (maleta13.peso > maletaMasPesada.peso) { maletaMasPesada = maleta13; }
if (maleta14.peso > maletaMasPesada.peso) { maletaMasPesada = maleta14; }
if (maleta15.peso > maletaMasPesada.peso) { maletaMasPesada = maleta15; }
console.log(`La maleta más pesada pertenece a ${maletaMasPesada.dueñoMaleta}, pesa ${maletaMasPesada.peso} kg y su destino es ${maletaMasPesada.destinomaleta}`);

//problema3: Identificar el hotel con la menor capacidad.
let hotelMenorCapacidad = hotel1;
if (hotel2.capacidad < hotelMenorCapacidad.capacidad) { hotelMenorCapacidad = hotel2; }
if (hotel3.capacidad < hotelMenorCapacidad.capacidad) { hotelMenorCapacidad = hotel3; }
if (hotel4.capacidad < hotelMenorCapacidad.capacidad) { hotelMenorCapacidad = hotel4; }
if (hotel5.capacidad < hotelMenorCapacidad.capacidad) { hotelMenorCapacidad = hotel5; }
if (hotel6.capacidad < hotelMenorCapacidad.capacidad) { hotelMenorCapacidad = hotel6; }
if (hotel7.capacidad < hotelMenorCapacidad.capacidad) { hotelMenorCapacidad = hotel7; }
if (hotel8.capacidad < hotelMenorCapacidad.capacidad) { hotelMenorCapacidad = hotel8; }
if (hotel9.capacidad < hotelMenorCapacidad.capacidad) { hotelMenorCapacidad = hotel9; }
if (hotel10.capacidad < hotelMenorCapacidad.capacidad) { hotelMenorCapacidad = hotel10; }
if (hotel11.capacidad < hotelMenorCapacidad.capacidad) { hotelMenorCapacidad = hotel11; }
if (hotel12.capacidad < hotelMenorCapacidad.capacidad) { hotelMenorCapacidad = hotel12; }
if (hotel13.capacidad < hotelMenorCapacidad.capacidad) { hotelMenorCapacidad = hotel13; }
if (hotel14.capacidad < hotelMenorCapacidad.capacidad) { hotelMenorCapacidad = hotel14; }
if (hotel15.capacidad < hotelMenorCapacidad.capacidad) { hotelMenorCapacidad = hotel15; }
console.log(`El hotel con la menor capacidad es ${hotelMenorCapacidad.nombre} ubicado en ${hotelMenorCapacidad.ubicacion} y tiene una capacidad de ${hotelMenorCapacidad.capacidad} habitaciones.`);

//adicional: Identificar el hotel con la mayot capacidad.
let hotelMayorCapacidad = hotel1;
if (hotel2.capacidad > hotelMayorCapacidad.capacidad) { hotelMayorCapacidad = hotel2; }
if (hotel3.capacidad > hotelMayorCapacidad.capacidad) { hotelMayorCapacidad = hotel3; }
if (hotel4.capacidad > hotelMayorCapacidad.capacidad) { hotelMayorCapacidad = hotel4; }
if (hotel5.capacidad > hotelMayorCapacidad.capacidad) { hotelMayorCapacidad = hotel5; }
if (hotel6.capacidad > hotelMayorCapacidad.capacidad) { hotelMayorCapacidad = hotel6; }
if (hotel7.capacidad > hotelMayorCapacidad.capacidad) { hotelMayorCapacidad = hotel7; }
if (hotel8.capacidad > hotelMayorCapacidad.capacidad) { hotelMayorCapacidad = hotel8; }
if (hotel9.capacidad > hotelMayorCapacidad.capacidad) { hotelMayorCapacidad = hotel9; }
if (hotel10.capacidad > hotelMayorCapacidad.capacidad) { hotelMayorCapacidad = hotel10; }
if (hotel11.capacidad > hotelMayorCapacidad.capacidad) { hotelMayorCapacidad = hotel11; }
if (hotel12.capacidad > hotelMayorCapacidad.capacidad) { hotelMayorCapacidad = hotel12; }
if (hotel13.capacidad > hotelMayorCapacidad.capacidad) { hotelMayorCapacidad = hotel13; }
if (hotel14.capacidad > hotelMayorCapacidad.capacidad) { hotelMayorCapacidad = hotel14; }
if (hotel15.capacidad > hotelMayorCapacidad.capacidad) { hotelMayorCapacidad = hotel15; }
console.log(`El hotel con la mayor capacidad es ${hotelMayorCapacidad.nombre} ubicado en ${hotelMayorCapacidad.ubicacion} y tiene una capacidad de ${hotelMayorCapacidad.capacidad} habitaciones.`);
