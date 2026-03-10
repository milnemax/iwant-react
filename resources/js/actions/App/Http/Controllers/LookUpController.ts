import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\LookUpController::search
 * @see app/Http/Controllers/LookUpController.php:11
 * @route '/look-up/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/look-up/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LookUpController::search
 * @see app/Http/Controllers/LookUpController.php:11
 * @route '/look-up/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LookUpController::search
 * @see app/Http/Controllers/LookUpController.php:11
 * @route '/look-up/search'
 */
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LookUpController::search
 * @see app/Http/Controllers/LookUpController.php:11
 * @route '/look-up/search'
 */
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LookUpController::search
 * @see app/Http/Controllers/LookUpController.php:11
 * @route '/look-up/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: search.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LookUpController::search
 * @see app/Http/Controllers/LookUpController.php:11
 * @route '/look-up/search'
 */
        searchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LookUpController::search
 * @see app/Http/Controllers/LookUpController.php:11
 * @route '/look-up/search'
 */
        searchForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    search.form = searchForm
const LookUpController = { search }

export default LookUpController