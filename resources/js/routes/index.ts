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
 * @see routes/web.php:19
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
 * @see routes/web.php:19
 * @route '/recipients'
 */
recipients.url = (options?: RouteQueryOptions) => {
    return recipients.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:19
 * @route '/recipients'
 */
recipients.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recipients.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:19
 * @route '/recipients'
 */
recipients.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recipients.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:19
 * @route '/recipients'
 */
    const recipientsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: recipients.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:19
 * @route '/recipients'
 */
        recipientsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recipients.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:19
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
 * @see routes/web.php:23
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
 * @see routes/web.php:23
 * @route '/unsubscribe'
 */
unsubscribe.url = (options?: RouteQueryOptions) => {
    return unsubscribe.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:23
 * @route '/unsubscribe'
 */
unsubscribe.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unsubscribe.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:23
 * @route '/unsubscribe'
 */
unsubscribe.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: unsubscribe.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:23
 * @route '/unsubscribe'
 */
    const unsubscribeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: unsubscribe.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:23
 * @route '/unsubscribe'
 */
        unsubscribeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unsubscribe.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:23
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
* @see \App\Http\Controllers\SharedListController::sharedList
 * @see app/Http/Controllers/SharedListController.php:35
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
* @see \App\Http\Controllers\SharedListController::sharedList
 * @see app/Http/Controllers/SharedListController.php:35
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
* @see \App\Http\Controllers\SharedListController::sharedList
 * @see app/Http/Controllers/SharedListController.php:35
 * @route '/shared-list/{list}/{code}'
 */
sharedList.get = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sharedList.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SharedListController::sharedList
 * @see app/Http/Controllers/SharedListController.php:35
 * @route '/shared-list/{list}/{code}'
 */
sharedList.head = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sharedList.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SharedListController::sharedList
 * @see app/Http/Controllers/SharedListController.php:35
 * @route '/shared-list/{list}/{code}'
 */
    const sharedListForm = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sharedList.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SharedListController::sharedList
 * @see app/Http/Controllers/SharedListController.php:35
 * @route '/shared-list/{list}/{code}'
 */
        sharedListForm.get = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sharedList.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SharedListController::sharedList
 * @see app/Http/Controllers/SharedListController.php:35
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
* @see \App\Http\Controllers\SharedListController::sharedListClaim
 * @see app/Http/Controllers/SharedListController.php:95
 * @route '/shared-list/{list}/{code}/claim'
 */
export const sharedListClaim = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sharedListClaim.url(args, options),
    method: 'post',
})

sharedListClaim.definition = {
    methods: ["post"],
    url: '/shared-list/{list}/{code}/claim',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SharedListController::sharedListClaim
 * @see app/Http/Controllers/SharedListController.php:95
 * @route '/shared-list/{list}/{code}/claim'
 */
sharedListClaim.url = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions) => {
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

    return sharedListClaim.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SharedListController::sharedListClaim
 * @see app/Http/Controllers/SharedListController.php:95
 * @route '/shared-list/{list}/{code}/claim'
 */
sharedListClaim.post = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sharedListClaim.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SharedListController::sharedListClaim
 * @see app/Http/Controllers/SharedListController.php:95
 * @route '/shared-list/{list}/{code}/claim'
 */
    const sharedListClaimForm = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sharedListClaim.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SharedListController::sharedListClaim
 * @see app/Http/Controllers/SharedListController.php:95
 * @route '/shared-list/{list}/{code}/claim'
 */
        sharedListClaimForm.post = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sharedListClaim.url(args, options),
            method: 'post',
        })
    
    sharedListClaim.form = sharedListClaimForm
/**
* @see \App\Http\Controllers\SharedListController::sharedListOffer
 * @see app/Http/Controllers/SharedListController.php:122
 * @route '/shared-list/{list}/{code}/offer'
 */
export const sharedListOffer = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sharedListOffer.url(args, options),
    method: 'post',
})

sharedListOffer.definition = {
    methods: ["post"],
    url: '/shared-list/{list}/{code}/offer',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SharedListController::sharedListOffer
 * @see app/Http/Controllers/SharedListController.php:122
 * @route '/shared-list/{list}/{code}/offer'
 */
sharedListOffer.url = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions) => {
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

    return sharedListOffer.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SharedListController::sharedListOffer
 * @see app/Http/Controllers/SharedListController.php:122
 * @route '/shared-list/{list}/{code}/offer'
 */
sharedListOffer.post = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sharedListOffer.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SharedListController::sharedListOffer
 * @see app/Http/Controllers/SharedListController.php:122
 * @route '/shared-list/{list}/{code}/offer'
 */
    const sharedListOfferForm = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sharedListOffer.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SharedListController::sharedListOffer
 * @see app/Http/Controllers/SharedListController.php:122
 * @route '/shared-list/{list}/{code}/offer'
 */
        sharedListOfferForm.post = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sharedListOffer.url(args, options),
            method: 'post',
        })
    
    sharedListOffer.form = sharedListOfferForm
