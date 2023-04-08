var cont = $('.card-container');
var submitBtn = $('.submitBtn');

submitBtn.on("click", nameadd);
function nameadd (){
  var names = $('.name').val();
  cont.append(`<p>${names}</p>`)
  event.preventDefault();
  var nameInput = $('.name');
  nameInput.val("");
}