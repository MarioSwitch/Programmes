# Initialisation des variables
valeur=0
L=[]

# Création de la liste
taille=int(input("Taille de la liste : "))
for i in range(1,taille+1):
  valeur=float(input("Entrez une valeur : "))
  L.append(valeur)

# Tri
for y in range(1, taille+1):
	for z in range(1, taille+1-y):
		if L[taille-z]<L[taille-z-1]:
			temporaire=L[taille-z]
			L[taille-z]=L[taille-z-1]
			L[taille-z-1]=temporaire
print(L)
