//4. If Else
//a. Create a random number between 0 and 1 using the Math.random() function. If the value is greater than or equal to
//   0,5, show an alert with the message "Greater than or equal to 0.5". If it's less than 0.5, show an alert with the
//   message "Lower than 0,5"
var a = Math.random();
if(a>=0.5){
    alert('Greater than or equal to 0,5');
    console.log(a);
} else {
    alert('Lower than 0,5');
    console.log(a);
}

// b. Create a variable "Age" that contains an integer between 0 and 100 and displays the following alert messages:
//"Bebé" if the age is less than 2 years;
//"Niño" if the age is between 2 and 12 years old;
//"Adolescente" between 13 and 19 years old;
//"Joven" between 20 and 30 years old;
//"Adulto" between 31 and 60 years old;
//"Adulto mayor" between 61 and 75 years old;
//"Anciano" if older than 75 years.
var age = Math.round(Math.random()*100);
console.log(age);
if(age<2){
    alert('Bebé');
} else {
    if(age<=12){
        alert('Niño');
    } else {
        if(age<=19){
            alert('Adolescente');
        } else {
            if(age<=30){
                alert('Joven');
            } else{
                if(age<=60){
                    alert('Adulto');
                } else {
                    if(age<=75){
                        alert('Adulto mayor');
                    } else{
                        alert('Anciano');
                    }
                }
            }
        }
    }
}