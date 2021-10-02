#include <stdio.h>
#include <math.h>

int main() {
	float a=0;
	float b=0;
	float c=0;
	printf("Format: ax² + bx + c = 0\n");
	printf("Saisir a:");
	scanf("%f", &a);
	printf("Saisir b:");
	scanf("%f", &b);
	printf("Saisir c:");
	scanf("%f", &c);
	if(a!=0) {
		float delta=(b*b)-(4*a*c);
		if(delta<0) {
			printf("Delta étant négatif, il n'y a pas de solutions réelles." );
		}
		if(delta==0) {
			float r0=(-b)/(2*a);
			printf("La solution de l'équation %fx² + %fx + %f = 0 est %f.\nIl n'y a qu'une solution car Delta est nul.", a, b, c, r0);
		}
		if(delta>0) {
			float r1=((-b)-sqrt(delta))/(2*a);
			float r2=((-b)+sqrt(delta))/(2*a);
			printf("Les solutions de l'équation %fx² + %fx + %f = 0 est %f et %f.\nIl y a 2 solutions car Delta est positif.", a, b, c, r1, r2);
		}
	}
	if(a==0) {
        if (b!=0) {
            float x=-c/b;
            printf("La solution de l'équation %fx + %f = 0 est %f.", b, c, x);
        }
        if (b==0) {
            printf("L'équation %f = 0 ne dépend pas de x.", c);
		}
	}
}
