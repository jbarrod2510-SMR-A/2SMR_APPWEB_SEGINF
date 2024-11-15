# Nombre: Javier Barcelona Rodríguez
# Fecha: 05/10/2024
# Objetivo: Escriba un programa que pida un número entero mayor que cero y que escriba sus
# divisores.

print("Divisores")
a= input("Escriba un número mayor que cero ")

a_num = eval(a)

if a_num <= 0:
    print("¡Le he pedido un número entero mayor que cero!")
elif a_num > 0:
    divisores = []
    for n in range(1,a_num+1):
        if a_num % n == 0:
            divisores.append(n)
    print("Los divisores de", a_num, "son", divisores)