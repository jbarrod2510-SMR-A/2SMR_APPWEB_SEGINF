# Nombre: Javier Barcelona Rodríguez
# Fecha: 03/10/2024
# Objetivo: Escriba un programa que pida dos números enteros y que escriba si el mayor es múltiplo
# del menor. El programa debe avisar cuando se escriben valores negativos o nulos.

print("Comparador de múltiplos")
a= input("Introduce un número ")
b= input("Introduce otro número ")

a_num= eval(a)
b_num= eval(b)

if a_num == 0 or b_num == 0:
    print("Lo siento, este pregrama no admite valores nulos")
elif a_num < 0 or b_num < 0:
    print("Lo siento, este programa no admite valores negativos")
else:
    if a_num > b_num:
        if a_num % b_num == 0:
            print(a_num, "es múltiplo de", b_num)
        else:
            print(a_num, "no es múltiplo de", b_num)
    elif b_num > a_num:
        if b_num % a_num == 0:
            print(b_num, "es múltiplo de", a_num)
        else:
            print(b_num, "no es múltiplo de", a_num)
    elif a_num == b_num:
        print(a_num, "es múltiplo de", b_num)
