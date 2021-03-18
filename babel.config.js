module.exports = {
    "presets": [
        [
            "@babel/env",
            {
                "targets": {
                    "browsers": [
                        "last 2 versions",
                        "ie >= 11"
                    ]
                },
                "useBuiltIns": false
            }
        ],
        ["@babel/react", {
            "runtime": "automatic"
        }]
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "ployfill": false
            }
        ],
        [
            "transform-class-properties"
        ],
        [
            "import",
            {
                "libraryName": "antd",
                "libraryDirectory": "es",
                "style": "css"
            }
        ],
        [
            "dynamic-import-webpack"
        ],
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy": true
            }
        ],
        [
            "babel-plugin-styled-components"
        ],

    ],
    "env": {
        "production": {
            "plugins": [
                [
                    "transform-react-remove-prop-types",
                    {
                        "mode": "wrap",
                        "ignoreFilenames": [
                            "node_modules"
                        ]
                    }
                ]
            ]
        }
    }
}