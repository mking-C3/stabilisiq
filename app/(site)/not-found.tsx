import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { BUTTON, BUTTON_QUIET } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main"
        className="mx-auto max-w-[1120px] px-5 py-20 md:px-8 md:py-28"
      >
        <p className="font-mono text-[15px] text-ink-500">404</p>
        <h1 className="mt-3 max-w-[16ch] font-head text-[40px] font-bold leading-[1.06] tracking-[-0.02em] sm:text-[56px]">
          That page <span className="hl">leaked</span>.
        </h1>
        <p className="mt-6 max-w-[52ch] text-[19px] leading-[1.6] text-ink-700">
          There is nothing at this address. It may have moved when the site was
          rebuilt, or the link was mistyped.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className={BUTTON}>
            Back to the start
          </Link>
          <Link href="/#calculator" className={BUTTON_QUIET}>
            Run the leak calculator
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
