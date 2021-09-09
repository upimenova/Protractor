'use strict';

const Header = require('../components/global/HeaderTask');
const Services = require('../components/global/Services')

class BasePage {
        constructor() {
                this.Header = new Header();
                this.Services = new Services();
        };
}

module.exports = BasePage;