
def pintar_linea_alterna(lado):
    asterisco = True
    for fila in range(lado):
        if asterisco:
            print("*", end= " ")
            asterisco = False
        else:
            print("-", end= " ")
            asterisco = True
    print()

def pintar_cuadrado_alterno(lado):
    for fila in range(lado):
        if fila % 2== 0:
            pintar_linea_alterna(lado, True)
        else:
            pintar_linea_alterna(lado, False)

pintar_cuadrado_alterno(5)