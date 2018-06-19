import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Eu sou um usuário "João" logado no sistema$/, async () => {
        //TODO await verificar que há um usuário logado no sistema
    })
    
    Given(/^eu estou na página inicial "Mural de Informações"$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('Mural de Informações');
        await $("a[name='publicacoes']").click();
    })

    Given(/^eu vejo uma publicação "([^\"]*)" cuja data foi marcada para "([^\"]*)"$/, async (nome_publicacao, data_publicacao) => {
        //verificar post na lista de publicações do mural que seja do tipo data_reuniao e verificar sua data
        var listaPublicacoes : ElementArrayFinder = element.all(by.name('publicacaolist'));
        await listaPublicacoes;
        await expect(Promise.resolve(listaPublicacoes.findElement(nome_publicacao)).getType()).to.eventually.equal("data_reuniao");
        await expect(Promise.resolve(listaPublicacoes.findElement(nome_publicacao)).getEventDate()).to.eventually.equal(data_publicacao);
    })

    When(/^eu seleciono a opção "Agenda"$/, async () => {
        await $("a[name='agenda']").click();
    });

    Then(/^eu visualizo um calendário em que a data "([^\"]*)" está marcada com o evento "([^\"]*)"$/, async (data, evento) => {
        //verificar evento da data no calendário
        var datasCalendario : ElementArrayFinder = element.all(by.name('dataslist'));
        await datasCalendario;
        await expect(Promise.resolve(datasCalendario.findElement(data)).getEvent()).to.eventually.equal(evento);
    });
})