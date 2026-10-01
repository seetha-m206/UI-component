import { createRoot } from 'react-dom/client';
import { writesonicPreviews } from './registry';
const id =
  new URLSearchParams(location.search).get('component') ?? 'writesonic-onboarding-report-shell';
const entry = writesonicPreviews[id];
const root = createRoot(document.getElementById('capture-root')!);
if (!entry || entry.type !== 'reconstructed') root.render(<p>Unknown component.</p>);
else {
  const Component = entry.Component;
  const fixture =
    entry.fixtures.find((f) => f.id === new URLSearchParams(location.search).get('fixture')) ??
    entry.fixtures[0];
  root.render(
    <>
      <header className="capture">
        <div>
          <strong>{id.replace('writesonic-', '').replaceAll('-', ' ')}</strong>
          <small>Writesonic reference · observed onboarding only · fictional local fixture</small>
        </div>
        <a href={'/writesonic/' + id}>Component record ↗</a>
      </header>
      <main>
        <Component {...fixture.props} />
      </main>
    </>
  );
}
