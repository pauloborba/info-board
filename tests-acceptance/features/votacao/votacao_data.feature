Feature: Votação de data para reunião
As a Administrado 
I devo ser capaz de votar e opininar com relação as datas de realização das reuniões
So that as reuniões serão realizadas no horário mais oportuno para todos

Scenario: Votação de data com usuário não permitido
Given Eu estou logado com um usuário do perfil “administracao”
And a reunião de número “1” está “pendente de definição de data”
And estou na página “realizar votação” da reunião “1”
When Eu escolho a data “25/04/2018” e tento salvar
Then Eu vejo uma mensagem “Usuário não permitido”

Scenario: Sugerir nova data de reunião para reunião já realizada
Given Eu estou logado com um usuário do perfil “administrado”
And estou na página “realizar votação” da reunião “1”
And a reunião “1” está “realizada”
When Eu altero minha escolha de data para amanhã
Then Eu vejo a mensagem “A reunião já ocorreu, não é possível alterar a data”

Scenario: Adicionar data ainda não sugerida
Given Eu estou logado com um usuário do perfil “administrado”
And a reunião de número “1” não possui nenhuma data indicada
And a reunião de número “1” está “pendente de definição de data”
When Eu tento adicionar a data atual 
Then Eu vejo a data atual como opção de voto.

Scenario: Cadastrar data que exceda duas semanas do limite max. e min.
Given Eu estou logado com um usuário do perfil “administrado” 
And a reunião de número “1” possui as datas “18/06/2018” e “30/06/2018” cadastradas
And a reunião de número “1” está “pendente de definição de data” 
When Eu cadastro a data “15/06/2018”
Then Eu vejo a mensagem “Data não permitida, data mínima: 18/06/2018, data máxima: 30/06/2018”
