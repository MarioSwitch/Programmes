#include <stdio.h>
int main()
{
    int mode, RESULT, m, h, j;
    float total, vitesse, result, s, M, H, J;
    printf("Nombre de ressources:");
    scanf("%f", &total);
    printf("Vitesse de diminution:");
    scanf("%f", &vitesse);
    printf("Tapez 1 pour une diminution par seconde\n");
    printf("Tapez 2 pour une diminution par minute\n");
    printf("Tapez 3 pour une diminution par heure\n");
    printf("Tapez 4 pour une diminution par jour\n");
    scanf("%i", &mode);
    result=total/vitesse;
    if (mode==2)
        result = result * 60;
    if (mode==3)
        result = result * 3600;
    if (mode==4)
        result = result * 86400;
    RESULT=result;
    s=(RESULT%60)+(result-RESULT);
    m=(RESULT%3600)/60;
    h=(RESULT%86400)/3600;
    j=RESULT/86400;
    M=result/60;
    H=result/3600;
    J=result/86400;
    if (result>=86400)
        printf("Votre stock sera épuisé dans %i jour(s), %i heure(s), %i minute(s) et %.3f seconde(s) (soit %.2f jour(s)).", j, h, m, s, J);
    if (result<86400 && result>=3600)
        printf("Votre stock sera épuisé dans %i heure(s), %i minute(s) et %.3f seconde(s) (soit %.2f heure(s)).", h, m, s, H);
    if (result<3600 && result>=60)
        printf("Votre stock sera épuisé dans %i minute(s) et %.3f seconde(s) (soit %.2f minute(s)).", m, s, M);
    if (result<60 && result>=0)
        printf("Votre stock sera épuisé dans %.3f seconde(s).", s);
}
