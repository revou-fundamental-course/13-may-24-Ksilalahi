document.getElementById('calculationType').addEventListener('change', function(){
    const calculationType = this.value;
    if(calculationType === 'luas'){
        document.getElementById('inputAlasTinggi').style.display = 'block';
        document.getElementById('inputAlasSisiBC').style.display = 'none';
    }else{
        document.getElementById('inputAlasTinggi').style.display = 'none';
        document.getElementById('inputAlasSisiBC').style.display = 'block';
    }
});

document.getElementById('hitungButton').addEventListener('click', function(){
    const calculationType = document.getElementById('calculationType').value;
    let result = '';

    if(calculationType === 'luas'){
        const alas = parseFloat(document.getElementById('nilaiAlas').value);
        const tinggi = parseFloat(document.getElementById('nilaiTinggi').value);

        if(isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0){
            alert('Masukkan nilai yang valid untuk alas dan tinggi!');
            return;
        }

        const luas = 0.5 * alas * tinggi;
        result = `Luas Segitiga : ${luas.toFixed(1)}`;
    }else{
        const alas = parseFloat(document.getElementById('nilaiAlasKeliling').value);
        const sisiB = parseFloat(document.getElementById('sisiB').value);
        const sisiC = parseFloat(document.getElementById('sisiC').value);

        if(isNaN(alas) || isNaN(sisiB) || isNaN(sisiC) || alas <= 0 || sisiB <= 0 || sisiC <= 0){
            alert('Masukkan nilai yang valid untuk alas dan semua sisi!');
            return;
        }

        const keliling = alas + sisiB + sisiC;
        result = `Keliling Segitiga : ${keliling.toFixed(1)}`;
    }

    document.getElementById('result').innerHTML = `<p>${result}</p>`;
});

document.querySelector('button[type="reset"]').addEventListener('click', function() {
    document.getElementById('result').innerHTML = '';
});
