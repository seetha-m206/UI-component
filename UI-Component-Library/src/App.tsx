import { Route, Routes } from 'react-router-dom';
import { Layout } from '@components/shell/Layout';
import { OverviewPage } from '@pages/OverviewPage';
import { ComponentDetailPage } from '@pages/ComponentDetailPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/:brand/:id" element={<ComponentDetailPage />} />
      </Routes>
    </Layout>
  );
}