/**
* @see \App\Http\Controllers\SharedListController::verifySharedListForm
 * @see app/Http/Controllers/SharedListController.php:80
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
* @see \App\Http\Controllers\SharedListController::verifySharedListForm
 * @see app/Http/Controllers/SharedListController.php:80
 * @route '/shared-list'
 */
verifySharedListForm.url = (options?: RouteQueryOptions) => {
    return verifySharedListForm.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SharedListController::verifySharedListForm
 * @see app/Http/Controllers/SharedListController.php:80
 * @route '/shared-list'
 */
verifySharedListForm.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifySharedListForm.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SharedListController::verifySharedListForm
 * @see app/Http/Controllers/SharedListController.php:80
 * @route '/shared-list'
 */
    const verifySharedListFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: verifySharedListForm.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SharedListController::verifySharedListForm
 * @see app/Http/Controllers/SharedListController.php:80
 * @route '/shared-list'
 */
        verifySharedListFormForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: verifySharedListForm.url(options),
            method: 'post',
        })
    
    verifySharedListForm.form = verifySharedListFormForm
/**
* @see \App\Http\Controllers\AdminController::admin
 * @see app/Http/Controllers/AdminController.php:33
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
* @see \App\Http\Controllers\AdminController::admin
 * @see app/Http/Controllers/AdminController.php:33
 * @route '/admin'
 */
admin.url = (options?: RouteQueryOptions) => {
    return admin.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::admin
 * @see app/Http/Controllers/AdminController.php:33
 * @route '/admin'
 */
admin.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdminController::admin
 * @see app/Http/Controllers/AdminController.php:33
 * @route '/admin'
 */
admin.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: admin.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdminController::admin
 * @see app/Http/Controllers/AdminController.php:33
 * @route '/admin'
 */
    const adminForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: admin.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdminController::admin
 * @see app/Http/Controllers/AdminController.php:33
 * @route '/admin'
 */
        adminForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: admin.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdminController::admin
 * @see app/Http/Controllers/AdminController.php:33
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
* @see \App\Http\Controllers\AdminController::adminGdpr
 * @see app/Http/Controllers/AdminController.php:18
 * @route '/admin/gdpr'
 */
export const adminGdpr = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminGdpr.url(options),
    method: 'get',
})

adminGdpr.definition = {
    methods: ["get","head"],
    url: '/admin/gdpr',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdminController::adminGdpr
 * @see app/Http/Controllers/AdminController.php:18
 * @route '/admin/gdpr'
 */
adminGdpr.url = (options?: RouteQueryOptions) => {
    return adminGdpr.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::adminGdpr
 * @see app/Http/Controllers/AdminController.php:18
 * @route '/admin/gdpr'
 */
adminGdpr.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminGdpr.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdminController::adminGdpr
 * @see app/Http/Controllers/AdminController.php:18
 * @route '/admin/gdpr'
 */
adminGdpr.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: adminGdpr.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdminController::adminGdpr
 * @see app/Http/Controllers/AdminController.php:18
 * @route '/admin/gdpr'
 */
    const adminGdprForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: adminGdpr.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdminController::adminGdpr
 * @see app/Http/Controllers/AdminController.php:18
 * @route '/admin/gdpr'
 */
        adminGdprForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: adminGdpr.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdminController::adminGdpr
 * @see app/Http/Controllers/AdminController.php:18
 * @route '/admin/gdpr'
 */
        adminGdprForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: adminGdpr.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    adminGdpr.form = adminGdprForm
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
* @see \App\Http\Controllers\ContactController::contactDestroy
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contacts/{contact}'
 */
export const contactDestroy = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: contactDestroy.url(args, options),
    method: 'delete',
})

