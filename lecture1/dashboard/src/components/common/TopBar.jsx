/**
 * TopBar 컴포넌트 - 상단 72px 탐색 바
 *
 * Props:
 * @param {number} imageCount - 전체 이미지 수 [Required]
 *
 * Example usage:
 * <TopBar imageCount={42} />
 */
import { Box, Typography, Avatar, Chip } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function TopBar({ imageCount }) {
  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Box
      sx={{
        height: 72,
        px: { xs: 2, md: 3 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: '#FFFFFF',
        borderBottom: '1px solid #DDD5CB',
        flexShrink: 0,
      }}
    >
      {/* 좌측 제목 */}
      <Box>
        <Typography variant='h2' sx={{ color: '#1A1A1A', lineHeight: 1.2 }}>
          이미지 갤러리
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.25 }}>
          <FiberManualRecordIcon sx={{ fontSize: 8, color: '#C8102E' }} />
          <Typography variant='caption' color='text.secondary'>
            {today} · 총 {imageCount}장
          </Typography>
        </Box>
      </Box>

      {/* 우측 프로필 */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Chip
          label='활성'
          size='small'
          sx={{
            bgcolor: 'rgba(200,16,46,0.08)',
            color: '#C8102E',
            fontWeight: 600,
            fontSize: '0.7rem',
            height: 24,
            border: '1px solid rgba(200,16,46,0.2)',
          }}
        />
        <Avatar
          sx={{
            width: 40,
            height: 40,
            bgcolor: '#1A1A1A',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          IG
        </Avatar>
      </Box>
    </Box>
  );
}

export default TopBar;
