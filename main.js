let dayOfWeek = $('#currentDay');
console.log(dayOfWeek);
let currentDate = moment().format('LL');
console.log(currentDate);
let textBlock = $('.textarea');
console.log(textBlock);
dayOfWeek.text(currentDate);

var currentDay = [
    {hour: "09", time: 09, meridiem: "am"},
    {hour: "10", time: 10, meridiem: "am"},
    {hour: "11", time: 11, meridiem: "am"},
    {hour: "12", time: 12, meridiem: "pm"},
    {hour: "01", time: 13, meridiem: "pm"},
    {hour: "02", time: 14, meridiem: "pm"},
    {hour: "03", time: 15, meridiem: "pm"},
    {hour: "04", time: 16, meridiem: "pm"},
    {hour: "05", time: 17, meridiem: "pm"},   
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
        hourRow.append(inputBox)
    
    let submitButton = $('<button>')
        submitButton.attr({'class': 'saveBtn col-md-2'})
        hourRow.append(submitButton)

    let buttonImg = $('<img>')
        buttonImg.attr({'src': '../assets/save-icon.jpg'})
        buttonImg.attr({'class':'col-md-12'})
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

