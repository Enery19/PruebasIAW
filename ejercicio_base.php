funtion queHace ($num){
    $r=0;
    $v=0;
    $i=1;
    while (num>0){
        $r=($num%2);
        $num=(int)($num%2);
        $v=$v+($r*$i);
        $i=$i*10;
    }
    print("El binario de " + $num + " es "+ $v);
}