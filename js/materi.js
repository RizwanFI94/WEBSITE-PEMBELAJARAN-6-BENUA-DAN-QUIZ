// Halaman Materi: pilih benua, tampil vektor, info lengkap, dan daftar negara
(function () {
  var tab = document.getElementById('tab-benua');
  var panel = document.getElementById('panel');
  if (!tab || !panel) return;

  function baris(label, isi) {
    return '<div class="info-item"><b>' + label + '</b><span>' + isi + '</span></div>';
  }

  function vektor(b) {
    var ekstra = b.extra.map(function (d) {
      return '<path d="' + d + '" fill="' + b.warna + '" stroke="#0B2A4A" stroke-width="4" stroke-linejoin="round"/>';
    }).join('');
    return '<svg class="vektor-svg" viewBox="0 0 300 260" role="img" aria-label="Siluet benua ' + b.nama + '">' +
      '<path d="' + b.path + '" fill="' + b.warna + '" stroke="#0B2A4A" stroke-width="4" stroke-linejoin="round"/>' + ekstra + '</svg>';
  }

  function tampil(id) {
    var b = DATA.filter(function (x) { return x.id === id; })[0] || DATA[0];
    var negara = b.negara.split(';').map(function (p) { return p.split('|'); });

    Array.prototype.forEach.call(tab.querySelectorAll('.tab'), function (t) {
      var aktif = t.getAttribute('data-id') === b.id;
      t.setAttribute('aria-selected', aktif ? 'true' : 'false');
      t.classList.toggle('aktif', aktif);
    });

    var info = baris('Letak', b.letak);
    if (b.wilayah) info += baris('Wilayah', b.wilayah);
    info += baris('Luas', b.luas) + baris('Penduduk', b.penduduk) + baris('Titik tertinggi', b.tertinggi) +
      baris('Sungai penting', b.sungai) + baris('Kota besar', b.kota) + baris('Iklim', b.iklim) +
      baris('Tumbuhan (flora)', b.flora) + baris('Hewan (fauna)', b.fauna) + baris('Kekayaan alam', b.kekayaan);

    panel.innerHTML =
      '<div class="panel-atas" style="--w:' + b.warna + '">' + vektor(b) +
      '<div><h3>' + b.nama + '</h3><p class="ringkas">' + negara.length + ' negara &middot; ' + b.luas + '</p></div></div>' +
      '<div class="info-grid">' + info + '</div>' +
      '<h3>Fakta unik</h3><ul>' + b.fakta.map(function (f) { return '<li>' + f + '</li>'; }).join('') + '</ul>' +
      '<h3>Daftar negara dan ibukota (' + negara.length + ' negara)</h3>' +
      '<div class="negara-grid">' + negara.map(function (n) {
        return '<div class="negara"><b>' + n[0] + '</b><span>' + n[1] + '</span></div>';
      }).join('') + '</div>';
  }

  tab.innerHTML = DATA.map(function (b) {
    return '<button type="button" class="tab" role="tab" aria-selected="false" data-id="' + b.id + '" style="--w:' + b.warna + '">' + b.nama + '</button>';
  }).join('');

  tab.addEventListener('click', function (e) {
    var t = e.target.closest('.tab');
    if (!t) return;
    var id = t.getAttribute('data-id');
    tampil(id);
    try { history.replaceState(null, '', '#' + id); } catch (err) { /* abaikan */ }
  });

  function dariHash() { tampil(location.hash.slice(1) || DATA[0].id); }
  dariHash();
  window.addEventListener('hashchange', dariHash);
})();
