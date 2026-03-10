<?php

namespace App\Http\Controllers;

use App\Models\ListItem;
use App\Models\ListItemCategory;
use App\Models\WishList;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ListItemController extends Controller
{
    public function destroy(WishList $list, ListItem $item): RedirectResponse
    {
        $listItemName = $item->name;

        $user = Auth::user();

        if ($item->wishList->user_id === $user->id) {
            $item->delete();

            return redirect("/lists/{$list->id}")->with('success', 'List item '.$listItemName.' deleted');
        }

        return redirect("/lists/{$list->id}")->with('error', 'An error occurred deleting your list item '.$listItemName.', please refresh the page and try again');
    }

    public function edit(WishList $list, ListItem $item): Response|RedirectResponse
    {
        $user = Auth::user();

        if ($item->wishList->user_id !== $user->id) {
            return redirect('/lists');
        }

        return Inertia::render('private/list-item', [
            'list' => $list,
            'item' => $item,
        ]);
    }

    public function store(Request $request, WishList $list): RedirectResponse
    {
        $user = Auth::user();

        if ($list->user_id !== $user->id) {
            return redirect('/lists');
        }

        $valid = $request->validate([
            'item_name' => 'required|string',
            'item_category' => 'required|string',
            'item_url' => 'nullable|url',
            'item_description' => 'required|string'
        ]);

        $category = ListItemCategory::firstOrCreate([ 'name' => $valid['item_category'] ]);

        $item = ListItem::create([
            'wish_list_id' => $list->id,
            'list_item_category_id' => $category->id,
            'name' => $valid['item_name'],
            'url' => $valid['item_url'] ?? null,
            'description' => $valid['item_description'] ?? null
        ]);

        return redirect("/lists/{$list->id}")->with('success', "Item {$item->name} created.");
    }
}