angular
  .module('app', [])
  .controller('IndexController', IndexController)

IndexController.$inject = []

function IndexController () {
  var vm = this

  vm.lampadas = [{
    id: 'batata',
    name: 'lampada01',
    status: 0
  }, {
    id: 'batata2',
    name: 'lampada02',
    status: 1
  },
  {
    id: 'batat3a',
    name: 'lampada03',
    status: 0
  }]
}
