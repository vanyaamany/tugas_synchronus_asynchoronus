7 lines (24 sloc)  709 Bytes
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
        const seminar = 'Setia budi';
        const janjian = kondisi => new Promise ((resolve, reject)=>{
          if (kondisi ==='Setia budi'){
              resolve('Saya ketiduran lupa mengikuti seminar');
          }else{
              reject('Saya ingin mengikuti seminar');
          }
        });
        janjian(seminar)
        .then(res => console.log(res))
        .catch(err => console.error(err));
        </script>
    
</body>
</html>