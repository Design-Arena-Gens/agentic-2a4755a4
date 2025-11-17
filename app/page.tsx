export default function Home() {
  return (
    <main className="page">
      <section className="scene">
        <div className="sun" />
        <div className="man">
          <div className="head">
            <div className="hair" />
            <div className="ear" />
            <div className="eye left">
              <div className="pupil" />
            </div>
            <div className="eye right">
              <div className="pupil" />
            </div>
            <div className="nose" />
            <div className="mouth">
              <div className="teeth" />
            </div>
          </div>
          <div className="body">
            <div className="arm left" />
            <div className="arm right" />
            <div className="torso" />
          </div>
          <div className="hand">
            <div className="cone">
              <div className="scoop vanilla" />
              <div className="scoop chocolate" />
              <div className="drip" />
            </div>
          </div>
        </div>
        <div className="grass" />
      </section>
      <footer className="caption">
        <h1>Man Eating an Ice Cream</h1>
        <p>A playful CSS illustration of a sunny afternoon treat.</p>
      </footer>
    </main>
  );
}
