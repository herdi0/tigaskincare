//const skinGoals = [antiAging, woundHealing, acneFighting, brightening]

const skincares = {
    antiAging: {
        cleanser: [{
            img : './image/cleanser/Verite LightLotion Cleanser.png',
            nama: "Tiga Verite LightLotion Cleanser",
            activeIngredients: ['Ceramide 3'],
            howToUse: "Usapkan Tiga Verite LightLotion Cleanser ke wajah sambil dipijat perlahan. Lalu bilas wajah anda menggunakan air bersih. Lanjutkan dengan step skincare lainnya. Gunakan maksimal 2 kali sehari, pagi dan malam hari.",
            price: 350_000,
            size: '50 ml'
        }],
        toner: [{
            img: './image/toner/Retinol Toner.png',
            nama: "Tiga Retinol Toner",
            activeIngredients: ['1% Actosome Retinol', '3% Niacinamide', 'Peptide'],
            howToUse: "Oleskan untuk membersihkan kulit dan oleskan tabir surya keesokan harinya. Jika terjadi kemerahan atau iritasi, sesuaikan frekuensi pemakaiannya. Produk ini aman digunakan pada malam hari, maksimal 3 kali setiap minggu.",
            price: 200_000,
            size: '50 ml'
        },
        {
            img: './image/toner/Fresh Balancing Toner.png',
            nama: "Tiga Fresh Balancing Toner",
            activeIngredients: ['Sodium Hyaluronate', 'Citric Acid'],
            howToUse: "Tuangkan pada kapas, lalu usap perlahan pada kulit. Gunakan setiap pagi dan malam, setiap hari.",
            price: 300_000,
            size: '50 ml'
        }
        ],
        serum: [{
            img: './image/serum/Ageless Intensives Deep Wrinkle Anti-Wrinkle Serum.png',
            nama: "Tiga Ageless Intensives Deep Wrinkle Anti-Wrinkle Serum",
            activeIngredients: ['Tocopherol', 'Retinol', 'Alpha-Bisabolol'],
            howToUse: "Oleskan Tiga Ageless Intensives Deep Wrinkle Anti-Wrinkle Serum secara merata ke wajah, gunakan pagi dan malam hari.",
            price: 300_000,
            size: '30 ml'
        }],
        moisturizer: [{
            img: './image/moisturizer/Super Rescue Antioxidant.png',
            nama: "Tiga Super Rescue Antioxidant",
            activeIngredients: ['Niacinamide', 'Ferulic Acid', 'Tocopheryl Acetate', 'Sodium Hyaluronate'],
            howToUse: "Oleskan secara merata kepada wajah, lalu pijat perlahan sampai meresap. Gunakan setiap malam hari.",
            price: 300_000,
            size: '100 ml'
        }],
        sheetMask: [{
            img: './image/sheetMask/Advanced Night Repair Concentrated Powerfoil Mask.png',
            nama: "Tiga Advanced Night Repair Concentrated Powerfoil Mask",
            activeIngredients: ['Sodium Hyaluronate', 'Tocopheryl Acetate'],
            howToUse: "Guanakan Advanced Night Repair Concentrated Powerfoil Mask pada wajah yang bersih dan sebelum menggunakan rangkaian skincare",
            price: 20_000,
            size: '5 ml'
        }],
        sunscreen: [{
            img: './image/sunscreen/Waterproof Sun Gel.png',
            nama: "Tiga Waterproof Sun Gel",
            activeIngredients: ['Centella Asiatica', 'Diethylamino Hydroxybenzoyl Hexyl Benzoate', 'Ethylhexyl Salicylate', 'Homosalate', 'Ethylhexyl Methoxycinnamate', 'Titanium Dioxide', 'Tocopherol Acetate'],
            howToUse: "Gunakan sunscreen 15-30 menit sebelum beraktivitas. Oleskan secara merata ke seluruh wajah, dengan takaran 2 jari penuh.",
            price: 200_000,
            size: '50 ml'
        }],
        treatment: [{
            img: './image/treatment/Intensive Nourishing Eye Cream.png',
            nama: "Tiga Intensive Nourishing Eye Cream",
            activeIngredients: ['Tocopherol', 'Macadamia Oil', 'Hyaluronic Acid', 'Kojic Acid', 'Polysorbate 85', 'Aloe Vera Extract'],
            howToUse: "Aplikasikan dengan lembut di sekitar kontur mata Anda dengan jari manis dan tepuk secara lembut untuk meningkatkan penyerapan.",
            price: 225_000,
            size: '10 ml'
        }],
        oils: [{
            img: './image/oils/Lift Restorative Radiance Oil.png',
            nama: "Tiga Lift Restorative Radiance Oil",
            activeIngredients: ['Tetrahexyldecyl Ascorbate', 'Tocopheryl Acetate'],
            howToUse: "Tuangkan kepada tangan, lalu usapkan pada wajah dengan lembut dan dipijat perlahan.",
            price: 230_000,
            size: '50 ml'
        }]
    },
    woundHealing: {
        cleanser: [{
            img: './image/cleanser/pH6.5 Whip Cleanser.png',
            nama: "Tiga pH6.5 Whip Cleanser",
            activeIngredients: ['Panthenol', 'Madecassoside', 'Citric Acid'],
            howToUse: "Basuh wajah, usapkan Tiga pH6.5 Whip Cleanser pada wajah, lalu pijat perlahan selama 2 menit, bilas dengan air bersih. Lakukan hanya 1 kali dalam sehari sampai kulit sehat kembali.",
            price: 200_000,
            size: '75 ml'
        }],
        toner: [{
            img:'./image/toner/Ultra Sensitive Toner.png',
            nama: "Tiga Ultra Sensitive Toner",
            activeIngredients: ['Panthenol', 'Citric Acid'],
            howToUse: "Tuangkan pada kapas, lalu usapkan pada wajah secara lembut. Lakukan setiap pagi dan malam setiap hari",
            price: 200_000,
            size: '50 ml'
        }],
        serum: [{
            img: './image/serum/Skin-Barrier Hero.png',
            nama: "Tiga Skin-Barrier Hero",
            activeIngredients: ['Panthenol 5%', 'Mugwort Extract', 'Centella Asiatica'],
            howToUse: "Oleskan beberapa tetes serum ke wajah di pagi dan malam hari. Pijat kulit secara perlahan.",
            price: 150_000,
            size: '30 ml'
        }],
        moisturizer: [{
            img: './image/moisturizer/Renewing SA Cream.png',
            nama: "Tiga Renewing SA Cream",
            activeIngredients: ['Niacinamide', 'Ceramide 1', 'Ceramide 6 II', 'Ceramide 3', 'Salicylic Acid', 'Hyaluronic Acid'],
            howToUse: "Oleskan pada wajah dan pijat secara merata, pastikan pelembab anda meresap sebelum melanjutkan ke tahap skincare selanjutnya.",
            price: 250_000,
            size: '50 ml'
        }],
        sheetMask: [{
            img: './image/sheetMask/Advanced Night Repair Concentrated Powerfoil Mask.png',
            nama: "Tiga Advanced Night Repair Concentrated Powerfoil Mask",
            activeIngredients: ['Sodium Hyaluronate', 'Tocopheryl Acetate'],
            howToUse: "Guanakan Advanced Night Repair Concentrated Powerfoil Mask pada wajah yang bersih dan sebelum menggunakan rangkaian skincare",
            price: 20_000,
            size: '5 ml'
        }],
        sunscreen: [{
            img: './image/sunscreen/Waterproof Sun Gel.png',
            nama: "Tiga Waterproof Sun Gel",
            activeIngredients: ['Centella Asiatica', 'Diethylamino Hydroxybenzoyl Hexyl Benzoate', 'Ethylhexyl Salicylate', 'Homosalate', 'Ethylhexyl Methoxycinnamate', 'Titanium Dioxide', 'Tocopherol Acetate'],
            howToUse: "Gunakan sunscreen 15-30 menit sebelum beraktivitas. Oleskan secara merata ke seluruh wajah, dengan takaran 2 jari penuh.",
            price: 200_000,
            size: '50 ml'
        }]
    },
    acneFighting: {
        cleanser: [{
            img: './image/cleanser/Acne Facial Cleanser.png',
            nama: "Tiga Acne Facial Cleanser",
            activeIngredients: ['Glycyrrhiza Uralensis (Licorice) Root Extract', 'Salix Alba (Willow) Bark Extract', 'Centella Asiatica', 'Citric Acid'],
            howToUse: "Usapkan Tiga Acne Facial Cleanser pada wajah yang basah, lalu pijat dengan lembut, dan bilas dengan air bersih. Gunakan setiap pagi dan malam setiap hari.",
            price: 125_000,
            size: '75 ml'
        }],
        toner: [{
            img: './image/toner/Retinol Toner.png',
            nama: "Tiga Retinol Toner",
            activeIngredients: ['1% Actosome Retinol', '3% Niacinamide', 'Peptide'],
            howToUse: "Oleskan untuk membersihkan kulit dan oleskan tabir surya keesokan harinya. Jika terjadi kemerahan atau iritasi, sesuaikan frekuensi pemakaiannya. Produk ini aman digunakan pada malam hari, maksimal 3 kali setiap minggu.",
            price: 200_000,
            size: '50 ml'
        },
        {
            img: './image/toner/Tea Tree Toner.png',
            nama: "Tiga Tea Tree Toner",
            activeIngredients: ['Glycyrrhiza Glabra (Licorice) Root Extract', 'Niacinamide', 'Centella Asiatica', 'Sodium Hyaluronate'],
            howToUse: "Tuangkan pada kapas, lalu usap perlahan pada kulit. Gunakan setiap pagi dan malam, setiap hari.",
            price: 150_000,
            size: '50 ml'
        }
        ],
        serum: [{
            img: './image/serum/Miraculous Refining Serum.png',
            nama: "Tiga Miraculous Refining Serum",
            activeIngredients: ['Niacinamide', 'Propylene Glycol', 'Citric Acid'],
            howToUse: "Oleskan secara merata pada kulit wajah dan leher menggunakan ujung jari, hindari area di dekat mata. Pada awal pemakaian dianjurkan digunakan pada malam hari dengan frekuensi pemakaian maksimal 3 kali dalam seminggu.",
            price: 300_000,
            size: '50 ml'
        }],
        moisturizer: [{
            img: './image/moisturizer/Gel Moisturizer.png',
            nama: "Tiga Gel Moisturizer",
            activeIngredients: ['Glycyrrhiza Glabra (Licorice) Root Extract', 'Arbutin', 'Alpha-Bisabolol', ' Melaleuca Alternifolia (Tea Tree) Leaf Oil', 'Centella Asiatica', 'Sodium Hyaluronate', 'Tocopheryl Acetate (Vitamin E)'],
            howToUse: "Oleskan pada wajah dan pijat secara merata, pastikan pelembab anda meresap sebelum melanjutkan ke tahap skincare selanjutnya.",
            price: 150_000,
            size: '50 ml'
        }],
        sheetMask: [{
            img: './image/sheetMask/Advanced Night Repair Concentrated Powerfoil Mask.png',
            nama: "Tiga Advanced Night Repair Concentrated Powerfoil Mask",
            activeIngredients: ['Sodium Hyaluronate', 'Tocopheryl Acetate'],
            howToUse: "Guanakan Advanced Night Repair Concentrated Powerfoil Mask pada wajah yang bersih dan sebelum menggunakan rangkaian skincare",
            price: 20_000,
            size: '5 ml'
        }],
        sunscreen: [{
            img: './image/sunscreen/Waterproof Sun Gel.png',
            nama: "Tiga Waterproof Sun Gel",
            activeIngredients: ['Centella Asiatica', 'Diethylamino Hydroxybenzoyl Hexyl Benzoate', 'Ethylhexyl Salicylate', 'Homosalate', 'Ethylhexyl Methoxycinnamate', 'Titanium Dioxide', 'Tocopherol Acetate'],
            howToUse: "Gunakan sunscreen 15-30 menit sebelum beraktivitas. Oleskan secara merata ke seluruh wajah, dengan takaran 2 jari penuh.",
            price: 200_000,
            size: '50 ml'
        }],
        treatment: [{
            img: './image/treatment/Acne Warrior Spot Treatment.png',
            nama: "Tiga Acne Warrior Spot Treatment",
            activeIngredients: ['Calamine', 'Bentonite', 'Zinc Oxide', 'Kaolin', 'Sulfur', 'Salicylic Acid'],
            howToUse: "Pada tahap akhir skin care, totolkan Acne Warrior pada area bermasalah (jerawat, beruntus). Apabila digunakan pada malam hari, diamkan hingga pagi. Apabila digunakan pada pagi hari, totolkan setelah sunscreen diamkan -/+ 8 jam.",
            price: 125_000,
            size: '30 ml'
        }],
        oils: [{
            img: './image/oils/Salisylsyre.png',
            nama: "Tiga Salisylsyre NAF 10% Olje Liniment",
            activeIngredients: ['Salicylic Acid', 'Tea Tree Oil'],
            howToUse: "Tuangkan kepada tangan, lalu usapkan pada wajah dengan lembut dan dipijat perlahan.",
            price: 130_000,
            size: '20 ml'
        }],
    },
    brightening: {
        cleanser: [{
            img: './image/cleanser/Snowise Brightening Cleansing Foam.png',
            nama: "Tiga Snowise Brightening Cleansing Foam",
            activeIngredients: ['Glycyrrhiza Uralensis (Licorice) Root Extract', 'Morus Alba Root Extract', 'Titanium Dioxide'],
            howToUse: "Usapkan Tiga Snowise Brightening Cleansing Foam pada wajah yang basah, lalu pijat dengan lembut, dan bilas dengan air bersih. Gunakan setiap pagi dan malam setiap hari.",
            price: 125_000,
            size: '75 ml'
        }],
        toner: [{
            img:'./image/toner/PowerSkin Refiner.png',
            nama: "Tiga PowerSkin Refiner",
            activeIngredients: ['Panthenol', 'Ascorbyl Glucoside'],
            howToUse: "Tuangkan pada kapas, lalu usapkan pada wajah secara lembut. Lakukan setiap pagi dan malam setiap hari",
            price: 500_000,
            size: '50 ml'
        }],
        serum: [{
            img: './image/serum/Miraculous Refining Serum.png',
            nama: "Tiga Miraculous Refining Serum",
            activeIngredients: ['Niacinamide', 'Propylene Glycol', 'Citric Acid'],
            howToUse: "Oleskan secara merata pada kulit wajah dan leher menggunakan ujung jari, hindari area di dekat mata. Pada awal pemakaian dianjurkan digunakan pada malam hari dengan frekuensi pemakaian maksimal 3 kali dalam seminggu.",
            price: 300_000,
            size: '50 ml'
        }],
        moisturizer: [{
            img: './image/moisturizer/Super Rescue Antioxidant.png',
            nama: "Tiga Super Rescue Antioxidant",
            activeIngredients: ['Niacinamide', 'Ferulic Acid', 'Tocopheryl Acetate', 'Sodium Hyaluronate'],
            howToUse: "Oleskan secara merata kepada wajah, lalu pijat perlahan sampai meresap. Gunakan setiap malam hari.",
            price: 300_000,
            size: '100 ml'
        }],
        sheetMask: [{
            img: './image/sheetMask/Advanced Night Repair Concentrated Powerfoil Mask.png',
            nama: "Tiga Advanced Night Repair Concentrated Powerfoil Mask",
            activeIngredients: ['Sodium Hyaluronate', 'Tocopheryl Acetate'],
            howToUse: "Guanakan Advanced Night Repair Concentrated Powerfoil Mask pada wajah yang bersih dan sebelum menggunakan rangkaian skincare",
            price: 20_000,
            size: '5 ml'
        }],
        sunscreen: [{
            img: './image/sunscreen/Waterproof Sun Gel.png',
            nama: "Tiga Waterproof Sun Gel",
            activeIngredients: ['Centella Asiatica', 'Diethylamino Hydroxybenzoyl Hexyl Benzoate', 'Ethylhexyl Salicylate', 'Homosalate', 'Ethylhexyl Methoxycinnamate', 'Titanium Dioxide', 'Tocopherol Acetate'],
            howToUse: "Gunakan sunscreen 15-30 menit sebelum beraktivitas. Oleskan secara merata ke seluruh wajah, dengan takaran 2 jari penuh.",
            price: 200_000,
            size: '50 ml'
        }],
        treatment: [{
            img: './image/treatment/Intensive Nourishing Eye Cream.png',
            nama: "Tiga Intensive Nourishing Eye Cream",
            activeIngredients: ['Tocopherol', 'Macadamia Oil', 'Hyaluronic Acid', 'Kojic Acid', 'Polysorbate 85', 'Aloe Vera Extract'],
            howToUse: "Aplikasikan dengan lembut di sekitar kontur mata Anda dengan jari manis dan tepuk secara lembut untuk meningkatkan penyerapan.",
            price: 225_000,
            size: '10 ml'
        }],
        oils: [{
            img: './image/oils/Lift Restorative Radiance Oil.png',
            nama: "Tiga Lift Restorative Radiance Oil",
            activeIngredients: ['Tetrahexyldecyl Ascorbate', 'Tocopheryl Acetate'],
            howToUse: "Tuangkan kepada tangan, lalu usapkan pada wajah dengan lembut dan dipijat perlahan.",
            price: 230_000,
            size: '50 ml'
        }]
    },
}



