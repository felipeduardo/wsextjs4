Ext.onReady(function(){

    Ext.define('MinhaApp.Hello', {
        mensagem: 'Hello World',
        sayHello: function(){
            console.info(this.mensagem);
        }
    }, function(Hello){
        Ext.create('MinhaApp.Hello').sayHello();
    });

    var helloWorld = Ext.create('MinhaApp.Hello');
    helloWorld.mensagem = 'Ola Mundo';
    helloWorld.sayHello();

});