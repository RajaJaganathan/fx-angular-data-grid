# fx-angular-data-grid
Simple and powerful data grid with high customize fx data grid.

####Features:
---
* ItemRenderer are highly configurable based on your business requirements.
* Default ItemRenderer is also configurable so that no need to set item renderer for every fields.
* Dynamically values are populated so that no need to create HTML markup.


Template Usage:
---
```
<div ng-controller="TableCtrl as vm">
    <fx-data-grid data="vm.data" item-renderers="vm.itemRenderers" column="vm.column" 
    			  grid-options="vm.gridOptions">
    </fx-data-grid>
</div>
```
Controller:
---
```javascript
	vm.column = [{
	    headerText: 'First Name',
	    dataField: 'firstName'
	}, {
	    headerText: 'Last Name',
	    dataField: 'lastName'
	}, {
	    headerText: 'Age',
	    dataField: 'age'
	}, {
	    headerText: 'City',
	    dataField: 'address.city'
	}, {
	    headerText: 'Phone',
	    dataField: 'phoneNumber[0].number'
	}];

	vm.itemRenderers = {
	    'age': 'age-indicator-item-renderer',
	    'phoneNumber[0].number': 'telephone-item-renderer'
	};

	vm.gridOptions = {
	    // defaultItemRenderer: 'link-item-renderer'
	};

	vm.data = [{
        "firstName": "John",
        "lastName": "Doe",
        "age": 25,
        "address": {
            "streetAddress": "21 2nd Street",
            "city": "New York",
            "state": "NY",
            "postalCode": "10021"
        },
        "phoneNumber": [{
            "type": "home",
            "number": "172 555-1234"
        }, {
            "type": "fax",
            "number": "646 555-4567"
        }]
```
Custom ItemRenderer:
---

```javascript

app.directive('ageIndicatorItemRenderer', [function() {
            return {
                restrict: 'E',
                template: '<span>{{itemValue}}</span>',
                link: function(scope, elem, attr) {
                    scope.$watch('itemValue', function(newVal, oldVal) {
                        if (parseInt(newVal) > 60) {
                            elem[0].style.color = 'red';
                        } else {
                            elem[0].style.color = 'green';
                        }
                    });
                }
            };
        }]);
        
```

fxDataGrid:

![fxAngularDataGrid](https://raw.githubusercontent.com/RajaJaganathan/fx-angular-data-grid/master/assets/datagrid.png "fx angular data grid")

Inspired by Adobe Flex DataGrid
