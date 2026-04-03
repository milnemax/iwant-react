<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>Share your wish list - iWantiWant</title>

        <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" inertia>

        <link rel="shortcut icon" href="{{ Vite::asset('resources/images/favicon.ico') }}">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <meta name="csrf-token" content="{{ csrf_token() }}">

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
