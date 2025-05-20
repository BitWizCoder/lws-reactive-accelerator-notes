function Logo() {
  return (
    <img src="https://i.imgur.com/H2gMv9P.png" width={100} alt="Ubuntu Logo" />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Ubuntu is a Popular Linux Distribution</h1>
      <Logo />
      <Logo />
      <Logo />
    </section>
  );
}
