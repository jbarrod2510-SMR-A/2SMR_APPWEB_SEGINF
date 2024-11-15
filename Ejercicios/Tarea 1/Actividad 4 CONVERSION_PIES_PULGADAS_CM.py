# Nombre: Javier Barcelona Rodríguez
# Fecha: 02/10/2024
# Objetivo: Escriba un programa que pida una distancia en pies y pulgadas y que escriba esa
# distancia en centímetros.

print("Convertidor de pies y pulgadas a centímetros")

a = input("Escriba un número de pies ")
b = input("Escriba un número de pulgadas ")

a_num = eval(a)
b_num = eval(b)

cm = (a_num*12*2.54)+(b_num*2.54)

print(a_num, "pies y", b_num, "pulgadas son", cm, "cm")