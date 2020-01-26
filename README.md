# Burger Queen App



## 1. Resumo do projeto

O objetivo desse projeto era criar aplicação web para ser utilizada em restaurantes e ser uma interface onde os funcionários possam registrar os pedidos do restaurante e enviá-los à cozinha para que possam ser preparados de forma ordenada e eficiente. A aplicação foi criada baseada nos requisitos de um cliente fictício, a hamburgueria Burger Queen, e foi construída para ser utilizada em um _tablet_ mantendo a responsividade para outras
interfaces. A aplicação pode ser acessada através do link [Burger Queen App](https://burger-queen-1253c.firebaseapp.com).

## 2. Definição de produto

Os requisitos do cliente foram baseados nas seguintes informações:

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
>| Café Americano            |    5 |
>| Café com Leite Vegetal    |    7 |
>| Misto Quente vegano       |   10 |
>| Suco Natural              |    7 |
>
>E outro menu para o resto do dia:
>
>| Ítem                      |Preço R$|
>|---------------------------|------|
>|**Hambúrgueres**           |      |
>|(grão-de-bico, feijão preto, lentilha)|
>|Hambúrguer simples         |    15|
>|Hambúrguer duplo           |    20|
>|**Adicinais**              |      |
>|Queijo Vegano              |     1|
>|Shitake                    |     1|
>|**Acompanhamentos**        |      |
>|Batata frita               |     5|
>|Anéis de cebola            |     5|
>|**Bebidas**                |      |
>|Água 500ml                 |     5|
>|Água 750ml                 |     7|
>|Refrigerante 500ml         |     7|
>|Refrigerante 750ml         |    10|
>
>Importante: Os clientes podem escolher entre hambúrgueres de grão-de-bico, feijão preto, lentilha. 
>Além disso, por um adicional de R$ 1,00 , eles podem adicionar queijo vegano e shitake.
>Nossos clientes são bastante indecisos, por isso é muito comum que eles mudem o
>seu pedido várias vezes antes de finalizar.

A partir dessas informações foram estipuladas as seguintes histórias de usuário:

### Histórias de Usuário

1. Garçons devem poder registrar o pedido do cliente

    * Anotar o nome e a mesa do cliente.
    * Adicionar os itens do menu aos pedidos.
    * Excluir e alterar itens dos pedidos
    * Ver resumo e o total da compra.
    * Enviar o pedido para a cozinha.

2. Os cozinheiros devem poder ver os pedidos

    * Ver os pedidos à medida em que são feitos em ordem.
    * Marcar os pedidos que foram preparados e estão prontos para serem servidos.
    * Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.

3. Garçons devem poder ver os pedidos prontos para servir

    * Ver a lista de pedidos prontos para servir.
    * Marcar os pedidos que foram entregues.

4. Garçons e cozinheiros devem poder fazer o login

    * Criar login e senha.
    * Criar tipo de usuário (cozinha / salão).
    * Entrar na tela correta para cada usuário.

## 3. O produto

![Burger Queen Telas](https://github.com/mokasousa/RestaurantApp-Burger-Queen/blob/master/src/Images/Burguer%20Queen%20App.png)

## 7. Tecnologias utilizadas

* [React Hooks](https://reactjs.org/docs/hooks-intro.html)
* [Semantic UI React](https://react.semantic-ui.com/)
* [Firebase Realtime Database](https://firebase.google.com)

## 6. Considerações finais

Esse projeto foi desenvolvido como parte do currículo do [Bootcamp da Laboratória Brasil](https://www.laboratoria.la/br) e todos os requisitos para o projeto podem ser verificados [aqui](https://github.com/Laboratoria/SAP003-burger-queen).

O projeto foi criado e desenvolvido por Mônica Sousa.
