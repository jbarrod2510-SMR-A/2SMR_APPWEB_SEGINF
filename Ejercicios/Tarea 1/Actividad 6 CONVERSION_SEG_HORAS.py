# Nombre: Javier Barcelona Rodríguez
# Fecha: 02/10/2024
# Objetivo: Escriba un programa que pida una cantidad de segundos y que escriba cuántas horas,
# minutos y segundos son.

print("Convertidor de segundos a horas y minutos")
a = input("Escriba una cantidad de segundos ")

a_num = eval(a)

hor= (a_num//3600)
min= (a_num//60)-hor*60
seg= (a_num % 60)

print (a, "segundos son", hor, "horas", min, "minutos y", seg, "segundos")