<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Products;

class ProductController extends Controller
{
    public function createpro(Request $request): Response
    {
        $request->validate([
            'product_name' => 'required|string',
            'category_id' => 'required|integer|exists:category,id',
            'price' => 'required|numeric',
            'image' => 'required|string',
            'description' => 'required|string'
        ]);

        $product = Products::create($request->all());
        return response()->json(['message' => 'Product created successfully'], Response::HTTP_CREATED);    }


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

    // public function updatepro(Request $request ,$id): Response{
    //     $request->validate([
    //         'product_name' => 'string',
    //         'category_id' => 'integer|exists:category,id',
    //         'price' => 'numeric',
    //         'image' => 'string',
    //         'description' => 'string'
    //     ]);
    //     $pro = Products::findOrFail($id);
    //     $pro->update($request->all());
    //     return response()->json($pro, Response::HTTP_OK);
    // }

    public function updatepro(Request $request, $id){
        $product = Products::find($id);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }
    
        $validatedData = $request->validate([
            'name' => 'string',
            'category_id' => 'exists:categories,id',
            'price' => 'numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif',
            'description' => 'nullable|string',
        ]);
    
        $product->update($validatedData);
    
        return response()->json(['message' => 'Product updated successfully', 'product' => $product]);
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
