// Create the on click button which will pull from the siblings in description and the parent from id

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var val = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")

        localStorage.setItem(time, val)
    })

// Update the time with a color using a conditional

function updateTime () {
        var currentTime = moment().hours()
        console.log(currentTime);

        $(".time-block").each(function(){
            var timeBlock = $(this).attr("id")

        if (timeBlock < currentTime) {
            $(this).addClass("past")
        }
        else if (timeBlock > currentTime) {
            $(this).addClass("future")
        }

        else {
            $(this).addClass("present")
        }
        })
    }

    updateTime ();

// get the localStorage 

    $("#9 .description").val(localStorage.getItem('9'))
    $("#10 .description").val(localStorage.getItem('10'))
    $("#11 .description").val(localStorage.getItem('11'))
    $("#12 .description").val(localStorage.getItem('12'))
    $("#13 .description").val(localStorage.getItem('13'))
    $("#14 .description").val(localStorage.getItem('14'))
    $("#15 .description").val(localStorage.getItem('15'))
    $("#16 .description").val(localStorage.getItem('16'))
    $("#17 .description").val(localStorage.getItem('17'))
    $("#18 .description").val(localStorage.getItem('18'))

});

