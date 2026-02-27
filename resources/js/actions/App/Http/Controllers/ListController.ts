import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
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
* @see \App\Http\Controllers\ListController::sharedListFromCode
 * @see app/Http/Controllers/ListController.php:33
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
 * @see app/Http/Controllers/ListController.php:33
 * @route '/shared-list'
 */
sharedListFromCode.url = (options?: RouteQueryOptions) => {
    return sharedListFromCode.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ListController::sharedListFromCode
 * @see app/Http/Controllers/ListController.php:33
 * @route '/shared-list'
 */
sharedListFromCode.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sharedListFromCode.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ListController::sharedListFromCode
 * @see app/Http/Controllers/ListController.php:33
 * @route '/shared-list'
 */
    const sharedListFromCodeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sharedListFromCode.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ListController::sharedListFromCode
 * @see app/Http/Controllers/ListController.php:33
 * @route '/shared-list'
 */
        sharedListFromCodeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sharedListFromCode.url(options),
            method: 'post',
        })
    
    sharedListFromCode.form = sharedListFromCodeForm
const ListController = { sharedList, sharedListFromCode }

export default ListController