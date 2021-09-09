'use strict';

class Header{
	    constructor (){

        this.Header = element(by.css(".b-top-actions"));

        this.HeaderLogo = this.Header.element(by.css('.b-top-logo a'));

        this.SearchField = this.Header.element(by.css('input.fast-search__input'));
        
        this.LoginButton = this.Header.element(by.buttonText('Вход'));

	};
}

module.exports = Header;