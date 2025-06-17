//creez un interval care isi face refresh la fiecare secunda pentru a actualiza continultul
setInterval(() => {
  //creez o variabila care preia data curenta
  let date = new Date();
  //creez o constanta care preia elementul din HTML cu idul "year"
  const yearHtml = document.getElementById("year");

  //creez o constanta care preia elementul din HTML cu idul "day"
  const dayHtml = document.getElementById("day");

  //creez o constanta care preia elementul din HTML cu idul "dayWeek"
  const dayWeek = document.getElementById("dayWeek");

  //creez o constanta care preia elementul din HTML cu idul "dayMonth"
  const dayMonth = document.getElementById("dayMonth");

  //creez o constanta care preia elementul din HTML cu idul "month"
  const monthHtml = document.getElementById("month");

  //creez o constanta care preia elementul din HTML cu idul "time"
  const watch = document.getElementById("time");

  //creez 3 variabile care preiau ora, minutul si secunda actuala si in caz ca este mai mica ca 10 ii adaugam un 0 in fata
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  //creez 3variabile care preiau ziua lunii in care ne aflam, numarul zilei saptamanii si apoi numele zilelor saptamanii
  let day = date.getDay();
  let thisday = date.getDate();
  let daysName = [
    // Sunday = Sun
    "Sun",
    // Monday = Mon
    "Mon",
    // Tuesday = Tues
    "Tues",
    // Wednesday = Wed
    "Wed",
    // Thursday = Thrus
    "Thrus",
    // Friday = Fri
    "Fri",
    // Saturday = Sat
    "Sat",
  ];

  //creez o variabila care afiseaza numele silei saptamanii in care suntem
  let dayName = daysName[day];
  //creez 3 variabile care preiau numarul lunii din an, apoi numarul exact si numele lunilor anului
  let month = date.getMonth(); // + 1 pentru a arata numarul lunii in care ne aflam
  let monthNumder = month + 1;
  let monthsName = [
    //January = Jan
    "Jan",
    //February/Feb
    "Feb",
    //March/Mar
    "Mar",
    //April/Apr
    "Apr",
    //May
    "May",
    //June
    "June",
    //July
    "July",
    //August/Aug
    "Aug",
    //September/Sep
    "Sep",
    //October/Oct
    "Oct",
    //November/Nov
    "Nov",
    //December/Dec
    "Dec",
  ];
  //creez o variabila care preia numele lunii in care ne aflam
  let monthName = monthsName[month];

  //o alta varianta inafara de .padStart este:

  // if (hours < 10) {
  //   hours = "0" + hours;
  // }
  // if (minutes < 10) {
  //   minutes = "0" + minutes;
  // }
  // if (seconds < 10) {
  //   seconds = "0" + seconds;
  // }

  //creez o variabila care preia anul in care suntem
  let year = date.getFullYear();

  //introduc tot in elementele respective
  yearHtml.innerHTML = year;
  watch.innerHTML = hours + " : " + minutes + " : " + seconds;
  dayHtml.innerHTML = thisday;
  dayWeek.innerHTML = dayName;
  dayMonth.innerHTML = monthNumder;
  monthHtml.innerHTML = monthName;
}, 1000);
