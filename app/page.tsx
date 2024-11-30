import Link from "next/link";

const Home = () => {
  return (
    <div className="relative">
      <section className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen" style={{ backgroundImage: "url(/logo1.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
      </section>
      <section className="container py-8 px-2 sm:px-0 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">Welcome to Azka Boutique</h1>
        <div className="w-full h-[2px] mt-2 bg-[#333333]" />
        <div className="mt-2">
          <h1>Hallo selamat datang</h1>
          <p>Untuk konfirmasi ke wa silahkan TAP LOGO whatsapp di bawah pojok kanan 👇🏼</p>
          <ul className="list-disc list-inside mt-5">
            <li>Jika link error bisa di save 62895400976304</li>
            <li>Masuk grup Whatsapp untuk mendapatkan info lebih lanjut tentang product dan jadwal live tiktok kami</li>
          </ul>
          <div className="space-y-4 mt-4">
            <header className="text-md font-bold">
              Link Grup Whatsapp
            </header>
            <ul className="mt-5">
              <li className="w-full border border-[#333333] hover:bg-[#444444] hover:text-[#ffffff] transition-colors py-1 px-2 rounded-md">
                <Link className="flex w-full" href={'https://chat.whatsapp.com/BDooifRPOv4JXQNuZDmJeG'}>
                  Link GRUP INFO LIVE 1
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Link href={'https://wa.me/62895400976304'} className="fixed bottom-8 right-8">
        <svg
          height="40px"
          width="40px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 58 58"
          xmlSpace="preserve"
        >
          <g>
            <path
              style={{ fill: '#2CB742' }}
              d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5
          S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"
            />
            <path
              style={{ fill: '#FFFFFF' }}
              d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42
          c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242
          c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169
          c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097
          c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"
            />
          </g>
        </svg>
      </Link>
    </div>
  );
}

export default Home