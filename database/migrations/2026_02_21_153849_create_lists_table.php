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
        Schema::dropIfExists('list_items');
        Schema::dropIfExists('wish_lists');
        Schema::dropIfExists('list_item_categories');
        Schema::dropIfExists('list_types');

        Schema::create('list_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 15);
        });

        DB::table('list_types')->insert(
            [
                [ 'id' => 1, 'name' => 'New Baby' ],
                [ 'id' => 2, 'name' => 'Birthday' ],
                [ 'id' => 3, 'name' => 'Christmas' ],
                [ 'id' => 4, 'name' => 'Wedding' ]
            ]
        );

        Schema::create('wish_lists', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users', 'id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('list_type_id')->constrained('list_types', 'id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('name', 100);
            $table->date('due_date');
            $table->timestamps();
        });

        Schema::create('list_item_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name', 15);
        });

        DB::table('list_item_categories')->insert(
            [
                [ 'id' => 1, 'name' => 'Books' ],
                [ 'id' => 2, 'name' => 'DVD\'s' ],
                [ 'id' => 3, 'name' => 'Tech' ],
                [ 'id' => 4, 'name' => 'Smellies' ]
            ]
        );

        Schema::create('list_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('wish_list_id')->constrained('wish_lists', 'id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('list_item_category_id')->constrained('list_item_categories', 'id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('name', 100);
            $table->string('url', 250)->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('list_items');
        Schema::dropIfExists('wish_lists');
        Schema::dropIfExists('list_item_categories');
        Schema::dropIfExists('list_types');
    }
};
