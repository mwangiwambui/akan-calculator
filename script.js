const akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
const akanFemaleNames = ["Akosue", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
let akanName = "";
let akanIndex, gender;
let day, month, year, cc, yy;

function getAkanName(v1, gender) {
    console.log(gender)
    if (gender == 'male') {
        akanName = "Your Akan name is " + akanMaleNames[v1-1]
    }
    else {
        akanName = "Your Akan name is " + akanFemaleNames[v1-1];
    }
}

function validateDate(inputDate) {
    console.log(inputDate);
    const leapyear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const commonYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // const dateformat = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
    const dateformat = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

    if (inputDate.match(dateformat)) {
        var pdate = inputDate.split('/');
        day = parseInt(pdate[0]);
        month = parseInt(pdate[1]);
        year = parseInt(pdate[2]);
        cc = year / 100;
        yy = year % 100;
        if (month > 0 && month < 13) {
            if (year % 4 == 0 && leapyear[month - 1] < day) {
                alert('Invalid day of the month!');
                document.akanForm.birthdayInput.focus();
                return false;
            }
            else if (commonYear[month - 1] < day) {
                alert('Invalid day of the month');
                document.akanForm.birthdayInput.focus();
                return false;
            }
        } else {
            alert('Invalid month of the year');
            document.akanForm.birthdayInput.focus();
            return false;
        }
    }
    else {
        alert('Invalid date format')
        document.akanForm.birthdayInput.focus();
        return false;
    }
    return (true);

}

function calculateAkan() {
    return (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
}

function getAkanNameAndCalculate() {
    gender = document.getElementById('gender').value;
    const dateInput = document.getElementById('birthdayInput').value;
    if (validateDate(dateInput)) {
        akanIndex = parseInt(calculateAkan());
        console.log(akanIndex);
        getAkanName(akanIndex, gender);
        document.getElementById("output").innerHTML = akanName
    } else {
        document.getElementById("output").innerHTML = 'Enter a valid date';
    }
}

