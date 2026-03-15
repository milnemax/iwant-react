<?php

namespace App\Http\Controllers;

use App\Models\WishList;
use App\Pivots\ContactWishList;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class SharedListController extends Controller
{
    public function index(): Response
    {
        $user = Auth::user();

        $lists = WishList::whereHas('contacts', function($query) use($user) { $query->where('user_id', $user->id); })
            ->with('contacts', 'listType')
            ->orderBy('created_at', 'desc')
            ->paginate(5);

        return Inertia::render('private/shared-lists', [
            'lists' => $lists
        ]);
    }

    public function sharedList(int $list, string $code): Response
    {
        $shared = ContactWishList::where('wish_list_id', $list)
            ->where('code', $code)
            ->first();

        $list = $shared->wishList ?? null;
        $items = $list ? $list->items()
            ->orderBy('list_item_category_id')
            ->orderBy('name')
            ->paginate(10) : null;

        return Inertia::render('shared-list', [
            'list' => $list,
            'code' => $code,
            'contact' => $shared->contact ?? null,
            'items' => $items,
        ]);
    }

    public function sharedListFromCode(Request $request): RedirectResponse
    {
        $valid = $request->validate(
            [
                'view_list_code' => 'required|regex:/^[0-9]*_[0-9A-Z]*$/i'
            ]
        );

        $codeParts = explode('_', $valid['view_list_code']);

        return redirect("/shared-list/{$codeParts[0]}/{$codeParts[1]}");
    }
}