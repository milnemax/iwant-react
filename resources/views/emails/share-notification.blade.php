@component('mail::message')
# A list has been shared with you

{{ $list->user->name }} has shared their list, {{ $list->name }}, with you.

@if($contact->user_id)
@component('mail::button', ['url' => url("/login")])
Login to view
@endcomponent
@else
@component('mail::button', ['url' => url("/shared-list/{$list->id}/{$code}")])
View Shared List
@endcomponent
@endif
@endcomponent