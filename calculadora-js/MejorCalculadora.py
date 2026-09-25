n1 = int(input("Escribe un número: "))
n2 = int(input("Escribe otro número: "))

def suma (n1 , n2):
    return n1 + n2

def resta (n1,n2):
    return n1-n2

def multi (n1,n2):
    return n1*n2

def divi (n1,n2):
    if n2 != 0:
        return n1/n2
    else:
        print("No se puede dividir entre cero.")
    
def modul (n1,n2):
    return n1%n2

def sumtres (n1,n2):
    n3 = int(input("\nIngresa un tercer número: "))
    return n1+n2+n3

def potencia (n1,n2):
    return n1**n2

def expr (expresion):
    try:
        resultado = eval(expresion)
        return resultado
    except Exception:
        return Exception

print("\n La suma es: ", suma(n1 , n2))

print("\n")
print("1. Restar el segundo al primer número")
print("2. Multiplicarlos")
print("3. Dividir el primero entre el segundo")
print("4. Has la operación de módulo")
print("5. Añadir otro número y sumarlos")
print("6. Potencia")
print("7. Operación libre de tres números")
opcion = input("\nSelecciona una opción (1-7): ")

match opcion:
    case "1":
        print("\nResultado: ", resta(n1,n2))
    case "2":
        print("\nResultado: ", multi(n1,n2))
    case "3":
        print("\nResultado: ", divi(n1,n2))
    case "4":
        print("\nResultado: ", modul(n1,n2))
    case "5":
        print("Resultado de sumar los 3: ", sumtres (n1,n2))
    case "6":
        print("Resultado: ", potencia (n1,n2))
    case "7":
        expresion = input("\nEscribe una operación (ej. 1 + 2 - 3): ")
        print("\nResultado: ", expr (expresion))
    case _:
        print("\nOpción no válida.")
