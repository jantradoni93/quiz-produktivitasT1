import React, { useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const businessData = {
    name: 'CV. ANGGAREKSA',
    tagline: 'General Contractors and Supplier',
    npwp: '0718 9009 9672 8000',
    nib: '9120502232014',
    establishmentDate: '09 Januari 2015',
    address: 'Jl. Jelawat, GG. Kartika No. 04, RT. 004, RW. 000, Timbau, Tenggarong, Kabupaten Kutai Kartanegara, Kalimantan Timur',
    phone: '081351281504',
    email: 'cvanggareksa@gmail.com',
    businessScale: 'Usaha Kecil',
    investmentStatus: 'PMDN',
    capital: 'Rp 850.000.000',
    directors: [
      { name: 'Sri Nuryanti', role: 'Direktur', capital: 'Rp 450.000.000', birthDate: '04 Juni 1976' },
      { name: 'Meini Yulianti', role: 'Wakil Direktur', capital: 'Rp 400.000.000', birthDate: '28 Mei 1980' },
      { name: 'Pandu Wirawan', role: 'Pesero Komanditer', capital: '-', birthDate: '02 Juli 1981' }
    ]
  };

  const businessSectors = [
    {
      category: 'Konstruksi',
      color: 'from-green-500 to-emerald-600',
      items: [
        'Instalasi Listrik (43211)',
        'Konstruksi Gedung Perkantoran (41012)',
        'Konstruksi Gedung Industri (41013)',
        'Konstruksi Gedung Kesehatan (41015)',
        'Konstruksi Gedung Pendidikan (41016)',
        'Konstruksi Jalan & Jembatan (42101, 42102)',
        'Instalasi Pendingin & Ventilasi (43224)'
      ]
    },
    {
      category: 'Perdagangan & Reparasi',
      color: 'from-blue-500 to-cyan-600',
      items: [
        'Perdagangan Eceran Peralatan Listrik (47592)',
        'Perdagangan Eceran Pupuk & Pestisida (47845)',
        'Reparasi Mobil (45201)',
        'Reparasi Sepeda Motor (45407)',
        'Perdagangan Suku Cadang Mobil (45302)',
        'Perdagangan Bahan Bakar Minyak (47301)'
      ]
    },
    {
      category: 'Desain & Kreatif',
      color: 'from-purple-500 to-pink-600',
      items: [
        'Desain Komunikasi Visual/Desain Grafis (74130)',
        'Pelaku Kreatif Seni Musik (90022)',
        'Jasa Penyelenggara Event Khusus (82302)',
        'Aktivitas Fotokopi & Penyiapan Dokumen (82190)'
      ]
    },
    {
      category: 'Pendidikan & Pelatihan',
      color: 'from-yellow-500 to-orange-600',
      items: [
        'Pendidikan Lainnya Pemerintah (85430)',
        'Pelatihan Kerja Pemerintah Lainnya (78419)',
        'Kursus Kecantikan & Tata Rias',
        'Pendidikan Menjahit, Memasak & Gizi'
      ]
    },
    {
      category: 'Industri & Pertanian',
      color: 'from-amber-500 to-lime-600',
      items: [
        'Industri Produk Roti & Kue (10710)',
        'Industri Air Minum & Air Mineral (11050)',
        'Penjahitan & Pembuatan Pakaian (14120)',
        'Pembenihan Ikan Air Payau (03252)',
        'Industri Pencetakan Umum (18111)'
      ]
    }
  ];

  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900">{businessData.name}</h1>
              <p className="text-sm text-gray-600">{businessData.tagline}</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'sectors', label: 'Bidang Usaha' },
              { id: 'management', label: 'Manajemen' },
              { id: 'contact', label: 'Kontak' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const OverviewSection = () => (
    <div className="py-12 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Profil Perusahaan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi terintegrasi untuk kebutuhan konstruksi, perdagangan, dan jasa profesional di Kalimantan Timur
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold ml-4 text-gray-900">Identitas Perusahaan</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">NPWP:</span>
                <span className="text-gray-900">{businessData.npwp}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">NIB:</span>
                <span className="text-gray-900">{businessData.nib}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Tanggal Berdiri:</span>
                <span className="text-gray-900">{businessData.establishmentDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Skala Usaha:</span>
                <span className="text-gray-900">{businessData.businessScale}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Status Investasi:</span>
                <span className="text-gray-900">{businessData.investmentStatus}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Modal:</span>
                <span className="text-gray-900">{businessData.capital}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold ml-4 text-gray-900">Lokasi Strategis</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">{businessData.address}</p>
              <div className="mt-6">
                <div className="flex items-center mb-3">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold text-gray-900">{businessData.phone}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold text-gray-900">{businessData.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Visi & Misi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <h4 className="text-xl font-bold">Visi</h4>
              </div>
              <p className="text-lg leading-relaxed">
                Menjadi perusahaan kontraktor umum dan supplier terpercaya yang memberikan solusi integrasi konstruksi dan distribusi produk berkualitas tinggi di Kalimantan Timur.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h4 className="text-xl font-bold">Misi</h4>
              </div>
              <ul className="space-y-2 text-lg">
                <li>✓ Menyediakan jasa konstruksi profesional dengan standar kualitas tinggi</li>
                <li>✓ Menjadi mitra utama dalam penyediaan barang dan jasa</li>
                <li>✓ Memberikan layanan pelanggan yang responsif, transparan, dan berkelanjutan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SectorsSection = () => (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Bidang Usaha Kami</h2>
          <p className="text-xl text-gray-600">Beragam layanan yang kami tawarkan untuk memenuhi kebutuhan Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {businessSectors.map((sector, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${sector.color} rounded-2xl p-8 text-white transform transition-all duration-300 group-hover:scale-105 shadow-xl`}>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="mr-3">{index + 1}</span>
                  {sector.category}
                </h3>
                <ul className="space-y-3">
                  {sector.items.slice(0, 4).map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                {sector.items.length > 4 && (
                  <div className="mt-4 text-sm opacity-90">
                    +{sector.items.length - 4} layanan lainnya
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Legalitas & Perizinan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">NIB Terdaftar</h4>
              <p className="text-gray-300">Nomor Induk Berusaha resmi dari pemerintah</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">NPWP Valid</h4>
              <p className="text-gray-300">Nomor Pokok Wajib Pajak aktif sejak 2015</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Akta Notaris</h4>
              <p className="text-gray-300">Legalitas hukum terbaru per Juli 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ManagementSection = () => (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Manajemen</h2>
          <p className="text-xl text-gray-600">Dipimpin oleh profesional berpengalaman</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessData.directors.map((director, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">
                    {director.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{director.name}</h3>
                <p className="text-lg text-blue-600 font-semibold">{director.role}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">Lahir: {director.birthDate}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span className="text-gray-700">{director.capital}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Struktur Modal Perusahaan</h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="w-full lg:w-1/2">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 text-white">
                <div className="text-center mb-4">
                  <h4 className="text-xl font-bold">Total Modal</h4>
                  <p className="text-3xl font-bold">{businessData.capital}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Sri Nuryanti</span>
                    <span className="font-bold">Rp 450.000.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Meini Yulianti</span>
                    <span className="font-bold">Rp 400.000.000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Komposisi Kepemilikan</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Sri Nuryanti</span>
                      <span className="text-sm font-medium text-gray-700">52.9%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{width: '52.9%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Meini Yulianti</span>
                      <span className="text-sm font-medium text-gray-700">47.1%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{width: '47.1%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactSection = () => (
    <div className="py-16 bg-gradient-to-br from-green-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Hubungi Kami</h2>
          <p className="text-xl text-green-100">Siap melayani kebutuhan Anda dengan profesional</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Alamat</h4>
                  <p className="text-green-100">{businessData.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Telepon</h4>
                  <p className="text-green-100">{businessData.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email</h4>
                  <p className="text-green-100">{businessData.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300" placeholder="Masukkan email Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300" placeholder="Tulis pesan Anda di sini"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Siap Menjadi Mitra Bisnis Anda</h3>
            <p className="text-lg mb-6 text-green-100 max-w-3xl mx-auto">
              Dengan legalitas lengkap, tim profesional, dan komitmen terhadap kualitas, CV. Anggareksa siap mendukung kesuksesan proyek Anda dari tahap perencanaan hingga eksekusi.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">Konstruksi Profesional</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">Supplier Terpercaya</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">Layanan Terintegrasi</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">Legalitas Lengkap</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'sectors':
        return <SectorsSection />;
      case 'management':
        return <ManagementSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {renderActiveSection()}
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">{businessData.name}</h3>
            </div>
            <p className="text-gray-400 mb-6">{businessData.tagline}</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
              <p className="text-gray-400">NPWP: {businessData.npwp}</p>
              <p className="text-gray-400">NIB: {businessData.nib}</p>
              <p className="text-gray-400">Sejak {businessData.establishmentDate}</p>
            </div>
            <p className="text-gray-500">
              © 2025 CV. Anggareksa. All rights reserved. One Stop Solution for Construction & Supplies
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;