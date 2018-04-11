angular
  .module('app', [])
  .controller('IndexController', IndexController)

IndexController.$inject = []

function IndexController () {
  var vm = this

  vm.isOn = isOn

  vm.lampadas = [{
    id: 'batata',
    name: 'lampada01',
    status: 0,
    intensity: 0
  }, {
    id: 'batata2',
    name: 'lampada02',
    status: 1,
    intensity: 90
  },
  {
    id: 'batat3a',
    name: 'lampada03',
    status: 0,
    intensity: 0
  }]

  function isOn (intensity) {
    return intensity && intensity > 0
  }
}
