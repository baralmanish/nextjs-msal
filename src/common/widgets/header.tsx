import Brand from "@/common/components/ui/brand";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Brand />
          </div>

          <Nav />
        </div>
      </div>
    </header>
  );
}
