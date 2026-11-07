// Halaman Skor: skor terbaik tiap mode + riwayat terakhir
(function () {
  var grid = document.getElementById('skor-tabel');
  var riw = document.getElementById('skor-riwayat');
  var d = SKOR.baca();
  var urut = ['kuis', 'cocok', 'balon', 'tf'];

  function el(tag, kelas, teks) {
    var e = document.createElement(tag);
    if (kelas) e.className = kelas;
    if (teks !== undefined) e.textContent = teks;
    return e;
  }

  function gambar() {
    grid.innerHTML = ''; riw.innerHTML = '';
    d = SKOR.baca();
    urut.forEach(function (k) {
      var m = d.mode[k], kartu = el('div', 'skor-kartu s-' + k);
      kartu.appendChild(el('b', '', NAMA_MODE[k]));
      kartu.appendChild(el('span', 'besar', m ? String(m.terbaik) : '-'));
      kartu.appendChild(el('span', '', m ? 'Skor terbaik dari 100' : 'Belum dimainkan'));
      if (m) kartu.appendChild(el('small', '', 'Terakhir: ' + m.terakhir + ' | Dimainkan ' + m.main + ' kali'));
      grid.appendChild(kartu);
    });
    if (!d.riwayat.length) {
      riw.appendChild(el('p', 'tengah', 'Belum ada riwayat. Yuk, mainkan quiz dulu!'));
      return;
    }
    d.riwayat.forEach(function (r) {
      var baris = el('div', 'item-riwayat');
      var tgl = new Date(r.waktu).toLocaleString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
      baris.appendChild(el('b', '', NAMA_MODE[r.mode] || r.mode));
      baris.appendChild(el('span', '', 'Skor ' + r.skor));
      baris.appendChild(el('span', '', r.ket || (r.benar + ' dari ' + r.total + ' benar')));
      baris.appendChild(el('small', '', tgl));
      riw.appendChild(baris);
    });
  }

  document.getElementById('btn-hapus').addEventListener('click', function () {
    if (confirm('Hapus semua skor di browser ini?')) { SKOR.hapus(); gambar(); }
  });
  gambar();
})();