contactDestroy.definition = {
    methods: ["delete"],
    url: '/contacts/{contact}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ContactController::contactDestroy
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contacts/{contact}'
 */
contactDestroy.url = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return contactDestroy.definition.url
            .replace('{contact}', parsedArgs.contact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::contactDestroy
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contacts/{contact}'
 */
contactDestroy.delete = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: contactDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ContactController::contactDestroy
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contacts/{contact}'
 */
    const contactDestroyForm = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: contactDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContactController::contactDestroy
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contacts/{contact}'
 */
        contactDestroyForm.delete = (args: { contact: number | { id: number } } | [contact: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: contactDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    contactDestroy.form = contactDestroyForm
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
 * @see routes/private.php:31
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
 * @see routes/private.php:31
 * @route '/details'
 */
details.url = (options?: RouteQueryOptions) => {
    return details.definition.url + queryParams(options)
}

/**
 * @see routes/private.php:31
 * @route '/details'
 */
details.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: details.url(options),
    method: 'get',
})
/**
 * @see routes/private.php:31
 * @route '/details'
 */
details.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: details.url(options),
    method: 'head',
})

    /**
 * @see routes/private.php:31
 * @route '/details'
 */
    const detailsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: details.url(options),
        method: 'get',
    })

            /**
 * @see routes/private.php:31
 * @route '/details'
 */
        detailsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: details.url(options),
            method: 'get',
        })
            /**
 * @see routes/private.php:31
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
* @see \App\Http\Controllers\ListController::lists
 * @see app/Http/Controllers/ListController.php:40
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
* @see \App\Http\Controllers\ListController::lists
 * @see app/Http/Controllers/ListController.php:40
 * @route '/lists'
 */
lists.url = (options?: RouteQueryOptions) => {
    return lists.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::lists
 * @see app/Http/Controllers/ListController.php:40
 * @route '/lists'
 */
lists.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lists.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ListController::lists
 * @see app/Http/Controllers/ListController.php:40
 * @route '/lists'
 */
lists.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lists.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ListController::lists
 * @see app/Http/Controllers/ListController.php:40
 * @route '/lists'
 */
    const listsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: lists.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ListController::lists
 * @see app/Http/Controllers/ListController.php:40
 * @route '/lists'
 */
        listsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lists.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ListController::lists
 * @see app/Http/Controllers/ListController.php:40
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
* @see \App\Http\Controllers\ListController::listsStore
 * @see app/Http/Controllers/ListController.php:109
 * @route '/lists'
 */
export const listsStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: listsStore.url(options),
    method: 'post',
})

listsStore.definition = {
    methods: ["post"],
    url: '/lists',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ListController::listsStore
 * @see app/Http/Controllers/ListController.php:109
 * @route '/lists'
 */
listsStore.url = (options?: RouteQueryOptions) => {
    return listsStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::listsStore
 * @see app/Http/Controllers/ListController.php:109
 * @route '/lists'
 */
listsStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: listsStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ListController::listsStore
 * @see app/Http/Controllers/ListController.php:109
 * @route '/lists'
 */
    const listsStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: listsStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListController::listsStore
 * @see app/Http/Controllers/ListController.php:109
 * @route '/lists'
 */
        listsStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: listsStore.url(options),
            method: 'post',
        })
    
    listsStore.form = listsStoreForm
/**
* @see \App\Http\Controllers\ListController::listShow
 * @see app/Http/Controllers/ListController.php:65
 * @route '/lists/{list}'
 */
export const listShow = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: listShow.url(args, options),
    method: 'get',
})

listShow.definition = {
    methods: ["get","head"],
    url: '/lists/{list}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ListController::listShow
 * @see app/Http/Controllers/ListController.php:65
 * @route '/lists/{list}'
 */
listShow.url = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { list: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { list: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    list: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        list: typeof args.list === 'object'
                ? args.list.id
                : args.list,
                }

    return listShow.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::listShow
 * @see app/Http/Controllers/ListController.php:65
 * @route '/lists/{list}'
 */
listShow.get = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: listShow.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ListController::listShow
 * @see app/Http/Controllers/ListController.php:65
 * @route '/lists/{list}'
 */
listShow.head = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: listShow.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ListController::listShow
 * @see app/Http/Controllers/ListController.php:65
 * @route '/lists/{list}'
 */
    const listShowForm = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: listShow.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ListController::listShow
 * @see app/Http/Controllers/ListController.php:65
 * @route '/lists/{list}'
 */
        listShowForm.get = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: listShow.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ListController::listShow
 * @see app/Http/Controllers/ListController.php:65
 * @route '/lists/{list}'
 */
        listShowForm.head = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: listShow.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    listShow.form = listShowForm
/**
* @see \App\Http\Controllers\ListController::listUpdate
 * @see app/Http/Controllers/ListController.php:129
 * @route '/lists/{list}'
 */
export const listUpdate = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: listUpdate.url(args, options),
    method: 'put',
})

