System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Site;
    return {
        setters:[],
        execute: function() {
            Site = (function () {
                function Site(id, name, url, alexa) {
                    this.id = id;
                    this.name = name;
                    this.url = url;
                    this.alexa = alexa;
                }
                return Site;
            }());
            exports_1("Site", Site);
        }
    }
});

//# sourceMappingURL=site.js.map
