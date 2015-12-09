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
