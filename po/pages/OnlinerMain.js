'use strict';

const BasePage = require("./BasePage");

class OnlinerMain extends BasePage{
	constructor (){
		super();

        this.CartButton = element(by.css(".auth-bar__item--cart"));
        
	};
}

module.exports = OnlinerMain;