<?php

namespace App\Providers;

use Heritage\Support\Facades\Config;
use Heritage\Support\Facades\URL;
use Heritage\Support\ServiceProvider;

class WorkbenchServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        Config::set([
            'filesystems.disks.export' => [
                'driver' => 'local',
                'root' => database_path('data/exports'),
                'serve' => true,
                'throw' => false,
            ],
        ]);

        URL::defaults([
            'defaultDomain' => 'tim.macdonald',
        ]);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
