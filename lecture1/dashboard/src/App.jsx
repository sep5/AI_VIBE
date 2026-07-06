import { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Snackbar,
  Alert,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import ImageIcon from '@mui/icons-material/Image';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TodayIcon from '@mui/icons-material/Today';
import { supabase } from './lib/supabase';
import Sidebar from './components/common/Sidebar';
import TopBar from './components/common/TopBar';
import RightPanel from './components/common/RightPanel';
import StatCard from './components/ui/StatCard';
import ImageUploader from './components/ui/ImageUploader';
import ImageGallery from './components/ui/ImageGallery';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeNav, setActiveNav] = useState('gallery');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const fetchImages = useCallback(async () => {
    setIsLoading(true);
    const { data, error } = await supabase.storage.from('images').list('', {
      sortBy: { column: 'created_at', order: 'desc' },
    });

    if (error) {
      showSnackbar('이미지 목록을 불러오지 못했습니다.', 'error');
      setIsLoading(false);
      return;
    }

    const imageList = (data || [])
      .filter((f) => f.name !== '.emptyFolderPlaceholder')
      .map((file) => {
        const { data: urlData } = supabase.storage.from('images').getPublicUrl(file.name);
        return { name: file.name, url: urlData.publicUrl, createdAt: file.created_at };
      });

    setImages(imageList);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleDelete = async (fileName) => {
    const { error } = await supabase.storage.from('images').remove([fileName]);
    if (error) {
      showSnackbar('삭제에 실패했습니다.', 'error');
      return;
    }
    showSnackbar('이미지가 삭제되었습니다.');
    fetchImages();
  };

  const handleUploadSuccess = () => {
    showSnackbar('업로드가 완료되었습니다.');
    fetchImages();
  };

  const now = new Date();

  const stats = [
    {
      label: '전체 이미지',
      value: images.length,
      unit: '장',
      icon: <ImageIcon />,
      color: '#A8C4D8',
      iconBg: '#4A6FA5',
    },
    {
      label: '이번 달 업로드',
      value: images.filter((img) => {
        if (!img.createdAt) return false;
        const d = new Date(img.createdAt);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      }).length,
      unit: '장',
      icon: <CloudUploadIcon />,
      color: '#F5A0AA',
      iconBg: '#E8909A',
    },
    {
      label: '오늘 업로드',
      value: images.filter((img) => {
        if (!img.createdAt) return false;
        return new Date(img.createdAt).toDateString() === now.toDateString();
      }).length,
      unit: '장',
      icon: <TodayIcon />,
      color: '#F0EBE3',
      iconBg: '#C8102E',
    },
  ];

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* 좌측 사이드바 */}
      {!isMobile && (
        <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
      )}

      {/* 메인 영역 */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          minWidth: 0,
        }}
      >
        {/* 상단 바 */}
        <TopBar imageCount={images.length} />

        {/* 스크롤 가능한 콘텐츠 */}
        <Box sx={{ flex: 1, overflowY: 'auto', p: { xs: 2, md: 3 } }}>
          {/* 지표 카드 3열 */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            {stats.map((stat) => (
              <Grid size={{ xs: 12, sm: 4 }} key={stat.label}>
                <StatCard {...stat} />
              </Grid>
            ))}
          </Grid>

          {/* 이미지 업로더 */}
          <Box sx={{ mb: 3 }}>
            <ImageUploader onUploadSuccess={handleUploadSuccess} />
          </Box>

          {/* 이미지 갤러리 */}
          <ImageGallery
            images={images}
            isLoading={isLoading}
            onDelete={handleDelete}
            onRefresh={fetchImages}
          />
        </Box>
      </Box>

      {/* 우측 패널 (lg 이상에서만 표시) */}
      {!isTablet && (
        <RightPanel images={images} />
      )}

      {/* 알림 스낵바 */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default App;
