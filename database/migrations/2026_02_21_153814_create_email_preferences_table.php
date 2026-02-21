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
        Schema::create('email_preferences', function (Blueprint $table) {
            $table->id();
            $table->string('name', 20);
            $table->timestamps();
        });

        DB::table('email_preferences')->insert(
            [
                [ 'id' => 1, 'name' => 'publish', 'created_at' => now(), 'updated_at' => now() ],
                [ 'id' => 2, 'name' => 'offer', 'created_at' => now(), 'updated_at' => now() ]
            ]
        );

        Schema::create('email_preference_user', function (Blueprint $table) {
            $table->foreignId('email_preference_id')->constrained('email_preferences')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('email_preference_user');
        Schema::dropIfExists('email_preferences');
    }
};
