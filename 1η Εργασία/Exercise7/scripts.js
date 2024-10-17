// This function changes the background color every day of the week
function dailybg() {
  var today = new Date();
  var day = Math.round(today.getDay());
  if (day === 0) {
    document.body.style.background = '#A9DFE7'; //Sunday
  } else if (day === 1) {
    document.body.style.background = '#CCAACB'; //Monday
  } else if (day === 2) {
    document.body.style.background = '#FFFFB5'; //Tuesday
  } else if (day === 3) {
    document.body.style.background = '#FFCDB6'; //Wednesday
  } else if (day === 4) {
    document.body.style.background = '#F3B0C2'; // Thursday
  } else if (day === 5) {
    document.body.style.background = '#FF9689'; //Friday
  } else {
    document.body.style.background = '#ECD6E3'; //Saturday
  }
}

//1st DOM Query
var flag1 = true;
function boldEverything() {
  var x = document.getElementById('required_2_columns');
  if (flag1) {
    x.style.fontWeight = 'bold';
  } else {
    x.style.fontWeight = 'normal';
  }

  flag1 = !flag1;
}

//2nd DOM Query
var flag2 = true;
var x = document.getElementById('extraInfo');
var y = x.innerHTML;
function moreInfo() {
  if (flag2) {
    x.innerHTML = 'Το Spark AR Studio είναι μια πλατφόρμα επαυξημένης πραγματικότητας για Mac & Windows που επιτρέπει την εύκολη δημιουργία εφέ AR για κινητές συσκευές. Σκεφτείτε το σαν το Photoshop ή το Sketch, αλλά για AR. Με πάνω από 500 εκατομμύρια ενεργούς χρήστες καθημερινά, ένα εξαιρετικά φιλικό προς το χρήστη περιβάλλον εργασίας και την επιθυμία των νέων να μοιραστούν διασκέδαση και φιλτραρισμένα selfies, το Instagram είναι το τέλειο μέσο για τη διάδοση του AR στις μάζες. Εξίσου σημαντική ήταν και η απόφαση του Facebook να ξεκινήσει το 2017 δικό του λογισμικό για επωνυμίες και σχεδιαστές για τη δημιουργία προσαρμοσμένων εφέ AR. Παλιά η πλατφόρμα Spark AR Studio ήταν ανοιχτή σε όλους, αλλά αν θέλατε τα προσαρμοσμένα εφέ AR να κυκλοφορήσουν στο Instagram, έπρεπε να γίνονταν αποδεκτά ως μέρος του κλειστού προγράμματος beta. Αλλά όλα αυτά άλλαξαν τώρα! Σύμφωνα με ανακοίνωση στο Facebook, ο καθένας μπορεί τώρα να δημιουργήσει και να δημοσιεύσει τα δικά του εφέ Spark AR στις ιστορίες Instagram! Αυτή είναι μια τεράστια προσφορά και μια συναρπαστική ευκαιρία για καλλιτέχνες, μάρκες, επιρροές και καθημερινούς ανθρώπους να δημιουργούν και να κάνουν τη φαντασία τους πραγματικότητα χρησιμοποιώντας το AR. Το AR στο Instagram έχει τεράστιες δυνατότητες ως εργαλείο μάρκετινγκ.';
  } else {
    x.innerHTML = y;
  }

  flag2 = !flag2;
}

// 1st function triggered by DOM event
document.getElementById('demo').addEventListener('mouseover', mouseOver);
document.getElementById('demo').addEventListener('mouseout', mouseOut);
function mouseOver() {
  document.getElementById('demo').innerHTML = 'Καλώς Ήρθατε!';
}

function mouseOut() {
  document.getElementById('demo').innerHTML = 'Αρχική';
}

// 2nd fuction triggered by DOM event
document.getElementById('exit').addEventListener('click', bbmessage);
function bbmessage() {
  alert('Goodbye!');
}
