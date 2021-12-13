#include <stdio.h>
void red(){
    printf("\033[0;31m");
}
void green(){
    printf("\033[0;32m");
}
void bold(){
    printf("\033[1m");
}
void normal(){
    printf("\033[0m");
}
void reset(){
    printf("\033[0;00m");
}

int main(){
    int i;
    bold();
    printf("TABLE ASCII\n");
    normal();
    printf("Les caractères en ");red();printf("rouge");reset();printf(" sont considérés comme spéciaux (caractères de contrôle)\n");
    printf("Les caractères en ");green();printf("vert");reset();printf(" sont considérés comme classiques\n");
    red();
    printf("  0:rien\n");
    printf("  1:début de l'en-tête\n");
    printf("  2:début du texte\n");
    printf("  3:fin du texte\n");
    printf("  4:fin de transmission\n");
    printf("  5:fin de ligne\n");
    printf("  6:accusé de réception\n");
    printf("  7:appel\n");
    printf("  8:retour (touche au-dessus de Entrée)\n");
    printf("  9:tabulation horizontale (touche au-dessus de Verr.Maj)\n");
    printf(" 10:saut de ligne\n");
    printf(" 11:tabulation verticale\n");
    printf(" 12:saut de page\n");
    printf(" 13:retour chariot (touche Entrée)\n");
    printf(" 14:fin d'extension\n");
    printf(" 15:début d'extension\n");
    printf(" 16:échappement en transmission\n");
    printf(" 17:contrôle de périphérique 1\n");
    printf(" 18:contrôle de périphérique 2\n");
    printf(" 19:contrôle de périphérique 3\n");
    printf(" 20:contrôle de périphérique 4\n");
    printf(" 21:accusé de réception négatif\n");
    printf(" 22:attente synchroisée\n");
    printf(" 23:fin de bloc de transmission\n");
    printf(" 24:annulation\n");
    printf(" 25:fin de support\n");
    printf(" 26:remplacement\n");
    printf(" 27:échappement (touche Echap)\n");
    printf(" 28:séparateur de fichier\n");
    printf(" 29:séparateur de groupe\n");
    printf(" 30:séparateur d'enregistrement\n");
    printf(" 31:séparateur d'unité\n");
    green();
    printf(" 32:espace\n");
    for(i=33;i<127;i++){
        printf("%3i:%c\n",i,i);
    }
    printf("127:retour\n");
}
