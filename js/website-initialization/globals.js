var inforlub = {};

var language = {};
language = languagePtBr;

var dictionary = {};
dictionary = dictionaryPtBr;

jQuery.unparam = function (query) {
    var setValue = function(root, path, value){
        if(path.length > 1){
        var dir = path.shift();
        if( typeof root[dir] == 'undefined' ){
            root[dir] = path[0] == '' ? [] : {};
        }

        arguments.callee(root[dir], path, value);
        }else{
        if( root instanceof Array ){
            root.push(value);
        }else{
            root[path] = value;
        }
        }
    };
    var nvp = query.split('&');
    var data = {};
    for( var i = 0 ; i < nvp.length ; i++ ){
        var pair = nvp[i].split('=');
        var name = decodeURIComponent(pair[0]);
        var valueStr = decodeURIComponent(pair[1]).replaceAll('+', ' ');

        var value = Number(valueStr);

        if(isNaN(value)){
            value = valueStr;
        }

        var path = name.match(/(^[^\[]+)(\[.*\]$)?/);
        var first = path[1];
        if(path[2]){
        //case of 'array[level1]' || 'array[level1][level2]'
        path = path[2].match(/(?=\[(.*)\]$)/)[1].split('][')
        }else{
        //case of 'name'
        path = [];
        }
        path.unshift(first);

        setValue(data, path, value);
    }
    return data;
};

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

getActionImage = function(id){
    if(id == 0){ return "images/check_not-inspected.png"; } // No Checked
    if(id == 1){ return "images/close.png"; }               // Dont Have
    if(id == 2){ return "images/check_good.png"; }          // Good
    if(id == 3){ return "images/check_regular.png"; }       // Regular
    if(id == 4){ return "images/check_bad.png"; }           // Bad
    if(id == 5){ return "images/shopping-cart.png"; }       // Sale
    if(id == 6){ return "images/sell-and-service.png"; }    // Sale + Change
}
