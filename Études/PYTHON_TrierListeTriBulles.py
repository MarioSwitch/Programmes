# Initialisation de la liste
L=[]

# Création de la liste
taille=int(input("Taille de la liste (quantité de valeurs) : "))
for i in range(1,taille+1):
	print("Il reste", taille+1-i, "valeur(s) à saisir.")
	valeur=float(input("Entrez une valeur : "))
	L.append(valeur)

# Tri
for y in range(1, taille+1):
	for z in range(1, taille+1-y):
		if L[taille-z]<L[taille-z-1]:
			a=L[taille-z]
			L[taille-z]=L[taille-z-1]
			L[taille-z-1]=a
print(L)
