# Initialisation des variables
e500=0
e200=0
e100=0
e50=0
e20=0
e10=0
e5=0
e2=0
e1=0
c50=0
c20=0
c10=0
c5=0
c2=0
c1=0

# Demande de l'argent total
total=float(input("Argent total : "))

# Tri par billets
while total>=500:
	total=total-500
	e500=e500+1
while total>=200:
	total=total-200
	e200=e200+1
while total>=100:
	total=total-100
	e100=e100+1
while total>=50:
	total=total-50
	e50=e50+1
while total>=20:
	total=total-20
	e20=e20+1
while total>=10:
	total=total-10
	e10=e10+1
while total>=5:
	total=total-5
	e5=e5+1
while total>=2:
	total=total-2
	e2=e2+1
while total>=1:
	total=total-1
	e1=e1+1
while total>=0.5:
	total=total-0.5
	c50=c50+1
while total>=0.2:
	total=total-0.2
	c20=c20+1
while total>=0.1:
	total=total-0.1
	c10=c10+1
while total>=0.05:
	total=total-0.05
	c5=c5+1
while total>=0.02:
	total=total-0.02
	c2=c2+1
while total>=0.01:
	total=total-0.01
	c1=c1+1

# Affichage des résultats
print(e500, " billet(s) de 500 €,")
print(e200, " billet(s) de 200 €,")
print(e100, " billet(s) de 100 €,")
print(e50, " billet(s) de 50 €,")
print(e20, " billet(s) de 20 €,")
print(e10, " billet(s) de 10 €,")
print(e5, " billet(s) de 5 €,")
print(e2, " pièce(s) de 2 €,")
print(e1, " pièce(s) de 1 €,")
print(c50, " pièce(s) de 50c,")
print(c20, " pièces(s) de 20c,")
print(c10, " pièce(s) de 10c,")
print(c5, " pièce(s) de 5c,")
print(c2, " pièce(s) de 2c,")
print(c1, " pièce(s) de 1c.")