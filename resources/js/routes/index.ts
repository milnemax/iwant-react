import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
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
 * @see routes/web.php:8
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
 * @see routes/web.php:8
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:8
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:8
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:8
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:8
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:8
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
 * @see routes/web.php:12
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
 * @see routes/web.php:12
 * @route '/privacy'
 */
privacy.url = (options?: RouteQueryOptions) => {
    return privacy.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:12
 * @route '/privacy'
 */
privacy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacy.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:12
 * @route '/privacy'
 */
privacy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: privacy.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:12
 * @route '/privacy'
 */
    const privacyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: privacy.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:12
 * @route '/privacy'
 */
        privacyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: privacy.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:12
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
 * @see routes/web.php:16
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
 * @see routes/web.php:16
 * @route '/recipients'
 */
recipients.url = (options?: RouteQueryOptions) => {
    return recipients.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:16
 * @route '/recipients'
 */
recipients.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recipients.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:16
 * @route '/recipients'
 */
recipients.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recipients.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:16
 * @route '/recipients'
 */
    const recipientsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: recipients.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:16
 * @route '/recipients'
 */
        recipientsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recipients.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:16
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
 * @see routes/web.php:20
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
 * @see routes/web.php:20
 * @route '/unsubscribe'
 */
unsubscribe.url = (options?: RouteQueryOptions) => {
    return unsubscribe.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:20
 * @route '/unsubscribe'
 */
unsubscribe.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unsubscribe.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:20
 * @route '/unsubscribe'
 */
unsubscribe.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: unsubscribe.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:20
 * @route '/unsubscribe'
 */
    const unsubscribeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: unsubscribe.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:20
 * @route '/unsubscribe'
 */
        unsubscribeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unsubscribe.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:20
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
 * @see routes/web.php:28
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
 * @see routes/web.php:28
 * @route '/contacts'
 */
contacts.url = (options?: RouteQueryOptions) => {
    return contacts.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:28
 * @route '/contacts'
 */
contacts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contacts.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:28
 * @route '/contacts'
 */
contacts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contacts.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:28
 * @route '/contacts'
 */
    const contactsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contacts.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:28
 * @route '/contacts'
 */
        contactsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contacts.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:28
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
 * @see routes/web.php:32
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
 * @see routes/web.php:32
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:32
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:32
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:32
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:32
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:32
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
 * @see routes/web.php:36
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
 * @see routes/web.php:36
 * @route '/details'
 */
details.url = (options?: RouteQueryOptions) => {
    return details.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:36
 * @route '/details'
 */
details.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: details.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:36
 * @route '/details'
 */
details.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: details.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:36
 * @route '/details'
 */
    const detailsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: details.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:36
 * @route '/details'
 */
        detailsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: details.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:36
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
 * @see routes/web.php:40
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
 * @see routes/web.php:40
 * @route '/lists'
 */
lists.url = (options?: RouteQueryOptions) => {
    return lists.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:40
 * @route '/lists'
 */
lists.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lists.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:40
 * @route '/lists'
 */
lists.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lists.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:40
 * @route '/lists'
 */
    const listsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: lists.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:40
 * @route '/lists'
 */
        listsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lists.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:40
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
 * @see routes/web.php:48
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
 * @see routes/web.php:48
 * @route '/admin'
 */
admin.url = (options?: RouteQueryOptions) => {
    return admin.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:48
 * @route '/admin'
 */
admin.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:48
 * @route '/admin'
 */
admin.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: admin.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:48
 * @route '/admin'
 */
    const adminForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: admin.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:48
 * @route '/admin'
 */
        adminForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: admin.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:48
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