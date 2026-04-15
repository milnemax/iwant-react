<?php

\Illuminate\Support\Facades\Schedule::command('app:un-publish-old-lists')->dailyAt('3:00');