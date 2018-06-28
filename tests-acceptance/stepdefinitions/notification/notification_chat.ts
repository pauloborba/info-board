import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementFinder, ElementArrayFinder, by } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

function setHTMLValue(element: ElementFinder, value: string) {
    function setInnerHTML (div, content) {
        div.innerHTML = content;
    }
    browser.executeScript(setInnerHTML, element, value);
}

defineSupportCode( ({ Given, When, Then }) => {

    Given(/^"([^\"]*)" tem "(\d*)" no contador de notificação$/, async (nome, badge) => {
        var chatNotification = await element(by.name("chatNotification"));
        setHTMLValue(chatNotification, "0");
    })

    Given(/^O usuário "([^\"]*)" mandou a mensagem "([^\"]*)" para o usuário "João"$/, async (nome, mensagem) => {
        
    })

    When(/^O usuário "([^\"]*)" entrar no sistema$/, async (nome) => {

    })

    Then(/^O usuário "([^\"]*)" pode ver no ícone "([^\"]*)" o indicador de mensagem com contador "1"$/, async (nome, icone) => {

    })
})