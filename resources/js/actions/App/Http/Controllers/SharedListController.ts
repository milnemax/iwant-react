import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
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
* @see \App\Http\Controllers\SharedListController::claim
 * @see app/Http/Controllers/SharedListController.php:95
 * @route '/shared-list/{list}/{code}/claim'
 */
export const claim = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: claim.url(args, options),
    method: 'post',
})

claim.definition = {
    methods: ["post"],
    url: '/shared-list/{list}/{code}/claim',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SharedListController::claim
 * @see app/Http/Controllers/SharedListController.php:95
 * @route '/shared-list/{list}/{code}/claim'
 */
claim.url = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions) => {
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

    return claim.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SharedListController::claim
 * @see app/Http/Controllers/SharedListController.php:95
 * @route '/shared-list/{list}/{code}/claim'
 */
claim.post = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: claim.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SharedListController::claim
 * @see app/Http/Controllers/SharedListController.php:95
 * @route '/shared-list/{list}/{code}/claim'
 */
    const claimForm = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: claim.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SharedListController::claim
 * @see app/Http/Controllers/SharedListController.php:95
 * @route '/shared-list/{list}/{code}/claim'
 */
        claimForm.post = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: claim.url(args, options),
            method: 'post',
        })
    
    claim.form = claimForm
/**
* @see \App\Http\Controllers\SharedListController::offer
 * @see app/Http/Controllers/SharedListController.php:122
 * @route '/shared-list/{list}/{code}/offer'
 */
export const offer = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: offer.url(args, options),
    method: 'post',
})

offer.definition = {
    methods: ["post"],
    url: '/shared-list/{list}/{code}/offer',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SharedListController::offer
 * @see app/Http/Controllers/SharedListController.php:122
 * @route '/shared-list/{list}/{code}/offer'
 */
offer.url = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions) => {
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

    return offer.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SharedListController::offer
 * @see app/Http/Controllers/SharedListController.php:122
 * @route '/shared-list/{list}/{code}/offer'
 */
offer.post = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: offer.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SharedListController::offer
 * @see app/Http/Controllers/SharedListController.php:122
 * @route '/shared-list/{list}/{code}/offer'
 */
    const offerForm = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: offer.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SharedListController::offer
 * @see app/Http/Controllers/SharedListController.php:122
 * @route '/shared-list/{list}/{code}/offer'
 */
        offerForm.post = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: offer.url(args, options),
            method: 'post',
        })
    
    offer.form = offerForm
/**
* @see \App\Http\Controllers\SharedListController::sharedListFromCode
 * @see app/Http/Controllers/SharedListController.php:80
 * @route '/shared-list'
 */
export const sharedListFromCode = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sharedListFromCode.url(options),
    method: 'post',
})

sharedListFromCode.definition = {
    methods: ["post"],
    url: '/shared-list',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SharedListController::sharedListFromCode
 * @see app/Http/Controllers/SharedListController.php:80
 * @route '/shared-list'
 */
sharedListFromCode.url = (options?: RouteQueryOptions) => {
    return sharedListFromCode.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SharedListController::sharedListFromCode
 * @see app/Http/Controllers/SharedListController.php:80
 * @route '/shared-list'
 */
sharedListFromCode.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sharedListFromCode.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SharedListController::sharedListFromCode
 * @see app/Http/Controllers/SharedListController.php:80
 * @route '/shared-list'
 */
    const sharedListFromCodeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sharedListFromCode.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SharedListController::sharedListFromCode
 * @see app/Http/Controllers/SharedListController.php:80
 * @route '/shared-list'
 */
        sharedListFromCodeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sharedListFromCode.url(options),
            method: 'post',
        })
    
    sharedListFromCode.form = sharedListFromCodeForm
/**
* @see \App\Http\Controllers\SharedListController::index
 * @see app/Http/Controllers/SharedListController.php:21
 * @route '/shared-lists'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/shared-lists',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SharedListController::index
 * @see app/Http/Controllers/SharedListController.php:21
 * @route '/shared-lists'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SharedListController::index
 * @see app/Http/Controllers/SharedListController.php:21
 * @route '/shared-lists'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SharedListController::index
 * @see app/Http/Controllers/SharedListController.php:21
 * @route '/shared-lists'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SharedListController::index
 * @see app/Http/Controllers/SharedListController.php:21
 * @route '/shared-lists'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SharedListController::index
 * @see app/Http/Controllers/SharedListController.php:21
 * @route '/shared-lists'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SharedListController::index
 * @see app/Http/Controllers/SharedListController.php:21
 * @route '/shared-lists'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const SharedListController = { sharedList, claim, offer, sharedListFromCode, index }

export default SharedListController