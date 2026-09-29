def suma (n1,n2):
    return n1 + n2

def resta (n1,n2):
    return n1 - n2

def multi (n1,n2):
    return n1 * n2

def divi (n1,n2):
    return n1 / n2

def potencia (n1,n2):
    return n1 ** n2

n1 = (input("Escribe un número: "))
n2 = (input("Escribe otro número: "))

print("Suma")
print(suma(n1,n2))

print("Resta")
print(resta(n1,n2))

print("Multiplicación")
print(multi(n1,n2))

print("División")
print(divi(n1,n2))

print("Potencia")
print(potencia(n1,n2))