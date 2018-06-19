import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Eu sou um usuário "João" logado no sistema$/, async () => {
        //TODO await verificar que há um usuário logado no sistema
    })
    
    Given(/^eu estou na página "Votações"$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('Mural de Informações');
        await $("a[name='votacoes']").click();
    })

    Given(/^eu vejo uma votação "Votação para pauta da Reunião X"$/, async () => {
        //TODO await verificar votação do tipo "pauta" na lista de votações que tenha evento "Reunião X"
        var listaVotacoes : ElementArrayFinder = element.all(by.name('votacaolist'));
    })

    Given(/^eu vejo que o tempo de votação para a "Votação para pauta da Reunião X" foi encerrado$/, async () => {
        //TODO await verificar tempo de votação da votação selecionada acima
    })

    When(/^eu vou para a página "Mural de Informações"$/, async () => {
        await $("a[name='publicacoes']").click();
    });

    Then(/^eu vejo uma publicação "Post Pauta Reunião X" informando o tema escolhido para a pauta da "Reunião X"$/, async () => {
        //TODO await verificar publicação na lista de publicações do mural que seja do tipo pauta_reuniao
        // e que o evento seja a "reunião x" (o id)
        var listaPublicacoes : ElementArrayFinder = element.all(by.name('publicacaolist'));
    });
})