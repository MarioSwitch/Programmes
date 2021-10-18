#include <stdio.h>

int main() {
	int a=0, entier=2, diviseur=2, max=0;
	printf("Maximum:");
	scanf("%i", &max);
	for (entier=2; entier<max+1; entier++) {
		diviseur=2;
		while (entier%diviseur!=0 && diviseur<entier) {
			diviseur++;
		}
		if (diviseur==entier) {
			printf("%i est un nombre premier.\n", entier);
		}
	}
}
