# Nombre: Javier Barcelona Rodríguez
# Fecha: 16/10/2024
# Objetivo: Crea un programa que pida palabras o cadenas de texto de una en una al usuario.
# Al introducir una cadena vacía, el programa se parará y devolverá:
# El número de palabras que contienen la letra "a" o "A"
# Una lista con las palabras que contienen dichas vocales

# Entrada de datos
palabra = input("Por favor, introduce una palabra ")
lista = []

if palabra == "":
    print("Únicamente ha introducido una cadena vacía") # Salida de datos

while palabra != "":
    palabra = input("Por favor, introduce una palabra ")
    if palabra == "":
        print("Ha introducido una cadena vacía. El programa se parará") # Salida de datos
    else:
        if "a" in palabra or "A" in palabra:
            lista.append(palabra)


print("El número de palabras introducidas que contienen la letra a son", len(lista))
print("Y las palabras introducidas son", lista)
