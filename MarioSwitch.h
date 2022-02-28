#include <stdio.h>
#include <math.h>
#include <string.h>

/*
-----Languages-----
de:Deutsch/German
dk:Dansk/Danish
en:English
es:Español/Spanish
fi:Suomalainen/Finnish
fr:Français/French
it:Italiano/Italian
no:Norsk/Norwegian
sv:Svenska/Swedish
*/

char* ordinal(char* lang, int place){ //Supported languages: de, dk, en, es, fi, fr, it, no, sv
    char* placestr[11];
    sprintf(placestr, "%i", place);
    if(place<1){
        return "*Place must be positive*";
    }
    if(lang=="de" || lang=="dk" || lang=="fi" || lang=="no"){
        return strcat(placestr,".");
    }
    if(lang=="en"){
        if(place%100==11 || place%100==12 || place%100==13){
            return strcat(placestr,"th");
        }
        if(place%10==1){
            return strcat(placestr,"st");
        }
        if(place%10==2){
            return strcat(placestr,"nd");
        }
        if(place%10==3){
            return strcat(placestr,"rd");
        }
        else{
            return strcat(placestr,"th");
        }
    }
    if(lang=="es" || lang=="pt"){
        return strcat(placestr,".º");
    }
    if(lang=="fr"){
        if(place==1){
            return "1er";
        }
        else{
            return strcat(placestr,"e");
        }
    }
    if(lang=="it"){
        return strcat(placestr,"º");
    }
    if(lang=="sv"){
        if(place==11 || place==12){
            return strcat(placestr,":e");
        }
        if(place%10==1 || place%10==2){
            return strcat(placestr,":a");
        }
        else{
            return strcat(placestr,":e");
        }
    }
    return "*Language is not supported*";
}
