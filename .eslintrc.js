module.exports = {
	"parser": "babel-eslint",
	"plugins": [ "react"],
	"extends" : ["eslint:recommended", "plugin:react/all"],
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
		"semi" : 2,
		"no-console": 1,
		"react/no-set-state" : 0
	}
}
