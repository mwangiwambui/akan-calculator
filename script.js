const akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
const akanFemaleNames = ["Akosue","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
let akanName = "";
let akanIndex, gender;
let day,month,year;

function getAkanName(v1, gender){
    if (gender == 'Male'){
        akanName= "Your Akan name is" +akanMaleNames[v1]
    }
    else{
        akanName= "Your Akan name is" +akanFemaleNames[v1];
    }
}

function validateDate(inputDate){
    const leapyear = [31,29,31,30,31,30,31,31,30,31,30,31];
    const commonYear = [31,28,31,30,31,30,31,31,30,31,30,31];
    const dateformat = /^[0-3]?[0-9]\/[01]?[0-9]\/[12][90][0-9][0-9]$/

    if (inputDate.value.match(dateformat)){
        var pdate = inputDate.value.split('/');
        day = parseInt(pdate[0]);
        month = parseInt(pdate[1]);
        year = parseInt(pdate[2])

        if (month > 0 && month < 13){
            if (month % 4 == 0 && leapyear[month-1] != day){
                alert('Invalid date format!');
            }
            else if(commonYear[month-1] != day){
                alert('Invalid date format');
            }
        }else{
            alert('Invalid date format')
        }
    }
    else{
        alert('Invalid date format')
    }

}


document.getElementById("output").innerHTML= akanName

