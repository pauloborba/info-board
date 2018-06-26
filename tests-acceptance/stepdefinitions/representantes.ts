import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

var currentUsername;

defineSupportCode(({ Given, When, Then }) => {
  Given(/^I am at the "Representative Election" page$/, async () => {
    await browser.get('http://localhost:4200/representantes/eleicao');
  });

  Given(/^I see user "(.*)" has voted for user "(.*)" for representative in the votes list$/, async (voterName, votedName) => {
    let allVotes: ElementArrayFinder = element.all(by.name('vote'));
    await allVotes;

    
    let vote = allVotes.filter(elem => {
      let firstText: String, lastText: String;
      let isEqual: boolean;
      return elem.all(by.tagName('tr')).then(tags =>
        tags[0].getText()
          .then(trFirstText => firstText = trFirstText)
          .then(() => {
            tags[2].getText()
            .then(trLastText => lastText = trLastText);
          })
          .then(() => isEqual = (voterName === firstText && votedName === lastText))
      )
        .then(() => isEqual);
    });

    await expect(vote.count()).to.eventually.equal(1);
  });

  Given(/^I see user "(.*)" in the eligible list$/, async (eligibleName) => {
    let eligiblesList: ElementArrayFinder = element.all(by.name('eligible'));
    await eligiblesList;

    let eligible = eligiblesList.filter(
      elem => elem.getText().then(
        name => name === eligibleName
      )
    );

    await expect(eligible.count()).to.eventually.equal(1);
  });

  Given(/^my username is "(.*)"$/, async (username) => {
    currentUsername = username;
  });

  When(/^I choose "(.*)" as my representative of choice$/, async (votedName) => {
    let inputBox = element(by.name('votebox'));
    let confirmationButton = element(by.name('votebutton'));
    await inputBox;
    await confirmationButton;
    
    inputBox.sendKeys(<string> votedName);
  });

  Then(/^I see user "(.*)" has voted for user "(.*)" for representantive in the votes list$/, async(voterName, votedName) => {
    let allVotes: ElementArrayFinder = element.all(by.name('vote'));
    await allVotes;

    
    let vote = allVotes.filter(elem => {
      let firstText: String, lastText: String;
      let isEqual: boolean;
      return elem.all(by.tagName('tr')).then(tags =>
        tags[0].getText()
          .then(trFirstText => firstText = trFirstText)
          .then(() => {
            tags[2].getText()
            .then(trLastText => lastText = trLastText);
          })
          .then(() => isEqual = (voterName === firstText && votedName === lastText))
      )
        .then(() => isEqual);
    });

    await expect(vote.count()).to.eventually.equal(1);
  });

});
