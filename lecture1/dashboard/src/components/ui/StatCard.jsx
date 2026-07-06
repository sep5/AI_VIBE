/**
 * StatCard 컴포넌트 - 지표 카드
 *
 * Props:
 * @param {string} label - 지표 레이블 [Required]
 * @param {number} value - 지표 수치 [Required]
 * @param {string} unit - 단위 문자열 [Optional]
 * @param {ReactNode} icon - 아이콘 요소 [Required]
 * @param {string} color - 카드 배경 색상 [Required]
 * @param {string} iconBg - 아이콘 박스 배경 색상 [Required]
 *
 * Example usage:
 * <StatCard label="전체 이미지" value={42} unit="장" icon={<ImageIcon />} color="#A8C4D8" iconBg="#4A6FA5" />
 */
import { Box, Typography, Paper } from '@mui/material';

function StatCard({ label, value, unit, icon, color, iconBg }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        bgcolor: color,
        border: '1px solid rgba(0,0,0,0.06)',
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
        },
      }}
    >
      {/* 아이콘 */}
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: '12px',
          bgcolor: iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>

      {/* 수치 + 레이블 */}
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
          <Typography
            sx={{
              fontSize: '1.75rem',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: '#1A1A1A',
            }}
          >
            {value}
          </Typography>
          {unit && (
            <Typography
              sx={{
                fontSize: '0.8rem',
                fontWeight: 500,
                color: '#6B5B52',
              }}
            >
              {unit}
            </Typography>
          )}
        </Box>
        <Typography
          variant='caption'
          sx={{ color: '#6B5B52', fontWeight: 500, display: 'block', mt: 0.25 }}
        >
          {label}
        </Typography>
      </Box>
    </Paper>
  );
}

export default StatCard;
