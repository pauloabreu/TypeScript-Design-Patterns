# Factory Method

## O Problema

Imagine que precisamos de objetos(Carro, Bicicleta) para iniciarmos o Delivery.
<img src="./Images/problem.png" />
Agora imagine que vamos instanciar essas classes várias outras vezes em todo o código, Nesse caso a cada implementação e modificação temos que mexer em todas as chamadas, temos um grande acoplamento.

## Solução

<img src="./Images/factoryClass.png" />
Implementamos o VehicleFactory e **Delegamos** os detalhes da criação para as subsclasses

<img src="./Images/factories.png" />
Agora podemos facilmente estender facilmente o número de veículos, basta criar uma classe, ex: **Airplane** e implementar o **VehicleFactory**.
O resto do código agora somente está acoplado as Factories, se fizermos novas implementações/mudanças nas classes Car/Bicycle basta mudar as suas respectivas Factories.