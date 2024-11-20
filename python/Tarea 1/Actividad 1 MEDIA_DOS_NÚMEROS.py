# NOMBRE: Javier Barcelona Rodríguez
# FECHA: 30/09/2024
# OBJETIVO: Escriba un programa que pida dos números y que escriba su media aritmética

print("CÁLCULO DE LA MEDIA DE DOS NÚMEROS")

a = input("Escriba un número ")
b = input("Escriba otro número ")

a_num = eval(a)
b_num = eval(b)

media = (a_num + b_num)/2

print("La media aritmética de", a_num, "y", b_num, "es", media)