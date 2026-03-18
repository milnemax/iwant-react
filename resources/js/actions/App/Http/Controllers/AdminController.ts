import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AdminController::stats
 * @see app/Http/Controllers/AdminController.php:33
 * @route '/admin'
 */
export const stats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdminController::stats
 * @see app/Http/Controllers/AdminController.php:33
 * @route '/admin'
 */
stats.url = (options?: RouteQueryOptions) => {
    return stats.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::stats
 * @see app/Http/Controllers/AdminController.php:33
 * @route '/admin'
 */
stats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdminController::stats
 * @see app/Http/Controllers/AdminController.php:33
 * @route '/admin'
 */
stats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdminController::stats
 * @see app/Http/Controllers/AdminController.php:33
 * @route '/admin'
 */
    const statsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: stats.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdminController::stats
 * @see app/Http/Controllers/AdminController.php:33
 * @route '/admin'
 */
        statsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stats.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdminController::stats
 * @see app/Http/Controllers/AdminController.php:33
 * @route '/admin'
 */
        statsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stats.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    stats.form = statsForm
/**
* @see \App\Http\Controllers\AdminController::gdpr
 * @see app/Http/Controllers/AdminController.php:18
 * @route '/admin/gdpr'
 */
export const gdpr = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: gdpr.url(options),
    method: 'get',
})

gdpr.definition = {
    methods: ["get","head"],
    url: '/admin/gdpr',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdminController::gdpr
 * @see app/Http/Controllers/AdminController.php:18
 * @route '/admin/gdpr'
 */
gdpr.url = (options?: RouteQueryOptions) => {
    return gdpr.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::gdpr
 * @see app/Http/Controllers/AdminController.php:18
 * @route '/admin/gdpr'
 */
gdpr.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: gdpr.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdminController::gdpr
 * @see app/Http/Controllers/AdminController.php:18
 * @route '/admin/gdpr'
 */
gdpr.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: gdpr.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdminController::gdpr
 * @see app/Http/Controllers/AdminController.php:18
 * @route '/admin/gdpr'
 */
    const gdprForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: gdpr.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdminController::gdpr
 * @see app/Http/Controllers/AdminController.php:18
 * @route '/admin/gdpr'
 */
        gdprForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: gdpr.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdminController::gdpr
 * @see app/Http/Controllers/AdminController.php:18
 * @route '/admin/gdpr'
 */
        gdprForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: gdpr.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    gdpr.form = gdprForm
const AdminController = { stats, gdpr }

export default AdminController