listUpdate.definition = {
    methods: ["put"],
    url: '/lists/{list}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ListController::listUpdate
 * @see app/Http/Controllers/ListController.php:129
 * @route '/lists/{list}'
 */
listUpdate.url = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { list: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { list: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    list: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        list: typeof args.list === 'object'
                ? args.list.id
                : args.list,
                }

    return listUpdate.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::listUpdate
 * @see app/Http/Controllers/ListController.php:129
 * @route '/lists/{list}'
 */
listUpdate.put = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: listUpdate.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\ListController::listUpdate
 * @see app/Http/Controllers/ListController.php:129
 * @route '/lists/{list}'
 */
    const listUpdateForm = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: listUpdate.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListController::listUpdate
 * @see app/Http/Controllers/ListController.php:129
 * @route '/lists/{list}'
 */
        listUpdateForm.put = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: listUpdate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    listUpdate.form = listUpdateForm
/**
* @see \App\Http\Controllers\ListController::listShare
 * @see app/Http/Controllers/ListController.php:184
 * @route '/lists/{list}/share'
 */
export const listShare = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: listShare.url(args, options),
    method: 'put',
})

listShare.definition = {
    methods: ["put"],
    url: '/lists/{list}/share',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ListController::listShare
 * @see app/Http/Controllers/ListController.php:184
 * @route '/lists/{list}/share'
 */
listShare.url = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { list: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { list: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    list: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        list: typeof args.list === 'object'
                ? args.list.id
                : args.list,
                }

    return listShare.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::listShare
 * @see app/Http/Controllers/ListController.php:184
 * @route '/lists/{list}/share'
 */
listShare.put = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: listShare.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\ListController::listShare
 * @see app/Http/Controllers/ListController.php:184
 * @route '/lists/{list}/share'
 */
    const listShareForm = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: listShare.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListController::listShare
 * @see app/Http/Controllers/ListController.php:184
 * @route '/lists/{list}/share'
 */
        listShareForm.put = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: listShare.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    listShare.form = listShareForm
/**
* @see \App\Http\Controllers\ListController::listDestroy
 * @see app/Http/Controllers/ListController.php:23
 * @route '/lists/{list}'
 */
export const listDestroy = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: listDestroy.url(args, options),
    method: 'delete',
})

listDestroy.definition = {
    methods: ["delete"],
    url: '/lists/{list}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ListController::listDestroy
 * @see app/Http/Controllers/ListController.php:23
 * @route '/lists/{list}'
 */
listDestroy.url = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { list: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { list: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    list: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        list: typeof args.list === 'object'
                ? args.list.id
                : args.list,
                }

    return listDestroy.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::listDestroy
 * @see app/Http/Controllers/ListController.php:23
 * @route '/lists/{list}'
 */
listDestroy.delete = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: listDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ListController::listDestroy
 * @see app/Http/Controllers/ListController.php:23
 * @route '/lists/{list}'
 */
    const listDestroyForm = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: listDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListController::listDestroy
 * @see app/Http/Controllers/ListController.php:23
 * @route '/lists/{list}'
 */
        listDestroyForm.delete = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: listDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    listDestroy.form = listDestroyForm
/**
* @see \App\Http\Controllers\ListItemController::listItemsStore
 * @see app/Http/Controllers/ListItemController.php:45
 * @route '/lists/{list}/items'
 */
export const listItemsStore = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: listItemsStore.url(args, options),
    method: 'post',
})

listItemsStore.definition = {
    methods: ["post"],
    url: '/lists/{list}/items',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ListItemController::listItemsStore
 * @see app/Http/Controllers/ListItemController.php:45
 * @route '/lists/{list}/items'
 */
listItemsStore.url = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { list: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { list: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    list: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        list: typeof args.list === 'object'
                ? args.list.id
                : args.list,
                }

    return listItemsStore.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListItemController::listItemsStore
 * @see app/Http/Controllers/ListItemController.php:45
 * @route '/lists/{list}/items'
 */
listItemsStore.post = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: listItemsStore.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ListItemController::listItemsStore
 * @see app/Http/Controllers/ListItemController.php:45
 * @route '/lists/{list}/items'
 */
    const listItemsStoreForm = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: listItemsStore.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListItemController::listItemsStore
 * @see app/Http/Controllers/ListItemController.php:45
 * @route '/lists/{list}/items'
 */
        listItemsStoreForm.post = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: listItemsStore.url(args, options),
            method: 'post',
        })
    
    listItemsStore.form = listItemsStoreForm
