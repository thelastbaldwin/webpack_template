module.exports = {
	"parser": "babel-eslint",
	"plugins": [ "react"],
	"extends" : ["eslint:recommended", "plugin:react/all", "airbnb"],
	"env" : {
		"commonjs" : true,
		"browser" : true,
		"es6" : true
	},
	"parserOptions": {
		"ecmaVersion": 2015,
		"sourceType" : "module",
		"ecmaFeatures" : {
			"jsx" : true
		}
	},
	"rules" : {
		"semi": 1,
		"quotes": ["error", "double"],
		"comma-dangle": ["error", "never"],
		"no-plusplus": 0,
		"no-console": 1,
		"react/no-set-state" : 0,
		"react/destructuring-assignment": 0
	}
}
