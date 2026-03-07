import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
 * @see routes/web.php:10
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:10
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:10
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:10
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:10
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:10
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:10
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
 * @see routes/web.php:14
 * @route '/privacy'
 */
export const privacy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacy.url(options),
    method: 'get',
})

privacy.definition = {
    methods: ["get","head"],
    url: '/privacy',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:14
 * @route '/privacy'
 */
privacy.url = (options?: RouteQueryOptions) => {
    return privacy.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:14
 * @route '/privacy'
 */
privacy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacy.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:14
 * @route '/privacy'
 */
privacy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: privacy.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:14
 * @route '/privacy'
 */
    const privacyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: privacy.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:14
 * @route '/privacy'
 */
        privacyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: privacy.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:14
 * @route '/privacy'
 */
        privacyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: privacy.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    privacy.form = privacyForm
/**
* @see \App\Http\Controllers\ContactUsController::contactUsForm
 * @see app/Http/Controllers/ContactUsController.php:14
 * @route '/privacy'
 */
export const contactUsForm = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contactUsForm.url(options),
    method: 'post',
})

contactUsForm.definition = {
    methods: ["post"],
    url: '/privacy',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContactUsController::contactUsForm
 * @see app/Http/Controllers/ContactUsController.php:14
 * @route '/privacy'
 */
contactUsForm.url = (options?: RouteQueryOptions) => {
    return contactUsForm.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactUsController::contactUsForm
 * @see app/Http/Controllers/ContactUsController.php:14
 * @route '/privacy'
 */
contactUsForm.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contactUsForm.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContactUsController::contactUsForm
 * @see app/Http/Controllers/ContactUsController.php:14
 * @route '/privacy'
 */
    const contactUsFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: contactUsForm.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContactUsController::contactUsForm
 * @see app/Http/Controllers/ContactUsController.php:14
 * @route '/privacy'
 */
        contactUsFormForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: contactUsForm.url(options),
            method: 'post',
        })
    
    contactUsForm.form = contactUsFormForm
/**
 * @see routes/web.php:21
 * @route '/recipients'
 */
export const recipients = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recipients.url(options),
    method: 'get',
})

recipients.definition = {
    methods: ["get","head"],
    url: '/recipients',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:21
 * @route '/recipients'
 */
recipients.url = (options?: RouteQueryOptions) => {
    return recipients.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:21
 * @route '/recipients'
 */
recipients.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recipients.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:21
 * @route '/recipients'
 */
recipients.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recipients.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:21
 * @route '/recipients'
 */
    const recipientsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: recipients.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:21
 * @route '/recipients'
 */
        recipientsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recipients.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:21
 * @route '/recipients'
 */
        recipientsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recipients.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    recipients.form = recipientsForm
/**
 * @see routes/web.php:25
 * @route '/unsubscribe'
 */
export const unsubscribe = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unsubscribe.url(options),
    method: 'get',
})

unsubscribe.definition = {
    methods: ["get","head"],
    url: '/unsubscribe',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:25
 * @route '/unsubscribe'
 */
unsubscribe.url = (options?: RouteQueryOptions) => {
    return unsubscribe.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:25
 * @route '/unsubscribe'
 */
unsubscribe.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unsubscribe.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:25
 * @route '/unsubscribe'
 */
unsubscribe.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: unsubscribe.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:25
 * @route '/unsubscribe'
 */
    const unsubscribeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: unsubscribe.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:25
 * @route '/unsubscribe'
 */
        unsubscribeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unsubscribe.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:25
 * @route '/unsubscribe'
 */
        unsubscribeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unsubscribe.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    unsubscribe.form = unsubscribeForm
/**
* @see \App\Http\Controllers\ListController::sharedList
 * @see app/Http/Controllers/ListController.php:13
 * @route '/shared-list/{list}/{code}'
 */
export const sharedList = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sharedList.url(args, options),
    method: 'get',
})

sharedList.definition = {
    methods: ["get","head"],
    url: '/shared-list/{list}/{code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ListController::sharedList
 * @see app/Http/Controllers/ListController.php:13
 * @route '/shared-list/{list}/{code}'
 */
sharedList.url = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    list: args[0],
                    code: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        list: args.list,
                                code: args.code,
                }

    return sharedList.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::sharedList
 * @see app/Http/Controllers/ListController.php:13
 * @route '/shared-list/{list}/{code}'
 */
sharedList.get = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sharedList.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ListController::sharedList
 * @see app/Http/Controllers/ListController.php:13
 * @route '/shared-list/{list}/{code}'
 */
sharedList.head = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sharedList.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ListController::sharedList
 * @see app/Http/Controllers/ListController.php:13
 * @route '/shared-list/{list}/{code}'
 */
    const sharedListForm = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sharedList.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ListController::sharedList
 * @see app/Http/Controllers/ListController.php:13
 * @route '/shared-list/{list}/{code}'
 */
        sharedListForm.get = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sharedList.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ListController::sharedList
 * @see app/Http/Controllers/ListController.php:13
 * @route '/shared-list/{list}/{code}'
 */
        sharedListForm.head = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sharedList.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    sharedList.form = sharedListForm
