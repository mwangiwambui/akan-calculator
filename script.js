let akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
let akanFemaleNames = ["Akosue","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

function getAkanName(v1, gender){
    if (gender == 'Male'){
        return akanMaleNames[v1]
    }
    else{
        return akanFemaleNames[v1];
    }
}
