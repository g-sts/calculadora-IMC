# Calculadora de IMC

Aplicação front-end simples desenvolvida com HTML, CSS e JavaScript puro que permite ao usuário calcular o Índice de Massa Corporal (IMC) e receber uma avaliação básica sobre seu peso.

## Funcionalidades
 
- Cálculo automático do Índice de Massa Corporal (IMC) ao clicar no botão **Calcular**  

## Tecnologias Utilizadas

- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) — estrutura da página  
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) — estilização da interface com Flexbox e design responsivo  
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) — manipulação do DOM, eventos e lógica de cálculo do IMC

## Como Funciona

1. O usuário preenche os campos: **Nome**, **Altura (cm)** e **Peso (kg)**.  
2. Ao clicar no botão **Calcular**, o sistema verifica se todos os campos foram preenchidos.  
3. O IMC é calculado pela fórmula:

   \[
   IMC = \frac{peso}{(altura / 100)^2}
   \]

4. De acordo com o valor do IMC, é exibida uma mensagem indicando a faixa de peso:
   - IMC < 18,5: abaixo do peso  
   - 18,5 ≤ IMC ≤ 24,9: peso ideal  
   - 25 ≤ IMC ≤ 29,9: um pouco acima do peso ideal  
   - IMC ≥ 30: faixa de obesidade
5. O resultado é exibido na tela com uma mensagem personalizada.  
