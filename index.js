"use strict";

/**
 * tree object must have a property - id
 * @param {object} tree
 * @return {object}
 */
var flattenTree = function(tree) {
    if (tree === null || typeof(tree) === "undefined") {
        return [];
    }
    if (!(tree instanceof Object)) {
        throw new Error('flattenTree(...): Argument must be an object.');
    }
    var node = clone(tree);
    node.parent = null;
    return flatten(node);
};

function flatten(node) {
    node.children = node.children || [];

    if (!Array.isArray(node.children)) {
        throw new Error('flattenTree(...): Value of children property must be an Array.');
    }

    if (!("id" in node)) {
        throw new Error('flattenTree(...): Object must have `id` property.');
    }

    var result = [];

    var children = [];
    if (node.children && node.children.length) {
        for (var i = 0; i < node.children.length; i++) {
            node.children[i].parent = node.id;
            result = result.concat(flatten(node.children[i]));
        }
    }

    delete node.children;
    return result.concat(node);
}

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

module.exports = flattenTree;
