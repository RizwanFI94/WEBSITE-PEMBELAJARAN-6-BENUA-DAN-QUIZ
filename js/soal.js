// Bank 100 soal. k = kategori, o = pilihan, a = nomor jawaban benar (mulai dari 0)
var SOAL = [
    {
        "k": "negara",
        "q": "Negara Jepang terletak di benua...",
        "o": [
            "Asia",
            "Amerika Selatan",
            "Australia",
            "Eropa"
        ],
        "a": 0,
        "e": "Jepang berada di benua Asia. Ibukotanya Tokyo."
    },
    {
        "k": "negara",
        "q": "Benua manakah yang menjadi tempat negara India?",
        "o": [
            "Asia",
            "Australia",
            "Eropa",
            "Afrika"
        ],
        "a": 0,
        "e": "India berada di benua Asia. Ibukotanya New Delhi."
    },
    {
        "k": "negara",
        "q": "Thailand termasuk negara di benua...",
        "o": [
            "Asia",
            "Australia",
            "Amerika Selatan",
            "Amerika Utara"
        ],
        "a": 0,
        "e": "Thailand berada di benua Asia. Ibukotanya Bangkok."
    },
    {
        "k": "negara",
        "q": "Negara Arab Saudi terletak di benua...",
        "o": [
            "Asia",
            "Australia",
            "Eropa",
            "Afrika"
        ],
        "a": 0,
        "e": "Arab Saudi berada di benua Asia. Ibukotanya Riyadh."
    },
    {
        "k": "negara",
        "q": "Benua manakah yang menjadi tempat negara Mongolia?",
        "o": [
            "Asia",
            "Amerika Selatan",
            "Amerika Utara",
            "Afrika"
        ],
        "a": 0,
        "e": "Mongolia berada di benua Asia. Ibukotanya Ulaanbaatar."
    },
    {
        "k": "negara",
        "q": "Korea Selatan termasuk negara di benua...",
        "o": [
            "Asia",
            "Afrika",
            "Australia",
            "Amerika Utara"
        ],
        "a": 0,
        "e": "Korea Selatan berada di benua Asia. Ibukotanya Seoul."
    },
    {
        "k": "negara",
        "q": "Negara Kenya terletak di benua...",
        "o": [
            "Afrika",
            "Amerika Selatan",
            "Australia",
            "Amerika Utara"
        ],
        "a": 0,
        "e": "Kenya berada di benua Afrika. Ibukotanya Nairobi."
    },
    {
        "k": "negara",
        "q": "Benua manakah yang menjadi tempat negara Nigeria?",
        "o": [
            "Afrika",
            "Australia",
            "Eropa",
            "Amerika Utara"
        ],
        "a": 0,
        "e": "Nigeria berada di benua Afrika. Ibukotanya Abuja."
    },
    {
        "k": "negara",
        "q": "Afrika Selatan termasuk negara di benua...",
        "o": [
            "Afrika",
            "Asia",
            "Australia",
            "Amerika Selatan"
        ],
        "a": 0,
        "e": "Afrika Selatan berada di benua Afrika. Ibukotanya Pretoria."
    },
    {
        "k": "negara",
        "q": "Negara Etiopia terletak di benua...",
        "o": [
            "Afrika",
            "Asia",
            "Eropa",
            "Australia"
        ],
        "a": 0,
        "e": "Etiopia berada di benua Afrika. Ibukotanya Addis Ababa."
    },
    {
        "k": "negara",
        "q": "Benua manakah yang menjadi tempat negara Ghana?",
        "o": [
            "Afrika",
            "Australia",
            "Asia",
            "Eropa"
        ],
        "a": 0,
        "e": "Ghana berada di benua Afrika. Ibukotanya Accra."
    },
    {
        "k": "negara",
        "q": "Maroko termasuk negara di benua...",
        "o": [
            "Afrika",
            "Amerika Utara",
            "Amerika Selatan",
            "Australia"
        ],
        "a": 0,
        "e": "Maroko berada di benua Afrika. Ibukotanya Rabat."
    },
    {
        "k": "negara",
        "q": "Negara Prancis terletak di benua...",
        "o": [
            "Eropa",
            "Afrika",
            "Australia",
            "Amerika Utara"
        ],
        "a": 0,
        "e": "Prancis berada di benua Eropa. Ibukotanya Paris."
    },
    {
        "k": "negara",
        "q": "Benua manakah yang menjadi tempat negara Jerman?",
        "o": [
            "Eropa",
            "Amerika Utara",
            "Amerika Selatan",
            "Asia"
        ],
        "a": 0,
        "e": "Jerman berada di benua Eropa. Ibukotanya Berlin."
    },
    {
        "k": "negara",
        "q": "Italia termasuk negara di benua...",
        "o": [
            "Eropa",
            "Asia",
            "Amerika Selatan",
            "Amerika Utara"
        ],
        "a": 0,
        "e": "Italia berada di benua Eropa. Ibukotanya Roma."
    },
    {
        "k": "negara",
        "q": "Negara Spanyol terletak di benua...",
        "o": [
            "Eropa",
            "Amerika Utara",
            "Amerika Selatan",
            "Australia"
        ],
        "a": 0,
        "e": "Spanyol berada di benua Eropa. Ibukotanya Madrid."
    },
    {
        "k": "negara",
        "q": "Benua manakah yang menjadi tempat negara Norwegia?",
        "o": [
            "Eropa",
            "Asia",
            "Amerika Utara",
            "Afrika"
        ],
        "a": 0,
        "e": "Norwegia berada di benua Eropa. Ibukotanya Oslo."
    },
    {
        "k": "negara",
        "q": "Polandia termasuk negara di benua...",
        "o": [
            "Eropa",
            "Afrika",
            "Amerika Utara",
            "Asia"
        ],
        "a": 0,
        "e": "Polandia berada di benua Eropa. Ibukotanya Warsawa."
    },
    {
        "k": "negara",
        "q": "Negara Kanada terletak di benua...",
        "o": [
            "Amerika Utara",
            "Asia",
            "Australia",
            "Afrika"
        ],
        "a": 0,
        "e": "Kanada berada di benua Amerika Utara. Ibukotanya Ottawa."
    },
    {
        "k": "negara",
        "q": "Benua manakah yang menjadi tempat negara Meksiko?",
        "o": [
            "Amerika Utara",
            "Asia",
            "Eropa",
            "Afrika"
        ],
        "a": 0,
        "e": "Meksiko berada di benua Amerika Utara. Ibukotanya Meksiko City."
    },
    {
        "k": "negara",
        "q": "Kuba termasuk negara di benua...",
        "o": [
            "Amerika Utara",
            "Asia",
            "Australia",
            "Eropa"
        ],
        "a": 0,
        "e": "Kuba berada di benua Amerika Utara. Ibukotanya Havana."
    },
    {
        "k": "negara",
        "q": "Negara Amerika Serikat terletak di benua...",
        "o": [
            "Amerika Utara",
            "Asia",
            "Afrika",
            "Australia"
        ],
        "a": 0,
        "e": "Amerika Serikat berada di benua Amerika Utara. Ibukotanya Washington D.C.."
    },
    {
        "k": "negara",
        "q": "Benua manakah yang menjadi tempat negara Jamaika?",
        "o": [
            "Amerika Utara",
            "Asia",
            "Amerika Selatan",
            "Afrika"
        ],
        "a": 0,
        "e": "Jamaika berada di benua Amerika Utara. Ibukotanya Kingston."
    },
    {
        "k": "negara",
        "q": "Guatemala termasuk negara di benua...",
        "o": [
            "Amerika Utara",
            "Amerika Selatan",
            "Australia",
            "Asia"
        ],
        "a": 0,
        "e": "Guatemala berada di benua Amerika Utara. Ibukotanya Guatemala City."
    },
    {
        "k": "negara",
        "q": "Negara Brasil terletak di benua...",
        "o": [
            "Amerika Selatan",
            "Australia",
            "Afrika",
            "Eropa"
        ],
        "a": 0,
        "e": "Brasil berada di benua Amerika Selatan. Ibukotanya Brasilia."
    },
    {
        "k": "negara",
        "q": "Benua manakah yang menjadi tempat negara Argentina?",
        "o": [
            "Amerika Selatan",
            "Eropa",
            "Australia",
            "Asia"
        ],
        "a": 0,
        "e": "Argentina berada di benua Amerika Selatan. Ibukotanya Buenos Aires."
    },
    {
        "k": "negara",
        "q": "Peru termasuk negara di benua...",
        "o": [
            "Amerika Selatan",
            "Eropa",
            "Australia",
            "Asia"
        ],
        "a": 0,
        "e": "Peru berada di benua Amerika Selatan. Ibukotanya Lima."
    },
    {
        "k": "negara",
        "q": "Negara Kolombia terletak di benua...",
        "o": [
            "Amerika Selatan",
            "Amerika Utara",
            "Asia",
            "Australia"
        ],
        "a": 0,
        "e": "Kolombia berada di benua Amerika Selatan. Ibukotanya Bogotá."
    },
    {
        "k": "negara",
        "q": "Benua manakah yang menjadi tempat negara Chili?",
        "o": [
            "Amerika Selatan",
            "Afrika",
            "Asia",
            "Amerika Utara"
        ],
        "a": 0,
        "e": "Chili berada di benua Amerika Selatan. Ibukotanya Santiago."
    },
    {
        "k": "negara",
        "q": "Bolivia termasuk negara di benua...",
        "o": [
            "Amerika Selatan",
            "Asia",
            "Amerika Utara",
            "Afrika"
        ],
        "a": 0,
        "e": "Bolivia berada di benua Amerika Selatan. Ibukotanya Sucre."
    },
    {
        "k": "negara",
        "q": "Negara Tonga terletak di benua...",
        "o": [
            "Australia",
            "Afrika",
            "Amerika Selatan",
            "Amerika Utara"
        ],
        "a": 0,
        "e": "Tonga berada di benua Australia. Ibukotanya Nuku'alofa."
    },
    {
        "k": "negara",
        "q": "Benua manakah yang menjadi tempat negara Selandia Baru?",
        "o": [
            "Australia",
            "Amerika Selatan",
            "Afrika",
            "Eropa"
        ],
        "a": 0,
        "e": "Selandia Baru berada di benua Australia. Ibukotanya Wellington."
    },
    {
        "k": "negara",
        "q": "Fiji termasuk negara di benua...",
        "o": [
            "Australia",
            "Afrika",
            "Amerika Utara",
            "Eropa"
        ],
        "a": 0,
        "e": "Fiji berada di benua Australia. Ibukotanya Suva."
    },
    {
        "k": "negara",
        "q": "Negara Papua Nugini terletak di benua...",
        "o": [
            "Australia",
            "Amerika Utara",
            "Asia",
            "Afrika"
        ],
        "a": 0,
        "e": "Papua Nugini berada di benua Australia. Ibukotanya Port Moresby."
    },
    {
        "k": "negara",
        "q": "Benua manakah yang menjadi tempat negara Samoa?",
        "o": [
            "Australia",
            "Amerika Utara",
            "Afrika",
            "Asia"
        ],
        "a": 0,
        "e": "Samoa berada di benua Australia. Ibukotanya Apia."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Jepang?",
        "o": [
            "Tokyo",
            "Bishkek",
            "Beijing",
            "Pyongyang"
        ],
        "a": 0,
        "e": "Ibukota Jepang adalah Tokyo, di benua Asia."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Thailand?",
        "o": [
            "Bangkok",
            "Riyadh",
            "Teheran",
            "Jakarta"
        ],
        "a": 0,
        "e": "Ibukota Thailand adalah Bangkok, di benua Asia."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara India?",
        "o": [
            "New Delhi",
            "Ulaanbaatar",
            "Dili",
            "Abu Dhabi"
        ],
        "a": 0,
        "e": "Ibukota India adalah New Delhi, di benua Asia."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Tiongkok?",
        "o": [
            "Beijing",
            "Dushanbe",
            "Thimphu",
            "Yerevan"
        ],
        "a": 0,
        "e": "Ibukota Tiongkok adalah Beijing, di benua Asia."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Arab Saudi?",
        "o": [
            "Riyadh",
            "New Delhi",
            "Yerusalem",
            "Muskat"
        ],
        "a": 0,
        "e": "Ibukota Arab Saudi adalah Riyadh, di benua Asia."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Malaysia?",
        "o": [
            "Kuala Lumpur",
            "Phnom Penh",
            "Kabul",
            "Ankara"
        ],
        "a": 0,
        "e": "Ibukota Malaysia adalah Kuala Lumpur, di benua Asia."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Kenya?",
        "o": [
            "Nairobi",
            "Brazzaville",
            "Malabo",
            "Monrovia"
        ],
        "a": 0,
        "e": "Ibukota Kenya adalah Nairobi, di benua Afrika."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Mesir?",
        "o": [
            "Kairo",
            "Porto-Novo",
            "Gaborone",
            "Libreville"
        ],
        "a": 0,
        "e": "Ibukota Mesir adalah Kairo, di benua Afrika."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Nigeria?",
        "o": [
            "Abuja",
            "Yamoussoukro",
            "Dakar",
            "Accra"
        ],
        "a": 0,
        "e": "Ibukota Nigeria adalah Abuja, di benua Afrika."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Afrika Selatan?",
        "o": [
            "Pretoria",
            "Bangui",
            "Kigali",
            "Maseru"
        ],
        "a": 0,
        "e": "Ibukota Afrika Selatan adalah Pretoria, di benua Afrika."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Maroko?",
        "o": [
            "Rabat",
            "Kinshasa",
            "São Tomé",
            "Bamako"
        ],
        "a": 0,
        "e": "Ibukota Maroko adalah Rabat, di benua Afrika."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Prancis?",
        "o": [
            "Paris",
            "Praha",
            "Madrid",
            "Lisbon"
        ],
        "a": 0,
        "e": "Ibukota Prancis adalah Paris, di benua Eropa."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Jerman?",
        "o": [
            "Berlin",
            "Ljubljana",
            "Praha",
            "Chisinau"
        ],
        "a": 0,
        "e": "Ibukota Jerman adalah Berlin, di benua Eropa."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Italia?",
        "o": [
            "Roma",
            "Helsinki",
            "Kyiv",
            "Kopenhagen"
        ],
        "a": 0,
        "e": "Ibukota Italia adalah Roma, di benua Eropa."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Spanyol?",
        "o": [
            "Madrid",
            "Riga",
            "Dublin",
            "Bern"
        ],
        "a": 0,
        "e": "Ibukota Spanyol adalah Madrid, di benua Eropa."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Rusia?",
        "o": [
            "Moskow",
            "Reykjavik",
            "Budapest",
            "Tallinn"
        ],
        "a": 0,
        "e": "Ibukota Rusia adalah Moskow, di benua Eropa."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Inggris?",
        "o": [
            "London",
            "Kyiv",
            "Bratislava",
            "Budapest"
        ],
        "a": 0,
        "e": "Ibukota Inggris adalah London, di benua Eropa."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Kanada?",
        "o": [
            "Ottawa",
            "Port of Spain",
            "San José",
            "Managua"
        ],
        "a": 0,
        "e": "Ibukota Kanada adalah Ottawa, di benua Amerika Utara."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Amerika Serikat?",
        "o": [
            "Washington D.C.",
            "Castries",
            "Bridgetown",
            "Havana"
        ],
        "a": 0,
        "e": "Ibukota Amerika Serikat adalah Washington D.C., di benua Amerika Utara."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Meksiko?",
        "o": [
            "Meksiko City",
            "Saint John's",
            "Bridgetown",
            "Panama City"
        ],
        "a": 0,
        "e": "Ibukota Meksiko adalah Meksiko City, di benua Amerika Utara."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Brasil?",
        "o": [
            "Brasilia",
            "Georgetown",
            "Quito",
            "Asunción"
        ],
        "a": 0,
        "e": "Ibukota Brasil adalah Brasilia, di benua Amerika Selatan."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Argentina?",
        "o": [
            "Buenos Aires",
            "Georgetown",
            "Asunción",
            "Lima"
        ],
        "a": 0,
        "e": "Ibukota Argentina adalah Buenos Aires, di benua Amerika Selatan."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Peru?",
        "o": [
            "Lima",
            "Quito",
            "Paramaribo",
            "Brasilia"
        ],
        "a": 0,
        "e": "Ibukota Peru adalah Lima, di benua Amerika Selatan."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Australia?",
        "o": [
            "Canberra",
            "Funafuti",
            "Tarawa Selatan",
            "Palikir"
        ],
        "a": 0,
        "e": "Ibukota Australia adalah Canberra, di benua Australia."
    },
    {
        "k": "ibukota",
        "q": "Apa ibukota negara Selandia Baru?",
        "o": [
            "Wellington",
            "Palikir",
            "Majuro",
            "Honiara"
        ],
        "a": 0,
        "e": "Ibukota Selandia Baru adalah Wellington, di benua Australia."
    },
    {
        "k": "tempat",
        "q": "Kanguru terdapat di benua...",
        "o": [
            "Australia",
            "Amerika Selatan",
            "Asia",
            "Afrika"
        ],
        "a": 0,
        "e": "Kanguru adalah hewan berkantung khas Australia."
    },
    {
        "k": "tempat",
        "q": "Koala terdapat di benua...",
        "o": [
            "Australia",
            "Afrika",
            "Amerika Selatan",
            "Eropa"
        ],
        "a": 0,
        "e": "Koala hidup di pohon eukaliptus di Australia."
    },
    {
        "k": "tempat",
        "q": "Singa di padang savana terdapat di benua...",
        "o": [
            "Afrika",
            "Asia",
            "Australia",
            "Eropa"
        ],
        "a": 0,
        "e": "Savana Afrika adalah rumah singa, zebra, dan jerapah."
    },
    {
        "k": "tempat",
        "q": "Jerapah liar terdapat di benua...",
        "o": [
            "Afrika",
            "Amerika Selatan",
            "Australia",
            "Asia"
        ],
        "a": 0,
        "e": "Jerapah hidup di savana Afrika."
    },
    {
        "k": "tempat",
        "q": "Panda raksasa terdapat di benua...",
        "o": [
            "Asia",
            "Afrika",
            "Australia",
            "Amerika Selatan"
        ],
        "a": 0,
        "e": "Panda raksasa berasal dari pegunungan Tiongkok, Asia."
    },
    {
        "k": "tempat",
        "q": "Orangutan terdapat di benua...",
        "o": [
            "Asia",
            "Amerika Utara",
            "Australia",
            "Amerika Selatan"
        ],
        "a": 0,
        "e": "Orangutan hidup di hutan Kalimantan dan Sumatra, Asia."
    },
    {
        "k": "tempat",
        "q": "Llama terdapat di benua...",
        "o": [
            "Amerika Selatan",
            "Australia",
            "Afrika",
            "Asia"
        ],
        "a": 0,
        "e": "Llama dipelihara di Pegunungan Andes."
    },
    {
        "k": "tempat",
        "q": "Jaguar terdapat di benua...",
        "o": [
            "Amerika Selatan",
            "Eropa",
            "Afrika",
            "Amerika Utara"
        ],
        "a": 0,
        "e": "Jaguar hidup di hutan Amazon."
    },
    {
        "k": "tempat",
        "q": "Bison Amerika terdapat di benua...",
        "o": [
            "Amerika Utara",
            "Eropa",
            "Afrika",
            "Australia"
        ],
        "a": 0,
        "e": "Bison hidup di padang rumput Amerika Utara."
    },
    {
        "k": "tempat",
        "q": "Menara Eiffel terdapat di benua...",
        "o": [
            "Eropa",
            "Asia",
            "Australia",
            "Afrika"
        ],
        "a": 0,
        "e": "Menara Eiffel ada di Paris, Prancis."
    },
    {
        "k": "tempat",
        "q": "Colosseum terdapat di benua...",
        "o": [
            "Eropa",
            "Amerika Utara",
            "Australia",
            "Asia"
        ],
        "a": 0,
        "e": "Colosseum adalah bangunan kuno di Roma, Italia."
    },
    {
        "k": "tempat",
        "q": "Piramida Giza terdapat di benua...",
        "o": [
            "Afrika",
            "Asia",
            "Australia",
            "Eropa"
        ],
        "a": 0,
        "e": "Piramida Giza ada di Mesir, Afrika."
    },
    {
        "k": "tempat",
        "q": "Tembok Besar terdapat di benua...",
        "o": [
            "Asia",
            "Afrika",
            "Amerika Utara",
            "Eropa"
        ],
        "a": 0,
        "e": "Tembok Besar ada di Tiongkok, Asia."
    },
    {
        "k": "tempat",
        "q": "Taj Mahal terdapat di benua...",
        "o": [
            "Asia",
            "Eropa",
            "Afrika",
            "Amerika Selatan"
        ],
        "a": 0,
        "e": "Taj Mahal ada di India, Asia."
    },
    {
        "k": "tempat",
        "q": "Machu Picchu terdapat di benua...",
        "o": [
            "Amerika Selatan",
            "Amerika Utara",
            "Eropa",
            "Australia"
        ],
        "a": 0,
        "e": "Machu Picchu adalah kota kuno suku Inca di Peru."
    },
    {
        "k": "tempat",
        "q": "Patung Liberty terdapat di benua...",
        "o": [
            "Amerika Utara",
            "Asia",
            "Afrika",
            "Amerika Selatan"
        ],
        "a": 0,
        "e": "Patung Liberty berdiri di New York, Amerika Serikat."
    },
    {
        "k": "tempat",
        "q": "Sydney Opera House terdapat di benua...",
        "o": [
            "Australia",
            "Eropa",
            "Asia",
            "Amerika Selatan"
        ],
        "a": 0,
        "e": "Gedung opera ini ada di Sydney, Australia."
    },
    {
        "k": "tempat",
        "q": "Candi Borobudur terdapat di benua...",
        "o": [
            "Asia",
            "Amerika Selatan",
            "Afrika",
            "Eropa"
        ],
        "a": 0,
        "e": "Borobudur ada di Jawa Tengah, Indonesia, Asia."
    },
    {
        "k": "tempat",
        "q": "Gunung Kilimanjaro terdapat di benua...",
        "o": [
            "Afrika",
            "Asia",
            "Amerika Selatan",
            "Amerika Utara"
        ],
        "a": 0,
        "e": "Kilimanjaro di Tanzania adalah gunung tertinggi di Afrika."
    },
    {
        "k": "tempat",
        "q": "Grand Canyon terdapat di benua...",
        "o": [
            "Amerika Utara",
            "Asia",
            "Amerika Selatan",
            "Afrika"
        ],
        "a": 0,
        "e": "Grand Canyon ada di Amerika Serikat."
    },
    {
        "k": "tempat",
        "q": "Hutan hujan Amazon terdapat di benua...",
        "o": [
            "Amerika Selatan",
            "Australia",
            "Asia",
            "Eropa"
        ],
        "a": 0,
        "e": "Amazon sebagian besar ada di Brasil."
    },
    {
        "k": "tempat",
        "q": "Gurun Sahara terdapat di benua...",
        "o": [
            "Afrika",
            "Asia",
            "Australia",
            "Amerika Selatan"
        ],
        "a": 0,
        "e": "Sahara adalah gurun panas terluas di dunia."
    },
    {
        "k": "tempat",
        "q": "Gunung Everest terdapat di benua...",
        "o": [
            "Asia",
            "Afrika",
            "Amerika Utara",
            "Eropa"
        ],
        "a": 0,
        "e": "Everest berada di Pegunungan Himalaya, Asia."
    },
    {
        "k": "tempat",
        "q": "Great Barrier Reef terdapat di benua...",
        "o": [
            "Australia",
            "Eropa",
            "Amerika Utara",
            "Amerika Selatan"
        ],
        "a": 0,
        "e": "Terumbu karang ini ada di timur laut Australia."
    },
    {
        "k": "tempat",
        "q": "Pegunungan Andes terdapat di benua...",
        "o": [
            "Amerika Selatan",
            "Australia",
            "Amerika Utara",
            "Afrika"
        ],
        "a": 0,
        "e": "Andes adalah pegunungan terpanjang di daratan Bumi."
    },
    {
        "k": "umum",
        "q": "Benua manakah yang paling luas?",
        "o": [
            "Asia",
            "Afrika",
            "Eropa",
            "Amerika Utara"
        ],
        "a": 0,
        "e": "Asia luasnya ±44,6 juta km²."
    },
    {
        "k": "umum",
        "q": "Benua manakah yang paling kecil?",
        "o": [
            "Australia (Oseania)",
            "Eropa",
            "Amerika Selatan",
            "Afrika"
        ],
        "a": 0,
        "e": "Oseania luasnya sekitar 8,5 juta km²."
    },
    {
        "k": "umum",
        "q": "Benua manakah yang memiliki negara paling banyak?",
        "o": [
            "Afrika",
            "Asia",
            "Eropa",
            "Amerika Selatan"
        ],
        "a": 0,
        "e": "Afrika memiliki 54 negara."
    },
    {
        "k": "umum",
        "q": "Samudra manakah yang paling luas?",
        "o": [
            "Samudra Pasifik",
            "Samudra Hindia",
            "Samudra Atlantik",
            "Samudra Arktik"
        ],
        "a": 0,
        "e": "Samudra Pasifik adalah samudra terluas dan terdalam."
    },
    {
        "k": "umum",
        "q": "Sungai Nil, salah satu sungai terpanjang di dunia, mengalir di benua...",
        "o": [
            "Afrika",
            "Asia",
            "Amerika Selatan",
            "Eropa"
        ],
        "a": 0,
        "e": "Sungai Nil mengalir ke utara menuju Laut Tengah."
    },
    {
        "k": "umum",
        "q": "Negara terkecil di dunia adalah...",
        "o": [
            "Vatikan",
            "Monako",
            "San Marino",
            "Malta"
        ],
        "a": 0,
        "e": "Vatikan luasnya hanya ±0,44 km²."
    },
    {
        "k": "umum",
        "q": "Negara terluas di dunia adalah...",
        "o": [
            "Rusia",
            "Kanada",
            "Tiongkok",
            "Amerika Serikat"
        ],
        "a": 0,
        "e": "Rusia membentang di Eropa dan Asia."
    },
    {
        "k": "umum",
        "q": "Gunung tertinggi di dunia adalah...",
        "o": [
            "Gunung Everest",
            "Gunung Kilimanjaro",
            "Gunung Aconcagua",
            "Gunung Denali"
        ],
        "a": 0,
        "e": "Everest tingginya 8.849 m."
    },
    {
        "k": "umum",
        "q": "Gurun panas terluas di dunia adalah...",
        "o": [
            "Gurun Sahara",
            "Gurun Gobi",
            "Gurun Atacama",
            "Gurun Kalahari"
        ],
        "a": 0,
        "e": "Sahara ada di Afrika bagian utara."
    },
    {
        "k": "umum",
        "q": "Benua terdingin dan tertutup es adalah...",
        "o": [
            "Antartika",
            "Eropa",
            "Asia",
            "Amerika Utara"
        ],
        "a": 0,
        "e": "Antartika hampir seluruhnya tertutup es dan tidak punya penduduk tetap."
    },
    {
        "k": "umum",
        "q": "Terusan Panama menghubungkan Samudra Atlantik dengan...",
        "o": [
            "Samudra Pasifik",
            "Samudra Hindia",
            "Samudra Arktik",
            "Laut Tengah"
        ],
        "a": 0,
        "e": "Terusan Panama memotong daratan Amerika Tengah."
    },
    {
        "k": "umum",
        "q": "Negara dengan penduduk terbanyak di Asia saat ini adalah...",
        "o": [
            "India",
            "Indonesia",
            "Jepang",
            "Pakistan"
        ],
        "a": 0,
        "e": "India dan Tiongkok masing-masing berpenduduk lebih dari 1,4 miliar jiwa."
    },
    {
        "k": "umum",
        "q": "Laut yang memisahkan Eropa dan Afrika adalah...",
        "o": [
            "Laut Tengah",
            "Laut Merah",
            "Laut Hitam",
            "Laut Utara"
        ],
        "a": 0,
        "e": "Laut Tengah (Mediterania) berada di antara Eropa dan Afrika."
    },
    {
        "k": "umum",
        "q": "Danau air tawar terluas di dunia adalah...",
        "o": [
            "Danau Superior",
            "Danau Victoria",
            "Danau Titicaca",
            "Danau Toba"
        ],
        "a": 0,
        "e": "Danau Superior ada di perbatasan Amerika Serikat dan Kanada."
    },
    {
        "k": "umum",
        "q": "Pegunungan Himalaya terletak di benua...",
        "o": [
            "Asia",
            "Eropa",
            "Amerika Utara",
            "Afrika"
        ],
        "a": 0,
        "e": "Himalaya membentang di Nepal, India, Tiongkok, dan sekitarnya."
    }
];
