
function kirimData() {

  let nama = document.getElementById("nama").value;
  let role = document.getElementById("role").value;
  let availability = document.getElementById("availability").value;
  let lokasi = document.getElementById("lokasi").value;
  let age = document.getElementById("age").value;
  let years = document.getElementById("years").value;
  let email = document.getElementById("email").value;
  
document.getElementById('namaAnda').innerHTML = nama;
document.getElementById('role-anda').innerHTML = role;
document.getElementById('hasilAvailability').innerHTML = availability;
document.getElementById('hasilLokasi').innerHTML = lokasi;
document.getElementById('hasilUsia').innerHTML = age;
document.getElementById('hasilPengalaman').innerHTML = years;
document.getElementById('hasilEmail').innerHTML = email;


};