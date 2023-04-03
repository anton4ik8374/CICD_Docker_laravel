<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" sizes="61x35" href="/images/icon.png">
    <link rel="apple-touch-icon" sizes="61x35" href="/images/icon.png">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
    <title>{{env('APP_NAME', '')}}</title>
</head>
<body>
<div id="app"></div>
@viteReactRefresh
@vite("resources/js/app.jsx")
</body>
</html>
