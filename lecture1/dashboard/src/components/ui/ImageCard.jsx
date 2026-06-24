/**
 * ImageCard 컴포넌트
 *
 * Props:
 * @param {string} name - 파일명 [Required]
 * @param {string} url - 이미지 공개 URL [Required]
 * @param {string} createdAt - 업로드 시각 문자열 [Required]
 * @param {function} onDelete - 삭제 버튼 클릭 핸들러 [Required]
 *
 * Example usage:
 * <ImageCard name="photo.png" url="https://..." createdAt="2026-06-24" onDelete={handleDelete} />
 */
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Tooltip,
  Box,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';

function ImageCard({ name, url, createdAt, onDelete }) {
  const handleDownload = async () => {
    const res = await fetch(url);
    const blob = await res.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = name;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const dateLabel = createdAt
    ? new Date(createdAt).toLocaleDateString('ko-KR')
    : '';

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        transition: 'box-shadow 0.2s',
        '&:hover': { boxShadow: 6 },
      }}
    >
      <CardMedia
        component='img'
        image={url}
        alt={name}
        sx={{ height: 200, objectFit: 'cover', cursor: 'pointer' }}
        onClick={() => window.open(url, '_blank')}
      />
      <CardContent sx={{ pb: 0, flexGrow: 1 }}>
        <Tooltip title={name} placement='top'>
          <Typography
            variant='body2'
            fontWeight={500}
            noWrap
            sx={{ color: 'text.primary' }}
          >
            {name}
          </Typography>
        </Tooltip>
        <Box sx={{ mt: 0.5 }}>
          <Typography variant='caption' color='text.secondary'>
            {dateLabel}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', pt: 0 }}>
        <Tooltip title='다운로드'>
          <IconButton size='small' onClick={handleDownload} color='primary'>
            <DownloadIcon fontSize='small' />
          </IconButton>
        </Tooltip>
        <Tooltip title='삭제'>
          <IconButton size='small' onClick={() => onDelete(name)} color='error'>
            <DeleteIcon fontSize='small' />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default ImageCard;
