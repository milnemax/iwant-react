<?php

namespace App\Http\Controllers;

use App\Models\ListItemCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LookUpController extends Controller
{
    public function search(Request $request): JsonResponse
    {
        $valid = $request->validate([
            'name' => 'required|string',
            'term' => 'required|string',
        ]);

        switch($valid['name']) {
            case 'item_category':
                $results = ListItemCategory::where('name', 'like', "%{$valid['term']}%")->limit(3)->select('id', 'name')->get()->toArray();

                break;
            default:
                $results = [];
        }

        return response()->json($results);
    }
}