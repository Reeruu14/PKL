<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Tailwind CSS</title>
    @vite('resources/css/app.css') 
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="text-center">
        <h1 class="text-4xl font-bold text-blue-600">
            Tailwind CSS Berfungsi!
        </h1>
        <p class="mt-4 text-gray-700">
            Jika Anda melihat teks ini dengan warna biru dan ukuran besar, maka Tailwind CSS sudah berjalan dengan baik.
        </p>
        <button class="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Tombol Contoh
        </button>
    </div>
</body>
</html>
