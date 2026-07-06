/**
 * Sidebar 컴포넌트 - 좌측 80px 아이콘 네비게이션
 *
 * Props:
 * @param {string} activeNav - 현재 활성 네비 아이템 ID [Required]
 * @param {function} onNavChange - 네비 변경 핸들러 [Required]
 *
 * Example usage:
 * <Sidebar activeNav="gallery" onNavChange={setActiveNav} />
 */
import { Box, Tooltip, IconButton, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CollectionsIcon from '@mui/icons-material/Collections';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SettingsIcon from '@mui/icons-material/Settings';

const NAV_ITEMS = [
  { id: 'dashboard', icon: <DashboardIcon />, label: '대시보드' },
  { id: 'gallery', icon: <CollectionsIcon />, label: '갤러리' },
  { id: 'upload', icon: <CloudUploadIcon />, label: '업로드' },
];

function Sidebar({ activeNav, onNavChange }) {
  return (
    <Box
      sx={{
        width: 80,
        minHeight: '100vh',
        bgcolor: '#1A1A1A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 3,
        gap: 0.5,
        flexShrink: 0,
        position: 'sticky',
        top: 0,
        height: '100vh',
      }}
    >
      {/* 로고 */}
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          bgcolor: '#C8102E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            color: '#FFFFFF',
            fontSize: '0.875rem',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '-0.02em',
          }}
        >
          IG
        </Typography>
      </Box>

      {/* 네비게이션 아이템 */}
      {NAV_ITEMS.map((item) => (
        <Tooltip key={item.id} title={item.label} placement='right'>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              py: 0.5,
            }}
          >
            {activeNav === item.id && (
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 4,
                  height: 32,
                  bgcolor: '#C8102E',
                  borderRadius: '0 4px 4px 0',
                }}
              />
            )}
            <IconButton
              onClick={() => onNavChange(item.id)}
              sx={{
                color: activeNav === item.id ? '#FFFFFF' : 'rgba(255,255,255,0.38)',
                bgcolor: activeNav === item.id ? 'rgba(200,16,46,0.18)' : 'transparent',
                borderRadius: '10px',
                width: 48,
                height: 48,
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.08)',
                  color: '#FFFFFF',
                },
              }}
            >
              {item.icon}
            </IconButton>
          </Box>
        </Tooltip>
      ))}

      {/* 하단 설정 */}
      <Box sx={{ mt: 'auto' }}>
        <Tooltip title='설정' placement='right'>
          <IconButton
            sx={{
              color: 'rgba(255,255,255,0.38)',
              borderRadius: '10px',
              width: 48,
              height: 48,
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.08)',
                color: '#FFFFFF',
              },
            }}
          >
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default Sidebar;
