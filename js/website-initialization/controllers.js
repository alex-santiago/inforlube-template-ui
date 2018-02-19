inforlub.controllers = {};

/* brands */
inforlub.controllers.brands = {};
inforlub.controllers.brands.getlist = function (parameters, onSuccess) {
    var brands = loadCache('brands');
    
    if(brands != null && brands.length > 0){
        onSuccess(brands);
        return;
    }
    
    ajaxPost(host + 'brands/getlist', parameters, function (json) {
        saveCache('brands', json);
        onSuccess(json);
    });
}

/* models */
inforlub.controllers.models = {};
inforlub.controllers.models.getlist = function (parameters, onSuccess) {
    ajaxPost(host + 'models/getlist', parameters, function (json) {
        onSuccess(json);
    });
}

inforlub.controllers.models.checklists = function (parameters, onSuccess) {
    ajaxPost(host + 'models/checklists', parameters, function (json) {
        onSuccess(json);
    });
}
inforlub.controllers.models.products = function (parameters, onSuccess) {
    ajaxPost(host + 'models/products', parameters, function (json) {
        onSuccess(json);
    });
}

/* engines */
inforlub.controllers.engines = {};
inforlub.controllers.engines.getlist = function (parameters, onSuccess) {
    ajaxPost(host + 'engines/getlist', parameters, function (json) {
        onSuccess(json);
    });
}

/* clients */
inforlub.controllers.clients = {};
inforlub.controllers.clients.listclients = function (onSuccess) {
    ajaxGet(host + 'clients', function (json) {
        onSuccess(json);
    });
}

























// inforlub.controllers.brands.post = function (json, onSuccess, onError) {
//     ajaxPost(host + 'brands', json, function (json) {
//         onSuccess(json);
//     },
//     function (json) {
//         onError(json);
//     });
// }

// inforlub.controllers.brands.put = function (id, json, onSuccess, onError) {
//    ajaxPut(host + 'brands?id=' + id, json, function (json) {
//        onSuccess(json);
//    },
//    function (json) {
//        onError(json);
//    });
// }