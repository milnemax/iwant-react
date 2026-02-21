<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('owner_id')->constrained('users', 'id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('user_id')->nullable()->constrained('users', 'id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('name', 100);
            $table->string('email', 150);
            $table->timestamps();
        });

        Schema::create('contact_wish_list', function (Blueprint $table) {
            $table->foreignId('contact_id')->constrained('contacts', 'id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('wish_list_id')->constrained('wish_lists', 'id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('code');
        });

        Schema::create('contact_list_item', function (Blueprint $table) {
            $table->foreignId('contact_id')->constrained('contacts', 'id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('list_item_id')->constrained('list_items', 'id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->enum('type', ['offer', 'claim'])->default('claim');
            $table->string('message')->nullable();
            $table->unsignedTinyInteger('bought')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_list_item');
        Schema::dropIfExists('contact_wish_list');
        Schema::dropIfExists('contacts');
    }
};
