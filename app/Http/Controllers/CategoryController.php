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
        $cat = Categories::findOrFail($id);
        return response()->json(['category' =>$cat]);
    }
}
