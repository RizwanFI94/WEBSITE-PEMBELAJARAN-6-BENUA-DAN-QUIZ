// Quiz dengan 4 mode: Kuis, Cocokkan, Pop Balon, Benar atau Salah
// Soal diambil dari SOAL (100 soal) dan diacak setiap bermain.
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var mode = 'kuis', daftar = [], no = 0, benar = 0, jawaban = [], oks = [];
  var waktuId = null, sisa = 0, pakaiWaktu = false, kunci = false, DETIK = 20;
  var layar = ['menu-quiz', 'soal', 'cocok', 'hasil'];

  function acak(a) {
    var b = a.slice();
    for (var k = b.length - 1; k > 0; k--) {
      var j = Math.floor(Math.random() * (k + 1)), t = b[k]; b[k] = b[j]; b[j] = t;
    }
    return b;
  }
  function tampil(id) {
    layar.forEach(function (x) { $(x).classList.toggle('sembunyi', x !== id); });
    window.scrollTo(0, 0);
  }
  function setelan() {
    return { n: Number($('set-jumlah').value), kat: $('set-kat').value, waktu: $('set-waktu').checked, pasang: $('set-pasang').value };
  }
  function siapkan(n, kat) {
    var pool = SOAL.filter(function (s) { return kat === 'semua' || s.k === kat; });
    return acak(pool).slice(0, Math.min(n, pool.length)).map(function (s) {
      var teks = s.o[s.a], op = acak(s.o);
      return { q: s.q, o: op, a: op.indexOf(teks), e: s.e };
    });
  }
  function simpanSkor(skor, benarN, total, ket) {
    SKOR.simpan(mode, skor, benarN, total, ket);
    perbaruiSkor();
  }
  function perbaruiSkor() {
    var k = $('skor-terbaik');
    if (k) SKOR.tampilkan(k);
  }

  function mulai(m) {
    mode = m;
    var st = setelan();
    pakaiWaktu = st.waktu && (m === 'kuis' || m === 'balon' || m === 'tf');
    if (m === 'cocok') { mulaiCocok(st.pasang); return; }
    daftar = siapkan(st.n, st.kat);
    no = 0; benar = 0; jawaban = []; oks = [];
    tampil('soal');
    tampilSoal();
  }

  /* ---------- Kuis, Pop Balon, Benar atau Salah ---------- */
  function tombol(teks, kelas) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = kelas; b.textContent = teks;
    return b;
  }
  function idxBenar(s) { return mode === 'tf' ? (s.usul === s.a ? 0 : 1) : s.a; }

  function tampilSoal() {
    var s = daftar[no], area = $('area');
    kunci = false;
    $('info-soal').textContent = 'Soal ' + (no + 1) + ' dari ' + daftar.length;
    $('skor-jalan').textContent = 'Benar: ' + benar;
    $('bar').style.width = (no / daftar.length * 100) + '%';
    $('pertanyaan').textContent = s.q;
    $('umpanbalik').classList.add('sembunyi');
    $('btn-lanjut').classList.add('sembunyi');
    $('btn-lanjut').textContent = no === daftar.length - 1 ? 'Lihat Hasil' : 'Soal Berikutnya';
    area.innerHTML = ''; area.className = 'area area-' + mode;

    if (mode === 'tf') {
      var salah = [0, 1, 2, 3].filter(function (x) { return x !== s.a; });
      s.usul = Math.random() < 0.5 ? s.a : salah[Math.floor(Math.random() * salah.length)];
      var p = document.createElement('p');
      p.className = 'usul'; p.appendChild(document.createTextNode('Jawaban: '));
      var tebal = document.createElement('b'); tebal.textContent = s.o[s.usul]; p.appendChild(tebal);
      area.appendChild(p);
      ['Benar', 'Salah'].forEach(function (t, k) {
        var b = tombol(t, 'opsi pilih');
        b.addEventListener('click', function () { jawabTF(k === 0); });
        area.appendChild(b);
      });
    } else {
      s.o.forEach(function (t, k) {
        var b = tombol(mode === 'kuis' ? String.fromCharCode(65 + k) + '. ' + t : t, (mode === 'balon' ? 'balon' : 'opsi') + ' pilih');
        b.addEventListener('click', function () { jawabPilih(k); });
        area.appendChild(b);
      });
    }
    mulaiWaktu();
  }

  function jawabPilih(k) {
    if (kunci) return;
    var s = daftar[no];
    selesaiJawab(k === s.a, s.o[k], k);
  }
  function jawabTF(klaimBenar) {
    if (kunci) return;
    var s = daftar[no];
    selesaiJawab(klaimBenar === (s.usul === s.a), klaimBenar ? 'Benar' : 'Salah', klaimBenar ? 0 : 1);
  }
  function selesaiJawab(ok, teks, idxPilih) {
    var s = daftar[no], ib = idxBenar(s);
    kunci = true; stopWaktu();
    if (ok) benar++;
    jawaban.push(teks); oks.push(ok);
    Array.prototype.forEach.call($('area').querySelectorAll('.pilih'), function (b, j) {
      b.disabled = true;
      if (j === ib) b.classList.add('benar');
      else if (j === idxPilih) b.classList.add('salah');
    });
    var awal = ok ? 'Benar! ' : (idxPilih < 0 ? 'Waktu habis. ' : 'Belum tepat. ');
    var tambah = ok ? '' : 'Jawaban benar: ' + s.o[s.a] + '. ';
    var fb = $('umpanbalik');
    fb.innerHTML = '<b></b> <span></span>';
    fb.firstChild.textContent = awal;
    fb.lastChild.textContent = tambah + s.e;
    fb.classList.remove('sembunyi');
    $('skor-jalan').textContent = 'Benar: ' + benar;
    $('btn-lanjut').classList.remove('sembunyi');
    $('btn-lanjut').focus();
  }

  function mulaiWaktu() {
    stopWaktu();
    var w = $('waktu');
    if (!pakaiWaktu) { w.classList.add('sembunyi'); return; }
    sisa = DETIK; w.classList.remove('sembunyi'); w.textContent = 'Waktu: ' + sisa;
    waktuId = setInterval(function () {
      sisa--; w.textContent = 'Waktu: ' + sisa;
      if (sisa <= 0) { stopWaktu(); if (!kunci) selesaiJawab(false, '(waktu habis)', -1); }
    }, 1000);
  }
  function stopWaktu() { if (waktuId) { clearInterval(waktuId); waktuId = null; } }

  function lanjut() {
    no++;
    if (no < daftar.length) tampilSoal(); else selesai();
  }

  function tampilHasil(skor, pesan, ulasanHtml) {
    $('angka').textContent = skor;
    $('pesan').textContent = pesan;
    $('pembahasan').innerHTML = ulasanHtml || '';
    $('pembahasan-wrap').classList.toggle('sembunyi', !ulasanHtml);
    $('bar').style.width = '100%';
    tampil('hasil');
  }
  function komentar(skor) {
    if (skor === 100) return 'Sempurna! Kamu jagoan benua!';
    if (skor >= 70) return 'Hebat! Kamu sudah memahami materi dengan baik.';
    if (skor >= 50) return 'Lumayan! Baca materi sekali lagi supaya lebih mantap.';
    return 'Jangan menyerah! Pelajari materi dulu, lalu coba lagi.';
  }

  function selesai() {
    var skor = Math.round(benar / daftar.length * 100), html = '';
    daftar.forEach(function (s, i) {
      html += '<div class="item ' + (oks[i] ? 'ok' : 'no') + '"><b>' + (i + 1) + '. ' + s.q + '</b><br>' +
        (mode === 'tf' ? 'Jawaban yang ditawarkan: ' + s.o[s.usul] + '. ' : '') +
        (oks[i] ? 'Kamu benar. ' : 'Kamu salah (' + jawaban[i] + '). ') +
        'Jawaban benar: <b>' + s.o[s.a] + '</b>. ' + s.e + '</div>';
    });
    simpanSkor(skor, benar, daftar.length, '');
    tampilHasil(skor, 'Kamu menjawab benar ' + benar + ' dari ' + daftar.length + ' soal. ' + komentar(skor), html);
  }

  /* ---------- Cocokkan ---------- */
  var pilihKiri = null, pilihKanan = null, cocokJumlah = 0, salahCocok = 0, mulaiCocokWaktu = 0, totalPasang = 6;
  function mulaiCocok(jenis) {
    var pasangan = [];
    if (jenis === 'benua') {
      DATA.forEach(function (b) {
        var n = b.negara.split(';'); pasangan.push([n[Math.floor(Math.random() * n.length)].split('|')[0], b.pendek]);
      });
    } else {
      var semua = [];
      DATA.forEach(function (b) { b.negara.split(';').forEach(function (p) { semua.push(p.split('|')); }); });
      pasangan = acak(semua).slice(0, totalPasang);
    }
    totalPasang = pasangan.length; cocokJumlah = 0; salahCocok = 0; pilihKiri = pilihKanan = null;
    mulaiCocokWaktu = Date.now();
    $('judul-cocok').textContent = jenis === 'benua' ? 'Pasangkan negara dengan benuanya' : 'Pasangkan negara dengan ibukotanya';
    $('info-cocok').textContent = '0 dari ' + totalPasang + ' cocok';
    var kiri = $('kol-kiri'), kanan = $('kol-kanan');
    kiri.innerHTML = ''; kanan.innerHTML = '';
    acak(pasangan).forEach(function (p) { kiri.appendChild(butir(p[0], p[0], kiri)); });
    acak(pasangan).forEach(function (p) { kanan.appendChild(butir(p[1], p[0], kanan)); });
    tampil('cocok');
  }
  function butir(teks, kunciPasang, kolom) {
    var b = tombol(teks, 'pasang'); b.setAttribute('data-k', kunciPasang);
    b.addEventListener('click', function () { klikPasang(b, kolom.id === 'kol-kiri'); });
    return b;
  }
  function klikPasang(b, kiri) {
    if (b.disabled) return;
    var lama = kiri ? pilihKiri : pilihKanan;
    if (lama) lama.classList.remove('pilih-aktif');
    b.classList.add('pilih-aktif');
    if (kiri) pilihKiri = b; else pilihKanan = b;
    if (!pilihKiri || !pilihKanan) return;
    var a = pilihKiri, c = pilihKanan;
    pilihKiri = pilihKanan = null;
    a.classList.remove('pilih-aktif'); c.classList.remove('pilih-aktif');
    if (a.getAttribute('data-k') === c.getAttribute('data-k')) {
      a.classList.add('cocok'); c.classList.add('cocok'); a.disabled = c.disabled = true; cocokJumlah++;
      $('info-cocok').textContent = cocokJumlah + ' dari ' + totalPasang + ' cocok';
      if (cocokJumlah === totalPasang) selesaiCocok();
    } else {
      salahCocok++;
      a.classList.add('salah'); c.classList.add('salah');
      setTimeout(function () { a.classList.remove('salah'); c.classList.remove('salah'); }, 600);
    }
  }
  function selesaiCocok() {
    var detik = Math.round((Date.now() - mulaiCocokWaktu) / 1000);
    var skor = Math.max(0, 100 - salahCocok * 10);
    simpanSkor(skor, totalPasang, totalPasang, detik + ' detik, ' + salahCocok + ' salah');
    tampilHasil(skor, 'Selesai dalam ' + detik + ' detik dengan ' + salahCocok + ' kesalahan.', '');
  }

  /* ---------- Tombol ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.kartu-mode'), function (k) {
    k.addEventListener('click', function () { mulai(k.getAttribute('data-mode')); });
  });
  Array.prototype.forEach.call(document.querySelectorAll('.ke-menu'), function (k) {
    k.addEventListener('click', function () { stopWaktu(); tampil('menu-quiz'); });
  });
  $('btn-lanjut').addEventListener('click', lanjut);
  $('btn-ulang').addEventListener('click', function () { mulai(mode); });
  $('btn-cocok-ulang').addEventListener('click', function () { mulaiCocok($('set-pasang').value); });
  $('jumlah-soal').textContent = SOAL.length;
  perbaruiSkor();
})();
