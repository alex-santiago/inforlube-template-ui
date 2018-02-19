var routes = {};

routes.init = function () {

  route('/', function () {
    //riot.mount('splash-screen');
    riot.mount('#wrapper', 'wrapper');
  });

  // route('/sample', function () {
  //   riot.mount('#mainContentBody', 'sample');
  // }, 'Sample');

  // route('/list-clients', function () {
  // 	riot.mount('#mainContentBody', 'list-clients');
  // }, 'List Clients');

  // route('/list-client-details', function () {
  //   riot.mount('#mainContentBody', 'list-client-details');
  // }, 'List Client Detail');


}
