//======================  Assignment 1  ======================

// Pass by Value
function Passbyvalue(value1, value2) {
  let tmp;
  tmp = value2;
  value2 = value1;
  value1 = tmp;
  // console.log(`Inside Pass by value Function -> value1 = ${value1} value2 = ${value2}`);
}
  
let value1 = 10;
let value2 = 20;
// console.log(`Before calling Pass by value Function -> value1 = ${value1} value2 = ${value2}`);
  
Passbyvalue(value1, value2);
  
// console.log(`After calling Pass by value Function -> value1 = ${value1} value2 = ${value2}`);

// Pass by Reference
function PassbyReference(reference) {
  let tmp = reference.reference1;
  reference.reference1 = reference.reference2;
  reference.reference2 = tmp;

  // console.log(`Inside Pass By Reference Function -> reference1 = ${reference.reference1} reference2 = ${reference.reference2}`);
}

let reference = {
  reference1: 10,
  reference2: 20

}
// console.log(`Before calling Pass By Reference Function -> reference1 = ${reference.reference1} reference2 = ${reference.reference2}`);

PassbyReference(reference)

// console.log(`After calling Pass By Reference Function -> reference1 = ${reference.reference1} reference2 = ${reference.reference2}`);


let elements = { 'a' : 'Muhammad', 'b' : 'Munir' };
// console.log(elements);
let element_array = [];
for (let key in elements) {
  element_array.push(key);
}
// console.log('Obj keys');
// console.log(element_array);
// console.log(Object.keys(elements));

// console.log('Obj Values');
// console.log(Object.values(elements));


//======================  Assignment 2  ======================

let JsonData = [{
  "id": 1,
  "first_name": "Tome",
  "last_name": "Bedome",
  "email": "tbedome0@friendfeed.com"
}, {
  "id": 2,
  "first_name": "Dorthea",
  "last_name": "Lorans",
  "email": "dlorans1@people.com.cn"
}, {
  "id": 3,
  "first_name": "Daniel",
  "last_name": "Liversage",
  "email": "dliversage2@mashable.com"
}, {
  "id": 4,
  "first_name": "Rhonda",
  "last_name": "Cushion",
  "email": "rcushion3@auda.org.au"
}, {
  "id": 5,
  "first_name": "Ynes",
  "last_name": "Drohane",
  "email": "ydrohane4@nyu.edu"
}, {
  "id": 6,
  "first_name": "Pammy",
  "last_name": "Sammes",
  "email": "psammes5@multiply.com"
}, {
  "id": 7,
  "first_name": "Ardisj",
  "last_name": "Rosenblad",
  "email": "arosenblad6@msu.edu"
}, {
  "id": 8,
  "first_name": "Myranda",
  "last_name": "Bartosinski",
  "email": "mbartosinski7@4shared.com"
}, {
  "id": 9,
  "first_name": "Henryetta",
  "last_name": "Simner",
  "email": "hsimner8@imdb.com"
}, {
  "id": 10,
  "first_name": "Waylin",
  "last_name": "Greave",
  "email": "wgreave9@shinystat.com"
}, {
  "id": 11,
  "first_name": "Bianka",
  "last_name": "Geddes",
  "email": "bgeddesa@go.com"
}, {
  "id": 12,
  "first_name": "Marley",
  "last_name": "Scales",
  "email": "mscalesb@columbia.edu"
}, {
  "id": 13,
  "first_name": "Derick",
  "last_name": "Saturley",
  "email": "dsaturleyc@weebly.com"
}, {
  "id": 14,
  "first_name": "Kassey",
  "last_name": "Alner",
  "email": "kalnerd@thetimes.co.uk"
}, {
  "id": 15,
  "first_name": "Brita",
  "last_name": "Cod",
  "email": "bcode@engadget.com"
}, {
  "id": 16,
  "first_name": "Herby",
  "last_name": "Burnip",
  "email": "hburnipf@prnewswire.com"
}, {
  "id": 17,
  "first_name": "Ortensia",
  "last_name": "Doddemeede",
  "email": "ododdemeedeg@hubpages.com"
}, {
  "id": 18,
  "first_name": "Pris",
  "last_name": "Lumox",
  "email": "plumoxh@cdc.gov"
}, {
  "id": 19,
  "first_name": "Nata",
  "last_name": "Kuhnel",
  "email": "nkuhneli@japanpost.jp"
}, {
  "id": 20,
  "first_name": "Shanda",
  "last_name": "Kleinhandler",
  "email": "skleinhandlerj@moonfruit.com"
}, {
  "id": 21,
  "first_name": "Julienne",
  "last_name": "Coombe",
  "email": "jcoombek@va.gov"
}, {
  "id": 22,
  "first_name": "Menard",
  "last_name": "Ennor",
  "email": "mennorl@typepad.com"
}, {
  "id": 23,
  "first_name": "Nikolaos",
  "last_name": "Pagen",
  "email": "npagenm@soundcloud.com"
}, {
  "id": 24,
  "first_name": "Agneta",
  "last_name": "Padula",
  "email": "apadulan@ftc.gov"
}, {
  "id": 25,
  "first_name": "Pierce",
  "last_name": "Larsen",
  "email": "plarseno@walmart.com"
}, {
  "id": 26,
  "first_name": "Sybil",
  "last_name": "Isabell",
  "email": "sisabellp@hhs.gov"
}, {
  "id": 27,
  "first_name": "Cami",
  "last_name": "Moehle",
  "email": "cmoehleq@amazonaws.com"
}, {
  "id": 28,
  "first_name": "Vic",
  "last_name": "Colafate",
  "email": "vcolafater@flavors.me"
}, {
  "id": 29,
  "first_name": "Dill",
  "last_name": "Loades",
  "email": "dloadess@biglobe.ne.jp0900"
}, {
  "id": 30,
  "first_name": "Clerkclaude",
  "last_name": "Vassar",
  "email": "munir@0900"
}];
var filterKeys = Object.keys(JsonData.reduce(function(result, obj) {
  return Object.assign(result, obj);
}, {}))
let options = `<option value="">-- Select --</option>`;
let appendItem = filterKeys.forEach(function(e){
  options+=`<option value='${e}'>${e.toUpperCase().replace('_',' ')}</option>`
})
$("#arr_keys").html(options)

$(document).on('click','.searchData',()=>{
  let arr_keys = $("#arr_keys").val();
  let keywords = $("#keywords").val();
  if (arr_keys!='') {
    if (keywords!='') {
      let filteredData = JsonData.filter(function(e) {
        return (e[arr_keys].toString().indexOf(keywords)!== -1);
      });
      console.log(filteredData);
    }else{
      alert('Enter keywords');
    }
  }else{
    alert('Select Option');
  }
});