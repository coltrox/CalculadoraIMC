# Calculadora de IMC (Índice de Massa Corporal)

Este projeto é uma aplicação mobile desenvolvida com React Native para calcular o IMC de uma pessoa com base no peso e altura informados.

---

📱 Funcionalidades
- Inserção de peso (em kg) e altura (em cm)
- Cálculo automático do IMC
- Exibição do valor do IMC calculado
- Classificação de acordo com a tabela de IMC
- Faixa de peso ideal para a altura informada

---

 #🧩 Componentes

`App.js`
Responsável por renderizar os principais componentes da aplicação:
- `Title` → título da aplicação
- `FormIMC` → formulário para entrada de dados e exibição dos resultados

###  `Title.js`
Componente que exibe o título "Calculadora de IMC" no topo da aplicação.

### `FormIMC.js`
Componente principal de interação com o usuário:
- Recebe os dados de entrada (peso e altura)
- Calcula o IMC
- Renderiza os componentes:
  - `Result` (valor do IMC)
  - `Class` (classificação do IMC)
  - `PesoIdeal` (faixa de peso ideal para a altura)

### `Result.js`
Recebe o valor do IMC como prop e o exibe de forma destacada na tela.

### `ClassIMC.js`
Classifica o IMC de acordo com os parâmetros da OMS:
- Abaixo de 18.5 → Abaixo do peso
- Entre 18.5 e 24.9 → Peso normal
- Entre 25.0 e 29.9 → Sobrepeso
- Entre 30.0 e 34.9 → Obesidade grau 1
- Entre 35.0 e 39.9 → Obesidade grau 2
- 40 ou mais → Obesidade grau 3

### `PesoIdealIMC.js`
Calcula e exibe o intervalo de peso considerado ideal com base na altura informada:
- Fórmula: `IMC ideal entre 18.5 e 24.9`

---

## 🛠️ Tecnologias utilizadas
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)

---

## 🚀 Como executar
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/CalculadoraIMC.git
```

2. Acesse o diretório do projeto:
```bash
cd CalculadoraIMC
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o projeto:
```bash
npx expo start --tunnel
```


#  Autor
Projeto desenvolvido por [Pedro Coltro].

