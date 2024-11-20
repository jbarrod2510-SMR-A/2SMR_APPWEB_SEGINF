# Nombre: Javier Barcelona Rodríguez
# Fecha: 05/10/2024
# Objetivo: Escriba un programa que pida dos números enteros y escriba la lista de números
# consecutivos que hay entre ellos, de menor a mayor.

print("Lista de menor a mayor")

a= input("Escriba un número entero ")
b= input("Escriba otro número entero ")

a_num = eval(a)
b_num = eval(b)

if a_num < b_num:
    print(list(range(a_num+1, b_num, 1)))
elif b_num < a_num:
    print(list(range(b_num+1, a_num, 1)))
elif a_num == b_num:
    print(list(range(a_num, b_num, 1)))
