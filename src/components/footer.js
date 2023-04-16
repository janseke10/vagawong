import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-14 flex flex-col lg:flex-row items-center">
          <h3 className="text-lg lg:text-xl text-purple font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            By North Sea Software Development.
          </h3>
        </div>
      </Container>
    </footer>
  );
}
