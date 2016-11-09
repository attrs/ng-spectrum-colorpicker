var $ = require('jquery');
require('spectrum-colorpicker');
require('spectrum-colorpicker/spectrum.css');

module.exports = angular.module('ngSpectrumColorPicker', [])
  .directive('colorpicker', function(){
    return {
      require: '?ngModel',
      link: function (scope, elem, attrs, ngModel) {
        elem = $(elem[0]);
        elem.spectrum({
          flat: false,
          showInput: true,
          allowEmpty: true,
          chooseText: '선택',
          cancelText: '취소',
          showAlpha: true,
          showPalette: true,
          showPaletteOnly: false,
          palette: [
            ['#f0f0f0', '#3498db', '#70AB4F'],
            ['#3bafda', '#f6bb42', '#e9573f'],
            ['#967adc', '#37bc9b', '#fafafa'],
            ['#337AB7', '#5CB85C', '#5bc0de'],
            ['#64659F', '#EB585C', '#2F5893'],
            ['#F9BF5D', '#D16571', '#1E1E2B'],
            ['#f0ad4e', '#d9534f', '#777']
          ]
        });
        if (!ngModel) return;
        ngModel.$render = function () {
          elem.spectrum('set', ngModel.$viewValue || '#3498db');
        };
        elem.on('change', function () {
          scope.$apply(function () {
            ngModel.$setViewValue(elem.val());
          });
        });
      }
    }
  });