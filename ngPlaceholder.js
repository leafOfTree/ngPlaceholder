angular.module('ngPlaceholder', [])
    .directive('ngPlaceholder', function () {
        function link(scope, element, attrs) {
            var ph = attrs.ngPlaceholder;
            element.attr('placeholder', ph);
        }

        return {
            restrict: 'A',
            link: link,
        }
    });
