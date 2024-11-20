# Nombre: Javier Barcelona Rodríguez
# Fecha: 03/10/2024
# Objetivo: Escriba un programa que pida dos números enteros y que calcule su división,
# escribiendo si la división es exacta o no

print("DIVISOR DE NÚMEROS")
a= input("Escriba el dividendo ")
b= input("Escriba el divisor ")

divisor= eval(b)
dividendo= eval(a)

div= dividendo//divisor
res= dividendo%divisor
if dividendo % divisor == 0:
    print("La división es exacta, el cociente es", div)
elif not dividendo % divisor == 0:
    print("La división no es exacta, el cociente es", div, "y el resto es", res)
