import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:94
 * @route '/details'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/details',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:94
 * @route '/details'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:94
 * @route '/details'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:94
 * @route '/details'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:94
 * @route '/details'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:94
 * @route '/details'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:94
 * @route '/details'
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
* @see \App\Http\Controllers\UserController::update
 * @see app/Http/Controllers/UserController.php:108
 * @route '/details'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/details',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\UserController::update
 * @see app/Http/Controllers/UserController.php:108
 * @route '/details'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::update
 * @see app/Http/Controllers/UserController.php:108
 * @route '/details'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\UserController::update
 * @see app/Http/Controllers/UserController.php:108
 * @route '/details'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserController::update
 * @see app/Http/Controllers/UserController.php:108
 * @route '/details'
 */
        updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\UserController::closeAccount
 * @see app/Http/Controllers/UserController.php:21
 * @route '/details/close-account'
 */
export const closeAccount = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: closeAccount.url(options),
    method: 'delete',
})

closeAccount.definition = {
    methods: ["delete"],
    url: '/details/close-account',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\UserController::closeAccount
 * @see app/Http/Controllers/UserController.php:21
 * @route '/details/close-account'
 */
closeAccount.url = (options?: RouteQueryOptions) => {
    return closeAccount.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::closeAccount
 * @see app/Http/Controllers/UserController.php:21
 * @route '/details/close-account'
 */
closeAccount.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: closeAccount.url(options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\UserController::closeAccount
 * @see app/Http/Controllers/UserController.php:21
 * @route '/details/close-account'
 */
    const closeAccountForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: closeAccount.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserController::closeAccount
 * @see app/Http/Controllers/UserController.php:21
 * @route '/details/close-account'
 */
        closeAccountForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: closeAccount.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    closeAccount.form = closeAccountForm
/**
* @see \App\Http\Controllers\UserController::updatePassword
 * @see app/Http/Controllers/UserController.php:135
 * @route '/details/password'
 */
export const updatePassword = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePassword.url(options),
    method: 'put',
})

updatePassword.definition = {
    methods: ["put"],
    url: '/details/password',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\UserController::updatePassword
 * @see app/Http/Controllers/UserController.php:135
 * @route '/details/password'
 */
updatePassword.url = (options?: RouteQueryOptions) => {
    return updatePassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::updatePassword
 * @see app/Http/Controllers/UserController.php:135
 * @route '/details/password'
 */
updatePassword.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePassword.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\UserController::updatePassword
 * @see app/Http/Controllers/UserController.php:135
 * @route '/details/password'
 */
    const updatePasswordForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatePassword.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserController::updatePassword
 * @see app/Http/Controllers/UserController.php:135
 * @route '/details/password'
 */
        updatePasswordForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatePassword.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatePassword.form = updatePasswordForm
/**
* @see \App\Http\Controllers\UserController::updatePermissions
 * @see app/Http/Controllers/UserController.php:151
 * @route '/details/permissions'
 */
export const updatePermissions = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePermissions.url(options),
    method: 'put',
})

updatePermissions.definition = {
    methods: ["put"],
    url: '/details/permissions',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\UserController::updatePermissions
 * @see app/Http/Controllers/UserController.php:151
 * @route '/details/permissions'
 */
updatePermissions.url = (options?: RouteQueryOptions) => {
    return updatePermissions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::updatePermissions
 * @see app/Http/Controllers/UserController.php:151
 * @route '/details/permissions'
 */
updatePermissions.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePermissions.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\UserController::updatePermissions
 * @see app/Http/Controllers/UserController.php:151
 * @route '/details/permissions'
 */
    const updatePermissionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatePermissions.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserController::updatePermissions
 * @see app/Http/Controllers/UserController.php:151
 * @route '/details/permissions'
 */
        updatePermissionsForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatePermissions.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatePermissions.form = updatePermissionsForm
/**
* @see \App\Http\Controllers\UserController::exportDetails
 * @see app/Http/Controllers/UserController.php:46
 * @route '/details/export'
 */
export const exportDetails = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: exportDetails.url(options),
    method: 'post',
})

exportDetails.definition = {
    methods: ["post"],
    url: '/details/export',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::exportDetails
 * @see app/Http/Controllers/UserController.php:46
 * @route '/details/export'
 */
exportDetails.url = (options?: RouteQueryOptions) => {
    return exportDetails.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::exportDetails
 * @see app/Http/Controllers/UserController.php:46
 * @route '/details/export'
 */
exportDetails.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: exportDetails.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\UserController::exportDetails
 * @see app/Http/Controllers/UserController.php:46
 * @route '/details/export'
 */
    const exportDetailsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: exportDetails.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserController::exportDetails
 * @see app/Http/Controllers/UserController.php:46
 * @route '/details/export'
 */
        exportDetailsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: exportDetails.url(options),
            method: 'post',
        })
    
    exportDetails.form = exportDetailsForm
const UserController = { index, update, closeAccount, updatePassword, updatePermissions, exportDetails }

export default UserController