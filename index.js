$(".btn").click(function () {
    var yearvalue = $(".yearinput").val();
    var monthvalue = $(".monthinput").val();
    var dayvalue = $(".dayinput").val();

    if(checkDay(dayvalue,monthvalue,yearvalue) === false){
        $(".dayy").css("color","red");
        $(".dayinput").css("border-color","red");
    }
    if(checkMonth(monthvalue) === false){
        $(".monthh").css("color","red");
        $(".monthinput").css("border-color","red");
    }
    if(checkYear(yearvalue) === false){
        $(".yearr").css("color","red");
        $(".yearinput").css("border-color","red");
    }

    if(checkDay(dayvalue,monthvalue,yearvalue) === false || checkMonth(monthvalue) === false || checkYear(yearvalue) === false){

    }
    else{
        if(yearvalue%400===0){
            var months = [31,29,31,30,31,30,31,31,30,31,30,31];
        }
        else if(yearvalue%100===0){
            var months = [31,28,31,30,31,30,31,31,30,31,30,31];
        }
        else if(yearvalue%4==0){
            var months = [31,29,31,30,31,30,31,31,30,31,30,31];
        }
        else{
            var months = [31,28,31,30,31,30,31,31,30,31,30,31];
        }
        yearvalue = 2022-yearvalue;
        monthvalue = 12 - monthvalue + 4;
        if(monthvalue > 12){
            yearvalue++;
            monthvalue = monthvalue - 12;
        }
        dayvalue = months[monthvalue-1] - dayvalue + 5;
        if(dayvalue>months[monthvalue-1]){
            dayvalue= dayvalue - months[monthvalue-1];
            monthvalue++;
        }
        
        $(".y").text(yearvalue);
        $(".d").text(dayvalue);
        $(".m").text(monthvalue);
    }


});

function checkDay(day,month,year){
    if(year%400===0){
        var months = [31,29,31,30,31,30,31,31,30,31,30,31];
    }
    else if(year%100===0){
        var months = [31,28,31,30,31,30,31,31,30,31,30,31];
    }
    else if(year%4==0){
        var months = [31,29,31,30,31,30,31,31,30,31,30,31];
    }
    else{
        var months = [31,28,31,30,31,30,31,31,30,31,30,31];
    }

    if(day>months[month-1] || day<=0){
        return false;
    }
}

function checkMonth(month){
    if(month>12 || month<=0){
        return false;
    }
}

function checkYear(year){
    if (year>2023 || year<=0){
        return false;
    }
}