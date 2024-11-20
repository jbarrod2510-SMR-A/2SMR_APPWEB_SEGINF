# Nombre: Javier Barcelona Rodríguez
# Fecha: 03/10/2024
# Objetivo: Escriba un programa que pida tres números y que escriba si son los tres iguales, si hay
# dos iguales o si son los tres distintos.

print("Comparador de tres números")
a= input("Escriba un número ")
b= input("Escriba otro número ")
c= input("Escriba otro número ")

número_1= eval(a)
número_2= eval(b)
número_3= eval(c)

if número_1 == número_2 == número_3:
    print("Ha escrito el mismo número tres veces")
elif número_1 == número_2 or número_1 == número_3 or número_2 == número_3:
    print("Ha escrito 2 veces el mismo número")
else:
    print("Los tres números que ha escrito son distintos")
