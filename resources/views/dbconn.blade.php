<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Recipes</title>
</head>
<body>
    <div>
        <?php
            if(DB::connection()->getPdo()){
                echo "Succesfully connected to DB".DB::connection()->getDatabaseName();
            }
            ?>
    </div>
</body>
</html>