Feature: Mural de informações
As um usuário
I quero ter acesso ao mural de notícias
So that eu posso visualizar informações sobre o ambiente de empresa

Scenario: Agenda
Given eu sou um usuário "João" logado no sistema
And eu estou na página inicial "InfoBoard"
And eu vejo uma publicação "Reunião X" cuja data foi marcada para "05/06/2018"
When eu seleciono a opção "Agenda"
Then eu visualizo um calendário em que a data "05/06/2018" está marcada com o evento "Reunião X"
