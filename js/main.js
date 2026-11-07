// Penyimpanan skor (dipakai Quiz, Skor, dan Beranda). Tersimpan di browser (localStorage).
var NAMA_MODE = { kuis: 'Kuis', cocok: 'Cocokkan', balon: 'Pop Balon', tf: 'Benar atau Salah' };
var SKOR = (function () {
  var KEY = 'skorBenuaV2';
  try { localStorage.removeItem('skorTerbaikBenua'); } catch (e) { /* skor lama dihapus */ }

  function baca() {
    try {
      var d = JSON.parse(localStorage.getItem(KEY));
      if (d && d.mode && d.riwayat) return d;
    } catch (e) { /* abaikan */ }
    return { mode: {}, riwayat: [] };
  }
  function tulis(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* abaikan */ } }

  function simpan(mode, skor, benar, total, ket) {
    var d = baca();
    var m = d.mode[mode] || { terbaik: 0, terakhir: 0, main: 0 };
    m.main += 1;
    m.terakhir = skor;
    m.terbaik = Math.max(m.terbaik, skor);
    d.mode[mode] = m;
    d.riwayat.unshift({ mode: mode, skor: skor, benar: benar, total: total, ket: ket || '', waktu: Date.now() });
    d.riwayat = d.riwayat.slice(0, 20);
    tulis(d);
  }
  function hapus() { try { localStorage.removeItem(KEY); } catch (e) { /* abaikan */ } }
  function terbaikUmum() {
    var d = baca(), t = null;
    Object.keys(d.mode).forEach(function (k) { if (t === null || d.mode[k].terbaik > t) t = d.mode[k].terbaik; });
    return t;
  }
  function tampilkan(el) {
    var t = terbaikUmum();
    if (t === null) { el.classList.add('sembunyi'); return; }
    el.textContent = 'Skor terbaikmu: ' + t + ' / 100 ';
    var a = document.createElement('a');
    a.href = 'skor.html'; a.textContent = '(lihat semua skor)';
    el.appendChild(a);
    el.classList.remove('sembunyi');
  }
  return { baca: baca, simpan: simpan, hapus: hapus, terbaikUmum: terbaikUmum, tampilkan: tampilkan };
})();

(function () {
  var kotak = document.getElementById('skor-terbaik');
  if (kotak) SKOR.tampilkan(kotak);

  // Menu hamburger untuk layar kecil
  var tombol = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu');
  if (tombol && menu) {
    tombol.addEventListener('click', function () {
      var buka = menu.classList.toggle('buka');
      tombol.setAttribute('aria-expanded', buka ? 'true' : 'false');
    });
  }
})();