/**
* @see \App\Http\Controllers\ListController::verifySharedListForm
 * @see app/Http/Controllers/ListController.php:33
 * @route '/shared-list'
 */
export const verifySharedListForm = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifySharedListForm.url(options),
    method: 'post',
})

verifySharedListForm.definition = {
    methods: ["post"],
    url: '/shared-list',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ListController::verifySharedListForm
 * @see app/Http/Controllers/ListController.php:33
 * @route '/shared-list'
 */
verifySharedListForm.url = (options?: RouteQueryOptions) => {
    return verifySharedListForm.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::verifySharedListForm
 * @see app/Http/Controllers/ListController.php:33
 * @route '/shared-list'
 */
verifySharedListForm.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifySharedListForm.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ListController::verifySharedListForm
 * @see app/Http/Controllers/ListController.php:33
 * @route '/shared-list'
 */
    const verifySharedListFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: verifySharedListForm.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListController::verifySharedListForm
 * @see app/Http/Controllers/ListController.php:33
 * @route '/shared-list'
 */
        verifySharedListFormForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: verifySharedListForm.url(options),
            method: 'post',
        })
    
    verifySharedListForm.form = verifySharedListFormForm
/**
 * @see routes/web.php:39
 * @route '/admin'
 */
export const admin = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(options),
    method: 'get',
})

admin.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:39
 * @route '/admin'
 */
admin.url = (options?: RouteQueryOptions) => {
    return admin.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:39
 * @route '/admin'
 */
admin.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:39
 * @route '/admin'
 */
admin.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: admin.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:39
 * @route '/admin'
 */
    const adminForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: admin.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:39
 * @route '/admin'
 */
        adminForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: admin.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:39
 * @route '/admin'
 */
        adminForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: admin.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    admin.form = adminForm
/**
* @see \App\Http\Controllers\ContactController::contacts
 * @see app/Http/Controllers/ContactController.php:33
 * @route '/contacts'
 */
export const contacts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contacts.url(options),
    method: 'get',
})

contacts.definition = {
    methods: ["get","head"],
    url: '/contacts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContactController::contacts
 * @see app/Http/Controllers/ContactController.php:33
 * @route '/contacts'
 */
contacts.url = (options?: RouteQueryOptions) => {
    return contacts.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::contacts
 * @see app/Http/Controllers/ContactController.php:33
 * @route '/contacts'
 */
contacts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contacts.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContactController::contacts
 * @see app/Http/Controllers/ContactController.php:33
 * @route '/contacts'
 */
contacts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contacts.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContactController::contacts
 * @see app/Http/Controllers/ContactController.php:33
 * @route '/contacts'
 */
    const contactsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contacts.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContactController::contacts
 * @see app/Http/Controllers/ContactController.php:33
 * @route '/contacts'
 */
        contactsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contacts.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContactController::contacts
 * @see app/Http/Controllers/ContactController.php:33
 * @route '/contacts'
 */
        contactsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contacts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contacts.form = contactsForm
/**
* @see \App\Http\Controllers\ContactController::contactsStore
 * @see app/Http/Controllers/ContactController.php:46
 * @route '/contacts'
 */
export const contactsStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contactsStore.url(options),
    method: 'post',
})

contactsStore.definition = {
    methods: ["post"],
    url: '/contacts',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContactController::contactsStore
 * @see app/Http/Controllers/ContactController.php:46
 * @route '/contacts'
 */
contactsStore.url = (options?: RouteQueryOptions) => {
    return contactsStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::contactsStore
 * @see app/Http/Controllers/ContactController.php:46
 * @route '/contacts'
 */
contactsStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contactsStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContactController::contactsStore
 * @see app/Http/Controllers/ContactController.php:46
 * @route '/contacts'
 */
    const contactsStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: contactsStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContactController::contactsStore
 * @see app/Http/Controllers/ContactController.php:46
 * @route '/contacts'
 */
        contactsStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: contactsStore.url(options),
            method: 'post',
        })
    
    contactsStore.form = contactsStoreForm
/**
* @see \App\Http\Controllers\ContactController::contactsDestroy
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contacts/{contact}'
 */
export const contactsDestroy = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: contactsDestroy.url(args, options),
    method: 'delete',
})

