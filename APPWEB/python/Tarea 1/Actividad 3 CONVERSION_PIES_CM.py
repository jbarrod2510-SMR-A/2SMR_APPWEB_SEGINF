# NOMBRE: Javier Barcelona Rodríguez
# FECHA: 02/10/2024
# OBJETIVO: Escriba un programa que pida una distancia en pies y que escriba esa distancia en centímetros.

print("Conversión pies a centímetros")

a = input("Escriba un número de pies ")

a_num = eval(a)

cm = (a_num*12)*(2.54)

print(a, "pies son", cm, "cm")