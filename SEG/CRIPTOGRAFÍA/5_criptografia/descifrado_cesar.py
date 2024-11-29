# Defino la función descifrado_cesar
def descifrado_cesar(cad_cif, clv):
    # Entrada: La cadena original cifrada (criptograma) y la clave del algoritmo
    # Salida: mensaje descifrado con la clave de entrada

    # Variable auxiliar
    new_cad = "" # Cadena vacía donde se irá creando la nueva cadena descifrada
    abc = "abcdefghijklmnñopqrstuvwxyz"
    # Código
    if clv >= len(abc):
        clv = clv % len(abc)

    for i in cad_cif:
        if i in abc:
            pos = max(max(abc.index(i) - clv, 0), (abc.index(i) - clv) % len(abc))
            new_cad += abc[pos]
        else:
            new_cad += " "

    return new_cad

# Datos de la práctica
cadena_cifrada = "jp mtqgwj ix jp xjw vzj fp mfgpfw xj vzjif jxujwfrit"
clv = 5
# Poner la función
print(descifrado_cesar(cadena_cifrada, clv))