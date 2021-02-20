import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-zendesk-webwidget.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
ngxZendeskWebwidgetConfig = /** @class */ (function () {
    function ngxZendeskWebwidgetConfig() {
    }
    return ngxZendeskWebwidgetConfig;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-zendesk-webwidget.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getWindow() {
    return window;
}
var ngxZendeskWebwidgetService = /** @class */ (function () {
    function ngxZendeskWebwidgetService(_ngxZendeskWebwidgetConfig) {
        var _this = this;
        if (!_ngxZendeskWebwidgetConfig.accountUrl) {
            throw new Error('Missing accountUrl. Please set in app config via ZendeskWidgetProvider');
        }
        this.window = getWindow();
        /** @type {?} */
        var window = this.window
        // Following is essentially a copy paste of JS portion of the Zendesk embed code
        // with our settings subbed in. For more info, see:
        // https://support.zendesk.com/hc/en-us/articles/203908456-Using-Web-Widget-to-embed-customer-service-in-your-website
        ;
        // Following is essentially a copy paste of JS portion of the Zendesk embed code
        // with our settings subbed in. For more info, see:
        // https://support.zendesk.com/hc/en-us/articles/203908456-Using-Web-Widget-to-embed-customer-service-in-your-website
        window.zEmbed || (/**
         * @param {?} e
         * @param {?} t
         * @return {?}
         */
        function (e, t) {
            /** @type {?} */
            var n;
            /** @type {?} */
            var o;
            /** @type {?} */
            var d;
            /** @type {?} */
            var i;
            /** @type {?} */
            var s;
            /** @type {?} */
            var a = [];
            /** @type {?} */
            var r = document.createElement("iframe");
            window.zEmbed = (/**
             * @return {?}
             */
            function () {
                a.push(arguments);
            }), window.zE = window.zE || window.zEmbed,
                r.src = "javascript:false",
                r.title = "",
                r.style.cssText = "display: none",
                d = document.getElementsByTagName("script"),
                d = d[d.length - 1],
                d.parentNode.insertBefore(r, d),
                i = r.contentWindow,
                s = i.document;
            try {
                o = s;
            }
            catch (e) {
                n = document.domain, r.src = 'javascript:var d=document.open();d.domain="' + n + '";void(0);',
                    o = s;
            }
            o.open()._l = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var e = this.createElement("script");
                n && (this.domain = n),
                    e.id = "js-iframe-async",
                    e.src = "https://assets.zendesk.com/embeddable_framework/main.js",
                    this.t = +new Date,
                    this.zendeskHost = _ngxZendeskWebwidgetConfig.accountUrl,
                    this.zEQueue = a,
                    this.body.appendChild(e);
            }),
                o.write('<body onload="document._l();">'),
                o.close();
        })();
        this.window.zE((/**
         * @return {?}
         */
        function () {
            _ngxZendeskWebwidgetConfig.beforePageLoad(_this.window.zE);
        }));
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    ngxZendeskWebwidgetService.prototype.setLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        var _this = this;
        this.window.zE((/**
         * @return {?}
         */
        function () {
            _this.window.zE.setLocale(locale);
        }));
    };
    /**
     * @param {?} userObj
     * @return {?}
     */
    ngxZendeskWebwidgetService.prototype.identify = /**
     * @param {?} userObj
     * @return {?}
     */
    function (userObj) {
        var _this = this;
        this.window.zE((/**
         * @return {?}
         */
        function () {
            _this.window.zE.identify(userObj);
        }));
    };
    /**
     * @return {?}
     */
    ngxZendeskWebwidgetService.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.window.zE((/**
         * @return {?}
         */
        function () {
            _this.window.zE.hide();
        }));
    };
    /**
     * @return {?}
     */
    ngxZendeskWebwidgetService.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.window.zE((/**
         * @return {?}
         */
        function () {
            _this.window.zE.show();
        }));
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    ngxZendeskWebwidgetService.prototype.activate = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        this.window.zE((/**
         * @return {?}
         */
        function () {
            _this.window.zE.activate(options);
        }));
    };
    /**
     * @param {?} options
     * @return {?}
     */
    ngxZendeskWebwidgetService.prototype.setHelpCenterSuggestions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        this.window.zE((/**
         * @return {?}
         */
        function () {
            _this.window.zE.setHelpCenterSuggestions(options);
        }));
    };
    /**
     * @param {?} settings
     * @return {?}
     */
    ngxZendeskWebwidgetService.prototype.setSettings = /**
     * @param {?} settings
     * @return {?}
     */
    function (settings) {
        this.window.zESettings = settings;
    };
    ngxZendeskWebwidgetService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ngxZendeskWebwidgetService.ctorParameters = function () { return [
        { type: ngxZendeskWebwidgetConfig }
    ]; };
    return ngxZendeskWebwidgetService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-zendesk-webwidget.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ngxZendeskWebwidgetModule = /** @class */ (function () {
    function ngxZendeskWebwidgetModule() {
    }
    /**
     * @param {?} zendeskConfig
     * @return {?}
     */
    ngxZendeskWebwidgetModule.forRoot = /**
     * @param {?} zendeskConfig
     * @return {?}
     */
    function (zendeskConfig) {
        return {
            ngModule: ngxZendeskWebwidgetModule,
            providers: [
                { provide: ngxZendeskWebwidgetConfig, useClass: zendeskConfig },
                { provide: ngxZendeskWebwidgetService, useClass: ngxZendeskWebwidgetService, deps: [ngxZendeskWebwidgetConfig] }
            ]
        };
    };
    ngxZendeskWebwidgetModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return ngxZendeskWebwidgetModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-zendesk-webwidget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ngxZendeskWebwidgetModule, ngxZendeskWebwidgetService, ngxZendeskWebwidgetConfig };
