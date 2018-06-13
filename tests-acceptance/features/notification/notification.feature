Feature: Notificação
  As a usuário
  I devo ser capaz de receber notificações das votações, postagens e chat
  So that eu possa votar, verificar as postagens e mensagens recebidas no chat


Scenario: Notificação de Abertura de votação
Given Uma Votação com o título "Votação de pauta" foi aberta no sistema
And Uma lista com usuários "João" e "José" associados a votação
When  O sistema salva a votação de título "Votação de pauta"
Then Uma notificação será enviada para "João" e para "José"


Scenario: Notificação de tempo restante para votar
Given Existe uma votação "Votação de Pauta"
And Restam  menos de “12  horas” para o fim da votação “ Votação de Pauta”
And O usuário “João” ainda não votou na votação “Votação de Pauta”
When O usuário “João” entra na página “principal”
Then “João” pode ver um alerta de notificação na parte superior da tela

Scenario: Notificação de postagem
Given Uma postagem existe no sistema
And Uma lista com usuário “João” existe
And O usuário “João” não viu a postagem
When O usuário “João” entra na página “principal”
Then O usuário “ João” pode ver um alerta na parte superior direita do sistema

Scenario: Notificação de mensagem de chat
Given Uma mensagem é enviada para o usuário "João" pelo chat
And "João" está online do sistema
Then Uma notificação de mensagem aparece no canto superior direito da GUI do sistema.
