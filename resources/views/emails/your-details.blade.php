@component('mail::message')

# Personal Information for {{ $email }}

@if($contacts === '' && !isset($user))
We do not have any information related to this email address.<br /><br />
@else
The following information has been found:<br /><br />
@endif

@isset($user)
There is a user account associated with this email address with the following details:<br />

@component('mail::table')
|               |               |
| ------------- | ------------- |
| Name:      | {{ $user->name }} |
| Birth Day: | {{ $user->birth_day ?? '' }}-{{ $user->birth_month ?? '' }} |
@endcomponent

<br />

@component('mail::button', ['url' => url("/login")])
Login to view or close your account
@endcomponent
@endisset

@if($contacts !== '')
The following users have you in their contacts list:<br />

{{ $contacts }}<br /><br />

@if(!isset($user)) Speak to these friends to update your details or use the link in the footer to unsubscribe. @else Speak to these friends to update your details. @endif
@endif

@endcomponent