// Fungsi untuk menangani pencarian ketika tombol Enter ditekan
function handleKeyPress(event) {
    // Cek apakah tombol yang ditekan adalah Enter (kode 13)
    if (event.key === 'Enter') {
        let input = document.getElementById('search-input').value;
        
        // Jika input ada dan bukan string kosong
        if (input) {
            // Encode input untuk URL (untuk memastikan spasi dan karakter lainnya aman)
            let query = encodeURIComponent(input);

            // Arahkan pengguna ke Google dengan kata kunci yang dimasukkan
            window.location.href = `https://www.google.com/search?q=${query}`;
        }
    }
}
