var assert = require('assert');
var expect = require('chai').expect;

var ft = require("../index.js");

describe('flattentree', function() {
    it('should return [] when the value provided is null', function() {
        var o = ft(null);
        expect(o).to.deep.equal([]);
    });

    it('should return [] when the value provided is undefined', function() {
        o = ft();
        expect(o).to.deep.equal([]);
    });


    it('should throw an exception when provided value is not an object', function() {
        assert.throws(function() {
            ft(3)
        }, Error, "flattenTree(...): Argument must be an object.");
        assert.throws(function() {
            ft([3])
        }, Error, "flattenTree(...): Argument must be an object.");
    });

    it('should throw an exception when provided value is missing `id` property at any level', function() {
        assert.throws(function() {
            ft({
                children: [{
                    id: "id1"
                }]
            })
        }, Error, "flattenTree(...): Object must have `id` property.");

        assert.throws(function() {
            ft({
                id: "id1",
                children: [{
                    name: "node1_1"
                }]
            })
        }, Error, "flattenTree(...): Object must have `id` property.");
    });

    it('should throw an exception when children property (if provided) is not an Array', function() {
        assert.throws(function() {
            ft({
                children: "some string"
            })
        }, Error, "flattenTree(...): Value of children property must be an Array.");

        assert.throws(function() {
            ft({
                id: "id1",
                children: {
                    name: "node1_1"
                }
            })
        }, Error, "flattenTree(...): Value of children property must be an Array.");
    });

    it('should return a correct value for a valid input - test 1', function() {
        var result = [{
            "id": "1_1",
            "text": "string",
            "state": {
                "opened": true
            },
            "parent": "1"
        }, {
            "id": "1_2_1",
            "text": "string",
            "state": {
                "opened": true
            },
            "parent": "1_2"
        }, {
            "id": "1_2_2",
            "text": "string",
            "state": {
                "opened": true
            },
            "parent": "1_2"
        }, {
            "id": "1_2_3",
            "text": "string",
            "state": {
                "opened": true
            },
            "parent": "1_2"
        }, {
            "id": "1_2",
            "text": "string",
            "state": {
                "opened": true
            },
            "parent": "1"
        }, {
            "id": "1_3",
            "text": "string",
            "state": {
                "opened": true
            },
            "parent": "1"
        }, {
            "id": "1",
            "text": "string",
            "state": {
                "opened": true
            },
            "parent": null
        }];
        var o = ft({
            id: "1",
            text: "string",
            state: {
                opened: true,
            },
            children: [{
                id: "1_1",
                text: "string",
                state: {
                    opened: true,
                },
                children: [],
            }, {
                id: "1_2",
                text: "string",
                state: {
                    opened: true,
                },
                children: [{
                    id: "1_2_1",
                    text: "string",
                    state: {
                        opened: true,
                    },
                    children: [],
                }, {
                    id: "1_2_2",
                    text: "string",
                    state: {
                        opened: true,
                    },
                    children: [],
                }, {
                    id: "1_2_3",
                    text: "string",
                    state: {
                        opened: true,
                    },
                    children: [],
                }],
            }, {
                id: "1_3",
                text: "string",
                state: {
                    opened: true,
                },
                children: [],
            }]
        });
        expect(o).to.deep.equal(result);
    });


    it('should return a correct value for a valid input - test 2', function() {
        var result = [{
            id: "1_1",
            text: "string",
            state: {
                opened: true,
            },
            parent: "1",
        }, {
            id: "1_2",
            text: "string",
            state: {
                opened: true,
            },
            parent: "1",
        }, {
            id: "1",
            text: "string",
            state: {
                opened: true,
            },
            parent: null
        }];
        var o = ft({
            id: "1",
            text: "string",
            state: {
                opened: true,
            },
            children: [{
                id: "1_1",
                text: "string",
                state: {
                    opened: true,
                },
                children: [],
            }, {
                id: "1_2",
                text: "string",
                state: {
                    opened: true,
                },
                children: [],
            }]
        });
        expect(o).to.deep.equal(result);
    });
});
