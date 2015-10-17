(function() {

    "use strict";

    angular.module('fxDataGrid')
        .directive('fxDataGrid', function() {
            return {
                restrict: 'EA',
                scope: {
                    data: "=",
                    column: "=",
                    gridOptions: "=",
                    itemRenderers: "="
                },
                bindToController: true,
                controllerAs: 'grid',
                templateUrl: 'app/datagrid/datagrid.template.html',
                link: function(scope, iElement, iAttrs) {
                    console.log('link');
                },
                controller: function() {
                    console.log('controller', this);
                }
            };
        })
        .directive('gridItemRenderer', ['$compile', '$parse', function($compile, $parse) {
            return {
                restrict: 'A',
                scope: {
                    item: "=",
                    column: "=",
                    itemRenderers: "=",
                    gridOptions: "="
                },
                link: function(scope, elem, attr) {

                    scope.itemValue = scope.itemValue || 'default value';

                    scope.$watchGroup(['item', 'column'], function(newVal, oldVal) {
                        scope.itemValue = $parse(scope.column.dataField)(scope.item);
                        console.log('scope.itemValue', scope.itemValue);
                    });

                    scope.$watchGroup(['itemRenderers', 'gridOptions'], function(newVal, oldVal) {
                        var defaultItemRenderer = scope.gridOptions.defaultItemRenderer || 'default-item-renderer';
                        var rendererDirective = scope.itemRenderers[scope.column.dataField] || defaultItemRenderer;
                        var rendererElem = angular.element('<' + rendererDirective + '>');
                        $compile(rendererElem)(scope);
                        elem.append(rendererElem);
                    });
                }
            };
        }])
        .directive('defaultItemRenderer', [function() {
            return {
                restrict: 'E',
                template: '{{itemValue}}'
            };
        }])
        .directive('linkItemRenderer', [function() {
            return {
                restrict: 'E',
                template: '<span><a href="#">{{itemValue}}</a></span>'
            };
        }]);
})();
