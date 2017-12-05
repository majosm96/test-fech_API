function createTable(ancentryList) { 
  var table = document.getElementById('table');
  
  Array.from(ancentryList).forEach(element => {
    var personInfo = {
      name: element.name,
      sex: element.sex,
      born: element.born,
      died: element.died,
      father: element.father,
      mother: element.mother
    }
    var row = document.createElement('tr');
    var cell01 = document.createElement('td');
    var cell02 = document.createElement('td');
    var cell03 = document.createElement('td');
    var cell04 = document.createElement('td');
    var cell05 = document.createElement('td');
    var cell06 = document.createElement('td');


    cell01.innerHTML = personInfo.name;
    cell02.innerHTML = personInfo.sex;
    cell03.innerHTML = personInfo.born;
    cell04.innerHTML = personInfo.died;
    cell05.innerHTML = personInfo.father;
    cell06.innerHTML = personInfo.mother;
  

    row.appendChild(cell01);
    row.appendChild(cell02);
    row.appendChild(cell03);
    row.appendChild(cell04);
    row.appendChild(cell05);
    row.appendChild(cell06);
    table.appendChild(row);

  });
};


function renderData(){
  fetch('./data/data.json')
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.text());
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        console.log(data.ANCESTRY_FILE[0].mother);
        var myData = data.ANCESTRY_FILE;
        createTable(myData);
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
}

var cta = document.getElementById('cta');

cta.addEventListener('click', function(){
  renderData();
});