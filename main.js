let dayOfWeek = $('#currentDay');
let currentDate = moment().format('LL');
let textBlock = $('.textarea');
dayOfWeek.text(currentDate);

var currentDay = [
    {hour: "09", time: 09, meridiem: "am", input: ""},
    {hour: "10", time: 10, meridiem: "am", input: ""},
    {hour: "11", time: 11, meridiem: "am", input: ""},
    {hour: "12", time: 12, meridiem: "pm", input: ""},
    {hour: "01", time: 13, meridiem: "pm", input: ""},
    {hour: "02", time: 14, meridiem: "pm", input: ""},
    {hour: "03", time: 15, meridiem: "pm", input: ""},
    {hour: "04", time: 16, meridiem: "pm", input: ""},
    {hour: "05", time: 17, meridiem: "pm", input: ""},   
];

currentDay.forEach(function(currentHour) {
    let hourRow = $('<form>').attr({
        'class': 'row'
    });

    $('.container').append(hourRow);

    let timeOfDay = $('<div>')
        .text(`${currentHour.hour}${currentHour.meridiem}`)
        timeOfDay.attr({'class': 'col-md-2 hour'})
         hourRow.append(timeOfDay);
    
    let inputBox = $('<input>')
        inputBox.attr({'class': 'col-md-8 textarea'})
        inputBox.attr({'id':'inputBox-' + currentHour.time})
        hourRow.append(inputBox)
    
    let submitButton = $('<button>')
        submitButton.attr({'class': 'saveBtn col-md-2'})
        submitButton.attr({'id':'saveBtn-' + currentHour.time})
        hourRow.append(submitButton)

    let buttonImg = $('<img>')
        buttonImg.attr({'src': './assets/save-icon.jpg'})
        buttonImg.attr({'width': '60%'})
        submitButton.append(buttonImg)

    if (currentHour.time > moment().format('HH')) {
        inputBox.attr({'class': 'future col-md-8'})
    }
    else if (currentHour.time < moment().format('HH')) {
        inputBox.attr({'class': 'past col-md-8'})
    }
    else {
        inputBox.attr({'class': 'present col-md-8'})
    }
})
let nineTodo = localStorage.getItem('9');
$('#inputBox-9').val(nineTodo);

let tenTodo = localStorage.getItem('10');
$('#inputBox-10').val(tenTodo);

let elevenTodo = localStorage.getItem('11');
$('#inputBox-11').val(elevenTodo);

let twelveTodo = localStorage.getItem('12');
$('#inputBox-12').val(twelveTodo);

let oneTodo = localStorage.getItem('13');
$('#inputBox-13').val(oneTodo);

let twoTodo = localStorage.getItem('14');
$('#inputBox-14').val(twoTodo);

let threeTodo = localStorage.getItem('15');
$('#inputBox-15').val(threeTodo);

let fourTodo = localStorage.getItem('16');
$('#inputBox-16').val(fourTodo);

let fiveTodo = localStorage.getItem('17');
$('#inputBox-17').val(fiveTodo);

$('.saveBtn').click(function(){
    let idFoo = $(this).attr('id')
    let hour = idFoo.slice(idFoo.indexOf('-') + 1);

let inputFoo = $('#inputBox-' + hour);

localStorage.setItem(hour, inputFoo.val())
})

