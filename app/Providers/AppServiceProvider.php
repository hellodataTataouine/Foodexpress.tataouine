<?php

namespace App\Providers;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $locale = session('locale', config('app.locale')); // Default to config if session is not set
        app()->setLocale($locale);
        Schema::defaultStringLength(191);


        if (file_exists(storage_path('installed'))) {
            View::composer('admin.layouts.components.sidebar', 'App\Http\Composers\BackendMenuComposer');
            View::composer('frontend.partials._footer', 'App\Http\Composers\FrontendFooterComposer');
            View::composer('frontend.partials._nav', 'App\Http\Composers\FrontendFooterComposer');
        }

        Paginator::useBootstrap();
    }
}
