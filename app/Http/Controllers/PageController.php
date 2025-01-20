<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        return view('home'); // Mengarahkan ke file view home.blade.php
    }
}
