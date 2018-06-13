Feature:
  As an employee,
  I want to vote for the topic I think is the most urgent to discuss with the team,
  So that we can solve it faster

  Cenário 1: Pauta idêntica
    Given I’m at the “Votação de Pauta” page
    Given I see a topic with the title “Treinamento de Excel”
    When I try to register a topic with the title “Treinamento de Excel”
    Then I see a message indicating that the topic was already registered

  Cenário 2: Alterar o voto
    Given I’m at the “Votação de Pauta” page
    Given I see an “x” in the box corresponding to the topic “Treinamento de Excel”
    When I select the “Alterar Voto” option
    And I select the topic with title “Compra de Computadores”
    And I select the option “Votar”
    Then I can see an “x” in the box corresponding to the topic “Compra de Computadores”

  Cenário 3: Visualização de pautas anteriores
    Given I’m at the “Votação de Pauta” page
    When I select the “Ver pautas anteriores” option
    Then I can see a list of the last ten most voted topics

  Cenário 4: Copiar pauta anterior
    Given I’m at the “Votação de Pauta” page
    Given I have selected the “Ver pautas anteriores” option
    And I see a list of the last ten most voted topics
    When I select the topic with title “Retificação de Salário”
    And I select the “Adicionar à votação” option
    Then I see the topic with title “Retificação de Salário” in the polling
