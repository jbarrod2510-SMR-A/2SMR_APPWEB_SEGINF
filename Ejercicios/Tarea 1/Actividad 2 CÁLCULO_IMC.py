# NOMBRE: Javier Barcelona Rodríguez
# FECHA: 01/10/2024
# OBJETIVO: Escriba un programa que pida el peso (en kilogramos) y la altura (en metros) de una
# persona y que calcule su índice de masa corporal (imc).

print("Calculo del IMC")

a = input("Escribe tu peso ")
b = input("Escribe tu altura ")

a_num = eval(a)
b_num = eval(b)

IMC = (a_num / b_num**2)

print("Su IMC es", IMC)

print("Un IMC muy alto indica obesidad. Los valores normales de IMC están entre 20 y 25, pero esos límites dependen de la edad, del sexo, de la constitución física")