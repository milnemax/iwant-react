import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ShoppingListController::show
 * @see app/Http/Controllers/ShoppingListController.php:37
 * @route '/shopping-list'
 */
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/shopping-list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShoppingListController::show
 * @see app/Http/Controllers/ShoppingListController.php:37
 * @route '/shopping-list'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShoppingListController::show
 * @see app/Http/Controllers/ShoppingListController.php:37
 * @route '/shopping-list'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ShoppingListController::show
 * @see app/Http/Controllers/ShoppingListController.php:37
 * @route '/shopping-list'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ShoppingListController::show
 * @see app/Http/Controllers/ShoppingListController.php:37
 * @route '/shopping-list'
 */
    const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ShoppingListController::show
 * @see app/Http/Controllers/ShoppingListController.php:37
 * @route '/shopping-list'
 */
        showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ShoppingListController::show
 * @see app/Http/Controllers/ShoppingListController.php:37
 * @route '/shopping-list'
 */
        showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\ShoppingListController::markAsBought
 * @see app/Http/Controllers/ShoppingListController.php:14
 * @route '/shopping-list/{item}/bought'
 */
export const markAsBought = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsBought.url(args, options),
    method: 'post',
})

markAsBought.definition = {
    methods: ["post"],
    url: '/shopping-list/{item}/bought',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ShoppingListController::markAsBought
 * @see app/Http/Controllers/ShoppingListController.php:14
 * @route '/shopping-list/{item}/bought'
 */
markAsBought.url = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return markAsBought.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShoppingListController::markAsBought
 * @see app/Http/Controllers/ShoppingListController.php:14
 * @route '/shopping-list/{item}/bought'
 */
markAsBought.post = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsBought.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ShoppingListController::markAsBought
 * @see app/Http/Controllers/ShoppingListController.php:14
 * @route '/shopping-list/{item}/bought'
 */
    const markAsBoughtForm = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markAsBought.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ShoppingListController::markAsBought
 * @see app/Http/Controllers/ShoppingListController.php:14
 * @route '/shopping-list/{item}/bought'
 */
        markAsBoughtForm.post = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markAsBought.url(args, options),
            method: 'post',
        })
    
    markAsBought.form = markAsBoughtForm
const ShoppingListController = { show, markAsBought }

export default ShoppingListController