var sessionObj;

var loadSession = function(){
    sessionObj = JSON.parse(localStorage.getItem('sessionObj'));

    if(sessionObj == null){
        clearSession();
    }
    else{
        if(sessionObj.checklist.actions == undefined)
            sessionObj.checklist.actions = [];
    }
}

var saveSession = function(){
    localStorage.setItem('sessionObj', JSON.stringify(sessionObj));
}

var clearSession = function(){
    sessionObj = new Object();
    
    sessionObj.vehicleType = new Object();
    sessionObj.year = 0;
    sessionObj.brand = new Object();
    sessionObj.model = new Object();
    sessionObj.fuel = new Object();
    sessionObj.engine = new Object();
    sessionObj.frequentUse = new Object();
    sessionObj.checklist = new Object();
    sessionObj.checklist.items = [];
    sessionObj.checklist.actions = [];
    sessionObj.cart = new Object();
    sessionObj.cart.packages = new Array();
    sessionObj.clients = new Object();
    sessionObj.clients.clientlist = new Object();
    sessionObj.clients.clientIndex = -1;

    saveSession();
}

var saveCache = function(name, data){
    localStorage.setItem(name, JSON.stringify(data));
}

var loadCache = function(name){
    return JSON.parse(localStorage.getItem(name));
}