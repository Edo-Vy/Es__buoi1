//======= Tính điểm trung bình

//======= Tính điểm trung bình
document.querySelector('#btnKhoi1').onclick = ()=>{

    var diemToan = Number(document.querySelector('#inpToan').value);
    var diemLy = Number(document.querySelector('#inpLy').value);
    var diemHoa = Number(document.querySelector('#inpHoa').value);

    // console.log(diemHoa);
    document.querySelector('#tbKhoi1').innerHTML =""+ tinhDiemTrungBinh(diemToan, diemLy, diemHoa);
}

document.querySelector('#btnKhoi2').onclick = ()=>{

    var diemVan = Number(document.querySelector('#inpVan').value);
    var diemSu = Number(document.querySelector('#inpSu').value);
    var diemDia = Number(document.querySelector('#inpDia').value);
    var diemAnh = Number(document.querySelector('#inpEnglish').value);

    document.querySelector('#tbKhoi2').innerHTML = "" + tinhDiemTrungBinh(diemVan,diemSu,diemDia,diemAnh);
}
let tinhDiemTrungBinh = (...restParam)=>{

    let diemTrungBinh = 0;
    for ( var i =0; i < restParam.length; i++){

        diemTrungBinh += restParam[i];
    }
    return diemTrungBinh/ restParam.length;
}