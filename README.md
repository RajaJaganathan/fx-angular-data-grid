# fx-angular-data-grid
Simple and powerful data grid with high customize fx data grid.

##Features:

	ItemRenderer are highly configurable based on your business requirements.
	Default ItemRenderer is also configurable so that no need to set item renderer for every fields.
	Dynamically values are populated so that no need to create HTML markup.


### Template Usage:

<div ng-controller="TableCtrl as vm">
    <fx-data-grid data="vm.data" item-renderers="vm.itemRenderers" column="vm.column" 
    			  grid-options="vm.gridOptions">
    </fx-data-grid>
</div>

### Controller:

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


Inspired by Adobe Flex DataGrid