/**
* @see \App\Http\Controllers\ListItemController::listItemEdit
 * @see app/Http/Controllers/ListItemController.php:31
 * @route '/lists/{list}/items/{item}/edit'
 */
export const listItemEdit = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: listItemEdit.url(args, options),
    method: 'get',
})

listItemEdit.definition = {
    methods: ["get","head"],
    url: '/lists/{list}/items/{item}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ListItemController::listItemEdit
 * @see app/Http/Controllers/ListItemController.php:31
 * @route '/lists/{list}/items/{item}/edit'
 */
listItemEdit.url = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    list: args[0],
                    item: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        list: typeof args.list === 'object'
                ? args.list.id
                : args.list,
                                item: typeof args.item === 'object'
                ? args.item.id
                : args.item,
                }

    return listItemEdit.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListItemController::listItemEdit
 * @see app/Http/Controllers/ListItemController.php:31
 * @route '/lists/{list}/items/{item}/edit'
 */
listItemEdit.get = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: listItemEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ListItemController::listItemEdit
 * @see app/Http/Controllers/ListItemController.php:31
 * @route '/lists/{list}/items/{item}/edit'
 */
listItemEdit.head = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: listItemEdit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ListItemController::listItemEdit
 * @see app/Http/Controllers/ListItemController.php:31
 * @route '/lists/{list}/items/{item}/edit'
 */
    const listItemEditForm = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: listItemEdit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ListItemController::listItemEdit
 * @see app/Http/Controllers/ListItemController.php:31
 * @route '/lists/{list}/items/{item}/edit'
 */
        listItemEditForm.get = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: listItemEdit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ListItemController::listItemEdit
 * @see app/Http/Controllers/ListItemController.php:31
 * @route '/lists/{list}/items/{item}/edit'
 */
        listItemEditForm.head = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: listItemEdit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    listItemEdit.form = listItemEditForm
/**
* @see \App\Http\Controllers\ListItemController::listItemDestroy
 * @see app/Http/Controllers/ListItemController.php:16
 * @route '/lists/{list}/items/{item}'
 */
export const listItemDestroy = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: listItemDestroy.url(args, options),
    method: 'delete',
})

listItemDestroy.definition = {
    methods: ["delete"],
    url: '/lists/{list}/items/{item}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ListItemController::listItemDestroy
 * @see app/Http/Controllers/ListItemController.php:16
 * @route '/lists/{list}/items/{item}'
 */
listItemDestroy.url = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    list: args[0],
                    item: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        list: typeof args.list === 'object'
                ? args.list.id
                : args.list,
                                item: typeof args.item === 'object'
                ? args.item.id
                : args.item,
                }

    return listItemDestroy.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListItemController::listItemDestroy
 * @see app/Http/Controllers/ListItemController.php:16
 * @route '/lists/{list}/items/{item}'
 */
listItemDestroy.delete = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: listItemDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ListItemController::listItemDestroy
 * @see app/Http/Controllers/ListItemController.php:16
 * @route '/lists/{list}/items/{item}'
 */
    const listItemDestroyForm = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: listItemDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListItemController::listItemDestroy
 * @see app/Http/Controllers/ListItemController.php:16
 * @route '/lists/{list}/items/{item}'
 */
        listItemDestroyForm.delete = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: listItemDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    listItemDestroy.form = listItemDestroyForm
/**
* @see \App\Http\Controllers\LookUpController::lookUpSearch
 * @see app/Http/Controllers/LookUpController.php:11
 * @route '/look-up/search'
 */
export const lookUpSearch = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lookUpSearch.url(options),
    method: 'get',
})

