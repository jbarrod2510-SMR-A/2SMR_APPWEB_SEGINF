numero1 = int(input("Introduce el primer número: "))
numero2 = int(input("Introduce el segundo número: "))
if numero1 > numero2:
    lista_descendente = list(range(numero1, numero2 - 1, -1))
else:
    lista_descendente = list(range(numero2, numero1 - 1, -1))
    
    
print("Lista en orden descendente:", lista_descendente)