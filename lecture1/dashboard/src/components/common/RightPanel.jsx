/**
 * RightPanel 컴포넌트 - 우측 280px 패널 (미니 캘린더 + 최근 업로드)
 *
 * Props:
 * @param {Array} images - 전체 이미지 배열 { name, url, createdAt } [Required]
 *
 * Example usage:
 * <RightPanel images={images} />
 */
import { useState } from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ImageIcon from '@mui/icons-material/Image';

const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

/**
 * MiniCalendar - 업로드가 있는 날짜에 점 표시하는 미니 달력
 *
 * Props:
 * @param {Set<string>} uploadDates - 업로드된 날짜들의 dateString Set [Required]
 */
function MiniCalendar({ uploadDates }) {
  const [current, setCurrent] = useState(new Date());
  const year = current.getFullYear();
  const month = current.getMonth();
  const today = new Date();

  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstDayOfWeek; i++) cells.push(null);
  for (let d = 1; d <= totalDays; d++) cells.push(d);

  const isToday = (day) =>
    day !== null &&
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const hasUpload = (day) => {
    if (day === null) return false;
    return uploadDates.has(new Date(year, month, day).toDateString());
  };

  const goPrev = () => setCurrent(new Date(year, month - 1, 1));
  const goNext = () => setCurrent(new Date(year, month + 1, 1));

  return (
    <Box>
      {/* 월 헤더 */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
        <IconButton size='small' onClick={goPrev} sx={{ color: '#6B5B52', '&:hover': { color: '#1A1A1A' } }}>
          <ChevronLeftIcon fontSize='small' />
        </IconButton>
        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', color: '#1A1A1A' }}>
          {year}년 {month + 1}월
        </Typography>
        <IconButton size='small' onClick={goNext} sx={{ color: '#6B5B52', '&:hover': { color: '#1A1A1A' } }}>
          <ChevronRightIcon fontSize='small' />
        </IconButton>
      </Box>

      {/* 요일 헤더 */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', mb: 0.5 }}>
        {WEEK_DAYS.map((d) => (
          <Box key={d} sx={{ textAlign: 'center', py: 0.25 }}>
            <Typography
              sx={{
                fontSize: '0.625rem',
                fontWeight: 600,
                color: '#6B5B52',
                letterSpacing: '0.06em',
              }}
            >
              {d}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* 날짜 셀 */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {cells.map((day, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: 0.25,
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: isToday(day) ? '#1A1A1A' : 'transparent',
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.72rem',
                  fontWeight: isToday(day) ? 700 : 400,
                  color: isToday(day) ? '#FFFFFF' : day ? '#1A1A1A' : 'transparent',
                  lineHeight: 1,
                }}
              >
                {day ?? ''}
              </Typography>
            </Box>
            {hasUpload(day) && (
              <Box
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  bgcolor: '#C8102E',
                  mt: '-3px',
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function RightPanel({ images }) {
  const uploadDates = new Set(
    images
      .map((img) => (img.createdAt ? new Date(img.createdAt).toDateString() : null))
      .filter(Boolean)
  );

  const recentImages = images.slice(0, 5);

  return (
    <Box
      sx={{
        width: 280,
        bgcolor: '#FFFFFF',
        borderLeft: '1px solid #DDD5CB',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      {/* TopBar 높이 맞춤 */}
      <Box
        sx={{
          height: 72,
          borderBottom: '1px solid #DDD5CB',
          display: 'flex',
          alignItems: 'center',
          px: 2.5,
          flexShrink: 0,
        }}
      >
        <Typography variant='h3' sx={{ fontWeight: 700, color: '#1A1A1A' }}>
          활동 현황
        </Typography>
      </Box>

      <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* 미니 캘린더 */}
        <MiniCalendar uploadDates={uploadDates} />

        {/* 구분선 */}
        <Box sx={{ height: 1, bgcolor: '#DDD5CB' }} />

        {/* 최근 업로드 */}
        <Box>
          <Typography variant='h3' sx={{ mb: 1.5, fontWeight: 700, color: '#1A1A1A' }}>
            최근 업로드
          </Typography>

          {recentImages.length === 0 ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4, gap: 1 }}>
              <ImageIcon sx={{ fontSize: 36, color: '#DDD5CB' }} />
              <Typography variant='caption' color='text.secondary' sx={{ textAlign: 'center' }}>
                업로드된 이미지가 없습니다.
              </Typography>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {recentImages.map((img) => (
                <Box
                  key={img.name}
                  onClick={() => window.open(img.url, '_blank')}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    p: 1,
                    borderRadius: 2,
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                    '&:hover': { bgcolor: '#F0EBE3' },
                  }}
                >
                  <Avatar
                    src={img.url}
                    variant='rounded'
                    sx={{ width: 40, height: 40, borderRadius: '10px', flexShrink: 0 }}
                  />
                  <Box sx={{ overflow: 'hidden', flex: 1 }}>
                    <Typography
                      noWrap
                      sx={{
                        fontWeight: 500,
                        color: '#1A1A1A',
                        fontSize: '0.75rem',
                        display: 'block',
                      }}
                    >
                      {img.name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: '0.65rem', color: '#6B5B52', display: 'block' }}
                    >
                      {img.createdAt
                        ? new Date(img.createdAt).toLocaleDateString('ko-KR')
                        : ''}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {/* 색상 범례 */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#C8102E' }} />
          <Typography variant='caption' color='text.secondary'>
            업로드 기록이 있는 날짜
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default RightPanel;
