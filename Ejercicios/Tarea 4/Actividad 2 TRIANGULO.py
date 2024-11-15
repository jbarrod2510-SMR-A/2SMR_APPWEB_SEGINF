# Nombre: Javier Barcelona Rodríguez 
# Fecha: 14/10/2024
# Objetivo: Escribir un programa que pida al usuario un número entero 
# y muestre por pantalla un triángulo como el de más abajo, de altura el número introducido.

a = int(input("Escriba la anchura del triángulo "))
for i in range(a):
   print("*"*(i+1))
for i in  range(a,0,-1):
   print("*"*(i-1))