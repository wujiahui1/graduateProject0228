module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        //"semi": ["error", "always"],
        "no-empty": 0,
        "comma-dangle": 0,
        "no-unused-vars": 0,
        "no-console": 0,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-duplicate-case": 2,
        "no-extra-parens": [2, "functions"],
        "no-self-compare": 2,
        "accessor-pairs": 2,
        "comma-spacing": [2, {
            "before": false,
            "after": true
        }],
        "constructor-super": 2,
        "new-cap": [2, {
            "newIsCap": true,
            "capIsNew": false
        }],
        "new-parens": 2,
        "no-array-constructor": 2,
        "no-class-assign": 2,
        "no-cond-assign": 2
    },
    "settings": {
        "import/ignore": [
            "node_modules"
        ]
    }
};