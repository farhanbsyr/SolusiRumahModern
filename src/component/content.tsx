import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Volume2,
  Zap,
  Shield,
  Clock,
  Star,
  CheckCircle,
  MessageCircle,
  Truck,
  Award,
} from "lucide-react";
import Image from "../assets/gembok.jpeg";
import ahmadImage from "../assets/ahmad_testi_gembok.jpeg";
import fitriaImage from "../assets/fitria_testi_img_gembok.jpeg";
import humairahImage from "../assets/humairah_test_gembok.jpeg";
import VideoDemo from "./VideoContent";

export default function Gembok() {
  const scrollToVideo = () => {
    const videoSection = document.getElementById("video-demo");
    if (videoSection) {
      const offset = -60; // ubah sesuai kebutuhan, misalnya 100px lebih ke bawah
      const y =
        videoSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <a
        href="https://wa.me/6287852433015?text=Halo%20Kak!%20Saya%20mau%20ambil%20promo%20Gembok%20Alarm%20anti%20malingnya.%20Bisa%20minta%20detail%20pemesanan%20lengkapnya%3F"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        className="fixed bottom-4 right-4 bg-red-500 font-semibold text-white px-4 py-3 rounded-full shadow-lg z-50 text-sm"
      >
        💬 Ambil Promo Sekarang
      </a>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                🔥 PROMO TERBATAS - DISKON 40%
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Gembok Anti Maling
                <span className="text-red-600"> Terkuat</span> di Indonesia
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lindungi properti berharga Anda dengan gembok premium yang tahan
                banting, anti potong, dan dilengkapi teknologi keamanan
                terdepan. Sudah dipercaya lebih dari 10,000+ pelanggan di
                seluruh Indonesia.
              </p>
              <div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white  text-lg m-0 p-0"
                  >
                    <a
                      href="https://wa.me/6287852433015?text=Halo%20Kak!%20Saya%20mau%20ambil%20promo%20Gembok%20Alarm%20anti%20malingnya.%20Bisa%20minta%20detail%20pemesanan%20lengkapnya%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      role="button"
                      className="w-full h-full flex flex-row items-center justify-center px-8 py-3"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Pesan Sekarang via WhatsApp
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={scrollToVideo}
                    className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg"
                  >
                    Lihat Demo Produk
                  </Button>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  📦 Mulai dari{" "}
                  <span className="line-through font-semibold text-black">
                    Rp 259.000
                  </span>{" "}
                  <strong className="text-red-500">Rp 149.000</strong> -
                  Termasuk 3 Kunci, Alarm 110dB +{" "}
                  <strong className="text-red-500">BISA COD.</strong>
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Image}
                alt="Gembok Anti Maling SecureLock Pro"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                TERLARIS!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Apakah Anda Pernah Mengalami Ini?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition">
                <CardContent className="p-6 text-center">
                  <div className="text-red-500 text-4xl mb-4">😰</div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Motor/Sepeda Dicuri
                  </h3>
                  <p className="text-gray-600">
                    Kehilangan kendaraan kesayangan dalam sekejap.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition">
                <CardContent className="p-6 text-center">
                  <div className="text-yellow-500 text-4xl mb-4">💸</div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Kerugian Finansial
                  </h3>
                  <p className="text-gray-600">
                    Harus beli kendaraan baru dengan harga mahal.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition">
                <CardContent className="p-6 text-center">
                  <div className="text-orange-500 text-4xl mb-4">😡</div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Stres & Kesal
                  </h3>
                  <p className="text-gray-600">
                    Perasaan tidak aman dan was-was terus menerus.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-red-600 py-4 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">
              PROMO BERAKHIR DALAM 24 JAM! Stok Terbatas - Hanya 50 Unit Tersisa
            </span>
          </div>
        </div>
      </section>

      <section className="pt-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Solusi Terbaik: Gembok Alarm Anti Maling
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dilengkapi teknologi sensor pintar yang bisa membedakan gerakan
              angin biasa dengan upaya pencurian!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={Image}
                alt="Gembok Anti Maling"
                width={400}
                height={400}
                className="mx-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 text-red-500 rounded-full p-3">
                  <Volume2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Alarm Super Keras 110dB
                  </h3>
                  <p className="text-gray-600">
                    Suara alarm yang sangat keras membuat maling kabur dan
                    menarik perhatian sekitar.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 text-yellow-500 rounded-full p-3">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Sensor Pintar Anti Salah Alarm
                  </h3>
                  <p className="text-gray-600">
                    Tidak berbunyi karena angin atau goyangan kecil — hanya
                    bereaksi pada gerakan mencurigakan.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-500 rounded-full p-3">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Sistem Keamanan Bertingkat
                  </h3>
                  <p className="text-gray-600">
                    Semakin dipaksa, semakin sensitif dan alarm semakin keras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cara penggunaan */}
      <section className="py-16 bg-white" id="video-demo">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Cara Penggunaan Super Mudah
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Hanya dalam 3 langkah sederhana, gembok siap melindungi kendaraan
              Anda dari pencurian.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-end">
              <VideoDemo />
            </div>

            {/* Langkah Penggunaan */}
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Buka Tangkal Gembok",
                  desc: "Tekan tombol kecil & tarik ke atas untuk membuka kunci.",
                },
                {
                  step: "2",
                  title: "Putar Posisi Tiang",
                  desc: "Putar posisi tiang ke arah 'T' dan masukkan ke lubang alarm.",
                },
                {
                  step: "3",
                  title: "Pasang & Aktifkan",
                  desc: "Kunci otomatis aktif dalam 15 detik. Siap melindungi!",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500 text-white font-bold rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/6287852433015?text=Halo%20Kak!%20Saya%20mau%20ambil%20promo%20Gembok%20Alarm%20anti%20malingnya.%20Bisa%20minta%20detail%20pemesanan%20lengkapnya%3F"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg rounded-full shadow-md transition"
            >
              🎁 Pesan Sekarang & Dapatkan Harga Promo!
            </a>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Teknologi Canggih yang Tidak Ada di Gembok Lain
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Dibanding gembok biasa, Gembok Alarm ini punya fitur ekstra untuk
              melawan pencurian.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Sistem Keamanan Bertingkat
                </h3>
              </div>
              <p className="text-gray-600">
                Alarm berbunyi semakin keras jika dipaksa. Tidak mudah dibobol
                seperti gembok biasa.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Sensor Pintar Anti Angin
                </h3>
              </div>
              <p className="text-gray-600">
                Hanya merespons getaran kuat. Tidak akan berbunyi karena angin
                atau guncangan kecil.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Volume2 className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Alarm 110dB Tinggi
                </h3>
              </div>
              <p className="text-gray-600">
                Suara sekeras sirene ambulans — cukup untuk membuat pencuri
                panik dan kabur.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Pelanggan Kami?
            </h2>
            <div className="flex justify-center items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-6 w-6 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="text-lg font-semibold ml-2">
                4.9/5 (10.000+ ulasan)
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Bagus banget gemboknya,, tanpa cacat tanpa minus apapun.
                  Suara alarm nyaring seperti alarm mobil. Packing juga rapi dan
                  bublewarp tebal. Tidak mengecewakan"
                </p>
                <div className="flex items-center gap-3">
                  <div className=" rounded-full">
                    <img
                      src={ahmadImage}
                      className="w-10 h-10 rounded-full"
                      alt="profile pelanggan"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">ahmadsadilah</p>
                    <p className="text-sm text-gray-500">Jakarta</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Jangan ragu belanja di sini, barangnya bagus , pengirimannya
                  cepat , mantap deh 👌👌👌"
                </p>
                <div className="flex items-center gap-3">
                  <div className=" rounded-full">
                    <img
                      src={fitriaImage}
                      className="w-10 h-10 rounded-full"
                      alt="profile pelanggan"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">fitrisika231191</p>
                    <p className="text-sm text-gray-500">Surabaya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Paket aman sesuai orderan. Bahan bagus mantep Bunyinya
                  kenceng banget. Car operasiinya juga gampang. Tinggal balik
                  besinya aja nanti dy bunyi 📦."
                </p>
                <div className="flex items-center gap-3">
                  <div className=" rounded-full">
                    <img
                      src={humairahImage}
                      className="w-10 h-10 rounded-full"
                      alt="profile pelanggan"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">humairah</p>
                    <p className="text-sm text-gray-500">Bandung</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Harga Spesial Hari Ini!
            </h2>
            <p className="text-lg text-gray-600">
              Dapatkan diskon hingga 40% untuk pembelian hari ini
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Paket Single</h3>
                <div className="mb-6">
                  <span className="text-gray-400 line-through text-xl">
                    Rp 259.000
                  </span>
                  <div className="text-4xl font-bold text-red-600">
                    Rp 149.000
                  </div>
                  <Badge className="bg-red-100 text-red-800 mt-2">
                    Hemat 40%
                  </Badge>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>1 Gembok SecureLock Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>3 Kunci Cadangan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>2 Batre Cadangan</span>
                  </li>
                </ul>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/6287852433015?text=Halo%20Kak!%20Saya%20mau%20ambil%20promo%20Gembok%20Alarm%20anti%20malingnya.%20Bisa%20minta%20detail%20pemesanan%20lengkapnya%3F"
                  className="w-full block bg-red-600 hover:bg-red-700 text-white text-center font-medium text-[16px] py-3 rounded-md"
                >
                  Pesan Sekarang
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-red-600 text-white px-4 py-1">
                  PALING LARIS
                </Badge>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Paket Family</h3>
                <div className="mb-6">
                  <span className="text-gray-400 line-through text-xl">
                    Rp 777.000
                  </span>
                  <div className="text-4xl font-bold text-red-600">
                    Rp 399.000
                  </div>
                  <Badge className="bg-red-100 text-red-800 mt-2">
                    Hemat 49%
                  </Badge>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>3 Gembok SecureLock Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>9 Kunci Cadangan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>6 Batre Cadangan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Gratis Ongkir</span>
                  </li>
                </ul>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/6287852433015?text=Halo%20Kak!%20Saya%20mau%20ambil%20promo%20paket%20Family-nya%20untuk%20Gembok%20Alarm%20anti%20malingnya.%20Bisa%20minta%20detail%20pemesanan%20lengkapnya%3F"
                  className="w-full block bg-red-600 hover:bg-red-700 text-white text-center font-medium text-[16px] py-3 rounded-md"
                >
                  Pesan Paket Family
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Jangan Tunggu Sampai Terlambat!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lindungi aset berharga Anda sekarang juga. Promo terbatas hanya
            untuk 100 pembeli pertama hari ini!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className=" p-0 m-0 text-lg font-bold ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white flex flex-row items-center rounded-md text-red-600 hover:bg-gray-100 px-8 py-4 "
                href="https://wa.me/6287852433015?text=Halo%20Kak!%20Saya%20mau%20ambil%20promo%20Gembok%20Alarm%20anti%20malingnya.%20Bisa%20minta%20detail%20pemesanan%20lengkapnya%3F"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Pesan via WhatsApp Sekarang
              </a>
            </Button>
          </div>
          <div className="flex justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Pembayaran Aman</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <span>Pengiriman Cepat</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>Gembok Berkualitas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className=" text-center text-gray-400">
          <p>&copy; 2025 SecureLock Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
