Feature: Chat
    As a usuário
    I want to poder falar com meus contatos pelo ambiente
    So that nosso trabalho seja mais produtivo

Scenario: mandar mensagem
    Given o usuário "João" está online
    And "João" possui uma conversa com "José"
    When "João" tenta enviar a mensagem "Olá José" para "José"
    Then a mensagem é enviada ao servidor para o buffer de "José"

Scenario: criar conversa em grupo
    Given eu estou na "janela principal"
    When eu vou para a "janela de criação de conversa em grupo"
    And eu seleciono os usuários "André", "Bruna", "Carlos" e "Daniela"
    And eu preencho "nome" com "Projeto"
    And eu submeto a criação do grupo
    Then eu vejo na "janela principal" a conversa em grupo "Projeto" com os usuários 
    "André", "Bruna", "Carlos" e "Daniela"

Scenario: receber mensagem
    Given o usuário "João" está online
    When é verificado se há novas mensagens para o usuário "João"
    And existem mensagens novas mensagens para "João"
    Then a "lista de conversas" é atualizada

Scenario: adicionar pessoas a grupo
    Given eu estou logado como "João"
    And eu estou na janela do grupo "Projeto"
    And eu sou o criador do grupo "Projeto"
    When eu vou para a "tela de edição"
    And eu vejo que o usuário "José" não está selecionado
    And eu seleciono o usuário "José"
    And eu submeto a alteração
    Then eu vejo que "José" está no grupo "Projeto"
