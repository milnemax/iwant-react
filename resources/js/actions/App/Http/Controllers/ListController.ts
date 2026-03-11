import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ListController::sharedList
 * @see app/Http/Controllers/ListController.php:154
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
 * @see app/Http/Controllers/ListController.php:154
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
 * @see app/Http/Controllers/ListController.php:154
 * @route '/shared-list/{list}/{code}'
 */
sharedList.get = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sharedList.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ListController::sharedList
 * @see app/Http/Controllers/ListController.php:154
 * @route '/shared-list/{list}/{code}'
 */
sharedList.head = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sharedList.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ListController::sharedList
 * @see app/Http/Controllers/ListController.php:154
 * @route '/shared-list/{list}/{code}'
 */
    const sharedListForm = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sharedList.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ListController::sharedList
 * @see app/Http/Controllers/ListController.php:154
 * @route '/shared-list/{list}/{code}'
 */
        sharedListForm.get = (args: { list: string | number, code: string | number } | [list: string | number, code: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sharedList.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ListController::sharedList
 * @see app/Http/Controllers/ListController.php:154
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
* @see \App\Http\Controllers\ListController::sharedListFromCode
 * @see app/Http/Controllers/ListController.php:174
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
* @see \App\Http\Controllers\ListController::sharedListFromCode
 * @see app/Http/Controllers/ListController.php:174
 * @route '/shared-list'
 */
sharedListFromCode.url = (options?: RouteQueryOptions) => {
    return sharedListFromCode.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::sharedListFromCode
 * @see app/Http/Controllers/ListController.php:174
 * @route '/shared-list'
 */
sharedListFromCode.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sharedListFromCode.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ListController::sharedListFromCode
 * @see app/Http/Controllers/ListController.php:174
 * @route '/shared-list'
 */
    const sharedListFromCodeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sharedListFromCode.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListController::sharedListFromCode
 * @see app/Http/Controllers/ListController.php:174
 * @route '/shared-list'
 */
        sharedListFromCodeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sharedListFromCode.url(options),
            method: 'post',
        })
    
    sharedListFromCode.form = sharedListFromCodeForm
/**
* @see \App\Http\Controllers\ListController::index
 * @see app/Http/Controllers/ListController.php:40
 * @route '/lists'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/lists',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ListController::index
 * @see app/Http/Controllers/ListController.php:40
 * @route '/lists'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::index
 * @see app/Http/Controllers/ListController.php:40
 * @route '/lists'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ListController::index
 * @see app/Http/Controllers/ListController.php:40
 * @route '/lists'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ListController::index
 * @see app/Http/Controllers/ListController.php:40
 * @route '/lists'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ListController::index
 * @see app/Http/Controllers/ListController.php:40
 * @route '/lists'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ListController::index
 * @see app/Http/Controllers/ListController.php:40
 * @route '/lists'
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
/**
* @see \App\Http\Controllers\ListController::store
 * @see app/Http/Controllers/ListController.php:109
 * @route '/lists'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/lists',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ListController::store
 * @see app/Http/Controllers/ListController.php:109
 * @route '/lists'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::store
 * @see app/Http/Controllers/ListController.php:109
 * @route '/lists'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ListController::store
 * @see app/Http/Controllers/ListController.php:109
 * @route '/lists'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListController::store
 * @see app/Http/Controllers/ListController.php:109
 * @route '/lists'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ListController::show
 * @see app/Http/Controllers/ListController.php:65
 * @route '/lists/{list}'
 */
export const show = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/lists/{list}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ListController::show
 * @see app/Http/Controllers/ListController.php:65
 * @route '/lists/{list}'
 */
show.url = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::show
 * @see app/Http/Controllers/ListController.php:65
 * @route '/lists/{list}'
 */
show.get = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ListController::show
 * @see app/Http/Controllers/ListController.php:65
 * @route '/lists/{list}'
 */
show.head = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ListController::show
 * @see app/Http/Controllers/ListController.php:65
 * @route '/lists/{list}'
 */
    const showForm = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ListController::show
 * @see app/Http/Controllers/ListController.php:65
 * @route '/lists/{list}'
 */
        showForm.get = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ListController::show
 * @see app/Http/Controllers/ListController.php:65
 * @route '/lists/{list}'
 */
        showForm.head = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\ListController::update
 * @see app/Http/Controllers/ListController.php:129
 * @route '/lists/{list}'
 */
export const update = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/lists/{list}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ListController::update
 * @see app/Http/Controllers/ListController.php:129
 * @route '/lists/{list}'
 */
update.url = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::update
 * @see app/Http/Controllers/ListController.php:129
 * @route '/lists/{list}'
 */
update.put = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\ListController::update
 * @see app/Http/Controllers/ListController.php:129
 * @route '/lists/{list}'
 */
    const updateForm = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListController::update
 * @see app/Http/Controllers/ListController.php:129
 * @route '/lists/{list}'
 */
        updateForm.put = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\ListController::share
 * @see app/Http/Controllers/ListController.php:221
 * @route '/lists/{list}/share'
 */
export const share = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: share.url(args, options),
    method: 'put',
})

share.definition = {
    methods: ["put"],
    url: '/lists/{list}/share',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ListController::share
 * @see app/Http/Controllers/ListController.php:221
 * @route '/lists/{list}/share'
 */
share.url = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return share.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::share
 * @see app/Http/Controllers/ListController.php:221
 * @route '/lists/{list}/share'
 */
share.put = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: share.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\ListController::share
 * @see app/Http/Controllers/ListController.php:221
 * @route '/lists/{list}/share'
 */
    const shareForm = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: share.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListController::share
 * @see app/Http/Controllers/ListController.php:221
 * @route '/lists/{list}/share'
 */
        shareForm.put = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: share.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    share.form = shareForm
/**
* @see \App\Http\Controllers\ListController::destroy
 * @see app/Http/Controllers/ListController.php:23
 * @route '/lists/{list}'
 */
export const destroy = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/lists/{list}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ListController::destroy
 * @see app/Http/Controllers/ListController.php:23
 * @route '/lists/{list}'
 */
destroy.url = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::destroy
 * @see app/Http/Controllers/ListController.php:23
 * @route '/lists/{list}'
 */
destroy.delete = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ListController::destroy
 * @see app/Http/Controllers/ListController.php:23
 * @route '/lists/{list}'
 */
    const destroyForm = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListController::destroy
 * @see app/Http/Controllers/ListController.php:23
 * @route '/lists/{list}'
 */
        destroyForm.delete = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const ListController = { sharedList, sharedListFromCode, index, store, show, update, share, destroy }

export default ListController