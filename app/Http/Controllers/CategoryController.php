<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function create(Request $request){
        $category = new Categories();
        $category->name = $request->get('name');
        $category->save();
        return response()->json(['c'=>$category]);
        
    }

    public function getall(){
        $cat = Categories::all();
        return response()->json(['category' => $cat]);
    }

    public function findcategory($id){
        try{
            $cat = Categories::findOrFail($id);
            return response()->json(["Category" => $cat]);
        }catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e){
            return response()->json(["error" => "This category does not exits in this system"]);
        }
    }
}
