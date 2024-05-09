<?php

namespace App\Http\Controllers;

use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use App\Models\Products;

class ProductController extends Controller
{
    public function createpro(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'product_name' => 'required|string',
                'category_id' => 'required|integer|exists:category,id',
                'price' => 'required|numeric',
                'image' => 'required|string',
                'description' => 'required|string'
            ]);
    
            $product = Products::create($validatedData);
            return response()->json(['message' => 'Product created successfully'], 201);
        } catch (ValidationException $e) {
            return response()->json(['error' => 'Category does not exist'], 422);
        }
    }

    // public function createpro(Request $request){
    //     $product = new Products();
    //     $product->product_name = $request->get('product_name');
    //     $product->category_id = $request->get('category_id');
    //     $product->price = $request->get('price');
    //     $product->image = $request->get('image');
    //     $product->description = $request->get('description');
    //     $product->save();
    //     return response()->json(['product'=>$product]);
    // }

    // public function getpro():Response{
    //     $product = Products::all();
    //     return response()->json($product, Response::HTTP_OK);
    // }

    public function getpro(){
        $pro = Products::all();
        return response()->json(['All Product' => $pro]);
    }


    public function getproByID($id){
        try {
            $pro = Products::findOrFail($id);
            return response()->json(["Product " => $pro]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e){
            return response()->json(['error' => 'The Product does not exist']);
        }
    }

    public function updatepro(Request $request ,$id){
        $request->validate([
            'product_name' => 'string',
            'category_id' => 'integer|exists:category,id',
            'price' => 'numeric',
            'image' => 'string',
            'description' => 'string'
        ]);
        $pro = Products::findOrFail($id);
        $pro->update($request->all());
        return response()->json(['Poduct has been updated' => $pro]);
    }


    public function removepro($id){
        $pro = Products::find($id);
        if (!$pro){
            return response()->json(['error' => 'Product not found'], 404);
        }
        $pro->delete();
        return response()->json(['message' => 'Product deleted successfully']);
    }
}
