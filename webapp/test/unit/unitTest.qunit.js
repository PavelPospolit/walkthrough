QUnit.config.autstart = false
sap.ui.getCore().attachInit(function () {
    'use strict'

    sap.ui.require([
        'sap/ui/walkthrough/test/unit/mode/formatter'
    ], function () {
        Qunit.start()
    })
})