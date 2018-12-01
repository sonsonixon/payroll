const path = {
	base: 			'http://localhost/payroll/',
	html: {
		navbar: 	'components/common/navbar.html',
		sidebar: 	'components/common/sidebar.html',
		footer: 	'components/common/footer.html',
		users: 		'users'
	},
	script: {
		sidebar: 	'src/js/custom/common/sidebar.js',
		navbar: 	'src/js/custom/common/navbar.js',
		users: 		'src/js/custom/users.js'
	},
	php: {
		users: {
			add: 	'src/php/users/add.php'
		}
	}
}

const component = {
	title: 		'title',
	body: 		'body',
	div: {
		navbar: 	'#navbar-placeholder',
		sidebar: 	'#sidebar-placeholder',
		footer: 	'#footer-placeholder',
		loader: 	'#loader'
	},
	href: {
		brand: 		'#navbar-brand',
		dashboard: 	'#dashboard',
		users: 		'#users',
		logout: 	'#logout'
	},
	input: {
		users: {
			username: '#username',
			password: '#password'
		}
	},
	button: {
		users: {
			add: '#button_users_add'
		}
	},
	formdata: {
		users: {
			add: '#formdata_users_add'
		}
	}
}

const message = {
	users: {
		success: 	'User has been successfully added',
		error: 		'System has detected the following errors;'
	}
}