lookUpSearch.definition = {
    methods: ["get","head"],
    url: '/look-up/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LookUpController::lookUpSearch
 * @see app/Http/Controllers/LookUpController.php:11
 * @route '/look-up/search'
 */
lookUpSearch.url = (options?: RouteQueryOptions) => {
    return lookUpSearch.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LookUpController::lookUpSearch
 * @see app/Http/Controllers/LookUpController.php:11
 * @route '/look-up/search'
 */
lookUpSearch.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lookUpSearch.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LookUpController::lookUpSearch
 * @see app/Http/Controllers/LookUpController.php:11
 * @route '/look-up/search'
 */
lookUpSearch.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lookUpSearch.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LookUpController::lookUpSearch
 * @see app/Http/Controllers/LookUpController.php:11
 * @route '/look-up/search'
 */
    const lookUpSearchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: lookUpSearch.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LookUpController::lookUpSearch
 * @see app/Http/Controllers/LookUpController.php:11
 * @route '/look-up/search'
 */
        lookUpSearchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lookUpSearch.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LookUpController::lookUpSearch
 * @see app/Http/Controllers/LookUpController.php:11
 * @route '/look-up/search'
 */
        lookUpSearchForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lookUpSearch.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    lookUpSearch.form = lookUpSearchForm
/**
* @see \App\Http\Controllers\SharedListController::sharedLists
 * @see app/Http/Controllers/SharedListController.php:21
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
* @see \App\Http\Controllers\SharedListController::sharedLists
 * @see app/Http/Controllers/SharedListController.php:21
 * @route '/shared-lists'
 */
sharedLists.url = (options?: RouteQueryOptions) => {
    return sharedLists.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SharedListController::sharedLists
 * @see app/Http/Controllers/SharedListController.php:21
 * @route '/shared-lists'
 */
sharedLists.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sharedLists.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SharedListController::sharedLists
 * @see app/Http/Controllers/SharedListController.php:21
 * @route '/shared-lists'
 */
sharedLists.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sharedLists.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SharedListController::sharedLists
 * @see app/Http/Controllers/SharedListController.php:21
 * @route '/shared-lists'
 */
    const sharedListsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sharedLists.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SharedListController::sharedLists
 * @see app/Http/Controllers/SharedListController.php:21
 * @route '/shared-lists'
 */
        sharedListsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sharedLists.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SharedListController::sharedLists
 * @see app/Http/Controllers/SharedListController.php:21
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
* @see \App\Http\Controllers\ShoppingListController::shoppingList
 * @see app/Http/Controllers/ShoppingListController.php:37
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
* @see \App\Http\Controllers\ShoppingListController::shoppingList
 * @see app/Http/Controllers/ShoppingListController.php:37
 * @route '/shopping-list'
 */
shoppingList.url = (options?: RouteQueryOptions) => {
    return shoppingList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShoppingListController::shoppingList
 * @see app/Http/Controllers/ShoppingListController.php:37
 * @route '/shopping-list'
 */
shoppingList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shoppingList.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ShoppingListController::shoppingList
 * @see app/Http/Controllers/ShoppingListController.php:37
 * @route '/shopping-list'
 */
shoppingList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: shoppingList.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ShoppingListController::shoppingList
 * @see app/Http/Controllers/ShoppingListController.php:37
 * @route '/shopping-list'
 */
    const shoppingListForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: shoppingList.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ShoppingListController::shoppingList
 * @see app/Http/Controllers/ShoppingListController.php:37
 * @route '/shopping-list'
 */
        shoppingListForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: shoppingList.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ShoppingListController::shoppingList
 * @see app/Http/Controllers/ShoppingListController.php:37
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
/**
* @see \App\Http\Controllers\ShoppingListController::shoppingListMarkBought
 * @see app/Http/Controllers/ShoppingListController.php:14
 * @route '/shopping-list/{item}/bought'
 */
export const shoppingListMarkBought = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: shoppingListMarkBought.url(args, options),
    method: 'post',
})

shoppingListMarkBought.definition = {
    methods: ["post"],
    url: '/shopping-list/{item}/bought',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ShoppingListController::shoppingListMarkBought
 * @see app/Http/Controllers/ShoppingListController.php:14
 * @route '/shopping-list/{item}/bought'
 */
shoppingListMarkBought.url = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { item: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { item: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    item: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        item: typeof args.item === 'object'
                ? args.item.id
                : args.item,
                }

    return shoppingListMarkBought.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShoppingListController::shoppingListMarkBought
 * @see app/Http/Controllers/ShoppingListController.php:14
 * @route '/shopping-list/{item}/bought'
 */
shoppingListMarkBought.post = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: shoppingListMarkBought.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ShoppingListController::shoppingListMarkBought
 * @see app/Http/Controllers/ShoppingListController.php:14
 * @route '/shopping-list/{item}/bought'
 */
    const shoppingListMarkBoughtForm = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: shoppingListMarkBought.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ShoppingListController::shoppingListMarkBought
 * @see app/Http/Controllers/ShoppingListController.php:14
 * @route '/shopping-list/{item}/bought'
 */
        shoppingListMarkBoughtForm.post = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: shoppingListMarkBought.url(args, options),
            method: 'post',
        })
    
    shoppingListMarkBought.form = shoppingListMarkBoughtForm