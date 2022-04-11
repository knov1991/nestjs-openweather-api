<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="150" alt="Nest Logo" /></a>
</p>

## Descrição
Projeto utilizando o framework Nest.js para criar uma API REST.
Com o objetivo de consumir a API externa openWeather para obter informações climáticas de uma cidade específica, informada pelo usuário através do endpoint:
`http://localhost:3000/tempo/nomeDaCidade`

Pode ser utilizado o arquivo `api.http` para testar o endpoint
## Instalar dependencias

```bash
$ yarn install
```
## Iniciar projeto

```bash
# desenvolvimento
$ yarn run start

# modo assistido
$ yarn run start:dev

# produção
$ yarn run start:prod
```

## Modulos utilizadas
`@nestjs/axios`