contactsDestroy.definition = {
    methods: ["delete"],
    url: '/contacts/{contact}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ContactController::contactsDestroy
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contacts/{contact}'
 */
contactsDestroy.url = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { contact: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { contact: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    contact: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        contact: typeof args.contact === 'object'
                ? args.contact.id
                : args.contact,
                }

    return contactsDestroy.definition.url
            .replace('{contact}', parsedArgs.contact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::contactsDestroy
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contacts/{contact}'
 */
contactsDestroy.delete = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: contactsDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ContactController::contactsDestroy
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contacts/{contact}'
 */
    const contactsDestroyForm = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: contactsDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContactController::contactsDestroy
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contacts/{contact}'
 */
        contactsDestroyForm.delete = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: contactsDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    contactsDestroy.form = contactsDestroyForm
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:15
 * @route '/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:15
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:15
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:15
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:15
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:15
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:15
 * @route '/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
 * @see routes/private.php:24
 * @route '/details'
 */
export const details = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: details.url(options),
    method: 'get',
})

details.definition = {
    methods: ["get","head"],
    url: '/details',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/private.php:24
 * @route '/details'
 */
details.url = (options?: RouteQueryOptions) => {
    return details.definition.url + queryParams(options)
}

/**
 * @see routes/private.php:24
 * @route '/details'
 */
details.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: details.url(options),
    method: 'get',
})
/**
 * @see routes/private.php:24
 * @route '/details'
 */
details.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: details.url(options),
    method: 'head',
})

    /**
 * @see routes/private.php:24
 * @route '/details'
 */
    const detailsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: details.url(options),
        method: 'get',
    })

            /**
 * @see routes/private.php:24
 * @route '/details'
 */
        detailsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: details.url(options),
            method: 'get',
        })
            /**
 * @see routes/private.php:24
 * @route '/details'
 */
        detailsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: details.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    details.form = detailsForm
/**
 * @see routes/private.php:28
 * @route '/lists'
 */
export const lists = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lists.url(options),
    method: 'get',
})

lists.definition = {
    methods: ["get","head"],
    url: '/lists',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/private.php:28
 * @route '/lists'
 */
lists.url = (options?: RouteQueryOptions) => {
    return lists.definition.url + queryParams(options)
}

/**
 * @see routes/private.php:28
 * @route '/lists'
 */
lists.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lists.url(options),
    method: 'get',
})
/**
 * @see routes/private.php:28
 * @route '/lists'
 */
lists.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lists.url(options),
    method: 'head',
})

    /**
 * @see routes/private.php:28
 * @route '/lists'
 */
    const listsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: lists.url(options),
        method: 'get',
    })

            /**
 * @see routes/private.php:28
 * @route '/lists'
 */
        listsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lists.url(options),
            method: 'get',
        })
            /**
 * @see routes/private.php:28
 * @route '/lists'
 */
        listsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lists.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    lists.form = listsForm
/**
 * @see routes/private.php:32
 * @route '/shared-lists'
 */
export const sharedLists = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sharedLists.url(options),
    method: 'get',
})

sharedLists.definition = {
    methods: ["get","head"],
    url: '/shared-lists',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/private.php:32
 * @route '/shared-lists'
 */
sharedLists.url = (options?: RouteQueryOptions) => {
    return sharedLists.definition.url + queryParams(options)
}

/**
 * @see routes/private.php:32
 * @route '/shared-lists'
 */
sharedLists.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sharedLists.url(options),
    method: 'get',
})
/**
 * @see routes/private.php:32
 * @route '/shared-lists'
 */
sharedLists.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sharedLists.url(options),
    method: 'head',
})

    /**
 * @see routes/private.php:32
 * @route '/shared-lists'
 */
    const sharedListsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sharedLists.url(options),
        method: 'get',
    })

            /**
 * @see routes/private.php:32
 * @route '/shared-lists'
 */
        sharedListsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sharedLists.url(options),
            method: 'get',
        })
            /**
 * @see routes/private.php:32
 * @route '/shared-lists'
 */
        sharedListsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sharedLists.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    sharedLists.form = sharedListsForm
/**
 * @see routes/private.php:36
 * @route '/shopping-list'
 */
export const shoppingList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shoppingList.url(options),
    method: 'get',
})

shoppingList.definition = {
    methods: ["get","head"],
    url: '/shopping-list',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/private.php:36
 * @route '/shopping-list'
 */
shoppingList.url = (options?: RouteQueryOptions) => {
    return shoppingList.definition.url + queryParams(options)
}

/**
 * @see routes/private.php:36
 * @route '/shopping-list'
 */
shoppingList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shoppingList.url(options),
    method: 'get',
})
/**
 * @see routes/private.php:36
 * @route '/shopping-list'
 */
shoppingList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: shoppingList.url(options),
    method: 'head',
})

    /**
 * @see routes/private.php:36
 * @route '/shopping-list'
 */
    const shoppingListForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: shoppingList.url(options),
        method: 'get',
    })

            /**
 * @see routes/private.php:36
 * @route '/shopping-list'
 */
        shoppingListForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: shoppingList.url(options),
            method: 'get',
        })
            /**
 * @see routes/private.php:36
 * @route '/shopping-list'
 */
        shoppingListForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: shoppingList.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    shoppingList.form = shoppingListForm