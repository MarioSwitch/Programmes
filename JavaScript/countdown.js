/*
100 hours = 4d 4h = 360 000 000 ms
1 day = 86 400 000 ms
100 mins = 1h 40m = 6 000 000 ms
1 hour = 3 600 000 ms
1 minute = 60 000 ms
1 second = 1 000 ms

----- ENGLISH -----
Parameters:
    end parameter must be in YYYY-MM-DDTHH:ii:ssZ format (YYYY for year, MM for month, DD for day, HH for hours, ii for minutes and ss for seconds. "T" and "Z" must be left as is. Example: "2022-07-04T14:43:58Z" for July 4th, 2022 at 2:43:58 PM UTC)
    format parameter must be a string, you can type what you want and %countdown will be replaced by the current time left. Example: "%countdown left" will display "59' 59'' left" if remaining time is 59 minutes and 59 seconds.
    endMessage parameter must be a string, this will be displayed when the countdown is finished.
    id parameter must be a string, element with this id will contains the countdown.

Usage:
    In the HTML document, include this file with <script src="path"></script>
    Create another script: <script>countdownTo(parameters);</script>
    Set id to an id linked to a countdown for the element you want to transform into a countdown.

----- FRENCH / FRANÇAIS -----
Paramètres :
    Le paramètre "end" doit être au format YYYY-MM-DDTHH:ii:ssZ (YYYY pour l'année, MM pour le mois, DD pour le jour, HH pour les heures, ii pour les minutes et ss pour les secondes. Les caractères "T" et "Z" doivent être laissés comme ça. Par exemple, saisir "2022-07-04T14:43:58Z" pour terminer le compte à rebours le 4 juillet 2022 à 14:43:58 UTC)
    Le paramètre "format" doit être une chaîne de caractères. Vous pouvez saisir ce que vous souhaitez et %countdown sera remplacé par le temps restant. Par exemple, "Il reste %countdown" affichera "Il reste 59' 59''" s'il reste 59 minutes et 59 secondes.
    Le paramètre "endMessage" doit être une chaîne de caractères. Elle sera affichée lorsque le compte à rebours sera terminé.
    Le paramètre "id" doit être une chaîne de caractères. L'élément ayant cet id contiendra le compte à rebours.

Utilisation :
    Dans le document HTML, incluez ce fichier avec <script src="chemin"></script>
    Créez un nouveau script : <script>countdownTo(paramètres);</script>
    Mettez l'identifiant de l'élément que vous souhaitez transformer en compte à rebours sur un identifiant relié à un compteur.
*/

function countdownTo(end, format = "%countdown", endMessage = "", id = "countdown"){
    var nowDate = new Date();
    var endDate = new Date(end);
    var remainingTime = new Date(endDate - nowDate);
    if(remainingTime>=360000000){ //if more than 100 hours (4d 4h)
        var remainingString = Math.floor(remainingTime/86400000)+"j";
    }
    if(remainingTime<360000000 && remainingTime>=6000000){ //if between 100 mins (1h 40m) and 100 hours (4d 4h)
        var remainingString = Math.floor(remainingTime/3600000)+"h "+("0"+Math.floor(remainingTime/60000)%60).slice(-2)+"m";
    }
    if(remainingTime<6000000 && remainingTime>=60000){
        var remainingString = Math.floor(remainingTime/60000)+"' "+("0"+Math.floor(remainingTime/1000)%60).slice(-2)+"''";
    }
    if(remainingTime<60000 && remainingTime>0){
        var remainingString = Math.floor(remainingTime/1000)+"''";
    }
    var finalString = format.replace('%countdown',remainingString);
    if(remainingTime<=0){
        var finalString = endMessage;
    }
    setTimeout(countdownTo, 1000, end, format, endMessage, id);
    document.getElementById(id).innerHTML = finalString;
}