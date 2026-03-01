import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ContactUsController::send
 * @see app/Http/Controllers/ContactUsController.php:14
 * @route '/privacy'
 */
export const send = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

send.definition = {
    methods: ["post"],
    url: '/privacy',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContactUsController::send
 * @see app/Http/Controllers/ContactUsController.php:14
 * @route '/privacy'
 */
send.url = (options?: RouteQueryOptions) => {
    return send.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactUsController::send
 * @see app/Http/Controllers/ContactUsController.php:14
 * @route '/privacy'
 */
send.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContactUsController::send
 * @see app/Http/Controllers/ContactUsController.php:14
 * @route '/privacy'
 */
    const sendForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: send.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContactUsController::send
 * @see app/Http/Controllers/ContactUsController.php:14
 * @route '/privacy'
 */
        sendForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: send.url(options),
            method: 'post',
        })
    
    send.form = sendForm
const ContactUsController = { send }

export default ContactUsController