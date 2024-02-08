const car1 = prompt ("Nome do 1° Veículo:")
console.log (car1)

const speed1 = prompt ("Velocidade máxima:") 
console.log (speed1 + "km")

const car2 = prompt ("Nome do 2° Veículo:")
console.log (car2)

const speed2 = prompt ("Velocidade máxima:") 
console.log (speed2 + "km")

if (speed1 > speed2) {
    alert(car1 + " " + "é o mais rapido")
} else if (speed1 < speed2) {
    alert(car2 + " " + "é o mais rapido")
}else if (speed1 === speed2){
    alert("Os dois carros tem a mesma velocidade.")
}