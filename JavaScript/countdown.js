/*
100 hours = 4d 4h = 360 000 000 ms
1 day = 86 400 000 ms
100 mins = 1h 40m = 6 000 000 ms
1 hour = 3 600 000 ms
1 minute = 60 000 ms
1 second = 1 000 ms

----- ENGLISH -----
Parameters:
    goal parameter must be in YYYY-MM-DDTHH:ii:ssZ format (YYYY for year, MM for month, DD for day, HH for hours, ii for minutes and ss for seconds. "T" and "Z" must be left as is. Example: "2022-07-04T14:43:58Z" for July 4th, 2022 at 2:43:58 PM UTC)
    formatBefore parameter must be a string, you can type what you want and %countdown will be replaced by the current time left. This format will be used only if the goal isn't already passed. Example: "%countdown left" will display "59' 59'' left" if remaining time is 59 minutes and 59 seconds.
    formatAfter parameter must be a string, you can type what you want and %countup will be replaced by the current time since. This format will be used only if the goal is already passed. Example: "Finished for %countup" will display "Finished for 1h 45m" if the goal have passed 1 hour and 45 minutes ago.
    id parameter must be a string, element with this id will contains the countdown.

Usage:
    In the HTML document, include this file with <script src="path"></script>
    Create another script: <script>countdownTo(parameters);</script>
    Set id to an id linked to a countdown for the element you want to transform into a countdown.

----- FRENCH / FRANÇAIS -----
Paramètres :
    Le paramètre "goal" doit être au format YYYY-MM-DDTHH:ii:ssZ (YYYY pour l'année, MM pour le mois, DD pour le jour, HH pour les heures, ii pour les minutes et ss pour les secondes. Les caractères "T" et "Z" doivent être laissés comme ça. Par exemple, saisir "2022-07-04T14:43:58Z" pour terminer le compte à rebours le 4 juillet 2022 à 14:43:58 UTC)
    Le paramètre "formatBefore" doit être une chaîne de caractères. Vous pouvez saisir ce que vous souhaitez et %countdown sera remplacé par le temps restant. Ce format ne sera utilisé que lorsque la date saisie n'est pas encore passée. Par exemple, "Il reste %countdown" affichera "Il reste 59' 59''" s'il reste 59 minutes et 59 secondes.
    Le paramètre "formatAfter" doit être une chaîne de caractères. Vous pouvez saisir ce que vous souhaitez et %countup sera remplacé par le temps écoulé depuis la date. Ce format ne sera utilisé que lorsque la date saisie est déjà passée. Par exemple, "Terminé depuis %countup" affichera "Terminé depuis 1h 45m" si le compte à rebours s'est écoulé il y a 1 heure et 45 minutes.
    Le paramètre "id" doit être une chaîne de caractères. L'élément ayant cet id contiendra le compte à rebours.

Utilisation :
    Dans le document HTML, incluez ce fichier avec <script src="chemin"></script>
    Créez un nouveau script : <script>countdownTo(paramètres);</script>
    Mettez l'identifiant de l'élément que vous souhaitez transformer en compte à rebours sur un identifiant relié à un compteur.
*/

function countdownTo(goal, formatBefore = "%countdown", formatAfter = "", id = "countdown"){
    var nowDate = new Date();
    var goalDate = new Date(goal);
    var gap = Math.abs(goalDate - nowDate);
    //Formatting count
    if(gap>=360000000){ //if more than 100 hours (4d 4h)
        var countString = Math.floor(gap/86400000)+"j";
    }
    if(gap<360000000 && gap>=6000000){ //if between 100 mins (1h 40m) and 100 hours (4d 4h)
        var countString = Math.floor(gap/3600000)+"h "+("0"+Math.floor(gap/60000)%60).slice(-2)+"m";
    }
    if(gap<6000000 && gap>=60000){ //if between 1 and 100 mins (1h 40m)
        var countString = Math.floor(gap/60000)+"' "+("0"+Math.floor(gap/1000)%60).slice(-2)+"''";
    }
    if(gap<60000 && gap>=0){ //if less than 1 min
        var countString = Math.floor(gap/1000)+"''";
    }
    //Choosing the right format
    if(goalDate > nowDate){
        var finalString = formatBefore.replace('%countdown',countString);
    }else{
        var finalString = formatAfter.replace('%countup',countString);
    }
    setTimeout(countdownTo, 1000, goal, formatBefore, formatAfter, id);
    document.getElementById(id).innerHTML = finalString;
}