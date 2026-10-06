// Local Vite inspection harness. The catalogue uses registry.ts.
import { createRoot } from 'react-dom/client';
import { SalesforceService } from './SalesforceService';
import { salesforceComponents } from './catalogue';
const params = new URLSearchParams(window.location.search);
const entry =
  salesforceComponents.find((item) => item.id === params.get('id')) ?? salesforceComponents[0];
const container = document.getElementById('root');
if (container)
  createRoot(container).render(
    <SalesforceService variant={entry.variant} initialState={params.get('state') ?? 'default'} />
  );
