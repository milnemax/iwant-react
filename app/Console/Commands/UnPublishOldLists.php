<?php

namespace App\Console\Commands;

use App\Models\WishList;
use App\Pivots\ContactListItem;
use App\Pivots\ContactWishList;
use Carbon\Carbon;
use Illuminate\Console\Command;

class UnPublishOldLists extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:un-publish-old-lists';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Automatically un-publish old lists based on the lists due date';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        foreach(WishList::where('due_date', '<=', Carbon::now()->subDays(2))->get() as $list) {
            ContactWishList::where('wish_list_id', $list->id)->delete();

            foreach($list->items as $item) {
                ContactListItem::where('list_item_id', $item->id)->delete();
            }
        }

        return parent::SUCCESS;
    }
}
