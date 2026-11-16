import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([{
    extends: [js.configs.recommended],

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: 12,
        sourceType: "script",
    },

    rules: {},
}, {
    files: ["eslint.config.mjs"],
    languageOptions: {
        globals: globals.node,
        sourceType: "module",
    },
}, {
    files: ["updateSkinList.js", "webserver.js"],
    languageOptions: {
        globals: globals.node,
        sourceType: "commonjs",
    },
}]);