let keranjang = {}

function filter(data){
    let result=[]
    for(let i =0;i<data.length;i++){
        let sama = false
        for(let j=0;j<result.length;j++){
            if(result[j].nama===data[i].nama){
                sama = true
                break
            }
        }
        if(sama===false){
            result.push(data[i])
        }
    }
    return result
}

function cariskincare(goal, type){
    let result = []
    for(let goalz of goal){
        if(skincares[goalz].hasOwnProperty(type)){
            for(let skincare of skincares[goalz][type]){
                result.push(skincare)
            }
        }
    }
    result=filter(result)
    let text =''
    for(let konten of result){
        /* text+=`<div class="card">
        <img src="${konten.img}" alt="${konten.nama}" style="width:100%">
        <h1>${konten.nama}</h1>
        <p class="price">Rp. ${konten.price}</p>
        <p>${konten.howToUse}</p>
        <p><button onClick="tambahkeranjang(['${konten.nama}',${konten.price}])">Add to Cart</button></p>
      </div>` */
        let ing =''
        for(let i = 0;i<konten.activeIngredients.length;i++){
            if(i===0){
                ing+=konten.activeIngredients[i]
            }else{
                ing+=`, ${konten.activeIngredients[i]}`
            }
        }
        text+=`<div class="card mb-3" style="max-width: 1500px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${konten.img}" class="card-img" alt="${konten.nama}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" style="text-align: left;">${konten.nama}</h5>
              <p class="card-text" id="ingredients" style="text-align: left;">Active Ingridients: ${ing}</p>
              <p class="card-text" style="text-align: left;">${konten.howToUse}</p>
              <p class="card-text" id="harga" style="text-align: right;">Rp. ${konten.price}</p>
              <a href="#" class="btn btn-primary" style="float: right;" onclick="tambahkeranjang(['${konten.nama}',${konten.price},'${konten.img}'])">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>`
    }
    document.getElementById('content').innerHTML=text
    return result
}

