# Nombre: Javier Barcelona Rodríguez
# Fecha: 06/10/2024
# Objetivo: Escriba un programa que pida números pares mientras el usuario indique que quiere
# seguir introduciendo números. Para indicar que quiere seguir escribiendo números, el
# usuario deberá contestar S o s a la pregunta.

print ("Cuenta Pares")
otro = "S"
cont=0
while otro == 'S' or otro =='s':
    a= input("Escriba un número par ")
    a_num=eval(a)
    if a_num % 2==0:
        cont=cont+1
        otro= input("¿Quiere escribir otro número par? (S/N) ")
    elif a_num % 2==1:
        print(a_num, "no es un número par, Inténtelo de nuevo")
print("Ha escrito", cont, "números pares")