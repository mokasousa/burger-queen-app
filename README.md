# Burger Queen

## 1. Resumo do projeto

Um pequeno restaurante de hambúrgueres, que está crescendo, necessita uma
interface em que se possa realizar pedidos utilizando um _tablet_, e enviá-los
para a cozinha para que sejam preparados de forma ordenada e eficiente.

O cliente ofereceu as seguintes informações:

> Somos **Burger Queen**, um fast food 24hrs.
>
>A nossa proposta de serviço 24 horas foi muito bem recebida e, para continuar a
>crescer, precisamos de um sistema que nos ajude a receber pedidos de nossos
>clientes.
>
>Nós temos 2 menus. Um muito simples para o café da manhã:
>
>| Ítem                      |Preço R$|
>|---------------------------|------|
>| Café americano            |    5 |
>| Café com leite            |    7 |
>| Misto Quente              |   10 |
>| Suco de fruta natural     |    7 |
>
>E outro menu para o resto do dia:
>
>| Ítem                      |Preço |
>|---------------------------|------|
>|**Hambúrgueres**           |   **R$**   |
>|(carne bovina, frango ou vegetariano)|
>|Hambúrguer simples         |    10|
>|Hambúrguer duplo           |    15|
>|**Adicinais**              |   **R$**   |
>|Queijo                     |     1|
>|Ovo                        |     1|
>|**Acompanhamentos**        |   **R$**   |
>|Batata frita               |     5|
>|Anéis de cebola            |     5|
>|**Bebidas**                |   **R$**   |
>|Água 500ml                 |     5|
>|Água 750ml                 |     7|
>|Refrigerante 500ml         |     7|
>|Refrigerante 750ml         |    10|
>
>Nossos clientes são bastante indecisos, por isso é muito comum que eles mudem o
>seu pedido várias vezes antes de finalizar.

A interface deve mostrar os dois menus (café da manhã e restante do dia), cada
um com todos os seus _produtos_. O usuário deve poder escolher que _produtos_
adicionar e a interface deve mostrar o _resumo do pedido_ com o custo total.


## 2. Histórias de Usuário

### Definição do produto

Um aplicativo (_Single Page App_) responsivo para ser utilizado em _tablets_,
onde o garçom/garçonete possam registrar os pedidos dos clientes, enviá-los à cozinha 
e ver o status dos pedidos    


#### [História de usuário 1] Garçom/Garçonete deve poder anotar o pedido do cliente

Eu como garçom quero poder anotar o pedido do meu cliente saber o valor de cada 
produto e poder enviar o pedido para a cozinha para ser preparado.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Anotar o nome e mesa.
* Adicionar produtos aos pedidos.
* Excluir produtos.
* Ver resumo e o total da compra.
* Enviar o pedido para a cozinha (guardar em algum banco de dados).
* Funcionar bem e se adequar a um _tablet_.

#### [História de usuário 2] O chefe de cozinha deve ver os pedidos

Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que 
estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser 
entregue ao cliente.

##### Critérios de aceitação

* Ver os pedidos à medida em que são feitos.
* Marcar os pedidos que foram preparados e estão prontos para serem servidos.
* Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.

#### [História de usuário 3] Garçom/Garçonete deve ver os pedidos prontos para servir

Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente 
aos clientes.

##### Critérios de aceitação

* Ver a lista de pedidos prontos para servir.
* Marque os pedidos que foram entregues.

#### [História de usuário 4] Garçom/Garçonete  e Chefe de cozinha devem poder fazer o login

##### Critérios de aceitação

* Criar login e senha.
* Criar tipo de usuário (cozinha / salão).
* Entrar na tela correta para cada usuário.

#### Definição de pronto para cada História de usuário

* _Testes_ de usabilidade e _feedback_ do usuário.
* Deploy do aplicativo.


### Recursos

Framework / biblioteca:
* [React Hooks](https://reactjs.org/docs/hooks-intro.html)
* [Entendendo React Hooks](https://medium.com/@higornevesmarques/entendendo-react-hooks-2c0efae276a3)
* [React Hooks - Rocketseat](https://blog.rocketseat.com.br/react-hooks/)
* [Habemus React Hooks](https://willianjusten.com.br/habemus-react-hooks/)

Ferramentas:
* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)
* [Aphrodite](https://github.com/Khan/aphrodite)

PWA:
* [Seu primeiro Progressive Web App - Google  developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps -  codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
* [offlinefirst.org](http://offlinefirst.org/)
* [Usando Service Workers -  MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [Como habilitar dados sem conexão - Firebase  Docs](https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419) 

Serverless:
* [Serverless Framework 1.0 - Pagar.me Talks](https://www.youtube.com/watch?v=2oNovfw3V08)
* [Firebase](https://firebase.google.com/)
* [Serverless Architectures - Martin  Fowler](https://www.martinfowler.com/articles/serverless.html)

Creat-react-app:
* [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
* [deployment](https://facebook.github.io/create-react-app/docs/deployment)
* [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