function check(){
    let result = []
    if(document.getElementById("antiAging").checked===true){
        result.push("antiAging")
    }
    if(document.getElementById("woundHealing").checked===true){
        result.push("woundHealing")
    }
    if(document.getElementById("acneFighting").checked===true){
        result.push("acneFighting")
    }
    if(document.getElementById("brightening").checked===true){
        result.push("brightening")
    }
    let tipe = document.getElementById("optionskincare").value
    cariskincare(result, tipe)
    console.log(result)
}

function tambahkeranjang(item){
    if(!keranjang.hasOwnProperty(item[0])){
        keranjang[item[0]] = {
            price: item[1],
            qty: 1,
            img: item[2]
        }
    }else{
        keranjang[item[0]].qty++
    }
    togglecart();
    cekcount()
    console.log(keranjang)
}

function cekcount(){
    let count = 0
    for(let i in keranjang){
        count++
    }
    document.getElementById('cartcount').innerHTML=count
}

function removeitem(item){
    delete keranjang[item]
    cekcount()
    togglecart()
}

function togglecart(){
    let cart = document.getElementById('cartTable')
    let header = '<tr><thead><td>Image</td><td>Nama Barang</td><td>Harga</td><td>qty</td><td>Total Harga</td><td>Action</td></thead></tr>'
    let text =''
    for(let konten in keranjang){
        let total = keranjang[konten].price*keranjang[konten].qty
        text+=`<tr><td><img src='${keranjang[konten].img}'></td><td>${konten}</td><td>${keranjang[konten].price}</td><td>${keranjang[konten].qty}</td><td>${total}</td><td><button type="button" class="btn btn-primary" onclick="plusqty('${konten}')">+</button><button type="button" class="btn btn-primary" onclick="minusqty('${konten}')">-</button><button class="btn btn-danger" onclick="removeitem('${konten}')">Remove</button></td></tr>`
    }
    console.log(cart.innerHTML+'<test')
    cart.innerHTML=header+text
    //console.log(cart.innerHTML)
}

function plusqty(item){
    keranjang[item].qty++
    cekcount()
    togglecart()
}

function minusqty(item){
    if(keranjang[item].qty>1){
        keranjang[item].qty--
    }
    cekcount()
    togglecart()
}

function checkout(){
    keranjang = {}
    alert("Check Out Berhasil")
    cekcount()
    togglecart()
}