# Nombre: Javier Barcelona Rodríguez
# Fecha: 03/10/2024
# Objetivo: Escriba un programa que pida un año y que escriba si es bisiesto o no.
# Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de 100 no lo
# son, aunque los múltiplos de 400 sí.

print("Comprobador de años bisiestos")

a= input("Escriba un año y le diré si es bisiesto ")
año=eval(a)

if año % 400 == 0:
    print("El año", año, "es bisiesto porque es múltiplo de 400")
elif not año % 400 == 0:
    if año % 100 == 0:
        print("El año", año, "no es un año bisiesto porque es múltiplo de 100 sin ser múltiplo de 400")
    elif not año % 100 == 0:
        if año % 4 == 0:
            print("El año", año, "es bisiesto porque es múltiplo de 4 sin serlo de 100")
        elif not año % 4 == 0:
            print("El año", año, "no es un año bisiesto")
            