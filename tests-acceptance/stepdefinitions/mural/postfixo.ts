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

    Given(/^eu vejo uma publicação "([^\"]*)" exibida no mural$/, async () => {
        //TODO await verificar post na lista de publicações do mural
        var listaPublicacoes : ElementArrayFinder = element.all(by.name('publicacaolist'));
    })

    When(/^eu seleciono a opção de fixar a publicação "([^\"]*)"$/, async () => {
        await $("a[name='fixar']").click();
    });

    Then(/^eu vejo a publicação "([^\"]*)" fixada no topo da página "Mural de Informações"$/, async () => {
        //TODO await verificar que o post está na lista de publicações fixadas
        var listaPostsFixos : ElementArrayFinder = element.all(by.name('postfixolist'));
    });
})