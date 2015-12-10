'use strict';

var TpApiBuilder = (function() {

	function TpApiBuilder(domain) {
		this.host = 'https://{domain}.tpondemand.com/api/v2/{entity}'.replace(/{domain}/, domain || 'www');
		this.model = {
			entity: '',
			select: null,
			where: []
		};
	}

	TpApiBuilder.prototype.bug = function() {
		this.model.entity = 'Bug';
		return this;
	};

	TpApiBuilder.prototype.where = function(assertion) {
		this.model.where = [assertion];
		return this;
	};

	TpApiBuilder.prototype.andWhere = function(assertion) {
		this.model.where.push(assertion);
		return this;
	};

	TpApiBuilder.prototype.select = function(properties) {
		this.model.select = properties;
		return this;
	};

	TpApiBuilder.prototype.take = function(number) {
		this.model.take = number;
		return this;
	};

	TpApiBuilder.prototype.orderBy = function(assertion) {
		this.model.order = assertion;
		return this;
	};

	TpApiBuilder.prototype.render = function() {
		var url, params;
		url = this.host.replace(/{entity}/, this.model.entity);
		params = [];

		if (this.model.where.length > 0) {
			params.push('where=(' + this.model.where.join(' and ') + ')');
		}

		if (this.model.select) {
			params.push('select={'+this.model.select+'}');
		}

		if (this.model.take) {
			params.push('take='+this.model.take);
		}

		if (this.model.order) {
			params.push('orderBy='+this.model.order);
		}

		return url + '?' + params.join('&');
	};

	return TpApiBuilder;

})();

if (typeof module !== 'undefined') {
	module.exports = TpApiBuilder;
}