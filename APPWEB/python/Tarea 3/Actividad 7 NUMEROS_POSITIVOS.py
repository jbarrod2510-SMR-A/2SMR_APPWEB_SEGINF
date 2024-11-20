# Nombre: Javier Barcelona Rodríguez
# Fecha: 06/10/2024
# Objetivo: Escriba un programa que pida la cantidad de números positivos que se tienen que
# escribir y a continuación pida números hasta que se haya escrito la cantidad de números
# positivos indicada.

print("Números Positivos")

a= input("Escriba la canidad de números positivos a escribir ")
a_num = eval(a)
if a_num <= 0:
    input("La cantidad debe ser mayor que 0. Inténtelo de nuevo: ")
else:
    cont = 0
    cont2 = 0
    while cont < a_num:
        b= input("Escribe el número ")
        b_num = eval(b)
        cont2 =cont2 + 1
        if b_num > 0:
            cont=cont +1
    print("Ha escrito", cont2, "números,", cont, "de ellos positivos")