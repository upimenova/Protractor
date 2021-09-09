'use strict';

const BasePage = require("./BasePage");

class ServicesPage extends BasePage{
	constructor (){
		super();

        this.ShareButtons = $$("a.project-navigation__button_subsidiary");
        
	};
}

module.exports = ServicesPage;