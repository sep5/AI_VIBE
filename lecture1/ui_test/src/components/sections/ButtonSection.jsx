import { Box, Button, Typography, Divider } from '@mui/material';

const VARIANTS = ['contained', 'outlined', 'text'];
const COLORS = ['primary', 'secondary', 'error'];

function ButtonSection() {
  const handleClick = (variant, color) => {
    alert(`클릭됨 — variant: ${variant} / color: ${color}`);
  };

  return (
    <Box component="section" sx={{ mb: 8 }}>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
        Button
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
        variant × color 조합 (contained · outlined · text)
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {VARIANTS.map((variant) => (
          <Box key={variant}>
            <Typography
              variant="caption"
              sx={{ display: 'block', mb: 1.5, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}
            >
              {variant}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {COLORS.map((color) => (
                <Button
                  key={color}
                  variant={variant}
                  color={color}
                  onClick={() => handleClick(variant, color)}
                >
                  {color}
                </Button>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mt: 6 }} />
    </Box>
  );
}

export default ButtonSection;
