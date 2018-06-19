import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Eu sou um usuário "João" logado no sistema$/, async () => {
        //TODO await verificar que há um usuário logado no sistema
    })
    
    Given(/^eu estou na página inicial "Mural de Informações"$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('Mural de Informações');
    })

    Given(/^eu vejo uma publicação "([^\"]*)" cuja data foi marcada para "([^\"]*)"$/, async () => {
        //TODO await verificar post na lista de publicações do mural que seja do "tipo" reunião e verificar sua data
    })

    When(/^eu seleciono a opção "Agenda"$/, async () => {
        await $("a[name='Agenda']").click();
    });

    Then(/^eu visualizo um calendário em que a data "([^\"]*)" está marcada com o evento "([^\"]*)"$/, async () => {
        //TODO await verificar evento da data no calendário
    });
})