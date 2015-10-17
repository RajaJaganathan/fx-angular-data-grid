(function() {

    "use strict";

    angular.module('gridApp', ['fxDataGrid'])
        .controller('TableCtrl', ['$scope', '$http', function($scope, $http) {
            var vm = this;

            $http.get("data/table-data.json").then(resultHandler);

            function resultHandler(res) {
                vm.data = res.data.people;
            }

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

        }]).directive('ageIndicatorItemRenderer', [function() {
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
        }])
        .directive('telephoneItemRenderer', [function() {
            return {
                restrict: 'E',
                template: '<img src="imgs/phone.png"/><a href="tel:+{{itemValue}}">+{{itemValue}}</a>'
            };
        }]);
})();
