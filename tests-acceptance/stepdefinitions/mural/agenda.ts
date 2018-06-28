import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by, ElementFinder } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^eu sou um usuário "([^\"]*)" logado no sistema$/, async (nome) => {
        //TODO verificar que há um usuário logado no sistema
    })
    
    Given(/^eu estou na página inicial "([^\"]*)"$/, async (pagina_inicial) => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal(pagina_inicial);
        await $("a[name='publicacoes']").click();
    })

    Given(/^eu vejo uma publicação "([^\"]*)" cuja data foi marcada para "([^\"]*)"$/, async (nome, data) => {
        //verificar post na lista de publicações do mural que seja tenha um evento com uma determinada data
        var nomePublicacao = element.all(by.name('titlebox'));
        await expect(nomePublicacao.get(0).getText()).to.eventually.equal(nome);
        var dataEvento = element.all(by.name('eventdatebox'));
        await expect(dataEvento.get(0).getText()).to.eventually.equal(data);
    })

    When(/^eu seleciono a opção "([^\"]*)"$/, async (agenda) => {
        await $("a[name='agenda']").click();
    });

    Then(/^eu visualizo um calendário em que a data "([^\"]*)" está marcada com o evento "([^\"]*)"$/, async (data, evento) => {
        //verificar evento da data no calendário
        var dataCalendario = element.all(by.name('datebox'));
        await expect(dataCalendario.get(0).getText()).to.eventually.equal(data);
        var eventoData = element.all(by.name('dateeventbox'));
        await expect(eventoData.get(0).getText()).to.eventually.equal(evento);
    });
})