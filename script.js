$(function() {
  $('#submitButton').click(function() {
  var firstMark = $('#firstMark').val();
  var secondMark = $('#secondMark').val();
  var thirdMark = $('#thirdMark').val();
  var fourthMark = $('#fourthMark').val();
  var fifthMark = $('#fifthMark').val();
  var excellentMark = 'Excellent'
  var veryGoodMark = 'Très Bien'
  var goodMark = 'Bien'
  var averageMark = 'Moyen'
  var noGoodMark = 'En dessous de la moyenne'
  console.log(firstMark, secondMark, thirdMark, fourthMark, fifthMark);
  var averageCount = (+firstMark + +secondMark + +thirdMark + +fourthMark + +fifthMark)/5;
  $('#average').text(averageCount);
  console.log(averageCount);
  if (averageCount >= 0 && averageCount < 10) {
    $('#markopinion').text(noGoodMark);
  }
  else if (averageCount >= 10 && averageCount < 13) {
    $('#markopinion').text(averageMark);
  }
  else if (averageCount >= 13 && averageCount < 16) {
    $('#markopinion').text(goodMark);
  }
  else if (averageCount >= 16 && averageCount < 20) {
    $('#markopinion').text(veryGoodMark);
  }
  else if (averageCount == 20) {
    $('#markopinion').text(excellentMark);
  }
})
})
