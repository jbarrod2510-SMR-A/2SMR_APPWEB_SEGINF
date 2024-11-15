# Nombre: Javier Barcelona Rodríguez
# Fecha: 03/10/2024
# Objetivo: Mejore el programa anterior haciendo que tenga en cuenta que no se puede dividir por
# cero.

print("DIVISOR DE NÚMEROS")
a= input("Escriba el dividendo ")
b= input("Escriba el divisor ")

dividendo= eval(a)
divisor= eval(b)

if divisor == 0:
    print("No se puede dividir por 0")
elif not divisor == 0:
    div=dividendo//divisor
    res=dividendo%divisor
    if dividendo % divisor == 0:
        print("La división es exacta, el cociente es", div)
    elif not dividendo % divisor == 0:
        print("La división no es exacta, el cociente es", div, "y el resto es", res)