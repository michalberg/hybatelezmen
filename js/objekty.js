// načtení jedné kategorie z firebase


function vypisobjekt(kategorie, holder){

var dbRef = new Firebase('https://hybatelezmen.firebaseio.com/');

var objekty;

new Firebase("https://hybatelezmen.firebaseio.com/posts")
	.orderByChild("kategorie")
    .equalTo(kategorie)
    .once('value', function(snap) {
    	  objekty = snap.val();
    //	  console.log('objekty: ', objekty);
    //	  console.log('snap val: ', snap.val());
	

//Loop all items and create elements for each

for (var key in objekty) {

var $nazev = objekty[key].název;
var $email = objekty[key].email;
var $kategorie = objekty[key].kategorie;
var $nazev = objekty[key].název;
var $projekt = objekty[key].projekt;
var $osoba = objekty[key].osoba;
var $popis = objekty[key].popis;
var $web = objekty[key].web;
var $web_zobraz = objekty[key].web_zobraz
var $zamereni = objekty[key].zamereni;

var $htmltable = "<table class=\"table-curved\">";
var $htmltable = $htmltable + "<thead><tr class=\"info\"><td class=\"align-bottom\">";



switch($kategorie) {

    case 'namesti':
	
       //při náměstí se zobrazuje osoba + organizace + email
	var $htmltable = $htmltable + "<h4>" + $osoba + "</h4></td><td>";
	var $htmltable = $htmltable + "<h4>" + $nazev+ "</h4></td><td>";
	if ($email !== "") {
		var $htmltable = $htmltable + "<a class=\"btn btn-warning pull-right vpravo\">" + $email + "</a>";
			}

	var $htmltable = $htmltable + "</td></tr>";
        
    break;
    
    case 'skola':
       //při škole se zobrazuje projekt + název organizace + web  a ve druhém řádku email

    var $htmltable = $htmltable + "<h4>" + $projekt + "</h4></td><td>";
	var $htmltable = $htmltable + "<h4>" + $nazev + "</h4></td><td>";
	if ($web !== "") {
				if ($web_zobraz =="") {$web_zobraz = $web};
					$htmltable = $htmltable + "<a href=\"" + $web + "\" class=\"btn btn-warning pull-right vpravo\">" + $web_zobraz + "</a>";
					};
	var $htmltable = $htmltable + "</td></tr>";

	if ($email !== "") {
		var $htmltable = $htmltable + "<tr><td colspan=\"3\">kontakt: " + $email + "</td></tr>";
					}	

	break;

	case 'sklenik':

       //při skleniku se zobrazuje název projektu + organizace + web a ve druhém řádku email

    var $htmltable = $htmltable + "<h4>" + $projekt + "</h4></td><td>";
	var $htmltable = $htmltable + "<h4>" + $nazev + "</h4></td><td>";
	if ($web !== "") {
				if ($web_zobraz =="") {$web_zobraz = $web};
					$htmltable = $htmltable + "<a href=\"" + $web + "\" class=\"btn btn-warning pull-right vpravo\">" + $web_zobraz + "</a>";
					};
	var $htmltable = $htmltable + "</td></tr>";
		
	if ($email !== "") {
		var $htmltable = $htmltable + "<tr><td colspan=\"3\">kontakt: " + $email + "</td></tr>";
		}
     break;

     case 'stadion':

       //při skleniku se zobrazuje název projektu + organizace + web a ve druhém řádku email

    var $htmltable = $htmltable + "<h4>" + $projekt + "</h4></td><td>";
	var $htmltable = $htmltable + "<h4>" + $nazev + "</h4></td><td>";
	if ($web !== "") {
				if ($web_zobraz =="") {$web_zobraz = $web};
					$htmltable = $htmltable + "<a href=\"" + $web + "\" class=\"btn btn-warning pull-right vpravo\">" + $web_zobraz + "</a>";
					};
	var $htmltable = $htmltable + "</td></tr>";
		
	if ($email !== "") {
		var $htmltable = $htmltable + "<tr><td colspan=\"3\">kontakt: " + $email + "</td></tr>";
		}
     break;

    default:
    //ve všech dalších případech se zobrazuje název + osoba + web

	
		var $htmltable = $htmltable + "<h4>" + $nazev + "</h4></td><td>";
        var $htmltable = $htmltable + "<h4>" + $osoba + "</h4></td><td>";
		if ($web !== "") {
				if ($web_zobraz =="") {$web_zobraz = $web};
					$htmltable = $htmltable + "<a href=\"" + $web + "\" class=\"btn btn-warning pull-right vpravo\">" + $web_zobraz + "</a></td></tr>";
								};

		};


var $htmltable = $htmltable + "</thead><tbody>"

if ($zamereni !== "") {
var $htmltable = $htmltable + "<tr><td colspan=\"3\">zaměření: " + $zamereni + "</td></tr>";
}

if ($popis !== "") {
var $htmltable = $htmltable + "<tr><td colspan=\"3\">";
var $htmltable = $htmltable + $popis;
var $htmltable = $htmltable +"</td></tr>"
}

var $htmltable = $htmltable + "</tbody></table>";


$(holder).append($htmltable);

$htmltable = "";


}


	});

};
