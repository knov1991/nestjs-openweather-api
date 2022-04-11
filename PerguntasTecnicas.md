**Endpoint:  http://localhost:3000/tempo/nomeDaCidade**

`api.http` - na posta do projeto, pode ser usado para testar o endpoint.

**1. Quanto tempo você usou para completar a solução apresentada? O que você faria se tivesse mais tempo?**

R1> Cerca de 1h solução + 1h documentação. `Sou detalhista, gosto do código bem Clean e a documentação bem feita.`
- Criar a conta no site openWeather, ativar o service `Current Weather Data` e pegar a API-Key.
- Iniciar projeto Nest.js, instalar dependencia(s), remover alguns arquivos iniciais que não serão usados.
- Desenvolver a solução para consumo da API openWeather, e disponibilizar endpoint para o usuário.
- Realizar testes/correções de código.
- Adicionar Exception.
- Repetir alguns passos anteriores.
- Documentar => **PerguntasTecnicas.md** e **README.md**

R1.2> O projeto atende bem o objetivo, mas com mais tempo.
- Testar algum modulo ou funcionalidade que melhore desempenho e/ou retorno ao usuário.
- Melhorar documentação.

**2. Se usou algum framework, qual foi o motivo de ter usado este? Caso contrário, por que não utilizou nenhum?**

R2> Nenhum framework. Mas utilizei o modulo `@nestjs/axios` para interagir com a API openWeather. Utilizei o `Postman` e criei um arquivo `.http` nesse caso o `api.http`. Ambos para testar o endpoint.