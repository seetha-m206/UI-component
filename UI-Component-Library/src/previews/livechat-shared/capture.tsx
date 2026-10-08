import { createRoot } from 'react-dom/client';
import { livechatPreviews } from './registry';

const params = new URLSearchParams(location.search);
const id = params.get('component') ?? 'livechat-application-shell';
const entry = livechatPreviews[id];
const root = createRoot(document.getElementById('capture-root')!);

if (!entry || entry.type !== 'reconstructed') {
  root.render(<p>Unknown component.</p>);
} else {
  const Component = entry.Component;
  const fixture =
    entry.fixtures.find((candidate) => candidate.id === params.get('fixture')) ?? entry.fixtures[0];
  root.render(
    <>
      <header className="capture">
        <div>
          <strong>{id.replaceAll('-', ' ')}</strong>
          <small>Text and LiveChat reference · fictional local fixture</small>
        </div>
        <a href={`/livechat/${id}`}>Component record ↗</a>
      </header>
      <main>
        <Component {...fixture.props} />
      </main>
    </>
  );
  requestAnimationFrame(() => window.scrollTo(0, 0));
}
