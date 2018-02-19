var app = {};

app.init = function(){

    //loadSession();
    
    routes.init();

    riot.compile(function() {
      riot.mount('#wrapper', 'wrapper');
      route.start(true);
    })

}