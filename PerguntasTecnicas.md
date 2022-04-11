**Endpoint:  http://localhost:3000/tempo/nomeDaCidade**

`api.http` - na pasta do projeto, pode ser usado para testar o endpoint.

**1. Quanto tempo você usou para completar a solução apresentada? O que você faria se tivesse mais tempo?**

R1> Cerca de 1h30m.
`Sou detalhista, gosto do código bem Clean e a documentação bem feita.`
- Criar a conta no site openWeather, ativar o service `Current Weather Data` e pegar a API-Key.
- Iniciar projeto Nest.js, instalar modulo(s), remover alguns arquivos iniciais que não serão usados.
- Desenvolver a solução para o projeto e criar o endpoint da API.
- Realizar testes e correções de código.
- Adicionar Exception.
- Repetir alguns passos anteriores.
- Documentar => **PerguntasTecnicas.md** e **README.md**

R1.2> A solução desenvolvida atende bem o objetivo do projeto, mas com mais tempo...
- Testar algum modulo ou funcionalidade que melhore desempenho e/ou retorno ao usuário.
- Melhorar documentação.

**2. Se usou algum framework, qual foi o motivo de ter usado este? Caso contrário, por que não utilizou nenhum?**

R2> Nenhum framework, mas...
- Foi utilizado o modulo `@nestjs/axios` para interagir com a API openWeather póis o Client Http do `@nestjs/common` está depreciado.
- Utilizado software `Postman` e criado um arquivo do tipo `.http` nesse caso o `api.http`. Ambos para testar o endpoint.