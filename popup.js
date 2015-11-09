document.addEventListener('DOMContentLoaded', function() {

  var sendA = document.getElementById('a-group');
  var sendB = document.getElementById('b-group');
  var navigate = document.getElementById('navigate');
  var inputStart = document.getElementById('input-start');
  var inputEnd = document.getElementById('input-end');
  var startRow = 2;
  var endRow = 20;
  var i = 0;
  var howManyTimes = 1;
  var randomNumber = Math.floor(Math.random() * (1300 - 350 + 1)) + 350;
  //Locators
  var loButtonA = '\'' +'#plunder_list > tbody > tr:nth-child(' + startRow + ') > td:nth-child(9) > a' + '\'';
  var loButtonB = '\'' + '#plunder_list > tbody > tr:nth-child(' + startRow +') > td:nth-child(10) > a' + '\'';
  var loFarmerAsistant = '\'' + '#menu_row > td:nth-child(6) > a:nth-child(1)' + '\'';
  
  function script(codeToRun) {
    chrome.tabs.executeScript({
      code: codeToRun
    });
  }

  function ramdomize() {
    randomNumber = Math.floor(Math.random() * (1500 - 350 + 1)) + 350;
    script('console.log(' + randomNumber + ');');
  }

  function setLocators(row) {
    loButtonA = '\'' +'#plunder_list > tbody > tr:nth-child(' + row + ') > td:nth-child(9) > a' + '\'';
    loButtonB = '\'' + '#plunder_list > tbody > tr:nth-child(' + row +') > td:nth-child(10) > a' + '\'';
  }

  sendA.addEventListener('click', function() {
    runA(startRow, endRow);
  });

  sendB.addEventListener('click', function() {
    runB(startRow, endRow);
  });

  navigate.addEventListener('click', function() {
    script('console.log(\'navigating\');');
    script('document.querySelector(' + loFarmerAsistant + ').click();');
  });

  inputStart.addEventListener('keyup', function() {
    startRow = parseInt(inputStart.value);
    i = startRow;
  });

  inputEnd.addEventListener('keyup', function() {
    endRow = document.getElementById('input-end').value;
    howManyTimes = endRow;
  });


  function f() {
    script('console.log(\'clicked ' + (i-1) + ' A Button\');');
    setLocators(i);
    script('document.querySelector(' + loButtonA + ').click();');
    i++;
    if( i < howManyTimes ){
      setTimeout( f, (Math.floor(Math.random() * (1400 - 450 + 1)) + 450) );
    }
  }

  function runA(startRow, endRow) {
    f();
  } 

  function runB(startRow, endRow) {
    f();
  } 
  
}, false);


// navigate.addEventListener('click', function() {

//     document.querySelector('#menu_row > td:nth-child(6) > a:nth-child(1)').click();

//   }, false);

// }, false);
// document.querySelector(\'#quickbar_contents > ul > li:nth-child(1) > span > a\').click();
