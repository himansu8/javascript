function fun(n){
    if (n == 0) return
    console.log(n % 2);
    fun(Math.floor(n / 2));
}
fun(25);