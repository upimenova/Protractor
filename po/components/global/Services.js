'use strict';

class Services{
	    constructor (){

            this.Subcontractors = element(by.css(".project-navigation__part_1 li:nth-of-type(2) a"));
            this.FilterItem = element(by.cssContainingText('.service-form__checkbox-sign', 'Минская'));
            this.SelectedFilter = $(".service-tags__button");

	};
}

module.exports = Services;