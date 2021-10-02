#include <stdio.h>

int main() {
	int nb=0;
	int div=0;
	int sommediv=0;
	int limite=0;
	printf("Saisir la limite de la recheche:");
	scanf("%i", &limite);
	for(nb=1; nb<=limite; nb++) {
		for(div=1; div<nb; div++) {
			if(nb%div==0) {
				sommediv=sommediv+div;
			}
		}
		if(nb==sommediv) {
			printf("%i est un nombre parfait.\n", nb);
		}
		sommediv=0;
	}
}
