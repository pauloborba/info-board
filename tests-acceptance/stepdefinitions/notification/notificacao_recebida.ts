import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementFinder, ElementArrayFinder, by } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(({Given, When, Then}) => {

    Given(/^Tem uma nova postagem com títuolo ([^\"]*) $/, async () => {

    });

    Given(/^O usuario ([^\"]*) ainda não visualizou a notificação de ([^\"]*)$/, async (user, title) => {

    });

    When(/^Eu logo com usuário ([^\"]*) $/, async () => {

    });

    When(/^Clico no ícone ([^\"]*) $/, async (name) => {

    });

    Then(/^Eu posso ver a notificação ([^\"]*) na lista de notificações $/, async () => {

    });

});