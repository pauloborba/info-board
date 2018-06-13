Feature: Mural de informações
As um usuário
I quero ter acesso ao mural de notícias
So that eu posso visualizar informações sobre o ambiente de empresa

Scenario: Postagem automática
Given eu sou um usuário “João” logado no sistema
And eu estou na página “Votações”
And eu vejo uma votação “Votação para pauta da Reunião X”
And eu vejo que o tempo de votação para a “Votação para pauta da Reunião X” foi encerrado
When eu vou para a página “Mural de Informações”
Then eu vejo uma publicação “Post Pauta Reunião X” informando o tema escolhido para a pauta da “Reunião X”.

Scenario: Agenda
Given eu sou um usuário “João” logado no sistema
And eu estou na página inicial “Mural de Informações”
And eu vejo uma publicação sobre a “Reunião X” cuja data foi marcada para o dia “05/06/2018” 
When eu seleciono a opção “Agenda”
Then eu visualizo um calendário em que a data “05/06/2018” está marcada com o evento “Reunião X”.

Scenario: Favoritos
Given eu sou um usuário “João” logado no sistema
And eu estou na página inicial “Mural de Informações”
And eu vejo uma publicação “Post 1” exibida no mural
And eu vejo que a publicação “Post 1” não está sinalizada como favorita
When eu seleciono a opção de favoritar a publicação “Post 1”
Then eu vejo uma mensagem informando que a publicação “Post 1” foi adicionada à minha lista de favoritos.
    
Scenario: Publicação fixada
Given eu sou um usuário “João” logado no sistema
And eu estou na página inicial “Mural de Informações”
And eu vejo uma publicação “Post 2” exibida no mural
When eu seleciono a opção de fixar a publicação “Post 2”
Then eu vejo a publicação “Post 2” fixada no topo da página “Mural de Informações”.
