# TpApiBuilder


An Api Url Builder for [TargetProcess](https://www.targetprocess.com/)

## Usage

```javascript
var bugApiUrl = new TPApiBuilder
				.bug()
				.take(10)
				.where('Team.id == 11388')
				.andWhere('EntityState.IsFinal != true')
				.select('id,name')
				.render();
				
```
## Methods

**constructor**

For privates instances you might pass the domain as parameter

```javascript
var bugApiModel = new TPApiBuilder(domain);
```

**render**

Renders the api to string

```javascript
var apiUrl = new TPApiBuilder(domain).render();
```

**where**
**andWhere**

**select**

**take**
**orderby**
