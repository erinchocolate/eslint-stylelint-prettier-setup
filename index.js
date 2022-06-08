module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-prettier",
    "stylelint-config-prettier-scss"
  ],
  "plugins": [
    "stylelint-scss",
    "stylelint-prettier"
  ],
  "rules": {
    "prettier/prettier": [
      true,
      {
        "singleQuote": true,
        "tabWidth": 2,
        "semi": true,
        "endOfLine": "auto"
      }
    ]
  }
}