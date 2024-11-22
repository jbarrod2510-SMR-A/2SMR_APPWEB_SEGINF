# Nombre: Javier Barcelona Rodríguez
# Fecha: 16/10/2024
# Objetivo: Dibuja en python un cuadrado de lado dado por el usuario se dibujarán con el símbolo "*" y "-" ed manera alterna tal y como se indica en el ejemplo.
# Para ello recomiendo utilizar dos funciones que debes crear previamente:
# Una función que permita pintar una línea del cuadrrado con símbolos alternos
# Una función que permita pintar líneas distintas del cuadrado teniendo en cuenta el símbolo con el que se empieza a pintar 

lado = int(input("Introduce la dimensión de uno de los lados de un cuadrado ")) # Entrada de datos
for fila in range(lado):
    for col in range(lado):
        if (fila + col) % 2 == 0:
            print("* ", end= "")
        else:
            print("- ", end= "")
    print()
