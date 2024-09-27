# Projeto Slideworks - Matheus Airon

## Construído com React + TypeScript + Vite

#### Run

`npm run dev`

#### Desenvolvimento

Utilizei algumas ferramentas para otimizar o tempo,
uma delas foi o Swiper (npm install swiper) para construção do carrossel na seção hero,
outra ferramenta foi o axios (npm install axios) para fazer as requisições HTTP.

O uso do Swiper agilizou o desenvolvimento após o entendimento da ferramenta,
foi necessário utilizar a documentação deles para encontrar o que eu realmente precisava
e queria.

A paginação foi o momento mais complexo do desenvolvimento, utilizando o axios, useState e useEffect
para atualização do mosaíco de filmes.

O design mobile foi construído durante o processo para que não houvesse retrabalho, tentei manter o fluxo,
um ideia seria diminuir alguns tamanhos e distanciamentos para que mais conteúdo coubesse na tela.

Como adicional, criei um filtro porém devido ao curto prazo ele filtra somente os dados já listados,
caso haja alguma requisição novamente, como passar de página, o filtro se perde e é necessário aplica-lo novamente.
O próximo passo do filtro seria filtrar e construir o mosaíco com todos os filmes já filtrados, sem necessidade
de refiltrar.
