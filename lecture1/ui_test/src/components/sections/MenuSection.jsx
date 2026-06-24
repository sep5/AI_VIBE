import { useState } from 'react';
import {
  Box, Button, Menu, MenuItem, Typography, Divider, Chip,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

const MENU_ITEMS = [
  { label: '홈', icon: <HomeIcon fontSize="small" /> },
  { label: '프로필', icon: <PersonIcon fontSize="small" /> },
  { label: '즐겨찾기', icon: <FavoriteIcon fontSize="small" /> },
  { label: '알림', icon: <NotificationsIcon fontSize="small" /> },
  { label: '설정', icon: <SettingsIcon fontSize="small" /> },
  { label: '로그아웃', icon: <LogoutIcon fontSize="small" />, divider: true },
];

function MenuSection() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (label) => {
    setSelected(label);
    handleClose();
  };

  return (
    <Box component="section" sx={{ mb: 8 }}>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
        Menu
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
        버튼 클릭으로 메뉴 열기 · 아이콘 포함 MenuItem
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          onClick={handleOpen}
          aria-controls={open ? 'main-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          메뉴 열기
        </Button>

        {selected && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="text.secondary">선택됨:</Typography>
            <Chip label={selected} color="primary" size="small" />
          </Box>
        )}
      </Box>

      <Menu
        id="main-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{ paper: { sx: { minWidth: 180 } } }}
      >
        {MENU_ITEMS.map(({ label, icon, divider }) => [
          divider && <Divider key={`divider-${label}`} />,
          <MenuItem key={label} onClick={() => handleSelect(label)}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {icon}
              {label}
            </Box>
          </MenuItem>,
        ])}
      </Menu>

      <Divider sx={{ mt: 6 }} />
    </Box>
  );
}

export default MenuSection;
