# Nombre: Javier Barcelona Rodríguez
# Fecha: 14/10/2024
# Objetivo: Escriba un programa que pida cuántas listas se quieren crear y las solicite a continuación
# Modifique el programa anterior de manera que las listas se escriban al final del programa.

listas = {}

num_listas = int(input("¿Cuantas listas se quieren crear? "))
for n in range(1,num_listas+1):
    num_palabras = int(input(f"Cuantas palabras tiene la lista {n}: "))
    listas[f'lista{n}'] = []
    for i in range(1, num_palabras+1):
        palabra = input(f"Dígame la palabra {i}: ")
        listas[f'lista{n}'].append(palabra)
for n in range(1,num_listas+1):
    print("La lista",n, "es", listas[f'lista{n}'])
