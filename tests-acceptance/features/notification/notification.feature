Feature: Notificação
  As a usuário
  I devo ser capaz de receber notificações das votações, postagens e chat
  So that eu possa votar, verificar as postagens e mensagens recebidas no chat

Scenario: Redirecionar atraves de notificação
Given Estou logado com o usuário "João"
And Recebo uma notificação de nova postagem
When Eu clico na notificação com o título "Ata de reunião"
Then Sou redirecionado para a página de postagem com o título "Ata de reunião"

Scenario: Notificação de chat
Given "João" tem "0" no contador de notificação
And O usuário "José" mandou a mensagem "Olá joão" para o usuário "João"
When O usuário "João" entrar no sistema
Then O usuário "João" pode ver no ícone "home" o indicador de mensagem com contador "1"

Scenario: Notificação recebida
Given Tem uma nova postagem com título "Ata de reunião" cadastrada no sistema
And O usuário "João" ainda não visualizou a notificação de "Ata de reunião"
When Eu logo com o usuário "João"
And Clico no ícone "home"
Then Eu posso ver a notificação "Ata de reunião" na lista de notificações

Scenario: Contador de notificações zero
Given Estou logado com o usuário "João"
And Vejo o indicador notificação de postagem tem "1"
When Eu clico na postagem
Then O ícone "postNotification" não contém indicador de postagem