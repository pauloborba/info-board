import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementFinder, ElementArrayFinder, by } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(({Given, When, Then}) => {

    Given(/^Eu estou logado com usuário ([^\"]*) $/, async (nome) => {
        //TODO: Implementar usuário
    });

    Given(/^Vejo o indicador tem (\d*)$/, async (indicador) => {
        const badge = await element(by.name("postNotification"));
        await  expect(badge.getText()).to.eventually.equal(indicador);

    });

    When(/^Eu clico na postagem $/, async () => {
        await $("button[name='button-chat]").click();

    });

    Then(/^O ícone ([^\"]*) não contém indicador de postagem $/, async () => {

    });

});