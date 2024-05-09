<?php

namespace App\Exceptions;

use Exception;
use Throwable;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;

class Handler extends ExceptionHandler
{
    // Other methods...

    public function render($request, Throwable $e)
    {
        if ($e instanceof ValidationException && $request->expectsJson()) {
            return response()->json([
                'error' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        }

        return parent::render($request, $e);
    }
}
