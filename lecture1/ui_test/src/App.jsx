import { Box, Container, Typography, Divider } from '@mui/material';
import ButtonSection from './components/sections/ButtonSection';
import MenuSection from './components/sections/MenuSection';

function App() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 1, fontWeight: 700, color: 'text.primary' }}
        >
          UI Components
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, color: 'text.secondary' }}>
          16가지 UI 요소 모음
        </Typography>
        <Divider sx={{ mb: 6 }} />

        <ButtonSection />
        <MenuSection />
        {/* 섹션 추가 위치 — 순차적으로 아래에 삽입 */}

      </Container>
    </Box>
  );
}

export default App;
