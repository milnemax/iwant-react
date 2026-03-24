import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ListItemController::store
 * @see app/Http/Controllers/ListItemController.php:47
 * @route '/lists/{list}/items'
 */
export const store = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/lists/{list}/items',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ListItemController::store
 * @see app/Http/Controllers/ListItemController.php:47
 * @route '/lists/{list}/items'
 */
store.url = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListItemController::store
 * @see app/Http/Controllers/ListItemController.php:47
 * @route '/lists/{list}/items'
 */
store.post = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ListItemController::store
 * @see app/Http/Controllers/ListItemController.php:47
 * @route '/lists/{list}/items'
 */
    const storeForm = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListItemController::store
 * @see app/Http/Controllers/ListItemController.php:47
 * @route '/lists/{list}/items'
 */
        storeForm.post = (args: { list: number | { id: number } } | [list: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ListItemController::edit
 * @see app/Http/Controllers/ListItemController.php:31
 * @route '/lists/{list}/items/{item}/edit'
 */
export const edit = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/lists/{list}/items/{item}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ListItemController::edit
 * @see app/Http/Controllers/ListItemController.php:31
 * @route '/lists/{list}/items/{item}/edit'
 */
edit.url = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListItemController::edit
 * @see app/Http/Controllers/ListItemController.php:31
 * @route '/lists/{list}/items/{item}/edit'
 */
edit.get = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ListItemController::edit
 * @see app/Http/Controllers/ListItemController.php:31
 * @route '/lists/{list}/items/{item}/edit'
 */
edit.head = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ListItemController::edit
 * @see app/Http/Controllers/ListItemController.php:31
 * @route '/lists/{list}/items/{item}/edit'
 */
    const editForm = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ListItemController::edit
 * @see app/Http/Controllers/ListItemController.php:31
 * @route '/lists/{list}/items/{item}/edit'
 */
        editForm.get = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ListItemController::edit
 * @see app/Http/Controllers/ListItemController.php:31
 * @route '/lists/{list}/items/{item}/edit'
 */
        editForm.head = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\ListItemController::update
 * @see app/Http/Controllers/ListItemController.php:75
 * @route '/lists/{list}/items/{item}'
 */
export const update = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/lists/{list}/items/{item}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ListItemController::update
 * @see app/Http/Controllers/ListItemController.php:75
 * @route '/lists/{list}/items/{item}'
 */
update.url = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListItemController::update
 * @see app/Http/Controllers/ListItemController.php:75
 * @route '/lists/{list}/items/{item}'
 */
update.put = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\ListItemController::update
 * @see app/Http/Controllers/ListItemController.php:75
 * @route '/lists/{list}/items/{item}'
 */
    const updateForm = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListItemController::update
 * @see app/Http/Controllers/ListItemController.php:75
 * @route '/lists/{list}/items/{item}'
 */
        updateForm.put = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ListItemController::destroy
 * @see app/Http/Controllers/ListItemController.php:16
 * @route '/lists/{list}/items/{item}'
 */
export const destroy = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/lists/{list}/items/{item}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ListItemController::destroy
 * @see app/Http/Controllers/ListItemController.php:16
 * @route '/lists/{list}/items/{item}'
 */
destroy.url = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListItemController::destroy
 * @see app/Http/Controllers/ListItemController.php:16
 * @route '/lists/{list}/items/{item}'
 */
destroy.delete = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ListItemController::destroy
 * @see app/Http/Controllers/ListItemController.php:16
 * @route '/lists/{list}/items/{item}'
 */
    const destroyForm = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListItemController::destroy
 * @see app/Http/Controllers/ListItemController.php:16
 * @route '/lists/{list}/items/{item}'
 */
        destroyForm.delete = (args: { list: number | { id: number }, item: number | { id: number } } | [list: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const ListItemController = { store, edit, update, destroy }

export default ListItemController