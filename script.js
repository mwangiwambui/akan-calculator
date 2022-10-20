const akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
const akanFemaleNames = ["Akosue", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
let akanName = "";
let akanIndex, gender;
let day, month, year, cc, yy;

function getAkanName(v1, gender) {
    if (gender == 'Male') {
        akanName = "Your Akan name is" + akanMaleNames[v1]
    }
    else {
        akanName = "Your Akan name is" + akanFemaleNames[v1];
    }
}

function validateDate(inputDate) {
    const leapyear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const commonYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const dateformat = /^[0-3]?[0-9]\/[01]?[0-9]\/[12][90][0-9][0-9]$/

    if (inputDate.value.match(dateformat)) {
        var pdate = inputDate.value.split('/');
        day = parseInt(pdate[0]);
        month = parseInt(pdate[1]);
        year = parseInt(pdate[2]);
        cc = year / 100;
        yy = year % 100;

        if (month > 0 && month < 13) {
            if (month % 4 == 0 && leapyear[month - 1] != day) {
                alert('Invalid date format!');
                document.akanForm.birthdayInput.focus();
                return false;
            }
            else if (commonYear[month - 1] != day) {
                alert('Invalid date format');
                document.akanForm.birthdayInput.focus();
                return false;
            }
        } else {
            alert('Invalid date format');
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
        akanIndex = calculateAkan();
        getAkanName(akanIndex, gender);
        document.getElementById("output").innerHTML = akanName
    } else {
        document.getElementById("output").innerHTML = 'Enter a valid date';
    }
}

