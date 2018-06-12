Feature:
  As a trader
  I want to be able to choose representatives to organize meetings
  So that I have a say in how meetings are best organized

  Scenario: Voting for a representative
    Given I am at the "Representative Election" page
    And I see user "Pedro" has voted for user "Nara" for representative in the votes list
    And I see user "Nara" has voted for user "Pedro" for representative in the votes list
    And I see user "Pedro" in the eligible list
    And I see user "Nara" in the eligible list
    And I see user "Gabriel" in the eligible list
    And my username is "Gabriel"
    When I choose "Nara" as my representative of choice
    Then I see user "Pedro" has voted for user "Nara" for representative in the votes list
    And I see user "Nara" has voted for user "Pedro" for representative in the votes list
    And I see user "Gabriel" has voted for user "Nara" for representative in the votes list

  Scenario: Voting for another representative in a same election
    Given I am at the "Representative Election" page
    And I see user "Pedro" has voted for user "Nara" for representative in the votes list
    And I see user "Nara" has voted for user "Pedro" for representative in the votes list
    And I see user "Gabriel" has voted for user "Nara" for representative in the votes list
    And I see user "Pedro" in the eligible list
    And I see user "Nara" in the eligible list
    And I see user "Gabriel" in the eligible list
    And my username is "Gabriel"
    When I choose "Pedro" as my representative of choice
    Then I see user "Pedro" has voted for user "Nara" for representative in the votes list
    And I see user "Nara" has voted for user "Pedro" for representative in the votes list
    And I see user "Gabriel" has voted for user "Pedro" for representative in the votes list

  Scenario: Making decisions
    Given I am at the "Representative's Decisions" page
    And I see "Work hours will be discussed in the next reunion" in the decisions list
    And I see "Pedro will be responsible for the opening" in the decisions list
    And I am the current representative
    When I make decision "The next reunion is canceled"
    Then I see "Work hours will be discussed in the next reunion" in the decisions list
    And I see "Pedro will be responsible for the opening" in the decisions list
    And I See "The next reunion is canceled" in the decisions list

  Scenario: End of election period
    Given I am at the "Eligible Candidates" page
    And I see user "Pedro" in the eligible list
    And I see user "Nara" in the eligible list
    And I see user "Gabriel" in the eligible list
    And I see user "Pedro" has voted for user "Nara" for representative in the votes list
    And I see user "Nara" has voted for user "Pedro" for representative in the votes list
    And I see user "Gabriel" has voted for user "Nara" for representative in the votes list
    And the time and date limit for the voting period is "2018, July 12th, 8:00 PM"
    And the current time and date are "2018, July 12th, 8:10 PM"
    When I go to the "Representatives History" page
    Then I see user "Pedro" in the representatives history
    And I see user "Nara" in the representatives history
    And I see user "Nara" in the representatives history
