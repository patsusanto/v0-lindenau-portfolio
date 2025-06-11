import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fffde9]">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-light text-black">Tatjana Lindenau</h1>
        <nav className="flex gap-8">
          <Link href="/" className="text-black underline underline-offset-4">
            Home
          </Link>
          <Link href="/gallery" className="text-black hover:underline underline-offset-4">
            Gallery
          </Link>
          <Link href="/about" className="text-black hover:underline underline-offset-4">
            About & Contact
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-8 py-16 max-w-7xl mx-auto">
        {/* Artwork Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Abstract Red Painting */}
          <div className="aspect-[3/4]">
            <Image
              src="/placeholder.svg?height=600&width=450"
              alt="Abstract painting with vibrant red, yellow, and blue brushstrokes"
              width={450}
              height={600}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

          {/* Geometric Blue Circle */}
          <div className="aspect-[3/4]">
            <Image
              src="/placeholder.svg?height=600&width=450"
              alt="Geometric artwork featuring a blue circle with golden linear patterns"
              width={450}
              height={600}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

          {/* Colorful Abstract */}
          <div className="aspect-[3/4]">
            <Image
              src="/placeholder.svg?height=600&width=450"
              alt="Colorful abstract painting with red, blue, and mixed colors"
              width={450}
              height={600}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>

        {/* Gallery Button */}
        <div className="flex justify-center">
          <Button asChild className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-sm font-normal">
            <Link href="/gallery">To Gallery</Link>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-8 max-w-7xl mx-auto">
        <div className="flex justify-center gap-8 text-[#837e7e]">
          <Link href="/privacy" className="hover:text-black transition-colors">
            Privacy Policy
          </Link>
          <Link href="/impressum" className="hover:text-black transition-colors">
            Impressum
          </Link>
        </div>
      </footer>
    </div>
  )
}
