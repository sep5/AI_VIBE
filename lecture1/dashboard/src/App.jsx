import { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Divider,
  Snackbar,
  Alert,
} from '@mui/material';
import CollectionsIcon from '@mui/icons-material/Collections';
import { supabase } from './lib/supabase';
import ImageUploader from './components/ui/ImageUploader';
import ImageGallery from './components/ui/ImageGallery';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
        const { data: urlData } = supabase.storage
          .from('images')
          .getPublicUrl(file.name);
        return {
          name: file.name,
          url: urlData.publicUrl,
          createdAt: file.created_at,
        };
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

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: 'grey.100' }}>
      <AppBar position='static' elevation={1}>
        <Toolbar>
          <CollectionsIcon sx={{ mr: 1 }} />
          <Typography variant='h6' fontWeight={700}>
            Image Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth='xl' sx={{ py: { xs: 3, md: 5 } }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant='h5' fontWeight={700} gutterBottom>
            이미지 업로드
          </Typography>
          <ImageUploader onUploadSuccess={handleUploadSuccess} />
        </Box>

        <Divider sx={{ mb: 4 }} />

        <ImageGallery
          images={images}
          isLoading={isLoading}
          onDelete={handleDelete}
          onRefresh={fetchImages}
        />
      </Container>

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
