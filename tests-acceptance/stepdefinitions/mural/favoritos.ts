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

    Given(/eu vejo que a publicação "([^\"]*)" não está sinalizada como favorita$/, async() => {
        //TODO await verificar que o post selecionado acima não está na lista de favoritos
        var listaFavoritos : ElementArrayFinder = element.all(by.name('favoritoslist'));
    })

    When(/^eu seleciono a opção de favoritar a publicação "([^\"]*)"$/, async () => {
        await $("a[name='favoritar']").click();
    });

    Then(/^eu vejo uma mensagem informando que a publicação "([^\"]*)" foi adicionada à minha lista de favoritos$/, async () => {
        //TODO await verificar que o post selecionado acima está na lista de favoritos
        var listaFavoritos : ElementArrayFinder = element.all(by.name('favoritoslist'));
    });
})