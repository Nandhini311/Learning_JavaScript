let birthday = new Date(2000, 0, 31);

//extracting birthday month and birthday day
let userBirthdayMonth = birthday.getMonth();
console.log(userBirthdayMonth);
let userBirthdayDay = birthday.getDate();
console.log(userBirthdayDay);

//current date
let now = new Date();

let currentMonth = now.getMonth();
let currentDay = now.getDay();

if((currentMonth == userBirthdayMonth) && (currentDay == userBirthdayDay)){
    document.write("Yaiy ! Happy Birthday !! ");
}
else{
    document.write("not your birthday yet !");
}

let now1 = new Date();
console.log(now1.getHours());

//printing UTC time
console.log(now1.getUTCHours());

//reformatting dates
let internationalFormatDate = Intl.DateTimeFormat().format(now);
console.log(internationalFormatDate);
