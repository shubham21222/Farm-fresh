import { ShoppingCart, Heart, Search, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-green-100 z-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Agro Market"
              width={40}
              height={40}
              className="w-10 h-10"
            /> */}
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold">Agro Market</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {["Home", "Shop", "Farmers", "About", "Contact"].map((item) => (
              <Link key={item} href="#" className="text-sm hover:text-primary">
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;