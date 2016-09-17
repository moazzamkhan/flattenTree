# flattenTree
Flatten the tree(json) to an array.

## Getting Started

### Install
using npm:

```javascript
$ npm install flattentree
```
# Usage

```javascript
var flattentree = require("flattentree")

var tree = {
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
        };

var arr = ft(tree);
console.log(arr);

/* output */

[
  {
    "id": "1_1",
    "text": "string",
    "state": {
      "opened": true
    },
    "parent": "1"
  },
  {
    "id": "1_2",
    "text": "string",
    "state": {
      "opened": true
    },
    "parent": "1"
  },
  {
    "id": "1",
    "text": "string",
    "state": {
      "opened": true
    },
    "parent": null
  }
]
```

## Tree object format

```javascript
{
  "id": "some_id", //required
  "children": [//optional, property name must be `children`
      {
        "id": "some_child_id",
        "children" : [...],//
        ...//other properties
      }
    ],
  ...,//other properties
  name :"node name",// other properties
  ...//other properties
}
```


