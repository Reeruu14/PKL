<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatabaseTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username')->unique();
            $table->enum('role', ['admin', 'registered']);
            $table->string('email')->unique();
            $table->string('password');
            $table->timestamps();
        });

        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
        });

        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('registereds', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('name');
            $table->text('bio')->nullable();
            $table->string('email')->unique();
            $table->string('phone_num')->unique();
            $table->foreignId('country_id')->constrained('countries');
        });

        Schema::create('restaurants', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('alamat');
            $table->string('phone_num')->unique();
        });

        Schema::create('culinaries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('desc');
        });

        Schema::create('menu_culiners', function (Blueprint $table) {
            $table->id();
            $table->foreignId('restoran_id')->constrained('restaurants')->onDelete('cascade');
            $table->foreignId('kuliner_id')->constrained('culinaries')->onDelete('cascade');
        });

        Schema::create('review_culiners', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('restoran_id')->constrained('restaurants')->onDelete('cascade');
            $table->text('desc');
        });

        Schema::create('culinary_favorites', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('kuliner_id')->constrained('culinaries')->onDelete('cascade');
        });

        Schema::create('tourist_places', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('desc');
            $table->text('alamat');
            $table->string('phone_num')->unique();
        });

        Schema::create('wishlists', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('wisata_id')->constrained('tourist_places')->onDelete('cascade');
        });

        Schema::create('review_wisatas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('wisata_id')->constrained('tourist_places')->onDelete('cascade');
            $table->text('desc');
        });

        Schema::create('galeris', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('wisata_id')->constrained('tourist_places')->onDelete('cascade');
        });

        Schema::create('favorite_tourists', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('wisata_id')->constrained('tourist_places')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('favorite_tourists');
        Schema::dropIfExists('galeris');
        Schema::dropIfExists('review_wisatas');
        Schema::dropIfExists('wishlists');
        Schema::dropIfExists('tourist_places');
        Schema::dropIfExists('culinary_favorites');
        Schema::dropIfExists('review_culiners');
        Schema::dropIfExists('menu_culiners');
        Schema::dropIfExists('culinaries');
        Schema::dropIfExists('restaurants');
        Schema::dropIfExists('registereds');
        Schema::dropIfExists('countries');
        Schema::dropIfExists('admins');
        Schema::dropIfExists('users');
    }
}