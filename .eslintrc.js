module.exports = {
	"plugins": [ "react"],
	"extends" : ["eslint:recommended", "plugin:react/all"],
	"env" : {
		"commonjs" : true,
		"browser" : true,
		"es6" : true
	},
	"parserOptions": {
		"ecmaVersion": 6,
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
