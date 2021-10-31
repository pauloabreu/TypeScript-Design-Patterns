# Factory Method

## O Problema

Imagine que precisamos de objetos(Carro, Bicicleta) para iniciarmos o Delivery.

<img src="./Images/problem.png" />

Agora imagine que vamos instanciar essas classes várias outras vezes em todo o código, Nesse caso a cada implementação e modificação temos que mexer em todas as chamadas, temos um grande acoplamento.

## Solução

Vamos fornecer uma interface para criação de familias de objetos sem especificar suas classes concretas.

Implementamos uma interface(CustomerVehicleFactory) e **Delegamos** os detalhes da criação para as subsclasses

<img src="./Images/factoryClass.png" />

Agora nas SubClasses:

<img src="./Images/factories.png" />

e agora a implementação:

<img src="./Images/implementacao.png" />

O resto do código agora somente está acoplado as **Factories**, se fizermos novas implementações/mudanças nas classes originais, basta mudar as suas respectivas **Factories** e assim não quebramos o código.
