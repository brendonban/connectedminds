export function SiteFooter() {
  return (
    <div className="py-3 gap-6 mt-8 sm:mt-16">
      <div className="max-w-[1200px] mx-auto">
        <footer className="text-base px-4 py-8">
          <div className="flex items-center flex-grow">
            <a
              href="/"
              className="text-muted transition-all duration-200 ease-in-out hover:text-accent-primary flex-grow"
            >
              <p className="text-[clamp(1rem,1.2vw,1.125rem)] font-semibold">
                &copy; {new Date().getFullYear()} Connected Minds
              </p>
            </a>
            <ul className="flex gap-2">
              <li>
                <a
                  className="text-muted transition-all duration-200 ease-in-out hover:text-accent-primary px-2 text-lg inline-block"
                  aria-label="Facebook"
                  href="https://www.facebook.com/profile.php?id=61585415515679"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <p className="text-muted mt-4">
            <a
              href="mailto:julia.m3@imail.sunway.edu.my?subject=Inquiry%20About%20Connected%20Minds%2C%20Stronger%20Minds"
              className="hover:text-accent-primary hover:underline"
            >
              julia.m3@imail.sunway.edu.my
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
