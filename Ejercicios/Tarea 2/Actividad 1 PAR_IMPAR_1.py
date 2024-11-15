# Nombre: Javier Barcelona Rodríguez
# Fecha: 03/10/2024
# Objetivo: Escriba un programa que pida primero un número par y luego un número impar (positivos
# o negativos). En caso de que uno o los dos valores no sea correcto, se mostrará un único
# aviso.

print ("Par e Impar 1")
a= input ("Escriba un número par ")
b= input ("Escriba un número impar ")

par=eval(a)
impar=eval(b)

if par % 2 == 0 and impar % 2 == 1:
    print("Gracias por su colaboración")
elif not par % 2 == 0 or not impar % 2 == 1:
    print("Uno o más de los valores que ha escrito no son correctos")
    print("Ejecute de nuevo el programa para volver a intentarlo")