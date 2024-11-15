# Nombre: Javier Barcelona Rodríguez
# Fecha: 03/10/2024
# Escriba un programa que pida primero un número par (positivo o negativo) y si el valor
# no es correcto, muestre un aviso. Si el valor es correcto, pedirá un número impar
# (positivo o negativo) y si el valor no es correcto, mostrará un aviso.

print("Par e Inpar 2")
a= input("Escriba un número par ")
par= eval(a)

if par % 2 == 0:
    b=input("Escriba un número inpar ")
    inpar=eval(b)
    if inpar % 2== 1:
        print("Gracias por su colaboración")
    elif not inpar % 2 == 1:
        print("No ha escrito un número inpar")
        print("Ejecute de nuevo el programa para volver a intentarlo")
elif not par % 2 == 0:
    print("No ha escrito un número par")
    print("Ejecute de nuevo el programa para volver a intentarlo")


