# Nombre: Javier Barcelona Rodríguez
# Fecha: 02/10/2024
# Objetivo: Escriba un programa que pida una cantidad de segundos y que escriba cuántos minutos
# y segundos son.

print("Convertidor de segundos a minutos")

a= input("Escriba una cantidad de segundos ")

a_num = eval(a)
min = (a_num//60)
seg = (a_num % 60)

print(a, "segundos son", min, "minutos y", seg, "segundos")