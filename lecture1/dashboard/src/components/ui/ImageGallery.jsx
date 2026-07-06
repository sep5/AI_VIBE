/**
 * ImageGallery 컴포넌트
 *
 * Props:
 * @param {Array} images - 이미지 객체 배열 { name, url, createdAt } [Required]
 * @param {boolean} isLoading - 로딩 상태 [Required]
 * @param {function} onDelete - 삭제 핸들러 [Required]
 * @param {function} onRefresh - 새로고침 핸들러 [Required]
 *
 * Example usage:
 * <ImageGallery images={images} isLoading={false} onDelete={handleDelete} onRefresh={fetchImages} />
 */
import {
  Box,
  Grid,
  Typography,
  CircularProgress,
  IconButton,
  Tooltip,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import ImageIcon from '@mui/icons-material/Image';
import ImageCard from './ImageCard';

function ImageGallery({ images, isLoading, onDelete, onRefresh }) {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
        }}
      >
        <Typography variant='h6' fontWeight={600}>
          갤러리
          <Typography
            component='span'
            variant='body2'
            color='text.secondary'
            sx={{ ml: 1 }}
          >
            ({images.length}개)
          </Typography>
        </Typography>
        <Tooltip title='새로고침'>
          <span>
            <IconButton onClick={onRefresh} disabled={isLoading}>
              <RefreshIcon />
            </IconButton>
          </span>
        </Tooltip>
      </Box>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
          <CircularProgress />
        </Box>
      ) : images.length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 10,
            color: 'text.secondary',
          }}
        >
          <ImageIcon sx={{ fontSize: 64, mb: 2, opacity: 0.3 }} />
          <Typography variant='body1'>업로드된 이미지가 없습니다.</Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {images.map((img) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={img.name}>
              <ImageCard
                name={img.name}
                url={img.url}
                createdAt={img.createdAt}
                onDelete={onDelete}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default ImageGallery;
