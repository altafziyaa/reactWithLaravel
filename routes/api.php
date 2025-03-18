<php?

use App\Http\Controller\API\PostController

Route::get('/posts',[PostController::class,'index']);
Route::post('/posts',[PostController::class,'store']);
Route::get('/posts/{id}',[PostController::class,'show']);
Route::put('/posts/{id}',[PostController::class,'update']);
Route::delete('/posts/{id}',[PostController::class,'destroy']);
