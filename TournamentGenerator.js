var rankings = [];
var data;
function logProductInfo() {
  var sheet = SpreadsheetApp.getActiveSheet();
  data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    Logger.log('Team name: ' + data[i][0] + ' ' + '; Wins: ' + data[i][1] + '  ; ' + 'Loses: ' + data[i][2]);
  }
}

function createBrackets() {
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var yourNewSheet = activeSpreadsheet.getSheetByName("Brackets");

    if (yourNewSheet != null) {
        activeSpreadsheet.deleteSheet(yourNewSheet);
    }

    yourNewSheet = activeSpreadsheet.insertSheet();
    yourNewSheet.setName("Brackets");
}

function fillBrackets() {
   //brackets generated here are pool play brackets
  //after pool play, you must enter the results and run the playoff brackets
  //depending on tournament size, brackets include Gold, Silver, and Bronze
  
}
