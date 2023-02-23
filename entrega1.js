let porcentaje = prompt ('Ingrese el porcetaje aqui')
let nota = 0

if (porcentaje == 0) {
    nota = 0
}
if (porcentaje == 0) {
    nota = 0 
} else if (porcentaje >=1 && porcentaje <=33)
{
    nota = 1
} else if (porcentaje >=34 && porcentaje <=54)
{
    nota = 2
} else if (porcentaje >=55 && porcentaje <=60)
{
    nota = 3
} else if (porcentaje >=51 && porcentaje <=64)
{
    nota = 4
} else if (porcentaje >=65 && porcentaje <=69)
{
    nota = 5
} else if (porcentaje >=70 && porcentaje <=73)
{
    nota = 6
} else if (porcentaje >=74 && porcentaje <=78)
{
    nota = 7
} else if (porcentaje >=79 && porcentaje <=82)
{
    nota = 8
} else if (porcentaje >=83 && porcentaje <=87)
{
    nota = 9
} else if (porcentaje >=88 && porcentaje <=91)
{
    nota = 10
} else if (porcentaje >=92 && porcentaje <=96)
{
    nota = 11
} else if (porcentaje >=97 && porcentaje <=100)
{
    nota = 12
} else if (porcentaje <0 || porcentaje >100) {
    nota = -1
}

if (nota == -1) 
{
    alert ('Porcentaje incorrecto')
} else {
    alert ('Su nota es '+ nota)
}