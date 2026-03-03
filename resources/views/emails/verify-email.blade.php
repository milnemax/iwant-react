@component('mail::message')

    # Email Verification for {{ $name }}

    Please confirm your email address by clicking the link to start receiving email notifications when people share lists with you.

    @component('mail::button', ['url' => $url])
        Verify Email
    @endcomponent

    <br />

    If you have not created an account please contact iWantiWant here: {{ $contactUsUrl }}.

@endcomponent