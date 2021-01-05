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

for (i = 0; i < currentDay.length; i++) {
    let hourRow = $('<form>').attr({
        'class': 'row'
    })

    let currentItem = localStorage.getItem('item-' + i);
    
    $('.container').append(hourRow);

    let timeOfDay = $('<div>')
        .text(`${currentDay[i].hour}${currentDay[i].meridiem}`)
        timeOfDay.attr({'class': 'col-md-2 hour'})
         hourRow.append(timeOfDay);
    
    let inputBox = $('<input>')
        inputBox.attr({'class': 'col-md-8 textarea'})
        inputBox.attr({'id':'inputBox-' + i})
        hourRow.append(inputBox)
    
    let submitButton = $('<button>')
        submitButton.attr({'class': 'saveBtn col-md-2'})
        submitButton.attr({'id':'saveBtn-' + i})
        hourRow.append(submitButton)

    let buttonImg = $('<img>')
        buttonImg.attr({'src': './assets/save-icon.jpg'})
        buttonImg.attr({'width': '60%'})
        submitButton.append(buttonImg)

    if (currentDay[i].time > moment().format('HH')) {
        inputBox.attr({'class': 'future col-md-8'})
    }
    else if (currentDay[i].time < moment().format('HH')) {
        inputBox.attr({'class': 'past col-md-8'})
    }
    else {
        inputBox.attr({'class': 'present col-md-8'})
    }

    $('#inputBox-' + i).val(currentItem);
}

$('.saveBtn').click(function(){
    let idFoo = $(this).attr('id')
    let index = idFoo.slice(idFoo.indexOf('-') + 1);

let inputFoo = $('#inputBox-' + index);

localStorage.setItem('item-' + index, inputFoo.val())
})

