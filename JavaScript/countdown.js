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

/*
----- ENGLISH -----
This function does the same as above but with 2 dates (one start and one end).

Parameters:
    start and end parameters must be in YYYY-MM-DDTHH:ii:ssZ format
    format parameters (formatBefore, formatBetween and formatAfter) will be used to show formatted text with %countStart and %countEnd replaced by the actual gap with the start and/or the end
    id parameter is the same as above

Usage:
    Same as above. Be careful to call the right function in your created script!

----- FRENCH / FRANÇAIS -----
Cette fonction fait la même chose que celle ci-dessus mais avec 2 dates (une de début et une de fin).

Paramètres :
    Les paramètres "start" et "end" doivent être des dates au format YYYY-MM-DDTHH:ii:ssZ
    Les paramètres "formatBefore", "formatBetween" et "formatAfter" seront utilisés respectivement avant le début, entre le début et la fin et après la fin. Ces paramètres doivent être du texte, %countStart sera remplacé par l'écart actuel avec la date de début, %countEnd par l'écart actuel avec celle de fin.
    Le paramètre "id" fonctionne de la même manière que la fonction ci-dessus.

Utilisation :
    Même système que la fonction précédente. N'oubliez pas d'appeler la bonne fonction dans le script que vous créez !
*/


function countdownToStartEnd(start, end, formatBefore = "%countStart avant le début", formatBetween = "%countEnd avant la fin", formatAfter = "Fini depuis %countEnd", id = "countdown"){
    var nowDate = new Date();
    var startDate = new Date(start);
    var endDate = new Date(end);
    if(startDate > endDate){
        var startDate = new Date(end);
        var endDate = new Date(start);
    }
    var gapStart = Math.abs(startDate - nowDate);
    var gapEnd = Math.abs(endDate - nowDate);
    //Formatting countStringStart
    if(gapStart>=360000000){ //if more than 100 hours (4d 4h)
        var countStringStart = Math.floor(gapStart/86400000)+"j";
    }
    if(gapStart<360000000 && gapStart>=6000000){ //if between 100 mins (1h 40m) and 100 hours (4d 4h)
        var countStringStart = Math.floor(gapStart/3600000)+"h "+("0"+Math.floor(gapStart/60000)%60).slice(-2)+"m";
    }
    if(gapStart<6000000 && gapStart>=60000){ //if between 1 and 100 mins (1h 40m)
        var countStringStart = Math.floor(gapStart/60000)+"' "+("0"+Math.floor(gapStart/1000)%60).slice(-2)+"''";
    }
    if(gapStart<60000 && gapStart>=0){ //if less than 1 min
        var countStringStart = Math.floor(gapStart/1000)+"''";
    }
    //Formatting countStringEnd
    if(gapEnd>=360000000){ //if more than 100 hours (4d 4h)
        var countStringEnd = Math.floor(gapEnd/86400000)+"j";
    }
    if(gapEnd<360000000 && gapEnd>=6000000){ //if between 100 mins (1h 40m) and 100 hours (4d 4h)
        var countStringEnd = Math.floor(gapEnd/3600000)+"h "+("0"+Math.floor(gapEnd/60000)%60).slice(-2)+"m";
    }
    if(gapEnd<6000000 && gapEnd>=60000){ //if between 1 and 100 mins (1h 40m)
        var countStringEnd = Math.floor(gapEnd/60000)+"' "+("0"+Math.floor(gapEnd/1000)%60).slice(-2)+"''";
    }
    if(gapEnd<60000 && gapEnd>=0){ //if less than 1 min
        var countStringEnd = Math.floor(gapEnd/1000)+"''";
    }
    //Choosing the right format
    if(nowDate < startDate){
        var finalString = formatBefore.replace('%countStart',countStringStart).replace('%countEnd',countStringEnd);
    }else if(nowDate >= startDate && nowDate < endDate){
        var finalString = formatBetween.replace('%countStart',countStringStart).replace('%countEnd',countStringEnd);
    }else if(nowDate >= endDate){
        var finalString = formatAfter.replace('%countStart',countStringStart).replace('%countEnd',countStringEnd);
    }
    setTimeout(countdownToStartEnd, 1000, start, end, formatBefore, formatBetween, formatAfter, id);
    document.getElementById(id).innerHTML = finalString;
}