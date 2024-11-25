L = [5, 3, 7, 9, 0]

lis_ord = L.copy()
seguir = True

while seguir:
    cont = 0
    for i in range(len(L)-1):
        if L[i] <= L[i+1]:
            lis_ord[i] = L[i+1]
            lis_ord[i+1] = L[i]
            cont = cont + 1
        else:
            lis_ord[i] = L[i]
            lis_ord[i+1] = L[i+1]
        L = lis_ord.copy()
    
    if cont == 0:
        seguir=False

print("La lista ordenada es ", lis_ord)